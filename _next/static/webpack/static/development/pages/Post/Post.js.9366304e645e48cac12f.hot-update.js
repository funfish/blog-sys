webpackHotUpdate("static\\development\\pages\\Post\\Post.js",{

/***/ "./components/Banner/Banner.js":
/*!*************************************!*\
  !*** ./components/Banner/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@16.6.3@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Banner_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banner.less */ "./components/Banner/Banner.less");
/* harmony import */ var _Banner_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Banner_less__WEBPACK_IMPORTED_MODULE_2__);




var Banner = function Banner(props) {
  var isIndex = props.isIndex,
      bannerUrl = props.bannerUrl,
      title = props.title,
      createTimeEN = props.createTimeEN;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isIndex || bannerUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    style: {
      backgroundImage: isIndex ? "url(".concat("", "/static/snowfield.jpg)") : "url(".concat(bannerUrl, ")"),
      backgroundSize: isIndex ? 'cover' : 'contain'
    },
    className: _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.banner
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.mask
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isIndex ? _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.indexTitleWrap : _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.postTitleWrap
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.postTitle
  }, isIndex ? 'Funfish Blog' : title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, isIndex ? '纸上得来终觉浅，绝知此事要躬行' : createTimeEN))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.bannerWithoutImg
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.postTitle
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _Banner_less__WEBPACK_IMPORTED_MODULE_2___default.a.postTime
  }, createTimeEN)));
};

Banner.propTypes = {
  isIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  creatTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=Post.js.9366304e645e48cac12f.hot-update.js.map