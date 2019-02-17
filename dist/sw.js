var serviceWorkerOption = {
  "assets": [
    "/dk-todofonts/dk-todo.eot",
    "/dk-todofonts/dk-todo.svg",
    "/dk-todofonts/dk-todo.ttf",
    "/dk-todofonts/dk-todo.woff",
    "/dk-todo9ac6fddef44f9c72d37a.css",
    "/dk-todo9ac6fddef44f9c72d37a.js",
    "/dk-todoindex.html"
  ]
};
        
        !function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://me-majidi.github.io/dk-todo/",o(o.s=0)}([function(e,t){function c(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}self.addEventListener("install",function(e){console.log("installing ");var t=function(){var a,e=(a=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.open("static-v1");case 2:return t=e.sent,e.next=5,t.addAll(serviceWorkerOption.assets);case 5:case"end":return e.stop()}},e,this)}),function(){var e=this,u=arguments;return new Promise(function(t,n){var r=a.apply(e,u);function o(e){c(r,t,n,o,i,"next",e)}function i(e){c(r,t,n,o,i,"throw",e)}o(void 0)})});return function(){return e.apply(this,arguments)}}();e.waitUntil(t()),console.log("installing called")}),self.addEventListener("active",function(e){console.log("activated...")}),self.addEventListener("fetch",function(e){console.log(e.request.url)})}]);