/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var angle = 0;

// Event Listeners
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX - canvas.width / 2;
  mouse.y = event.clientY - canvas.height / 2;
  angle = Math.atan2(mouse.y, mouse.x);
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

// Objects
var Particle = /*#__PURE__*/function () {
  function Particle(x, y, radius, color, distFromCenter) {
    _classCallCheck(this, Particle);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.distFromCenter = distFromCenter;
  }
  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.x = center.x + this.distFromCenter * Math.cos(angle);
      this.y = center.y + this.distFromCenter * Math.sin(angle);
    }
  }]);
  return Particle;
}(); // Implementation
var particles;
function init() {
  particles = [];
  var particleCount = 200;
  var hueIncrement = 360 / particleCount;
  for (var i = 0; i < particleCount; i++) {
    var x = center.x + this.distFromCenter * Math.cos(this.distFromCenter);
    var y = center.y + this.distFromCenter * Math.sin(this.distFromCenter);
    var hue = 30;
    particles.push(new Particle(x, y, 5, "hsl(".concat(hueIncrement * i, ",100%,50%)"), i));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(0,0,0, 0.2)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(function (particle) {
    particle.update();
  });
}
init();
animate();
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map