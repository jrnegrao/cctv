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
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/servicos-passageiro/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calcite-components */ "calcite-components");
// Serviços ao Passageiro – GeoAPUC (v2: ícone pin-tear; padrão visual dos widgets dos DEVs — Calcite)
// Escrito sem JSX (React.createElement) para não depender da configuração de compilação.


const h = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement;
const C = { fundo: '#FFFFFF', borda: '#E5E7EB', texto: '#1F2937', texto2: '#4B5563', marca: '#4463A9' };
const FONTE = "Inter, 'Avenir Next', Roboto, Arial, sans-serif";
function Widget(props) {
    const cfg = props.config || {};
    const botao = (txt, url, ic, fimExterno = true) => h(calcite_components__WEBPACK_IMPORTED_MODULE_1__.CalciteButton, {
        href: url, target: '_blank', rel: 'noopener noreferrer', appearance: 'outline', kind: 'brand', scale: 's', width: 'full',
        iconStart: ic, iconEnd: fimExterno ? 'launch' : undefined
    }, txt);
    const secao = (ic, titulo, texto, botoes = [], ultima = false) => h('div', {
        style: { display: 'flex', gap: 10, padding: '10px 0', borderBottom: ultima ? 'none' : `1px solid ${C.borda}` }
    }, h(calcite_components__WEBPACK_IMPORTED_MODULE_1__.CalciteIcon, { icon: ic, scale: 'm', style: { color: C.marca, flex: 'none', marginTop: 1 } }), h('div', { style: { display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, flex: 1 } }, h('div', { style: { fontSize: 13, fontWeight: 600, color: C.texto } }, titulo), h('div', { style: { fontSize: 12, color: C.texto2, lineHeight: 1.4 } }, texto), botoes.length ? h('div', { style: { display: 'grid', gridTemplateColumns: `repeat(${botoes.length}, 1fr)`, gap: 6 } }, ...botoes) : null));
    return h('div', {
        className: 'jimu-widget servicos-passageiro',
        style: { width: '100%', height: '100%', boxSizing: 'border-box', background: C.fundo, borderRadius: 8, border: `1px solid ${C.borda}`,
            padding: '12px 14px', overflowY: 'auto', fontFamily: FONTE, color: C.texto }
    }, h('div', { style: { fontSize: 15, fontWeight: 600, color: C.texto, marginBottom: 2 } }, 'Serviços ao passageiro'), secao('route-to', 'Apucarana Integrada', 'Pague uma passagem e troque de linha em qualquer ponto da cidade, sem passar pelo Terminal, usando o Cartão Passe Fácil ou o app BiPay.'), secao('mobile', 'App Vou de Ônibus Apucarana', 'Horários, mapa da linha e previsão de chegada no celular.', [botao('Google Play', cfg.urlGooglePlay, 'download', false), botao('App Store', cfg.urlAppStore, 'download', false)]), secao('credit-card', 'Tarifas, cartão e recarga', 'A 1ª via do Passe Fácil é gratuita na VAL, ao lado do Terminal Urbano.', [botao('Tarifas', cfg.urlTarifas, 'tag'), botao('Lojas e recarga', cfg.urlLojas, 'pin-tear')], true));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZXJ2aWNvcy1wYXNzYWdlaXJvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsc0dBQXNHO0FBQ3RHLHlGQUF5RjtBQUNuQztBQUNTO0FBRS9ELE1BQU0sQ0FBQyxHQUFHLDRDQUFLLENBQUMsYUFBYTtBQUM3QixNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtBQUN2RyxNQUFNLEtBQUssR0FBRyxpREFBaUQ7QUFFaEQsU0FBUyxNQUFNLENBQUUsS0FBMEI7SUFDeEQsTUFBTSxHQUFHLEdBQVEsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFO0lBQ25DLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxFQUFVLEVBQUUsVUFBVSxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLDZEQUFvQixFQUFFO1FBQ2pHLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDeEgsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDMUQsRUFBRSxHQUFHLENBQUM7SUFDUCxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQVUsRUFBRSxNQUFjLEVBQUUsS0FBVSxFQUFFLFNBQWdCLEVBQUUsRUFBRSxNQUFNLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1FBQ3JHLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7S0FDL0csRUFDQyxDQUFDLENBQUMsMkRBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUN0RyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFDNUYsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQzlFLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUM5RSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLE1BQU0sQ0FBQyxNQUFNLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU5SSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDZCxTQUFTLEVBQUUsaUNBQWlDO1FBQzVDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUM1SCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRTtLQUN0RixFQUNDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsd0JBQXdCLENBQUMsRUFDakgsS0FBSyxDQUFDLFVBQVUsRUFBRSxxQkFBcUIsRUFDckMseUlBQXlJLENBQUMsRUFDNUksS0FBSyxDQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSwyREFBMkQsRUFDeEcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUN2SCxLQUFLLENBQUMsYUFBYSxFQUFFLDJCQUEyQixFQUFFLHdFQUF3RSxFQUN4SCxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNHLENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiY2FsY2l0ZS1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlcnZpY29zLXBhc3NhZ2Vpcm8vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8vIFNlcnZpw6dvcyBhbyBQYXNzYWdlaXJvIOKAkyBHZW9BUFVDICh2Mjogw61jb25lIHBpbi10ZWFyOyBwYWRyw6NvIHZpc3VhbCBkb3Mgd2lkZ2V0cyBkb3MgREVWcyDigJQgQ2FsY2l0ZSlcbi8vIEVzY3JpdG8gc2VtIEpTWCAoUmVhY3QuY3JlYXRlRWxlbWVudCkgcGFyYSBuw6NvIGRlcGVuZGVyIGRhIGNvbmZpZ3VyYcOnw6NvIGRlIGNvbXBpbGHDp8Ojby5cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQ2FsY2l0ZUJ1dHRvbiwgQ2FsY2l0ZUljb24gfSBmcm9tICdjYWxjaXRlLWNvbXBvbmVudHMnXG5cbmNvbnN0IGggPSBSZWFjdC5jcmVhdGVFbGVtZW50XG5jb25zdCBDID0geyBmdW5kbzogJyNGRkZGRkYnLCBib3JkYTogJyNFNUU3RUInLCB0ZXh0bzogJyMxRjI5MzcnLCB0ZXh0bzI6ICcjNEI1NTYzJywgbWFyY2E6ICcjNDQ2M0E5JyB9XG5jb25zdCBGT05URSA9IFwiSW50ZXIsICdBdmVuaXIgTmV4dCcsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWZcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczxhbnk+KSB7XG4gIGNvbnN0IGNmZzogYW55ID0gcHJvcHMuY29uZmlnIHx8IHt9XG4gIGNvbnN0IGJvdGFvID0gKHR4dDogc3RyaW5nLCB1cmw6IHN0cmluZywgaWM6IHN0cmluZywgZmltRXh0ZXJubyA9IHRydWUpID0+IGgoQ2FsY2l0ZUJ1dHRvbiBhcyBhbnksIHtcbiAgICBocmVmOiB1cmwsIHRhcmdldDogJ19ibGFuaycsIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLCBhcHBlYXJhbmNlOiAnb3V0bGluZScsIGtpbmQ6ICdicmFuZCcsIHNjYWxlOiAncycsIHdpZHRoOiAnZnVsbCcsXG4gICAgaWNvblN0YXJ0OiBpYywgaWNvbkVuZDogZmltRXh0ZXJubyA/ICdsYXVuY2gnIDogdW5kZWZpbmVkXG4gIH0sIHR4dClcbiAgY29uc3Qgc2VjYW8gPSAoaWM6IHN0cmluZywgdGl0dWxvOiBzdHJpbmcsIHRleHRvOiBhbnksIGJvdG9lczogYW55W10gPSBbXSwgdWx0aW1hID0gZmFsc2UpID0+IGgoJ2RpdicsIHtcbiAgICBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTAsIHBhZGRpbmc6ICcxMHB4IDAnLCBib3JkZXJCb3R0b206IHVsdGltYSA/ICdub25lJyA6IGAxcHggc29saWQgJHtDLmJvcmRhfWAgfVxuICB9LFxuICAgIGgoQ2FsY2l0ZUljb24gYXMgYW55LCB7IGljb246IGljLCBzY2FsZTogJ20nLCBzdHlsZTogeyBjb2xvcjogQy5tYXJjYSwgZmxleDogJ25vbmUnLCBtYXJnaW5Ub3A6IDEgfSB9KSxcbiAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNiwgbWluV2lkdGg6IDAsIGZsZXg6IDEgfSB9LFxuICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMudGV4dG8gfSB9LCB0aXR1bG8pLFxuICAgICAgaCgnZGl2JywgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLnRleHRvMiwgbGluZUhlaWdodDogMS40IH0gfSwgdGV4dG8pLFxuICAgICAgYm90b2VzLmxlbmd0aCA/IGgoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KCR7Ym90b2VzLmxlbmd0aH0sIDFmcilgLCBnYXA6IDYgfSB9LCAuLi5ib3RvZXMpIDogbnVsbCkpXG5cbiAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICBjbGFzc05hbWU6ICdqaW11LXdpZGdldCBzZXJ2aWNvcy1wYXNzYWdlaXJvJyxcbiAgICBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIGJhY2tncm91bmQ6IEMuZnVuZG8sIGJvcmRlclJhZGl1czogOCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkYX1gLFxuICAgICAgICAgICAgIHBhZGRpbmc6ICcxMnB4IDE0cHgnLCBvdmVyZmxvd1k6ICdhdXRvJywgZm9udEZhbWlseTogRk9OVEUsIGNvbG9yOiBDLnRleHRvIH1cbiAgfSxcbiAgICBoKCdkaXYnLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogNjAwLCBjb2xvcjogQy50ZXh0bywgbWFyZ2luQm90dG9tOiAyIH0gfSwgJ1NlcnZpw6dvcyBhbyBwYXNzYWdlaXJvJyksXG4gICAgc2VjYW8oJ3JvdXRlLXRvJywgJ0FwdWNhcmFuYSBJbnRlZ3JhZGEnLFxuICAgICAgJ1BhZ3VlIHVtYSBwYXNzYWdlbSBlIHRyb3F1ZSBkZSBsaW5oYSBlbSBxdWFscXVlciBwb250byBkYSBjaWRhZGUsIHNlbSBwYXNzYXIgcGVsbyBUZXJtaW5hbCwgdXNhbmRvIG8gQ2FydMOjbyBQYXNzZSBGw6FjaWwgb3UgbyBhcHAgQmlQYXkuJyksXG4gICAgc2VjYW8oJ21vYmlsZScsICdBcHAgVm91IGRlIMOUbmlidXMgQXB1Y2FyYW5hJywgJ0hvcsOhcmlvcywgbWFwYSBkYSBsaW5oYSBlIHByZXZpc8OjbyBkZSBjaGVnYWRhIG5vIGNlbHVsYXIuJyxcbiAgICAgIFtib3RhbygnR29vZ2xlIFBsYXknLCBjZmcudXJsR29vZ2xlUGxheSwgJ2Rvd25sb2FkJywgZmFsc2UpLCBib3RhbygnQXBwIFN0b3JlJywgY2ZnLnVybEFwcFN0b3JlLCAnZG93bmxvYWQnLCBmYWxzZSldKSxcbiAgICBzZWNhbygnY3JlZGl0LWNhcmQnLCAnVGFyaWZhcywgY2FydMOjbyBlIHJlY2FyZ2EnLCAnQSAxwqogdmlhIGRvIFBhc3NlIEbDoWNpbCDDqSBncmF0dWl0YSBuYSBWQUwsIGFvIGxhZG8gZG8gVGVybWluYWwgVXJiYW5vLicsXG4gICAgICBbYm90YW8oJ1RhcmlmYXMnLCBjZmcudXJsVGFyaWZhcywgJ3RhZycpLCBib3RhbygnTG9qYXMgZSByZWNhcmdhJywgY2ZnLnVybExvamFzLCAncGluLXRlYXInKV0sIHRydWUpKVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==