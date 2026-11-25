System.register(["jimu-core","calcite-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
  !*** ./your-extensions/widgets/placar-cameras/src/runtime/widget.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calcite-components */ "calcite-components");
// Placar das câmeras – GeoAPUC (v4: visual no padrão dos widgets dos DEVs — painel branco, cantos 4px, barra sólida, ícone Calcite)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.


const h = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement;
const { useState, useEffect, useCallback } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
// paleta dos widgets dos DEVs + azul da casca homologada
const C = { marca: '#4463A9', verde: '#1F9D55', vermelho: '#D64545', texto: '#1F2937', texto2: '#4B5563', suave: '#6B7280', borda: '#E5E7EB', trilho: '#E5E7EB', fundo: '#FFFFFF' };
const FONTE = "Inter, 'Avenir Next', Roboto, Arial, sans-serif";
function dataHora(ms) {
    if (!ms)
        return '—';
    const d = new Date(ms);
    return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
function mmss(seg) {
    const m = Math.floor(seg / 60);
    const s = seg % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}
function Widget(props) {
    const cfg = props.config || {};
    const url = cfg.camadaUrl || 'https://geo.apucarana.pr.gov.br/server/rest/services/Hosted/Cameras_Apucarana/FeatureServer/0';
    const intervalo = Math.max(1, Number(cfg.intervaloMin) || 5) * 60;
    const [st, setSt] = useState({ online: 0, offline: 0, ultima: null, carregando: true, erro: null });
    const [faltam, setFaltam] = useState(intervalo);
    const consulta = useCallback(() => {
        const q = `${url}/query?where=1%3D1&outFields=status,ultima_verificacao&returnGeometry=false&f=json&_=${Date.now()}`;
        fetch(q).then(r => r.json()).then((j) => {
            if (j.error)
                throw new Error(j.error.message || 'erro na consulta');
            let on = 0;
            let off = 0;
            let ult = 0;
            (j.features || []).forEach((f) => {
                const a = f.attributes || {};
                if (String(a.status).toLowerCase() === 'online')
                    on++;
                else
                    off++;
                if (a.ultima_verificacao && a.ultima_verificacao > ult)
                    ult = a.ultima_verificacao;
            });
            setSt({ online: on, offline: off, ultima: ult || null, carregando: false, erro: null });
        }).catch((e) => {
            setSt(s => (Object.assign(Object.assign({}, s), { carregando: false, erro: 'Sem conexão com o Portal' })));
            console.warn('[Placar das câmeras]', e);
        });
        setFaltam(intervalo);
    }, [url, intervalo]);
    useEffect(() => { consulta(); }, [consulta]);
    useEffect(() => {
        const t = setInterval(() => {
            setFaltam(f => { if (f <= 1) {
                consulta();
                return intervalo;
            } return f - 1; });
        }, 1000);
        return () => clearInterval(t);
    }, [consulta, intervalo]);
    const total = st.online + st.offline;
    const pct = total ? Math.round(100 * st.online / total) : 0;
    const caixa = (cor, valor, rotulo) => h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 6 } }, h('span', { style: { width: 9, height: 9, borderRadius: '50%', background: cor, display: 'inline-block', alignSelf: 'center' } }), h('span', { style: { fontSize: 20, fontWeight: 600, color: C.texto } }, st.carregando ? '…' : valor), h('span', { style: { fontSize: 13, color: C.texto2 } }, rotulo));
    return h('div', {
        className: 'jimu-widget placar-cameras',
        style: { width: '100%', height: '100%', boxSizing: 'border-box', padding: '10px 16px', background: C.fundo,
            border: `1px solid ${C.borda}`, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
            fontFamily: FONTE, overflow: 'hidden' }
    }, h('div', { style: { display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' } }, caixa(C.verde, st.online, 'online'), caixa(C.vermelho, st.offline, 'offline'), h('div', { style: { flex: 1, minWidth: 120, display: 'flex', alignItems: 'center', gap: 10 } }, h('div', { style: { flex: 1, height: 8, background: C.trilho, borderRadius: 2, overflow: 'hidden' }, title: 'Disponibilidade da rede de câmeras' }, h('div', { style: { width: `${pct}%`, height: '100%', borderRadius: 2, background: C.marca, transition: 'width .6s' } })), h('span', { style: { fontSize: 14, fontWeight: 600, color: C.texto, minWidth: 42, textAlign: 'right' } }, st.carregando ? '' : `${pct}%`))), h('div', { style: { fontSize: 12, color: st.erro ? C.vermelho : C.suave, display: 'flex', alignItems: 'center', gap: 6 } }, st.erro ? h(calcite_components__WEBPACK_IMPORTED_MODULE_1__.CalciteIcon, { icon: 'exclamation-mark-triangle', scale: 's' }) : null, st.erro
        ? `${st.erro} · nova tentativa em ${mmss(faltam)}`
        : `Última verificação: ${dataHora(st.ultima)} · atualiza em ${mmss(faltam)}`));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wbGFjYXItY2FtZXJhcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELG9JQUFvSTtBQUNwSSx5RkFBeUY7QUFDbkM7QUFDTjtBQUVoRCxNQUFNLENBQUMsR0FBRyw0Q0FBSyxDQUFDLGFBQWE7QUFDN0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsNENBQUs7QUFVbEQseURBQXlEO0FBQ3pELE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDbkwsTUFBTSxLQUFLLEdBQUcsaURBQWlEO0FBRS9ELFNBQVMsUUFBUSxDQUFFLEVBQWlCO0lBQ2xDLElBQUksQ0FBQyxF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TUFBYyxFQUFFLEVBQUUsQ0FDM0QsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDckUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUNqSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUNwRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFcEUsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFO1FBQ2QsU0FBUyxFQUFFLDRCQUE0QjtRQUN2QyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSztZQUNqRyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUMzSCxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7S0FDakQsRUFDRCxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQ3RGLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQ3hDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUM1RixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxvQ0FBb0MsRUFBRSxFQUNoSixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDM0gsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDL0ksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUN4SCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMkRBQVcsRUFBRSxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNsRixFQUFFLENBQUMsSUFBSTtRQUNMLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHdCQUF3QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEQsQ0FBQyxDQUFDLHVCQUF1QixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wbGFjYXItY2FtZXJhcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYWxjaXRlX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLy8gUGxhY2FyIGRhcyBjw6JtZXJhcyDigJMgR2VvQVBVQyAodjQ6IHZpc3VhbCBubyBwYWRyw6NvIGRvcyB3aWRnZXRzIGRvcyBERVZzIOKAlCBwYWluZWwgYnJhbmNvLCBjYW50b3MgNHB4LCBiYXJyYSBzw7NsaWRhLCDDrWNvbmUgQ2FsY2l0ZSlcclxuLy8gRXNjcml0byBzZW0gSlNYIChSZWFjdC5jcmVhdGVFbGVtZW50KSBwYXJhIG7Do28gZGVwZW5kZXIgZGEgY29uZmlndXJhw6fDo28gZGUgY29tcGlsYcOnw6NvLlxyXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQ2FsY2l0ZUljb24gfSBmcm9tICdjYWxjaXRlLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBoID0gUmVhY3QuY3JlYXRlRWxlbWVudFxyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gPSBSZWFjdFxyXG5cclxuaW50ZXJmYWNlIEVzdGFkbyB7XHJcbiAgb25saW5lOiBudW1iZXJcclxuICBvZmZsaW5lOiBudW1iZXJcclxuICB1bHRpbWE6IG51bWJlciB8IG51bGxcclxuICBjYXJyZWdhbmRvOiBib29sZWFuXHJcbiAgZXJybzogc3RyaW5nIHwgbnVsbFxyXG59XHJcblxyXG4vLyBwYWxldGEgZG9zIHdpZGdldHMgZG9zIERFVnMgKyBhenVsIGRhIGNhc2NhIGhvbW9sb2dhZGFcclxuY29uc3QgQyA9IHsgbWFyY2E6ICcjNDQ2M0E5JywgdmVyZGU6ICcjMUY5RDU1JywgdmVybWVsaG86ICcjRDY0NTQ1JywgdGV4dG86ICcjMUYyOTM3JywgdGV4dG8yOiAnIzRCNTU2MycsIHN1YXZlOiAnIzZCNzI4MCcsIGJvcmRhOiAnI0U1RTdFQicsIHRyaWxobzogJyNFNUU3RUInLCBmdW5kbzogJyNGRkZGRkYnIH1cclxuY29uc3QgRk9OVEUgPSBcIkludGVyLCAnQXZlbmlyIE5leHQnLCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmXCJcclxuXHJcbmZ1bmN0aW9uIGRhdGFIb3JhIChtczogbnVtYmVyIHwgbnVsbCk6IHN0cmluZyB7XHJcbiAgaWYgKCFtcykgcmV0dXJuICfigJQnXHJcbiAgY29uc3QgZCA9IG5ldyBEYXRlKG1zKVxyXG4gIHJldHVybiBkLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInKSArICcgJyArIGQudG9Mb2NhbGVUaW1lU3RyaW5nKCdwdC1CUicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBtbXNzIChzZWc6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgY29uc3QgbSA9IE1hdGguZmxvb3Ioc2VnIC8gNjApOyBjb25zdCBzID0gc2VnICUgNjBcclxuICByZXR1cm4gYCR7bX06JHtzIDwgMTAgPyAnMCcgOiAnJ30ke3N9YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XHJcbiAgY29uc3QgY2ZnOiBhbnkgPSBwcm9wcy5jb25maWcgfHwge31cclxuICBjb25zdCB1cmw6IHN0cmluZyA9IGNmZy5jYW1hZGFVcmwgfHwgJ2h0dHBzOi8vZ2VvLmFwdWNhcmFuYS5wci5nb3YuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL0NhbWVyYXNfQXB1Y2FyYW5hL0ZlYXR1cmVTZXJ2ZXIvMCdcclxuICBjb25zdCBpbnRlcnZhbG86IG51bWJlciA9IE1hdGgubWF4KDEsIE51bWJlcihjZmcuaW50ZXJ2YWxvTWluKSB8fCA1KSAqIDYwXHJcblxyXG4gIGNvbnN0IFtzdCwgc2V0U3RdID0gdXNlU3RhdGU8RXN0YWRvPih7IG9ubGluZTogMCwgb2ZmbGluZTogMCwgdWx0aW1hOiBudWxsLCBjYXJyZWdhbmRvOiB0cnVlLCBlcnJvOiBudWxsIH0pXHJcbiAgY29uc3QgW2ZhbHRhbSwgc2V0RmFsdGFtXSA9IHVzZVN0YXRlPG51bWJlcj4oaW50ZXJ2YWxvKVxyXG5cclxuICBjb25zdCBjb25zdWx0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHEgPSBgJHt1cmx9L3F1ZXJ5P3doZXJlPTElM0QxJm91dEZpZWxkcz1zdGF0dXMsdWx0aW1hX3ZlcmlmaWNhY2FvJnJldHVybkdlb21ldHJ5PWZhbHNlJmY9anNvbiZfPSR7RGF0ZS5ub3coKX1gXHJcbiAgICBmZXRjaChxKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oKGo6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoai5lcnJvcikgdGhyb3cgbmV3IEVycm9yKGouZXJyb3IubWVzc2FnZSB8fCAnZXJybyBuYSBjb25zdWx0YScpXHJcbiAgICAgIGxldCBvbiA9IDA7IGxldCBvZmYgPSAwOyBsZXQgdWx0ID0gMFxyXG4gICAgICA7KGouZmVhdHVyZXMgfHwgW10pLmZvckVhY2goKGY6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGEgPSBmLmF0dHJpYnV0ZXMgfHwge31cclxuICAgICAgICBpZiAoU3RyaW5nKGEuc3RhdHVzKS50b0xvd2VyQ2FzZSgpID09PSAnb25saW5lJykgb24rKzsgZWxzZSBvZmYrK1xyXG4gICAgICAgIGlmIChhLnVsdGltYV92ZXJpZmljYWNhbyAmJiBhLnVsdGltYV92ZXJpZmljYWNhbyA+IHVsdCkgdWx0ID0gYS51bHRpbWFfdmVyaWZpY2FjYW9cclxuICAgICAgfSlcclxuICAgICAgc2V0U3QoeyBvbmxpbmU6IG9uLCBvZmZsaW5lOiBvZmYsIHVsdGltYTogdWx0IHx8IG51bGwsIGNhcnJlZ2FuZG86IGZhbHNlLCBlcnJvOiBudWxsIH0pXHJcbiAgICB9KS5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgIHNldFN0KHMgPT4gKHsgLi4ucywgY2FycmVnYW5kbzogZmFsc2UsIGVycm86ICdTZW0gY29uZXjDo28gY29tIG8gUG9ydGFsJyB9KSlcclxuICAgICAgY29uc29sZS53YXJuKCdbUGxhY2FyIGRhcyBjw6JtZXJhc10nLCBlKVxyXG4gICAgfSlcclxuICAgIHNldEZhbHRhbShpbnRlcnZhbG8pXHJcbiAgfSwgW3VybCwgaW50ZXJ2YWxvXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgY29uc3VsdGEoKSB9LCBbY29uc3VsdGFdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRGYWx0YW0oZiA9PiB7IGlmIChmIDw9IDEpIHsgY29uc3VsdGEoKTsgcmV0dXJuIGludGVydmFsbyB9IHJldHVybiBmIC0gMSB9KVxyXG4gICAgfSwgMTAwMClcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHQpXHJcbiAgfSwgW2NvbnN1bHRhLCBpbnRlcnZhbG9dKVxyXG5cclxuICBjb25zdCB0b3RhbCA9IHN0Lm9ubGluZSArIHN0Lm9mZmxpbmVcclxuICBjb25zdCBwY3QgPSB0b3RhbCA/IE1hdGgucm91bmQoMTAwICogc3Qub25saW5lIC8gdG90YWwpIDogMFxyXG5cclxuICBjb25zdCBjYWl4YSA9IChjb3I6IHN0cmluZywgdmFsb3I6IG51bWJlciwgcm90dWxvOiBzdHJpbmcpID0+XHJcbiAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJywgZ2FwOiA2IH0gfSxcclxuICAgICAgaCgnc3BhbicsIHsgc3R5bGU6IHsgd2lkdGg6IDksIGhlaWdodDogOSwgYm9yZGVyUmFkaXVzOiAnNTAlJywgYmFja2dyb3VuZDogY29yLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgYWxpZ25TZWxmOiAnY2VudGVyJyB9IH0pLFxyXG4gICAgICBoKCdzcGFuJywgeyBzdHlsZTogeyBmb250U2l6ZTogMjAsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMudGV4dG8gfSB9LCBzdC5jYXJyZWdhbmRvID8gJ+KApicgOiB2YWxvciksXHJcbiAgICAgIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IEMudGV4dG8yIH0gfSwgcm90dWxvKSlcclxuXHJcbiAgcmV0dXJuIGgoJ2RpdicsIHtcclxuICAgIGNsYXNzTmFtZTogJ2ppbXUtd2lkZ2V0IHBsYWNhci1jYW1lcmFzJyxcclxuICAgIHN0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZzogJzEwcHggMTZweCcsIGJhY2tncm91bmQ6IEMuZnVuZG8sXHJcbiAgICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRhfWAsIGJvcmRlclJhZGl1czogNCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBnYXA6IDgsXHJcbiAgICAgICAgICAgICBmb250RmFtaWx5OiBGT05URSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH1cclxuICB9LFxyXG4gIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAyMiwgZmxleFdyYXA6ICd3cmFwJyB9IH0sXHJcbiAgICBjYWl4YShDLnZlcmRlLCBzdC5vbmxpbmUsICdvbmxpbmUnKSxcclxuICAgIGNhaXhhKEMudmVybWVsaG8sIHN0Lm9mZmxpbmUsICdvZmZsaW5lJyksXHJcbiAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAxMjAsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAgfSB9LFxyXG4gICAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGZsZXg6IDEsIGhlaWdodDogOCwgYmFja2dyb3VuZDogQy50cmlsaG8sIGJvcmRlclJhZGl1czogMiwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0sIHRpdGxlOiAnRGlzcG9uaWJpbGlkYWRlIGRhIHJlZGUgZGUgY8OibWVyYXMnIH0sXHJcbiAgICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyB3aWR0aDogYCR7cGN0fSVgLCBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiAyLCBiYWNrZ3JvdW5kOiBDLm1hcmNhLCB0cmFuc2l0aW9uOiAnd2lkdGggLjZzJyB9IH0pKSxcclxuICAgICAgaCgnc3BhbicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLnRleHRvLCBtaW5XaWR0aDogNDIsIHRleHRBbGlnbjogJ3JpZ2h0JyB9IH0sIHN0LmNhcnJlZ2FuZG8gPyAnJyA6IGAke3BjdH0lYCkpKSxcclxuICBoKCdkaXYnLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IHN0LmVycm8gPyBDLnZlcm1lbGhvIDogQy5zdWF2ZSwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2IH0gfSxcclxuICAgIHN0LmVycm8gPyBoKENhbGNpdGVJY29uLCB7IGljb246ICdleGNsYW1hdGlvbi1tYXJrLXRyaWFuZ2xlJywgc2NhbGU6ICdzJyB9KSA6IG51bGwsXHJcbiAgICBzdC5lcnJvXHJcbiAgICAgID8gYCR7c3QuZXJyb30gwrcgbm92YSB0ZW50YXRpdmEgZW0gJHttbXNzKGZhbHRhbSl9YFxyXG4gICAgICA6IGDDmmx0aW1hIHZlcmlmaWNhw6fDo286ICR7ZGF0YUhvcmEoc3QudWx0aW1hKX0gwrcgYXR1YWxpemEgZW0gJHttbXNzKGZhbHRhbSl9YCkpXHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==