System.register(["jimu-core","jimu-arcgis","calcite-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "calcite-components":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/horarios-linha/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! calcite-components */ "calcite-components");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Horários da Linha – GeoAPUC (v9: ícone pin-tear nas saídas; visual no padrão dos widgets dos DEVs — Calcite, sem emojis/pílulas/selos)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.



const h = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement;
const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
// paleta dos widgets dos DEVs (hub) + azul da casca homologada
const C = {
    fundo: '#FFFFFF', fundo2: '#F5F7FA', borda: '#E5E7EB', texto: '#1F2937', texto2: '#4B5563', suave: '#6B7280',
    apagado: '#9CA3AF', marca: '#4463A9', ouro: '#F5C400'
};
const FONTE = "Inter, 'Avenir Next', Roboto, Arial, sans-serif";
function hhmm(v) {
    const s = String(v !== null && v !== void 0 ? v : '').trim();
    const m = s.match(/^(\d{1,2}):(\d{2})/);
    return m ? `${m[1].padStart(2, '0')}:${m[2]}` : s;
}
function minutos(v) {
    const m = v.match(/^(\d{2}):(\d{2})/);
    return m ? Number(m[1]) * 60 + Number(m[2]) : -1;
}
function chaveSentido(v) {
    return String(v !== null && v !== void 0 ? v : '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
        .replace(/sentido para/g, '').replace(/[^a-z0-9]/g, '');
}
function aspas(v) { return String(v !== null && v !== void 0 ? v : '').replace(/'/g, "''"); }
function consultar(url, where, campos) {
    return __awaiter(this, void 0, void 0, function* () {
        const q = `${url}/query?where=${encodeURIComponent(where)}&outFields=${campos}&returnGeometry=false&f=json`;
        const j = yield fetch(q).then(r => r.json());
        if (j.error)
            throw new Error(j.error.message || 'erro na consulta');
        return (j.features || []).map((f) => f.attributes || {});
    });
}
function contar(url, where) {
    return __awaiter(this, void 0, void 0, function* () {
        const q = `${url}/query?where=${encodeURIComponent(where)}&returnCountOnly=true&f=json`;
        const j = yield fetch(q).then(r => r.json());
        if (j.error)
            throw new Error(j.error.message || 'erro na contagem');
        return Number(j.count || 0);
    });
}
function Widget(props) {
    var _a, _b, _c;
    const cfg = props.config || {};
    const dsId = cfg.dataSourceId || 'dataSource_1-linhas_onibus';
    const urlLin = cfg.linhasUrl;
    const urlHor = cfg.horariosUrl;
    const urlPar = cfg.paradasUrl;
    const idCamadaParadas = cfg.paradasLayerId || 'paradas_onibus';
    const mbBase = cfg.mobilibusUrl || 'https://editor.mobilibus.com/web/detalhes-linha/4abp9';
    const mbCod = cfg.mobilibusLinhas || {};
    const linkTempoReal = (cod) => {
        const c = mbCod[String(cod !== null && cod !== void 0 ? cod : '').trim()];
        return c ? `${mbBase}#${c}` : mbBase;
    };
    // ---- linha selecionada na lista (estado do app) ----
    const lerSelecao = () => {
        var _a, _b;
        try {
            const inf = ((_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.dataSourcesInfo) || {};
            for (const k of Object.keys(inf)) {
                if (k === dsId || k.startsWith(dsId + '-')) {
                    const ids = (_b = inf[k]) === null || _b === void 0 ? void 0 : _b.selectedIds;
                    if (ids && ids.length)
                        return String(ids[0]);
                }
            }
        }
        catch (e) {
            console.warn('[Horários da Linha] seleção', e);
        }
        return null;
    };
    const [oid, setOid] = useState(lerSelecao());
    useEffect(() => {
        const store = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)();
        const desfazer = store.subscribe(() => {
            const novo = lerSelecao();
            setOid(atual => (atual === novo ? atual : novo));
        });
        return () => { try {
            desfazer();
        }
        catch (e) { } };
    }, [dsId]);
    const [linha, setLinha] = useState(null);
    const [hor, setHor] = useState([]);
    const [planoB, setPlanoB] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [agora, setAgora] = useState(new Date());
    useEffect(() => { const t = setInterval(() => setAgora(new Date()), 60000); return () => clearInterval(t); }, []);
    // ---- paradas (camada Mobilibus, filtro pelo campo 'viagens') ----
    const [jmv, setJmv] = useState(null);
    const [mostrar, setMostrar] = useState(!!cfg.paradasLigadoAoAbrir);
    const [nParadas, setNParadas] = useState(null);
    useEffect(() => {
        const v = jmv === null || jmv === void 0 ? void 0 : jmv.view;
        if (!v || !urlPar)
            return;
        const lyr = v.map.allLayers.find((l) => l.id === idCamadaParadas);
        if (!lyr) {
            console.warn('[Horários da Linha] camada de paradas não encontrada:', idCamadaParadas);
            return;
        }
        let vivo = true;
        if (!mostrar) {
            lyr.visible = false;
            setNParadas(null);
            return;
        }
        ;
        (() => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!oid) {
                    lyr.definitionExpression = '1=0';
                    lyr.visible = true;
                    if (vivo)
                        setNParadas(0);
                    return;
                }
                const l = (yield consultar(urlLin, `objectid=${Number(oid)}`, 'cod_linha,sentido'))[0] || {};
                const cod = String((_a = l.cod_linha) !== null && _a !== void 0 ? _a : '').trim();
                let where = `viagens LIKE '%;${aspas(cod + ':' + chaveSentido(l.sentido))};%'`;
                let n = yield contar(urlPar, where);
                if (!n) {
                    where = `linhas LIKE '%,${aspas(cod)},%'`;
                    n = yield contar(urlPar, where);
                }
                if (!vivo)
                    return;
                lyr.definitionExpression = n ? where : '1=0';
                lyr.visible = true;
                setNParadas(n);
            }
            catch (e) {
                console.warn('[Horários da Linha] paradas', e);
                if (vivo)
                    setNParadas(null);
            }
        }))();
        return () => { vivo = false; };
    }, [jmv, mostrar, oid, urlPar, urlLin, idCamadaParadas]);
    // nome da parada ao passar o mouse (ou tocar)
    useEffect(() => {
        const v = jmv === null || jmv === void 0 ? void 0 : jmv.view;
        if (!v)
            return;
        const lyr = v.map.allLayers.find((l) => l.id === idCamadaParadas);
        if (!lyr)
            return;
        try {
            lyr.outFields = ['nome'];
        }
        catch (e) { }
        const dica = document.createElement('div');
        Object.assign(dica.style, { position: 'absolute', display: 'none', pointerEvents: 'none', zIndex: '99', maxWidth: '260px',
            background: '#FFFFFF', color: C.texto, border: `1px solid ${C.borda}`, borderRadius: '4px', padding: '4px 8px',
            fontSize: '12px', fontWeight: '500', fontFamily: FONTE, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' });
        v.container.appendChild(dica);
        let ocupado = false;
        const mostrarDica = (ev) => {
            if (ocupado || !lyr.visible) {
                if (!lyr.visible)
                    dica.style.display = 'none';
                return;
            }
            ocupado = true;
            v.hitTest(ev, { include: [lyr] }).then((res) => {
                var _a, _b;
                ocupado = false;
                const g = (_a = ((res === null || res === void 0 ? void 0 : res.results) || []).find((r) => { var _a, _b; return ((_b = (_a = r.graphic) === null || _a === void 0 ? void 0 : _a.layer) === null || _b === void 0 ? void 0 : _b.id) === idCamadaParadas; })) === null || _a === void 0 ? void 0 : _a.graphic;
                if (g) {
                    dica.textContent = 'Parada: ' + (((_b = g.attributes) === null || _b === void 0 ? void 0 : _b.nome) || 'sem nome');
                    dica.style.left = (ev.x + 14) + 'px';
                    dica.style.top = (ev.y + 14) + 'px';
                    dica.style.display = 'block';
                    v.container.style.cursor = 'pointer';
                }
                else {
                    dica.style.display = 'none';
                    v.container.style.cursor = '';
                }
            }).catch(() => { ocupado = false; });
        };
        const h1 = v.on('pointer-move', mostrarDica);
        const h2 = v.on('click', mostrarDica);
        const h3 = v.on('pointer-leave', () => { dica.style.display = 'none'; });
        return () => { try {
            h1.remove();
            h2.remove();
            h3.remove();
            dica.remove();
        }
        catch (e) { } };
    }, [jmv, idCamadaParadas]);
    // ---- horários da linha ----
    useEffect(() => {
        let vivo = true;
        if (!oid) {
            setLinha(null);
            setHor([]);
            return;
        }
        setCarregando(true);
        setErro(null);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const l = (yield consultar(urlLin, `objectid=${Number(oid)}`, 'objectid,id_rota,cod_linha,nome,sentido'))[0];
                if (!l)
                    throw new Error('linha não encontrada');
                let rows = yield consultar(urlHor, `id_rota='${aspas(l.id_rota)}'`, 'id_rota,ponto,horario,sentido,observacao');
                let b = false;
                if (!rows.length) {
                    const cod = String(l.id_rota || '').split('_')[0];
                    rows = (yield consultar(urlHor, `id_rota LIKE '${aspas(cod)}%'`, 'id_rota,ponto,horario,sentido,observacao'))
                        .filter((r) => String(r.id_rota || '').startsWith(cod + '_'));
                    b = rows.length > 0;
                }
                rows.forEach((r) => { r._h = hhmm(r.horario); r._m = minutos(r._h); });
                rows.sort((a, z) => a._m - z._m);
                if (vivo) {
                    setLinha(l);
                    setHor(rows);
                    setPlanoB(b);
                    setCarregando(false);
                }
            }
            catch (e) {
                console.warn('[Horários da Linha]', e);
                if (vivo) {
                    setErro('Não foi possível carregar os horários.');
                    setCarregando(false);
                }
            }
        }))();
        return () => { vivo = false; };
    }, [oid, urlLin, urlHor]);
    // ---- peças visuais ----
    const mapaId = (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0];
    const conector = mapaId ? h(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: mapaId, onActiveViewChange: (v) => setJmv(v) }) : null;
    const icone = (nome, cor = C.suave, escala = 's') => h(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteIcon, { icon: nome, scale: escala, style: { color: cor, flex: 'none' } });
    const rotulo = (txt) => h('div', { style: { fontSize: 11, fontWeight: 500, letterSpacing: 0.3, color: C.suave, textTransform: 'uppercase' } }, txt);
    const aviso = (kind, ic, titulo, msg, link = null) => h(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteNotice, { open: true, kind, icon: ic, scale: 's', width: 'full' }, titulo ? h('div', { slot: 'title' }, titulo) : null, h('div', { slot: 'message' }, msg), link ? h('div', { slot: 'link' }, link) : null);
    const cabecalho = h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 } }, h('div', { style: { fontSize: 15, fontWeight: 600, color: C.texto } }, 'Tabela de horários'), h('label', { style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: C.texto2, cursor: 'pointer', userSelect: 'none' },
        title: 'Mostrar no mapa só as paradas da linha selecionada' }, h('span', null, 'Paradas' + (mostrar && nParadas !== null ? ` (${nParadas})` : '')), h(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteSwitch, { scale: 's', checked: mostrar, onCalciteSwitchChange: (e) => { var _a; return setMostrar(!!((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked)); } })));
    const caixa = (filhos) => h('div', {
        className: 'jimu-widget horarios-linha',
        style: { width: '100%', height: '100%', boxSizing: 'border-box', background: C.fundo, color: C.texto, borderRadius: 8,
            border: `1px solid ${C.borda}`, padding: 14, overflowY: 'auto', fontFamily: FONTE,
            display: 'flex', flexDirection: 'column', gap: 12 }
    }, conector, cabecalho, ...filhos);
    const botaoTempoReal = (cod, appearance = 'solid') => h(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteButton, {
        href: linkTempoReal(cod), target: '_blank', rel: 'noopener noreferrer', kind: 'brand', appearance, scale: 'm', width: 'full',
        iconStart: 'bus', iconEnd: 'launch'
    }, cod ? `Ônibus da linha ${cod} em tempo real` : 'Ônibus em tempo real');
    const ligarParadas = h(calcite_components__WEBPACK_IMPORTED_MODULE_2__.CalciteButton, { appearance: 'transparent', kind: 'brand', scale: 's', iconStart: 'pin-tear',
        onClick: () => setMostrar(true) }, 'Mostrar paradas');
    if (!oid) {
        return caixa([
            h('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '24px 8px', textAlign: 'center' } }, icone('bus', C.apagado, 'l'), h('div', { style: { fontSize: 14, color: C.texto2 } }, 'Selecione uma linha na lista para ver os horários.')),
            botaoTempoReal(null, 'outline'),
            aviso('brand', 'lightbulb', null, 'Depois de escolher a linha, ligue “Paradas” para ver no mapa os pontos de ônibus dela.')
        ]);
    }
    if (carregando)
        return caixa([h('div', { style: { margin: 'auto', color: C.suave, fontSize: 13 } }, 'Carregando horários…')]);
    if (erro || !linha)
        return caixa([aviso('danger', 'exclamation-mark-triangle', null, erro || 'Linha não encontrada.')]);
    try {
        const dow = agora.getDay();
        const diaUtil = dow >= 1 && dow <= 5;
        const minAgora = agora.getHours() * 60 + agora.getMinutes();
        const proxima = diaUtil ? hor.find((r) => r._m >= minAgora) : null;
        const destaque = proxima ? proxima._h : (((_b = hor[0]) === null || _b === void 0 ? void 0 : _b._h) || '—');
        let sub = '';
        if (!hor.length)
            sub = 'Sem horários na base da Prefeitura';
        else if (!diaUtil)
            sub = 'Fim de semana · primeira saída em dia útil';
        else if (proxima) {
            const d = proxima._m - minAgora;
            sub = d === 0 ? 'Saindo agora' : `Próxima saída · em ${d >= 60 ? Math.floor(d / 60) + ' h ' : ''}${d % 60} min`;
        }
        else
            sub = 'Sem mais saídas hoje · primeira amanhã';
        const grupos = {};
        hor.forEach((r) => {
            const k = (planoB ? (r.sentido || 'Outro sentido') + ' · ' : '') + (r.ponto || '—');
            (grupos[k] = grupos[k] || []).push(r);
        });
        const obs = Array.from(new Set(hor.map((r) => String(r.observacao || '').trim()).filter((x) => x && x !== '-')));
        return caixa([
            // linha
            h('div', { style: { borderBottom: `1px solid ${C.borda}`, paddingBottom: 10 } }, h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8 } }, h('span', { style: { fontSize: 20, fontWeight: 700, color: C.marca } }, String((_c = linha.cod_linha) !== null && _c !== void 0 ? _c : '')), h('span', { style: { fontSize: 16, fontWeight: 600, color: C.texto, lineHeight: 1.25 } }, linha.nome || '')), h('div', { style: { fontSize: 12, color: C.suave, marginTop: 2 } }, `Sentido ${linha.sentido || '—'} · dias úteis`)),
            botaoTempoReal(linha.cod_linha),
            !mostrar ? aviso('brand', 'lightbulb', null, `Veja no mapa as paradas da linha ${linha.cod_linha} neste sentido. Passe o mouse sobre uma parada para ver o nome.`, ligarParadas) : null,
            // próxima saída
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, background: C.fundo2, borderRadius: 8,
                    borderLeft: `3px solid ${C.ouro}`, padding: '10px 12px' } }, icone('clock', C.marca, 'm'), h('div', null, rotulo(sub || 'Horário'), h('div', { style: { fontSize: 28, fontWeight: 700, lineHeight: 1.1, color: C.texto, fontVariantNumeric: 'tabular-nums' } }, destaque))),
            planoB ? aviso('warning', 'information', null, `Este sentido não tem horários próprios. Abaixo, as saídas da linha ${linha.cod_linha} nos outros sentidos.`) : null,
            // todos os horários
            ...Object.keys(grupos).map((k) => h('div', { key: k, style: { display: 'flex', flexDirection: 'column', gap: 6 } }, h('div', { style: { display: 'flex', alignItems: 'center', gap: 4 } }, icone('pin-tear', C.suave, 's'), rotulo('Saída: ' + k)), h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 4 } }, ...grupos[k].map((r, i) => {
                const passou = diaUtil && r._m < minAgora;
                const ehProx = proxima && r === proxima;
                return h('span', { key: i, style: { padding: '3px 8px', borderRadius: 4, fontSize: 13, fontVariantNumeric: 'tabular-nums',
                        border: `1px solid ${ehProx ? C.ouro : C.borda}`, background: ehProx ? C.ouro : C.fundo,
                        color: passou ? C.apagado : C.texto, fontWeight: ehProx ? 700 : 500 } }, r._h);
            })))),
            obs.length ? h('div', null, rotulo('Observação'), h('div', { style: { fontSize: 12, color: C.texto2 } }, obs.join(' · '))) : null,
            h('div', { style: { fontSize: 11, color: C.apagado, marginTop: 'auto' } }, `${hor.length} horários · fonte: setor de transportes`)
        ]);
    }
    catch (e) {
        console.error('[Horários da Linha]', e);
        return caixa([aviso('danger', 'exclamation-mark-triangle', null, 'Erro no widget: ' + String((e === null || e === void 0 ? void 0 : e.message) || e))]);
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9ob3Jhcmlvcy1saW5oYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQseUlBQXlJO0FBQ3pJLHlGQUF5RjtBQUN0QjtBQUNqQjtBQUMyQztBQUU3RixNQUFNLENBQUMsR0FBRyw0Q0FBSyxDQUFDLGFBQWE7QUFDN0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyw0Q0FBSztBQUVyQywrREFBK0Q7QUFDL0QsTUFBTSxDQUFDLEdBQUc7SUFDUixLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVM7SUFDNUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTO0NBQ3REO0FBQ0QsTUFBTSxLQUFLLEdBQUcsaURBQWlEO0FBRS9ELFNBQVMs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QUUsT0FBWSxJQUFJLEVBQUUsRUFBRSxDQUM1RixDQUFDLENBQUMsNkRBQW9CLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMvRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDbkQsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFbkQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUN0SCxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxFQUM1RixDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxN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Q0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJjYWxjaXRlLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2hvcmFyaW9zLWxpbmhhL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhbGNpdGVfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvLyBIb3LDoXJpb3MgZGEgTGluaGEg4oCTIEdlb0FQVUMgKHY5OiDDrWNvbmUgcGluLXRlYXIgbmFzIHNhw61kYXM7IHZpc3VhbCBubyBwYWRyw6NvIGRvcyB3aWRnZXRzIGRvcyBERVZzIOKAlCBDYWxjaXRlLCBzZW0gZW1vamlzL3DDrWx1bGFzL3NlbG9zKVxuLy8gRXNjcml0byBzZW0gSlNYIChSZWFjdC5jcmVhdGVFbGVtZW50KSBwYXJhIG7Do28gZGVwZW5kZXIgZGEgY29uZmlndXJhw6fDo28gZGUgY29tcGlsYcOnw6NvLlxuaW1wb3J0IHsgUmVhY3QsIGdldEFwcFN0b3JlLCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IENhbGNpdGVCdXR0b24sIENhbGNpdGVJY29uLCBDYWxjaXRlTm90aWNlLCBDYWxjaXRlU3dpdGNoIH0gZnJvbSAnY2FsY2l0ZS1jb21wb25lbnRzJ1xuXG5jb25zdCBoID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBSZWFjdFxuXG4vLyBwYWxldGEgZG9zIHdpZGdldHMgZG9zIERFVnMgKGh1YikgKyBhenVsIGRhIGNhc2NhIGhvbW9sb2dhZGFcbmNvbnN0IEMgPSB7XG4gIGZ1bmRvOiAnI0ZGRkZGRicsIGZ1bmRvMjogJyNGNUY3RkEnLCBib3JkYTogJyNFNUU3RUInLCB0ZXh0bzogJyMxRjI5MzcnLCB0ZXh0bzI6ICcjNEI1NTYzJywgc3VhdmU6ICcjNkI3MjgwJyxcbiAgYXBhZ2FkbzogJyM5Q0EzQUYnLCBtYXJjYTogJyM0NDYzQTknLCBvdXJvOiAnI0Y1QzQwMCdcbn1cbmNvbnN0IEZPTlRFID0gXCJJbnRlciwgJ0F2ZW5pciBOZXh0JywgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZlwiXG5cbmZ1bmN0aW9uIGhobW0gKHY6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IHMgPSBTdHJpbmcodiA/PyAnJykudHJpbSgpXG4gIGNvbnN0IG0gPSBzLm1hdGNoKC9eKFxcZHsxLDJ9KTooXFxkezJ9KS8pXG4gIHJldHVybiBtID8gYCR7bVsxXS5wYWRTdGFydCgyLCAnMCcpfToke21bMl19YCA6IHNcbn1cbmZ1bmN0aW9uIG1pbnV0b3MgKHY6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG0gPSB2Lm1hdGNoKC9eKFxcZHsyfSk6KFxcZHsyfSkvKVxuICByZXR1cm4gbSA/IE51bWJlcihtWzFdKSAqIDYwICsgTnVtYmVyKG1bMl0pIDogLTFcbn1cbmZ1bmN0aW9uIGNoYXZlU2VudGlkbyAodjogYW55KTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZyh2ID8/ICcnKS5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1vMgC3Nr10vZywgJycpLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvc2VudGlkbyBwYXJhL2csICcnKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpXG59XG5mdW5jdGlvbiBhc3BhcyAodjogYW55KTogc3RyaW5nIHsgcmV0dXJuIFN0cmluZyh2ID8/ICcnKS5yZXBsYWNlKC8nL2csIFwiJydcIikgfVxuXG5hc3luYyBmdW5jdGlvbiBjb25zdWx0YXIgKHVybDogc3RyaW5nLCB3aGVyZTogc3RyaW5nLCBjYW1wb3M6IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcbiAgY29uc3QgcSA9IGAke3VybH0vcXVlcnk/d2hlcmU9JHtlbmNvZGVVUklDb21wb25lbnQod2hlcmUpfSZvdXRGaWVsZHM9JHtjYW1wb3N9JnJldHVybkdlb21ldHJ5PWZhbHNlJmY9anNvbmBcbiAgY29uc3QgajogYW55ID0gYXdhaXQgZmV0Y2gocSkudGhlbihyID0+IHIuanNvbigpKVxuICBpZiAoai5lcnJvcikgdGhyb3cgbmV3IEVycm9yKGouZXJyb3IubWVzc2FnZSB8fCAnZXJybyBuYSBjb25zdWx0YScpXG4gIHJldHVybiAoai5mZWF0dXJlcyB8fCBbXSkubWFwKChmOiBhbnkpID0+IGYuYXR0cmlidXRlcyB8fCB7fSlcbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbnRhciAodXJsOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xuICBjb25zdCBxID0gYCR7dXJsfS9xdWVyeT93aGVyZT0ke2VuY29kZVVSSUNvbXBvbmVudCh3aGVyZSl9JnJldHVybkNvdW50T25seT10cnVlJmY9anNvbmBcbiAgY29uc3QgajogYW55ID0gYXdhaXQgZmV0Y2gocSkudGhlbihyID0+IHIuanNvbigpKVxuICBpZiAoai5lcnJvcikgdGhyb3cgbmV3IEVycm9yKGouZXJyb3IubWVzc2FnZSB8fCAnZXJybyBuYSBjb250YWdlbScpXG4gIHJldHVybiBOdW1iZXIoai5jb3VudCB8fCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XG4gIGNvbnN0IGNmZzogYW55ID0gcHJvcHMuY29uZmlnIHx8IHt9XG4gIGNvbnN0IGRzSWQ6IHN0cmluZyA9IGNmZy5kYXRhU291cmNlSWQgfHwgJ2RhdGFTb3VyY2VfMS1saW5oYXNfb25pYnVzJ1xuICBjb25zdCB1cmxMaW46IHN0cmluZyA9IGNmZy5saW5oYXNVcmxcbiAgY29uc3QgdXJsSG9yOiBzdHJpbmcgPSBjZmcuaG9yYXJpb3NVcmxcbiAgY29uc3QgdXJsUGFyOiBzdHJpbmcgPSBjZmcucGFyYWRhc1VybFxuICBjb25zdCBpZENhbWFkYVBhcmFkYXM6IHN0cmluZyA9IGNmZy5wYXJhZGFzTGF5ZXJJZCB8fCAncGFyYWRhc19vbmlidXMnXG4gIGNvbnN0IG1iQmFzZTogc3RyaW5nID0gY2ZnLm1vYmlsaWJ1c1VybCB8fCAnaHR0cHM6Ly9lZGl0b3IubW9iaWxpYnVzLmNvbS93ZWIvZGV0YWxoZXMtbGluaGEvNGFicDknXG4gIGNvbnN0IG1iQ29kOiBhbnkgPSBjZmcubW9iaWxpYnVzTGluaGFzIHx8IHt9XG4gIGNvbnN0IGxpbmtUZW1wb1JlYWwgPSAoY29kOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGMgPSBtYkNvZFtTdHJpbmcoY29kID8/ICcnKS50cmltKCldXG4gICAgcmV0dXJuIGMgPyBgJHttYkJhc2V9IyR7Y31gIDogbWJCYXNlXG4gIH1cblxuICAvLyAtLS0tIGxpbmhhIHNlbGVjaW9uYWRhIG5hIGxpc3RhIChlc3RhZG8gZG8gYXBwKSAtLS0tXG4gIGNvbnN0IGxlclNlbGVjYW8gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluZjogYW55ID0gKGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKSBhcyBhbnkpPy5kYXRhU291cmNlc0luZm8gfHwge31cbiAgICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyhpbmYpKSB7XG4gICAgICAgIGlmIChrID09PSBkc0lkIHx8IGsuc3RhcnRzV2l0aChkc0lkICsgJy0nKSkge1xuICAgICAgICAgIGNvbnN0IGlkcyA9IGluZltrXT8uc2VsZWN0ZWRJZHNcbiAgICAgICAgICBpZiAoaWRzICYmIGlkcy5sZW5ndGgpIHJldHVybiBTdHJpbmcoaWRzWzBdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkgeyBjb25zb2xlLndhcm4oJ1tIb3LDoXJpb3MgZGEgTGluaGFdIHNlbGXDp8OjbycsIGUpIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IFtvaWQsIHNldE9pZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihsZXJTZWxlY2FvKCkpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmU6IGFueSA9IGdldEFwcFN0b3JlKClcbiAgICBjb25zdCBkZXNmYXplciA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBub3ZvID0gbGVyU2VsZWNhbygpXG4gICAgICBzZXRPaWQoYXR1YWwgPT4gKGF0dWFsID09PSBub3ZvID8gYXR1YWwgOiBub3ZvKSlcbiAgICB9KVxuICAgIHJldHVybiAoKSA9PiB7IHRyeSB7IGRlc2ZhemVyKCkgfSBjYXRjaCAoZSkge30gfVxuICB9LCBbZHNJZF0pXG5cbiAgY29uc3QgW2xpbmhhLCBzZXRMaW5oYV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IFtob3IsIHNldEhvcl0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXG4gIGNvbnN0IFtwbGFub0IsIHNldFBsYW5vQl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2NhcnJlZ2FuZG8sIHNldENhcnJlZ2FuZG9dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtlcnJvLCBzZXRFcnJvXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFthZ29yYSwgc2V0QWdvcmFdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSlcbiAgdXNlRWZmZWN0KCgpID0+IHsgY29uc3QgdCA9IHNldEludGVydmFsKCgpID0+IHNldEFnb3JhKG5ldyBEYXRlKCkpLCA2MDAwMCk7IHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHQpIH0sIFtdKVxuXG4gIC8vIC0tLS0gcGFyYWRhcyAoY2FtYWRhIE1vYmlsaWJ1cywgZmlsdHJvIHBlbG8gY2FtcG8gJ3ZpYWdlbnMnKSAtLS0tXG4gIGNvbnN0IFtqbXYsIHNldEptdl0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IFttb3N0cmFyLCBzZXRNb3N0cmFyXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCEhY2ZnLnBhcmFkYXNMaWdhZG9Bb0FicmlyKVxuICBjb25zdCBbblBhcmFkYXMsIHNldE5QYXJhZGFzXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdjogYW55ID0gam12Py52aWV3XG4gICAgaWYgKCF2IHx8ICF1cmxQYXIpIHJldHVyblxuICAgIGNvbnN0IGx5cjogYW55ID0gdi5tYXAuYWxsTGF5ZXJzLmZpbmQoKGw6IGFueSkgPT4gbC5pZCA9PT0gaWRDYW1hZGFQYXJhZGFzKVxuICAgIGlmICghbHlyKSB7IGNvbnNvbGUud2FybignW0hvcsOhcmlvcyBkYSBMaW5oYV0gY2FtYWRhIGRlIHBhcmFkYXMgbsOjbyBlbmNvbnRyYWRhOicsIGlkQ2FtYWRhUGFyYWRhcyk7IHJldHVybiB9XG4gICAgbGV0IHZpdm8gPSB0cnVlXG4gICAgaWYgKCFtb3N0cmFyKSB7IGx5ci52aXNpYmxlID0gZmFsc2U7IHNldE5QYXJhZGFzKG51bGwpOyByZXR1cm4gfVxuICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFvaWQpIHsgbHlyLmRlZmluaXRpb25FeHByZXNzaW9uID0gJzE9MCc7IGx5ci52aXNpYmxlID0gdHJ1ZTsgaWYgKHZpdm8pIHNldE5QYXJhZGFzKDApOyByZXR1cm4gfVxuICAgICAgICBjb25zdCBsID0gKGF3YWl0IGNvbnN1bHRhcih1cmxMaW4sIGBvYmplY3RpZD0ke051bWJlcihvaWQpfWAsICdjb2RfbGluaGEsc2VudGlkbycpKVswXSB8fCB7fVxuICAgICAgICBjb25zdCBjb2QgPSBTdHJpbmcobC5jb2RfbGluaGEgPz8gJycpLnRyaW0oKVxuICAgICAgICBsZXQgd2hlcmUgPSBgdmlhZ2VucyBMSUtFICclOyR7YXNwYXMoY29kICsgJzonICsgY2hhdmVTZW50aWRvKGwuc2VudGlkbykpfTslJ2BcbiAgICAgICAgbGV0IG4gPSBhd2FpdCBjb250YXIodXJsUGFyLCB3aGVyZSlcbiAgICAgICAgaWYgKCFuKSB7IHdoZXJlID0gYGxpbmhhcyBMSUtFICclLCR7YXNwYXMoY29kKX0sJSdgOyBuID0gYXdhaXQgY29udGFyKHVybFBhciwgd2hlcmUpIH1cbiAgICAgICAgaWYgKCF2aXZvKSByZXR1cm5cbiAgICAgICAgbHlyLmRlZmluaXRpb25FeHByZXNzaW9uID0gbiA/IHdoZXJlIDogJzE9MCdcbiAgICAgICAgbHlyLnZpc2libGUgPSB0cnVlXG4gICAgICAgIHNldE5QYXJhZGFzKG4pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0hvcsOhcmlvcyBkYSBMaW5oYV0gcGFyYWRhcycsIGUpXG4gICAgICAgIGlmICh2aXZvKSBzZXROUGFyYWRhcyhudWxsKVxuICAgICAgfVxuICAgIH0pKClcbiAgICByZXR1cm4gKCkgPT4geyB2aXZvID0gZmFsc2UgfVxuICB9LCBbam12LCBtb3N0cmFyLCBvaWQsIHVybFBhciwgdXJsTGluLCBpZENhbWFkYVBhcmFkYXNdKVxuXG4gIC8vIG5vbWUgZGEgcGFyYWRhIGFvIHBhc3NhciBvIG1vdXNlIChvdSB0b2NhcilcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2OiBhbnkgPSBqbXY/LnZpZXdcbiAgICBpZiAoIXYpIHJldHVyblxuICAgIGNvbnN0IGx5cjogYW55ID0gdi5tYXAuYWxsTGF5ZXJzLmZpbmQoKGw6IGFueSkgPT4gbC5pZCA9PT0gaWRDYW1hZGFQYXJhZGFzKVxuICAgIGlmICghbHlyKSByZXR1cm5cbiAgICB0cnkgeyBseXIub3V0RmllbGRzID0gWydub21lJ10gfSBjYXRjaCAoZSkge31cbiAgICBjb25zdCBkaWNhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBPYmplY3QuYXNzaWduKGRpY2Euc3R5bGUsIHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIGRpc3BsYXk6ICdub25lJywgcG9pbnRlckV2ZW50czogJ25vbmUnLCB6SW5kZXg6ICc5OScsIG1heFdpZHRoOiAnMjYwcHgnLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCBjb2xvcjogQy50ZXh0bywgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkYX1gLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiAnNTAwJywgZm9udEZhbWlseTogRk9OVEUsIGJveFNoYWRvdzogJzAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSknLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9KVxuICAgIHYuY29udGFpbmVyLmFwcGVuZENoaWxkKGRpY2EpXG4gICAgbGV0IG9jdXBhZG8gPSBmYWxzZVxuICAgIGNvbnN0IG1vc3RyYXJEaWNhID0gKGV2OiBhbnkpID0+IHtcbiAgICAgIGlmIChvY3VwYWRvIHx8ICFseXIudmlzaWJsZSkgeyBpZiAoIWx5ci52aXNpYmxlKSBkaWNhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IHJldHVybiB9XG4gICAgICBvY3VwYWRvID0gdHJ1ZVxuICAgICAgdi5oaXRUZXN0KGV2LCB7IGluY2x1ZGU6IFtseXJdIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgIG9jdXBhZG8gPSBmYWxzZVxuICAgICAgICBjb25zdCBnID0gKHJlcz8ucmVzdWx0cyB8fCBbXSkuZmluZCgocjogYW55KSA9PiByLmdyYXBoaWM/LmxheWVyPy5pZCA9PT0gaWRDYW1hZGFQYXJhZGFzKT8uZ3JhcGhpY1xuICAgICAgICBpZiAoZykge1xuICAgICAgICAgIGRpY2EudGV4dENvbnRlbnQgPSAnUGFyYWRhOiAnICsgKGcuYXR0cmlidXRlcz8ubm9tZSB8fCAnc2VtIG5vbWUnKVxuICAgICAgICAgIGRpY2Euc3R5bGUubGVmdCA9IChldi54ICsgMTQpICsgJ3B4JzsgZGljYS5zdHlsZS50b3AgPSAoZXYueSArIDE0KSArICdweCc7IGRpY2Euc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICB2LmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcidcbiAgICAgICAgfSBlbHNlIHsgZGljYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB2LmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnJyB9XG4gICAgICB9KS5jYXRjaCgoKSA9PiB7IG9jdXBhZG8gPSBmYWxzZSB9KVxuICAgIH1cbiAgICBjb25zdCBoMSA9IHYub24oJ3BvaW50ZXItbW92ZScsIG1vc3RyYXJEaWNhKVxuICAgIGNvbnN0IGgyID0gdi5vbignY2xpY2snLCBtb3N0cmFyRGljYSlcbiAgICBjb25zdCBoMyA9IHYub24oJ3BvaW50ZXItbGVhdmUnLCAoKSA9PiB7IGRpY2Euc3R5bGUuZGlzcGxheSA9ICdub25lJyB9KVxuICAgIHJldHVybiAoKSA9PiB7IHRyeSB7IGgxLnJlbW92ZSgpOyBoMi5yZW1vdmUoKTsgaDMucmVtb3ZlKCk7IGRpY2EucmVtb3ZlKCkgfSBjYXRjaCAoZSkge30gfVxuICB9LCBbam12LCBpZENhbWFkYVBhcmFkYXNdKVxuXG4gIC8vIC0tLS0gaG9yw6FyaW9zIGRhIGxpbmhhIC0tLS1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdml2byA9IHRydWVcbiAgICBpZiAoIW9pZCkgeyBzZXRMaW5oYShudWxsKTsgc2V0SG9yKFtdKTsgcmV0dXJuIH1cbiAgICBzZXRDYXJyZWdhbmRvKHRydWUpOyBzZXRFcnJvKG51bGwpXG4gICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsID0gKGF3YWl0IGNvbnN1bHRhcih1cmxMaW4sIGBvYmplY3RpZD0ke051bWJlcihvaWQpfWAsICdvYmplY3RpZCxpZF9yb3RhLGNvZF9saW5oYSxub21lLHNlbnRpZG8nKSlbMF1cbiAgICAgICAgaWYgKCFsKSB0aHJvdyBuZXcgRXJyb3IoJ2xpbmhhIG7Do28gZW5jb250cmFkYScpXG4gICAgICAgIGxldCByb3dzID0gYXdhaXQgY29uc3VsdGFyKHVybEhvciwgYGlkX3JvdGE9JyR7YXNwYXMobC5pZF9yb3RhKX0nYCwgJ2lkX3JvdGEscG9udG8saG9yYXJpbyxzZW50aWRvLG9ic2VydmFjYW8nKVxuICAgICAgICBsZXQgYiA9IGZhbHNlXG4gICAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBjb2QgPSBTdHJpbmcobC5pZF9yb3RhIHx8ICcnKS5zcGxpdCgnXycpWzBdXG4gICAgICAgICAgcm93cyA9IChhd2FpdCBjb25zdWx0YXIodXJsSG9yLCBgaWRfcm90YSBMSUtFICcke2FzcGFzKGNvZCl9JSdgLCAnaWRfcm90YSxwb250byxob3JhcmlvLHNlbnRpZG8sb2JzZXJ2YWNhbycpKVxuICAgICAgICAgICAgLmZpbHRlcigocjogYW55KSA9PiBTdHJpbmcoci5pZF9yb3RhIHx8ICcnKS5zdGFydHNXaXRoKGNvZCArICdfJykpXG4gICAgICAgICAgYiA9IHJvd3MubGVuZ3RoID4gMFxuICAgICAgICB9XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocjogYW55KSA9PiB7IHIuX2ggPSBoaG1tKHIuaG9yYXJpbyk7IHIuX20gPSBtaW51dG9zKHIuX2gpIH0pXG4gICAgICAgIHJvd3Muc29ydCgoYTogYW55LCB6OiBhbnkpID0+IGEuX20gLSB6Ll9tKVxuICAgICAgICBpZiAodml2bykgeyBzZXRMaW5oYShsKTsgc2V0SG9yKHJvd3MpOyBzZXRQbGFub0IoYik7IHNldENhcnJlZ2FuZG8oZmFsc2UpIH1cbiAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tIb3LDoXJpb3MgZGEgTGluaGFdJywgZSlcbiAgICAgICAgaWYgKHZpdm8pIHsgc2V0RXJybygnTsOjbyBmb2kgcG9zc8OtdmVsIGNhcnJlZ2FyIG9zIGhvcsOhcmlvcy4nKTsgc2V0Q2FycmVnYW5kbyhmYWxzZSkgfVxuICAgICAgfVxuICAgIH0pKClcbiAgICByZXR1cm4gKCkgPT4geyB2aXZvID0gZmFsc2UgfVxuICB9LCBbb2lkLCB1cmxMaW4sIHVybEhvcl0pXG5cbiAgLy8gLS0tLSBwZcOnYXMgdmlzdWFpcyAtLS0tXG4gIGNvbnN0IG1hcGFJZDogYW55ID0gKHByb3BzIGFzIGFueSkudXNlTWFwV2lkZ2V0SWRzPy5bMF1cbiAgY29uc3QgY29uZWN0b3IgPSBtYXBhSWQgPyBoKEppbXVNYXBWaWV3Q29tcG9uZW50IGFzIGFueSwgeyB1c2VNYXBXaWRnZXRJZDogbWFwYUlkLCBvbkFjdGl2ZVZpZXdDaGFuZ2U6ICh2OiBhbnkpID0+IHNldEptdih2KSB9KSA6IG51bGxcbiAgY29uc3QgaWNvbmUgPSAobm9tZTogc3RyaW5nLCBjb3I6IHN0cmluZyA9IEMuc3VhdmUsIGVzY2FsYTogc3RyaW5nID0gJ3MnKSA9PlxuICAgIGgoQ2FsY2l0ZUljb24gYXMgYW55LCB7IGljb246IG5vbWUsIHNjYWxlOiBlc2NhbGEsIHN0eWxlOiB7IGNvbG9yOiBjb3IsIGZsZXg6ICdub25lJyB9IH0pXG4gIGNvbnN0IHJvdHVsbyA9ICh0eHQ6IHN0cmluZykgPT4gaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDUwMCwgbGV0dGVyU3BhY2luZzogMC4zLCBjb2xvcjogQy5zdWF2ZSwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfSB9LCB0eHQpXG4gIGNvbnN0IGF2aXNvID0gKGtpbmQ6IHN0cmluZywgaWM6IHN0cmluZywgdGl0dWxvOiBzdHJpbmcgfCBudWxsLCBtc2c6IGFueSwgbGluazogYW55ID0gbnVsbCkgPT5cbiAgICBoKENhbGNpdGVOb3RpY2UgYXMgYW55LCB7IG9wZW46IHRydWUsIGtpbmQsIGljb246IGljLCBzY2FsZTogJ3MnLCB3aWR0aDogJ2Z1bGwnIH0sXG4gICAgICB0aXR1bG8gPyBoKCdkaXYnLCB7IHNsb3Q6ICd0aXRsZScgfSwgdGl0dWxvKSA6IG51bGwsXG4gICAgICBoKCdkaXYnLCB7IHNsb3Q6ICdtZXNzYWdlJyB9LCBtc2cpLFxuICAgICAgbGluayA/IGgoJ2RpdicsIHsgc2xvdDogJ2xpbmsnIH0sIGxpbmspIDogbnVsbClcblxuICBjb25zdCBjYWJlY2FsaG8gPSBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogOCB9IH0sXG4gICAgaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMudGV4dG8gfSB9LCAnVGFiZWxhIGRlIGhvcsOhcmlvcycpLFxuICAgIGgoJ2xhYmVsJywgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIGZvbnRTaXplOiAxMiwgY29sb3I6IEMudGV4dG8yLCBjdXJzb3I6ICdwb2ludGVyJywgdXNlclNlbGVjdDogJ25vbmUnIH0sXG4gICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9zdHJhciBubyBtYXBhIHPDsyBhcyBwYXJhZGFzIGRhIGxpbmhhIHNlbGVjaW9uYWRhJyB9LFxuICAgICAgaCgnc3BhbicsIG51bGwsICdQYXJhZGFzJyArIChtb3N0cmFyICYmIG5QYXJhZGFzICE9PSBudWxsID8gYCAoJHtuUGFyYWRhc30pYCA6ICcnKSksXG4gICAgICBoKENhbGNpdGVTd2l0Y2ggYXMgYW55LCB7IHNjYWxlOiAncycsIGNoZWNrZWQ6IG1vc3RyYXIsIG9uQ2FsY2l0ZVN3aXRjaENoYW5nZTogKGU6IGFueSkgPT4gc2V0TW9zdHJhcighIWU/LnRhcmdldD8uY2hlY2tlZCkgfSkpKVxuXG4gIGNvbnN0IGNhaXhhID0gKGZpbGhvczogYW55W10pID0+IGgoJ2RpdicsIHtcbiAgICBjbGFzc05hbWU6ICdqaW11LXdpZGdldCBob3Jhcmlvcy1saW5oYScsXG4gICAgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBiYWNrZ3JvdW5kOiBDLmZ1bmRvLCBjb2xvcjogQy50ZXh0bywgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGF9YCwgcGFkZGluZzogMTQsIG92ZXJmbG93WTogJ2F1dG8nLCBmb250RmFtaWx5OiBGT05URSxcbiAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDEyIH1cbiAgfSwgY29uZWN0b3IsIGNhYmVjYWxobywgLi4uZmlsaG9zKVxuXG4gIGNvbnN0IGJvdGFvVGVtcG9SZWFsID0gKGNvZDogYW55LCBhcHBlYXJhbmNlOiBzdHJpbmcgPSAnc29saWQnKSA9PiBoKENhbGNpdGVCdXR0b24gYXMgYW55LCB7XG4gICAgaHJlZjogbGlua1RlbXBvUmVhbChjb2QpLCB0YXJnZXQ6ICdfYmxhbmsnLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJywga2luZDogJ2JyYW5kJywgYXBwZWFyYW5jZSwgc2NhbGU6ICdtJywgd2lkdGg6ICdmdWxsJyxcbiAgICBpY29uU3RhcnQ6ICdidXMnLCBpY29uRW5kOiAnbGF1bmNoJ1xuICB9LCBjb2QgPyBgw5RuaWJ1cyBkYSBsaW5oYSAke2NvZH0gZW0gdGVtcG8gcmVhbGAgOiAnw5RuaWJ1cyBlbSB0ZW1wbyByZWFsJylcblxuICBjb25zdCBsaWdhclBhcmFkYXMgPSBoKENhbGNpdGVCdXR0b24gYXMgYW55LCB7IGFwcGVhcmFuY2U6ICd0cmFuc3BhcmVudCcsIGtpbmQ6ICdicmFuZCcsIHNjYWxlOiAncycsIGljb25TdGFydDogJ3Bpbi10ZWFyJyxcbiAgICBvbkNsaWNrOiAoKSA9PiBzZXRNb3N0cmFyKHRydWUpIH0sICdNb3N0cmFyIHBhcmFkYXMnKVxuXG4gIGlmICghb2lkKSB7XG4gICAgcmV0dXJuIGNhaXhhKFtcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgcGFkZGluZzogJzI0cHggOHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgIGljb25lKCdidXMnLCBDLmFwYWdhZG8sICdsJyksXG4gICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE0LCBjb2xvcjogQy50ZXh0bzIgfSB9LCAnU2VsZWNpb25lIHVtYSBsaW5oYSBuYSBsaXN0YSBwYXJhIHZlciBvcyBob3LDoXJpb3MuJykpLFxuICAgICAgYm90YW9UZW1wb1JlYWwobnVsbCwgJ291dGxpbmUnKSxcbiAgICAgIGF2aXNvKCdicmFuZCcsICdsaWdodGJ1bGInLCBudWxsLCAnRGVwb2lzIGRlIGVzY29saGVyIGEgbGluaGEsIGxpZ3VlIOKAnFBhcmFkYXPigJ0gcGFyYSB2ZXIgbm8gbWFwYSBvcyBwb250b3MgZGUgw7RuaWJ1cyBkZWxhLicpXG4gICAgXSlcbiAgfVxuICBpZiAoY2FycmVnYW5kbykgcmV0dXJuIGNhaXhhKFtoKCdkaXYnLCB7IHN0eWxlOiB7IG1hcmdpbjogJ2F1dG8nLCBjb2xvcjogQy5zdWF2ZSwgZm9udFNpemU6IDEzIH0gfSwgJ0NhcnJlZ2FuZG8gaG9yw6FyaW9z4oCmJyldKVxuICBpZiAoZXJybyB8fCAhbGluaGEpIHJldHVybiBjYWl4YShbYXZpc28oJ2RhbmdlcicsICdleGNsYW1hdGlvbi1tYXJrLXRyaWFuZ2xlJywgbnVsbCwgZXJybyB8fCAnTGluaGEgbsOjbyBlbmNvbnRyYWRhLicpXSlcblxuICB0cnkge1xuICAgIGNvbnN0IGRvdyA9IGFnb3JhLmdldERheSgpXG4gICAgY29uc3QgZGlhVXRpbCA9IGRvdyA+PSAxICYmIGRvdyA8PSA1XG4gICAgY29uc3QgbWluQWdvcmEgPSBhZ29yYS5nZXRIb3VycygpICogNjAgKyBhZ29yYS5nZXRNaW51dGVzKClcbiAgICBjb25zdCBwcm94aW1hID0gZGlhVXRpbCA/IGhvci5maW5kKChyOiBhbnkpID0+IHIuX20gPj0gbWluQWdvcmEpIDogbnVsbFxuICAgIGNvbnN0IGRlc3RhcXVlOiBzdHJpbmcgPSBwcm94aW1hID8gcHJveGltYS5faCA6IChob3JbMF0/Ll9oIHx8ICfigJQnKVxuICAgIGxldCBzdWIgPSAnJ1xuICAgIGlmICghaG9yLmxlbmd0aCkgc3ViID0gJ1NlbSBob3LDoXJpb3MgbmEgYmFzZSBkYSBQcmVmZWl0dXJhJ1xuICAgIGVsc2UgaWYgKCFkaWFVdGlsKSBzdWIgPSAnRmltIGRlIHNlbWFuYSDCtyBwcmltZWlyYSBzYcOtZGEgZW0gZGlhIMO6dGlsJ1xuICAgIGVsc2UgaWYgKHByb3hpbWEpIHsgY29uc3QgZCA9IHByb3hpbWEuX20gLSBtaW5BZ29yYTsgc3ViID0gZCA9PT0gMCA/ICdTYWluZG8gYWdvcmEnIDogYFByw7N4aW1hIHNhw61kYSDCtyBlbSAke2QgPj0gNjAgPyBNYXRoLmZsb29yKGQgLyA2MCkgKyAnIGggJyA6ICcnfSR7ZCAlIDYwfSBtaW5gIH1cbiAgICBlbHNlIHN1YiA9ICdTZW0gbWFpcyBzYcOtZGFzIGhvamUgwrcgcHJpbWVpcmEgYW1hbmjDoydcblxuICAgIGNvbnN0IGdydXBvczogYW55ID0ge31cbiAgICBob3IuZm9yRWFjaCgocjogYW55KSA9PiB7XG4gICAgICBjb25zdCBrID0gKHBsYW5vQiA/IChyLnNlbnRpZG8gfHwgJ091dHJvIHNlbnRpZG8nKSArICcgwrcgJyA6ICcnKSArIChyLnBvbnRvIHx8ICfigJQnKVxuICAgICAgOyhncnVwb3Nba10gPSBncnVwb3Nba10gfHwgW10pLnB1c2gocilcbiAgICB9KVxuICAgIGNvbnN0IG9icyA9IEFycmF5LmZyb20obmV3IFNldChob3IubWFwKChyOiBhbnkpID0+IFN0cmluZyhyLm9ic2VydmFjYW8gfHwgJycpLnRyaW0oKSkuZmlsdGVyKCh4OiBzdHJpbmcpID0+IHggJiYgeCAhPT0gJy0nKSkpXG5cbiAgICByZXR1cm4gY2FpeGEoW1xuICAgICAgLy8gbGluaGFcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Qy5ib3JkYX1gLCBwYWRkaW5nQm90dG9tOiAxMCB9IH0sXG4gICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLCBnYXA6IDggfSB9LFxuICAgICAgICAgIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAyMCwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQy5tYXJjYSB9IH0sIFN0cmluZyhsaW5oYS5jb2RfbGluaGEgPz8gJycpKSxcbiAgICAgICAgICBoKCdzcGFuJywgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMudGV4dG8sIGxpbmVIZWlnaHQ6IDEuMjUgfSB9LCBsaW5oYS5ub21lIHx8ICcnKSksXG4gICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5zdWF2ZSwgbWFyZ2luVG9wOiAyIH0gfSwgYFNlbnRpZG8gJHtsaW5oYS5zZW50aWRvIHx8ICfigJQnfSDCtyBkaWFzIMO6dGVpc2ApKSxcbiAgICAgIGJvdGFvVGVtcG9SZWFsKGxpbmhhLmNvZF9saW5oYSksXG4gICAgICAhbW9zdHJhciA/IGF2aXNvKCdicmFuZCcsICdsaWdodGJ1bGInLCBudWxsLFxuICAgICAgICBgVmVqYSBubyBtYXBhIGFzIHBhcmFkYXMgZGEgbGluaGEgJHtsaW5oYS5jb2RfbGluaGF9IG5lc3RlIHNlbnRpZG8uIFBhc3NlIG8gbW91c2Ugc29icmUgdW1hIHBhcmFkYSBwYXJhIHZlciBvIG5vbWUuYCwgbGlnYXJQYXJhZGFzKSA6IG51bGwsXG4gICAgICAvLyBwcsOzeGltYSBzYcOtZGFcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAxMiwgYmFja2dyb3VuZDogQy5mdW5kbzIsIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDNweCBzb2xpZCAke0Mub3Vyb31gLCBwYWRkaW5nOiAnMTBweCAxMnB4JyB9IH0sXG4gICAgICAgIGljb25lKCdjbG9jaycsIEMubWFyY2EsICdtJyksXG4gICAgICAgIGgoJ2RpdicsIG51bGwsIHJvdHVsbyhzdWIgfHwgJ0hvcsOhcmlvJyksXG4gICAgICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMjgsIGZvbnRXZWlnaHQ6IDcwMCwgbGluZUhlaWdodDogMS4xLCBjb2xvcjogQy50ZXh0bywgZm9udFZhcmlhbnROdW1lcmljOiAndGFidWxhci1udW1zJyB9IH0sIGRlc3RhcXVlKSkpLFxuICAgICAgcGxhbm9CID8gYXZpc28oJ3dhcm5pbmcnLCAnaW5mb3JtYXRpb24nLCBudWxsLFxuICAgICAgICBgRXN0ZSBzZW50aWRvIG7Do28gdGVtIGhvcsOhcmlvcyBwcsOzcHJpb3MuIEFiYWl4bywgYXMgc2HDrWRhcyBkYSBsaW5oYSAke2xpbmhhLmNvZF9saW5oYX0gbm9zIG91dHJvcyBzZW50aWRvcy5gKSA6IG51bGwsXG4gICAgICAvLyB0b2RvcyBvcyBob3LDoXJpb3NcbiAgICAgIC4uLk9iamVjdC5rZXlzKGdydXBvcykubWFwKChrOiBzdHJpbmcpID0+IGgoJ2RpdicsIHsga2V5OiBrLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDYgfSB9LFxuICAgICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9IH0sIGljb25lKCdwaW4tdGVhcicsIEMuc3VhdmUsICdzJyksIHJvdHVsbygnU2HDrWRhOiAnICsgaykpLFxuICAgICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiA0IH0gfSxcbiAgICAgICAgICAuLi5ncnVwb3Nba10ubWFwKChyOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFzc291ID0gZGlhVXRpbCAmJiByLl9tIDwgbWluQWdvcmFcbiAgICAgICAgICAgIGNvbnN0IGVoUHJveCA9IHByb3hpbWEgJiYgciA9PT0gcHJveGltYVxuICAgICAgICAgICAgcmV0dXJuIGgoJ3NwYW4nLCB7IGtleTogaSwgc3R5bGU6IHsgcGFkZGluZzogJzNweCA4cHgnLCBib3JkZXJSYWRpdXM6IDQsIGZvbnRTaXplOiAxMywgZm9udFZhcmlhbnROdW1lcmljOiAndGFidWxhci1udW1zJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZWhQcm94ID8gQy5vdXJvIDogQy5ib3JkYX1gLCBiYWNrZ3JvdW5kOiBlaFByb3ggPyBDLm91cm8gOiBDLmZ1bmRvLFxuICAgICAgICAgICAgICBjb2xvcjogcGFzc291ID8gQy5hcGFnYWRvIDogQy50ZXh0bywgZm9udFdlaWdodDogZWhQcm94ID8gNzAwIDogNTAwIH0gfSwgci5faClcbiAgICAgICAgICB9KSkpKSxcbiAgICAgIG9icy5sZW5ndGggPyBoKCdkaXYnLCBudWxsLCByb3R1bG8oJ09ic2VydmHDp8OjbycpLCBoKCdkaXYnLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IEMudGV4dG8yIH0gfSwgb2JzLmpvaW4oJyDCtyAnKSkpIDogbnVsbCxcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDExLCBjb2xvcjogQy5hcGFnYWRvLCBtYXJnaW5Ub3A6ICdhdXRvJyB9IH0sIGAke2hvci5sZW5ndGh9IGhvcsOhcmlvcyDCtyBmb250ZTogc2V0b3IgZGUgdHJhbnNwb3J0ZXNgKVxuICAgIF0pXG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tIb3LDoXJpb3MgZGEgTGluaGFdJywgZSlcbiAgICByZXR1cm4gY2FpeGEoW2F2aXNvKCdkYW5nZXInLCAnZXhjbGFtYXRpb24tbWFyay10cmlhbmdsZScsIG51bGwsICdFcnJvIG5vIHdpZGdldDogJyArIFN0cmluZyhlPy5tZXNzYWdlIHx8IGUpKV0pXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=