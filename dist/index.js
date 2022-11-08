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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"board\": () => (/* binding */ board),\n/* harmony export */   \"engine\": () => (/* binding */ engine),\n/* harmony export */   \"game\": () => (/* binding */ game),\n/* harmony export */   \"player\": () => (/* binding */ player),\n/* harmony export */   \"posx\": () => (/* binding */ posx),\n/* harmony export */   \"posy\": () => (/* binding */ posy)\n/* harmony export */ });\n/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/board */ \"./src/modules/board.ts\");\n/* harmony import */ var _modules_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/engine */ \"./src/modules/engine.ts\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.ts\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.ts\");\n/* harmony import */ var _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/usefulVariables */ \"./src/modules/usefulVariables.ts\");\n\r\n\r\n\r\n\r\n\r\nvar game;\r\nvar player;\r\nvar engine;\r\nvar board;\r\nvar posx = 10;\r\nvar posy = 128;\r\nwindow.onload = function () {\r\n    game = new _modules_game__WEBPACK_IMPORTED_MODULE_2__.Game();\r\n    board = new _modules_board__WEBPACK_IMPORTED_MODULE_0__.Board(_modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[0].id, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[0].hitboxes, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[0].exit, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[0].sx, _modules_usefulVariables__WEBPACK_IMPORTED_MODULE_4__.usefulVariables.boards[0].sy);\r\n    board.load();\r\n    player = new _modules_player__WEBPACK_IMPORTED_MODULE_3__.Player(250, 270);\r\n    engine = new _modules_engine__WEBPACK_IMPORTED_MODULE_1__.Engine();\r\n    engine.animate();\r\n    player.create();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/index.ts?");

/***/ }),

/***/ "./src/modules/board.ts":
/*!******************************!*\
  !*** ./src/modules/board.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\r\nvar Board = /** @class */ (function () {\r\n    function Board(id, hitboxes, exit, sx, sy) {\r\n        this.id = id;\r\n        this.hitboxes = hitboxes;\r\n        this.exit = exit;\r\n        this.sx = sx;\r\n        this.sy = sy;\r\n    }\r\n    Board.prototype.load = function () {\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.game.load(this.sx, this.sy);\r\n    };\r\n    return Board;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/board.ts?");

/***/ }),

/***/ "./src/modules/engine.ts":
/*!*******************************!*\
  !*** ./src/modules/engine.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Engine\": () => (/* binding */ Engine)\n/* harmony export */ });\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usefulVariables */ \"./src/modules/usefulVariables.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\r\n\r\nvar Engine = /** @class */ (function () {\r\n    function Engine() {\r\n        this.fps = 60;\r\n        this.front = \"right\";\r\n        this.move();\r\n    }\r\n    Engine.prototype.animate = function () {\r\n        var _this = this;\r\n        setTimeout(function () {\r\n            _index__WEBPACK_IMPORTED_MODULE_1__.game.load(_index__WEBPACK_IMPORTED_MODULE_1__.posx, _index__WEBPACK_IMPORTED_MODULE_1__.posy);\r\n            _index__WEBPACK_IMPORTED_MODULE_1__.player.create();\r\n            document.onkeydown = function (e) {\r\n                _this.pressedKey = e.key.toLocaleLowerCase();\r\n            };\r\n            document.onkeyup = function (e) {\r\n                _this.pressedKey = \"\";\r\n            };\r\n            requestAnimationFrame(_this.animate.bind(_this));\r\n        }, 1000 / this.fps);\r\n    };\r\n    Engine.prototype.move = function () {\r\n        var _this = this;\r\n        window.setInterval(function () {\r\n            if (_this.pressedKey === \"w\") {\r\n                console.log(\"góra\");\r\n                _index__WEBPACK_IMPORTED_MODULE_1__.player.posy -= _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n            }\r\n            if (_this.pressedKey === \"a\") {\r\n                console.log(\"lewo\");\r\n                if (_this.front === \"right\") {\r\n                    _this.front = \"left\";\r\n                }\r\n                _index__WEBPACK_IMPORTED_MODULE_1__.player.posx -= _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n            }\r\n            if (_this.pressedKey === \"s\") {\r\n                console.log(\"dol\");\r\n                _index__WEBPACK_IMPORTED_MODULE_1__.player.posy += _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n            }\r\n            if (_this.pressedKey === \"d\") {\r\n                console.log(\"prawo\");\r\n                if (_this.front === \"left\") {\r\n                    _this.front = \"right\";\r\n                }\r\n                _index__WEBPACK_IMPORTED_MODULE_1__.player.posx += _usefulVariables__WEBPACK_IMPORTED_MODULE_0__.usefulVariables.speed;\r\n            }\r\n            if (_this.pressedKey === \" \") {\r\n                console.log(\"strzał\");\r\n            }\r\n            console.log(_index__WEBPACK_IMPORTED_MODULE_1__.player.isColided(_index__WEBPACK_IMPORTED_MODULE_1__.board.hitboxes));\r\n        }, 1000 / this.fps);\r\n    };\r\n    return Engine;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/engine.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n/* harmony import */ var _usefulVariables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usefulVariables */ \"./src/modules/usefulVariables.ts\");\n\r\n\r\nvar Player = /** @class */ (function () {\r\n    function Player(posx, posy) {\r\n        this.width = 65;\r\n        this.height = 55;\r\n        this.playerimg = document.getElementById(\"player\");\r\n        this.playerimgflipped = document.getElementById(\"playerflipped\");\r\n        this.flipped = true;\r\n        this.posx = posx;\r\n        this.posy = posy;\r\n    }\r\n    Player.prototype.create = function () {\r\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.engine.front === \"right\") {\r\n            var ctx = _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.canvas.getContext('2d');\r\n            ctx.drawImage(this.playerimg, this.posx, this.posy, this.width, this.height);\r\n        }\r\n        else if (_index__WEBPACK_IMPORTED_MODULE_0__.engine.front === \"left\") {\r\n            var ctx = _usefulVariables__WEBPACK_IMPORTED_MODULE_1__.usefulVariables.canvas.getContext('2d');\r\n            ctx.drawImage(this.playerimgflipped, this.posx, this.posy, this.width, this.height);\r\n        }\r\n    };\r\n    Player.prototype.isColided = function (hitboxes) {\r\n        var _this = this;\r\n        console.log(this.posx + this.width);\r\n        return hitboxes.filter(function (hitbox) {\r\n            _this.posx + _this.width >= hitbox.start.posx;\r\n            //&&\r\n            // this.posx <= hitbox.end.posx &&\r\n            // this.posy + this.height >= hitbox.start.posy &&\r\n            // this.posy <= hitbox.end.posy\r\n        });\r\n    };\r\n    return Player;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/player.ts?");

/***/ }),

/***/ "./src/modules/usefulVariables.ts":
/*!****************************************!*\
  !*** ./src/modules/usefulVariables.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usefulVariables\": () => (/* binding */ usefulVariables)\n/* harmony export */ });\nvar usefulVariables = {\r\n    canvas: document.getElementById(\"playfield\"),\r\n    speed: 10,\r\n    boards: [\r\n        {\r\n            id: 0,\r\n            hitboxes: [\r\n                {\r\n                    start: {\r\n                        posx: 10,\r\n                        posy: 272\r\n                    },\r\n                    end: {\r\n                        posx: 330,\r\n                        posy: 256\r\n                    }\r\n                },\r\n                {\r\n                    start: {\r\n                        posx: 10,\r\n                        posy: 256\r\n                    },\r\n                    end: {\r\n                        posx: 26,\r\n                        posy: 128\r\n                    }\r\n                },\r\n                {\r\n                    start: {\r\n                        posx: 26,\r\n                        posy: 176\r\n                    },\r\n                    end: {\r\n                        posx: 330,\r\n                        posy: 128\r\n                    }\r\n                },\r\n                {\r\n                    start: {\r\n                        posx: 146,\r\n                        posy: 256\r\n                    },\r\n                    end: {\r\n                        posx: 330,\r\n                        posy: 224\r\n                    }\r\n                }\r\n            ],\r\n            exit: {\r\n                N: false,\r\n                S: false,\r\n                E: true,\r\n                W: false\r\n            },\r\n            sx: 10,\r\n            sy: 128\r\n        },\r\n        {\r\n            id: 1,\r\n            hitboxes: [\r\n                {\r\n                    start: {\r\n                        posx: 10,\r\n                        posy: 272\r\n                    },\r\n                    end: {\r\n                        posx: 10,\r\n                        posy: 272\r\n                    }\r\n                }\r\n            ],\r\n            exit: {\r\n                N: false,\r\n                S: false,\r\n                E: true,\r\n                W: true\r\n            },\r\n            sx: 330,\r\n            sy: 128\r\n        }\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://nadral-atari/./src/modules/usefulVariables.ts?");

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