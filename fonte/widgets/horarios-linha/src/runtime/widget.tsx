// Horários da Linha – GeoAPUC (v9: ícone pin-tear nas saídas; visual no padrão dos widgets dos DEVs — Calcite, sem emojis/pílulas/selos)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.
import { React, getAppStore, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent } from 'jimu-arcgis'
import { CalciteButton, CalciteIcon, CalciteNotice, CalciteSwitch } from 'calcite-components'

const h = React.createElement
const { useState, useEffect } = React

// paleta dos widgets dos DEVs (hub) + azul da casca homologada
const C = {
  fundo: '#FFFFFF', fundo2: '#F5F7FA', borda: '#E5E7EB', texto: '#1F2937', texto2: '#4B5563', suave: '#6B7280',
  apagado: '#9CA3AF', marca: '#4463A9', ouro: '#F5C400'
}
const FONTE = "Inter, 'Avenir Next', Roboto, Arial, sans-serif"

function hhmm (v: any): string {
  const s = String(v ?? '').trim()
  const m = s.match(/^(\d{1,2}):(\d{2})/)
  return m ? `${m[1].padStart(2, '0')}:${m[2]}` : s
}
function minutos (v: string): number {
  const m = v.match(/^(\d{2}):(\d{2})/)
  return m ? Number(m[1]) * 60 + Number(m[2]) : -1
}
function chaveSentido (v: any): string {
  return String(v ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/sentido para/g, '').replace(/[^a-z0-9]/g, '')
}
function aspas (v: any): string { return String(v ?? '').replace(/'/g, "''") }

async function consultar (url: string, where: string, campos: string): Promise<any[]> {
  const q = `${url}/query?where=${encodeURIComponent(where)}&outFields=${campos}&returnGeometry=false&f=json`
  const j: any = await fetch(q).then(r => r.json())
  if (j.error) throw new Error(j.error.message || 'erro na consulta')
  return (j.features || []).map((f: any) => f.attributes || {})
}
async function contar (url: string, where: string): Promise<number> {
  const q = `${url}/query?where=${encodeURIComponent(where)}&returnCountOnly=true&f=json`
  const j: any = await fetch(q).then(r => r.json())
  if (j.error) throw new Error(j.error.message || 'erro na contagem')
  return Number(j.count || 0)
}

export default function Widget (props: AllWidgetProps<any>) {
  const cfg: any = props.config || {}
  const dsId: string = cfg.dataSourceId || 'dataSource_1-linhas_onibus'
  const urlLin: string = cfg.linhasUrl
  const urlHor: string = cfg.horariosUrl
  const urlPar: string = cfg.paradasUrl
  const idCamadaParadas: string = cfg.paradasLayerId || 'paradas_onibus'
  const mbBase: string = cfg.mobilibusUrl || 'https://editor.mobilibus.com/web/detalhes-linha/4abp9'
  const mbCod: any = cfg.mobilibusLinhas || {}
  const linkTempoReal = (cod: any): string => {
    const c = mbCod[String(cod ?? '').trim()]
    return c ? `${mbBase}#${c}` : mbBase
  }

  // ---- linha selecionada na lista (estado do app) ----
  const lerSelecao = (): string | null => {
    try {
      const inf: any = (getAppStore().getState() as any)?.dataSourcesInfo || {}
      for (const k of Object.keys(inf)) {
        if (k === dsId || k.startsWith(dsId + '-')) {
          const ids = inf[k]?.selectedIds
          if (ids && ids.length) return String(ids[0])
        }
      }
    } catch (e) { console.warn('[Horários da Linha] seleção', e) }
    return null
  }
  const [oid, setOid] = useState<string | null>(lerSelecao())
  useEffect(() => {
    const store: any = getAppStore()
    const desfazer = store.subscribe(() => {
      const novo = lerSelecao()
      setOid(atual => (atual === novo ? atual : novo))
    })
    return () => { try { desfazer() } catch (e) {} }
  }, [dsId])

  const [linha, setLinha] = useState<any>(null)
  const [hor, setHor] = useState<any[]>([])
  const [planoB, setPlanoB] = useState<boolean>(false)
  const [carregando, setCarregando] = useState<boolean>(false)
  const [erro, setErro] = useState<string | null>(null)
  const [agora, setAgora] = useState<Date>(new Date())
  useEffect(() => { const t = setInterval(() => setAgora(new Date()), 60000); return () => clearInterval(t) }, [])

  // ---- paradas (camada Mobilibus, filtro pelo campo 'viagens') ----
  const [jmv, setJmv] = useState<any>(null)
  const [mostrar, setMostrar] = useState<boolean>(!!cfg.paradasLigadoAoAbrir)
  const [nParadas, setNParadas] = useState<number | null>(null)
  useEffect(() => {
    const v: any = jmv?.view
    if (!v || !urlPar) return
    const lyr: any = v.map.allLayers.find((l: any) => l.id === idCamadaParadas)
    if (!lyr) { console.warn('[Horários da Linha] camada de paradas não encontrada:', idCamadaParadas); return }
    let vivo = true
    if (!mostrar) { lyr.visible = false; setNParadas(null); return }
    ;(async () => {
      try {
        if (!oid) { lyr.definitionExpression = '1=0'; lyr.visible = true; if (vivo) setNParadas(0); return }
        const l = (await consultar(urlLin, `objectid=${Number(oid)}`, 'cod_linha,sentido'))[0] || {}
        const cod = String(l.cod_linha ?? '').trim()
        let where = `viagens LIKE '%;${aspas(cod + ':' + chaveSentido(l.sentido))};%'`
        let n = await contar(urlPar, where)
        if (!n) { where = `linhas LIKE '%,${aspas(cod)},%'`; n = await contar(urlPar, where) }
        if (!vivo) return
        lyr.definitionExpression = n ? where : '1=0'
        lyr.visible = true
        setNParadas(n)
      } catch (e) {
        console.warn('[Horários da Linha] paradas', e)
        if (vivo) setNParadas(null)
      }
    })()
    return () => { vivo = false }
  }, [jmv, mostrar, oid, urlPar, urlLin, idCamadaParadas])

  // nome da parada ao passar o mouse (ou tocar)
  useEffect(() => {
    const v: any = jmv?.view
    if (!v) return
    const lyr: any = v.map.allLayers.find((l: any) => l.id === idCamadaParadas)
    if (!lyr) return
    try { lyr.outFields = ['nome'] } catch (e) {}
    const dica = document.createElement('div')
    Object.assign(dica.style, { position: 'absolute', display: 'none', pointerEvents: 'none', zIndex: '99', maxWidth: '260px',
      background: '#FFFFFF', color: C.texto, border: `1px solid ${C.borda}`, borderRadius: '4px', padding: '4px 8px',
      fontSize: '12px', fontWeight: '500', fontFamily: FONTE, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' })
    v.container.appendChild(dica)
    let ocupado = false
    const mostrarDica = (ev: any) => {
      if (ocupado || !lyr.visible) { if (!lyr.visible) dica.style.display = 'none'; return }
      ocupado = true
      v.hitTest(ev, { include: [lyr] }).then((res: any) => {
        ocupado = false
        const g = (res?.results || []).find((r: any) => r.graphic?.layer?.id === idCamadaParadas)?.graphic
        if (g) {
          dica.textContent = 'Parada: ' + (g.attributes?.nome || 'sem nome')
          dica.style.left = (ev.x + 14) + 'px'; dica.style.top = (ev.y + 14) + 'px'; dica.style.display = 'block'
          v.container.style.cursor = 'pointer'
        } else { dica.style.display = 'none'; v.container.style.cursor = '' }
      }).catch(() => { ocupado = false })
    }
    const h1 = v.on('pointer-move', mostrarDica)
    const h2 = v.on('click', mostrarDica)
    const h3 = v.on('pointer-leave', () => { dica.style.display = 'none' })
    return () => { try { h1.remove(); h2.remove(); h3.remove(); dica.remove() } catch (e) {} }
  }, [jmv, idCamadaParadas])

  // ---- horários da linha ----
  useEffect(() => {
    let vivo = true
    if (!oid) { setLinha(null); setHor([]); return }
    setCarregando(true); setErro(null)
    ;(async () => {
      try {
        const l = (await consultar(urlLin, `objectid=${Number(oid)}`, 'objectid,id_rota,cod_linha,nome,sentido'))[0]
        if (!l) throw new Error('linha não encontrada')
        let rows = await consultar(urlHor, `id_rota='${aspas(l.id_rota)}'`, 'id_rota,ponto,horario,sentido,observacao')
        let b = false
        if (!rows.length) {
          const cod = String(l.id_rota || '').split('_')[0]
          rows = (await consultar(urlHor, `id_rota LIKE '${aspas(cod)}%'`, 'id_rota,ponto,horario,sentido,observacao'))
            .filter((r: any) => String(r.id_rota || '').startsWith(cod + '_'))
          b = rows.length > 0
        }
        rows.forEach((r: any) => { r._h = hhmm(r.horario); r._m = minutos(r._h) })
        rows.sort((a: any, z: any) => a._m - z._m)
        if (vivo) { setLinha(l); setHor(rows); setPlanoB(b); setCarregando(false) }
      } catch (e: any) {
        console.warn('[Horários da Linha]', e)
        if (vivo) { setErro('Não foi possível carregar os horários.'); setCarregando(false) }
      }
    })()
    return () => { vivo = false }
  }, [oid, urlLin, urlHor])

  // ---- peças visuais ----
  const mapaId: any = (props as any).useMapWidgetIds?.[0]
  const conector = mapaId ? h(JimuMapViewComponent as any, { useMapWidgetId: mapaId, onActiveViewChange: (v: any) => setJmv(v) }) : null
  const icone = (nome: string, cor: string = C.suave, escala: string = 's') =>
    h(CalciteIcon as any, { icon: nome, scale: escala, style: { color: cor, flex: 'none' } })
  const rotulo = (txt: string) => h('div', { style: { fontSize: 11, fontWeight: 500, letterSpacing: 0.3, color: C.suave, textTransform: 'uppercase' } }, txt)
  const aviso = (kind: string, ic: string, titulo: string | null, msg: any, link: any = null) =>
    h(CalciteNotice as any, { open: true, kind, icon: ic, scale: 's', width: 'full' },
      titulo ? h('div', { slot: 'title' }, titulo) : null,
      h('div', { slot: 'message' }, msg),
      link ? h('div', { slot: 'link' }, link) : null)

  const cabecalho = h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 } },
    h('div', { style: { fontSize: 15, fontWeight: 600, color: C.texto } }, 'Tabela de horários'),
    h('label', { style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.texto2, cursor: 'pointer', userSelect: 'none' },
                 title: 'Mostrar no mapa só as paradas da linha selecionada' },
      h('span', null, 'Paradas' + (mostrar && nParadas !== null ? ` (${nParadas})` : '')),
      h(CalciteSwitch as any, { scale: 's', checked: mostrar, onCalciteSwitchChange: (e: any) => setMostrar(!!e?.target?.checked) })))

  const caixa = (filhos: any[]) => h('div', {
    className: 'jimu-widget horarios-linha',
    style: { width: '100%', height: '100%', boxSizing: 'border-box', background: C.fundo, color: C.texto, borderRadius: 8,
             border: `1px solid ${C.borda}`, padding: 14, overflowY: 'auto', fontFamily: FONTE,
             display: 'flex', flexDirection: 'column', gap: 12 }
  }, conector, cabecalho, ...filhos)

  const botaoTempoReal = (cod: any, appearance: string = 'solid') => h(CalciteButton as any, {
    href: linkTempoReal(cod), target: '_blank', rel: 'noopener noreferrer', kind: 'brand', appearance, scale: 'm', width: 'full',
    iconStart: 'bus', iconEnd: 'launch'
  }, cod ? `Ônibus da linha ${cod} em tempo real` : 'Ônibus em tempo real')

  const ligarParadas = h(CalciteButton as any, { appearance: 'transparent', kind: 'brand', scale: 's', iconStart: 'pin-tear',
    onClick: () => setMostrar(true) }, 'Mostrar paradas')

  if (!oid) {
    return caixa([
      h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 8px', textAlign: 'center' } },
        icone('bus', C.apagado, 'l'),
        h('div', { style: { fontSize: 14, color: C.texto2 } }, 'Selecione uma linha na lista para ver os horários.')),
      botaoTempoReal(null, 'outline'),
      aviso('brand', 'lightbulb', null, 'Depois de escolher a linha, ligue “Paradas” para ver no mapa os pontos de ônibus dela.')
    ])
  }
  if (carregando) return caixa([h('div', { style: { margin: 'auto', color: C.suave, fontSize: 13 } }, 'Carregando horários…')])
  if (erro || !linha) return caixa([aviso('danger', 'exclamation-mark-triangle', null, erro || 'Linha não encontrada.')])

  try {
    const dow = agora.getDay()
    const diaUtil = dow >= 1 && dow <= 5
    const minAgora = agora.getHours() * 60 + agora.getMinutes()
    const proxima = diaUtil ? hor.find((r: any) => r._m >= minAgora) : null
    const destaque: string = proxima ? proxima._h : (hor[0]?._h || '—')
    let sub = ''
    if (!hor.length) sub = 'Sem horários na base da Prefeitura'
    else if (!diaUtil) sub = 'Fim de semana · primeira saída em dia útil'
    else if (proxima) { const d = proxima._m - minAgora; sub = d === 0 ? 'Saindo agora' : `Próxima saída · em ${d >= 60 ? Math.floor(d / 60) + ' h ' : ''}${d % 60} min` }
    else sub = 'Sem mais saídas hoje · primeira amanhã'

    const grupos: any = {}
    hor.forEach((r: any) => {
      const k = (planoB ? (r.sentido || 'Outro sentido') + ' · ' : '') + (r.ponto || '—')
      ;(grupos[k] = grupos[k] || []).push(r)
    })
    const obs = Array.from(new Set(hor.map((r: any) => String(r.observacao || '').trim()).filter((x: string) => x && x !== '-')))

    return caixa([
      // linha
      h('div', { style: { borderBottom: `1px solid ${C.borda}`, paddingBottom: 10 } },
        h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8 } },
          h('span', { style: { fontSize: 20, fontWeight: 700, color: C.marca } }, String(linha.cod_linha ?? '')),
          h('span', { style: { fontSize: 16, fontWeight: 600, color: C.texto, lineHeight: 1.25 } }, linha.nome || '')),
        h('div', { style: { fontSize: 12, color: C.suave, marginTop: 2 } }, `Sentido ${linha.sentido || '—'} · dias úteis`)),
      botaoTempoReal(linha.cod_linha),
      !mostrar ? aviso('brand', 'lightbulb', null,
        `Veja no mapa as paradas da linha ${linha.cod_linha} neste sentido. Passe o mouse sobre uma parada para ver o nome.`, ligarParadas) : null,
      // próxima saída
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, background: C.fundo2, borderRadius: 8,
                          borderLeft: `3px solid ${C.ouro}`, padding: '10px 12px' } },
        icone('clock', C.marca, 'm'),
        h('div', null, rotulo(sub || 'Horário'),
          h('div', { style: { fontSize: 28, fontWeight: 700, lineHeight: 1.1, color: C.texto, fontVariantNumeric: 'tabular-nums' } }, destaque))),
      planoB ? aviso('warning', 'information', null,
        `Este sentido não tem horários próprios. Abaixo, as saídas da linha ${linha.cod_linha} nos outros sentidos.`) : null,
      // todos os horários
      ...Object.keys(grupos).map((k: string) => h('div', { key: k, style: { display: 'flex', flexDirection: 'column', gap: 6 } },
        h('div', { style: { display: 'flex', alignItems: 'center', gap: 4 } }, icone('pin-tear', C.suave, 's'), rotulo('Saída: ' + k)),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 4 } },
          ...grupos[k].map((r: any, i: number) => {
            const passou = diaUtil && r._m < minAgora
            const ehProx = proxima && r === proxima
            return h('span', { key: i, style: { padding: '3px 8px', borderRadius: 4, fontSize: 13, fontVariantNumeric: 'tabular-nums',
              border: `1px solid ${ehProx ? C.ouro : C.borda}`, background: ehProx ? C.ouro : C.fundo,
              color: passou ? C.apagado : C.texto, fontWeight: ehProx ? 700 : 500 } }, r._h)
          })))),
      obs.length ? h('div', null, rotulo('Observação'), h('div', { style: { fontSize: 12, color: C.texto2 } }, obs.join(' · '))) : null,
      h('div', { style: { fontSize: 11, color: C.apagado, marginTop: 'auto' } }, `${hor.length} horários · fonte: setor de transportes`)
    ])
  } catch (e: any) {
    console.error('[Horários da Linha]', e)
    return caixa([aviso('danger', 'exclamation-mark-triangle', null, 'Erro no widget: ' + String(e?.message || e))])
  }
}
