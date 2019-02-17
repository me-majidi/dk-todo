var serviceWorkerOption = {
  "assets": [
    ".fonts/dk-todo.eot",
    ".fonts/dk-todo.svg",
    ".fonts/dk-todo.ttf",
    ".fonts/dk-todo.woff",
    ".mobile.styles.css",
    ".e75482b6f44556ba2090.css",
    ".e75482b6f44556ba2090.js",
    ".index.html"
  ]
};
        
        !function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p=".",o(o.s=0)}([function(e,n){function a(e,n,t,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void t(e)}c.done?n(a):Promise.resolve(a).then(r,o)}self.addEventListener("install",function(e){console.log("installing ");var n=function(){var c,e=(c=regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.open("static-v1");case 2:return n=e.sent,e.next=5,n.addAll(serviceWorkerOption.assets);case 5:case"end":return e.stop()}},e,this)}),function(){var e=this,u=arguments;return new Promise(function(n,t){var r=c.apply(e,u);function o(e){a(r,n,t,o,i,"next",e)}function i(e){a(r,n,t,o,i,"throw",e)}o(void 0)})});return function(){return e.apply(this,arguments)}}();e.waitUntil(n()),console.log("installing called")}),self.addEventListener("active",function(e){console.log("activated...")}),self.addEventListener("fetch",function(e){console.log(e.request.url)})}]);