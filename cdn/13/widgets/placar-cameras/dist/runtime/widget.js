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
// Placar das câmeras – GeoAPUC (v3: barra em gradiente azul)
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
    }, h('div', { style: { display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' } }, caixa(CORES.verde, st.online, 'online'), caixa(CORES.vermelho, st.offline, 'offline'), h('div', { style: { flex: 1, minWidth: 120, display: 'flex', alignItems: 'center', gap: 10 } }, h('div', { style: { flex: 1, height: 10, background: CORES.trilho, borderRadius: 999, overflow: 'hidden' }, title: 'Disponibilidade da rede de câmeras' }, h('div', { style: { width: `${pct}%`, height: '100%', borderRadius: 999, transition: 'width .6s',
            // gradiente do azul claro ao azul GeoAPUC; o degradê é "esticado" na barra inteira,
            // então a cor na ponta mostra o quanto da rede está no ar (100% = azul cheio)
            background: 'linear-gradient(90deg, #b9d0f6 0%, #6f8fd0 55%, #2f4a86 100%)',
            backgroundSize: pct > 0 ? `${(100 / pct) * 100}% 100%` : '100% 100%' } })), h('span', { style: { fontSize: 15, fontWeight: 700, color: CORES.texto, minWidth: 42, textAlign: 'right' } }, st.carregando ? '' : `${pct}%`))), h('div', { style: { fontSize: 12, color: st.erro ? CORES.vermelho : CORES.suave } }, st.erro
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9wbGFjYXItY2FtZXJhcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCw2REFBNkQ7QUFDN0QseUZBQXlGO0FBQ25DO0FBRXRELE1BQU0sQ0FBQyxHQUFHLDRDQUFLLENBQUMsYUFBYTtBQUM3QixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyw0Q0FBSztBQVVsRCxNQUFNLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRTtBQUU3SixTQUFTLFFBQVEsQ0FBRSxFQUFpQjtJQUNsQyxJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRztJQUNuQixNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFDLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdB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d2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcGxhY2FyLWNhbWVyYXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLy8gUGxhY2FyIGRhcyBjw6JtZXJhcyDigJMgR2VvQVBVQyAodjM6IGJhcnJhIGVtIGdyYWRpZW50ZSBhenVsKVxuLy8gRXNjcml0byBzZW0gSlNYIChSZWFjdC5jcmVhdGVFbGVtZW50KSBwYXJhIG7Do28gZGVwZW5kZXIgZGEgY29uZmlndXJhw6fDo28gZGUgY29tcGlsYcOnw6NvLlxuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5cbmNvbnN0IGggPSBSZWFjdC5jcmVhdGVFbGVtZW50XG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gPSBSZWFjdFxuXG5pbnRlcmZhY2UgRXN0YWRvIHtcbiAgb25saW5lOiBudW1iZXJcbiAgb2ZmbGluZTogbnVtYmVyXG4gIHVsdGltYTogbnVtYmVyIHwgbnVsbFxuICBjYXJyZWdhbmRvOiBib29sZWFuXG4gIGVycm86IHN0cmluZyB8IG51bGxcbn1cblxuY29uc3QgQ09SRVMgPSB7IGF6dWw6ICcjNDQ2M2E5JywgdmVyZGU6ICcjMWY5ZDU1JywgdmVybWVsaG86ICcjZDY0NTQ1JywgdGV4dG86ICcjMWIyYTRhJywgc3VhdmU6ICcjNmI3NjkwJywgZnVuZG86ICcjZmZmZmZmJywgdHJpbGhvOiAncmdiYSgyNyw0Miw3NCwwLjE0KScgfVxuXG5mdW5jdGlvbiBkYXRhSG9yYSAobXM6IG51bWJlciB8IG51bGwpOiBzdHJpbmcge1xuICBpZiAoIW1zKSByZXR1cm4gJ+KAlCdcbiAgY29uc3QgZCA9IG5ldyBEYXRlKG1zKVxuICByZXR1cm4gZC50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJykgKyAnICcgKyBkLnRvTG9jYWxlVGltZVN0cmluZygncHQtQlInLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSlcbn1cblxuZnVuY3Rpb24gbW1zcyAoc2VnOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBtID0gTWF0aC5mbG9vcihzZWcgLyA2MCk7IGNvbnN0IHMgPSBzZWcgJSA2MFxuICByZXR1cm4gYCR7bX06JHtzIDwgMTAgPyAnMCcgOiAnJ30ke3N9YFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XG4gIGNvbnN0IGNmZzogYW55ID0gcHJvcHMuY29uZmlnIHx8IHt9XG4gIGNvbnN0IHVybDogc3RyaW5nID0gY2ZnLmNhbWFkYVVybCB8fCAnaHR0cHM6Ly9nZW8uYXB1Y2FyYW5hLnByLmdvdi5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvQ2FtZXJhc19BcHVjYXJhbmEvRmVhdHVyZVNlcnZlci8wJ1xuICBjb25zdCBpbnRlcnZhbG86IG51bWJlciA9IE1hdGgubWF4KDEsIE51bWJlcihjZmcuaW50ZXJ2YWxvTWluKSB8fCA1KSAqIDYwXG4gIGNvbnN0IG9wYWM6IG51bWJlciA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAuMywgTnVtYmVyKGNmZy5vcGFjaWRhZGVGdW5kbykgfHwgMC43KSkgICAvLyAwLDMgYSAxICgxID0gYnJhbmNvIHPDs2xpZG8pXG5cbiAgY29uc3QgW3N0LCBzZXRTdF0gPSB1c2VTdGF0ZTxFc3RhZG8+KHsgb25saW5lOiAwLCBvZmZsaW5lOiAwLCB1bHRpbWE6IG51bGwsIGNhcnJlZ2FuZG86IHRydWUsIGVycm86IG51bGwgfSlcbiAgY29uc3QgW2ZhbHRhbSwgc2V0RmFsdGFtXSA9IHVzZVN0YXRlPG51bWJlcj4oaW50ZXJ2YWxvKVxuXG4gIGNvbnN0IGNvbnN1bHRhID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHEgPSBgJHt1cmx9L3F1ZXJ5P3doZXJlPTElM0QxJm91dEZpZWxkcz1zdGF0dXMsdWx0aW1hX3ZlcmlmaWNhY2FvJnJldHVybkdlb21ldHJ5PWZhbHNlJmY9anNvbiZfPSR7RGF0ZS5ub3coKX1gXG4gICAgZmV0Y2gocSkudGhlbihyID0+IHIuanNvbigpKS50aGVuKChqOiBhbnkpID0+IHtcbiAgICAgIGlmIChqLmVycm9yKSB0aHJvdyBuZXcgRXJyb3Ioai5lcnJvci5tZXNzYWdlIHx8ICdlcnJvIG5hIGNvbnN1bHRhJylcbiAgICAgIGxldCBvbiA9IDA7IGxldCBvZmYgPSAwOyBsZXQgdWx0ID0gMFxuICAgICAgOyhqLmZlYXR1cmVzIHx8IFtdKS5mb3JFYWNoKChmOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGYuYXR0cmlidXRlcyB8fCB7fVxuICAgICAgICBpZiAoU3RyaW5nKGEuc3RhdHVzKS50b0xvd2VyQ2FzZSgpID09PSAnb25saW5lJykgb24rKzsgZWxzZSBvZmYrK1xuICAgICAgICBpZiAoYS51bHRpbWFfdmVyaWZpY2FjYW8gJiYgYS51bHRpbWFfdmVyaWZpY2FjYW8gPiB1bHQpIHVsdCA9IGEudWx0aW1hX3ZlcmlmaWNhY2FvXG4gICAgICB9KVxuICAgICAgc2V0U3QoeyBvbmxpbmU6IG9uLCBvZmZsaW5lOiBvZmYsIHVsdGltYTogdWx0IHx8IG51bGwsIGNhcnJlZ2FuZG86IGZhbHNlLCBlcnJvOiBudWxsIH0pXG4gICAgfSkuY2F0Y2goKGU6IGFueSkgPT4ge1xuICAgICAgc2V0U3QocyA9PiAoeyAuLi5zLCBjYXJyZWdhbmRvOiBmYWxzZSwgZXJybzogJ1NlbSBjb25leMOjbyBjb20gbyBQb3J0YWwnIH0pKVxuICAgICAgY29uc29sZS53YXJuKCdbUGxhY2FyIGRhcyBjw6JtZXJhc10nLCBlKVxuICAgIH0pXG4gICAgc2V0RmFsdGFtKGludGVydmFsbylcbiAgfSwgW3VybCwgaW50ZXJ2YWxvXSlcblxuICB1c2VFZmZlY3QoKCkgPT4geyBjb25zdWx0YSgpIH0sIFtjb25zdWx0YV0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEZhbHRhbShmID0+IHsgaWYgKGYgPD0gMSkgeyBjb25zdWx0YSgpOyByZXR1cm4gaW50ZXJ2YWxvIH0gcmV0dXJuIGYgLSAxIH0pXG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0KVxuICB9LCBbY29uc3VsdGEsIGludGVydmFsb10pXG5cbiAgY29uc3QgdG90YWwgPSBzdC5vbmxpbmUgKyBzdC5vZmZsaW5lXG4gIGNvbnN0IHBjdCA9IHRvdGFsID8gTWF0aC5yb3VuZCgxMDAgKiBzdC5vbmxpbmUgLyB0b3RhbCkgOiAwXG5cbiAgY29uc3QgY2FpeGEgPSAoY29yOiBzdHJpbmcsIHZhbG9yOiBudW1iZXIsIHJvdHVsbzogc3RyaW5nKSA9PlxuICAgIGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLCBnYXA6IDYgfSB9LFxuICAgICAgaCgnc3BhbicsIHsgc3R5bGU6IHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBiYWNrZ3JvdW5kOiBjb3IsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBhbGlnblNlbGY6ICdjZW50ZXInIH0gfSksXG4gICAgICBoKCdzcGFuJywgeyBzdHlsZTogeyBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6IENPUkVTLnRleHRvIH0gfSwgc3QuY2FycmVnYW5kbyA/ICfigKYnIDogdmFsb3IpLFxuICAgICAgaCgnc3BhbicsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEzLCBjb2xvcjogQ09SRVMuc3VhdmUgfSB9LCByb3R1bG8pKVxuXG4gIHJldHVybiBoKCdkaXYnLCB7XG4gICAgY2xhc3NOYW1lOiAnamltdS13aWRnZXQgcGxhY2FyLWNhbWVyYXMnLFxuICAgIHN0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZzogJzEwcHggMTZweCcsXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogYHJnYmEoMjU1LDI1NSwyNTUsJHtvcGFjfSlgLCBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KSBzYXR1cmF0ZSgxNDAlKScsIFdlYmtpdEJhY2tkcm9wRmlsdGVyOiAnYmx1cig2cHgpIHNhdHVyYXRlKDE0MCUpJyxcbiAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpJywgYm94U2hhZG93OiAnMCA0cHggMThweCByZ2JhKDE2LDMyLDY0LDAuMTgpJywgYm9yZGVyUmFkaXVzOiAxMiwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBnYXA6IDgsXG4gICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLCBvdmVyZmxvdzogJ2hpZGRlbicgfVxuICB9LFxuICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMjIsIGZsZXhXcmFwOiAnd3JhcCcgfSB9LFxuICAgIGNhaXhhKENPUkVTLnZlcmRlLCBzdC5vbmxpbmUsICdvbmxpbmUnKSxcbiAgICBjYWl4YShDT1JFUy52ZXJtZWxobywgc3Qub2ZmbGluZSwgJ29mZmxpbmUnKSxcbiAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAxMjAsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAgfSB9LFxuICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyBmbGV4OiAxLCBoZWlnaHQ6IDEwLCBiYWNrZ3JvdW5kOiBDT1JFUy50cmlsaG8sIGJvcmRlclJhZGl1czogOTk5LCBvdmVyZmxvdzogJ2hpZGRlbicgfSwgdGl0bGU6ICdEaXNwb25pYmlsaWRhZGUgZGEgcmVkZSBkZSBjw6JtZXJhcycgfSxcbiAgICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyB3aWR0aDogYCR7cGN0fSVgLCBoZWlnaHQ6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiA5OTksIHRyYW5zaXRpb246ICd3aWR0aCAuNnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdyYWRpZW50ZSBkbyBhenVsIGNsYXJvIGFvIGF6dWwgR2VvQVBVQzsgbyBkZWdyYWTDqiDDqSBcImVzdGljYWRvXCIgbmEgYmFycmEgaW50ZWlyYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnTDo28gYSBjb3IgbmEgcG9udGEgbW9zdHJhIG8gcXVhbnRvIGRhIHJlZGUgZXN0w6Egbm8gYXIgKDEwMCUgPSBhenVsIGNoZWlvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiOWQwZjYgMCUsICM2ZjhmZDAgNTUlLCAjMmY0YTg2IDEwMCUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogcGN0ID4gMCA/IGAkeygxMDAgLyBwY3QpICogMTAwfSUgMTAwJWAgOiAnMTAwJSAxMDAlJyB9IH0pKSxcbiAgICAgIGgoJ3NwYW4nLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogNzAwLCBjb2xvcjogQ09SRVMudGV4dG8sIG1pbldpZHRoOiA0MiwgdGV4dEFsaWduOiAncmlnaHQnIH0gfSwgc3QuY2FycmVnYW5kbyA/ICcnIDogYCR7cGN0fSVgKSkpLFxuICBoKCdkaXYnLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IHN0LmVycm8gPyBDT1JFUy52ZXJtZWxobyA6IENPUkVTLnN1YXZlIH0gfSxcbiAgICBzdC5lcnJvXG4gICAgICA/IGDimqAgJHtzdC5lcnJvfSDCtyBub3ZhIHRlbnRhdGl2YSBlbSAke21tc3MoZmFsdGFtKX1gXG4gICAgICA6IGDDmmx0aW1hIHZlcmlmaWNhw6fDo286ICR7ZGF0YUhvcmEoc3QudWx0aW1hKX0gwrcgYXR1YWxpemEgZW0gJHttbXNzKGZhbHRhbSl9YCkpXG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9