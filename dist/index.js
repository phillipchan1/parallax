var Parallax=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),o=t(2),u=t(3),i=function(e){var r=o.mergeConfig(n.defaultConfig,e);u.configureParallax(r)};e.exports=i},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.defaultConfig={debugMode:!1,speedRatio:.3,wrapperClass:".wrapper"}},function(e,r,t){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.mergeConfig=function(e,r){var t=n({},r);return n({},e,t)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.configureParallax=function(e){var r=document.querySelector("head"),t="\n        <style>\n            "+e.wrapperClass+" {\n                height: 100vh;\n                overflow-x: hidden;\n                overflow-y: auto;\n                perspective: 2px;\n            }\n        </style>\n    ";r.insertAdjacentHTML("beforeend",t)}}]);