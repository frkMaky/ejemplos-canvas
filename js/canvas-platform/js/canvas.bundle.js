/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var platform = crearImagen('./img/platform.jpg');
var hills = crearImagen('./img/hills.png');
var background = crearImagen('./img/background.png');
background.width = canvas.width;
background.height = canvas.height;

// Medidas del lienzo 
canvas.width = 1024;
canvas.height = 668;
var gravity = 0.8;

// Imagenes
function crearImagen(src) {
  var image = new Image();
  image.src = src;
  return image;
}

// Crear al jugador -----------------------------
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 500
    };
    this.width = 100;
    this.height = 150;
    this.velocity = {
      x: 0,
      y: 1 // Gravedad
    };
    this.image = crearImagen(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: crearImagen(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: crearImagen(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: crearImagen(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        left: crearImagen(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        cropWidth: 341,
        width: 126
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
      this.frames++;
      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right || this.frames > 59 && this.currentSprite === this.sprites.stand.left) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === this.sprites.run.right || this.frames > 29 && this.currentSprite === this.sprites.run.left) {
        this.frames = 0;
      }
    }
  }]);
  return Player;
}(); // Crear Plataformas -----------------------------
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.image.width = width;
    this.width = this.image.width;
    this.height = this.image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      //c.fillStyle = 'blue'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(this.image, this.position.x, this.position.y);
      c.closePath();
    }
  }]);
  return Platform;
}(); // Crear GenericObject -----------------------------
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      height = _ref2.height,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.image.width = width;
    this.image.height = height;
    this.width = this.image.width;
    this.height = this.image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      //c.fillStyle = 'blue'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(this.image, this.position.x, this.position.y);
      c.closePath();
    }
  }]);
  return GenericObject;
}(); //---------------------
var player = new Player();
var imagen = new Image();
imagen.src = platform.src;
var platform1 = new Platform({
  x: 20,
  y: canvas.height - 100,
  width: 200,
  image: imagen
});
var platform2 = new Platform({
  x: 320,
  y: canvas.height - 300,
  width: 200,
  image: imagen
});
var platform3 = new Platform({
  x: 320,
  y: canvas.height - 200,
  width: 200,
  image: imagen
});
var platform4 = new Platform({
  x: 920,
  y: canvas.height - 400,
  width: 200,
  image: imagen
});
var platform5 = new Platform({
  x: 1220,
  y: canvas.height - 500,
  width: 200,
  image: imagen
});
var platform6 = new Platform({
  x: 1500,
  y: canvas.height - 200,
  width: 200,
  image: imagen
});
var platform7 = new Platform({
  x: 1700,
  y: canvas.height - 400,
  width: 200,
  image: imagen
});
var platform8 = new Platform({
  x: 1900,
  y: canvas.height - 500,
  width: 200,
  image: imagen
});
var platforms = [platform1, platform2, platform4, platform3, platform5, platform6, platform7, platform8];
var genericObjects = [new GenericObject({
  x: 320,
  y: canvas.height - 200,
  width: 200,
  height: 100,
  image: hills
}), new GenericObject({
  x: 920,
  y: canvas.height - 300,
  width: 200,
  height: 100,
  image: hills
}), new GenericObject({
  x: 1500,
  y: canvas.height - 500,
  width: 200,
  height: 100,
  image: hills
}), new GenericObject({
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  image: background
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
function init() {
  genericObjects = [new GenericObject({
    x: 320,
    y: canvas.height - 200,
    width: 200,
    height: 100,
    image: hills
  }), new GenericObject({
    x: 920,
    y: canvas.height - 300,
    width: 200,
    height: 100,
    image: hills
  }), new GenericObject({
    x: 1500,
    y: canvas.height - 500,
    width: 200,
    height: 100,
    image: hills
  }), new GenericObject({
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    image: background
  })];
  platform1 = new Platform({
    x: 20,
    y: canvas.height - 100,
    width: 200,
    image: imagen
  });
  platform2 = new Platform({
    x: 320,
    y: canvas.height - 300,
    width: 200,
    image: imagen
  });
  platform3 = new Platform({
    x: 320,
    y: canvas.height - 200,
    width: 200,
    image: imagen
  });
  platform4 = new Platform({
    x: 920,
    y: canvas.height - 400,
    width: 200,
    image: imagen
  });
  platform5 = new Platform({
    x: 1220,
    y: canvas.height - 500,
    width: 200,
    image: imagen
  });
  platform6 = new Platform({
    x: 1500,
    y: canvas.height - 200,
    width: 200,
    image: imagen
  });
  platform7 = new Platform({
    x: 1700,
    y: canvas.height - 400,
    width: 200,
    image: imagen
  });
  platform8 = new Platform({
    x: 1900,
    y: canvas.height - 500,
    width: 200,
    image: imagen
  });
  platforms = [platform1, platform2, platform4, platform3, platform5, platform6, platform7, platform8];
  scrollOffset = 0;
  player = new Player();
  player.position.x = 100;
  player.position.y = 100;
}
function animate() {
  requestAnimationFrame(animate);

  // Limpiar pantalla
  c.fillStyle = 'rgba(255,255,255,1)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Dibujar objetos
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  // Dibujar plataformas
  platforms.forEach(function (platform) {
    platform.draw();
  });
  // Dibujar jugador
  player.update();
  // Teclado
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset == 0 && player.position.x > 0) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
    }
  }

  // Colisiones plataformas - jugadors
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  // WIN
  if (scrollOffset > 2000) {
    console.log('YOU WIN!!!');
  }
  // LOSE
  if (player.position.y + player.height >= canvas.height) {
    console.log('YOU LOSE');
    init();
  }
}
init();
animate();

// ----------------------
// Teclado
addEventListener('keydown', function (event) {
  /**
   * event.keyCode
   * W - 87
   * A - 65
   * S - 83
   * D - 68
   * space - 32
   */
  switch (event.keyCode) {
    case 87:
      // UP
      player.velocity.y -= 20; // gravity
      break;
    case 65:
      // LEFT
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 83:
      // DOWN
      break;
    case 68:
      // RIGHT
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;
    case 32:
      // SPACE BAR
      break;
  }
});
addEventListener('keyup', function (event) {
  /**
   * event.keyCode
   * W - 87
   * A - 65
   * S - 83
   * D - 68
   * space - 32
   */
  switch (event.keyCode) {
    case 87:
      // UP
      break;
    case 65:
      // LEFT
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 83:
      // DOWN
      break;
    case 68:
      // RIGHT
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;
    case 32:
      // SPACE BAR
      break;
  }
});
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map