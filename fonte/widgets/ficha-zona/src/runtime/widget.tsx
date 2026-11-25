// Ficha da Zona – GeoAPUC (v5: aba Consultar zona + Onde posso…? com busca por atividade do Anexo I, cor oficial no destaque, Todas as zonas, Limpar tudo)
// Clique no mapa → zona do ponto → ficha com usos, ocupação e lote mínimo (tabela zoneamento_apucarana_completo).
// Escrito sem JSX (React.createElement), no mesmo padrão do Placar das câmeras.
import { React, type AllWidgetProps, DataSourceManager } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import Graphic from 'esri/Graphic'
import GraphicsLayer from 'esri/layers/GraphicsLayer'

const h = React.createElement
const { useState, useEffect, useRef, useCallback } = React

const C = { azul: '#4463a9', azulClaro: '#e8ecf7', texto: '#1b2a4a', suave: '#6b7690', borda: '#dde2ec', fundo: '#f5f7fb',
  verde: '#1d9e75', verdeBg: '#e3f5ee', amarelo: '#b7790b', amareloBg: '#fcf1d8', cinza: '#8a90a0' }

// Anexo I da LC 8/2020 — códigos e atividades listadas (para o modo "Onde posso…?")
const ATIV: Array<{ c: string, n: string, d: string, i: string[] }> = [{"c": "H1", "n": "Unifamiliar", "d": "corresponde a uma única unidade habitacional por lote, destinada à moradia de uma só família", "i": []}, {"c": "H2", "n": "Unifamiliar Geminada", "d": "corresponde a duas unidades residenciais autônomas, agrupadas horizontalmente", "i": []}, {"c": "H3", "n": "Unifamiliar em Série", "d": "edificação com mais de uma unidade residencial autônoma, agrupadas horizontalmente, paralelas ao alinhamento predial", "i": []}, {"c": "H4", "n": "Multifamiliar", "d": "edificação que comporta mais de uma unidade residencial autônoma, agrupadas verticalmente com áreas de circulação internas comuns à edificação e acesso ao logradouro público", "i": []}, {"c": "H5", "n": "Uso Institucional", "d": "edificação destinada à assistência social, abrigando estudante, crianças, idosos e necessitados, tais como: albergue, alojamento estudantil, casa do estudante, asilo, convento, seminário, internato e orfanato", "i": []}, {"c": "H6", "n": "Transitória 1", "d": "edificação destinada à habitação de uso transitório do tipo hotel", "i": []}, {"c": "H7", "n": "Transitória 2", "d": "edificação destinada ao uso transitório do tipo motel", "i": []}, {"c": "CV-A", "n": "Comércio", "d": "", "i": ["Endereços comerciais", "Referências Fiscais"]}, {"c": "SV-A", "n": "Serviço", "d": "", "i": ["Atividades Profissionais não incomodas, exercidas individualmente na própria residência", "Estabelecimentos de saúde, de ensino infantil e creches."]}, {"c": "CV-B", "n": "Comércio", "d": "", "i": ["Açougues", "Agropecuária", "Alfaiataria", "Ateliês", "Bancas de Revistas", "Bijuterias", "Cafés", "Confeitaria", "Doceria", "Farmácia", "Floricultura", "Livraria", "Lojas de Armarinhos", "Lojas de Calçados", "Lojas de Confecções e Acessórios", "Mercearias", "Padarias", "Papelarias", "Pet Shop", "Sapatarias", "Sorveteria"]}, {"c": "SV-B", "n": "Serviço", "d": "", "i": ["Atelier de Profissionais Autônomos", "Barbearias", "Chaveiros", "Costura", "Salão de Beleza"]}, {"c": "CV-C", "n": "Comércio", "d": "", "i": ["Bares", "Conveniência", "Estabelecimentos de revenda de gás (Classe I, até 520 kg equivalente a 40 botijões de 13 kg)", "Lanchonetes", "Minimercados", "Pastelarias"]}, {"c": "SV-C", "n": "Serviço", "d": "", "i": ["Acabamentos em fio", "Academia de Dança", "Academia de Ginástica", "Bordados e Acabamentos", "Canis Residenciais", "Consultório Odontológico", "Consultório Veterinário", "Correios e Telégrafos", "Escritório de Prestação de Serviços", "Estabelecimentos de ensino fundamental, médio e profissionalizante", "Estamparia", "Oficina de Eletrodomésticos", "Templos de Culto Religioso"]}, {"c": "SV-D", "n": "Serviço", "d": "", "i": ["Sociedades recreativas", "Estâncias", "Pousadas e Correlatos", "Chácaras de Lazer", "Atividades hortifrutigranjeiras não poluentes"]}, {"c": "CC-A", "n": "Comércio", "d": "", "i": ["Bicicletaria", "Comércio de equipamentos e suprimentos de informática", "Comércio de Plantas", "Copiadoras", "Galerias Comerciais", "Loja de Acessório Esportivo", "Loja de Eletroeletrônicos", "Loja de Embalagens e Artigos para Festas", "Loja de Materiais de Construção sem depósito de materiais a granel", "Loja de Produtos Agropecuários", "Loja de Produtos Naturais", "Loja de Souvenirs e Artesanato", "Loja de Tecidos", "Loja de Utensílios Domésticos", "Lojas de Eletrodomésticos", "Lojas de Móveis", "Mercados", "Peixarias", "Pizzaria", "Restaurantes", "Revenda de Motocicletas Novas e Usadas", "Revenda de Veículos Usados", "Supermercados", "Estabelecimentos de revenda de gás (Classe II, até 1.560 kg equivalente a 120 botijões de 13 kg)"]}, {"c": "SC-A", "n": "Serviço", "d": "", "i": ["Agência de Publicidade", "Agência de Viagens e Turismo", "Agências Bancárias", "Atividades Recreativas", "Auto Escola", "Borracharia", "Clínica de Estética", "Lavanderias Domésticas", "Locação de Roupas", "Lotéricas", "Oficinas Mecânicas", "Postos Assistenciais", "Postos de Abastecimento e Serviços", "Serviços de Jardinagem", "Serviços de Lavagem de Veículos"]}, {"c": "CC-B", "n": "Comércio", "d": "", "i": ["Antiquários", "Centros Comerciais", "Galerias de Arte", "Joalherias", "Loja de Artigo de Decoração", "Loja de Departamentos", "Loja de Persianas e Cortinas", "Relojoaria"]}, {"c": "SC-B", "n": "Serviço", "d": "", "i": ["Agência de Emprego", "Ambulatórios", "Auditórios de Teatro e Televisão", "Casas de Câmbio", "Casas de Espetáculos", "Casas de Saúde", "Cinemas", "Clínicas Médicas", "Consultórios Médicos", "Despachante de Veículos", "Edifícios Garagem", "Grandes Escritórios de Prestação de Serviços", "Hospitais", "Laboratórios de Análises Clínicas", "Laboratórios Radiológicos", "Maternidade", "Museus", "Sanatórios", "Saunas", "Serviços", "Teatros"]}, {"c": "CC-C", "n": "Comércio", "d": "", "i": ["Comércio de Materiais e Produtos de Limpeza", "Concessionárias de Veículos", "Hipermercados", "Loja de Acessório para Móveis", "Loja de Acessórios para Veículos", "Loja de Ferramentas", "Loja de Materiais Elétricos", "Loja de Tintas e Materiais para Pinturas", "Shoppings Center"]}, {"c": "SC-C", "n": "Serviço", "d": "", "i": ["Agência de Correios e Telégrafos", "Albergues", "Boates", "Buffet (salão)", "Clubes", "Estabelecimento de Ensino Superior", "Locação de Automóveis", "Sociedades Recreativas", "Depósitos de Bebidas"]}, {"c": "CS-A", "n": "Comércio", "d": "", "i": ["Comércio Atacadista", "Comércio de Equipamentos Pesados", "Comércio de Materiais de construção com Depósitos", "Loja de Ferragens", "Marcenarias", "Marmorarias", "Posto de Venda de Gás Classe II (capacidade de armazenamento até 1.560 kg de GLP ou 120 botijões)", "Revendedoras de Máquinas", "Serralherias"]}, {"c": "SS-A", "n": "Serviço", "d": "", "i": ["Armazéns Gerais", "Campos Desportivos", "Depósito de Caçambas", "Depósitos", "Editora", "Garagens de Veículos Pesados", "Oficinas de Funilaria e Pintura", "Oficinas de Veículos Pesados", "Transportadoras"]}, {"c": "I-A", "n": "Industrial A", "d": "caracterizada por atividades industriais de pequeno porte, cujo processo produtivo seja complementar e compatível com o meio urbano, não ocasionando inconveniente à saúde, bem estar e segurança das áreas vizinhas ou não gerando tráfego.", "i": ["artigos de passamanaria, fitas, filós, rendas e bordados", "Confecção de peças do vestuário", "estruturas de madeira e artigos de carpintaria", "fabricação de balas e doces caseiros", "micro cervejaria", "produtos de perfumaria e velas", "porte familiar não incômoda", "todas as atividades da indústria editorial e gráfica; e atividades similares"]}, {"c": "I-B", "n": "Industrial B", "d": "caracterizada por atividades industriais de médio porte, cujo processo produtivo envolva geração de tráfego ou ruído e exija localização específica.", "i": ["artefatos diversos de couros e peles (exceto calçados, artigos de vestuário e selaria)", "artefatos e móveis de bambu, vime, junco, ou palha trançada (exceto móveis e chapéus)", "artefatos e móveis de madeira torneada", "fabricação de calçados", "artigos diversos de material plástico, fitas, brindes, objetos de adornos", "confecções de roupas e artefatos de tecido", "fabricação de peças, ornatos e estruturas de gesso", "fabricação e engarrafamento de bebidas", "industrialização de produtos de origem animal", "industrialização de produtos de origem vegetal", "reparação de máquinas ou manutenção de máquinas, aparelhos, equipamentos e veículos", "serviço industrial de usinagem, soldas e semelhantes; e atividades similares"]}, {"c": "I-C", "n": "Industrial C", "d": "caracterizada pela indústria de grande porte e atividades incômodas ou nocivas, envolvendo transformação de produtos agrícolas, ou indústrias cujos processos devam ser submetidos a métodos adequados de controle e tratamento de seus efluentes, estando sujeita à aprovação de órgãos estaduais para sua instalação no Município.", "i": ["acabamento de fios e tecidos, não processado em fiações e tecelagens", "acabamento de superfícies (jateamento)", "aparelhamento de pedras para construção e execução de trabalhos em mármores, ardósia, granito e outras pedras", "artefatos de papel não associada à produção de papel", "artefatos de papelão, cartolina e cartão, impressos ou não simples ou plastificados, artificiais e sintéticas", "beneficiamento de borracha natural", "beneficiamento e preparação de carvão mineral não associado à extração", "beneficiamento, fiação e tecelagem de fibras têxteis vegetais e de origem animal", "beneficiamento, moagem, torrefação e fabricação de produtos alimentares", "concentrados aromáticos naturais, artificiais e sintéticos, inclusive mescla", "desdobramento de madeiras (exceto serrarias)", "elaboração de produtos diversos de minerais não metálicos", "fabricação de artefatos de borracha (peças e acessórios para veículos, máquinas e aparelhos, correias, canos, tubos, artigos para uso doméstico, galochas e botas), exceto artigos de vestuário", "fabricação de artigos de metal sem tratamento químico superficial e/ou galvanotécnico e/ou pintura por aspersão e/ou aplicação de verniz e/ou esmaltação", "fabricação de artigos de metal, não especificados ou não classificados, com tratamento químico superficial e/ou galvanotécnico e/ou pintura por aspersão e/ou aplicação de verniz e/ou esmaltação", "fabricação de cimento", "fabricação de fermentos e leveduras", "fabricação de material cerâmico", "fabricação de peças, ornatos e estruturas de cimento", "fabricação de peças, ornatos e estruturas de fibrocimento", "fabricação de tecidos especiais", "fabricação de telhas, tijolos e outros artigos de barro cozido (exceto cerâmica)", "fabricação de vidro e cristal", "fabricação de vinagre", "fabricação e recondicionamento de pneumáticos e câmaras-de-ar e fabricação de material para recondicionamento de pneumáticos", "lavação e amaciamento", "máquinas, aparelhos e equipamentos para comunicação e informática", "máquinas, aparelhos, peças e acessórios sem tratamento térmico e/ou galvanotécnico e/ou fundição", "material elétrico", "montagem de veículos", "não associada à produção de papelão, cartolina e cartão", "preparação de fumo, fabricação de cigarros, charutos e cigarrilhas e outras atividades de elaboração do tabaco não especificadas ou não classificadas", "produção de ferro e aço e suas ligas em qualquer forma, sem redução de minério, com fusão metalúrgica dos metais e ligas não ferrosas em formas primárias, inclusive metais preciosos", "produção de laminados de aço", "produção de óleos, gorduras e ceras vegetais e animais, em bruto, de óleos de essências vegetais e outros produtos de destilação da madeira, exceto refinação de produtos alimentares", "refinação e preparação de óleos e gorduras vegetais, produção de manteiga de cacau e gorduras de origem animal destinadas à alimentação", "resfriamento e distribuição de leite", "resinas e fibras e fios artificiais e sintéticos e de borracha e látex sintéticos", "sabão, detergentes e glicerina", "serralheria", "siderurgia e elaboração de produtos siderúrgicos com redução de minérios, inclusive ferro-gusa; tintas, esmaltes, lacas, vernizes, impermeabilizantes, solventes e secantes", "todas as atividades industriais dedicadas à fabricação de produtos farmacêuticos e veterinários"]}, {"c": "I-D", "n": "Industrial D", "d": "caracterizada pela indústria de grande porte com atividades incômodas potencialmente nocivas e perigosas, cujo processo produtivo gere efluentes sólidos, líquidos ou gasosos.", "i": ["abatedouros, frigoríficos e charqueados", "preparação de conservas de carnes e produção de banha de porco e de outras gorduras domésticas de origem animal", "curtimento e outras preparações de couros e peles (curtume)", "fabricação de adubos, fertilizantes e corretivos de solo", "fabricação de artefatos têxteis, com estamparia e/ou tintura", "fabricação de carvão vegetal, ativado e tipo Cardiff", "fabricação de corantes e pigmentos", "fabricação de papel e/ou celulose", "fabricação de rações balanceadas e de alimentos preparados para animais, inclusive farinhas de carne, sangue, osso, peixe e pena", "produção de elementos químicos e produtos químicos inorgânicos, orgânicos, organo-inorgânicos, exceto produtos derivados do processamento do petróleo, de rochas oleígenas, do carvão mineral e de madeira", "fabricação de pilhas, baterias e acumuladores", "fabricação de preparados para limpeza e polimento, desinfetantes e inseticidas, germicidas e fungicidas", "preparação de pescado e fabricação de conservas de pescado", "preparação do leite e fabricação de produtos de laticínios", "recuperação e refino de óleos minerais, vegetais e animais", "tingimento, estamparia e outros acabamentos em roupas, peças do vestuário e artefatos diversos de tecidos", "refino do petróleo e destilação de álcool por processamento de cana de açúcar, mandioca, madeira e outros vegetais", "usinas de produção de concreto asfáltico e demais indústrias químicas, de fertilizantes e petroquímicas; além de atividades similares."]}]
const CATS: Array<{ rot: string, cods: string[] }> = [
  { rot: 'Habitacional', cods: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7'] },
  { rot: 'Comercial', cods: ['CV-A', 'CV-B', 'CV-C', 'CC-A', 'CC-B', 'CC-C', 'CS-A'] },
  { rot: 'Serviços', cods: ['SV-A', 'SV-B', 'SV-C', 'SV-D', 'SC-A', 'SC-B', 'SC-C', 'SS-A'] },
  { rot: 'Industrial', cods: ['I-A', 'I-B', 'I-C', 'I-D'] }]
const VERDE = [29, 158, 117]; const AMARELO = [239, 159, 39]
function sem (t: any): string { return String(t == null ? '' : t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() }

// significado curto dos códigos (Anexo I da LC 8/2020)
const SIGNIF: Record<string, string> = {
  H1: 'Unifamiliar', H2: 'Unifamiliar geminada', H3: 'Unifamiliar em série', H4: 'Multifamiliar', H5: 'Uso institucional (assistência social)', H6: 'Transitória tipo hotel', H7: 'Transitória tipo motel',
  CV: 'Comércio vicinal', SV: 'Serviço vicinal', CC: 'Comércio central', SC: 'Serviço central', CS: 'Comércio setorial', SS: 'Serviço setorial',
  'I-A': 'Indústria de pequeno porte, compatível com o meio urbano', 'I-B': 'Indústria de médio porte (gera tráfego ou ruído)',
  'I-C': 'Indústria de grande porte, incômoda ou nociva', 'I-D': 'Indústria de grande porte, potencialmente nociva ou perigosa'
}
function titulo (cod: string): string {
  if (SIGNIF[cod]) return `${cod} — ${SIGNIF[cod]}`
  const g = cod.split('-')[0]
  return SIGNIF[g] ? `${cod} — ${SIGNIF[g]} (subcategoria ${cod.split('-')[1]})` : cod
}
function nomeCod (cod: string): string {
  if (SIGNIF[cod]) return SIGNIF[cod]
  const [g, l] = cod.split('-')
  return SIGNIF[g] ? `${SIGNIF[g]} ${l}` : cod
}
// "CV (A,B) / CC (A)" → ['CV-A','CV-B','CC-A'] ; "H (1,2)" → ['H1','H2'] ; texto livre → []
function codigos (txt: any): string[] {
  const s = String(txt == null ? '' : txt)
  const out: string[] = []
  const re = /([A-Z]{1,2})\s*\(([^)]*)\)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(s)) !== null) {
    const pre = m[1]
    m[2].split(',').map(x => x.trim()).filter(Boolean).forEach(x => out.push(pre === 'H' ? `H${x}` : `${pre}-${x}`))
  }
  return out
}
function vazio (txt: any): boolean { const s = String(txt == null ? '' : txt).trim(); return s === '' || s === '-' }
function fmt (v: any): string {
  if (v === null || v === undefined || v === '') return '—'
  if (typeof v === 'number') return v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
  return String(v).trim()
}
function corTexto (rgb: number[] | null): string {
  if (!rgb) return '#fff'
  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 > 150 ? C.texto : '#fff'
}
function rgbCss (rgb: number[] | null): string { return rgb ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` : C.azul }

interface Zona { valor: string, rotulo: string, cor: number[] | null }

export default function Widget (props: AllWidgetProps<any>) {
  const cfg: any = props.config || {}
  const zonaUrl: string = cfg.zonaUrl
  const campoZona: string = cfg.campoZona || 'zoneamento'
  const tabelaUrl: string = cfg.tabelaUrl
  const campoTabela: string = cfg.campoTabela || 'zona'
  const mapaId: string = (props.useMapWidgetIds && props.useMapWidgetIds[0]) || ''

  const [jmv, setJmv] = useState<JimuMapView>(null)
  const [tabela, setTabela] = useState<Record<string, any>>({})
  const [zonas, setZonas] = useState<Zona[]>([])
  const [sel, setSel] = useState<string>(null)       // zona selecionada
  const [msg, setMsg] = useState<string>(null)       // mensagem (fora do zoneamento, erro…)
  const [carregando, setCarregando] = useState<boolean>(false)
  const gl = useRef<any>(null)          // camada de destaque
  const zonLayer = useRef<any>(null)    // camada de zoneamento do mapa (para esmaecer)
  const opOrig = useRef<number>(1)
  const pedido = useRef<number>(0)      // ignora respostas antigas
  const [desenhando, setDesenhando] = useState<boolean>(false)
  const extInicial = useRef<any>(null)   // zoom inicial (home)
  const raiz = useRef<any>(null)
  const [altura, setAltura] = useState<number>(0)
  const [modo, setModo] = useState<'ficha' | 'onde'>('ficha')
  const [termo, setTermo] = useState<string>('')
  const [cat, setCat] = useState<number>(-1)
  const [cod, setCod] = useState<string>(null)
  const [veioOnde, setVeioOnde] = useState<boolean>(false)

  // tabela de parâmetros + cores da simbologia (uma vez)
  useEffect(() => {
    fetch(`${tabelaUrl}/query?where=1%3D1&outFields=*&returnGeometry=false&f=json`).then(r => r.json()).then((j: any) => {
      const t: Record<string, any> = {}
      ;(j.features || []).forEach((f: any) => { const a = f.attributes || {}; t[String(a[campoTabela] || '').trim()] = a })
      setTabela(t)
    }).catch(e => { console.warn('[Ficha da Zona] tabela', e); setMsg('Não foi possível ler a tabela de parâmetros.') })
    fetch(`${zonaUrl}?f=json`).then(r => r.json()).then((j: any) => {
      const uv = (((j.drawingInfo || {}).renderer || {}).uniqueValueInfos || []) as any[]
      setZonas(uv.map(u => ({ valor: String(u.value), rotulo: String(u.label || u.value).trim(), cor: (u.symbol && u.symbol.color) ? u.symbol.color : null })))
    }).catch(e => console.warn('[Ficha da Zona] simbologia', e))
  }, [tabelaUrl, zonaUrl, campoTabela])

  const limpaGrafico = useCallback(() => {
    pedido.current++
    if (gl.current) gl.current.removeAll()
    if (zonLayer.current) { try { zonLayer.current.opacity = opOrig.current } catch (e) {} }
    setDesenhando(false)
  }, [])

  const corDeRef = useRef<(z: string) => number[] | null>(() => null)

  const zoomZona = useCallback(() => {
    if (jmv && gl.current && gl.current.graphics.length) jmv.view.goTo(gl.current.graphics.toArray(), { duration: 900 }).catch(() => {})
  }, [jmv])

  const irHome = useCallback(() => {
    if (!jmv) return
    const view: any = jmv.view
    const vp = view.map && view.map.initialViewProperties && view.map.initialViewProperties.viewpoint
    const alvo = extInicial.current || vp
    if (alvo) view.goTo(alvo, { duration: 900 }).catch(() => {})
  }, [jmv])

  const limparTudo = useCallback(() => {
    limpaGrafico(); setSel(null); setMsg(null); setCod(null); setTermo(''); setCat(-1); setVeioOnde(false)
    try {   // seleções feitas no ExB (contorno ciano), em todas as fontes de dados
      const dss: any = DataSourceManager.getInstance().getDataSources() || {}
      Object.keys(dss).forEach(k => { const d: any = dss[k]; try { if (d && typeof d.clearSelection === 'function') d.clearSelection() } catch (e) {} })
    } catch (e) { console.warn('[Ficha da Zona] limpar seleção', e) }
    if (jmv) {
      const view: any = jmv.view
      try { view.graphics.removeAll() } catch (e) {}           // marcador da pesquisa
      try { if (view.closePopup) view.closePopup(); else if (view.popup) view.popup.close() } catch (e) {}
    }
    irHome()
  }, [jmv, limpaGrafico, irHome])

  // altura: o painel nunca passa do fim da tela (rolagem até o fim da ficha)
  useEffect(() => {
    const calc = () => { const el = raiz.current; if (!el) return; const r = el.getBoundingClientRect(); setAltura(Math.max(240, window.innerHeight - Math.max(0, r.top) - 6)) }
    calc(); const t = setTimeout(calc, 600)
    window.addEventListener('resize', calc)
    return () => { clearTimeout(t); window.removeEventListener('resize', calc) }
  }, [])

  const pisca = () => {
    const g = gl.current; if (!g) return
    const passos = [0.2, 1, 0.2, 1]
    passos.forEach((op, i) => setTimeout(() => { try { g.opacity = op } catch (e) {} }, 220 * (i + 1)))
  }

  // pinta grupos de zonas (cada grupo com sua cor), em páginas e simplificado conforme o zoom
  const pintar = useCallback((grupos: Array<{ zonas: string[], cor: number[] }>, zoom: boolean, clicada: any) => {
    if (!jmv || !gl.current) return
    const view: any = jmv.view
    const meu = ++pedido.current
    gl.current.removeAll()
    if (zonLayer.current) { try { zonLayer.current.opacity = 0.3 } catch (e) {} }
    const sr = view.spatialReference || {}; const wkid = sr.latestWkid || sr.wkid
    const tol = Math.max(0, (view.resolution || 1) * 0.8)
    const graficos: any[] = []
    setDesenhando(true)
    const umGrupo = (zs: string[], rgb: number[]): Promise<void> => {
      if (!zs.length) return Promise.resolve()
      const where = encodeURIComponent(`${campoZona} IN (${zs.map(z => `'${String(z).replace(/'/g, "''")}'`).join(',')})`)
      const pagina = (offset: number, paginar: boolean): Promise<void> => {
        const pag = paginar ? `&resultOffset=${offset}&resultRecordCount=1000` : ''
        return fetch(`${zonaUrl}/query?where=${where}&outFields=${encodeURIComponent(campoZona)}&returnGeometry=true&outSR=${wkid}&maxAllowableOffset=${tol}${pag}&f=json`)
          .then(r => r.json()).then((j: any) => {
            if (meu !== pedido.current) return
            if (j.error) {
              if (paginar && offset === 0) return pagina(0, false)   // serviço sem paginação: uma chamada só
              throw new Error(j.error.message)
            }
            const fs = j.features || []
            fs.forEach((f: any) => graficos.push(new Graphic({
              geometry: { type: 'polygon', rings: f.geometry.rings, spatialReference: { wkid } } as any,
              symbol: { type: 'simple-fill', color: [rgb[0], rgb[1], rgb[2], 0.9], outline: { color: [rgb[0], rgb[1], rgb[2], 1], width: 1.5 } } as any
            })))
            if (paginar && j.exceededTransferLimit && fs.length) return pagina(offset + fs.length, true)
          })
      }
      return pagina(0, true)
    }
    grupos.reduce((p, g) => p.then(() => umGrupo(g.zonas, g.cor)), Promise.resolve()).then(() => {
      if (meu !== pedido.current) return
      if (clicada) {
        graficos.push(new Graphic({
          geometry: { type: 'polygon', rings: clicada.rings, spatialReference: { wkid } } as any,
          symbol: { type: 'simple-fill', color: [0, 0, 0, 0], outline: { color: [68, 99, 169, 1], width: 3.5 } } as any
        }))
      }
      gl.current.addMany(graficos)
      setDesenhando(false)
      pisca()
      if (zoom && graficos.length) view.goTo(graficos, { duration: 900 }).catch(() => {})
    }).catch(e => { if (meu === pedido.current) setDesenhando(false); console.warn('[Ficha da Zona] destaque', e) })
  }, [jmv, zonaUrl, campoZona])

  const destacar = useCallback((z: string, zoom: boolean, clicada: any) => {
    pintar([{ zonas: [z], cor: corDeRef.current(z) || [68, 99, 169] }], zoom, clicada)
  }, [pintar])

  // camada de destaque + localizar a camada de zoneamento no mapa
  useEffect(() => {
    if (!jmv) return
    const view: any = jmv.view
    const camada = new GraphicsLayer({ title: 'Destaque da zona', listMode: 'hide' } as any)
    view.map.add(camada); gl.current = camada
    try { view.when(() => { if (!extInicial.current && view.extent) extInicial.current = view.extent.clone() }) } catch (e) {}
    const base = String(zonaUrl).replace(/\/\d+$/, '').toLowerCase()
    const achada = view.map.allLayers.find((l: any) => l.url && String(l.url).toLowerCase().indexOf(base) === 0)
    if (achada) { zonLayer.current = achada; opOrig.current = achada.opacity == null ? 1 : achada.opacity }
    return () => {
      try { view.map.remove(camada) } catch (e) {}
      if (zonLayer.current) { try { zonLayer.current.opacity = opOrig.current } catch (e) {} }
      gl.current = null; zonLayer.current = null
    }
  }, [jmv, zonaUrl])

  // clique no mapa
  useEffect(() => {
    if (!jmv) return
    const view: any = jmv.view
    const antes = { popupEnabled: view.popupEnabled, auto: view.popup && view.popup.autoOpenEnabled }
    if (cfg.desligarPopup !== false) {
      try { view.popupEnabled = false } catch (e) {}
      try { if (view.popup) view.popup.autoOpenEnabled = false } catch (e) {}
    }
    const hnd = view.on('click', (evt: any) => {
      const p = evt.mapPoint; if (!p) return
      const sr = p.spatialReference || {}; const wkid = sr.latestWkid || sr.wkid
      const geom = encodeURIComponent(JSON.stringify({ x: p.x, y: p.y, spatialReference: { wkid } }))
      setCarregando(true); setMsg(null)
      fetch(`${zonaUrl}/query?geometry=${geom}&geometryType=esriGeometryPoint&inSR=${wkid}&spatialRel=esriSpatialRelIntersects&outFields=${encodeURIComponent(campoZona)}&returnGeometry=true&outSR=${wkid}&f=json`)
        .then(r => r.json()).then((j: any) => {
          setCarregando(false)
          const f = (j.features || [])[0]
          if (!f) { limpaGrafico(); setSel(null); setMsg('Este ponto está fora das áreas de zoneamento urbano.'); return }
          const z = String(f.attributes[campoZona] || '').trim()
          destacar(z, false, f.geometry)
          setModo('ficha'); setVeioOnde(false)
          setSel(z)
        }).catch(e => { setCarregando(false); console.warn('[Ficha da Zona] consulta', e); setMsg('Sem conexão com o servidor de mapas.') })
    })
    return () => {
      hnd && hnd.remove()
      try { view.popupEnabled = antes.popupEnabled } catch (e) {}
      try { if (view.popup) view.popup.autoOpenEnabled = antes.auto } catch (e) {}
    }
  }, [jmv, zonaUrl, campoZona, destacar, limpaGrafico])

  const corDe = (z: string): number[] | null => { const k = zonas.find(x => x.valor === z); return k ? k.cor : null }
  corDeRef.current = corDe
  const rotuloDe = (z: string): string => { const k = zonas.find(x => x.valor === z); return k ? k.rotulo : z }

  // ---------- peças visuais ----------
  const cartao = (tituloTxt: string, ...filhos: any[]) =>
    h('div', { style: { background: '#fff', border: `1px solid ${C.borda}`, borderRadius: 10, padding: '12px 14px', marginBottom: 12 } },
      h('div', { style: { fontSize: 11, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: C.suave, marginBottom: 8 } }, tituloTxt),
      ...filhos)
  const selo = (cod: string, tipo: 'p' | 't') =>
    h('span', { key: tipo + cod, title: titulo(cod),
      style: { display: 'inline-block', fontSize: 12, fontWeight: 700, padding: '2px 7px', borderRadius: 5, margin: '0 4px 4px 0', cursor: 'help',
        background: tipo === 'p' ? C.verdeBg : C.amareloBg, color: tipo === 'p' ? C.verde : C.amarelo, border: `1px solid ${tipo === 'p' ? '#a7dcc8' : '#f0d38d'}` } }, cod)
  const celulaUsos = (txt: any, tipo: 'p' | 't') => {
    if (vazio(txt)) return h('span', { style: { color: '#b0b6c3' } }, '—')
    const cs = codigos(txt)
    return cs.length ? h('div', null, ...cs.map(c => selo(c, tipo))) : h('span', { style: { fontSize: 12, color: C.suave } }, fmt(txt))
  }
  const tile = (valor: any, rotulo: string, largo = false) =>
    h('div', { style: { gridColumn: largo ? '1 / -1' : 'auto', background: C.fundo, border: `1px solid ${C.borda}`, borderRadius: 8, padding: '8px 10px' } },
      h('div', { style: { fontSize: largo ? 14 : (String(valor).length > 7 ? 15 : 20), fontWeight: 800, color: '#2f4a86', lineHeight: 1.2, whiteSpace: 'pre-line' } }, valor),
      h('div', { style: { fontSize: 11.5, color: C.suave, marginTop: 2 } }, rotulo))
  const naoPerm = (...v: any[]) => v.some(x => /n[ãa]o\s*permitido/i.test(String(x)))
  const celLote = (t: any, ar: any) => h('span', { style: { whiteSpace: 'nowrap', fontWeight: 700 } }, `${fmt(t)} m · ${fmt(ar)} m²`)
  const linhaLote = (nome: string, tm: any, am: any, te: any, ae: any) =>
    h('tr', { key: nome, style: { borderTop: `1px solid ${C.borda}` } },
      h('td', { style: { padding: '7px 6px 7px 0', fontSize: 12.5, fontWeight: 700, verticalAlign: 'top' } }, nome),
      naoPerm(tm, am, te, ae)
        ? h('td', { colSpan: 2, style: { padding: '7px 4px', fontSize: 12.5, fontWeight: 700, color: '#a12828' } }, 'Não permitido')
        : h(React.Fragment, null,
          h('td', { style: { padding: '7px 4px', fontSize: 12.5 } }, celLote(tm, am)),
          h('td', { style: { padding: '7px 0 7px 4px', fontSize: 12.5 } }, celLote(te, ae))))

  const botaoLimpar = () => h('button', { onClick: limparTudo, title: 'Limpar destaque, seleções e pesquisa do mapa e voltar ao zoom inicial',
    style: { border: `1px solid ${C.borda}`, cursor: 'pointer', background: '#fff', color: C.suave, fontWeight: 700, fontSize: 12.5, borderRadius: 8, padding: '8px 7px' } }, '⟲ Limpar')

  // ---------- telas ----------
  // em quais zonas o código é permitido / tolerado (campos *_permitido / *_tolerado da tabela)
  const statusDe = (c: string) => {
    const P: string[] = []; const T: string[] = []
    const ordem = zonas.map(z => z.valor).filter(z => tabela[z])
    Object.keys(tabela).forEach(z => { if (ordem.indexOf(z) < 0) ordem.push(z) })
    ordem.forEach(z => {
      const a = tabela[z]; let p = false; let t = false
      ;['hab', 'com', 'serv', 'ind'].forEach(g => {
        if (codigos(a[`${g}_permitido`]).indexOf(c) >= 0) p = true
        if (codigos(a[`${g}_tolerado`]).indexOf(c) >= 0) t = true
      })
      if (p) P.push(z); else if (t) T.push(z)
    })
    return { P, T }
  }
  const escolheCod = (c: string) => {
    setCod(c); const st = statusDe(c)
    pintar([{ zonas: st.P, cor: VERDE }, { zonas: st.T, cor: AMARELO }], false, null)
  }
  const abas = () => h('div', { style: { display: 'flex', gap: 6, marginBottom: 12 } },
    ...[['ficha', '📍 Consultar zona'], ['onde', '🔎 Onde posso…?']].map(([m, rot]) => h('button', { key: m,
      onClick: () => { if (m === modo) return; limpaGrafico(); setSel(null); setMsg(null); setCod(null); setTermo(''); setCat(-1); setModo(m as any) },
      style: { flex: 1, cursor: 'pointer', borderRadius: 8, padding: '9px 6px', fontWeight: 700, fontSize: 13.5,
        border: modo === m ? `1px solid ${C.azul}` : `1px solid ${C.borda}`, background: modo === m ? C.azul : '#fff', color: modo === m ? '#fff' : C.texto } }, rot)))

  const chipZona = (z: string, tipo: 'p' | 't') => h('button', { key: tipo + z, title: `Abrir a ficha da ${z}`,
    onClick: () => { setVeioOnde(true); setModo('ficha'); setSel(z); destacar(z, true, null) },
    style: { cursor: 'pointer', fontWeight: 800, fontSize: 12.5, borderRadius: 6, padding: '4px 8px', margin: '0 5px 5px 0',
      background: tipo === 'p' ? C.verdeBg : C.amareloBg, color: tipo === 'p' ? C.verde : C.amarelo, border: `1px solid ${tipo === 'p' ? '#a7dcc8' : '#f0d38d'}` } }, z)

  const telaOnde = () => {
    const q = sem(termo).trim()
    const sug: Array<{ c: string, txt: string }> = []
    if (q.length >= 2) {
      ATIV.forEach(a => {
        if (sem(a.c).replace('-', '') === q.replace('-', '').replace(' ', '')) sug.push({ c: a.c, txt: `${a.c} — ${nomeCod(a.c)}` })
        a.i.forEach(it => { if (sem(it).indexOf(q) >= 0) sug.push({ c: a.c, txt: it }) })
      })
    }
    const st = cod ? statusDe(cod) : null
    const info = cod ? ATIV.find(a => a.c === cod) : null
    return h('div', null, abas(),
      h('div', { style: { fontSize: 13, color: C.suave, marginBottom: 6 } }, 'Qual atividade você quer instalar?'),
      h('input', { value: termo, placeholder: 'Ex.: padaria, creche, oficina…', onChange: (e: any) => { setTermo(e.target.value) },
        style: { width: '100%', boxSizing: 'border-box', border: `1px solid ${C.borda}`, borderRadius: 8, padding: '9px 10px', fontSize: 14, marginBottom: 6 } }),
      q.length >= 2 ? h('div', { style: { border: `1px solid ${C.borda}`, borderRadius: 8, marginBottom: 10, maxHeight: 220, overflowY: 'auto' } },
        sug.length
          ? sug.slice(0, 30).map((s2, k) => h('button', { key: k, onClick: () => { setTermo(''); setCat(-1); escolheCod(s2.c) },
            style: { display: 'flex', width: '100%', gap: 8, justifyContent: 'space-between', textAlign: 'left', border: 0, borderTop: k ? `1px solid ${C.borda}` : 0, background: '#fff', cursor: 'pointer', padding: '7px 10px', fontSize: 13 } },
            h('span', null, s2.txt), h('b', { style: { color: C.azul, whiteSpace: 'nowrap' } }, s2.c)))
          : h('div', { style: { padding: '8px 10px', fontSize: 12.5, color: '#a12828' } }, 'Não encontrado na lista do Anexo I. Escolha a categoria e o código abaixo, ou consulte o IDEPPLAN.')) : null,
      h('div', { style: { fontSize: 12, color: C.suave, margin: '4px 0 6px' } }, 'ou escolha pela categoria:'),
      h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 } },
        ...CATS.map((ct, k) => h('button', { key: ct.rot, onClick: () => setCat(k === cat ? -1 : k),
          style: { cursor: 'pointer', borderRadius: 8, padding: '6px 10px', fontSize: 13, fontWeight: 700, border: `1px solid ${cat === k ? C.azul : C.borda}`, background: cat === k ? C.azulClaro : '#fff', color: cat === k ? C.azul : C.texto } }, ct.rot))),
      cat >= 0 ? h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 6, marginBottom: 12 } },
        ...CATS[cat].cods.map(c => h('button', { key: c, title: titulo(c), onClick: () => escolheCod(c),
          style: { cursor: 'pointer', borderRadius: 8, padding: '7px 4px', fontSize: 13, fontWeight: 800, border: cod === c ? `2px solid ${C.azul}` : `1px solid ${C.borda}`, background: '#fff', color: cod === c ? C.azul : C.texto } }, c))) : null,
      cod && st ? cartao('Resultado',
        h('div', { style: { fontSize: 15, fontWeight: 800, color: C.texto } }, `${cod} · ${nomeCod(cod)}`),
        info && info.d ? h('div', { style: { fontSize: 12.5, color: C.suave, margin: '2px 0 4px' } }, info.d) : null,
        info && info.i.length ? h('div', { style: { fontSize: 12, color: C.suave, marginBottom: 10 } }, `Exemplos da lei: ${info.i.slice(0, 5).join('; ')}${info.i.length > 5 ? '…' : ''}`) : h('div', { style: { height: 8 } }),
        h('div', { style: { fontSize: 13, fontWeight: 700, color: C.verde, marginBottom: 6 } }, st.P.length ? `✔ Permitido em ${st.P.length} zona(s)` : '✔ Não é permitido em nenhuma zona'),
        h('div', null, ...st.P.map(z => chipZona(z, 'p'))),
        h('div', { style: { fontSize: 13, fontWeight: 700, color: C.amarelo, margin: '8px 0 6px' } }, st.T.length ? `⚠ Tolerado em ${st.T.length} zona(s) — depende de análise` : '⚠ Não é tolerado em nenhuma zona'),
        h('div', null, ...st.T.map(z => chipZona(z, 't'))),
        h('div', { style: { fontSize: 12.5, color: C.suave, marginTop: 8 } }, '⛔ Proibido nas demais zonas (cinza no mapa).'),
        h('div', { style: { display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12, color: C.suave, marginTop: 10 } },
          h('span', null, h('span', { style: { display: 'inline-block', width: 14, height: 10, background: rgbCss(VERDE), borderRadius: 2, marginRight: 5 } }), 'Permitido'),
          h('span', null, h('span', { style: { display: 'inline-block', width: 14, height: 10, background: rgbCss(AMARELO), borderRadius: 2, marginRight: 5 } }), 'Tolerado'),
          h('span', null, h('span', { style: { display: 'inline-block', width: 14, height: 10, background: '#d3d1c7', borderRadius: 2, marginRight: 5 } }), 'Proibido')),
        h('button', { onClick: limparTudo, style: { marginTop: 12, cursor: 'pointer', border: `1px solid ${C.borda}`, background: '#fff', color: C.suave, fontWeight: 700, fontSize: 12.5, borderRadius: 8, padding: '7px 10px' } }, '⟲ Limpar e voltar ao início')) : null,
      aviso())
  }

  const telaInicial = () => h('div', null, abas(),
    h('div', { style: { display: 'flex', justifyContent: 'flex-end', marginBottom: 10 } },
      h('button', { onClick: limparTudo, title: 'Limpar destaque, seleções e pesquisa do mapa e voltar ao zoom inicial',
        style: { border: `1px solid ${C.azul}`, cursor: 'pointer', background: '#fff', color: C.azul, fontWeight: 700, fontSize: 13, borderRadius: 8, padding: '8px 12px' } }, '⟲ Limpar tudo e voltar ao início')),
    h('div', { style: { background: C.azulClaro, borderRadius: 10, padding: '12px 14px', marginBottom: 12, color: '#2f4a86', fontSize: 14, lineHeight: 1.45 } },
      h('b', null, 'Clique no mapa'), ' para ver as regras de uso e ocupação da zona naquele ponto, ou escolha uma zona abaixo — ela será destacada no mapa.'),
    msg ? h('div', { style: { fontSize: 13, color: '#a12828', marginBottom: 10 } }, msg) : null,
    cartao('Zonas',
      h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6 } },
        ...zonas.filter(z => tabela[z.valor]).map(z => h('button', { key: z.valor, title: z.rotulo, onClick: () => { setMsg(null); setSel(z.valor); destacar(z.valor, true, null) },
          style: { border: 0, cursor: 'pointer', borderRadius: 6, padding: '5px 9px', fontWeight: 800, fontSize: 12.5, background: rgbCss(z.cor), color: corTexto(z.cor), boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)' } }, z.valor)))),
    aviso())

  const aviso = () => h('div', { style: { fontSize: 12, color: C.suave, background: C.fundo, borderLeft: '3px solid #f5c518', padding: '8px 10px', borderRadius: '0 6px 6px 0', lineHeight: 1.45 } },
    'As informações referem-se às diretrizes urbanísticas para a zona selecionada e têm caráter informativo e orientativo. Não substituem a verificação da legislação municipal aplicável nem a análise pelos órgãos competentes.')

  const ficha = (z: string) => {
    const a = tabela[z]
    const cor = corDe(z)
    const voltar = () => {
      setSel(null); setMsg(null)
      if (veioOnde && cod) { setVeioOnde(false); setModo('onde'); escolheCod(cod); return }
      limpaGrafico(); irHome()
    }
    const lista = zonas.filter(x => tabela[x.valor]).map(x => x.valor)
    const idx = lista.indexOf(z)
    const vai = (d: number) => { if (!lista.length) return; const n = lista[(idx + d + lista.length) % lista.length]; setMsg(null); setSel(n); destacar(n, true, null) }
    const seta = (txt: string, d: number, tit: string) => h('button', { onClick: () => vai(d), title: tit,
      style: { border: `1px solid ${C.borda}`, cursor: 'pointer', background: '#fff', color: C.azul, fontWeight: 800, fontSize: 16, borderRadius: 8, width: 28, height: 34, padding: 0 } }, txt)
    const barra = h('div', { style: { position: 'sticky', top: -14, zIndex: 5, background: '#fff', margin: '-14px -14px 12px', padding: '10px 14px', borderBottom: `1px solid ${C.borda}`, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' } },
      h('button', { onClick: voltar, title: 'Voltar para a lista de todas as zonas, limpar o destaque e voltar ao zoom inicial',
        style: { border: 0, cursor: 'pointer', background: C.azul, color: '#fff', fontWeight: 700, fontSize: 13.5, borderRadius: 8, padding: '8px 10px', boxShadow: '0 2px 6px rgba(68,99,169,.35)' } }, (veioOnde && cod ? '◀  Voltar ao resultado' : '◀  Todas as zonas')),
      h('button', { onClick: zoomZona, title: 'Aproximar o mapa para mostrar todos os polígonos desta zona',
        style: { border: `1px solid ${C.azul}`, cursor: 'pointer', background: '#fff', color: C.azul, fontWeight: 700, fontSize: 12.5, borderRadius: 8, padding: '8px 7px' } }, '🔍 Zona inteira'),
      botaoLimpar(),
      h('div', { style: { marginLeft: 'auto', display: 'flex', gap: 3, alignItems: 'center' } },
        
        idx >= 0 ? seta('‹', -1, 'Zona anterior') : null,
        idx >= 0 ? seta('›', 1, 'Próxima zona') : null))
    const cab = h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 } },
      h('div', { style: { minWidth: 64, textAlign: 'center', fontSize: 20, fontWeight: 800, borderRadius: 8, padding: '6px 10px', background: rgbCss(cor), color: corTexto(cor), boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.12)' } }, z),
      h('div', { style: { flex: 1, fontSize: 16, fontWeight: 700, color: C.texto } }, a ? fmt(a.descricao_da_zona) : rotuloDe(z)))
    if (!a) {
      return h('div', null, barra, cab, cartao('Informação', h('div', { style: { fontSize: 13.5 } }, `${rotuloDe(z)}: sem parâmetros urbanísticos cadastrados.`)), aviso())
    }
    const semOcup = Number(a.coef__aproveitamento) === 0 && Number(a.parc_area_mq) === 0
    const linhaUso = (rot: string, p: any, t: any, x: any) =>
      h('tr', { key: rot },
        h('td', { style: { padding: '6px 6px 6px 0', fontWeight: 700, fontSize: 13, verticalAlign: 'top', width: 92 } }, rot),
        h('td', { style: { padding: '6px 4px', verticalAlign: 'top' } }, celulaUsos(p, 'p')),
        h('td', { style: { padding: '6px 4px', verticalAlign: 'top' } }, celulaUsos(t, 't')),
        h('td', { style: { padding: '6px 0 6px 4px', verticalAlign: 'top', fontSize: 11.5, color: C.suave } }, fmt(x)))
    const th = (t: string) => h('th', { style: { textAlign: 'left', fontSize: 10.5, letterSpacing: '.05em', textTransform: 'uppercase', color: C.suave, padding: '0 4px 4px', fontWeight: 700 } }, t)
    return h('div', null, barra, cab,
      a.texto ? h('div', { style: { fontSize: 13.5, color: C.texto, marginBottom: 12, lineHeight: 1.45 } }, fmt(a.texto)) : null,
      cartao('Usos',
        h('table', { style: { width: '100%', borderCollapse: 'collapse' } },
          h('thead', null, h('tr', null, th(''), th('Permitido'), th('Tolerado'), th('Proibido'))),
          h('tbody', null,
            linhaUso('Habitacional', a.hab_permitido, a.hab_tolerado, a.hab_proibido),
            linhaUso('Comercial', a.com_permitido, a.com_tolerado, a.com_proibido),
            linhaUso('Serviços', a.serv_permitido, a.serv_tolerado, a.serv_proibido),
            linhaUso('Industrial', a.ind_permitido, a.ind_tolerado, a.ind_proibido))),
        h('div', { style: { fontSize: 11.5, color: C.suave, marginTop: 6 } }, 'Passe o mouse sobre um código para ver o significado. Tolerado: depende de análise (Art. 16).')),
      semOcup
        ? cartao('Ocupação', h('div', { style: { fontSize: 13.5 } }, 'Parâmetros de ocupação e parcelamento não se aplicam a esta zona. Consulte o órgão municipal responsável.'))
        : h(React.Fragment, null,
          cartao('Ocupação',
            h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 8 } },
              tile(fmt(a.coef__aproveitamento), 'Coeficiente de aproveitamento'),
              tile(fmt(a['nº_pavimentos']), 'Número de pavimentos'),
              tile(`${fmt(a.permeabilidade)}%`, 'Taxa de permeabilidade mínima'),
              tile(`${fmt(a.recuo_frontal__m_)} m`, 'Recuo frontal mínimo'),
              tile(fmt(a['taxa_ocup_máx']).split(' / ').join('\n'), 'Taxa de ocupação máxima (%)', true),
              tile(fmt(a.recuo_lateral_fundo__m_).split(' / ').join('\n'), 'Recuos laterais e de fundo (m)', true))),
          cartao('Lote mínimo (testada · área)',
            h('table', { style: { width: '100%', borderCollapse: 'collapse' } },
              h('thead', null, h('tr', null, th(''), th('Meio de quadra'), th('Esquina*'))),
              h('tbody', null,
                linhaLote('Parcelamento', a.parc_testada_mq, a.parc_area_mq, a.parc_testada_esq, a.parc_area_esq),
                linhaLote('Desmembramento', a.desm_testada_mq, a.desm_area_mq, a.desm_testada_esq, a.desm_area_esq),
                linhaLote('Desdobro não edificado', a.desd_ne_testada_mq, a.desd_ne_area_mq, a.desd_ne_testada_esq, a.desd_ne_area_esq),
                linhaLote('Desdobro edificado', a.desd_ed_testada_mq, a.desd_ed_area_mq, a.desd_ed_testada_esq, a.desd_ed_area_esq))),
            h('div', { style: { fontSize: 11.5, color: C.suave, marginTop: 6 } }, '* Nos lotes de esquina, o valor mínimo vale para ambas as testadas.'))),
      aviso())
  }

  return h('div', { className: 'jimu-widget ficha-zona', ref: raiz,
    style: { width: '100%', height: altura ? altura : '100%', maxHeight: '100%', overflowY: 'auto', boxSizing: 'border-box', padding: '14px 14px 20px', background: '#fff', fontFamily: 'inherit', color: C.texto } },
  mapaId ? h(JimuMapViewComponent, { useMapWidgetId: mapaId, onActiveViewChange: (v: JimuMapView) => setJmv(v) }) : null,
  !mapaId ? h('div', { style: { fontSize: 13, color: '#a12828', marginBottom: 10 } }, 'Ficha da Zona: nenhum mapa ligado ao widget.') : null,
  carregando ? h('div', { style: { fontSize: 13, color: C.suave, marginBottom: 8 } }, 'Consultando a zona…') : null,
  sel ? ficha(sel) : (modo === 'onde' ? telaOnde() : telaInicial()))
}
