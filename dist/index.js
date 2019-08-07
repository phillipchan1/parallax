var Parallax=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var o=n(7),i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")();e.exports=r},function(e,t,n){var o=n(1).Symbol;e.exports=o},function(e,t,n){var o=n(16),i=n(18),r=n(19);e.exports=function(e){var t=i(e);if(t&&r(e,t)){var n=t.body;if(n===e)return function(e){var t=e.offsetTop,n=e.offsetLeft;o.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(e.style.marginTop||0),n+=parseFloat(e.style.marginLeft||0));return{top:t,left:n}}(e);var l={top:0,left:0};if(void 0!==e.getBoundingClientRect&&(l=e.getBoundingClientRect(),e.collapsed&&0===l.left&&0===l.top)){var a=t.createElement("span");a.appendChild(t.createTextNode("​")),e.insertNode(a),l=a.getBoundingClientRect();var c=a.parentNode;c.removeChild(a),c.normalize()}var u=t.documentElement,d=u.clientTop||n.clientTop||0,s=u.clientLeft||n.clientLeft||0,f=window.pageYOffset||u.scrollTop,p=window.pageXOffset||u.scrollLeft;return{top:l.top+f-d,left:l.left+p-s}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=n(15),r=n(27),l=document.querySelectorAll(".parallax"),a=function(e){void 0===e&&(e={}),window.onload=function(){var t=i.initAndGetConfig(l,e);console.log("TCL: window.onload -> config",t),r.doParallaxEffect(l,t),window.addEventListener("scroll",function(){r.doParallaxEffect(l,t)}),window.addEventListener("resize",o.default(function(){t=i.initAndGetConfig(l,e),r.doParallaxEffect(l,t)},500))}};e.exports=a},function(e,t,n){var o=n(0),i=n(6),r=n(9),l="Expected a function",a=Math.max,c=Math.min;e.exports=function(e,t,n){var u,d,s,f,p,g,v=0,m=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError(l);function h(t){var n=u,o=d;return u=d=void 0,v=t,f=e.apply(o,n)}function x(e){var n=e-g;return void 0===g||n>=t||n<0||b&&e-v>=s}function w(){var e=i();if(x(e))return C(e);p=setTimeout(w,function(e){var n=t-(e-g);return b?c(n,s-(e-v)):n}(e))}function C(e){return p=void 0,y&&u?h(e):(u=d=void 0,f)}function O(){var e=i(),n=x(e);if(u=arguments,d=this,g=e,n){if(void 0===p)return function(e){return v=e,p=setTimeout(w,t),m?h(e):f}(g);if(b)return clearTimeout(p),p=setTimeout(w,t),h(g)}return void 0===p&&(p=setTimeout(w,t)),f}return t=r(t)||0,o(n)&&(m=!!n.leading,s=(b="maxWait"in n)?a(r(n.maxWait)||0,t):s,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==p&&clearTimeout(p),v=0,u=g=d=p=void 0},O.flush=function(){return void 0===p?f:C(i())},O}},function(e,t,n){var o=n(1);e.exports=function(){return o.Date.now()}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(8))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var o=n(0),i=n(10),r=NaN,l=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return r;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=c.test(e);return n||u.test(e)?d(e.slice(2),n?2:8):a.test(e)?r:+e}},function(e,t,n){var o=n(11),i=n(14),r="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||i(e)&&o(e)==r}},function(e,t,n){var o=n(2),i=n(12),r=n(13),l="[object Null]",a="[object Undefined]",c=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?a:l:c&&c in Object(e)?i(e):r(e)}},function(e,t,n){var o=n(2),i=Object.prototype,r=i.hasOwnProperty,l=i.toString,a=o?o.toStringTag:void 0;e.exports=function(e){var t=r.call(e,a),n=e[a];try{e[a]=void 0;var o=!0}catch(e){}var i=l.call(e);return o&&(t?e[a]=n:delete e[a]),i}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=n(20),l=n(21),a=n(23);t.initAndGetConfig=function(e,t){var n=l.mergeConfig(r.config,t),c=[];return e.forEach(function(e,t){var o=e.getBoundingClientRect(),r=i(e);a.isImageOverflowSmallerThanAllowed(e,n)&&(e.style.backgroundSize="100% "+(o.height+n.pixelsOverflowing)+"px"),e.style.backgroundPosition=n.defaultXPosition+" 0px",c[t]={offsetTop:r.top}}),o({},n,{elementSpecs:c})}},function(e,t,n){var o=n(17);e.exports=function(){var e,t,n,i,r,l,a,c,u,d,s,f=document.createElement("div");if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=f.getElementsByTagName("*"),n=f.getElementsByTagName("a")[0],!t||!n||!t.length)return{};r=(i=document.createElement("select")).appendChild(document.createElement("option")),l=f.getElementsByTagName("input")[0],n.style.cssText="top:1px;float:left;opacity:.5",e={leadingWhitespace:3===f.firstChild.nodeType,tbody:!f.getElementsByTagName("tbody").length,htmlSerialize:!!f.getElementsByTagName("link").length,style:/top/.test(n.getAttribute("style")),hrefNormalized:"/a"===n.getAttribute("href"),opacity:/^0.5/.test(n.style.opacity),cssFloat:!!n.style.cssFloat,checkOn:"on"===l.value,optSelected:r.selected,getSetAttribute:"t"!==f.className,enctype:!!document.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==document.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===document.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},l.checked=!0,e.noCloneChecked=l.cloneNode(!0).checked,i.disabled=!0,e.optDisabled=!r.disabled;try{delete f.test}catch(t){e.deleteExpando=!1}if(!f.addEventListener&&f.attachEvent&&f.fireEvent&&(f.attachEvent("onclick",s=function(){e.noCloneEvent=!1}),f.cloneNode(!0).fireEvent("onclick"),f.detachEvent("onclick",s)),(l=document.createElement("input")).value="t",l.setAttribute("type","radio"),e.radioValue="t"===l.value,l.setAttribute("checked","checked"),l.setAttribute("name","t"),f.appendChild(l),(a=document.createDocumentFragment()).appendChild(f.lastChild),e.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,e.appendChecked=l.checked,a.removeChild(l),a.appendChild(f),!f.addEventListener)for(u in{submit:!0,change:!0,focusin:!0})(d=(c="on"+u)in f)||(f.setAttribute(c,"return;"),d="function"==typeof f[c]),e[u+"Bubbles"]=d;return o(function(){var t,n,o,i,r="padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=document.getElementsByTagName("body")[0];l&&((t=document.createElement("div")).style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",l.insertBefore(t,l.firstChild),n=document.createElement("div"),t.appendChild(n),n.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(o=n.getElementsByTagName("td"))[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",e.reliableHiddenOffsets=d&&0===o[0].offsetHeight,n.innerHTML="",n.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.boxSizing=4===n.offsetWidth,e.doesNotIncludeMarginInBodyOffset=1!==l.offsetTop,window.getComputedStyle&&(e.pixelPosition="1%"!==(window.getComputedStyle(n,null)||{}).top,e.boxSizingReliable="4px"===(window.getComputedStyle(n,null)||{width:"4px"}).width,(i=document.createElement("div")).style.cssText=n.style.cssText=r,i.style.marginRight=i.style.width="0",n.style.width="1px",n.appendChild(i),e.reliableMarginRight=!parseFloat((window.getComputedStyle(i,null)||{}).marginRight)),void 0!==n.style.zoom&&(n.innerHTML="",n.style.cssText=r+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===n.offsetWidth,n.style.display="block",n.style.overflow="visible",n.innerHTML="<div></div>",n.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==n.offsetWidth,t.style.zoom=1),l.removeChild(t),t=n=o=i=null)}),a.removeChild(f),t=n=i=r=l=a=f=null,e}()},function(e,t,n){var o,i,r,l,a;e.exports=(i=[],r=document,l=r.documentElement.doScroll,(a=(l?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState))||r.addEventListener("DOMContentLoaded",o=function(){for(r.removeEventListener("DOMContentLoaded",o),a=1;o=i.shift();)o()}),function(e){a?setTimeout(e,0):i.push(e)})},function(e,t){e.exports=function e(t){if(o(t))return t;if(o(t.ownerDocument))return t.ownerDocument;if(o(t.document))return t.document;if(t.parentNode)return e(t.parentNode);if(t.commonAncestorContainer)return e(t.commonAncestorContainer);if(t.startContainer)return e(t.startContainer);if(t.anchorNode)return e(t.anchorNode)};var n=9;function o(e){return e&&e.nodeType===n}},function(e,t){e.exports=function(e,t){if(!e)return!1;e.commonAncestorContainer?e=e.commonAncestorContainer:e.endContainer&&(e=e.endContainer);for(var n=e;n=n.parentNode;)if(n==t)return!0;return!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.config={speedRatio:.3,pixelsOverflowing:200,defaultXPosition:"50%"}},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(22);t.mergeConfig=function(e,t){var n=o({},t,{speedRatio:i.getSpeedLimit(t.speedRatio||e.speedRatio)});return o({},e,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSpeedLimit=function(e){return e<.1?.1:e>1?1:e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(24),i=n(25),r=n(26);t.isImageOverflowSmallerThanAllowed=function(e,t){var n=e.getBoundingClientRect(),l=i.getBackgroundImageURLFromElement(e),a=r.getImageSize(l);return o.getPixelsOverflowing(n,a)<t.pixelsOverflowing}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPixelsOverflowing=function(e,t){return e.width/t.width*t.height-e.height}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBackgroundImageURLFromElement=function(e){if(e.style.backgroundImage)return e.style.backgroundImage.replace("url(","").replace(")","").replace(/\"/gi,"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=function(e){var t=new Image;return t.src=e,{width:t.width,height:t.height}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),i=n(29);t.doParallaxEffect=function(e,t){e.forEach(function(e,n){if(o.isInViewport(e)){var r=i.getScrollPercentage(e)*t.pixelsOverflowing*t.speedRatio;e.style.backgroundPosition="0 -"+r+"px"}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInViewport=function(e){var t,n;return!(!e||1!==e.nodeType)&&(n=document.documentElement,!!(t=e.getBoundingClientRect())&&t.bottom>=0&&t.right>=0&&t.top<=n.clientHeight&&t.left<=n.clientWidth)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3);t.getScrollPercentage=function(e){var t=e.getBoundingClientRect(),n=o(e),i=(pageYOffset+window.innerHeight-n.top)/(window.innerHeight+t.height);return Math.round(100*i)/100}}]);