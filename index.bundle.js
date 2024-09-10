"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/styles.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/styles.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/DMSans-Regular.ttf */ "./src/assets/DMSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'DMSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
  font-weight: 200;
}

body {
  font-family: DMSans, sans-serif;
  background-color: rgb(15, 15, 17);
  color: rgb(237, 230, 230);
}

h1 {
  text-align: center;
  font-weight: 800;
  font-size: 4rem;
}

#boards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.board {
  width: 500px;
  height: 500px;
  display: grid;
  gap: 1px;
}

.tile {
  background-color: rgb(73, 73, 227);
  cursor: pointer;
}

.tile:hover:not(.hit, .miss, .sunk) {
  background-color: rgb(214, 186, 43);
}

.ship {
  background-color: aqua;
}

.hit {
  background-color: brown;
}

.miss {
  background-color: gray;
}

.sunk {
  background-color: black;
}

.pointer-events-disabled {
  pointer-events: none;
}

#player-type-selection-container {
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 1.5rem;
}

.vs {
  border: 1px solid rgb(159, 159, 159);
  padding: 7px;
  text-align: center;
  align-content: center;
  border-radius: 8px;
  width: 200px;
  height: 200px;
  cursor: pointer;
  font-weight: 900;
}

.vs:hover {
  background-color: rgb(20, 40, 35);
}

.hidden {
  display: none !important;
}

#player-details-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: first baseline;
  font-size: 2rem;
}
#player-info-container {
  margin-top: 100px;
  border: 2px solid white;
  padding: 20px 30px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input[type='text'] {
  font-size: 1.5rem;
}

select {
  font-size: 1.5rem;
  cursor: pointer;
}

#player-params-container {
  text-align: center;
}

#submit-btn {
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid black;
}

#submit-btn:hover,
.pre-game-btns:hover {
  color: white;
  background-color: black;
  border: 2px solid white;
}

#pre-game-controls-container {
  margin-top: 15px;
  display: flex;
  gap: 5px;
  justify-content: center;
}

.pre-game-btns {
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.right-ships-container,
.left-ships-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ship-wagon {
  width: 15px;
  height: 15px;
}

.single-ship-container {
  display: flex;
  gap: 5px;
}

.ship-and-ship-name,
.ship-box-container {
  display: flex;
  gap: 2px;
}

.ship-name {
  margin-left: 5px;
}

#left-board,
#right-board {
  display: flex;
  gap: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAwC;EACxC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,SAAS;AACX","sourcesContent":["@font-face {\r\n  font-family: 'DMSans';\r\n  src: url('../assets/DMSans-Regular.ttf');\r\n  font-style: normal;\r\n  font-weight: 200;\r\n}\r\n\r\nbody {\r\n  font-family: DMSans, sans-serif;\r\n  background-color: rgb(15, 15, 17);\r\n  color: rgb(237, 230, 230);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-weight: 800;\r\n  font-size: 4rem;\r\n}\r\n\r\n#boards-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.board {\r\n  width: 500px;\r\n  height: 500px;\r\n  display: grid;\r\n  gap: 1px;\r\n}\r\n\r\n.tile {\r\n  background-color: rgb(73, 73, 227);\r\n  cursor: pointer;\r\n}\r\n\r\n.tile:hover:not(.hit, .miss, .sunk) {\r\n  background-color: rgb(214, 186, 43);\r\n}\r\n\r\n.ship {\r\n  background-color: aqua;\r\n}\r\n\r\n.hit {\r\n  background-color: brown;\r\n}\r\n\r\n.miss {\r\n  background-color: gray;\r\n}\r\n\r\n.sunk {\r\n  background-color: black;\r\n}\r\n\r\n.pointer-events-disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n#player-type-selection-container {\r\n  display: flex;\r\n  gap: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 60vh;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.vs {\r\n  border: 1px solid rgb(159, 159, 159);\r\n  padding: 7px;\r\n  text-align: center;\r\n  align-content: center;\r\n  border-radius: 8px;\r\n  width: 200px;\r\n  height: 200px;\r\n  cursor: pointer;\r\n  font-weight: 900;\r\n}\r\n\r\n.vs:hover {\r\n  background-color: rgb(20, 40, 35);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n#player-details-page {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: first baseline;\r\n  font-size: 2rem;\r\n}\r\n#player-info-container {\r\n  margin-top: 100px;\r\n  border: 2px solid white;\r\n  padding: 20px 30px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ninput[type='text'] {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nselect {\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#player-params-container {\r\n  text-align: center;\r\n}\r\n\r\n#submit-btn {\r\n  font-size: 1.2rem;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  border: 2px solid black;\r\n}\r\n\r\n#submit-btn:hover,\r\n.pre-game-btns:hover {\r\n  color: white;\r\n  background-color: black;\r\n  border: 2px solid white;\r\n}\r\n\r\n#pre-game-controls-container {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: center;\r\n}\r\n\r\n.pre-game-btns {\r\n  font-size: 1.2rem;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.right-ships-container,\r\n.left-ships-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n}\r\n.ship-wagon {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.single-ship-container {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.ship-and-ship-name,\r\n.ship-box-container {\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n\r\n.ship-name {\r\n  margin-left: 5px;\r\n}\r\n\r\n#left-board,\r\n#right-board {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/DMSans-Regular.ttf":
/*!***************************************!*\
  !*** ./src/assets/DMSans-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "beffc7b21fe48a78a6e5.ttf";

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOARD_SIZE: () => (/* binding */ BOARD_SIZE),
/* harmony export */   SHIP_MODELS: () => (/* binding */ SHIP_MODELS)
/* harmony export */ });
const BOARD_SIZE = 10;
const SHIP_MODELS = [
  { name: 'Carrier', length: 5 },
  { name: 'Battleship', length: 4 },
  { name: 'Cruiser', length: 3 },
  { name: 'Submarine', length: 3 },
  { name: 'Destroyer', length: 2 },
];


/***/ }),

/***/ "./src/createPlayerInfoScreen.js":
/*!***************************************!*\
  !*** ./src/createPlayerInfoScreen.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayerInput: () => (/* binding */ createPlayerInput)
/* harmony export */ });
function createPlayerInput(playerType, side) {
  let container = document.createElement('div');

  if (playerType === 'cpu') {
    let cpuContainer = document.createElement('div');
    cpuContainer.classList.add('cpu-container');
    cpuContainer.innerHTML = `
      <label for="${side}-difficulty">${capitalizeFirstLetter(
      side
    )} difficulty: </label>
      <select name="difficulty" id="${side}-difficulty">
          <option value="regular">Regular</option>
          <option value="hard">Hard</option>
      </select>
    `;
    container.appendChild(cpuContainer);
  }

  if (playerType === 'human') {
    let humanContainer = document.createElement('div');
    humanContainer.classList.add('human-container');
    humanContainer.innerHTML = `
      <label for="${side}-name">${capitalizeFirstLetter(
      side
    )} player name: </label>
      <input type="text" id="${side}-name" maxlength="20">
    
    `;
    container.appendChild(humanContainer);
  }

  return container;
}

function capitalizeFirstLetter(word) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBoard: () => (/* binding */ buildBoard)
/* harmony export */ });
function buildBoard(player) {
  const { gameboard } = player;
  let { board, boardSize } = gameboard;

  const boardDiv = document.createElement('div');
  boardDiv.classList.add('board');
  boardDiv.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

  for (let y = boardSize - 1; y >= 0; y--) {
    for (let x = 0; x < boardSize; x++) {
      const ship = board[x][y];
      const tile = document.createElement('div');
      tile.classList.add(`tile`);
      tile.setAttribute('data-x', x);
      tile.setAttribute('data-y', y);
      if (ship && (player.type === 'human' || true)) tile.classList.add('ship'); // TODO
      colorTile(gameboard, tile, x, y);
      boardDiv.appendChild(tile);
    }
  }
  return boardDiv;
}

function colorTile(gameBoard, tile, x, y) {
  const ship = gameBoard.board[x][y];

  if (gameBoard.hits.has(`[${x}, ${y}]`)) {
    tile.classList.add('hit');
    tile.style.pointerEvents = 'none';
  }
  if (gameBoard.misses.has(`[${x}, ${y}]`)) {
    tile.classList.add('miss');
    tile.style.pointerEvents = 'none';
  }
  if (ship && ship.isSunk()) {
    tile.classList.toggle('hit', false);
    tile.classList.toggle('sunk', true);
    tile.style.pointerEvents = 'none';
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _models_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player.js */ "./src/models/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _createPlayerInfoScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPlayerInfoScreen.js */ "./src/createPlayerInfoScreen.js");
/* harmony import */ var _shipsBoard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipsBoard.js */ "./src/shipsBoard.js");







let playerOne = null;
let playerTwo = null;
let leftType = null;
let rightType = null;
let rightBoard = document.getElementById('right-board');
let leftBoard = document.getElementById('left-board');
const result = document.getElementById('result');
const randomizeBtn = document.getElementById('randomize');
const submitBtn = document.getElementById('submit-btn');
let isRunning = false;

function handleTileClick(e, player) {
  const { gameboard } = player;
  const tile = e.currentTarget;
  const x = tile.getAttribute('data-x');
  const y = tile.getAttribute('data-y');
  const ship = gameboard.board[x][y];

  if (gameboard.receiveAttack(x, y)) {
    gameboard.hardPlay(Number(x), Number(y));
  }
  refreshPlayerBoard(player);
  let opponentPlayer = player.name === playerOne.name ? playerTwo : playerOne;

  if (gameboard.areAllShipsSunk()) {
    document.querySelectorAll('.board').forEach((board) => {
      board.classList.toggle('pointer-events-disabled', true);
    });
    result.textContent = `${opponentPlayer.name} won`;
    return;
  }

  rightBoard.classList.toggle('pointer-events-disabled', true);
  if (
    !gameboard.areAllShipsSunk() &&
    !opponentPlayer.gameboard.areAllShipsSunk()
  ) {
    setTimeout(() => {
      playerOne.gameboard.randomPlay();

      if (opponentPlayer.gameboard.areAllShipsSunk()) {
        document.querySelectorAll('.board').forEach((board) => {
          board.classList.toggle('pointer-events-disabled', true);
        });
        result.textContent = `${player.name} won`;
        return;
      }
      refreshPlayerBoard(playerOne);
      rightBoard.classList.toggle('pointer-events-disabled', false);
    }, 1500);
  }
}

function startGame() {
  if (
    playerOne.gameboard.ships.length !== _constants_js__WEBPACK_IMPORTED_MODULE_3__.SHIP_MODELS.length ||
    playerTwo.gameboard.ships.length !== _constants_js__WEBPACK_IMPORTED_MODULE_3__.SHIP_MODELS.length
  ) {
    alert(`You must place ${_constants_js__WEBPACK_IMPORTED_MODULE_3__.SHIP_MODELS.length} ships!`);
    return;
  }
  isRunning = true;
  document
    .getElementById('pre-game-controls-container')
    .classList.toggle('hidden', true);
  rightBoard.classList.toggle('pointer-events-disabled', false);
}

function refreshPage() {
  if (leftType === null || rightType === null) setPage(0);
  else if (leftType && rightType) setPage(1);
  else setPage(2);
}

function setPage(i) {
  let pageIds = [
    'player-type-selection-container',
    'player-details-page',
    'game-page',
  ];
  pageIds.forEach((pId) =>
    document.getElementById(pId).classList.toggle('hidden', true)
  );
  document.getElementById(pageIds[i]).classList.toggle('hidden', false);
}

document.querySelectorAll('.vs').forEach((option) => {
  option.addEventListener('click', (e) => {
    const element = e.currentTarget;
    leftType = element.getAttribute('data-left-type');
    rightType = element.getAttribute('data-right-type');
    let playerParams = document.getElementById('player-params-container');
    playerParams.appendChild((0,_createPlayerInfoScreen_js__WEBPACK_IMPORTED_MODULE_4__.createPlayerInput)(leftType, 'left'));
    playerParams.appendChild((0,_createPlayerInfoScreen_js__WEBPACK_IMPORTED_MODULE_4__.createPlayerInput)(rightType, 'right'));
    refreshPage();
  });
});

submitBtn.addEventListener('click', () => {
  setPage(2);

  let leftName = document.getElementById('left-name')?.value;
  let rightName = document.getElementById('right-name')?.value;
  let leftDifficulty = document.getElementById('left-difficulty')?.value;
  let rightDifficulty = document.getElementById('right-difficulty')?.value;

  playerOne = new _models_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](leftType, leftName, leftDifficulty, 'left');
  playerTwo = new _models_player_js__WEBPACK_IMPORTED_MODULE_1__["default"](rightType, rightName, rightDifficulty, 'right');

  if (leftType === 'human' && rightType === 'cpu') {
    playerOne.name = leftName ? leftName : 'Human';
    playerTwo.name = 'CPU';
    displayNames();
    handleHumanVsCpuGame();
  } else if (playerOne.type === 'cpu' && playerTwo.type === 'cpu') {
    playerOne.name = 'CPU One';
    playerTwo.name = 'CPU Two';
    displayNames();
    handleCpuVsCpuGame();
  } else {
    playerOne.name = leftName ? leftName : 'Human One';
    playerTwo.name = rightName ? rightName : 'Human Two';
    displayNames();
  }

  if (playerOne.type === 'human' && !isRunning) {
    document
      .getElementById('pre-game-controls-container')
      .classList.toggle('hidden', false);
    randomizeBtn.addEventListener('click', () => {
      playerOne.gameboard.placeShipsRandomly();
      refreshPlayerBoard(playerOne);
    });
  }
});

function refreshPlayerBoard(player) {
  let boardElement = document.getElementById(player.boardId);
  boardElement.innerHTML = '';
  boardElement.appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.buildBoard)(player));
  boardElement.appendChild((0,_shipsBoard_js__WEBPACK_IMPORTED_MODULE_5__.shipsBoardDisplay)(player.side));
  (0,_shipsBoard_js__WEBPACK_IMPORTED_MODULE_5__.displayHitShip)(player);

  if (player.side === 'right' && player.type === 'cpu') {
    rightBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.addEventListener('click', (e) => {
        handleTileClick(e, player);
      });
      tile.classList.toggle('ship', false);
    });
  }
}

function displayNames() {
  document.getElementById('player-one').textContent = playerOne.name;
  document.getElementById('player-two').textContent = playerTwo.name;
}

function handleHumanVsCpuGame() {
  refreshPlayerBoard(playerOne);
  placePlayerShips(playerTwo);
}
function handleCpuVsCpuGame() {
  placePlayerShips(playerOne);
  placePlayerShips(playerTwo);

  let preGameControls = document.getElementById('pre-game-controls-container');
  preGameControls.classList.toggle('hidden', false);
  preGameControls.querySelectorAll('button').forEach((button) => {
    button.classList.toggle('hidden', true);
  });
  let startCpuGameBtn = document.getElementById('start-cpu-game');

  startCpuGameBtn.classList.toggle('hidden', false);

  startCpuGameBtn.addEventListener('click', async () => {
    preGameControls.classList.toggle('hidden', true);

    rightBoard.classList.toggle('pointer-events-disabled', true);
    isRunning = true;
    let isLeftPlayerTurn = true;
    while (isRunning) {
      const currentPlayer = isLeftPlayerTurn ? playerOne : playerTwo;
      const oppositePlayer = isLeftPlayerTurn ? playerTwo : playerOne;
      await delay(100);
      result.textContent = '';
      if (currentPlayer.difficulty === 'regular') {
        oppositePlayer.gameboard.randomPlay();
      } else {
        oppositePlayer.gameboard.randomPlay();
      }
      refreshPlayerBoard(currentPlayer);

      if (currentPlayer.gameboard.areAllShipsSunk()) {
        document.querySelectorAll('.board').forEach((board) => {
          board.classList.toggle('pointer-events-disabled', true);
        });
        result.textContent = `${oppositePlayer.name} won`;
        return;
      }
      isRunning = !currentPlayer.gameboard.areAllShipsSunk();
      isLeftPlayerTurn = !isLeftPlayerTurn;
    }
  });
}

function placePlayerShips(player) {
  player.gameboard.placeShipsRandomly();
  refreshPlayerBoard(player);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementById('start-game').onclick = startGame;
refreshPage();


/***/ }),

/***/ "./src/models/gameboard.js":
/*!*********************************!*\
  !*** ./src/models/gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/models/ship.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./src/constants.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");




class Gameboard {
  constructor() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = _constants_js__WEBPACK_IMPORTED_MODULE_1__.BOARD_SIZE;
    this.lastPlay = '';
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
    this.possibleMoves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
  }

  canPlaceShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    const length = ship.length;

    if (x < 0 || y < 0 || x >= this.boardSize || y >= this.boardSize)
      return false;
    if (isHorizontal && length + x >= this.boardSize) return false;
    if (!isHorizontal && length + y >= this.boardSize) return false;

    for (let i = 0; i < length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      if (this.board[x + dX][y + dY] !== null) return false;
    }

    return true;
  }

  placeShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    for (let i = 0; i < ship.length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      this.board[x + dX][y + dY] = ship;
      ship.coordinates.push([x + dX, y + dY]);
    }
    this.ships.push(ship);
  }

  rand(end = this.boardSize) {
    return Math.floor(Math.random() * end);
  }

  randomPlay() {
    let x = this.rand();
    let y = this.rand();
    while (this.hits.has(`[${x}, ${y}]`) || this.misses.has(`[${x}, ${y}]`)) {
      x = this.rand();
      y = this.rand();
    }
    return this.receiveAttack(x, y);
  }

  hardPlay(x, y) {
    if (this.hits.has(`[${x}, ${y}]`)) {
      let allPossibleMoves = this.possibleMoves.map((pm) => [
        x + pm[0],
        y + pm[1],
      ]);
      let movesAroundTheShip = allPossibleMoves.filter(
        (coord) => this.board[coord[0]][coord[1]] !== null
      );
      this.receiveAttack(movesAroundTheShip[0][0], movesAroundTheShip[0][1]);
    } else {
      this.randomPlay();
    }
  }

  placeShipsRandomly() {
    const models = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.deepCopyShuffleArray)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.SHIP_MODELS);
    this.ships = [];
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));

    let ships = models.map((model) => {
      let direction = this.rand(2) === 0 ? 'horizontal' : 'vertical';
      return new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](model.length, model.name, direction);
    });

    ships.forEach((ship) => {
      let x = this.rand();
      let y = this.rand();
      while (!this.canPlaceShip(ship, x, y)) {
        ship.direction = this.rand(2) === 0 ? 'horizontal' : 'vertical';
        x = this.rand();
        y = this.rand();
      }
      this.placeShip(ship, x, y);
    });
  }

  receiveAttack(x, y) {
    if (this.board[x][y]) {
      let ship = this.board[x][y];
      ship.hit();
      this.hits.add(`[${x}, ${y}]`);
      this.lastPlay = 'hit';
      return ship;
    } else {
      this.misses.add(`[${x}, ${y}]`);
      this.lastPlay = 'miss';
      return null;
    }
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  resetBoard() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = _constants_js__WEBPACK_IMPORTED_MODULE_1__.BOARD_SIZE;
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
  }
}


/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/models/gameboard.js");


class Player {
  constructor(type, name, difficulty, side) {
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.type = type;
    this.name = name;
    this.side = side;
    this.difficulty = difficulty;
    this.boardId = `${side}-board`;
  }
}


/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _validations_validations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validations/validations.js */ "./src/models/validations/validations.js");


class Ship {
  constructor(length, name = length.toString(), direction = 'horizontal') {
    (0,_validations_validations_js__WEBPACK_IMPORTED_MODULE_0__.validateShip)(length, direction);
    this.length = length;
    this.name = name;
    this.direction = direction;
    this.hits = 0;
    this.coordinates = [];
  }

  hit() {
    if (this.isSunk()) return;
    this.hits++;
  }

  isSunk() {
    return this.hits === this.length;
  }
}


/***/ }),

/***/ "./src/models/validations/validations.js":
/*!***********************************************!*\
  !*** ./src/models/validations/validations.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateShip: () => (/* binding */ validateShip)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./src/constants.js");


function validateShip(length, direction) {
  const maxShipLen = Math.max(..._constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.map((s) => s.length));
  if (length > maxShipLen || length < 0) {
    throw new Error(`Length should be between 0 and ${maxShipLen}`);
  }
  if (direction !== 'horizontal' && direction !== 'vertical') {
    throw new Error('Direction must be vertical or horizontal');
  }
}


/***/ }),

/***/ "./src/shipsBoard.js":
/*!***************************!*\
  !*** ./src/shipsBoard.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHitShip: () => (/* binding */ displayHitShip),
/* harmony export */   shipsBoardDisplay: () => (/* binding */ shipsBoardDisplay)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");


function shipsBoardDisplay(side) {
  let shipsContainer = document.createElement('div');
  shipsContainer.classList.add(`${side}-ships-container`);
  _constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.forEach((ship) => {
    let shipIllustration = document.createElement('div');
    shipIllustration.classList.add('single-ship-container', `${ship.name}`);
    let shipAndName = document.createElement('div');
    shipAndName.classList.add('ship-and-ship-name');
    let shipBoxContainer = document.createElement('div');
    shipBoxContainer.classList.add('ship-box-container');

    for (let i = 0; i < ship.length; i++) {
      let shipBox = document.createElement('div');
      shipBox.classList.add('ship', 'ship-wagon');
      shipBoxContainer.appendChild(shipBox);
    }

    let shipName = document.createElement('div');
    shipName.classList.add('ship-name');
    shipName.textContent = `${ship.name}`;
    shipAndName.append(shipBoxContainer, shipName);

    shipIllustration.appendChild(shipAndName);
    shipsContainer.appendChild(shipIllustration);
  });
  return shipsContainer;
}

function displayHitShip(player) {
  let ships = player.gameboard.ships;
  let shipsHit = ships.filter((ship) => ship.hits > 0);
  if (shipsHit.length <= 0) return;
  for (let i = 0; i < shipsHit.length; i++) {
    let ship = shipsHit[i];
    let shipWagons = Array.from(
      document.querySelectorAll(
        `.${player.side}-ships-container  .${ship.name} .ship-wagon`
      )
    );

    for (let i = 0; i < ship.hits; i++) {
      shipWagons[i].classList.add('hit');
    }
  }
}


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepCopyShuffleArray: () => (/* binding */ deepCopyShuffleArray)
/* harmony export */ });
function deepCopyShuffleArray(array) {
  let arr = JSON.parse(JSON.stringify(array));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxvSUFBK0M7QUFDM0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxV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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q087QUFDUDtBQUNBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzP2M4YmYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZVBsYXllckluZm9TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwc0JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9ETVNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnRE1TYW5zJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IERNU2Fucywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNyk7XHJcbiAgY29sb3I6IHJnYigyMzcsIDIzMCwgMjMwKTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxufVxyXG5cclxuI2JvYXJkcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxcHg7XHJcbn1cclxuXHJcbi50aWxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDczLCAyMjcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpbGU6aG92ZXI6bm90KC5oaXQsIC5taXNzLCAuc3Vuaykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDE4NiwgNDMpO1xyXG59XHJcblxyXG4uc2hpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuXHJcbi5taXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uc3VuayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wb2ludGVyLWV2ZW50cy1kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNwbGF5ZXItdHlwZS1zZWxlY3Rpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi52cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1OSwgMTU5LCAxNTkpO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnZzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDQwLCAzNSk7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuI3BsYXllci1kZXRhaWxzLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4jcGxheWVyLWluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3RleHQnXSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcGxheWVyLXBhcmFtcy1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3N1Ym1pdC1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnRuOmhvdmVyLFxyXG4ucHJlLWdhbWUtYnRuczpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4jcHJlLWdhbWUtY29udHJvbHMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmUtZ2FtZS1idG5zIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmlnaHQtc2hpcHMtY29udGFpbmVyLFxyXG4ubGVmdC1zaGlwcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxufVxyXG4uc2hpcC13YWdvbiB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2luZ2xlLXNoaXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4uc2hpcC1hbmQtc2hpcC1uYW1lLFxyXG4uc2hpcC1ib3gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG4uc2hpcC1uYW1lIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4jbGVmdC1ib2FyZCxcclxuI3JpZ2h0LWJvYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsUUFBUTtFQUNSLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBOztFQUVFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRE1TYW5zJztcXHJcXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvRE1TYW5zLVJlZ3VsYXIudHRmJyk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBETVNhbnMsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNyk7XFxyXFxuICBjb2xvcjogcmdiKDIzNywgMjMwLCAyMzApO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDczLCAyMjcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpob3Zlcjpub3QoLmhpdCwgLm1pc3MsIC5zdW5rKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxODYsIDQzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wb2ludGVyLWV2ZW50cy1kaXNhYmxlZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci10eXBlLXNlbGVjdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDYwdmg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnZzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTksIDE1OSwgMTU5KTtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4udnM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCA0MCwgMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1kZXRhaWxzLXBhZ2Uge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuI3BsYXllci1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1wYXJhbXMtY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0bjpob3ZlcixcXHJcXG4ucHJlLWdhbWUtYnRuczpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJlLWdhbWUtY29udHJvbHMtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByZS1nYW1lLWJ0bnMge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNoaXBzLWNvbnRhaW5lcixcXHJcXG4ubGVmdC1zaGlwcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJweDtcXHJcXG59XFxyXFxuLnNoaXAtd2Fnb24ge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtc2hpcC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1hbmQtc2hpcC1uYW1lLFxcclxcbi5zaGlwLWJveC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1uYW1lIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWJvYXJkLFxcclxcbiNyaWdodC1ib2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcclxuZXhwb3J0IGNvbnN0IFNISVBfTU9ERUxTID0gW1xyXG4gIHsgbmFtZTogJ0NhcnJpZXInLCBsZW5ndGg6IDUgfSxcclxuICB7IG5hbWU6ICdCYXR0bGVzaGlwJywgbGVuZ3RoOiA0IH0sXHJcbiAgeyBuYW1lOiAnQ3J1aXNlcicsIGxlbmd0aDogMyB9LFxyXG4gIHsgbmFtZTogJ1N1Ym1hcmluZScsIGxlbmd0aDogMyB9LFxyXG4gIHsgbmFtZTogJ0Rlc3Ryb3llcicsIGxlbmd0aDogMiB9LFxyXG5dO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVySW5wdXQocGxheWVyVHlwZSwgc2lkZSkge1xyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgaWYgKHBsYXllclR5cGUgPT09ICdjcHUnKSB7XHJcbiAgICBsZXQgY3B1Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjcHVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3B1LWNvbnRhaW5lcicpO1xyXG4gICAgY3B1Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGxhYmVsIGZvcj1cIiR7c2lkZX0tZGlmZmljdWx0eVwiPiR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICBzaWRlXHJcbiAgICApfSBkaWZmaWN1bHR5OiA8L2xhYmVsPlxyXG4gICAgICA8c2VsZWN0IG5hbWU9XCJkaWZmaWN1bHR5XCIgaWQ9XCIke3NpZGV9LWRpZmZpY3VsdHlcIj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWd1bGFyXCI+UmVndWxhcjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhhcmRcIj5IYXJkPC9vcHRpb24+XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgYDtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcHVDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllclR5cGUgPT09ICdodW1hbicpIHtcclxuICAgIGxldCBodW1hbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaHVtYW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaHVtYW4tY29udGFpbmVyJyk7XHJcbiAgICBodW1hbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxsYWJlbCBmb3I9XCIke3NpZGV9LW5hbWVcIj4ke2NhcGl0YWxpemVGaXJzdExldHRlcihcclxuICAgICAgc2lkZVxyXG4gICAgKX0gcGxheWVyIG5hbWU6IDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiJHtzaWRlfS1uYW1lXCIgbWF4bGVuZ3RoPVwiMjBcIj5cclxuICAgIFxyXG4gICAgYDtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1hbkNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIod29yZCkge1xyXG4gIGlmICghd29yZCkgcmV0dXJuICcnO1xyXG4gIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRCb2FyZChwbGF5ZXIpIHtcclxuICBjb25zdCB7IGdhbWVib2FyZCB9ID0gcGxheWVyO1xyXG4gIGxldCB7IGJvYXJkLCBib2FyZFNpemUgfSA9IGdhbWVib2FyZDtcclxuXHJcbiAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib2FyZERpdi5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gIGJvYXJkRGl2LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Ym9hcmRTaXplfSwgMWZyKWA7XHJcblxyXG4gIGZvciAobGV0IHkgPSBib2FyZFNpemUgLSAxOyB5ID49IDA7IHktLSkge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZFNpemU7IHgrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gYm9hcmRbeF1beV07XHJcbiAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGB0aWxlYCk7XHJcbiAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCB4KTtcclxuICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHkpO1xyXG4gICAgICBpZiAoc2hpcCAmJiAocGxheWVyLnR5cGUgPT09ICdodW1hbicgfHwgdHJ1ZSkpIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpOyAvLyBUT0RPXHJcbiAgICAgIGNvbG9yVGlsZShnYW1lYm9hcmQsIHRpbGUsIHgsIHkpO1xyXG4gICAgICBib2FyZERpdi5hcHBlbmRDaGlsZCh0aWxlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xvclRpbGUoZ2FtZUJvYXJkLCB0aWxlLCB4LCB5KSB7XHJcbiAgY29uc3Qgc2hpcCA9IGdhbWVCb2FyZC5ib2FyZFt4XVt5XTtcclxuXHJcbiAgaWYgKGdhbWVCb2FyZC5oaXRzLmhhcyhgWyR7eH0sICR7eX1dYCkpIHtcclxuICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICB0aWxlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGlmIChnYW1lQm9hcmQubWlzc2VzLmhhcyhgWyR7eH0sICR7eX1dYCkpIHtcclxuICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xyXG4gICAgdGlsZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gIH1cclxuICBpZiAoc2hpcCAmJiBzaGlwLmlzU3VuaygpKSB7XHJcbiAgICB0aWxlLmNsYXNzTGlzdC50b2dnbGUoJ2hpdCcsIGZhbHNlKTtcclxuICAgIHRpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnc3VuaycsIHRydWUpO1xyXG4gICAgdGlsZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgJy4vY3NzL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vbW9kZWxzL3BsYXllci5qcyc7XHJcbmltcG9ydCB7IGJ1aWxkQm9hcmQgfSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCB7IFNISVBfTU9ERUxTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXJJbnB1dCB9IGZyb20gJy4vY3JlYXRlUGxheWVySW5mb1NjcmVlbi5qcyc7XHJcbmltcG9ydCB7IHNoaXBzQm9hcmREaXNwbGF5LCBkaXNwbGF5SGl0U2hpcCB9IGZyb20gJy4vc2hpcHNCb2FyZC5qcyc7XHJcblxyXG5sZXQgcGxheWVyT25lID0gbnVsbDtcclxubGV0IHBsYXllclR3byA9IG51bGw7XHJcbmxldCBsZWZ0VHlwZSA9IG51bGw7XHJcbmxldCByaWdodFR5cGUgPSBudWxsO1xyXG5sZXQgcmlnaHRCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1ib2FyZCcpO1xyXG5sZXQgbGVmdEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtYm9hcmQnKTtcclxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xyXG5jb25zdCByYW5kb21pemVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXplJyk7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYnRuJyk7XHJcbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRpbGVDbGljayhlLCBwbGF5ZXIpIHtcclxuICBjb25zdCB7IGdhbWVib2FyZCB9ID0gcGxheWVyO1xyXG4gIGNvbnN0IHRpbGUgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgY29uc3QgeCA9IHRpbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcclxuICBjb25zdCB5ID0gdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpO1xyXG4gIGNvbnN0IHNoaXAgPSBnYW1lYm9hcmQuYm9hcmRbeF1beV07XHJcblxyXG4gIGlmIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KSkge1xyXG4gICAgZ2FtZWJvYXJkLmhhcmRQbGF5KE51bWJlcih4KSwgTnVtYmVyKHkpKTtcclxuICB9XHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllcik7XHJcbiAgbGV0IG9wcG9uZW50UGxheWVyID0gcGxheWVyLm5hbWUgPT09IHBsYXllck9uZS5uYW1lID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xyXG5cclxuICBpZiAoZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKS5mb3JFYWNoKChib2FyZCkgPT4ge1xyXG4gICAgICBib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXN1bHQudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudFBsYXllci5uYW1lfSB3b25gO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmlnaHRCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gIGlmIChcclxuICAgICFnYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkgJiZcclxuICAgICFvcHBvbmVudFBsYXllci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKClcclxuICApIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwbGF5ZXJPbmUuZ2FtZWJvYXJkLnJhbmRvbVBsYXkoKTtcclxuXHJcbiAgICAgIGlmIChvcHBvbmVudFBsYXllci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKS5mb3JFYWNoKChib2FyZCkgPT4ge1xyXG4gICAgICAgICAgYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgncG9pbnRlci1ldmVudHMtZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0gd29uYDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllck9uZSk7XHJcbiAgICAgIHJpZ2h0Qm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgncG9pbnRlci1ldmVudHMtZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICBpZiAoXHJcbiAgICBwbGF5ZXJPbmUuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCAhPT0gU0hJUF9NT0RFTFMubGVuZ3RoIHx8XHJcbiAgICBwbGF5ZXJUd28uZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCAhPT0gU0hJUF9NT0RFTFMubGVuZ3RoXHJcbiAgKSB7XHJcbiAgICBhbGVydChgWW91IG11c3QgcGxhY2UgJHtTSElQX01PREVMUy5sZW5ndGh9IHNoaXBzIWApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpc1J1bm5pbmcgPSB0cnVlO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ3ByZS1nYW1lLWNvbnRyb2xzLWNvbnRhaW5lcicpXHJcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7XHJcbiAgcmlnaHRCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFBhZ2UoKSB7XHJcbiAgaWYgKGxlZnRUeXBlID09PSBudWxsIHx8IHJpZ2h0VHlwZSA9PT0gbnVsbCkgc2V0UGFnZSgwKTtcclxuICBlbHNlIGlmIChsZWZ0VHlwZSAmJiByaWdodFR5cGUpIHNldFBhZ2UoMSk7XHJcbiAgZWxzZSBzZXRQYWdlKDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQYWdlKGkpIHtcclxuICBsZXQgcGFnZUlkcyA9IFtcclxuICAgICdwbGF5ZXItdHlwZS1zZWxlY3Rpb24tY29udGFpbmVyJyxcclxuICAgICdwbGF5ZXItZGV0YWlscy1wYWdlJyxcclxuICAgICdnYW1lLXBhZ2UnLFxyXG4gIF07XHJcbiAgcGFnZUlkcy5mb3JFYWNoKChwSWQpID0+XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwSWQpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpXHJcbiAgKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlSWRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52cycpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgbGVmdFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1sZWZ0LXR5cGUnKTtcclxuICAgIHJpZ2h0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJpZ2h0LXR5cGUnKTtcclxuICAgIGxldCBwbGF5ZXJQYXJhbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXBhcmFtcy1jb250YWluZXInKTtcclxuICAgIHBsYXllclBhcmFtcy5hcHBlbmRDaGlsZChjcmVhdGVQbGF5ZXJJbnB1dChsZWZ0VHlwZSwgJ2xlZnQnKSk7XHJcbiAgICBwbGF5ZXJQYXJhbXMuYXBwZW5kQ2hpbGQoY3JlYXRlUGxheWVySW5wdXQocmlnaHRUeXBlLCAncmlnaHQnKSk7XHJcbiAgICByZWZyZXNoUGFnZSgpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzZXRQYWdlKDIpO1xyXG5cclxuICBsZXQgbGVmdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1uYW1lJyk/LnZhbHVlO1xyXG4gIGxldCByaWdodE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtbmFtZScpPy52YWx1ZTtcclxuICBsZXQgbGVmdERpZmZpY3VsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1kaWZmaWN1bHR5Jyk/LnZhbHVlO1xyXG4gIGxldCByaWdodERpZmZpY3VsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtZGlmZmljdWx0eScpPy52YWx1ZTtcclxuXHJcbiAgcGxheWVyT25lID0gbmV3IFBsYXllcihsZWZ0VHlwZSwgbGVmdE5hbWUsIGxlZnREaWZmaWN1bHR5LCAnbGVmdCcpO1xyXG4gIHBsYXllclR3byA9IG5ldyBQbGF5ZXIocmlnaHRUeXBlLCByaWdodE5hbWUsIHJpZ2h0RGlmZmljdWx0eSwgJ3JpZ2h0Jyk7XHJcblxyXG4gIGlmIChsZWZ0VHlwZSA9PT0gJ2h1bWFuJyAmJiByaWdodFR5cGUgPT09ICdjcHUnKSB7XHJcbiAgICBwbGF5ZXJPbmUubmFtZSA9IGxlZnROYW1lID8gbGVmdE5hbWUgOiAnSHVtYW4nO1xyXG4gICAgcGxheWVyVHdvLm5hbWUgPSAnQ1BVJztcclxuICAgIGRpc3BsYXlOYW1lcygpO1xyXG4gICAgaGFuZGxlSHVtYW5Wc0NwdUdhbWUoKTtcclxuICB9IGVsc2UgaWYgKHBsYXllck9uZS50eXBlID09PSAnY3B1JyAmJiBwbGF5ZXJUd28udHlwZSA9PT0gJ2NwdScpIHtcclxuICAgIHBsYXllck9uZS5uYW1lID0gJ0NQVSBPbmUnO1xyXG4gICAgcGxheWVyVHdvLm5hbWUgPSAnQ1BVIFR3byc7XHJcbiAgICBkaXNwbGF5TmFtZXMoKTtcclxuICAgIGhhbmRsZUNwdVZzQ3B1R2FtZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXJPbmUubmFtZSA9IGxlZnROYW1lID8gbGVmdE5hbWUgOiAnSHVtYW4gT25lJztcclxuICAgIHBsYXllclR3by5uYW1lID0gcmlnaHROYW1lID8gcmlnaHROYW1lIDogJ0h1bWFuIFR3byc7XHJcbiAgICBkaXNwbGF5TmFtZXMoKTtcclxuICB9XHJcblxyXG4gIGlmIChwbGF5ZXJPbmUudHlwZSA9PT0gJ2h1bWFuJyAmJiAhaXNSdW5uaW5nKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3ByZS1nYW1lLWNvbnRyb2xzLWNvbnRhaW5lcicpXHJcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcbiAgICByYW5kb21pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHBsYXllck9uZS5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICAgIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXJPbmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcclxuICBsZXQgYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLmJvYXJkSWQpO1xyXG4gIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXIpKTtcclxuICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2hpcHNCb2FyZERpc3BsYXkocGxheWVyLnNpZGUpKTtcclxuICBkaXNwbGF5SGl0U2hpcChwbGF5ZXIpO1xyXG5cclxuICBpZiAocGxheWVyLnNpZGUgPT09ICdyaWdodCcgJiYgcGxheWVyLnR5cGUgPT09ICdjcHUnKSB7XHJcbiAgICByaWdodEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJykuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBoYW5kbGVUaWxlQ2xpY2soZSwgcGxheWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5hbWVzKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJykudGV4dENvbnRlbnQgPSBwbGF5ZXJPbmUubmFtZTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpLnRleHRDb250ZW50ID0gcGxheWVyVHdvLm5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUh1bWFuVnNDcHVHYW1lKCkge1xyXG4gIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXJPbmUpO1xyXG4gIHBsYWNlUGxheWVyU2hpcHMocGxheWVyVHdvKTtcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVDcHVWc0NwdUdhbWUoKSB7XHJcbiAgcGxhY2VQbGF5ZXJTaGlwcyhwbGF5ZXJPbmUpO1xyXG4gIHBsYWNlUGxheWVyU2hpcHMocGxheWVyVHdvKTtcclxuXHJcbiAgbGV0IHByZUdhbWVDb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmUtZ2FtZS1jb250cm9scy1jb250YWluZXInKTtcclxuICBwcmVHYW1lQ29udHJvbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xyXG4gIHByZUdhbWVDb250cm9scy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcclxuICB9KTtcclxuICBsZXQgc3RhcnRDcHVHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWNwdS1nYW1lJyk7XHJcblxyXG4gIHN0YXJ0Q3B1R2FtZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcblxyXG4gIHN0YXJ0Q3B1R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIHByZUdhbWVDb250cm9scy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcclxuXHJcbiAgICByaWdodEJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXItZXZlbnRzLWRpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgbGV0IGlzTGVmdFBsYXllclR1cm4gPSB0cnVlO1xyXG4gICAgd2hpbGUgKGlzUnVubmluZykge1xyXG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gaXNMZWZ0UGxheWVyVHVybiA/IHBsYXllck9uZSA6IHBsYXllclR3bztcclxuICAgICAgY29uc3Qgb3Bwb3NpdGVQbGF5ZXIgPSBpc0xlZnRQbGF5ZXJUdXJuID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDApO1xyXG4gICAgICByZXN1bHQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuZGlmZmljdWx0eSA9PT0gJ3JlZ3VsYXInKSB7XHJcbiAgICAgICAgb3Bwb3NpdGVQbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbVBsYXkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHBvc2l0ZVBsYXllci5nYW1lYm9hcmQucmFuZG9tUGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlZnJlc2hQbGF5ZXJCb2FyZChjdXJyZW50UGxheWVyKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpLmZvckVhY2goKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICBib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGAke29wcG9zaXRlUGxheWVyLm5hbWV9IHdvbmA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlzUnVubmluZyA9ICFjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcclxuICAgICAgaXNMZWZ0UGxheWVyVHVybiA9ICFpc0xlZnRQbGF5ZXJUdXJuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXBzKHBsYXllcikge1xyXG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJykub25jbGljayA9IHN0YXJ0R2FtZTtcclxucmVmcmVzaFBhZ2UoKTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcclxuaW1wb3J0IHsgQk9BUkRfU0laRSwgU0hJUF9NT0RFTFMgfSBmcm9tICcuLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgeyBkZWVwQ29weVNodWZmbGVBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1pc3NlcyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuaGl0cyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gQk9BUkRfU0laRTtcclxuICAgIHRoaXMubGFzdFBsYXkgPSAnJztcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IFtcclxuICAgICAgWzEsIDBdLFxyXG4gICAgICBbMCwgMV0sXHJcbiAgICAgIFstMSwgMF0sXHJcbiAgICAgIFswLCAtMV0sXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgY2FuUGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcclxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHNoaXAuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XHJcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcclxuXHJcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSB0aGlzLmJvYXJkU2l6ZSB8fCB5ID49IHRoaXMuYm9hcmRTaXplKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoaXNIb3Jpem9udGFsICYmIGxlbmd0aCArIHggPj0gdGhpcy5ib2FyZFNpemUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICghaXNIb3Jpem9udGFsICYmIGxlbmd0aCArIHkgPj0gdGhpcy5ib2FyZFNpemUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRYID0gaXNIb3Jpem9udGFsID8gaSA6IDA7XHJcbiAgICAgIGNvbnN0IGRZID0gIWlzSG9yaXpvbnRhbCA/IGkgOiAwO1xyXG4gICAgICBpZiAodGhpcy5ib2FyZFt4ICsgZFhdW3kgKyBkWV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XHJcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBzaGlwLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRYID0gaXNIb3Jpem9udGFsID8gaSA6IDA7XHJcbiAgICAgIGNvbnN0IGRZID0gIWlzSG9yaXpvbnRhbCA/IGkgOiAwO1xyXG4gICAgICB0aGlzLmJvYXJkW3ggKyBkWF1beSArIGRZXSA9IHNoaXA7XHJcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbeCArIGRYLCB5ICsgZFldKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIHJhbmQoZW5kID0gdGhpcy5ib2FyZFNpemUpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmQpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tUGxheSgpIHtcclxuICAgIGxldCB4ID0gdGhpcy5yYW5kKCk7XHJcbiAgICBsZXQgeSA9IHRoaXMucmFuZCgpO1xyXG4gICAgd2hpbGUgKHRoaXMuaGl0cy5oYXMoYFske3h9LCAke3l9XWApIHx8IHRoaXMubWlzc2VzLmhhcyhgWyR7eH0sICR7eX1dYCkpIHtcclxuICAgICAgeCA9IHRoaXMucmFuZCgpO1xyXG4gICAgICB5ID0gdGhpcy5yYW5kKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgaGFyZFBsYXkoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuaGl0cy5oYXMoYFske3h9LCAke3l9XWApKSB7XHJcbiAgICAgIGxldCBhbGxQb3NzaWJsZU1vdmVzID0gdGhpcy5wb3NzaWJsZU1vdmVzLm1hcCgocG0pID0+IFtcclxuICAgICAgICB4ICsgcG1bMF0sXHJcbiAgICAgICAgeSArIHBtWzFdLFxyXG4gICAgICBdKTtcclxuICAgICAgbGV0IG1vdmVzQXJvdW5kVGhlU2hpcCA9IGFsbFBvc3NpYmxlTW92ZXMuZmlsdGVyKFxyXG4gICAgICAgIChjb29yZCkgPT4gdGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSBudWxsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVjZWl2ZUF0dGFjayhtb3Zlc0Fyb3VuZFRoZVNoaXBbMF1bMF0sIG1vdmVzQXJvdW5kVGhlU2hpcFswXVsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJhbmRvbVBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIGNvbnN0IG1vZGVscyA9IGRlZXBDb3B5U2h1ZmZsZUFycmF5KFNISVBfTU9ERUxTKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuXHJcbiAgICBsZXQgc2hpcHMgPSBtb2RlbHMubWFwKChtb2RlbCkgPT4ge1xyXG4gICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kKDIpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICAgICAgcmV0dXJuIG5ldyBTaGlwKG1vZGVsLmxlbmd0aCwgbW9kZWwubmFtZSwgZGlyZWN0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgbGV0IHggPSB0aGlzLnJhbmQoKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhbmQoKTtcclxuICAgICAgd2hpbGUgKCF0aGlzLmNhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkge1xyXG4gICAgICAgIHNoaXAuZGlyZWN0aW9uID0gdGhpcy5yYW5kKDIpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICAgICAgICB4ID0gdGhpcy5yYW5kKCk7XHJcbiAgICAgICAgeSA9IHRoaXMucmFuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldKSB7XHJcbiAgICAgIGxldCBzaGlwID0gdGhpcy5ib2FyZFt4XVt5XTtcclxuICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgdGhpcy5oaXRzLmFkZChgWyR7eH0sICR7eX1dYCk7XHJcbiAgICAgIHRoaXMubGFzdFBsYXkgPSAnaGl0JztcclxuICAgICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1pc3Nlcy5hZGQoYFske3h9LCAke3l9XWApO1xyXG4gICAgICB0aGlzLmxhc3RQbGF5ID0gJ21pc3MnO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFyZUFsbFNoaXBzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0Qm9hcmQoKSB7XHJcbiAgICB0aGlzLm1pc3NlcyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuaGl0cyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gQk9BUkRfU0laRTtcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGRpZmZpY3VsdHksIHNpZGUpIHtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnNpZGUgPSBzaWRlO1xyXG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgIHRoaXMuYm9hcmRJZCA9IGAke3NpZGV9LWJvYXJkYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdmFsaWRhdGVTaGlwIH0gZnJvbSAnLi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUgPSBsZW5ndGgudG9TdHJpbmcoKSwgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnKSB7XHJcbiAgICB2YWxpZGF0ZVNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHJldHVybjtcclxuICAgIHRoaXMuaGl0cysrO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNISVBfTU9ERUxTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pIHtcclxuICBjb25zdCBtYXhTaGlwTGVuID0gTWF0aC5tYXgoLi4uU0hJUF9NT0RFTFMubWFwKChzKSA9PiBzLmxlbmd0aCkpO1xyXG4gIGlmIChsZW5ndGggPiBtYXhTaGlwTGVuIHx8IGxlbmd0aCA8IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgTGVuZ3RoIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kICR7bWF4U2hpcExlbn1gKTtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIGRpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaXJlY3Rpb24gbXVzdCBiZSB2ZXJ0aWNhbCBvciBob3Jpem9udGFsJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNISVBfTU9ERUxTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBzQm9hcmREaXNwbGF5KHNpZGUpIHtcclxuICBsZXQgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3NpZGV9LXNoaXBzLWNvbnRhaW5lcmApO1xyXG4gIFNISVBfTU9ERUxTLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGxldCBzaGlwSWxsdXN0cmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaGlwSWxsdXN0cmF0aW9uLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1zaGlwLWNvbnRhaW5lcicsIGAke3NoaXAubmFtZX1gKTtcclxuICAgIGxldCBzaGlwQW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcEFuZE5hbWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1hbmQtc2hpcC1uYW1lJyk7XHJcbiAgICBsZXQgc2hpcEJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcEJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwLWJveC1jb250YWluZXInKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNoaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc2hpcEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgJ3NoaXAtd2Fnb24nKTtcclxuICAgICAgc2hpcEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQm94KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBOYW1lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbmFtZScpO1xyXG4gICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBgJHtzaGlwLm5hbWV9YDtcclxuICAgIHNoaXBBbmROYW1lLmFwcGVuZChzaGlwQm94Q29udGFpbmVyLCBzaGlwTmFtZSk7XHJcblxyXG4gICAgc2hpcElsbHVzdHJhdGlvbi5hcHBlbmRDaGlsZChzaGlwQW5kTmFtZSk7XHJcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSWxsdXN0cmF0aW9uKTtcclxuICB9KTtcclxuICByZXR1cm4gc2hpcHNDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGl0U2hpcChwbGF5ZXIpIHtcclxuICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzO1xyXG4gIGxldCBzaGlwc0hpdCA9IHNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5oaXRzID4gMCk7XHJcbiAgaWYgKHNoaXBzSGl0Lmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0hpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHNoaXAgPSBzaGlwc0hpdFtpXTtcclxuICAgIGxldCBzaGlwV2Fnb25zID0gQXJyYXkuZnJvbShcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBgLiR7cGxheWVyLnNpZGV9LXNoaXBzLWNvbnRhaW5lciAgLiR7c2hpcC5uYW1lfSAuc2hpcC13YWdvbmBcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGl0czsgaSsrKSB7XHJcbiAgICAgIHNoaXBXYWdvbnNbaV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weVNodWZmbGVBcnJheShhcnJheSkge1xyXG4gIGxldCBhcnIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcclxuICB9XHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=