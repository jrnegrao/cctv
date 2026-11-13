System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
// Placar das câmeras – GeoAPUC (v2: fundo translúcido estilo vidro fosco)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.

const h = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement;
const { useState, useEffect, useCallback } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const CORES = { azul: '#4463a9', verde: '#1f9d55', vermelho: '#d64545', texto: '#1b2a4a', suave: '#6b7690', fundo: '#ffffff', trilho: 'rgba(27,42,74,0.14)' };
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
    const opac = Math.min(1, Math.max(0.3, Number(cfg.opacidadeFundo) || 0.7)); // 0,3 a 1 (1 = branco sólido)
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
    const caixa = (cor, valor, rotulo) => h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 6 } }, h('span', { style: { width: 10, height: 10, borderRadius: '50%', background: cor, display: 'inline-block', alignSelf: 'center' } }), h('span', { style: { fontSize: 22, fontWeight: 700, color: CORES.texto } }, st.carregando ? '…' : valor), h('span', { style: { fontSize: 13, color: CORES.suave } }, rotulo));
    return h('div', {
        className: 'jimu-widget placar-cameras',
        style: { width: '100%', height: '100%', boxSizing: 'border-box', padding: '10px 16px',
            background: `rgba(255,255,255,${opac})`, backdropFilter: 'blur(6px) saturate(140%)', WebkitBackdropFilter: 'blur(6px) saturate(140%)',
            border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 4px 18px rgba(16,32,64,0.18)', borderRadius: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8,
            fontFamily: 'inherit', overflow: 'hidden' }
    }, h('div', { style: { display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' } }, caixa(CORES.verde, st.online, 'online'), caixa(CORES.vermelho, st.offline, 'offline'), h('div', { style: { flex: 1, minWidth: 120, display: 'flex', alignItems: 'center', gap: 10 } }, h('div', { style: { flex: 1, height: 10, background: CORES.trilho, borderRadius: 999, overflow: 'hidden' }, title: 'Disponibilidade da rede de câmeras' }, h('div', { style: { width: `${pct}%`, height: '100%', background: CORES.verde, borderRadius: 999, transition: 'width .6s' } })), h('span', { style: { fontSize: 15, fontWeight: 700, color: CORES.texto, minWidth: 42, textAlign: 'right' } }, st.carregando ? '' : `${pct}%`))), h('div', { style: { fontSize: 12, color: st.erro ? CORES.vermelho : CORES.suave } }, st.erro
        ? `⚠ ${st.erro} · nova tentativa em ${mmss(faltam)}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wbGFjYXItY2FtZXJhcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwRUFBMEU7QUFDMUUseUZBQXlGO0FBQ25DO0FBRXRELE1BQU0sQ0FBQyxHQUFHLDRDQUFLLENBQUMsYUFBYTtBQUM3QixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyw0Q0FBSztBQVVsRCxNQUFNLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRTtBQUU3SixTQUFTLFFBQVEsQ0FBRSxFQUFpQjtJQUNsQyxJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRztJQUNuQixNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdB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QUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNqSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNuSixDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQ2pGLEVBQUUsQ0FBQyxJQUFJO1FBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksd0JBQXdCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNwRCxDQUFDLENBQUMsdUJBQXVCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9wbGFjYXItY2FtZXJhcy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvLyBQbGFjYXIgZGFzIGPDom1lcmFzIOKAkyBHZW9BUFVDICh2MjogZnVuZG8gdHJhbnNsw7pjaWRvIGVzdGlsbyB2aWRybyBmb3Njbylcbi8vIEVzY3JpdG8gc2VtIEpTWCAoUmVhY3QuY3JlYXRlRWxlbWVudCkgcGFyYSBuw6NvIGRlcGVuZGVyIGRhIGNvbmZpZ3VyYcOnw6NvIGRlIGNvbXBpbGHDp8Ojby5cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5jb25zdCBoID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9ID0gUmVhY3RcblxuaW50ZXJmYWNlIEVzdGFkbyB7XG4gIG9ubGluZTogbnVtYmVyXG4gIG9mZmxpbmU6IG51bWJlclxuICB1bHRpbWE6IG51bWJlciB8IG51bGxcbiAgY2FycmVnYW5kbzogYm9vbGVhblxuICBlcnJvOiBzdHJpbmcgfCBudWxsXG59XG5cbmNvbnN0IENPUkVTID0geyBhenVsOiAnIzQ0NjNhOScsIHZlcmRlOiAnIzFmOWQ1NScsIHZlcm1lbGhvOiAnI2Q2NDU0NScsIHRleHRvOiAnIzFiMmE0YScsIHN1YXZlOiAnIzZiNzY5MCcsIGZ1bmRvOiAnI2ZmZmZmZicsIHRyaWxobzogJ3JnYmEoMjcsNDIsNzQsMC4xNCknIH1cblxuZnVuY3Rpb24gZGF0YUhvcmEgKG1zOiBudW1iZXIgfCBudWxsKTogc3RyaW5nIHtcbiAgaWYgKCFtcykgcmV0dXJuICfigJQnXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShtcylcbiAgcmV0dXJuIGQudG9Mb2NhbGVEYXRlU3RyaW5nKCdwdC1CUicpICsgJyAnICsgZC50b0xvY2FsZVRpbWVTdHJpbmcoJ3B0LUJSJywgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pXG59XG5cbmZ1bmN0aW9uIG1tc3MgKHNlZzogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgbSA9IE1hdGguZmxvb3Ioc2VnIC8gNjApOyBjb25zdCBzID0gc2VnICUgNjBcbiAgcmV0dXJuIGAke219OiR7cyA8IDEwID8gJzAnIDogJyd9JHtzfWBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8YW55Pikge1xuICBjb25zdCBjZmc6IGFueSA9IHByb3BzLmNvbmZpZyB8fCB7fVxuICBjb25zdCB1cmw6IHN0cmluZyA9IGNmZy5jYW1hZGFVcmwgfHwgJ2h0dHBzOi8vZ2VvLmFwdWNhcmFuYS5wci5nb3YuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL0NhbWVyYXNfQXB1Y2FyYW5hL0ZlYXR1cmVTZXJ2ZXIvMCdcbiAgY29uc3QgaW50ZXJ2YWxvOiBudW1iZXIgPSBNYXRoLm1heCgxLCBOdW1iZXIoY2ZnLmludGVydmFsb01pbikgfHwgNSkgKiA2MFxuICBjb25zdCBvcGFjOiBudW1iZXIgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLjMsIE51bWJlcihjZmcub3BhY2lkYWRlRnVuZG8pIHx8IDAuNykpICAgLy8gMCwzIGEgMSAoMSA9IGJyYW5jbyBzw7NsaWRvKVxuXG4gIGNvbnN0IFtzdCwgc2V0U3RdID0gdXNlU3RhdGU8RXN0YWRvPih7IG9ubGluZTogMCwgb2ZmbGluZTogMCwgdWx0aW1hOiBudWxsLCBjYXJyZWdhbmRvOiB0cnVlLCBlcnJvOiBudWxsIH0pXG4gIGNvbnN0IFtmYWx0YW0sIHNldEZhbHRhbV0gPSB1c2VTdGF0ZTxudW1iZXI+KGludGVydmFsbylcblxuICBjb25zdCBjb25zdWx0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBxID0gYCR7dXJsfS9xdWVyeT93aGVyZT0xJTNEMSZvdXRGaWVsZHM9c3RhdHVzLHVsdGltYV92ZXJpZmljYWNhbyZyZXR1cm5HZW9tZXRyeT1mYWxzZSZmPWpzb24mXz0ke0RhdGUubm93KCl9YFxuICAgIGZldGNoKHEpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbigoajogYW55KSA9PiB7XG4gICAgICBpZiAoai5lcnJvcikgdGhyb3cgbmV3IEVycm9yKGouZXJyb3IubWVzc2FnZSB8fCAnZXJybyBuYSBjb25zdWx0YScpXG4gICAgICBsZXQgb24gPSAwOyBsZXQgb2ZmID0gMDsgbGV0IHVsdCA9IDBcbiAgICAgIDsoai5mZWF0dXJlcyB8fCBbXSkuZm9yRWFjaCgoZjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBmLmF0dHJpYnV0ZXMgfHwge31cbiAgICAgICAgaWYgKFN0cmluZyhhLnN0YXR1cykudG9Mb3dlckNhc2UoKSA9PT0gJ29ubGluZScpIG9uKys7IGVsc2Ugb2ZmKytcbiAgICAgICAgaWYgKGEudWx0aW1hX3ZlcmlmaWNhY2FvICYmIGEudWx0aW1hX3ZlcmlmaWNhY2FvID4gdWx0KSB1bHQgPSBhLnVsdGltYV92ZXJpZmljYWNhb1xuICAgICAgfSlcbiAgICAgIHNldFN0KHsgb25saW5lOiBvbiwgb2ZmbGluZTogb2ZmLCB1bHRpbWE6IHVsdCB8fCBudWxsLCBjYXJyZWdhbmRvOiBmYWxzZSwgZXJybzogbnVsbCB9KVxuICAgIH0pLmNhdGNoKChlOiBhbnkpID0+IHtcbiAgICAgIHNldFN0KHMgPT4gKHsgLi4ucywgY2FycmVnYW5kbzogZmFsc2UsIGVycm86ICdTZW0gY29uZXjDo28gY29tIG8gUG9ydGFsJyB9KSlcbiAgICAgIGNvbnNvbGUud2FybignW1BsYWNhciBkYXMgY8OibWVyYXNdJywgZSlcbiAgICB9KVxuICAgIHNldEZhbHRhbShpbnRlcnZhbG8pXG4gIH0sIFt1cmwsIGludGVydmFsb10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHsgY29uc3VsdGEoKSB9LCBbY29uc3VsdGFdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRGYWx0YW0oZiA9PiB7IGlmIChmIDw9IDEpIHsgY29uc3VsdGEoKTsgcmV0dXJuIGludGVydmFsbyB9IHJldHVybiBmIC0gMSB9KVxuICAgIH0sIDEwMDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodClcbiAgfSwgW2NvbnN1bHRhLCBpbnRlcnZhbG9dKVxuXG4gIGNvbnN0IHRvdGFsID0gc3Qub25saW5lICsgc3Qub2ZmbGluZVxuICBjb25zdCBwY3QgPSB0b3RhbCA/IE1hdGgucm91bmQoMTAwICogc3Qub25saW5lIC8gdG90YWwpIDogMFxuXG4gIGNvbnN0IGNhaXhhID0gKGNvcjogc3RyaW5nLCB2YWxvcjogbnVtYmVyLCByb3R1bG86IHN0cmluZykgPT5cbiAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJywgZ2FwOiA2IH0gfSxcbiAgICAgIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgYm9yZGVyUmFkaXVzOiAnNTAlJywgYmFja2dyb3VuZDogY29yLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgYWxpZ25TZWxmOiAnY2VudGVyJyB9IH0pLFxuICAgICAgaCgnc3BhbicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiBDT1JFUy50ZXh0byB9IH0sIHN0LmNhcnJlZ2FuZG8gPyAn4oCmJyA6IHZhbG9yKSxcbiAgICAgIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IENPUkVTLnN1YXZlIH0gfSwgcm90dWxvKSlcblxuICByZXR1cm4gaCgnZGl2Jywge1xuICAgIGNsYXNzTmFtZTogJ2ppbXUtd2lkZ2V0IHBsYWNhci1jYW1lcmFzJyxcbiAgICBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmc6ICcxMHB4IDE2cHgnLFxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IGByZ2JhKDI1NSwyNTUsMjU1LCR7b3BhY30pYCwgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDZweCkgc2F0dXJhdGUoMTQwJSknLCBXZWJraXRCYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KSBzYXR1cmF0ZSgxNDAlKScsXG4gICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KScsIGJveFNoYWRvdzogJzAgNHB4IDE4cHggcmdiYSgxNiwzMiw2NCwwLjE4KScsIGJvcmRlclJhZGl1czogMTIsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZ2FwOiA4LFxuICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH1cbiAgfSxcbiAgaCgnZGl2JywgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDIyLCBmbGV4V3JhcDogJ3dyYXAnIH0gfSxcbiAgICBjYWl4YShDT1JFUy52ZXJkZSwgc3Qub25saW5lLCAnb25saW5lJyksXG4gICAgY2FpeGEoQ09SRVMudmVybWVsaG8sIHN0Lm9mZmxpbmUsICdvZmZsaW5lJyksXG4gICAgaCgnZGl2JywgeyBzdHlsZTogeyBmbGV4OiAxLCBtaW5XaWR0aDogMTIwLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEwIH0gfSxcbiAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZmxleDogMSwgaGVpZ2h0OiAxMCwgYmFja2dyb3VuZDogQ09SRVMudHJpbGhvLCBib3JkZXJSYWRpdXM6IDk5OSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0sIHRpdGxlOiAnRGlzcG9uaWJpbGlkYWRlIGRhIHJlZGUgZGUgY8OibWVyYXMnIH0sXG4gICAgICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgd2lkdGg6IGAke3BjdH0lYCwgaGVpZ2h0OiAnMTAwJScsIGJhY2tncm91bmQ6IENPUkVTLnZlcmRlLCBib3JkZXJSYWRpdXM6IDk5OSwgdHJhbnNpdGlvbjogJ3dpZHRoIC42cycgfSB9KSksXG4gICAgICBoKCdzcGFuJywgeyBzdHlsZTogeyBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IENPUkVTLnRleHRvLCBtaW5XaWR0aDogNDIsIHRleHRBbGlnbjogJ3JpZ2h0JyB9IH0sIHN0LmNhcnJlZ2FuZG8gPyAnJyA6IGAke3BjdH0lYCkpKSxcbiAgaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBzdC5lcnJvID8gQ09SRVMudmVybWVsaG8gOiBDT1JFUy5zdWF2ZSB9IH0sXG4gICAgc3QuZXJyb1xuICAgICAgPyBg4pqgICR7c3QuZXJyb30gwrcgbm92YSB0ZW50YXRpdmEgZW0gJHttbXNzKGZhbHRhbSl9YFxuICAgICAgOiBgw5psdGltYSB2ZXJpZmljYcOnw6NvOiAke2RhdGFIb3JhKHN0LnVsdGltYSl9IMK3IGF0dWFsaXphIGVtICR7bW1zcyhmYWx0YW0pfWApKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==