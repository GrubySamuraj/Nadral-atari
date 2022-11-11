/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"engine\": () => (/* binding */ engine),\n/* harmony export */   \"game\": () => (/* binding */ game),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/board */ \"./src/modules/board.ts\");\n/* harmony import */ var _modules_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/engine */ \"./src/modules/engine.ts\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.ts\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.ts\");\n/* harmony import */ var _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/usefulVariables */ \"./src/modules/usefulVariables.ts\");\n\r\n\r\n\r\n\r\n\r\nvar game;\r\nvar player;\r\nvar engine;\r\nwindow.onload = function () {\r\n    game = new _modules_game__WEBPACK_IMPORTED_MODULE_2__.Game();\r\n    for (var x = 0; x < _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards.length; x++) {\r\n        var board = new _modules_board__WEBPACK_IMPORTED_MODULE_0__.Board(_modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[x].id, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[x].exit, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[x].sx, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[x].sy);\r\n        _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.map.push(board);\r\n    }\r\n    _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.loadedBoard = _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.map[0];\r\n    _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.loadedBoard.load();\r\n    player = new _modules_player__WEBPACK_IMPORTED_MODULE_3__.Player(250, 270);\r\n    engine = new _modules_engine__WEBPACK_IMPORTED_MODULE_1__.Engine();\r\n    engine.animate();\r\n    player.create();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/index.ts?");

/***/ }),

/***/ "./src/modules/board.ts":
/*!******************************!*\
  !*** ./src/modules/board.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\r\nvar Board = /** @class */ (function () {\r\n    function Board(id, exit, sx, sy) {\r\n        this.id = id;\r\n        this.exit = exit;\r\n        this.sx = sx;\r\n        this.sy = sy;\r\n    }\r\n    Board.prototype.load = function () {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.game.load(this.sx, this.sy);\r\n    };\r\n    return Board;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/board.ts?");

/***/ }),

/***/ "./src/modules/engine.ts":
/*!*******************************!*\
  !*** ./src/modules/engine.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Engine\": () => (/* binding */ Engine)\n/* harmony export */ });\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usefulVariables */ \"./src/modules/usefulVariables.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\r\n\r\nvar Engine = /** @class */ (function () {\r\n    function Engine() {\r\n        this.fps = 60;\r\n        this.front = \"right\";\r\n        this.move();\r\n    }\r\n    Engine.prototype.animate = function () {\r\n        var _this = this;\r\n        setTimeout(function () {\r\n            _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.map[_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedID].load();\r\n            _index__WEBPACK_IMPORTED_MODULE_1__.player.create();\r\n            document.onkeydown = function (e) {\r\n                _this.pressedKey = e.key.toLocaleLowerCase();\r\n            };\r\n            document.onkeyup = function (e) {\r\n                _this.pressedKey = \"\";\r\n            };\r\n            requestAnimationFrame(_this.animate.bind(_this));\r\n        }, 1000 / this.fps);\r\n    };\r\n    Engine.prototype.move = function () {\r\n        var _this = this;\r\n        this.interval = window.setInterval(function () {\r\n            // console.log(usefulVariables.loadedBoard);\r\n            if (!_index__WEBPACK_IMPORTED_MODULE_1__.player.isColided()) {\r\n                if (_index__WEBPACK_IMPORTED_MODULE_1__.player.posx > _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.width && _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.E) {\r\n                    _this.nextBoard(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.E, 0, _index__WEBPACK_IMPORTED_MODULE_1__.player.posy);\r\n                }\r\n                else if (_index__WEBPACK_IMPORTED_MODULE_1__.player.posx < 0 && _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.W + 1) {\r\n                    _this.nextBoard(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.W, _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.width - _index__WEBPACK_IMPORTED_MODULE_1__.player.width, _index__WEBPACK_IMPORTED_MODULE_1__.player.posy);\r\n                }\r\n                else if (_index__WEBPACK_IMPORTED_MODULE_1__.player.posy < 0 && _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.N) {\r\n                    _this.nextBoard(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.N, _index__WEBPACK_IMPORTED_MODULE_1__.player.posx, _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.height - _index__WEBPACK_IMPORTED_MODULE_1__.player.height);\r\n                }\r\n                else if (_index__WEBPACK_IMPORTED_MODULE_1__.player.posy > _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.height && _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.S) {\r\n                    _this.nextBoard(_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard.exit.S, _index__WEBPACK_IMPORTED_MODULE_1__.player.posx, 0);\r\n                }\r\n                else {\r\n                    if (_this.pressedKey === \"w\") {\r\n                        _index__WEBPACK_IMPORTED_MODULE_1__.player.posy -= _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n                    }\r\n                    if (_this.pressedKey === \"a\") {\r\n                        if (_this.front === \"right\") {\r\n                            _this.front = \"left\";\r\n                        }\r\n                        _index__WEBPACK_IMPORTED_MODULE_1__.player.posx -= _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n                    }\r\n                    if (_this.pressedKey === \"s\") {\r\n                        _index__WEBPACK_IMPORTED_MODULE_1__.player.posy += _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n                    }\r\n                    if (_this.pressedKey === \"d\") {\r\n                        if (_this.front === \"left\") {\r\n                            _this.front = \"right\";\r\n                        }\r\n                        _index__WEBPACK_IMPORTED_MODULE_1__.player.posx += _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n                    }\r\n                    if (_this.pressedKey === \" \") {\r\n                        console.log(\"strzał\");\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                _this.lost(_this.interval);\r\n            }\r\n        }, 1000 / this.fps);\r\n    };\r\n    Engine.prototype.nextBoard = function (id, posx, posy) {\r\n        //wyłączenie kolizji na chwile\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.player.posx = posx;\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.player.posy = posy;\r\n        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedID = id;\r\n        _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedBoard = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.map[_usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.loadedID];\r\n    };\r\n    Engine.prototype.lost = function (interwal) {\r\n        window.clearInterval(interwal);\r\n        alert(\"przegrałeś ;<\");\r\n        location.reload();\r\n    };\r\n    return Engine;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/engine.ts?");

/***/ }),

/***/ "./src/modules/game.ts":
/*!*****************************!*\
  !*** ./src/modules/game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usefulVariables */ \"./src/modules/usefulVariables.ts\");\n\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        this.width = 320;\r\n        this.height = 144;\r\n        this.image = document.getElementById(\"sprite\");\r\n    }\r\n    Game.prototype.create = function () {\r\n    };\r\n    Game.prototype.load = function (sx, sy) {\r\n        var ctx = _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.getContext('2d');\r\n        ctx.drawImage(this.image, sx, sy, this.width, this.height, 0, 0, _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.width, _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.canvas.height);\r\n    };\r\n    return Game;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/game.ts?");

/***/ }),

/***/ "./src/modules/player.ts":
/*!*******************************!*\
  !*** ./src/modules/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usefulVariables */ \"./src/modules/usefulVariables.ts\");\n\r\n\r\n//zadanie 12.11 - interface u góry i na dole\r\nvar Player = /** @class */ (function () {\r\n    function Player(posx, posy) {\r\n        this.width = 65;\r\n        this.height = 55;\r\n        this.playerimg = document.getElementById(\"player\");\r\n        this.playerimgflipped = document.getElementById(\"playerflipped\");\r\n        this.whiteList = [\"#000000\"];\r\n        this.flipped = true;\r\n        this.posx = posx;\r\n        this.posy = posy;\r\n    }\r\n    Player.prototype.create = function () {\r\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.engine.front === \"right\") {\r\n            var ctx = _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.canvas.getContext('2d');\r\n            ctx.drawImage(this.playerimg, this.posx, this.posy, this.width, this.height);\r\n        }\r\n        else if (_index__WEBPACK_IMPORTED_MODULE_0__.engine.front === \"left\") {\r\n            var ctx = _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.canvas.getContext('2d');\r\n            ctx.drawImage(this.playerimgflipped, this.posx, this.posy, this.width, this.height);\r\n        }\r\n    };\r\n    Player.prototype.isColided = function () {\r\n        var c = _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.canvas.getContext('2d');\r\n        var za = c.getImageData(this.posx + this.width, this.posy + this.height, 1, 1).data;\r\n        var przed = c.getImageData(this.posx, this.posy, 1, 1).data;\r\n        var hex = \"#\" + (\"000000\" + this.rgbToHex(za[0], za[1], za[2])).slice(-6);\r\n        var hex2 = \"#\" + (\"000000\" + this.rgbToHex(przed[0], przed[1], przed[2])).slice(-6);\r\n        console.log(hex, hex2);\r\n        if (!this.whiteList.includes(hex) || !this.whiteList.includes(hex2)) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    Player.prototype.rgbToHex = function (r, g, b) {\r\n        return ((r << 16) | (g << 8) | b).toString(16);\r\n    };\r\n    return Player;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/player.ts?");

/***/ }),

/***/ "./src/modules/usefulVariables.ts":
/*!****************************************!*\
  !*** ./src/modules/usefulVariables.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usefulVariables\": () => (/* binding */ usefulVariables)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/modules/board.ts\");\n\r\nvar usefulVariables = {\r\n    canvas: document.getElementById(\"playfield\"),\r\n    speed: 10,\r\n    boards: [\r\n        {\r\n            id: 0,\r\n            exit: {\r\n                N: null,\r\n                S: null,\r\n                E: 1,\r\n                W: null\r\n            },\r\n            sx: 10,\r\n            sy: 128\r\n        },\r\n        {\r\n            id: 1,\r\n            exit: {\r\n                N: null,\r\n                S: null,\r\n                E: 2,\r\n                W: 0\r\n            },\r\n            sx: 330,\r\n            sy: 128\r\n        },\r\n        {\r\n            id: 2,\r\n            exit: {\r\n                N: null,\r\n                S: null,\r\n                E: 3,\r\n                W: 1\r\n            },\r\n            sx: 650,\r\n            sy: 128\r\n        },\r\n        {\r\n            id: 3,\r\n            exit: {\r\n                N: null,\r\n                S: 4,\r\n                E: null,\r\n                W: 2\r\n            },\r\n            sx: 970,\r\n            sy: 128\r\n        },\r\n        {\r\n            id: 4,\r\n            exit: {\r\n                N: 3,\r\n                S: null,\r\n                E: null,\r\n                W: 5\r\n            },\r\n            sx: 970,\r\n            sy: 272\r\n        },\r\n        {\r\n            id: 5,\r\n            exit: {\r\n                N: null,\r\n                S: 10,\r\n                E: 4,\r\n                W: 6\r\n            },\r\n            sx: 650,\r\n            sy: 272\r\n        },\r\n        {\r\n            id: 6,\r\n            exit: {\r\n                N: null,\r\n                S: 9,\r\n                E: 5,\r\n                W: 7\r\n            },\r\n            sx: 330,\r\n            sy: 272\r\n        },\r\n        {\r\n            id: 7,\r\n            exit: {\r\n                N: null,\r\n                S: 8,\r\n                E: 6,\r\n                W: null\r\n            },\r\n            sx: 10,\r\n            sy: 272\r\n        },\r\n        {\r\n            id: 8,\r\n            exit: {\r\n                N: 7,\r\n                S: null,\r\n                E: 9,\r\n                W: null\r\n            },\r\n            sx: 10,\r\n            sy: 416\r\n        },\r\n        {\r\n            id: 9,\r\n            exit: {\r\n                N: 6,\r\n                S: null,\r\n                E: null,\r\n                W: 8\r\n            },\r\n            sx: 330,\r\n            sy: 416\r\n        },\r\n        {\r\n            id: 10,\r\n            exit: {\r\n                N: 5,\r\n                S: null,\r\n                E: null,\r\n                W: null\r\n            },\r\n            sx: 650,\r\n            sy: 416\r\n        },\r\n        {\r\n            id: 11,\r\n            exit: {\r\n                N: null,\r\n                S: null,\r\n                E: null,\r\n                W: 10\r\n            },\r\n            sx: 970,\r\n            sy: 416\r\n        }\r\n    ],\r\n    loadedBoard: new _board__WEBPACK_IMPORTED_MODULE_0__.Board(0, { N: null, S: null, E: 1, W: null }, 10, 128),\r\n    StartPosx: 10,\r\n    StartPosy: 128,\r\n    loadedID: 0,\r\n    map: []\r\n};\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/usefulVariables.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;