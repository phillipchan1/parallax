var Parallax =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/document-offset/index.js":
/*!***********************************************!*\
  !*** ./node_modules/document-offset/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var support = __webpack_require__(/*! dom-support */ \"./node_modules/dom-support/index.js\")\nvar getDocument = __webpack_require__(/*! get-document */ \"./node_modules/get-document/index.js\")\nvar withinElement = __webpack_require__(/*! within-element */ \"./node_modules/within-element/index.js\")\n\n/**\n * Get offset of a DOM Element or Range within the document.\n *\n * @param {DOMElement|Range} el - the DOM element or Range instance to measure\n * @return {Object} An object with `top` and `left` Number values\n * @public\n */\n\nmodule.exports = function offset(el) {\n  var doc = getDocument(el)\n  if (!doc) return\n\n  // Make sure it's not a disconnected DOM node\n  if (!withinElement(el, doc)) return\n\n  var body = doc.body\n  if (body === el) {\n    return bodyOffset(el)\n  }\n\n  var box = { top: 0, left: 0 }\n  if ( typeof el.getBoundingClientRect !== \"undefined\" ) {\n    // If we don't have gBCR, just use 0,0 rather than error\n    // BlackBerry 5, iOS 3 (original iPhone)\n    box = el.getBoundingClientRect()\n\n    if (el.collapsed && box.left === 0 && box.top === 0) {\n      // collapsed Range instances sometimes report 0, 0\n      // see: http://stackoverflow.com/a/6847328/376773\n      var span = doc.createElement(\"span\");\n\n      // Ensure span has dimensions and position by\n      // adding a zero-width space character\n      span.appendChild(doc.createTextNode(\"\\u200b\"));\n      el.insertNode(span);\n      box = span.getBoundingClientRect();\n\n      // Remove temp SPAN and glue any broken text nodes back together\n      var spanParent = span.parentNode;\n      spanParent.removeChild(span);\n      spanParent.normalize();\n    }\n  }\n\n  var docEl = doc.documentElement\n  var clientTop  = docEl.clientTop  || body.clientTop  || 0\n  var clientLeft = docEl.clientLeft || body.clientLeft || 0\n  var scrollTop  = window.pageYOffset || docEl.scrollTop\n  var scrollLeft = window.pageXOffset || docEl.scrollLeft\n\n  return {\n    top: box.top  + scrollTop  - clientTop,\n    left: box.left + scrollLeft - clientLeft\n  }\n}\n\nfunction bodyOffset(body) {\n  var top = body.offsetTop\n  var left = body.offsetLeft\n\n  if (support.doesNotIncludeMarginInBodyOffset) {\n    top  += parseFloat(body.style.marginTop || 0)\n    left += parseFloat(body.style.marginLeft || 0)\n  }\n\n  return {\n    top: top,\n    left: left\n  }\n}\n\n\n//# sourceURL=webpack://Parallax/./node_modules/document-offset/index.js?");

/***/ }),

/***/ "./node_modules/dom-support/index.js":
/*!*******************************************!*\
  !*** ./node_modules/dom-support/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var domready = __webpack_require__(/*! domready */ \"./node_modules/domready/ready.js\")\n\nmodule.exports = (function() {\n\n\tvar support,\n\t\tall,\n\t\ta,\n\t\tselect,\n\t\topt,\n\t\tinput,\n\t\tfragment,\n\t\teventName,\n\t\ti,\n\t\tisSupported,\n\t\tclickFn,\n\t\tdiv = document.createElement(\"div\");\n\n\t// Setup\n\tdiv.setAttribute( \"className\", \"t\" );\n\tdiv.innerHTML = \"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>\";\n\n\t// Support tests won't run in some limited or non-browser environments\n\tall = div.getElementsByTagName(\"*\");\n\ta = div.getElementsByTagName(\"a\")[ 0 ];\n\tif ( !all || !a || !all.length ) {\n\t\treturn {};\n\t}\n\n\t// First batch of tests\n\tselect = document.createElement(\"select\");\n\topt = select.appendChild( document.createElement(\"option\") );\n\tinput = div.getElementsByTagName(\"input\")[ 0 ];\n\n\ta.style.cssText = \"top:1px;float:left;opacity:.5\";\n\tsupport = {\n\t\t// IE strips leading whitespace when .innerHTML is used\n\t\tleadingWhitespace: ( div.firstChild.nodeType === 3 ),\n\n\t\t// Make sure that tbody elements aren't automatically inserted\n\t\t// IE will insert them into empty tables\n\t\ttbody: !div.getElementsByTagName(\"tbody\").length,\n\n\t\t// Make sure that link elements get serialized correctly by innerHTML\n\t\t// This requires a wrapper element in IE\n\t\thtmlSerialize: !!div.getElementsByTagName(\"link\").length,\n\n\t\t// Get the style information from getAttribute\n\t\t// (IE uses .cssText instead)\n\t\tstyle: /top/.test( a.getAttribute(\"style\") ),\n\n\t\t// Make sure that URLs aren't manipulated\n\t\t// (IE normalizes it by default)\n\t\threfNormalized: ( a.getAttribute(\"href\") === \"/a\" ),\n\n\t\t// Make sure that element opacity exists\n\t\t// (IE uses filter instead)\n\t\t// Use a regex to work around a WebKit issue. See #5145\n\t\topacity: /^0.5/.test( a.style.opacity ),\n\n\t\t// Verify style float existence\n\t\t// (IE uses styleFloat instead of cssFloat)\n\t\tcssFloat: !!a.style.cssFloat,\n\n\t\t// Make sure that if no value is specified for a checkbox\n\t\t// that it defaults to \"on\".\n\t\t// (WebKit defaults to \"\" instead)\n\t\tcheckOn: ( input.value === \"on\" ),\n\n\t\t// Make sure that a selected-by-default option has a working selected property.\n\t\t// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)\n\t\toptSelected: opt.selected,\n\n\t\t// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)\n\t\tgetSetAttribute: div.className !== \"t\",\n\n\t\t// Tests for enctype support on a form (#6743)\n\t\tenctype: !!document.createElement(\"form\").enctype,\n\n\t\t// Makes sure cloning an html5 element does not cause problems\n\t\t// Where outerHTML is undefined, this still works\n\t\thtml5Clone: document.createElement(\"nav\").cloneNode( true ).outerHTML !== \"<:nav></:nav>\",\n\n\t\t// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode\n\t\tboxModel: ( document.compatMode === \"CSS1Compat\" ),\n\n\t\t// Will be defined later\n\t\tsubmitBubbles: true,\n\t\tchangeBubbles: true,\n\t\tfocusinBubbles: false,\n\t\tdeleteExpando: true,\n\t\tnoCloneEvent: true,\n\t\tinlineBlockNeedsLayout: false,\n\t\tshrinkWrapBlocks: false,\n\t\treliableMarginRight: true,\n\t\tboxSizingReliable: true,\n\t\tpixelPosition: false\n\t};\n\n\t// Make sure checked status is properly cloned\n\tinput.checked = true;\n\tsupport.noCloneChecked = input.cloneNode( true ).checked;\n\n\t// Make sure that the options inside disabled selects aren't marked as disabled\n\t// (WebKit marks them as disabled)\n\tselect.disabled = true;\n\tsupport.optDisabled = !opt.disabled;\n\n\t// Test to see if it's possible to delete an expando from an element\n\t// Fails in Internet Explorer\n\ttry {\n\t\tdelete div.test;\n\t} catch( e ) {\n\t\tsupport.deleteExpando = false;\n\t}\n\n\tif ( !div.addEventListener && div.attachEvent && div.fireEvent ) {\n\t\tdiv.attachEvent( \"onclick\", clickFn = function() {\n\t\t\t// Cloning a node shouldn't copy over any\n\t\t\t// bound event handlers (IE does this)\n\t\t\tsupport.noCloneEvent = false;\n\t\t});\n\t\tdiv.cloneNode( true ).fireEvent(\"onclick\");\n\t\tdiv.detachEvent( \"onclick\", clickFn );\n\t}\n\n\t// Check if a radio maintains its value\n\t// after being appended to the DOM\n\tinput = document.createElement(\"input\");\n\tinput.value = \"t\";\n\tinput.setAttribute( \"type\", \"radio\" );\n\tsupport.radioValue = input.value === \"t\";\n\n\tinput.setAttribute( \"checked\", \"checked\" );\n\n\t// #11217 - WebKit loses check when the name is after the checked attribute\n\tinput.setAttribute( \"name\", \"t\" );\n\n\tdiv.appendChild( input );\n\tfragment = document.createDocumentFragment();\n\tfragment.appendChild( div.lastChild );\n\n\t// WebKit doesn't clone checked state correctly in fragments\n\tsupport.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;\n\n\t// Check if a disconnected checkbox will retain its checked\n\t// value of true after appended to the DOM (IE6/7)\n\tsupport.appendChecked = input.checked;\n\n\tfragment.removeChild( input );\n\tfragment.appendChild( div );\n\n\t// Technique from Juriy Zaytsev\n\t// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/\n\t// We only care about the case where non-standard event systems\n\t// are used, namely in IE. Short-circuiting here helps us to\n\t// avoid an eval call (in setAttribute) which can cause CSP\n\t// to go haywire. See: https://developer.mozilla.org/en/Security/CSP\n\tif ( !div.addEventListener ) {\n\t\tfor ( i in {\n\t\t\tsubmit: true,\n\t\t\tchange: true,\n\t\t\tfocusin: true\n\t\t}) {\n\t\t\teventName = \"on\" + i;\n\t\t\tisSupported = ( eventName in div );\n\t\t\tif ( !isSupported ) {\n\t\t\t\tdiv.setAttribute( eventName, \"return;\" );\n\t\t\t\tisSupported = ( typeof div[ eventName ] === \"function\" );\n\t\t\t}\n\t\t\tsupport[ i + \"Bubbles\" ] = isSupported;\n\t\t}\n\t}\n\n\t// Run tests that need a body at doc ready\n\tdomready(function() {\n\t\tvar container, div, tds, marginDiv,\n\t\t\tdivReset = \"padding:0;margin:0;border:0;display:block;overflow:hidden;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;\",\n\t\t\tbody = document.getElementsByTagName(\"body\")[0];\n\n\t\tif ( !body ) {\n\t\t\t// Return for frameset docs that don't have a body\n\t\t\treturn;\n\t\t}\n\n\t\tcontainer = document.createElement(\"div\");\n\t\tcontainer.style.cssText = \"visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px\";\n\t\tbody.insertBefore( container, body.firstChild );\n\n\t\t// Construct the test element\n\t\tdiv = document.createElement(\"div\");\n\t\tcontainer.appendChild( div );\n\n    //Check if table cells still have offsetWidth/Height when they are set\n    //to display:none and there are still other visible table cells in a\n    //table row; if so, offsetWidth/Height are not reliable for use when\n    //determining if an element has been hidden directly using\n    //display:none (it is still safe to use offsets if a parent element is\n    //hidden; don safety goggles and see bug #4512 for more information).\n    //(only IE 8 fails this test)\n\t\tdiv.innerHTML = \"<table><tr><td></td><td>t</td></tr></table>\";\n\t\ttds = div.getElementsByTagName(\"td\");\n\t\ttds[ 0 ].style.cssText = \"padding:0;margin:0;border:0;display:none\";\n\t\tisSupported = ( tds[ 0 ].offsetHeight === 0 );\n\n\t\ttds[ 0 ].style.display = \"\";\n\t\ttds[ 1 ].style.display = \"none\";\n\n\t\t// Check if empty table cells still have offsetWidth/Height\n\t\t// (IE <= 8 fail this test)\n\t\tsupport.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );\n\n\t\t// Check box-sizing and margin behavior\n\t\tdiv.innerHTML = \"\";\n\t\tdiv.style.cssText = \"box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;\";\n\t\tsupport.boxSizing = ( div.offsetWidth === 4 );\n\t\tsupport.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );\n\n\t\t// NOTE: To any future maintainer, we've window.getComputedStyle\n\t\t// because jsdom on node.js will break without it.\n\t\tif ( window.getComputedStyle ) {\n\t\t\tsupport.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== \"1%\";\n\t\t\tsupport.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: \"4px\" } ).width === \"4px\";\n\n\t\t\t// Check if div with explicit width and no margin-right incorrectly\n\t\t\t// gets computed margin-right based on width of container. For more\n\t\t\t// info see bug #3333\n\t\t\t// Fails in WebKit before Feb 2011 nightlies\n\t\t\t// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right\n\t\t\tmarginDiv = document.createElement(\"div\");\n\t\t\tmarginDiv.style.cssText = div.style.cssText = divReset;\n\t\t\tmarginDiv.style.marginRight = marginDiv.style.width = \"0\";\n\t\t\tdiv.style.width = \"1px\";\n\t\t\tdiv.appendChild( marginDiv );\n\t\t\tsupport.reliableMarginRight =\n\t\t\t\t!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );\n\t\t}\n\n\t\tif ( typeof div.style.zoom !== \"undefined\" ) {\n\t\t\t// Check if natively block-level elements act like inline-block\n\t\t\t// elements when setting their display to 'inline' and giving\n\t\t\t// them layout\n\t\t\t// (IE < 8 does this)\n\t\t\tdiv.innerHTML = \"\";\n\t\t\tdiv.style.cssText = divReset + \"width:1px;padding:1px;display:inline;zoom:1\";\n\t\t\tsupport.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );\n\n\t\t\t// Check if elements with layout shrink-wrap their children\n\t\t\t// (IE 6 does this)\n\t\t\tdiv.style.display = \"block\";\n\t\t\tdiv.style.overflow = \"visible\";\n\t\t\tdiv.innerHTML = \"<div></div>\";\n\t\t\tdiv.firstChild.style.width = \"5px\";\n\t\t\tsupport.shrinkWrapBlocks = ( div.offsetWidth !== 3 );\n\n\t\t\tcontainer.style.zoom = 1;\n\t\t}\n\n\t\t// Null elements to avoid leaks in IE\n\t\tbody.removeChild( container );\n\t\tcontainer = div = tds = marginDiv = null;\n\t});\n\n\t// Null elements to avoid leaks in IE\n\tfragment.removeChild( div );\n\tall = a = select = opt = input = fragment = div = null;\n\n\treturn support;\n})();\n\n\n//# sourceURL=webpack://Parallax/./node_modules/dom-support/index.js?");

/***/ }),

/***/ "./node_modules/domready/ready.js":
/*!****************************************!*\
  !*** ./node_modules/domready/ready.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*!\n  * domready (c) Dustin Diaz 2014 - License MIT\n  */\n!function (name, definition) {\n\n  if (true) module.exports = definition()\n  else {}\n\n}('domready', function () {\n\n  var fns = [], listener\n    , doc = document\n    , hack = doc.documentElement.doScroll\n    , domContentLoaded = 'DOMContentLoaded'\n    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)\n\n\n  if (!loaded)\n  doc.addEventListener(domContentLoaded, listener = function () {\n    doc.removeEventListener(domContentLoaded, listener)\n    loaded = 1\n    while (listener = fns.shift()) listener()\n  })\n\n  return function (fn) {\n    loaded ? setTimeout(fn, 0) : fns.push(fn)\n  }\n\n});\n\n\n//# sourceURL=webpack://Parallax/./node_modules/domready/ready.js?");

/***/ }),

/***/ "./node_modules/get-document/index.js":
/*!********************************************!*\
  !*** ./node_modules/get-document/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Module exports.\n */\n\nmodule.exports = getDocument;\n\n// defined by w3c\nvar DOCUMENT_NODE = 9;\n\n/**\n * Returns `true` if `w` is a Document object, or `false` otherwise.\n *\n * @param {?} d - Document object, maybe\n * @return {Boolean}\n * @private\n */\n\nfunction isDocument (d) {\n  return d && d.nodeType === DOCUMENT_NODE;\n}\n\n/**\n * Returns the `document` object associated with the given `node`, which may be\n * a DOM element, the Window object, a Selection, a Range. Basically any DOM\n * object that references the Document in some way, this function will find it.\n *\n * @param {Mixed} node - DOM node, selection, or range in which to find the `document` object\n * @return {Document} the `document` object associated with `node`\n * @public\n */\n\nfunction getDocument(node) {\n  if (isDocument(node)) {\n    return node;\n\n  } else if (isDocument(node.ownerDocument)) {\n    return node.ownerDocument;\n\n  } else if (isDocument(node.document)) {\n    return node.document;\n\n  } else if (node.parentNode) {\n    return getDocument(node.parentNode);\n\n  // Range support\n  } else if (node.commonAncestorContainer) {\n    return getDocument(node.commonAncestorContainer);\n\n  } else if (node.startContainer) {\n    return getDocument(node.startContainer);\n\n  // Selection support\n  } else if (node.anchorNode) {\n    return getDocument(node.anchorNode);\n  }\n}\n\n\n//# sourceURL=webpack://Parallax/./node_modules/get-document/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        clearTimeout(timerId);\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://Parallax/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Parallax/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/within-element/index.js":
/*!**********************************************!*\
  !*** ./node_modules/within-element/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * Check if the DOM element `child` is within the given `parent` DOM element.\n *\n * @param {DOMElement|Range} child - the DOM element or Range to check if it's within `parent`\n * @param {DOMElement} parent  - the parent node that `child` could be inside of\n * @return {Boolean} True if `child` is within `parent`. False otherwise.\n * @public\n */\n\nmodule.exports = function within (child, parent) {\n  // don't throw if `child` is null\n  if (!child) return false;\n\n  // Range support\n  if (child.commonAncestorContainer) child = child.commonAncestorContainer;\n  else if (child.endContainer) child = child.endContainer;\n\n  // traverse up the `parentNode` properties until `parent` is found\n  var node = child;\n  while (node = node.parentNode) {\n    if (node == parent) return true;\n  }\n\n  return false;\n};\n\n\n//# sourceURL=webpack://Parallax/./node_modules/within-element/index.js?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.config = {\n    debugMode: false,\n    speedRatio: 0.3,\n    pixelsOverflowing: 500,\n    defaultXPosition: '50%',\n    pageOffsetToInitialize: 200,\n    selector: '.parallax'\n};\n\n\n//# sourceURL=webpack://Parallax/./src/config.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import * as _ from 'lodash'\nvar debounce = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/config.ts\");\nvar mergeConfig_1 = __webpack_require__(/*! ./lib/mergeConfig */ \"./src/lib/mergeConfig.ts\");\nvar initAndGetConfig_1 = __webpack_require__(/*! ./initAndGetConfig */ \"./src/initAndGetConfig.ts\");\nvar doParallaxEffect_1 = __webpack_require__(/*! ./lib/doParallaxEffect */ \"./src/lib/doParallaxEffect.ts\");\nvar Parallax = /** @class */ (function () {\n    function Parallax(userSetConfig) {\n        var setConfig = mergeConfig_1.mergeConfig(config_1.config, userSetConfig);\n        var parallaxElements = document.querySelectorAll(setConfig.selector);\n        // set parallax config before image loads to avoid jumping\n        var specs = initAndGetConfig_1.initAndGetConfig(parallaxElements, setConfig);\n        doParallaxEffect_1.doParallaxEffect(parallaxElements, config_1.config);\n        window.onload = function () {\n            specs = initAndGetConfig_1.initAndGetConfig(parallaxElements, setConfig);\n            if (specs.debugMode) {\n                console.log(\"TCL: window.onload -> config\", specs);\n            }\n            doParallaxEffect_1.doParallaxEffect(parallaxElements, specs);\n            window.addEventListener('scroll', function () {\n                doParallaxEffect_1.doParallaxEffect(parallaxElements, specs);\n            });\n            window.addEventListener('resize', debounce(function () {\n                specs = initAndGetConfig_1.initAndGetConfig(parallaxElements, setConfig);\n                doParallaxEffect_1.doParallaxEffect(parallaxElements, specs);\n                if (specs.debugMode) {\n                    console.log(\"TCL: window.onload -> config\", specs);\n                }\n            }, 500));\n        };\n    }\n    return Parallax;\n}());\nmodule.exports = Parallax;\n\n\n//# sourceURL=webpack://Parallax/./src/index.ts?");

/***/ }),

/***/ "./src/initAndGetConfig.ts":
/*!*********************************!*\
  !*** ./src/initAndGetConfig.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar offset = __webpack_require__(/*! document-offset */ \"./node_modules/document-offset/index.js\");\nvar getScrollPercentage_1 = __webpack_require__(/*! ./lib/getScrollPercentage */ \"./src/lib/getScrollPercentage.ts\");\nvar setStylesOnElement_1 = __webpack_require__(/*! ./lib/setStylesOnElement */ \"./src/lib/setStylesOnElement.ts\");\n/*\n * initAndGetConfig\n * This module is broken up into 3 phases–\n * before looping elements, looping elements,\n * and finally post processing after looping.\n *\n * It will return a config file with information\n * about the elements.\n *\n */\nexports.initAndGetConfig = function (elements, config) {\n    // create new config object with user defined config\n    var elementSpecs = [];\n    elements.forEach(function (el, i) {\n        var boundingClientRect = el.getBoundingClientRect();\n        var elementOffset = offset(el);\n        var initialPercentageInViewport = getScrollPercentage_1.getScrollPercentage(el);\n        var imageIsOverflowingSmallerThanAllowed = false;\n        // if (isImageOverflowSmallerThanAllowed(el, config)) {\n        el.style.backgroundSize = boundingClientRect.width +\n            config.pixelsOverflowing + \"px \" + (boundingClientRect.height +\n            config.pixelsOverflowing) + \"px\";\n        imageIsOverflowingSmallerThanAllowed = true;\n        // }\n        // set generic styles\n        setStylesOnElement_1.setStylesOnElement(el);\n        el.style.backgroundPosition = config.defaultXPosition + \" 0px\";\n        elementSpecs[i] = {\n            offsetTop: elementOffset.top,\n            initialPercentageInViewport: initialPercentageInViewport,\n            imageIsOverflowingSmallerThanAllowed: imageIsOverflowingSmallerThanAllowed\n        };\n    });\n    return __assign({}, config, { elementSpecs: elementSpecs });\n};\n\n\n//# sourceURL=webpack://Parallax/./src/initAndGetConfig.ts?");

/***/ }),

/***/ "./src/lib/doParallaxEffect.ts":
/*!*************************************!*\
  !*** ./src/lib/doParallaxEffect.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isInViewport_1 = __webpack_require__(/*! ./isInViewport */ \"./src/lib/isInViewport.ts\");\nvar getScrollPercentage_1 = __webpack_require__(/*! ./getScrollPercentage */ \"./src/lib/getScrollPercentage.ts\");\nexports.doParallaxEffect = function (elements, config) {\n    elements.forEach(function (el, i) {\n        if (!isInViewport_1.isInViewport(el)) {\n            return;\n        }\n        var percentageInViewport = getScrollPercentage_1.getScrollPercentage(el);\n        if (config.debugMode) {\n            console.log(i + \": percentageInViewport\", percentageInViewport);\n        }\n        var pixelsToMoveBasedOnPercentageInViewPort = percentageInViewport * config.pixelsOverflowing * config.speedRatio;\n        el.style.backgroundPosition = config.defaultXPosition + \" -\" + pixelsToMoveBasedOnPercentageInViewPort + \"px\";\n    });\n};\n\n\n//# sourceURL=webpack://Parallax/./src/lib/doParallaxEffect.ts?");

/***/ }),

/***/ "./src/lib/getScrollPercentage.ts":
/*!****************************************!*\
  !*** ./src/lib/getScrollPercentage.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar offset = __webpack_require__(/*! document-offset */ \"./node_modules/document-offset/index.js\");\nexports.getScrollPercentage = function (el) {\n    var elementDimensions = el.getBoundingClientRect();\n    var elementOffset = offset(el);\n    var percentage = (pageYOffset + window.innerHeight - elementOffset.top) /\n        (window.innerHeight + elementDimensions.height);\n    // round to nearest hundered\n    return Math.round(percentage * 100) / 100;\n};\n\n\n//# sourceURL=webpack://Parallax/./src/lib/getScrollPercentage.ts?");

/***/ }),

/***/ "./src/lib/getSpeedLimit.ts":
/*!**********************************!*\
  !*** ./src/lib/getSpeedLimit.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getSpeedLimit = function (speed) {\n    if (speed < 0.1) {\n        return 0.1;\n    }\n    if (speed > 0.5) {\n        return 0.5;\n    }\n    return speed;\n};\n\n\n//# sourceURL=webpack://Parallax/./src/lib/getSpeedLimit.ts?");

/***/ }),

/***/ "./src/lib/isInViewport.ts":
/*!*********************************!*\
  !*** ./src/lib/isInViewport.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.isInViewport = function (el) {\n    var r, html;\n    if (!el || 1 !== el.nodeType) {\n        return false;\n    }\n    html = document.documentElement;\n    r = el.getBoundingClientRect();\n    return (!!r &&\n        r.bottom >= 0 &&\n        r.right >= 0 &&\n        r.top <= html.clientHeight &&\n        r.left <= html.clientWidth);\n};\n\n\n//# sourceURL=webpack://Parallax/./src/lib/isInViewport.ts?");

/***/ }),

/***/ "./src/lib/mergeConfig.ts":
/*!********************************!*\
  !*** ./src/lib/mergeConfig.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar getSpeedLimit_1 = __webpack_require__(/*! ./getSpeedLimit */ \"./src/lib/getSpeedLimit.ts\");\nexports.mergeConfig = function (presetConfig, userConfig) {\n    var safeGuardedUserConfig = __assign({}, userConfig, { speedRatio: getSpeedLimit_1.getSpeedLimit(userConfig.speedRatio || presetConfig.speedRatio) });\n    return __assign({}, presetConfig, safeGuardedUserConfig);\n};\n\n\n//# sourceURL=webpack://Parallax/./src/lib/mergeConfig.ts?");

/***/ }),

/***/ "./src/lib/setStylesOnElement.ts":
/*!***************************************!*\
  !*** ./src/lib/setStylesOnElement.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setStylesOnElement = function (el) {\n    el.style.backgroundRepeat = 'no-repeat';\n};\n\n\n//# sourceURL=webpack://Parallax/./src/lib/setStylesOnElement.ts?");

/***/ })

/******/ });