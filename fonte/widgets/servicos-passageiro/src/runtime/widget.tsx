// Serviços ao Passageiro – GeoAPUC (v2: ícone pin-tear; padrão visual dos widgets dos DEVs — Calcite)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.
import { React, type AllWidgetProps } from 'jimu-core'
import { CalciteButton, CalciteIcon } from 'calcite-components'

const h = React.createElement
const C = { fundo: '#FFFFFF', borda: '#E5E7EB', texto: '#1F2937', texto2: '#4B5563', marca: '#4463A9' }
const FONTE = "Inter, 'Avenir Next', Roboto, Arial, sans-serif"

export default function Widget (props: AllWidgetProps<any>) {
  const cfg: any = props.config || {}
  const botao = (txt: string, url: string, ic: string, fimExterno = true) => h(CalciteButton as any, {
    href: url, target: '_blank', rel: 'noopener noreferrer', appearance: 'outline', kind: 'brand', scale: 's', width: 'full',
    iconStart: ic, iconEnd: fimExterno ? 'launch' : undefined
  }, txt)
  const secao = (ic: string, titulo: string, texto: any, botoes: any[] = [], ultima = false) => h('div', {
    style: { display: 'flex', gap: 10, padding: '10px 0', borderBottom: ultima ? 'none' : `1px solid ${C.borda}` }
  },
    h(CalciteIcon as any, { icon: ic, scale: 'm', style: { color: C.marca, flex: 'none', marginTop: 1 } }),
    h('div', { style: { display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, flex: 1 } },
      h('div', { style: { fontSize: 13, fontWeight: 600, color: C.texto } }, titulo),
      h('div', { style: { fontSize: 12, color: C.texto2, lineHeight: 1.4 } }, texto),
      botoes.length ? h('div', { style: { display: 'grid', gridTemplateColumns: `repeat(${botoes.length}, 1fr)`, gap: 6 } }, ...botoes) : null))

  return h('div', {
    className: 'jimu-widget servicos-passageiro',
    style: { width: '100%', height: '100%', boxSizing: 'border-box', background: C.fundo, borderRadius: 8, border: `1px solid ${C.borda}`,
             padding: '12px 14px', overflowY: 'auto', fontFamily: FONTE, color: C.texto }
  },
    h('div', { style: { fontSize: 15, fontWeight: 600, color: C.texto, marginBottom: 2 } }, 'Serviços ao passageiro'),
    secao('route-to', 'Apucarana Integrada',
      'Pague uma passagem e troque de linha em qualquer ponto da cidade, sem passar pelo Terminal, usando o Cartão Passe Fácil ou o app BiPay.'),
    secao('mobile', 'App Vou de Ônibus Apucarana', 'Horários, mapa da linha e previsão de chegada no celular.',
      [botao('Google Play', cfg.urlGooglePlay, 'download', false), botao('App Store', cfg.urlAppStore, 'download', false)]),
    secao('credit-card', 'Tarifas, cartão e recarga', 'A 1ª via do Passe Fácil é gratuita na VAL, ao lado do Terminal Urbano.',
      [botao('Tarifas', cfg.urlTarifas, 'tag'), botao('Lojas e recarga', cfg.urlLojas, 'pin-tear')], true))
}
