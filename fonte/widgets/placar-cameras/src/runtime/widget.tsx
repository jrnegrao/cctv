// Placar das câmeras – GeoAPUC (v3: barra em gradiente azul)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.
import { React, type AllWidgetProps } from 'jimu-core'

const h = React.createElement
const { useState, useEffect, useCallback } = React

interface Estado {
  online: number
  offline: number
  ultima: number | null
  carregando: boolean
  erro: string | null
}

const CORES = { azul: '#4463a9', verde: '#1f9d55', vermelho: '#d64545', texto: '#1b2a4a', suave: '#6b7690', fundo: '#ffffff', trilho: 'rgba(27,42,74,0.14)' }

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
  const opac: number = Math.min(1, Math.max(0.3, Number(cfg.opacidadeFundo) || 0.7))   // 0,3 a 1 (1 = branco sólido)

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
      h('span', { style: { width: 10, height: 10, borderRadius: '50%', background: cor, display: 'inline-block', alignSelf: 'center' } }),
      h('span', { style: { fontSize: 22, fontWeight: 700, color: CORES.texto } }, st.carregando ? '…' : valor),
      h('span', { style: { fontSize: 13, color: CORES.suave } }, rotulo))

  return h('div', {
    className: 'jimu-widget placar-cameras',
    style: { width: '100%', height: '100%', boxSizing: 'border-box', padding: '10px 16px',
             background: `rgba(255,255,255,${opac})`, backdropFilter: 'blur(6px) saturate(140%)', WebkitBackdropFilter: 'blur(6px) saturate(140%)',
             border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 4px 18px rgba(16,32,64,0.18)', borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
             fontFamily: 'inherit', overflow: 'hidden' }
  },
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' } },
    caixa(CORES.verde, st.online, 'online'),
    caixa(CORES.vermelho, st.offline, 'offline'),
    h('div', { style: { flex: 1, minWidth: 120, display: 'flex', alignItems: 'center', gap: 10 } },
      h('div', { style: { flex: 1, height: 10, background: CORES.trilho, borderRadius: 999, overflow: 'hidden' }, title: 'Disponibilidade da rede de câmeras' },
        h('div', { style: { width: `${pct}%`, height: '100%', borderRadius: 999, transition: 'width .6s',
                            // gradiente do azul claro ao azul GeoAPUC; o degradê é "esticado" na barra inteira,
                            // então a cor na ponta mostra o quanto da rede está no ar (100% = azul cheio)
                            background: 'linear-gradient(90deg, #b9d0f6 0%, #6f8fd0 55%, #2f4a86 100%)',
                            backgroundSize: pct > 0 ? `${(100 / pct) * 100}% 100%` : '100% 100%' } })),
      h('span', { style: { fontSize: 15, fontWeight: 700, color: CORES.texto, minWidth: 42, textAlign: 'right' } }, st.carregando ? '' : `${pct}%`))),
  h('div', { style: { fontSize: 12, color: st.erro ? CORES.vermelho : CORES.suave } },
    st.erro
      ? `⚠ ${st.erro} · nova tentativa em ${mmss(faltam)}`
      : `Última verificação: ${dataHora(st.ultima)} · atualiza em ${mmss(faltam)}`))
}
