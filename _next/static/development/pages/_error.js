((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_error.js"],{

/***/ "./node_modules/_react@16.6.3@react/index.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/_react@16.6.3@react/index.js from dll-reference dll_05a9185d602e7d60068c ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_05a9185d602e7d60068c */ "dll-reference dll_05a9185d602e7d60068c"))("./node_modules/_react@16.6.3@react/index.js");

/***/ }),

/***/ "./node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/Exception/PageNoFound.js":
/*!****************************************!*\
  !*** ./pages/Exception/PageNoFound.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.3@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageNoFound_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNoFound.less */ "./pages/Exception/PageNoFound.less");
/* harmony import */ var _PageNoFound_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PageNoFound_less__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _PageNoFound_less__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u4F60\u4F3C\u4E4E\u6765\u5230\u4E86\u6CA1\u6709\u77E5\u8BC6\u5B58\u5728\u7684\u8352\u539F\u2026"));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Exception\\PageNoFound")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Exception_PageNoFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exception/PageNoFound */ "./pages/Exception/PageNoFound.js");

/* harmony default export */ __webpack_exports__["default"] = (_Exception_PageNoFound__WEBPACK_IMPORTED_MODULE_0__["default"]);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_error")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.20.2@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 6:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/_error', function() {
module.exports = __webpack_require__(/*! ./pages/_error.js */"./pages/_error.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_05a9185d602e7d60068c":
/*!*******************************************!*\
  !*** external "dll_05a9185d602e7d60068c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_05a9185d602e7d60068c;

/***/ })

},[[6,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=_error.js.map