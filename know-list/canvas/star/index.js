"use strict";
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = window.innerHeight,
  hue = 217,
  stars = [],
  count = 0,
  maxStars = 1200;

var canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
  gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#fff');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
}

var Star = function() {

  this.orbitRadius = random(maxOrbit(w, h));
  this.radius = random(60, this.orbitRadius) / 12;
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 900000;
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
    y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
    twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
  ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animation() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 0.8;
  ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
  ctx.fillRect(0, 0, w, h)

  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };

  window.requestAnimationFrame(animation);
}

animation();
//2015
var _p = 0;
function AutoTab() {
	var c;
	Dd('trades').onmouseover = function() {_p = 1;} 
	Dd('trades').onmouseout = function() {_p = 0;}
	if(_p) return;
	for(var i = 1; i < 4; i++) { if(Dd('trade_t_'+i).className == 'tab_2') {c = i;} }
	c++; 
	if(c > 3) c = 1;
	Tb(c, 3, 'trade', 'tab');
}
/*if(Dd('trades') != null) window.setInterval('AutoTab()',5000);*/
/*function ipad_tip_close() {
	Dh('ipad_tips');
	set_local('ipad_tips', 1);
}
if(Dd('ipad_tips') != null && UA.match(/(iphone|ipad|ipod)/i) && get_local('ipad_tips') != 1) {
	Ds('ipad_tips');
	Dd('ipad_tips').innerHTML = '<div class="ipad_tips_logo"><img src="'+DTPath+'apple-touch-icon-precomposed.png" width="50" height="50" alt=""/></div><div class="ipad_tips_text"><strong>鎶婃湰绔欐坊鍔犺嚦涓诲睆骞�</strong><br/>璇风偣鍑诲伐鍏锋爮涓婄殑<span class="ipad_tips_ico1"></span>鎴栬€�<span class="ipad_tips_ico2"></span>骞堕€夋嫨鈥滄坊鍔犱功绛锯€濇垨鑰呪€滄坊鍔犺嚦涓诲睆骞曗€濅究浜庝笅娆＄洿鎺ヨ闂€�</div><div class="ipad_tips_hide"><a href="javascript:ipad_tip_close();" class="ipad_tip_close" title="鍏抽棴骞朵笉鍐嶆彁绀�">&nbsp;</a></div><div class="c_b"></div>';
}*/