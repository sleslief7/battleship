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
  border-radius: 8px;
  width: 200px;
  height: 150px;
  cursor: pointer;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
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

#submit-btn,
#home-btn {
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid black;
}

#submit-btn:hover,
.pre-game-btns:hover,
#home-btn:hover,
.btn:hover {
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

.board-plus-mini-ships-container {
  display: flex;
  gap: 5px;
}

.ship-and-ship-name,
.ship-box-container {
  display: flex;
  gap: 2px;
}

#draggable-ships-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
}

.draggable-ship {
  display: flex;
  margin-bottom: 5px;
  cursor: grab;
  width: fit-content;
  height: fit-content;
}

.ship-box {
  width: 30px;
  height: 30px;
  background-color: white;
  margin: 1px;
}

.ship-name {
  margin-left: 5px;
}

#left-player-container,
#right-player-container {
  display: flex;
  gap: 10px;
}
#result {
  display: flex;
  flex-direction: column;
}
#home-btn {
  cursor: pointer;
  width: 100px;
  height: 50px;
}

.human,
.cpu {
  font-size: 2.8rem;
}

.btn {
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  cursor: pointer;
}

.can-drop {
  background-color: aqua;
}

.can-not-drop {
  background-color: red;
  cursor: not-allowed;
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAwC;EACxC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,uBAAuB;AACzB;;AAEA;;;;EAIE,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;;EAEE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":["@font-face {\r\n  font-family: 'DMSans';\r\n  src: url('../assets/DMSans-Regular.ttf');\r\n  font-style: normal;\r\n  font-weight: 200;\r\n}\r\n\r\nbody {\r\n  font-family: DMSans, sans-serif;\r\n  background-color: rgb(15, 15, 17);\r\n  color: rgb(237, 230, 230);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-weight: 800;\r\n  font-size: 4rem;\r\n}\r\n\r\n#boards-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.board {\r\n  width: 500px;\r\n  height: 500px;\r\n  display: grid;\r\n  gap: 1px;\r\n}\r\n\r\n.tile {\r\n  background-color: rgb(73, 73, 227);\r\n  cursor: pointer;\r\n}\r\n\r\n.tile:hover:not(.hit, .miss, .sunk) {\r\n  background-color: rgb(214, 186, 43);\r\n}\r\n\r\n.ship {\r\n  background-color: aqua;\r\n}\r\n\r\n.hit {\r\n  background-color: brown;\r\n}\r\n\r\n.miss {\r\n  background-color: gray;\r\n}\r\n\r\n.sunk {\r\n  background-color: black;\r\n}\r\n\r\n.pointer-events-disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n#player-type-selection-container {\r\n  display: flex;\r\n  gap: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 60vh;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.vs {\r\n  border: 1px solid rgb(159, 159, 159);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  width: 200px;\r\n  height: 150px;\r\n  cursor: pointer;\r\n  font-weight: 900;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n}\r\n\r\n.vs:hover {\r\n  background-color: rgb(20, 40, 35);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n#player-details-page {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: first baseline;\r\n  font-size: 2rem;\r\n}\r\n#player-info-container {\r\n  margin-top: 100px;\r\n  border: 2px solid white;\r\n  padding: 20px 30px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ninput[type='text'] {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nselect {\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#player-params-container {\r\n  text-align: center;\r\n}\r\n\r\n#submit-btn,\r\n#home-btn {\r\n  font-size: 1.2rem;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  border: 2px solid black;\r\n}\r\n\r\n#submit-btn:hover,\r\n.pre-game-btns:hover,\r\n#home-btn:hover,\r\n.btn:hover {\r\n  color: white;\r\n  background-color: black;\r\n  border: 2px solid white;\r\n}\r\n\r\n#pre-game-controls-container {\r\n  margin-top: 15px;\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: center;\r\n}\r\n\r\n.pre-game-btns {\r\n  font-size: 1.2rem;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.right-ships-container,\r\n.left-ships-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2px;\r\n}\r\n.ship-wagon {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.single-ship-container {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.board-plus-mini-ships-container {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.ship-and-ship-name,\r\n.ship-box-container {\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n\r\n#draggable-ships-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  gap: 5px;\r\n}\r\n\r\n.draggable-ship {\r\n  display: flex;\r\n  margin-bottom: 5px;\r\n  cursor: grab;\r\n  width: fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.ship-box {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: white;\r\n  margin: 1px;\r\n}\r\n\r\n.ship-name {\r\n  margin-left: 5px;\r\n}\r\n\r\n#left-player-container,\r\n#right-player-container {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n#result {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#home-btn {\r\n  cursor: pointer;\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.human,\r\n.cpu {\r\n  font-size: 2.8rem;\r\n}\r\n\r\n.btn {\r\n  width: fit-content;\r\n  height: fit-content;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.can-drop {\r\n  background-color: aqua;\r\n}\r\n\r\n.can-not-drop {\r\n  background-color: red;\r\n  cursor: not-allowed;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   PLAYING_TIME: () => (/* binding */ PLAYING_TIME),
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
const PLAYING_TIME = 1000;


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

/***/ "./src/draggableElements.js":
/*!**********************************!*\
  !*** ./src/draggableElements.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildDraggableShips: () => (/* binding */ buildDraggableShips),
/* harmony export */   dragEnterHandler: () => (/* binding */ dragEnterHandler),
/* harmony export */   dragOverHandler: () => (/* binding */ dragOverHandler),
/* harmony export */   dropHandler: () => (/* binding */ dropHandler)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _models_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/ship.js */ "./src/models/ship.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




let dragIndex = null;
let direction = 'horizontal';
let dragShipId = null;
let dragShipTiles = [];

function buildDraggableShips(player) {
  let draggableShipsContainer = document.createElement('div');
  draggableShipsContainer.id = 'draggable-ships-container';
  let resetShipsBtn = document.createElement('button');
  resetShipsBtn.textContent = 'Reset Ships Position';
  resetShipsBtn.classList.add('btn');
  let rotateBtn = document.createElement('button');
  rotateBtn.textContent = 'Rotate Ships';
  rotateBtn.classList.add('btn');
  rotateBtn.id = 'rotate-ships-btn';

  _constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.forEach((ship) => {
    if (player.gameboard.ships.some((x) => x.name === ship.name)) return;

    let shipContainer = document.createElement('div');
    shipContainer.classList.add('draggable-ship');
    shipContainer.id = ship.name;
    shipContainer.draggable = true;

    shipContainer.ondragstart = onDragStartHandler;
    shipContainer.ondragend = onDragEndHandler;

    for (let i = 0; i < ship.length; i++) {
      let shipBox = document.createElement('div');
      shipBox.classList.add('ship-box');
      shipBox.setAttribute('data-index', i);
      shipContainer.appendChild(shipBox);
      if (direction === 'horizontal') {
        shipContainer.style.flexDirection = 'row';
        draggableShipsContainer.style.flexDirection = 'column';
      } else {
        shipContainer.style.flexDirection = 'column';
        draggableShipsContainer.style.flexDirection = 'row';
      }
    }
    draggableShipsContainer.appendChild(shipContainer);
  });
  rotateBtn.addEventListener('click', () => handleRotateShipsBtn());
  resetShipsBtn.addEventListener('click', () => handleResetShipsBtn(player));

  draggableShipsContainer.appendChild(resetShipsBtn);
  draggableShipsContainer.appendChild(rotateBtn);

  return draggableShipsContainer;
}

function handleResetShipsBtn(player) {
  player.gameboard.resetBoard();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.refreshPlayerBoard)(player);
}

function handleRotateShipsBtn() {
  let ships = document.querySelectorAll('.draggable-ship');
  let shipsContainer = document.getElementById('draggable-ships-container');

  if (ships.length === 0) return;

  if (direction === 'horizontal') {
    ships.forEach((ship) => {
      ship.style.flexDirection = 'column';
    });
    shipsContainer.style.flexDirection = 'row';
    direction = 'vertical';
  } else {
    ships.forEach((ship) => {
      ship.style.flexDirection = 'row';
    });
    shipsContainer.style.flexDirection = 'column';
    direction = 'horizontal';
  }
}

function onDragStartHandler(e) {
  const { id, offsetLeft, offsetWidth, offsetHeight } = e.target;

  const offsetTop = getDistanceFromTop(e.target);
  const isHorizontal = direction === 'horizontal';
  const length = _constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.find((x) => x.name === id).length;
  const mouse = isHorizontal ? e.clientX : e.clientY;
  const start = isHorizontal ? offsetLeft : offsetTop;
  const size = isHorizontal ? offsetWidth : offsetHeight;

  dragIndex = Math.floor((mouse - start) / (size / length));
  dragShipId = id;
  e.dataTransfer.setData('text', id);
}

function getDistanceFromTop(el) {
  const rect = el.getBoundingClientRect();
  const distanceFromTop = rect.top;
  return distanceFromTop;
}

function dragOverHandler(e) {
  e.preventDefault();
}

function buildXAndY(tile, isH) {
  let x = Number(tile.getAttribute('data-x'));
  let y = Number(tile.getAttribute('data-y'));
  x = isH ? x - dragIndex : x;
  y = !isH ? y + dragIndex : y;
  return { x, y };
}

function dragEnterHandler(e, player) {
  e.preventDefault();
  const { gameboard: gb } = player;
  const isH = direction === 'horizontal';
  const length = _constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.find((x) => x.name === dragShipId).length;
  const ship = new _models_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](length, dragShipId, direction);
  const { x, y } = buildXAndY(e.target, isH);
  const hoverClass = gb.canPlaceShip(ship, x, y) ? 'can-drop' : 'can-not-drop';

  let tileCoords = [];
  for (let i = 0; i < length; i++) {
    const newX = isH ? x + i : x;
    const newY = !isH ? y - i : y;
    if (gb.isInside(newX, newY)) tileCoords.push([newX, newY]);
  }

  dragShipTiles.forEach((element) => {
    element.classList.remove('can-drop');
    element.classList.remove('can-not-drop');
  });

  dragShipTiles = tileCoords.map((coord) =>
    document.querySelector(
      `#left-player-container .tile[data-x="${coord[0]}"][data-y="${coord[1]}"]`
    )
  );

  dragShipTiles.forEach((element) => {
    element.classList.add(hoverClass);
  });
}

function dropHandler(e, player, refreshPlayerBoard) {
  e.preventDefault();
  const { gameboard: gb } = player;
  const isH = direction === 'horizontal';
  const length = _constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.find((x) => x.name === dragShipId).length;
  const ship = new _models_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](length, dragShipId, direction);
  const { x, y } = buildXAndY(e.target, isH);
  if (gb.canPlaceShip(ship, x, y)) {
    let rotateBtn = document.getElementById('rotate-ships-btn');
    gb.placeShip(ship, x, y);
    refreshPlayerBoard(player);
    if (gb.ships === _constants_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_MODELS.length) rotateBtn.style.pointerEvents = 'none';
  }

  dragShipTiles.forEach((element) => {
    element.classList.remove('can-drop');
    element.classList.remove('can-not-drop');
  });
}

function onDragEndHandler(e) {
  dragShipTiles.forEach((element) => {
    element.classList.remove('can-drop');
    element.classList.remove('can-not-drop');
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshPlayerBoard: () => (/* binding */ refreshPlayerBoard)
/* harmony export */ });
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _models_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/player.js */ "./src/models/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _createPlayerInfoScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPlayerInfoScreen.js */ "./src/createPlayerInfoScreen.js");
/* harmony import */ var _shipsBoard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipsBoard.js */ "./src/shipsBoard.js");
/* harmony import */ var _draggableElements_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./draggableElements.js */ "./src/draggableElements.js");








let playerOne = null;
let playerTwo = null;
let leftType = null;
let rightType = null;
let rightBoard = document.getElementById('right-player-container');
let leftBoard = document.getElementById('left-player-container');
const result = document.getElementById('result');
const randomizeBtn = document.getElementById('randomize');
const submitBtn = document.getElementById('submit-btn');
let playerParams = document.getElementById('player-params-container');
let isRunning = false;

async function handleTileClick(e, player) {
  const { gameboard } = player;
  const tile = e.currentTarget;
  const x = tile.getAttribute('data-x');
  const y = tile.getAttribute('data-y');
  const ship = gameboard.board[x][y];
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;

  let play = gameboard.receiveAttack(x, y);
  refreshPlayerBoard(player);

  if (gameboard.areAllShipsSunk()) {
    handleGameEnd(oppositePlayer);
    return;
  }

  if (play === null) {
    rightBoard.classList.toggle('pointer-events-disabled', true);
    await handleCpuPlay(playerTwo);

    if (oppositePlayer.gameboard.areAllShipsSunk()) {
      handleGameEnd(player);
      return;
    }
    rightBoard.classList.toggle('pointer-events-disabled', false);
  }
}

async function handleCpuPlay(player) {
  let oppositePlayer = player.name === playerOne.name ? playerTwo : playerOne;
  let play = true;
  while (play) {
    if (player.difficulty === 'regular') {
      play = await oppositePlayer.gameboard.randomPlay();
      refreshPlayerBoard(oppositePlayer);
    } else {
      play = await oppositePlayer.gameboard.hardPlay();
      refreshPlayerBoard(oppositePlayer);
    }
  }
}

function handleGameEnd(player) {
  document.querySelectorAll('.board').forEach((board) => {
    board.classList.toggle('pointer-events-disabled', true);
  });
  result.textContent = `${player.name} won`;

  const homeBtn = document.createElement('button');
  homeBtn.id = 'home-btn';
  homeBtn.textContent = 'Home';
  result.appendChild(homeBtn);
  homeBtn.addEventListener('click', () => handleHomeBtn(homeBtn));
  isRunning = false;
}

function handleHomeBtn(btn) {
  playerOne = null;
  playerTwo = null;
  leftType = null;
  rightType = null;
  playerParams.innerHTML = '';
  result.textContent = '';
  btn.classList.toggle('hidden', true);
  setPage(0);
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
  refreshPlayerBoard(playerOne);
  refreshPlayerBoard(playerTwo);
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
  let miniShipsContainer = document.getElementById(
    `${player.side}-mini-ships-container`
  );
  if (isRunning) {
    boardElement.innerHTML = '';
    boardElement.appendChild((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.buildBoard)(player));
    miniShipsContainer.innerHTML = '';
    miniShipsContainer.appendChild((0,_shipsBoard_js__WEBPACK_IMPORTED_MODULE_5__.shipsBoardDisplay)(player.side));
    (0,_shipsBoard_js__WEBPACK_IMPORTED_MODULE_5__.displayHitShip)(player);
  } else if (!isRunning && player.side === 'left' && player.type === 'human') {
    miniShipsContainer.innerHTML = '';
    miniShipsContainer.appendChild((0,_draggableElements_js__WEBPACK_IMPORTED_MODULE_6__.buildDraggableShips)(player));
  }

  if (player.side === 'right' && player.type === 'cpu') {
    rightBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.addEventListener('click', (e) => {
        handleTileClick(e, player);
      });
      tile.classList.toggle('ship', false);
    });
  }

  if (player.side === 'left' && player.type === 'human' && !isRunning) {
    leftBoard.querySelectorAll('.tile').forEach((tile) => {
      tile.ondragover = _draggableElements_js__WEBPACK_IMPORTED_MODULE_6__.dragOverHandler;
      tile.addEventListener('drop', (e) =>
        (0,_draggableElements_js__WEBPACK_IMPORTED_MODULE_6__.dropHandler)(e, player, refreshPlayerBoard)
      );
      tile.addEventListener('dragenter', (e) => (0,_draggableElements_js__WEBPACK_IMPORTED_MODULE_6__.dragEnterHandler)(e, player));
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
      result.textContent = '';
      await handleCpuPlay(oppositePlayer);
      refreshPlayerBoard(currentPlayer);

      if (currentPlayer.gameboard.areAllShipsSunk()) {
        handleGameEnd(oppositePlayer);
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
    this.unresolvedHits = [];
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
    this.directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
  }

  canPlaceShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    const length = ship.length;

    if (!this.isInside(x, y)) return false;
    if (isHorizontal && length + x > this.boardSize) return false;
    if (!isHorizontal && y - length + 1 < 0) return false;

    for (let i = 0; i < length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      if (this.board[x + dX][y - dY] !== null) return false;
    }

    return true;
  }

  placeShip(ship, x, y) {
    const isHorizontal = ship.direction === 'horizontal';
    for (let i = 0; i < ship.length; i++) {
      const dX = isHorizontal ? i : 0;
      const dY = !isHorizontal ? i : 0;
      this.board[x + dX][y - dY] = ship;
      ship.coordinates.push([x + dX, y - dY]);
    }
    this.ships.push(ship);
  }

  rand(end = this.boardSize) {
    return Math.floor(Math.random() * end);
  }

  async randomPlay() {
    let x = this.rand();
    let y = this.rand();
    while (
      this.hits.has(this.coordsToStr(x, y)) ||
      this.misses.has(this.coordsToStr(x, y))
    ) {
      x = this.rand();
      y = this.rand();
    }
    await this.delay(_constants_js__WEBPACK_IMPORTED_MODULE_1__.PLAYING_TIME);
    return this.receiveAttack(x, y);
  }

  async hardPlay() {
    if (!this.unresolvedHits.length) return this.randomPlay();

    let x = this.unresolvedHits.at(-1)[0];
    let y = this.unresolvedHits.at(-1)[1];

    let moves = this.getSuggestedMoves(x, y);
    if (!moves.length) moves = this.getPossibleMoves(x, y);
    if (!moves.length) return this.randomPlay();

    let rand = this.rand(moves.length - 1);

    await this.delay(_constants_js__WEBPACK_IMPORTED_MODULE_1__.PLAYING_TIME);
    return this.receiveAttack(moves[rand][0], moves[rand][1]);
  }

  getSuggestedMoves(x, y) {
    let suggestedMoves = [];
    let hitNeighbors = this.directions
      .map((m) => [x + m[0], y + m[1]])
      .filter(
        (coord) =>
          this.hits.has(this.coordsToStr(coord[0], coord[1])) &&
          !this.board[coord[0]][coord[1]]?.isSunk() &&
          this.isInside(coord[0], coord[1])
      );
    let directions = Array.from(
      new Set(
        hitNeighbors.map((m) =>
          JSON.stringify([Math.abs(x - m[0]), Math.abs(y - m[1])])
        )
      )
    ).map((str) => JSON.parse(str));

    const travel = (d) => {
      let cursor = [x, y];
      while (true) {
        cursor = [cursor[0] + d[0], cursor[1] + d[1]];
        if (!this.isInside(...cursor)) break;
        if (this.board[x][y]?.isSunk()) break;
        if (
          !this.hits.has(this.coordsToStr(...cursor)) &&
          !this.misses.has(this.coordsToStr(...cursor))
        ) {
          suggestedMoves.push(cursor);
          break;
        }
        if (this.misses.has(this.coordsToStr(...cursor))) break;
      }
    };
    for (let direction of directions) {
      travel(direction);
      direction = [direction[0] * -1, direction[1] * -1];
      travel(direction);
    }
    return suggestedMoves;
  }

  isInside(x, y) {
    return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;
  }

  getPossibleMoves(x, y) {
    return this.directions
      .map((pm) => [x + pm[0], y + pm[1]])
      .filter((coord) => this.canPlay(coord[0], coord[1]));
  }

  canPlay(x, y) {
    return (
      this.isInside(x, y) &&
      !this.hits.has(this.coordsToStr(x, y)) &&
      !this.misses.has(this.coordsToStr(x, y))
    );
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
    let attack;
    if (this.board[x][y]) {
      let ship = this.board[x][y];
      ship.hit();
      this.hits.add(this.coordsToStr(x, y));
      this.unresolvedHits.push([x, y]);
      attack = ship;
    } else {
      this.misses.add(this.coordsToStr(x, y));
      attack = null;
    }

    if (attack) {
      if (attack.isSunk()) {
        this.unresolvedHits = this.unresolvedHits.filter(
          (subArr1) =>
            !attack.coordinates.some(
              (subArr2) =>
                subArr1[0] === subArr2[0] && subArr1[1] === subArr2[1]
            )
        );
      }
    }

    return attack;
  }

  areAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  coordsToStr(x, y) {
    return `[${x}, ${y}]`;
  }

  resetBoard() {
    this.misses = new Set();
    this.hits = new Set();
    this.ships = [];
    this.boardSize = _constants_js__WEBPACK_IMPORTED_MODULE_1__.BOARD_SIZE;
    this.unresolvedHits = [];
    this.board = Array(this.boardSize)
      .fill()
      .map(() => Array(this.boardSize).fill(null));
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
    this.boardId = `${side}-player-container`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxvSUFBK0M7QUFDM0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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Q0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlcy5jc3M/YzhiZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3JlYXRlUGxheWVySW5mb1NjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RyYWdnYWJsZUVsZW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2RlbHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZGVscy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kZWxzL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHNCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvRE1TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0RNU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBETVNhbnMsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTcpO1xyXG4gIGNvbG9yOiByZ2IoMjM3LCAyMzAsIDIzMCk7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbn1cclxuXHJcbiNib2FyZHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMXB4O1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA3MywgMjI3KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aWxlOmhvdmVyOm5vdCguaGl0LCAubWlzcywgLnN1bmspIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxODYsIDQzKTtcclxufVxyXG5cclxuLnNoaXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4ubWlzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnN1bmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucG9pbnRlci1ldmVudHMtZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4jcGxheWVyLXR5cGUtc2VsZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4udnMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNTksIDE1OSwgMTU5KTtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4udnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgNDAsIDM1KTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcGxheWVyLWRldGFpbHMtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNwbGF5ZXItaW5mby1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNwbGF5ZXItcGFyYW1zLWNvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0bixcclxuI2hvbWUtYnRuIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0bjpob3ZlcixcclxuLnByZS1nYW1lLWJ0bnM6aG92ZXIsXHJcbiNob21lLWJ0bjpob3ZlcixcclxuLmJ0bjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4jcHJlLWdhbWUtY29udHJvbHMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcmUtZ2FtZS1idG5zIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmlnaHQtc2hpcHMtY29udGFpbmVyLFxyXG4ubGVmdC1zaGlwcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxufVxyXG4uc2hpcC13YWdvbiB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2luZ2xlLXNoaXAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4uYm9hcmQtcGx1cy1taW5pLXNoaXBzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLnNoaXAtYW5kLXNoaXAtbmFtZSxcclxuLnNoaXAtYm94LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuI2RyYWdnYWJsZS1zaGlwcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5kcmFnZ2FibGUtc2hpcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY3Vyc29yOiBncmFiO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uc2hpcC1ib3gge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDFweDtcclxufVxyXG5cclxuLnNoaXAtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuI2xlZnQtcGxheWVyLWNvbnRhaW5lcixcclxuI3JpZ2h0LXBsYXllci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbiNyZXN1bHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jaG9tZS1idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaHVtYW4sXHJcbi5jcHUge1xyXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYW4tZHJvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuLmNhbi1ub3QtZHJvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBOzs7O0VBSUUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFFBQVE7RUFDUix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0RNU2Fucyc7XFxyXFxuICBzcmM6IHVybCgnLi4vYXNzZXRzL0RNU2Fucy1SZWd1bGFyLnR0ZicpO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogRE1TYW5zLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTcpO1xcclxcbiAgY29sb3I6IHJnYigyMzcsIDIzMCwgMjMwKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA3MywgMjI3KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6aG92ZXI6bm90KC5oaXQsIC5taXNzLCAuc3Vuaykge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTg2LCA0Myk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5taXNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zdW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnRlci1ldmVudHMtZGlzYWJsZWQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItdHlwZS1zZWxlY3Rpb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi52cyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU5LCAxNTksIDE1OSk7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi52czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDQwLCAzNSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWRldGFpbHMtcGFnZSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4jcGxheWVyLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLXBhcmFtcy1jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0bixcXHJcXG4jaG9tZS1idG4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0bjpob3ZlcixcXHJcXG4ucHJlLWdhbWUtYnRuczpob3ZlcixcXHJcXG4jaG9tZS1idG46aG92ZXIsXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJlLWdhbWUtY29udHJvbHMtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByZS1nYW1lLWJ0bnMge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNoaXBzLWNvbnRhaW5lcixcXHJcXG4ubGVmdC1zaGlwcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDJweDtcXHJcXG59XFxyXFxuLnNoaXAtd2Fnb24ge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtc2hpcC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtcGx1cy1taW5pLXNoaXBzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWFuZC1zaGlwLW5hbWUsXFxyXFxuLnNoaXAtYm94LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNkcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kcmFnZ2FibGUtc2hpcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgY3Vyc29yOiBncmFiO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtYm94IHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtbmFtZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1wbGF5ZXItY29udGFpbmVyLFxcclxcbiNyaWdodC1wbGF5ZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbiNyZXN1bHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNob21lLWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5odW1hbixcXHJcXG4uY3B1IHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbi1kcm9wIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxufVxcclxcblxcclxcbi5jYW4tbm90LWRyb3Age1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBCT0FSRF9TSVpFID0gMTA7XHJcbmV4cG9ydCBjb25zdCBTSElQX01PREVMUyA9IFtcclxuICB7IG5hbWU6ICdDYXJyaWVyJywgbGVuZ3RoOiA1IH0sXHJcbiAgeyBuYW1lOiAnQmF0dGxlc2hpcCcsIGxlbmd0aDogNCB9LFxyXG4gIHsgbmFtZTogJ0NydWlzZXInLCBsZW5ndGg6IDMgfSxcclxuICB7IG5hbWU6ICdTdWJtYXJpbmUnLCBsZW5ndGg6IDMgfSxcclxuICB7IG5hbWU6ICdEZXN0cm95ZXInLCBsZW5ndGg6IDIgfSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IFBMQVlJTkdfVElNRSA9IDEwMDA7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJJbnB1dChwbGF5ZXJUeXBlLCBzaWRlKSB7XHJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBpZiAocGxheWVyVHlwZSA9PT0gJ2NwdScpIHtcclxuICAgIGxldCBjcHVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNwdUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcHUtY29udGFpbmVyJyk7XHJcbiAgICBjcHVDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8bGFiZWwgZm9yPVwiJHtzaWRlfS1kaWZmaWN1bHR5XCI+JHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoXHJcbiAgICAgIHNpZGVcclxuICAgICl9IGRpZmZpY3VsdHk6IDwvbGFiZWw+XHJcbiAgICAgIDxzZWxlY3QgbmFtZT1cImRpZmZpY3VsdHlcIiBpZD1cIiR7c2lkZX0tZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZ3VsYXJcIj5SZWd1bGFyPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFyZFwiPkhhcmQ8L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICBgO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNwdUNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyVHlwZSA9PT0gJ2h1bWFuJykge1xyXG4gICAgbGV0IGh1bWFuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBodW1hbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdodW1hbi1jb250YWluZXInKTtcclxuICAgIGh1bWFuQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGxhYmVsIGZvcj1cIiR7c2lkZX0tbmFtZVwiPiR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKFxyXG4gICAgICBzaWRlXHJcbiAgICApfSBwbGF5ZXIgbmFtZTogPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIke3NpZGV9LW5hbWVcIiBtYXhsZW5ndGg9XCIyMFwiPlxyXG4gICAgXHJcbiAgICBgO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcih3b3JkKSB7XHJcbiAgaWYgKCF3b3JkKSByZXR1cm4gJyc7XHJcbiAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEJvYXJkKHBsYXllcikge1xyXG4gIGNvbnN0IHsgZ2FtZWJvYXJkIH0gPSBwbGF5ZXI7XHJcbiAgbGV0IHsgYm9hcmQsIGJvYXJkU2l6ZSB9ID0gZ2FtZWJvYXJkO1xyXG5cclxuICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgYm9hcmREaXYuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtib2FyZFNpemV9LCAxZnIpYDtcclxuXHJcbiAgZm9yIChsZXQgeSA9IGJvYXJkU2l6ZSAtIDE7IHkgPj0gMDsgeS0tKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkU2l6ZTsgeCsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFt4XVt5XTtcclxuICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoYHRpbGVgKTtcclxuICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xyXG4gICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgeSk7XHJcbiAgICAgIGlmIChzaGlwICYmIChwbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJyB8fCB0cnVlKSkgdGlsZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7IC8vIFRPRE9cclxuICAgICAgY29sb3JUaWxlKGdhbWVib2FyZCwgdGlsZSwgeCwgeSk7XHJcbiAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKHRpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYm9hcmREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9yVGlsZShnYW1lQm9hcmQsIHRpbGUsIHgsIHkpIHtcclxuICBjb25zdCBzaGlwID0gZ2FtZUJvYXJkLmJvYXJkW3hdW3ldO1xyXG5cclxuICBpZiAoZ2FtZUJvYXJkLmhpdHMuaGFzKGBbJHt4fSwgJHt5fV1gKSkge1xyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgIHRpbGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICB9XHJcbiAgaWYgKGdhbWVCb2FyZC5taXNzZXMuaGFzKGBbJHt4fSwgJHt5fV1gKSkge1xyXG4gICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICB0aWxlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGlmIChzaGlwICYmIHNoaXAuaXNTdW5rKCkpIHtcclxuICAgIHRpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGl0JywgZmFsc2UpO1xyXG4gICAgdGlsZS5jbGFzc0xpc3QudG9nZ2xlKCdzdW5rJywgdHJ1ZSk7XHJcbiAgICB0aWxlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNISVBfTU9ERUxTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL21vZGVscy9zaGlwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaFBsYXllckJvYXJkIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG5sZXQgZHJhZ0luZGV4ID0gbnVsbDtcclxubGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxubGV0IGRyYWdTaGlwSWQgPSBudWxsO1xyXG5sZXQgZHJhZ1NoaXBUaWxlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRHJhZ2dhYmxlU2hpcHMocGxheWVyKSB7XHJcbiAgbGV0IGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZHJhZ2dhYmxlU2hpcHNDb250YWluZXIuaWQgPSAnZHJhZ2dhYmxlLXNoaXBzLWNvbnRhaW5lcic7XHJcbiAgbGV0IHJlc2V0U2hpcHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByZXNldFNoaXBzQnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IFNoaXBzIFBvc2l0aW9uJztcclxuICByZXNldFNoaXBzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gIGxldCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlIFNoaXBzJztcclxuICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgcm90YXRlQnRuLmlkID0gJ3JvdGF0ZS1zaGlwcy1idG4nO1xyXG5cclxuICBTSElQX01PREVMUy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5zaGlwcy5zb21lKCh4KSA9PiB4Lm5hbWUgPT09IHNoaXAubmFtZSkpIHJldHVybjtcclxuXHJcbiAgICBsZXQgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUtc2hpcCcpO1xyXG4gICAgc2hpcENvbnRhaW5lci5pZCA9IHNoaXAubmFtZTtcclxuICAgIHNoaXBDb250YWluZXIuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICBzaGlwQ29udGFpbmVyLm9uZHJhZ3N0YXJ0ID0gb25EcmFnU3RhcnRIYW5kbGVyO1xyXG4gICAgc2hpcENvbnRhaW5lci5vbmRyYWdlbmQgPSBvbkRyYWdFbmRIYW5kbGVyO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgc2hpcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzaGlwQm94LmNsYXNzTGlzdC5hZGQoJ3NoaXAtYm94Jyk7XHJcbiAgICAgIHNoaXBCb3guc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XHJcbiAgICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEJveCk7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIHNoaXBDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xyXG4gICAgICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcclxuICAgICAgICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYWdnYWJsZVNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBDb250YWluZXIpO1xyXG4gIH0pO1xyXG4gIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVJvdGF0ZVNoaXBzQnRuKCkpO1xyXG4gIHJlc2V0U2hpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVSZXNldFNoaXBzQnRuKHBsYXllcikpO1xyXG5cclxuICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldFNoaXBzQnRuKTtcclxuICBkcmFnZ2FibGVTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVCdG4pO1xyXG5cclxuICByZXR1cm4gZHJhZ2dhYmxlU2hpcHNDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2V0U2hpcHNCdG4ocGxheWVyKSB7XHJcbiAgcGxheWVyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJvdGF0ZVNoaXBzQnRuKCkge1xyXG4gIGxldCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtc2hpcCcpO1xyXG4gIGxldCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmFnZ2FibGUtc2hpcHMtY29udGFpbmVyJyk7XHJcblxyXG4gIGlmIChzaGlwcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgIHNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG4gICAgfSk7XHJcbiAgICBzaGlwc0NvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XHJcbiAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgIHNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xyXG4gICAgfSk7XHJcbiAgICBzaGlwc0NvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkRyYWdTdGFydEhhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHsgaWQsIG9mZnNldExlZnQsIG9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQgfSA9IGUudGFyZ2V0O1xyXG5cclxuICBjb25zdCBvZmZzZXRUb3AgPSBnZXREaXN0YW5jZUZyb21Ub3AoZS50YXJnZXQpO1xyXG4gIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xyXG4gIGNvbnN0IGxlbmd0aCA9IFNISVBfTU9ERUxTLmZpbmQoKHgpID0+IHgubmFtZSA9PT0gaWQpLmxlbmd0aDtcclxuICBjb25zdCBtb3VzZSA9IGlzSG9yaXpvbnRhbCA/IGUuY2xpZW50WCA6IGUuY2xpZW50WTtcclxuICBjb25zdCBzdGFydCA9IGlzSG9yaXpvbnRhbCA/IG9mZnNldExlZnQgOiBvZmZzZXRUb3A7XHJcbiAgY29uc3Qgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IG9mZnNldFdpZHRoIDogb2Zmc2V0SGVpZ2h0O1xyXG5cclxuICBkcmFnSW5kZXggPSBNYXRoLmZsb29yKChtb3VzZSAtIHN0YXJ0KSAvIChzaXplIC8gbGVuZ3RoKSk7XHJcbiAgZHJhZ1NoaXBJZCA9IGlkO1xyXG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERpc3RhbmNlRnJvbVRvcChlbCkge1xyXG4gIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBjb25zdCBkaXN0YW5jZUZyb21Ub3AgPSByZWN0LnRvcDtcclxuICByZXR1cm4gZGlzdGFuY2VGcm9tVG9wO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkWEFuZFkodGlsZSwgaXNIKSB7XHJcbiAgbGV0IHggPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpKTtcclxuICBsZXQgeSA9IE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS15JykpO1xyXG4gIHggPSBpc0ggPyB4IC0gZHJhZ0luZGV4IDogeDtcclxuICB5ID0gIWlzSCA/IHkgKyBkcmFnSW5kZXggOiB5O1xyXG4gIHJldHVybiB7IHgsIHkgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdFbnRlckhhbmRsZXIoZSwgcGxheWVyKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHsgZ2FtZWJvYXJkOiBnYiB9ID0gcGxheWVyO1xyXG4gIGNvbnN0IGlzSCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xyXG4gIGNvbnN0IGxlbmd0aCA9IFNISVBfTU9ERUxTLmZpbmQoKHgpID0+IHgubmFtZSA9PT0gZHJhZ1NoaXBJZCkubGVuZ3RoO1xyXG4gIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIGRyYWdTaGlwSWQsIGRpcmVjdGlvbik7XHJcbiAgY29uc3QgeyB4LCB5IH0gPSBidWlsZFhBbmRZKGUudGFyZ2V0LCBpc0gpO1xyXG4gIGNvbnN0IGhvdmVyQ2xhc3MgPSBnYi5jYW5QbGFjZVNoaXAoc2hpcCwgeCwgeSkgPyAnY2FuLWRyb3AnIDogJ2Nhbi1ub3QtZHJvcCc7XHJcblxyXG4gIGxldCB0aWxlQ29vcmRzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgbmV3WCA9IGlzSCA/IHggKyBpIDogeDtcclxuICAgIGNvbnN0IG5ld1kgPSAhaXNIID8geSAtIGkgOiB5O1xyXG4gICAgaWYgKGdiLmlzSW5zaWRlKG5ld1gsIG5ld1kpKSB0aWxlQ29vcmRzLnB1c2goW25ld1gsIG5ld1ldKTtcclxuICB9XHJcblxyXG4gIGRyYWdTaGlwVGlsZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZHJvcCcpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tbm90LWRyb3AnKTtcclxuICB9KTtcclxuXHJcbiAgZHJhZ1NoaXBUaWxlcyA9IHRpbGVDb29yZHMubWFwKChjb29yZCkgPT5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjbGVmdC1wbGF5ZXItY29udGFpbmVyIC50aWxlW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYFxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIGRyYWdTaGlwVGlsZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGhvdmVyQ2xhc3MpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZSwgcGxheWVyLCByZWZyZXNoUGxheWVyQm9hcmQpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgeyBnYW1lYm9hcmQ6IGdiIH0gPSBwbGF5ZXI7XHJcbiAgY29uc3QgaXNIID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XHJcbiAgY29uc3QgbGVuZ3RoID0gU0hJUF9NT0RFTFMuZmluZCgoeCkgPT4geC5uYW1lID09PSBkcmFnU2hpcElkKS5sZW5ndGg7XHJcbiAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgZHJhZ1NoaXBJZCwgZGlyZWN0aW9uKTtcclxuICBjb25zdCB7IHgsIHkgfSA9IGJ1aWxkWEFuZFkoZS50YXJnZXQsIGlzSCk7XHJcbiAgaWYgKGdiLmNhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkge1xyXG4gICAgbGV0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGUtc2hpcHMtYnRuJyk7XHJcbiAgICBnYi5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XHJcbiAgICByZWZyZXNoUGxheWVyQm9hcmQocGxheWVyKTtcclxuICAgIGlmIChnYi5zaGlwcyA9PT0gU0hJUF9NT0RFTFMubGVuZ3RoKSByb3RhdGVCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICB9XHJcblxyXG4gIGRyYWdTaGlwVGlsZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZHJvcCcpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tbm90LWRyb3AnKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25EcmFnRW5kSGFuZGxlcihlKSB7XHJcbiAgZHJhZ1NoaXBUaWxlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nhbi1kcm9wJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nhbi1ub3QtZHJvcCcpO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCAnLi9jc3Mvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2RlbHMvcGxheWVyLmpzJztcclxuaW1wb3J0IHsgYnVpbGRCb2FyZCB9IGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IHsgU0hJUF9NT0RFTFMgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVBsYXllcklucHV0IH0gZnJvbSAnLi9jcmVhdGVQbGF5ZXJJbmZvU2NyZWVuLmpzJztcclxuaW1wb3J0IHsgc2hpcHNCb2FyZERpc3BsYXksIGRpc3BsYXlIaXRTaGlwIH0gZnJvbSAnLi9zaGlwc0JvYXJkLmpzJztcclxuaW1wb3J0IHtcclxuICBidWlsZERyYWdnYWJsZVNoaXBzLFxyXG4gIGRyYWdPdmVySGFuZGxlcixcclxuICBkcm9wSGFuZGxlcixcclxuICBkcmFnRW50ZXJIYW5kbGVyLFxyXG59IGZyb20gJy4vZHJhZ2dhYmxlRWxlbWVudHMuanMnO1xyXG5cclxubGV0IHBsYXllck9uZSA9IG51bGw7XHJcbmxldCBwbGF5ZXJUd28gPSBudWxsO1xyXG5sZXQgbGVmdFR5cGUgPSBudWxsO1xyXG5sZXQgcmlnaHRUeXBlID0gbnVsbDtcclxubGV0IHJpZ2h0Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQtcGxheWVyLWNvbnRhaW5lcicpO1xyXG5sZXQgbGVmdEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQtcGxheWVyLWNvbnRhaW5lcicpO1xyXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XHJcbmNvbnN0IHJhbmRvbWl6ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUnKTtcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKTtcclxubGV0IHBsYXllclBhcmFtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItcGFyYW1zLWNvbnRhaW5lcicpO1xyXG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVUaWxlQ2xpY2soZSwgcGxheWVyKSB7XHJcbiAgY29uc3QgeyBnYW1lYm9hcmQgfSA9IHBsYXllcjtcclxuICBjb25zdCB0aWxlID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gIGNvbnN0IHggPSB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XHJcbiAgY29uc3QgeSA9IHRpbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcclxuICBjb25zdCBzaGlwID0gZ2FtZWJvYXJkLmJvYXJkW3hdW3ldO1xyXG4gIGxldCBvcHBvc2l0ZVBsYXllciA9IHBsYXllci5uYW1lID09PSBwbGF5ZXJPbmUubmFtZSA/IHBsYXllclR3byA6IHBsYXllck9uZTtcclxuXHJcbiAgbGV0IHBsYXkgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuICByZWZyZXNoUGxheWVyQm9hcmQocGxheWVyKTtcclxuXHJcbiAgaWYgKGdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgaGFuZGxlR2FtZUVuZChvcHBvc2l0ZVBsYXllcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocGxheSA9PT0gbnVsbCkge1xyXG4gICAgcmlnaHRCb2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdwb2ludGVyLWV2ZW50cy1kaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgYXdhaXQgaGFuZGxlQ3B1UGxheShwbGF5ZXJUd28pO1xyXG5cclxuICAgIGlmIChvcHBvc2l0ZVBsYXllci5nYW1lYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgaGFuZGxlR2FtZUVuZChwbGF5ZXIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByaWdodEJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXItZXZlbnRzLWRpc2FibGVkJywgZmFsc2UpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ3B1UGxheShwbGF5ZXIpIHtcclxuICBsZXQgb3Bwb3NpdGVQbGF5ZXIgPSBwbGF5ZXIubmFtZSA9PT0gcGxheWVyT25lLm5hbWUgPyBwbGF5ZXJUd28gOiBwbGF5ZXJPbmU7XHJcbiAgbGV0IHBsYXkgPSB0cnVlO1xyXG4gIHdoaWxlIChwbGF5KSB7XHJcbiAgICBpZiAocGxheWVyLmRpZmZpY3VsdHkgPT09ICdyZWd1bGFyJykge1xyXG4gICAgICBwbGF5ID0gYXdhaXQgb3Bwb3NpdGVQbGF5ZXIuZ2FtZWJvYXJkLnJhbmRvbVBsYXkoKTtcclxuICAgICAgcmVmcmVzaFBsYXllckJvYXJkKG9wcG9zaXRlUGxheWVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYXkgPSBhd2FpdCBvcHBvc2l0ZVBsYXllci5nYW1lYm9hcmQuaGFyZFBsYXkoKTtcclxuICAgICAgcmVmcmVzaFBsYXllckJvYXJkKG9wcG9zaXRlUGxheWVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUdhbWVFbmQocGxheWVyKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkJykuZm9yRWFjaCgoYm9hcmQpID0+IHtcclxuICAgIGJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXItZXZlbnRzLWRpc2FibGVkJywgdHJ1ZSk7XHJcbiAgfSk7XHJcbiAgcmVzdWx0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IHdvbmA7XHJcblxyXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBob21lQnRuLmlkID0gJ2hvbWUtYnRuJztcclxuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG4gIHJlc3VsdC5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlSG9tZUJ0bihob21lQnRuKSk7XHJcbiAgaXNSdW5uaW5nID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUhvbWVCdG4oYnRuKSB7XHJcbiAgcGxheWVyT25lID0gbnVsbDtcclxuICBwbGF5ZXJUd28gPSBudWxsO1xyXG4gIGxlZnRUeXBlID0gbnVsbDtcclxuICByaWdodFR5cGUgPSBudWxsO1xyXG4gIHBsYXllclBhcmFtcy5pbm5lckhUTUwgPSAnJztcclxuICByZXN1bHQudGV4dENvbnRlbnQgPSAnJztcclxuICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7XHJcbiAgc2V0UGFnZSgwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gIGlmIChcclxuICAgIHBsYXllck9uZS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoICE9PSBTSElQX01PREVMUy5sZW5ndGggfHxcclxuICAgIHBsYXllclR3by5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoICE9PSBTSElQX01PREVMUy5sZW5ndGhcclxuICApIHtcclxuICAgIGFsZXJ0KGBZb3UgbXVzdCBwbGFjZSAke1NISVBfTU9ERUxTLmxlbmd0aH0gc2hpcHMhYCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlzUnVubmluZyA9IHRydWU7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZCgncHJlLWdhbWUtY29udHJvbHMtY29udGFpbmVyJylcclxuICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcclxuICByaWdodEJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3BvaW50ZXItZXZlbnRzLWRpc2FibGVkJywgZmFsc2UpO1xyXG4gIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXJPbmUpO1xyXG4gIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXJUd28pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoUGFnZSgpIHtcclxuICBpZiAobGVmdFR5cGUgPT09IG51bGwgfHwgcmlnaHRUeXBlID09PSBudWxsKSBzZXRQYWdlKDApO1xyXG4gIGVsc2UgaWYgKGxlZnRUeXBlICYmIHJpZ2h0VHlwZSkgc2V0UGFnZSgxKTtcclxuICBlbHNlIHNldFBhZ2UoMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBhZ2UoaSkge1xyXG4gIGxldCBwYWdlSWRzID0gW1xyXG4gICAgJ3BsYXllci10eXBlLXNlbGVjdGlvbi1jb250YWluZXInLFxyXG4gICAgJ3BsYXllci1kZXRhaWxzLXBhZ2UnLFxyXG4gICAgJ2dhbWUtcGFnZScsXHJcbiAgXTtcclxuICBwYWdlSWRzLmZvckVhY2goKHBJZCkgPT5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBJZCkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSlcclxuICApO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VJZHNbaV0pLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZzJykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBsZWZ0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxlZnQtdHlwZScpO1xyXG4gICAgcmlnaHRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmlnaHQtdHlwZScpO1xyXG4gICAgcGxheWVyUGFyYW1zLmFwcGVuZENoaWxkKGNyZWF0ZVBsYXllcklucHV0KGxlZnRUeXBlLCAnbGVmdCcpKTtcclxuICAgIHBsYXllclBhcmFtcy5hcHBlbmRDaGlsZChjcmVhdGVQbGF5ZXJJbnB1dChyaWdodFR5cGUsICdyaWdodCcpKTtcclxuICAgIHJlZnJlc2hQYWdlKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNldFBhZ2UoMik7XHJcblxyXG4gIGxldCBsZWZ0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LW5hbWUnKT8udmFsdWU7XHJcbiAgbGV0IHJpZ2h0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1uYW1lJyk/LnZhbHVlO1xyXG4gIGxldCBsZWZ0RGlmZmljdWx0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0LWRpZmZpY3VsdHknKT8udmFsdWU7XHJcbiAgbGV0IHJpZ2h0RGlmZmljdWx0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodC1kaWZmaWN1bHR5Jyk/LnZhbHVlO1xyXG5cclxuICBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKGxlZnRUeXBlLCBsZWZ0TmFtZSwgbGVmdERpZmZpY3VsdHksICdsZWZ0Jyk7XHJcbiAgcGxheWVyVHdvID0gbmV3IFBsYXllcihyaWdodFR5cGUsIHJpZ2h0TmFtZSwgcmlnaHREaWZmaWN1bHR5LCAncmlnaHQnKTtcclxuXHJcbiAgaWYgKGxlZnRUeXBlID09PSAnaHVtYW4nICYmIHJpZ2h0VHlwZSA9PT0gJ2NwdScpIHtcclxuICAgIHBsYXllck9uZS5uYW1lID0gbGVmdE5hbWUgPyBsZWZ0TmFtZSA6ICdIdW1hbic7XHJcbiAgICBwbGF5ZXJUd28ubmFtZSA9ICdDUFUnO1xyXG4gICAgZGlzcGxheU5hbWVzKCk7XHJcbiAgICBoYW5kbGVIdW1hblZzQ3B1R2FtZSgpO1xyXG4gIH0gZWxzZSBpZiAocGxheWVyT25lLnR5cGUgPT09ICdjcHUnICYmIHBsYXllclR3by50eXBlID09PSAnY3B1Jykge1xyXG4gICAgcGxheWVyT25lLm5hbWUgPSAnQ1BVIE9uZSc7XHJcbiAgICBwbGF5ZXJUd28ubmFtZSA9ICdDUFUgVHdvJztcclxuICAgIGRpc3BsYXlOYW1lcygpO1xyXG4gICAgaGFuZGxlQ3B1VnNDcHVHYW1lKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllck9uZS5uYW1lID0gbGVmdE5hbWUgPyBsZWZ0TmFtZSA6ICdIdW1hbiBPbmUnO1xyXG4gICAgcGxheWVyVHdvLm5hbWUgPSByaWdodE5hbWUgPyByaWdodE5hbWUgOiAnSHVtYW4gVHdvJztcclxuICAgIGRpc3BsYXlOYW1lcygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllck9uZS50eXBlID09PSAnaHVtYW4nICYmICFpc1J1bm5pbmcpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZCgncHJlLWdhbWUtY29udHJvbHMtY29udGFpbmVyJylcclxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcclxuICAgIHJhbmRvbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcGxheWVyT25lLmdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgICAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllck9uZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hQbGF5ZXJCb2FyZChwbGF5ZXIpIHtcclxuICBsZXQgYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLmJvYXJkSWQpO1xyXG4gIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXIpKTtcclxuICBsZXQgbWluaVNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBgJHtwbGF5ZXIuc2lkZX0tbWluaS1zaGlwcy1jb250YWluZXJgXHJcbiAgKTtcclxuICBpZiAoaXNSdW5uaW5nKSB7XHJcbiAgICBib2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXIpKTtcclxuICAgIG1pbmlTaGlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIG1pbmlTaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwc0JvYXJkRGlzcGxheShwbGF5ZXIuc2lkZSkpO1xyXG4gICAgZGlzcGxheUhpdFNoaXAocGxheWVyKTtcclxuICB9IGVsc2UgaWYgKCFpc1J1bm5pbmcgJiYgcGxheWVyLnNpZGUgPT09ICdsZWZ0JyAmJiBwbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJykge1xyXG4gICAgbWluaVNoaXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbWluaVNoaXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkRHJhZ2dhYmxlU2hpcHMocGxheWVyKSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyLnNpZGUgPT09ICdyaWdodCcgJiYgcGxheWVyLnR5cGUgPT09ICdjcHUnKSB7XHJcbiAgICByaWdodEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJykuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBoYW5kbGVUaWxlQ2xpY2soZSwgcGxheWVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRpbGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpcCcsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllci5zaWRlID09PSAnbGVmdCcgJiYgcGxheWVyLnR5cGUgPT09ICdodW1hbicgJiYgIWlzUnVubmluZykge1xyXG4gICAgbGVmdEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJykuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICB0aWxlLm9uZHJhZ292ZXIgPSBkcmFnT3ZlckhhbmRsZXI7XHJcbiAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PlxyXG4gICAgICAgIGRyb3BIYW5kbGVyKGUsIHBsYXllciwgcmVmcmVzaFBsYXllckJvYXJkKVxyXG4gICAgICApO1xyXG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChlKSA9PiBkcmFnRW50ZXJIYW5kbGVyKGUsIHBsYXllcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmFtZXMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1vbmUnKS50ZXh0Q29udGVudCA9IHBsYXllck9uZS5uYW1lO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItdHdvJykudGV4dENvbnRlbnQgPSBwbGF5ZXJUd28ubmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSHVtYW5Wc0NwdUdhbWUoKSB7XHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllck9uZSk7XHJcbiAgcGxhY2VQbGF5ZXJTaGlwcyhwbGF5ZXJUd28pO1xyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUNwdVZzQ3B1R2FtZSgpIHtcclxuICBwbGFjZVBsYXllclNoaXBzKHBsYXllck9uZSk7XHJcbiAgcGxhY2VQbGF5ZXJTaGlwcyhwbGF5ZXJUd28pO1xyXG5cclxuICBsZXQgcHJlR2FtZUNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZS1nYW1lLWNvbnRyb2xzLWNvbnRhaW5lcicpO1xyXG4gIHByZUdhbWVDb250cm9scy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XHJcbiAgcHJlR2FtZUNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpO1xyXG4gIH0pO1xyXG4gIGxldCBzdGFydENwdUdhbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtY3B1LWdhbWUnKTtcclxuXHJcbiAgc3RhcnRDcHVHYW1lQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcclxuXHJcbiAgc3RhcnRDcHVHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgcHJlR2FtZUNvbnRyb2xzLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpO1xyXG5cclxuICAgIHJpZ2h0Qm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgncG9pbnRlci1ldmVudHMtZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgIGlzUnVubmluZyA9IHRydWU7XHJcbiAgICBsZXQgaXNMZWZ0UGxheWVyVHVybiA9IHRydWU7XHJcbiAgICB3aGlsZSAoaXNSdW5uaW5nKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBpc0xlZnRQbGF5ZXJUdXJuID8gcGxheWVyT25lIDogcGxheWVyVHdvO1xyXG4gICAgICBjb25zdCBvcHBvc2l0ZVBsYXllciA9IGlzTGVmdFBsYXllclR1cm4gPyBwbGF5ZXJUd28gOiBwbGF5ZXJPbmU7XHJcbiAgICAgIHJlc3VsdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBhd2FpdCBoYW5kbGVDcHVQbGF5KG9wcG9zaXRlUGxheWVyKTtcclxuICAgICAgcmVmcmVzaFBsYXllckJvYXJkKGN1cnJlbnRQbGF5ZXIpO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgaGFuZGxlR2FtZUVuZChvcHBvc2l0ZVBsYXllcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlzUnVubmluZyA9ICFjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKTtcclxuICAgICAgaXNMZWZ0UGxheWVyVHVybiA9ICFpc0xlZnRQbGF5ZXJUdXJuO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVBsYXllclNoaXBzKHBsYXllcikge1xyXG4gIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgcmVmcmVzaFBsYXllckJvYXJkKHBsYXllcik7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJykub25jbGljayA9IHN0YXJ0R2FtZTtcclxucmVmcmVzaFBhZ2UoKTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcclxuaW1wb3J0IHsgQk9BUkRfU0laRSwgU0hJUF9NT0RFTFMsIFBMQVlJTkdfVElNRSB9IGZyb20gJy4uL2NvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGRlZXBDb3B5U2h1ZmZsZUFycmF5IH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWlzc2VzID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5oaXRzID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG4gICAgdGhpcy5ib2FyZFNpemUgPSBCT0FSRF9TSVpFO1xyXG4gICAgdGhpcy51bnJlc29sdmVkSGl0cyA9IFtdO1xyXG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KHRoaXMuYm9hcmRTaXplKVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkodGhpcy5ib2FyZFNpemUpLmZpbGwobnVsbCkpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25zID0gW1xyXG4gICAgICBbMSwgMF0sXHJcbiAgICAgIFswLCAxXSxcclxuICAgICAgWy0xLCAwXSxcclxuICAgICAgWzAsIC0xXSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBjYW5QbGFjZVNoaXAoc2hpcCwgeCwgeSkge1xyXG4gICAgY29uc3QgaXNIb3Jpem9udGFsID0gc2hpcC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJztcclxuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0luc2lkZSh4LCB5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKGlzSG9yaXpvbnRhbCAmJiBsZW5ndGggKyB4ID4gdGhpcy5ib2FyZFNpemUpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICghaXNIb3Jpem9udGFsICYmIHkgLSBsZW5ndGggKyAxIDwgMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZFggPSBpc0hvcml6b250YWwgPyBpIDogMDtcclxuICAgICAgY29uc3QgZFkgPSAhaXNIb3Jpem9udGFsID8gaSA6IDA7XHJcbiAgICAgIGlmICh0aGlzLmJvYXJkW3ggKyBkWF1beSAtIGRZXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcclxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHNoaXAuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZFggPSBpc0hvcml6b250YWwgPyBpIDogMDtcclxuICAgICAgY29uc3QgZFkgPSAhaXNIb3Jpem9udGFsID8gaSA6IDA7XHJcbiAgICAgIHRoaXMuYm9hcmRbeCArIGRYXVt5IC0gZFldID0gc2hpcDtcclxuICAgICAgc2hpcC5jb29yZGluYXRlcy5wdXNoKFt4ICsgZFgsIHkgLSBkWV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xyXG4gIH1cclxuXHJcbiAgcmFuZChlbmQgPSB0aGlzLmJvYXJkU2l6ZSkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByYW5kb21QbGF5KCkge1xyXG4gICAgbGV0IHggPSB0aGlzLnJhbmQoKTtcclxuICAgIGxldCB5ID0gdGhpcy5yYW5kKCk7XHJcbiAgICB3aGlsZSAoXHJcbiAgICAgIHRoaXMuaGl0cy5oYXModGhpcy5jb29yZHNUb1N0cih4LCB5KSkgfHxcclxuICAgICAgdGhpcy5taXNzZXMuaGFzKHRoaXMuY29vcmRzVG9TdHIoeCwgeSkpXHJcbiAgICApIHtcclxuICAgICAgeCA9IHRoaXMucmFuZCgpO1xyXG4gICAgICB5ID0gdGhpcy5yYW5kKCk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB0aGlzLmRlbGF5KFBMQVlJTkdfVElNRSk7XHJcbiAgICByZXR1cm4gdGhpcy5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFyZFBsYXkoKSB7XHJcbiAgICBpZiAoIXRoaXMudW5yZXNvbHZlZEhpdHMubGVuZ3RoKSByZXR1cm4gdGhpcy5yYW5kb21QbGF5KCk7XHJcblxyXG4gICAgbGV0IHggPSB0aGlzLnVucmVzb2x2ZWRIaXRzLmF0KC0xKVswXTtcclxuICAgIGxldCB5ID0gdGhpcy51bnJlc29sdmVkSGl0cy5hdCgtMSlbMV07XHJcblxyXG4gICAgbGV0IG1vdmVzID0gdGhpcy5nZXRTdWdnZXN0ZWRNb3Zlcyh4LCB5KTtcclxuICAgIGlmICghbW92ZXMubGVuZ3RoKSBtb3ZlcyA9IHRoaXMuZ2V0UG9zc2libGVNb3Zlcyh4LCB5KTtcclxuICAgIGlmICghbW92ZXMubGVuZ3RoKSByZXR1cm4gdGhpcy5yYW5kb21QbGF5KCk7XHJcblxyXG4gICAgbGV0IHJhbmQgPSB0aGlzLnJhbmQobW92ZXMubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5kZWxheShQTEFZSU5HX1RJTUUpO1xyXG4gICAgcmV0dXJuIHRoaXMucmVjZWl2ZUF0dGFjayhtb3Zlc1tyYW5kXVswXSwgbW92ZXNbcmFuZF1bMV0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3VnZ2VzdGVkTW92ZXMoeCwgeSkge1xyXG4gICAgbGV0IHN1Z2dlc3RlZE1vdmVzID0gW107XHJcbiAgICBsZXQgaGl0TmVpZ2hib3JzID0gdGhpcy5kaXJlY3Rpb25zXHJcbiAgICAgIC5tYXAoKG0pID0+IFt4ICsgbVswXSwgeSArIG1bMV1dKVxyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIChjb29yZCkgPT5cclxuICAgICAgICAgIHRoaXMuaGl0cy5oYXModGhpcy5jb29yZHNUb1N0cihjb29yZFswXSwgY29vcmRbMV0pKSAmJlxyXG4gICAgICAgICAgIXRoaXMuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXT8uaXNTdW5rKCkgJiZcclxuICAgICAgICAgIHRoaXMuaXNJbnNpZGUoY29vcmRbMF0sIGNvb3JkWzFdKVxyXG4gICAgICApO1xyXG4gICAgbGV0IGRpcmVjdGlvbnMgPSBBcnJheS5mcm9tKFxyXG4gICAgICBuZXcgU2V0KFxyXG4gICAgICAgIGhpdE5laWdoYm9ycy5tYXAoKG0pID0+XHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShbTWF0aC5hYnMoeCAtIG1bMF0pLCBNYXRoLmFicyh5IC0gbVsxXSldKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKS5tYXAoKHN0cikgPT4gSlNPTi5wYXJzZShzdHIpKTtcclxuXHJcbiAgICBjb25zdCB0cmF2ZWwgPSAoZCkgPT4ge1xyXG4gICAgICBsZXQgY3Vyc29yID0gW3gsIHldO1xyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGN1cnNvciA9IFtjdXJzb3JbMF0gKyBkWzBdLCBjdXJzb3JbMV0gKyBkWzFdXTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbnNpZGUoLi4uY3Vyc29yKSkgYnJlYWs7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0/LmlzU3VuaygpKSBicmVhaztcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5oaXRzLmhhcyh0aGlzLmNvb3Jkc1RvU3RyKC4uLmN1cnNvcikpICYmXHJcbiAgICAgICAgICAhdGhpcy5taXNzZXMuaGFzKHRoaXMuY29vcmRzVG9TdHIoLi4uY3Vyc29yKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHN1Z2dlc3RlZE1vdmVzLnB1c2goY3Vyc29yKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5taXNzZXMuaGFzKHRoaXMuY29vcmRzVG9TdHIoLi4uY3Vyc29yKSkpIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbnMpIHtcclxuICAgICAgdHJhdmVsKGRpcmVjdGlvbik7XHJcbiAgICAgIGRpcmVjdGlvbiA9IFtkaXJlY3Rpb25bMF0gKiAtMSwgZGlyZWN0aW9uWzFdICogLTFdO1xyXG4gICAgICB0cmF2ZWwoZGlyZWN0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdWdnZXN0ZWRNb3ZlcztcclxuICB9XHJcblxyXG4gIGlzSW5zaWRlKHgsIHkpIHtcclxuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuYm9hcmRTaXplICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5ib2FyZFNpemU7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NzaWJsZU1vdmVzKHgsIHkpIHtcclxuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbnNcclxuICAgICAgLm1hcCgocG0pID0+IFt4ICsgcG1bMF0sIHkgKyBwbVsxXV0pXHJcbiAgICAgIC5maWx0ZXIoKGNvb3JkKSA9PiB0aGlzLmNhblBsYXkoY29vcmRbMF0sIGNvb3JkWzFdKSk7XHJcbiAgfVxyXG5cclxuICBjYW5QbGF5KHgsIHkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiZcclxuICAgICAgIXRoaXMuaGl0cy5oYXModGhpcy5jb29yZHNUb1N0cih4LCB5KSkgJiZcclxuICAgICAgIXRoaXMubWlzc2VzLmhhcyh0aGlzLmNvb3Jkc1RvU3RyKHgsIHkpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgIGNvbnN0IG1vZGVscyA9IGRlZXBDb3B5U2h1ZmZsZUFycmF5KFNISVBfTU9ERUxTKTtcclxuICAgIHRoaXMuc2hpcHMgPSBbXTtcclxuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLmJvYXJkU2l6ZSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKCgpID0+IEFycmF5KHRoaXMuYm9hcmRTaXplKS5maWxsKG51bGwpKTtcclxuXHJcbiAgICBsZXQgc2hpcHMgPSBtb2RlbHMubWFwKChtb2RlbCkgPT4ge1xyXG4gICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yYW5kKDIpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICAgICAgcmV0dXJuIG5ldyBTaGlwKG1vZGVsLmxlbmd0aCwgbW9kZWwubmFtZSwgZGlyZWN0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgbGV0IHggPSB0aGlzLnJhbmQoKTtcclxuICAgICAgbGV0IHkgPSB0aGlzLnJhbmQoKTtcclxuICAgICAgd2hpbGUgKCF0aGlzLmNhblBsYWNlU2hpcChzaGlwLCB4LCB5KSkge1xyXG4gICAgICAgIHNoaXAuZGlyZWN0aW9uID0gdGhpcy5yYW5kKDIpID09PSAwID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcclxuICAgICAgICB4ID0gdGhpcy5yYW5kKCk7XHJcbiAgICAgICAgeSA9IHRoaXMucmFuZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAgIGxldCBhdHRhY2s7XHJcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSkge1xyXG4gICAgICBsZXQgc2hpcCA9IHRoaXMuYm9hcmRbeF1beV07XHJcbiAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgIHRoaXMuaGl0cy5hZGQodGhpcy5jb29yZHNUb1N0cih4LCB5KSk7XHJcbiAgICAgIHRoaXMudW5yZXNvbHZlZEhpdHMucHVzaChbeCwgeV0pO1xyXG4gICAgICBhdHRhY2sgPSBzaGlwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5taXNzZXMuYWRkKHRoaXMuY29vcmRzVG9TdHIoeCwgeSkpO1xyXG4gICAgICBhdHRhY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdHRhY2spIHtcclxuICAgICAgaWYgKGF0dGFjay5pc1N1bmsoKSkge1xyXG4gICAgICAgIHRoaXMudW5yZXNvbHZlZEhpdHMgPSB0aGlzLnVucmVzb2x2ZWRIaXRzLmZpbHRlcihcclxuICAgICAgICAgIChzdWJBcnIxKSA9PlxyXG4gICAgICAgICAgICAhYXR0YWNrLmNvb3JkaW5hdGVzLnNvbWUoXHJcbiAgICAgICAgICAgICAgKHN1YkFycjIpID0+XHJcbiAgICAgICAgICAgICAgICBzdWJBcnIxWzBdID09PSBzdWJBcnIyWzBdICYmIHN1YkFycjFbMV0gPT09IHN1YkFycjJbMV1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXR0YWNrO1xyXG4gIH1cclxuXHJcbiAgYXJlQWxsU2hpcHNTdW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xyXG4gIH1cclxuXHJcbiAgY29vcmRzVG9TdHIoeCwgeSkge1xyXG4gICAgcmV0dXJuIGBbJHt4fSwgJHt5fV1gO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRCb2FyZCgpIHtcclxuICAgIHRoaXMubWlzc2VzID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5oaXRzID0gbmV3IFNldCgpO1xyXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xyXG4gICAgdGhpcy5ib2FyZFNpemUgPSBCT0FSRF9TSVpFO1xyXG4gICAgdGhpcy51bnJlc29sdmVkSGl0cyA9IFtdO1xyXG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KHRoaXMuYm9hcmRTaXplKVxyXG4gICAgICAuZmlsbCgpXHJcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkodGhpcy5ib2FyZFNpemUpLmZpbGwobnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgZGVsYXkobXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgZGlmZmljdWx0eSwgc2lkZSkge1xyXG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuc2lkZSA9IHNpZGU7XHJcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgdGhpcy5ib2FyZElkID0gYCR7c2lkZX0tcGxheWVyLWNvbnRhaW5lcmA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHZhbGlkYXRlU2hpcCB9IGZyb20gJy4vdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lID0gbGVuZ3RoLnRvU3RyaW5nKCksIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJykge1xyXG4gICAgdmFsaWRhdGVTaGlwKGxlbmd0aCwgZGlyZWN0aW9uKTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5oaXRzID0gMDtcclxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIGlmICh0aGlzLmlzU3VuaygpKSByZXR1cm47XHJcbiAgICB0aGlzLmhpdHMrKztcclxuICB9XHJcblxyXG4gIGlzU3VuaygpIHtcclxuICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTSElQX01PREVMUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTaGlwKGxlbmd0aCwgZGlyZWN0aW9uKSB7XHJcbiAgY29uc3QgbWF4U2hpcExlbiA9IE1hdGgubWF4KC4uLlNISVBfTU9ERUxTLm1hcCgocykgPT4gcy5sZW5ndGgpKTtcclxuICBpZiAobGVuZ3RoID4gbWF4U2hpcExlbiB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYExlbmd0aCBzaG91bGQgYmUgYmV0d2VlbiAwIGFuZCAke21heFNoaXBMZW59YCk7XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBkaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGlyZWN0aW9uIG11c3QgYmUgdmVydGljYWwgb3IgaG9yaXpvbnRhbCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTSElQX01PREVMUyB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGlwc0JvYXJkRGlzcGxheShzaWRlKSB7XHJcbiAgbGV0IHNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHtzaWRlfS1zaGlwcy1jb250YWluZXJgKTtcclxuICBTSElQX01PREVMUy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBsZXQgc2hpcElsbHVzdHJhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2hpcElsbHVzdHJhdGlvbi5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtc2hpcC1jb250YWluZXInLCBgJHtzaGlwLm5hbWV9YCk7XHJcbiAgICBsZXQgc2hpcEFuZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBBbmROYW1lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYW5kLXNoaXAtbmFtZScpO1xyXG4gICAgbGV0IHNoaXBCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNoaXBCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1ib3gtY29udGFpbmVyJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBzaGlwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNoaXBCb3guY2xhc3NMaXN0LmFkZCgnc2hpcCcsICdzaGlwLXdhZ29uJyk7XHJcbiAgICAgIHNoaXBCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaGlwTmFtZS5jbGFzc0xpc3QuYWRkKCdzaGlwLW5hbWUnKTtcclxuICAgIHNoaXBOYW1lLnRleHRDb250ZW50ID0gYCR7c2hpcC5uYW1lfWA7XHJcbiAgICBzaGlwQW5kTmFtZS5hcHBlbmQoc2hpcEJveENvbnRhaW5lciwgc2hpcE5hbWUpO1xyXG5cclxuICAgIHNoaXBJbGx1c3RyYXRpb24uYXBwZW5kQ2hpbGQoc2hpcEFuZE5hbWUpO1xyXG4gICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcElsbHVzdHJhdGlvbik7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNoaXBzQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhpdFNoaXAocGxheWVyKSB7XHJcbiAgbGV0IHNoaXBzID0gcGxheWVyLmdhbWVib2FyZC5zaGlwcztcclxuICBsZXQgc2hpcHNIaXQgPSBzaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAuaGl0cyA+IDApO1xyXG4gIGlmIChzaGlwc0hpdC5sZW5ndGggPD0gMCkgcmV0dXJuO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNIaXQubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzaGlwID0gc2hpcHNIaXRbaV07XHJcbiAgICBsZXQgc2hpcFdhZ29ucyA9IEFycmF5LmZyb20oXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgYC4ke3BsYXllci5zaWRlfS1zaGlwcy1jb250YWluZXIgIC4ke3NoaXAubmFtZX0gLnNoaXAtd2Fnb25gXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHM7IGkrKykge1xyXG4gICAgICBzaGlwV2Fnb25zW2ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVlcENvcHlTaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICBsZXQgYXJyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG4gIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgW2FycltpXSwgYXJyW2pdXSA9IFthcnJbal0sIGFycltpXV07XHJcbiAgfVxyXG4gIHJldHVybiBhcnI7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9