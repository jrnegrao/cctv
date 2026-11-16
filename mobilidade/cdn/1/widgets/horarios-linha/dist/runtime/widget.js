System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Horários da Linha – GeoAPUC (v7: dica do 'Mostrar paradas' + nome da parada ao passar o mouse/tocar)
// Mostra os horários (dias úteis) da linha selecionada na lista de linhas.
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.


const h = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement;
const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const TEMAS = {
    escuro: { fundo: '#0f1e33', card: '#16294a', borda: 'rgba(255,255,255,0.10)', texto: '#ffffff', suave: '#9fb0cc',
        destaque: '#F5A623', azul: '#4285F4', verde: '#1D9E75', chip: '#1f3b66', aviso: 'rgba(245,166,35,0.14)' },
    azul: { fundo: '#4463a9', card: 'rgba(255,255,255,0.13)', borda: 'rgba(255,255,255,0.25)', texto: '#ffffff', suave: '#dbe4f5',
        destaque: '#F5A623', azul: '#1b2a4a', verde: '#1D9E75', chip: 'rgba(255,255,255,0.20)', aviso: 'rgba(245,166,35,0.22)' },
    claro: { fundo: '#ffffff', card: '#f4f6fb', borda: '#dfe5ef', texto: '#1b2a4a', suave: '#6b7690',
        destaque: '#4463a9', azul: '#4463a9', verde: '#1f9d55', chip: '#e6ecf8', aviso: '#FFF4E0' }
};
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
    return String(v !== null && v !== void 0 ? v : '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .replace(/sentido para/g, '').replace(/[^a-z0-9]/g, '');
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
function geometriaLinha(urlLin, oid) {
    return __awaiter(this, void 0, void 0, function* () {
        const q = `${urlLin}/query?where=${encodeURIComponent('objectid=' + Number(oid))}&returnGeometry=true&outFields=objectid&f=json`;
        const j = yield fetch(q).then(r => r.json());
        if (j.error)
            throw new Error(j.error.message || 'erro na geometria');
        const f = (j.features || [])[0];
        if (!(f === null || f === void 0 ? void 0 : f.geometry))
            throw new Error('linha sem geometria');
        const g = f.geometry;
        if (!g.spatialReference)
            g.spatialReference = j.spatialReference;
        return g;
    });
}
function paradasPerto(urlPar, geom, metros) {
    return __awaiter(this, void 0, void 0, function* () {
        const corpo = new URLSearchParams({
            geometry: JSON.stringify(geom), geometryType: 'esriGeometryPolyline', spatialRel: 'esriSpatialRelIntersects',
            distance: String(metros), units: 'esriSRUnit_Meter', returnIdsOnly: 'true', f: 'json'
        });
        const j = yield fetch(`${urlPar}/query`, { method: 'POST', body: corpo }).then(r => r.json());
        if (j.error)
            throw new Error(j.error.message || 'erro nas paradas');
        return j.objectIds || [];
    });
}
function relogio(cor, tam) {
    return h('svg', { width: tam, height: tam, viewBox: '0 0 24 24', style: { flex: 'none' } }, h('circle', { cx: 12, cy: 12, r: 10, fill: '#ffffff', stroke: cor, strokeWidth: 2 }), h('path', { d: 'M12 6v6l4 2', fill: 'none', stroke: '#c0392b', strokeWidth: 2, strokeLinecap: 'round' }));
}
function Widget(props) {
    var _a, _b, _c;
    const cfg = props.config || {};
    const dsId = cfg.dataSourceId || 'dataSource_1-linhas_onibus';
    const urlLin = cfg.linhasUrl;
    const urlHor = cfg.horariosUrl;
    const T = TEMAS[cfg.tema] || TEMAS.escuro;
    const mbBase = cfg.mobilibusUrl || 'https://editor.mobilibus.com/web/detalhes-linha/4abp9';
    const mbCod = cfg.mobilibusLinhas || {};
    const linkTempoReal = (cod) => {
        const c = mbCod[String(cod !== null && cod !== void 0 ? cod : '').trim()];
        return c ? `${mbBase}#${c}` : mbBase;
    };
    const botaoTempoReal = (cod, texto) => h('a', {
        href: linkTempoReal(cod), target: '_blank', rel: 'noopener noreferrer',
        style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '9px 12px', borderRadius: 999,
            background: '#d64545', color: '#ffffff', fontWeight: 700, fontSize: 13, textDecoration: 'none' }
    }, h('span', { style: { width: 9, height: 9, borderRadius: '50%', background: '#ffffff', display: 'inline-block' } }), texto);
    // id do registro selecionado na lista (lido do estado do app e acompanhado por assinatura)
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
    // ---- interruptor "Mostrar paradas" ----
    const urlPar = cfg.paradasUrl;
    const idCamadaParadas = cfg.paradasLayerId || 'pontos_onibus';
    const metros = Number(cfg.paradasDistanciaM || 30);
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
                yield lyr.load();
                const oidCampo = lyr.objectIdField || 'objectid';
                if (!oid) {
                    lyr.definitionExpression = '1=0';
                    lyr.visible = true;
                    if (vivo)
                        setNParadas(0);
                    return;
                }
                if (cfg.paradasModo === 'campo') {
                    // camada de Paradas (Mobilibus): campos 'viagens' (;cod:sentido;) e 'linhas' (,cod,)
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
                else {
                    const geom = yield geometriaLinha(urlLin, oid);
                    const ids = yield paradasPerto(urlPar, geom, metros);
                    if (!vivo)
                        return;
                    lyr.definitionExpression = ids.length ? `${oidCampo} IN (${ids.join(',')})` : '1=0';
                    lyr.visible = true;
                    setNParadas(ids.length);
                }
            }
            catch (e) {
                console.warn('[Horários da Linha] paradas', e);
                if (vivo) {
                    setNParadas(null);
                }
            }
        }))();
        return () => { vivo = false; };
    }, [jmv, mostrar, oid, urlPar, urlLin, idCamadaParadas, metros]);
    // nome da parada ao passar o mouse (ou tocar) sobre ela
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
            background: '#ffffff', color: '#1b2a4a', border: '2px solid #4463a9', borderRadius: '8px', padding: '4px 8px',
            fontSize: '12px', fontWeight: '600', boxShadow: '0 2px 6px rgba(0,0,0,.25)', whiteSpace: 'nowrap' });
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
                    dica.textContent = '🚏 ' + (((_b = g.attributes) === null || _b === void 0 ? void 0 : _b.nome) || 'Parada de ônibus');
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
    const dicaParadas = (texto) => h('div', {
        onClick: () => setMostrar(true), title: 'Clique para ligar',
        style: { cursor: 'pointer', background: 'rgba(255,255,255,0.14)', border: `1px dashed ${T.destaque}`, borderRadius: 8,
            padding: '7px 10px', fontSize: 12, color: T.texto, lineHeight: 1.35 }
    }, '💡 ', texto);
    const interruptor = h('div', {
        onClick: () => setMostrar(!mostrar), role: 'switch', 'aria-checked': mostrar, title: 'Mostrar no mapa só as paradas da linha selecionada',
        style: { display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', userSelect: 'none', fontSize: 12, color: T.texto }
    }, h('span', null, 'Mostrar paradas' + (mostrar && nParadas !== null ? ` (${nParadas})` : '')), h('span', { style: { width: 38, height: 20, borderRadius: 999, position: 'relative', flex: 'none',
            background: mostrar ? T.destaque : 'rgba(255,255,255,0.35)', transition: 'background .2s' } }, h('span', { style: { position: 'absolute', top: 2, left: mostrar ? 20 : 2, width: 16, height: 16, borderRadius: '50%',
            background: '#ffffff', boxShadow: '0 1px 2px rgba(0,0,0,.3)', transition: 'left .2s' } })));
    const mapaId = (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0];
    const conector = mapaId ? h(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: mapaId, onActiveViewChange: (v) => setJmv(v) }) : null;
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
    const chip = (txt, bg, cor = '#ffffff') => h('span', { style: { display: 'inline-block', padding: '2px 10px', borderRadius: 999, background: bg, color: cor, fontSize: 11, fontWeight: 700 } }, txt);
    const rotulo = (txt) => h('div', { style: { fontSize: 10, letterSpacing: 0.6, color: T.suave, textTransform: 'uppercase' } }, txt);
    const caixa = (filhos) => h('div', {
        className: 'jimu-widget horarios-linha',
        style: { width: '100%', height: '100%', boxSizing: 'border-box', background: T.fundo, color: T.texto, borderRadius: 12,
            padding: 14, overflowY: 'auto', fontFamily: 'inherit', display: 'flex', flexDirection: 'column', gap: 12,
            border: `1px solid ${T.borda}` }
    }, conector, h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 } }, h('div', { style: { fontSize: 15, fontWeight: 600, color: T.texto } }, 'Tabela de Horários'), interruptor), ...filhos);
    if (!oid) {
        return caixa([h('div', { style: { margin: 'auto', textAlign: 'center', color: T.suave, fontSize: 13, lineHeight: 1.5 } }, h('div', { style: { fontSize: 34, marginBottom: 6 } }, '🚌'), 'Selecione uma linha na lista', h('br'), 'para ver os horários.'),
            botaoTempoReal(null, 'Onde está meu ônibus? · tempo real'),
            dicaParadas('Dica: depois de escolher a linha, ligue “Mostrar paradas” para ver os pontos de ônibus dela no mapa.')]);
    }
    if (carregando)
        return caixa([h('div', { style: { margin: 'auto', color: T.suave } }, 'Carregando horários…')]);
    if (erro || !linha)
        return caixa([h('div', { style: { margin: 'auto', color: '#e57373' } }, erro || '—')]);
    try {
        // próxima saída (só em dias úteis)
        const dow = agora.getDay();
        const diaUtil = dow >= 1 && dow <= 5;
        const minAgora = agora.getHours() * 60 + agora.getMinutes();
        const proxima = diaUtil ? hor.find((r) => r._m >= minAgora) : null;
        let destaque = proxima ? proxima._h : (((_b = hor[0]) === null || _b === void 0 ? void 0 : _b._h) || '—');
        let sub = '';
        if (!hor.length)
            sub = 'Sem horários na base da Prefeitura — veja no botão de tempo real.';
        else if (!diaUtil)
            sub = 'Fim de semana — horários válidos para dias úteis. Primeira saída:';
        else if (proxima) {
            const d = proxima._m - minAgora;
            sub = d === 0 ? 'Saindo agora' : `Próxima saída · em ${d >= 60 ? Math.floor(d / 60) + ' h ' : ''}${d % 60} min`;
        }
        else
            sub = 'Não há mais saídas hoje. Primeira saída amanhã:';
        // agrupa por sentido (plano B) e por ponto
        const grupos = {};
        hor.forEach((r) => {
            const k = (planoB ? (r.sentido || 'Outro sentido') + ' · ' : '') + (r.ponto || '—');
            (grupos[k] = grupos[k] || []).push(r);
        });
        const obs = Array.from(new Set(hor.map((r) => String(r.observacao || '').trim()).filter((x) => x && x !== '-')));
        return caixa([
            // cabeçalho da linha
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, background: T.card, borderRadius: 10, padding: 10 } }, h('div', { style: { minWidth: 46, textAlign: 'center', padding: '8px 6px', borderRadius: 8, border: `1px solid ${T.destaque}`,
                    color: T.destaque, fontWeight: 800, fontSize: 17, background: 'rgba(245,166,35,0.10)' } }, String((_c = linha.cod_linha) !== null && _c !== void 0 ? _c : '')), h('div', { style: { display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 } }, h('div', { style: { fontSize: 16, fontWeight: 700, lineHeight: 1.2 } }, linha.nome || ''), h('div', { style: { display: 'flex', gap: 6, flexWrap: 'wrap' } }, chip('Dias úteis', T.azul), chip(linha.sentido || '', T.verde)))),
            botaoTempoReal(linha.cod_linha, `Onde está o ônibus da linha ${linha.cod_linha}? · tempo real`),
            !mostrar ? dicaParadas(`Ligue “Mostrar paradas” (acima) para ver no mapa as paradas da linha ${linha.cod_linha} neste sentido — passe o mouse sobre uma parada para ver o nome.`) : null,
            // próxima saída
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, background: T.card, borderRadius: 10, padding: '10px 12px' } }, relogio(T.suave, 34), h('div', null, rotulo(sub || 'Horário'), h('div', { style: { fontSize: 32, fontWeight: 800, lineHeight: 1.1 } }, destaque))),
            planoB
                ? h('div', { style: { background: T.aviso, borderLeft: `4px solid ${T.destaque}`, borderRadius: 6, padding: '6px 10px', fontSize: 12, color: T.texto } }, `Este sentido não tem horários próprios. Abaixo, os horários de saída da linha ${linha.cod_linha} nos outros sentidos.`)
                : null,
            // todos os horários
            ...Object.keys(grupos).map((k) => h('div', { key: k, style: { display: 'flex', flexDirection: 'column', gap: 6 } }, rotulo('Ponto · ' + k), h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6 } }, ...grupos[k].map((r, i) => {
                const passou = diaUtil && r._m < minAgora;
                const ehProx = proxima && r === proxima;
                return h('span', { key: i, style: { padding: '4px 9px', borderRadius: 6, fontWeight: 700, fontSize: 13,
                        background: ehProx ? T.destaque : T.chip, color: ehProx ? '#1b2a4a' : T.texto, opacity: passou ? 0.4 : 1 } }, r._h);
            })))),
            obs.length ? h('div', null, rotulo('Observação'), h('div', { style: { fontSize: 12, color: T.suave } }, obs.join(' · '))) : null,
            h('div', { style: { fontSize: 11, color: T.suave, marginTop: 'auto' } }, `${hor.length} horários · fonte: setor de transportes`)
        ]);
    }
    catch (e) {
        console.error('[Horários da Linha]', e);
        return caixa([h('div', { style: { color: '#e57373', fontSize: 12 } }, 'Erro no widget: ' + String((e === null || e === void 0 ? void 0 : e.message) || e))]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9ob3Jhcmlvcy1saW5oYS9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELHVHQUF1RztBQUN2RywyRUFBMkU7QUFDM0UseUZBQXlGO0FBQ3RCO0FBQ2pCO0FBRWxELE1BQU0sQ0FBQyxHQUFHLDRDQUFLLENBQUMsYUFBYTtBQUM3QixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLDRDQUFLO0FBRXJDLE1BQU0sS0FBSyxHQUFRO0lBQ2pCLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUztRQUN0RyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtJQUNuSCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUs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LEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNoSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLHlDQUF5QyxDQUFDO1NBQ2pJLENBQUM7SUFDSixDQUFDO0lBQUMsT0FBTyxDQUFNLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUN2QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxFQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsT0FBTyxLQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2SCxDQUFDO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9ob3Jhcmlvcy1saW5oYS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvLyBIb3LDoXJpb3MgZGEgTGluaGEg4oCTIEdlb0FQVUMgKHY3OiBkaWNhIGRvICdNb3N0cmFyIHBhcmFkYXMnICsgbm9tZSBkYSBwYXJhZGEgYW8gcGFzc2FyIG8gbW91c2UvdG9jYXIpXG4vLyBNb3N0cmEgb3MgaG9yw6FyaW9zIChkaWFzIMO6dGVpcykgZGEgbGluaGEgc2VsZWNpb25hZGEgbmEgbGlzdGEgZGUgbGluaGFzLlxuLy8gRXNjcml0byBzZW0gSlNYIChSZWFjdC5jcmVhdGVFbGVtZW50KSBwYXJhIG7Do28gZGVwZW5kZXIgZGEgY29uZmlndXJhw6fDo28gZGUgY29tcGlsYcOnw6NvLlxuaW1wb3J0IHsgUmVhY3QsIGdldEFwcFN0b3JlLCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcydcblxuY29uc3QgaCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnRcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gUmVhY3RcblxuY29uc3QgVEVNQVM6IGFueSA9IHtcbiAgZXNjdXJvOiB7IGZ1bmRvOiAnIzBmMWUzMycsIGNhcmQ6ICcjMTYyOTRhJywgYm9yZGE6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJywgdGV4dG86ICcjZmZmZmZmJywgc3VhdmU6ICcjOWZiMGNjJyxcbiAgICAgICAgICAgIGRlc3RhcXVlOiAnI0Y1QTYyMycsIGF6dWw6ICcjNDI4NUY0JywgdmVyZGU6ICcjMUQ5RTc1JywgY2hpcDogJyMxZjNiNjYnLCBhdmlzbzogJ3JnYmEoMjQ1LDE2NiwzNSwwLjE0KScgfSxcbiAgYXp1bDogeyBmdW5kbzogJyM0NDYzYTknLCBjYXJkOiAncmdiYSgyNTUsMjU1LDI1NSwwLjEzKScsIGJvcmRhOiAncmdiYSgyNTUsMjU1LDI1NSwwLjI1KScsIHRleHRvOiAnI2ZmZmZmZicsIHN1YXZlOiAnI2RiZTRmNScsXG4gICAgICAgICAgZGVzdGFxdWU6ICcjRjVBNjIzJywgYXp1bDogJyMxYjJhNGEnLCB2ZXJkZTogJyMxRDlFNzUnLCBjaGlwOiAncmdiYSgyNTUsMjU1LDI1NSwwLjIwKScsIGF2aXNvOiAncmdiYSgyNDUsMTY2LDM1LDAuMjIpJyB9LFxuICBjbGFybzogeyBmdW5kbzogJyNmZmZmZmYnLCBjYXJkOiAnI2Y0ZjZmYicsIGJvcmRhOiAnI2RmZTVlZicsIHRleHRvOiAnIzFiMmE0YScsIHN1YXZlOiAnIzZiNzY5MCcsXG4gICAgICAgICAgIGRlc3RhcXVlOiAnIzQ0NjNhOScsIGF6dWw6ICcjNDQ2M2E5JywgdmVyZGU6ICcjMWY5ZDU1JywgY2hpcDogJyNlNmVjZjgnLCBhdmlzbzogJyNGRkY0RTAnIH1cbn1cblxuZnVuY3Rpb24gaGhtbSAodjogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgcyA9IFN0cmluZyh2ID8/ICcnKS50cmltKClcbiAgY29uc3QgbSA9IHMubWF0Y2goL14oXFxkezEsMn0pOihcXGR7Mn0pLylcbiAgcmV0dXJuIG0gPyBgJHttWzFdLnBhZFN0YXJ0KDIsICcwJyl9OiR7bVsyXX1gIDogc1xufVxuZnVuY3Rpb24gbWludXRvcyAodjogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgbSA9IHYubWF0Y2goL14oXFxkezJ9KTooXFxkezJ9KS8pXG4gIHJldHVybiBtID8gTnVtYmVyKG1bMV0pICogNjAgKyBOdW1iZXIobVsyXSkgOiAtMVxufVxuZnVuY3Rpb24gY2hhdmVTZW50aWRvICh2OiBhbnkpOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nKHYgPz8gJycpLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpLnRvTG93ZXJDYXNlKClcbiAgICAucmVwbGFjZSgvc2VudGlkbyBwYXJhL2csICcnKS5yZXBsYWNlKC9bXmEtejAtOV0vZywgJycpXG59XG5hc3luYyBmdW5jdGlvbiBjb250YXIgKHVybDogc3RyaW5nLCB3aGVyZTogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgY29uc3QgcSA9IGAke3VybH0vcXVlcnk/d2hlcmU9JHtlbmNvZGVVUklDb21wb25lbnQod2hlcmUpfSZyZXR1cm5Db3VudE9ubHk9dHJ1ZSZmPWpzb25gXG4gIGNvbnN0IGo6IGFueSA9IGF3YWl0IGZldGNoKHEpLnRoZW4ociA9PiByLmpzb24oKSlcbiAgaWYgKGouZXJyb3IpIHRocm93IG5ldyBFcnJvcihqLmVycm9yLm1lc3NhZ2UgfHwgJ2Vycm8gbmEgY29udGFnZW0nKVxuICByZXR1cm4gTnVtYmVyKGouY291bnQgfHwgMClcbn1cbmZ1bmN0aW9uIGFzcGFzICh2OiBhbnkpOiBzdHJpbmcgeyByZXR1cm4gU3RyaW5nKHYgPz8gJycpLnJlcGxhY2UoLycvZywgXCInJ1wiKSB9XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbnN1bHRhciAodXJsOiBzdHJpbmcsIHdoZXJlOiBzdHJpbmcsIGNhbXBvczogc3RyaW5nKTogUHJvbWlzZTxhbnlbXT4ge1xuICBjb25zdCBxID0gYCR7dXJsfS9xdWVyeT93aGVyZT0ke2VuY29kZVVSSUNvbXBvbmVudCh3aGVyZSl9Jm91dEZpZWxkcz0ke2NhbXBvc30mcmV0dXJuR2VvbWV0cnk9ZmFsc2UmZj1qc29uYFxuICBjb25zdCBqOiBhbnkgPSBhd2FpdCBmZXRjaChxKS50aGVuKHIgPT4gci5qc29uKCkpXG4gIGlmIChqLmVycm9yKSB0aHJvdyBuZXcgRXJyb3Ioai5lcnJvci5tZXNzYWdlIHx8ICdlcnJvIG5hIGNvbnN1bHRhJylcbiAgcmV0dXJuIChqLmZlYXR1cmVzIHx8IFtdKS5tYXAoKGY6IGFueSkgPT4gZi5hdHRyaWJ1dGVzIHx8IHt9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW9tZXRyaWFMaW5oYSAodXJsTGluOiBzdHJpbmcsIG9pZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgcSA9IGAke3VybExpbn0vcXVlcnk/d2hlcmU9JHtlbmNvZGVVUklDb21wb25lbnQoJ29iamVjdGlkPScgKyBOdW1iZXIob2lkKSl9JnJldHVybkdlb21ldHJ5PXRydWUmb3V0RmllbGRzPW9iamVjdGlkJmY9anNvbmBcbiAgY29uc3QgajogYW55ID0gYXdhaXQgZmV0Y2gocSkudGhlbihyID0+IHIuanNvbigpKVxuICBpZiAoai5lcnJvcikgdGhyb3cgbmV3IEVycm9yKGouZXJyb3IubWVzc2FnZSB8fCAnZXJybyBuYSBnZW9tZXRyaWEnKVxuICBjb25zdCBmID0gKGouZmVhdHVyZXMgfHwgW10pWzBdXG4gIGlmICghZj8uZ2VvbWV0cnkpIHRocm93IG5ldyBFcnJvcignbGluaGEgc2VtIGdlb21ldHJpYScpXG4gIGNvbnN0IGcgPSBmLmdlb21ldHJ5XG4gIGlmICghZy5zcGF0aWFsUmVmZXJlbmNlKSBnLnNwYXRpYWxSZWZlcmVuY2UgPSBqLnNwYXRpYWxSZWZlcmVuY2VcbiAgcmV0dXJuIGdcbn1cbmFzeW5jIGZ1bmN0aW9uIHBhcmFkYXNQZXJ0byAodXJsUGFyOiBzdHJpbmcsIGdlb206IGFueSwgbWV0cm9zOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcltdPiB7XG4gIGNvbnN0IGNvcnBvID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgZ2VvbWV0cnk6IEpTT04uc3RyaW5naWZ5KGdlb20pLCBnZW9tZXRyeVR5cGU6ICdlc3JpR2VvbWV0cnlQb2x5bGluZScsIHNwYXRpYWxSZWw6ICdlc3JpU3BhdGlhbFJlbEludGVyc2VjdHMnLFxuICAgIGRpc3RhbmNlOiBTdHJpbmcobWV0cm9zKSwgdW5pdHM6ICdlc3JpU1JVbml0X01ldGVyJywgcmV0dXJuSWRzT25seTogJ3RydWUnLCBmOiAnanNvbidcbiAgfSlcbiAgY29uc3QgajogYW55ID0gYXdhaXQgZmV0Y2goYCR7dXJsUGFyfS9xdWVyeWAsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGNvcnBvIH0pLnRoZW4ociA9PiByLmpzb24oKSlcbiAgaWYgKGouZXJyb3IpIHRocm93IG5ldyBFcnJvcihqLmVycm9yLm1lc3NhZ2UgfHwgJ2Vycm8gbmFzIHBhcmFkYXMnKVxuICByZXR1cm4gai5vYmplY3RJZHMgfHwgW11cbn1cblxuZnVuY3Rpb24gcmVsb2dpbyAoY29yOiBzdHJpbmcsIHRhbTogbnVtYmVyKSB7XG4gIHJldHVybiBoKCdzdmcnLCB7IHdpZHRoOiB0YW0sIGhlaWdodDogdGFtLCB2aWV3Qm94OiAnMCAwIDI0IDI0Jywgc3R5bGU6IHsgZmxleDogJ25vbmUnIH0gfSxcbiAgICBoKCdjaXJjbGUnLCB7IGN4OiAxMiwgY3k6IDEyLCByOiAxMCwgZmlsbDogJyNmZmZmZmYnLCBzdHJva2U6IGNvciwgc3Ryb2tlV2lkdGg6IDIgfSksXG4gICAgaCgncGF0aCcsIHsgZDogJ00xMiA2djZsNCAyJywgZmlsbDogJ25vbmUnLCBzdHJva2U6ICcjYzAzOTJiJywgc3Ryb2tlV2lkdGg6IDIsIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPGFueT4pIHtcbiAgY29uc3QgY2ZnOiBhbnkgPSBwcm9wcy5jb25maWcgfHwge31cbiAgY29uc3QgZHNJZDogc3RyaW5nID0gY2ZnLmRhdGFTb3VyY2VJZCB8fCAnZGF0YVNvdXJjZV8xLWxpbmhhc19vbmlidXMnXG4gIGNvbnN0IHVybExpbjogc3RyaW5nID0gY2ZnLmxpbmhhc1VybFxuICBjb25zdCB1cmxIb3I6IHN0cmluZyA9IGNmZy5ob3Jhcmlvc1VybFxuICBjb25zdCBUOiBhbnkgPSBURU1BU1tjZmcudGVtYV0gfHwgVEVNQVMuZXNjdXJvXG4gIGNvbnN0IG1iQmFzZTogc3RyaW5nID0gY2ZnLm1vYmlsaWJ1c1VybCB8fCAnaHR0cHM6Ly9lZGl0b3IubW9iaWxpYnVzLmNvbS93ZWIvZGV0YWxoZXMtbGluaGEvNGFicDknXG4gIGNvbnN0IG1iQ29kOiBhbnkgPSBjZmcubW9iaWxpYnVzTGluaGFzIHx8IHt9XG4gIGNvbnN0IGxpbmtUZW1wb1JlYWwgPSAoY29kOiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGMgPSBtYkNvZFtTdHJpbmcoY29kID8/ICcnKS50cmltKCldXG4gICAgcmV0dXJuIGMgPyBgJHttYkJhc2V9IyR7Y31gIDogbWJCYXNlXG4gIH1cbiAgY29uc3QgYm90YW9UZW1wb1JlYWwgPSAoY29kOiBhbnksIHRleHRvOiBzdHJpbmcpID0+IGgoJ2EnLCB7XG4gICAgaHJlZjogbGlua1RlbXBvUmVhbChjb2QpLCB0YXJnZXQ6ICdfYmxhbmsnLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJyxcbiAgICBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGdhcDogOCwgcGFkZGluZzogJzlweCAxMnB4JywgYm9yZGVyUmFkaXVzOiA5OTksXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogJyNkNjQ1NDUnLCBjb2xvcjogJyNmZmZmZmYnLCBmb250V2VpZ2h0OiA3MDAsIGZvbnRTaXplOiAxMywgdGV4dERlY29yYXRpb246ICdub25lJyB9XG4gIH0sIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IHdpZHRoOiA5LCBoZWlnaHQ6IDksIGJvcmRlclJhZGl1czogJzUwJScsIGJhY2tncm91bmQ6ICcjZmZmZmZmJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSB9KSwgdGV4dG8pXG5cbiAgLy8gaWQgZG8gcmVnaXN0cm8gc2VsZWNpb25hZG8gbmEgbGlzdGEgKGxpZG8gZG8gZXN0YWRvIGRvIGFwcCBlIGFjb21wYW5oYWRvIHBvciBhc3NpbmF0dXJhKVxuICBjb25zdCBsZXJTZWxlY2FvID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbmY6IGFueSA9IChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkgYXMgYW55KT8uZGF0YVNvdXJjZXNJbmZvIHx8IHt9XG4gICAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXMoaW5mKSkge1xuICAgICAgICBpZiAoayA9PT0gZHNJZCB8fCBrLnN0YXJ0c1dpdGgoZHNJZCArICctJykpIHtcbiAgICAgICAgICBjb25zdCBpZHMgPSBpbmZba10/LnNlbGVjdGVkSWRzXG4gICAgICAgICAgaWYgKGlkcyAmJiBpZHMubGVuZ3RoKSByZXR1cm4gU3RyaW5nKGlkc1swXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHsgY29uc29sZS53YXJuKCdbSG9yw6FyaW9zIGRhIExpbmhhXSBzZWxlw6fDo28nLCBlKSB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBbb2lkLCBzZXRPaWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obGVyU2VsZWNhbygpKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlOiBhbnkgPSBnZXRBcHBTdG9yZSgpXG4gICAgY29uc3QgZGVzZmF6ZXIgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3Qgbm92byA9IGxlclNlbGVjYW8oKVxuICAgICAgc2V0T2lkKGF0dWFsID0+IChhdHVhbCA9PT0gbm92byA/IGF0dWFsIDogbm92bykpXG4gICAgfSlcbiAgICByZXR1cm4gKCkgPT4geyB0cnkgeyBkZXNmYXplcigpIH0gY2F0Y2ggKGUpIHt9IH1cbiAgfSwgW2RzSWRdKVxuXG4gIGNvbnN0IFtsaW5oYSwgc2V0TGluaGFdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBbaG9yLCBzZXRIb3JdID0gdXNlU3RhdGU8YW55W10+KFtdKVxuICBjb25zdCBbcGxhbm9CLCBzZXRQbGFub0JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtjYXJyZWdhbmRvLCBzZXRDYXJyZWdhbmRvXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbZXJybywgc2V0RXJyb10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBbYWdvcmEsIHNldEFnb3JhXSA9IHVzZVN0YXRlPERhdGU+KG5ldyBEYXRlKCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHsgY29uc3QgdCA9IHNldEludGVydmFsKCgpID0+IHNldEFnb3JhKG5ldyBEYXRlKCkpLCA2MDAwMCk7IHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHQpIH0sIFtdKVxuXG4gIC8vIC0tLS0gaW50ZXJydXB0b3IgXCJNb3N0cmFyIHBhcmFkYXNcIiAtLS0tXG4gIGNvbnN0IHVybFBhcjogc3RyaW5nID0gY2ZnLnBhcmFkYXNVcmxcbiAgY29uc3QgaWRDYW1hZGFQYXJhZGFzOiBzdHJpbmcgPSBjZmcucGFyYWRhc0xheWVySWQgfHwgJ3BvbnRvc19vbmlidXMnXG4gIGNvbnN0IG1ldHJvczogbnVtYmVyID0gTnVtYmVyKGNmZy5wYXJhZGFzRGlzdGFuY2lhTSB8fCAzMClcbiAgY29uc3QgW2ptdiwgc2V0Sm12XSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgW21vc3RyYXIsIHNldE1vc3RyYXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oISFjZmcucGFyYWRhc0xpZ2Fkb0FvQWJyaXIpXG4gIGNvbnN0IFtuUGFyYWRhcywgc2V0TlBhcmFkYXNdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2OiBhbnkgPSBqbXY/LnZpZXdcbiAgICBpZiAoIXYgfHwgIXVybFBhcikgcmV0dXJuXG4gICAgY29uc3QgbHlyOiBhbnkgPSB2Lm1hcC5hbGxMYXllcnMuZmluZCgobDogYW55KSA9PiBsLmlkID09PSBpZENhbWFkYVBhcmFkYXMpXG4gICAgaWYgKCFseXIpIHsgY29uc29sZS53YXJuKCdbSG9yw6FyaW9zIGRhIExpbmhhXSBjYW1hZGEgZGUgcGFyYWRhcyBuw6NvIGVuY29udHJhZGE6JywgaWRDYW1hZGFQYXJhZGFzKTsgcmV0dXJuIH1cbiAgICBsZXQgdml2byA9IHRydWVcbiAgICBpZiAoIW1vc3RyYXIpIHsgbHlyLnZpc2libGUgPSBmYWxzZTsgc2V0TlBhcmFkYXMobnVsbCk7IHJldHVybiB9XG4gICAgOyhhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBseXIubG9hZCgpXG4gICAgICAgIGNvbnN0IG9pZENhbXBvID0gbHlyLm9iamVjdElkRmllbGQgfHwgJ29iamVjdGlkJ1xuICAgICAgICBpZiAoIW9pZCkgeyBseXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnMT0wJzsgbHlyLnZpc2libGUgPSB0cnVlOyBpZiAodml2bykgc2V0TlBhcmFkYXMoMCk7IHJldHVybiB9XG4gICAgICAgIGlmIChjZmcucGFyYWRhc01vZG8gPT09ICdjYW1wbycpIHtcbiAgICAgICAgICAvLyBjYW1hZGEgZGUgUGFyYWRhcyAoTW9iaWxpYnVzKTogY2FtcG9zICd2aWFnZW5zJyAoO2NvZDpzZW50aWRvOykgZSAnbGluaGFzJyAoLGNvZCwpXG4gICAgICAgICAgY29uc3QgbCA9IChhd2FpdCBjb25zdWx0YXIodXJsTGluLCBgb2JqZWN0aWQ9JHtOdW1iZXIob2lkKX1gLCAnY29kX2xpbmhhLHNlbnRpZG8nKSlbMF0gfHwge31cbiAgICAgICAgICBjb25zdCBjb2QgPSBTdHJpbmcobC5jb2RfbGluaGEgPz8gJycpLnRyaW0oKVxuICAgICAgICAgIGxldCB3aGVyZSA9IGB2aWFnZW5zIExJS0UgJyU7JHthc3Bhcyhjb2QgKyAnOicgKyBjaGF2ZVNlbnRpZG8obC5zZW50aWRvKSl9OyUnYFxuICAgICAgICAgIGxldCBuID0gYXdhaXQgY29udGFyKHVybFBhciwgd2hlcmUpXG4gICAgICAgICAgaWYgKCFuKSB7IHdoZXJlID0gYGxpbmhhcyBMSUtFICclLCR7YXNwYXMoY29kKX0sJSdgOyBuID0gYXdhaXQgY29udGFyKHVybFBhciwgd2hlcmUpIH1cbiAgICAgICAgICBpZiAoIXZpdm8pIHJldHVyblxuICAgICAgICAgIGx5ci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IG4gPyB3aGVyZSA6ICcxPTAnXG4gICAgICAgICAgbHlyLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgc2V0TlBhcmFkYXMobilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBnZW9tID0gYXdhaXQgZ2VvbWV0cmlhTGluaGEodXJsTGluLCBvaWQpXG4gICAgICAgICAgY29uc3QgaWRzID0gYXdhaXQgcGFyYWRhc1BlcnRvKHVybFBhciwgZ2VvbSwgbWV0cm9zKVxuICAgICAgICAgIGlmICghdml2bykgcmV0dXJuXG4gICAgICAgICAgbHlyLmRlZmluaXRpb25FeHByZXNzaW9uID0gaWRzLmxlbmd0aCA/IGAke29pZENhbXBvfSBJTiAoJHtpZHMuam9pbignLCcpfSlgIDogJzE9MCdcbiAgICAgICAgICBseXIudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICBzZXROUGFyYWRhcyhpZHMubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0hvcsOhcmlvcyBkYSBMaW5oYV0gcGFyYWRhcycsIGUpXG4gICAgICAgIGlmICh2aXZvKSB7IHNldE5QYXJhZGFzKG51bGwpIH1cbiAgICAgIH1cbiAgICB9KSgpXG4gICAgcmV0dXJuICgpID0+IHsgdml2byA9IGZhbHNlIH1cbiAgfSwgW2ptdiwgbW9zdHJhciwgb2lkLCB1cmxQYXIsIHVybExpbiwgaWRDYW1hZGFQYXJhZGFzLCBtZXRyb3NdKVxuXG4gIC8vIG5vbWUgZGEgcGFyYWRhIGFvIHBhc3NhciBvIG1vdXNlIChvdSB0b2Nhcikgc29icmUgZWxhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdjogYW55ID0gam12Py52aWV3XG4gICAgaWYgKCF2KSByZXR1cm5cbiAgICBjb25zdCBseXI6IGFueSA9IHYubWFwLmFsbExheWVycy5maW5kKChsOiBhbnkpID0+IGwuaWQgPT09IGlkQ2FtYWRhUGFyYWRhcylcbiAgICBpZiAoIWx5cikgcmV0dXJuXG4gICAgdHJ5IHsgbHlyLm91dEZpZWxkcyA9IFsnbm9tZSddIH0gY2F0Y2ggKGUpIHt9XG4gICAgY29uc3QgZGljYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgT2JqZWN0LmFzc2lnbihkaWNhLnN0eWxlLCB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBkaXNwbGF5OiAnbm9uZScsIHBvaW50ZXJFdmVudHM6ICdub25lJywgekluZGV4OiAnOTknLCBtYXhXaWR0aDogJzI2MHB4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJywgY29sb3I6ICcjMWIyYTRhJywgYm9yZGVyOiAnMnB4IHNvbGlkICM0NDYzYTknLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgICBmb250U2l6ZTogJzEycHgnLCBmb250V2VpZ2h0OiAnNjAwJywgYm94U2hhZG93OiAnMCAycHggNnB4IHJnYmEoMCwwLDAsLjI1KScsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0pXG4gICAgdi5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGljYSlcbiAgICBsZXQgb2N1cGFkbyA9IGZhbHNlXG4gICAgY29uc3QgbW9zdHJhckRpY2EgPSAoZXY6IGFueSkgPT4ge1xuICAgICAgaWYgKG9jdXBhZG8gfHwgIWx5ci52aXNpYmxlKSB7IGlmICghbHlyLnZpc2libGUpIGRpY2Euc3R5bGUuZGlzcGxheSA9ICdub25lJzsgcmV0dXJuIH1cbiAgICAgIG9jdXBhZG8gPSB0cnVlXG4gICAgICB2LmhpdFRlc3QoZXYsIHsgaW5jbHVkZTogW2x5cl0gfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgb2N1cGFkbyA9IGZhbHNlXG4gICAgICAgIGNvbnN0IGcgPSAocmVzPy5yZXN1bHRzIHx8IFtdKS5maW5kKChyOiBhbnkpID0+IHIuZ3JhcGhpYz8ubGF5ZXI/LmlkID09PSBpZENhbWFkYVBhcmFkYXMpPy5ncmFwaGljXG4gICAgICAgIGlmIChnKSB7XG4gICAgICAgICAgZGljYS50ZXh0Q29udGVudCA9ICfwn5qPICcgKyAoZy5hdHRyaWJ1dGVzPy5ub21lIHx8ICdQYXJhZGEgZGUgw7RuaWJ1cycpXG4gICAgICAgICAgZGljYS5zdHlsZS5sZWZ0ID0gKGV2LnggKyAxNCkgKyAncHgnOyBkaWNhLnN0eWxlLnRvcCA9IChldi55ICsgMTQpICsgJ3B4JzsgZGljYS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgICAgIHYuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgICAgICB9IGVsc2UgeyBkaWNhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IHYuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICcnIH1cbiAgICAgIH0pLmNhdGNoKCgpID0+IHsgb2N1cGFkbyA9IGZhbHNlIH0pXG4gICAgfVxuICAgIGNvbnN0IGgxID0gdi5vbigncG9pbnRlci1tb3ZlJywgbW9zdHJhckRpY2EpXG4gICAgY29uc3QgaDIgPSB2Lm9uKCdjbGljaycsIG1vc3RyYXJEaWNhKVxuICAgIGNvbnN0IGgzID0gdi5vbigncG9pbnRlci1sZWF2ZScsICgpID0+IHsgZGljYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIH0pXG4gICAgcmV0dXJuICgpID0+IHsgdHJ5IHsgaDEucmVtb3ZlKCk7IGgyLnJlbW92ZSgpOyBoMy5yZW1vdmUoKTsgZGljYS5yZW1vdmUoKSB9IGNhdGNoIChlKSB7fSB9XG4gIH0sIFtqbXYsIGlkQ2FtYWRhUGFyYWRhc10pXG5cbiAgY29uc3QgZGljYVBhcmFkYXMgPSAodGV4dG86IHN0cmluZykgPT4gaCgnZGl2Jywge1xuICAgIG9uQ2xpY2s6ICgpID0+IHNldE1vc3RyYXIodHJ1ZSksIHRpdGxlOiAnQ2xpcXVlIHBhcmEgbGlnYXInLFxuICAgIHN0eWxlOiB7IGN1cnNvcjogJ3BvaW50ZXInLCBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjE0KScsIGJvcmRlcjogYDFweCBkYXNoZWQgJHtULmRlc3RhcXVlfWAsIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICAgICBwYWRkaW5nOiAnN3B4IDEwcHgnLCBmb250U2l6ZTogMTIsIGNvbG9yOiBULnRleHRvLCBsaW5lSGVpZ2h0OiAxLjM1IH1cbiAgfSwgJ/CfkqEgJywgdGV4dG8pXG5cbiAgY29uc3QgaW50ZXJydXB0b3IgPSBoKCdkaXYnLCB7XG4gICAgb25DbGljazogKCkgPT4gc2V0TW9zdHJhcighbW9zdHJhciksIHJvbGU6ICdzd2l0Y2gnLCAnYXJpYS1jaGVja2VkJzogbW9zdHJhciwgdGl0bGU6ICdNb3N0cmFyIG5vIG1hcGEgc8OzIGFzIHBhcmFkYXMgZGEgbGluaGEgc2VsZWNpb25hZGEnLFxuICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgY3Vyc29yOiAncG9pbnRlcicsIHVzZXJTZWxlY3Q6ICdub25lJywgZm9udFNpemU6IDEyLCBjb2xvcjogVC50ZXh0byB9XG4gIH0sXG4gICAgaCgnc3BhbicsIG51bGwsICdNb3N0cmFyIHBhcmFkYXMnICsgKG1vc3RyYXIgJiYgblBhcmFkYXMgIT09IG51bGwgPyBgICgke25QYXJhZGFzfSlgIDogJycpKSxcbiAgICBoKCdzcGFuJywgeyBzdHlsZTogeyB3aWR0aDogMzgsIGhlaWdodDogMjAsIGJvcmRlclJhZGl1czogOTk5LCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxleDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1vc3RyYXIgPyBULmRlc3RhcXVlIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNSknLCB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAuMnMnIH0gfSxcbiAgICAgIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDIsIGxlZnQ6IG1vc3RyYXIgPyAyMCA6IDIsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiwgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJywgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwwLDAsLjMpJywgdHJhbnNpdGlvbjogJ2xlZnQgLjJzJyB9IH0pKSlcbiAgY29uc3QgbWFwYUlkOiBhbnkgPSAocHJvcHMgYXMgYW55KS51c2VNYXBXaWRnZXRJZHM/LlswXVxuICBjb25zdCBjb25lY3RvciA9IG1hcGFJZCA/IGgoSmltdU1hcFZpZXdDb21wb25lbnQgYXMgYW55LCB7IHVzZU1hcFdpZGdldElkOiBtYXBhSWQsIG9uQWN0aXZlVmlld0NoYW5nZTogKHY6IGFueSkgPT4gc2V0Sm12KHYpIH0pIDogbnVsbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHZpdm8gPSB0cnVlXG4gICAgaWYgKCFvaWQpIHsgc2V0TGluaGEobnVsbCk7IHNldEhvcihbXSk7IHJldHVybiB9XG4gICAgc2V0Q2FycmVnYW5kbyh0cnVlKTsgc2V0RXJybyhudWxsKVxuICAgIDsoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbCA9IChhd2FpdCBjb25zdWx0YXIodXJsTGluLCBgb2JqZWN0aWQ9JHtOdW1iZXIob2lkKX1gLCAnb2JqZWN0aWQsaWRfcm90YSxjb2RfbGluaGEsbm9tZSxzZW50aWRvJykpWzBdXG4gICAgICAgIGlmICghbCkgdGhyb3cgbmV3IEVycm9yKCdsaW5oYSBuw6NvIGVuY29udHJhZGEnKVxuICAgICAgICBsZXQgcm93cyA9IGF3YWl0IGNvbnN1bHRhcih1cmxIb3IsIGBpZF9yb3RhPScke2FzcGFzKGwuaWRfcm90YSl9J2AsICdpZF9yb3RhLHBvbnRvLGhvcmFyaW8sc2VudGlkbyxvYnNlcnZhY2FvJylcbiAgICAgICAgbGV0IGIgPSBmYWxzZVxuICAgICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY29kID0gU3RyaW5nKGwuaWRfcm90YSB8fCAnJykuc3BsaXQoJ18nKVswXVxuICAgICAgICAgIHJvd3MgPSAoYXdhaXQgY29uc3VsdGFyKHVybEhvciwgYGlkX3JvdGEgTElLRSAnJHthc3Bhcyhjb2QpfSUnYCwgJ2lkX3JvdGEscG9udG8saG9yYXJpbyxzZW50aWRvLG9ic2VydmFjYW8nKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHI6IGFueSkgPT4gU3RyaW5nKHIuaWRfcm90YSB8fCAnJykuc3RhcnRzV2l0aChjb2QgKyAnXycpKVxuICAgICAgICAgIGIgPSByb3dzLmxlbmd0aCA+IDBcbiAgICAgICAgfVxuICAgICAgICByb3dzLmZvckVhY2goKHI6IGFueSkgPT4geyByLl9oID0gaGhtbShyLmhvcmFyaW8pOyByLl9tID0gbWludXRvcyhyLl9oKSB9KVxuICAgICAgICByb3dzLnNvcnQoKGE6IGFueSwgejogYW55KSA9PiBhLl9tIC0gei5fbSlcbiAgICAgICAgaWYgKHZpdm8pIHsgc2V0TGluaGEobCk7IHNldEhvcihyb3dzKTsgc2V0UGxhbm9CKGIpOyBzZXRDYXJyZWdhbmRvKGZhbHNlKSB9XG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSG9yw6FyaW9zIGRhIExpbmhhXScsIGUpXG4gICAgICAgIGlmICh2aXZvKSB7IHNldEVycm8oJ07Do28gZm9pIHBvc3PDrXZlbCBjYXJyZWdhciBvcyBob3LDoXJpb3MuJyk7IHNldENhcnJlZ2FuZG8oZmFsc2UpIH1cbiAgICAgIH1cbiAgICB9KSgpXG4gICAgcmV0dXJuICgpID0+IHsgdml2byA9IGZhbHNlIH1cbiAgfSwgW29pZCwgdXJsTGluLCB1cmxIb3JdKVxuXG4gIGNvbnN0IGNoaXAgPSAodHh0OiBzdHJpbmcsIGJnOiBzdHJpbmcsIGNvciA9ICcjZmZmZmZmJykgPT5cbiAgICBoKCdzcGFuJywgeyBzdHlsZTogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgcGFkZGluZzogJzJweCAxMHB4JywgYm9yZGVyUmFkaXVzOiA5OTksIGJhY2tncm91bmQ6IGJnLCBjb2xvcjogY29yLCBmb250U2l6ZTogMTEsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIHR4dClcbiAgY29uc3Qgcm90dWxvID0gKHR4dDogc3RyaW5nKSA9PiBoKCdkaXYnLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMCwgbGV0dGVyU3BhY2luZzogMC42LCBjb2xvcjogVC5zdWF2ZSwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfSB9LCB0eHQpXG5cbiAgY29uc3QgY2FpeGEgPSAoZmlsaG9zOiBhbnlbXSkgPT4gaCgnZGl2Jywge1xuICAgIGNsYXNzTmFtZTogJ2ppbXUtd2lkZ2V0IGhvcmFyaW9zLWxpbmhhJyxcbiAgICBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGJhY2tncm91bmQ6IFQuZnVuZG8sIGNvbG9yOiBULnRleHRvLCBib3JkZXJSYWRpdXM6IDEyLFxuICAgICAgICAgICAgIHBhZGRpbmc6IDE0LCBvdmVyZmxvd1k6ICdhdXRvJywgZm9udEZhbWlseTogJ2luaGVyaXQnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDEyLFxuICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke1QuYm9yZGF9YCB9XG4gIH0sIGNvbmVjdG9yLFxuICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZ2FwOiA4IH0gfSxcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE1LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBULnRleHRvIH0gfSwgJ1RhYmVsYSBkZSBIb3LDoXJpb3MnKSwgaW50ZXJydXB0b3IpLFxuICAgIC4uLmZpbGhvcylcblxuICBpZiAoIW9pZCkge1xuICAgIHJldHVybiBjYWl4YShbaCgnZGl2JywgeyBzdHlsZTogeyBtYXJnaW46ICdhdXRvJywgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6IFQuc3VhdmUsIGZvbnRTaXplOiAxMywgbGluZUhlaWdodDogMS41IH0gfSxcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDM0LCBtYXJnaW5Cb3R0b206IDYgfSB9LCAn8J+ajCcpLCAnU2VsZWNpb25lIHVtYSBsaW5oYSBuYSBsaXN0YScsIGgoJ2JyJyksICdwYXJhIHZlciBvcyBob3LDoXJpb3MuJyksXG4gICAgICBib3Rhb1RlbXBvUmVhbChudWxsLCAnT25kZSBlc3TDoSBtZXUgw7RuaWJ1cz8gwrcgdGVtcG8gcmVhbCcpLFxuICAgICAgZGljYVBhcmFkYXMoJ0RpY2E6IGRlcG9pcyBkZSBlc2NvbGhlciBhIGxpbmhhLCBsaWd1ZSDigJxNb3N0cmFyIHBhcmFkYXPigJ0gcGFyYSB2ZXIgb3MgcG9udG9zIGRlIMO0bmlidXMgZGVsYSBubyBtYXBhLicpXSlcbiAgfVxuICBpZiAoY2FycmVnYW5kbykgcmV0dXJuIGNhaXhhKFtoKCdkaXYnLCB7IHN0eWxlOiB7IG1hcmdpbjogJ2F1dG8nLCBjb2xvcjogVC5zdWF2ZSB9IH0sICdDYXJyZWdhbmRvIGhvcsOhcmlvc+KApicpXSlcbiAgaWYgKGVycm8gfHwgIWxpbmhhKSByZXR1cm4gY2FpeGEoW2goJ2RpdicsIHsgc3R5bGU6IHsgbWFyZ2luOiAnYXV0bycsIGNvbG9yOiAnI2U1NzM3MycgfSB9LCBlcnJvIHx8ICfigJQnKV0pXG5cbiAgdHJ5IHtcbiAgICAvLyBwcsOzeGltYSBzYcOtZGEgKHPDsyBlbSBkaWFzIMO6dGVpcylcbiAgICBjb25zdCBkb3cgPSBhZ29yYS5nZXREYXkoKVxuICAgIGNvbnN0IGRpYVV0aWwgPSBkb3cgPj0gMSAmJiBkb3cgPD0gNVxuICAgIGNvbnN0IG1pbkFnb3JhID0gYWdvcmEuZ2V0SG91cnMoKSAqIDYwICsgYWdvcmEuZ2V0TWludXRlcygpXG4gICAgY29uc3QgcHJveGltYSA9IGRpYVV0aWwgPyBob3IuZmluZCgocjogYW55KSA9PiByLl9tID49IG1pbkFnb3JhKSA6IG51bGxcbiAgICBsZXQgZGVzdGFxdWU6IHN0cmluZyA9IHByb3hpbWEgPyBwcm94aW1hLl9oIDogKGhvclswXT8uX2ggfHwgJ+KAlCcpXG4gICAgbGV0IHN1YiA9ICcnXG4gICAgaWYgKCFob3IubGVuZ3RoKSBzdWIgPSAnU2VtIGhvcsOhcmlvcyBuYSBiYXNlIGRhIFByZWZlaXR1cmEg4oCUIHZlamEgbm8gYm90w6NvIGRlIHRlbXBvIHJlYWwuJ1xuICAgIGVsc2UgaWYgKCFkaWFVdGlsKSBzdWIgPSAnRmltIGRlIHNlbWFuYSDigJQgaG9yw6FyaW9zIHbDoWxpZG9zIHBhcmEgZGlhcyDDunRlaXMuIFByaW1laXJhIHNhw61kYTonXG4gICAgZWxzZSBpZiAocHJveGltYSkgeyBjb25zdCBkID0gcHJveGltYS5fbSAtIG1pbkFnb3JhOyBzdWIgPSBkID09PSAwID8gJ1NhaW5kbyBhZ29yYScgOiBgUHLDs3hpbWEgc2HDrWRhIMK3IGVtICR7ZCA+PSA2MCA/IE1hdGguZmxvb3IoZCAvIDYwKSArICcgaCAnIDogJyd9JHtkICUgNjB9IG1pbmAgfVxuICAgIGVsc2Ugc3ViID0gJ07Do28gaMOhIG1haXMgc2HDrWRhcyBob2plLiBQcmltZWlyYSBzYcOtZGEgYW1hbmjDozonXG5cbiAgICAvLyBhZ3J1cGEgcG9yIHNlbnRpZG8gKHBsYW5vIEIpIGUgcG9yIHBvbnRvXG4gICAgY29uc3QgZ3J1cG9zOiBhbnkgPSB7fVxuICAgIGhvci5mb3JFYWNoKChyOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGsgPSAocGxhbm9CID8gKHIuc2VudGlkbyB8fCAnT3V0cm8gc2VudGlkbycpICsgJyDCtyAnIDogJycpICsgKHIucG9udG8gfHwgJ+KAlCcpXG4gICAgICA7KGdydXBvc1trXSA9IGdydXBvc1trXSB8fCBbXSkucHVzaChyKVxuICAgIH0pXG4gICAgY29uc3Qgb2JzID0gQXJyYXkuZnJvbShuZXcgU2V0KGhvci5tYXAoKHI6IGFueSkgPT4gU3RyaW5nKHIub2JzZXJ2YWNhbyB8fCAnJykudHJpbSgpKS5maWx0ZXIoKHg6IHN0cmluZykgPT4geCAmJiB4ICE9PSAnLScpKSlcblxuICAgIHJldHVybiBjYWl4YShbXG4gICAgICAvLyBjYWJlw6dhbGhvIGRhIGxpbmhhXG4gICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTIsIGJhY2tncm91bmQ6IFQuY2FyZCwgYm9yZGVyUmFkaXVzOiAxMCwgcGFkZGluZzogMTAgfSB9LFxuICAgICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IG1pbldpZHRoOiA0NiwgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzhweCA2cHgnLCBib3JkZXJSYWRpdXM6IDgsIGJvcmRlcjogYDFweCBzb2xpZCAke1QuZGVzdGFxdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogVC5kZXN0YXF1ZSwgZm9udFdlaWdodDogODAwLCBmb250U2l6ZTogMTcsIGJhY2tncm91bmQ6ICdyZ2JhKDI0NSwxNjYsMzUsMC4xMCknIH0gfSwgU3RyaW5nKGxpbmhhLmNvZF9saW5oYSA/PyAnJykpLFxuICAgICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNCwgbWluV2lkdGg6IDAgfSB9LFxuICAgICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA3MDAsIGxpbmVIZWlnaHQ6IDEuMiB9IH0sIGxpbmhhLm5vbWUgfHwgJycpLFxuICAgICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYsIGZsZXhXcmFwOiAnd3JhcCcgfSB9LCBjaGlwKCdEaWFzIMO6dGVpcycsIFQuYXp1bCksIGNoaXAobGluaGEuc2VudGlkbyB8fCAnJywgVC52ZXJkZSkpKSksXG4gICAgICBib3Rhb1RlbXBvUmVhbChsaW5oYS5jb2RfbGluaGEsIGBPbmRlIGVzdMOhIG8gw7RuaWJ1cyBkYSBsaW5oYSAke2xpbmhhLmNvZF9saW5oYX0/IMK3IHRlbXBvIHJlYWxgKSxcbiAgICAgICFtb3N0cmFyID8gZGljYVBhcmFkYXMoYExpZ3VlIOKAnE1vc3RyYXIgcGFyYWRhc+KAnSAoYWNpbWEpIHBhcmEgdmVyIG5vIG1hcGEgYXMgcGFyYWRhcyBkYSBsaW5oYSAke2xpbmhhLmNvZF9saW5oYX0gbmVzdGUgc2VudGlkbyDigJQgcGFzc2UgbyBtb3VzZSBzb2JyZSB1bWEgcGFyYWRhIHBhcmEgdmVyIG8gbm9tZS5gKSA6IG51bGwsXG4gICAgICAvLyBwcsOzeGltYSBzYcOtZGFcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAxMiwgYmFja2dyb3VuZDogVC5jYXJkLCBib3JkZXJSYWRpdXM6IDEwLCBwYWRkaW5nOiAnMTBweCAxMnB4JyB9IH0sXG4gICAgICAgIHJlbG9naW8oVC5zdWF2ZSwgMzQpLFxuICAgICAgICBoKCdkaXYnLCBudWxsLCByb3R1bG8oc3ViIHx8ICdIb3LDoXJpbycpLCBoKCdkaXYnLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAzMiwgZm9udFdlaWdodDogODAwLCBsaW5lSGVpZ2h0OiAxLjEgfSB9LCBkZXN0YXF1ZSkpKSxcbiAgICAgIHBsYW5vQlxuICAgICAgICA/IGgoJ2RpdicsIHsgc3R5bGU6IHsgYmFja2dyb3VuZDogVC5hdmlzbywgYm9yZGVyTGVmdDogYDRweCBzb2xpZCAke1QuZGVzdGFxdWV9YCwgYm9yZGVyUmFkaXVzOiA2LCBwYWRkaW5nOiAnNnB4IDEwcHgnLCBmb250U2l6ZTogMTIsIGNvbG9yOiBULnRleHRvIH0gfSxcbiAgICAgICAgICAgIGBFc3RlIHNlbnRpZG8gbsOjbyB0ZW0gaG9yw6FyaW9zIHByw7Nwcmlvcy4gQWJhaXhvLCBvcyBob3LDoXJpb3MgZGUgc2HDrWRhIGRhIGxpbmhhICR7bGluaGEuY29kX2xpbmhhfSBub3Mgb3V0cm9zIHNlbnRpZG9zLmApXG4gICAgICAgIDogbnVsbCxcbiAgICAgIC8vIHRvZG9zIG9zIGhvcsOhcmlvc1xuICAgICAgLi4uT2JqZWN0LmtleXMoZ3J1cG9zKS5tYXAoKGs6IHN0cmluZykgPT4gaCgnZGl2JywgeyBrZXk6IGssIHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNiB9IH0sXG4gICAgICAgIHJvdHVsbygnUG9udG8gwrcgJyArIGspLFxuICAgICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiA2IH0gfSxcbiAgICAgICAgICAuLi5ncnVwb3Nba10ubWFwKChyOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFzc291ID0gZGlhVXRpbCAmJiByLl9tIDwgbWluQWdvcmFcbiAgICAgICAgICAgIGNvbnN0IGVoUHJveCA9IHByb3hpbWEgJiYgciA9PT0gcHJveGltYVxuICAgICAgICAgICAgcmV0dXJuIGgoJ3NwYW4nLCB7IGtleTogaSwgc3R5bGU6IHsgcGFkZGluZzogJzRweCA5cHgnLCBib3JkZXJSYWRpdXM6IDYsIGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBlaFByb3ggPyBULmRlc3RhcXVlIDogVC5jaGlwLCBjb2xvcjogZWhQcm94ID8gJyMxYjJhNGEnIDogVC50ZXh0bywgb3BhY2l0eTogcGFzc291ID8gMC40IDogMSB9IH0sIHIuX2gpXG4gICAgICAgICAgfSkpKSksXG4gICAgICBvYnMubGVuZ3RoID8gaCgnZGl2JywgbnVsbCwgcm90dWxvKCdPYnNlcnZhw6fDo28nKSwgaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBULnN1YXZlIH0gfSwgb2JzLmpvaW4oJyDCtyAnKSkpIDogbnVsbCxcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDExLCBjb2xvcjogVC5zdWF2ZSwgbWFyZ2luVG9wOiAnYXV0bycgfSB9LCBgJHtob3IubGVuZ3RofSBob3LDoXJpb3MgwrcgZm9udGU6IHNldG9yIGRlIHRyYW5zcG9ydGVzYClcbiAgICBdKVxuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbSG9yw6FyaW9zIGRhIExpbmhhXScsIGUpXG4gICAgcmV0dXJuIGNhaXhhKFtoKCdkaXYnLCB7IHN0eWxlOiB7IGNvbG9yOiAnI2U1NzM3MycsIGZvbnRTaXplOiAxMiB9IH0sICdFcnJvIG5vIHdpZGdldDogJyArIFN0cmluZyhlPy5tZXNzYWdlIHx8IGUpKV0pXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=