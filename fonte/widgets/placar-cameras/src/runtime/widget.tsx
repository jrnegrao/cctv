// Placar das câmeras – GeoAPUC (v4: visual no padrão dos widgets dos DEVs — painel branco, cantos 4px, barra sólida, ícone Calcite)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.
import { React, type AllWidgetProps } from 'jimu-core'
import { CalciteIcon } from 'calcite-components'

const h = React.createElement
const { useState, useEffect, useCallback } = React

interface Estado {
  online: number
  offline: number
  ultima: number | null
  carregando: boolean
  erro: string | null
}

// paleta dos widgets dos DEVs + azul da casca homologada
const C = { marca: '#4463A9', verde: '#1F9D55', vermelho: '#D64545', texto: '#1F2937', texto2: '#4B5563', suave: '#6B7280', borda: '#E5E7EB', trilho: '#E5E7EB', fundo: '#FFFFFF' }
const FONTE = "Inter, 'Avenir Next', Roboto, Arial, sans-serif"

function dataHora (ms: number | null): string {
  if (!ms) return '—'
  const d = new Date(ms)
  return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

function mmss (seg: number): string {
  const m = Math.floor(seg / 60); const s = seg % 60
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

export default function Widget (props: AllWidgetProps<any>) {
  const cfg: any = props.config || {}
  const url: string = cfg.camadaUrl || 'https://geo.apucarana.pr.gov.br/server/rest/services/Hosted/Cameras_Apucarana/FeatureServer/0'
  const intervalo: number = Math.max(1, Number(cfg.intervaloMin) || 5) * 60

  const [st, setSt] = useState<Estado>({ online: 0, offline: 0, ultima: null, carregando: true, erro: null })
  const [faltam, setFaltam] = useState<number>(intervalo)

  const consulta = useCallback(() => {
    const q = `${url}/query?where=1%3D1&outFields=status,ultima_verificacao&returnGeometry=false&f=json&_=${Date.now()}`
    fetch(q).then(r => r.json()).then((j: any) => {
      if (j.error) throw new Error(j.error.message || 'erro na consulta')
      let on = 0; let off = 0; let ult = 0
      ;(j.features || []).forEach((f: any) => {
        const a = f.attributes || {}
        if (String(a.status).toLowerCase() === 'online') on++; else off++
        if (a.ultima_verificacao && a.ultima_verificacao > ult) ult = a.ultima_verificacao
      })
      setSt({ online: on, offline: off, ultima: ult || null, carregando: false, erro: null })
    }).catch((e: any) => {
      setSt(s => ({ ...s, carregando: false, erro: 'Sem conexão com o Portal' }))
      console.warn('[Placar das câmeras]', e)
    })
    setFaltam(intervalo)
  }, [url, intervalo])

  useEffect(() => { consulta() }, [consulta])
  useEffect(() => {
    const t = setInterval(() => {
      setFaltam(f => { if (f <= 1) { consulta(); return intervalo } return f - 1 })
    }, 1000)
    return () => clearInterval(t)
  }, [consulta, intervalo])

  const total = st.online + st.offline
  const pct = total ? Math.round(100 * st.online / total) : 0

  const caixa = (cor: string, valor: number, rotulo: string) =>
    h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 6 } },
      h('span', { style: { width: 9, height: 9, borderRadius: '50%', background: cor, display: 'inline-block', alignSelf: 'center' } }),
      h('span', { style: { fontSize: 20, fontWeight: 600, color: C.texto } }, st.carregando ? '…' : valor),
      h('span', { style: { fontSize: 13, color: C.texto2 } }, rotulo))

  return h('div', {
    className: 'jimu-widget placar-cameras',
    style: { width: '100%', height: '100%', boxSizing: 'border-box', padding: '10px 16px', background: C.fundo,
             border: `1px solid ${C.borda}`, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
             fontFamily: FONTE, overflow: 'hidden' }
  },
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' } },
    caixa(C.verde, st.online, 'online'),
    caixa(C.vermelho, st.offline, 'offline'),
    h('div', { style: { flex: 1, minWidth: 120, display: 'flex', alignItems: 'center', gap: 10 } },
      h('div', { style: { flex: 1, height: 8, background: C.trilho, borderRadius: 2, overflow: 'hidden' }, title: 'Disponibilidade da rede de câmeras' },
        h('div', { style: { width: `${pct}%`, height: '100%', borderRadius: 2, background: C.marca, transition: 'width .6s' } })),
      h('span', { style: { fontSize: 14, fontWeight: 600, color: C.texto, minWidth: 42, textAlign: 'right' } }, st.carregando ? '' : `${pct}%`))),
  h('div', { style: { fontSize: 12, color: st.erro ? C.vermelho : C.suave, display: 'flex', alignItems: 'center', gap: 6 } },
    st.erro ? h(CalciteIcon, { icon: 'exclamation-mark-triangle', scale: 's' }) : null,
    st.erro
      ? `${st.erro} · nova tentativa em ${mmss(faltam)}`
      : `Última verificação: ${dataHora(st.ultima)} · atualiza em ${mmss(faltam)}`))
}
