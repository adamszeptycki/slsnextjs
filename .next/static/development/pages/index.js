((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
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

/***/ "./node_modules/react-particles-js/lib/particles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-particles-js/lib/particles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=5)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CIRCLE="circle",e.EDGE="edge",e.TRIANGLE="triangle",e.POLYGON="polygon",e.STAR="star",e.IMAGE="image",e.IMAGES="images"}(t.ShapeType||(t.ShapeType={})),function(e){e.TOP="top",e.TOP_RIGHT="top-right",e.RIGHT="right",e.BOTTOM_RIGHT="bottom-right",e.BOTTOM="bottom",e.BOTTOM_LEFT="bottom-left",e.LEFT="left",e.TOP_LEFT="top-left",e.NONE="none"}(t.MoveDirection||(t.MoveDirection={})),function(e){e.BOUNCE="bounce",e.OUT="out"}(t.MoveOutMode||(t.MoveOutMode={})),function(e){e.GRAB="grab",e.PUSH="push",e.REMOVE="remove",e.BUBBLE="bubble",e.REPULSE="repulse"}(t.InteractivityMode||(t.InteractivityMode={})),function(e){e.INLINE="inline",e.INSIDE="inside",e.OUTSIDE="outside"}(t.PolygonType||(t.PolygonType={})),function(e){e.RANDOM_POINT="random-point",e.ONE_PER_POINT="one-per-point",e.RANDOM_LENGTH="random-length",e.EQUIDISTANT="equidistant"}(t.PolygonInlineArrangementType||(t.PolygonInlineArrangementType={})),function(e){e.PATH="path",e.RADIUS="radius"}(t.PolygonMoveType||(t.PolygonMoveType={}))},function(e,t,i){"use strict";function a(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}Object.defineProperty(t,"__esModule",{value:!0});var n=i(4);t.Interactivity=n.default;var r=i(7);t.Modes=r.default;var o=i(8);t.Particle=o.default;var s=i(9);t.ParticleManager=s.default;var l=i(10);t.ParticlesLibrary=l.default;var c=i(12);t.Vendors=c.default,a(i(13)),a(i(0)),a(i(14)),a(i(2))},function(e,t,i){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){return t.indexOf(e)>-1}Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,i,a){return t+t+i+i+a+a});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},t.clamp=function(e,t,i){return Math.min(Math.max(e,t),i)},t.isInArray=n,t.isEqual=function(e,t){return Array.isArray(t)?n(e,t):t===e},t.deepAssign=function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];for(var o=0;o<n.length;o++){var s=n[o];if(void 0!==s&&null!==s)if("object"===a(s)){Array.isArray(s)?"object"===a(e)&&e&&Array.isArray(e)||(e=[]):"object"===a(e)&&e&&!Array.isArray(e)||(e={});var l=function(i){if("__proto__"===i)return"continue";var n=s[i],r="object"===a(n);r&&Array.isArray(n)?e[i]=n.map(function(a){return t.deepAssign(e[i],a)}):e[i]=t.deepAssign(e[i],n)};for(var c in s)l(c)}else e=s}return e},t.getColor=function(e){var i={};if("object"==a(e))if(e instanceof Array){var n=e[Math.floor(Math.random()*e.length)];i.rgb=t.hexToRgb(n)}else{var r=e.r,o=e.g,s=e.b;if(void 0!==r&&void 0!==o&&void 0!==s)i.rgb={r:r,g:o,b:s};else{var l=e.h,c=e.s,h=e.l;void 0!==l&&void 0!==o&&void 0!==s&&(i.hsl={h:l,s:c,l:h})}}else"random"==e?i.rgb={r:Math.floor(255*Math.random())+1,g:Math.floor(255*Math.random())+1,b:Math.floor(255*Math.random())+1}:"string"==typeof e&&(i.rgb=t.hexToRgb(e));return i}},function(t,i){t.exports=e},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n,r=i(0);!function(e){e.MOUSEMOVE="mousemove",e.MOUSELEAVE="mouseleave"}(n=t.MouseInteractivityStatus||(t.MouseInteractivityStatus={}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.mouseMovePosition={x:0,y:0},this.mouseClickPosition={x:0,y:0},this.mouseClickTime=0,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseClick=this.onMouseClick.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"attachEventHandlers",value:function(){var e=this.library.getParameter(function(e){return e.interactivity});"window"===e.detect_on?this.interactionElement=window:this.interactionElement=this.library.canvas.element,(e.events.onhover.enable||e.events.onclick.enable)&&(this.interactionElement.addEventListener("mousemove",this.onMouseMove),this.interactionElement.addEventListener("mouseleave",this.onMouseLeave)),e.events.onclick.enable&&this.interactionElement.addEventListener("click",this.onMouseClick)}},{key:"detachEventHandlers",value:function(){var e=this.library.getParameter(function(e){return e.interactivity});this.interactionElement&&((e.events.onhover.enable||e.events.onclick.enable)&&(this.interactionElement.removeEventListener("mousemove",this.onMouseMove),this.interactionElement.removeEventListener("mouseleave",this.onMouseLeave)),e.events.onclick.enable&&this.interactionElement.removeEventListener("click",this.onMouseClick))}},{key:"onMouseMove",value:function(e){var t={x:0,y:0};this.interactionElement===window?(t.x=e.clientX,t.y=e.clientY):(t.x=e.offsetX||e.clientX,t.y=e.offsetY||e.clientY),this.mouseMovePosition=t,this.library.retina&&(this.mouseMovePosition.x*=this.library.canvas.pxratio,this.mouseMovePosition.y*=this.library.canvas.pxratio),this.mouseStatus=n.MOUSEMOVE}},{key:"onMouseLeave",value:function(){this.mouseMovePosition.x=0,this.mouseMovePosition.y=0,this.mouseStatus=n.MOUSELEAVE}},{key:"onMouseClick",value:function(){var e=this,t=this.library.getParameter(function(e){return e.interactivity}),i=this.library.getParameter(function(e){return e.particles}),a=this.library.getParameter(function(e){return e.polygon});if(this.mouseClickPosition=Object.assign({},this.mouseMovePosition),a.enable&&[r.PolygonType.INSIDE,r.PolygonType.OUTSIDE].indexOf(a.type)>-1){var n=this.library.polygonMask.isPointInsidePolygon(this.mouseClickPosition);if(a.type===r.PolygonType.INSIDE&&!n)return;if(a.type===r.PolygonType.OUTSIDE&&n)return}if(this.mouseClickTime=(new Date).getTime(),t.events.onclick.enable)switch(t.events.onclick.mode){case r.InteractivityMode.PUSH:i.move.enable?this.library.modes.pushParticles(t.modes.push.particles_nb,this.mouseClickPosition):1==t.modes.push.particles_nb?this.library.modes.pushParticles(t.modes.push.particles_nb,this.mouseClickPosition):t.modes.push.particles_nb>1&&this.library.modes.pushParticles(t.modes.push.particles_nb);break;case r.InteractivityMode.REMOVE:this.library.modes.removeParticles(t.modes.remove.particles_nb);break;case r.InteractivityMode.BUBBLE:this.library.modes.bubble_clicking=!0;break;case r.InteractivityMode.REPULSE:this.library.modes.repulse_clicking=!0,this.library.modes.repulse_count=0,this.library.modes.repulse_finish=!1,setTimeout(function(){e.library.modes.repulse_clicking=!1},1e3*t.modes.repulse.duration)}}},{key:"linkParticles",value:function(e,t){var i=this.library.manager.getDistance(e,t),a=this.library.canvas,n=this.library.getParameter(function(e){return e.particles.line_linked});if(i<=n.distance){var r=n.opacity-i/(1/n.opacity)/n.distance;if(r>0){var o=n.color_rgb_line,s=o.r,l=o.g,c=o.b;a.ctx.save(),a.ctx.strokeStyle="rgba( ".concat(s,", ").concat(l,", ").concat(c,", ").concat(r," )"),a.ctx.lineWidth=n.width,a.ctx.beginPath(),n.shadow.enable&&(a.ctx.shadowBlur=n.shadow.blur,a.ctx.shadowColor=n.shadow.color),a.ctx.moveTo(e.x,e.y),a.ctx.lineTo(t.x,t.y),a.ctx.stroke(),a.ctx.closePath(),a.ctx.restore()}}}},{key:"attractParticles",value:function(e,t){var i=this.library.manager.getDistances(e,t),a=i.distance,n=i.distanceX,r=i.distanceY,o=this.library.getParameter(function(e){return e.particles.line_linked}),s=this.library.getParameter(function(e){return e.particles.move.attract});if(a<=o.distance){var l=n/(1e3*s.rotateX),c=r/(1e3*s.rotateY);e.vx-=l,e.vy-=c,t.vx+=l,t.vy+=c}}},{key:"bounceParticles",value:function(e,t){this.library.manager.getDistance(e,t)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)}}]),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(6);t.Particles=a.default,t.default=a.default},function(e,t,i){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,i){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(a){var n=Object.getOwnPropertyDescriptor(a,t);return n.get?n.get.call(i):n.value}})(e,t,i||e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(t,"__esModule",{value:!0});var c=i(3),h=i(3),u=i(1),y=function(e){function t(e){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(i=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?l(e):t}(this,o(t).call(this,e))).state={canvas:void 0,library:void 0},i.loadCanvas=i.loadCanvas.bind(l(l(i))),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,h.Component),function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(t,[{key:"buildParticlesLibrary",value:function(e){try{if(void 0===window)return null}catch(e){return null}return new u.ParticlesLibrary(e)}},{key:"refresh",value:function(e){var t=this;this.state.canvas&&(this.destroy(),this.setState({library:this.buildParticlesLibrary(e.params)},function(){t.loadCanvas(t.state.canvas)}))}},{key:"destroy",value:function(){this.state.library.destroy()}},{key:"loadCanvas",value:function(e){var t=this;e&&this.setState({canvas:e},function(){t.state.library.loadCanvas(t.state.canvas),t.state.library.start()})}},{key:"shouldComponentUpdate",value:function(e){return e!==this.props}},{key:"componentDidUpdate",value:function(){this.refresh(this.props)}},{key:"forceUpdate",value:function(){this.refresh(this.props),r(o(t.prototype),"forceUpdate",this).call(this)}},{key:"componentDidMount",value:function(){this.setState({library:this.buildParticlesLibrary(this.props.params)})}},{key:"componentWillUnmount",value:function(){this.destroy(),this.setState({library:void 0})}},{key:"render",value:function(){var e=this.props,t=e.width,i=e.height,a=e.className,n=e.canvasClassName;return c.createElement("div",{className:a},c.createElement("canvas",{ref:this.loadCanvas,className:n,style:Object.assign({},this.props.style,{width:t,height:i})}))}}]),t}();y.defaultProps={width:"100%",height:"100%",params:{},style:{}},t.default=y},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=i(4),s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.bubble_clicking=!1,this.bubble_duration_end=!1,this.pushing=!1,this.repulse_clicking=!1,this.repulse_count=0,this.repulse_finish=!1}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"pushParticles",value:function(e,t){var i=this.library.manager,a=this.library.getParameter(function(e){return e.particles});this.pushing=!0;for(var r=0;r<e;r++)a.array.push(new n.Particle(this.library,{position:t})),r===e-1&&(a.move.enable||i.particlesDraw(),this.pushing=!1)}},{key:"removeParticles",value:function(e){var t=this.library.manager,i=this.library.getParameter(function(e){return e.particles});i.array.splice(0,e),i.move.enable||t.particlesDraw()}},{key:"bubbleParticle",value:function(e){var t=this,i=this.library.getParameter(function(e){return e.interactivity}),a=this.library.getParameter(function(e){return e.particles});if(i.events.onhover.enable&&n.isInArray(r.InteractivityMode.BUBBLE,i.events.onhover.mode)){var s=this.library.manager.getDistance(e,this.library.interactivity.mouseMovePosition),l=i.modes.bubble.distance,c=1-s/l;if(s<=l){if(c>=0&&this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSEMOVE){var h=i.modes.bubble.size,u=a.size.value;if(h!=u)if(h>u){var y=e.radius+h*c;y>=0&&(e.radius_bubble=y)}else{var v=e.radius-h,p=e.radius-v*c;e.radius_bubble=p>0?p:0}if(i.modes.bubble.opacity!==a.opacity.value)if(i.modes.bubble.opacity>a.opacity.value){var d=i.modes.bubble.opacity*c;d>e.opacityValue&&d<=i.modes.bubble.opacity&&(e.bubbleOpacity=d)}else{var g=e.opacityValue-(a.opacity.value-i.modes.bubble.opacity)*c;g<e.opacityValue&&g>=i.modes.bubble.opacity&&(e.bubbleOpacity=g)}}}else e.bubbleOpacity=e.opacityValue,e.radius_bubble=e.radius;this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSELEAVE&&(e.bubbleOpacity=e.opacityValue,e.radius_bubble=e.radius)}else if(i.events.onclick.enable&&n.isInArray(r.InteractivityMode.BUBBLE,i.events.onclick.mode)&&this.bubble_clicking){var b=this.library.manager.getDistance(e,this.library.interactivity.mouseClickPosition),f=((new Date).getTime()-this.library.interactivity.mouseClickTime)/1e3;f>i.modes.bubble.duration&&(this.bubble_duration_end=!0),f>2*i.modes.bubble.duration&&(this.bubble_clicking=!1,this.bubble_duration_end=!1);var m=function(a,n,r,o,s){if(a!=n)if(t.bubble_duration_end){if(void 0!=r){var l=a+(a-(o-f*(o-a)/i.modes.bubble.duration));"size"==s&&(e.radius_bubble=l),"opacity"==s&&(e.bubbleOpacity=l)}}else if(b<=i.modes.bubble.distance){if((void 0!=r?r:o)!=a){var c=o-f*(o-a)/i.modes.bubble.duration;"size"==s&&(e.radius_bubble=c),"opacity"==s&&(e.bubbleOpacity=c)}}else"size"==s&&(e.radius_bubble=void 0),"opacity"==s&&(e.bubbleOpacity=void 0)};this.bubble_clicking&&(m(i.modes.bubble.size,a.size.value,e.radius_bubble,e.radius,"size"),m(i.modes.bubble.opacity,a.opacity.value,e.bubbleOpacity,e.opacityValue,"opacity"))}}},{key:"repulseParticle",value:function(e){var t=this.library.canvas,i=this.library.getParameter(function(e){return e.interactivity}),a=this.library.getParameter(function(e){return e.particles});if(i.events.onhover.enable&&n.isInArray(r.InteractivityMode.REPULSE,i.events.onhover.mode)&&this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSEMOVE){var s=this.library.manager.getDistances(e,this.library.interactivity.mouseMovePosition),l=s.distance,c={x:s.distanceX/l,y:s.distanceY/l},h=i.modes.repulse.distance,u=n.clamp(1/h*(-1*Math.pow(l/h,2)+1)*h*100,0,50),y={x:e.x+c.x*u,y:e.y+c.y*u};a.move.out_mode===r.MoveOutMode.BOUNCE?(y.x-e.radius>0&&y.x+e.radius<t.width&&(e.x=y.x),y.y-e.radius>0&&y.y+e.radius<t.height&&(e.y=y.y)):(e.x=y.x,e.y=y.y)}else if(i.events.onclick.enable&&n.isInArray(r.InteractivityMode.REPULSE,i.events.onclick.mode))if(this.repulse_finish||(this.repulse_count++,this.repulse_count==a.array.length&&(this.repulse_finish=!0)),this.repulse_clicking){var v=Math.pow(i.modes.repulse.distance/6,3),p=this.library.manager.getDistances(this.library.interactivity.mouseClickPosition,e),d=p.distance,g=p.distanceX,b=p.distanceY,f=-1*(v/Math.pow(d,2));if(d<=v){var m=Math.atan2(b,g);if(e.vx=f*Math.cos(m),e.vy=f*Math.sin(m),a.move.out_mode===r.MoveOutMode.BOUNCE){var P={x:e.x+e.vx,y:e.y+e.vy};P.x+e.radius>t.width?e.vx=-e.vx:P.x-e.radius<0&&(e.vx=-e.vx),P.y+e.radius>t.height?e.vy=-e.vy:P.y-e.radius<0&&(e.vy=-e.vy)}}}else!1===this.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)}},{key:"grabParticle",value:function(e){var t=this.library.canvas,i=this.library.getParameter(function(e){return e}),a=i.interactivity,n=i.particles;if(a.events.onhover.enable&&this.library.interactivity.mouseStatus===o.MouseInteractivityStatus.MOUSEMOVE){var r=this.library.manager.getDistance(e,this.library.interactivity.mouseMovePosition);if(r<=a.modes.grab.distance){var s=a.modes.grab,l=s.line_linked.opacity-r/(1/s.line_linked.opacity)/s.distance;if(l>0){var c=n.line_linked.color_rgb_line,h=c.r,u=c.g,y=c.b;t.ctx.strokeStyle="rgba( ".concat(h,", ").concat(u,", ").concat(y,", ").concat(l," )"),t.ctx.lineWidth=n.line_linked.width,t.ctx.beginPath(),t.ctx.moveTo(e.x,e.y),t.ctx.lineTo(this.library.interactivity.mouseMovePosition.x,this.library.interactivity.mouseMovePosition.y),t.ctx.stroke(),t.ctx.closePath()}}}}}]),e}();t.default=s},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=i(2),s=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.color,n=i.move,r=i.opacity,o=i.polygon,s=i.position,l=i.shape,c=i.size;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.setupSize(c),this.setupPosition(n,o,s),this.setupColor(a),this.setupOpacity(r),this.setupAnimation(n),this.setupShape(l)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"setupSize",value:function(e){var t=this.library.getParameter(function(e){return e.particles.size});e=o.deepAssign({},t,e),this.radius=(e.random?Math.random():1)*e.value,e.anim.enable&&(this.size_status=!1,this.vs=e.anim.speed/100,e.anim.sync||(this.vs=this.vs*Math.random()))}},{key:"setupPosition",value:function(e,t,i){this.initialPosition=i;var a=this.library.getParameter(function(e){return e.particles.move});e=o.deepAssign({},a,e);var n=this.library.getParameter(function(e){return e.polygon});t=o.deepAssign({},n,t);var s=this.library.getParameter(function(e){return e.particles.array}),l=this.library,c=l.canvas,h=l.vendors;if(i)this.x=i.x,this.y=i.y;else if(t.enable){var u;switch(t.type){case r.PolygonType.INLINE:switch(t.inline.arrangement){case r.PolygonInlineArrangementType.RANDOM_POINT:u=this.library.polygonMask.getRandomPointOnPolygonPath();break;case r.PolygonInlineArrangementType.RANDOM_LENGTH:u=this.library.polygonMask.getRandomPointOnPolygonPathByLength();break;case r.PolygonInlineArrangementType.EQUIDISTANT:u=this.library.polygonMask.getEquidistantPoingOnPolygonPathByIndex(s.length);break;case r.PolygonInlineArrangementType.ONE_PER_POINT:default:u=this.library.polygonMask.getPoingOnPolygonPathByIndex(s.length)}break;case r.PolygonType.INSIDE:u=this.library.polygonMask.getRandomPointInsidePolygonPath();break;case r.PolygonType.OUTSIDE:u=this.library.polygonMask.getRandomPointOutsidePolygonPath()}u&&(this.x=u.x,this.y=u.y,this.initialPosition={x:this.x,y:this.y})}void 0!==this.x&&void 0!==this.y||(this.x=Math.random()*c.width,this.y=Math.random()*c.height),this.x>c.width-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>c.height-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),e.bounce&&h.checkOverlap(this,{x:this.x,y:this.y})}},{key:"setupColor",value:function(e){var t=this.library.getParameter(function(e){return e.particles.color});e=o.deepAssign({},e,t),this.color=n.getColor(e.value)}},{key:"setupOpacity",value:function(e){var t=this.library.getParameter(function(e){return e.particles.opacity});e=o.deepAssign({},t,e),this.opacityValue=(e.random?Math.random():1)*e.value,e.anim.enable&&(this.opacity_status=!1,this.vo=e.anim.speed/100,e.anim.sync||(this.vo=this.vo*Math.random()))}},{key:"setupAnimation",value:function(e){var t,i=this.library.getParameter(function(e){return e.particles.move});switch((e=o.deepAssign({},i,e)).direction){case r.MoveDirection.TOP:t={x:0,y:-1};break;case r.MoveDirection.TOP_RIGHT:t={x:.5,y:-.5};break;case r.MoveDirection.RIGHT:t={x:1,y:0};break;case r.MoveDirection.BOTTOM_RIGHT:t={x:.5,y:.5};break;case r.MoveDirection.BOTTOM:t={x:0,y:1};break;case r.MoveDirection.BOTTOM_LEFT:t={x:-.5,y:1};break;case r.MoveDirection.LEFT:t={x:-1,y:0};break;case r.MoveDirection.TOP_LEFT:t={x:-.5,y:-.5};break;default:t={x:0,y:0}}e.straight?(this.vx=t.x,this.vy=t.y,e.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=t.x+Math.random()-.5,this.vy=t.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy}},{key:"setupShape",value:function(e){var t=this,i=this.library.getParameter(function(e){return e.particles.shape});e=o.deepAssign({},i,e);var a=this.library.getParameter(function(e){return e.particles.array});if(Array.isArray(e.type)){var n=e.type[Math.floor(Math.random()*e.type.length)];e=o.deepAssign({},e,{type:n})}this.shape=e,e.type!==r.ShapeType.IMAGE&&e.type!==r.ShapeType.IMAGES||(e.type===r.ShapeType.IMAGES?this.shapeImage=this.library.imageManager.getImage(a.length):this.shapeImage=this.library.imageManager.getImage(),"svg"===this.shapeImage.type&&void 0!==this.shapeImage.svgData&&this.library.imageManager.createSvgImage(this.shapeImage.svgData,{color:this.color,opacity:this.opacityValue}).then(function(e){t.shapeImage.elementData=e,t.shapeImage.loaded=!0}))}},{key:"draw",value:function(){var e,t,i,a=this.library,n=a.canvas,o=a.vendors;if(e=void 0!==this.radius_bubble?this.radius_bubble:this.radius,t=void 0!==this.bubbleOpacity?this.bubbleOpacity:this.opacityValue,this.color.rgb){var s=this.color.rgb,l=s.r,c=s.g,h=s.b;i="rgba( ".concat(l,", ").concat(c,", ").concat(h,", ").concat(t," )")}else{var u=this.color.hsl,y=u.h,v=u.s,p=u.l;i="hsla( ".concat(y,", ").concat(v,", ").concat(p,", ").concat(t," )")}switch(n.ctx.fillStyle=i,n.ctx.beginPath(),this.shape.type){case r.ShapeType.CIRCLE:n.ctx.arc(this.x,this.y,e,0,2*Math.PI,!1);break;case r.ShapeType.EDGE:n.ctx.rect(this.x-e,this.y-e,2*e,2*e);break;case r.ShapeType.TRIANGLE:o.drawShape(n.ctx,this.x-e,this.y+e/1.66,2*e,3,2);break;case r.ShapeType.POLYGON:o.drawShape(n.ctx,this.x-e/(this.shape.polygon.nb_sides/3.5),this.y-e/.76,2.66*e/(this.shape.polygon.nb_sides/3),this.shape.polygon.nb_sides,1);break;case r.ShapeType.STAR:o.drawShape(n.ctx,this.x-2*e/(this.shape.polygon.nb_sides/4),this.y-e/1.52,2*e*2.66/(this.shape.polygon.nb_sides/3),this.shape.polygon.nb_sides,2);break;case r.ShapeType.IMAGES:case r.ShapeType.IMAGE:this.shapeImage.elementData&&n.ctx.drawImage(this.shapeImage.elementData,this.x-e,this.y-e,2*e,2*e/this.shapeImage.ratio)}n.ctx.closePath(),this.shape.stroke.width>0&&(n.ctx.strokeStyle=this.shape.stroke.color,n.ctx.lineWidth=this.shape.stroke.width,n.ctx.stroke()),n.ctx.fill()}}]),e}();t.default=s},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.particlesCreate=this.particlesCreate.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"particlesCreate",value:function(){var e=this.library.getParameter(function(e){return e.particles}),t=this.library.getParameter(function(e){return e.polygon}),i=e.number.value;t.enable&&t.type===r.PolygonType.INLINE&&t.inline.arrangement===r.PolygonInlineArrangementType.ONE_PER_POINT&&(i=this.library.polygonMask.getVerticesNumber());for(var a=0;a<i;a++)e.array.push(new n.Particle(this.library))}},{key:"particlesUpdate",value:function(){var e=this,t=this.library,i=t.canvas,a=t.modes,o=this.library.getParameter(function(e){return e.interactivity}),s=this.library.getParameter(function(e){return e.particles}),l=this.library.getParameter(function(e){return e.polygon});s.array.forEach(function(t,c){if(s.move.enable){var h=s.move.speed/2;t.x+=t.vx*h,t.y+=t.vy*h}var u;switch(s.opacity.anim.enable&&(1==t.opacity_status?(t.opacityValue>=s.opacity.value&&(t.opacity_status=!1),t.opacityValue+=t.vo):(t.opacityValue<=s.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacityValue-=t.vo),t.opacityValue<0&&(t.opacityValue=0)),s.size.anim.enable&&(1==t.size_status?(t.radius>=s.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=s.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),u="bounce"==s.move.out_mode?{x_left:t.radius,x_right:i.width,y_top:t.radius,y_bottom:i.height}:{x_left:-t.radius,x_right:i.width+t.radius,y_top:-t.radius,y_bottom:i.height+t.radius},t.x-t.radius>i.width?(t.x=u.x_left,t.y=Math.random()*i.height):t.x+t.radius<0&&(t.x=u.x_right,t.y=Math.random()*i.height),t.y-t.radius>i.height?(t.y=u.y_top,t.x=Math.random()*i.width):t.y+t.radius<0&&(t.y=u.y_bottom,t.x=Math.random()*i.width),s.move.out_mode){case"bounce":if(l.enable){var y=l.move.radius;switch(l.type){case r.PolygonType.INLINE:e.getDistance(t.initialPosition,t)>y&&(t.vx=-t.vx+t.vy/2,t.vy=-t.vy+t.vx/2);break;case r.PolygonType.INSIDE:case r.PolygonType.OUTSIDE:var v=l.move.type;if(v===r.PolygonMoveType.RADIUS)e.getDistance(t.initialPosition,t)>y&&(t.vx=-t.vx+t.vy/2,t.vy=-t.vy+t.vx/2);else if(v===r.PolygonMoveType.PATH){var p=l.type===r.PolygonType.INSIDE,d=e.library.polygonMask.isPointInsidePolygon({x:t.x,y:t.y});(p&&!d||!p&&d)&&(t.vx=-t.vx+t.vy/2,t.vy=-t.vy+t.vx/2)}}}else t.x+t.radius>i.width?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>i.height?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)}if(n.isInArray("grab",o.events.onhover.mode)&&a.grabParticle(t),(n.isInArray("bubble",o.events.onhover.mode)||n.isInArray("bubble",o.events.onclick.mode))&&a.bubbleParticle(t),(n.isInArray("repulse",o.events.onhover.mode)||n.isInArray("repulse",o.events.onclick.mode))&&a.repulseParticle(t),s.line_linked.enable||s.move.attract.enable)for(var g=c+1;g<s.array.length;g++){var b=s.array[g];s.line_linked.enable&&e.library.interactivity.linkParticles(t,b),s.move.attract.enable&&e.library.interactivity.attractParticles(t,b),s.move.bounce&&e.library.interactivity.bounceParticles(t,b)}})}},{key:"getDistances",value:function(e,t){var i=e.x-t.x,a=e.y-t.y;return{distance:Math.sqrt(i*i+a*a),distanceX:i,distanceY:a}}},{key:"getDistance",value:function(e,t){return this.getDistances(e,t).distance}},{key:"particlesDraw",value:function(){var e=this.library,t=e.canvas,i=e.manager,a=this.library.getParameter(function(e){return e.particles}),n=this.library.getParameter(function(e){return e.polygon});t.ctx.clearRect(0,0,t.width,t.height),i.particlesUpdate(),a.array.forEach(function(e){e.draw()}),n.enable&&n.draw.enable&&this.library.polygonMask.drawPolygon()}},{key:"particlesEmpty",value:function(){this.library.getParameter(function(e){return e.particles}).array=[]}},{key:"particlesRefresh",value:function(){cancelAnimationFrame(this.library.drawAnimFrame),this.particlesEmpty(),this.library.canvasClear(),this.library.start()}}]),e}();t.default=o},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(11),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageManager=new r.ImageManager,this.retina=!1,this.onWindowResize=this.onWindowResize.bind(this),this.loadParameters(t),this.interactivity=new n.Interactivity(this),this.modes=new n.Modes(this),this.vendors=new n.Vendors(this.imageManager,this.params,this),this.manager=new n.ParticleManager(this),this.polygonMask=new n.PolygonMask(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"getParameter",value:function(e){return e(this.params)}},{key:"setParameters",value:function(e){this.params=n.deepAssign(Object.assign({},this.params),e)}},{key:"loadParameters",value:function(e){var t=n.deepAssign({},n.getDefaultParams(),e);this.params=t}},{key:"loadCanvas",value:function(e){this.canvas={element:e,width:e.offsetWidth,height:e.offsetHeight}}},{key:"start",value:function(){this.interactivity.attachEventHandlers(),this.vendors.start()}},{key:"destroy",value:function(){this.detachListeners(),this.interactivity.detachEventHandlers(),cancelAnimationFrame(this.drawAnimFrame),this.canvasClear()}},{key:"detachListeners",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"retinaInit",value:function(){var e=window.devicePixelRatio;if(this.params.retina_detect&&e>1){this.canvas.pxratio=e,this.canvas.width=this.canvas.element.offsetWidth*this.canvas.pxratio,this.canvas.height=this.canvas.element.offsetHeight*this.canvas.pxratio,this.retina=!0;var t=this.getParameter(function(e){return e});this.setParameters({interactivity:{modes:{bubble:{distance:t.interactivity.modes.bubble.distance*e,size:t.interactivity.modes.bubble.size*e},grab:{distance:t.interactivity.modes.grab.distance*e},repulse:{distance:t.interactivity.modes.repulse.distance*e}}},particles:{line_linked:{distance:t.particles.line_linked.distance*e,width:t.particles.line_linked.width*e},move:{speed:t.particles.move.speed*e},size:{value:t.particles.size.value*e,anim:{speed:t.particles.size.anim.speed*e}}}})}else this.canvas.pxratio=1,this.retina=!1}},{key:"canvasInit",value:function(){var e=this.canvas;e.ctx=e.element.getContext("2d")}},{key:"canvasSize",value:function(){var e=this.canvas;e.element.width=e.width,e.element.height=e.height,this.params&&this.params.interactivity.events.resize&&window.addEventListener("resize",this.onWindowResize)}},{key:"canvasPaint",value:function(){var e=this.canvas;if(e&&e.ctx)try{e.ctx.fillRect(0,0,e.width,e.height)}catch(e){console.warn(e)}}},{key:"canvasClear",value:function(){var e=this.canvas;if(e&&e.ctx)try{e.ctx.clearRect(0,0,e.width,e.height)}catch(e){console.warn(e)}}},{key:"onWindowResize",value:function(){var e=this.canvas,t=this.manager,i=this.vendors;e.width=e.element.offsetWidth,e.height=e.element.offsetHeight,this.retina&&(e.width*=e.pxratio,e.height*=e.pxratio),e.element.width=e.width,e.element.height=e.height,!this.params.particles.move.enable||this.params.polygon.enable?(t.particlesEmpty(),this.polygonMask.initialize(this.getParameter(function(e){return e.polygon})).then(function(){t.particlesCreate(),t.particlesDraw()})):i.densityAutoParticles()}}]),e}();t.default=o},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n,r=i(0),o=i(2);!function(e){e.SINGLE="single",e.MULTIPLE="multiple"}(n=t.ImageMode||(t.ImageMode={}));var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.singleImage=null,this.multipleImages=[],this.mode=n.SINGLE}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"getImage",value:function(e){if(void 0!==e){if(0===this.multipleImages.length)throw new Error("No images loaded. You may need to define 'shape.type' = 'images'.");return this.multipleImages[e%this.multipleImages.length]}return this.singleImage}},{key:"parseShape",value:function(e){var t=this;if(o.isEqual(r.ShapeType.IMAGE,e.type))return this.mode=n.SINGLE,this.parseSingleImage(e.image).then(function(i){return t.singleImage=i,Object.assign({},e,{image:i})});if(o.isEqual(r.ShapeType.IMAGES,e.type)){this.mode=n.MULTIPLE;var i=e.images.map(function(e){return t.parseSingleImage(e)});return Promise.all(i).then(function(i){return t.multipleImages=i,Object.assign({},e,{images:i})})}return Promise.resolve(e)}},{key:"parseSingleImage",value:function(e){var t,i=this.buildImageObject({height:e.height,width:e.width,src:e.src}),a=e.width/e.height;return a!==1/0&&0!==a||(a=1),i.ratio=a,(t=/^data:image\/(\w{3})\+xml;(.*?)base64,(.*)$/.exec(e.src))?(i.type=t[1],i.svgData=atob(t[3])):(t=/^.*(\w{3})$/.exec(e.src))&&(i.type=t[1]),this.loadImage(i)}},{key:"loadImage",value:function(e){return""!=(e=Object.assign({},e)).src?"svg"==e.type?e.svgData?Promise.resolve(e):this.downloadImage(e.src).then(function(t){return e.svgData=t.response,e}):new Promise(function(t){var i=new Image;i.addEventListener("load",function(){e.elementData=i,t(e)}),i.src=e.src}):Promise.reject(new Error("Error react-particles-js - no image.src"))}},{key:"downloadImage",value:function(e){return new Promise(function(t,i){var a=new XMLHttpRequest;a.open("GET",e),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?t({response:e.currentTarget.response,xhr:a}):i(new Error("Error react-particles-js - Status code ".concat(a.readyState))))},a.send()})}},{key:"createSvgImage",value:function(e,t){var i=e.replace(/#([0-9A-F]{3,6})|rgb\([0-9,]+\)/gi,function(e,i,a,n){var r;if(t.color.rgb){var o=t.color.rgb,s=o.r,l=o.g,c=o.b;r="rgba( ".concat(s,", ").concat(l,", ").concat(c,", ").concat(t.opacity," )")}else{var h=t.color.hsl,u=h.h,y=h.s,v=h.l;r="rgba( ".concat(u,", ").concat(y,", ").concat(v,", ").concat(t.opacity," )")}return r}),a=new Blob([i],{type:"image/svg+xml;charset=utf-8"}),n=window.URL||window,r=n.createObjectURL(a);return new Promise(function(e){var t=new Image;t.addEventListener("load",function(){n.revokeObjectURL(r),e(t)}),t.src=r})}},{key:"buildImageObject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({svgData:null,height:0,width:0,ratio:0,src:"",type:""},e)}}]),e}();t.ImageManager=s},function(e,t,i){"use strict";function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(t,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageManager=t,this.initialized=!1,this.params=i,this.library=a,"undefined"!=typeof performance&&(this.lastDraw=performance.now()),this.draw=this.draw.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"densityAutoParticles",value:function(){var e=this.library,t=e.canvas,i=e.modes,a=this.params.particles,n=a.number.density,r=n.value_area;if(n.enable){var o=t.element.width*t.element.height/1e3;this.library.retina&&(o/=2*t.pxratio);var s=o*a.number.value/r,l=a.array.length-s;l<0?i.pushParticles(Math.abs(l)):i.removeParticles(l)}}},{key:"checkOverlap",value:function(e,t){var i=this,a=this.library,n=a.canvas,o=a.vendors;n.width&&n.height&&this.params.particles.array.forEach(function(a){var s=a,l=e.x-s.x,c=e.y-s.y;if(Math.sqrt(l*l+c*c)<=e.radius+s.radius)if(i.library.params.polygon.enable)switch(i.library.params.polygon.inline.arrangement){case r.PolygonInlineArrangementType.RANDOM_LENGTH:case r.PolygonInlineArrangementType.RANDOM_POINT:}else e.x=t?t.x:Math.random()*n.width,e.y=t?t.y:Math.random()*n.height,o.checkOverlap(e)})}},{key:"destroy",value:function(){cancelAnimationFrame(this.library.drawAnimFrame),this.library.canvas.element.remove()}},{key:"drawShape",value:function(e,t,i,a,n,r){var o=n*r,s=n/r,l=180*(s-2)/s,c=Math.PI-Math.PI*l/180;e.save(),e.beginPath(),e.translate(t,i),e.moveTo(0,0);for(var h=0;h<o;h++)e.lineTo(a,0),e.translate(a,0),e.rotate(c);e.fill(),e.restore()}},{key:"exportImg",value:function(){var e=this.library.canvas;window.open(e.element.toDataURL("image/png"),"_blank")}},{key:"draw",value:function(){var e=!0,t=this.library,i=t.manager,a=t.vendors,n=this.params.particles;void 0!==performance&&(performance.now()-this.lastDraw<1e3/this.params.fps_limit?e=!1:this.lastDraw=performance.now());e&&i.particlesDraw(),n.move.enable?this.library.drawAnimFrame=requestAnimationFrame(a.draw):cancelAnimationFrame(this.library.drawAnimFrame)}},{key:"init",value:function(){var e=this;if(!this.initialized){this.initialized=!0;var t=this.library,i=t.manager,a=t.vendors,r=this.params.particles;t.retinaInit(),t.canvasInit(),t.canvasSize(),t.polygonMask.initialize(this.library.getParameter(function(e){return e.polygon})).then(function(){i.particlesCreate(),a.densityAutoParticles(),e.library.setParameters({particles:{line_linked:{color_rgb_line:n.hexToRgb(r.line_linked.color)}}}),e.draw()})}}},{key:"start",value:function(){var e=this,t=this.params.particles;this.imageManager.parseShape(t.shape).then(function(t){e.init()})}}]),e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),n=i(2),r={particles:{number:{value:40,density:{enable:!1,value_area:1200}},color:{value:"#FFF"},shape:{type:a.ShapeType.CIRCLE,stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100},images:[]},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:1,random:!1,anim:{enable:!1,speed:40,size_min:0,sync:!1}},line_linked:{enable:!0,distance:150,color:"#FFF",opacity:.6,width:1,shadow:{enable:!1,blur:5,color:"lime"}},move:{enable:!0,speed:3,direction:a.MoveDirection.NONE,random:!1,straight:!1,out_mode:a.MoveOutMode.BOUNCE,bounce:!0,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:a.InteractivityMode.GRAB},onclick:{enable:!1,mode:a.InteractivityMode.REPULSE},resize:!0},modes:{grab:{distance:180,line_linked:{opacity:.35}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:100,duration:5},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,fps_limit:999,polygon:{enable:!1,scale:1,type:a.PolygonType.INLINE,inline:{arrangement:a.PolygonInlineArrangementType.ONE_PER_POINT},draw:{enable:!1,stroke:{width:.5,color:"rgba(255, 255, 255, .1)"}},move:{radius:10,type:a.PolygonMoveType.PATH},url:""}};t.getDefaultParams=function(){return n.deepAssign({},r)}},function(e,t,i){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw r}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.library=t,this.polygonPathLength=0,this.initialized=!1,this.path2DSupported=!!window.Path2D,this.debounceTime=250,this.parseSvgPathToPolygon=this.parseSvgPathToPolygon.bind(this)}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"initialize",value:function(e){var t=this;return this.polygon=e,e.enable?this.initialized?new Promise(function(e){t.debounceTimer&&clearTimeout(t.debounceTimer),t.debounceTimer=setTimeout(function(){t.parseSvgPathToPolygon().then(function(t){e()})},t.debounceTime)}):this.parseSvgPathToPolygon().then(function(e){t.initialized=!0}):Promise.resolve()}},{key:"getVerticesNumber",value:function(){return this.initialized?this.polygonRaw.length:0}},{key:"parseSvgPathToPolygon",value:function(e){var t=this;e=e||this.polygon.url;var i=this.library.canvas.width===this.lastCanvasWidth&&this.library.canvas.height===this.lastCanvasHeight;return this.polygonRaw&&this.polygonRaw.length&&i?Promise.resolve(this.polygonRaw):this.parseSvgPath(e).then(function(e){return t.polygonData=e,t.polygonWidth=parseInt(t.polygonData.svg.getAttribute("width"))*t.polygon.scale,t.polygonHeight=parseInt(t.polygonData.svg.getAttribute("height"))*t.polygon.scale,t.polygonOffsetX=t.library.canvas.width/2-t.polygonWidth/2,t.polygonOffsetY=t.library.canvas.height/2-t.polygonHeight/2,t.polygonData.paths.length&&(t.polygonPathLength=t.polygonData.paths[0].getTotalLength()),t.polygonRaw=[],t.polygonData.paths.forEach(function(e){for(var i=e.pathSegList.numberOfItems,a=0;a<i;a++){var n={x:0,y:0},r=e.pathSegList.getItem(a);switch(r.pathSegType){case SVGPathSeg.PATHSEG_ARC_ABS:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:case SVGPathSeg.PATHSEG_LINETO_ABS:case SVGPathSeg.PATHSEG_MOVETO_ABS:n.x=r.x,n.y=r.y;case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:n.x=r.x;break;case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:n.y=r.y;break;case SVGPathSeg.PATHSEG_ARC_REL:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:case SVGPathSeg.PATHSEG_LINETO_REL:case SVGPathSeg.PATHSEG_MOVETO_REL:n.x=r.x,n.y=r.y;case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:n.x=r.x;break;case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:n.y=r.y;break;case SVGPathSeg.PATHSEG_UNKNOWN:case SVGPathSeg.PATHSEG_CLOSEPATH:default:continue}t.polygonRaw.push([n.x*t.polygon.scale+t.polygonOffsetX,n.y*t.polygon.scale+t.polygonOffsetY])}}),t.lastCanvasWidth=t.library.canvas.width,t.lastCanvasHeight=t.library.canvas.height,t.createPath2D(),t.polygonRaw})}},{key:"parseSvgPath",value:function(e){return this.polygonData&&this.polygonData.paths&&this.polygonData.paths.length&&this.polygonData.svg?Promise.resolve(this.polygonData):this.library.imageManager.downloadImage(e).then(function(e){return{paths:[e.xhr.responseXML.getElementsByTagName("path")[0]],svg:e.xhr.responseXML.getElementsByTagName("svg")[0]}})}},{key:"getRandomPointOnPolygonPath",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e=a(this.polygonRaw[Math.floor(Math.random()*this.polygonRaw.length)],2);return{x:e[0],y:e[1]}}},{key:"getRandomPointOnPolygonPathByLength",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e=this.polygonData.paths[0].getPointAtLength(Math.floor(Math.random()*this.polygonPathLength)+1);return{x:e.x*this.polygon.scale+this.polygonOffsetX,y:e.y*this.polygon.scale+this.polygonOffsetY}}},{key:"getRandomPointInsidePolygonPath",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e={x:Math.random()*this.library.canvas.width,y:Math.random()*this.library.canvas.height};return this.isPointInsidePolygon(e)?e:this.getRandomPointInsidePolygonPath()}},{key:"getRandomPointOutsidePolygonPath",value:function(){if(!this.initialized)throw new Error("No polygon data loaded.");var e={x:Math.random()*this.library.canvas.width,y:Math.random()*this.library.canvas.height};return this.isPointInsidePolygon(e)?this.getRandomPointOutsidePolygonPath():e}},{key:"isPointInsidePolygon",value:function(e){if(this.path2DSupported&&this.polygonPath)return this.library.canvas.ctx.isPointInPath(this.polygonPath,e.x,e.y);for(var t=!1,i=0,a=this.polygonRaw.length-1;i<this.polygonRaw.length;a=i++){var n=this.polygonRaw[i][0],r=this.polygonRaw[i][1],o=this.polygonRaw[a][0],s=this.polygonRaw[a][1];r>e.y!=s>e.y&&e.x<(o-n)*(e.y-r)/(s-r)+n&&(t=!t)}return t}},{key:"getPoingOnPolygonPathByIndex",value:function(e){if(!this.initialized)throw new Error("No polygon data loaded.");var t=a(this.polygonRaw[e%this.polygonRaw.length],2);return{x:t[0],y:t[1]}}},{key:"getEquidistantPoingOnPolygonPathByIndex",value:function(e){if(!this.initialized)throw new Error("No polygon data loaded.");var t=this.polygonData.paths[0].getPointAtLength(this.polygonPathLength/this.library.getParameter(function(e){return e.particles.number.value})*e);return{x:t.x*this.polygon.scale+this.polygonOffsetX,y:t.y*this.polygon.scale+this.polygonOffsetY}}},{key:"drawPolygon",value:function(){var e=this.library.canvas.ctx;if(!this.path2DSupported){if(!this.initialized)return;e.beginPath(),e.moveTo(this.polygonRaw[0][0],this.polygonRaw[0][1]),this.polygonRaw.forEach(function(t,i){var n=a(t,2),r=n[0],o=n[1];i>0&&e.lineTo(r,o)}),e.closePath()}e.strokeStyle=this.polygon.draw.stroke.color,e.lineWidth=this.polygon.draw.stroke.width,this.polygonPath?e.stroke(this.polygonPath):e.stroke()}},{key:"createPath2D",value:function(){var e=this;this.path2DSupported&&(this.polygonPath=new Path2D,this.polygonPath.moveTo(this.polygonRaw[0][0],this.polygonRaw[0][1]),this.polygonRaw.forEach(function(t,i){var n=a(t,2),r=n[0],o=n[1];i>0&&e.polygonPath.lineTo(r,o)}),this.polygonPath.closePath())}}]),e}();t.PolygonMask=r}])});

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_28e76e2d2e17dda0d4a0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_28e76e2d2e17dda0d4a0 */ "dll-reference dll_28e76e2d2e17dda0d4a0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
var _jsxFileName = "/Users/justme/Developer/learning/adam/pages/index.js";
 // import '../index.css';




var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: '100vw',
      height: '100vh',
      backgroundColor: '#001242'
    },
    params: {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/justme/Developer/learning/adam/src/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import logo from './logo.svg';
// import './App.css';

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: 'yellow',
          zIndex: 100
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Barebone react app");
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_28e76e2d2e17dda0d4a0":
/*!*******************************************!*\
  !*** external "dll_28e76e2d2e17dda0d4a0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_28e76e2d2e17dda0d4a0;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map