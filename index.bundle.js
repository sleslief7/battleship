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
  gameboard.receiveAttack(x, y);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxvSUFBK0M7QUFDM0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxV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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlDTztBQUNQO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlcy5jc3M/YzhiZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlUGxheWVySW5mb1NjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlscy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL0RNU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdETVNhbnMnO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogRE1TYW5zLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE3KTtcclxuICBjb2xvcjogcmdiKDIzNywgMjMwLCAyMzApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4jYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDFweDtcclxufVxyXG5cclxuLnRpbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDIyNyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGlsZTpob3Zlcjpub3QoLmhpdCwgLm1pc3MsIC5zdW5rKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTg2LCA0Myk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG59XHJcblxyXG4uaGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5zdW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBvaW50ZXItZXZlbnRzLWRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI3BsYXllci10eXBlLXNlbGVjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnZzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU5LCAxNTksIDE1OSk7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4udnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgNDAsIDM1KTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcGxheWVyLWRldGFpbHMtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNwbGF5ZXItaW5mby1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNwbGF5ZXItcGFyYW1zLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0biB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3N1Ym1pdC1idG46aG92ZXIsXHJcbi5wcmUtZ2FtZS1idG5zOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbiNwcmUtZ2FtZS1jb250cm9scy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByZS1nYW1lLWJ0bnMge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodC1zaGlwcy1jb250YWluZXIsXHJcbi5sZWZ0LXNoaXBzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcbi5zaGlwLXdhZ29uIHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtc2hpcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5zaGlwLWFuZC1zaGlwLW5hbWUsXHJcbi5zaGlwLWJveC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuXHJcbi5zaGlwLW5hbWUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiNsZWZ0LWJvYXJkLFxyXG4jcmlnaHQtYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdETVNhbnMnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9ETVNhbnMtUmVndWxhci50dGYnKTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IERNU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE3KTtcXHJcXG4gIGNvbG9yOiByZ2IoMjM3LCAyMzAsIDIzMCk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbiNib2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNzMsIDIyNyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aWxlOmhvdmVyOm5vdCguaGl0LCAubWlzcywgLnN1bmspIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDE4NiwgNDMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXItZXZlbnRzLWRpc2FibGVkIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLXR5cGUtc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNjB2aDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udnMge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1OSwgMTU5LCAxNTkpO1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi52czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDQwLCAzNSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWRldGFpbHMtcGFnZSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4jcGxheWVyLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLXBhcmFtcy1jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuOmhvdmVyLFxcclxcbi5wcmUtZ2FtZS1idG5zOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNwcmUtZ2FtZS1jb250cm9scy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlLWdhbWUtYnRucyB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2hpcHMtY29udGFpbmVyLFxcclxcbi5sZWZ0LXNoaXBzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG4uc2hpcC13YWdvbiB7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1zaGlwLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWFuZC1zaGlwLW5hbWUsXFxyXFxuLnNoaXAtYm94LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLW5hbWUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtYm9hcmQsXFxyXFxuI3JpZ2h0LWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQk9BUkRfU0laRSA9IDEwO1xyXG5leHBvcnQgY29uc3QgU0hJUF9NT0RFTFMgPSBbXHJcbiAgeyBuYW1lOiAnQ2FycmllcicsIGxlbmd0aDogNSB9LFxyXG4gIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCBsZW5ndGg6IDQgfSxcclxuICB7IG5hbWU6ICdDcnVpc2VyJywgbGVuZ3RoOiAzIH0sXHJcbiAgeyBuYW1lOiAnU3VibWFyaW5lJywgbGVuZ3RoOiAzIH0sXHJcbiAgeyBuYW1lOiAnRGVzdHJveWVyJywgbGVuZ3RoOiAyIH0sXHJcbl07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJJbnB1dChwbGF5ZXJUeXBlLCBzaWRlKSB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBpZiAocGxheWVyVHlwZSA9PT0gJ2NwdScpIHtcclxuICAgIGxldCBjcHVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNwdUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcHUtY29udGFpbmVyJyk7XHJcbiAgICBjcHVDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8bGFiZWwgZm9yPVwiJHtzaWRlfS1kaWZmaWN1bHR5XCI+JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgICAgIHNpZGVcclxuICAgICl9IGRpZmZpY3VsdHk6IDwvbGFiZWw+XHJcbiAgICAgIDxzZWxlY3QgbmFtZT1cImRpZmZpY3VsdHlcIiBpZD1cIiR7c2lkZX0tZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZ3VsYXJcIj5SZWd1bGFyPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFyZFwiPkhhcmQ8L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICBgO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNwdUNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyVHlwZSA9PT0gJ2h1bWFuJykge1xyXG4gICAgbGV0IGh1bWFuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBodW1hbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdodW1hbi1jb250YWluZXInKTtcclxuICAgIGh1bWFuQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGxhYmVsIGZvcj1cIiR7c2lkZX0tbmFtZVwiPiR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICBzaWRlXHJcbiAgICApfSBwbGF5ZXIgbmFtZTogPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIke3NpZGV9LW5hbWVcIiBtYXhsZW5ndGg9XCIyMFwiPlxyXG4gICAgXHJcbiAgICBgO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcih3b3JkKSB7XHJcbiAgaWYgKCF3b3JkKSByZXR1cm4gJyc7XHJcbiAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEJvYXJkKHBsYXllcikge1xyXG4gIGNvbnN0IHsgZ2FtZWJvYXJkIH0gPSBwbGF5ZXI7XHJcbiAgbGV0IHsgYm9hcmQsIGJvYXJkU2l6ZSB9ID0gZ2FtZWJvYXJkO1xyXG5cclxuICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgYm9hcmREaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcclxuXHJcbiAgZm9yIChsZXQgeSA9IGJvYXJkU2l6ZSAtIDE7IHkgPj0gMDsgeS0tKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcclxuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoYHRpbGVgKTtcclxuICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xyXG4gICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgeSk7XHJcbiAgICAgIGlmIChzaGlwICYmIChwbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJyB8fCB0cnVlKSkgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7IC8vIFRPRE9cclxuICAgICAgY29sb3JUaWxlKGdhbWVib2FyZCwgdGlsZSwgeCwgeSk7XHJcbiAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKHRpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYm9hcmREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9yVGlsZShnYW1lQm9hcmQsIHRpbGUsIHgsIHkpIHtcclxuICBjb25zdCBzaGlwID0gZ2FtZUJvYXJkLmJvYXJkW3hdW3ldO1xyXG5cclxuICBpZiAoZ2FtZUJvYXJkLmhpdHMuaGFzKGBbJHt4fSwgJHt5fV1gKSkge1xyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgIHRpbGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICB9XHJcbiAgaWYgKGdhbWVCb2FyZC5taXNzZXMuaGFzKGBbJHt4fSwgJHt5fV1gKSkge1xyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICB0aWxlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGlmIChzaGlwICYmIHNoaXAuaXNTdW5rKCkpIHtcclxuICAgIHRpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGl0JywgZmFsc2UpO1xyXG4gICAgdGlsZS5jbGFzc0xpc3QudG9nZ2xlKCdzdW5rJywgdHJ1ZSk7XHJcbiAgICB0aWxlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9jc3Mvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2RlbHMvcGxheWVyLmpzJztcclxuaW1wb3J0IHsgYnVpbGRCb2FyZCB9IGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IHsgU0hJUF9NT0RFTFMgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVBsYXllcklucHV0IH0gZnJvbSAnLi9jcmVhdGVQbGF5ZXJJbmZvU2NyZWVuLmpzJztcclxuaW1wb3J0IHsgc2hpcHNCb2FyZERpc3BsYXksIGRpc3BsYXlIaXRTaGlwIH0gZnJvbSAnLi9zaGlwc0JvYXJkLmpzJztcclxuXHJcbmxldCBwbGF5ZXJPbmUgPSBudWxsO1xyXG5sZXQgcGxheWVyVHdvID0gbnVsbDtcclxubGV0IGxlZnRUeXBlID0gbnVsbDtcclxubGV0IHJpZ2h0VHlwZSA9IG51bGw7XHJcbmxldCByaWdodEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWJvYXJkJyk7XHJcbmxldCBsZWZ0Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1ib2FyZCcpO1xyXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XHJcbmNvbnN0IHJhbmRvbWl6ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUnKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcclxubGV0IGlzUnVubmluZyA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGlsZUNsaWNrKGUsIHBsYXllcikge1xyXG4gIGNvbnN0IHsgZ2FtZWJvYXJkIH0gPSBwbGF5ZXI7XHJcbiAgY29uc3QgdGlsZSA9IGUuY3VycmVudFRhcmdldDtcclxuICBjb25zdCB4ID0gdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xyXG4gIGNvbnN0IHkgPSB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XHJcbiAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5ib2FyZFt4XVt5XTtcclxuICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuXHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllcik7XHJcbiAgbGV0IG9wcG9uZW50UGxheWVyID0gcGxheWVyLm5hbWUgPT09IHBsYXllck9uZS5uYW1lID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xyXG5cclxuICBpZiAoZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKS5mb3JFYWNoKChib2FyZCkgPT4ge1xyXG4gICAgICBib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXN1bHQudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudFBsYXllci5uYW1lfSB3b25gO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmlnaHRCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gIGlmIChcclxuICAgICFnYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkgJiZcclxuICAgICFvcHBvbmVudFBsYXllci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKClcclxuICApIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwbGF5ZXJPbmUuZ2FtZWJvYXJkLnJhbmRvbVBsYXkoKTtcclxuXHJcbiAgICAgIGlmIChvcHBvbmVudFBsYXllci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKS5mb3JFYWNoKChib2FyZCkgPT4ge1xyXG4gICAgICAgICAgYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgncG9pbnRlci1ldmVudHMtZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0gd29uYDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllck9uZSk7XHJcbiAgICAgIHJpZ2h0Qm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgncG9pbnRlci1ldmVudHMtZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICBpZiAoXHJcbiAgICBwbGF5ZXJPbmUuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCAhPT0gU0hJUF9NT0RFTFMubGVuZ3RoIHx8XHJcbiAgICBwbGF5ZXJUd28uZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCAhPT0gU0hJUF9NT0RFTFMubGVuZ3RoXHJcbiAgKSB7XHJcbiAgICBhbGVydChgWW91IG11c3QgcGxhY2UgJHtTSElQX01PREVMUy5sZW5ndGh9IHNoaXBzIWApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpc1J1bm5pbmcgPSB0cnVlO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoJ3ByZS1nYW1lLWNvbnRyb2xzLWNvbnRhaW5lcicpXHJcbiAgICAuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7XHJcbiAgcmlnaHRCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFBhZ2UoKSB7XHJcbiAgaWYgKGxlZnRUeXBlID09PSBudWxsIHx8IHJpZ2h0VHlwZSA9PT0gbnVsbCkgc2V0UGFnZSgwKTtcclxuICBlbHNlIGlmIChsZWZ0VHlwZSAmJiByaWdodFR5cGUpIHNldFBhZ2UoMSk7XHJcbiAgZWxzZSBzZXRQYWdlKDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQYWdlKGkpIHtcclxuICBsZXQgcGFnZUlkcyA9IFtcclxuICAgICdwbGF5ZXItdHlwZS1zZWxlY3Rpb24tY29udGFpbmVyJyxcclxuICAgICdwbGF5ZXItZGV0YWlscy1wYWdlJyxcclxuICAgICdnYW1lLXBhZ2UnLFxyXG4gIF07XHJcbiAgcGFnZUlkcy5mb3JFYWNoKChwSWQpID0+XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwSWQpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpXHJcbiAgKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlSWRzW2ldKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52cycpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgbGVmdFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1sZWZ0LXR5cGUnKTtcclxuICAgIHJpZ2h0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJpZ2h0LXR5cGUnKTtcclxuICAgIGxldCBwbGF5ZXJQYXJhbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXBhcmFtcy1jb250YWluZXInKTtcclxuICAgIHBsYXllclBhcmFtcy5hcHBlbmRDaGlsZChjcmVhdGVQbGF5ZXJJbnB1dChsZWZ0VHlwZSwgJ2xlZnQnKSk7XHJcbiAgICBwbGF5ZXJQYXJhbXMuYXBwZW5kQ2hpbGQoY3JlYXRlUGxheWVySW5wdXQocmlnaHRUeXBlLCAncmlnaHQnKSk7XHJcbiAgICByZWZyZXNoUGFnZSgpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzZXRQYWdlKDIpO1xyXG5cclxuICBsZXQgbGVmdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1uYW1lJyk/LnZhbHVlO1xyXG4gIGxldCByaWdodE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtbmFtZScpPy52YWx1ZTtcclxuICBsZXQgbGVmdERpZmZpY3VsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1kaWZmaWN1bHR5Jyk/LnZhbHVlO1xyXG4gIGxldCByaWdodERpZmZpY3VsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtZGlmZmljdWx0eScpPy52YWx1ZTtcclxuXHJcbiAgcGxheWVyT25lID0gbmV3IFBsYXllcihsZWZ0VHlwZSwgbGVmdE5hbWUsIGxlZnREaWZmaWN1bHR5LCAnbGVmdCcpO1xyXG4gIHBsYXllclR3byA9IG5ldyBQbGF5ZXIocmlnaHRUeXBlLCByaWdodE5hbWUsIHJpZ2h0RGlmZmljdWx0eSwgJ3JpZ2h0Jyk7XHJcblxyXG4gIGlmIChsZWZ0VHlwZSA9PT0gJ2h1bWFuJyAmJiByaWdodFR5cGUgPT09ICdjcHUnKSB7XHJcbiAgICBwbGF5ZXJPbmUubmFtZSA9IGxlZnROYW1lID8gbGVmdE5hbWUgOiAnSHVtYW4nO1xyXG4gICAgcGxheWVyVHdvLm5hbWUgPSAnQ1BVJztcclxuICAgIGRpc3BsYXlOYW1lcygpO1xyXG4gICAgaGFuZGxlSHVtYW5Wc0NwdUdhbWUoKTtcclxuICB9IGVsc2UgaWYgKHBsYXllck9uZS50eXBlID09PSAnY3B1JyAmJiBwbGF5ZXJUd28udHlwZSA9PT0gJ2NwdScpIHtcclxuICAgIHBsYXllck9uZS5uYW1lID0gJ0NQVSBPbmUnO1xyXG4gICAgcGxheWVyVHdvLm5hbWUgPSAnQ1BVIFR3byc7XHJcbiAgICBkaXNwbGF5TmFtZXMoKTtcclxuICAgIGhhbmRsZUNwdVZzQ3B1R2FtZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXJPbmUubmFtZSA9IGxlZnROYW1lID8gbGVmdE5hbWUgOiAnSHVtYW4gT25lJztcclxuICAgIHBsYXllclR3by5uYW1lID0gcmlnaHROYW1lID8gcmlnaHROYW1lIDogJ0h1bWFuIFR3byc7XHJcbiAgICBkaXNwbGF5TmFtZXMoKTtcclxuICB9XHJcblxyXG4gIGlmIChwbGF5ZXJPbmUudHlwZSA9PT0gJ2h1bWFuJyAmJiAhaXNSdW5uaW5nKSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3ByZS1nYW1lLWNvbnRyb2xzLWNvbnRhaW5lcicpXHJcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcbiAgICByYW5kb21pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHBsYXllck9uZS5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICAgIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXJPbmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcclxuICBsZXQgYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLmJvYXJkSWQpO1xyXG4gIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXIpKTtcclxuICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2hpcHNCb2FyZERpc3BsYXkocGxheWVyLnNpZGUpKTtcclxuICBkaXNwbGF5SGl0U2hpcChwbGF5ZXIpO1xyXG5cclxuICBpZiAocGxheWVyLnNpZGUgPT09ICdyaWdodCcgJiYgcGxheWVyLnR5cGUgPT09ICdjcHUnKSB7XHJcbiAgICByaWdodEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJykuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBoYW5kbGVUaWxlQ2xpY2soZSwgcGxheWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheU5hbWVzKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItb25lJykudGV4dENvbnRlbnQgPSBwbGF5ZXJPbmUubmFtZTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXR3bycpLnRleHRDb250ZW50ID0gcGxheWVyVHdvLm5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUh1bWFuVnNDcHVHYW1lKCkge1xyXG4gIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXJPbmUpO1xyXG4gIHBsYWNlUGxheWVyU2hpcHMocGxheWVyVHdvKTtcclxufVxyXG5mdW5jdGlvbiBoYW5kbGVDcHVWc0NwdUdhbWUoKSB7XHJcbiAgcGxhY2VQbGF5ZXJTaGlwcyhwbGF5ZXJPbmUpO1xyXG4gIHBsYWNlUGxheWVyU2hpcHMocGxheWVyVHdvKTtcclxuXHJcbiAgbGV0IHByZUdhbWVDb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmUtZ2FtZS1jb250cm9scy1jb250YWluZXInKTtcclxuICBwcmVHYW1lQ29udHJvbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xyXG4gIHByZUdhbWVDb250cm9scy5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcclxuICB9KTtcclxuICBsZXQgc3RhcnRDcHVHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWNwdS1nYW1lJyk7XHJcblxyXG4gIHN0YXJ0Q3B1R2FtZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcblxyXG4gIHN0YXJ0Q3B1R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIHByZUdhbWVDb250cm9scy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcclxuXHJcbiAgICByaWdodEJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXItZXZlbnRzLWRpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgbGV0IGlzTGVmdFBsYXllclR1cm4gPSB0cnVlO1xyXG4gICAgd2hpbGUgKGlzUnVubmluZykge1xyXG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyID0gaXNMZWZ0UGxheWVyVHVybiA/IHBsYXllck9uZSA6IHBsYXllclR3bztcclxuICAgICAgY29uc3Qgb3Bwb3NpdGVQbGF5ZXIgPSBpc0xlZnRQbGF5ZXJUdXJuID8gcGxheWVyVHdvIDogcGxheWVyT25lO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDApO1xyXG4gICAgICByZXN1bHQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuZGlmZmljdWx0eSA9PT0gJ3JlZ3VsYXInKSB7XHJcbiAgICAgICAgb3Bwb3NpdGVQbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbVBsYXkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHBvc2l0ZVBsYXllci5nYW1lYm9hcmQucmFuZG9tUGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlZnJlc2hQbGF5ZXJCb2FyZChjdXJyZW50UGxheWVyKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpLmZvckVhY2goKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICBib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGAke29wcG9zaXRlUGxheWVyLm5hbWV9IHdvbmA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlzUnVubmluZyA9ICFjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcclxuICAgICAgaXNMZWZ0UGxheWVyVHVybiA9ICFpc0xlZnRQbGF5ZXJUdXJuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXBzKHBsYXllcikge1xyXG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJykub25jbGljayA9IHN0YXJ0R2FtZTtcclxucmVmcmVzaFBhZ2UoKTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcclxuaW1wb3J0IHsgQk9BUkRfU0laRSwgU0hJUF9NT0RFTFMgfSBmcm9tICcuLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgeyBkZWVwQ29weVNodWZmbGVBcnJheSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1pc3NlcyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuaGl0cyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gQk9BUkRfU0laRTtcclxuICAgIHRoaXMubGFzdFBsYXkgPSAnJztcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IFtcclxuICAgICAgWzEsIDBdLFxyXG4gICAgICBbMCwgMV0sXHJcbiAgICAgIFstMSwgMF0sXHJcbiAgICAgIFswLCAtMV0sXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgY2FuUGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcclxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHNoaXAuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XHJcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcclxuXHJcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+PSB0aGlzLmJvYXJkU2l6ZSB8fCB5ID49IHRoaXMuYm9hcmRTaXplKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoaXNIb3Jpem9udGFsICYmIGxlbmd0aCArIHggPj0gdGhpcy5ib2FyZFNpemUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICghaXNIb3Jpem9udGFsICYmIGxlbmd0aCArIHkgPj0gdGhpcy5ib2FyZFNpemUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRYID0gaXNIb3Jpem9udGFsID8gaSA6IDA7XHJcbiAgICAgIGNvbnN0IGRZID0gIWlzSG9yaXpvbnRhbCA/IGkgOiAwO1xyXG4gICAgICBpZiAodGhpcy5ib2FyZFt4ICsgZFhdW3kgKyBkWV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XHJcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBzaGlwLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRYID0gaXNIb3Jpem9udGFsID8gaSA6IDA7XHJcbiAgICAgIGNvbnN0IGRZID0gIWlzSG9yaXpvbnRhbCA/IGkgOiAwO1xyXG4gICAgICB0aGlzLmJvYXJkW3ggKyBkWF1beSArIGRZXSA9IHNoaXA7XHJcbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMucHVzaChbeCArIGRYLCB5ICsgZFldKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcclxuICB9XHJcblxyXG4gIHJhbmQoZW5kID0gdGhpcy5ib2FyZFNpemUpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbmQpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tUGxheSgpIHtcclxuICAgIGxldCB4ID0gdGhpcy5yYW5kKCk7XHJcbiAgICBsZXQgeSA9IHRoaXMucmFuZCgpO1xyXG4gICAgd2hpbGUgKHRoaXMuaGl0cy5oYXMoYFske3h9LCAke3l9XWApIHx8IHRoaXMubWlzc2VzLmhhcyhgWyR7eH0sICR7eX1dYCkpIHtcclxuICAgICAgeCA9IHRoaXMucmFuZCgpO1xyXG4gICAgICB5ID0gdGhpcy5yYW5kKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgaGFyZFBsYXkoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuaGl0cy5oYXMoYFske3h9LCAke3l9XWApKSB7XHJcbiAgICAgIGxldCBhbGxQb3NzaWJsZU1vdmVzID0gdGhpcy5wb3NzaWJsZU1vdmVzLm1hcCgocG0pID0+IFtcclxuICAgICAgICB4ICsgcG1bMF0sXHJcbiAgICAgICAgeSArIHBtWzFdLFxyXG4gICAgICBdKTtcclxuICAgICAgbGV0IG1vdmVzQXJvdW5kVGhlU2hpcCA9IGFsbFBvc3NpYmxlTW92ZXMuZmlsdGVyKFxyXG4gICAgICAgIChjb29yZCkgPT4gdGhpcy5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSBudWxsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVjZWl2ZUF0dGFjayhtb3Zlc0Fyb3VuZFRoZVNoaXBbMF1bMF0sIG1vdmVzQXJvdW5kVGhlU2hpcFswXVsxXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJhbmRvbVBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIGNvbnN0IG1vZGVscyA9IGRlZXBDb3B5U2h1ZmZsZUFycmF5KFNISVBfTU9ERUxTKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuXHJcbiAgICBsZXQgc2hpcHMgPSBtb2RlbHMubWFwKChtb2RlbCkgPT4ge1xyXG4gICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kKDIpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICAgICAgcmV0dXJuIG5ldyBTaGlwKG1vZGVsLmxlbmd0aCwgbW9kZWwubmFtZSwgZGlyZWN0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgbGV0IHggPSB0aGlzLnJhbmQoKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhbmQoKTtcclxuICAgICAgd2hpbGUgKCF0aGlzLmNhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkge1xyXG4gICAgICAgIHNoaXAuZGlyZWN0aW9uID0gdGhpcy5yYW5kKDIpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICAgICAgICB4ID0gdGhpcy5yYW5kKCk7XHJcbiAgICAgICAgeSA9IHRoaXMucmFuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldKSB7XHJcbiAgICAgIGxldCBzaGlwID0gdGhpcy5ib2FyZFt4XVt5XTtcclxuICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgdGhpcy5oaXRzLmFkZChgWyR7eH0sICR7eX1dYCk7XHJcbiAgICAgIHRoaXMubGFzdFBsYXkgPSAnaGl0JztcclxuICAgICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1pc3Nlcy5hZGQoYFske3h9LCAke3l9XWApO1xyXG4gICAgICB0aGlzLmxhc3RQbGF5ID0gJ21pc3MnO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFyZUFsbFNoaXBzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0Qm9hcmQoKSB7XHJcbiAgICB0aGlzLm1pc3NlcyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuaGl0cyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmRTaXplID0gQk9BUkRfU0laRTtcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIGRpZmZpY3VsdHksIHNpZGUpIHtcclxuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnNpZGUgPSBzaWRlO1xyXG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgIHRoaXMuYm9hcmRJZCA9IGAke3NpZGV9LWJvYXJkYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdmFsaWRhdGVTaGlwIH0gZnJvbSAnLi92YWxpZGF0aW9ucy92YWxpZGF0aW9ucy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUgPSBsZW5ndGgudG9TdHJpbmcoKSwgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnKSB7XHJcbiAgICB2YWxpZGF0ZVNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pO1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHJldHVybjtcclxuICAgIHRoaXMuaGl0cysrO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNISVBfTU9ERUxTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNoaXAobGVuZ3RoLCBkaXJlY3Rpb24pIHtcclxuICBjb25zdCBtYXhTaGlwTGVuID0gTWF0aC5tYXgoLi4uU0hJUF9NT0RFTFMubWFwKChzKSA9PiBzLmxlbmd0aCkpO1xyXG4gIGlmIChsZW5ndGggPiBtYXhTaGlwTGVuIHx8IGxlbmd0aCA8IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgTGVuZ3RoIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kICR7bWF4U2hpcExlbn1gKTtcclxuICB9XHJcbiAgaWYgKGRpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIGRpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaXJlY3Rpb24gbXVzdCBiZSB2ZXJ0aWNhbCBvciBob3Jpem9udGFsJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNISVBfTU9ERUxTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBzQm9hcmREaXNwbGF5KHNpZGUpIHtcclxuICBsZXQgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke3NpZGV9LXNoaXBzLWNvbnRhaW5lcmApO1xyXG4gIFNISVBfTU9ERUxTLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIGxldCBzaGlwSWxsdXN0cmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaGlwSWxsdXN0cmF0aW9uLmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1zaGlwLWNvbnRhaW5lcicsIGAke3NoaXAubmFtZX1gKTtcclxuICAgIGxldCBzaGlwQW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcEFuZE5hbWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1hbmQtc2hpcC1uYW1lJyk7XHJcbiAgICBsZXQgc2hpcEJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcEJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwLWJveC1jb250YWluZXInKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNoaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc2hpcEJveC5jbGFzc0xpc3QuYWRkKCdzaGlwJywgJ3NoaXAtd2Fnb24nKTtcclxuICAgICAgc2hpcEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQm94KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBOYW1lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbmFtZScpO1xyXG4gICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBgJHtzaGlwLm5hbWV9YDtcclxuICAgIHNoaXBBbmROYW1lLmFwcGVuZChzaGlwQm94Q29udGFpbmVyLCBzaGlwTmFtZSk7XHJcblxyXG4gICAgc2hpcElsbHVzdHJhdGlvbi5hcHBlbmRDaGlsZChzaGlwQW5kTmFtZSk7XHJcbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwSWxsdXN0cmF0aW9uKTtcclxuICB9KTtcclxuICByZXR1cm4gc2hpcHNDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SGl0U2hpcChwbGF5ZXIpIHtcclxuICBsZXQgc2hpcHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzO1xyXG4gIGxldCBzaGlwc0hpdCA9IHNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5oaXRzID4gMCk7XHJcbiAgaWYgKHNoaXBzSGl0Lmxlbmd0aCA8PSAwKSByZXR1cm47XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0hpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHNoaXAgPSBzaGlwc0hpdFtpXTtcclxuICAgIGxldCBzaGlwV2Fnb25zID0gQXJyYXkuZnJvbShcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBgLiR7cGxheWVyLnNpZGV9LXNoaXBzLWNvbnRhaW5lciAgLiR7c2hpcC5uYW1lfSAuc2hpcC13YWdvbmBcclxuICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGl0czsgaSsrKSB7XHJcbiAgICAgIHNoaXBXYWdvbnNbaV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weVNodWZmbGVBcnJheShhcnJheSkge1xyXG4gIGxldCBhcnIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcclxuICB9XHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=