/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"1":"b0baf83a9497dae8e2e2"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(5);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _App = __webpack_require__(7);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _vueRainbow = __webpack_require__(17);
	
	var _vueRainbow2 = _interopRequireDefault(_vueRainbow);
	
	__webpack_require__(339);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(337).polyfill();
	
	_vue2.default.use(_vueRainbow2.default);
	
	new _vue2.default({
	  el: 'body',
	  components: {
	    'app': _App2.default
	  },
	  data: function data() {
	    return {
	      configData: [{ 'navCat': 'hotelType',
	        listData: [{ 'text': '不限类型', value: '不限酒店' }, { 'text': '星级酒店', value: '星级酒店' }, { 'text': '特色餐厅', value: '特色餐厅' }],
	        activeFilterText: '不限类型',
	        showFilterFlag: false }, { 'navCat': 'tables',
	        listData: [{ 'text': '不限桌数', value: '不限桌数' }, { 'text': '10桌以下', value: '10桌以下' }, { 'text': '10~20桌', value: '10~20桌' }, { 'text': '20桌以上', value: '20桌以上' }], activeFilterText: '10桌以下', showFilterFlag: false }, { 'navCat': 'isWeddingServiceNeed', listData: [{ 'text': '需要婚庆', value: true }, { 'text': '不需要婚庆', value: false }], activeFilterText: '需要婚庆', showFilterFlag: false }]
	    };
	  },
	  methods: {
	    sureNavFun: function sureNavFun(list) {
	      console.log(list);
	    }
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([^-])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;
	
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }
	
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;
	
	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;
	
	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };
	
	function peek() {
	  return str.charCodeAt(index + 1);
	}
	
	function next() {
	  return str.charCodeAt(++index);
	}
	
	function eof() {
	  return index >= len;
	}
	
	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}
	
	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}
	
	function isExpStart(chr) {
	  return expStartChr[chr];
	}
	
	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}
	
	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}
	
	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;
	
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }
	
	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }
	
	    next();
	
	    if (inExp === 0) {
	      break;
	    }
	  }
	}
	
	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */
	
	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }
	
	  return str.slice(start + 1, index) || null;
	}
	
	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}
	
	function parseFilter() {
	  var filter = {};
	  var args;
	
	  state = filterState;
	  filter.name = parseExpression().trim();
	
	  state = filterArgState;
	  args = parseFilterArguments();
	
	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}
	
	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }
	
	  return args;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;
	
	  var filters;
	
	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
	
	function noop() {}
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);
	
	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }
	
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var _this = this;
	
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;
	
	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }
	
	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	
	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }
	
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop$1() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.28';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(8)
	__vue_script__ = __webpack_require__(15)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e9c4fb18/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e9c4fb18&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e9c4fb18&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, ".Hide[_v-e9c4fb18] {\n  display: none !important;\n}\n.line-top[_v-e9c4fb18] {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAKQWlDQ1BJQ0MgUHJvZmlsZQAASA2dlndUU9kWh8+9N73QEiIgJfQaegkg0jtIFQRRiUmAUAKGhCZ2RAVGFBEpVmRUwAFHhyJjRRQLg4Ji1wnyEFDGwVFEReXdjGsJ7601896a/cdZ39nnt9fZZ+9917oAUPyCBMJ0WAGANKFYFO7rwVwSE8vE9wIYEAEOWAHA4WZmBEf4RALU/L09mZmoSMaz9u4ugGS72yy/UCZz1v9/kSI3QyQGAApF1TY8fiYX5QKUU7PFGTL/BMr0lSkyhjEyFqEJoqwi48SvbPan5iu7yZiXJuShGlnOGbw0noy7UN6aJeGjjAShXJgl4GejfAdlvVRJmgDl9yjT0/icTAAwFJlfzOcmoWyJMkUUGe6J8gIACJTEObxyDov5OWieAHimZ+SKBIlJYqYR15hp5ejIZvrxs1P5YjErlMNN4Yh4TM/0tAyOMBeAr2+WRQElWW2ZaJHtrRzt7VnW5mj5v9nfHn5T/T3IevtV8Sbsz55BjJ5Z32zsrC+9FgD2JFqbHbO+lVUAtG0GQOXhrE/vIADyBQC03pzzHoZsXpLE4gwnC4vs7GxzAZ9rLivoN/ufgm/Kv4Y595nL7vtWO6YXP4EjSRUzZUXlpqemS0TMzAwOl89k/fcQ/+PAOWnNycMsnJ/AF/GF6FVR6JQJhIlou4U8gViQLmQKhH/V4X8YNicHGX6daxRodV8AfYU5ULhJB8hvPQBDIwMkbj96An3rWxAxCsi+vGitka9zjzJ6/uf6Hwtcim7hTEEiU+b2DI9kciWiLBmj34RswQISkAd0oAo0gS4wAixgDRyAM3AD3iAAhIBIEAOWAy5IAmlABLJBPtgACkEx2AF2g2pwANSBetAEToI2cAZcBFfADXALDIBHQAqGwUswAd6BaQiC8BAVokGqkBakD5lC1hAbWgh5Q0FQOBQDxUOJkBCSQPnQJqgYKoOqoUNQPfQjdBq6CF2D+qAH0CA0Bv0BfYQRmALTYQ3YALaA2bA7HAhHwsvgRHgVnAcXwNvhSrgWPg63whfhG/AALIVfwpMIQMgIA9FGWAgb8URCkFgkAREha5EipAKpRZqQDqQbuY1IkXHkAwaHoWGYGBbGGeOHWYzhYlZh1mJKMNWYY5hWTBfmNmYQM4H5gqVi1bGmWCesP3YJNhGbjS3EVmCPYFuwl7ED2GHsOxwOx8AZ4hxwfrgYXDJuNa4Etw/XjLuA68MN4SbxeLwq3hTvgg/Bc/BifCG+Cn8cfx7fjx/GvyeQCVoEa4IPIZYgJGwkVBAaCOcI/YQRwjRRgahPdCKGEHnEXGIpsY7YQbxJHCZOkxRJhiQXUiQpmbSBVElqIl0mPSa9IZPJOmRHchhZQF5PriSfIF8lD5I/UJQoJhRPShxFQtlOOUq5QHlAeUOlUg2obtRYqpi6nVpPvUR9Sn0vR5Mzl/OX48mtk6uRa5Xrl3slT5TXl3eXXy6fJ18hf0r+pvy4AlHBQMFTgaOwVqFG4bTCPYVJRZqilWKIYppiiWKD4jXFUSW8koGStxJPqUDpsNIlpSEaQtOledK4tE20Otpl2jAdRzek+9OT6cX0H+i99AllJWVb5SjlHOUa5bPKUgbCMGD4M1IZpYyTjLuMj/M05rnP48/bNq9pXv+8KZX5Km4qfJUilWaVAZWPqkxVb9UU1Z2qbapP1DBqJmphatlq+9Uuq43Pp893ns+dXzT/5PyH6rC6iXq4+mr1w+o96pMamhq+GhkaVRqXNMY1GZpumsma5ZrnNMe0aFoLtQRa5VrntV4wlZnuzFRmJbOLOaGtru2nLdE+pN2rPa1jqLNYZ6NOs84TXZIuWzdBt1y3U3dCT0svWC9fr1HvoT5Rn62fpL9Hv1t/ysDQINpgi0GbwaihiqG/YZ5ho+FjI6qRq9Eqo1qjO8Y4Y7ZxivE+41smsImdSZJJjclNU9jU3lRgus+0zwxr5mgmNKs1u8eisNxZWaxG1qA5wzzIfKN5m/krCz2LWIudFt0WXyztLFMt6ywfWSlZBVhttOqw+sPaxJprXWN9x4Zq42Ozzqbd5rWtqS3fdr/tfTuaXbDdFrtOu8/2DvYi+yb7MQc9h3iHvQ732HR2KLuEfdUR6+jhuM7xjOMHJ3snsdNJp9+dWc4pzg3OowsMF/AX1C0YctFx4bgccpEuZC6MX3hwodRV25XjWuv6zE3Xjed2xG3E3dg92f24+ysPSw+RR4vHlKeT5xrPC16Il69XkVevt5L3Yu9q76c+Oj6JPo0+E752vqt9L/hh/QL9dvrd89fw5/rX+08EOASsCegKpARGBFYHPgsyCRIFdQTDwQHBu4IfL9JfJFzUFgJC/EN2hTwJNQxdFfpzGC4sNKwm7Hm4VXh+eHcELWJFREPEu0iPyNLIR4uNFksWd0bJR8VF1UdNRXtFl0VLl1gsWbPkRoxajCCmPRYfGxV7JHZyqffS3UuH4+ziCuPuLjNclrPs2nK15anLz66QX8FZcSoeGx8d3xD/iRPCqeVMrvRfuXflBNeTu4f7kufGK+eN8V34ZfyRBJeEsoTRRJfEXYljSa5JFUnjAk9BteB1sl/ygeSplJCUoykzqdGpzWmEtPi000IlYYqwK10zPSe9L8M0ozBDuspp1e5VE6JA0ZFMKHNZZruYjv5M9UiMJJslg1kLs2qy3mdHZZ/KUcwR5vTkmuRuyx3J88n7fjVmNXd1Z752/ob8wTXuaw6thdauXNu5Tnddwbrh9b7rj20gbUjZ8MtGy41lG99uit7UUaBRsL5gaLPv5sZCuUJR4b0tzlsObMVsFWzt3WazrWrblyJe0fViy+KK4k8l3JLr31l9V/ndzPaE7b2l9qX7d+B2CHfc3em681iZYlle2dCu4F2t5czyovK3u1fsvlZhW3FgD2mPZI+0MqiyvUqvakfVp+qk6oEaj5rmvep7t+2d2sfb17/fbX/TAY0DxQc+HhQcvH/I91BrrUFtxWHc4azDz+ui6rq/Z39ff0TtSPGRz0eFR6XHwo911TvU1zeoN5Q2wo2SxrHjccdv/eD1Q3sTq+lQM6O5+AQ4ITnx4sf4H++eDDzZeYp9qukn/Z/2ttBailqh1tzWibakNml7THvf6YDTnR3OHS0/m/989Iz2mZqzymdLz5HOFZybOZ93fvJCxoXxi4kXhzpXdD66tOTSna6wrt7LgZevXvG5cqnbvfv8VZerZ645XTt9nX297Yb9jdYeu56WX+x+aem172296XCz/ZbjrY6+BX3n+l37L972un3ljv+dGwOLBvruLr57/17cPel93v3RB6kPXj/Mejj9aP1j7OOiJwpPKp6qP6391fjXZqm99Oyg12DPs4hnj4a4Qy//lfmvT8MFz6nPK0a0RupHrUfPjPmM3Xqx9MXwy4yX0+OFvyn+tveV0auffnf7vWdiycTwa9HrmT9K3qi+OfrW9m3nZOjk03dp76anit6rvj/2gf2h+2P0x5Hp7E/4T5WfjT93fAn88ngmbWbm3/eE8/syOll+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cqn0On0AAAAQSURBVAgdY3z48OF/BmQAADhGA6QvTNZRAAAAAElFTkSuQmCC');\n  background-repeat: repeat-x;\n  background-position: center top;\n  background-size: auto 1px;\n}\n.line-bottom[_v-e9c4fb18] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY2BgOAAAAMQAwbn75sMAAAAASUVORK5CYII=);\n  background-repeat: repeat-x;\n  background-position: 0 bottom;\n  background-size: auto 1px;\n}\n.line-top-bottom[_v-e9c4fb18] {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDg0NjJGODhFOUY3MTFFMzgyNDZBNkRCNjM5MDI2MzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDg0NjJGODdFOUY3MTFFMzgyNDZBNkRCNjM5MDI2MzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZCQ0M0ODFERjAyMTFFMzg5RDE4NENEQUZENTUzNEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCQ0M0ODJERjAyMTFFMzg5RDE4NENEQUZENTUzNEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5EbLiBAAAAGUlEQVR42mL6//8/AwizPHr06D8DEAAEGABriwmmt+2WgAAAAABJRU5ErkJggg=='), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAKQWlDQ1BJQ0MgUHJvZmlsZQAASA2dlndUU9kWh8+9N73QEiIgJfQaegkg0jtIFQRRiUmAUAKGhCZ2RAVGFBEpVmRUwAFHhyJjRRQLg4Ji1wnyEFDGwVFEReXdjGsJ7601896a/cdZ39nnt9fZZ+9917oAUPyCBMJ0WAGANKFYFO7rwVwSE8vE9wIYEAEOWAHA4WZmBEf4RALU/L09mZmoSMaz9u4ugGS72yy/UCZz1v9/kSI3QyQGAApF1TY8fiYX5QKUU7PFGTL/BMr0lSkyhjEyFqEJoqwi48SvbPan5iu7yZiXJuShGlnOGbw0noy7UN6aJeGjjAShXJgl4GejfAdlvVRJmgDl9yjT0/icTAAwFJlfzOcmoWyJMkUUGe6J8gIACJTEObxyDov5OWieAHimZ+SKBIlJYqYR15hp5ejIZvrxs1P5YjErlMNN4Yh4TM/0tAyOMBeAr2+WRQElWW2ZaJHtrRzt7VnW5mj5v9nfHn5T/T3IevtV8Sbsz55BjJ5Z32zsrC+9FgD2JFqbHbO+lVUAtG0GQOXhrE/vIADyBQC03pzzHoZsXpLE4gwnC4vs7GxzAZ9rLivoN/ufgm/Kv4Y595nL7vtWO6YXP4EjSRUzZUXlpqemS0TMzAwOl89k/fcQ/+PAOWnNycMsnJ/AF/GF6FVR6JQJhIlou4U8gViQLmQKhH/V4X8YNicHGX6daxRodV8AfYU5ULhJB8hvPQBDIwMkbj96An3rWxAxCsi+vGitka9zjzJ6/uf6Hwtcim7hTEEiU+b2DI9kciWiLBmj34RswQISkAd0oAo0gS4wAixgDRyAM3AD3iAAhIBIEAOWAy5IAmlABLJBPtgACkEx2AF2g2pwANSBetAEToI2cAZcBFfADXALDIBHQAqGwUswAd6BaQiC8BAVokGqkBakD5lC1hAbWgh5Q0FQOBQDxUOJkBCSQPnQJqgYKoOqoUNQPfQjdBq6CF2D+qAH0CA0Bv0BfYQRmALTYQ3YALaA2bA7HAhHwsvgRHgVnAcXwNvhSrgWPg63whfhG/AALIVfwpMIQMgIA9FGWAgb8URCkFgkAREha5EipAKpRZqQDqQbuY1IkXHkAwaHoWGYGBbGGeOHWYzhYlZh1mJKMNWYY5hWTBfmNmYQM4H5gqVi1bGmWCesP3YJNhGbjS3EVmCPYFuwl7ED2GHsOxwOx8AZ4hxwfrgYXDJuNa4Etw/XjLuA68MN4SbxeLwq3hTvgg/Bc/BifCG+Cn8cfx7fjx/GvyeQCVoEa4IPIZYgJGwkVBAaCOcI/YQRwjRRgahPdCKGEHnEXGIpsY7YQbxJHCZOkxRJhiQXUiQpmbSBVElqIl0mPSa9IZPJOmRHchhZQF5PriSfIF8lD5I/UJQoJhRPShxFQtlOOUq5QHlAeUOlUg2obtRYqpi6nVpPvUR9Sn0vR5Mzl/OX48mtk6uRa5Xrl3slT5TXl3eXXy6fJ18hf0r+pvy4AlHBQMFTgaOwVqFG4bTCPYVJRZqilWKIYppiiWKD4jXFUSW8koGStxJPqUDpsNIlpSEaQtOledK4tE20Otpl2jAdRzek+9OT6cX0H+i99AllJWVb5SjlHOUa5bPKUgbCMGD4M1IZpYyTjLuMj/M05rnP48/bNq9pXv+8KZX5Km4qfJUilWaVAZWPqkxVb9UU1Z2qbapP1DBqJmphatlq+9Uuq43Pp893ns+dXzT/5PyH6rC6iXq4+mr1w+o96pMamhq+GhkaVRqXNMY1GZpumsma5ZrnNMe0aFoLtQRa5VrntV4wlZnuzFRmJbOLOaGtru2nLdE+pN2rPa1jqLNYZ6NOs84TXZIuWzdBt1y3U3dCT0svWC9fr1HvoT5Rn62fpL9Hv1t/ysDQINpgi0GbwaihiqG/YZ5ho+FjI6qRq9Eqo1qjO8Y4Y7ZxivE+41smsImdSZJJjclNU9jU3lRgus+0zwxr5mgmNKs1u8eisNxZWaxG1qA5wzzIfKN5m/krCz2LWIudFt0WXyztLFMt6ywfWSlZBVhttOqw+sPaxJprXWN9x4Zq42Ozzqbd5rWtqS3fdr/tfTuaXbDdFrtOu8/2DvYi+yb7MQc9h3iHvQ732HR2KLuEfdUR6+jhuM7xjOMHJ3snsdNJp9+dWc4pzg3OowsMF/AX1C0YctFx4bgccpEuZC6MX3hwodRV25XjWuv6zE3Xjed2xG3E3dg92f24+ysPSw+RR4vHlKeT5xrPC16Il69XkVevt5L3Yu9q76c+Oj6JPo0+E752vqt9L/hh/QL9dvrd89fw5/rX+08EOASsCegKpARGBFYHPgsyCRIFdQTDwQHBu4IfL9JfJFzUFgJC/EN2hTwJNQxdFfpzGC4sNKwm7Hm4VXh+eHcELWJFREPEu0iPyNLIR4uNFksWd0bJR8VF1UdNRXtFl0VLl1gsWbPkRoxajCCmPRYfGxV7JHZyqffS3UuH4+ziCuPuLjNclrPs2nK15anLz66QX8FZcSoeGx8d3xD/iRPCqeVMrvRfuXflBNeTu4f7kufGK+eN8V34ZfyRBJeEsoTRRJfEXYljSa5JFUnjAk9BteB1sl/ygeSplJCUoykzqdGpzWmEtPi000IlYYqwK10zPSe9L8M0ozBDuspp1e5VE6JA0ZFMKHNZZruYjv5M9UiMJJslg1kLs2qy3mdHZZ/KUcwR5vTkmuRuyx3J88n7fjVmNXd1Z752/ob8wTXuaw6thdauXNu5Tnddwbrh9b7rj20gbUjZ8MtGy41lG99uit7UUaBRsL5gaLPv5sZCuUJR4b0tzlsObMVsFWzt3WazrWrblyJe0fViy+KK4k8l3JLr31l9V/ndzPaE7b2l9qX7d+B2CHfc3em681iZYlle2dCu4F2t5czyovK3u1fsvlZhW3FgD2mPZI+0MqiyvUqvakfVp+qk6oEaj5rmvep7t+2d2sfb17/fbX/TAY0DxQc+HhQcvH/I91BrrUFtxWHc4azDz+ui6rq/Z39ff0TtSPGRz0eFR6XHwo911TvU1zeoN5Q2wo2SxrHjccdv/eD1Q3sTq+lQM6O5+AQ4ITnx4sf4H++eDDzZeYp9qukn/Z/2ttBailqh1tzWibakNml7THvf6YDTnR3OHS0/m/989Iz2mZqzymdLz5HOFZybOZ93fvJCxoXxi4kXhzpXdD66tOTSna6wrt7LgZevXvG5cqnbvfv8VZerZ645XTt9nX297Yb9jdYeu56WX+x+aem172296XCz/ZbjrY6+BX3n+l37L972un3ljv+dGwOLBvruLr57/17cPel93v3RB6kPXj/Mejj9aP1j7OOiJwpPKp6qP6391fjXZqm99Oyg12DPs4hnj4a4Qy//lfmvT8MFz6nPK0a0RupHrUfPjPmM3Xqx9MXwy4yX0+OFvyn+tveV0auffnf7vWdiycTwa9HrmT9K3qi+OfrW9m3nZOjk03dp76anit6rvj/2gf2h+2P0x5Hp7E/4T5WfjT93fAn88ngmbWbm3/eE8/syOll+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cqn0On0AAAAQSURBVAgdY3z48OF/BmQAADhGA6QvTNZRAAAAAElFTkSuQmCC');\n  background-repeat: repeat-x, repeat-x;\n  background-position: center bottom, center top;\n  background-size: auto 1px, auto 1px;\n}\n.line-right[_v-e9c4fb18] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY3BgcAAAAQQAgT0QLxkAAAAASUVORK5CYII=);\n  background-repeat: repeat-y;\n  background-position: right 0;\n  background-size: 1px auto;\n}\n.line-right-bottom[_v-e9c4fb18] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY3BgcAAAAQQAgT0QLxkAAAAASUVORK5CYII=), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY2BgOAAAAMQAwbn75sMAAAAASUVORK5CYII=);\n  background-repeat: repeat-y, repeat-x;\n  background-position: right 0,0 bottom;\n  background-size: 1px auto,auto 1px;\n}\n/*font*/\n.f12[_v-e9c4fb18] {\n  font-size: 12px;\n}\n.f13[_v-e9c4fb18] {\n  font-size: 13px;\n}\n.f14[_v-e9c4fb18] {\n  font-size: 14px;\n}\n.f16[_v-e9c4fb18] {\n  font-size: 16px;\n}\n.f20[_v-e9c4fb18] {\n  font-size: 20px;\n}\n.fb[_v-e9c4fb18] {\n  font-weight: bold;\n}\n.fn[_v-e9c4fb18] {\n  font-weight: normal;\n}\n.t2[_v-e9c4fb18] {\n  text-indent: 2em;\n}\n.lh150[_v-e9c4fb18] {\n  line-height: 150%;\n}\n.lh180[_v-e9c4fb18] {\n  line-height: 180%;\n}\n.lh200[_v-e9c4fb18] {\n  line-height: 200%;\n}\n.unl[_v-e9c4fb18] {\n  text-decoration: underline;\n}\n.no_unl[_v-e9c4fb18] {\n  text-decoration: none;\n}\n/*position*/\n.tl[_v-e9c4fb18] {\n  text-align: left;\n}\n.tc[_v-e9c4fb18] {\n  text-align: center;\n}\n.tr[_v-e9c4fb18] {\n  text-align: right;\n}\n.bc[_v-e9c4fb18] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fl[_v-e9c4fb18] {\n  float: left;\n  display: inline;\n}\n.fr[_v-e9c4fb18] {\n  float: right;\n  display: inline;\n}\n.cb[_v-e9c4fb18] {\n  clear: both;\n}\n.cl[_v-e9c4fb18] {\n  clear: left;\n}\n.cr[_v-e9c4fb18] {\n  clear: right;\n}\n.clear[_v-e9c4fb18] {\n  clear: both;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n}\n.clearfix[_v-e9c4fb18]:before {\n  content: '';\n  display: block;\n}\n.clearfix[_v-e9c4fb18]:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.vm[_v-e9c4fb18] {\n  vertical-align: middle;\n}\n.pr[_v-e9c4fb18] {\n  position: relative;\n}\n.pa[_v-e9c4fb18] {\n  position: absolute;\n}\n.abs-right[_v-e9c4fb18] {\n  position: absolute;\n  right: 0;\n}\n.zoom[_v-e9c4fb18] {\n  zoom: 1;\n}\n.invisible[_v-e9c4fb18] {\n  visibility: hidden;\n}\n.none[_v-e9c4fb18] {\n  display: none;\n}\n.db[_v-e9c4fb18] {\n  display: block;\n}\n.di[_v-e9c4fb18] {\n  display: inline;\n}\n.dib[_v-e9c4fb18] {\n  display: inline-block;\n}\n/*width & height*/\n.w10[_v-e9c4fb18] {\n  width: 10px;\n}\n.w20[_v-e9c4fb18] {\n  width: 20px;\n}\n.w30[_v-e9c4fb18] {\n  width: 30px;\n}\n.w40[_v-e9c4fb18] {\n  width: 40px;\n}\n.w50[_v-e9c4fb18] {\n  width: 50px;\n}\n.w60[_v-e9c4fb18] {\n  width: 60px;\n}\n.w70[_v-e9c4fb18] {\n  width: 70px;\n}\n.w80[_v-e9c4fb18] {\n  width: 80px;\n}\n.w90[_v-e9c4fb18] {\n  width: 90px;\n}\n.w100[_v-e9c4fb18] {\n  width: 100px;\n}\n.w200[_v-e9c4fb18] {\n  width: 200px;\n}\n.w250[_v-e9c4fb18] {\n  width: 250px;\n}\n.w300[_v-e9c4fb18] {\n  width: 300px;\n}\n.w400[_v-e9c4fb18] {\n  width: 400px;\n}\n.w500[_v-e9c4fb18] {\n  width: 500px;\n}\n.w600[_v-e9c4fb18] {\n  width: 600px;\n}\n.w700[_v-e9c4fb18] {\n  width: 700px;\n}\n.w800[_v-e9c4fb18] {\n  width: 800px;\n}\n.w[_v-e9c4fb18] {\n  width: 100%;\n}\n.h50[_v-e9c4fb18] {\n  height: 50px;\n}\n.h80[_v-e9c4fb18] {\n  height: 80px;\n}\n.h100[_v-e9c4fb18] {\n  height: 100px;\n}\n.h200[_v-e9c4fb18] {\n  height: 200px;\n}\n.h[_v-e9c4fb18] {\n  height: 100%;\n}\n.size1of2[_v-e9c4fb18] {\n  width: 50%;\n}\n.size1of3[_v-e9c4fb18] {\n  width: 33.33333%;\n}\n.size2of3[_v-e9c4fb18] {\n  width: 66.66666%;\n}\n.size1of4[_v-e9c4fb18] {\n  width: 25%;\n}\n.size3of4[_v-e9c4fb18] {\n  width: 75%;\n}\n.size1of5[_v-e9c4fb18] {\n  width: 20%;\n}\n.size2of5[_v-e9c4fb18] {\n  width: 40%;\n}\n.size3of5[_v-e9c4fb18] {\n  width: 60%;\n}\n.size4of5[_v-e9c4fb18] {\n  width: 80%;\n}\n/*margin & padding*/\n.m10[_v-e9c4fb18] {\n  margin: 10px;\n}\n.m15[_v-e9c4fb18] {\n  margin: 15px;\n}\n.m30[_v-e9c4fb18] {\n  margin: 30px;\n}\n.mt5[_v-e9c4fb18] {\n  margin-top: 5px;\n}\n.mt10[_v-e9c4fb18] {\n  margin-top: 10px;\n}\n.mt15[_v-e9c4fb18] {\n  margin-top: 15px;\n}\n.mt20[_v-e9c4fb18] {\n  margin-top: 20px;\n}\n.mt30[_v-e9c4fb18] {\n  margin-top: 30px;\n}\n.mt50[_v-e9c4fb18] {\n  margin-top: 50px;\n}\n.mt100[_v-e9c4fb18] {\n  margin-top: 100px;\n}\n.mb10[_v-e9c4fb18] {\n  margin-bottom: 10px;\n}\n.mb15[_v-e9c4fb18] {\n  margin-bottom: 15px;\n}\n.mb20[_v-e9c4fb18] {\n  margin-bottom: 20px;\n}\n.mb30[_v-e9c4fb18] {\n  margin-bottom: 30px;\n}\n.mb50[_v-e9c4fb18] {\n  margin-bottom: 50px;\n}\n.mb100[_v-e9c4fb18] {\n  margin-bottom: 100px;\n}\n.ml5[_v-e9c4fb18] {\n  margin-left: 5px;\n}\n.ml10[_v-e9c4fb18] {\n  margin-left: 10px;\n}\n.ml15[_v-e9c4fb18] {\n  margin-left: 15px;\n}\n.ml20[_v-e9c4fb18] {\n  margin-left: 20px;\n}\n.ml30[_v-e9c4fb18] {\n  margin-left: 30px;\n}\n.ml50[_v-e9c4fb18] {\n  margin-left: 50px;\n}\n.ml100[_v-e9c4fb18] {\n  margin-left: 100px;\n}\n.mr5[_v-e9c4fb18] {\n  margin-right: 5px;\n}\n.mr10[_v-e9c4fb18] {\n  margin-right: 10px;\n}\n.mr15[_v-e9c4fb18] {\n  margin-right: 15px;\n}\n.mr20[_v-e9c4fb18] {\n  margin-right: 20px;\n}\n.mr30[_v-e9c4fb18] {\n  margin-right: 30px;\n}\n.mr50[_v-e9c4fb18] {\n  margin-right: 50px;\n}\n.mr100[_v-e9c4fb18] {\n  margin-right: 100px;\n}\n.p10[_v-e9c4fb18] {\n  padding: 10px;\n}\n.p15[_v-e9c4fb18] {\n  padding: 15px;\n}\n.p30[_v-e9c4fb18] {\n  padding: 30px;\n}\n.pt5[_v-e9c4fb18] {\n  padding-top: 5px;\n}\n.pt10[_v-e9c4fb18] {\n  padding-top: 10px;\n}\n.pt15[_v-e9c4fb18] {\n  padding-top: 15px;\n}\n.pt20[_v-e9c4fb18] {\n  padding-top: 20px;\n}\n.pt30[_v-e9c4fb18] {\n  padding-top: 30px;\n}\n.pt50[_v-e9c4fb18] {\n  padding-top: 50px;\n}\n.pb5[_v-e9c4fb18] {\n  padding-bottom: 5px;\n}\n.pb10[_v-e9c4fb18] {\n  padding-bottom: 10px;\n}\n.pb15[_v-e9c4fb18] {\n  padding-bottom: 15px;\n}\n.pb20[_v-e9c4fb18] {\n  padding-bottom: 20px;\n}\n.pb30[_v-e9c4fb18] {\n  padding-bottom: 30px;\n}\n.pb50[_v-e9c4fb18] {\n  padding-bottom: 50px;\n}\n.pb100[_v-e9c4fb18] {\n  padding-bottom: 100px;\n}\n.pl5[_v-e9c4fb18] {\n  padding-left: 5px;\n}\n.pl10[_v-e9c4fb18] {\n  padding-left: 10px;\n}\n.pl15[_v-e9c4fb18] {\n  padding-left: 15px;\n}\n.pl20[_v-e9c4fb18] {\n  padding-left: 20px;\n}\n.pl30[_v-e9c4fb18] {\n  padding-left: 30px;\n}\n.pl50[_v-e9c4fb18] {\n  padding-left: 50px;\n}\n.pl100[_v-e9c4fb18] {\n  padding-left: 100px;\n}\n.pr5[_v-e9c4fb18] {\n  padding-right: 5px;\n}\n.pr10[_v-e9c4fb18] {\n  padding-right: 10px;\n}\n.pr15[_v-e9c4fb18] {\n  padding-right: 15px;\n}\n.pr20[_v-e9c4fb18] {\n  padding-right: 20px;\n}\n.pr30[_v-e9c4fb18] {\n  padding-right: 30px;\n}\n.pr50[_v-e9c4fb18] {\n  padding-right: 50px;\n}\n.pr100[_v-e9c4fb18] {\n  padding-right: 100px;\n}\nul[_v-e9c4fb18] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.filter-div[_v-e9c4fb18] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  font-size: 14px;\n  color: #111111;\n  z-index: 20;\n  background-color: white;\n  display: flex;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n}\n.filter-div .filter[_v-e9c4fb18] {\n  text-align: center;\n  background-color: #fff;\n  flex: 1;\n  box-flex: 1;\n  -webkit-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  line-height: 20px;\n  background-color: white;\n  z-index: 11;\n  position: relative;\n}\n.filter-div .filter:last-child .item[_v-e9c4fb18] {\n  border-right: none;\n  position: relative;\n  background-image: none;\n}\n.filter-div .filter:last-child .item[_v-e9c4fb18]:after {\n  border: 1px solid none;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter[_v-e9c4fb18]:after {\n  border-bottom: 1px solid #e1e1e1;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter .filter-text[_v-e9c4fb18] {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 90px;\n  vertical-align: bottom;\n}\n.filter-div .filter .item[_v-e9c4fb18] {\n  background-image: url(//www.dpfile.com/mod/app-m-style/2.9.4/css/img/repeat-y.png);\n  background-repeat: repeat-y;\n  background-position: top right;\n  background-size: auto 1px;\n  line-height: 20px;\n  color: #111111;\n  font-size: 14px;\n  position: relative;\n  z-index: 11;\n}\n.filter-div .filter .item .mask[_v-e9c4fb18] {\n  display: none;\n}\n.filter-div .filter .item .icon-active[_v-e9c4fb18] {\n  display: none;\n  z-index: 11;\n}\n.filter-div .filter .item[_v-e9c4fb18]:last-child {\n  position: relative;\n}\n.filter-div .filter .item[_v-e9c4fb18]:last-child:after {\n  border: 1px solid none;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter .item .icon-down[_v-e9c4fb18] {\n  display: inline-block;\n  width: 13px;\n  height: 8px;\n  background: url(" + __webpack_require__(11) + ") no-repeat top left;\n  background-size: cover;\n}\n.filter-div .filter-content[_v-e9c4fb18] {\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.filter-div .filter-content .main[_v-e9c4fb18] {\n  background: white;\n  padding-bottom: 45px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  top: 44px;\n}\n.filter-div .filter-content .main li[_v-e9c4fb18] {\n  line-height: 45px;\n  position: relative;\n  font-size: 14px;\n  margin-left: 12px;\n}\n.filter-div .filter-content .main li[_v-e9c4fb18]:after {\n  border-bottom: 1px solid #e1e1e1;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter-content .main li.active[_v-e9c4fb18] {\n  color: #f7871f;\n  position: relative;\n}\n.filter-div .filter-content .main li.active[_v-e9c4fb18]:after {\n  border-bottom: 1px solid #f7871f;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter-content .item[_v-e9c4fb18] {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: left;\n}\n.mask-div[_v-e9c4fb18] {\n  height: 100%;\n  background: #000000;\n  opacity: 0.3;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.filter-div.show-filter .filter .item.active .mask[_v-e9c4fb18] {\n  display: block;\n  width: 10px;\n  height: 2px;\n  background-color: white;\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  z-index: 11;\n  margin-bottom: -1px;\n}\n.filter-div.show-filter .filter .item.active .icon-active[_v-e9c4fb18] {\n  display: inline-block;\n  width: 10px;\n  height: 5px;\n  background-image: url(" + __webpack_require__(12) + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  margin-bottom: -1px;\n}\n.filter-div.show-filter .filter .item.active .icon-down[_v-e9c4fb18] {\n  background-image: url(" + __webpack_require__(13) + ");\n}\n", "", {"version":3,"sources":["/./src/App.vue"],"names":[],"mappings":"AAAA;EACE,yBAAyB;CAC1B;AACD;EACE,gvIAAgvI;EAChvI,4BAA4B;EAC5B,gCAAgC;EAChC,0BAA0B;CAC3B;AACD;EACE,0UAA0U;EAC1U,4BAA4B;EAC5B,8BAA8B;EAC9B,0BAA0B;CAC3B;AACD;EACE,++KAA++K;EAC/+K,sCAAsC;EACtC,+CAA+C;EAC/C,oCAAoC;CACrC;AACD;EACE,0UAA0U;EAC1U,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;CAC3B;AACD;EACE,moBAAmoB;EACnoB,sCAAsC;EACtC,sCAAsC;EACtC,mCAAmC;CACpC;AACD,QAAQ;AACR;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,sBAAsB;CACvB;AACD,YAAY;AACZ;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,aAAa;CACd;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,YAAY;EACZ,eAAe;EACf,UAAU;EACV,YAAY;CACb;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,SAAS;CACV;AACD;EACE,QAAQ;CACT;AACD;EACE,mBAAmB;CACpB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,sBAAsB;CACvB;AACD,kBAAkB;AAClB;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,cAAc;CACf;AACD;EACE,aAAa;CACd;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD,oBAAoB;AACpB;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,cAAc;CACf;AACD;EACE,cAAc;CACf;AACD;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;CACX;AACD;EACE,gBAAgB;EAChB,QAAQ;EACR,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,qBAAqB;EACrB,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,8BAA8B;EAC9B,2BAA2B;EAC3B,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,8BAA8B;EAC9B,2BAA2B;EAC3B,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,oBAAoB;EACpB,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,mFAAmF;EACnF,4BAA4B;EAC5B,+BAA+B;EAC/B,0BAA0B;EAC1B,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,cAAc;CACf;AACD;EACE,cAAc;EACd,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,8BAA8B;EAC9B,2BAA2B;EAC3B,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,6DAAyD;EACzD,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,aAAa;EACb,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;EAChB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,UAAU;CACX;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,8BAA8B;EAC9B,2BAA2B;EAC3B,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,8BAA8B;EAC9B,2BAA2B;EAC3B,uBAAuB;EACvB,qBAAqB;EACrB,WAAW;CACZ;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,OAAO;EACP,YAAY;EACZ,QAAQ;EACR,UAAU;CACX;AACD;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,gDAAmD;EACnD,yBAAyB;EACzB,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,UAAU;EACV,oBAAoB;CACrB;AACD;EACE,gDAA0C;CAC3C","file":"App.vue","sourcesContent":[".Hide {\n  display: none !important;\n}\n.line-top {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAKQWlDQ1BJQ0MgUHJvZmlsZQAASA2dlndUU9kWh8+9N73QEiIgJfQaegkg0jtIFQRRiUmAUAKGhCZ2RAVGFBEpVmRUwAFHhyJjRRQLg4Ji1wnyEFDGwVFEReXdjGsJ7601896a/cdZ39nnt9fZZ+9917oAUPyCBMJ0WAGANKFYFO7rwVwSE8vE9wIYEAEOWAHA4WZmBEf4RALU/L09mZmoSMaz9u4ugGS72yy/UCZz1v9/kSI3QyQGAApF1TY8fiYX5QKUU7PFGTL/BMr0lSkyhjEyFqEJoqwi48SvbPan5iu7yZiXJuShGlnOGbw0noy7UN6aJeGjjAShXJgl4GejfAdlvVRJmgDl9yjT0/icTAAwFJlfzOcmoWyJMkUUGe6J8gIACJTEObxyDov5OWieAHimZ+SKBIlJYqYR15hp5ejIZvrxs1P5YjErlMNN4Yh4TM/0tAyOMBeAr2+WRQElWW2ZaJHtrRzt7VnW5mj5v9nfHn5T/T3IevtV8Sbsz55BjJ5Z32zsrC+9FgD2JFqbHbO+lVUAtG0GQOXhrE/vIADyBQC03pzzHoZsXpLE4gwnC4vs7GxzAZ9rLivoN/ufgm/Kv4Y595nL7vtWO6YXP4EjSRUzZUXlpqemS0TMzAwOl89k/fcQ/+PAOWnNycMsnJ/AF/GF6FVR6JQJhIlou4U8gViQLmQKhH/V4X8YNicHGX6daxRodV8AfYU5ULhJB8hvPQBDIwMkbj96An3rWxAxCsi+vGitka9zjzJ6/uf6Hwtcim7hTEEiU+b2DI9kciWiLBmj34RswQISkAd0oAo0gS4wAixgDRyAM3AD3iAAhIBIEAOWAy5IAmlABLJBPtgACkEx2AF2g2pwANSBetAEToI2cAZcBFfADXALDIBHQAqGwUswAd6BaQiC8BAVokGqkBakD5lC1hAbWgh5Q0FQOBQDxUOJkBCSQPnQJqgYKoOqoUNQPfQjdBq6CF2D+qAH0CA0Bv0BfYQRmALTYQ3YALaA2bA7HAhHwsvgRHgVnAcXwNvhSrgWPg63whfhG/AALIVfwpMIQMgIA9FGWAgb8URCkFgkAREha5EipAKpRZqQDqQbuY1IkXHkAwaHoWGYGBbGGeOHWYzhYlZh1mJKMNWYY5hWTBfmNmYQM4H5gqVi1bGmWCesP3YJNhGbjS3EVmCPYFuwl7ED2GHsOxwOx8AZ4hxwfrgYXDJuNa4Etw/XjLuA68MN4SbxeLwq3hTvgg/Bc/BifCG+Cn8cfx7fjx/GvyeQCVoEa4IPIZYgJGwkVBAaCOcI/YQRwjRRgahPdCKGEHnEXGIpsY7YQbxJHCZOkxRJhiQXUiQpmbSBVElqIl0mPSa9IZPJOmRHchhZQF5PriSfIF8lD5I/UJQoJhRPShxFQtlOOUq5QHlAeUOlUg2obtRYqpi6nVpPvUR9Sn0vR5Mzl/OX48mtk6uRa5Xrl3slT5TXl3eXXy6fJ18hf0r+pvy4AlHBQMFTgaOwVqFG4bTCPYVJRZqilWKIYppiiWKD4jXFUSW8koGStxJPqUDpsNIlpSEaQtOledK4tE20Otpl2jAdRzek+9OT6cX0H+i99AllJWVb5SjlHOUa5bPKUgbCMGD4M1IZpYyTjLuMj/M05rnP48/bNq9pXv+8KZX5Km4qfJUilWaVAZWPqkxVb9UU1Z2qbapP1DBqJmphatlq+9Uuq43Pp893ns+dXzT/5PyH6rC6iXq4+mr1w+o96pMamhq+GhkaVRqXNMY1GZpumsma5ZrnNMe0aFoLtQRa5VrntV4wlZnuzFRmJbOLOaGtru2nLdE+pN2rPa1jqLNYZ6NOs84TXZIuWzdBt1y3U3dCT0svWC9fr1HvoT5Rn62fpL9Hv1t/ysDQINpgi0GbwaihiqG/YZ5ho+FjI6qRq9Eqo1qjO8Y4Y7ZxivE+41smsImdSZJJjclNU9jU3lRgus+0zwxr5mgmNKs1u8eisNxZWaxG1qA5wzzIfKN5m/krCz2LWIudFt0WXyztLFMt6ywfWSlZBVhttOqw+sPaxJprXWN9x4Zq42Ozzqbd5rWtqS3fdr/tfTuaXbDdFrtOu8/2DvYi+yb7MQc9h3iHvQ732HR2KLuEfdUR6+jhuM7xjOMHJ3snsdNJp9+dWc4pzg3OowsMF/AX1C0YctFx4bgccpEuZC6MX3hwodRV25XjWuv6zE3Xjed2xG3E3dg92f24+ysPSw+RR4vHlKeT5xrPC16Il69XkVevt5L3Yu9q76c+Oj6JPo0+E752vqt9L/hh/QL9dvrd89fw5/rX+08EOASsCegKpARGBFYHPgsyCRIFdQTDwQHBu4IfL9JfJFzUFgJC/EN2hTwJNQxdFfpzGC4sNKwm7Hm4VXh+eHcELWJFREPEu0iPyNLIR4uNFksWd0bJR8VF1UdNRXtFl0VLl1gsWbPkRoxajCCmPRYfGxV7JHZyqffS3UuH4+ziCuPuLjNclrPs2nK15anLz66QX8FZcSoeGx8d3xD/iRPCqeVMrvRfuXflBNeTu4f7kufGK+eN8V34ZfyRBJeEsoTRRJfEXYljSa5JFUnjAk9BteB1sl/ygeSplJCUoykzqdGpzWmEtPi000IlYYqwK10zPSe9L8M0ozBDuspp1e5VE6JA0ZFMKHNZZruYjv5M9UiMJJslg1kLs2qy3mdHZZ/KUcwR5vTkmuRuyx3J88n7fjVmNXd1Z752/ob8wTXuaw6thdauXNu5Tnddwbrh9b7rj20gbUjZ8MtGy41lG99uit7UUaBRsL5gaLPv5sZCuUJR4b0tzlsObMVsFWzt3WazrWrblyJe0fViy+KK4k8l3JLr31l9V/ndzPaE7b2l9qX7d+B2CHfc3em681iZYlle2dCu4F2t5czyovK3u1fsvlZhW3FgD2mPZI+0MqiyvUqvakfVp+qk6oEaj5rmvep7t+2d2sfb17/fbX/TAY0DxQc+HhQcvH/I91BrrUFtxWHc4azDz+ui6rq/Z39ff0TtSPGRz0eFR6XHwo911TvU1zeoN5Q2wo2SxrHjccdv/eD1Q3sTq+lQM6O5+AQ4ITnx4sf4H++eDDzZeYp9qukn/Z/2ttBailqh1tzWibakNml7THvf6YDTnR3OHS0/m/989Iz2mZqzymdLz5HOFZybOZ93fvJCxoXxi4kXhzpXdD66tOTSna6wrt7LgZevXvG5cqnbvfv8VZerZ645XTt9nX297Yb9jdYeu56WX+x+aem172296XCz/ZbjrY6+BX3n+l37L972un3ljv+dGwOLBvruLr57/17cPel93v3RB6kPXj/Mejj9aP1j7OOiJwpPKp6qP6391fjXZqm99Oyg12DPs4hnj4a4Qy//lfmvT8MFz6nPK0a0RupHrUfPjPmM3Xqx9MXwy4yX0+OFvyn+tveV0auffnf7vWdiycTwa9HrmT9K3qi+OfrW9m3nZOjk03dp76anit6rvj/2gf2h+2P0x5Hp7E/4T5WfjT93fAn88ngmbWbm3/eE8/syOll+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cqn0On0AAAAQSURBVAgdY3z48OF/BmQAADhGA6QvTNZRAAAAAElFTkSuQmCC');\n  background-repeat: repeat-x;\n  background-position: center top;\n  background-size: auto 1px;\n}\n.line-bottom {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY2BgOAAAAMQAwbn75sMAAAAASUVORK5CYII=);\n  background-repeat: repeat-x;\n  background-position: 0 bottom;\n  background-size: auto 1px;\n}\n.line-top-bottom {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDg0NjJGODhFOUY3MTFFMzgyNDZBNkRCNjM5MDI2MzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDg0NjJGODdFOUY3MTFFMzgyNDZBNkRCNjM5MDI2MzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZCQ0M0ODFERjAyMTFFMzg5RDE4NENEQUZENTUzNEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZCQ0M0ODJERjAyMTFFMzg5RDE4NENEQUZENTUzNEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5EbLiBAAAAGUlEQVR42mL6//8/AwizPHr06D8DEAAEGABriwmmt+2WgAAAAABJRU5ErkJggg=='), url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAKQWlDQ1BJQ0MgUHJvZmlsZQAASA2dlndUU9kWh8+9N73QEiIgJfQaegkg0jtIFQRRiUmAUAKGhCZ2RAVGFBEpVmRUwAFHhyJjRRQLg4Ji1wnyEFDGwVFEReXdjGsJ7601896a/cdZ39nnt9fZZ+9917oAUPyCBMJ0WAGANKFYFO7rwVwSE8vE9wIYEAEOWAHA4WZmBEf4RALU/L09mZmoSMaz9u4ugGS72yy/UCZz1v9/kSI3QyQGAApF1TY8fiYX5QKUU7PFGTL/BMr0lSkyhjEyFqEJoqwi48SvbPan5iu7yZiXJuShGlnOGbw0noy7UN6aJeGjjAShXJgl4GejfAdlvVRJmgDl9yjT0/icTAAwFJlfzOcmoWyJMkUUGe6J8gIACJTEObxyDov5OWieAHimZ+SKBIlJYqYR15hp5ejIZvrxs1P5YjErlMNN4Yh4TM/0tAyOMBeAr2+WRQElWW2ZaJHtrRzt7VnW5mj5v9nfHn5T/T3IevtV8Sbsz55BjJ5Z32zsrC+9FgD2JFqbHbO+lVUAtG0GQOXhrE/vIADyBQC03pzzHoZsXpLE4gwnC4vs7GxzAZ9rLivoN/ufgm/Kv4Y595nL7vtWO6YXP4EjSRUzZUXlpqemS0TMzAwOl89k/fcQ/+PAOWnNycMsnJ/AF/GF6FVR6JQJhIlou4U8gViQLmQKhH/V4X8YNicHGX6daxRodV8AfYU5ULhJB8hvPQBDIwMkbj96An3rWxAxCsi+vGitka9zjzJ6/uf6Hwtcim7hTEEiU+b2DI9kciWiLBmj34RswQISkAd0oAo0gS4wAixgDRyAM3AD3iAAhIBIEAOWAy5IAmlABLJBPtgACkEx2AF2g2pwANSBetAEToI2cAZcBFfADXALDIBHQAqGwUswAd6BaQiC8BAVokGqkBakD5lC1hAbWgh5Q0FQOBQDxUOJkBCSQPnQJqgYKoOqoUNQPfQjdBq6CF2D+qAH0CA0Bv0BfYQRmALTYQ3YALaA2bA7HAhHwsvgRHgVnAcXwNvhSrgWPg63whfhG/AALIVfwpMIQMgIA9FGWAgb8URCkFgkAREha5EipAKpRZqQDqQbuY1IkXHkAwaHoWGYGBbGGeOHWYzhYlZh1mJKMNWYY5hWTBfmNmYQM4H5gqVi1bGmWCesP3YJNhGbjS3EVmCPYFuwl7ED2GHsOxwOx8AZ4hxwfrgYXDJuNa4Etw/XjLuA68MN4SbxeLwq3hTvgg/Bc/BifCG+Cn8cfx7fjx/GvyeQCVoEa4IPIZYgJGwkVBAaCOcI/YQRwjRRgahPdCKGEHnEXGIpsY7YQbxJHCZOkxRJhiQXUiQpmbSBVElqIl0mPSa9IZPJOmRHchhZQF5PriSfIF8lD5I/UJQoJhRPShxFQtlOOUq5QHlAeUOlUg2obtRYqpi6nVpPvUR9Sn0vR5Mzl/OX48mtk6uRa5Xrl3slT5TXl3eXXy6fJ18hf0r+pvy4AlHBQMFTgaOwVqFG4bTCPYVJRZqilWKIYppiiWKD4jXFUSW8koGStxJPqUDpsNIlpSEaQtOledK4tE20Otpl2jAdRzek+9OT6cX0H+i99AllJWVb5SjlHOUa5bPKUgbCMGD4M1IZpYyTjLuMj/M05rnP48/bNq9pXv+8KZX5Km4qfJUilWaVAZWPqkxVb9UU1Z2qbapP1DBqJmphatlq+9Uuq43Pp893ns+dXzT/5PyH6rC6iXq4+mr1w+o96pMamhq+GhkaVRqXNMY1GZpumsma5ZrnNMe0aFoLtQRa5VrntV4wlZnuzFRmJbOLOaGtru2nLdE+pN2rPa1jqLNYZ6NOs84TXZIuWzdBt1y3U3dCT0svWC9fr1HvoT5Rn62fpL9Hv1t/ysDQINpgi0GbwaihiqG/YZ5ho+FjI6qRq9Eqo1qjO8Y4Y7ZxivE+41smsImdSZJJjclNU9jU3lRgus+0zwxr5mgmNKs1u8eisNxZWaxG1qA5wzzIfKN5m/krCz2LWIudFt0WXyztLFMt6ywfWSlZBVhttOqw+sPaxJprXWN9x4Zq42Ozzqbd5rWtqS3fdr/tfTuaXbDdFrtOu8/2DvYi+yb7MQc9h3iHvQ732HR2KLuEfdUR6+jhuM7xjOMHJ3snsdNJp9+dWc4pzg3OowsMF/AX1C0YctFx4bgccpEuZC6MX3hwodRV25XjWuv6zE3Xjed2xG3E3dg92f24+ysPSw+RR4vHlKeT5xrPC16Il69XkVevt5L3Yu9q76c+Oj6JPo0+E752vqt9L/hh/QL9dvrd89fw5/rX+08EOASsCegKpARGBFYHPgsyCRIFdQTDwQHBu4IfL9JfJFzUFgJC/EN2hTwJNQxdFfpzGC4sNKwm7Hm4VXh+eHcELWJFREPEu0iPyNLIR4uNFksWd0bJR8VF1UdNRXtFl0VLl1gsWbPkRoxajCCmPRYfGxV7JHZyqffS3UuH4+ziCuPuLjNclrPs2nK15anLz66QX8FZcSoeGx8d3xD/iRPCqeVMrvRfuXflBNeTu4f7kufGK+eN8V34ZfyRBJeEsoTRRJfEXYljSa5JFUnjAk9BteB1sl/ygeSplJCUoykzqdGpzWmEtPi000IlYYqwK10zPSe9L8M0ozBDuspp1e5VE6JA0ZFMKHNZZruYjv5M9UiMJJslg1kLs2qy3mdHZZ/KUcwR5vTkmuRuyx3J88n7fjVmNXd1Z752/ob8wTXuaw6thdauXNu5Tnddwbrh9b7rj20gbUjZ8MtGy41lG99uit7UUaBRsL5gaLPv5sZCuUJR4b0tzlsObMVsFWzt3WazrWrblyJe0fViy+KK4k8l3JLr31l9V/ndzPaE7b2l9qX7d+B2CHfc3em681iZYlle2dCu4F2t5czyovK3u1fsvlZhW3FgD2mPZI+0MqiyvUqvakfVp+qk6oEaj5rmvep7t+2d2sfb17/fbX/TAY0DxQc+HhQcvH/I91BrrUFtxWHc4azDz+ui6rq/Z39ff0TtSPGRz0eFR6XHwo911TvU1zeoN5Q2wo2SxrHjccdv/eD1Q3sTq+lQM6O5+AQ4ITnx4sf4H++eDDzZeYp9qukn/Z/2ttBailqh1tzWibakNml7THvf6YDTnR3OHS0/m/989Iz2mZqzymdLz5HOFZybOZ93fvJCxoXxi4kXhzpXdD66tOTSna6wrt7LgZevXvG5cqnbvfv8VZerZ645XTt9nX297Yb9jdYeu56WX+x+aem172296XCz/ZbjrY6+BX3n+l37L972un3ljv+dGwOLBvruLr57/17cPel93v3RB6kPXj/Mejj9aP1j7OOiJwpPKp6qP6391fjXZqm99Oyg12DPs4hnj4a4Qy//lfmvT8MFz6nPK0a0RupHrUfPjPmM3Xqx9MXwy4yX0+OFvyn+tveV0auffnf7vWdiycTwa9HrmT9K3qi+OfrW9m3nZOjk03dp76anit6rvj/2gf2h+2P0x5Hp7E/4T5WfjT93fAn88ngmbWbm3/eE8/syOll+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cqn0On0AAAAQSURBVAgdY3z48OF/BmQAADhGA6QvTNZRAAAAAElFTkSuQmCC');\n  background-repeat: repeat-x, repeat-x;\n  background-position: center bottom, center top;\n  background-size: auto 1px, auto 1px;\n}\n.line-right {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY3BgcAAAAQQAgT0QLxkAAAAASUVORK5CYII=);\n  background-repeat: repeat-y;\n  background-position: right 0;\n  background-size: 1px auto;\n}\n.line-right-bottom {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY3BgcAAAAQQAgT0QLxkAAAAASUVORK5CYII=), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////k5ORmXLuLAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAFf0AABX9Ac1wUWEAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC4xMi40hE/IegAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAMSURBVAiZY2BgOAAAAMQAwbn75sMAAAAASUVORK5CYII=);\n  background-repeat: repeat-y, repeat-x;\n  background-position: right 0,0 bottom;\n  background-size: 1px auto,auto 1px;\n}\n/*font*/\n.f12 {\n  font-size: 12px;\n}\n.f13 {\n  font-size: 13px;\n}\n.f14 {\n  font-size: 14px;\n}\n.f16 {\n  font-size: 16px;\n}\n.f20 {\n  font-size: 20px;\n}\n.fb {\n  font-weight: bold;\n}\n.fn {\n  font-weight: normal;\n}\n.t2 {\n  text-indent: 2em;\n}\n.lh150 {\n  line-height: 150%;\n}\n.lh180 {\n  line-height: 180%;\n}\n.lh200 {\n  line-height: 200%;\n}\n.unl {\n  text-decoration: underline;\n}\n.no_unl {\n  text-decoration: none;\n}\n/*position*/\n.tl {\n  text-align: left;\n}\n.tc {\n  text-align: center;\n}\n.tr {\n  text-align: right;\n}\n.bc {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fl {\n  float: left;\n  display: inline;\n}\n.fr {\n  float: right;\n  display: inline;\n}\n.cb {\n  clear: both;\n}\n.cl {\n  clear: left;\n}\n.cr {\n  clear: right;\n}\n.clear {\n  clear: both;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n}\n.clearfix:before {\n  content: '';\n  display: block;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.vm {\n  vertical-align: middle;\n}\n.pr {\n  position: relative;\n}\n.pa {\n  position: absolute;\n}\n.abs-right {\n  position: absolute;\n  right: 0;\n}\n.zoom {\n  zoom: 1;\n}\n.invisible {\n  visibility: hidden;\n}\n.none {\n  display: none;\n}\n.db {\n  display: block;\n}\n.di {\n  display: inline;\n}\n.dib {\n  display: inline-block;\n}\n/*width & height*/\n.w10 {\n  width: 10px;\n}\n.w20 {\n  width: 20px;\n}\n.w30 {\n  width: 30px;\n}\n.w40 {\n  width: 40px;\n}\n.w50 {\n  width: 50px;\n}\n.w60 {\n  width: 60px;\n}\n.w70 {\n  width: 70px;\n}\n.w80 {\n  width: 80px;\n}\n.w90 {\n  width: 90px;\n}\n.w100 {\n  width: 100px;\n}\n.w200 {\n  width: 200px;\n}\n.w250 {\n  width: 250px;\n}\n.w300 {\n  width: 300px;\n}\n.w400 {\n  width: 400px;\n}\n.w500 {\n  width: 500px;\n}\n.w600 {\n  width: 600px;\n}\n.w700 {\n  width: 700px;\n}\n.w800 {\n  width: 800px;\n}\n.w {\n  width: 100%;\n}\n.h50 {\n  height: 50px;\n}\n.h80 {\n  height: 80px;\n}\n.h100 {\n  height: 100px;\n}\n.h200 {\n  height: 200px;\n}\n.h {\n  height: 100%;\n}\n.size1of2 {\n  width: 50%;\n}\n.size1of3 {\n  width: 33.33333%;\n}\n.size2of3 {\n  width: 66.66666%;\n}\n.size1of4 {\n  width: 25%;\n}\n.size3of4 {\n  width: 75%;\n}\n.size1of5 {\n  width: 20%;\n}\n.size2of5 {\n  width: 40%;\n}\n.size3of5 {\n  width: 60%;\n}\n.size4of5 {\n  width: 80%;\n}\n/*margin & padding*/\n.m10 {\n  margin: 10px;\n}\n.m15 {\n  margin: 15px;\n}\n.m30 {\n  margin: 30px;\n}\n.mt5 {\n  margin-top: 5px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.mt15 {\n  margin-top: 15px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.mt30 {\n  margin-top: 30px;\n}\n.mt50 {\n  margin-top: 50px;\n}\n.mt100 {\n  margin-top: 100px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.mb15 {\n  margin-bottom: 15px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.mb30 {\n  margin-bottom: 30px;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n.mb100 {\n  margin-bottom: 100px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.ml15 {\n  margin-left: 15px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.ml30 {\n  margin-left: 30px;\n}\n.ml50 {\n  margin-left: 50px;\n}\n.ml100 {\n  margin-left: 100px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.mr15 {\n  margin-right: 15px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.mr30 {\n  margin-right: 30px;\n}\n.mr50 {\n  margin-right: 50px;\n}\n.mr100 {\n  margin-right: 100px;\n}\n.p10 {\n  padding: 10px;\n}\n.p15 {\n  padding: 15px;\n}\n.p30 {\n  padding: 30px;\n}\n.pt5 {\n  padding-top: 5px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.pt15 {\n  padding-top: 15px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.pt30 {\n  padding-top: 30px;\n}\n.pt50 {\n  padding-top: 50px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.pb15 {\n  padding-bottom: 15px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.pb30 {\n  padding-bottom: 30px;\n}\n.pb50 {\n  padding-bottom: 50px;\n}\n.pb100 {\n  padding-bottom: 100px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.pl15 {\n  padding-left: 15px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n.pl30 {\n  padding-left: 30px;\n}\n.pl50 {\n  padding-left: 50px;\n}\n.pl100 {\n  padding-left: 100px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.pr15 {\n  padding-right: 15px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.pr30 {\n  padding-right: 30px;\n}\n.pr50 {\n  padding-right: 50px;\n}\n.pr100 {\n  padding-right: 100px;\n}\nul {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.filter-div {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  font-size: 14px;\n  color: #111111;\n  z-index: 20;\n  background-color: white;\n  display: flex;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n}\n.filter-div .filter {\n  text-align: center;\n  background-color: #fff;\n  flex: 1;\n  box-flex: 1;\n  -webkit-box-flex: 1;\n  -ms-box-flex: 1;\n  -ms-flex: 1;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  line-height: 20px;\n  background-color: white;\n  z-index: 11;\n  position: relative;\n}\n.filter-div .filter:last-child .item {\n  border-right: none;\n  position: relative;\n  background-image: none;\n}\n.filter-div .filter:last-child .item:after {\n  border: 1px solid none;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter:after {\n  border-bottom: 1px solid #e1e1e1;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter .filter-text {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 90px;\n  vertical-align: bottom;\n}\n.filter-div .filter .item {\n  background-image: url(//www.dpfile.com/mod/app-m-style/2.9.4/css/img/repeat-y.png);\n  background-repeat: repeat-y;\n  background-position: top right;\n  background-size: auto 1px;\n  line-height: 20px;\n  color: #111111;\n  font-size: 14px;\n  position: relative;\n  z-index: 11;\n}\n.filter-div .filter .item .mask {\n  display: none;\n}\n.filter-div .filter .item .icon-active {\n  display: none;\n  z-index: 11;\n}\n.filter-div .filter .item:last-child {\n  position: relative;\n}\n.filter-div .filter .item:last-child:after {\n  border: 1px solid none;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter .item .icon-down {\n  display: inline-block;\n  width: 13px;\n  height: 8px;\n  background: url('img/down-arrow.png') no-repeat top left;\n  background-size: cover;\n}\n.filter-div .filter-content {\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.filter-div .filter-content .main {\n  background: white;\n  padding-bottom: 45px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  top: 44px;\n}\n.filter-div .filter-content .main li {\n  line-height: 45px;\n  position: relative;\n  font-size: 14px;\n  margin-left: 12px;\n}\n.filter-div .filter-content .main li:after {\n  border-bottom: 1px solid #e1e1e1;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter-content .main li.active {\n  color: #f7871f;\n  position: relative;\n}\n.filter-div .filter-content .main li.active:after {\n  border-bottom: 1px solid #f7871f;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 200%;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  -moz-transform-origin: 0 0;\n  box-sizing: border-box;\n  pointer-events: none;\n  z-index: 9;\n}\n.filter-div .filter-content .item {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: left;\n}\n.mask-div {\n  height: 100%;\n  background: #000000;\n  opacity: 0.3;\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.filter-div.show-filter .filter .item.active .mask {\n  display: block;\n  width: 10px;\n  height: 2px;\n  background-color: white;\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  z-index: 11;\n  margin-bottom: -1px;\n}\n.filter-div.show-filter .filter .item.active .icon-active {\n  display: inline-block;\n  width: 10px;\n  height: 5px;\n  background-image: url('img/arrow-item-active.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: absolute;\n  bottom: -12px;\n  left: 50%;\n  margin-bottom: -1px;\n}\n.filter-div.show-filter .filter .item.active .icon-down {\n  background-image: url('img/up-arrow.png');\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8207d682807aadb5d7411f29e479b526.png";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAOCAYAAABO3B6yAAAAAXNSR0IArs4c6QAAAaJJREFUOBG9VNmOwjAQc1qgQHkAxE3//5t4AAkohwBV5RD3tetIgcKyIXSlzUvTTjr2eJwR1++FGGu73WI4HCKfz6NQKMC27RhZACvOX4vFAu12W4KSxGg0wvF4jJMK4hMFKNZkMkEYhiiVSigWizgcDhgMBpJMvV5HJpP5iIgxgfP5DN/3sd/v4XkeXNe9AZEYSazXazSbTeRyOQghbnHdxojAbrdDr9eTVRI8nU6/zEl1ZrMZarWasS8SLzNFPi6XS1k5q6LEqVQqEn3cVqtVGVdKVSoVJJPJx0NPb1oFWA1NxorK5bKx0zebDTqdDrLZrGyX4zhPsPfXlwQul4sEZr8Jzn6b9lSlpmfG4zF4Xancbzl+EKCr+/0+LMuShtKxV2C6J30RBIEshDODeaPrwQN0Mc1G6RqNhrbf0SS6PX1BH7CVVJStTCTusDcFyJJXiQdonughHYBpbLVaodvtyivK4pSy4nQ6XdkrxY5uf5bJFOTdOU7L6XQqfUFvUWnRarWulIgDRLF6l+ivceULTlJrPp/Lsfpf4CRPX/BW0W9fp5XR5GJZNhgAAAAASUVORK5CYII="

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "53be95958098ab51b55954f8bf05072b.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            activeNavList: this.config[0],
	            showFilterContent: false
	        };
	    },
	
	    props: ['config'],
	    components: {},
	    ready: function ready() {},
	
	    methods: {
	        showFilterContentFun: function showFilterContentFun(index, item) {
	            this.showFilterContent = true;
	            this.activeNavList = this.config[index];
	            this.config.forEach(function (ele, index) {
	                ele.showFilterFlag = false;
	                if (ele.navCat == item.navCat) {
	                    ele.showFilterFlag = true;
	                }
	            });
	        },
	        selectItemFun: function selectItemFun(item, event) {
	            event.preventDefault();
	            event.stopPropagation();
	            var self = this;
	            self.activeNavList.listData.forEach(function (ele, index) {
	                if (ele.text == item.text) {
	                    self.activeNavList.activeFilterText = item.text;
	                    self.activeNavList.activeFilterValue = item.value;
	                    return;
	                }
	            });
	            self.showFilterContent = false;
	            self.fetchData();
	        },
	        hideFilterContentFun: function hideFilterContentFun() {
	            this.showFilterContent = false;
	        },
	        fetchData: function fetchData() {
	            var activeList = [];
	            this.config.forEach(function (item, index) {
	                item.listData.forEach(function (ele, index) {
	                    if (ele.text == item.activeFilterText) {
	                        activeList.push(ele.value);
	                    }
	                });
	            });
	            this.$emit('surenav', activeList);
	        }
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<section _v-e9c4fb18=\"\">\n  <div class=\"filter-div\" :class=\"{'show-filter':showFilterContent}\" _v-e9c4fb18=\"\">\n    <div class=\"filter\" v-for=\"(index,item) in config\" @click=\"showFilterContentFun(index,item)\" _v-e9c4fb18=\"\">\n        <div class=\"item\" :class=\"{'active':item.showFilterFlag}\" _v-e9c4fb18=\"\">\n            <div class=\"filter-text\" _v-e9c4fb18=\"\">{{item.activeFilterText}}</div>\n            <i class=\"icon icon-down\" _v-e9c4fb18=\"\"></i>\n            <i class=\"mask\" _v-e9c4fb18=\"\"></i>\n            <i class=\"icon icon-active\" _v-e9c4fb18=\"\"></i>\n        </div>\n        <div class=\"filter-content\" v-show=\"showFilterContent&amp;&amp;item.showFilterFlag\" _v-e9c4fb18=\"\">\n            <div class=\"main\" _v-e9c4fb18=\"\">\n              <ul _v-e9c4fb18=\"\">\n                <li class=\"item\" :class=\"{'active':ele.text==item.activeFilterText}\" v-for=\"(index,ele) in item.listData\" @click=\"selectItemFun(ele,$event)\" _v-e9c4fb18=\"\">{{ele.text}}\n                </li>\n              </ul>\n            </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"mask-div\" v-show=\"showFilterContent\" @click=\"hideFilterContentFun\" _v-e9c4fb18=\"\"></div>\n</section>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _promise = __webpack_require__(18);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _assign = __webpack_require__(83);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _typeof2 = __webpack_require__(89);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _defineProperty2 = __webpack_require__(106);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _NewUserParamCode;
	
	var _isomorphicFetch = __webpack_require__(110);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _fetchJsonp = __webpack_require__(112);
	
	var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
	
	var _utilMUa = __webpack_require__(113);
	
	var _utilMUa2 = _interopRequireDefault(_utilMUa);
	
	var _knb = __webpack_require__(114);
	
	var _knb2 = _interopRequireDefault(_knb);
	
	var _geo = __webpack_require__(307);
	
	var _geo2 = _interopRequireDefault(_geo);
	
	var _cookieDough = __webpack_require__(327);
	
	var _cookieDough2 = _interopRequireDefault(_cookieDough);
	
	var _qs = __webpack_require__(329);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	__webpack_require__(334);
	
	var _rainbowEnums = __webpack_require__(335);
	
	var _urlRewrite = __webpack_require__(336);
	
	var _urlRewrite2 = _interopRequireDefault(_urlRewrite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(337).polyfill();
	
	
	var ERROR_MES = "未知错误";
	var ERROR_TYPE_MSG = "未知类型";
	var MEITUAN = 2;
	var DIANPING = 1;
	
	var DrawStatusCode = (0, _defineProperty3.default)({
	  "000000": _rainbowEnums.DrawStatus.SUCCESS,
	  "110001": _rainbowEnums.DrawStatus.USER_NOT_LOGIN,
	  "110002": _rainbowEnums.DrawStatus.USER_STAUS_ABNORMAL,
	  "110003": _rainbowEnums.DrawStatus.UNMATCHED_USER,
	  "110004": _rainbowEnums.DrawStatus.USER_NOT_EXIST,
	  "300001": _rainbowEnums.DrawStatus.INPUT_INVALID_ERROR,
	  "300002": _rainbowEnums.DrawStatus.ACTIVITY_NOT_EXIST,
	  "300003": _rainbowEnums.DrawStatus.ACTIVITY_NOT_RUNNING,
	  "300005": _rainbowEnums.DrawStatus.YOU_HAVE_WIN_ALL_PRIZE,
	  "300006": _rainbowEnums.DrawStatus.ACTIVITY_HAS_STOP,
	  "300007": _rainbowEnums.DrawStatus.ACTIVITY_HAS_SUSPEND,
	  "300008": _rainbowEnums.DrawStatus.HIT_NOTHING,
	  "300009": _rainbowEnums.DrawStatus.NOT_ENOUGH_DRAW_COUNT,
	  "300010": _rainbowEnums.DrawStatus.NO_PERMISSION,
	  "300011": _rainbowEnums.DrawStatus.HIT_PRIZE_AND_DRAW_COUNT_PASS_MAX,
	  "300012": _rainbowEnums.DrawStatus.AVAILABLE_PRIZE_STOCK_EMPTY,
	  "300013": _rainbowEnums.DrawStatus.NOT_ENOUGH_PRIZE,
	  "300014": _rainbowEnums.DrawStatus.ACTIVITY_QUOTA_EMPTY,
	  "300015": _rainbowEnums.DrawStatus.SHARE_FOR_ONE_MORE,
	  "300020": _rainbowEnums.DrawStatus.NO_PRIZELISE,
	  "300016": _rainbowEnums.DrawStatus.NOT_ENOUGH_DAY_DRAW_COUNT,
	  "301001": _rainbowEnums.DrawStatus.NOT_OBJECTPRIZE,
	  "302001": _rainbowEnums.DrawStatus.LIMIT_KEY_NOT_FOUND
	}, '300020', _rainbowEnums.DrawStatus.LIMIT_BY_RATE);
	
	var ShopStatusCode = {
	  "000000": _rainbowEnums.ShopStatus.SUCCESS,
	  "120001": _rainbowEnums.ShopStatus.ERROR_TOPICID
	};
	
	var DrawStatusSuccessCode = {
	  4: _rainbowEnums.DrawStatusSuccess.DRAW_NORMAL,
	  2: _rainbowEnums.DrawStatusSuccess.DRAW_SHARE_ENABLE,
	  0: _rainbowEnums.DrawStatusSuccess.DRAW_TOMORROW,
	  1: _rainbowEnums.DrawStatusSuccess.DRAW_LIMITED
	};
	
	var DrawEventSuccessCode = {
	  1: _rainbowEnums.DrawEventSuccess.DUPLICATED,
	  0: _rainbowEnums.DrawEventSuccess.NOT_DUPLICATED
	};
	
	var DrawEventSuccessTypeCode = {
	  0: _rainbowEnums.DrawEventSuccessType.THANKS,
	  1: _rainbowEnums.DrawEventSuccessType.COMBINATION,
	  2: _rainbowEnums.DrawEventSuccessType.SINGLETON,
	  3: _rainbowEnums.DrawEventSuccessType.COOPERATION,
	  4: _rainbowEnums.DrawEventSuccessType.MATERIAL_WITH_ADDRESS,
	  5: _rainbowEnums.DrawEventSuccessType.MERCHANT,
	  6: _rainbowEnums.DrawEventSuccessType.MATERIAL_WITHOUT_ADDRESS
	};
	
	var NewUserParamCode = (_NewUserParamCode = {}, (0, _defineProperty3.default)(_NewUserParamCode, _rainbowEnums.NewUserParam.LIREN, 50), (0, _defineProperty3.default)(_NewUserParamCode, _rainbowEnums.NewUserParam.YULE, 30), (0, _defineProperty3.default)(_NewUserParamCode, _rainbowEnums.NewUserParam.EDU, 75), (0, _defineProperty3.default)(_NewUserParamCode, _rainbowEnums.NewUserParam.QINZI, 100), (0, _defineProperty3.default)(_NewUserParamCode, _rainbowEnums.NewUserParam.KTV, 15), _NewUserParamCode);
	
	var PageViewStatusCode = {
	  "000000": _rainbowEnums.PageViewStatus.SUCCESS,
	  "100001": _rainbowEnums.PageViewStatus.ILLEGAL_REQUEST_PARAM,
	  "999999": _rainbowEnums.PageViewStatus.UNKNOWN
	};
	
	var EXPOSE_KEY = "data-exposed";
	
	var COMPONENT_NAME = COMPONENT_NAME || "";
	
	var exposeAction = function exposeAction(DOM, cb) {
	  var triggerOnce = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var threshold = arguments[3];
	  var exposeKey = arguments[4];
	
	  threshold = threshold || 0;
	  window.addEventListener('scroll', function () {
	    if (DOM.offsetTop - document.body.scrollTop <= window.innerHeight - threshold && !DOM.getAttribute(exposeKey || EXPOSE_KEY) && DOM.offsetHeight > 0) {
	      cb && cb();
	      triggerOnce && DOM.setAttribute(exposeKey || EXPOSE_KEY, true);
	    }
	  });
	  setTimeout(function () {
	    if (DOM.offsetTop - document.body.scrollTop <= window.innerHeight - threshold && !DOM.getAttribute(exposeKey || EXPOSE_KEY) && DOM.offsetHeight > 0) {
	      cb && cb();
	      triggerOnce && DOM.setAttribute(exposeKey || EXPOSE_KEY, true);
	    }
	  }, 500);
	};
	
	var vueRainbow = {};
	vueRainbow.config = {};
	vueRainbow.install = function (Vue) {
	  var mixin = {
	    data: function data() {
	      if (this.$parent) {
	        return {
	          _hippoExtend: {},
	          _comName: this.$options.name,
	          _lat: 0,
	          _lng: 0,
	          _cityId: this.determinePlatform() == MEITUAN ? 10 : 1
	        };
	      }
	      return {};
	    },
	    ready: function ready() {
	      var _this = this;
	
	      var self = this;
	
	      if (this.$parent) {
	        exposeAction(this.$el, function () {
	          _this.track('view', null, _this.$data._hippoExtend);
	        });
	      } else {
	        (0, _geo2.default)(function (config) {
	          _this.$data._lng = config.lng || null;
	          _this.$data._lat = config.lat || null;
	          _this.$data._cityId = config.cityId == '' ? _this.determinePlatform() == MEITUAN ? 10 : 1 : config.cityId;
	        }, (0, _utilMUa2.default)().source);
	        if (this.$root.config && this.$root.config.topicId) {
	
	          this.reportPageView(this.$root.config.topicId, this.determinePlatform());
	        }
	      }
	    },
	
	    methods: {
	      determinePlatform: function determinePlatform(platform) {
	        if (!platform) {
	          switch ((0, _utilMUa2.default)().source) {
	            case 'meituan':
	              platform = MEITUAN;
	              break;
	            default:
	              platform = DIANPING;
	              break;
	          }
	        }
	        return platform;
	      },
	      track: function track(action, type, extend) {
	        var _this2 = this;
	
	        var target = (typeof extend === 'undefined' ? 'undefined' : (0, _typeof3.default)(extend)) == 'object' ? extend : {};
	        if ((0, _utilMUa2.default)().type == "mtgroup" || (0, _utilMUa2.default)().type == "dpapp") {
	          _knb2.default.ready(function () {
	            _knb2.default.getUserInfo({
	              success: function success(user) {
	                try {
	                  var mvObj = (0, _assign2.default)(target, {
	                    "module": _this2.$data._comName || "",
	                    abtest: window.__RANDOM__STATUS || "",
	                    "action": action,
	                    "cartid": user.userId,
	                    "type": type,
	                    "topicid": _this2.$root && _this2.$root.config.topicId || "",
	                    "note": _this2.$root && _this2.$root.config.bu || ""
	                  });
	                  _hip.push(['mv', mvObj]);
	                } catch (e) {
	                  console.error(e);
	                }
	              }
	            });
	          });
	        } else {
	          try {
	            var mvObj = (0, _assign2.default)(target, {
	              "module": this.$data._comName || "",
	              abtest: window.__RANDOM__STATUS || "",
	              "action": action,
	              "cartid": "",
	              "type": type,
	              "topicid": this.$root && this.$root.config.topicId || "",
	              "note": this.$root && this.$root.config.bu || ""
	            });
	            _hip.push(['mv', mvObj]);
	          } catch (e) {
	            console.error(e);
	          }
	        }
	      },
	      reportPageView: function reportPageView(topicId, platform, userId, uuid) {
	        var param = {
	          topicId: topicId,
	          platform: this.determinePlatform(platform),
	          uuid: uuid,
	          userId: userId
	        };
	        var reportUrl = this.determinePlatform(platform) == MEITUAN ? "//promo.dianping.com/mtlist/data/reportPageView.jsonp" : "//promo.dianping.com/list/data/reportPageView.jsonp";
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(reportUrl + "?" + _qs2.default.stringify(param))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        }).then(function (json) {
	          switch (json.code) {
	            case "200":
	              return json.data;
	            default:
	              throw new Error(ERROR_MES);
	          }
	        }).then(function (data) {
	          if (PageViewStatusCode[data.result] == undefined) {
	            throw new Error(ERROR_TYPE_MSG);
	          }
	          return {
	            status: PageViewStatusCode[data.result],
	            message: data.resultString
	          };
	        });
	      },
	      drawCheck: function drawCheck(eid, platform, token) {
	        var params = {
	          eid: eid,
	          platform: this.determinePlatform(platform),
	          token: token
	        };
	
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/services/drawStatus.jsonp?" + _qs2.default.stringify(params))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        }).then(function (json) {
	          switch (json.code) {
	            case "200":
	              return json.data;
	            default:
	              throw new Error(ERROR_MES);
	          }
	        }).then(function (data) {
	          if (DrawStatusCode[data.result] == _rainbowEnums.DrawStatus.SUCCESS) {
	            var successVal = data.continueDraw << 2 | (data.share && !data.continueDraw) << 1 | (data.maxDrawCounts && !data.share) << 0;
	            if (DrawStatusSuccessCode[successVal] == undefined || DrawStatusCode[data.result] == undefined) {
	              throw new Error(ERROR_TYPE_MSG);
	            }
	            return {
	              status: DrawStatusCode[data.result],
	              message: data.resultString,
	              successStatus: DrawStatusSuccessCode[successVal]
	            };
	          } else {
	            if (DrawStatusCode[data.result] == undefined) {
	              throw new Error(ERROR_TYPE_MSG);
	            }
	            return {
	              status: DrawStatusCode[data.result],
	              message: data.resultString
	            };
	          }
	        });
	      },
	      getDeal: function getDeal(config, platform) {
	        platform = platform || (0, _utilMUa2.default)().source == "meituan" ? MEITUAN : DIANPING;
	
	        if (platform == MEITUAN) {
	          return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/mtlist/getDealInfo.jsonp?" + _qs2.default.stringify(config))).then(function (response) {
	            try {
	              return response.json();
	            } catch (e) {
	              throw new Error(ERROR_MES);
	            }
	          });
	        } else {
	          return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/list/getDealInfo.jsonp?" + _qs2.default.stringify(config))).then(function (response) {
	            try {
	              return response.json();
	            } catch (e) {
	              throw new Error(ERROR_MES);
	            }
	          });
	        }
	      },
	      getShop: function getShop(config, platform) {
	        platform = platform || (0, _utilMUa2.default)().source == "meituan" ? MEITUAN : DIANPING;
	
	        if (platform == MEITUAN) {
	          return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/mtlist/getShops.jsonp?" + _qs2.default.stringify(config))).then(function (response) {
	            try {
	              return response.json();
	            } catch (e) {
	              throw new Error(ERROR_MES);
	            }
	          }).then(function (json) {
	            switch (json.code) {
	              case "200":
	                return json.data;
	              default:
	                throw new Error(ERROR_MES);
	            }
	          }).then(function (data) {
	            if (ShopStatusCode[data.result] == _rainbowEnums.ShopStatus.SUCCESS) {
	              return {
	                data: data.shopRecords,
	                status: ShopStatusCode[data.result],
	                message: data.resultString
	              };
	            } else if (ShopStatusCode[data.result] == _rainbowEnums.ShopStatus.ERROR_TOPICID) {
	              return {
	                status: _rainbowEnums.ShopStatus[data.result],
	                message: data.resultString,
	                data: []
	              };
	            } else {
	              throw new Error(ERROR_TYPE_MSG);
	            }
	          });
	        } else {
	          return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/list/getShops.jsonp?" + _qs2.default.stringify(config))).then(function (response) {
	            try {
	              return response.json();
	            } catch (e) {
	              throw new Error(ERROR_MES);
	            }
	          }).then(function (json) {
	            return {
	              data: json.productList || [],
	              status: 200
	            };
	          });
	        }
	      },
	      draw: function draw(eid, platform, dpid, cx, token, score) {
	        var _this3 = this;
	
	        return new _promise2.default(function (resolve, reject) {
	          var params = {
	            eid: eid,
	            platform: _this3.determinePlatform(platform),
	            token: token,
	            cityId: _this3.$data._cityId,
	            score: score
	          };
	          if ((0, _utilMUa2.default)().type == "mtgroup" || (0, _utilMUa2.default)().type == "dpapp") {
	            _knb2.default.ready(function () {
	              _promise2.default.all([_knb2.default.getPromiseInstance().getUserInfo(), _knb2.default.getPromiseInstance().getFingerprint()]).then(function (data) {
	                var fp = cx ? cx : data[1].fingerprint;
	                var device = dpid ? dpid : data[0].uuid;
	                resolve((0, _assign2.default)(params, { cx: fp, dpid: device }));
	              }, function () {
	                resolve(params);
	              }).catch(function () {
	                resolve(params);
	              });
	            });
	          } else {
	            resolve(params);
	          }
	        }).then(function (params) {
	          return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/services/drawEvent.jsonp?" + _qs2.default.stringify(params))).then(function (response) {
	            try {
	              return response.json();
	            } catch (e) {
	              throw new Error(ERROR_MES);
	            }
	          }).then(function (json) {
	            switch (json.code) {
	              case "200":
	                return json.data;
	              default:
	                throw new Error(ERROR_MES);
	            }
	          }).then(function (data) {
	            if (DrawStatusCode[data.result] == _rainbowEnums.DrawStatus.SUCCESS) {
	
	              if (DrawEventSuccessCode[data.isre] == undefined || DrawEventSuccessTypeCode[data.type] == undefined) {
	                throw new Error(ERROR_TYPE_MSG);
	              }
	
	              return (0, _assign2.default)({
	                status: DrawStatusCode[data.result],
	                successStatus: DrawEventSuccessCode[data.isre],
	                successTypeStatus: _rainbowEnums.DrawEventSuccessType[data.type],
	                message: data.resultString
	              }, {
	                data: data
	              });
	            } else {
	              if (DrawStatusCode[data.result] == undefined) {
	                throw new Error(ERROR_TYPE_MSG);
	              }
	              return {
	                status: DrawStatusCode[data.result],
	                message: data.resultString
	              };
	            }
	          });
	        });
	      },
	      shareSuccess: function shareSuccess(eid, platform, dpid, securitycode, token) {
	        var params = {
	          eid: eid,
	          platform: this.determinePlatform(platform),
	          securitycode: securitycode || '',
	          token: token || '',
	          dpid: dpid || '',
	          source: (0, _utilMUa2.default)().type
	        };
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/services/shareEvent.jsonp?" + _qs2.default.stringify(params))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        }).then(function (json) {
	          switch (json.code) {
	            case "200":
	              return json.data;
	            default:
	              throw new Error(ERROR_MES);
	          }
	        }).then(function (data) {
	          if (DrawStatusCode[data.result] == undefined) {
	            throw new Error(ERROR_TYPE_MSG);
	          }
	          return {
	            status: DrawStatusCode[data.result],
	            message: data.resultString
	          };
	        });
	      },
	      userNewStatus: function userNewStatus(newUserParam, token) {
	        var params = {
	          bu: NewUserParamCode[newUserParam],
	          token: token || ""
	        };
	
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)("//promo.dianping.com/services/userNewStatus.jsonp?" + _qs2.default.stringify(params))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        }).then(function (json) {
	          switch (json.code) {
	            case "200":
	              return json.data;
	            default:
	              throw new Error(ERROR_MES);
	          }
	        }).then(function (data) {
	          if (DrawStatusCode[data.result] == undefined) {
	            throw new Error(ERROR_TYPE_MSG);
	          }
	          return {
	            status: DrawStatusCode[data.result],
	            message: data.resultString,
	            isNewUser: data.new
	          };
	        });
	      },
	      getRecommendDeal: function getRecommendDeal(cityId, categoryIdsStr, pageSize, pageNum, longitude, latitude, platform, dpid, token) {
	        var params = {
	          geoCityId: cityId,
	          cityId: cityId,
	          categoryIdsStr: categoryIdsStr || "",
	          pageSize: pageSize,
	          pageNum: pageNum,
	          longitude: longitude,
	          latitude: latitude,
	          dpid: dpid,
	          token: token
	        };
	        var requestUrl = this.determinePlatform(platform) == MEITUAN ? "//i.meituan.com/mtlist/rec/getMtDealList.jsonp" : "//promo.dianping.com/list/rec/getDealList.jsonp";
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(requestUrl + "?" + _qs2.default.stringify(params))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        }).then(function (json) {
	          switch (json.code) {
	            case "200":
	              return json.data;
	            default:
	              throw new Error(ERROR_MES);
	          }
	        }).then(function (data) {
	          return {
	            data: data.records || [],
	            status: 200
	          };
	        });
	      },
	      getRecord: function getRecord(config, platform) {
	        config.platform = platform || (0, _utilMUa2.default)().source == "meituan" ? MEITUAN : DIANPING;
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/mtlist/getRecord.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/list/getRecord.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getBookingScheduleInfo: function getBookingScheduleInfo(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/baby/mobile/bookingschedule/mt/ajax/getbookingscheduleinfo?";
	          } else {
	            url = "//i.meituan.com/baby/mobile/bookingschedule/mt/ajax/getbookingscheduleinfo?";
	          }
	        } else {
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//m.dianping.com/baby/mobile/bookingschedule/ajax/getbookingscheduleinfo?";
	          } else {
	            url = "//m.51ping.com/baby/mobile/bookingschedule/ajax/getbookingscheduleinfo?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getBookingScheduleDetailInfo: function getBookingScheduleDetailInfo(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/baby/mobile/bookingschedule/mt/ajax/getbookingscheduledetailinfo?";
	          } else {
	            url = "//i.meituan.com/baby/mobile/bookingschedule/mt/ajax/getbookingscheduledetailinfo?";
	          }
	        } else {
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//m.dianping.com/baby/mobile/bookingschedule/ajax/getbookingscheduledetailinfo?";
	          } else {
	            url = "//m.51ping.com/baby/mobile/bookingschedule/ajax/getbookingscheduledetailinfo?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getBookingGift: function getBookingGift(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/baby/mobile/bookingSchedule/mt/ajax/getbookinggift?";
	          } else {
	            url = "//i.meituan.com/baby/mobile/bookingSchedule/mt/ajax/getbookinggift?";
	          }
	        } else {
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//m.dianping.com/baby/mobile/bookingSchedule/ajax/getbookinggift?";
	          } else {
	            url = "//m.51ping.com/baby/mobile/bookingSchedule/ajax/getbookinggift?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      bookingPhotoGraphy: function bookingPhotoGraphy(config) {
	        var url = "";
	        _knb2.default.getUserInfo({
	          success: function success(user) {
	            config.uuid = user.uuid || '';
	          }
	        });
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/baby/mobile/bookingschedule/mt/ajax/createorder?";
	          } else {
	            url = "//i.meituan.com/baby/mobile/bookingschedule/mt/ajax/createorder?";
	          }
	        } else {
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//m.dianping.com/baby/mobile/bookingschedule/ajax/createorder?";
	          } else {
	            url = "//m.51ping.com/baby/mobile/bookingschedule/ajax/createorder?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getPrizes: function getPrizes(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/mtlist/getPrizes.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/list/getPrizes.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      register: function register(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/services/register.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/services/register.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getUserRegisterList: function getUserRegisterList(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/services/getUserRegisterList.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/services/getUserRegisterList.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      drawlist: function drawlist(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/services/drawlist.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/services/drawlist.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getrelation: function getrelation(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/services/getrelation.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/services/getrelation.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      note: function note(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          url = "//i.meituan.com/services/note.jsonp?";
	        } else {
	          config.platform = DIANPING;
	          url = "//promo.dianping.com/services/note.jsonp?";
	        }
	        return (0, _fetchJsonp2.default)((0, _urlRewrite2.default)(url + _qs2.default.stringify(config))).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getMobileNo: function getMobileNo(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          if (location.href.indexOf('test') > -1) {
	            url = "//m.51ping.com/baby/mobile/bookingschedule/mt/ajax/mobileno?";
	          } else {
	            url = "//m.dianping.com/baby/mobile/bookingschedule/mt/ajax/mobileno?";
	          }
	        } else {
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//m.dianping.com/baby/mobile/bookingschedule/ajax/mobileno?";
	          } else {
	            url = "//m.51ping.com/baby/mobile/bookingschedule/ajax/mobileno?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getFreeDineList: function getFreeDineList(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/mtlist/data/getBwcActivity.jsonp?";
	          } else {
	            url = "//i.meituan.com/mtlist/data/getBwcActivity.jsonp?";
	          }
	        } else {
	          config.platform = DIANPING;
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//promo.dianping.com/list/data/getBwcActivity.jsonp?";
	          } else {
	            url = "//promo.51ping.com/list/data/getBwcActivity.jsonp?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      postbuy: function postbuy(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/services/postbuy.jsonp?";
	          } else {
	            url = "//i.meituan.com/services/postbuy.jsonp?";
	          }
	        } else {
	          config.platform = DIANPING;
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//promo.dianping.com/services/postbuy.jsonp?";
	          } else {
	            url = "//promo.51ping.com/services/postbuy.jsonp?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getfriends: function getfriends(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/services/getfriends.jsonp?";
	          } else {
	            url = "//i.meituan.com/services/getfriends.jsonp?";
	          }
	        } else {
	          config.platform = DIANPING;
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//promo.dianping.com/services/getfriends.jsonp?";
	          } else {
	            url = "//promo.51ping.com/services/getfriends.jsonp?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getCourses: function getCourses(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/mtlist/getCourses.jsonp?";
	          } else {
	            url = "//i.meituan.com/mtlist/getCourses.jsonp?";
	          }
	        } else {
	          config.platform = DIANPING;
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//promo.dianping.com/list/getCourses.jsonp?";
	          } else {
	            url = "//promo.51ping.com/list/getCourses.jsonp?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      },
	      getBwcActivityNew: function getBwcActivityNew(config) {
	        var url = "";
	        if ((0, _utilMUa2.default)().source == "meituan") {
	          config.platform = MEITUAN;
	          if (location.href.indexOf('test') > -1) {
	            url = "//test.i.meituan.com/mtlist/data/getBwcActivityNew.jsonp?";
	          } else {
	            url = "//i.meituan.com/mtlist/data/getBwcActivityNew.jsonp?";
	          }
	        } else {
	          config.platform = DIANPING;
	          if (location.href.indexOf('dianping') > -1) {
	            url = "//promo.dianping.com/list/data/getBwcActivityNew.jsonp?";
	          } else {
	            url = "//promo.51ping.com/list/data/getBwcActivityNew.jsonp?";
	          }
	        }
	        return (0, _fetchJsonp2.default)(url + _qs2.default.stringify(config)).then(function (response) {
	          try {
	            return response.json();
	          } catch (e) {
	            throw new Error(ERROR_MES);
	          }
	        });
	      }
	    },
	    props: {
	      skin: {
	        type: Object,
	        default: function _default() {
	          return {
	            'default': true
	          };
	        }
	      },
	      config: {
	        type: Object,
	        default: function _default() {
	          return {};
	        },
	        coerce: function coerce(v) {
	          return typeof v == 'String' ? JSON.parse(v) : v;
	        }
	      }
	    }
	  };
	  Vue.mixin(mixin);
	};
	module.exports = vueRainbow;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(65);
	__webpack_require__(69);
	module.exports = __webpack_require__(29).Promise;

/***/ },
/* 20 */
/***/ function(module, exports) {



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(22)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(25)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(23)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(26)
	  , $export        = __webpack_require__(27)
	  , redefine       = __webpack_require__(42)
	  , hide           = __webpack_require__(32)
	  , has            = __webpack_require__(43)
	  , Iterators      = __webpack_require__(44)
	  , $iterCreate    = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(61)
	  , getPrototypeOf = __webpack_require__(63)
	  , ITERATOR       = __webpack_require__(62)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(28)
	  , core      = __webpack_require__(29)
	  , ctx       = __webpack_require__(30)
	  , hide      = __webpack_require__(32)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 28 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 29 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(31);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(33)
	  , createDesc = __webpack_require__(41);
	module.exports = __webpack_require__(37) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(34)
	  , IE8_DOM_DEFINE = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(40)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(37) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(37) && !__webpack_require__(38)(function(){
	  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(38)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35)
	  , document = __webpack_require__(28).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(35);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 43 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(46)
	  , descriptor     = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(61)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(32)(IteratorPrototype, __webpack_require__(62)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(34)
	  , dPs         = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(59)
	  , IE_PROTO    = __webpack_require__(56)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(39)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(60).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(33)
	  , anObject = __webpack_require__(34)
	  , getKeys  = __webpack_require__(48);
	
	module.exports = __webpack_require__(37) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(59);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(43)
	  , toIObject    = __webpack_require__(50)
	  , arrayIndexOf = __webpack_require__(53)(false)
	  , IE_PROTO     = __webpack_require__(56)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50)
	  , toLength  = __webpack_require__(54)
	  , toIndex   = __webpack_require__(55);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(23)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(23)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(57)('keys')
	  , uid    = __webpack_require__(58);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(28)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28).document && document.documentElement;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(33).f
	  , has = __webpack_require__(43)
	  , TAG = __webpack_require__(62)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(57)('wks')
	  , uid        = __webpack_require__(58)
	  , Symbol     = __webpack_require__(28).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(43)
	  , toObject    = __webpack_require__(64)
	  , IE_PROTO    = __webpack_require__(56)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	var global        = __webpack_require__(28)
	  , hide          = __webpack_require__(32)
	  , Iterators     = __webpack_require__(44)
	  , TO_STRING_TAG = __webpack_require__(62)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(67)
	  , step             = __webpack_require__(68)
	  , Iterators        = __webpack_require__(44)
	  , toIObject        = __webpack_require__(50);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(25)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(26)
	  , global             = __webpack_require__(28)
	  , ctx                = __webpack_require__(30)
	  , classof            = __webpack_require__(70)
	  , $export            = __webpack_require__(27)
	  , isObject           = __webpack_require__(35)
	  , aFunction          = __webpack_require__(31)
	  , anInstance         = __webpack_require__(71)
	  , forOf              = __webpack_require__(72)
	  , speciesConstructor = __webpack_require__(76)
	  , task               = __webpack_require__(77).set
	  , microtask          = __webpack_require__(79)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(62)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(80)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(61)($Promise, PROMISE);
	__webpack_require__(81)(PROMISE);
	Wrapper = __webpack_require__(29)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(82)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(52)
	  , TAG = __webpack_require__(62)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(30)
	  , call        = __webpack_require__(73)
	  , isArrayIter = __webpack_require__(74)
	  , anObject    = __webpack_require__(34)
	  , toLength    = __webpack_require__(54)
	  , getIterFn   = __webpack_require__(75)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(34);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(44)
	  , ITERATOR   = __webpack_require__(62)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(70)
	  , ITERATOR  = __webpack_require__(62)('iterator')
	  , Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(29).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(34)
	  , aFunction = __webpack_require__(31)
	  , SPECIES   = __webpack_require__(62)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(30)
	  , invoke             = __webpack_require__(78)
	  , html               = __webpack_require__(60)
	  , cel                = __webpack_require__(39)
	  , global             = __webpack_require__(28)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(52)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(28)
	  , macrotask = __webpack_require__(77).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(52)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(32);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(28)
	  , core        = __webpack_require__(29)
	  , dP          = __webpack_require__(33)
	  , DESCRIPTORS = __webpack_require__(37)
	  , SPECIES     = __webpack_require__(62)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(62)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	module.exports = __webpack_require__(29).Object.assign;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(27);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(86)});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(87)
	  , pIE      = __webpack_require__(88)
	  , toObject = __webpack_require__(64)
	  , IObject  = __webpack_require__(51)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(38)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 87 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 88 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(90);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(93);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	__webpack_require__(65);
	module.exports = __webpack_require__(92).f('iterator');

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(62);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95);
	__webpack_require__(20);
	__webpack_require__(104);
	__webpack_require__(105);
	module.exports = __webpack_require__(29).Symbol;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(28)
	  , has            = __webpack_require__(43)
	  , DESCRIPTORS    = __webpack_require__(37)
	  , $export        = __webpack_require__(27)
	  , redefine       = __webpack_require__(42)
	  , META           = __webpack_require__(96).KEY
	  , $fails         = __webpack_require__(38)
	  , shared         = __webpack_require__(57)
	  , setToStringTag = __webpack_require__(61)
	  , uid            = __webpack_require__(58)
	  , wks            = __webpack_require__(62)
	  , wksExt         = __webpack_require__(92)
	  , wksDefine      = __webpack_require__(97)
	  , keyOf          = __webpack_require__(98)
	  , enumKeys       = __webpack_require__(99)
	  , isArray        = __webpack_require__(100)
	  , anObject       = __webpack_require__(34)
	  , toIObject      = __webpack_require__(50)
	  , toPrimitive    = __webpack_require__(40)
	  , createDesc     = __webpack_require__(41)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(101)
	  , $GOPD          = __webpack_require__(103)
	  , $DP            = __webpack_require__(33)
	  , $keys          = __webpack_require__(48)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(102).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(88).f  = $propertyIsEnumerable;
	  __webpack_require__(87).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(26)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(32)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(58)('meta')
	  , isObject = __webpack_require__(35)
	  , has      = __webpack_require__(43)
	  , setDesc  = __webpack_require__(33).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(38)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(28)
	  , core           = __webpack_require__(29)
	  , LIBRARY        = __webpack_require__(26)
	  , wksExt         = __webpack_require__(92)
	  , defineProperty = __webpack_require__(33).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(48)
	  , toIObject = __webpack_require__(50);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(48)
	  , gOPS    = __webpack_require__(87)
	  , pIE     = __webpack_require__(88);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(50)
	  , gOPN      = __webpack_require__(102).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(49)
	  , hiddenKeys = __webpack_require__(59).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(88)
	  , createDesc     = __webpack_require__(41)
	  , toIObject      = __webpack_require__(50)
	  , toPrimitive    = __webpack_require__(40)
	  , has            = __webpack_require__(43)
	  , IE8_DOM_DEFINE = __webpack_require__(36)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(37) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)('asyncIterator');

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)('observable');

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(107);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(109);
	var $Object = __webpack_require__(29).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(27);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(37), 'Object', {defineProperty: __webpack_require__(33).f});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(111);
	module.exports = self.fetch.bind(self);


/***/ },
/* 111 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.fetchJsonp = mod.exports;
	  }
	})(this, function (exports, module) {
	  'use strict';
	
	  var defaultOptions = {
	    timeout: 5000,
	    jsonpCallback: 'callback',
	    jsonpCallbackFunction: null
	  };
	
	  function generateCallbackFunction() {
	    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	  }
	
	  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined'
	  // error if request timeout
	  function clearFunction(functionName) {
	    // IE8 throws an exception when you try to delete a property on window
	    // http://stackoverflow.com/a/1824228/751089
	    try {
	      delete window[functionName];
	    } catch (e) {
	      window[functionName] = undefined;
	    }
	  }
	
	  function removeScript(scriptId) {
	    var script = document.getElementById(scriptId);
	    document.getElementsByTagName('head')[0].removeChild(script);
	  }
	
	  function fetchJsonp(_url) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    // to avoid param reassign
	    var url = _url;
	    var timeout = options.timeout || defaultOptions.timeout;
	    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
	
	    var timeoutId = undefined;
	
	    return new Promise(function (resolve, reject) {
	      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
	      var scriptId = jsonpCallback + '_' + callbackFunction;
	
	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });
	
	        if (timeoutId) clearTimeout(timeoutId);
	
	        removeScript(scriptId);
	
	        clearFunction(callbackFunction);
	      };
	
	      // Check if the user set their own params, and if not add a ? to start a list of params
	      url += url.indexOf('?') === -1 ? '?' : '&';
	
	      var jsonpScript = document.createElement('script');
	      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
	      jsonpScript.id = scriptId;
	      document.getElementsByTagName('head')[0].appendChild(jsonpScript);
	
	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + _url + ' timed out'));
	
	        clearFunction(callbackFunction);
	        removeScript(scriptId);
	      }, timeout);
	    });
	  }
	
	  // export as global function
	  /*
	  let local;
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	  local.fetchJsonp = fetchJsonp;
	  */
	
	  module.exports = fetchJsonp;
	});

/***/ },
/* 113 */
/***/ function(module, exports) {

	var getUA = function(ua, url, host) {
	    var UA = ua || navigator.userAgent || navigator.vendor || window.opera;
	    var URL = url || window.location.href;
	    var HOST = host || window.location.host;
	    var result = {};
	    var type;
	    var version;
	    var os;
	    var osVersion;
	    var kernal;
	    var source;
	    var env
	
	    function match(reg) {
	        if (reg) {
	            if (UA.match(reg) && UA.match(reg).length) {
	                return UA.match(reg)[1];
	            }
	        }
	    }
	
	    function matchTypeVersion(reg) {
	        if (reg) {
	            if (UA.match(reg) && UA.match(reg).length >= 2) {
	                return UA.match(reg);
	            } else {
	                return ['', '0.0.0'];
	            }
	        }
	    }
	
	    function isMobile() {
	        var check = false;
	        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(UA) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(UA.substr(0, 4))) check = true 
	        return check;
	    }
	    
	
	    try {
	        //mobile detect
	        result.isMobile = isMobile();
	
	        //os detect
	        if (UA.match(/android/i)) {
	            result.os = 'android';
	
	            result.osVersion = match(/Android\/([\d\.]+)/i) || match(/Android ([\d\.]+)/);
	
	            result.kernal = match(/AppleWebKit\/([\d\.]+)/i);
	
	            result.browserVersion = match(/Chrome\/([\d\.]+)/i);
	        } else if (UA.match(/(ipad|iphone|ipod).*os\s([\d_]+)/i)) {
	            result.os = 'ios';
	
	            result.osVersion = match(/iOS\/([\d\.]+)/) || match(/OS ([\d\_]+)/).split('_').join('.');
	
	            result.kernal = match(/AppleWebKit\/([\d\.]+)/i);
	
	            result.browserVersion = match(/Safari\/([\d\.]+)/i);
	        }
	
	        //environment & version detect
	        if (/dp\/com\.dianping/.test(UA)) {
	            var arr = matchTypeVersion(/dp\/com\.dianping\.([\w\.]+)\/([\d\.]+)/);
	            var typeKey = arr[1];
	            version = arr[2];
	            if (typeKey.indexOf('dpscope') !== -1) {
	                type = 'dpapp';
	            } else if (typeKey.indexOf('v1') !== -1) {
	                type = 'dpapp'
	                if (/adapter\/([\d\.]+)/.test(UA)) {
	                    version = match(/adapter\/([\d\.]+)/);
	                }
	            } else if (typeKey.indexOf('merchant')) {
	                type = 'dpmerchant';
	            } else if (typeKey.indexOf('wed')) {
	                type = 'dpwed';
	            } else {
	                type = 'dp';
	            }
	
	        } else if (/MeituanGroup/i.test(UA)) {
	            type = 'mtgroup';
	
	            var arr = matchTypeVersion(/(MeituanGroup)\/([\d\.]+)/i);
	            version = arr[2];
	
	        } else if (/(f=android)|(f=iphone)|(f=ipad)|(f=ios)/g.test(URL)) {
	            if (/(utm_campaign=Agroup)/.test(URL)) {
	                type = 'mtgroup';
	            } else {
	                type = 'mt'
	            }
	            var param = {};
	            try {
	                var query = URL.split('?')[1].split('&');
	                if (query && query.length) {
	                    query.map(function(str) {
	                        var arr = str.split('=');
	                        param[arr[0]] = arr[1];
	                    })
	                }
	            } catch (e) {
	                console.log('parse param failed');
	            }
	            version = param.version_name;
	        } else if (/MicroMessenger/.test(UA)) {
	            type = 'weixin';
	            version = match(/MicroMessenger\/([\d\.]+)/i);
	
	        } else if (/QZONE/.test(UA)) {
	            type = 'qqzone';
	            version = match(/QZONEJSSDK\/([\d\.]+)/);
	
	        } else if (/QQ\/([\d\.]+)/.test(UA)) {
	            type = 'qq';
	            version = match(/QQ\/([\d\.]+)/i);
	
	        } else if (/UCWEB/i.test(UA)) {
	            type = 'ucweb';
	            version = match(/UCWEB([\d\.]+)/i);
	
	        } else {
	            type = 'browser';
	        }
	
	        //区分业务：点评OR美团
	        if (/\.(dianping|dpfile)\.com/i.test(HOST)) {
	            source = 'dianping';
	            env = 'product';
	        }else if (/\.51ping\.com/i.test(HOST)) {
	            source = 'dianping';
	            env = 'beta';
	        }else if (/test(.+)\.meituan\.(com|net)/i.test(HOST)) {
	            source = 'meituan';
	            env = 'beta';
	        }else if (/\.meituan\.(com|net)/i.test(HOST)) {
	            source = 'meituan';
	            env = 'product';
	        }
	
	        result.type = type;
	        result.version = version;
	        result.source = source;
	        result.env = env;
	
	        return result;
	    } catch (e) {
	        console.log(e);
	        result.type = type;
	        result.version = version;
	
	        return result;
	    }
	};
	module.exports = getUA;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// notice: must use compiled file for user agent may only support es5 feature.
	var isBrowser = typeof window !== 'undefined';
	var KNB = isBrowser ? __webpack_require__(115) : {load: function(){}, _ready: function(){}};
	if (isBrowser) window.KNB = KNB;
	
	var KNBExtend = (function () {
	  if (typeof window === 'undefined') return; // do not load KNB if not run in browser
	  var env = __webpack_require__(127);
	  switch (true) {
	    case env.isDPApp:
	      return __webpack_require__(128);
	    case env.isMTNB:
	      return __webpack_require__(188);
	    case env.isHBNB:
	      return __webpack_require__(189);
	    case env.isTitans:
	      return __webpack_require__(304);
	    case env.isWX:
	      if (typeof _KNB_IGNORE_WECHAT !== 'undefined') return; // 如果用户有配置这个变量，则跳过对微信的适配
	      return __webpack_require__(305);
	  }
	})();
	
	KNB.load(KNBExtend || {});
	KNB._ready();
	
	module.exports = KNB;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var apis = __webpack_require__(116);
	var mixin = __webpack_require__(117);
	var version = __webpack_require__(118);
	var getUA = __webpack_require__(119);
	var promisify = __webpack_require__(123);
	
	var noop = function () {};
	var cacheFns = [];
	
	var KNB = {
	  __version__: version,
	
	  NOTIMPLEMENTED: function(apiName, opts) {
	    var this$1 = this;
	
	    var fail = opts.fail || noop;
	    if (this._isReady) return fail({error: -1, msg: 'API [' + apiName + '] is not implemented'});
	    this.cache = this.cache || [];
	    this.cache.push(function () { return this$1[apiName](opts); });
	  },
	  load: function(child) {
	    var this$1 = this;
	
	    mixin(this, child);
	
	    // assign an _add method for child
	    // so child can dynamically add methods
	    child._add = function (name, fn) {
	      this$1[name] = fn;
	    };
	  },
	  _ready:function() {
	    this._isReady = true;
	    var tasks = this.cache || [];
	    function afterReady() {
	      (function doTasks(arr) {
	        if (!arr.length) return;
	        var task = arr.shift();
	        if (typeof task === 'function') task();
	        doTasks(arr);
	      })(tasks);
	
	      cacheFns.forEach(function (fn) { return fn(); });
	    }
	    // 说明具体环境脚本已经重写了ready方法
	    // 此时，需要等待具体环境ready
	    if (this.ready && !this.ready.isFromLoader) return this.ready(afterReady);
	    afterReady();
	  },
	  ready: function(cb) {
	    if (this._isReady) return cb();
	    if (typeof cb === 'function') cacheFns.push(cb);
	  },
	  use: function(api, opts) {
	    var this$1 = this;
	
	    this.cache = this.cache || [];
	    this.cache.push(function () { return this$1.use(api, opts); });
	  }
	};
	KNB.ready.isFromLoader = true;
	apis.forEach(function(api) {
	  KNB[api] = function(opts) {
	    if ( opts === void 0 ) opts={};
	
	    KNB.NOTIMPLEMENTED(api, opts);
	  };
	});
	KNB.getUA = getUA; // override getUA
	KNB.env = __webpack_require__(127);
	promisify(KNB);
	
	module.exports = KNB;


/***/ },
/* 116 */
/***/ function(module, exports) {

	// API set to implement
	module.exports = [
	    'config',
	
	    'isApiSupported',
	    'getUA',
	
	    'getFingerprint',
	    'getUserInfo',
	    'login',
	    'logout',
	    'sendSMS',
	    'getContactList',
	
	    'getCity',
	    'getLocationCity',
	    'getLocation',
	    'getNetworkType',
	
	    'share',
	    'configShare',
	
	    'openWebview',
	    'closeWebview',
	    'jumpWebview',
	
	    'setTitle',
	    'setNavButtons',
	    'setNavigationBarHidden',
	    'setBackgroundColor',
	    'setBouncesEnabled',
	    'setStatusBarStyle',
	    'setPullDown',
	    'stopPullDown',
	    'setLLButton',
	    'setSearchBar',
	
	    'store',
	    'retrieve',
	
	    'alert',
	    'confirm',
	    'prompt',
	
	    'chooseImage',
	    'previewImage',
	    'uploadImage',
	    'downloadImage',
	
	    'publish',
	    'subscribe',
	    'unsubscribe'
	  ];


/***/ },
/* 117 */
/***/ function(module, exports) {

	//extend simple implementation
	
	module.exports = function (a, b, c, d, e, f) {
	  var objs = [b, c, d, e, f].filter(Boolean);
	  var target = a || {};
	  objs.forEach(function (source) {
	    for (var key in source) {
	      if (source.hasOwnProperty(key)) {
	        target[key] = source[key];
	      }
	    }
	  });
	  return target;
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = ("1.2.0");

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var QS = __webpack_require__(120);
	function getUAInfo() {
	  var lua = (navigator.userAgent + '').toLowerCase();
	  var VER_REG_STR = "([0-9][0-9.a-zA-Z_]+)";
	  var regexp = function (str) { return new RegExp(str, 'i'); };
	  var isstr  = function (str) { return typeof str === 'string'; };
	  var href = location.href;
	  var qs = QS.parse((location.search || '').slice(1));
	
	  var apps = {
	    dianping: [/com\.dianping\.ba.\w+/, /com\.dianping\.\w+/],
	    meituan: ['meituangroup', /com.meituan.imeituan-?\w+/],
	    maoyanpro: ['moviepro', 'moviepro/android'],
	    maoyan: ['movie'],
	    moma: ['moma'],
	    daxiang: ['xm'],
	
	    wechat: ['micromessenger'],
	    qq: ['qq'],
	
	    unknown: ['never_match_anything'],
	  };
	  var appName = function () {
	     var names = Object.keys(apps);
	     for (var i = 0; i < names.length; i++) {
	       var matchers = apps[names[i]];
	       for (var j = 0; j < matchers.length; j++) {
	         if (isstr(matchers[j]) ? regexp('\\W' + matchers[j] + '\\W').test(lua) : matchers[j].test(lua)) return names[i]; 
	       }
	     }
	     return "unknown";
	  }();
	  var appVersion = function () {
	    var matchers = apps[appName];
	    for (var i = 0; i < matchers.length; i++) {
	      var mstring = isstr(matchers[i]) ? matchers[i] : matchers[i].source;
	      var m = lua.match(regexp(mstring + ' ' + VER_REG_STR)) || lua.match(regexp(mstring + '/' + VER_REG_STR));
	      if (m) return m[1];
	    }
	    return "0";
	  }();
	  var osName = function () {
	    if (/android/.test(lua)) return 'android';
	    if (/ios|iphone|ipod|ipad/.test(lua)) return 'ios';
	    if (/macintosh/.test(lua)) return 'mac';
	    if (/windows/.test(lua)) return 'windows';
	    return "unknown";
	  }();
	  var osVersion = function () {
	    var m;
	    // https://developer.chrome.com/multidevice/user-agent
	    // order matters!
	    if (osName === 'android') m  =  lua.match(regexp('android '+ VER_REG_STR)) || lua.match(regexp('android/'+ VER_REG_STR));
	    if (osName === 'ios') m = lua.match(regexp(VER_REG_STR +' like Mac OS X')) || lua.match(regexp('iOS/' + VER_REG_STR));
	
	    // 通常而言mac/window的版本不重要，无视之
	    return (m ? m[1] : '0').replace(/_/g, '.');
	  }();
	
	  // internal version info
	  // MATCHED INDEX:     1  2              3      4             5       6
	  // EXAMPLE:         KNB/1.1.0         Android/5.1     MeituanGroup/7.3.1
	  var reg1 = regexp(("(KNB)/" + VER_REG_STR + " (\\w+)/" + VER_REG_STR + " (\\w+)/" + VER_REG_STR));
	  var reg2 = regexp(("(KNB)/" + VER_REG_STR + " (\\w+)/" + VER_REG_STR + " ([a-z1-9A-Z_.-]+/[a-z1-9A-Z_.-]+)/" + VER_REG_STR));
	  var m   = lua.match(reg1) || lua.match(reg2);
	  var _knbVersion = m && m[2];
	
	  // Try KNB Generic Mode
	  if (appName === 'unknown' && m) {
	    appName    = m[5];
	    appVersion = m[6];
	  }
	
	  // God knowns who you are
	  if (appName === 'unknown') {
	    // waimai app
	    if (href.indexOf('wm_ctype=') > -1) appName = "waimai";
	    // meituan like app < 7.0
	    if (/iphone|ipod|ipad|android/.test(href)) {
	      if ((qs.utm_campaign || '').indexOf('Agroup') > -1) appName = 'meituan';
	      appVersion = qs.version_name;
	    }
	  }
	
	  return {
	    appName: appName,
	    appVersion: appVersion,
	    osName: osName,
	    osVersion: osVersion,
	
	    _knbVersion: _knbVersion
	  };
	}
	
	function getUA(ref) {
	  var success = ref.success;
	
	  success && success(getUAInfo());
	}
	
	// The actual method
	getUA.internal = getUAInfo;
	
	module.exports = getUA;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(121);
	exports.encode = exports.stringify = __webpack_require__(122);


/***/ },
/* 121 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 122 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var win = typeof window !== 'undefined' ? window : {};
	var mixin = __webpack_require__(117);
	var Promise = win.Promise || __webpack_require__(124);
	var apis = __webpack_require__(116);
	
	// get an empty object from obj's type
	function empty(obj) {
	  return Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
	}
	
	module.exports = function (KNB) {
	  if (KNB.getPromiseInstance) return;
	  KNB.getPromiseInstance = function () {
	    var KNBP = {};
	    apis.forEach(function (name) {
	      if (name === 'config') return;
	      KNBP[name] = function (config) {
	        return new Promise(function (resolve, reject) {
	          KNB[name](mixin(empty(config), config, { success: resolve, fail: reject }));
	        });
	      };
	    });
	    KNBP.use = function (name, config) {
	      return new Promise(function (resolve, reject) {
	        KNB.use(name, mixin(empty(config), config, { success: resolve, fail: reject }));
	      });
	    };
	    return KNBP;
	  };
	}
	


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, setImmediate) {'use strict';
	
	var PENDING = 'pending';
	var SETTLED = 'settled';
	var FULFILLED = 'fulfilled';
	var REJECTED = 'rejected';
	var NOOP = function () {};
	var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
	
	var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
	var asyncQueue = [];
	var asyncTimer;
	
	function asyncFlush() {
		// run promise callbacks
		for (var i = 0; i < asyncQueue.length; i++) {
			asyncQueue[i][0](asyncQueue[i][1]);
		}
	
		// reset async asyncQueue
		asyncQueue = [];
		asyncTimer = false;
	}
	
	function asyncCall(callback, arg) {
		asyncQueue.push([callback, arg]);
	
		if (!asyncTimer) {
			asyncTimer = true;
			asyncSetTimer(asyncFlush, 0);
		}
	}
	
	function invokeResolver(resolver, promise) {
		function resolvePromise(value) {
			resolve(promise, value);
		}
	
		function rejectPromise(reason) {
			reject(promise, reason);
		}
	
		try {
			resolver(resolvePromise, rejectPromise);
		} catch (e) {
			rejectPromise(e);
		}
	}
	
	function invokeCallback(subscriber) {
		var owner = subscriber.owner;
		var settled = owner._state;
		var value = owner._data;
		var callback = subscriber[settled];
		var promise = subscriber.then;
	
		if (typeof callback === 'function') {
			settled = FULFILLED;
			try {
				value = callback(value);
			} catch (e) {
				reject(promise, e);
			}
		}
	
		if (!handleThenable(promise, value)) {
			if (settled === FULFILLED) {
				resolve(promise, value);
			}
	
			if (settled === REJECTED) {
				reject(promise, value);
			}
		}
	}
	
	function handleThenable(promise, value) {
		var resolved;
	
		try {
			if (promise === value) {
				throw new TypeError('A promises callback cannot return that same promise.');
			}
	
			if (value && (typeof value === 'function' || typeof value === 'object')) {
				// then should be retrieved only once
				var then = value.then;
	
				if (typeof then === 'function') {
					then.call(value, function (val) {
						if (!resolved) {
							resolved = true;
	
							if (value === val) {
								fulfill(promise, val);
							} else {
								resolve(promise, val);
							}
						}
					}, function (reason) {
						if (!resolved) {
							resolved = true;
	
							reject(promise, reason);
						}
					});
	
					return true;
				}
			}
		} catch (e) {
			if (!resolved) {
				reject(promise, e);
			}
	
			return true;
		}
	
		return false;
	}
	
	function resolve(promise, value) {
		if (promise === value || !handleThenable(promise, value)) {
			fulfill(promise, value);
		}
	}
	
	function fulfill(promise, value) {
		if (promise._state === PENDING) {
			promise._state = SETTLED;
			promise._data = value;
	
			asyncCall(publishFulfillment, promise);
		}
	}
	
	function reject(promise, reason) {
		if (promise._state === PENDING) {
			promise._state = SETTLED;
			promise._data = reason;
	
			asyncCall(publishRejection, promise);
		}
	}
	
	function publish(promise) {
		promise._then = promise._then.forEach(invokeCallback);
	}
	
	function publishFulfillment(promise) {
		promise._state = FULFILLED;
		publish(promise);
	}
	
	function publishRejection(promise) {
		promise._state = REJECTED;
		publish(promise);
		if (!promise._handled && isNode) {
			global.process.emit('unhandledRejection', promise._data, promise);
		}
	}
	
	function notifyRejectionHandled(promise) {
		global.process.emit('rejectionHandled', promise);
	}
	
	/**
	 * @class
	 */
	function Promise(resolver) {
		if (typeof resolver !== 'function') {
			throw new TypeError('Promise resolver ' + resolver + ' is not a function');
		}
	
		if (this instanceof Promise === false) {
			throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
		}
	
		this._then = [];
	
		invokeResolver(resolver, this);
	}
	
	Promise.prototype = {
		constructor: Promise,
	
		_state: PENDING,
		_then: null,
		_data: undefined,
		_handled: false,
	
		then: function (onFulfillment, onRejection) {
			var subscriber = {
				owner: this,
				then: new this.constructor(NOOP),
				fulfilled: onFulfillment,
				rejected: onRejection
			};
	
			if ((onRejection || onFulfillment) && !this._handled) {
				this._handled = true;
				if (this._state === REJECTED && isNode) {
					asyncCall(notifyRejectionHandled, this);
				}
			}
	
			if (this._state === FULFILLED || this._state === REJECTED) {
				// already resolved, call callback async
				asyncCall(invokeCallback, subscriber);
			} else {
				// subscribe
				this._then.push(subscriber);
			}
	
			return subscriber.then;
		},
	
		catch: function (onRejection) {
			return this.then(null, onRejection);
		}
	};
	
	Promise.all = function (promises) {
		if (!Array.isArray(promises)) {
			throw new TypeError('You must pass an array to Promise.all().');
		}
	
		return new Promise(function (resolve, reject) {
			var results = [];
			var remaining = 0;
	
			function resolver(index) {
				remaining++;
				return function (value) {
					results[index] = value;
					if (!--remaining) {
						resolve(results);
					}
				};
			}
	
			for (var i = 0, promise; i < promises.length; i++) {
				promise = promises[i];
	
				if (promise && typeof promise.then === 'function') {
					promise.then(resolver(i), reject);
				} else {
					results[i] = promise;
				}
			}
	
			if (!remaining) {
				resolve(results);
			}
		});
	};
	
	Promise.race = function (promises) {
		if (!Array.isArray(promises)) {
			throw new TypeError('You must pass an array to Promise.race().');
		}
	
		return new Promise(function (resolve, reject) {
			for (var i = 0, promise; i < promises.length; i++) {
				promise = promises[i];
	
				if (promise && typeof promise.then === 'function') {
					promise.then(resolve, reject);
				} else {
					resolve(promise);
				}
			}
		});
	};
	
	Promise.resolve = function (value) {
		if (value && typeof value === 'object' && value.constructor === Promise) {
			return value;
		}
	
		return new Promise(function (resolve) {
			resolve(value);
		});
	};
	
	Promise.reject = function (reason) {
		return new Promise(function (resolve, reject) {
			reject(reason);
		});
	};
	
	module.exports = Promise;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(125).setImmediate))

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(126);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 127 */
/***/ function(module, exports) {

	function getENV() {
	  // make sure the script not throwing error under nodejs.
	  var win  = typeof window !== 'undefined'    ? window              : {};
	  var href = typeof location !== 'undefined'  ? location.href       : '';
	  var ua   = typeof navigator !== 'undefined' ? navigator.userAgent : '';
	  var is_stupid_ios = /ios|iphone|ipad|ipod/i.test(ua); // iOS下UA非常不可靠
	
	  var regDP = win._KNB_REGDP || /dp\/com\.dianping\.[\w\.]+\/([\d\.]+)/i;
	  var regMT = win._KNB_REGMT || /moviepro|MTNB|Meituan|MOMA/i;
	  var regHB = win._KNB_REGHB || /iHotel|HBNB/i;
	  var regWX = win._KNB_REGWX || /micromessenger/i;
	  var regTitans = win._KNB_REGTITANS || /TitansX/i;
	
	  var isWX     = regWX.test(ua);
	  var isDPApp  = regDP.test(ua);
	  var isMTNB   = regMT.test(ua) || /f=(iphone|ipad|ipod|android)/.test(href);
	  var isHBNB   = regHB.test(ua) && !win._MTNB;
	  var isTitans = function() {
	    if (href.indexOf('knb_force_use_titans') > -1) return true;
	    if (is_stupid_ios) return !!win._TitansX;
	    return regTitans.test(ua);
	  }();
	  // order matters
	  if (isWX)     { isTitans = isHBNB = isDPApp = isMTNB = false; }
	  if (isTitans) { isDPApp  = isWX   = isMTNB  = isHBNB = false; }
	  if (isHBNB)   { isTitans = isWX   = isDPApp = isMTNB = false; }
	  if (isMTNB)   { isTitans = isWX   = isDPApp = isHBNB = false; }
	  if (isDPApp)  { isTitans = isWX   = isMTNB  = isHBNB = false; }
	
	  return {
	    isWX: isWX,
	    isTitans: isTitans,
	    isHBNB: isHBNB,
	    isDPApp: isDPApp,
	    isMTNB: isMTNB,
	  };
	}
	
	module.exports = getENV();
	module.exports.getENV = getENV;  // make it testable


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**********
	 * KNB for dianping webview
	 * version 1.0
	 *********/
	
	var DPApp = __webpack_require__(129);
	var apiDPApp = __webpack_require__(172);
	var shareConst = __webpack_require__(173);
	var logEvent = __webpack_require__(174);
	var promisify = __webpack_require__(123);
	var version = __webpack_require__(118);
	var Titans = __webpack_require__(176);
	var mixin = __webpack_require__(117);
	var isWebProtocol = __webpack_require__(184);
	var qs = __webpack_require__(120);
	var semver = __webpack_require__(186);
	
	var KNB = {
	  __version__: version,
	
	  ready: function(cb) {
	    DPApp.ready(cb);
	  },
	
	  config: function(opts) {
	    DPApp.config(opts);
	    Titans.config(opts);
	  },
	
	  isApiSupported: function(opts) {
	    var isSupport;
	    if (this[opts.apiName] instanceof Function) {
	      isSupport = true;
	    }else{
	      isSupport = DPApp.isSupport(opts.apiName);
	    }
	    if (navigator.userAgent.indexOf('TitansX') > -1) return Titans.isApiSupported(opts);
	    opts.success(isSupport);
	  },
	
	  getUserInfo: function(opts) {
	    var success = opts.success;
	    opts.success = function(user) {
	      success({
	        type: 'dp',
	        userId: user.userId,
	        uuid: user.dpid,
	        token: user.token
	      });
	    };
	    DPApp.getUserInfo(opts);
	  },
	
	  login: function(opts) {
	    var success = opts.success;
	    opts.success = function(user) {
	      success({
	        type: 'dp',
	        userId: user.userId,
	        token: user.token
	      });
	    };
	    DPApp.login(opts);
	  },
	
	  getFingerprint: function(opts) {
	    var success = opts.success;
	    opts.success = function(ret) {
	      success({
	        fingerprint: ret.fingerprint
	      });
	    };
	    DPApp.getCX(opts);
	  },
	
	  getCity: function(opts) {
	    var success = opts.success;
	    opts.success = function(city) {
	      success({
	        type: 'dp',
	        cityId: city.cityId
	      });
	    };
	    DPApp.getCity(opts);
	  },
	
	  getLocationCity: function(opts) {
	    var success = opts.success;
	    opts.success = function(city) {
	      success({
	        type: 'dp',
	        cityId: city.locCityId
	      });
	    };
	    DPApp.getCity(opts);
	  },
	
	  openWebview: function(opts) {
	    opts = mixin({}, opts);
	    if (isWebProtocol(opts.url)) opts.url = 'dianping://web?' + qs.stringify(mixin({url: opts.url}, opts.qs));
	    DPApp.openScheme(opts);
	  },
	
	  jumpWebview: function(opts) {
	    opts = mixin({}, opts);
	    if (isWebProtocol(opts.url)) opts.url = 'dianping://web?' + qs.stringify(mixin({url: opts.url}, opts.qs));
	    DPApp.jumpToScheme(opts);
	  },
	
	  closeWebview: function(opts) {
	    DPApp.closeWindow(opts);
	  },
	
	  share: function(opts) {
	    // TODO: parse channel
	    opts = mixin({}, opts);
	    opts.feed = opts.channel;
	    if (!(opts.feed instanceof Array)) {
	      opts.feed = [opts.feed];
	    }
	    if (opts.feed && opts.feed.length === 1) {
	      opts.shareType = opts.feed[0];
	    }
	    DPApp.share(opts);
	  },
	
	  configShare: function(opts) {
	    var self = this;
	    opts = mixin({}, opts);
	    DPApp.setRRButton({
	      icon: 'H5_Share',
	      handle: function() {
	        opts.handle && opts.handle();
	        self.share(opts);
	      }
	    });
	  },
	
	  setNavButtons: function(opts) {
	    if (!(opts instanceof Array)) {
	      opts = [opts];
	    }
	    opts.forEach(function(btnConfig) {
	      var method =  'set'+ btnConfig.position + 'Button';
	      delete btnConfig.position;
	      if (btnConfig.type === 'base64') {
	        try{
	          btnConfig.icon = btnConfig.icon.split('data:image/png;base64,')[1];
	        }catch(e){
	          console.log('get base64 icon failed');
	        }
	      }
	      DPApp[method](btnConfig);
	    });
	  },
	
	  setLLButton: function(opts) {
	    opts = mixin({}, opts);
	    if (/^data:image\/png;base64/.test(opts.icon)) {
	      try {
	        opts.icon = opts.icon.split('data:image/png;base64,')[1];
	      } catch (e) {
	        console.log('get base64 icon failed');
	      }
	    }
	
	    DPApp.setLLButton(opts);
	  },
	
	  getUA: __webpack_require__(119),
	
	  use: function(name, opts) {
	    if (DPApp[name] instanceof Function) {
	      return DPApp[name](opts);
	    }
	    return Titans.use(name, opts);
	  }
	};
	
	(function() {
	  for (var key in shareConst) {
	    KNB.share[key] = shareConst[key];
	  }
	})();
	
	(function commonFnMap(commonAPI) {
	  commonAPI.forEach(function(api) {
	    //没有单独实现的API统一生成
	    if (!KNB[api]) {
	      if (typeof(api) == 'string') {
	        KNB[api] = DPApp[api];
	      }else{
	        //API接口变更的处理
	        var key = Object.keys(api)[0];
	        KNB[key] = function() {
	          DPApp[api[key]](arguments[0]);
	        };
	      }
	    }
	  });
	})(apiDPApp);
	
	KNB.subscribe = Titans.subscribe.bind(Titans);
	KNB.unsubscribe = Titans.unsubscribe.bind(Titans);
	KNB.publish = Titans.publish.bind(Titans);
	KNB.getNetworkType = Titans.getNetworkType.bind(Titans);
	
	DPApp.getUA({
	  success: function (ua) {
	    var appVersion = ua.appVersion;
	    if (semver.gte(appVersion, '9.1.2')) KNB.lxlog = Titans.lxlog.bind(Titans)
	  }
	});
	
	//被引用统计
	logEvent('dpapp', KNB.__version__);
	
	promisify(KNB);
	
	module.exports = KNB;
	


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	(function (Host) {
	  var core = __webpack_require__(130);
	  var util = __webpack_require__(149);
	  var apis = __webpack_require__(150);
	
	  __webpack_require__(151);
	  
	  var patchVersion = function(version, patch) {
	    if (core.Semver.gte(util.appVersion, version)) {
	        core.patchForType(util.appVersion, patch);
	    }
	  };
	
	  patchVersion('7.0.0', __webpack_require__(152));
	  patchVersion('7.1.0', __webpack_require__(153));
	  patchVersion('7.2.0', __webpack_require__(154));
	  patchVersion('7.5.0', __webpack_require__(155));
	  patchVersion('7.6.0', __webpack_require__(156));
	  patchVersion('7.8.0', __webpack_require__(157));
	  patchVersion('7.9.1', __webpack_require__(158));
	  patchVersion('7.9.2', __webpack_require__(160));
	  patchVersion('7.9.4', __webpack_require__(161));
	  patchVersion('7.9.6', __webpack_require__(162));
	  patchVersion('8.0.0', __webpack_require__(163));
	  patchVersion('8.0.4', __webpack_require__(164));
	  patchVersion('8.0.6', __webpack_require__(165));
	  patchVersion('8.1.0', __webpack_require__(166));
	  patchVersion('8.1.2', __webpack_require__(167));
	  patchVersion('8.1.4', __webpack_require__(168));
	  patchVersion('8.1.6', __webpack_require__(169));
	
	  core.apis = apis;
	  core.decorate();
	
	  apis.forEach(function (api) {
	    if (!core[api]) {
	      core[api] = core._notImplemented;
	    }
	  });
	
	  core.__version__ = __webpack_require__(170);
	  core.__type__ = __webpack_require__(171);
	  // Export DPApp object, if support AMD, CMD, CommonJS.
	  if (true) {
	    module.exports = core;
	  }
	  // Export DPApp object to Host
	  if (typeof Host !== 'undefined') {
	    if(Host.DPApp){
	      Host.DPApp = core.merge(Host.DPApp, core);
	    }else{
	      Host.DPApp = core;
	    }
	  }
	
	}(window));

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var Core = __webpack_require__(131);
	var mixin = __webpack_require__(148);
	var util = __webpack_require__(149);
	
	var NOOP = function(){};
	
	var core = module.exports = new Core({
	  hippoPrefix:'dpapp',
	  getTypeFromUA: util.getWebviewVersion,
	  apis: [],
	  allowBeforeReady: ['getRequestId'],
	  isOldVersion: function(){
	    return this.uaType() == '6.9.x';
	  },
	  cache: {},
	  Share: {
	    WECHAT_FRIENDS: 0,
	    WECHAT_TIMELINE: 1,
	    QQ: 2,
	    SMS: 3,
	    WEIBO: 4,
	    QZONE: 5,
	    EMAIL: 6,
	    COPY: 7
	  },
	  _tidyUrlParams: function(url){
	    var splited = url.split('?');
	    var qs = splited[1];
	    var reserved = [];
	    if(!qs){
	      return splited[0];
	    }else{
	      qs.split('&').forEach(function(q){
	        var k = q.split('=')[0];
	        if(!/^(newtoken|token|product)$/.test(k) ){
	          reserved.push(q);
	        }
	      });
	      return [splited[0], reserved.join('&')].join('?');
	    }
	  },
	  _getEnv : function(callback) {
	    var self = this;
	    this._doSendMessage('getEnv', {}, function(env){
	      self.cache['env'] = env;
	      callback.call(this, env);
	    });
	  },
	  _captal: function(str) {
	    return str.slice(0, 1).toUpperCase() + str.slice(1);
	  },
	  _getBizName: function(opt) {
	    var fail = opt.fail;
	    var bizname = this._cfg.bizname;
	    if (!bizname) {
	      fail && fail('use `DPApp.config({bizname:"<your-bizname>"})` first');
	      return false;
	    } else {
	      return bizname;
	    }
	  },
	  isStatusOK : NOOP,
	  did_handle_callback : NOOP, 
	  _doSendMessage: function (method, args, callback) {
	    var self = this;
	    var hasCallback = callback && typeof callback == 'function';
	    this.log('调用方法', method, args);
	
	    /**
	     * pass 0 as callbackId
	     * thus _callbacks[callbackId] is undefined
	     * nothing will happen
	     * @type {Number}
	     */
	    var callbackId = hasCallback ? this._generateCallbackId() : 0;
	    var callbackName = this._generateCallbackName(callbackId);
	    
	    if (hasCallback){
	      window[callbackName] = callback;
	    }
	
	    /**
	     * check type for args
	     */
	    if(!args || typeof args !== 'object'){
	      args = {};
	    }
	
	    // 某些版本app很任性的把callbackId参数放到args里了
	    args.callbackId = callbackId;
	    args = JSON.stringify(args);
	
	    var _DPApp = window._DPApp;
	
	    var bridgeUrl = 'js://_?method=' + method + '&args=' + encodeURIComponent(args) + '&callbackId=' + callbackId;
	    
	    this._sendMessage2Native(bridgeUrl); 
	  },
	  _sendByPrompt: function(message) {
	    this.log('[Prompt] message: ' +message);
	    window.prompt(message);
	  },
	  _sendByIframe: function(message) {
	    this.log('[Iframe] message: ' + message);
	    this._createIframe(message);
	  },
	  _sendMessage2Native: function(message) {
	    var SUPPORTVERSION = '8.0.6';
	    if (this.Semver.gte(util.appVersion, SUPPORTVERSION) && util.osName === 'android') {
	      this._sendByPrompt(message);
	    }else{
	      this._sendByIframe(message);
	    }
	  },
	  _send: function(method, args){
	    args = args || {};
	    var self = this;
	    var _success = args.success;
	    var _fail = args.fail;
	    var _handle = args.handle;
	
	    var fail = function(result){
	      self.log('调用失败 ' + method, result);
	      _fail && _fail.call(self, result);
	    }
	
	    var success = function(result){
	      self.log('调用成功 ' + method, result);
	      _success && _success.call(self, result);
	    }
	
	    var handle = function(result){
	      self.log('回调 ' + method, result);
	      _handle && _handle.call(self, result);
	    }
	
	    var callback = (_success || _fail || _handle) ? function(result){
	      var status = result.status;
	
	      if(result.result != "next"){
	        delete result.result;
	      }
	      if(status == "success"){
	        success && success(result);
	      }else if(status == "action"){
	        handle && handle(result);
	      }else{
	        fail && fail(result);
	      }
	    } : null;
	    this._sendMessage(method, args, callback);
	  },
	  callback: function(callbackId, retValue){
	    var win = window;
	    var callbackFuncName = this._generateCallbackName(callbackId);
	    var callback = window[callbackFuncName];
	
	    if(callback){
	      this.log("[Callback] Id: " + callbackId);
	      setTimeout(function(){
	        callback && callback.call(self,retValue);
	      });
	      if(retValue.result == "complete" || retValue.result == "error"){
	        win[callbackFuncName] = null;
	        delete win[callbackFuncName];
	      }
	    }
	  },
	  merge: function(core, newCore) {
	    if (core.__type__ === 'npm' || core.__type__ === 'cortex') {
	      console.warn('引入了多个DPApp,目前DPApp版本是',core.__version__,', 后续引入的DPApp无法生效');
	      return core;
	    }else{
	      console.warn('引入了多个DPApp,正在进行mixin形式的合并');
	      return mixin(core, newCore);
	    }
	  }
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var Core = __webpack_require__(132);
	var NativeCore = __webpack_require__(145);
	var Network = __webpack_require__(147);
	var Promise = __webpack_require__(135);
	
	Core.prototype._mixin(Core.prototype, NativeCore);
	Core.prototype._mixin(Core.prototype, Network);
	Core.prototype.all = function(list){
		return Promise.all(list);
	};
	module.exports = Core;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	function mixin(to, from) {
	  for (var key in from) {
	    to[key] = from[key];
	  }
	  return to;
	}
	
	var Core = module.exports = function(options){
	  options = options || {};
	  var self = this;
	  for(var key in options){
	    this[key] = options[key];
	  }
	
	
	  var apis = options.apis || __webpack_require__(133);
	  (options.extraApis || []).forEach(function(name){
	    if(apis.indexOf(name) === -1){
	      apis.push(name);
	    }
	  });
	
	  this.apis = apis;
	  this.allowBeforeReady = this.allowBeforeReady || ["getRequestId"];
	
	
	  apis.forEach(function(name) {
	    if(!self[name]){
	      self[name] = function(options) {
	        self._send(name, options);
	      }
	    }
	  });
	
	  this.decorate();
	};
	
	Core.prototype = {
	  _cfg: {
	    debug: false
	  },
	  _isProduct: !!location.href.match(".dianping.com"),
	  _isReady: false,
	  config: function(config) {
	    for(var key in config){
	      this._cfg[key] = config[key];
	    }
	  },
	  /**
	   * 是否为古早版本
	   */
	  isOldVersion: function(){
	    return false;
	  },
	  getQuery: function (){
	    var query = location.search.slice(1);
	    var ret = {};
	    query.split("&").forEach(function(pair){
	      var splited = pair.split("=");
	      ret[splited[0]] = splited[1];
	    });
	    return ret;
	  },
	  patchForType: function(version, patch){
	    if(this.uaType() == version){
	      this.extend(patch);
	      this.decorate();
	    }
	  },
	  decorate: __webpack_require__(134),
	  Semver: {
	    eq: function(a, b) {
	      return a === b;
	    },
	    gt: function(a, b) {
	      var splitedA = a ? a.split(".") : [];
	      var splitedB = b ? b.split(".") : [];
	      [0,1,2].forEach(function(i){
	        splitedA[i] = splitedA[i] || 0;
	        splitedB[i] = splitedB[i] || 0;
	      });
	      if (+splitedA[0] !== +splitedB[0]) {
	        return +splitedA[0] > +splitedB[0];
	      } else {
	        if (+splitedA[1] !== +splitedB[1]) {
	          return +splitedA[1] > +splitedB[1];
	        } else {
	          return +splitedA[2] > +(splitedB[2] || 0);
	        }
	      }
	    },
	    lt: function(a, b) {
	      return !this.gte(a, b);
	    },
	    gte: function(a, b) {
	      return this.eq(a, b) || this.gt(a, b);
	    },
	    lte: function(a, b) {
	      return this.eq(a, b) || this.lt(a, b);
	    }
	  },
	  _parseUA: function(ua){
	    var osName, osVersion, versionMatch;
	    if (ua.match(/iPhone/)) {
	      osName = "iphone";
	      osVersion = ua.match(/iPhone\sOS\s([\d_]+)/i)[1].replace(/_/g, ".");
	    } else if (ua.match(/Android/)) {
	      osName = "android";
	      versionMatch = ua.match(/Android[\s|\/]([\w\.]+)/);
	      osVersion = versionMatch && versionMatch[1];
	    } else {
	      osName = null;
	      osVersion = null;
	    }
	    return {
	      name: osName,
	      version: osVersion
	    }
	  },
	  getTypeFromUA: function(userAgent){
	    return /dp\/com\.dianping\.(\w+)\//.test(userAgent)
	      ? userAgent.match(/dp\/com\.dianping\.(\w+)\//)[1]
	      : "web"
	  },
	  uaType: function(){
	    return this.getTypeFromUA(navigator.userAgent);
	  },
	  _trace: function(name, params){
	    if(!this.hippoPrefix){return;}
	    var logFact = (this._cfg && this._cfg.logFact) || 0.05;
	    params = params || {};
	    params = this._mixin(params, {
	      module: this.hippoPrefix + "_" + name
	    });
	    if(Math.random() < logFact){
	      console.log("_trace", name)
	      window._hip && _hip.push(['mv', params]);
	    }
	  },
	  log: function() {
	
	    var message = [];
	    for(var i=0; i < arguments.length; i++){
	      if(typeof arguments[i] == "string"){
	        message.push(arguments[i]);
	      }else if(arguments[i] != undefined){
	        message.push(JSON.stringify(arguments[i]));
	      }
	    }
	
	    message = message.join(" ");
	    if (this._cfg && this._cfg.debug) {
	      setTimeout(function(){
	        alert(message);
	      });
	    }else{
	      console.log(message);
	    }
	  },
	  _mixin: mixin,
	  extend: function(args) {
	    return this._mixin(this, args);
	  },
	  _notImplemented: function notImplemented(opt) {
	    opt && opt.fail && opt.fail({
	      errMsg:"ERR_NOT_IMPLEMENTED"
	    });
	  },
	  isSupport: function(funcName) {
	    var api = this[funcName];
	    return !!(api
	      && typeof api == "function"
	      && api != this._notImplemented
	      && api._notReady != true)
	  }
	};
	
	Core.prototype._osUA = Core.prototype._parseUA(navigator.userAgent);

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = [
	  "getVersion", "getNetworkType", "getContactList", "pickContact",
	  "getRequestId", "getDeviceInfo", "clearStorage", "store", "retrieve", "publish", "subscribe", "unsubscribe", "openScheme", "jumpToScheme", "closeWindow", "sendSMS",
	  "downloadImage", "setBackgroundColor", "setTitle", "setLLButton", "setLRButton", "setRLButton", "setRRButton", "isInstalledApp",
	  "alert", "prompt", "confirm", "actionSheet"
	];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var Promise = __webpack_require__(135);
	
	module.exports = function (allowBeforeReady){
	  var target = this;
	  var apis = this.apis;
	  var allowBeforeReady = this.allowBeforeReady;
	
	  apis.forEach(function(name){
	    if(!target[name]){
	      target[name] = target._notImplemented;
	    }
	  });
	
	  apis.forEach(function(api){
	    var _origin = target[api];
	    if(target[api] && target[api]._decorated){
	      return;
	    }
	    target[api] = function(args){
	      var _args = target._mixin({}, args);
	      target._trace(api + "_call");
	      var _success = _args.success;
	      var _fail = _args.fail;
	      var _wrapped_fail = function(result){
	        if(!_fail){
	          if(target.onerror){
	            target.onerror({
	              api: api,
	              err: result
	            });
	          }else{
	            var errorMessage = result.errMsg ? result.errMsg : JSON.stringify(result);
	            var err = new Error(errorMessage);
	            err.name = "DPAppError";
	            console.warn("`DPApp." + api + "` call faild");
	            target._trace('throw');
	            console.warn(new Error(err));
	          }
	        }else{
	          _fail(result);
	        }
	      }
	      var zero = +new Date;
	      _args.success = function(result){
	        target._trace(api + "_success", {
	          time: +new Date - zero,
	        });
	        _success && _success(result);
	      };
	      _args.fail = function(result){
	        var note = {};
	        note.args = args;
	        note.result = result;
	        target._trace(api + "_fail", {
	          time: +new Date - zero,
	          note: JSON.stringify(note)
	        });
	        _wrapped_fail(result);
	      }
	
	      if(!this._isReady
	        && allowBeforeReady.indexOf(api) === -1
	        && !target._isProduct // 非正式环境
	        && target.isOldVersion() // 且非新版本，为了判断环境，必须wrap在DPApp.ready中
	      ){
	        _wrapped_fail("use `DPApp.ready(fn)` to wrap api calls");
	        return;
	      }
	
	      return new Promise(function(resolve, reject){
	        var origin_success = _args.success;
	        var origin_fail = _args.fail;
	        var success = function(result){
	          origin_success(result);
	          resolve(result);
	        }
	        var fail = function(result){
	          origin_fail(result);
	          if(!_fail){
	            reject(result);
	          }
	        }
	        _args.success = success;
	        _args.fail = fail;
	        _origin.call(target, _args);
	      });
	    }
	    target[api]._decorated = true;
	    target[api]._notReady = _origin == target._notImplemented;
	
	  });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(136)


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(137);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(144);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(138);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 138 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(137);
	
	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(137);
	
	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(137);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// This file contains then/promise specific extensions that are only useful
	// for node.js interop
	
	var Promise = __webpack_require__(137);
	var asap = __webpack_require__(143);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	Promise.denodeify = function (fn, argumentCount) {
	  if (
	    typeof argumentCount === 'number' && argumentCount !== Infinity
	  ) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	}
	
	var callbackFn = (
	  'function (err, res) {' +
	  'if (err) { rj(err); } else { rs(res); }' +
	  '}'
	);
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'return new Promise(function (rs, rj) {',
	    'var res = fn.call(',
	    ['self'].concat(args).concat([callbackFn]).join(','),
	    ');',
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'var args;',
	    'var argLength = arguments.length;',
	    'if (arguments.length > ' + fnLength + ') {',
	    'args = new Array(arguments.length + 1);',
	    'for (var i = 0; i < arguments.length; i++) {',
	    'args[i] = arguments[i];',
	    '}',
	    '}',
	    'return new Promise(function (rs, rj) {',
	    'var cb = ' + callbackFn + ';',
	    'var res;',
	    'switch (argLength) {',
	    args.concat(['extra']).map(function (_, index) {
	      return (
	        'case ' + (index) + ':' +
	        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
	        'break;'
	      );
	    }).join(''),
	    'default:',
	    'args[argLength] = cb;',
	    'res = fn.apply(self, args);',
	    '}',
	    
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	
	  return Function(
	    ['Promise', 'fn'],
	    body
	  )(Promise, fn);
	}
	
	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	}
	
	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;
	
	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	}


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(138);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
	
	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}
	
	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}
	
	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}
	
	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(137);
	
	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function() {
	    return this.getState() == 0;
	  };
	
	  Promise.prototype.isFulfilled = function() {
	    return this.getState() == 1;
	  };
	
	  Promise.prototype.isRejected = function() {
	    return this.getState() == 2;
	  };
	
	  Promise.prototype.getValue = function () {
	    if (this._81 === 3) {
	      return this._65.getValue();
	    }
	
	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }
	
	    return this._65;
	  };
	
	  Promise.prototype.getReason = function () {
	    if (this._81 === 3) {
	      return this._65.getReason();
	    }
	
	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }
	
	    return this._65;
	  };
	
	  Promise.prototype.getState = function () {
	    if (this._81 === 3) {
	      return this._65.getState();
	    }
	    if (this._81 === -1 || this._81 === -2) {
	      return 0;
	    }
	
	    return this._81;
	  };
	};
	
	Promise.disableSynchronous = function() {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * count from 1
	 * @type {Number}
	 */
	var _events = {};
	/**
	 * mapping for all callbacks
	 * @type {Object}
	 */
	var pageEvents = ["appear", "disappear"];
	var queue = __webpack_require__(146);
	var q = queue(function(data){
	  DPApp._doSendMessage(data.method, data.args, data.callback);
	});
	
	module.exports = {
		_dequeueTimeout: null,
	  _messageQueue : q,
	  dequeue: function(){
	    var self = this;
	    setTimeout(function(){
	      DPApp && DPApp.log && DPApp.log("Dequeue");
	      clearTimeout(this._dequeueTimeout);
	      self._dequeueTimeout = null;
	      q.dequeue();
	    }, 0);
	  },
	  ready: function(callback){
	    var self = this;
	    this._send("ready", {
	      success: function(){
	        self._isReady = true;
	        callback();
	      }
	    });
	  },
	  openScheme: function(opt){
	    var url = opt.url;
	    var extra = opt.extra;
	    if(extra){
	      url += "?" + this._convertUrlParams(extra);
	      delete opt.extra;
	      opt.url = url;
	    }
	    this._send('openScheme', opt);
	  },
	  _sendMessage: function(method, args, callback){
	    var self = this;
	    q.push({
	      method: method,
	      args: args,
	      callback: callback
	    });
	    this._dequeueTimeout = setTimeout(function(){
	      self.dequeue();
	    },1000);
	
	  },
	  // _generateCallbackId: function(){
	  //   var rand = Math.floor(Math.random() * 1000);
	  //   var timestamp = +new Date();
	  //   return +(timestamp + "" + rand);
	  // },
	  _generateCallbackId: function () {
	    var rand = Math.floor(Math.random() * 1000);
	    var timestampStr = +new Date() + '';
	    //在DPAPP老版本中callbackId为int型，故只选取8位
	    var timestamp = timestampStr.substr(timestampStr.length - 5, 5);
	    return +(timestamp + "" + rand);
	  },
	  _generateCallbackName: function(callbackId){
	    return "DPApp_callback_" + callbackId;
	  },
	  /**
	   * send message to native
	   * @param  {String}   method
	   * @param  {Object}   args
	   * @param  {Function} callback
	   */
	  _doSendMessage: function (method, args, callback) {
	      var hasCallback = callback && typeof callback == 'function';
	      this.log('调用方法', method, args);
	
	      /**
	       * pass 0 as callbackId
	       * thus _callbacks[callbackId] is undefined
	       * nothing will happen
	       * @type {Number}
	       */
	      var callbackId = hasCallback ? this._generateCallbackId() : 0;
	      
	      if (hasCallback){
	        window[this._generateCallbackName(callbackId)] = callback;
	      }
	
	      /**
	       * check type for args
	       */
	      if(!args || typeof args !== 'object'){
	        args = {};
	      }
	
	      // 某些版本app很任性的把callbackId参数放到args里了
	      args.callbackId = callbackId;
	      args = JSON.stringify(args);
	
	      var bridgeUrl = 'js://_?method=' + method + '&args=' + encodeURIComponent(args) + '&callbackId=' + callbackId;
	
	      this.log('创建iframe ' + method, "callbackId:" + callbackId);
	      this._createIframe(bridgeUrl);
	  },
	  _createNode: function(src, type){
	    /**
	     * create node
	     * and native will intercept and handle the process
	     */
	    var node = document.createElement(type);
	    node.style.display = 'none';
	
	    function removeNode(){
	      node.onload = node.onerror = null;
	      node.parentNode && node.parentNode.removeChild(node);
	    }
	    /**
	     * remove node after loaded
	     */
	    node.onload = node.onerror = removeNode;
	    setTimeout(removeNode, 5000);
	    node.src = src;
	    document.body.appendChild(node);
	  },
	  _createIframe: function(src){
	    this._createNode(src, "iframe");
	  },
	  _send: function(method, args){
	    args = args || {};
	    var self = this;
	    var _success = args.success;
	    var _fail = args.fail;
	    var _handle = args.handle;
	
	    var fail = function(result){
	      self.log('调用失败 ' + method, result);
	      _fail && _fail.call(self, result);
	    }
	
	    var success = function(result){
	      self.log('调用成功 ' + method, result);
	      _success && _success.call(self, result);
	    }
	
	    var handle = function(result){
	      self.log('回调 ' + method, result);
	      _handle && _handle.call(self, result);
	    }
	
	    var callback = (_success || _fail || _handle) ? function(result){
	      var status = result.status;
	      if(result.result != "next"){
	        delete result.result;
	      }
	      if(status == "success"){
	        success && success(result);
	      }else if(status == "action"){
	        handle && handle(result);
	      }else{
	        fail && fail(result);
	      }
	    } : null;
	
	    this._sendMessage(method, args, callback);
	
	  },
	
	  _convertUrlParams: function(params){
	    var result = [];
	    for(var i in params){
	      result.push(i + "=" + encodeURIComponent(params[i]));
	    }
	    return result.join("&");
	  },
	  _sanitizeAjaxOpts: function(args){
	    args.method = args.method || "get";
	    args.data = args.data || "";
	    var url = args.url;
	    var data = args.data;
	
	    if (args.method == "get") {
	      var params = [];
	      for (var p in data) {
	        if (data.hasOwnProperty(p) && (data[p] || data[p] === 0)) {  // allow `something=0' param
	          params.push(p + '=' + encodeURIComponent(data[p]));
	        }
	      }
	
	      if (params.length) {
	        url += url.indexOf('?') == -1 ? "?" : "&";
	        url += params.join('&');
	      }
	      args.url = url;
	      delete args.data;
	    }
	    return args;
	  },
	  _parseFeed: function(f){
	    var feed;
	    if (!f) {
	      return 0xff;
	    } else if (f.constructor.toString().indexOf("Array") >= 0) {
	      feed = [0, 0, 0, 0, 0, 0, 0, 0];
	      f.forEach(function(pos) {
	        feed[7 - pos] = 1;
	      });
	      return parseInt(feed.join(""), 2);
	    }
	  },
	  _transModel: function(keys, obj){
	    if(!keys){return obj;}
	    var keymap = {};
	
	    function getHash(str) {
	      var hashCode = function(str) {
	        var hash = 0,
	          i, chr, len;
	        if (str.length == 0) return hash;
	        for (i = 0, len = str.length; i < len; i++) {
	          chr = str.charCodeAt(i);
	          hash = ((hash << 5) - hash) + chr;
	          hash |= 0; // Convert to 32bit integer
	        }
	        return hash;
	      };
	
	      var i = hashCode(str);
	      return "0x" + ((0xFFFF & i) ^ (i >>> 16)).toString(16);
	    }
	
	    function generateKeys(keys) {
	      keys.forEach(function(key) {
	        keymap[getHash(key)] = key;
	      });
	    }
	
	    function isArray(val) {
	      return Object.prototype.toString.call(val) == "[object Array]";
	    }
	
	    function isObject(val) {
	      return Object.prototype.toString.call(val) == "[object Object]";
	    }
	
	    function translate(obj){
	      if (isObject(obj)) {
	        delete obj.__name;
	        for (var key in obj) {
	          var val;
	          if (keymap[key]) {
	            val = obj[keymap[key]] = obj[key];
	            translate(val);
	            delete obj[key];
	          }
	        }
	      } else if (isArray(obj)) {
	        obj.forEach(function(item) {
	          translate(item);
	        });
	      }
	      return obj;
	    }
	
	    keys.forEach(function(key) {
	      keymap[getHash(key)] = key;
	    });
	
	    return translate(obj);
	  },
	  _capital: function(str){
	    return str.slice(0,1).toUpperCase() + str.slice(1);
	  },
	  subscribe : function(opt) {
	    var self = this;
	    var name = opt.action;
	    var success = opt.success;
	    var handle = opt.handle;
	    var messageName;
	
	    function mainHandler(e){
	      _events[name] && _events[name].length && _events[name].forEach(function(func) {
	        func && func(e);
	      });
	    }
	
	    function registerPageEvents(){
	      if(messageName){
	        self[messageName] = mainHandler;
	        opt.success && opt.success();
	      }
	    }
	
	    if (_events[name]) {
	      opt.success && opt.success();
	      _events[name].push(handle);
	    } else {
	      if(pageEvents.indexOf(name) != -1){
	        messageName = "on" + self._capital(name);
	        if(name == 'scroll'){
	          // 仅scroll事件需要toggle开关
	          this._send(messageName, {
	            success: registerPageEvents
	          });
	        }else{
	          // 不然就直接注册上了
	          registerPageEvents();
	        }
	      }else{
	        this._send("subscribe", {
	          action: name,
	          success: opt.success,
	          handle: mainHandler
	        });
	      }
	
	      _events[name] = [handle];
	    }
	  },
	
	  unsubscribe : function(opt) {
	    var name = opt.action;
	    var success = opt.success;
	    var handle = opt.handle;
	    var self = this;
	
	    var index = _events[name] ? _events[name].indexOf(handle) : -1;
	
	    function unregisterPageEvents(){
	      self[callbackName] = NOOP;
	    }
	
	    if (index != -1) {
	      _events[name].splice(index, 1);
	      success && success();
	      if(!_events[name].length){
	        _events[name] = null;
	      }
	    }else if(!handle){
	      _events[name] = null;
	    }
	
	    if(!_events[name]){
	      // unregister
	      // if is page event
	      if(pageEvents.indexOf(name) != -1 && after7_6){
	        var messageName = "off" + self._capital(name);
	        var callbackName = "on" + self._capital(name);
	        // 与安卓确认
	        if(name == 'scroll'){
	          this._send(messageName, {
	            success: unregisterPageEvents
	          });
	        }else{
	          unregisterPageEvents();
	        }
	      }else{
	        this._send("unsubscribe", {
	          action: name,
	          success: success
	        });
	      }
	    }
	    // if not found, remove all;
	  },
	
	  getUA: function(){},
	  /**
	   * callback function to be invoked from native
	   * @param  {Number} callbackId
	   * @param  {Object} retValue
	   */
	  callback: function(callbackId, retValue){
	    var win = window;
	    var callbackFuncName = this._generateCallbackName(callbackId);
	    var callback = window[callbackFuncName];
	
	    if(callback){
	      this.log("触发回调 ", "callbackId:" + callbackId);
	      setTimeout(function(){
	        callback && callback.call(self,retValue);
	      });
	      if(retValue.result == "complete" || retValue.result == "error"){
	        win[callbackFuncName] = null;
	        delete win[callbackFuncName];
	      }
	    }
	  }
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	var queue = module.exports = function(worker){
		var currentData = null;
		var currentCallback = null;
		var q = {
			timeout: null,
			running : false,
			tasks: [],
			push: function(data, cb){
				var callback = cb || function(data){}
				q.tasks.push({
					data: data,
					callback: callback
				});
				setTimeout(function(){
					q.process();
				}, 0);
			},
			dequeue: function(){
				if(currentCallback){
					currentCallback();
				}else{
					q.running = false;
				}
			},
			process: function(){
				if(q.tasks.length && !q.running){
					var task = q.tasks.shift();
					q.running = true;
					currentCallback = function(){
						q.running = false;
						task.callback(task.data);
						q.process();
					};
					currentData = task.data;
					worker(task.data, currentCallback);
				}
			}
		}
		return q;
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = {
	  _iOSNetworkType: function (result) {
	    var networkType;
	    var types = {
	      kSCNetworkReachabilityFlagsTransientConnection: 1 << 0,
	      kSCNetworkReachabilityFlagsReachable: 1 << 1,
	      kSCNetworkReachabilityFlagsConnectionRequired: 1 << 2,
	      kSCNetworkReachabilityFlagsConnectionOnTraffic: 1 << 3,
	      kSCNetworkReachabilityFlagsInterventionRequired: 1 << 4,
	      kSCNetworkReachabilityFlagsConnectionOnDemand: 1 << 5,
	      kSCNetworkReachabilityFlagsIsLocalAddress: 1 << 16,
	      kSCNetworkReachabilityFlagsIsDirect: 1 << 17,
	      kSCNetworkReachabilityFlagsIsWWAN: 1 << 18
	    };
	    var type = +result.type;
	    var subType = result.subType;
	    var returnValue;
	    // 2g, 3g, 4g
	    function getMobileType(subType) {
	      switch (subType) {
	        case "CTRadioAccessTechnologyGPRS":
	        case "CTRadioAccessTechnologyEdge":
	        case "CTRadioAccessTechnologyCDMA1x":
	          return "2g";
	        case "CTRadioAccessTechnologyLTE":
	          return "4g";
	        case "CTRadioAccessTechnologyWCDMA":
	        case "CTRadioAccessTechnologyHSDPA":
	        case "CTRadioAccessTechnologyHSUPA":
	        case "CTRadioAccessTechnologyCDMA1x":
	        case "CTRadioAccessTechnologyCDMAEVDORev0":
	        case "CTRadioAccessTechnologyCDMAEVDORevA":
	        case "CTRadioAccessTechnologyCDMAEVDORevB":
	        case "CTRadioAccessTechnologyeHRPD":
	          return "3g";
	      }
	    }
	
	    if ((type & types.kSCNetworkReachabilityFlagsReachable) == 0) {
	      return "none";
	    }
	
	    if ((type & types.kSCNetworkReachabilityFlagsConnectionRequired) == 0) {
	      // if target host is reachable and no connection is required
	      //  then we'll assume (for now) that your on Wi-Fi
	      returnValue = "wifi";
	    }
	
	
	    if (
	      (type & types.kSCNetworkReachabilityFlagsConnectionOnDemand) != 0
	      ||
	      (type & types.kSCNetworkReachabilityFlagsConnectionOnTraffic) != 0
	    ) {
	      // ... and the connection is on-demand (or on-traffic) if the
	      //     calling application is using the CFSocketStream or higher APIs
	      if ((type & types.kSCNetworkReachabilityFlagsInterventionRequired) == 0) {
	        // ... and no [user] intervention is needed
	        returnValue = "wifi";
	      }
	    }
	
	    if ((type & types.kSCNetworkReachabilityFlagsIsWWAN) == types.kSCNetworkReachabilityFlagsIsWWAN) {
	      // ... but WWAN connections are OK if the calling application
	      //     is using the CFNetwork (CFSocketStream?) APIs.
	      returnValue = getMobileType(subType);
	    }
	
	    return returnValue;
	  },
	  _androidNetworkType: function (result) {
	    var type = result.type;
	    var subType = result.subType;
	
	    if (type == 0) {
	      switch (subType) {
	        case 1:
	        case 2:
	        case 4:
	        case 7:
	        case 11:
	          return "2g";
	        case 3:
	        case 5:
	        case 6:
	        case 8:
	        case 9:
	        case 10:
	        case 12:
	        case 14:
	        case 15:
	          return "3g";
	        case 13:
	          return "4g";
	      }
	    }
	
	    if (type == 1) {
	      return "wifi";
	    } else {
	      return "none";
	    }
	  },
	  getNetworkType : function(opt) {
	    var self = this;
	    var _success = opt.success;
	
	    this._send("getNetworkType", {
	      success: function(result) {
	        var ua = self._osUA;
	        var networkType;
	
	        switch (ua.name) {
	          case "iphone":
	            networkType = this._iOSNetworkType(result);
	            break;
	          case "android":
	            networkType = this._androidNetworkType(result);
	            break;
	        }
	
	        _success && _success({
	          networkType: networkType,
	          raw: {
	            type: result.type,
	            subType: result.subType
	          }
	        });
	      },
	      fail: opt.fail
	    });
	  }
	}

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = function mixin(to, from) {
	  for (var key in from) {
	    to[key] = from[key];
	  }
	  return to;
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';
	
	var regexVer = /dp\/com\.dianping\.[\w\.]+\/([\d\.]+)/;
	
	var getAppVersion = function (ua) {
	  var version;
	  var regexMAPI = /MApi/;
	  var match  = ua.match(regexVer);
	  if (match) {
	    version = match[1];
	  }else if (regexMAPI.test(ua)) {
	    version = '7.0.0';
	  }else{
	    version = 'web';
	  }
	  return version;
	};
	var getOSName = function (ua) {
	  var regexAndroid = /android/i;
	  var regexIos = /ipad|iphone/i;
	  if (regexAndroid.test(ua)) {
	    return 'android';
	  }else if (regexIos.test(ua)) {
	    return 'ios';
	  }
	};
	
	var getAdapterVersion = function (ua) {
	  if (ua.match(regexVer)) {
	    var reg = /adapter\/([\d\.]+)/;
	    var match = ua.match(reg);
	    if (match) {
	      return match[1];
	    }
	  }
	};
	
	var getWebviewVersion = function(ua) {
	  return getAdapterVersion(ua) || getAppVersion(ua);
	};
	
	var appVersion = getAppVersion(navigator.userAgent);
	var osName = getOSName(navigator.userAgent);
	
	module.exports = {
	  appVersion: appVersion,
	  getAppVersion: getAppVersion,
	  osName: osName,
	  getOSName: getOSName,
	  getWebviewVersion: getWebviewVersion,
	  actionMapping: function (method) {
	    return function (opt) {
	      this._send(method, opt);
	    };
	  }
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = [
	  /*
	  * Common
	  */
	  "getRequestId", 
	  "isInstalledApp",
	  /*
	  * DeviceInfo
	  */
	  "getNetworkType", 
	  "getVersion",
	  /*
	  * UserInfos
	  */
	  "getUserInfo", 
	  "login", 
	  "updateAccount", 
	  "logout",
	  "thirdLogin",
	  /*
	  * GeoInfos
	  */ 
	  "getCityId", 
	  "getLocation", 
	  "getCity",
	  /*
	  * Common business
	  */
	  "setPullDown", 
	  "stopPullDown", 
	  "openScheme", 
	  "jumpToScheme", 
	  "closeWindow", 
	  "getContactList", 
	  "sendSMS", 
	  "bindPhone",
	  "ajax", 
	  "setSpotlight",
	  "getHealthData",
	  "pickCity",
	  "analyticsTag",
	  /*
	  * Storage
	  */
	  "store", 
	  "retrieve",
	  /*
	  *  Picture
	  */
	  "downloadImage", 
	  "chooseImage", 
	  "previewImage",
	  "uploadImage",
	  /*
	  * Audio
	  */
	  "playVoice",
	  /*
	  * Share
	  */
	  "share",
	  /*
	  * Broadcast
	  */
	  "publish", 
	  "subscribe", 
	  "unsubscribe", 
	
	  /*
	  * System widget
	  */
	  "alert", 
	  "prompt", 
	  "confirm", 
	  "actionSheet", 
	  /*
	  * System UI
	  */
	  "setTitle", 
	  "setBackgroundColor", 
	  "setNavigationBarHidden", 
	  "setScrollEnabled",
	  "setLLButton", 
	  "setLRButton", 
	  "setRLButton", 
	  "setRRButton", 
	  "setBouncesEnabled",
	  "setStatusBarStyle",
	  /*
	    Other
	   */
	  "setBarrageEnabled",
	  /*
	  * Private
	  */
	  "getCX",
	  "pay"
	];

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	var _err = window.onerror;
	var url = location.protocol + '//catdot.dianping.com/broker-service/api/js';
	window.onerror = function(err, file, line, col, error){
	  var e = encodeURIComponent;
	  var time = Date.now();
	  (new window.Image).src = url
	    + '?error=' + e(err)
	    + '&v=1'
	    + '&data=' + e(error && error.stack ? error.stack : '')
	    + '&url=' + e(location.href)
	    + '&file=' + e(file)
	    + '&line=' + e(line)
	    + '&col=' + e(col)
	    + '&timestamp=' + time;
	  _err && _err(err, file, line, col, error);
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '7.0',
	  _parseFeed: function(f){
	    var feed;
	    if (!f) {
	      return 0xff;
	    } else if (f.constructor.toString().indexOf('Array') >= 0) {
	      feed = [0, 0, 0, 0, 0, 0, 0, 0];
	      f.forEach(function(pos) {
	        feed[pos] = 1;
	      });
	      return parseInt(feed.join(''), 2);
	    }
	  },
	  share : function(opts){
	    opts.feed = this._parseFeed(opts.feed);
	    opts.url = this._tidyUrlParams(opts.url);
	    this._sendMessage('share', opts);
	  },
	  initShare: function(opt){
	    var success = opt.success;
	    var fail = opt.fail;
	    var src = 'dpshare://_?content=';
	    src += encodeURIComponent(JSON.stringify({
	      title: opt.title,
	      desc: opt.desc,
	      image: opt.image,
	      feed: this._parseFeed(opt.feed),
	      url: opt.url
	    }));
	    this.shareCallback = function(result){
	      if(result.status == 'success'){
	        success && success(result);
	      }else{
	        fail && fail(result);
	      }
	    };
	    this._createIframe(src);
	  },
	  getUA: function(opt) {
	    var success = opt && opt.success;
	    var appVersion = navigator.userAgent.match(/MApi\s[\w\.]+\s\([\w\.\d]+\s([\d\.]+)/)[1];
	    var ua = {
	      platform: 'dpapp',
	      appName: 'dianping',
	      appVersion: appVersion,
	      osName: this._osUA.name,
	      osVersion: this._osUA.version
	    };
	    success && success(ua);
	    return ua;
	  },
	  ready: function(callback) {
	    this._isReady = true;
	    callback();
	  },
	  uploadImage: function(opts) {
	    var fail = opts.fail;
	    var handle = opts.handle;
	
	    this._sendMessage('uploadImage', opts, function(result) {
	      var status = result.status;
	      if (status == 'fail') {
	        fail && fail(result);
	        return;
	      } else {
	        handle && handle(result);
	      }
	    });
	  },
	  ajax: function(args) {
	    args = this._sanitizeAjaxOpts(args);
	    var _success = args.success;
	    args.success = function(e) {
	      var result = JSON.parse(e.mapiResult);
	      result = this._transModel(args.keys, result);
	      _success(result);
	    };
	
	    this._send('mapi', args);
	  },
	  getCX: util.actionMapping('getCX'),
	  getContactList: util.actionMapping('getContactList'),
	  getRequestId: util.actionMapping('getRequestId'),
	  closeWindow: util.actionMapping('close_web'),
	  getUserInfo: util.actionMapping('getUserInfo'),
	  getCity: util.actionMapping('getCityId'),
	  getCityId: util.actionMapping('getCityId'),
	  getLocation: util.actionMapping('getLocation')
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	var core = __webpack_require__(130);
	var patch7  = __webpack_require__(152);
	
	//更新的API: share, initShare, closeWindow, _parseFeed
	//新增的API: setTitle等
	var newAPIs = [
	    'setLLButton', 
	    'setLRButton', 
	    'setRLButton', 
	    'setRRButton',
	    'setTitle',
	    'sendSMS',
	    'publish',
	    'closeWindow'
	  ];
	
	var _events = {};
	var pageEvents = ['appear', 'disappear', 'scroll'];
	function getPageMethodName(name) {
	  var result = 'on' + core._captal(name);
	  // fix for android 7.6.0
	  if (util.osName == 'android' && util.appVersion == '7.6.0' && /appear|disappear/.test(name)) {
	    result = name;
	  }
	  return result;
	}
	
	var getUA = (function() {
	  var uastr = navigator.userAgent;
	  var appVersionMatch = uastr.match(/dp\/[\w\.\d]+\/([\d\.]+)/);
	  var appVersion = appVersionMatch && appVersionMatch[1];
	  var matchPackageId = uastr.match(/dp\/(com\.dianping\.\w+)/);
	  var packageId = matchPackageId && matchPackageId[1];
	  var adapterMatch = uastr.match(/adapter\/([\d\.]+)/);
	  var adapterVersion = adapterMatch && adapterMatch[1];
	
	  return function(opt) {
	    var success = opt && opt.success;
	    var ua = {
	      platform: 'dpapp',
	      appName: 'dianping',
	      packageId: packageId,
	      appVersion: appVersion,
	      osName: core._osUA.name,
	      osVersion: core._osUA.version,
	      adapterVersion: adapterVersion
	    };
	    success && success(ua);
	    return ua;
	  };
	})();
	
	var Patch = module.exports = {
	  appVersion: '7.1.0',
	  pay: patch7.pay,
	  
	  uploadImage: patch7.uploadImage,
	  
	  getUA: getUA,
	
	  ready: function(callback) {
	    var self = this;
	    this._send('ready', {
	      success: function() {
	        self._isReady = true;
	        callback();
	      }
	    });
	  },
	
	  login: function(opt) {
	    var self = this;
	    var loginUser;
	
	    function getUser(callback) {
	      self.getUserInfo({
	        success: callback
	      });
	    }
	    getUser(function(result) {
	      if (result.token) {
	        opt.success && opt.success(result);
	      } else {
	        var loginEvent = 'loginSuccess';
	        var appearEvent = 'appear';
	
	        var loginSuccessHandler = function() {
	          getUser(function (user) {
	            loginUser = user;
	          });
	          self.unsubscribe({
	            action: loginEvent,
	            handle: loginSuccessHandler
	          });
	        };
	
	        self.subscribe({
	          action: loginEvent,
	          handle: loginSuccessHandler
	        });
	
	        var appearHandler = function () {
	          getUser(function (user) {
	            if (user && user.token) {
	              opt.success && opt.success(user);
	            }else{
	              opt.fail && opt.fail(user);
	            }
	            
	          });
	          self.unsubscribe({
	            action: appearEvent,
	            handle: appearHandler
	          });
	        };
	
	        self.subscribe({
	          action: appearEvent,
	          handle: appearHandler
	        }); 
	
	        self.openScheme({
	          url: 'dianping://login'
	        });
	      }
	    });
	  },
	  updateAccount: function(opt) {
	    opt = opt || {};
	    var self = this;
	    var dper = document.cookie.match(/dper=\w+/);
	    if (dper) {
	      dper = dper[0].split('=')[1];
	    }
	
	    if (opt.dper) {
	      dper = opt.dper;
	    }
	
	    if (!dper) {
	      return opt.fail && opt.fail('Missing dper');
	    }
	    var _loopGetUserInfo = function(success, fail) {
	      var retries = 0;
	      function loopGetUserInfo() {
	        self.getUserInfo({
	          success: function(info) {
	            if (info.token) {
	              success && success(info);
	            } else {
	              if (retries > 5) {
	                fail && fail();
	              } else {
	                retries++;
	                setTimeout(function() {
	                  loopGetUserInfo();
	                }, 100);
	              }
	            }
	          }
	        });
	      }
	      loopGetUserInfo();
	    };
	
	    var url
	    if (location.protocol === 'http') {
	      url = 'http://m.api.dianping.com/mlogin/convertdper.api'
	    }else{
	      url = 'https://mapi.dianping.com/mapi/mlogin/convertdper.api'
	    }
	
	    self.ajax({
	      url: url,
	      data: {
	        dper: dper
	      },
	      keys: ['Token', 'NewToken'],
	      success: function(result) {
	        var ua = self.getUA();
	        if (self.Semver.gte(ua.appVersion, '7.5.0')) {
	          self._send('updateAccount', {
	            token: result.Token,
	            newtoken: result.NewToken,
	            success: function() {
	              self.getUserInfo({
	                success: opt.success
	              });
	            },
	            fail: opt.fail
	          });
	        } else {
	          self._send('loginsuccess', {
	            token: result.Token,
	            newtoken: result.NewToken
	          });
	
	          _loopGetUserInfo(opt.success, opt.fail);
	        }
	      },
	      fail: opt.fail
	    });
	  },
	  _parseFeed: function(f){
	    var feed;
	    if (!f) {
	      return 0xff;
	    } else if (f.constructor.toString().indexOf('Array') >= 0) {
	      feed = [0, 0, 0, 0, 0, 0, 0, 0];
	      f.forEach(function(pos) {
	        feed[7 - pos] = 1;
	      });
	      return parseInt(feed.join(''), 2);
	    }
	  },
	  share: function(opt) {
	    opt.feed = this._parseFeed(opt.feed);
	    opt.url = this._tidyUrlParams(opt.url);
	    this._send('share', opt);
	  },
	  initShare: function(opt) {
	    var self = this;
	    this.setRRButton({
	      icon: 'H5_Share',
	      handle: function() {
	        opt.handle && opt.handle();
	        self.share({
	          title: opt.title,
	          desc: opt.desc,
	          content: opt.content,
	          image: opt.image,
	          feed: opt.feed,
	          url: opt.url,
	          success: opt.success,
	          fail: opt.fail
	        });
	      }
	    });
	  },
	  subscribe: function(opt) {
	    var name = opt.action;
	    var handle = opt.handle;
	
	    function mainHandler(e) {
	      _events[name] && _events[name].length && _events[name].forEach(function(func) {
	        func && func(e);
	      });
	    }
	
	    if (_events[name]) {
	      opt.success && opt.success();
	      _events[name].push(handle);
	    } else {
	      this._send('subscribe', {
	        action: name,
	        success: opt.success,
	        handle: mainHandler
	      });
	
	      _events[name] = [handle];
	    }
	  },
	
	  unsubscribe: function(opt) {
	    var name = opt.action;
	    var success = opt.success;
	    var handle = opt.handle;
	
	    var index = _events[name] ? _events[name].indexOf(handle) : -1;
	
	    if (index != -1) {
	      _events[name].splice(index, 1);
	      success && success();
	      if (!_events[name].length) {
	        _events[name] = null;
	      }
	    } else if (!handle) {
	      _events[name] = null;
	    }
	
	    if (!_events[name]) {
	      this._send('unsubscribe', {
	        action: name,
	        success: success
	      });
	    }
	  },
	
	  openScheme: function(opt) {
	    var url = opt.url;
	    var extra = opt.extra;
	    if (extra) {
	      url += '?' + this._convertUrlParams(extra);
	      delete opt.extra;
	      opt.url = url;
	    }
	    this._send('openScheme', opt);
	  }
	};
	
	newAPIs.forEach(function (api) {
	  Patch[api] = util.actionMapping(api);
	});
	
	pageEvents.forEach(function(name) {
	  Patch[getPageMethodName(name)] = function (){};
	});

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  appVersion: '7.2.0',
	
	  jumpToScheme: function(opt) {
	    var url = opt.url;
	    var extra = opt.extra;
	    if (extra) {
	      url += '?' + this._convertUrlParams(extra);
	      delete opt.extra;
	      opt.url = url;
	    }
	    opt.toHome = !!opt.toHome ? 1 : 0;
	    this._send('jumpToScheme', opt);
	  },
	  publish: function(opt) {
	    var bizname = this._getBizName(opt);
	    var CONSTS = ['phoneChanged', 'AccountBindChange'];
	    if (bizname) {
	      if (CONSTS.indexOf(opt.action) == -1) {
	        opt.action = bizname + ':' + opt.action;
	      }
	      this._send('publish', opt);
	    }
	  }
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '7.5.0',
	  
	  store: function(opt) {
	    var bizname = this._getBizName(opt);
	    if (bizname) {
	      opt.key = bizname + ':' + opt.key;
	      this._send('store', opt);
	    }
	  },
	  retrieve: function(opt) {
	    var bizname = this._getBizName(opt);
	    if (opt.key.indexOf(':') === -1) {
	      opt.key = bizname + ':' + opt.key;
	    }
	    this._send('retrieve', opt);
	  },
	  setBackgroundColor: util.actionMapping('setBackgroundColor')
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	var core = __webpack_require__(130);
	
	var _events = {};
	var pageEvents = ['appear', 'disappear', 'scroll'];
	function getPageMethodName(name) {
	  var result = 'on' + core._captal(name);
	  // fix for android 7.6.0
	  if (util.osName == 'android' && util.appVersion == '7.6.0' && /appear|disappear/.test(name)) {
	    result = name;
	  }
	  return result;
	}
	
	module.exports = {
	  appVersion: '7.6.0',
	  
	  isInstalledApp: util.actionMapping('isInstalledApp'),
	
	  subscribe: function(opt) {
	    var self = this;
	    var name = opt.action;
	    var handle = opt.handle;
	    var messageName;
	
	    function mainHandler(e) {
	      _events[name] && _events[name].length && _events[name].forEach(function(func) {
	        func && func(e);
	      });
	    }
	
	    function registerPageEvents() {
	      if (messageName) {
	        window.DPApp && (window.DPApp[getPageMethodName(name)] = mainHandler);
	        opt.success && opt.success();
	      }
	    }
	
	    if (_events[name]) {
	      opt.success && opt.success();
	      _events[name].push(handle);
	    } else {
	      if (pageEvents.indexOf(name) !== -1) {
	        messageName = 'on' + self._captal(name);
	        if (name == 'scroll') {
	          // 仅scroll事件需要toggle开关
	          this._send(messageName, {
	            success: registerPageEvents
	          });
	        } else {
	          // 不然就直接注册上了
	          registerPageEvents();
	        }
	      } else {
	        this._send('subscribe', {
	          action: name,
	          success: opt.success,
	          handle: mainHandler
	        });
	      }
	
	      _events[name] = [handle];
	    }
	  },
	
	  unsubscribe: function(opt) {
	    var name = opt.action;
	    var success = opt.success;
	    var handle = opt.handle;
	    var self = this;
	
	    var index = _events[name] ? _events[name].indexOf(handle) : -1;
	
	    function unregisterPageEvents() {
	      self[callbackName] = function () {};
	    }
	
	    if (index != -1) {
	      _events[name].splice(index, 1);
	      success && success();
	      if (!_events[name].length) {
	        _events[name] = null;
	      }
	    } else if (!handle) {
	      _events[name] = null;
	    }
	
	    if (!_events[name]) {
	      // unregister
	      // if is page event
	      if (pageEvents.indexOf(name) !== -1) {
	        var messageName = 'off' + self._captal(name);
	        var callbackName = 'on' + self._captal(name);
	        // 与安卓确认
	        if (name == 'scroll') {
	          this._send(messageName, {
	            success: unregisterPageEvents
	          });
	        } else {
	          unregisterPageEvents();
	        }
	      } else {
	        this._send('unsubscribe', {
	          action: name,
	          success: success
	        });
	      }
	    }
	  },
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	var apis = ['alert', 'confirm', 'actionSheet', 'prompt', 'setPullDown', 'stopPullDown', 'downloadImage'];
	var core = {
	    appVersion: '7.8.0'
	};
	
	apis.forEach(function(api) {
	    var fn = util.actionMapping(api);
	    core[api] = fn;
	});
	core.prompt = function(opt) {
	    if (!opt.placeholder) {
	        opt.placeholder = '';
	    }
	    if (util.osName === 'ios') {
	        // FIX: message参数有bug，暂时不加入filterList
	        var filterList = ['title', 'placeholder', 'okButton', 'cancelButton', 'success', 'fail'];
	        var optKeys = Object.keys(opt);
	        for (var i = 0; i < optKeys.length; i++) {
	            var key = optKeys[i];
	            if (!~filterList.indexOf(key)) {
	                delete opt[key];
	            }
	        }
	    }
	    this._send('prompt', opt);
	};
	
	module.exports = core;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	var async = __webpack_require__(159);
	var core = __webpack_require__(130);
	
	module.exports = {
	  appVersion: '7.9.1',
	  
	  setNavigationBarHidden: util.actionMapping('setNavigationBarHidden'),
	
	  chooseImage: function(opt) {
	    opt = opt || {};
	    opt.count = (!opt.count || opt.count > 9 || opt.count < 1) ? 9 : opt.count;
	    this._send('chooseImage', opt);
	  },
	  uploadImage: function(opts) {
	    var success = opts.success;
	    var fail = opts.fail;
	    var handle = opts.handle;
	    var ua = this.getUA();
	    var self = this;
	    if (opts.localId || opts.localIds) {
	      if (core.Semver.gte(ua.adapterVersion || ua.appVersion, '7.9.1')) {
	        if (opts.localIds) {
	          (function(ids) {
	            var picKeys = {};
	            var photoInfos = [];
	            async.mapSeries(ids, function(id, done){
	              self._send('uploadPhoto', {
	                localId: id,
	                success: function(e){
	                  picKeys[id] = e.picKey;
	                  photoInfos.push({
	                    localId: id,
	                    picKey: e.picKey//FIX BUG, What 'picKey' mean?
	                  });
	                  done(null);
	                },
	                fail: function(e){
	                  done(e);
	                }
	              });
	            }, function(e){
	              if(e){
	                fail && fail(e);
	              }else{
	                success && success({
	                  picKeys: picKeys,
	                  photoInfos: photoInfos
	                });
	              }
	            });
	          })(opts.localIds);
	        } else {
	          this._send('uploadPhoto', opts);
	        }
	      } else {
	        fail({
	          errMsg: 'ERR_NOT_IMPLEMENTED'
	        });
	      }
	    } else {
	      this._sendMessage('uploadImage', opts, function(result) {
	        var status = result.status;
	        if (status == 'fail') {
	          fail && fail(result);
	          return;
	        } else {
	          handle && handle(result);
	        }
	      });
	    }
	  },
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';
	
	exports.mapSeries = function(items, process, callback) {
	    var count = items.length;
	    var current = 0;
	    var results = [];
	
	    function done(err, result) {
	        if (err) {
	            return callback(err);
	        }
	
	        current++;
	        results.push(result);
	        if(current !== count){
	            process(items[current], done);
	        }else{
	            callback(null, results);
	        }
	    }
	
	    process(items[current], done);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '7.9.2',
	  
	  previewImage: util.actionMapping('previewImage')
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '7.9.4',
	  setSpotlight: function (opt) {
	    if (!opt.webpageURL) {
	      return;
	    }
	    if (!opt.scheme) {
	      opt.scheme = 'dianping://web?url=' + encodeURIComponent(opt.webpageURL);
	    }
	    this._send('setSpotlight', opt);
	  },
	  playVoice: util.actionMapping('playVoice')
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  appVersion: '7.9.6',
	
	  logout: function (opt) {
	    var url;
	    if (opt.type === 1) {
	      url = 'dianping://me';
	    }else if (opt.type === 2) {
	      url = 'dianping://home';
	    }
	    if (url) {
	      opt.success = function () {
	        this.openScheme({
	          url: url
	        });
	      };      
	    }
	    this._send('logout', opt);
	  },
	  login: function (opt) {
	    var self = this;
	    function getUser(callback) {
	      self.getUserInfo({
	        success: callback
	      });
	    }
	    // 先强制退出登录
	    this.logout({
	      type: 0,
	      success: function() {
	        // 注册事件
	        var appearEvent = 'appear';
	        // FIXME: loginSuccess 然并卵: 取消登录、已登录情况下不会发此通知，正常登录回调方法处理结果比appear慢！
	        // var loginEvent = 'loginSuccess';
	        var appearHandler = function () {
	          getUser(function (user) {
	            if (user && user.token) {
	              console.log('login success');
	              opt.success && opt.success(user);
	            }else{
	              console.log('login fail');
	              opt.fail && opt.fail(user);
	            }
	          });
	          self.unsubscribe({
	            action: appearEvent,
	            handle: appearHandler
	          });
	        };
	
	        self.subscribe({
	          action: appearEvent,
	          handle: appearHandler
	        });
	
	        // 打开登录页
	        self.openScheme({
	          url: 'dianping://login'
	        });
	      }
	    });
	  }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '8.0.0',
	
	  setScrollEnabled: util.actionMapping('setScrollEnabled'),
	  setBouncesEnabled: util.actionMapping('setBouncesEnabled'),
	
	  bindPhone: util.actionMapping('bindPhone'),
	  pay: util.actionMapping('pay')
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	var core = {
	  appVersion: '8.0.4',
	  thirdLogin: function(opt) {
	    var type = opt.type;
	    var url;
	    switch (type){
	      case 1:
	        url = location.protocol + '//m.dianping.com/auth/app?ft=15&sso=true';
	        break;
	      case 2:
	        url = location.protocol + '//m.dianping.com/auth/app?ft=6&sso=true&redir=';
	        break;
	      case 3:
	        url = location.protocol + '//m.dianping.com/auth/app?ft=5&ssp=true&redir=';
	        break;
	      case 4:
	        url = location.protocol + '//m.dianping.com/auth/app?ft=2&source=1&sso=true&redir=';
	        break;
	    }
	    this.openScheme({
	      url: 'dianping://loginweb?url=' + encodeURIComponent(url) + '&isFromNative=true',
	    });
	  },
	  getCX: function(opt) {
	    var success = opt.success;
	    opt.success = function(res) {
	      if (res.fingerprint) {
	        res.cx = res.fingerprint;
	      }
	      success(res);
	    }
	    this._send('getCX', opt);
	  },
	  uploadImage: function(opts) {
	    var success = opts.success;
	    var fail = opts.fail;
	    var handle = opts.handle;
	
	    if (opts.localId || opts.localIds) {
	
	      //兼容业务对localId单图上传的支持
	      if (opts.localId) {
	        opts.localIds = [opts.localId];
	        delete opts.localId;
	      }
	      
	      opts.success = function(res) {
	        var obj = {};
	        var _localId;
	        if (res.ret) {
	          res.ret.forEach(function(picItem, index) {
	            picItem.localId = picItem.localId || opts.localIds[index];
	            
	            _localId = picItem.localId;
	            obj[_localId] = picItem.picKey;
	          });
	          res.photoInfos = res.ret;
	          delete res.ret;
	        }
	        res.picKeys = obj;
	        success(res);
	      };
	
	      this._send('uploadPhoto', opts); 
	
	    } else {
	      this._sendMessage('uploadImage', opts, function(result) {
	        var status = result.status;
	        if (status == 'fail') {
	          fail && fail(result);
	          return;
	        } else {
	          handle && handle(result);
	        }
	      });
	    }
	  }
	};
	if (util.osName === 'ios') {//getOSName()
	  core.setStatusBarStyle = function(opt) {
	    if (opt.style === undefined) {
	      opt.style = 0;
	    }
	    this._send('setStatusBarStyle', opt);
	  }
	}
	module.exports = core;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '8.0.6',
	
	  share: function(opts) {
	    //直接分享渠道计数从1开始
	    if (opts.shareType !== undefined) {
	      if (util.osName === 'android') {
	        //Android下兼容shareType从1开始计数
	        opts.shareType += 1;
	      }
	    }
	    opts.feed = this._parseFeed(opts.feed);
	    opts.url = this._tidyUrlParams(opts.url);
	    
	    this._send('share', opts);
	  }
	
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	var core = {
	    appVersion: '8.1.0'
	};
	
	if (util.osName === 'ios') {
	    core.getHealthData = function(opts) {
	        if (!opts) return;
	        // 目前支持的类型
	        var typeList = [1];
	        var type = opts.quantityType;
	        var fail = opts.fail;
	        // valid
	        if (~typeList.indexOf(type)) {
	            _handleDate(opts) && this._send('getHealthData', opts);
	        } else {
	            typeof fail == 'function' && fail('type error');
	        }
	
	        function _handleDate(opts) {
	            var start = opts.startDate;
	            var end = opts.endDate || new Date();
	            var fail = opts.fail;
	
	            start = +new Date(start);
	            end = +new Date(end);
	            if (start < end) {
	                // 单位：秒
	                opts.startDate = Math.round(start / 1000);
	                opts.endDate = Math.round(end / 1000);
	                return true;
	            } else {
	                typeof fail == 'function' && fail('date error');
	            }
	        }
	    };
	    core.prompt = function(opt) {
	        if (!opt.placeholder) {
	            opt.placeholder = '';
	        }
	        this._send('prompt', opt);
	    };
	}
	
	module.exports = core;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	
	module.exports = {
	  appVersion: '8.1.2',
	
	  share: function(opts) {
	    
	    opts.feed = this._parseFeed(opts.feed);
	    opts.url = this._tidyUrlParams(opts.url);
	    
	    this._send('share', opts);
	  },
	  setBarrageEnabled: function(opts) {
	    this._send('setBarrageEnabled',opts);
	  }
	
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var util = __webpack_require__(149);
	var batchAPI = [
	    'setLLButton',
	    'setLRButton',
	    'setRLButton',
	    'setRRButton'
	];
	
	var Core = module.exports = {
	    appVersion: '8.1.4',
	    publish: function(opt) {
	        var bizname = this._getBizName(opt);
	        var CONSTS = ['phoneChanged', 'AccountBindChange'];
	        if (/2Native/i.test(opt.type) || ~CONSTS.indexOf(opt.action)) {
	            delete opt.type;
	            this._send('publish', opt);
	        } else if (bizname) {
	            opt.action = bizname + ':' + opt.action;
	            delete opt.type;
	            this._send('publish', opt);
	        }
	    }
	};
	
	batchAPI.forEach(function (api) {
	  Core[api] = _actionMapping(api);
	});
	
	function _actionMapping(method) {
	    return function (opt) {
	        if (opt && opt.icon) {
	            opt.icon = _convertIcon(opt.icon);
	        }
	        this._send(method, opt);
	    };
	}
	
	function _convertIcon(icon) {
	    var mapList = {
	        'H5_Favorite_On': 'ic_action_favorite_on_normal',
	        'H5_Favorite_Off': 'ic_action_favorite_off_normal'
	    };
	    if (/android/i.test(util.osName)) {
	        return mapList[icon] || icon;
	    }
	    return icon;
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(149);
	
	var Patch = {
		appVersion: '8.1.6',
		pickCity: function(opts) {
			var type = opts && opts.type;
			if (type === undefined || type == 0 || type == 1) {
				this._send('pickCity', opts);
			} else {
				console.log('param error');
				typeof opts.fail == 'function' && opts.fail();
			}
		},
		analyticsTag: function(opts) {
			if (opts && opts.channel && opts.key && opts.value) {
				typeof opts.value == 'string' || (opts.value = JSON.stringify(opts.value));
				this._send('analyticsTag', opts);
			} else {
				console.log('param error');
				typeof opts.fail == 'function' && opts.fail();
			}
		}
	};
	
	if (util.osName === 'ios') {
		Patch.setPullDown = function(opts) {
			var callCount = 0;
			var success = opts.success;
			opts.success = function(res) {
				//解决8.1.6 ios下无法区分success和handle事件的BUG
				callCount++;
				if (callCount > 1) {
					opts.handle(res);
				}else{
					success(res);
				}
			}
			this._send('setPullDown',opts);
		};
		
		Patch.getNetworkType = function(opts) {
			var success = opts.success;
			opts.success = function(res) {
				res.networkType = res.type;
				delete res.type;
				success(res);
			};
			this._send('getNetworkType',opts);
		};
	}
	
	module.exports = Patch;

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = ("1.7.0");

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = ("npm");

/***/ },
/* 172 */
/***/ function(module, exports) {

	//API currently implemented by dpapp
	module.exports = [
	    'config',
	
	    'isApiSupported',
	
	    'getFingerprint',
	    'getNetworkType',
	
	    'getUserInfo',
	    'login',
	    'logout',
	
	    'getCity',
	    'getLocationCity',
	    'getLocation',
	
	    'share',
	    'configShare',
	
	    'openWebview',
	    'closeWebview',
	    'jumpWebview',
	
	    'setTitle',
	    'setNavButtons',
	
	    'store',
	    'retrieve',
	
	    'chooseImage',
	    'uploadImage',
	    'previewImage',
	    'downloadImage',
	
	    'publish',
	    'subscribe',
	    'unsubscribe',
	
	    'setNavigationBarHidden',
	    'setBackgroundColor',
	    'setBouncesEnabled',
	    'setStatusBarStyle',
	    'setLLButton',
	
	    'alert',
	    'confirm',
	    'prompt',
	
	    'sendSMS',
	    'getContactList',
	
	    'setPullDown',
	    'stopPullDown'
	  ];


/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = {
	  'WECHAT_FRIENDS':0,
	  'WECHAT_TIMELINE': 1,
	  'QQ': 2,
	  'SMS': 3,
	  'WEIBO': 4,
	  'QZONE': 5,
	  'EMAIL': 6,
	  'COPY': 7
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var request = __webpack_require__(175);
	
	module.exports = function logEvent (type, version) {
	  if (Math.random() >= 0.1) return;
	  var host;
	  var hosts = [
	    'dianping.com',  
	    'meituan.com', 
	    'sankuai.com', 
	    'meituan.net', 
	    'maoyan.com',
	    'm-zl-st.cfcmu.cn',
	    'm-zl.mucfc.com'
	  ];
	  var hostsBeta = [
	    'localhost',
	    '51ping.com',
	    'alpha.dp'
	  ];
	  for (var i = 0; i < hosts.length; i++) {
	    if (location.href.indexOf(hosts[i]) !== -1) {
	      host = 'm.dianping.com';
	      break;
	    }
	  }
	  if (!host) {
	    for (var j = 0; j < hostsBeta.length; j++) {
	      if (location.href.indexOf(hostsBeta[j])!==-1) {
	        host = 'm.51ping.com';
	      }
	    }
	  }
	  if (host) {
	    request({
	        url: '//' + host + '/mtnb/api/statistics',
	        data: {
	            version: version,
	            type: type
	        }
	    });    
	  }
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	var globalCount = 0;
	
	var urlStringify = function (url, data) {
	    if (!data) {
	        return url;
	    }
	    var param = [];
	    for (var o in data) {
	        if (data.hasOwnProperty(o)) {
	            param.push(o + '=' + data[o]);
	        }
	    }
	    return ~url.indexOf('?') ? url + param.join('&') : url + '?' + param.join('&');
	};
	
	/**
	 * jsonp
	 * */
	module.exports = function (options) {
	
	    if (!options.url) {
	        throw new Error('url request!');
	    }
	    var data = options.data || {};
	    var cb = options.onSuc || function () {
	    };
	    var cbName = data.callback = 'KNB' + (++globalCount) + (+new Date());
	
	    var script = document.createElement('script');
	    script.src = urlStringify(options.url, data);
	
	    window[cbName] = function (res) {
	        delete window[cbName];
	        script.parentNode.removeChild(script);
	        cb(res);
	    };
	
	    document.getElementsByTagName('head')[0].appendChild(script);
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var Bridge = __webpack_require__(177)
	var baseAPIs = __webpack_require__(179)
	var mixin = __webpack_require__(117)
	var Semver = __webpack_require__(186)
	var version = __webpack_require__(118)
	var getUA = __webpack_require__(119)
	var util = __webpack_require__(187)
	
	var UA = getUA.internal()
	var titansVersion = UA._knbVersion
	var noop = function () {}
	
	// a safe getter function
	function get(obj, path) {
	  var p = path.split('.');
	  if (p.length == 1) return obj[p[0]];
	  if (p.length == 2) return obj[p[0]][p[1]];
	  if (p.length == 3) return obj[p[0]][p[1]][p[2]];
	}
	
	var Titans = {
	  __version__: version,
	  // 拓展的API实现
	  // _apiFn_: {},
	  // 当前支持的API列表
	  apiList: [],
	  // 存储注册事件的回调
	  _eventQueue: {},
	  // 存储注册事件的ID，方便unsubscribe
	  _subscriptionMap: {},
	  _cfg: {},
	  config: function (config) {
	    this._cfg = mixin(this._cfg, config)
	    Bridge.config(config)
	  },
	  setBridge: function (bridge) { return Bridge.setBridge(bridge); },
	  getBizName: function () {return this._cfg.bizname},
	  ready: function (callback) { return Bridge.ready(callback); },
	  log: Bridge.log.bind(Bridge),
	  loadAPIs: function (ref) {
	    var type = ref.type; if ( type === void 0 ) type = 'base';
	    var apis = ref.apis; if ( apis === void 0 ) apis = [];
	
	    var self = this
	
	    apis
	      .filter(Boolean)
	      .forEach(function (API) {
	        var name = API.name || API.message
	        if (!name) return console.warn('[LoadAPI] fail', JSON.stringify(API))
	
	        // 针对版本过滤API，如果是基础API，参考版本为titansVersion,其他参考APP版本.
	        if (type === 'base' && API.version && Semver.lt(titansVersion, API.version)) return
	        if (type !== 'base' && API.version && Semver.lt(UA.appVersion, API.version)) return
	
	        // 针对操作系统过滤API
	        if (API.os && API.os !== UA.osName) return
	
	        // 记录添加的API
	        self.apiList.push(name)
	
	        if (typeof self[name] === 'function') console.warn('[API] ', name, ' overwrite default implementation')
	
	        self[name] = function (opts) {
	          var mapper = API.mapper || (function (x) { return x; })
	          opts = mapper.call(self, opts || {})
	          if (!opts) return;
	          // 如果mapper没有返回值，则表示方法被JS处理，无须发送消息到客户端
	          // 如果有handler，则表示参数被handler处理，无须发送消息到客户端
	          if (API.handler) return API.handler.call(self, opts)
	          // if has fall back, check if exists
	          if (API.fallback) {
	            return self._isApiSupported(API.message, function (supported) {
	                if (supported) return Bridge.callNative(API.message, opts);
	                return API.fallback(opts);
	            });
	          }
	          return Bridge.callNative(API.message, opts)
	        }
	        // 记录原始message及fallback
	        self[name].$MESSAGE = API.message
	        self[name].$FALLBACK = API.fallback;
	        // 给statics赋上，如KNB.share.WEIBO, KNB.share.WECHAT
	        Object.keys(API.statics || {}).forEach(function (key) { return self[name][key] = API.statics[key]; })
	      })
	  },
	  // 检查一个nativeApi是否存在
	  _isApiSupported: function (nativeApiName, success) {
	    return this.checkVersion({
	      apis: [nativeApiName],
	      success: function (data) {
	        var infos = get(data, 'infos') || get(data, 'data.infos') || {}; // 容错
	        success(String(infos[nativeApiName]) !== "0")
	      },
	      fail: function () { return success(false); }
	    });
	  },
	  // 检查一个KNB方法是否存在
	  isApiSupported: function (ref) {
	    var apiName = ref.apiName;
	    var success = ref.success; if ( success === void 0 ) success = noop;
	
	    if (typeof this[apiName] === 'function') {
	      var message = this[apiName].$MESSAGE
	      if (!message) return success(true)   // 没有映射到native的，直接true
	      if (this[apiName].$FALLBACK) return success(true);  // 有fallback的，直接true
	      // 有映射到native的，询问native这个message是否存在
	      return this._isApiSupported(message, success);
	    }
	    return this._isApiSupported(apiName, success);
	  },
	  use: function (api, opts) {
	    if ( opts === void 0 ) opts={};
	
	    if (typeof this[api] === 'function') return this[api](opts)
	    return Bridge.callNative(api, opts)
	  }
	}
	
	
	// 载入基础API
	Titans.loadAPIs({
	  type: 'base',
	  apis: baseAPIs
	})
	
	// 默认设置android的桥方式为prompt
	if (UA.osName === 'android') {
	  Titans.setBridge({
	    name: 'prompt',
	    delay: 200
	  })
	}
	
	Titans.util = util
	module.exports = Titans


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var queue = __webpack_require__(178)
	var mixin = __webpack_require__(117)
	var noop = function () {}
	
	var callbackUtil = {
	  getName: function (callbackId) {
	    return 'DPApp_callback_' + callbackId
	  },
	  getId: function () {
	    var rand = Math.floor(Math.random() * 1000)
	    var timestampStr = (+new Date()).toString()
	    // 在DPAPP老版本中callbackId为int型，故只选取8位
	    var timestamp = timestampStr.substr(timestampStr.length - 5, 5)
	    return +(timestamp + '' + rand)
	  }
	}
	
	var isForceDebug = function () {
	  return location.href.indexOf('knb_force_titans_debug=1') > -1
	}
	
	var mtnbCBID = 1
	var messageHandlers = {}
	function regHandler (fn) {
	  var id = 'cb_' + (mtnbCBID++) + '_' + new Date().getTime()
	  messageHandlers[id] = fn
	  return id
	}
	
	var DPApp = {
	  _delay: 1000,
	  _isDebug: false,
	  _dequeueTimeout: null,
	
	  //防止@dp/app重写Titans的DPApp
	  __type__: 'npm',
	  queue: undefined,
	  config: function (config) {
	    this._isDebug = config.debug
	    this._isReady = config.ready
	  },
	  setBridge: function (bridge) {
	    if (typeof bridge === 'function') {
	      this._bridge = bridge
	      this._delay = 0
	    } else {
	      this._bridge = bridge.name
	      this._delay = bridge.delay
	    }
	  },
	  log: function () {
	    var arguments$1 = arguments;
	
	    var message = []
	    for (var i = 0; i < arguments.length; i++) {
	      if (typeof arguments$1[i] == 'string') {
	        message.push(arguments$1[i])
	      } else if (arguments$1[i] != undefined) {
	        message.push(JSON.stringify(arguments$1[i]))
	      }
	    }
	
	    if (this._isDebug || isForceDebug()) return setTimeout(function () { return alert(message.join(' ')); })
	    if (window._KNB_LOG) return window._KNB_LOG(message.join(' '))
	  },
	  ready: function (callback) {
	    var self = this
	    callback = callback || noop
	    if (self._isReady) return callback()
	
	    self.log('[Auth   ]: 正在进行鉴权')
	    this.callNative('ready', {
	      success: function () {
	        self._isReady = true
	        self.log('鉴权成功')
	        callback()
	      },
	      fail: function (err) {
	        self.log('鉴权失败', err)
	      }
	    })
	  },
	  callNative: function (method, args) {
	    if ( args === void 0 ) args = {};
	
	    this.log('[Call  ]', method)
	    var self = this
	
	    function wrap (name, fn) {
	      return function (result) {
	        self.log(("[" + name + " ] " + method), result)
	        fn && fn.call(self, result)
	      }
	    }
	
	    // Wrap with log info
	    var fail = wrap('Failed', args.fail)
	    var success = wrap('Success', args.success)
	    var handle = wrap('Trigger', args.handle)
	
	    // adapt for MTNB proxy
	    args = mixin({
	      handlerId: regHandler(handle)
	    }, args)
	
	    self.enqueue(method, args, function (result) {
	      var status = result.status
	      var data = result.__isFromMTNB ? result.data : result
	      if (status === 'success' || String(status) == '0') return success(data)
	      if (status === 'action') return handle(data)
	      return fail(result);
	    })
	  },
	  enqueue: function (method, args, callback) {
	    var self = this
	    this.queue = this.queue || queue(function (ref) {
	      var method = ref.method;
	      var args = ref.args;
	      var callback = ref.callback;
	
	      return self.doSendMessage(method, args, callback);
	    })
	    this.log('[Enqueue]', method)
	    this.queue.push({method: method, args: args, callback: callback})
	    // run task every 1000ms if queue is not empty
	    this._dequeueTimeout = setTimeout(function () { return self.dequeue('Auto'); }, self._delay * self.queue.tasks.length)
	  },
	  dequeue: function (source) {
	    source = source || 'Native'
	    var self = this
	    this.log('[Dequeue]', 'by' , source)
	    setTimeout(function () {
	      clearTimeout(self._dequeueTimeout)
	      self._dequeueTimeout = null
	      self.queue.dequeue()
	    }, 0)
	  },
	  doSendMessage: function (method, args , callback) {
	    if ( args === void 0 ) args = {};
	
	    var callbackId = this.createCallback(callback)
	
	    args = JSON.stringify(args)
	
	    var message = 'js://_?method=' + method + '&args=' + encodeURIComponent(args) + '&callbackId=' + callbackId
	    this.log('[Send]', method, 'with callbackId:', callbackId, 'has params: ', args)
	
	    if (typeof this._bridge === 'function') return this._bridge(message)
	    if (this._bridge === 'prompt') return this.sendByPrompt(message)
	    this.sendByIframe(message)
	  },
	  sendByPrompt: function (message) {
	    this.log('[Send By Prompt]', message)
	    window.prompt(message)
	  },
	  sendByIframe: function (message) {
	    this.log('[Send By iframe]', message)
	    var node = document.createElement('iframe')
	    node.style.display = 'none'
	
	    var removeNode = function () {
	      node.onload = node.onerror = null
	      node.parentNode && node.parentNode.removeChild(node)
	    }
	
	    /*
	      remove node after loaded or error
	      */
	    node.onload = node.onerror = removeNode
	    setTimeout(removeNode, 3000)
	    node.src = message
	    document.body.appendChild(node)
	  },
	  createCallback: function (callback) {
	    var callbackId = 0, callbackName
	
	    if (typeof callback === 'function') {
	      callbackId = callbackUtil.getId()
	      callbackName = callbackUtil.getName(callbackId)
	      window[callbackName] = callback
	    }
	
	    return callbackId
	  },
	  //Titans的调用callback时,把callbackId绑定在了window上,然后native调用window[callbackId]
	  callback: function (callbackId, retValue, isFromMTNB) {
	    this.log('[Call Callback]', callbackId)
	    // handle message from native
	    var win = window;
	    var self = this;
	    var callbackName = callbackUtil.getName(callbackId)
	    var callback = window[callbackName]
	
	    if (!callback) return
	    if (retValue && isFromMTNB) retValue.__isFromMTNB = true
	    setTimeout(function () { return callback.call(self, retValue); }, 0)
	    var result = (retValue || {}).result
	    if (result == 'complete' || result == 'error') {
	      win[callbackName] = null
	      delete win[callbackName]
	    }
	  }
	}
	
	// Adapt for MTNB call from Native
	if (window.MTNB) {
	  console.log('you env has already register MTNB')
	} else {
	  // Declare the ability of dealing with MTNB callback
	  window.MTNB = {
	    _handleMessageFromApp: function _handleMessageFromApp(message) {
	      DPApp.log('[MTNB] ', 'get message:' , message)
	      if (message.callbackId) return DPApp.callback(message.callbackId, message.data, true)
	      return (messageHandlers[message.handlerId] || noop)(message.data)
	    }
	  }
	}
	
	if (!window.DPApp) {
	  window.DPApp = DPApp
	  DPApp.ready() // init first
	}
	if (isForceDebug()) alert('[Titans UA] ' + navigator.userAgent)
	
	module.exports = DPApp


/***/ },
/* 178 */
/***/ function(module, exports) {

	//队列管理
	module.exports = function queue(worker){
	  var currentCallback = null;
	  var q = {
	    timeout: null,
	    running : false,
	    tasks: [],
	    push: function(data, cb){
	      var callback = cb || function(){};
	      q.tasks.push({
	        data: data,
	        callback: callback
	      });
	      //当任务被放入队列后马上调用process处理，在process中如果running:false就可以立马运行
	      setTimeout(function(){
	        q.process();
	      }, 0);
	    },
	    dequeue: function(){
	      if(currentCallback){
	        currentCallback();
	      }else{
	        q.running = false;
	      }
	    },
	    process: function(){
	      if(q.tasks.length && !q.running){
	        var task = q.tasks.shift();
	        q.running = true;
	        currentCallback = function(){
	          q.running = false;
	          task.callback(task.data);
	          q.process();
	        };
	        worker(task.data, currentCallback);
	      }
	    }
	  };
	  return q;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var subscribe = __webpack_require__(180)
	var unsubscribe = __webpack_require__(181)
	var getUA = __webpack_require__(119)
	var mixin = __webpack_require__(117)
	var noop = function () {}
	var getNetworkType = __webpack_require__(182)
	var share = __webpack_require__(183)
	var qs = __webpack_require__(120)
	var isWebProtocal = __webpack_require__(184)
	
	var qparams = __webpack_require__(185);
	
	function prependBizName (key, fail) {
	  var bizName = this.getBizName()
	  if (key.indexOf(':') > -1) return key
	  if (bizName) return bizName + ':' + key
	  this.log('bizname not configed')
	  fail('bizname not config, please call KNB.confg({bizName: YOUR_BIZ_NAME})')
	}
	
	function getWebviewURI() {
	  return window.TITANS_WEB_VIEW_URI || 'dianping://web'
	}
	
	module.exports = [
	  {
	    message: 'checkVersion'
	  },
	  {
	    message: 'actionSheet'
	  }, {
	    message: 'alert'
	  }, {
	    name: 'closeWebview',
	    message: 'closeWindow'
	  }, {
	    message: 'getContactList'
	  }, {
	    name: 'getUA',
	    handler: getUA
	  }, {
	    message: 'confirm'
	  }, {
	    message: 'getVersion'
	  }, {
	    message: 'isInstalledApp'
	  }, {
	    message: 'pickContact'
	  }, {
	    message: 'prompt'
	  }, {
	    message: 'publish',
	    mapper: function (ref) {
	      var type = ref.type;
	      var action = ref.action;
	      var success = ref.success; if ( success === void 0 ) success = noop;
	      var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	      var data = ref.data;
	      var info = ref.info;
	
	      //fix mtnb 实现bug(for attribute data && info);
	      if (type === 'native') return {action: action, success: success, fail: fail, data: info || data}
	      var actionName = prependBizName.call(this, action, fail)
	      if (actionName) return {action: actionName, success: success, fail: fail, data: info || data}
	    }
	  }, {
	    message: 'remove',
	    mapper: function (ref) {
	      var type = ref.type;
	      var key = ref.key;
	      var success = ref.success; if ( success === void 0 ) success = noop;
	      var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	      if (type === 'native') return {key: key, success: success, fail: fail}
	      var newkey = prependBizName.call(this, key, fail)
	      if (newkey) return {key: newkey, success: success, fail: fail}
	    }
	  }, {
	    message: 'retrieve',
	    mapper: function (ref) {
	      var type = ref.type;
	      var key = ref.key;
	      var success = ref.success; if ( success === void 0 ) success = noop;
	      var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	      if (type === 'native') return {key: key, success: success, fail: fail}
	      var newkey = prependBizName.call(this, key, fail)
	      if (newkey) return {key: newkey, success: success, fail: fail}
	    }
	  }, {
	    message: 'store',
	    mapper: function (ref) {
	      var type = ref.type;
	      var key = ref.key;
	      var value = ref.value;
	      var success = ref.success; if ( success === void 0 ) success = noop;
	      var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	      if (type === 'native') return {key: key, value: value, success: success, fail: fail}
	      var newkey = prependBizName.call(this, key, fail)
	      if (newkey) return {key: newkey, value: value, success: success, fail: fail}
	    }
	  }, {
	    message: 'setLLButton'
	  }, {
	    message: 'setLRButton'
	  }, {
	    message: 'setRLButton'
	  }, {
	    message: 'setRRButton'
	  }, {
	    message: 'setTitle'
	  }, {
	    message: 'sendSMS'
	  }, {
	    message: 'setBackgroundColor'
	  }, {
	    message: 'setNavigationBarHidden',
	    os: 'android'
	  }, {
	    message: 'setBouncesEnabled',
	    os: 'ios'
	  }, {
	    message: 'setScrollEnabled',
	    os: 'ios'
	  }, {
	    message: 'setStatusBarStyle',
	    os: 'ios',
	    mapper: function (_opts) {
	      var opts = mixin({}, _opts)
	      if (opts.style === undefined) opts.style = 0
	      return opts
	    }
	  },
	  {
	    name: 'setNavButtons',
	    handler: function (opts) {
	      var this$1 = this;
	
	      [].concat(opts).forEach(function (btnConfig) {
	        var nobj = mixin({}, btnConfig) // create a copy
	        delete nobj.position
	        nobj.icon = btnConfig.type === 'base64' ? (btnConfig.icon || '').split('data:image/png;base64,')[1] : nobj.icon
	        this$1['set' + btnConfig.position + 'Button'](nobj)
	      })
	    }
	  },
	  {
	    message: 'bind'
	  },
	  {
	    message: 'chooseImage'
	  },
	  {
	    message: 'downloadImage'
	  },
	  {
	    name: 'getCity',
	    message: 'getCityInfo'
	  },
	  {
	    message: 'getUserInfo',
	    mapper: function (opt) {
	      return mixin({}, opt, {
	        success: function (result) { return opt.success(mixin(result, {
	          token: result.token || result.userToken,
	          uuid: result.uuid || qparams.uuid
	        })); }
	      });
	    }
	  },
	  {
	    message: 'getFingerprint'
	  },
	  {
	    message: 'getLocation'
	  }, {
	    // @deprecated
	    name: 'getLocationCity',
	    message: 'getCityInfo',
	    mapper: function (opt) {
	      return mixin({}, opt, {
	        success: function (cityInfo) { return opt.success(mixin(cityInfo, {cityId: cityInfo.locCityId})); }
	      });
	    }
	  }, {
	    // @dp
	    message: 'getFingerprint',
	    name: 'getCX'
	  }, {
	    message: 'analyticsTag',
	    version: '8.1.6'
	  }, {
	    message: 'pickCity',
	    version: '8.1.6'
	  },
	  {
	    name: 'jumpWebview',
	    message: 'jumpToScheme',
	    mapper: function (opts) {
	      if (isWebProtocal(opts.url)) {
	        return mixin({}, opts, {
	          url: getWebviewURI() + '?' + qs.stringify(mixin({url: opts.url}, opts.qs))
	        });
	      }
	
	      return opts;
	    }
	  },
	  {
	    name: 'openWebview',
	    message: 'openScheme',
	    mapper: function (opts) {
	      if (isWebProtocal(opts.url)) {
	        return mixin({}, opts, {
	          url: getWebviewURI() + '?' + qs.stringify(mixin({url: opts.url}, opts.qs))
	        });
	      }
	
	      return opts;
	    }
	  },
	  {
	    name: 'configShare',
	    handler: function (opts) {
	      var this$1 = this;
	
	      opts = mixin({}, opts)
	      var handle = opts.handle || noop
	      delete opts.handle
	      this.setRRButton({
	        icon: 'H5_Share',
	        handle: function () {
	          handle()
	          this$1.share(opts)
	        }
	      })
	    }
	  },
	  {
	    message: 'pickCity'
	  },
	  {
	    message: 'analyticsTag'
	  },
	  {
	    message: 'setBarrageEnabled'
	  },
	  {
	    message: 'getHealthData',
	    os: 'ios',
	    mapper: function (_opts) {
	      if (!_opts) return
	      var opts = mixin({}, _opts)
	      // 目前支持的类型
	      var typeList = [1]
	      var type = opts.quantityType
	      var fail = opts.fail || noop
	
	      var start = +new Date(opts.startDate)
	      var end = +new Date(opts.endDate || new Date())
	      if (start > end) { fail('date error'); return; }
	      if (typeList.indexOf(type) === -1) { fail('type error'); return; }
	      // 单位：秒
	      opts.startDate = Math.round(start / 1000)
	      opts.endDate = Math.round(end / 1000)
	      return opts
	    }
	  },
	  {
	    message: 'ajax',
	    mapper: function (_opts) {
	      var opts = mixin({}, _opts)
	      opts = this.util.sanitizeAjaxOpts(opts)
	      var success = opts.success || noop;
	      opts.success = function (ret) {
	        var result = JSON.parse(ret.mapiResult)
	        result = this.transModel(opts.keys, result)
	        success(result)
	      };
	      return opts
	    }
	  },
	  {
	    message: 'login',
	    mapper: function (opts) {
	      var success = opts.success || noop
	      // 新版Titans增加type字段标识用户类型
	      return mixin({}, opts, {
	        success: function (res) {
	          success(mixin({}, res, res.dpid ? {type: 'dp'} : {}, {token: res.token || res.userToken}))
	        }
	      })
	    }
	  },
	  {
	    message: 'logout'
	  },
	  {
	    message: 'pay'
	  },
	  {
	    message: 'playVoice'
	  },
	  {
	    message: 'previewImage'
	  },
	  {
	    message: 'setPullDown'
	  },
	  {
	    message: 'stopPullDown'
	  },
	  {
	    message: 'setNavigationBarHidden',
	    os: 'ios'
	  },
	  {
	    message: 'uploadPhoto',
	    name: 'uploadImage'
	  },
	  {
	    message: 'vibrate'
	  },
	  {
	    message: 'toast'
	  },
	  {
	    message: 'autoLock'
	  },
	  {
	    message: 'lxlog'
	  }
	].concat([subscribe, unsubscribe, getNetworkType, share])


/***/ },
/* 180 */
/***/ function(module, exports) {

	var pageEvents = ['appear', 'disappear'];
	var count = 0;
	var getRandomId = function () { return ('sub' + (++count)); }
	var noop = function() {}
	
	module.exports = {
	  message: 'subscribe',
	  mapper: function(ref) {
	    var action = ref.action;
	    var handle = ref.handle; if ( handle === void 0 ) handle = noop;
	    var success = ref.success; if ( success === void 0 ) success = noop;
	    var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	
	    this._eventQueue = this._eventQueue || {};
	    this._subscriptionMap = this._subscriptionMap || {};
	    var subId = getRandomId();
	
	    this._subscriptionMap[subId] = {action: action, handle: handle};
	
	    var _events = this._eventQueue;
	    var eventName = action;
	
	    var eventHandler = function(e) {
	      (_events[eventName] || []).filter(Boolean).forEach(function (fn) { return fn(e); });
	    };
	
	    function registerPageEvents() {
	      if (!eventName) return;
	      var capital = function (str) { return str.slice(0,1).toUpperCase() + str.slice(1); };
	      if (window.DPApp) window.DPApp['on' + capital(eventName)] = eventHandler;
	      success({subId: subId});
	    }
	
	    if (_events[eventName]) {
	      //事件只需要向客户端注册一次，事件队列有JS段维护
	      success({subId: subId});
	      _events[eventName].push(handle);
	      return;
	    }
	
	    _events[eventName] = [handle];
	
	    //页面级别事件 appear/disappear 直接注册在DPApp全局对象下，事件触发时客户端会直接调用
	    if (pageEvents.indexOf(eventName) !== -1) return registerPageEvents()
	    return {
	      action: eventName,
	      success: function () { return success({subId: subId}); },
	      handle: eventHandler,
	      fail: fail
	    };
	  }
	};


/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = {
	  message: 'unsubscribe',
	  mapper: function(opts) {
	    var _events = this._eventQueue;
	    this._subscriptionMap = this._subscriptionMap || {};
	
	    var handle = opts.handle;
	    var eventName = opts.action;
	    var success = opts.success || function(){};
	    var subId = opts.subId;
	
	    var subscription = this._subscriptionMap[subId];
	    if (subscription) {
	      eventName = subscription.action;
	      handle = subscription.handle;
	    }
	    _events[eventName] = (_events[eventName] || []).filter(function (h) { return h != handle; });
	    // 都不传，则直接取消所有
	    if (!handle && !subId) {
	      _events[eventName] = [];
	    }
	
	    success();
	
	    // 需要清理JS上注册的subscription吗？应该没什么必要。
	  }
	};


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var getUA = __webpack_require__(119).internal;
	var noop = function(){};
	
	var _iOSNetworkType = function(result) {
	  var types = {
	    kSCNetworkReachabilityFlagsTransientConnection: 1 << 0,
	    kSCNetworkReachabilityFlagsReachable: 1 << 1,
	    kSCNetworkReachabilityFlagsConnectionRequired: 1 << 2,
	    kSCNetworkReachabilityFlagsConnectionOnTraffic: 1 << 3,
	    kSCNetworkReachabilityFlagsInterventionRequired: 1 << 4,
	    kSCNetworkReachabilityFlagsConnectionOnDemand: 1 << 5,
	    kSCNetworkReachabilityFlagsIsLocalAddress: 1 << 16,
	    kSCNetworkReachabilityFlagsIsDirect: 1 << 17,
	    kSCNetworkReachabilityFlagsIsWWAN: 1 << 18
	  };
	  var type = +result.type;
	  var subType = result.subType;
	  var returnValue;
	  // 2g, 3g, 4g
	  function getMobileType(subType) {
	    switch (subType) {
	      case 'CTRadioAccessTechnologyGPRS':
	      case 'CTRadioAccessTechnologyEdge':
	      case 'CTRadioAccessTechnologyCDMA1x':
	        return '2g';
	      case 'CTRadioAccessTechnologyLTE':
	        return '4g';
	      case 'CTRadioAccessTechnologyWCDMA':
	      case 'CTRadioAccessTechnologyHSDPA':
	      case 'CTRadioAccessTechnologyHSUPA':
	      case 'CTRadioAccessTechnologyCDMAEVDORev0':
	      case 'CTRadioAccessTechnologyCDMAEVDORevA':
	      case 'CTRadioAccessTechnologyCDMAEVDORevB':
	      case 'CTRadioAccessTechnologyeHRPD':
	        return '3g';
	    }
	  }
	
	  if ((type & types.kSCNetworkReachabilityFlagsReachable) == 0) {
	    return 'none';
	  }
	
	  if ((type & types.kSCNetworkReachabilityFlagsConnectionRequired) == 0) {
	    // if target host is reachable and no connection is required
	    //  then we'll assume (for now) that your on Wi-Fi
	    returnValue = 'wifi';
	  }
	
	
	  if (
	    (type & types.kSCNetworkReachabilityFlagsConnectionOnDemand) != 0 ||
	    (type & types.kSCNetworkReachabilityFlagsConnectionOnTraffic) != 0
	  ) {
	    // ... and the connection is on-demand (or on-traffic) if the
	    //     calling application is using the CFSocketStream or higher APIs
	    if ((type & types.kSCNetworkReachabilityFlagsInterventionRequired) == 0) {
	      // ... and no [user] intervention is needed
	      returnValue = 'wifi';
	    }
	  }
	
	  if ((type & types.kSCNetworkReachabilityFlagsIsWWAN) == types.kSCNetworkReachabilityFlagsIsWWAN) {
	    // ... but WWAN connections are OK if the calling application
	    //     is using the CFNetwork (CFSocketStream?) APIs.
	    returnValue = getMobileType(subType);
	  }
	
	  return returnValue;
	};
	var _androidNetworkType = function(result) {
	  var type = result.type;
	  var subType = result.subType;
	
	  if (type == 0) {
	    switch (subType) {
	      case 1:
	      case 2:
	      case 4:
	      case 7:
	      case 11:
	        return '2g';
	      case 3:
	      case 5:
	      case 6:
	      case 8:
	      case 9:
	      case 10:
	      case 12:
	      case 14:
	      case 15:
	        return '3g';
	      case 13:
	        return '4g';
	    }
	  }
	
	  if (type == 1) {
	    return 'wifi';
	  } else {
	    return 'none';
	  }
	};
	var getNetwork = function(res) {
	  if (/wifi|2g|3g|4g/.test(res.type)) return res.type;
	  switch (getUA().osName) {
	    case 'ios': return _iOSNetworkType(res);
	    case 'android': return _androidNetworkType(res);
	  }
	  return 'unknown';
	};
	
	module.exports = {
	  message: 'getNetworkType',
	  mapper: function(ref) {
	    var success = ref.success; if ( success === void 0 ) success = noop;
	    var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	    return {
	      success: function(result) {
	        success({
	          networkType: result.networkType || getNetwork(result)
	        });
	      },
	      fail: fail
	    };
	  }
	};


/***/ },
/* 183 */
/***/ function(module, exports) {

	var isAndroid =  (navigator.userAgent || '').match(/Android/i);
	
	function noop() {}
	
	/*
	 * MT 7.6 Android沿用MTNB渠道调用
	 * MT 7.6 iOS使用titans 渠道分享
	 * both of them are incorrect!!
	 * */
	function getChannel() {
	    if(isAndroid){
	        return {
	            'WECHAT_FRIENDS': 128,
	            'WECHAT_TIMELINE': 256,
	            'QQ': 512,
	            'SMS': 32,
	            'WEIBO': 1,
	            'QZONE': 2,
	            // not supported
	            'EMAIL': 0,
	            'COPY': 0
	        }
	    } else {
	        return {
	            'WECHAT_FRIENDS': 0,
	            'WECHAT_TIMELINE': 1,
	            'QQ': 2,
	            'SMS': 3,
	            'WEIBO': 4,
	            'QZONE': 5,
	            'EMAIL': 6,
	            'COPY': 7
	        }
	    }
	}
	
	function sum(array) {
	    if (!array) return 0;
	    var s = 0;
	    for (var i = 0; i < array.length; i++) {
	        s += array[i];
	    }
	    return s;
	}
	
	module.exports = {
	    message: 'share',
	    statics: getChannel(),
	    mapper: function (ref) {
	        var title = ref.title;
	        var desc = ref.desc;
	        var content = ref.content; if ( content === void 0 ) content = desc;
	        var image = ref.image;
	        var url = ref.url;
	        var channel = ref.channel;
	        var success = ref.success; if ( success === void 0 ) success = noop;
	        var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	        var feed = channel !== undefined ? [].concat(channel) : 0
	        // 如果只传入一个渠道，那么就直接分享出去
	        // 将渠道常量作为八位二进制
	        var feedBinary = this.util.parseFeed(feed)
	        url = this.util.tidyUrlParams(url)
	
	        return {
	            title: title,
	            desc: desc,
	            content: content,
	            image: image,
	            success: success,
	            shareType: isAndroid ? sum(feed) : feedBinary,
	            fail: fail,
	            url: this.util.tidyUrlParams(url)
	        }
	    }
	}
	


/***/ },
/* 184 */
/***/ function(module, exports) {

	/**
	 * @params string url
	 * @return boolean is Web Protocol
	 * can detect string starts with http, https, //
	 * */
	module.exports = function (url) {
	    return /^http:|^https:|^\/\//i.test(url);
	};


/***/ },
/* 185 */
/***/ function(module, exports) {

	//get query string
	var q = location.href.split('?')[1] || '';
	var qparams = {};
	q = q.split('&');
	
	for (var i = 0; i <  q.length; i++){
	    var pair = q[i].split('=');
	    qparams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	
	module.exports = qparams;


/***/ },
/* 186 */
/***/ function(module, exports) {

	//版本比较方法
	module.exports = {
	  eq: function(a, b) {
	    return a === b;
	  },
	  gt: function(a, b) {
	    var splitedA = a ? a.split('.') : [];
	    var splitedB = b ? b.split('.') : [];
	    [0,1,2].forEach(function(i){
	      splitedA[i] = splitedA[i] || 0;
	      splitedB[i] = splitedB[i] || 0;
	    });
	    if (+splitedA[0] !== +splitedB[0]) {
	      return +splitedA[0] > +splitedB[0];
	    } else {
	      if (+splitedA[1] !== +splitedB[1]) {
	        return +splitedA[1] > +splitedB[1];
	      } else {
	        return +splitedA[2] > +(splitedB[2] || 0);
	      }
	    }
	  },
	  lt: function(a, b) {
	    return !this.gte(a, b);
	  },
	  gte: function(a, b) {
	    return this.eq(a, b) || this.gt(a, b);
	  },
	  lte: function(a, b) {
	    return this.eq(a, b) || this.lt(a, b);
	  }
	};

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = {
	  tidyUrlParams: function(url){
	    //移除url中的登陆态信息，防止在分享时被泄露
	    var splited = url.split('?');
	    var qs = splited[1];
	    var reserved = [];
	    if (!qs) {
	      return splited[0];
	    } else {
	      qs.split('&').forEach(function(q){
	        var arr = q.split('=');
	        var key = arr[0];
	        var value = arr.length? arr[1]:undefined;
	        if(!/^(newtoken|token)$/.test(key) && !(key ==='product' && value === 'dpapp')){
	          reserved.push(q);
	        }
	      });
	      return [splited[0], reserved.join('&')].join('?');
	    }
	  },
	  sanitizeAjaxOpts: function(args) {
	    args.method = args.method || 'get';
	    args.data = args.data || '';
	    var url = args.url;
	    var data = args.data;
	
	    if (args.method == 'get') {
	      var params = [];
	      for (var p in data) {
	        if (data.hasOwnProperty(p) && (data[p] || data[p] === 0)) {
	          params.push(p + '=' + encodeURIComponent(data[p]));
	        }
	      }
	
	      if (params.length) {
	        url += url.indexOf('?') == -1 ? '?' : '&';
	        url += params.join('&');
	      }
	      args.url = url;
	      delete args.data;
	    }
	    return args;
	  },
	  parseFeed: function(f){
	    //分享渠道映射
	    var feed;
	    if (!f) {
	      return 0xff;
	    } else if (f.constructor.toString().indexOf('Array') >= 0) {
	      feed = [0, 0, 0, 0, 0, 0, 0, 0];
	      f.forEach(function(pos) {
	        feed[7 - pos] = 1;
	      });
	      return parseInt(feed.join(''), 2);
	    }
	  }, 
	  transModel: function(keys, obj){
	    //MAPI model转换
	    if(!keys){return obj;}
	    var keymap = {};
	
	    function getHash(str) {
	      var hashCode = function(str) {
	        var hash = 0,
	          i, chr, len;
	        if (str.length == 0) return hash;
	        for (i = 0, len = str.length; i < len; i++) {
	          chr = str.charCodeAt(i);
	          hash = ((hash << 5) - hash) + chr;
	          hash |= 0; // Convert to 32bit integer
	        }
	        return hash;
	      };
	
	      var i = hashCode(str);
	      return '0x' + ((0xFFFF & i) ^ (i >>> 16)).toString(16);
	    }
	
	    function isArray(val) {
	      return Object.prototype.toString.call(val) == '[object Array]';
	    }
	
	    function isObject(val) {
	      return Object.prototype.toString.call(val) == '[object Object]';
	    }
	
	    function translate(obj){
	      if (isObject(obj)) {
	        delete obj.__name;
	        for (var key in obj) {
	          var val;
	          if (keymap[key]) {
	            val = obj[keymap[key]] = obj[key];
	            translate(val);
	            delete obj[key];
	          }
	        }
	      } else if (isArray(obj)) {
	        obj.forEach(function(item) {
	          translate(item);
	        });
	      }
	      return obj;
	    }
	
	    keys.forEach(function(key) {
	      keymap[getHash(key)] = key;
	    });
	
	    return translate(obj);
	  },
	  capital: function(str){
	    return str.slice(0,1).toUpperCase() + str.slice(1);
	  }
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var mixin = __webpack_require__(117);
	  var promisify = __webpack_require__(123);
	  var win = typeof window !== 'undefined' ? window : {};
	  var Promise = win.Promise || __webpack_require__(124);
	  var isWebProtocol = __webpack_require__(184);
	
	  function noop() {}
	
	  var mtaLog = {
	    env:{
	      token: '5788a4a2488076d81906aa66',
	      sdkVersion: '0.01'
	    },
	    logs: []
	  };
	  var isBrowser = typeof window !== 'undefined';
	  var MTNB;  // declare first
	
	  if (!isBrowser) return;  // if not in browser, return immediately
	  if (isBrowser && window.MTNB)  {
	    module.exports = window.MTNB;
	    return;
	  }
	
	  var sentinel = function () {
	    var pendingRegistrations = 0;
	    var resolverFn = noop;
	    var _promise = new Promise(function (resolve) { return resolverFn = resolve; });
	
	    function tryResolve() {
	        if (pendingRegistrations <= 0) setTimeout(function () { return resolverFn(true); }, 1);
	    }
	    return {
	      increase: function () {
	        pendingRegistrations++;
	      },
	      decrease: function () {
	        pendingRegistrations--;
	        if (pendingRegistrations < 0) pendingRegistrations = 0;
	        tryResolve();
	      },
	      tryResolve: tryResolve,
	      ready: function (fn) { return _promise.then(fn); }
	    };
	  }();
	
	  var debug = false;
	  var logEvent = __webpack_require__(174);
	  var version = __webpack_require__(118);
	
	  function isObject(obj) { return Object.prototype.toString.call(obj) === '[object Object]'; }
	  function isFunction(obj) { return Object.prototype.toString.call(obj) === '[object Function]'; }
	  function valueFn(obj) { return obj; }
	  function sum(array) {
	    if (!array) return 0;
	    var s = 0;
	    for (var i = 0; i < array.length; i++) {
	      s += array[i];
	    }
	    return s;
	  }
	  function parseName(name) {
	    var partials = name.split('.');
	    if (partials.length === 2) partials.unshift('basic'); // default to be basic
	    return {
	      businessName: partials[0],
	      moduleName: partials[1],
	      methodName: partials[2],
	    };
	  }
	
	  // send debug message
	  var log = window._MTNB_LOG || function (type, message) {
	    if (type == "error" && debug == true) {
	      alert("Error: " + message);
	    } else if (debug == true) {
	      alert("Notice: " + message);
	    }
	  };
	  var initCallback = window._MTNB_INIT_CALLBACK || noop;
	
	  var report = function (method, msg) {
	    try {
	      var element = document.createElement('script');
	      //http://docs.sankuai.com/doc/knb/mtnb_docs/api/#ua
	      var uaArray = navigator.userAgent.split(/\s+/);
	      var ualen = uaArray.length;
	
	      mtaLog.logs.push({
	          type: 'business',
	          tags: {
	            method: method,
	            nbType: 'mtnb-knb',
	            app: ((uaArray[ualen - 2] +  uaArray[ualen - 1]) || '').toLowerCase(),
	            path: location.protocol + '//' + location.hostname + location.pathname,
	            ua: navigator.userAgent,
	            msg: msg || ''
	          }
	      });
	
	      var elementSrc = 'https://frep.meituan.com/api/collect?token=5788a4a2488076d81906aa66&empty=true&data=' +
	          encodeURIComponent(JSON.stringify(mtaLog));
	      element.setAttribute('src', elementSrc);
	      document.body.appendChild(element);
	      mtaLog.logs.pop();
	    } catch (e) {
	      noop();  // do nothing
	    }
	  };
	  //采样率10%
	  var sendLog = Math.random() < 0.1 ? report: noop;
	
	  function getCookie (a) {
	    var b = document.cookie.match("(?:;|^)\\s*" + a + "\\s*=\\s*([^;]+)\\s*(?:;|$)");
	    return b && b[1];
	  }
	
	  var q = location.href.split('?')[1] || '';
	  var qparams = {};
	  q = q.split('&');
	  for (var i = 0; i < q.length; i++) {
	    var pair = q[i].split('=');
	    qparams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	
	  function xhr (url, success) {
	    try {
	      var _xhr = new XMLHttpRequest();
	      _xhr.open("GET", url, true);
	      _xhr.onreadystatechange = function () {
	        if (_xhr.readyState == 4) {
	          _xhr.onreadystatechange = null;
	          var data = JSON.parse(_xhr.responseText);
	          if (data.status == 0) {
	            success(data.data);
	          }
	        }
	      };
	      _xhr.send();
	    } catch (e) {
	      console.error(e);
	    }
	  }
	
	 function getVersionInfo(name) {
	   try {
	     switch (name) {
	       case "imeituan":
	         return navigator.userAgent.match(/meituangroup\/?([^ ]+)/i)[1]; // android中间没/
	       case "KNB":
	         return navigator.userAgent.match(/KNB\/([^ ]+)/i)[1];
	     }
	   } catch (e) {
	     noop(); // do nothing
	   }
	   return '0';
	 }
	
	  //////////// Fallback Method, with JavascriptWebviewBridge and imeituan schema
	  var isInited = false;
	  var biz = "default";
	  var isAndroid =  (navigator.userAgent || '').match(/Android/i);
	  var isIphone  =  (navigator.userAgent || '').match(/(iPhone|iPad|iPod)/i);
	  var isMeituanAPP = /meituan/i.test(navigator.userAgent);
	  var isMaoyan     = /movie/i.test(navigator.userAgent);
	
	  var imeituanversion = getVersionInfo('imeituan');
	  var mtnbNativeVersion = parseFloat(getVersionInfo('KNB'));
	  var canDetectInternalAPI = mtnbNativeVersion >= 1.1;
	
	  function ready(callback) {
	      function init (bridge) {
	        if (isInited) return;
	        try {
	            bridge.init();
	            isInited = true;
	        } catch (e) {
	          console.log('init failed');
	        }
	      }
	      // 如果有WebViewJavascriptBridge这个全局变量，
	      // 则直接初始化它
	      if (window.WebViewJavascriptBridge) {
	          init(WebViewJavascriptBridge);
	          callback(WebViewJavascriptBridge);
	          return;
	      }
	
	      // 否则添加监听事件再初始化
	      document.addEventListener('WebViewJavascriptBridgeReady', function () {
	        init(WebViewJavascriptBridge);
	        callback(WebViewJavascriptBridge);
	      }, false);
	  }
	  ////////////////
	
	  var messageHandlers = {};
	  var responseCallbacks = {};
	  var uniqueId = 1;
	  var blockedJob = [];
	  var subHandleMap = {};
	  var subEventMap = {};
	  var uniqueSubId = 0;
	
	  var useMTNB = navigator.userAgent.indexOf('MTNB') > -1 || navigator.userAgent.indexOf('KNB') > -1;
	  var channelMap1 = {
	    WECHAT_FRIENDS: 1,
	    WECHAT_TIMELINE: 2,
	    QQ: 4,
	    SMS: 8,
	    WEIBO: 16,
	    QZONE: 32,
	    EMAIL: 64,
	    COPY: 128
	  };
	  var channelMap2 = {
	    WECHAT_FRIENDS: 128,
	    WECHAT_TIMELINE: 256,
	    QQ: 512,
	    SMS: 32,
	    WEIBO: 1,
	    QZONE: 2,
	    // not supported
	    EMAIL: 0,
	    COPY: 0
	  };
	
	  function getChannels() {
	    if (useMTNB && !isAndroid && !isMaoyan) {
	      return channelMap1;
	    }
	    return channelMap2;
	  }
	
	  function send(message, responseCallback) {
	    if (responseCallback) {
	      var callbackId = 'cb_'+(uniqueId++)+'_'+new Date().getTime();
	      responseCallbacks[callbackId] = responseCallback;
	      message.callbackId = callbackId;
	    }
	    message.fromKNB = true;  // add formKNB mark for usage tracking
	    var messageTxt = JSON.stringify(message);
	
	    if (isIphone) _MTNB._handleMessageFromJs(messageTxt);
	    if (isAndroid) window.prompt(messageTxt);
	    log("Notice", "sending:", message);
	  }
	
	  function _handleMessageFromApp(message) {
	    var responseCallback;
	
	    if (!message || !isObject(message)) return log('error', 'message is not defined or is not a valid object');
	    log("Notice", "get message:" , message); // do not stringify the message because of performance hit
	
	    // 同步回调
	    // 指的是一般性调用bridge
	    if (message.callbackId) responseCallback = responseCallbacks[message.callbackId];
	
	    // 异步回调
	    // 指的是注册按钮的回调函数
	    if (message.handlerId) {
	      responseCallback = messageHandlers[message.handlerId];
	      message.data = message.data || {status: 0};
	    }
	
	    // 每个模块的回调函数如果没有返回值，或返回值不为false，则出错，且向上给MTNB.onerror抛出错误
	    // 回调MTNB.onerror
	    var status = message.data && message.data.status;
	    var ret = isFunction(responseCallback) && responseCallback(message.data);
	    if (ret && (status !== 0) && isFunction(MTNB.onerror)) {
	      MTNB.onerror(0, 'test error message', null);
	    }
	  }
	
	  MTNB = {
	    _INITED: false,
	    callHandler: function callHandler(params, responseCallback, handlerMapper) {
	      // params.data就是用户调用时传的数据
	      // 如果是数组的话，就每个都format一遍
	      [].concat(params.data).filter(Boolean).forEach(function (obj) {
	        if (!isFunction(obj.handle)) return;
	        // 把用户传进来的handle函数，转化为handleId，并将函数注册到messageHandlers下
	        var handlerId = 'hd_' + (uniqueId++) + '_' + new Date().getTime();
	        messageHandlers[handlerId] = function (params) {
	          obj.handle((handlerMapper || valueFn)(params));
	        };
	        obj.handlerId = handlerId;
	      });
	      send( params, responseCallback);
	    },
	    apis: {},
	    _handleMessageFromApp: _handleMessageFromApp,
	    //注册一个协议, 其中obj的格式为：
	    // {
	    //   name: String
	    //   moduleName: String,
	    //   methodName: String,
	    //   // 为与KNB接口兼容，需要三个维度上的参数映射
	    //   mapper: Function,         // 对调用MTNB.call时参数的映射
	    //   handlerMapper: Function,  // 对Native传给handler的参数的映射
	    //   callbackMapper: Function, // 对Native传给callback参数的映射
	    //
	    //   handler: Function,        // 凡是定义了handler，表示可以不走NB协议
	    //   fallback: Function,       // 在不支持MTNB时的fallback方案
	    //
	    // }
	    reg: function (obj) {
	      var name = obj.name;
	      var statics = obj.statics;
	      obj.businessName = obj.businessName || 'basic';
	      MTNB[name] = function (params) {
	        MTNB.call(name, params);
	      };
	      Object.keys(statics || {}).forEach(function (key) {
	        MTNB[name][key] = obj.statics[key];
	      });
	      MTNB.apis[name] = obj;
	      if (this._add) this._add(name, MTNB[name]); // reg method
	    },
	    //使用协议
	    call: function (name, params) {
	      if (MTNB._INITED == false && useMTNB) return blockedJob.push([name, params]);
	
	      params = params || {};
	      var obj = MTNB.apis[name];
	      var par = ((obj && obj.mapper) || valueFn)(params);
	      var businessName = 'basic';
	
	      if (!name || typeof name !== 'string') return log('error', 'api name is invalid.');
	      if (!obj && name.indexOf('.') > -1) {
	        obj = parseName(name);
	        businessName = obj.businessName;
	      }
	      if (!obj)                     return log('error', 'api name [' + name + '] is not implemented.');
	      if (obj.handler)              return obj.handler(par);
	      if (!useMTNB && obj.fallback) return obj.fallback(par);
	      if (!useMTNB)                 return log('error', 'api [' + name + '] do not have a fallback.');
	
	      var contextData = {
	        "businessName": businessName,
	        "moduleName": obj.moduleName,
	        "methodName": obj.methodName,
	        "data": par
	      };
	
	      try {
	        sendLog(businessName + '-' + obj.moduleName + '-' + obj.methodName);
	      } catch (e) {
	        // do nothing
	        noop();
	      }
	
	      // 有这个逻辑是因为ios的处理缺陷, 部分api不能有callback传入, 否则会sb
	      if ([
	          'basic.webview.open',
	          'basic.webview.close',
	          'basic.webview.setIcon',
	          'basic.webview.setTitle',
	          'basic.webview.setHtmlTitle',
	          'basic.account.login',
	          'basic.account.logout'
	        ].indexOf((businessName + "." + (obj.moduleName) + "." + (obj.methodName))) > -1) return MTNB.callHandler(contextData, null, obj.handlerMapper);
	
	      MTNB.callHandler(contextData, function (res) {
	        /**** [begin] please go to hell  ****/
	        // android版本对basic.core.checkVersion返回的数据格式有问题
	        if (
	          businessName === 'basic' &&
	          contextData.moduleName === 'core' &&
	          contextData.methodName === 'checkVersion' &&
	          typeof res.info === 'object'   // android return the wrong thing! wtf !
	          ) return (par.success || noop)((obj.callbackMapper || valueFn)(res));
	        /**** [end] please go to hell  ****/
	
	        if (res.status != 0) return (params.fail || noop)(res);
	        (par.success || noop)((obj.callbackMapper || valueFn)(res.data));
	      }, obj.handlerMapper);
	    }
	  };
	
	  MTNB.use = MTNB.call; // alias
	
	  promisify(MTNB);
	
	  /**
	   * 用于检查一个全名的API是否被native支持。
	   * 仅在MTNB大于1.1的版本适用.
	   * 小于1.1的版本将直接返回false.
	   */
	  function isInternalSupported(fullName) {
	    if (!canDetectInternalAPI) return Promise.resolve(false);
	    return new Promise(function (resolve) {
	      MTNB.checkVersion({
	        apis: [fullName],
	        success: function (data) {
	          resolve(data.info && data.info[fullName] != 0);
	        }
	      });
	    });
	  }
	
	  // register modules
	  [{
	    //config 配置KNB
	    name: "config",
	    handler: function (options) {
	      if(options.debug != undefined) debug = options.debug;
	      if(options.bizname != undefined) biz = options.bizname;
	    }
	  },
	  {
	    name: "ready",
	    handler: function(cb) {
	      if ( cb === void 0 ) cb=noop;
	
	      sentinel.ready(cb);
	    }
	  },
	  {
	    name: "isApiSupported",
	    handler: function (ref) {
	      var apiName = ref.apiName;
	      var success = ref.success; if ( success === void 0 ) success = noop;
	
	      sentinel.ready(function () {
	        var API = apiName.indexOf('.') > -1 ? parseName(apiName) : MTNB.apis[apiName];
	        if (!API) return success(false);
	        if (API.handler) return success(true);
	        if (API.fallback && !useMTNB) return success(true);
	        if (canDetectInternalAPI) return isInternalSupported(((API.businessName) + "." + (API.moduleName) + "." + (API.methodName))).then(success);
	        success(true);
	      });
	    }
	  },
	  {
	    name: 'getUA',
	    handler: __webpack_require__(119)
	  },
	  {
	    name: "share",
	    moduleName: "share",
	    methodName: "invoke",
	    mapper: function (params) {
	      return {
	        url: params.url,
	        title: params.title,
	        pic: params.image,
	        channel: sum(params.channel) || -1,
	        content: params.desc,
	        handle: params.success,
	      };
	    },
	    statics: getChannels(),
	    fallback: function (params) {
	      var shareLink = "imeituan://www.meituan.com/share"
	        + '?channel=' + (params.channel || -1)
	        + "&title=" + encodeURIComponent(params.title)
	        + "&imageURL=" + encodeURIComponent(params.pic)
	        + "&detailURL=" + encodeURIComponent(params.url)
	        + "&content_-1=" + encodeURIComponent(params.content)
	        + "&content_1=" + encodeURIComponent(params.weiboContent);
	      location.href = shareLink;
	    }
	  },
	  {
	    name: "openWebview",
	    moduleName: "webview",
	    methodName: "open",
	    fallback: function (ref) {
	      var url = ref.url; if ( url === void 0 ) url = '';
	
	      if (isWebProtocol(url)) url = "imeituan://www.meituan.com/web?url=" + encodeURIComponent(url) ;
	      location.href = url;
	    }
	  },
	  {
	    name: "closeWebview",
	    moduleName: "webview",
	    methodName: "close",
	    fallback: function () {
	      window.close();
	    }
	  },
	  {
	    name: "jumpWebview",
	    handler: function (ref) {
	      var url = ref.url; if ( url === void 0 ) url = "";
	
	      if (isWebProtocol(url)) url = "imeituan://www.meituan.com/web?url=" + encodeURIComponent(url);
	
	      if (isAndroid) {
	        location.href = url;
	        return MTNB.closeWebview();
	      }  // Android没有支持closeAndNavigate..
	      ready(function (bridge) {
	        bridge.callHandler('callNativeMethod', {
	          "moduleName" : "platform",
	          "methodName" : "closeAndNavigate",
	          "fromKNB"    : true,
	          data : { "url" : url}
	        }, noop);
	      });
	    }
	  },
	  {
	    name: "setTitle",
	    moduleName: "webview",
	    methodName: "setHtmlTitle",
	    fallback: function (params) {
	      document.title = params.title;
	    }
	  },
	  {
	    name: "getLocation",
	    moduleName: "geo",
	    methodName: "getLocation",
	    callbackMapper: function (param) {
	      return {
	        lat: param.latitude,
	        lng: param.longitude
	      };
	    },
	    fallback: function (params) {
	      navigator.geolocation.getCurrentPosition(function (geo) {
	        params.success && params.success({
	          lat: geo.coords.latitude,
	        lng: geo.coords.longitude
	        });
	      }, function (err) {
	        params.fail && params.fail(err);
	      }, {timeout: params.timeout, enableHighAccuracy: false});
	    }
	  },
	  {
	    name: "login",
	    moduleName: "account",
	    methodName: "login",
	    mapper: function (params) {
	      params.handle = function (res) {
	        var success = (params.success || noop);
	        var fail   = (params.fail || noop);
	        // handle会返回userId等字段
	        if (res.userId) {
	          return success({
	            type: 'mt',
	            name: res.userName,
	            userId: res.userId,
	            token: res.userToken
	          });
	        }
	        // 如果失败，会返回status字段不为0
	        if (String(res.status) !== "0") return fail(res);
	        // 否则，是callback风格的成功
	        success(res.data);
	      };
	      return params;
	    },
	    fallback: function () {
	      if (isMeituanAPP) {
	        location.href = "imeituan://www.meituan.com/signin?redirectURL=" + encodeURIComponent(location.href);
	        return;
	      }
	      // 如果不是meituan app，且没有mtnb，则跳转到i版页面
	      location.href = "//i.meituan.com/account/login?backurl=" + encodeURIComponent(location.href);
	    }
	  },
	  {
	    name: "logout",
	    moduleName: "account",
	    methodName: "logout"
	  },
	  {
	    name: "getCity",
	    handler: function (params) {
	      var cityId = parseInt(qparams.ci);
	      if (!cityId) {
	        cityId = parseInt(getCookie("cityid")) || 0;
	      }
	      params.success({
	        cityId: cityId,
	        type: 'mt'
	      });
	    }
	  },
	  {
	    name: "getLocationCity",
	    handler: function (params) {
	      MTNB.getLocation({
	        timeout: 1000,
	        success: function (loc) {
	            xhr("//i.meituan.com/locate/latlng/"+loc.lat+","+loc.lng+".json?ndr", function(data) {
	              params.success && params.success({
	              cityId: data.id,
	              type: 'mt'
	            });
	          });
	        },
	        fail: params.fail
	      });
	    }
	  },
	  {
	    name: "store",
	    handler: function (params) {
	      var key;
	      try {
	        if (params.key.indexOf(':') != -1) {
	          key = params.key;
	        } else {
	          key = biz + ":" + params.key;
	        }
	        localStorage[key] = params.value;
	        params.success && params.success();
	      } catch (e) {
	        params.fail && params.fail(e);
	      }
	    }
	  },
	  {
	    name: "retrieve",
	    handler: function (ref) {
	      var key = ref.key; if ( key === void 0 ) key = '';
	      var success = ref.success; if ( success === void 0 ) success = noop;
	      var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	      var value;
	      try {
	        value = localStorage[key.indexOf(':') != -1 ? key : (biz + ":" + key)];
	      } catch (e) {
	        return fail(e);
	      }
	      success({value: value});
	    }
	  },
		{
			name: 'lxlog',
			businessName: 'mtalog',
			moduleName: 'stat',
			methodName: 'log'
		},
	  {
	    name: "getNetworkType",
	    handler: function (ref) {
	      var success = ref.success; if ( success === void 0 ) success = noop;
	
	      var network = getCookie('network');
	      success({
	        networkType: network
	      });
	    }
	  },
	  ].forEach(MTNB.reg.bind(MTNB));
	
	  // 从可以检测native API版本开始
	  if (canDetectInternalAPI) {
	    [{
	      name: "checkVersion",
	      moduleName: "core",
	      methodName: "checkVersion"
	    },
	    {
	      name: 'uploadImage',
	      moduleName: 'media',
	      methodName: 'uploadImage',
	      callbackMapper: function (ref){
	        var photoInfos = ref.photoInfos; if ( photoInfos === void 0 ) photoInfos = [];
	
	        return {
	          photoInfos: photoInfos.map(function (photo) { return mixin(photo, {picUrl: photo.picKey}); })
	        }
	      }
	    },
	    {
	      name: 'previewImage',
	      moduleName: 'media',
	      methodName: 'previewImage'
	    },
	    {
	      name: 'publish',
	      moduleName: 'message',
	      methodName: 'publish',
	      mapper: function (params) {
	        //mtnb 文档实现有误,导致native实现的时候用的info.而点评是传的data
	        params.info = params.info || params.data;
	        return params;
	      }
	    },
	    {
	      name: 'subscribe',
	      handler: function (ref) {
	        var action = ref.action;
	        var handle = ref.handle; if ( handle === void 0 ) handle = noop;
	        var success = ref.success; if ( success === void 0 ) success = noop;
	        var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	        if (!action) return;
	        var eventName = action;
	        var eventQueue = subEventMap[eventName] || [];
	
	        var subId = 'sub_' + (++uniqueSubId);
	        subHandleMap[subId] = handle;
	
	        if (eventQueue.length) {
	          eventQueue.push(subId);
	          subEventMap[eventName] = eventQueue;
	          return success({subId: subId});
	        }
	
	        eventQueue.push(subId);
	        subEventMap[eventName] = eventQueue;
	        var handleQueue = function (e) {
	          (subEventMap[eventName] || []).forEach(function (subId) { return subHandleMap[subId](e); })
	        };
	
	        MTNB.use('basic.message.subscribe',{
	          action: eventName,
	          handle: handleQueue,
	          success: function () { return success({subId: subId}); },
	          fail: fail
	        });
	      }
	    },
	    {
	      name: 'unsubscribe',
	      handler: function (ref) {
	        var action = ref.action;
	        var subId = ref.subId;
	        var success = ref.success; if ( success === void 0 ) success = noop;
	
	        if (subId) {
	          subHandleMap[subId] = noop;
	        } else if (action) {
	          subEventMap[action] = [];
	        }
	        success();
	      }
	    },
	    {
	      name: 'setNavigationBarHidden',
	      moduleName: 'webview',
	      methodName: 'setNavigationBarHidden'
	    },
	    {
	      name: 'setBackgroundColor',
	      moduleName: 'webview',
	      methodName: 'setBackgroundColor'
	    },
	    {
	      name: 'setBouncesEnabled',
	      moduleName: 'webview',
	      methodName: 'setBouncesEnabled'
	    },
	    {
	      name: 'setStatusBarStyle',
	      moduleName: 'webview',
	      methodName: 'setStatusBarStyle'
	    },
	      //ios和android对确认和取消按钮的处理均存在错误
	      /*
	      {
	        name: 'alert',
	        moduleName: 'system',
	        methodName: 'alert'
	      },
	      {
	        name: 'confirm',
	        moduleName: 'system',
	        methodName: 'confirm'
	      },
	      {
	        name: 'prompt',
	        moduleName: 'system',
	        methodName: 'prompt'
	      },*/
	    {
	      name: 'sendSMS',
	      moduleName: 'system',
	      methodName: 'sendSMS'
	    },
	    {
	      name: 'getContactList',
	      moduleName: 'system',
	      methodName: 'getContactList'
	    },
	  /*{
	      name: 'downloadImage',
	      moduleName: 'media',
	      methodName: 'downloadImage'
	    },*/
	    {
	      name: "chooseImage",
	      moduleName: "media",
	      methodName: "chooseImage"
	    }].forEach(MTNB.reg.bind(MTNB));
	  }
	
	  // 为防止ios crash，从7.1开始支持.
	  if (imeituanversion !== '0' && imeituanversion.indexOf('7.0') === -1) {
	    MTNB.reg({
	      name: "chooseImage",
	      moduleName: "media",
	      methodName: "chooseImage"
	    });
	  }
	
	  // 因为设置按钮每一次都需要全量设置
	  // 所以需要缓存
	  var icons = {
	    l: null,
	    r: null
	  };
	  MTNB.reg({
	    name: "setNavButtons",
	    moduleName: "webview",
	    methodName: "setIcon",
	    mapper: function (params) {
	      params = [].concat(params).filter(Boolean);
	      for (var i = 0; i < params.length; i++) {
	        var icon = params[i];
	        if (icon.type == "base64") icon.url = icon.icon; // for android
	        // 只处理RL/RR，是因为MTNB不支持对LL/LR按钮的配置
	        if (icon.position == "RL") icons.l   = icon.disable ? null : icon;
	        if (icon.position == "RR") icons.r   = icon.disable ? null : icon;
	      }
	      return [icons.l, icons.r].filter(Boolean);
	    }
	  });
	
	  MTNB.reg({
	    name: "configShare",
	    handler: function (params) {
	      // KNB on Android
	      if (useMTNB && isAndroid) {
	        return MTNB.setNavButtons({
	          type: "base64",
	          position: "RR",
	          icon: window._MTNB_DEFAULT_SHARE_ICON || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACB1JREFUeAHtmwlsFUUYgF9vaSGNFIuVRAUEjRrQcGgJKlJQ8UJFSYBgQqKlRxpaQISqgFECctg2pRyNRg1CDcZwGAICjRBIJCGgEY0nKE3opQURbMvR1u+vb19m583ue01ou+DbZDr/Ofv//1z/zL76fJEnEoFIBCIRiETg/xuBqKvF9YKCgh6NjY1TsXdiW1vbkKioqBuBzwOfpN5N2VReXn6MukPPVRGAmTNnTsHRlXh2k4t3bQRlY2Ji4qyioqLTLnI2lucDgPMrcH6uzWp35DiBmLB+/fpf3MX+40aHI9RdMpmZmfNdnG9zsGsgOjuZMr0d+DayZwOQk5NzDz25xGatz3cO2iLK4HHjxsUlJCQkx8TETAQ/pMkNZL0o0WhG1LNTgKG/g558XLG6JjY2NmPNmjU/KLR2cPHixdE1NTVlyGcpPBkhQ0MtjJ4cAXl5eTdg/GOKMz56eorJeZEhAK1paWm52kiQzpVdw/XxZAAuXbqUQW+qth1cu3btfjdPJAjR0dFLNZlHNDwIVV8SxOxGws3qu+nZfSruBDNFbHLo3eIka9E9GQB6v5dloNQ4ck7FneCUlJTz8NTdoaeTrEX3ZABwuM4yUGoCMlDFneD6+voB8AILO3q1TrIW3ZMBwLjvLAOlxpGJ5ASJKs0EX758eYpKJ5DfqrgJ9lQANm/eHMP2l9Pa2vqZZmxfnNFzAptIdnb27RBesRF9vm0aHoQGhksQp4sJOJ7BK4vp7budXk0Qisn1C8n1m1QZnH+gpaXlE2jqWaEafBB5QKMqq8PdHgCMH4DxqzDsGd04B1zWh60E41dqWSzHELQHDbLTcH6TgW4jdVsASHV74ngh1szGgQSbVSA4eIayCl42pZ/Od8PRe5fD0Bw3GYsXYwFdVeNMVG1t7YvMc5mfEyix2rtbcKAcuedw4ov09PQtBGocMqmanAltIxl6A73XTUwTrcMjQC4mmpubx+OAZFmSsCRT/qR8TSKypays7Htg48NKfh8MOaRIHfTg+D4cmEXWZ1u90YtDWHpUSh9dEb1WaHsIWiHD/qjOd8PDDoD/wCGHjUW8yK03tsfHx+evXr36N+vFOJCGkcvQmw4t6J3wfqfMXbdunb76W02019gQz+gZTfDvhSCBOEup6tGjR2VJSYktd2hXCONPkDEmnXnz5vU6e/bsRhx4ysQ30P7BoecJxJcXL16cDb8QXVNWJnLLOMisxLlmQzudTgoZANmb9+7duwtLZB525LmEcA3Fltf7G5Drq02UV+n1Ux1p9ErL6gtQUPuVlZULIdqcx/Az9Oh66v2Uc8CSqk6lflRpQOatyfnD6MxiofpKke020HUEyNzFMtlv1TT0IPizLDay8Nke5F/AuQ0EwrSt1cJbwAL3EbV6YLG10dWIayrMiiyLlur8SfAnTc6L4dA/xbk8gbWnKDk5eTDD/UMvOS82ugaAnnxCc+RtnJSV1/Ghh9/DyZ9UAfAdy5cvD+tIq+p1BRwqAINUI9huPldxE+zv4R0ab6iGewZ1DQBWpiiWthUXF9cruCPIyLGdw8HDuqJ2bLATGaEC0KC8Oyo/P98tAQqIMgrks1XgAf8rgHgMcA0Ahtu+rjQ1NYVMhOht2VlsawftHPOY3wFzXA9DI0aMSMWh8QFp7tmHDRv2wZEjRy4oNBtYV1f3MjozbESfbxR6Vej9qNG7He2yPEA8ZSRUUvLZDm1XXt0ZBdcAiGHc1LxJj0o2GHhwIpAJ8sHib46rt8HUM8GAvAbIcXcdNzsLO/IVV2vjiqEhAyBnAdLhndpUCGkATso0qUBPvs7EGxROk2gtGjt27NrJkye3GPhdQnJdBMUCMY4sbhIOhcwBLIuRlR8uPE2+P4M7grscdHtzrC0luN/47wMt9S6tQ44AyxrrPsA/HfpadEO9HVoeGWOVyuOc8AiBKEL/TpWuwFuZTnPIJE8oNBvot2E0xJGUPrQl22vn3weoVjjdCOHcURzY6nYjhAOx1dXVOcguxvjr1XYFhn4BehGjZgkfQs9bfPTi+fpbAJ4P35Zj+PVaqTv3Rsgy5krUubm5KXwAfYu2MimmrbiGYMxnt9jA5Wl/FllJre8I493td4LoLQlDtl0k7CkQboMdkeNKfAjOFaPzsEmPIByix/vDc5tyQarohX0r3K0BsCzPysqahKMrKbdaNJf62vguoDvIPL+OC8857AwL4CXpfMHp2Wvvy5DuKKOhHyPhHco0lSfOs63KQmh85Nsg0+kwzF6WADovofO+hZvqkHmASakzaSxgp9hNSrR31BGQ1zSaDWX7lEuYFTYiP6rU8CDUcwEQC/nMLft84KEnt5FXNAYIDgDbZ4XKImhDVNwEezIAOGzb68GPm4zXaampqZJEBS5c9XZ0ecG9GoBzqrH0ZGBeq3QdbmhokI8vgZ0NPVs7urzgngwAdlWpxuLIGBV3gpk6upytHZOeJwMQFxcn9waS3lrPaFb5hyzEVMs5wb+FquzdKmKCPRmA0tLSPzB2l2owW1wFBypjOizO+38per+iI2uBd38goRhqBOW3wjh9hOGvdpL8VnglChUZGRknDhw4kCTDXnoeOdV5SZo+JgeYbmxcIQYWDIXmGZAen48xSx0Mkh52sv94UlLSyHBunEwnMYf3dT2ZS9SDw4cPl5V9lOHtjs7T+xP4fcIpg04QydMBEGsJwh6C8DNgOsVtO2z/jxF6flK4zkv7TlEUnqcepkMiPTsFo4L+Zwi6XIZsJFv07PcHTwUzYkwkApEIRCJgReBfWoMhbMkRs88AAAAASUVORK5CYII=",
	          handle: function () {
	            params.handle && params.handle();
	            MTNB.share(params);
	          }
	        });
	      }
	      // KNB on iOS
	      if (useMTNB && !isAndroid) {
	        return MTNB.setNavButtons({
	          type: 'share',
	          position: 'RR',
	          handle:function() {
	            params.handle && params.handle();
	            MTNB.share(params);
	          }
	        });
	      }
	
	      // waimai c端
	      ready(function (bridge) {
	        // 这个bridge方法是用来设置右上角button的。
	        bridge.callHandler('callNativeMethod', {
	          "moduleName": "platform",
	          "methodName": "shareCommon",
	          "fromKNB"    : true,
	          "data": {
	            "channel": sum(params.channel)+"", //外卖bug，channel必须是字符串
	            "content": params.content,
	            "content_-1": params.content,
	            "content_1": params.weiboContent || params.content,
	            "detailURL": params.url,
	            "imageURL": params.image,
	            "title": params.title
	          }
	        }, function (res) {
	          params.success && params.success(res);
	        });
	      });
	    }
	  });
	
	  var stopHandler = noop;
	
	  function jsbSetPullDownReg() {
	    if (imeituanversion == '0') return; // only register on metiuangroup app
	    MTNB.reg({
	      name: "setPullDown",
	      handler: function (params) {
	        ready(function(bridge) {
	          bridge.callHandler('callNativeMethod', {
	            moduleName : 'platform',
	            methodName : 'buildUpRefresh',
	            fromKNB: true,
	            data: { partial: true }
	          }, noop);
	          bridge.registerHandler("pullToRefresh", function (data, callback) {
	            stopHandler = callback;
	            params.handle();
	          });
	        });
	      }
	    });
	  }
	
	  function jsbStopPullDownReg() {
	    if (imeituanversion == '0') return;
	    MTNB.reg({
	      name: "stopPullDown",
	      // `stopHandler` is a variable, don't assign it directly here.
	      // it might change by time.
	      handler: function () { return stopHandler(); }
	    });
	  }
	
	  [{
	    name: 'setPullDown',
	    businessName: 'basic',
	    moduleName: 'webview',
	    methodName: 'setPullDown',
	    fallbackRegFn: jsbSetPullDownReg,
	  },{
	    name: 'stopPullDown',
	    businessName: 'basic',
	    moduleName: 'webview',
	    methodName: 'stopPullDown',
	    fallbackRegFn: jsbStopPullDownReg,
	  },{
	    name: 'setSearchBar',
	    businessName: 'meituan',
	    moduleName: 'webview',
	    methodName: 'setSearchBar',
	    fallbackRegFn: function () {
	      MTNB.reg({
	        name: 'setSearchBar',
	        handler: function (props) {
	            ready(function (bridge) {
	              bridge.callHandler('callNativeMethod', {
	                'moduleName' : 'platform',
	                'methodName' : 'search',
	                'fromKNB'    : true,
	                data : props  // isShowSearch / searchText / searchTextColor / searchCateId
	              }, noop);
	            })
	        }
	      });
	    },
	  },{
	    name: 'setLLButton',
	    businessName: 'basic',
	    moduleName: 'webview',
	    methodName: 'setLLButton',
	    fallbackRegFn: noop
	  },{
	    name: 'getUserInfo',
	    businessName: 'basic',
	    moduleName: 'account',
	    methodName: 'getUserInfo',
	    fallbackRegFn: function () {
	      MTNB.reg({
	        name: 'getUserInfo',
	        handler: function (ref) {
	            var success = ref.success; if ( success === void 0 ) success = noop;
	
	            success({
	              type: 'mt',
	              userId: qparams['userid'] ? parseInt(qparams['userid']) : null,
	              uuid: qparams['uuid'] ? qparams['uuid'] : null,
	              token: qparams['token'] ? qparams['token'] : null
	            });
	          }
	      })
	    }
	  }].forEach(function (ref) {
	    var name = ref.name;
	    var businessName = ref.businessName;
	    var moduleName = ref.moduleName;
	    var methodName = ref.methodName;
	    var fallbackRegFn = ref.fallbackRegFn;
	
	    sentinel.increase();
	    isInternalSupported((businessName + "." + moduleName + "." + methodName)).then(function (supported) {
	      sentinel.decrease();
	      if (!supported) return fallbackRegFn();
	      MTNB.reg({name: name, businessName: businessName, moduleName: moduleName, methodName: methodName});
	    });
	  });
	
	  // 如果没有imeituanversion信息，则是6.x及以下版本
	  // Android没有实现MTNB版的fingerprint
	  // WHAT A PILE OF HOLY SHIT!!
	  MTNB.reg(function() {
	    if (useMTNB && imeituanversion !== '0' && !isAndroid) {
	      return {
	        name: "getFingerprint",
	        moduleName: "fingerprint",
	        methodName: "getFingerprint"
	      };
	    }
	    return {
	      name: "getFingerprint",
	      handler: function (params) {
	        ready(function (bridge) {
	          bridge.callHandler('conveyFingerPrintInfoHandler', {
	            "fromKNB": true
	          }, function (res) {
	            params.success && params.success(res);
	          });
	        });
	      }
	    };
	  }());
	
	  sentinel.tryResolve(); // try resolve first
	
	  MTNB.__version__ = version;
	
	  // 被引用统计
	  logEvent('mtnb', MTNB.__version__);
	
	  if (isBrowser) window.MTNB = MTNB;
	
	  module.exports = MTNB;
	
	  if (!useMTNB) return;
	
	  // init MTNB
	  window.dpMTNBInit = function(data) {
	    if (!data.nonceStr) return report('mtnb-init-failed', 'nonceStr not exist'); // avoid call native to prevent crash under iOS Group 6.5
	    MTNB.callHandler({
	      "businessName": "basic",
	      "moduleName": "core",
	      "methodName": "init",
	      "data": {
	        "nonceStr": data.nonceStr,
	        "ts": parseInt(data.ts) || 0,
	        "url": data.url,
	        "sign": data.sign
	      }
	    }, function (res) {
	      initCallback(res);
	      if (res && res.status !== 0) {
	        var resString = JSON.stringify(res);
	        report('mtnb-init-failed', resString);
	        log('error', resString);
	        return;
	      }
	
	      MTNB._INITED = true;
	      for (var i = 0; i < blockedJob.length; i++)  MTNB.call(blockedJob[i][0], blockedJob[i][1]);
	    });
	  };
	  var script = document.createElement('script');
	  script.setAttribute('type', 'text/javascript');
	  var url = location.protocol + '//m.dianping.com/mtnb/api/signature?callback=dpMTNBInit';
	  script.setAttribute('src', url);
	  document.getElementsByTagName('head')[0].appendChild(script);
	})();


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/*global Promise*/
	var hbnb = __webpack_require__(190);
	var version = __webpack_require__(118);
	var uncommenApis = __webpack_require__(303);
	
	if (typeof window !== 'undefined' && typeof window.Promise === 'undefined') {
	  window.Promise = __webpack_require__(124);
	}
	
	var debug = false;
	var bizname = null;
	
	var shareChannelMap = {
	  'WECHAT_FRIENDS': 'weixinfriends',
	  'WECHAT_TIMELINE': 'weixin',
	  'QQ': 'qqclient',
	  'SMS': 'sms',
	  'WEIBO': 'sinaweibo',
	  'QZONE': 'qzone',
	  'EMAIL': 'email',
	  // 'COPY': ''  // todo: not supported by hbnb
	};
	
	var currentButtons = {};
	
	var availableApis = {
	  'config': true,
	  'isApiSupported': true,
	  'use': true,
	  'getUA': true,
	  'getUserInfo': true,
	  'getFingerprint': true,
	  'getNetworkType': false,
	  'login': true,
	  'logout': false,
	  'getLocation': true,
	  'getCity': true,
	  'getLocationCity': true,
	  'openWebview': true,
	  'jumpWebview': false,
	  'closeWebview': true,
	  'share': true,
	  'configShare': true,
	  'setTitle': true,
	  'setNavButtons': true,
	  'store': true,
	  'retrieve': true,
	
	  'checkVersion': false,
	  'chooseImage': false,
	  'uploadImage': false,
	  'previewImage': false,
	  'downloadImage': false,
	  'publish': false,
	  'subscribe': false,
	  'unsubscribe': false,
	  'setNavigationBarHidden': false,
	  'setBackgroundColor': false,
	  'setStatusBarStyle': false,
	  'setBouncesEnabled': false,
	  'alert': true,
	  'confirm': true,
	  'prompt': false,
	  'sendSMS': false,
	  'getContactList': false,
	  'setPullDown': false,
	  'stopPullDown': false
	
	};
	
	function noop() {
	}
	
	function isFunction(fn) {
	  return typeof fn === 'function';
	}
	
	function escapeRegExp(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
	
	function qs(key) {
	  key = encodeURIComponent(key);
	
	  var res = null;
	  var search = location.search;
	
	  var reg = new RegExp('(?:\\?|&)' + escapeRegExp(key) + '=([^&]*)(?:&|$)');
	  var match = search.match(reg);
	
	  if (match && match.length > 1) {
	    res = decodeURIComponent(match[1]);
	  }
	
	  return res;
	}
	
	
	function xhr(url, success) {
	  try {
	    var _xhr = new XMLHttpRequest();
	    _xhr.open("GET", url, true);
	    _xhr.onreadystatechange = function() {
	      if (_xhr.readyState == 4) {
	        _xhr.onreadystatechange = null;
	        var data = JSON.parse(_xhr.responseText);
	        if (data.status == 0) {
	          success(data.data);
	        }
	      }
	    };
	    _xhr.send();
	  } catch (e) {
	    console.error(e);
	  }
	}
	
	
	var KNB = {
	  __version__: version,
	
	  ready: function(cb) {
	    cb && cb();
	  },
	
	  config: function(opts) {
	    debug = Boolean(opts.debug);
	    bizname = opts.bizname;
	  },
	
	  isApiSupported: function(opts) {
	    opts.success(availableApis[opts.apiName] === true);
	  },
	
	  use: function(apiName, opts) {
	    apiName = apiName.replace(/^hb\./, '');
	    try {
	      var apiInfo = uncommenApis[apiName];
	      var args = apiInfo.params.map(function(paramName) {
	        return opts[paramName];
	      });
	
	      if (apiInfo.params.length === 1 && apiInfo.params[0] === 'opts') {
	        args = [opts];
	      }
	
	      var res = hbnb[apiInfo.memberof][apiInfo.name].apply(null, args);
	
	      if (apiInfo.return === 'Promise') {
	        res.then(opts.success || noop, opts.fail || noop);
	      } else {
	        return res;
	      }
	    } catch (ex) {
	      opts.fail && opts.fail();
	    }
	  },
	
	  getUserInfo: function(opts) {
	    Promise.all([
	      hbnb.account.getUser(),
	      // todo: there is no valid way to get uuid via hbnb
	      null
	    ]).then(function(values) {
	      var user = values[0];
	      var uuid = values[1];
	
	      opts.success({
	        type: 'mt',
	        userId: user.userId,
	        token: user.userToken,
	        uuid: uuid
	      });
	    }).catch(opts.fail || noop);
	  },
	
	  getFingerprint: function(opts) {
	    hbnb.pay.getFingerprint()
	      .then(function(fingerprint) {
	        opts.success({fingerprint: fingerprint});
	      }).catch(opts.fail || noop);
	  },
	
	  getNetworkType: function() {
	    if (debug) {
	      console.warn('KNB: API `getNetworkType` is not supported currently.');
	    }
	  },
	
	  login: function(opts) {
	    hbnb.account.login()
	      .then(function(user) {
	        opts.success({
	          type: 'mt',
	          userId: user.userId,
	          token: user.userToken
	        });
	      }).catch(opts.fail || noop);
	  },
	
	  logout: function() {
	    if (debug) {
	      console.warn('KNB: API `logout` is not supported currently.');
	    }
	  },
	
	  getLocation: function(opts) {
	    var lat = qs('lat');
	    var lng = qs('lng');
	
	    if (lat && lng) {
	      setTimeout(function() {
	        opts.success({
	          lat: lat,
	          lng: lng
	        });
	      }, 0);
	    } else {
	      setTimeout(opts.fail || noop, 0);
	    }
	  },
	
	  getCity: function(opts) {
	    if (!isFunction(opts.success)) {
	      return;
	    }
	
	    hbnb.position.getCity()
	      .then(function(city) {
	        opts.success({
	          type: 'mt',
	          cityId: city.cityId
	        });
	      }).catch(opts.fail || noop);
	  },
	
	  getLocationCity: function(opts) {
	    if (!isFunction(opts.success)) {
	      return;
	    }
	
	    KNB.getLocation({
	      success: function(loc) {
	        xhr("http://i.meituan.com/locate/latlng/" + loc.lat + "," + loc.lng + ".json?ndr", function(res) {
	          opts.success({
	            cityId: res.id,
	            type: 'mt'
	          });
	        });
	      },
	      fail: opts.fail
	    });
	  },
	
	  openWebview: function(opts) {
	    hbnb.webview.open(opts.url);
	  },
	
	  jumpWebview: function() {
	    if (debug) {
	      console.warn('KNB: API `jumpWebview` is not supported currently.');
	    }
	  },
	
	  closeWebview: function() {
	    hbnb.webview.close();
	  },
	
	  share: function(opts) {
	    // todo: `opts.success` is not supported by hbnb
	    if (!opts.channel || opts.channel.length === 0) {
	      opts.channel = ['all'];
	    }
	
	    hbnb.share.callLocal(opts.channel, {
	      title: opts.title,
	      content: opts.desc,
	      detailURL: opts.url,
	      imageURL: opts.image
	    });
	  },
	
	  configShare: function(opts) {
	    // todo: `opts.handle` and `opts.success` are not supported by hbnb
	    if (!opts.channel || opts.channel.length === 0) {
	      opts.channel = ['all'];
	    }
	
	    hbnb.share.activeNavButton(opts.channel, {
	      title: opts.title,
	      content: opts.desc,
	      detailURL: opts.url,
	      imageURL: opts.image
	    });
	  },
	
	  setTitle: function(opts) {
	    // todo: `opts.handle` is not supported by hbnb
	    hbnb.webview.setTitle(opts.title);
	  },
	
	  setNavButtons: function(buttons) {
	
	    var hbnbButtons = [];
	    buttons = [].concat(buttons);
	
	    // todo: `button.position` in ['LL', 'LR'] is not supported by hbnb
	    ['RR', 'RL'].forEach(function(position) {
	      var button = buttons.filter(function(btn) {
	        return position === btn.position;
	      });
	
	      if (button.length) {
	        currentButtons[position] = button[button.length - 1];
	      }
	      button = currentButtons[position];
	
	      if (!button || button.disable) return;
	
	      var res = {
	        callback: button.handle
	      };
	      switch (button.type) {
	        case 'base64':
	          res.type = 'icon';
	          res.icon = button.icon;
	          break;
	        case 'text':
	          res.type = 'text';
	          res.text = button.text;
	          res.color = button.color;
	          break;
	        default:
	        // do nothing
	      }
	      hbnbButtons.push(res);
	    });
	
	    hbnb.webview.setMenus(hbnbButtons);
	  },
	
	  setLLButton: function (ref) {
	    var handle = ref.handle; if ( handle === void 0 ) handle = noop;
	
	    hbnb.webview.setBackAction(handle);
	  },
	
	  store: function(opts) {
	    // todo: `opts.success` is not supported by hbnb
	    var key = bizname ? bizname + ':' + opts.key : opts.key;
	    hbnb.storage.setItem(key, JSON.stringify(opts.value));
	  },
	
	  retrieve: function(opts) {
	    var keys = opts.key.split(/:(.*)$/);
	    var biz = keys.length > 1 ? keys[0] : bizname;
	    var key = keys.length > 1 ? keys[1] : keys[0];
	    key = biz ? biz + ':' + key : key;
	    hbnb.storage.getItem(key)
	      .then(function(value) {
	        opts.success(JSON.parse(value));
	      }).catch(opts.fail || noop);
	  },
	
	  alert: function (ref) {
	    var message = ref.message;
	    var title = ref.title;
	    var handle = ref.handle; if ( handle === void 0 ) handle = noop;
	    var button = ref.button;
	
	    hbnb.ui.alert(message, title, [{
	      label: button,
	      callback: function () {
	        handle();
	      }
	    }]);
	  },
	
	  confirm: function (ref) {
	    var message = ref.message;
	    var title = ref.title;
	    var okButton = ref.okButton;
	    var cancelButton = ref.cancelButton;
	    var handle = ref.handle; if ( handle === void 0 ) handle = noop;
	
	    hbnb.ui.confirm(message, title, {
	      label: okButton,
	      callback: function () {handle({ret: true});}
	    },{
	      label: cancelButton,
	      callback: function () {handle({ret: false});}
	    });
	  }
	};
	
	for (var key in shareChannelMap) {
	  if (shareChannelMap.hasOwnProperty(key)) {
	    KNB.share[key] = shareChannelMap[key];
	  }
	}
	KNB.getUA = __webpack_require__(119);
	
	var logEvent = __webpack_require__(174);
	// 统计hbnb调用次数
	logEvent("hbnb", version);
	
	module.exports = KNB;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports = module.exports = function() {
	    return exports;
	};
	
	if (process.env.NODE_ENV !== 'production') {
	    exports._debug = __webpack_require__(191);
	    // _debug.enable('hbnb:invoke:*');
	}
	
	// invoke
	exports._invoke = __webpack_require__(194);
	
	// hbnb
	exports.core = __webpack_require__(206);
	
	// basic
	exports.account = __webpack_require__(210);
	exports.log = __webpack_require__(215);
	exports.network = __webpack_require__(217);
	exports.pay = __webpack_require__(220);
	exports.position = __webpack_require__(223);
	exports.storage = __webpack_require__(225);
	exports.thirdApps = __webpack_require__(230);
	exports.ui = __webpack_require__(232);
	exports.webview = __webpack_require__(242);
	
	// tower
	exports.tower = __webpack_require__(253);
	
	//flight
	exports.flight = __webpack_require__(259);
	
	//train
	exports.train = __webpack_require__(268);
	exports.inject = __webpack_require__(281);
	
	//lvyou
	window.Bridge = __webpack_require__(289);
	exports.travel = __webpack_require__(291);
	
	//env
	exports.env = __webpack_require__(297);
	
	//share
	exports.share = __webpack_require__(299);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(192);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(193);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 193 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(195);


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	var assert;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:invoke');
	    assert = __webpack_require__(196);
	}
	
	var env = __webpack_require__(200);
	var ready = __webpack_require__(203);
	var buildURI = __webpack_require__(204);
	var sendURI = __webpack_require__(205);
	
	var invoke = function(moduleName, methodName, parameters, protocol) {
	    if (process.env.NODE_ENV !== 'production') {
	        //assert(env.HBNBReady);
	        debug('module = %s', moduleName);
	        debug('method = %s', methodName);
	        debug('parameters = %j', parameters);
	        debug('protocol = %s', protocol);
	    }
	
	    // return if not in meituan app
	    if (process.env.NODE_ENV === 'production') {
	        if (!env.isHBNBWebview) {
	            if (parameters && parameters.complete) {
	                var complete = parameters.complete;
	                if (typeof complete === 'function') {
	                    setTimeout(function() {
	                        complete({
	                            status: 200,
	                            message: 'not HBNB webview'
	                        });
	                    });
	                }
	                return;
	            }
	        }
	    }
	
	    // throw Error on development
	    if (process.env.NODE_ENV !== 'production') {
	        assert(typeof moduleName === 'string' && moduleName);
	        assert(typeof methodName === 'string' && methodName);
	    }
	
	    parameters = parameters || {};
	    protocol = protocol || 'magpie:';
	    var uri = buildURI(protocol, moduleName, methodName, parameters);
	
	    if (process.env.NODE_ENV !== 'production') {
	        debug('uri = %s', uri);
	    }
	
	    ready(function() {
	        sendURI(uri);
	    });
	};
	
	module.exports = invoke;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(197);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function(err) { if (err) throw err; };
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(198);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(199);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 199 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:env');
	}
	
	
	// default value
	exports.isHBNBWebview = false;
	exports.platform = 'h5';
	exports.appVersion = undefined;
	exports.supportPrompt = undefined; // android group 5.x not support alert
	exports.HBNBReady = false;
	
	var versionCompare = __webpack_require__(201);
	var initEvent = __webpack_require__(202);
	
	var initVersion = function() {
	    // user agent regexp
	    var RE_ANDROID = (/android/i);
	    var RE_IOS = (/iPhone|iPad/i);
	    var RE_HBNB = (/\biHotel\/(\d+(?:\.\d+)*)\b/i);
	    var TRIP_BIZ = (/mt_trip_biz/i);
	
	    // check user agent
	    var ua = navigator.userAgent || '';
	    var match = ua.match(RE_HBNB);
	    if (match) {
	        if (RE_IOS.test(ua)) {
	            exports.platform = 'ios';
	            exports.appVersion = match[1];
	            exports.isHBNBWebview = true;
	        } else if (RE_ANDROID.test(ua)) {
	            exports.platform = 'android';
	            exports.appVersion = match[1];
	            exports.isHBNBWebview = true;
	            exports.supportPrompt = TRIP_BIZ.test(ua) || Boolean(versionCompare(exports.appVersion, '6.0') >= 0);
	        }
	    }
	};
	
	var init = function() {
	    initVersion();
	    initEvent();
	};
	
	init();
	
	if (process.env.NODE_ENV !== 'production') {
	    debug('env = %j', exports);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:version-compare');
	}
	
	/**
	 * compare version number
	 *
	 * @private
	 * @param {String} a
	 * @param {String} b
	 * @return {Number} -1 is <, 0 is =, 1 is >
	 *
	 * @example
	 *  compare('6.0', '6.0.1'); // -1
	 *  compare('6.0', '5.9'); // 1
	 *  compare('5.9.2', '5.9.2'); // 0
	 */
	var compare = function(a, b) {
	    var pa = String(a).split('.');
	    var pb = String(b).split('.');
	    var len = Math.min(pa.length, pb.length) + 1;
	
	    if (process.env.NODE_ENV !== 'production') {
	        debug('a is %j', pa);
	        debug('b is %j', pb);
	    }
	
	    for (var i = 0; i < len; ++i) {
	        var na = Number(pa[i]);
	        var nb = Number(pb[i]);
	        if (na > nb) {
	            return 1;
	        } else if (nb > na) {
	            return -1;
	        } else if (!isNaN(na) && isNaN(nb)) {
	            return 1;
	        } else if (isNaN(na) && !isNaN(nb)) {
	            return -1;
	        }
	    }
	    return 0;
	};
	
	module.exports = compare;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * 1. 页面开启
	 * 2. 页面隐藏
	 * 3. 桥协议可用
	 */
	
	var debug;
	var assert;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:event');
	    assert = __webpack_require__(196);
	}
	
	var env = __webpack_require__(200);
	
	
	var win = window;
	var doc = document;
	
	var dispatch = function(eventName) {
	    if (process.env.NODE_ENV !== 'production') {
	        assert(eventName);
	        debug('dispatch event "%s"', eventName);
	    }
	
	    var ev = doc.createEvent('Events');
	    ev.initEvent(eventName);
	    doc.dispatchEvent(ev);
	};
	
	var addLifecycleEvent = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('add lifecycle event');
	        assert(win.HBNB);
	    }
	
	    dispatch('HBNB:ready');
	    env.HBNBReady = true;
	
	    win.HBNB.onPageShow = function() {
	        dispatch('HBNB:pageshow');
	    };
	
	    win.HBNB.onPageHide = function() {
	        dispatch('HBNB:pagehide');
	    };
	};
	
	var checkHBNB = function() {
	    setTimeout(function check() {
	        if (win.HBNB) {
	            addLifecycleEvent();
	        } else {
	            setTimeout(check, 500);
	        }
	    });
	};
	
	var initEvent = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        if (env.platform === 'h5') {
	            win.HBNB = {};
	            addLifecycleEvent();
	        }
	    }
	
	    if (!env.isHBNBWebview) {
	        if (process.env.NODE_ENV !== 'production') {
	            debug('not HBNB webview');
	        }
	        return;
	    }
	
	    if (env.platform === 'ios') {
	        if (win.HBNB) {
	            // ios 会添加 HBNB 对象，如果有该对象，说明桥协议可用
	            addLifecycleEvent();
	        } else if (env.HBNBVersion) {
	            // 带 HBNB 的版本，在可用时会触发 _HBNBReady 事件，表示桥协议可用了
	            doc.addEventListener('_HBNBReady', addLifecycleEvent);
	        } else {
	            // 旧版本只能定时检查
	            checkHBNB();
	        }
	    } else if (env.platform === 'android') {
	        if (env.supportPrompt) {
	            // 支持 prompt 的版本，是在页面加载前就可用了
	            win.HBNB = {};
	            addLifecycleEvent();
	        } else if (win.HBNB) {
	            // 旧版本使用 HBNB 传递数据，存在 HBNB 时可用
	            addLifecycleEvent();
	        } else {
	            // 就版本只能定时检查
	            checkHBNB();
	        }
	    }
	};
	
	module.exports = initEvent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:ready');
	}
	
	var env = __webpack_require__(200);
	
	var fnQueue = [];
	
	document.addEventListener('HBNB:ready', function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('fnQueue length = %s', fnQueue.length);
	    }
	
	    for (var i = 0, ii = fnQueue.length; i < ii; ++i) {
	        fnQueue[i]();
	    }
	});
	
	var ready = function(fn) {
	    if (typeof fn !== 'function') {
	        return;
	    }
	
	    if (env.HBNBReady) {
	        fn();
	    } else {
	        if (process.env.NODE_ENV !== 'production') {
	            debug('push fn to fnQueue');
	        }
	
	        fnQueue.push(fn);
	    }
	};
	
	module.exports = ready;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:build-uri');
	}
	
	var _id = 0;
	var _buildCallback = function(fn) {
	    var fnID = (new Date().getTime() + '_' + (++_id));
	    var callbackName = 'HBNB_CALLBACK_' + fnID;
	    window[callbackName] = (function(fn, callbackName) {
	        var innerFN = function() {
	            var r = fn.apply(null, arguments);
	            if (r !== false) {
	                delete window[callbackName];
	            }
	        };
	        return innerFN;
	    })(fn, callbackName);
	
	    if (process.env.NODE_ENV !== 'production') {
	        //debug('window["%s"] call "%s"', callbackName, fn);
	    }
	
	    return callbackName;
	};
	
	var _processParameters = function(key, value) {
	    if (typeof value === 'function') {
	        return _buildCallback(value);
	    } else {
	        return value;
	    }
	};
	
	var buildURI = function(protocol, moduleName, methodName, parameters) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('protocol = %s', protocol);
	        debug('module = %s', moduleName);
	        debug('method = %s', methodName);
	        debug('before process, parameters is %j', parameters);
	    }
	
	    var params = encodeURIComponent(JSON.stringify(parameters, _processParameters));
	    if (process.env.NODE_ENV !== 'production') {
	        debug('after encode, parameters is %s', params);
	    }
	
	    var uri = protocol + '//' + moduleName + '/' + methodName + '?params=' + params;
	
	    if (process.env.NODE_ENV !== 'production') {
	        debug('uri = %s', uri);
	    }
	
	    return uri;
	};
	
	module.exports = buildURI;
	module.exports.processParams = _processParameters; // for legency-lvyou
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:invoke:send-uri');
	}
	
	var env = __webpack_require__(200);
	
	/*eslint-disable no-undef, block-scoped-var, no-alert */
	var strategy = {
	    'alert': function(uri) { window.alert(uri); },
	    'prompt': function(uri) { window.prompt(uri); },
	    'HBNB': {
	        'android': function(uri) { HBNB.sendBridgeMessage(uri); },
	        'ios': function(uri) { HBNB.postMessage(uri); }
	    }
	};
	/*eslint-enable no-undef, block-scoped-var, no-alert */
	
	var sendURI;
	if (env.platform === 'ios') {
	    sendURI = strategy['HBNB']['ios'];
	} else if (env.platform === 'android') {
	    if (env.supportPrompt) {
	        // android app >= 6.0 support window.prompt
	        sendURI = strategy['prompt'];
	    } else {
	        sendURI = strategy['HBNB']['android'];
	    }
	} else {
	    sendURI = strategy['alert'];
	}
	
	if (process.env.NODE_ENV !== 'production') {
	    debug('sendURI = %s', sendURI);
	}
	
	module.exports = sendURI;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name core
	 */
	
	exports.HBNBVersion = __webpack_require__(207);
	exports.supportApis = __webpack_require__(208);
	exports.OSVersion = __webpack_require__(209);


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:core:HBNBVersion');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取桥协议版本
	 *
	 * 支持版本
	 * + iHotel/6.1+
	 * + HBNB/?
	 *
	 * @memberof core
	 * @static
	 * @name HBNBVersion
	 * @return {Promise<version>}
	 * @example
	 *  hbnb.core.HBNBVersion()
	 *      .then(function(version) {
	 *      });
	 */
	
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('core', 'hbnb_version', {
	            callback: function(version) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('version is %j', version);
	                }
	                if (version && version.version) {
	                    resolve(version.version);
	                } else {
	                    reject();
	                }
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:core:supportApis');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取桥协议版本
	 *
	 * 支持版本
	 * + iHotel/6.1+
	 * + HBNB/?
	 *
	 * @memberof core
	 * @static
	 * @name supportApis
	 * @return {Promise<Array>}
	 * @example
	 *  hbnb.core.supportApis([
	 *      'magpie://ui/alert',
	 *      'magpie://what/the_f**k'
	 *  ])
	 *      .then(function(status) {
	 *          status = [
	 *              true,
	 *              false
	 *          ]
	 *      });
	 */
	
	module.exports = function(apis) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('apis is %j', apis);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('core', 'support_apis', {
	            callback: function(status) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('status is %j', status);
	                }
	                resolve(status);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:core:OSVersion');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取桥协议版本
	 *
	 * 支持版本
	 * + iHotel/6.1+
	 * + HBNB/?
	 *
	 * @memberof core
	 * @static
	 * @name OS
	 * @return {Promise<version>}
	 * @example
	 *  hbnb.core.OSVersion()
	 *      .then(function(version) {
	 *          version = {
	 *              os: 'ios',
	 *              version: '9.0'
	 *          }
	 *      });
	 */
	
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('core', 'os_version', {
	            callback: function(version) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('version is %j', version);
	                }
	                resolve(version);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name account
	 */
	
	exports.login = __webpack_require__(211);
	exports.getUser = __webpack_require__(212);
	exports.mobileLogin = __webpack_require__(213);
	exports.sendMobileLoginCode = __webpack_require__(214);


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:account:login');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开客户端登录界面
	 *
	 * 1. 客户端不会判断是否已经登录。
	 * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。
	 * 2. 用户没有登录直接返回时，客户端不会给出通知。
	 * 需要业务方自己监听 `HBNB:pageshow` 事件。
	 *
	 * 支持版本
	 * + iHotel/5.8
	 *
	 * @memberof account
	 * @static
	 * @name login
	 * @returns {Promise<user>} resolve if login success
	 * @example
	 *  hbnb.account.login()
	 *      .then(function(user) {
	 *          user = {
	 *              userId: 1234567,
	 *              userName: 'name is string',
	 *              userToken: 'token is string'
	 *          }
	 *      })
	 */
	
	module.exports = function() {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('user', 'login', {
	            callback: function(user) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('success, user is %j', user, user);
	                }
	                resolve(user);
	            },
	            errback: reject
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:account:getUser');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取用户登录信息
	 *
	 * 用户已登录时 resolve，用户未登录 reject
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof account
	 * @static
	 * @name getUser
	 * @return {Promise<user | err>}
	 * @example
	 *  hbnb.account.getUser()
	 *      .then(function(user) {
	 *          user = {
	 *              userId: 1234567,
	 *              userName: 'name is string',
	 *              userToken: 'token is string'
	 *          }
	 *      })
	 *      .catch(function(err) {
	 *          err = {
	 *              message: "用户未登录美团",
	 *              status: -1
	 *          }
	 *      });
	 */
	
	module.exports = function(cb, eb) {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('user', 'get_user', {
	            callback: function(user) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('user is %j', user, user);
	                }
	                resolve(user);
	            },
	            errback: reject
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:account:mobileLogin');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开客户端登录界面
	 *
	 * 客户端不会判断是否已经登录。
	 * 需要业务方自己调用 `hbnb.account.getUser` 判断是否已经登录。
	 *
	 * 支持版本
	 * + iHotel/6.2
	 *
	 * @memberof account
	 * @static
	 * @name mobileLogin
	 * @param mobile
	 * @param code
	 * @returns {Promise<user>} resolve if login success
	 * @example
	 *  hbnb.account.mobileLogin(19988887777, 123456)
	 *      .then(function(user) {
	 *          user = {
	 *              userId: 1234567,
	 *              userName: 'name is string',
	 *              userToken: 'token is string'
	 *          }
	 *      })
	 *      .catch(function(err) {
	 *      })
	 */
	
	module.exports = function(mobile, code) {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('user', 'mobile_login', {
	            mobile: mobile,
	            code: code,
	            callback: function(user) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('success, user is %j', user, user);
	                }
	                resolve(user);
	            },
	            errback: reject
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:account:sendMobileLoginCode');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	
	 *
	 * 支持版本
	 * + iHotel/6.2
	 *
	 * @memberof account
	 * @static
	 * @name sendMobileLoginCode
	 * @param {String} mobile 手机号
	 * @returns {Promise<user>} resolve if login success
	 * @example
	 *  hbnb.account.sendMobileLoginCode('19988887777')
	 *      .then(function() {
	 *      })
	 *      .catch(function() {
	 *      })
	 */
	
	module.exports = function(mobile) {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('user', 'send_mobile_login_code', {
	            mobile: mobile,
	            callback: function() {
	                resolve();
	            },
	            errback: reject
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name log
	 */
	exports.mge = __webpack_require__(216);


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:log:mge');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 发送 mge 统计参数
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof log
	 * @static
	 * @name mge
	 * @param {String | Undefined} cid 页面名
	 * @param {String | Undefined} act 事件名
	 * @param {String | Undefined} val 页面属性
	 * @param {String | Undefined} lab 事件属性
	 * @return {Undefined}
	 * @example
	 *  hbnb.log.mge('页面A', '点击事件B');
	 *  hbnb.log.mge({
	 *      cid: '页面A‘，
	 *      act: '点击事件B'
	 *  });
	 */
	
	module.exports = function(cid, act, val, lab) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('cid = %s', cid);
	        debug('act = %s', act);
	        debug('val = %s', val);
	        debug('lab = %s', lab);
	    }
	
	    if (typeof cid === 'object') {
	        var opt = cid;
	        cid = String(opt.cid || '');
	        act = String(opt.act || opt.action);
	        val = String(opt.val || opt.value);
	        lab = String(opt.lab || opt.label);
	    }
	
	    _invoke('log', 'mge', {
	        cid: cid || '',
	        action: act || '',
	        value: val || '',
	        label: lab || ''
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name network
	 */
	
	exports.request = __webpack_require__(218);
	exports.sendSms = __webpack_require__(219);
	
	//exports.httpRequest = require('./http-request.js'); // not support POST, disabled


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	var assert;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:network:request');
	    assert = __webpack_require__(196);
	}
	
	var _invoke = __webpack_require__(194);
	
	
	/**
	 * 发起网络请求
	 *
	 * @memberof network
	 * @static
	 * @name request
	 * @param {Object} opts 请求参数，参考 [request](https://github.com/request/request#requestoptions-callback)
	 * @return {Promise<resp|err>}
	 * @example
	 *  hbnb.network.request({
	 *      url: 'https://www.google.com/',
	 *      method: 'GET',
	 *      headers: {
	 *          'X-Requested-With': 'XMLHttpRequest'
	 *      },
	 *      body: '',
	 *      followRedirect: true,
	 *      maxRedirects: 10,
	 *      timeout: 5000
	 *  }).then(function(resp) {
	 *      resp = {
	 *          statusCode: 404,
	 *          body: '',
	 *          headers: {
	 *              'content-encoding': ['gzip']
	 *          }
	 *      }
	 *  }).catch(function(err) {
	 *      err = {
	 *          message: "用户未登录美团",
	 *          status: -1
	 *      }
	 *  });
	 *
	 */
	
	module.exports = function(opts) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('request opts is %j', opts);
	        assert(opts.url);
	        assert(typeof opts.method === 'undefined' || ['GET', 'POST', 'PUT', 'DELETE'].indexOf(opts.method.toUpperCase()) !== -1);
	        assert(typeof opts.headers === 'undefined' || typeof opts.headers === 'object');
	        assert(typeof opts.body === 'undefined' || typeof opts.body === 'string');
	        assert(typeof opts.followRedirect === 'undefined' || typeof opts.followRedirect === 'boolean');
	        assert(typeof opts.maxRedirects === 'undefined' || typeof opts.maxRedirects === 'number');
	        assert(typeof opts.timeout === 'undefined' || typeof opts.timeout === 'number');
	    }
	    if (opts.headers) {
	        var newHeaders = {};
	        var headers = opts.headers;
	        for (var key in headers) {
	            if (headers.hasOwnProperty(key)) {
	                newHeaders[key.toLowerCase()] = headers[key];
	            }
	        }
	        opts.headers = newHeaders;
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('network', 'request', {
	            url: opts.url,
	            method: opts.method ? opts.method.toUpperCase() : 'GET',
	            headers: opts.headers ? opts.headers : {},
	            body: opts.body ? opts.body : '',
	            followRedirect: !(opts.followRedirect === false),
	            maxRedirects: opts.maxRedirects ? opts.maxRedirects : 10,
	            timeout: opts.timeout ? opts.timeout : 5000,
	            insecure: opts.insecure ? opts.insecure : false,
	            responseEncoding: opts.responseEncoding ? opts.responseEncoding : '',
	            callback: function(response) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('request success, %j', response, response);
	                }
	                var newHeaders = {};
	                var headers = response.headers;
	                for (var i = 0, ii = headers.length; i < ii; i++) {
	                    var header = headers[i];
	                    var index = header.indexOf(';');
	                    if (index === -1) continue;
	                    var key = header.substr(0, key).trim().toLowerCase();
	                    var val = header.substr(index + 1).trim();
	                    newHeaders[key] = val;
	                }
	                response.headers = newHeaders;
	                resolve(response);
	            },
	            errback: function(msg) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('request fail, %j', msg);
	                }
	                reject(msg);
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:network:sendSms');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 发送预填充内容了的短信
	 *
	 * 支持版本
	 * + iHotel/6.6
	 *
	 * @memberof network
	 * @static
	 * @name sendSms
	 * @example
	 *  hbnb.network.sendSms({
	 *      "recipients": 110, // 电话号码，支持多个
	 *      "text": "help" // 发送到的文字内容
	 *  })
	 */
	
	module.exports = function(mobile, content) {
	    _invoke('device', 'send_sms', {
	        "recipients": mobile, // 电话号码，支持多个
	        "text": content // 发送到的文字内容
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name pay
	 */
	
	exports.payment = __webpack_require__(221);
	exports.getFingerprint = __webpack_require__(222);


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:pay:payment');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 调用客户端收银台
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof pay
	 * @static
	 * @name payment
	 * @param {Object} opts 收银台参数
	 * @returns {Promise<orderId | Undefined>}
	 * @example
	 *  hbnb.pay.payment({
	 *      tradeNo: '123',
	 *      payToken: '456',
	 *      orderId: '789',
	 *      returnURL: 'imeituan://...'
	 *  }).then(function(data) {
	 *      data = {
	 *          isPayed: true,
	 *          orderId: '789'
	 *      }
	 *  }).catch(function() {
	 *      ...
	 *  });
	 */
	
	module.exports = function(opts) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('payment opts is %j', opts);
	    }
	    var p = new Promise(function(resolve, reject) {
	        var cb = opts.callback;
	        opts.callback = function(data) {
	            if (process.env.NODE_ENV !== 'production') {
	                debug('payment return %j', data);
	            }
	
	            resolve(data);
	            if (typeof cb === 'function') {
	                cb(data);
	            }
	        };
	        opts.errback = function() {
	            reject();
	        };
	        _invoke('pay', 'cashier', opts);
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:pay:getFingerprint');
	}
	
	var _invoke = __webpack_require__(194);
	var env = __webpack_require__(200);
	var versionCompare = __webpack_require__(201);
	
	/**
	 * 调用客户端收银台
	 *
	 * 支持版本
	 * + iHotel/6.1+
	 *
	 * @memberof pay
	 * @static
	 * @name getFingerprint
	 * @returns {Promise<String>}
	 * @example
	 *  hbnb.pay.getFingerprint()
	 *      .then(function(fp) {
	 *          fp = 'xxxxxxx'
	 *      });
	 */
	
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	    var p = new Promise(function(resolve, reject) {
	        if (versionCompare(env.appVersion, '6.1') >= 0) {
	            _invoke('pay', 'get_fingerprint', {
	                callback: function(fingerprint) {
	                    if (process.env.NODE_ENV !== 'production') {
	                        debug('fingerprint return %j', fingerprint);
	                    }
	                    if (fingerprint && fingerprint.fingerprint) {
	                        resolve(fingerprint.fingerprint);
	                    } else {
	                        reject();
	                    }
	                }
	            });
	        } else {
	            reject();
	        }
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name position
	 */
	
	exports.getCity = __webpack_require__(224);


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:position:getCity');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取当前选择的城市
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof position
	 * @static
	 * @name getCity
	 * @return {Promise<city>}
	 * @example
	 *  hbnb.position.getCity()
	 *      .then(function(city) {
	 *          city = {
	 *              cityId: 1,
	 *              cityName: '北京'
	 *              cityPinyin: 'beijing'
	 *          }
	 *      });
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('call get city');
	    }
	    var p = new Promise(function(resolve, reject) {
	        _invoke('position', 'get_city', {
	            callback: function(city) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('return city %j', city);
	                }
	                resolve(city);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name storage
	 */
	
	exports.getItem = __webpack_require__(226);
	exports.setItem = __webpack_require__(227);
	exports.removeItem = __webpack_require__(228);
	exports.setResult = __webpack_require__(229);


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:storage:getItem');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 客户端存储／查
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof storage
	 * @static
	 * @name getItem
	 * @return {Promise<val>}
	 * @example
	 *  hbnb.storage.getItem('key')
	 *      .then(function(value) {
	 *          value = '' || null;
	 *      });
	 */
	module.exports = function(key) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('key is %s', key);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('storage', 'get_item', {
	            key: key,
	            callback: function(val) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('value is %j', val);
	                }
	
	                if (val && val.value) {
	                    resolve(val.value);
	                } else {
	                    resolve(null);
	                }
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:storage:setItem');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 客户端存储／增、改
	 *
	 * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof storage
	 * @static
	 * @name setItem
	 * @return {Undefined}
	 * @example
	 *  hbnb.storage.setItem('key', 'value');
	 */
	module.exports = function(key, val) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('key is %s, value is %s', key, val.toString(), val);
	    }
	
	    _invoke('storage', 'set_item', {
	        key: key,
	        value: val.toString()
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:storage:removeItem');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 客户端存储／删
	 *
	 * 客户端调用是异步的，不保证接下去调用 `hbnb.storage.getItem` 能立刻获取最新值
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof storage
	 * @static
	 * @name removeItem
	 * @return {Undefined}
	 * @example
	 *  hbnb.storage.removeItem('key');
	 */
	module.exports = function(key) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('key is %s', key);
	    }
	
	    _invoke('storage', 'remove_item', {
	        key: key
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:closeAll');
	}
	
	var _invoke = __webpack_require__(194);
	var env = __webpack_require__(200);
	var versionCompare = __webpack_require__(201);
	
	/**
	 * 适用的场景是native打开H5的页面选择学校、城市
	 *
	 * 支持版本
	 * + Android
	 * + iHotel/6.9+
	 *
	 * @memberof storage
	 * @static
	 * @name setResult
	 * @param {Object} obj
	 * @return {Undefined}
	 * @example
	 *  hbnb.storage.setResult({id: "45", name: "广西"});
	 */
	module.exports = function(params) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url list %s', params);
	    }
	
	    if (env.platform === 'android' && versionCompare(env.appVersion, '6.9') >= 0) {
	        _invoke('inject', 'set_result', params);
	    } else {
	        // no op
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name thirdApps
	 */
	
	exports.installed = __webpack_require__(231);


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	var assert;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:thirdApps:installed');
	    assert = __webpack_require__(196);
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 检查第三方软件安装情况
	 *
	 * 目前支持支付宝（`alipay`）
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof thirdApps
	 * @static
	 * @name installed
	 * @param {String} appName 软件名
	 * @return {Promise<status>}
	 * @example
	 *  var hbnb = request('@hfe/hbnb');
	 *  hbnb.thirdApps.installed('alipay')
	 *      .then(function(status) {
	 *          status = true || false
	 *      });
	 */
	module.exports = function(appName) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('app is %s', appName);
	        assert(['alipay'].indexOf(appName) >= 0);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('third_apps', 'installed', {
	            appName: appName,
	            callback: function(status) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('status is %j', status);
	                }
	
	                if (status && status.installed) {
	                    resolve(true);
	                } else {
	                    resolve(false);
	                }
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name ui
	 */
	
	exports.loadingStart = __webpack_require__(233);
	exports.loadingStop = __webpack_require__(234);
	
	exports.toast = __webpack_require__(235);
	exports.alert = __webpack_require__(236);
	exports.confirm = __webpack_require__(237);
	
	exports.options = __webpack_require__(238);
	exports.singleSelect = __webpack_require__(239);
	
	exports.selectDate = __webpack_require__(240);
	exports.autoLock = __webpack_require__(241);


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:loadingStart');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 开启加载动画
	 *
	 * 在关闭前多次调用存在 bug，需要业务方自己把握开启／关闭的配对关系
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name loadingStart
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.loadingStart();
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('start');
	    }
	
	    _invoke('ui', 'loading_start');
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:loadingStop');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 关闭加载动画
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name loadingStop
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.loadingStop();
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('stop');
	    }
	
	    _invoke('ui', 'loading_stop');
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:toast');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * toast 弹窗
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name toast
	 * @param {String} message 弹窗信息
	 * @param {Number} [time] toast 持续时间，单位 `ms`，可选，默认 3000
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.toast('message', 1000);
	 */
	
	module.exports = function(message, time) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('message is %s', message);
	        debug('time is %s', time);
	    }
	
	    time = time || 3000;
	
	    _invoke('ui', 'toast', {
	        message: message,
	        time: time
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:alert');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 单按钮弹窗，类似 alert
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name alert
	 * @param {String} message 弹窗信息
	 * @param {String} [title] 弹窗标题，可选
	 * @param {Array} button 按钮
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.alert('message', ['title'], [{
	 *      label: '确定',
	 *      callback: function() {
	 *          console.log('clicked');
	 *      }
	 *  }]);
	 */
	module.exports = function(message, title, button) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('message is %j', message);
	        debug('title is %j', title);
	        debug('button is %j', button);
	    }
	
	    if (!button) {
	        button = title;
	        title = '';
	    }
	
	    // fix: button should be an array
	    if (Object.prototype.toString.call(button) === "[object Object]") {
	        button = [button];
	    }
	
	    _invoke('ui', 'alert', {
	        message: message,
	        title: title,
	        buttons: button
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:confirm');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 双按钮弹窗，类似 confirm
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name confirm
	 * @param {String} message 弹窗信息
	 * @param {String} [title] 弹窗标题，可选
	 * @param {Object} leftButton 左按钮
	 * @param {Object} rightButton 右按钮
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.confirm('message', 'title', {
	 *      label: '确定',
	 *      callback: function() {}
	 *  }, {
	 *      label: '取消',
	 *      callback: function() {}
	 *  });
	 */
	module.exports = function(message, title, leftButton, rightButton) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('message is %j', message);
	        debug('title is %j', title);
	        debug('left button is %j', leftButton);
	        debug('right button is %j', rightButton);
	    }
	
	    if (!rightButton) {
	        rightButton = leftButton;
	        leftButton = title;
	        title = '';
	    }
	
	    _invoke('ui', 'alert', {
	        message: message,
	        title: title,
	        buttons: [leftButton, rightButton]
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:options');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选项弹窗
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name options
	 * @param {Array} menus 选项数组
	 * @param {Object} cancel 取消按钮
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.options([{
	 *      label: 'option1',
	 *      callback: function() {}
	 *  }, {
	 *      label: 'option2',
	 *      callback: function() {}
	 *  }], {
	 *      label: 'cancel',
	 *      callback: function() {}
	 *  });
	 */
	module.exports = function(menus, cancel) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('menus is %j', menus);
	        debug('cancel is %j', cancel);
	    }
	
	    _invoke('ui', 'options', {
	        menus: menus,
	        cancel: cancel
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:singleSelect');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 单选框
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof ui
	 * @static
	 * @name singleSelect
	 * @param {Array} menus 选项数组
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.singleSelect([{
	 *      label: 'all',
	 *      active: true,
	 *      callback: function() {},
	 *  }, {
	 *      label: 'option 1',
	 *      active: false,
	 *      callback: function() {},
	 *  }, {
	 *      label: 'option 2',
	 *      active: false,
	 *      callback: function() {},
	 *  }]);
	 */
	module.exports = function(menus) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('menus is %j', menus);
	    }
	
	    _invoke('ui', 'single_select', {
	        menus: menus
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:singleDate');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 日期选择
	 *
	 * TODO: 补全示例
	 *
	 * 支持版本
	 * + iHotel/5.9.2+
	 *
	 * @memberof ui
	 * @static
	 * @name selectDate
	 * @param {String} current 当前日期
	 * @param {String} maxDate 最大可选日期
	 * @param {String} minDate 最小可选日期
	 * @return {Promise<date | err>}
	 * @example
	 *  hbnb.ui.selectDate('');
	 */
	module.exports = function(current, maxDate, minDate) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('current is %s', current);
	        debug('maxDate is %s', maxDate);
	        debug('minDate is %s', minDate);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('ui', 'select_date', {
	            original: current || '',
	            maxDate: maxDate,
	            minDate: minDate,
	            callback: function(data) {
	                resolve(data);
	            },
	            errback: function(err) {
	                reject(err);
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:ui:autoLock');
	}
	
	var _invoke = __webpack_require__(194);
	var env = __webpack_require__(200);
	var versionCompare = __webpack_require__(201);
	
	/**
	 * 不允许自动锁屏
	 *
	 * 支持版本
	 * + iHotel/6.5+
	 *
	 * @memberof ui
	 * @static
	 * @name autoLock
	 * @param {Boolean} enable true表示禁止自动锁屏
	 * @return {Undefined}
	 * @example
	 *  hbnb.ui.autoLock();
	 */
	module.exports = function(enable) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('enable', enable);
	    }
	
	    if (versionCompare(env.appVersion, '6.5') >= 0) {
	        _invoke('ui', 'auto_lock', {
	            enable: enable
	        });
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name webview
	 */
	
	exports.open = __webpack_require__(243);
	exports.back = __webpack_require__(244);
	exports.close = __webpack_require__(245);
	exports.closeAll = __webpack_require__(246);
	
	exports.modal = __webpack_require__(247);
	exports.dismiss = __webpack_require__(248);
	
	exports.setTitle = __webpack_require__(249);
	exports.setMenus = __webpack_require__(250);
	exports.setComplexTitle = __webpack_require__(251);
	
	exports.setBackAction = __webpack_require__(252);


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:open');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开新页面
	 *
	 * 与 `hbnb.webivew.close` 配合使用
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof webview
	 * @static
	 * @name open
	 * @param {String} url 页面地址
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.open('http://i.meituan.com');
	 */
	module.exports = function(url) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url is %s', url);
	    }
	
	    _invoke('webview', 'open', {
	        url: url
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:back');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 后退
	 *
	 * TODO: ANDROID 旧版实现有问题
	 *
	 * 支持版本
	 * + iHotel/?
	 *
	 * @memberof webview
	 * @static
	 * @name back
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.back();
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    _invoke('webview', 'back');
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:close');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 关闭当前 webview
	 *
	 * 与 `hbnb.webivew.open` 配合使用
	 *
	 * TODO: ANDROID 旧版实现有问题
	 *
	 * 支持版本
	 * + iHotel/?
	 *
	 * @memberof webview
	 * @static
	 * @name close
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.close();
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    _invoke('webview', 'close');
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:closeAll');
	}
	
	var _invoke = __webpack_require__(194);
	var env = __webpack_require__(200);
	var versionCompare = __webpack_require__(201);
	
	/**
	 * 适用的场景是抢票任务编辑，从任务列表不想回表单.
	 * ABCBC，在C页面closeAll([B, C])就退到页面A
	 *
	 * 与 `hbnb.webview.open` 配合使用
	 *
	 * 支持版本
	 * + Android
	 * + iHotel/6.5+
	 *
	 * @memberof webview
	 * @static
	 * @name closeAll
	 * @param {Array} urls 连续关闭的URL
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.closeAll([
	 *      '/qiangpiao/add/',
	 *      '/qiangpiao/list/'
	 *  ]);
	 */
	module.exports = function(urls) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url list %s', urls);
	    }
	
	    if (env.platform === 'android' && versionCompare(env.appVersion, '6.5') >= 0) {
	        _invoke('webview', 'close_all', {
	            urls: urls
	        });
	    } else {
	        _invoke('webview', 'close');
	    }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:modal');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开 modal 弹窗
	 *
	 * 1. 与 `hbnb.webivew.dismiss` 配合使用
	 * 2. `modal` 弹窗内部不能继续调用 `modal` 弹窗，可以调用 `open`
	 * 3. `dimiss` 时会关闭弹窗，且 modal 的操作不会纪录到后退路径中
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof webview
	 * @static
	 * @name modal
	 * @param {String} url 页面地址
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.modal('http://i.meituan.com');
	 */
	module.exports = function(url) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url is %s', url);
	    }
	
	    _invoke('webview', 'modal', {
	        url: url
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:dismiss');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 关闭当前 modal
	 *
	 * 与 `hbnb.webivew.modal` 配合使用
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof webview
	 * @static
	 * @name dismiss
	 * @example
	 *  hbnb.webview.dismiss();
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    _invoke('webview', 'dismiss');
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:setTitle');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 修改标题
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof webview
	 * @static
	 * @name setTitle
	 * @param {String} title 标题
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.setTitle('new title');
	 */
	module.exports = function(title) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('title is %s', title);
	    }
	
	    _invoke('webview', 'set_title', {
	        title: title
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:setMenus');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 设置导航栏右侧按钮
	 *
	 * 目前支持 `icon`/`text` 两种类型的按钮
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof webview
	 * @static
	 * @name setMenus
	 * @param {Array} menus 按钮设置
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.setMenus([{
	 *      type: 'text',
	 *      text: '确定',
	 *      color: '#cccccc',
	 *      callback: function() {console.log('clicked'); return false;}
	 *  }, {
	 *      type: 'icon',
	 *      icon: 'url',
	 *      callback: function() {console.log('clicked'); return false;}
	 *  ]);
	 */
	module.exports = function(menus) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('menus is %j', menus);
	    }
	
	    _invoke('webview', 'set_navbar_menus', {
	        menus: menus
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	var assert;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:setComplexTitle');
	    assert = __webpack_require__(196);
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 设置复杂标题
	 *
	 * 根据传入的 `type` 判断使用那种展示形式。
	 * 如果当前版本不支持 `type`，会回退到普通形式，只展示 `title`。
	 *
	 * 目前只支持上下双栏的主副标题 `type='two-row'`
	 *
	 * 支持版本
	 * + iHotel/5.9.2+
	 *
	 * @memberof webview
	 * @static
	 * @name setComplexTitle
	 * @param {Object} opts 标题设置
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.setComplexTitle({
	 *      type: 'two-row',
	 *      title: 'title',
	 *      subTitle: 'subTitle'
	 *  });
	 */
	module.exports = function(opts) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('opts is %j', opts);
	        assert(opts.title);
	    }
	
	    _invoke('webview', 'set_complex_title', opts);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:webview:setBackAction');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 修改后退操作
	 *
	 * 一旦设置该函数，用户点击后退时只会调用该函数而不会直接后退。
	 * 可在函数内调用 `hbnb.webview.back` 方法进行后退
	 *
	 * TODO: 支持版本
	 *
	 * 支持版本
	 * + iHotel/??
	 *
	 * @memberof webview
	 * @static
	 * @name setBackAction
	 * @param {Function} cb 点击后退按钮时执行的函数
	 * @return {Undefined}
	 * @example
	 *  hbnb.webview.setBackAction(function() {
	 *      // do something
	 *  });
	 */
	module.exports = function(cb) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('callback is %s', cb);
	    }
	
	    _invoke('webview', 'set_navbar_back', {
	        callback: function() {
	            cb();
	            return false;
	        }
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name Tower
	 */
	
	exports.getUuid = __webpack_require__(254);
	exports.commentCallback= __webpack_require__(255);
	exports.comment = __webpack_require__(256);
	exports.shareConfig = __webpack_require__(257);
	exports.checkNickname = __webpack_require__(258);
	


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:tower:getUuid');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取用户设备信息
	 *
	 * 目前主要用来获得UUID
	 *
	 * 支持版本
	 * + iTower/0.4+
	 *
	 * @memberof tower
	 * @static
	 * @name getUuid
	 * @return {Promise<string | err>}
	 * @example
	 *  hbnb.tower.getUuid()
	 *      .then(function(uuid) {
	 *          uuid = {
	 *              UUID: "xxxxxxxxx"
	 *          };
	 *      })
	 *      .catch(function(err) {
	 *          err = {
	 *              status: -1
	 *          };
	 *      });
	 */
	
	module.exports = function(cb, eb) {
	    return new Promise(function(resolve, reject) {
	        _invoke('tower', 'get_uuid', {
	            callback: function(result) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('uuid is %j', result, result);
	                }
	                resolve(result.UUID);
	            },
	            errback: reject
	        });
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:tower:commentCallback');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 专题评论成功通知
	 *
	 * 专题评论成功后，通知客户端，无返回数据
	 *
	 * 支持版本
	 * + iTower/0.4+
	 *
	 * @memberof tower
	 * @static
	 * @name sendTopicCommentSuccess
	 * @return {Promise<string | err>}
	 * @example
	 *  hbnb.tower.commentCallback();
	 */
	
	module.exports = function(cb, eb) {
	    return new Promise(function(resolve, reject) {
	        _invoke('tower', 'sendTopicCommentSuccess', {
	            callback: function(result) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('comment callback result is %j', result, result);
	                }
	                resolve(result);
	            },
	            errback: reject
	        });
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:tower:comment');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开native评论输入界面
	 *
	 * 支持版本
	 * + MtLvxing/1.3+
	 *
	 * @memberof tower
	 * @static
	 * @name comment
	 * @param {Object} opts
	 * @return {Promise<object | err>}
	 * @example
	 *  hbnb.tower.comment({
	 *          type: 'simple',
	 *          placeholder: '请在此输入',
	 *          content: '评论内容',
	 *          limit: 350,
	 *          buttonText: '发送',
	 *      })
	 *      .then(function(result) {
	 *          result = {
	 *              status: 0,
	 *              content: '用户输入的内容',
	 *          }
	 *      })
	 *      .catch(function(err) {
	 *          err = {
	 *              message: "fail",
	 *              status: -1
	 *          }
	 *      });
	 */
	
	module.exports = function(data) {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('tower', 'comment', {
	            type: data.type || 'simple',
	            placeholder: data.placeholder || '',
	            content: data.content || '',
	            limit: data.limit || null,
	            buttonText: data.buttonText,
	
	            callback: function(result) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('comment result is %j', result);
	                }
	                resolve(result);
	            },
	            errback: reject
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:tower:shareConfig');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * Webview 页面分享功能
	 *
	 * 在App中将页面分享到微信、朋友圈、微博
	 *
	 * 支持版本
	 * + iTower/1.3+
	 *
	 * @memberof tower
	 * @static
	 * @name shareConfig
	 * @param {String} name
	 * @param {Object} opts
	 * @return {Promise<string | err>}
	 * @example
	 *  hbnb.tower.shareConfig('weixin', {
	 *      title: '页面名称',
	 *      desc: '内容',
	 *      imgUrl: 'http://xxx.jpg',
	 *      link: 'http://www.com',
	 *  }).then().catch();
	 */
	
	module.exports = function(name, data) {
	    return new Promise(function(resolve, reject) {
	        _invoke('tower', 'share_config_' + name, {
	            title: data.title,
	            desc: data.desc,
	            imgUrl: data.imgUrl,
	            link: data.link,
	            callback: function(result) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('share_config result is %j', result);
	                }
	                resolve(result);
	            },
	            errback: reject
	        });
	    });
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:tower:userCheckNickname');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 *
	 * 检查设置用户昵称
	 *
	 * http://wiki.sankuai.com/pages/viewpage.action?pageId=500753388
	 *
	 * 支持版本
	 * + iTower/1.3+
	 *
	 * @memberof tower
	 * @static
	 * @name checkNickname
	 * @return {Promise<string | err>}
	 * @example
	 *  hbnb.tower.checkNickname();
	 */
	
	module.exports = function() {
	    return new Promise(function(resolve, reject) {
	        _invoke('tower', 'user_check_nickname', {
	            callback: function(result) {
	                if (process.env.NODE_ENV !== 'production') {
	                    debug('check nickname callback result is %j', result);
	                }
	                resolve(result);
	            },
	            errback: reject
	        });
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name flight
	 */
	
	exports.gotoAppHomepage = __webpack_require__(260);
	
	//exports.getUser = require('./get-user.js');
	//exports.login = require('./login.js');
	
	exports.getFilter = __webpack_require__(261);
	exports.getLinkman = __webpack_require__(262);
	exports.getExpress = __webpack_require__(263);
	exports.selectCity = __webpack_require__(264);
	exports.selectDate = __webpack_require__(265);
	exports.selectRoundDate = __webpack_require__(266);
	
	//exports.alipay = require('./alipay.js');
	
	exports.gotoOrderDetail = __webpack_require__(267);


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:gotoAppHomepage');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 返回 app 首页
	 *
	 * @memberof flight
	 * @static
	 * @name gotoAppHomepage
	 * @return {Undefined}
	 * @example
	 *  hbnb.flight.gotoAppHomepage();
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    _invoke('flight', 'goto_app_homepage');
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:getFilter');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 机票筛选
	 *
	 * TODO：补全参数
	 *
	 * @memberof flight
	 * @static
	 * @name getFilter
	 * @param {Object} opts
	 * @return {Promise}
	 * @example
	 *  hbnb.flight.getFilters([
	 *  ]).then(function(data) {
	 *  });
	 */
	module.exports = function(opts) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('opts is %j', opts);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('flight', 'get_filter', {
	            options: opts,
	            callback: function(data) {
	                resolve(data);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:getLinkman');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取联系人
	 *
	 * @memberof flight
	 * @static
	 * @name getLinkman
	 * @param {int} id 默认为 '', 
	 * @return {Promise}
	 * @example
	 * hbnb.flight.getLinkman('').then(function(data) {
	 *     data = {
	           id: 'id is number',
	 *         name: 'name is string',
	 *         mobile: 'mobile is string',
	 *         email: 'mobile is string',
	 *     }
	 * });
	 */
	module.exports = function(id) {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('flight', 'get_linkman', {
	            id: id,
	            is_international: is_international,
	            callback: function(date) {
	                resolve(date);
	            }
	        });
	    });
	    return p;
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:getExpress');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取邮寄地址
	 *
	 * @memberof flight
	 * @static
	 * @name getExpress
	 * @param {siteId} siteId,
	 * @param {int} id 默认为 '',
	 * @return {Promise}
	 * @example
	 hbnb.flight.getExpress(1, '').then(function(data) {
	     data = {
	         id: 'id is number',
	         name: 'name is string',
	         mobile: 'mobile is string',
	         province: 'province is string',
	         city: 'city is string',
	         district: 'district is string',
	         address: 'address is string',
	         postCode: 'postCode is string',
	         expressAmount: 'expressAmount is string'
	     }
	 });
	 */
	module.exports = function(siteId, id) {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('flight', 'get_express', {
	            siteId: siteId,
	            id: id,
	            callback: function(date) {
	                resolve(date);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:selectCity');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择城市
	 *
	 * @memberof flight
	 * @static
	 * @name selectCity
	 * @param {String} city
	 * @return {Promise}
	 * @example
	 *  hbnb.flight.selectCity('city')
	 *      .then(function(city) {
	 *          city = {
	 *              cityName: '',
	 *              cityPinyin: ''
	 *          }
	 *      });
	 */
	module.exports = function(city) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('city is %s', city);
	    }
	    city = city || '';
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('flight', 'select_city', {
	            original: city,
	            callback: function(city) {
	                resolve(city);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:selectDate');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择日期
	 *
	 * @memberof flight
	 * @static
	 * @name selectDate
	 * @param {String} fromCity
	 * @param {String} toCity
	 * @param {String} months
	 * @param {String} original
	 * @return {Promise}
	 * @example
	 *  hbnb.flight.selectDate(
	 *      fromCity,
	 *      toCity,
	 *      months,
	 *      original
	 *  ).then(function(data) {
	 *      console.log(data);
	 *  });
	 */
	module.exports = function(fromCity, toCity, months, original) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('original is %s', original);
	        debug('from city %s', fromCity);
	        debug('to city %s', toCity);
	        debug('mounths is %s', months);
	    }
	    original = original || '';
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('flight', 'select_date', {
	            original: original,
	            months: months,
	            fromCity: fromCity,
	            toCity: toCity,
	            callback: function(date) {
	                resolve(date);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:selectRoundDate');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择日期
	 *
	 * @memberof flight
	 * @static
	 * @name selectRoundDate
	 * @return {Promise}
	 * @example
	 *  hbnb.flight.selectRoundDate().then(function(data) {
	 *      console.log(data);
	 *  });
	 */
	module.exports = function() {
	    var p = new Promise(function(resolve, reject) {
	        _invoke('flight', 'select_roundDate', {
	            callback: function(date) {
	                resolve(date);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:flight:gotoOrderDetail');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 进入机票订单详情页面
	 *
	 * 点击后退时会返回订单列表页面，再后退会返回我的页面
	 *
	 * @memberof flight
	 * @static
	 * @name gotoOrderDetail
	 * @param {String} url 订单页面地址
	 * @param {String} orderListUrl 订单列表页面地址
	 * @return {Undefined}
	 * @example
	 *  hbnb.flight.gotoOrderDetail(
	 *      'url'
	 *      'orderListUrl'
	 *  );
	 */
	module.exports = function(url, orderListUrl) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url is %s', url);
	        debug('orderListUrl is %s', orderListUrl);
	    }
	
	    _invoke('flight', 'goto_order_detail', {
	        url: url,
	        orderListUrl: orderListUrl
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name train
	 */
	
	exports.gotoOrderDetail = __webpack_require__(269);
	exports.selectDate = __webpack_require__(270);
	exports.selectStation = __webpack_require__(271);
	exports.timeTable = __webpack_require__(272);
	
	exports.selectDateStudent = __webpack_require__(273);
	exports.selectDateRush = __webpack_require__(274);
	exports.timeRange = __webpack_require__(275);
	exports.gotoOrderList = __webpack_require__(276);
	exports.multiSelect = __webpack_require__(277);
	exports.selectTrains = __webpack_require__(278);
	exports.ringtone = __webpack_require__(279);
	exports.vibrate = __webpack_require__(280);


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:gotoOrderDetail');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 进入火车票订单详情页面
	 *
	 * 点击后退时会返回订单列表页面，再后退会返回我的页面
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof train
	 * @static
	 * @name gotoOrderDetail
	 * @param {String} url 订单页面地址
	 * @param {String} orderListUrl 订单列表页面地址
	 * @return {Undefined}
	 * @example
	 *  hbnb.train.gotoOrderDetail(
	 *      'url'
	 *      'orderListUrl'
	 *  );
	 */
	module.exports = function(url, orderListUrl) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url is %s', url);
	        debug('orderListUrl is %s', orderListUrl);
	    }
	
	    _invoke('train', 'goto_order_detail', {
	        url: url,
	        orderListUrl: orderListUrl
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:selectDate');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择出行日期
	 *
	 * TODO: 补全参数和返回值
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof train
	 * @static
	 * @name selectDate
	 * @param {String} date 当前日期
	 * @param {Number} days 日期 6.2
	 * @param {String} tips 底部提示 6.2
	 * @return {Promise<date>}
	 * @example
	 *  hbnb.train.selectDate('date', '60', '预售期为60天，60天外不可购买')
	 *      .then(function(date) {
	 *          date = '2015-02-02'
	 *      });
	 */
	module.exports = function(date, days, tips) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('date is %s', date);
	        debug('days is %s', days);
	        debug('tips is %s', tips);
	    }
	
	    if (days === undefined) days = 60;
	    if (tips === undefined) tips = '预售期为60天，60天外不可购买';
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'select_date', {
	            date: date,
	            days: days,
	            tips: tips,
	            callback: function(date) {
	                resolve(date.date);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:selectStation');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择火车站
	 *
	 * TODO: 补全参数和返回值
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof train
	 * @static
	 * @name selectStation
	 * @param {String} stationCode 当前火车站
	 * @param {String} stationType 类型
	 * @return {Promise<station>}
	 * @example
	 *  hbnb.train.selectStation('code', 'type')
	 *      .then(function(station) {
	 *      });
	 */
	module.exports = function(stationCode, stationType) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('station code is %s', stationCode);
	        debug('station type is %s', stationType);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'select_station', {
	            stationCode: stationCode,
	            stationType: stationType,
	            callback: function(station) {
	                resolve(station);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:timeTable');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 展示列车时刻表
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof train
	 * @static
	 * @name timeTable
	 * @param {Object} stations
	 * @return {Undefined}
	 * @example
	 *  hbnb.train.timeTable([{
	 *      type: 'inside/outside/from/to',
	 *      value: [
	 *          'station_no',
	 *          'station_name',
	 *          'arrive_time',
	 *          'start_time'
	 *          'stopover_time'
	 *      ]
	 *  }]);
	 */
	module.exports = function(stations) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('stations is %j', stations);
	    }
	
	    _invoke('train', 'time_table', {
	        title: '列车时刻表',
	        header: ['', '车站', '到达', '发车', '停留'],
	        rows: stations
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:selectDateStudent');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择出行日期
	 *
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof train
	 * @static
	 * @name selectDateStudent
	 * @param {Object} opts 选项
	 * @return {Promise<date>}
	 * @example
	 *  hbnb.train.selectDateStudent({
	 *      date: '2015-10-19',
	 *      days: 60,
	 *      range: [{
	 *          start: '2015-10-20',
	 *          finish: '2015-12-30'
	 *      }],
	 *      tips: '预售期为60天，60天外不可购买'
	 *  })
	 *      .then(function(date) {
	 *          date = '2015-12-13'
	 *      });
	 */
	module.exports = function(opts) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('opts is %j', opts);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        opts.callback = function(date) {
	            resolve(date.date);
	        };
	        _invoke('train', 'select_date_student', opts);
	    });
	    return p;
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:selectDateRush');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择出行日期
	 *
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof train
	 * @static
	 * @name selectDateRush
	 * @param {Object} opts 选项
	 * @return {Promise<date>}
	 * @example
	 *  hbnb.train.selectDateRush({
	 *      date: '2015-10-19',
	 *      days: 60,
	 *      buyRange: [{
	 *          start: '2015-11-11',
	 *          finish: '2015-12-11'
	 *      }],
	 *      reserveRange: [{
	 *          start: '2015-12-12',
	 *          finish: '2015-12-31'
	 *      }]
	 *  })
	 *      .then(function(date) {
	 *          date = '2015-12-13'
	 *      });
	 */
	module.exports = function(opts) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('opts is %j', opts);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        opts.callback = function(date) {
	            resolve(date.date);
	        };
	        _invoke('train', 'select_date_rush', opts);
	    });
	    return p;
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:timeRange');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择出行日期
	 *
	 *
	 * @memberof train
	 * @static
	 * @name timeRange
	 * @param {Number} start 开始时间
	 * @param {Number} end 结束时间
	 * @return {Promise<date>}
	 * @example
	 *  hbnb.train.timeRange(12, 15)
	 *      .then(function(range) {
	 *          range = {
	 *              start: 0,
	 *              end: 24
	 *          }
	 *      });
	 */
	module.exports = function(start, end) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('start is %s', start);
	        debug('end is %s', end);
	    }
	
	    if (start === undefined) {
	        start = 0;
	        end = 24;
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'time_range', {
	            start: start,
	            end: end,
	            callback: function(range) {
	                resolve(range);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:gotoOrderList');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 *
	 * @memberof train
	 * @static
	 * @name gotoOrderList
	 * @param {String} url 订单列表地址
	 * @return {Undefined}
	 * @example
	 *  hbnb.train.gotoOrderList('url');
	 */
	module.exports = function(url) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('url is %s', url);
	    }
	
	    _invoke('train', 'goto_order_list', {
	        url: url
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:multiSelect');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 *
	 * @memberof train
	 * @static
	 * @name multiSelect
	 * @param {Array} menus 菜单
	 * @return {Promise}
	 * @example
	 *  hbnb.train.multiSelect([{
	 *      label: '',
	 *      value: '',
	 *      active: false
	 *  }])
	 *      .then(function(menus) {
	 *          menus = [{
	 *              label: '',
	 *              value: '',
	 *              active: false
	 *          }]
	 *      });
	 */
	module.exports = function(menus) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('menus is %j', menus);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'multi_select', {
	            menus: menus,
	            callback: function(menus) {
	                resolve(menus);
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:selectTrains');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 *
	 * @memberof train
	 * @static
	 * @name selectTrains
	 * @param {Array} menus 菜单
	 * @return {Promise}
	 * @example
	 *  hbnb.train.selectTrains([{
	 *      label: '',
	 *      subLabel: '',
	 *      description: ''
	 *      value: '',
	 *      active: false
	 *  }])
	 *      .then(function(menus) {
	 *          menus = [{
	 *              label: '',
	 *              value: '',
	 *              active: false
	 *          }]
	 *      });
	 */
	module.exports = function(menus) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('menus is %j', menus);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'select_trains', {
	            menus: menus,
	            callback: function(menus) {
	                resolve(menus);
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:ringtone');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 *
	 * @memberof train
	 * @static
	 * @name ringtone
	 * @param {Number} loop 时长
	 * @return {Promise}
	 * @example
	 *  hbnb.train.ringtone()
	 *      .then(function() {});
	 */
	module.exports = function(duration) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('duration is %s', duration);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'ringtone', {
	            duration: duration,
	            callback: function() {
	                resolve();
	            },
	            errback: function() {
	                reject();
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:train:vibrate');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 *
	 * @memberof train
	 * @static
	 * @name vibrate
	 * @param {Number} duration 震动时长
	 * @return {Promise}
	 * @example
	 *  hbnb.train.vibrate(1000)
	 *      .then(function() {});
	 */
	module.exports = function(duration) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('duration is %s', duration);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('train', 'vibrate', {
	            duration: duration,
	            callback: function() {
	                resolve();
	            },
	            errback: function() {
	                reject();
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name inject
	 */
	
	exports.load = __webpack_require__(282);
	exports.loadHTML = __webpack_require__(283);
	exports.close = __webpack_require__(284);
	exports.show = __webpack_require__(285);
	exports.runScript = __webpack_require__(286);
	
	
	exports.addStopUrl = __webpack_require__(287);
	
	exports.callback = __webpack_require__(288);


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:load');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开一个隐藏 webview
	 *
	 * 如果指定的 `name` 还不存在，会创建一个新的 webview。
	 * 如果指定的 `name` 存在，会在该 webview 上加载新的 url。
	 * 在加载页面所有静态资源请求都完成时，Promise resolve。
	 * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof inject
	 * @static
	 * @name load
	 * @param {String} name 隐藏 webview 名
	 * @param {String} url 需要加载的页面地址
	 * @return {Promise}
	 * @example
	 *  hbnb.inject.load(
	 *      'name',
	 *      'https://kyfw.12306.cn/otn/leftTicket/init'
	 *  ).then(function() {
	 *      console.log('loaded');
	 *  });
	 */
	module.exports = function(name, url) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('name is %s', name);
	        debug('url is %s', url);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('inject', 'load', {
	            name: name,
	            url: url,
	            callback: function() {
	                resolve();
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:loadHTML');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打开一个隐藏 webview
	 *
	 * 如果指定的 `name` 还不存在，会创建一个新的 webview。
	 * 在指定的 webview 中加载给定的 `html` 片段
	 * 在加载页面所有静态资源请求都完成时，Promise resolve。
	 * 但是不保证页面已经可用，业务方可自己进行 domready 等检测。
	 *
	 * 支持版本
	 * + iHotel/6.1+
	 *
	 * @memberof inject
	 * @static
	 * @name loadHTML
	 * @param {String} name 隐藏 webview 名
	 * @param {String} url 需要加载的页面地址
	 * @param {String} html 需要加载的 html 片段
	 * @return {Promise}
	 * @example
	 *  hbnb.inject.loadHTML(
	 *      'name',
	 *      'https://kyfw.12306.cn/otn/',
	 *      '<!DOCTYPE html><html><head><meta charset="utf-8" /></head><body></body></html>'
	 *  ).then(function() {
	 *      console.log('loaded');
	 *  });
	 */
	module.exports = function(name, url, html) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('name is %s', name);
	        debug('url is %s', url);
	        debug('html is %s', html);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('inject', 'load_html', {
	            name: name,
	            baseUrl: url,
	            html: html,
	            callback: function() {
	                resolve();
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:close');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 关闭隐藏 webview
	 *
	 * 主要为了减小内存占用
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof inject
	 * @static
	 * @name close
	 * @param {String} name 隐藏 webview 名
	 * @return {Promise}
	 * @example
	 *  hbnb.inject.close('name')
	 */
	module.exports = function(name) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('name is %s', name);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('inject', 'close', {
	            name: name,
	            callback: function() {
	                resolve();
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:show');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 将隐藏 webview 放到前台
	 *
	 * TODO: 验证下返回值
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof inject
	 * @static
	 * @name show
	 * @param {String} name 隐藏 webview 名
	 * @return {Promise}
	 * @example
	 *  hbnb.inject.show('name');
	 */
	module.exports = function(name) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('name is %s', name);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('inject', 'show', {
	            name: name
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:runScript');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 向隐藏 webview 注入脚本
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof inject
	 * @static
	 * @name runScript
	 * @param {String} name 隐藏 webview 名
	 * @param {String} script 注入的脚本，必须为可执行函数
	 * @param {String} param script 的参数，即 `hbnb.inject.callback` 的 `funcName`
	 * @return {Promise}
	 * @example
	 *  hbnb.inject.runScript(
	 *      'name',
	 *      'script',
	 *      'param'
	 *  ).then(function() {
	 *      console.log('loaded');
	 *  });
	 */
	module.exports = function(name, script, param) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('name is %s', name);
	        debug('script is %s', script);
	        debug('param is %s', param);
	    }
	
	    script = script.toString();
	    var p = new Promise(function(resolve, reject) {
	        _invoke('inject', 'run_script', {
	            name: name,
	            script: script,
	            param: param,
	            callback: function() {
	                resolve();
	            }
	        });
	    });
	
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:addStopUrl');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 匹配隐藏 webview 页面的 url
	 *
	 * 符合时，停止页面加载并执行脚本
	 * 只匹配一次？
	 *
	 * TODO: 支持版本
	 *
	 * 支持版本
	 * + iHotel/5.9?
	 *
	 * @memberof inject
	 * @static
	 * @name addStopUrl
	 * @param {String} name 隐藏 webview 名
	 * @param {String} pattern 用于匹配 url 的正则
	 * @param {String} script 匹配后执行的命令
	 * @return {Promise}
	 * @example
	 *  hbnb.inject.addStopUrl('name', 'pattern', 'script')
	 *      .then(function() {
	 *          console.log('loaded');
	 *      });
	 */
	module.exports = function(name, pattern, script) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('name is %s', name);
	        debug('pattern is %s', pattern);
	        debug('script is %s', script);
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('inject', 'add_stop_url', {
	            name: name,
	            pattern: pattern,
	            script: script,
	            callback: function() {
	                resolve();
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:inject:callback');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 隐藏 webview 中使用该方法返回数据
	 *
	 * 支持版本
	 * + iHotel/5.8+
	 *
	 * @memberof inject
	 * @static
	 * @name callback
	 * @param {String} fnName 回调函数名
	 * @param {String} data 返回的数据
	 * @return {Undefined}
	 * @example
	 *  hbnb.inject.callback('funcName', 'data')
	 */
	module.exports = function(fnName, data) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('fnName is %s', fnName);
	        debug('data is %s', data);
	    }
	
	    _invoke('inject', 'callback', {
	        callback: fnName,
	        param: data
	    });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function Bridge() {}
	
	var pushBack = __webpack_require__(290);
	Bridge.prototype.pushBack = Bridge.pushBack = pushBack;
	Bridge.prototype.setTitle = Bridge.setTitle = function(title, subtitle) {
	    pushBack('bridge:', 'set_webview_title', {
	        title: title,
	        subtitle: subtitle
	    });
	};
	
	module.exports = Bridge;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var env = __webpack_require__(200);
	var buildURI = __webpack_require__(204);
	
	var messageQueue = [];
	var messageQueueFetch = function() {
	    var response = messageQueue.length ? JSON.stringify(messageQueue) : '';
	    messageQueue = [];
	    if (response) return response;
	};
	window.messageQueueFetch = messageQueueFetch;
	
	var pushBack = function(protocol, name, params) {
	    params = params || {};
	    var uri = protocol + '//' + name + '?params=' + encodeURIComponent(JSON.stringify(params, buildURI.processParams));
	    if (env.platform === 'android') {
	        if (env.supportPrompt) {
	            window.prompt(uri); // eslint-disable-line no-alert
	        } else {
	            try {
	                window['MeituanHotelWebviewBridge']['sendBridgeMessage'](uri);
	            } catch (e) {}
	        }
	    } else if (env.platform === 'ios') {
	        messageQueue.push(uri);
	    } else {
	        // for debug
	        alert(uri); // eslint-disable-line no-alert
	    }
	};
	
	module.exports = pushBack;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name travel
	 */
	
	// 选择城市
	exports.selectCity = __webpack_require__(292);
	
	// 设置客户端大G埋点
	exports.setGdata = __webpack_require__(293);
	
	// 获取pos机id
	exports.getPosDeviceId = __webpack_require__(294);
	
	// 获取pos机打印状态
	exports.printerState = __webpack_require__(295);
	
	// 打印
	exports.print = __webpack_require__(296);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:travel:selectCity');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 选择城市
	 *
	 *
	 * 支持版本
	 * + iTrip/6.9+
	 *
	 *
	 * @memberof travel
	 * @static
	 * @name selectCity
	 * @param {String} city
	 * @return {Promise}
	 * @example
	 *  hbnb.travel.selectCity('city')
	 *      .then(function(city) {
	 *          city = {
	 *              cityName: '',
	 *              cityID: ''
	 *          }
	 *      });
	 */
	module.exports = function(city) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('city is %s', city);
	    }
	    city = city || '';
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('travel', 'select_city', {
	            original: city,
	            callback: function(city) {
	                resolve(city);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:travel:setGdata');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 设置客户端大G埋点
	 *
	 *
	 * 支持版本
	 * + iTrip/6.9+
	 *
	 *
	 * @memberof travel
	 * @static
	 * @name setGdata
	 * @param {String} bigG
	 * @return {Promise}
	 * @example
	 *  hbnb.travel.setGdata('bigG')
	 *      .then(function(bigG) {
	 *          bigG = {
	 *              status: 1          //0: 失败；1:成功
	 *          }
	 *      });
	 */
	module.exports = function(bigG) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('bigG is %s', bigG);
	    }
	    bigG = bigG || '';
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('travel', 'set_g_data', {
	            gdata: bigG,
	            callback: function(bigG) {
	                resolve(bigG);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:travelmerchant:get_pos_deviceid');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取pos 设备id
	 *
	 * @memberof travel
	 * @static
	 * @name getPosDeviceId
	 * @return {Promise}
	 * @example
	 *  hbnb.travel.getPosDeviceId()
	 *      .then(function(resp) {
	 *          resp = {
	 *              deviceid: "xxxxx"//如果返回deviceid为空，则表示不是pos机
	 *          }
	 *      });
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('getDeviceId  %s');
	    }
	    var p = new Promise(function(resolve, reject) {
	        _invoke('travelmerchant', 'get_pos_deviceid', {
	            callback: function(resp) {
	                resolve(resp);
	            },
	            complete: function (resp) {
	                reject(resp);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:travelmerchant:check_printer_state');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 打印状态
	 *
	 * @memberof travel
	 * @static
	 * @name check_printer_state
	 * @return {Promise}
	 * @example
	 *  hbnb.travel.printerState()
	 *      .then(function(resp) {
	 *          resp = {
	 *              status:""//一共五种状态：OK,NO_PAPER（缺纸）,HIGH_TEMP（过热）,ERROR(过热且缺纸),UNKNOW(未知)
	 *          }
	 *      });
	 */
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        //debug('city is %s');
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('travelmerchant', 'check_printer_state', {
	            callback: function(resp) {
	                resolve(resp);
	            },
	            complete: function (resp) {
	                reject(resp);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:travelmerchant:print');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取pos 设备id
	 *
	 * @memberof travel
	 * @static
	 * @name print
	 * @param {Array} content
	 * @return {Promise}
	 * @example
	 *  hbnb.travel.print([
	 *    {
	        "content":"xxx",
	        "gravity":"left", //对齐 left/right/center
	        "textsize":"small" //字体大小  small/medium/large
	      }
	 *  ])
	 *      .then(function(resp) {
	 *          resp = {
	 *              status: 0,
	 *              message: '成功'
	 *          }
	 *      });
	 */
	module.exports = function(content) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('content is %s', content);
	    }
	    content = content || [];
	    var p = new Promise(function(resolve, reject) {
	        _invoke('travelmerchant', 'print', {
	            content: content,
	            callback: function(resp) {
	                resolve(resp);
	            },
	            complete: function (resp) {
	                reject(resp);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name env
	 */
	
	exports.getPageEnv = __webpack_require__(298);


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:env:getPageEnv');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * 获取当前页面变量
	 *
	 * 支持版本
	 * + iHotel/6.3
	 *
	 * @memberof env
	 * @static
	 * @name getPageEnv
	 * @return {Promise<version>}
	 * @example
	 *  hbnb.env.getPageEnv()
	 *      .then(function(env) {
	 *      });
	 */
	
	module.exports = function() {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	
	    var p = new Promise(function(resolve, reject) {
	        _invoke('env', 'get_page_env', {
	            callback: function(env) {
	                resolve(env);
	            },
	            errback: function(err) {
	                reject(err);
	            }
	        });
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @name share
	 */
	
	// 激活导航栏分享按钮
	exports.activeNavButton = __webpack_require__(300);
	
	// 禁用导航栏分享按钮
	exports.disableNavButton = __webpack_require__(301);
	
	// 调用本地分享
	exports.callLocal = __webpack_require__(302);
	
	
	
	


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:share:activeNavButton');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * share.activeNavButton 激活导航栏分享按钮
	 *
	 * 支持版本
	 * + iHotel/7.0+
	  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现, ios失败没有回调通知
	 * @memberof share
	 * @static
	 * @name activeNavButton
	 * @param {Array} channel 渠道
	 * @param {Object} conf 配置信息
	 * @return {Undefined}
	 * @example
	 *  hbnb.share.activeNavButton(['weixin','weibo','sinaWeibo'], {
	        content: '分享内容',
	        detailURL: 'http://i.meituan.com/',
	        imageURL: 'http://p1.meituan.net/codeman/799087624091d1d43768b7da396d4a122532.png',
	        title: '分享标题'
	    });
	 */
	
	module.exports = function(channelParam, configParam, successCallback, failCallback) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('param channelParam is %j', channelParam);
	        debug('param configParam is %j', configParam);
	    }
	    var p = new Promise(function(resolve, reject) {
	        var data = {
	            'sinaweibo': 1,
	            'qzone': 2,
	            'qqweibo': 4,
	            'renren': 8,
	            'kaixin': 16,
	            'sms': 32,
	            'email': 64,
	            'weixin': 128,
	            'weixinfriends': 256,
	            'qqclient': 512,
	            'all':-1
	        };
	        var params = {};
	        var channel = channelParam || [];
	        var config = configParam || {};
	        var channelNumber = 0;
	        var i;
	        var num;
	        var d;
	        if(channel && Object.prototype.toString.call(channel) == "[object Array]"){
	            for (var i = 0, len = channel.length; i < len; i++){
	                d = channel[i];
	                num = data[d.toLowerCase()];
	                channelNumber += num;
	                if(config['content_' + d]){
	                    params['content_' + num] = config['content_' + d];
	                }
	            }
	            if (config.cid) {
	                params.cid = config.cid;
	            }
	            params.channel = channelNumber;
	            params.content =  config.content;
	            params.detailURL = config.detailURL;
	            params.imageURL =  config.imageURL;
	            params.title = config.title;
	            params.callback = function (returnData) {
	                if (returnData && returnData.status === 'COMPLETE') {
	                    if (typeof successCallback === 'function') {
	                        successCallback(returnData)
	                    }
	                } else {
	                    if (typeof failCallback === 'function') {
	                        failCallback(returnData)
	                    }
	                }
	                resolve(returnData);
	                return false;
	            };
	            _invoke('share', 'enable_nav_share_button', params);
	        }
	
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:share:disableNavButton');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * share.disableNavButton 禁用导航栏分享按钮
	 *
	 * 支持版本
	 * + iHotel/7.0+
	 *
	 * @memberof share
	 * @static
	 * @name disableNavButton
	 * @return {Undefined}
	 * @example
	 *  hbnb.share.disableNavButton();
	 */
	
	module.exports = function() {
		if (process.env.NODE_ENV !== 'production') {
	        debug('called');
	    }
	    var p = new Promise(function(resolve, reject) {
	    	_invoke('share', 'disable_nav_share_button', {});
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var debug;
	if (process.env.NODE_ENV !== 'production') {
	    debug = __webpack_require__(191)('hbnb:module:share:callLocal');
	}
	
	var _invoke = __webpack_require__(194);
	
	/**
	 * share.callLocal 激活导航栏分享按钮
	 *
	 * 支持版本
	 * + iHotel/7.0+
	  * 此版本不支持successCallback,failCallback 客户端说排期比较紧张，7.1版本实现
	 * @memberof share
	 * @static
	 * @name callLocal
	 * @param {Array} channel 渠道
	 * @param {Object} conf 配置信息
	 * @return {Undefined}
	 * @example
	 *  hbnb.share.callLocal(['weixin','weibo','sinaWeibo'], {
	        content: '分享内容',
	        detailURL: 'http://i.meituan.com/',
	        imageURL: 'http://p1.meituan.net/codeman/799087624091d1d43768b7da396d4a122532.png',
	        title: '分享标题'
	    });
	 */
	
	module.exports = function(channelParam, configParam, successCallback, failCallback) {
	    if (process.env.NODE_ENV !== 'production') {
	        debug('param channelParam is %j', channelParam);
	        debug('param configParam is %j', configParam);
	    }
	    var p = new Promise(function(resolve, reject) {
	        var data = {
	            'sinaweibo': 1,
	            'qzone': 2,
	            'qqweibo': 4,
	            'renren': 8,
	            'kaixin': 16,
	            'sms': 32,
	            'email': 64,
	            'weixin': 128,
	            'weixinfriends': 256,
	            'qqclient': 512,
	            'all':-1
	        };
	        var params = {};
	        var channel = channelParam || [];
	        var config = configParam || {};
	        var channelNumber = 0;
	        var i;
	        var num;
	        var d;
	
	        if(channel && Object.prototype.toString.call(channel) == "[object Array]"){
	            for (var i = 0, len = channel.length; i < len; i++){
	                d = channel[i];
	                num = data[d.toLowerCase()];
	                channelNumber += num;
	                if(config['content_' + d]){
	                    params['content_' + num] = config['content_' + d];
	                }
	            }
	            if (config.cid) {
	                params.cid = config.cid;
	            }
	            params.channel = channelNumber;
	            params.content =  config.content;
	            params.detailURL = config.detailURL;
	            params.imageURL =  config.imageURL;
	            params.title = config.title;
	            params.callback = function (returnData) {
	                if (returnData && returnData.status === 'COMPLETE') {
	                    if (typeof successCallback === 'function') {
	                        successCallback(returnData)
	                    }
	                } else {
	                    if (typeof failCallback === 'function') {
	                        failCallback(returnData)
	                    }
	                }
	                resolve(returnData);
	                return false;
	            };
	            _invoke('share', 'common_share', params);
	        }
	    });
	    return p;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 303 */
/***/ function(module, exports) {

	module.exports = {
	  "core.HBNBVersion": {
	    "params": [],
	    "memberof": "core",
	    "name": "HBNBVersion",
	    "return": "Promise"
	  },
	  "core.OS": {
	    "params": [],
	    "memberof": "core",
	    "name": "OS",
	    "return": "Promise"
	  },
	  "core.supportApis": {
	    "params": [],
	    "memberof": "core",
	    "name": "supportApis",
	    "return": "Promise"
	  },
	  "account.getUser": {
	    "params": [],
	    "memberof": "account",
	    "name": "getUser",
	    "return": "Promise"
	  },
	  "account.login": {
	    "params": [],
	    "memberof": "account",
	    "name": "login",
	    "return": "Promise"
	  },
	  "account.mobileLogin": {
	    "params": [
	      "mobile",
	      "code"
	    ],
	    "memberof": "account",
	    "name": "mobileLogin",
	    "return": "Promise"
	  },
	  "account.sendMobileLoginCode": {
	    "params": [
	      "mobile"
	    ],
	    "memberof": "account",
	    "name": "sendMobileLoginCode",
	    "return": "Promise"
	  },
	  "log.mge": {
	    "params": [
	      "cid",
	      "act",
	      "val",
	      "lab"
	    ],
	    "memberof": "log",
	    "name": "mge",
	    "return": "Undefined"
	  },
	  "network.request": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "network",
	    "name": "request",
	    "return": "Promise"
	  },
	  "network.sendSms": {
	    "params": [],
	    "memberof": "network",
	    "name": "sendSms"
	  },
	  "pay.getFingerprint": {
	    "params": [],
	    "memberof": "pay",
	    "name": "getFingerprint",
	    "return": "Promise"
	  },
	  "pay.payment": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "pay",
	    "name": "payment",
	    "return": "Promise"
	  },
	  "position.getCity": {
	    "params": [],
	    "memberof": "position",
	    "name": "getCity",
	    "return": "Promise"
	  },
	  "storage.getItem": {
	    "params": [],
	    "memberof": "storage",
	    "name": "getItem",
	    "return": "Promise"
	  },
	  "storage.removeItem": {
	    "params": [],
	    "memberof": "storage",
	    "name": "removeItem",
	    "return": "Undefined"
	  },
	  "storage.setItem": {
	    "params": [],
	    "memberof": "storage",
	    "name": "setItem",
	    "return": "Undefined"
	  },
	  "storage.setResult": {
	    "params": [
	      "obj"
	    ],
	    "memberof": "storage",
	    "name": "setResult",
	    "return": "Undefined"
	  },
	  "thirdApps.installed": {
	    "params": [
	      "appName"
	    ],
	    "memberof": "thirdApps",
	    "name": "installed",
	    "return": "Promise"
	  },
	  "ui.alert": {
	    "params": [
	      "message",
	      "title",
	      "button"
	    ],
	    "memberof": "ui",
	    "name": "alert",
	    "return": "Undefined"
	  },
	  "ui.autoLock": {
	    "params": [
	      "enable"
	    ],
	    "memberof": "ui",
	    "name": "autoLock",
	    "return": "Undefined"
	  },
	  "ui.confirm": {
	    "params": [
	      "message",
	      "title",
	      "leftButton",
	      "rightButton"
	    ],
	    "memberof": "ui",
	    "name": "confirm",
	    "return": "Undefined"
	  },
	  "ui.loadingStart": {
	    "params": [],
	    "memberof": "ui",
	    "name": "loadingStart",
	    "return": "Undefined"
	  },
	  "ui.loadingStop": {
	    "params": [],
	    "memberof": "ui",
	    "name": "loadingStop",
	    "return": "Undefined"
	  },
	  "ui.options": {
	    "params": [
	      "menus",
	      "cancel"
	    ],
	    "memberof": "ui",
	    "name": "options",
	    "return": "Undefined"
	  },
	  "ui.selectDate": {
	    "params": [
	      "current",
	      "maxDate",
	      "minDate"
	    ],
	    "memberof": "ui",
	    "name": "selectDate",
	    "return": "Promise"
	  },
	  "ui.singleSelect": {
	    "params": [
	      "menus"
	    ],
	    "memberof": "ui",
	    "name": "singleSelect",
	    "return": "Undefined"
	  },
	  "ui.toast": {
	    "params": [
	      "message",
	      "time"
	    ],
	    "memberof": "ui",
	    "name": "toast",
	    "return": "Undefined"
	  },
	  "webview.back": {
	    "params": [],
	    "memberof": "webview",
	    "name": "back",
	    "return": "Undefined"
	  },
	  "webview.closeAll": {
	    "params": [
	      "urls"
	    ],
	    "memberof": "webview",
	    "name": "closeAll",
	    "return": "Undefined"
	  },
	  "webview.close": {
	    "params": [],
	    "memberof": "webview",
	    "name": "close",
	    "return": "Undefined"
	  },
	  "webview.dismiss": {
	    "params": [],
	    "memberof": "webview",
	    "name": "dismiss"
	  },
	  "webview.modal": {
	    "params": [
	      "url"
	    ],
	    "memberof": "webview",
	    "name": "modal",
	    "return": "Undefined"
	  },
	  "webview.open": {
	    "params": [
	      "url"
	    ],
	    "memberof": "webview",
	    "name": "open",
	    "return": "Undefined"
	  },
	  "webview.setBackAction": {
	    "params": [
	      "cb"
	    ],
	    "memberof": "webview",
	    "name": "setBackAction",
	    "return": "Undefined"
	  },
	  "webview.setComplexTitle": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "webview",
	    "name": "setComplexTitle",
	    "return": "Undefined"
	  },
	  "webview.setMenus": {
	    "params": [
	      "menus"
	    ],
	    "memberof": "webview",
	    "name": "setMenus",
	    "return": "Undefined"
	  },
	  "webview.setTitle": {
	    "params": [
	      "title"
	    ],
	    "memberof": "webview",
	    "name": "setTitle",
	    "return": "Undefined"
	  },
	  "tower.sendTopicCommentSuccess": {
	    "params": [],
	    "memberof": "tower",
	    "name": "sendTopicCommentSuccess",
	    "return": "Promise"
	  },
	  "tower.comment": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "tower",
	    "name": "comment",
	    "return": "Promise"
	  },
	  "tower.getUuid": {
	    "params": [],
	    "memberof": "tower",
	    "name": "getUuid",
	    "return": "Promise"
	  },
	  "tower.shareConfig": {
	    "params": [
	      "name",
	      "opts"
	    ],
	    "memberof": "tower",
	    "name": "shareConfig",
	    "return": "Promise"
	  },
	  "tower.checkNickname": {
	    "params": [],
	    "memberof": "tower",
	    "name": "checkNickname",
	    "return": "Promise"
	  },
	  "flight.alipay": {
	    "params": [
	      "orderId",
	      "payURL",
	      "returnURL"
	    ],
	    "memberof": "flight",
	    "name": "alipay",
	    "return": "Promise"
	  },
	  "flight.getExpress": {
	    "params": [
	      "siteId",
	      "id"
	    ],
	    "memberof": "flight",
	    "name": "getExpress",
	    "return": "Promise"
	  },
	  "flight.getFilter": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "flight",
	    "name": "getFilter",
	    "return": "Promise"
	  },
	  "flight.getLinkman": {
	    "params": [
	      "id"
	    ],
	    "memberof": "flight",
	    "name": "getLinkman",
	    "return": "Promise"
	  },
	  "flight.getUser": {
	    "params": [],
	    "memberof": "flight",
	    "name": "getUser",
	    "return": "Promise"
	  },
	  "flight.gotoAppHomepage": {
	    "params": [],
	    "memberof": "flight",
	    "name": "gotoAppHomepage",
	    "return": "Undefined"
	  },
	  "flight.gotoOrderDetail": {
	    "params": [
	      "url",
	      "orderListUrl"
	    ],
	    "memberof": "flight",
	    "name": "gotoOrderDetail",
	    "return": "Undefined"
	  },
	  "flight.login": {
	    "params": [],
	    "memberof": "flight",
	    "name": "login",
	    "return": "Promise"
	  },
	  "flight.selectCity": {
	    "params": [
	      "city"
	    ],
	    "memberof": "flight",
	    "name": "selectCity",
	    "return": "Promise"
	  },
	  "flight.selectDate": {
	    "params": [
	      "fromCity",
	      "toCity",
	      "months",
	      "original"
	    ],
	    "memberof": "flight",
	    "name": "selectDate",
	    "return": "Promise"
	  },
	  "flight.selectRoundDate": {
	    "params": [],
	    "memberof": "flight",
	    "name": "selectRoundDate",
	    "return": "Promise"
	  },
	  "train.gotoOrderDetail": {
	    "params": [
	      "url",
	      "orderListUrl"
	    ],
	    "memberof": "train",
	    "name": "gotoOrderDetail",
	    "return": "Undefined"
	  },
	  "train.gotoOrderList": {
	    "params": [
	      "url"
	    ],
	    "memberof": "train",
	    "name": "gotoOrderList",
	    "return": "Undefined"
	  },
	  "train.multiSelect": {
	    "params": [
	      "menus"
	    ],
	    "memberof": "train",
	    "name": "multiSelect",
	    "return": "Promise"
	  },
	  "train.ringtone": {
	    "params": [
	      "loop"
	    ],
	    "memberof": "train",
	    "name": "ringtone",
	    "return": "Promise"
	  },
	  "train.selectDateRush": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "train",
	    "name": "selectDateRush",
	    "return": "Promise"
	  },
	  "train.selectDateStudent": {
	    "params": [
	      "opts"
	    ],
	    "memberof": "train",
	    "name": "selectDateStudent",
	    "return": "Promise"
	  },
	  "train.selectDate": {
	    "params": [
	      "date",
	      "days",
	      "tips"
	    ],
	    "memberof": "train",
	    "name": "selectDate",
	    "return": "Promise"
	  },
	  "train.selectStation": {
	    "params": [
	      "stationCode",
	      "stationType"
	    ],
	    "memberof": "train",
	    "name": "selectStation",
	    "return": "Promise"
	  },
	  "train.selectTrains": {
	    "params": [
	      "menus"
	    ],
	    "memberof": "train",
	    "name": "selectTrains",
	    "return": "Promise"
	  },
	  "train.timeRange": {
	    "params": [
	      "start",
	      "end"
	    ],
	    "memberof": "train",
	    "name": "timeRange",
	    "return": "Promise"
	  },
	  "train.timeTable": {
	    "params": [
	      "stations"
	    ],
	    "memberof": "train",
	    "name": "timeTable",
	    "return": "Undefined"
	  },
	  "train.vibrate": {
	    "params": [
	      "duration"
	    ],
	    "memberof": "train",
	    "name": "vibrate",
	    "return": "Promise"
	  },
	  "inject.addStopUrl": {
	    "params": [
	      "name",
	      "pattern",
	      "script"
	    ],
	    "memberof": "inject",
	    "name": "addStopUrl",
	    "return": "Promise"
	  },
	  "inject.callback": {
	    "params": [
	      "fnName",
	      "data"
	    ],
	    "memberof": "inject",
	    "name": "callback",
	    "return": "Undefined"
	  },
	  "inject.close": {
	    "params": [
	      "name"
	    ],
	    "memberof": "inject",
	    "name": "close",
	    "return": "Promise"
	  },
	  "inject.loadHTML": {
	    "params": [
	      "name",
	      "url",
	      "html"
	    ],
	    "memberof": "inject",
	    "name": "loadHTML",
	    "return": "Promise"
	  },
	  "inject.load": {
	    "params": [
	      "name",
	      "url"
	    ],
	    "memberof": "inject",
	    "name": "load",
	    "return": "Promise"
	  },
	  "inject.runScript": {
	    "params": [
	      "name",
	      "script",
	      "param"
	    ],
	    "memberof": "inject",
	    "name": "runScript",
	    "return": "Promise"
	  },
	  "inject.show": {
	    "params": [
	      "name"
	    ],
	    "memberof": "inject",
	    "name": "show",
	    "return": "Promise"
	  },
	  "travel.getPosDeviceId": {
	    "params": [],
	    "memberof": "travel",
	    "name": "getPosDeviceId",
	    "return": "Promise"
	  },
	  "travel.print": {
	    "params": [
	      "content"
	    ],
	    "memberof": "travel",
	    "name": "print",
	    "return": "Promise"
	  },
	  "travel.check_printer_state": {
	    "params": [],
	    "memberof": "travel",
	    "name": "check_printer_state",
	    "return": "Promise"
	  },
	  "travel.selectCity": {
	    "params": [
	      "city"
	    ],
	    "memberof": "travel",
	    "name": "selectCity",
	    "return": "Promise"
	  },
	  "travel.setGdata": {
	    "params": [
	      "bigG"
	    ],
	    "memberof": "travel",
	    "name": "setGdata",
	    "return": "Promise"
	  },
	  "env.getPageEnv": {
	    "params": [],
	    "memberof": "env",
	    "name": "getPageEnv",
	    "return": "Promise"
	  },
	  "share.activeNavButton": {
	    "params": [
	      "channel",
	      "conf"
	    ],
	    "memberof": "share",
	    "name": "activeNavButton",
	    "return": "Undefined"
	  },
	  "share.callLocal": {
	    "params": [
	      "channel",
	      "conf"
	    ],
	    "memberof": "share",
	    "name": "callLocal",
	    "return": "Undefined"
	  },
	  "share.disableNavButton": {
	    "params": [],
	    "memberof": "share",
	    "name": "disableNavButton",
	    "return": "Undefined"
	  }
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var Titans = __webpack_require__(176);
	
	// promisify
	(function(){
	  var promisify = __webpack_require__(123);
	  promisify(Titans);
	})();
	
	(function(){
	  var logStat = __webpack_require__(174)
	  var version = __webpack_require__(118)
	  // 统计Titans调用次数
	  logStat("titans", version);
	})();
	
	module.exports = Titans;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var ready = __webpack_require__(306)
	var mixin = __webpack_require__(117)
	var noop = function () {}
	var win = typeof window !== 'undefined' ? window : {}
	var Promise = win.Promise || __webpack_require__(124)
	var wx = function () {
	  return window.wx || ( function (ref) {
	    var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	    return fail({error: -1, msg: 'wx sdk is not loaded'});
	  } )
	}
	
	/**
	 * 微信官方文档
	 * http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html#.E6.A6.82.E8.BF.B0
	 * **/
	
	/** constants **/
	var WECHAT_FRIENDS = 'WCF'
	var WECHAT_TIMELINE = 'WCT'
	var QQ = 'QQ'
	var QZONE = 'QZONE'
	/** constants **/
	
	function uploadImages (localIds) {
	  var ids = localIds.concat()
	  var photos = []
	  return new Promise(function (resolve, reject) {
	    function uploadSingleImage () {
	      var localId = ids.shift()
	      if (!localId) resolve(photos)
	      wx().uploadImage({
	        localId: localId,
	        success: function (photo) {
	          photos.push(photo)
	          uploadSingleImage()
	        },
	        fail: reject
	      })
	    }
	    uploadSingleImage()
	  })
	}
	
	var KNB = {
	  use: function (name, options) {
	    if (KNB[name] && !KNB[name].NOTIMPLEMENTED) return KNB[name](options)
	    if (wx()[name]) wx()[name](options)
	  },
	
	  getUA: __webpack_require__(119),
	
	  isApiSupported: function (ref) {
	    var apiName = ref.apiName;
	    var success = ref.success; if ( success === void 0 ) success = noop;
	
	    return success(!!(KNB[apiName] && !KNB[apiName].NOTIMPLEMENTED))
	  },
	  previewImage: function (config) { return wx().previewImage(config); },
	  // 建议只用count
	  chooseImage: function (ref) {
	    var count = ref.count;
	    var success = ref.success; if ( success === void 0 ) success = noop;
	    var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	    wx().chooseImage({
	      count: count,
	      success: function (res) {
	        success({
	          photoInfos: res.localIds.map(function (id) { return ({localId: id}); })
	        })
	      },
	    fail: fail})
	  },
	  uploadImage: function (config) {
	    var localIds = config.localIds; if ( localIds === void 0 ) localIds = [];
	    var success = config.success; if ( success === void 0 ) success = noop;
	    var fail = config.fail; if ( fail === void 0 ) fail = noop;
	
	    uploadImages(localIds)
	      .then(function (photos) {
	        success({
	          photoInfos: photos.map(function (photo) { return mixin(photo, {picUrl: photo.serverId, picKey: photo.serverId}); }
	          )
	        })
	      })
	      .catch(fail)
	  },
	  downloadImage: function (config) { return wx().downloadImage(config); },
	
	  getNetworkType: function (config) { return wx().getNetworkType(config); },
	  closeWindow: function (config) { return wx().closeWindow(config); },
	
	  // constants
	  share: {
	    WECHAT_FRIENDS: WECHAT_FRIENDS,
	    WECHAT_TIMELINE: WECHAT_TIMELINE,
	    QQ: QQ,
	  QZONE: QZONE},
	
	  // share
	  // mapping from
	  // [knb api]
	  //   title:"分享标题",
	  //   desc:"分享描述",
	  //   image:"http://www.dpfile.com/toevent/img/16d05c85a71b135edc39d197273746d6.png",
	  //   url:"http://m.dianping.com",
	  //   channel: [KNB.share.WECHAT_FRIENDS,KNB.share.WECHAT_TIMELINE],
	  // to
	  // [wx api]
	  //   title: '', // 分享标题
	  //   desc: '', //分享描述
	  //   link: '', // 分享链接
	  //   imgUrl: '', // 分享图标
	  configShare: function (ref) {
	    var title = ref.title;
	    var desc = ref.desc; if ( desc === void 0 ) desc = '';
	    var image = ref.image; if ( image === void 0 ) image = '';
	    var url = ref.url; if ( url === void 0 ) url = '';
	    var channel = ref.channel; if ( channel === void 0 ) channel = [WECHAT_FRIENDS, WECHAT_TIMELINE, QQ, QZONE];
	    var success = ref.success; if ( success === void 0 ) success = noop;
	    var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	    channel
	      .map(function (c) {
	        switch (c) {
	          case KNB.share.WECHAT_FRIENDS:
	            return function (x) { return wx().onMenuShareAppMessage(x); }
	          case KNB.share.WECHAT_TIMELINE:
	            return function (x) { return wx().onMenuShareTimeline(x); }
	          case KNB.share.QQ:
	            return function (x) { return wx().onMenuShareQQ(x); }
	          case KNB.share.QZONE:
	            return function (x) { return wx().onMenuShareQZone(x); }
	        }
	      })
	      .filter(Boolean)
	      .forEach(function (configure) {
	        configure({
	          title: title,
	          desc: desc,
	          link: url,
	          imgUrl: image,
	          success: success,
	        fail: fail})
	      })
	  },
	
	  getLocation: function (ref) {
	    var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	    var success = ref.success; if ( success === void 0 ) success = noop;
	
	    wx().getLocation({
	      fail: fail,
	      success: function (res) {
	        success({
	          lat: res.latitude,
	          lng: res.longitude
	        })
	      }
	    })
	  }
	}
	
	// 所有API调用，自动放入ready里。
	// 如果用户没有主动调KNB.ready，这里会自动调起鉴权。
	var apis = __webpack_require__(116)
	apis
	  .concat('use')
	  .forEach(function (name) {
	    if (name === 'config') return
	    var isImplemented = KNB[name]
	    var method = KNB[name] || ( function (ref) {
	      var fail = ref.fail; if ( fail === void 0 ) fail = noop;
	
	      return fail({error: -1, msg: ("API [" + name + "] is not implemented")});
	    } )
	    if (typeof method !== 'function') return
	    KNB[name] = function (a, b, c) {
	      KNB.ready(function () { return method(a, b, c); })
	    }
	    if (!isImplemented) KNB[name].NOTIMPLEMENTED = true
	    KNB[name].getSourceCode = function () { return method.toString(); } // for debug reason
	  })
	
	if (typeof window !== 'undefined') {
	  var version = __webpack_require__(118);
	  var logEvent = __webpack_require__(174);
	  // 统计wx调用次数
	  logEvent("wx", version);
	}
	
	KNB.ready = ready; // 增加ready函数
	module.exports = KNB


/***/ },
/* 306 */
/***/ function(module, exports) {

	var defaults = {
	  //url: '//res.wx.qq.com/open/js/jweixin-1.0.0.js', // 微信JSSDK的URL
	  url: '//s0.meituan.net/bs/delivr/0315c86:jsm/lib/weixin/jweixin-1.1.0.js', // 微信JSSDK的URL,由于CSP原因，使用meituan.net域下
	  configHostnameMap: [ // 配置wx的js与域名的映射关系
	    { pattern: /dianping.com$/, host: 'cps.dianping.com' },
	    { pattern: /51ping.com$/, host: 'tcps.51ping.com' },
	    { pattern: /.meituan.com$/, host: 'i.meituan.com/firework/api'}
	  ],
	  config: { // 默认配置
	    debug: false
	  },
	  onError: function (msg) {
	    console && console.error && console.error(msg);
	  }
	};
	
	
	var isLoaded = false;
	var isLoading = false;
	var callbackQueue = [];
	var loadScript = function (src, onload) {
	  var script = document.createElement('script');
	  script.src = src;
	  script.onload = onload;
	  document.getElementsByTagName('head')[0].appendChild(script);
	};
	var apis = [
	  'checkJsApi', 
	
	  'onMenuShareTimeline', 
	  'onMenuShareAppMessage', 
	  'onMenuShareQQ', 
	  'onMenuShareWeibo',
	  'onMenuShareQZone',
	
	  'startRecord',
	  'stopRecord',
	  'onVoiceRecordEnd',
	  'playVoice',
	  'pauseVoice',
	  'stopVoice',
	  'onVoicePlayEnd',
	  'uploadVoice',
	  'downloadVoice',
	
	  'chooseImage',
	  'previewImage',
	  'uploadImage',
	  'downloadImage',
	
	  'translateVoice',
	  'getNetworkType',
	  'openLocation',
	  'getLocation',
	  'hideOptionMenu',
	  'showOptionMenu',
	  'hideMenuItems',
	  'showMenuItems',
	  'hideAllNonBaseMenuItem',
	  'showAllNonBaseMenuItem',
	  'closeWindow',
	  'scanQRCode',
	  'chooseWXPay',
	  'openProductSpecificView',
	  'addCard',
	  'chooseCard',
	  'openCard'
	];
	
	function ready(callback) {
	  if (isLoaded) return callback();
	
	  var options = defaults;
	  // 如果querystring中包含debug:wx字段，说明要开启debug模式
	  if (/[\?&]debug:wx($|&)/.test(window.location.search)) options.config.debug = true;
	
	  callbackQueue.push(callback);
	
	  if (isLoading) return;
	
	  isLoading = true;
	
	  var authHost = function() {
	    var list = options.configHostnameMap;
	    for (var i = 0; i < list.length; i++) {
	      if (list[i].pattern.test(location.hostname)) return list[i].host;
	    }
	    return list[0].host;
	  }();
	  var useMeituanAuth = authHost.indexOf('i.meituan.com') > -1;
	
	  var configSearch = "?apis=" + (apis.join(',')) + "&" +
	    Object.keys(options.config).map(function (name) { return ((encodeURIComponent(name)) + "=" + (encodeURIComponent(options.config[name]))); }).join('&');
	
	  function goAuth() {
	    var doCallback = function () {
	      isLoaded = true;
	      window.wx.error(function(e) {
	        window.__KNB_ON_WX_ERROR && window.__KNB_ON_WX_ERROR(e);
	      });
	      var queue = callbackQueue.concat();
	      callbackQueue = []; // clear queue
	      window.wx.ready(function () {
	        queue.forEach(function (cb) { return cb(); });
	      });
	    };
	
	    if (useMeituanAuth) {
	      window.jsonpWXLoader = function (res) {
	        var config = {
	          debug: options.config.debug,
	          appId: 'wxc72f01f43da0083b',
	          timestamp: res.data.timestamp,
	          signature: res.data.signature,
	          nonceStr: res.data.nonceStr,
	          jsApiList: apis
	        };
	        window.wx.config(config);
	        doCallback();
	      };
	      return loadScript('//' + authHost + '/weixin/config.json?url=' + encodeURIComponent(location.href) + '&callback=jsonpWXLoader');
	    }
	    loadScript('//' + authHost + '/weixin/config.js' + configSearch, doCallback);
	  }
	
	  if (window.wx) {
	    goAuth();
	  } else {
	    loadScript(options.url, goAuth);
	  }
	}
	
	module.exports = ready;


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var Whereami = __webpack_require__(308);
	var ua = __webpack_require__(113)();
	var fetchJsonp = __webpack_require__(112);
	var Ur = __webpack_require__(324);
	
	
	var middleIp = {
		cache:false,
		cbQueue:[],
		push:function(cb){
			var self = this;
			self.cbQueue.push(cb);
			self.fetch();
			// 重载
			self.push = function(_cb){
				self.cbQueue.push(_cb);
				if(self.cache)
					self.action();
			}
		},
		fetch:function(){
			var self = this;
			getCityIdByIp(function(data){
				self.cache = data;
				self.lock = true;
				self.action();
			});
		},
		action:function(){
			var self = this;
			var cb;
			while(cb = self.cbQueue.shift()){
				cb(self.cache);
			}
		}
	}
	
	function getCityIdByIp(cb){
		fetchJsonp(Ur("//promo.dianping.com/mtlist/getIpInfo.jsonp")).then(function(response){
	      try {
	        return response.json();
	      } catch (e) {	            	
	      }
	    }).then(function(res){
	    	if(res.code == 200){
	    		cb({
			    	cityId:res.data
			    });
	    	}else{
	    		cb({
			    	cityId:""
			    });
	    	}
	    });
	}
	
	function _action(city,cb){
		city = city || {};
		Whereami(function(res){
			var config = {
				lng:res.lng,
		   		lat:res.lat
			}
			if(city.cityId){
		        config.cityId = city.cityId;
		    }else{
		        config.cityId = res.city&&res.city.cityid || "";
		    }
		   	cb(config);
		},function(){
			var timer = false;
			if(city.type){
				cb({
					cityId:city.cityId
				});
			}else{
				middleIp.push(function(data){
					!timer&&cb(data);
					timer = true;
				});
				setTimeout(function(){
					!timer&&cb({
						cityId:""
					});
					timer = true;
				},2500);
			}
		});
	}
	module.exports =  function(cb,env,options){
		// env 兼容处理
		env = env || ua.source;
	
		var config = {
			timeout: 3000,
		    city:true,
		    cityType:env,
		    wxAutoConfig:ua.type == "weixin" ? true : false
		}
		options = options || {}
		if(options.useTecentGeo){
			config.useTecentGeo = true;
		}
	
		// 定位配置
		Whereami.config(config);
	
		if(ua.type == "mtgroup"){
			!/* require.ensure */(function (require){
	            var KNB = __webpack_require__(114);
	            KNB.ready(function () {
	            	//再次给knb打补丁了
	            	var _lockGetCity = false;
	            	var _timerGetCity = setTimeout(function(){
	            		if(!_lockGetCity){
	            			_action({},cb);
	            			_lockGetCity=true;
	            		}
	            	},2500);
	                KNB.getCity({
	                    success:function(city){
	                    	if(!_lockGetCity){
	                    		if(city && city.cityId == -1){
		                    		_action({},cb);
		                    	}else{
		                    		_action(city,cb)
		                    	}
		                    }
	
	                    	_lockGetCity=true;
	                    	clearTimeout(_timerGetCity);
	                    },
		      			fail:function(city){
		      				!_lockGetCity&&_action(city,cb);
		      				_lockGetCity=true;
		      				clearTimeout(_timerGetCity);
		      			}
	                });
	            });
	        }(__webpack_require__));
		}else if(ua.type == "dpapp"){
			!/* require.ensure */(function (require) {
	            var dpapp = __webpack_require__(129);
	            dpapp.ready(function () {
	                dpapp.getCity({
	                    success: function(city){_action(city,cb)},
		      			fail:function(city){_action(city,cb)}
	                });
	            });
	        }(__webpack_require__));
		}else{
			_action({},cb);
		}
	}

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(309);
	var cache = __webpack_require__(310);
	var request = __webpack_require__(312);
	var log = __webpack_require__(313);
	
	var geos = [
	    __webpack_require__(314),
	    cache,
	    __webpack_require__(315),
	    __webpack_require__(317),
	    __webpack_require__(319),
	    __webpack_require__(320),
	    __webpack_require__(321),
	    __webpack_require__(322),
	    __webpack_require__(323)
	];
	var isSpider = function () {
	    return !!navigator.userAgent.match(/spider/i);
	};
	
	//成功和失败的回掉队列
	var sucCallbackQueue = [],
	    errorCallBackQueue = [];
	
	var isLocating = false; //是否正在定位
	
	function execute(queue, args) {
	    for (var i = 0, l = queue.length; i < l; i++) {
	        queue.shift().apply(this, args || []);
	    }
	}
	
	var urlDebug = ~location.href.indexOf("debug:whereami");
	
	module.exports = function (onSuc, onFail) {
	
	    /**
	     * 过滤掉爬虫，直接onFail
	     * */
	
	    if (isSpider()) {
	        onFail();
	        return;
	    }
	
	    /**
	     * 回调统统丢到队列里面,防止调用多次,触发多次调用底层接口
	     * */
	
	    onSuc && sucCallbackQueue.push(onSuc);
	    onFail && errorCallBackQueue.push(onFail);
	
	
	
	    if (isLocating) {
	        return;
	    }
	
	    isLocating = true;
	    var isTimeout = false;
	    var timer;
	    var timeout = config.get("timeout");
	    var disables = config.get("disables");
	    var startTime = +new Date();
	    var geoMethodType;
	    var debug = urlDebug || config.get("debug");
	
	    var getPositionSuccess = function (position) {
	        clearTimeout(timer);
	        isLocating = false;
	
	        if (position && position.lat && position.lng) {
	            log(startTime, geoMethodType, true);
	            //先设置cache , 即使是在主动超时的场景下
	            cache.set(position);
	        }
	
	        if (isTimeout) {
	            return;
	        }
	
	        if (!position || !position.lat || !position.lng || position.lat == "0" || position.lng == "0") {
	            return getPositionError();
	        }
	        if (debug) {
	            alert(JSON.stringify(position));
	        }
	
	        var cityType = config.get('cityType') || 'dianping';
	
	        var needCity = config.get('city') 
	            && position
	            && (!position.city || position.city.cityType !== cityType)
	
	        if (needCity) {
	            //调用接口获取City信息
	            var useMeituan;
	            if (cityType) {
	                if (cityType === 'meituan') {
	                    useMeituan = true
	                }else if (cityType === 'dianping') {
	                    useMeituan = false
	                }
	            }else{
	                if (~location.href.indexOf('.meituan.com') || ~location.href.indexOf('.meituan.net')) {
	                    useMeituan = true
	                }else{
	                    useMeituan = false
	                }
	            }
	
	            if (useMeituan) {
	                var url
	                if (location.protocol === 'https:') {
	                    url = 'https://apimobile.meituan.com/group/v1/city/latlng/'
	                }else {
	                    url = 'http://api.mobile.meituan.com/group/v1/city/latlng/'
	                }
	                request({
	                    url: url+ position.lat+","+position.lng,
	                    data: {
	                        tag: 0
	                    },
	                    onSuc: function(res) {
	                        if (res && res.data) {
	                            var data = res.data;
	                            var city = {
	                                cityType: 'meituan',
	                                cityid: data.id,
	                                cityname: data.city
	                            };
	                            position.city = city;   
	
	                            cache.set({city: city});                     
	                        }
	                        execute(sucCallbackQueue,[
	                            position
	                        ]);
	                    }
	                })
	            }else{
	                request({
	                    url: "//m.dianping.com/getlocalcityid",
	                    data: {
	                        lat: position.lat,
	                        lng: position.lng
	                    },
	                    onSuc: function (res) {
	                        if (res.code == 200 && res.message) {
	                            position.city = res.message;
	                            var city = position.city;
	                            city.cityType = 'dianping';
	
	                            cache.set({city: city});
	                        }
	                        execute(sucCallbackQueue, [
	                            position
	                        ]);
	                    }
	                });                
	            }
	
	        } else {
	            execute(sucCallbackQueue, [
	                position
	            ]);
	        }
	
	
	    };
	    var getPositionError = function () {
	        clearTimeout(timer);
	        isLocating = false;
	        log(startTime, geoMethodType, false);
	        log.logError(geoMethodType, JSON.stringify(Array.prototype.slice.call(arguments, 0)));
	        if (isTimeout) {
	            return;
	        }
	        execute(errorCallBackQueue);
	//        if (e && e.code) {
	//            switch (e.code) {
	//                case 1:
	//                    //用户拒绝
	//                    break;
	//                case 2:
	//                case 3:
	//                    //定位失败
	//                    break;
	//            }
	//        }
	
	    };
	
	    if (timeout) {
	        timer = setTimeout(function () {
	            //超时
	            isTimeout = true;
	            isLocating = false;
	            execute(errorCallBackQueue);
	        }, timeout);
	    }
	
	    //依次call各个定位
	    var current = -1;
	    (function next() {
	        current++;
	        if (geos[current]) {
	            geoMethodType = geos[current].type;
	
	            if (disables && ~disables.indexOf(geoMethodType)) {
	                next();
	            } else {
	                if (debug) {
	                    alert("start geos:" + geoMethodType);
	                }
	                geos[current](function (res) {
	                    res.type = geoMethodType;
	                    if (!res.geoType) {
	                        res.geoType = 'wgs84';
	                    }
	                    getPositionSuccess(res);
	                }, getPositionError, next);
	            }
	        } else {
	            //一个都没成功
	            getPositionError({
	                message: "no geo support"
	            });
	        }
	    })();
	
	};
	
	module.exports.config = config.config;
	
	module.exports.init = function () {
	    config.config({
	        wxAutoConfig: true
	    });
	    module.exports(function (res) {
	        console.log(res);
	    }, function () {
	        console.log("fail")
	    })
	};


/***/ },
/* 309 */
/***/ function(module, exports) {

	var config = {
	//    bizName: "default",
	    timeout: 10000,
	    source: '',
	    enables: [],
	    disables: [],
	    urlParamNames: ["latitude", "longitude"],
	    cacheType: "cookie", //storage , false不缓存
	    cookieNames: ["locallat", "locallng", "localcity"],
	    storageName: "whereami",
	    wxAutoConfig: false,
	    useTecentGeo: false,
	    city:false,     //是否要获取City信息
	    debug: false,
	    sampling: 0.5
	};
	
	
	exports.get = function (key) {
	    return config[key];
	};
	
	exports.set = function (key, value) {
	    config[key] = value;
	};
	
	exports.config = function (obj) {
	    Object.keys(obj).forEach(function (key) {
	        config[key] = obj[key];
	    });
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	//读取cookie中是否有缓存的定位信息
	var cookie = __webpack_require__(311);
	var config = __webpack_require__(309);
	
	
	var cookieNames = config.get("cookieNames");
	var cacheType = config.get("cacheType");
	var storageKey = config.get("storageName");
	var disables = config.get("disables");
	var cLat = cookieNames[0];
	var cLng = cookieNames[1];
	var cCity = cookieNames[2];
	var cType = 'geoType';
	
	
	var cacheTime = 15; //分钟
	
	//  缓存在内存中
	var positionMemory = {};
	
	var supportLocalStorage = function() {
	  //iphone safari 无痕模式下设置localstorage时候会抛异常
	
	  var support = window.localStorage && window.localStorage != null;
	  var testKey = 'local_test';
	  if (support) {
	    try {
	      localStorage.setItem(testKey, 1);
	      localStorage.removeItem(testKey);
	    } catch (e) {
	      return false;
	    }
	  }
	  return support;
	};
	
	var extend = function(target, source) {
	  for (var key in source) {
	    target[key] = source[key]
	  }
	  return target
	}
	
	module.exports = function(suc, fail, next) {
	
	  cacheType = config.get("cacheType");
	  disables = config.get("disables");
	
	  if (!cacheType) {
	    //不走缓存
	    next();
	  } else if (disables && disables.indexOf('cache') !== -1) {
	    next();
	  } else {
	    if (positionMemory && positionMemory.lat & positionMemory.lng) {
	      suc(positionMemory)
	    } else {
	      var positionCache;
	      //首先从storage中拿
	      if (!supportLocalStorage()) {
	        next()
	      } else {
	        storageKey = config.get("storageName");
	
	        var cached = localStorage.getItem(storageKey);
	        if (cached) {
	          var jsonInfo = {};
	          try {
	            jsonInfo = JSON.parse(cached);
	            jsonInfo.city = JSON.parse(jsonInfo.city)
	          } catch (e) {
	            console.log('Parse position fail', e);
	          }
	          var t = jsonInfo.time;
	          var lat = +jsonInfo.lat;
	          var lng = +jsonInfo.lng;
	          var type = +jsonInfo.type;
	          var city = jsonInfo.city;
	
	          if (+new Date() - t > cacheTime * 60 * 1000 || !lat || !lng) {
	            localStorage.removeItem(storageKey);
	          } else {
	            positionCache = {
	              geoType: type,
	              lat: lat,
	              lng: lng,
	              city: city
	            }
	          }
	        }
	
	        if (cacheType == "cookie") {
	          cookieNames = config.get("cookieNames");
	          cLat = cookieNames[0];
	          cLng = cookieNames[1];
	
	          var cookieLat = cookie(cLat);
	          var cookieLng = cookie(cLng);
	          var cookieType = cookie(cType);
	
	          if (cookieLat && cookieLng) {
	            if (positionCache && cookieLat == positionCache.lat && cookieLng == positionCache.lng) {
	              suc(positionCache)
	            }else{
	              suc({
	                geoType: cookieType,
	                lat: cookieLat,
	                lng: cookieLng
	              });              
	            }
	          } else {
	            next();
	          }
	        }else if (cacheType == "storage") {
	          if (positionCache && positionCache.lat && positionCache.lng) {
	            suc(positionCache)
	          }else{
	            next()
	          }
	        }else{
	          next()
	        }
	      }
	    }
	  }
	};
	
	module.exports.type = "cache";
	
	module.exports.set = function(position) {
	  position = position || {}
	
	  var positionCache
	
	  extend(positionMemory, position)
	
	  cacheType = config.get("cacheType");
	  disables = config.get("disables");
	
	  if (!cacheType) {
	    return;
	  }
	  //  如何数据来自缓存或禁止使用缓存
	  if (position.type === "cache" || (disables && disables.indexOf("cache") !== -1)) {
	    return;
	  }
	
	  if (position.city) {
	    // 城市信息不走cookie
	    if (!supportLocalStorage()) {
	      return;
	    }
	    positionMemory.city = position.city
	    positionCache = extend({}, positionMemory)
	    positionCache.city = JSON.stringify(position.city)
	
	    storageKey = config.get("storageName");
	    localStorage.setItem(storageKey, JSON.stringify(positionCache));
	
	  } else if (position.lat && position.lng) {
	    if (cacheType == "cookie") {
	      var opt = {
	        expires: cacheTime / 60 / 24, // 15min
	        path: '/'
	      };
	      if (~location.hostname.indexOf("51ping.com")) {
	        opt.domain = ".51ping.com";
	      } else if (~location.hostname.indexOf("dianping.com")) {
	        opt.domain = ".dianping.com";
	      }
	
	      cookieNames = config.get("cookieNames");
	      cLat = cookieNames[0];
	      cLng = cookieNames[1];
	      cCity = cookieNames[2];
	
	      if (position.lat && position.lng) {
	        cookie(cLat, position.lat, opt);
	        cookie(cLng, position.lng, opt);
	        cookie(cType, position.geoType, opt);
	      }
	
	    } else if (cacheType == "storage") {
	      if (!supportLocalStorage()) {
	        return;
	      }
	
	      positionCache = positionMemory = extend({}, position)
	      positionCache.time = +new Date()
	
	      storageKey = config.get("storageName");
	      localStorage.setItem(storageKey, JSON.stringify(positionCache));
	    }
	  }
	
	};


/***/ },
/* 311 */
/***/ function(module, exports) {

	/*!
	 * refer  jquery.cookie
	 * https://github.com/carhartl/jquery-cookie
	 *
	 */
	var isFunction = function(obj){
	    return Object.prototype.toString.call(obj) == '[object Function]';
	};
	var extend = function(obj){
	    Array.prototype.slice.call(arguments, 1).forEach(function(source){
	        if (source) {
	            for (var prop in source) {
	                obj[prop] = source[prop];
	            }
	        }
	    });
	    return obj;
	};
	
	
	var pluses = /\+/g;
	
	function encode(s) {
	    return config.raw ? s : encodeURIComponent(s);
	}
	
	function decode(s) {
	    return config.raw ? s : decodeURIComponent(s);
	}
	
	function stringifyCookieValue(value) {
	    return encode(config.json ? JSON.stringify(value) : String(value));
	}
	
	function parseCookieValue(s) {
	    if (s.indexOf('"') === 0) {
	        // This is a quoted cookie as according to RFC2068, unescape...
	        s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	    }
	
	    try {
	        // Replace server-side written pluses with spaces.
	        // If we can't decode the cookie, ignore it, it's unusable.
	        // If we can't parse the cookie, ignore it, it's unusable.
	        s = decodeURIComponent(s.replace(pluses, ' '));
	        return config.json ? JSON.parse(s) : s;
	    } catch(e) {}
	}
	
	function read(s, converter) {
	    var value = config.raw ? s : parseCookieValue(s);
	    return isFunction(converter) ? converter(value) : value;
	}
	
	var cookie,config,removeCookie;
	
	config = cookie = function (key, value, options) {
	
	    // Write
	
	    if (value !== undefined && !isFunction(value)) {
	        options = extend({}, config.defaults, options);
	
	        if (typeof options.expires === 'number') {
	            var days = options.expires, t = options.expires = new Date();
	            t.setTime(+t + days * 864e+5);
	        }
	
	        return (document.cookie = [
	                encode(key), '=', stringifyCookieValue(value),
	                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	                options.path    ? '; path=' + options.path : '',
	                options.domain  ? '; domain=' + options.domain : '',
	                options.secure  ? '; secure' : ''
	        ].join(''));
	    }
	
	    // Read
	
	    var result = key ? undefined : {};
	
	    // To prevent the for loop in the first place assign an empty array
	    // in case there are no cookies at all. Also prevents odd result when
	    // calling $.cookie().
	    var cookies = document.cookie ? document.cookie.split('; ') : [];
	
	    for (var i = 0, l = cookies.length; i < l; i++) {
	        var parts = cookies[i].split('=');
	        var name = decode(parts.shift());
	        var cookie = parts.join('=');
	
	        if (key && key === name) {
	            // If second argument (value) is a function it's a converter...
	            result = read(cookie, value);
	            break;
	        }
	
	        // Prevent storing a cookie that we couldn't decode.
	        if (!key && (cookie = read(cookie)) !== undefined) {
	            result[name] = cookie;
	        }
	    }
	
	    return result;
	};
	
	config.defaults = {};
	
	removeCookie = function (key, options) {
	    if (cookie(key) === undefined) {
	        return false;
	    }
	
	    // Must not alter options, thus extending a fresh object...
	    cookie(key, '', extend({}, options, { expires: -1 }));
	    return !cookie(key);
	};
	cookie.remove = removeCookie;
	module.exports = cookie;

/***/ },
/* 312 */
/***/ function(module, exports) {

	var globalCount = 0;
	
	var urlStringify = function (url, data) {
	    if (!data) {
	        return url;
	    }
	    var param = [];
	    for (var o in data) {
	        if (data.hasOwnProperty(o)) {
	            param.push(o + "=" + data[o]);
	        }
	    }
	    return ~url.indexOf("?") ? url +'&'+ param.join("&") : url + "?" + param.join("&");
	};
	
	/**
	 * jsonp
	 * */
	module.exports = function (options) {
	
	    if (!options.url) {
	        throw new Error("url request!");
	    }
	    var data = options.data || {};
	    var cb = options.onSuc || function () {
	    };
	    var cbName = data.callback = "WhereAmI" + (++globalCount) + (+new Date());
	
	    var script = document.createElement("script");
	    script.src = urlStringify(options.url, data);
	
	    window[cbName] = function (res) {
	        delete window[cbName];
	        script.parentNode.removeChild(script);
	        cb(res);
	    };
	
	    document.getElementsByTagName("head")[0].appendChild(script);
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * log to cat
	 * */
	
	var request = __webpack_require__(312);
	var config = __webpack_require__(309);
	
	var logCache = {}
	var errorCache = {}
	
	module.exports = function (startTime, type, isSuccess) {
	    var source = config.get('source');
	
	    var tuAll = "whereami-type-all";
	    var tuType = "whereami-type-" + type;
	    if (source) {
	        tuAll += ('-'+source);
	        tuType += ('-'+source);
	    }
	    /**
	     * cat 监控
	     * http://cat.dianpingoa.com/cat/r/web?domain=cat&ip=All&date=2015080314&reportType=view&op=view
	     * whereami开头的分类中
	     * */
	    var catData = {
	        v: 1,
	        ts: +new Date(),
	        tu: tuAll,
	        d: (+new Date() - startTime),
	        hs: isSuccess ? 200 : 500,
	        ec: ""
	    };
	
	    if (!logCache[tuType] && Math.random() > config.get('sampling')) {
	        //每个页面每种类型只发送一次统计
	        logCache[tuType] = true
	        //发送all 和 指定type的
	        send(catData);
	
	        catData.tu = tuType;
	
	        send(catData);
	    }
	};
	
	var send = function (catData) {
	    var catDataStr = [];
	    for (var o in catData) {
	        if (catData.hasOwnProperty(o)) {
	            catDataStr.push(o + "=" + catData[o]);
	        }
	    }
	    var img = new Image();
	    img.src = "//catdot.dianping.com/broker-service/api/single?" + catDataStr.join("&");
	};
	
	/**
	 * 手机详细错误日志，打到cat Event中
	 * */
	module.exports.logError = function (geoType, info) {
	    if (errorCache[geoType]) return;
	    
	    //  同一个页面同一类型只记录一次错误
	    errorCache[geoType] = true;
	
	    var host = (~location.href.indexOf("51ping.com") || ~location.href.indexOf("test.meituan.com")) ? "m.51ping.com" : "m.dianping.com";
	    request({
	        url: "//" + host + "/statictest/logevent",
	        data: {
	            name: "WhereAmIFail",
	            info: encodeURIComponent(geoType + "-" + info)
	        }
	    });
	
	    //no support UA
	    if(~info.indexOf("no geo support")){
	        request({
	            url: "//" + host + "/statictest/logevent",
	            data: {
	                name: "WhereAmIFailUA",
	                info: navigator.userAgent
	            }
	        });
	    }
	
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(309);
	
	var urlParamNames = config.get("urlParamNames");
	
	var pLat = urlParamNames[0];
	var pLng = urlParamNames[1];
	
	var latReg = new RegExp(pLat + "=([^$&]+)");
	var lngReg = new RegExp(pLng + "=([^$&]+)");
	
	module.exports = function (suc, fail, next) {
	    var query = location.search;
	    var latMatch = query.match(latReg);
	    var lngMatch = query.match(lngReg);
	
	    if (latMatch && lngMatch && !isNaN(latMatch[1]) && !isNaN(lngMatch[1])) {
	        suc({
	            lat: latMatch[1],
	            lng: lngMatch[1]
	        });
	    } else {
	        next();
	    }
	};
	
	module.exports.type = "url";

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	//手Q定位API
	var util = __webpack_require__(316);
	var config = __webpack_require__(309);
	
	var useTecentGeo = function() {
	  return  /TBS/i.test(navigator.userAgent) && ~config.get('enables').indexOf('x5');
	};
	
	
	module.exports = function (suc, fail, next) {
	    if (!useTecentGeo()) {
	        next();
	    } else {
	        util.loadScript("//apis.map.qq.com/tools/geolocation/min?key=6ULBZ-4X3C3-QEK3S-3ZRI6-6D7RE-WQFRQ&referer=大众点评M站", function () {
	            try{
	                var x5Geo = new qq.maps.Geolocation();
	
	                x5Geo.getLocation(function(location) {
	                    suc({
	                        lat: location.lat,
	                        lng: location.lng
	                    })
	                },fail)              
	            }catch(e){
	                next()
	            }
	
	        });
	    }
	};
	
	module.exports.type = "x5";

/***/ },
/* 316 */
/***/ function(module, exports) {

	var cached = [];
	
	
	exports.loadScript = function (src, cb) {
	    if (~cached.indexOf(src)) {
	        cb();
	        return;
	    }
	
	    var script = document.createElement("script");
	    script.src = src;
	    script.onload = function () {
	        cached.push(src);
	        cb();
	    };
	    document.getElementsByTagName("head")[0].appendChild(script);
	};
	


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	//微信定位
	var config = __webpack_require__(309);
	var util = __webpack_require__(316);
	var urlDebug = ~location.href.indexOf("debug:whereami");
	
	var isInWeixin = function () {
	    return /MicroMessenger/.test(navigator.userAgent);
	};
	
	module.exports = function (suc, fail, next) {
	    if (!isInWeixin()) {
	        next();
	    } else {
	        var wxGeo = function () {
	            if (typeof wx === "undefined") {
	                next();
	                return;
	            }
	            wx.ready(function () {
	                wx.checkJsApi({
	                    jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
	                    success: function (res) {
	                        // 以键值对的形式返回，可用的api值true，不可用为false
	                        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
	                        if (res.checkResult && res.checkResult.getLocation) {
	                            wx.getLocation({
	                                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	                                success: function (res) {
	                                    suc({
	                                        lat: res.latitude,
	                                        lng: res.longitude
	                                    });
	                                },
	                                fail: fail
	                            });
	                        } else {
	                            next();
	                        }
	                    },
	                    fail: next
	                });
	
	
	            });
	        };
	
	        if (config.get("wxAutoConfig") && typeof wx === "undefined") {
	            __webpack_require__.e/* nsure */(1, function (require) {
	                var loader = __webpack_require__(318);
	                loader.use(wxGeo);
	            });
	
	        } else {
	            wxGeo();
	        }
	    }
	};
	
	module.exports.type = "weixin";

/***/ },
/* 318 */,
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	//qq浏览器定位
	var util = __webpack_require__(316);
	
	var isInQQBrowser = function () {
	    return ~navigator.userAgent.indexOf("MQQBrowser");
	};
	
	module.exports = function (suc, fail, next) {
	    if (!isInQQBrowser()) {
	        next();
	    } else {
	
	        util.loadScript("http://jsapi.qq.com/get?api=app.getGeoLocation", function () {
	            try {
	                browser.app.getGeoLocation(function (res) {
	                    if (res.ret === "true") {
	                        suc({
	                            lat: res.latitude,
	                            lng: res.longitude
	                        });
	                    } else {
	                        fail.apply(this, Array.prototype.slice.call(arguments, 0));
	                    }
	                }, fail);
	            } catch (e) {
	                next();
	            }
	        });
	    }
	
	};
	
	
	module.exports.type = "qqbrowser";

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	//手Q定位API
	var util = __webpack_require__(316);
	
	var isInMobileQQ = function () {
	    return navigator.userAgent.match(/(.*?(iPad|iPhone|iPod).*?QQ\/([\d\.]+).*?)|(.*?\bV1_AND_SQI?_([\d\.]+)(.*?QQ\/([\d\.]+))?.*?)/i)
	};
	
	
	module.exports = function (suc, fail, next) {
	    if (!isInMobileQQ()) {
	        next();
	    } else {
	        util.loadScript("//open.mobile.qq.com/sdk/qqapi.js?_bid=152", function () {
	            if (!window.mqq || !window.mqq.sensor || !window.mqq.sensor.getLocation) {
	                next();
	            } else {
	                mqq.sensor.getLocation({
	                    allowCacheTime: 60
	                }, function (retCode, latitude, longitude) {
	                    if (retCode == 0 && latitude && longitude) {
	                        suc({
	                            lat: latitude,
	                            lng: longitude
	                        });
	
	                    } else {
	                        fail.apply(this, Array.prototype.slice.call(arguments, 0));
	                    }
	                });
	            }
	        });
	    }
	};
	
	module.exports.type = "mobileqq";

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	//主app js bridge定位
	var isInApp = function () {
	    return ~navigator.userAgent.indexOf("dianping");
	};
	
	
	module.exports = function (suc, fail, next) {
	    if (!isInApp()) {
	        next();
	    } else {
	        !/* require.ensure */(function (require) {
	            var dpapp = __webpack_require__(129);
	            dpapp.ready(function () {
	                dpapp.getLocation({
	                    success: function (e) {
	                        suc({
	                            lat: e.lat,
	                            lng: e.lng
	                        });
	                    },
	                    fail: fail
	                });
	            });
	        }(__webpack_require__));
	    }
	
	
	};
	
	module.exports.type = "app";

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 美团App目前用URL参数来定位 , lat , lng
	 * */
	var latReg = new RegExp("lat=([^$&]+)");
	var lngReg = new RegExp("lng=([^$&]+)");
	
	var isInMeituan = function() {
	  //美团的ua不统一
	  return /meituan/i.test(navigator.userAgent);
	};
	
	module.exports = function(suc, fail, next) {
	  if (!isInMeituan()) {
	    next();
	  } else {
	    var query = location.search;
	    var latMatch = query.match(latReg);
	    var lngMatch = query.match(lngReg);
	
	    if (latMatch && lngMatch && !isNaN(latMatch[1]) && !isNaN(lngMatch[1])) {
	      suc({
	        lat: latMatch[1],
	        lng: lngMatch[1]
	      });
	    } else {
	      !/* require.ensure */(function(require) {
	        var knb = __webpack_require__(114);
	        knb.ready(function() {
	          knb.getLocation({
	            success: function(e) {
	              suc({
	                lat: e.lat,
	                lng: e.lng
	              });
	            },
	            fail: fail
	          });
	        });
	      }(__webpack_require__));
	    }
	  }
	};
	
	module.exports.type = "meituan";


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	//正常浏览器定位api
	var config = __webpack_require__(309);
	
	var supportGeo = function () {
	    return !!navigator.geolocation;
	};
	
	
	module.exports = function (suc, fail, next) {
	    if (!supportGeo()) {
	        next();
	    } else {
	        navigator.geolocation.getCurrentPosition(function (crd) {
	            suc({
	                lat: crd.coords.latitude,
	                lng: crd.coords.longitude
	            });
	        }, function (e) {
	            if (e) {
	                fail({
	                    code: e.code,
	                    message: e.message
	                });
	            }else{
	                fail({
	                    message:"unknown error"
	                });
	            }
	        }, {
	            enableHighAccuracy: true,
	            maximumAge: 30000,
	            timeout: config.get("timeout") || 100000
	        });
	    }
	};
	
	module.exports.type = "html";

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _utilMUa = __webpack_require__(113);
	
	var _utilMUa2 = _interopRequireDefault(_utilMUa);
	
	var _utm = __webpack_require__(325);
	
	var _utm2 = _interopRequireDefault(_utm);
	
	var _baseOpUrl = __webpack_require__(326);
	
	var _baseOpUrl2 = _interopRequireDefault(_baseOpUrl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ua = (0, _utilMUa2.default)();
	
	var locObj = new _baseOpUrl2.default(location.href);
	var extraUa = _utm2.default[locObj.search('utm_source')];
	var mtLch = locObj.search('lch');
	
	var AJAX_ENUM = [{
		dp: "//promo.dianping.com/list",
		dptest: "//promo.51ping.com/list"
	}, {
		dp: "//promo.dianping.com/mtlist",
		dptest: "//promo.51ping.com/mtlist",
		mt: "//i.meituan.com/mtlist",
		mttest: "//test.i.meituan.com/mtlist"
	}, {
		dp: "//promo.dianping.com/services",
		dptest: "//promo.51ping.com/services",
		mt: "//i.meituan.com/services",
		mttest: "//test.i.meituan.com/services"
	}];
	
	var Ur = module.exports = function (url) {
		return _webUr(url, AJAX_ENUM);
	};
	
	function regFormat(url) {
		return url.replace("?", "\\?");
	}
	
	function _webUr(url, enum_arrs) {
		var result = void 0;
	
		enum_arrs.some(function (it) {
			for (var key in it) {
				var value = it[key];
				if (~url.indexOf(value)) {
					var path = url.replace(new RegExp("[^/]*?" + regFormat(value)), "");
	
					var prefix = ua.source == "meituan" ? ~location.host.indexOf("test") ? it["mttest"] : it["mt"] : ua.source == "dianping" ? ~location.host.indexOf("51ping") ? it["dptest"] : it["dp"] : it["dptest"];
	
					if (prefix) {
						result = prefix + path;
						return true;
					}
				}
			}
			return false;
		});
	
		if (!result) console.log(url + "\u4E0D\u5B58\u5728\u9690\u5C04\u57DF\u540D\u4E2D");
		return result || url;
	}
	
	function _ossUr(obj) {
		if (extraUa == "oss") {
			switch (ua.source) {
				case "meituan":
					return obj["mtoss"];
				case "dianping":
					return obj['dposs'];
				default:
					return obj["dposs"];
			}
		} else {
			return false;
		}
	}
	
	function _appUr(obj) {
		return ua.type == "dpapp" ? obj["dpapp"] : ua.type == "mtgroup" ? obj["mtgroup"] : false;
	}
	
	var SKIP_ENUM = {
		deal: {
			dp: "//m.dianping.com/tuan/deal/{id}",
			dptest: "//m.51ping.com/tuan/deal/{id}",
			mt: "//i.meituan.com/deal/{id}.html",
			mttest: "//test.i.meituan.com/deal/{id}.html",
			dpapp: "dianping://tuandeal?id={id}",
			mtgroup: parseInt((ua.version || "").replace(/\./g, "")) >= 730 ? "imeituan://www.meituan.com/gc/deal/detail?did={id}&channel={channel}" : "imeituan://www.meituan.com/deal?did={id}&channel={channel}",
	
			mtoss: parseInt((ua.version || "").replace(/\./g, "")) >= 730 ? "//tpl.dianping.com/firework/callApp?type=meituan&appurl=imeituan%3A%2F%2Fwww.meituan.com%2Fgc%2Fdeal%2Fdetail%3Flch%3D" + mtLch + "%26did%3D{id}%26channel%3D{channel}&weburl=%2F%2Fi.meituan.com%2Fdeal%2F{id}.html" : "//tpl.dianping.com/firework/callApp?type=meituan&appurl=imeituan%3A%2F%2Fwww.meituan.com%2Fdeal%3Flch%3D" + mtLch + "%26did%3D{id}%26channel%3D{channel}&weburl=%2F%2Fi.meituan.com%2Fdeal%2F{id}.html",
			dposs: "//evt.dianping.com/synthesislink/10062.html?dealId={id}"
		},
		shop: {
			dp: "//m.dianping.com/shop/{id}",
			dptest: "//m.51ping.com/shop/{id}",
			mt: "//i.meituan.com/poi/{id}",
			mttest: "//test.i.meituan.com/poi/{id}",
			dpapp: "dianping://shopinfo?shopid={id}&id={id}",
			mtgroup: "imeituan://www.meituan.com/merchant?id={id}&showtype={showtype}",
	
			mtoss: "//tpl.dianping.com/firework/callApp?type=meituan&appurl=imeituan%3A%2F%2Fwww.meituan.com%2Fmerchant%3Flch%3D" + mtLch + "%26id%3D{id}%26showtype%3D{showtype}&weburl=%2F%2Fi.meituan.com%2Fpoi%2F{id}",
			dposs: "//evt.dianping.com/synthesislink/10064.html?shopId={id}"
		},
		web: {
			dp: "{url}",
			dptest: "{url}",
			mt: "{url}",
			mttest: "{url}",
			dpapp: "{url}",
			mtgroup: "{url}",
	
			mtoss: "//tpl.dianping.com/firework/callApp?type=meituan&appurl=imeituan%3A%2F%2Fwww.meituan.com%2Fweb%3Flch%3D" + mtLch + "%26url%3D{{url}}&weburl={{url}}",
			dposs: "//evt.dianping.com/synthesislink/10401.html?url={{url}}"
		},
		schema: {
			dp: "//evt.dianping.com/synthesislink/10131.html?url={{url}}&local=" + encodeURIComponent(location.href),
			dptest: "//evt.dianping.com/synthesislink/10131.html?url={{url}}&local=" + encodeURIComponent(location.href),
			mt: "//tpl.dianping.com/firework/callApp?type=meituan&appurl={{url}}&weburl=" + encodeURIComponent(location.href),
			mttest: "//tpl.dianping.com/firework/callApp?type=meituan&appurl={{url}}&weburl=" + encodeURIComponent(location.href),
			dpapp: "{url}",
			mtgroup: "{url}",
	
			mtoss: "//tpl.dianping.com/firework/callApp?type=meituan&appurl={{url}}&weburl=" + encodeURIComponent(location.href),
			dposs: "//evt.dianping.com/synthesislink/10447.html?url={{url}}"
		},
	
		search: {
			dp: "//m.dianping.com/shoplist/1/r/0/c/30/s/s_-1?keyword={{keyword}}",
			dptest: "//m.51ping.com/shoplist/1/r/0/c/30/s/s_-1?keyword={{keyword}}",
			dpapp: "dianping://searchshoplist?sort=0&categoryid=30&keyword={{keyword}}"
		}
	};
	
	function _handler(value) {
		return function (opt) {
			var matchStr = _appUr(value) || _ossUr(value) || _webUr(value["dp"], [value]) || false;
	
			for (var k in opt) {
				var v = opt[k];
				matchStr = matchStr.replace(new RegExp("{{" + k + "}}", "g"), encodeURIComponent(v)).replace(new RegExp("{" + k + "}", "g"), v);
			}
			return matchStr.replace(/\&?\{[^\}]+\}/g, "");;
		};
	}
	
	for (var key in SKIP_ENUM) {
		var value = SKIP_ENUM[key];
		Ur[key] = _handler(value);
	}
	
	Ur.methodExtend = function (key, value) {
		if (!Ur[key]) {
			Ur[key] = _handler(value);
		} else {
			console.log(key + "\u65B9\u6CD5\u5DF2\u5B58\u5728");
		}
	};
	
	Ur.AjaxExtend = function (value) {
		AJAX_ENUM.push(value);
	};
	
	function normalize_array(parts) {
		var up = 0;
		var i = parts.length - 1;
		for (; i >= 0; i--) {
			var last = parts[i];
			if (last === '.') {
				parts.splice(i, 1);
			} else if (last === '..') {
				parts.splice(i, 1);
				up++;
			} else if (up) {
				parts.splice(i, 1);
				up--;
			}
		}
	
		while (up--) {
			parts.unshift('..');
		}
	
		return parts;
	}
	
	Ur.resolve = function (from, to) {
		var parts = (from + '/' + to).split('/').filter(Boolean);
		return normalize_array(parts).join('/');
	};

/***/ },
/* 325 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	
	var utmSource = {
	    wxpush: "oss",
	    wx_dptuan: "oss" };
	
	exports.default = utmSource;

/***/ },
/* 326 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @author yyy
	 */
	
	
	// search
	// get参数的分隔符
	var PARAM_SEPARATOR = "&";
	// 赋值 分隔符
	var VALUE_SEPARATOR = "=";
	
	
	// hash 标识符
	var HASH_SEPARATOR = "#";
	// search 标识符
	var SEARCH_SEPARATOR = "?";
	
	// url正则匹配
	var URL_MATCH = /(^(?:(?:http\:|https\:)\/\/)?[^\/^\?^#]+)([^\?^#]+)?(\?[^#]+)?(#.+)?/;
	
	// 混合对象
	function _mix(first,second,m){
	       
	     for (var key in second) {
	          if (!m) { //不像 for in operator, hasownproperty 不追踪prototype chain
	               if(first[key]){
	                    continue;
	               }
	               first[key] = second[key];
	          }else{
	          	  	first[key] = second[key];
	          }
	     }
	     return first;
	}
	
	// 判断是否为对象，多值传参需要
	function _isObject(obj){
		return Object.prototype.toString.call(obj).indexOf("object Object") !== -1 ? true : false;
	}
	
	// 解析字符串为对象，解析search
	function _parse(search){
		if(!search)
			return {};
	    var params = search.split(PARAM_SEPARATOR);
	    var paramObj = {};
	    var length = params.length;
	    while(--length+1){
	        var keyValue = params[length].split(VALUE_SEPARATOR);
	        if(keyValue[0]){
	            paramObj[keyValue[0]] = keyValue[1];
	        }
		}
	    return paramObj;
	};
	
	// 重构obj为字符串
	function _build(obj){
		if(!_isObject(obj))
			return "";
		
		var result = [];
		
		for(var k in obj){
			result.push(k+VALUE_SEPARATOR+obj[k]);
		}
		return result.join(PARAM_SEPARATOR)
	}
	
	// to deal with url 而不是局限与location.href
	function Url(url){
	
		var  self = this;
	
		// 原始的保存的url
		self.originUrl = self.url  = (url+"") || "";
	
	
		// 赋值回调	
		["hashValue","originValue","searchValue","pathValue"].forEach(function(item){
			Object.defineProperty(self,item,{
				set:function(value){
					self["_"+item] = value;
					self._build();
				},
				get:function(value){
					return self["_"+item];
				}
			})
		})
	
		// 分析url，获得相应的值
		self._parse();
	
		return this;
	}
	
	
	
	
	// 设search值
	Url.prototype.search = function(k,value){
		var self = this;
		var _searchObj = self._searchObj;
		
		if(!k){
			// 获得字符串
			return self['_searchValue'];
		}else if(_isObject(k)){
			// 对象赋值
			_mix(_searchObj,k,true);
			self.searchValue =  SEARCH_SEPARATOR+_build(_searchObj)
			return self;
		}else if(k === true){
			// 获得属性全对象
			return self._searchObj;
		}else if(k && value === undefined){
			// 获得属性值
			return _searchObj[k] || "";
		}else{
			// 单个设置
			_searchObj[k] = value || "";
			self.searchValue =  SEARCH_SEPARATOR+_build(_searchObj);
			return this;
		}
	}
	
	
	// 常规赋值
	
	// hash origin path
	Url.prototype.hash = function(value){
		return !value ? this['_hashValue'] : ((this.hashValue = HASH_SEPARATOR + value),this);
	}
	
	Url.prototype.origin = function(value){
		return !value ? this['_originValue'] : ((this.originValue = value),this);
	}
	
	Url.prototype.path = function(value){
		return !value ? this['_pathValue'] : ((this.pathValue = value),this);
	}
	
	// 内部解析,针对search
	Url.prototype._parse = function(){
		var self = this;
		var url  = self.url;
	
		// 获得匹配值
		var url_match = url.match(URL_MATCH);
	
		url_match && _mix(self,{
			originValue:url_match[1] || "",
			pathValue:url_match[2] || "",
			searchValue:url_match[3] || "",
			hashValue:url_match[4] || ""
		},true);
	
		self._searchObj = url_match ? _parse((url_match[3]||"").replace(SEARCH_SEPARATOR,"")) : {};
	
	}
	
	//重新build url 
	Url.prototype._build = function(){
		return this.url = this.origin() + this.path() + this.search() + this.hash();
	}
	
	Url.prototype.getHash = function(key){
		var obj = _parse(this['_hashValue'].replace("#",""));
		return key ? (obj[key]||"") : obj;
	}
	
	Url.prototype.setHash = function(key,value){
		var obj = _parse(this['_hashValue'].replace("#",""));
			obj[key] = value;	
		this.hashValue = HASH_SEPARATOR + _build(obj);
		return this;
	}
	
	Url.prototype.value = function(){
		return this.url;
	}
	
	module.exports = Url;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var cookie = __webpack_require__(328);
	
	module.exports = function () {
	  return {
	    set: function (name, value, options) {
	      return document.cookie = cookie.serialize(name, value, options);
	    },
	
	    get: function (name) {
	      return cookie.parse(document.cookie)[name];
	    },
	
	    remove: function (name, options) {
	      var opts = options || {};
	      opts.expires = new Date(0);
	
	      return !!(document.cookie = cookie.serialize(name, '', opts));
	    },
	
	    all: function () {
	      return cookie.parse(document.cookie);
	    }
	  }
	}
	


/***/ },
/* 328 */
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(/; */);
	  var dec = opt.decode || decode;
	
	  pairs.forEach(function(pair) {
	    var eq_idx = pair.indexOf('=')
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      return;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  });
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var pairs = [name + '=' + value];
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    pairs.push('Max-Age=' + maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    pairs.push('Domain=' + opt.domain);
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    pairs.push('Path=' + opt.path);
	  }
	
	  if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
	  if (opt.httpOnly) pairs.push('HttpOnly');
	  if (opt.secure) pairs.push('Secure');
	
	  return pairs.join('; ');
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stringify = __webpack_require__(330);
	var parse = __webpack_require__(333);
	var formats = __webpack_require__(332);
	
	module.exports = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(331);
	var formats = __webpack_require__(332);
	
	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};
	
	var toISO = Date.prototype.toISOString;
	
	var defaults = {
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    serializeDate: function serializeDate(date) {
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};
	
	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
	        if (encoder) {
	            return [formatter(encoder(prefix)) + '=' + formatter(encoder(obj))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(
	                obj[key],
	                generateArrayPrefix(prefix, key),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter
	            ));
	        } else {
	            values = values.concat(stringify(
	                obj[key],
	                prefix + (allowDots ? '.' + key : '[' + key + ']'),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter
	            ));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
	    if (typeof options.format === 'undefined') {
	        options.format = formats.default;
	    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
	        throw new TypeError('Unknown format option provided.');
	    }
	    var formatter = formats.formatters[options.format];
	    var objKeys;
	    var filter;
	
	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }
	
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(stringify(
	            obj[key],
	            key,
	            generateArrayPrefix,
	            strictNullHandling,
	            skipNulls,
	            encoder,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            formatter
	        ));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 331 */
/***/ function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
	    if (Array.isArray(target) && Array.isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                if (target[i] && typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }
	
	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	        obj[key] = exports.compact(obj[key], refs);
	    });
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 332 */
/***/ function(module, exports) {

	'use strict';
	
	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;
	
	module.exports = {
	    'default': 'RFC3986',
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return value;
	        }
	    },
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(331);
	
	var has = Object.prototype.hasOwnProperty;
	
	var defaults = {
	    allowDots: false,
	    allowPrototypes: false,
	    arrayLimit: 20,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    parameterLimit: 1000,
	    plainObjects: false,
	    strictNullHandling: false
	};
	
	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }
	
	    return obj;
	};
	
	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	
	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }
	
	    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	
	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = utils.merge(obj, newObj, options);
	    }
	
	    return utils.compact(obj);
	};


/***/ },
/* 334 */
/***/ function(module, exports) {

	;(function() {
	
	var win = window;
	// `_hip` might have already been declared
	var Hippo = win._hip;
	
	var doc = win.document;
	var loc = doc.location;
	var ref = doc.referrer;
	var href = loc.href;
	var screen = win.screen;
	var element_test = doc.createElement('div');
	var ADD_EVENT_LISTENER = 'addEventListener';
	var REMOVE_EVENT_LISTENER = 'removeEventListener';
	
	var addEvent = element_test[ADD_EVENT_LISTENER] ?
	    function(el, type, fn, useCapture) {
	      el[ADD_EVENT_LISTENER](type, fn, !! useCapture);
	  } :
	
	  function(el, type, fn) {
	    el.attachEvent('on' + type, fn);
	  };
	
	
	if (!Hippo) {
	  Hippo = win._hip = [];
	}
	
	// CommonJS
	if (typeof module !== 'undefined' && module.exports) {
	  module.exports = Hippo;
	}
	
	
	// Prevent duplicate loading of hippo
	if (Hippo.loaded) {
	  return;
	}
	Hippo.loaded = true;
	
	
	// Take a look at:
	// ```js
	// Hippo.i = new Image();
	// Hippo.i.src = url;
	// ```
	// Creating a new image will connect to another thread.
	// If another hippo request comes in, the previous one might be destroyed by GC.
	// So we need to queue the requests.
	var queue = [];
	Hippo.queue = queue;
	var timers = {};
	
	var cachedNativeRequestId;
	var gettingRequestId;
	var gettingRequestIdCallbacks = [];
	
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}
	
	function log(msg){
	  window.console && console.log(msg);
	}
	
	function setCookie(cname, cvalue, exdays, domain, path){
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  var kv = cname + "=" + cvalue
	  var expires = "expires=" + d.toUTCString();
	  var path = "path=" + path;
	  var domain = "domain=" + domain;
	  document.cookie = [kv, expires, domain, path].join(";");
	}
	
	function getHCV(){
	  var hcv = document.cookie.match(/_hc.v=([^;]+)/);
	  if(!hcv){
	    return null;
	  }
	  return hcv[1];
	}
	
	function generateHCV(){
	  return guid() + '.' + Math.round(+new Date()/ 1000);
	}
	
	function setHCV(){
	  var segments = doc.domain.split(".");
	  while(segments.length > 2){
	      segments.shift();
	  }
	  var domain = "." + segments.join(".");
	  var hcv = generateHCV();
	  log('hippo:setHCV', hcv);
	  setCookie("_hc.v", hcv, 365, domain, "/");
	}
	
	if(!getHCV()){
	  setHCV();
	}
	
	// new method for getting requestid
	var regexVer = /dp\/com\.dianping\.[\w\.]+\/([\d\.]+)/i;
	var getAppVersion = function (ua) {
	  var version;
	  var regexMAPI = /MApi/;
	  var match  = ua.match(regexVer);
	  if (match) {
	    version = match[1];
	  }
	  return version;
	};
	var getOSName = function (ua) {
	  var regexAndroid = /android/i;
	  var regexIos = /ipad|iphone/i;
	  if (regexAndroid.test(ua)) {
	    return 'android';
	  } else if (regexIos.test(ua)) {
	    return 'ios';
	  }
	};
	var Semver = {
	  eq: function(a, b) {
	    return a === b;
	  },
	  gt: function(a, b) {
	    var splitedA = a ? a.split(".") : [];
	    var splitedB = b ? b.split(".") : [];
	    [0,1,2].forEach(function(i) {
	      splitedA[i] = splitedA[i] || 0;
	      splitedB[i] = splitedB[i] || 0;
	    });
	    if (+splitedA[0] !== +splitedB[0]) {
	      return +splitedA[0] > +splitedB[0];
	    } else {
	      if (+splitedA[1] !== +splitedB[1]) {
	        return +splitedA[1] > +splitedB[1];
	      } else {
	        return +splitedA[2] > +(splitedB[2] || 0);
	      }
	    }
	  },
	  lt: function(a, b) {
	    return !this.gte(a, b);
	  },
	  gte: function(a, b) {
	    return this.eq(a, b) || this.gt(a, b);
	  },
	  lte: function(a, b) {
	    return this.eq(a, b) || this.lt(a, b);
	  }
	}
	
	var UA = win.navigator.userAgent;
	var mobileType = getOSName(UA),
	    appVersion = getAppVersion(UA);
	var isSuitableVersion;
	if (appVersion && Semver.gte(appVersion, '8.1.0')) {
	  isSuitableVersion = true;
	}
	
	function _insureRequestId(callback){
	  if(cachedNativeRequestId){
	    return callback();
	  }else if(gettingRequestId){
	    gettingRequestIdCallbacks.push(callback);
	    return;
	  }
	
	  gettingRequestId = true;
	  gettingRequestIdCallbacks.push(callback);
	  var _originDequeue = win.DPApp && win.DPApp.dequeue;
	  var tinyDPApp = {
	    callback: function(callbackId, retValue){
	      log('hippo:callback', callbackId, retValue);
	      var callback = win[this._generateCallbackName(callbackId)] ;
	      callback && callback.call(this, retValue);
	    },
	    _generateCallbackName: function(callbackId){
	      return "DPApp_callback_" + callbackId;
	    },
	    _generateCallbackId: function(){
	      var rand = Math.floor(Math.random() * 1000);
	      var timestamp = +new Date();
	      return +(timestamp + "" + rand);
	    },
	    dequeue: function(){
	      _originDequeue && _originDequeue();
	    },
	    getRequestId: function(opts){
	      var success = opts.success;
	      var callbackId = this._generateCallbackId();
	      win[this._generateCallbackName(callbackId)] = function(result){
	        success && success(result);
	      }
	
	      log('hippo:callbackId ' + callbackId);
	      var src = 'js://_?method=getRequestId&args=%7B%7D&callbackId=' + callbackId;
	
	      if (isSuitableVersion && (mobileType == 'android')) {
	        win.prompt(src);
	      } else {
	        var ifr = document.createElement('iframe');
	        ifr.style.display = 'none';
	        function removeIframe(){
	          ifr.onload = ifr.onerror = null;
	          ifr.parentNode && ifr.parentNode.removeChild(ifr);
	        }
	        /**
	         * remove iframe after loaded
	         */
	        ifr.onload = ifr.onerror = removeIframe;
	        setTimeout(removeIframe,5000);
	        ifr.src = src;
	        document.body.appendChild(ifr);
	      }
	    }
	  }
	  if(!win.DPApp){
	    win.DPApp = tinyDPApp;
	  }else if(!win.DPApp.getRequestId){
	    for(var key in tinyDPApp){
	      win.DPApp[key] = tinyDPApp[key];
	    }
	  }
	
	  bind_domready(function(){
	    if (isSuitableVersion && (mobileType == 'ios') && win._DPApp && win._DPApp.requestId) {
	      custom_const['reqid'] = cachedNativeRequestId = win._DPApp.requestId;
	      log('reqid:' + win._DPApp.requestId);
	      gettingRequestIdCallbacks.forEach(function(callback){
	        callback();
	      });
	      gettingRequestIdCallbacks = [];
	      gettingRequestId = false;
	      cachedNativeRequestId = null;
	    } else {
	      DPApp.getRequestId({
	        success: function(result){
	          custom_const['reqid'] = cachedNativeRequestId = result.requestId;
	          log('reqid:' + result.requestId);
	          gettingRequestIdCallbacks.forEach(function(callback){
	            callback();
	          });
	          gettingRequestIdCallbacks = [];
	          gettingRequestId = false;
	          if (isSuitableVersion && (mobileType == 'android')) {
	            cachedNativeRequestId = null;
	          }
	        }
	      });
	    }
	  });
	}
	
	// send a hippo request
	// @param {string} key
	// @param {Array.<string>} value
	// @param {object} data
	function send(key, value, data, ajax) {
	
	  // 在native端通过jsbridge获取RequestId以串连日志
	  if(/com\.dianping/.test(navigator.userAgent) && !cachedNativeRequestId){
	    custom_const['appname'] = 'dianping';
	    _insureRequestId(function(){
	      send(key, value, data, ajax);
	    });
	    return;
	  }
	
	  var src = URL_BASE + generateQuery(key, value, data);
	  if(ajax){
	    xhr(src);
	    return;
	  }
	  var timer = setTimeout(function () {
	    // Old browsers suck, never use `delete`
	    timers[timer] = false;
	    var image = new Image(1, 1);
	    queue.push(image);
	    registerClean(image);
	    image.src = src;
	    src = null;
	  }, 0);
	
	  timers[timer] = src;
	}
	
	function registerClean (image) {
	  ['onload', 'onerror', 'onabort'].forEach(function (event) {
	    image[event] = function () {
	      try {
	        image.onload = image.onerror = image.onabort = null;
	      } catch(e) {}
	
	      // If there is an image aborted, then try to send xhr.
	      // Actually, it is once in a blue moon.
	      if (event === 'onabort') {
	        image.src && xhr(image.src);
	      }
	
	      // if on error, we consider it has been received by server side
	      clean(image, queue);
	    };
	  });
	}
	
	function clean (subject, array) {
	  var i = 0;
	  var len = array.length;
	  var item;
	  for(; i < len; i ++){
	    item = array[i];
	    if (item === subject) {
	      array.splice(i, 1);
	      break;
	    }
	  }
	}
	
	var Xhr = win.ActiveXObject
	  // fallback
	  ? function() {
	    if (win.XMLHttpRequest) {
	      try {
	          return standardXMLHttpRequest();
	      } catch(e) {}
	    }
	    try {
	      return new win.ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) {}
	  }
	  : standardXMLHttpRequest;
	
	function standardXMLHttpRequest(){
	  return new XMLHttpRequest();
	}
	
	function xhr (src) {
	  if(window.navigator.userAgent.indexOf("MSIE") > -1){
	    return ;
	  }
	  var x = Xhr();
	  // evt / h5 / meituan / apollo domain will send to hls directly
	  if(!/^evt|h5|^event|^e\.|midas|meituan|apollo/.test(location.host)){
	    src = src.replace(HOST, '');
	  }
	  x.open('GET', src, false);
	  // for cookie
	  x.withCredentials = true;
	  x.send();
	}
	
	var unload = false;
	// Register both onbeforeunload and onunload to solve the known issue of Opera
	win.onbeforeunload = win.onunload = function () {
	  if (unload) {
	    return;
	  }
	  unload = true;
	  var timer;
	  var src;
	  for (timer in timers) {
	    src = timers[timer];
	    if (src) {
	      clearTimeout(Number(timer));
	      xhr(src);
	    }
	  }
	};
	
	
	// default params
	var _pageId = 0;
	var _shopType = 0;
	var _cityId = 0;
	var _domain = 'www.dianping.com';
	
	// @const
	var NOOP = function() {};
	
	var HOST = '//hls.' + (/51ping/.test(doc.domain) ? '51ping' : 'dianping') + '.com';
	HOST = /\.dper\.com/.test(doc.domain) ? '//hls.dper.com' : HOST;
	var URL_BASE = HOST + '/hippo.gif?';
	var SCREEN_SIZE_KEY = '__hsr';
	var SCREEN_COLOR_DEPTH_KEY = '__hsc';
	var LOCATION_HREF_KEY = '__hlh';
	var LOCATION_REFERRER_KEY = '__hlr';
	var PAGE_TRACK_KEY = '__pv';
	var MODULE_TRACK_KEY = '__mv';
	
	
	////////////////////////////////////////////////////////////////////////////
	// lang
	////////////////////////////////////////////////////////////////////////////
	
	// method to stringify an object
	// optimized for v8
	// @param {Object} obj the object to be stringified
	// @returns {string}
	var stringify = (function() {
	  return win.JSON && JSON.stringify || function(obj) {
	    var ret = [],
	      key,
	      value;
	
	    for (key in obj) {
	      value = obj[key];
	
	      if (Object(value) !== value) {
	        ret.push('"' + key + '":"' + ("" + value).replace(/"/g, '\\"') + '"');
	      }
	    }
	
	    return '{' + ret.join(',') + '}';
	  };
	})();
	
	var AP = Array.prototype;
	if (!AP.forEach) {
	  AP.forEach = function(fn, this_object) {
	    for (var i = 0, len = this.length; i < len; i++) {
	      if (i in this) {
	
	        // if fn is not callable, it will throw
	        fn.call(this_object, this[i], i, this);
	      }
	    }
	  };
	}
	
	
	function toQueryString(obj) {
	  var encode = encodeURIComponent,
	    key,
	    value,
	    ret = [];
	
	  for (key in obj) {
	    value = obj[key];
	
	    if (Object(value) !== value) {
	
	      // {
	      //    key1: undefined,
	      //    key2: "a"
	      // }
	      // -> key1=&key2=a
	      ret.push(key + '=' + encode(value || ''));
	    }
	  }
	
	  return ret.join('&');
	};
	
	// @param {boolean=} not_override Whether we should not override
	function mix(r, s, not_override) {
	  var key;
	
	  if (!s) {
	    return;
	  }
	
	  for (key in s) {
	    if (!not_override || !(key in r)) {
	      r[key] = s[key];
	    }
	  }
	
	  return r;
	};
	
	function chk(key, value) {
	  return typeof key === 'string' && Object(value) !== value;
	};
	
	
	////////////////////////////////////////////////////////////////////////////
	// Hippo methods
	////////////////////////////////////////////////////////////////////////////
	
	
	// 生成hippo专用的query string
	// @private
	var generateQuery = (function() {
	
	  // 有些内容是单次会话保持不变的，先计算出来
	  var h, w, s, c, f,
	    presets = {};
	
	  if (s = screen) {
	    h = s.height;
	    w = s.width;
	
	    if (h && w) {
	      presets[SCREEN_SIZE_KEY] = w + 'x' + h;
	    }
	
	    if (c = s.colorDepth) {
	      presets[SCREEN_COLOR_DEPTH_KEY] = c + 'bit';
	    }
	  }
	
	  // @param {string} key
	  // @param {Array.<mixed>} value
	  // @param {Object=} data
	  // @param {Object=}
	  return function(key, value, data) {
	    data = data || {};
	    mix(data, custom_const, false);
	
	    var current = {
	      '__hlt': _domain,
	      '__ppp': _pageId,
	      '__had': stringify(data),
	      'force': +new Date
	    };
	
	    mix(current, presets);
	
	    if (href) {
	      current[LOCATION_HREF_KEY] = href;
	    }
	
	    if (ref) {
	      current[LOCATION_REFERRER_KEY] = ref;
	    }
	
	    value.push(_cityId + '|' + _shopType);
	
	    current[key] = value.join('|');
	
	    return toQueryString(current);
	  };
	
	})();
	
	
	////////////////////////////////////////////////////////////////////////////
	// legacy
	////////////////////////////////////////////////////////////////////////////
	
	// legacy for .ext()
	var data_attached = {};
	
	// @param {number} page id of current page
	// @param {string=} z base url of site
	function document_hippo(pageId, domain) {
	  HIPPO_METHODS._setPageId(pageId);
	  return document_hippo;
	};
	
	mix(document_hippo, {
	
	  // extensive parameters for next hippo request
	  // @param {string||Object} name
	  // @param {mixed=} value
	  ext: function(name, value) {
	    var key;
	
	    if (Object(name) === name) {
	      for (key in name) {
	        document_hippo.ext(key, name[key]);
	      }
	
	    } else if (chk(name, value)) {
	      data_attached[name] = value;
	    }
	
	    return document_hippo;
	  },
	
	  // remove data that be setted by ext method
	  // @param {string=} name if no name passed in, hippo will remove all relative data
	  rxt: function(name) {
	    if (typeof name === 'string') {
	      delete data_attached[name];
	
	    } else if (!arguments.length) {
	      data_attached = {};
	    }
	
	    return document_hippo;
	  },
	
	
	  // send a page-view request
	  // @param {number} cityId
	  // @param {number=} shopType
	  pv: function(cityId, shopType) {
	    HIPPO_METHODS._setCityId(cityId);
	    HIPPO_METHODS._setShopType(shopType);
	    HIPPO_METHODS._setPVInitData(data_attached);
	
	    return document_hippo;
	  },
	
	  // send a module-view request
	  // @param {number} moduleId
	  // @param {mixed} value
	  mv: function(moduleId, value) {
	
	    if (chk(moduleId, value)) {
	      data_attached[moduleId] = value;
	
	      HIPPO_METHODS.mv(data_attached);
	    }
	
	    return document_hippo;
	  }
	});
	
	// for backward compatibility
	document.hippo = document_hippo;
	
	
	////////////////////////////////////////////////////////////////////////////
	// new Hippo
	////////////////////////////////////////////////////////////////////////////
	
	var auto_pv = true;
	var auto_page_timing = true;
	var page_timing_version;
	
	
	var HIPPO_METHODS = {
	  _setPageId: function(pageId) {
	    _pageId = pageId >>> 0;
	  },
	
	  _setCityId: function(cityId) {
	    _cityId = cityId >>> 0;
	  },
	
	  _setShopType: function(shopType) {
	    _shopType = shopType >>> 0;
	  },
	
	  _setPVInitData: function(data) {
	    // run once
	    HIPPO_METHODS._setPVInitData = NOOP;
	    setTimeout(function() {
	      pv(data);
	    }, 0);
	  },
	
	  _autoPV: function(auto) {
	    auto_pv = auto;
	  },
	
	  _autoPageTiming: function(timing) {
	    auto_page_timing = timing;
	  },
	
	  // DP.data('hippo_perf_version', 'b1') ->
	  // _hip.push(['_setPageTimingVer', 'b1'])
	  _setPageTimingVer: function(version) {
	    page_timing_version = version;
	  },
	
	  _setReferrer: function(referrer) {
	    ref = referrer;
	  },
	
	  _setHref: function(h) {
	    href = h;
	  },
	
	  _setRequestId: function(id) {
	    setCustomConst('reqid', id);
	  },
	
	  _setGuid: function(id) {
	    setCustomConst('serverguid', id);
	  },
	
	  _setCustomConst: setCustomConst,
	
	  mv: function(data, ajax) {
	    send(MODULE_TRACK_KEY, ['', ''], data || data_attached, ajax);
	    data_attached = {};
	  },
	
	  pv: function(data) {
	    pv(data);
	  }
	};
	
	
	var custom_const = {};
	
	function setCustomConst(key, value) {
	  custom_const[key] = value;
	}
	
	
	function pv(data) {
	  send(PAGE_TRACK_KEY, [], data || data_attached);
	  data_attached = {};
	}
	
	
	Hippo.push = function(command) {
	  var action, data, method;
	
	  if (command) {
	    action = command.shift();
	    method = HIPPO_METHODS[action];
	
	    method && method.apply(null, command);
	  }
	};
	
	// apply
	Hippo.forEach(function(command) {
	  Hippo.push(command);
	});
	
	
	// if new hippo(`_hip`) exists, push `'_setPVInitData'` to make sure there is a pv request
	auto_pv && Hippo.push(['_setPVInitData']);
	
	
	Hippo.length = 0;
	
	// if(Math.random() > NET_SPEED_SAMPLE_RATE){
	//     return;
	// }
	
	// pagetiming
	
	var render_start = win.G_rtop;
	var domready_time;
	
	function makeSense(origin, fallback) {
	  return origin > 0 ? origin : fallback;
	};
	
	function onDomReady() {
	  domready_time = +new Date;
	};
	
	function onLoad() {
	  var version;
	  var perf = win.performance;
	  var t = perf && perf.timing;
	  var r_ready = domready_time - render_start;
	  var r_load = +new Date - render_start;
	  var data = {
	    r_pagetiming: 1,
	    r_ready: r_ready,
	    r_load: r_load
	  };
	
	  if (t) {
	    mix(data, {
	      r_conn: t.connectEnd - t.connectStart,
	      r_recev: t.responseEnd - t.responseStart,
	      r_ready: makeSense(t.domInteractive - t.domLoading, r_ready),
	      r_wait: t.responseStart - t.requestStart,
	      r_load: makeSense(t.loadEventStart - t.domLoading, r_load)
	    });
	  }
	
	  if ((version = page_timing_version) || (version = win.DP && DP.data && DP.data('hippo_perf_version'))) {
	    data['test'] = version;
	  }
	
	  HIPPO_METHODS.mv(data);
	
	  removeEvent(win, 'load', onLoad);
	};
	
	
	function bind_domready(fn) {
	
	  // Catch cases where ready() is called after the
	  // browser event has already occurred.
	  if (doc.readyState === 'complete') {
	    return fn();
	  }
	
	  var doScroll = doc.documentElement.doScroll;
	  var eventType = doScroll ? 'readystatechange' : 'DOMContentLoaded';
	
	  var ready = function() {
	    removeEvent(doc, eventType, ready);
	    removeEvent(win, 'load', ready);
	    fn();
	  };
	
	  addEvent(doc, eventType, ready);
	
	  // A fallback to load
	  // and make sure that domready event fires before load event registered by user
	  addEvent(win, 'load', ready);
	
	  if (doScroll) {
	    var poll_scroll = function() {
	      try {
	        // doScroll technique by Diego Perini http://javascript.nwbox.com/IEContentLoaded/
	        doScroll('left');
	        ready();
	      } catch (ex) {
	        setTimeout(poll_scroll, 10);
	      }
	    };
	
	    var not_framed = false;
	
	    try {
	      not_framed = win.frameElement == null;
	    } catch (e) {}
	
	    if (not_framed) {
	      poll_scroll();
	    }
	  }
	};
	
	var removeEvent = element_test[REMOVE_EVENT_LISTENER] ?
	    function(el, type, fn, useCapture) {
	      el[REMOVE_EVENT_LISTENER](type, fn, !! useCapture);
	  } :
	
	  function(el, type, fn) {
	    el.detachEvent('on' + type, fn);
	  };
	
	
	if (auto_page_timing) {
	  bind_domready(onDomReady);
	  addEvent(win, 'load', onLoad);
	}
	
	})();

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["rainbowEnum"] = factory();
		else
			root["rainbowEnum"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "./";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.DealButtonType = exports.Position = exports.ShopStatus = exports.PageViewStatus = exports.OrderType = exports.DiscountType = exports.NewUserParam = exports.DrawEventSuccessType = exports.DrawEventSuccess = exports.DrawStatusSuccess = exports.DrawStatus = undefined;
	
		var _drawStatus = __webpack_require__(1);
	
		var DrawStatus = _interopRequireWildcard(_drawStatus);
	
		var _drawStatusSuccess = __webpack_require__(2);
	
		var DrawStatusSuccess = _interopRequireWildcard(_drawStatusSuccess);
	
		var _drawEventSuccess = __webpack_require__(3);
	
		var DrawEventSuccess = _interopRequireWildcard(_drawEventSuccess);
	
		var _drawEventSuccessType = __webpack_require__(4);
	
		var DrawEventSuccessType = _interopRequireWildcard(_drawEventSuccessType);
	
		var _newUserParam = __webpack_require__(5);
	
		var NewUserParam = _interopRequireWildcard(_newUserParam);
	
		var _discountType = __webpack_require__(6);
	
		var DiscountType = _interopRequireWildcard(_discountType);
	
		var _orderType = __webpack_require__(7);
	
		var OrderType = _interopRequireWildcard(_orderType);
	
		var _pageViewStatus = __webpack_require__(8);
	
		var PageViewStatus = _interopRequireWildcard(_pageViewStatus);
	
		var _shopStatus = __webpack_require__(9);
	
		var ShopStatus = _interopRequireWildcard(_shopStatus);
	
		var _position = __webpack_require__(10);
	
		var Position = _interopRequireWildcard(_position);
	
		var _dealButtonType = __webpack_require__(11);
	
		var DealButtonType = _interopRequireWildcard(_dealButtonType);
	
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
		exports.DrawStatus = DrawStatus;
		exports.DrawStatusSuccess = DrawStatusSuccess;
		exports.DrawEventSuccess = DrawEventSuccess;
		exports.DrawEventSuccessType = DrawEventSuccessType;
		exports.NewUserParam = NewUserParam;
		exports.DiscountType = DiscountType;
		exports.OrderType = OrderType;
		exports.PageViewStatus = PageViewStatus;
		exports.ShopStatus = ShopStatus;
		exports.Position = Position;
		exports.DealButtonType = DealButtonType;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var SUCCESS = exports.SUCCESS = 'SUCCESS';
		var USER_NOT_LOGIN = exports.USER_NOT_LOGIN = 'USER_NOT_LOGIN';
		var USER_STAUS_ABNORMAL = exports.USER_STAUS_ABNORMAL = 'USER_STAUS_ABNORMAL';
		var UNMATCHED_USER = exports.UNMATCHED_USER = 'UNMATCHED_USER';
		var USER_NOT_EXIST = exports.USER_NOT_EXIST = 'USER_NOT_EXIST';
		var INPUT_INVALID_ERROR = exports.INPUT_INVALID_ERROR = 'INPUT_INVALID_ERROR';
		var ACTIVITY_NOT_EXIST = exports.ACTIVITY_NOT_EXIST = 'ACTIVITY_NOT_EXIST';
		var ACTIVITY_NOT_RUNNING = exports.ACTIVITY_NOT_RUNNING = 'ACTIVITY_NOT_RUNNING';
		var YOU_HAVE_WIN_ALL_PRIZE = exports.YOU_HAVE_WIN_ALL_PRIZE = 'YOU_HAVE_WIN_ALL_PRIZE';
		var ACTIVITY_HAS_STOP = exports.ACTIVITY_HAS_STOP = 'ACTIVITY_HAS_STOP';
		var ACTIVITY_HAS_SUSPEND = exports.ACTIVITY_HAS_SUSPEND = 'ACTIVITY_HAS_SUSPEND';
		var HIT_NOTHING = exports.HIT_NOTHING = 'HIT_NOTHING';
		var NOT_ENOUGH_DRAW_COUNT = exports.NOT_ENOUGH_DRAW_COUNT = 'NOT_ENOUGH_DRAW_COUNT';
		var NO_PERMISSION = exports.NO_PERMISSION = 'NO_PERMISSION';
		var HIT_PRIZE_AND_DRAW_COUNT_PASS_MAX = exports.HIT_PRIZE_AND_DRAW_COUNT_PASS_MAX = 'HIT_PRIZE_AND_DRAW_COUNT_PASS_MAX';
		var AVAILABLE_PRIZE_STOCK_EMPTY = exports.AVAILABLE_PRIZE_STOCK_EMPTY = 'AVAILABLE_PRIZE_STOCK_EMPTY';
		var NOT_ENOUGH_PRIZE = exports.NOT_ENOUGH_PRIZE = 'NOT_ENOUGH_PRIZE';
		var ACTIVITY_QUOTA_EMPTY = exports.ACTIVITY_QUOTA_EMPTY = 'ACTIVITY_QUOTA_EMPTY';
		var SHARE_FOR_ONE_MORE = exports.SHARE_FOR_ONE_MORE = 'SHARE_FOR_ONE_MORE';
		var NO_PRIZELISE = exports.NO_PRIZELISE = 'NO_PRIZELISE';
		var NOT_ENOUGH_DAY_DRAW_COUNT = exports.NOT_ENOUGH_DAY_DRAW_COUNT = 'NOT_ENOUGH_DAY_DRAW_COUNT';
		var NOT_OBJECTPRIZE = exports.NOT_OBJECTPRIZE = 'NOT_OBJECTPRIZE';
		var LIMIT_KEY_NOT_FOUND = exports.LIMIT_KEY_NOT_FOUND = 'LIMIT_KEY_NOT_FOUND';
		var LIMIT_BY_RATE = exports.LIMIT_BY_RATE = 'LIMIT_BY_RATE';
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var DRAW_NORMAL = exports.DRAW_NORMAL = 'DRAW_NORMAL';
		var DRAW_SHARE_ENABLE = exports.DRAW_SHARE_ENABLE = 'DRAW_SHARE_ENABLE';
		var DRAW_TOMORROW = exports.DRAW_TOMORROW = 'DRAW_TOMORROW';
		var DRAW_LIMITED = exports.DRAW_LIMITED = 'DRAW_LIMITED';
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var DUPLICATED = exports.DUPLICATED = 'DUPLICATED';
		var NOT_DUPLICATED = exports.NOT_DUPLICATED = 'NOT_DUPLICATED';
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var THANKS = exports.THANKS = 'THANKS';
		var COMBINATION = exports.COMBINATION = 'COMBINATION';
		var SINGLETON = exports.SINGLETON = 'SINGLETON';
		var COOPERATION = exports.COOPERATION = 'COOPERATION';
		var MATERIAL_WITH_ADDRESS = exports.MATERIAL_WITH_ADDRESS = 'MATERIAL_WITH_ADDRESS';
		var MERCHANT = exports.MERCHANT = 'MERCHANT';
		var MATERIAL_WITHOUT_ADDRESS = exports.MATERIAL_WITHOUT_ADDRESS = 'MATERIAL_WITHOUT_ADDRESS';
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var LIREN = exports.LIREN = 'LIREN';var YULE = exports.YULE = 'YULE';var EDU = exports.EDU = 'EDU';var QINZI = exports.QINZI = 'QINZI';var KTV = exports.KTV = 'KTV';
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var PROMO_BY_DEFAULT = exports.PROMO_BY_DEFAULT = 0;
		var PROMO_BY_DISTCOUNT = exports.PROMO_BY_DISTCOUNT = 1;
		var PROMO_BY_NEW = exports.PROMO_BY_NEW = 2;
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var ORDER = exports.ORDER = 1;
		var ORDER_BY_DISTANCE = exports.ORDER_BY_DISTANCE = 2;
		var ORDER_BY_PRICE = exports.ORDER_BY_PRICE = 4;
		var ORDER_BY_SOLDOUT = exports.ORDER_BY_SOLDOUT = 5;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var SUCCESS = exports.SUCCESS = "SUCCESS";
		var ILLEGAL_REQUEST_PARAM = exports.ILLEGAL_REQUEST_PARAM = "ILLEGAL_REQUEST_PARAM";
		var UNKNOWN = exports.UNKNOWN = "UNKNOWN";
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var SUCCESS = exports.SUCCESS = "000000";
		var ERROR_TOPICID = exports.ERROR_TOPICID = "120001";
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var MIDDLE = exports.MIDDLE = "MIDDLE";
		var BOTTOM = exports.BOTTOM = "BOTTOM";
		var TOP = exports.TOP = "TOP";
		var NONE = exports.NONE = "NONE";
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		"use strict";
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var NO_TEXT = exports.NO_TEXT = 0;
		var BUY_TEXT = exports.BUY_TEXT = 1;
		var PRICE_TEXT = exports.PRICE_TEXT = 2;
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _utilMUa = __webpack_require__(113);
	
	var _utilMUa2 = _interopRequireDefault(_utilMUa);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ua = (0, _utilMUa2.default)();
	
	var AJAX_ENUM = [{
		dp: "//promo.dianping.com",
		dptest: "//promo.51ping.com",
		mt: "//i.meituan.com",
		mttest: "//test.i.meituan.com"
	}];
	
	var Ur = module.exports = function (url) {
		return _webUr(url, AJAX_ENUM);
	};
	
	function _webUr(url, enum_arrs) {
		var result = void 0;
	
		enum_arrs.some(function (it) {
			for (var key in it) {
				var value = it[key];
				if (~url.indexOf(value)) {
					var path = url.replace(new RegExp("[^/]*?" + value), "");
	
					var prefix = ua.source == "meituan" ? ~location.host.indexOf("test") ? it["mttest"] : it["mt"] : ua.source == "dianping" ? ~location.host.indexOf("51ping") ? it["dptest"] : it["dp"] : it["dptest"];
					if (prefix) {
						result = prefix + path;
						return true;
					}
				}
			}
			return false;
		});
	
		if (!result) console.log(url + "不存在隐射域名中");
	
		return result || url;
	}
	
	function _appUr(obj) {
		return ua.type == "dpapp" ? obj["dpapp"] : ua.type == "mtgroup" ? obj["dpapp"] : false;
	}
	
	var SKIP_ENUM = {
		deal: {
			dp: "//m.dianping.com/tuan/deal/{id}",
			dptest: "//m.51ping.com/tuan/deal/{id}",
			mt: "//i.meituan.com/deal/${id}.html",
			mttest: "//test.i.meituan.com/deal/{id}.html",
			dpapp: "dianping://tuandeal?id={id}",
			mtgroup: "imeituan://www.meituan.com/deal?did={id}"
		},
		shop: {
			dp: "//m.dianping.com/shop/{id}",
			dptest: "//m.51ping.com/shop/{id}",
			mt: "//i.meituan.com/poi/{id}",
			mttest: "//test.i.meituan.com/poi/{id}",
			dpapp: "dianping://shopinfo?shopid={id}&id={id}",
			mtgroup: "imeituan://www.meituan.com/merchant?id={id}"
		}
	};
	
	var _loop = function _loop(key) {
		var value = SKIP_ENUM[key];
	
		Ur[key] = function (opt) {
			var matchStr = _appUr(value) || _webUr(value["dp"], [value]) || false;
	
			for (var k in opt) {
				var v = opt[k];
				matchStr = matchStr.replace(new RegExp("{" + k + "}", "g"), v);
			}
	
			return matchStr;
		};
	};
	
	for (var key in SKIP_ENUM) {
		_loop(key);
	}

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(338);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), (function() { return this; }())))

/***/ },
/* 338 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(340);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(341)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map