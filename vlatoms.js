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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/vlatoms/vlatoms.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/postcss-loader/src??ref--8-2!./resources/js/vlatoms/vlatoms.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".VLMHeader>tr>td {\n\t\tfont-size: 20px;\n\t\ttext-align: left;\n\t\tpadding: 10px 0 0 15px;\n}\n\n.VLMessage {\n\tborder-radius: 15px;\n\tmargin: auto;\n\tbox-shadow: 0px 0px 29px -2px rgb(187, 187, 187);\n\tpadding-bottom: 5px;\n\tbackground-color: white;\n\tz-index:100;\n}\n\n.VLMFooter {\n\tborder-radius: 0 0 5px 5px;\n\tborder-top-color: #ccc;\n\tborder-top-width: 1px;\n\tborder-top-style: dotted;\n\twidth: 100%;\n}\n\n.VLMFooter tr td {\n\ttext-align: right;\n\tpadding: 2px 12px 0 15px;\n}\n\n.disp_option_toggle {\n\tfont-size: 11pt;\n\tfont-weight: bold;\n\tcolor: #333;\n\tfont-family: 'Droid Sans', sans-serif;\n\tdisplay: block;\n\tmargin-bottom: 6px;\n}\n\n.disp_option_toggle:before {\n\tcontent: \"\";\n\twidth: 16px;\n\theight: 10px;\n\tdisplay: inline-block;\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/check.png */ "./resources/js/vlatoms/img/check.png")) + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 10px;\n}\n\n.toggle_off{\n\t\topacity:0.6;\n}\n\n.toggle_off:before {\n\tcontent: \"\";\n\twidth: 16px;\n\theight: 12px;\n\tdisplay: inline-block;\n\tbackground-image: none !important;\n}\n\n.VLMBody>tr>td {\n\t\tpadding:5px 15px;\n}\n\n/* ctxMenu */\n.VLatomsCtx .sub_option_toggle{\n\tfloat:right;\n\tfont-size:16px;\n\tmargin-top:10px;\n}\n.VLatomsCtx .cTxLabel{\n\tdisplay:inline-block;\n\tfont-weight:700;\n}\n\n.VLatomsCtx .selectMenu, .VLatomsCtx .selectHow{\n\tcursor:pointer;\n\theight:65px;\n\tbackground-size:55px 55px;\n\tbackground-repeat:no-repeat;\n\tbackground-position:center;\n}\n\n.VLatomsCtx .selectMenu.active, .VLatomsCtx .selectHow.active{\n\t border-radius: 5px;\n\tbox-shadow:\t\t 0px 0px 4px 4px #dcdcdc;\n}\n\n.VLatomsCtx .selectSingle{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_atom.png */ "./resources/js/vlatoms/img/manipulate_select_atom.png")) + ");\n}\n\n.VLatomsCtx .selectElement{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_element.png */ "./resources/js/vlatoms/img/manipulate_select_element.png")) + ");\n}\n\n.VLatomsCtx .selectRect{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_rect.png */ "./resources/js/vlatoms/img/manipulate_select_rect.png")) + ");\n}\n\n.VLatomsCtx .selectHex{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_hex.png */ "./resources/js/vlatoms/img/manipulate_select_hex.png")) + ");\n}\n\n.VLatomsCtx .selectCircle{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_circ.png */ "./resources/js/vlatoms/img/manipulate_select_circ.png")) + ");\n}\n\n.VLatomsCtx .selectLasso{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_lasso.png */ "./resources/js/vlatoms/img/manipulate_select_lasso.png")) + ");\n}\n\n.VLatomsCtx .selectSphere{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/manipulate_select_sphere.png */ "./resources/js/vlatoms/img/manipulate_select_sphere.png")) + ");\n}\n\n.VLatomsCtx .selectHowNormal{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/mode_select_normal.png */ "./resources/js/vlatoms/img/mode_select_normal.png")) + ");\n}\n\n.VLatomsCtx .selectHowMerge{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/mode_select_merge.png */ "./resources/js/vlatoms/img/mode_select_merge.png")) + ");\n}\n\n.VLatomsCtx .selectHowReverse{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/mode_select_reverse.png */ "./resources/js/vlatoms/img/mode_select_reverse.png")) + ");\n}\n\n.VLatomsCtx .selectHowOverlap{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/mode_select_overlap.png */ "./resources/js/vlatoms/img/mode_select_overlap.png")) + ");\n}\n\n.VLatomsCtx .selectHowNotoverlap{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/mode_select_notoverlap.png */ "./resources/js/vlatoms/img/mode_select_notoverlap.png")) + ");\n}\n\n.VLatomsCtx .selectHowDel{\n\tbackground-image: url(" + escape(__webpack_require__(/*! ./img/mode_select_del.png */ "./resources/js/vlatoms/img/mode_select_del.png")) + ");\n}\n\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 26px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n\n/* The slider */\n.slider {\n\tposition: absolute;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: #ccc;\n\ttransition: .4s;\n}\n\n.slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: 22px;\n\twidth: 22px;\n\tleft: 2px;\n\tbottom: 2px;\n\tbackground-color: white;\n\ttransition: .4s;\n}\n\ninput:checked + .slider {\n\tbackground-color: #2196F3;\n}\n\ninput:focus + .slider {\n/*\tbox-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider:before {\n\t-webkit-transform: translateX(34px);\n\ttransform: translateX(34px);\n}\n\n/* Rounded sliders */\n.slider.round {\n\tborder-radius: 26px;\n}\n\n.slider.round:before {\n\tborder-radius: 50%;\n}\n\n.strlist_wrapper{\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 100%;\n\twidth: 380px;\n\tbackground-color: white;\n\tz-index: 95;\n\tborder-radius: 10px;\n\tborder: 1px solid #cecece;\n}\n.strlist_header{\n\tbackground-color:#40b1c5;\n\tcolor:white;\n\tpadding: 12px 14px 5px 14px;\n}\n.strlist_body{\n\tpadding: 10px;\n\theight:calc(100% - 49px);\n\toverflow-y:auto;\n}\n.selected_strlist{\n\tbackground-color: #f1f1f1;\n}\n/*\n.structure_list_info{\n\tbackground-image: url(\"./img/list_icon.png\");\n\tbackground-repeat: no-repeat;\n\tbackground-position:center;\n\tbackground-size:contain;\n\tpadding:0;\n\twidth:100%;\n\theight:100%;\n}*/\n\n.strlist_wrapper td, .strlist_wrapper th{\n\tfont-size:14px !important;\n\tpadding: 5px !important;\n}\n.tooltip-inner {\n    background-color: #3161c2 !important;\n}\n.tooltip.bs-tooltip-right .arrow:before {\n    border-right-color: #3161c2 !important;\n}\n.tooltip.bs-tooltip-left .arrow:before {\n    border-right-color: #3161c2 !important;\n}\n.tooltip.bs-tooltip-bottom .arrow:before {\n    border-right-color: #3161c2 !important;\n}\n.tooltip.bs-tooltip-top .arrow:before {\n    border-right-color: #3161c2 !important;\n}\n.selectedAtomRow{\n\tborder:solid 2px blue;\n\tborder-radius: 5px;\n}\n.selectedAtomRow>div:first-child{\n\tbackground-color:#7abde4;\n\tcolor:white;\n\theight:38px;\n\tpadding-top:7px;\n\tborder-radius:5px 0 0 5px;\n}\n\n.customAtomsDelete{\n\tcolor:#dcdcdc;\n}\n.customAtomsDelete:hover{\n\tcolor:#e3342f;\n}\n\n.customInputPasteIcon{\n\tcolor:#dcdcdc;\n}\n.customInputPasteIcon:hover{\n\tcolor:#3161c2;\n}\n.matsq-strlist-button:hover{\n\tbackground-color:#007bff;\n\tcolor:white;\n}\n.show_ctx_menu:hover{\n\tbackground-color:#007bff;\n\tcolor:white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./resources/js/vlatoms/Atom/Atom.js":
/*!*******************************************!*\
  !*** ./resources/js/vlatoms/Atom/Atom.js ***!
  \*******************************************/
/*! exports provided: Atom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return Atom; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Atom =
/*#__PURE__*/
function () {
  function Atom(x, y, z, element) {
    _classCallCheck(this, Atom);

    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.realElement = AtomParam[element.split("_")[0]] !== undefined ? element.split("_")[0] : "X";
    this.element = element;
    this.radius = AtomParam[this.realElement].radius;
    this.bondRadius = AtomParam[this.realElement].bondRadius;
    this.color = AtomParam[this.realElement].color;
    this.mass = AtomParam[this.realElement].mass;
    this.fix = [0, 0, 0];
  }

  _createClass(Atom, [{
    key: "move",
    value: function move(x, y, z) {
      // no inside test
      this.x = this.x + x;
      this.y = this.y + y;
      this.z = this.z + z;
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      // no inside test
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }, {
    key: "changeElement",
    value: function changeElement(element) {
      this.realElement = AtomParam[element.split("_")[0]] !== undefined ? element.split("_")[0] : "X";
      this.element = element;
      this.radius = AtomParam[this.realElement].radius;
      this.bondRadius = AtomParam[this.realElement].bondRadius;
      this.color = AtomParam[this.realElement].color;
      this.mass = AtomParam[this.realElement].mass;
    }
  }, {
    key: "changeRadius",
    value: function changeRadius(radi) {
      this.radius = radi;
    }
  }, {
    key: "changeBondRadius",
    value: function changeBondRadius(bondRadi) {
      this.bondRadius = bondRadi;
    }
  }, {
    key: "changeColor",
    value: function changeColor(col) {
      this.col = col;
    }
  }, {
    key: "fix",
    value: function fix(arr) {
      for (var i = 0; i < 3; i++) {
        this.fix[i] = arr[i];
      }
    }
  }]);

  return Atom;
}();

/***/ }),

/***/ "./resources/js/vlatoms/AtomParam.js":
/*!*******************************************!*\
  !*** ./resources/js/vlatoms/AtomParam.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.supportedElements = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es'];
window.AtomParam = {
  "H": {
    "no": 1,
    "radius": 0.31,
    "color": "0xFFD3D3",
    "mass": 1.00794,
    "group": 1,
    "period": 1,
    "block": "s",
    "ie": 13.598434005136,
    "oxi_n": [-1, 1]
  },
  "He": {
    "no": 2,
    "radius": 0.28,
    "color": "0xFE1E00",
    "mass": 4.002602,
    "group": 18,
    "period": 1,
    "block": "s",
    "ie": 24.587387936,
    "oxi_n": []
  },
  "Li": {
    "no": 3,
    "radius": 1.28,
    "color": "0xf477ff",
    "mass": 6.941,
    "group": 1,
    "period": 2,
    "block": "s",
    "ie": 5.391714761,
    "oxi_n": [1]
  },
  "Be": {
    "no": 4,
    "radius": 0.96,
    "color": "0x003EFE",
    "mass": 9.012182,
    "group": 2,
    "period": 2,
    "block": "s",
    "ie": 9.322699,
    "oxi_n": [1, 2]
  },
  "B": {
    "no": 5,
    "radius": 0.85,
    "color": "0xBFFE00",
    "mass": 10.811,
    "group": 13,
    "period": 2,
    "block": "p",
    "ie": 8.298019,
    "oxi_n": [-5, -1, 1, 2, 3]
  },
  "C": {
    "no": 6,
    "radius": 0.76,
    "color": "0x999999",
    "mass": 12.0107,
    "group": 14,
    "period": 2,
    "block": "p",
    "ie": 11.2603,
    "oxi_n": [-4, -3, -2, -1, 1, 2, 3, 4]
  },
  "N": {
    "no": 7,
    "radius": 0.71,
    "color": "0x6D77FF",
    "mass": 14.00674,
    "group": 15,
    "period": 2,
    "block": "p",
    "ie": 14.53413,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5]
  },
  "O": {
    "no": 8,
    "radius": 0.66,
    "color": "0xFF0000",
    "mass": 15.9994,
    "group": 16,
    "period": 2,
    "block": "p",
    "ie": 13.618054,
    "oxi_n": [-2, -1, 1, 2]
  },
  "F": {
    "no": 9,
    "radius": 0.57,
    "color": "0x6DFF89",
    "mass": 18.9984032,
    "group": 17,
    "period": 2,
    "block": "p",
    "ie": 17.42282,
    "oxi_n": [-1]
  },
  "Ne": {
    "no": 10,
    "radius": 0.58,
    "color": "0xFE1900",
    "mass": 20.1797,
    "group": 18,
    "period": 2,
    "block": "p",
    "ie": 21.56454,
    "oxi_n": []
  },
  "Na": {
    "no": 11,
    "radius": 1.66,
    "color": "0x0009FE",
    "mass": 22.98976928,
    "group": 1,
    "period": 3,
    "block": "s",
    "ie": 5.1390767,
    "oxi_n": [-1, 1]
  },
  "Mg": {
    "no": 12,
    "radius": 1.41,
    "color": "0x0043FE",
    "mass": 24.305,
    "group": 2,
    "period": 3,
    "block": "s",
    "ie": 7.646235,
    "oxi_n": [1, 2]
  },
  "Al": {
    "no": 13,
    "radius": 1.21,
    "color": "0xC5FE00",
    "mass": 26.9815386,
    "group": 13,
    "period": 3,
    "block": "p",
    "ie": 5.985768,
    "oxi_n": [-2, -1, 1, 2, 3]
  },
  "Si": {
    "no": 14,
    "radius": 1.11,
    "color": "0xFEFC00",
    "mass": 28.0855,
    "group": 14,
    "period": 3,
    "block": "p",
    "ie": 8.151683,
    "oxi_n": [-4, -3, -2, -1, 1, 2, 3, 4]
  },
  "P": {
    "no": 15,
    "radius": 1.07,
    "color": "0xFF6666",
    "mass": 30.973762,
    "group": 15,
    "period": 3,
    "block": "p",
    "ie": 10.486686,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5]
  },
  "S": {
    "no": 16,
    "radius": 1.05,
    "color": "0xFFFF00",
    "mass": 32.066,
    "group": 16,
    "period": 3,
    "block": "p",
    "ie": 10.36001,
    "oxi_n": [-2, -1, 1, 2, 3, 4, 5, 6]
  },
  "Cl": {
    "no": 17,
    "radius": 1.02,
    "color": "0xFE4E00",
    "mass": 35.4527,
    "group": 17,
    "period": 3,
    "block": "p",
    "ie": 12.96763,
    "oxi_n": [-1, 1, 2, 3, 4, 5, 6, 7]
  },
  "Ar": {
    "no": 18,
    "radius": 1.06,
    "color": "0xFE1400",
    "mass": 39.948,
    "group": 18,
    "period": 3,
    "block": "p",
    "ie": 15.7596112,
    "oxi_n": []
  },
  "K": {
    "no": 19,
    "radius": 2.03,
    "color": "0x000EFE",
    "mass": 39.0983,
    "group": 1,
    "period": 4,
    "block": "s",
    "ie": 4.34066354,
    "oxi_n": [-1, 1]
  },
  "Ca": {
    "no": 20,
    "radius": 1.76,
    "color": "0x0048FE",
    "mass": 40.078,
    "group": 2,
    "period": 4,
    "block": "s",
    "ie": 6.1131552,
    "oxi_n": [1, 2]
  },
  "Sc": {
    "no": 21,
    "radius": 1.7,
    "color": "0x0083FE",
    "mass": 44.955912,
    "group": 3,
    "period": 4,
    "block": "d",
    "ie": 6.56149,
    "oxi_n": [1, 2, 3]
  },
  "Ti": {
    "no": 22,
    "radius": 1.6,
    "color": "0x00BDFE",
    "mass": 47.867,
    "group": 4,
    "period": 4,
    "block": "d",
    "ie": 6.82812,
    "oxi_n": [-2, -1, 1, 2, 3, 4]
  },
  "V": {
    "no": 23,
    "radius": 1.53,
    "color": "0x00F7FE",
    "mass": 50.9415,
    "group": 5,
    "period": 4,
    "block": "d",
    "ie": 6.746187,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5]
  },
  "Cr": {
    "no": 24,
    "radius": 1.39,
    "color": "0x00FECA",
    "mass": 51.9961,
    "group": 6,
    "period": 4,
    "block": "d",
    "ie": 6.76651,
    "oxi_n": [-4, -2, -1, 1, 2, 3, 4, 5, 6]
  },
  "Mn": {
    "no": 25,
    "radius": 1.39,
    "color": "0x9C7AC7",
    "mass": 54.938045,
    "group": 7,
    "period": 4,
    "block": "d",
    "ie": 7.434038,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5, 6, 7]
  },
  "Fe": {
    "no": 26,
    "radius": 1.32,
    "color": "0x00FE56",
    "mass": 55.845,
    "group": 8,
    "period": 4,
    "block": "d",
    "ie": 7.9024678,
    "oxi_n": [-4, -2, -1, 1, 2, 3, 4, 5, 6, 7]
  },
  "Co": {
    "no": 27,
    "radius": 1.26,
    "color": "0xf090a0",
    "mass": 58.933195,
    "group": 9,
    "period": 4,
    "block": "d",
    "ie": 7.88101,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5]
  },
  "Ni": {
    "no": 28,
    "radius": 1.24,
    "color": "0x1CFE00",
    "mass": 58.6934,
    "group": 10,
    "period": 4,
    "block": "d",
    "ie": 7.639877,
    "oxi_n": [-2, -1, 1, 2, 3, 4]
  },
  "Cu": {
    "no": 29,
    "radius": 1.32,
    "color": "0x8C3610",
    "mass": 63.546,
    "group": 11,
    "period": 4,
    "block": "d",
    "ie": 7.72638,
    "oxi_n": [-2, 1, 2, 3, 4]
  },
  "Zn": {
    "no": 30,
    "radius": 1.22,
    "color": "0xA0ED20",
    "mass": 65.39,
    "group": 12,
    "period": 4,
    "block": "d",
    "ie": 9.3941968,
    "oxi_n": [-2, 1, 2]
  },
  "Ga": {
    "no": 31,
    "radius": 1.22,
    "color": "0xCAFE00",
    "mass": 69.723,
    "group": 13,
    "period": 4,
    "block": "p",
    "ie": 5.9993018,
    "oxi_n": [-5, -4, -2, -1, 1, 2, 3]
  },
  "Ge": {
    "no": 32,
    "radius": 1.2,
    "color": "0xFEF700",
    "mass": 72.61,
    "group": 14,
    "period": 4,
    "block": "p",
    "ie": 7.899435,
    "oxi_n": [-4, -3, -2, -1, 1, 2, 3, 4]
  },
  "As": {
    "no": 33,
    "radius": 1.19,
    "color": "0xFEBD00",
    "mass": 74.9216,
    "group": 15,
    "period": 4,
    "block": "p",
    "ie": 9.7886,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5]
  },
  "Se": {
    "no": 34,
    "radius": 1.2,
    "color": "0xFE8300",
    "mass": 78.96,
    "group": 16,
    "period": 4,
    "block": "p",
    "ie": 9.752392,
    "oxi_n": [-2, -1, 1, 2, 3, 4, 5, 6]
  },
  "Br": {
    "no": 35,
    "radius": 1.2,
    "color": "0xFE4800",
    "mass": 79.904,
    "group": 17,
    "period": 4,
    "block": "p",
    "ie": 11.81381,
    "oxi_n": [-1, 1, 3, 4, 5, 7]
  },
  "Kr": {
    "no": 36,
    "radius": 1.16,
    "color": "0xFE0E00",
    "mass": 83.8,
    "group": 18,
    "period": 4,
    "block": "p",
    "ie": 13.9996049,
    "oxi_n": [2]
  },
  "Rb": {
    "no": 37,
    "radius": 2.2,
    "color": "0x0014FE",
    "mass": 85.4678,
    "group": 1,
    "period": 5,
    "block": "s",
    "ie": 4.177128,
    "oxi_n": [-1, 1]
  },
  "Sr": {
    "no": 38,
    "radius": 1.95,
    "color": "0x004EFE",
    "mass": 87.62,
    "group": 2,
    "period": 5,
    "block": "s",
    "ie": 5.6948672,
    "oxi_n": [1, 2]
  },
  "Y": {
    "no": 39,
    "radius": 1.9,
    "color": "0x0088FE",
    "mass": 88.90585,
    "group": 3,
    "period": 5,
    "block": "d",
    "ie": 6.21726,
    "oxi_n": [1, 2, 3]
  },
  "Zr": {
    "no": 40,
    "radius": 1.75,
    "color": "0x00C2FE",
    "mass": 91.224,
    "group": 4,
    "period": 5,
    "block": "d",
    "ie": 6.6339,
    "oxi_n": [-2, 1, 2, 3, 4]
  },
  "Nb": {
    "no": 41,
    "radius": 1.64,
    "color": "0x00FCFE",
    "mass": 92.90638,
    "group": 5,
    "period": 5,
    "block": "d",
    "ie": 6.75885,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5]
  },
  "Mo": {
    "no": 42,
    "radius": 1.54,
    "color": "0x64BDB0",
    "mass": 95.94,
    "group": 6,
    "period": 5,
    "block": "d",
    "ie": 7.09243,
    "oxi_n": [-4, -2, -1, 1, 2, 3, 4, 5, 6]
  },
  "Tc": {
    "no": 43,
    "radius": 1.47,
    "color": "0x00FE8B",
    "mass": 97.9072,
    "group": 7,
    "period": 5,
    "block": "d",
    "ie": 7.11938,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5, 6, 7]
  },
  "Ru": {
    "no": 44,
    "radius": 1.46,
    "color": "0x00FE50",
    "mass": 101.07,
    "group": 8,
    "period": 5,
    "block": "d",
    "ie": 7.3605,
    "oxi_n": [-4, -2, 1, 2, 3, 4, 5, 6, 7, 8]
  },
  "Rh": {
    "no": 45,
    "radius": 1.42,
    "color": "0x00FE16",
    "mass": 102.9055,
    "group": 9,
    "period": 5,
    "block": "d",
    "ie": 7.4589,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5, 6]
  },
  "Pd": {
    "no": 46,
    "radius": 1.39,
    "color": "0x21FE00",
    "mass": 106.42,
    "group": 10,
    "period": 5,
    "block": "d",
    "ie": 8.33686,
    "oxi_n": [1, 2, 3, 4, 5, 6]
  },
  "Ag": {
    "no": 47,
    "radius": 1.45,
    "color": "0x464646",
    "mass": 107.8682,
    "group": 11,
    "period": 5,
    "block": "d",
    "ie": 7.576234,
    "oxi_n": [-2, -1, 1, 2, 3, 4]
  },
  "Cd": {
    "no": 48,
    "radius": 1.44,
    "color": "0x95FE00",
    "mass": 112.411,
    "group": 12,
    "period": 5,
    "block": "d",
    "ie": 8.99382,
    "oxi_n": [-2, 1, 2]
  },
  "In": {
    "no": 49,
    "radius": 1.42,
    "color": "0xCFFE00",
    "mass": 114.818,
    "group": 13,
    "period": 5,
    "block": "p",
    "ie": 5.7863554,
    "oxi_n": [-5, -2, -1, 1, 2, 3]
  },
  "Sn": {
    "no": 50,
    "radius": 1.39,
    "color": "0xFEF200",
    "mass": 118.71,
    "group": 14,
    "period": 5,
    "block": "p",
    "ie": 7.343917,
    "oxi_n": [-4, -3, -2, -1, 1, 2, 3, 4]
  },
  "Sb": {
    "no": 51,
    "radius": 1.39,
    "color": "0xFEB700",
    "mass": 121.76,
    "group": 15,
    "period": 5,
    "block": "p",
    "ie": 8.608389,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5]
  },
  "Te": {
    "no": 52,
    "radius": 1.38,
    "color": "0xFE7D00",
    "mass": 127.6,
    "group": 16,
    "period": 5,
    "block": "p",
    "ie": 9.00966,
    "oxi_n": [-2, -1, 1, 2, 3, 4, 5, 6]
  },
  "I": {
    "no": 53,
    "radius": 1.39,
    "color": "0xFE4300",
    "mass": 126.90447,
    "group": 17,
    "period": 5,
    "block": "p",
    "ie": 10.45126,
    "oxi_n": [-1, 1, 3, 4, 5, 6, 7]
  },
  "Xe": {
    "no": 54,
    "radius": 1.4,
    "color": "0xFE0900",
    "mass": 131.29,
    "group": 18,
    "period": 5,
    "block": "p",
    "ie": 12.1298431,
    "oxi_n": [2, 4, 6, 8]
  },
  "Cs": {
    "no": 55,
    "radius": 2.44,
    "color": "0x0019FE",
    "mass": 132.9054519,
    "group": 1,
    "period": 6,
    "block": "s",
    "ie": 3.893905557,
    "oxi_n": [-1, 1]
  },
  "Ba": {
    "no": 56,
    "radius": 2.15,
    "color": "0x585017",
    "mass": 137.327,
    "group": 2,
    "period": 6,
    "block": "s",
    "ie": 5.211664,
    "oxi_n": [1, 2]
  },
  "La": {
    "no": 57,
    "radius": 2.07,
    "color": "0x008DFE",
    "mass": 178.49,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.5769,
    "oxi_n": [1, 2, 3]
  },
  "Ce": {
    "no": 58,
    "radius": 2.04,
    "color": "0x008DFE",
    "mass": 180.94788,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.5386,
    "oxi_n": [2, 3, 4]
  },
  "Pr": {
    "no": 59,
    "radius": 2.03,
    "color": "0x008DFE",
    "mass": 183.84,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.47,
    "oxi_n": [2, 3, 4, 5]
  },
  "Nd": {
    "no": 60,
    "radius": 2.01,
    "color": "0x008DFE",
    "mass": 186.207,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.525,
    "oxi_n": [2, 3, 4]
  },
  "Pm": {
    "no": 61,
    "radius": 1.99,
    "color": "0x008DFE",
    "mass": 190.23,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.577,
    "oxi_n": [2, 3]
  },
  "Sm": {
    "no": 62,
    "radius": 1.98,
    "color": "0x008DFE",
    "mass": 192.217,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.64371,
    "oxi_n": [2, 3]
  },
  "Eu": {
    "no": 63,
    "radius": 1.98,
    "color": "0x008DFE",
    "mass": 195.084,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.670385,
    "oxi_n": [2, 3]
  },
  "Gd": {
    "no": 64,
    "radius": 1.96,
    "color": "0x008DFE",
    "mass": 196.966569,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 6.1498,
    "oxi_n": [1, 2, 3]
  },
  "Tb": {
    "no": 65,
    "radius": 1.94,
    "color": "0x008DFE",
    "mass": 200.59,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.8638,
    "oxi_n": [1, 2, 3, 4]
  },
  "Dy": {
    "no": 66,
    "radius": 1.92,
    "color": "0x008DFE",
    "mass": 204.3833,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.93905,
    "oxi_n": [2, 3, 4]
  },
  "Ho": {
    "no": 67,
    "radius": 1.92,
    "color": "0x008DFE",
    "mass": 207.2,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 6.0215,
    "oxi_n": [2, 3]
  },
  "Er": {
    "no": 68,
    "radius": 1.89,
    "color": "0x008DFE",
    "mass": 208.9804,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 6.1077,
    "oxi_n": [2, 3]
  },
  "Tm": {
    "no": 69,
    "radius": 1.9,
    "color": "0x008DFE",
    "mass": 208.9824,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 6.18431,
    "oxi_n": [2, 3]
  },
  "Yb": {
    "no": 70,
    "radius": 1.87,
    "color": "0x008DFE",
    "mass": 209.9871,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 6.254159,
    "oxi_n": [2, 3]
  },
  "Lu": {
    "no": 71,
    "radius": 1.87,
    "color": "0x008DFE",
    "mass": 222.0176,
    "group": 53,
    "period": 6,
    "block": "f",
    "ie": 5.425871,
    "oxi_n": [2, 3]
  },
  "Hf": {
    "no": 72,
    "radius": 1.75,
    "color": "0x00C7FE",
    "mass": 138.90547,
    "group": 4,
    "period": 6,
    "block": "d",
    "ie": 6.825069,
    "oxi_n": [-2, 1, 2, 3, 4]
  },
  "Ta": {
    "no": 73,
    "radius": 1.7,
    "color": "0x00FEFA",
    "mass": 140.116,
    "group": 5,
    "period": 6,
    "block": "d",
    "ie": 7.549571,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5]
  },
  "W": {
    "no": 74,
    "radius": 1.62,
    "color": "0x00FEBF",
    "mass": 140.90765,
    "group": 6,
    "period": 6,
    "block": "d",
    "ie": 7.86403,
    "oxi_n": [-4, -2, -1, 1, 2, 3, 4, 5, 6]
  },
  "Re": {
    "no": 75,
    "radius": 1.51,
    "color": "0x00FE85",
    "mass": 144.242,
    "group": 7,
    "period": 6,
    "block": "d",
    "ie": 7.83352,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5, 6, 7]
  },
  "Os": {
    "no": 76,
    "radius": 1.44,
    "color": "0x00FE4B",
    "mass": 144.9127,
    "group": 8,
    "period": 6,
    "block": "d",
    "ie": 8.43823,
    "oxi_n": [-4, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
  },
  "Ir": {
    "no": 77,
    "radius": 1.41,
    "color": "0x00FE11",
    "mass": 150.36,
    "group": 9,
    "period": 6,
    "block": "d",
    "ie": 8.96702,
    "oxi_n": [-3, -1, 1, 2, 3, 4, 5, 6, 7, 8]
  },
  "Pt": {
    "no": 78,
    "radius": 1.36,
    "color": "0x26FE00",
    "mass": 151.964,
    "group": 10,
    "period": 6,
    "block": "d",
    "ie": 8.95883,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5, 6]
  },
  "Au": {
    "no": 79,
    "radius": 1.36,
    "color": "0x585017",
    "mass": 157.25,
    "group": 11,
    "period": 6,
    "block": "d",
    "ie": 9.225553,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 5]
  },
  "Hg": {
    "no": 80,
    "radius": 1.32,
    "color": "0x9AFE00",
    "mass": 158.92535,
    "group": 12,
    "period": 6,
    "block": "d",
    "ie": 10.437504,
    "oxi_n": [-2, 1, 2]
  },
  "Tl": {
    "no": 81,
    "radius": 1.45,
    "color": "0xD5FE00",
    "mass": 162.5,
    "group": 13,
    "period": 6,
    "block": "p",
    "ie": 6.1082871,
    "oxi_n": [-5, -2, -1, 1, 2, 3]
  },
  "Pb": {
    "no": 82,
    "radius": 1.46,
    "color": "0xFEEC00",
    "mass": 164.93032,
    "group": 14,
    "period": 6,
    "block": "p",
    "ie": 7.4166796,
    "oxi_n": [-4, -2, -1, 1, 2, 3, 4]
  },
  "Bi": {
    "no": 83,
    "radius": 1.48,
    "color": "0xFEB200",
    "mass": 167.259,
    "group": 15,
    "period": 6,
    "block": "p",
    "ie": 7.285516,
    "oxi_n": [-3, -2, -1, 1, 2, 3, 4, 5]
  },
  "Po": {
    "no": 84,
    "radius": 1.4,
    "color": "0xFE7800",
    "mass": 168.93421,
    "group": 16,
    "period": 6,
    "block": "p",
    "ie": 8.414,
    "oxi_n": [-2, 2, 4, 5, 6]
  },
  "At": {
    "no": 85,
    "radius": 1.5,
    "color": "0xFE3E00",
    "mass": 173.04,
    "group": 17,
    "period": 6,
    "block": "p",
    "ie": 9.31751,
    "oxi_n": [-1, 1, 3, 5, 7]
  },
  "Rn": {
    "no": 86,
    "radius": 1.5,
    "color": "0xFE0400",
    "mass": 174.967,
    "group": 18,
    "period": 6,
    "block": "p",
    "ie": 10.7485,
    "oxi_n": [2, 6]
  },
  "Fr": {
    "no": 87,
    "radius": 2.6,
    "color": "0x001EFE",
    "mass": 223.0197,
    "group": 1,
    "period": 7,
    "block": "s",
    "ie": 4.0727409,
    "oxi_n": [1]
  },
  "Ra": {
    "no": 88,
    "radius": 2.21,
    "color": "0x0058FE",
    "mass": 226.0254,
    "group": 2,
    "period": 7,
    "block": "s",
    "ie": 5.278424,
    "oxi_n": [2]
  },
  "Ac": {
    "no": 89,
    "radius": 2.15,
    "color": "0x0092FE",
    "mass": 263.1125,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 5.380226,
    "oxi_n": [3]
  },
  "Th": {
    "no": 90,
    "radius": 2.06,
    "color": "0x0092FE",
    "mass": 262.1144,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.3067,
    "oxi_n": [1, 2, 3, 4]
  },
  "Pa": {
    "no": 91,
    "radius": 2,
    "color": "0x0092FE",
    "mass": 266.1219,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 5.89,
    "oxi_n": [3, 4, 5]
  },
  "U": {
    "no": 92,
    "radius": 1.96,
    "color": "0x0092FE",
    "mass": 264.1247,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.19405,
    "oxi_n": [1, 2, 3, 4, 5, 6]
  },
  "Np": {
    "no": 93,
    "radius": 1.9,
    "color": "0x0092FE",
    "mass": 269.1341,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.2655,
    "oxi_n": [2, 3, 4, 5, 6, 7]
  },
  "Pu": {
    "no": 94,
    "radius": 1.87,
    "color": "0x0092FE",
    "mass": 268.1388,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.0258,
    "oxi_n": [2, 3, 4, 5, 6, 7]
  },
  "Am": {
    "no": 95,
    "radius": 1.8,
    "color": "0x0092FE",
    "mass": 272.1463,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 5.9738,
    "oxi_n": [2, 3, 4, 5, 6, 7]
  },
  "Cm": {
    "no": 96,
    "radius": 1.69,
    "color": "0x0092FE",
    "mass": 272.1535,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 5.9914,
    "oxi_n": [3, 4, 6]
  },
  "Bk": {
    "no": 97,
    "radius": 1.6,
    "color": "0x0092FE",
    "mass": 277,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.1978,
    "oxi_n": [3, 4]
  },
  "Cf": {
    "no": 98,
    "radius": 1.55,
    "color": "0x0092FE",
    "mass": 284,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.2817,
    "oxi_n": [2, 3, 4]
  },
  "Es": {
    "no": 99,
    "radius": 1.5,
    "color": "0x0092FE",
    "mass": 289,
    "group": 63,
    "period": 7,
    "block": "f",
    "ie": 6.3676,
    "oxi_n": [2, 3, 4]
  },
  "X": {
    "oxi_n": [],
    "radius": 3,
    "color": "0x000000",
    "mass": 0.0001
  }
}; // If element is not defined

window._AtomParam = JSON.parse(JSON.stringify(AtomParam));

/***/ }),

/***/ "./resources/js/vlatoms/IO/IO.js":
/*!***************************************!*\
  !*** ./resources/js/vlatoms/IO/IO.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (v) {
  return {
    selectMode: "none",
    selectedAtoms: [],
    selectedGroup: [// 1~0
    [], [], [], [], [], [], [], [], [], []],
    orgSelectedAtoms: [],
    selectHow: "normal",
    // normal, merge, overlap, notoverlap, reverse
    customInputPaste: false,
    mousePressed: false,
    selecting: false,
    wasdrag: false,
    start: [-1, -1],
    sphereCenter: new THREE.Vector3(0, 0, 0),
    distance: 0,
    rdfMode: false,
    end: [-1, -1],
    focus: false,
    isMobile: false,
    customSelectCallback: [],
    // Array of functions();
    ctxMenuCfg: __webpack_require__(/*! ./ctxMenuCfg/ctxMenuCfg.js */ "./resources/js/vlatoms/IO/ctxMenuCfg/ctxMenuCfg.js")(v),
    init: function init() {
      // Drag and Drop
      v.wrapper.addEventListener('dragover', v.IO.dragOver.bind(v), false);
      v.wrapper.addEventListener('drop', v.IO.drop.bind(v), false);
      v.wrapper.addEventListener('contextmenu', v.IO.contextMenu.bind(v), false);
      v.wrapper.addEventListener('dblclick', v.IO.loadFile.bind(v), false);
      document.addEventListener('mousedown', v.IO.mouseDown.bind(v), false);
      document.addEventListener('touchstart', v.IO.mouseDown.bind(v), false);
      document.addEventListener('mouseup', v.IO.mouseUp.bind(v), false);
      document.addEventListener('touchend', v.IO.mouseUp.bind(v), false);
      document.addEventListener('touchleave', v.IO.mouseUp.bind(v), false);
      document.addEventListener('mousemove', v.IO.mouseMove.bind(v), false);
      document.addEventListener('touchmove', v.IO.mouseMove.bind(v), false); //v.wrapper.addEventListener('mouseup', v.IO.mouseUp ,false);
      //v.wrapper.addEventListener('mousemove', v.IO.mouseMove ,false);

      v.shiftPressed = false;
      v.spacePressed = false;
      v.altPressed = false;
      v.ctlPressed = false;
      v.IO.initKey();
      v.IO.generateCtxMenu();
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) v.IO.isMobile = true;
      window.addEventListener("keydown", function (e) {
        //arrow keys
        if ([37, 38, 39, 40].indexOf(e.keyCode) > -1 && v.IO.focus) {
          if ($(document.activeElement).prop('tagName') != "INPUT") {
            e.preventDefault();
          }
        }
      }, false);
    },
    toggleSelection: function toggleSelection(mode) {
      v.spacePressed = false;
      v.IO.selectMode = mode;
      v.update.selectInfo();
    },
    loadFile: function loadFile() {
      var tmp_input_file = $(document.createElement("input"));
      tmp_input_file.attr("type", "file");
      tmp_input_file[0].addEventListener("change", function () {
        v.IO.readFiles(this.files);
      });
      tmp_input_file.trigger("click");
      tmp_input_file.remove();
    },
    generateCtxMenu: function generateCtxMenu() {
      var randno = (Math.random() * 10000000).toFixed(0);
      var ctxmenu = "\n<div id=VLAtomsCtx".concat(randno, " class='VLMessage VLatomsCtx' style='width:300px;'><table class=VLMTable style='width:100%;height:100%;'>\n\t<tbody class=VLMBody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<ul class='nav nav-tabs' role=tablist style='margin-bottom:10px;'>\n\t\t\t\t\t<li role=presentation class='nav-item'>\n\t\t\t\t\t\t<a class='nav-link ctx-menu-display active' href=#VLCtx").concat(randno, "_display aria-controls=VLCtx").concat(randno, "_display role=tab data-toggle=tab>Display</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li role=presentation class='nav-item'>\n\t\t\t\t\t\t<a class='nav-link ctx-menu-select' href=#VLCtx").concat(randno, "_select aria-controls=VLCtx").concat(randno, "_select role=tab data-toggle=tab>Select</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li role=presentation class='nav-item'>\n\t\t\t\t\t\t<a class='nav-link ctx-menu-tool' href=#VLCtx").concat(randno, "_tool aria-controls=VLCtx").concat(randno, "_tool role=tab data-toggle=tab>Tool</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=tab-content>\n<!-- Display -->\n\t\t\t\t\t<div role=tabpanel class='tab-pane active' id=VLCtx").concat(randno, "_display style='line-height:35px;'>\n\t\t\t\t\t\t<div class='row form-inline' style='display:flex;'>\n\t\t\t\t\t\t\t<div class='col-6' data-option='backgroundcolor'>\n\t\t\t\t\t\t\t\t<label class=cTxLabel><a href=javascript:;>Background </a></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-6' style='display:flex;'>\n\t\t\t\t\t\t\t\t<input id='backgroundcolor").concat(randno, "' class='form-control backgroundcolor ' style='width:100%;' type=text value='").concat(v.option.backgroundcolor.toString(16), "'>\n\t\t\t\t\t\t\t\t<div style='display:inline;font-size:27px;margin-left:-30px;margin-top:-2px;'>\n\t\t\t\t\t\t\t\t\t<button id='backgroundcolor_pick").concat(randno, "' style='width:20px; height:20px; border:#ccc solid 1px; margin-top:10px;'></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='row form-inline'>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='perspective'>\n\t\t\t\t\t\t\t\t<label class=cTxLabel><a href=javascript:;>Perspective</a></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-6'>\n\t\t\t\t\t\t\t\t<input class='form-control fov' style='width:100%;' type=range min=1 max=90 value=").concat(v.camera.fov, ">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='row form-inline'>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='atoms'>\n\t\t\t\t\t\t\t\t<label class=cTxLabel><a href=javascript:;>Atom</a></label>\n\t\t\t\t\t\t\t\t<span class='fas fa-caret-down sub_option_toggle' data-toggletarget='atom_design_config_wrapper'></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-6'>\n\t\t\t\t\t\t\t\t<input class='form-control atom_radius' style='width:100%;' type=range min=0.01 step=0.01 max=2 value=").concat(v.option.radius.atom, ">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div style='padding:0 40px; display:none;' class='atom_design_config_wrapper'></div>\n\t\t\t\t\t\t<div class='atom_design_detail' data-targetelement='' style='margin-top:-10px;display:none;'>\n\t\t\t\t\t\t\t<div style='display:flex;'>\n\t\t\t\t\t\t\t\t<span style='width:54px;'>Color</span>\n\t\t\t\t\t\t\t\t<input type='text' id='element_color").concat(randno, "' class='form-control element_color' style='display:inline; width:110px;'>\n\t\t\t\t\t\t\t\t<div style='display:inline;font-size:27px;margin-left:-30px;margin-top:-2px;'>\n\t\t\t\t\t\t\t\t\t<button id='element_color_pick").concat(randno, "' style='width: 20px; height: 20px; border: 1px solid rgb(204, 204, 204); margin-top:10px;'></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style='display:flex;'>\n\t\t\t\t\t\t\t\t<span style='width:54px;'>Radius</span>\n\t\t\t\t\t\t\t\t<input type='number' step='0.1' min='0' max='5' class='form-control element_radius' style='display:inline; width:110px;'>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='row form-inline'>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='bonds'>\n\t\t\t\t\t\t\t\t<label class='cTxLabel'><a href=javascript:;>Bond</a></label>\n\t\t\t\t\t\t\t\t<span class='fas fa-caret-down sub_option_toggle' data-toggletarget='bondpairs'></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-6'>\n\t\t\t\t\t\t\t\t<input class='form-control bond_radius' style='width:130px;' type=range min=0.01 step=0.01 max=1 value=").concat(v.option.radius.bond, ">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div style='padding:0 35px; display:none;' class='bondpairs'></div>\n\n\t\t\t\t\t\t<div class='row form-inline'>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='shift'>\n\t\t\t\t\t\t\t\t<label class='cTxLabel'><a href=javascript:;>Shift</a></label>\n\t\t\t\t\t\t\t\t<span class='fas fa-caret-down sub_option_toggle' data-toggletarget='shift'></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div style='display:none;margin-left:16px;' class='shift'>\n\t\t\t\t\t\t\t<div class='form-inline'>\n\t\t\t\t\t\t\t\t<label style='width:45px;'>Value</label>\n\t\t\t\t\t\t\t\t<input class='form-control cell_shift_x' style='width:45px;'>\n\t\t\t\t\t\t\t\t<input class='form-control cell_shift_y' style='width:45px;'>\n\t\t\t\t\t\t\t\t<input class='form-control cell_shift_z' style='width:45px;'>\n\t\t\t\t\t\t\t\t<button type='button' class='btn manipulator_ok shift_cell btn-success'><span class='fas fa-check' aria-hidden='true'></span></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='form-inline'>\n\t\t\t\t\t\t\t\t<a class='center_to_atom' href='javascript:;'>Pick center atom</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='form-inline'>\n\t\t\t\t\t\t\t\t<a class='default_shift' href='javascript:;'>Default</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=row>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='cell'>\n\t\t\t\t\t\t\t\t<a href=javascript:;>Cell</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='axis'>\n\t\t\t\t\t\t\t\t<a href=javascript:;>Axis</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=row>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='cellInfo'>\n\t\t\t\t\t\t\t\t<a href=javascript:;>Cell Info</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-6 disp_option_toggle disp_toggle_swt' data-option='selectInfo'>\n\t\t\t\t\t\t\t\t<a href=javascript:;>Select Info</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=row>\n\t\t\t\t\t\t\t<div class='col-5'>\n\t\t\t\t\t\t\t\t<span style='display:inline-block;width:115px;' class='disp_option_toggle disp_toggle_swt' data-option='ghosts'><a href=javascript:;>Ghosts</a></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-7'>\n\t\t\t\t\t\t\t\t<table style='width:100%; text-align:center;'>\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th width=10%></th>\n\t\t\t\t\t\t\t\t\t\t\t<th width=20%>+</th>\n\t\t\t\t\t\t\t\t\t\t\t<th width=20%>-</th>\n\t\t\t\t\t\t\t\t\t\t\t<th width=50%>tol</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>x</th>\n\t\t\t\t\t\t\t\t\t\t\t<td><input type='checkbox' data-option='ghosts_direction' class='disp_toggle_swt ghosts_direction' data-direction='plus' data-axis='x'></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><input type='checkbox' data-option='ghosts_direction' class='disp_toggle_swt ghosts_direction' data-direction='minus' data-axis='x'></td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<input class='form-control ghosts_direction' data-axis='x' data-option='ghosts_direction' data-direction='tol' type=number min=0.01 step=0.01 max=1 style='padding:6px;'>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>y</th>\n\t\t\t\t\t\t\t\t\t\t\t<td><input type='checkbox' data-option='ghosts_direction' class='disp_toggle_swt ghosts_direction' data-direction='plus' data-axis='y'></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><input type='checkbox' data-option='ghosts_direction' class='disp_toggle_swt ghosts_direction' data-direction='minus' data-axis='y'></td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<input class='form-control ghosts_direction' data-axis='y' data-option='ghosts_direction' data-direction='tol' type=number min=0.01 step=0.01 max=1 style='padding:6px;'>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>z</th>\n\t\t\t\t\t\t\t\t\t\t\t<td><input type='checkbox' data-option='ghosts_direction' class='disp_toggle_swt ghosts_direction' data-direction='plus' data-axis='z'></td>\n\t\t\t\t\t\t\t\t\t\t\t<td><input type='checkbox' data-option='ghosts_direction' class='disp_toggle_swt ghosts_direction' data-direction='minus' data-axis='z'></td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<input class='form-control ghosts_direction' data-axis='z' data-option='ghosts_direction' data-direction='tol' type=number min=0.01 step=0.01 max=1 style='padding:6px;'>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t<div class='col-4 light_button_wrapper' data-lightnumber='1' style='padding-right:0;text-align:center;'>\n\t\t\t\t\t\t\t\t<span class='disp_option_toggle disp_toggle_swt' data-option='light' style='display:inline-block;'><label class='ctxLabel'><a href='javascript:;'>Light1</a></label></span>\n\t\t\t\t\t\t\t\t<span class='fas fa-caret-down sub_option_toggle' data-toggletarget='light_control_box' style='cursor:pointer; color: #999;'></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-4 light_button_wrapper' data-lightnumber='2' style='padding:0;text-align:center;'>\n\t\t\t\t\t\t\t\t<span class='disp_option_toggle disp_toggle_swt' data-option='light' style='display:inline-block;'><label class='ctxLabel'><a href='javascript:;'>Light2</a></label></span>\n\t\t\t\t\t\t\t\t<span class='fas fa-caret-down sub_option_toggle' data-toggletarget='light_control_box' style='cursor:pointer; color: #999;'></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-4 light_button_wrapper' data-lightnumber='3' style='padding-left:0;text-align:center;'>\n\t\t\t\t\t\t\t\t<span class='disp_option_toggle disp_toggle_swt' data-option='light' style='display:inline-block;'><label class='ctxLabel'><a href='javascript:;'>Light3</a></label></span>\n\t\t\t\t\t\t\t\t<span class='fas fa-caret-down sub_option_toggle' data-toggletarget='light_control_box' style='cursor:pointer; color: #999;'></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='form-inline light_control_box' data-lightnumber='' style='display:none; padding:0 30px;'>\n\t\t\t\t\t\t\t<span class='fas fa-arrow-left light' data-arrow='left' aria-hidden='true'></span>\n\t\t\t\t\t\t\t<span class='fas fa-arrow-right light' data-arrow='right' aria-hidden='true'></span>\n\t\t\t\t\t\t\t<span class='fas fa-arrow-up light' data-arrow='top' aria-hidden='true'></span>\n\t\t\t\t\t\t\t<span class='fas fa-arrow-down light' data-arrow='bottom' aria-hidden='true'></span>\n\t\t\t\t\t\t\t<input class='form-control light' style='width:72px;' type='range' min='0.01' max='1.5' value='0.3' step='0.01'>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div role=tabpanel class=tab-pane id=VLCtx").concat(randno, "_select style='padding:5px 0;'>\n\t\t\t\t\t\t<div class='row form-inline' style='align-items:normal;'>\n\t\t\t\t\t\t\t<div class='col-3'><label class='cTxLabel'>Select</label></div>\n\t\t\t\t\t\t\t<div class='col-8'>\n\t\t\t\t\t\t\t\t<label class='switch'>\n\t\t\t\t\t\t\t\t\t<input class='selectFixMove' type='checkbox' checked>\n\t\t\t\t\t\t\t\t\t<span class='slider round'></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='col-12'><hr/></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class='row form-inline' style='align-items:normal;'>\n\t\t\t\t\t\t\t<div class='col-3'><label class='cTxLabel'>Mode</label></div>\n\t\t\t\t\t\t\t\t<div class='col-8'>\n\t\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectSingle' data-mode='atom'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectElement' data-mode='element'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectRect' data-mode='rect'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectHex' data-mode='hex'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectCircle' data-mode='circ'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectLasso' data-mode='lasso'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectMenu selectSphere' data-mode='sphere'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 select'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 select'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='selectSphereCenter' style='display:none;'>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href='#' class=centerFromAtom><span>Get Position from Atom</span></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href='#' class=centerFromInput><span>Get Position from Input</span></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class='row' style='text-align:center;'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-4'>x</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-4'>y</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-4'>z</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-4' style='padding:0;'><input class='sphere_center form-control' data-pos='x' style='width:100%;' value='0'></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-4' style='padding:0;'><input class='sphere_center form-control' data-pos='y' style='width:100%;' value='0'></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-4' style='padding:0;'><input class='sphere_center form-control' data-pos='z' style='width:100%;' value='0'></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='col-12'><hr/></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class='row form-inline' style='align-items:normal;'>\n\t\t\t\t\t\t\t\t<div class='col-3'><label class='cTxLabel'>Method</label></div>\n\t\t\t\t\t\t\t\t<div class='col-8'>\n\t\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectHow selectHowNormal active' data-mode='normal'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectHow selectHowMerge' data-mode='merge'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectHow selectHowReverse' data-mode='reverse'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectHow selectHowOverlap' data-mode='overlap'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectHow selectHowNotoverlap' data-mode='notoverlap'></div>\n\t\t\t\t\t\t\t\t\t\t<div class='col-4 selectHow selectHowDel' data-mode='del'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div role=tabpanel class=tab-pane id=VLCtx").concat(randno, "_tool style='padding:5px 0;'>\n\n\t\t\t\t\t\t\t<div class='row form-inline' style='height:30px;align-items:normal;'>\n\t\t\t\t\t\t\t\t<div class='disp_option col-6'>\n\t\t\t\t\t\t\t\t\t<label class=cTxLabel>Download</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='col-6'>\n\t\t\t\t\t\t\t\t\t<a class='disp_download' href=javascript:; data-type='cif' style='display:inline-block; margin:0 5px;'>CIF</a>\n\t\t\t\t\t\t\t\t\t<a class='disp_download' href=javascript:; data-type='vasp' style='display:inline-block; margin:0 5px;'>VASP</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class='row form-inline' style='height:45px;'>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<label class='cTxLabel'>Distance : </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group' style='height:45px;'>\n\t\t\t\t\t\t\t\t\t<input type=text class='form-control VLCtx_distance' placeholder='Click here' style='width:100%;'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t<div class='row form-inline' style='height:45px;'>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<label class='cTxLabel'>Angle(Vectors) : </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<input type=text class='form-control VLCtx_angle' placeholder='Click here' style='width:100%;'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class='row form-inline' style='height:45px;'>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<label class='cTxLabel'>Angle(Planes) : </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<input type=text class='form-control VLCtx_planeAngle' placeholder='Click here' style='width:100%;'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t<div class='row form-inline' style='height:45px;'>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<label class='cTxLabel'>Space Group : </label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='col-6 form-group'>\n\t\t\t\t\t\t\t\t\t<input type=text class='form-control VLCtx_spaceGroup' placeholder='Click here' style='width:100%;'>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot class=VLMFooter>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<button id=VLAtomsCtxDefaultBtn").concat(randno, " class='btn btn-info' style='margin-right:3px;'>Default</button>\n\t\t\t\t\t<button id=VLAtomsCtxCloseBtn").concat(randno, " class='btn btn-info'>Close</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tfoot>\n\t</table>\n</div>\n");
      $(document.body).append(ctxmenu);
      v.ctxMenu = $('#VLAtomsCtx' + randno);
      v.ctxMenu.data('randno', randno); //css

      v.ctxMenu.find('.light.fas').css('cursor', 'pointer');
      v.ctxMenu.find('.light').css('margin', '0 5px');
      v.ctxMenu.find('.shift_cell').click(function () {
        var ex_shift = [v.option.shift_val[0], v.option.shift_val[1], v.option.shift_val[2]];
        v.option.shift_val = [ex_shift[0] + v.ctxMenu.find(".cell_shift_x").val() * 1, ex_shift[1] + v.ctxMenu.find(".cell_shift_y").val() * 1, ex_shift[2] + v.ctxMenu.find(".cell_shift_z").val() * 1];

        for (var _i = 0; _i < 3; _i++) {
          if (Number.isNaN(v.option.shift_val[_i])) {
            v.option.shift_val[(0, 0, 0)];
            v.ctxMenu.find(".cell_shift_x").val(v.option.shift_val[0]);
            v.ctxMenu.find(".cell_shift_y").val(v.option.shift_val[1]);
            v.ctxMenu.find(".cell_shift_z").val(v.option.shift_val[2]);
            return false;
          }
        }

        v.ctxMenu.find(".cell_shift_x").val(0);
        v.ctxMenu.find(".cell_shift_y").val(0);
        v.ctxMenu.find(".cell_shift_z").val(0);

        if (v.option.shift) {
          for (var _i2 = 0, len = v.Structure.atoms.length; _i2 < len; _i2++) {
            v.Structure.atoms[_i2].x = v.Structure.atoms[_i2].x - v.option.shift_val[0] + ex_shift[0];
            v.Structure.atoms[_i2].y = v.Structure.atoms[_i2].y - v.option.shift_val[1] + ex_shift[1];
            v.Structure.atoms[_i2].z = v.Structure.atoms[_i2].z - v.option.shift_val[2] + ex_shift[2];
          }

          v.Manipulate.insideTest(v.Structure.atoms, {
            "onEscape": true
          });
          v.update.atomsChanged = true;
          v.update.bondsChanged = true;
          v.animateControl.once();
        }
      });
      v.ctxMenu.find('.default_shift').click(function () {
        var ex_shift = [v.option.shift_val[0], v.option.shift_val[1], v.option.shift_val[2]];

        if (v.option.shift) {
          for (var _i3 = 0, len = v.Structure.atoms.length; _i3 < len; _i3++) {
            v.Structure.atoms[_i3].x += ex_shift[0];
            v.Structure.atoms[_i3].y += ex_shift[1];
            v.Structure.atoms[_i3].z += ex_shift[2];
          }
        }

        v.ctxMenu.find(".cell_shift_x").val(0);
        v.ctxMenu.find(".cell_shift_y").val(0);
        v.ctxMenu.find(".cell_shift_z").val(0);
        v.option.shift_val = [0, 0, 0];
        v.Manipulate.insideTest(v.Structure.atoms, {
          "onEscape": true
        });
        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      });
      v.ctxMenu.find('.center_to_atom').click(function () {
        var center = [];
        center[0] = (v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2;
        center[1] = (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2;
        center[2] = (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2;
        var ex_shift = [v.option.shift_val[0], v.option.shift_val[1], v.option.shift_val[2]];
        v.IO.selectedAtoms = [];
        v.IO.toggleSelection("atom");
        v.IO.customSelectCallback.push(function (v) {
          if (v.IO.selectedAtoms.length === 0) return;
          var shift_atoms = v.Structure.atoms[v.IO.selectedAtoms];
          v.option.shift_val = [shift_atoms.x + ex_shift[0] - center[0], shift_atoms.y + ex_shift[1] - center[1], shift_atoms.z + ex_shift[2] - center[2]];
          v.ctxMenu.find(".cell_shift_x").val(0);
          v.ctxMenu.find(".cell_shift_y").val(0);
          v.ctxMenu.find(".cell_shift_z").val(0);

          for (var _i4 = 0, len = v.Structure.atoms.length; _i4 < len; _i4++) {
            v.Structure.atoms[_i4].x += ex_shift[0];
            v.Structure.atoms[_i4].y += ex_shift[1];
            v.Structure.atoms[_i4].z += ex_shift[2];
          }

          if (v.option.shift) {
            for (var _i5 = 0, _len = v.Structure.atoms.length; _i5 < _len; _i5++) {
              v.Structure.atoms[_i5].x -= v.option.shift_val[0];
              v.Structure.atoms[_i5].y -= v.option.shift_val[1];
              v.Structure.atoms[_i5].z -= v.option.shift_val[2];
            }

            v.Manipulate.insideTest(v.Structure.atoms, {
              "onEscape": true
            });
            v.update.atomsChanged = true;
            v.update.bondsChanged = true;
            v.animateControl.once();
          }

          v.IO.customSelectCallback = [];
          v.IO.exitSelectMode();
        });
      });
      $('#VLAtomsCtxDefaultBtn' + randno).click(function () {
        if (confirm("All settings will be changed to default values.")) {
          v.IO.ctxMenuCfg.load({
            cfgList: v.IO.ctxMenuCfg.defaultCtxOption
          });
          AtomParam = JSON.parse(JSON.stringify(_AtomParam));
          v.Structure.atoms.forEach(function (v, i, a) {
            a[i].color = AtomParam[v.element].color;
          });
        }
      });
      $('#VLAtomsCtxCloseBtn' + randno).click(function () {
        v.ctxMenu.hide();
      });
      var dispOptions = ['perspective', 'atoms', 'bonds', 'cell', 'cellInfo', 'axis', 'ghosts', 'shift'];

      for (var i in dispOptions) {
        var key = dispOptions[i];

        if (!v.option[key]) {
          v.ctxMenu.find('.disp_option_toggle[data-option="' + key + '"]').addClass("toggle_off");
        }
      }
      /*			v.ctxMenu.draggable({
      				drag:function(){
      					$(this).css("height","auto");
      				}
      			});*/


      v.ctxMenu.css({
        "position": "absolute",
        "background-color": "white",
        "left": 0,
        "top": 0
      }); //Bind Download btns

      v.ctxMenu.find(".disp_download").click(function () {
        var type = $(this).data("type");
        var elArr = VLatoms.Utils.Structure.getElArr(v.Structure);
        var formula = "";

        for (var element in elArr) {
          formula += element;
          formula += elArr[element];
        }

        switch (type) {
          case "vasp":
            VLatoms.Utils.download("POSCAR." + formula + ".vasp", VLatoms.Utils.Structure.toPoscar(v.Structure));
            break;

          case "cif":
            VLatoms.Utils.download(formula + ".cif", VLatoms.Utils.Structure.toCIF(v.Structure));
            break;
        }
      }); //Bind measure 

      v.ctxMenu.find(".VLCtx_distance").click(function () {
        var _t = $(this);

        v.IO.customSelectCallback = [];
        v.IO.customSelectCallback.push(function () {
          switch (v.IO.selectedAtoms.length) {
            case 2:
              var a1 = v.Structure.atoms[v.IO.selectedAtoms[0]];
              var a2 = v.Structure.atoms[v.IO.selectedAtoms[1]];
              var dist = VLatoms.Math.dist([a1.x, a1.y, a1.z], [a2.x, a2.y, a2.z]);

              _t.val(dist.toFixed(3) + " Å");

              v.IO.selectedAtoms = [];
              v.IO.customSelectCallback = [];
              break;

            case 1:
              _t.val("Select 1 more atom");

              break;

            case 0:
              _t.val("");

              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;
          }
        });
        v.IO.exitSelectMode();

        _t.val("Select two atoms");

        if (v.IO.selectMode !== "atom") {
          v.ctxMenu.find(".selectSingle").click();
        }

        v.ctxMenu.find(".selectHowMerge").click();
      });
      v.ctxMenu.find(".VLCtx_angle").click(function () {
        var _t = $(this);

        v.IO.customSelectCallback = [];
        v.IO.customSelectCallback.push(function () {
          switch (v.IO.selectedAtoms.length) {
            case 3:
              var a1 = v.Structure.atoms[v.IO.selectedAtoms[0]];
              var a2 = v.Structure.atoms[v.IO.selectedAtoms[1]];
              var a3 = v.Structure.atoms[v.IO.selectedAtoms[2]];
              var dist1 = VLatoms.Math.dist([a1.x, a1.y, a1.z], [a2.x, a2.y, a2.z]);
              var dist2 = VLatoms.Math.dist([a2.x, a2.y, a2.z], [a3.x, a3.y, a3.z]);
              var vec1 = VLatoms.Math.subtract([a1.x, a1.y, a1.z], [a2.x, a2.y, a2.z]);
              var vec2 = VLatoms.Math.subtract([a3.x, a3.y, a3.z], [a2.x, a2.y, a2.z]);

              var _theta = VLatoms.Math.dot(vec1, vec2) / dist1 / dist2;

              var theta = Math.acos(_theta) * 180 / Math.PI;

              _t.val(theta.toFixed(3) + " °");

              v.IO.selectedAtoms = [];
              v.IO.customSelectCallback = [];
              break;

            case 2:
              _t.val("Select 1 more atom");

              break;

            case 1:
              _t.val("Select 2 more atoms");

              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;
          }
        });
        v.IO.exitSelectMode();

        _t.val("Select three atoms");

        if (v.IO.selectMode !== "atom") {
          v.ctxMenu.find(".selectSingle").click();
        }

        v.ctxMenu.find(".selectHowMerge").click();
      });
      v.ctxMenu.find(".VLCtx_planeAngle").click(function () {
        var _t = $(this);

        v.IO.customSelectCallback = [];
        v.IO.customSelectCallback.push(function () {
          switch (v.IO.selectedAtoms.length) {
            case 4:
              var pangle = VLatoms.Math.checkPlaneAngle(v);

              _t.val(pangle.toFixed(3) + " °");

              v.IO.selectedAtoms = [];
              v.IO.customSelectCallback = [];
              break;

            case 3:
              _t.val("Select 1 more atom");

              break;

            case 2:
              _t.val("Select 2 more atoms");

              break;

            case 1:
              _t.val("Select 3 more atoms");

              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;
          }
        });
        v.IO.exitSelectMode();

        _t.val("Select 4 more atoms");

        if (v.IO.selectMode !== "atom") {
          v.ctxMenu.find(".selectSingle").click();
        }

        v.ctxMenu.find(".selectHowMerge").click();
      });
      v.ctxMenu.hide(); //			this.initializeLightPos();	//LightPos was deprecated. - schan

      this.bindLightPos();
      v.ctxMenu.find(".backgroundcolor").change(function () {
        v.renderer.setClearColor(parseInt("0x" + $(this).val()));
        v.animateControl.once();
      });
      v.ctxMenu.find(".element_color").change(function () {
        var changedValue = "0x" + $(this).val().toUpperCase();
        var targetElement = $(this).parent().parent().data('targetelement');
        AtomParam[targetElement].color = changedValue;
        v.option.customAtomParam[targetElement] = v.option.customAtomParam[targetElement] || {};
        v.option.customAtomParam[targetElement].color = changedValue;
        v.Structure.atoms.forEach(function (v, i, a) {
          if (v.element == targetElement) {
            a[i].color = changedValue;
          }
        });
        v.IO.restoreAtomsColor();
      });
      v.ctxMenu.find(".element_radius").change(function () {
        //맞는 값인지 조건 넣기
        var changedValue = $(this).val() * 1;
        var targetElement = $(this).parent().parent().data('targetelement');
        AtomParam[targetElement].radius = changedValue;
        v.option.customAtomParam[targetElement] = v.option.customAtomParam[targetElement] || {};
        v.option.customAtomParam[targetElement].radius = changedValue;
        v.Structure.atoms.forEach(function (v, i, a) {
          if (v.element == targetElement) {
            a[i].radius = changedValue;
          }
        });
        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      });
      v.ctxMenu.find(".fov").on("input change", function () {
        v.camera.fov = $(this).val() * 1;
        v.camera.updateProjectionMatrix();
        v.setOptimalCamPosition();
        v.animateControl.once();
        /*				if(v.camera.fov == 0 && (v.camera instanceof THREE.PerspectiveCamera)){
        					v.setOrthographicCamera();
        				}else if(v.camera.fov !=0 && (v.camera instanceof THREE.OrthographicCamera)){
        					v.setPerspectiveCamera();
        				}else{
        					v.setOptimalCamPosition();
        				}
        */
      });
      v.ctxMenu.find(".atom_radius").on("input change", function () {
        v.option.radius.atom = $(this).val() * 1;
        /*				if(v.option.radius.atom==0){
        					v.option.atoms=false;
        				}else{
        					v.option.atoms=true;
        				}*/

        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      });
      v.ctxMenu.find(".bond_radius").on("input change", function () {
        v.option.radius.bond = $(this).val() * 1;
        /*				if(v.option.radius.bond==0){
        					v.option.bonds=false;
        				{
        					v.option.bonds=true;
        				}*/

        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.update.bondsScaleChanged = true;
        v.animateControl.once();
      });
      v.ctxMenu.find(".light").click(function () {
        var position_step = 10;
        var lightNumber = v.ctxMenu.find('.light_control_box').data('lightnumber') - 1;
        if (lightNumber == -1) return false;
        var arrow = $(this).data('arrow'); //find('.gliphicon-triangle-left').length);

        switch (arrow) {
          case "left":
            v.option.light[lightNumber].pos.y = v.option.light[lightNumber].pos.y - position_step < -90 ? -90 : v.option.light[lightNumber].pos.y - position_step;
            break;

          case "right":
            v.option.light[lightNumber].pos.y = v.option.light[lightNumber].pos.y + position_step > 90 ? 90 : v.option.light[lightNumber].pos.y + position_step;
            break;

          case "top":
            v.option.light[lightNumber].pos.x = v.option.light[lightNumber].pos.x - position_step < -90 ? -90 : v.option.light[lightNumber].pos.x -= position_step;
            break;

          case "bottom":
            v.option.light[lightNumber].pos.x = v.option.light[lightNumber].pos.x + position_step > 90 ? 90 : v.option.light[lightNumber].pos.x += position_step;
            break;

          /*	???
          					case "selectInfo":
          							v.option.selectInfo=!v.option.selectInfo;
          					break;
          */
        }

        v.animateControl.once();
      });
      v.ctxMenu.find(".light.form-control").on("input change", function () {
        var changedValue = $(this).val() * 1;
        var lightNumber = v.ctxMenu.find('.light_control_box').data('lightnumber') - 1;
        if (lightNumber == -1) return false;
        v.option.light[lightNumber].intensity = changedValue;
        v.light[lightNumber].intensity = changedValue;
        v.animateControl.once();
      });
      v.ctxMenu.find(".centerFromInput").click(function () {
        var pos = [v.ctxMenu.find(".sphere_center[data-pos=x]").val(), v.ctxMenu.find(".sphere_center[data-pos=y]").val(), v.ctxMenu.find(".sphere_center[data-pos=z]").val()];
        var str_center = [(v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2, (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2, (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2];
        pos = [pos[0] - str_center[0], pos[1] - str_center[1], pos[2] - str_center[2]];
        v.IO.sphereCenter = new THREE.Vector3(pos[0], pos[1], pos[2]);
        v.IO.toggleSelection("sphere");
      });
      v.ctxMenu.find(".VLCtx_spaceGroup").click(function () {
        if (v.Structure.atoms.length > 0 && v.Structure.atoms.length < 100) {
          var ret_spacegroup = VLatoms.Utils.Structure.getSpaceGroup(v);

          if (ret_spacegroup) {
            $(this).val(ret_spacegroup.replace(/\"/g, ""));
          }
        }
      });
      v.ctxMenu.find(".centerFromAtom").click(function () {
        v.IO.toggleSelection("pos");
      });
      v.ctxMenu.find(".selectMenu").click(function () {
        if ($(this).hasClass("active")) {
          v.ctxMenu.find(".selectMenu").removeClass("active");
          v.ctxMenu.find(".selectSphereCenter").hide();
          v.IO.exitSelectMode();
        } else {
          var mode = $(this).data("mode");
          v.ctxMenu.find(".selectMenu").removeClass("active");

          if (mode !== "sphere") {
            v.ctxMenu.find(".selectSphereCenter").hide();
            v.IO.toggleSelection(mode);
          } else {
            v.ctxMenu.find(".selectSphereCenter").show();
          }

          $(this).addClass("active");
        }
      });
      v.ctxMenu.find(".selectFixMove").change(function () {
        var opt = $(this).prop("checked"); // opposite with v.spacepressed

        v.spacePressed = !opt;
      });
      v.ctxMenu.find(".selectHow").click(function () {
        if (!$(this).hasClass("active")) {
          var mode = $(this).data("mode");
          v.ctxMenu.find(".selectHow").removeClass("active");
          v.IO.selectHow = mode;
          $(this).addClass("active");
        }

        v.update.selectInfo();
      });
      v.ctxMenu.find(".sub_option_toggle").css('cursor', 'pointer').css('color', '#999').click(function (e) {
        var toggleTarget = $(this).data('toggletarget');
        if (toggleTarget == "") return false; //set actions

        function toggle(_this) {
          if ($(_this).hasClass('fa-caret-down')) {
            $(_this).addClass('fa-caret-up');
            $(_this).removeClass('fa-caret-down');
            v.ctxMenu.find('.' + toggleTarget).show();
          } else {
            $(_this).addClass('fa-caret-down');
            $(_this).removeClass('fa-caret-up');
            v.ctxMenu.find('.' + toggleTarget).hide();
          }
        }

        var argsBefore = {
          light_control_box: {
            _this: this,
            toggleTarget: toggleTarget
          }
        };
        var argsAfter = {
          light_control_box: {
            _this: this,
            toggleTarget: toggleTarget
          }
        };
        var actionBefore = {
          light_control_box: function light_control_box(args) {
            var lightNumber = $(args._this).parent().data('lightnumber');
            v.ctxMenu.find('.' + args.toggleTarget).data('lightnumber', lightNumber);
            v.ctxMenu.find('.light_button_wrapper>.fas').each(function () {
              if ($(this).hasClass('fa-caret-up')) {
                $(this).addClass('fa-caret-down');
                $(this).removeClass('fa-caret-up');
              }
            });
            v.ctxMenu.find('.light_control_box>input').val(v.option.light[lightNumber - 1].intensity);
          }
        };
        var actionAfter = {}; //action

        if (actionBefore[toggleTarget] != undefined) actionBefore[toggleTarget](argsBefore[toggleTarget]);
        toggle(this);
        if (actionAfter[toggleTarget] != undefined) actionAfter[toggleTarget](argsAfter[toggleTarget]);
        e.stopPropagation();
      }); //변화가 생기면 우클릭메뉴 현 상태 저장

      v.ctxMenu.unbind();
      v.ctxMenu.draggable({
        drag: function drag() {
          $(this).css("height", "auto");
        }
      });
      v.ctxMenu.on("click", function () {
        v.IO.ctxMenuCfg.save();
      });
      v.ctxMenu.on("change", function () {
        v.IO.ctxMenuCfg.save();
      }); //color palet. need jscolor.js

      v.IO.ctxMenuCfg.jscolor.background = new jscolor("backgroundcolor_pick" + randno, {
        valueElement: "backgroundcolor" + randno,
        styleElement: "backgroundcolor_pick" + randno,
        zIndex: 100000002
      });
      v.IO.ctxMenuCfg.jscolor.atom = new jscolor("element_color_pick" + randno, {
        valueElement: "element_color" + randno,
        styleElement: "element_color_pick" + randno,
        zIndex: 100000002
      }); //, value:this.ctxMenuCfg.option["v.ctxMenu.find('.backgroundcolor').val()"]
    },

    /*		initializeLightPos  (){
    			var _lw = v.ctxMenu.find('.lightpos_wrapper');
    			for(var i=0;i<3;i++){
    				var lx = v.option.lightpos[i].x;
    				var ly = v.option.lightpos[i].y;
    				v.ctxMenu.find('.lightpos'+(i+1)).css("left",(ly+90)*180/200);
    				v.ctxMenu.find('.lightpos'+(i+1)).css("top",(lx+90)*180/200);
    			}
    		},*/

    /* LightPos was deprecated. - schan */
    bindLightPos: function bindLightPos() {
      function getGhostsDirection() {
        function checkGhostsCheckbox(direct) {
          var gp = v.ctxMenu.find(".ghosts_direction[data-direction='plus'][data-axis='" + direct + "']").prop("checked");
          var gm = v.ctxMenu.find(".ghosts_direction[data-direction='minus'][data-axis='" + direct + "']").prop("checked");

          if (gp && gm) {
            return 2;
          } else if (gp) {
            return 1;
          } else if (gm) {
            return -1;
          } else {
            return 0;
          }
        }

        return [checkGhostsCheckbox("x"), checkGhostsCheckbox("y"), checkGhostsCheckbox("z")];
      }

      function getGhostsTol() {
        var tol = [v.ctxMenu.find(".ghosts_direction[data-direction='tol'][data-axis='x']").val() * 1, v.ctxMenu.find(".ghosts_direction[data-direction='tol'][data-axis='y']").val() * 1, v.ctxMenu.find(".ghosts_direction[data-direction='tol'][data-axis='z']").val() * 1];

        for (var i = 0; i < tol.length; i++) {
          if (Number.isNaN(tol[i]) || tol[i] > 1 || tol[i] < 0.01) {
            tol[i] = 1;
          }
        }

        return tol;
      }

      v.ctxMenu.find(".ghosts_direction").change(function () {
        var mode = $(this).data("option");

        switch (mode) {
          case "ghosts_direction":
            v.option.ghosts_direction = getGhostsDirection();
            v.option.ghosts_tolerance = getGhostsTol();
            v.update.atomsChanged = true;
            v.update.bondsChanged = true;
            v.animateControl.once();
            break;
        }
      });
      v.ctxMenu.find('.disp_toggle_swt').click(function (e, u) {
        //e.preventDefault(); // 이거 왜했지?
        var mode = $(this).data("option");

        switch (mode) {
          case "perspective":
            v.option.perspective = !v.option.perspective;

            if (v.option.perspective) {
              v.ctxMenu.find(".fov").show();
              v.setPerspectiveCamera();
            } else {
              v.ctxMenu.find(".fov").hide();
              v.setOrthographicCamera();
            }

            break;

          case "shift":
            v.option.shift = !v.option.shift;

            if (v.option.shift) {
              for (var i = 0, len = v.Structure.atoms.length; i < len; i++) {
                v.Structure.atoms[i].x -= v.option.shift_val[0];
                v.Structure.atoms[i].y -= v.option.shift_val[1];
                v.Structure.atoms[i].z -= v.option.shift_val[2];
              }

              v.Manipulate.insideTest(v.Structure.atoms, {
                "onEscape": true
              });
              v.update.atomsChanged = true;
              v.update.bondsChanged = true;
              v.animateControl.once();
            } else {
              for (var _i6 = 0, _len2 = v.Structure.atoms.length; _i6 < _len2; _i6++) {
                v.Structure.atoms[_i6].x += v.option.shift_val[0];
                v.Structure.atoms[_i6].y += v.option.shift_val[1];
                v.Structure.atoms[_i6].z += v.option.shift_val[2];
              }

              v.Manipulate.insideTest(v.Structure.atoms, {
                "onEscape": true
              });
              v.update.atomsChanged = true;
              v.update.bondsChanged = true;
              v.animateControl.once();
            }

            break;

          case "atoms":
            v.option.atoms = !v.option.atoms;

            if (v.option.atoms) {
              v.ctxMenu.find(".atom_radius").show();
              $(this).parent().find('.fas').show();
            } else {
              v.ctxMenu.find(".atom_radius").hide();
              $(this).parent().find('.fas').hide();
            }

            break;

          case "bonds":
            v.option.bonds = !v.option.bonds;

            if (v.option.bonds) {
              v.ctxMenu.find(".bond_radius").show();
              $(this).parent().find('.fas').show();
            } else {
              v.ctxMenu.find(".bond_radius").hide();
              $(this).parent().find('.fas').hide();
            }

            break;

          case "cell":
            v.option.cell = !v.option.cell;
            break;

          case "cellInfo":
            v.option.cellInfo = !v.option.cellInfo;
            break;

          case "selectInfo":
            v.option.selectInfo = !v.option.selectInfo;
            /*						if(!v.option.selectInfo){ 
            								$("#VLScreen_selectInfo").empty(); 
            						} */

            break;

          case "axis":
            v.option.axis = !v.option.axis;
            break;

          case "ghosts":
            //TODO HERE #92
            v.option.ghosts = !v.option.ghosts;

            if (v.option.ghosts) {
              v.option.ghosts_direction = getGhostsDirection();
              v.option.ghosts_tolerance = getGhostsTol();
            }

            break;

          case "light":
            var lightNumber;
            lightNumber = $(this).parent().data('lightnumber') - 1;
            v.option.light[lightNumber].on = !v.option.light[lightNumber].on;
            var toggleIcon = $(this).parent().find('.fas');

            if (v.option.light[lightNumber].on) {
              v.light[lightNumber].intensity = v.option.light[lightNumber].intensity;

              if (toggleIcon.hasClass('fa-triangle-top')) {
                toggleIcon.addClass('fa-caret-down');
                toggleIcon.removeClass('fa-triangle-top');
              }

              $(this).parent().find('.fas').show();
              $(this).find('label').css('width', '42px');
            } else {
              v.light[lightNumber].intensity = 0;
              v.ctxMenu.find('.light_control_box').hide();
              $(this).parent().find('.fas').hide();
              $(this).find('label').css('width', '59.6px');
            }

            break;
        }

        if ($(this).hasClass("disp_option_toggle")) {
          if ($(this).hasClass("toggle_off")) {
            $(this).removeClass("toggle_off");
          } else {
            $(this).addClass("toggle_off");
          }
        }

        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      });
      v.ctxMenu.find('.toggle_ghosts').click(function () {
        v.option.ghosts = !v.option.ghosts;
        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      });
      /*			for(var i=1;i<=3;i++){
      				v.ctxMenu.find('.lightpos'+i).draggable({
      					containment:v.ctxMenu.find('.lightpos_wrapper'),
      					drag:function(){
      					var _lw = v.ctxMenu.find('.lightpos_wrapper');
      					var tp = $(this).position();
      					var tx = tp.left;
      					var ty = tp.top;
      					var thisidx = +$(this).data("lightidx");
      					v.option.lightpos[thisidx].y = -90+tx/200*180;
      					v.option.lightpos[thisidx].x = -90+ty/200*180;
      				}});
      				v.ctxMenu.find('.lightpos'+i).bind({"mousewheel":function(e,u){
      						e.preventDefault();
      						var del = -e.originalEvent.wheelDelta;
      						var thisidx = +$(this).data("lightidx");
      						$(this).css("width",v.light[thisidx].intensity*60+6);
      						$(this).css("height",v.light[thisidx].intensity*60+6);
      						if(del<0){
      							v.light[thisidx].intensity+=0.05;
      						}else{
      							var inten = v.light[thisidx].intensity;
      							if(inten<0.1){
      								v.light[thisidx].intensity=0;
      							}else{
      								v.light[thisidx].intensity-=0.05;
      							}
      						}
      					}
      				});
      			}*/

      /* LightPos was deprecated. - schan */
    },
    initKey: function initKey() {
      $(document).keydown({
        v: v
      }, function (e, u) {
        if (!v.IO.focus) return;
        var domtype = $(e.target)[0].type || "Default";
        if ($(e.target)[0].isContentEditable) domtype = "textarea";

        if (domtype != "text" && domtype != "textarea" && domtype != "select-one") {
          switch (e.keyCode * 1) {
            case 16:
              // SHIFT
              v.shiftPressed = true;
              break;

            case 17:
              // CTL	
              v.ctlPressed = true;
              break;

            case 18:
              // ALT
              v.altPressed = true;
              e.preventDefault();
              break;

            case 32:
              // space
              if (!v.spacePressed) {
                v.ctxMenu.find(".selectFixMove").prop("checked", false);
                v.ctxMenu.find(".selectFixMove").change();
              }

              v.spacePressed = true;
              e.preventDefault();
              e.stopPropagation();
              break;

            case 188:
              switch (v.IO.selectHow) {
                case "normal":
                  v.ctxMenu.find(".selectHowDel").click();
                  break;

                case "merge":
                  v.ctxMenu.find(".selectHowNormal").click();
                  break;

                case "reverse":
                  v.ctxMenu.find(".selectHowMerge").click();
                  break;

                case "overlap":
                  v.ctxMenu.find(".selectHowReverse").click();
                  break;

                case "notoverlap":
                  v.ctxMenu.find(".selectHowOverlap").click();
                  break;

                case "del":
                  v.ctxMenu.find(".selectHowNotoverlap").click();
                  break;
              }

              break;

            case 190:
              switch (v.IO.selectHow) {
                case "normal":
                  v.ctxMenu.find(".selectHowMerge").click();
                  break;

                case "merge":
                  v.ctxMenu.find(".selectHowReverse").click();
                  break;

                case "reverse":
                  v.ctxMenu.find(".selectHowOverlap").click();
                  break;

                case "overlap":
                  v.ctxMenu.find(".selectHowNotoverlap").click();
                  break;

                case "notoverlap":
                  v.ctxMenu.find(".selectHowDel").click();
                  break;

                case "del":
                  v.ctxMenu.find(".selectHowNormal").click();
                  break;
              }

              break;

            case 219:
              var type = "vz";

              if (v.ctlPressed) {
                type = "vx";
              } else if (v.shiftPressed) {
                type = "vy";
              }

              v.rotateView(-10, type);
              break;

            case 221:
              var type = "vz";

              if (v.ctlPressed) {
                type = "vx";
              } else if (v.shiftPressed) {
                type = "vy";
              }

              v.rotateView(10, type);
              break;
          }
        }

        v.update.selectInfo();
      });
      $(document).keyup({
        v: v
      }, function (e, u) {
        if (!v.IO.focus) return;
        var domtype = $(e.target)[0].type || "Default";
        if ($(e.target)[0].isContentEditable) domtype = "textarea";

        if (domtype != "text" && domtype != "textarea" && domtype != "select-one" && domtype != "password" || +e.keyCode == 27) {
          switch (e.keyCode * 1) {
            case 16:
              // Shift
              v.shiftPressed = false;
              break;

            case 17:
              // CTL
              v.ctlPressed = false;
              break;

            case 18:
              // ALT
              v.altPressed = false;
              break;

            case 27:
              // ESC
              v.ctxMenu.hide();
              v.IO.exitSelectMode();
              break;

            case 32:
              // space
              if (v.spacePressed) {
                v.ctxMenu.find(".selectFixMove").prop("checked", true);
                v.ctxMenu.find(".selectFixMove").change();
              }

              v.spacePressed = false;
              break;

            case 46:
              // Delete
              v.manipulateAtom.removeSelectedAtoms();
              break;

            case 86:
              // v
              if (v.ctlPressed == true) {
                v.Manipulate.paste();
                v.Manipulate.addHistory({
                  mode: "Paste",
                  args: {},
                  Structure: objClone(v.Structure)
                });
              }

              break;

            case 49:
              if (v.shiftPressed) {
                v.IO.selectedGroup[0] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[0].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 50:
              if (v.shiftPressed) {
                v.IO.selectedGroup[1] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[1].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 51:
              if (v.shiftPressed) {
                v.IO.selectedGroup[2] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[2].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 52:
              if (v.shiftPressed) {
                v.IO.selectedGroup[3] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[3].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 53:
              if (v.shiftPressed) {
                v.IO.selectedGroup[4] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[4].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 54:
              if (v.shiftPressed) {
                v.IO.selectedGroup[5] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[5].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 55:
              if (v.shiftPressed) {
                v.IO.selectedGroup[6] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[6].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 56:
              if (v.shiftPressed) {
                v.IO.selectedGroup[7] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[7].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 57:
              if (v.shiftPressed) {
                v.IO.selectedGroup[8] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[8].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 48:
              if (v.shiftPressed) {
                v.IO.selectedGroup[9] = v.IO.selectedAtoms.slice(0);
              } else {
                v.IO.selectedAtoms = v.IO.selectedGroup[9].slice(0);
              }

              v.update.selectInfo();
              v.IO.restoreAtomsColor();
              v.IO.highlightSelectedAtoms();
              break;

            case 65:
              // a
              v.axisView("a");
              break;

            case 66:
              // b 
              v.axisView("b");
              break;

            case 67:
              // c 
              v.axisView("c");
              break;

            case 88:
              // x
              v.axisView("x");
              break;

            case 89:
              // y 
              v.axisView("y");
              break;

            case 90:
              // z 
              v.axisView("z");
              break;

            case 81:
              // q
              v.manipulateAtom.rotate({
                direction: "vz",
                step: -v.option.step.rotate,
                onEscape: v.option.onEscape
              });
              break;

            case 69:
              // e
              v.manipulateAtom.rotate({
                direction: "vz",
                step: v.option.step.rotate,
                onEscape: v.option.onEscape
              });
              break;

            case 38:
              // up arrow
              //						case 87: // w
              v.manipulateAtom.move({
                direction: "vy",
                step: v.option.step.move,
                onEscape: v.option.onEscape
              });
              break;

            case 37:
              //left arrow
              //						case 65: //a
              v.manipulateAtom.move({
                direction: "vx",
                step: -v.option.step.move,
                onEscape: v.option.onEscape
              });
              break;

            case 39:
              // right arrow
              //						case 68: // d
              v.manipulateAtom.move({
                direction: "vx",
                step: v.option.step.move,
                onEscape: v.option.onEscape
              });
              break;

            case 40:
              // down arrow
              //						case 83: // s
              v.manipulateAtom.move({
                direction: "vy",
                step: -v.option.step.move,
                onEscape: v.option.onEscape
              });
              break;

            case 219:
              //[
              v.controls.update();
              v.animateControl.once();
              break;

            case 221:
              //]
              v.controls.update();
              v.animateControl.once();
              break;

            case 70:
              //f							
              v.rotateView(180, "vx");
              v.controls.update();
              v.animateControl.once();
              break;

            case 71:
              //g
              v.controls.target.set(0, 0, 0);
              v.controls.update();
              v.animateControl.once();
              break;
          }
        }

        v.update.selectInfo();
      });
      $(v.wrapper).bind({
        "contextmenu": function contextmenu(e, u) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    },
    showCtxMenu: function showCtxMenu(e) {
      if (!v.IO.wasdrag) {
        //temporarily true
        var ctxMenuHeight = 600; // 

        var targetY = e.pageY;

        var _overflowY = $(window).height() + $(window).scrollTop() - (e.pageY + ctxMenuHeight);

        if (_overflowY < 0
        /* Overflow */
        ) {
            targetY += _overflowY - 30;
          }

        v.ctxMenu.css("left", e.pageX + 20);
        v.ctxMenu.css("top", targetY);
        v.ctxMenu.show();
        v.ctxMenu.find(".VLCtx_distance").val("");
        v.ctxMenu.find(".VLCtx_angle").val("");
        v.ctxMenu.css("z-index", $.topZIndex() + 1);
      }
    },
    restoreAtomsColor: function restoreAtomsColor() {
      /*	원자별 표시 선택 기능 추가로 atoms 순서와 Meshes 순서가 같지 않음. (Meshes가 모자람)
      			for(var idx in v.Structure.atoms){
      				var ca = v.Structure.atoms[idx];
      				try{
      					v.atomMeshes[idx].material.color.setHex(ca.color);	
      				}catch(e){
      				}
      			}
      */
      for (var _idx in v.atomMeshes) {
        try {
          v.atomMeshes[_idx].material.color.setHex(v.Structure.atoms[v.atomMeshes[_idx].atomid].color);
        } catch (e) {}
      }

      for (var idx in v.highlightMeshes) {
        try {
          v.scene.remove(v.highlightMeshes[idx]);
        } catch (e) {
          console.log(e);
        }
      }

      v.animateControl.once();
    },
    blurAtoms: function blurAtoms() {
      // TODO HERE
      for (var i = 0; i < v.atomMeshes.length; i++) {
        v.atomMeshes[i].material.opacity = 0.3;
      }
    },
    unblurAtoms: function unblurAtoms() {
      for (var i = 0; i < v.atomMeshes.length; i++) {
        v.atomMeshes[i].material.opacity = 1;
      }
    },
    highlightSelectedAtoms: function highlightSelectedAtoms() {
      if (this.selectedAtoms.length != 0) {
        for (var i = 0; i < v.highlightMeshes.length; i++) {
          v.scene.remove(v.highlightMeshes[i]);
        }

        for (var i = 0; i < this.selectedAtoms.length; i++) {
          var ca_idx = this.selectedAtoms[i];
          /*	원자별 표시 선택 기능 추가로 atoms 순서와 Meshes 순서가 같지 않음. (Meshes가 모자람)
          					 v.atomMeshes[ca_idx].material.color.setHex('0x0000ff');
          					 v.atomMeshes[ca_idx].material.opacity = 1;
          v.atomMeshes[meshIndex].material.color.setHex('0x0000ff');
          v.atomMeshes[meshIndex].material.opacity = 1;
          */

          var meshIndex = v.atomMeshes.findIndex(function (e) {
            return e.atomid == ca_idx;
          });
          var oa = v.atomMeshes[meshIndex];
          var mat = new THREE.MeshBasicMaterial({
            color: 0x1212ff,
            side: THREE.BackSide
          });
          var geom = new THREE.SphereGeometry(1, 32);
          var mesh = new THREE.Mesh(geom, mat);
          mesh.scale.set(oa.scale.x + 0.1, oa.scale.y + 0.1, oa.scale.z + 0.1);
          mesh.position.set(oa.position.x, oa.position.y, oa.position.z);
          v.scene.add(mesh);
          v.highlightMeshes.push(mesh);
        }
      }

      v.animateControl.once();
    },
    dragOver: function dragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    readFiles: function readFiles(files) {
      for (var i = 0; i < files.length; i++) {
        var reader = new FileReader();

        reader.onload = function (f) {
          var fileName = f.name;

          var _fn = fileName.split(".");

          var suffix = "none";

          if (fileName.toLowerCase().match("poscar") || fileName.toLowerCase().match("contcar")) {
            suffix = "POSCAR";
          } else if (_fn.length > 1) {
            suffix = _fn[_fn.length - 1];
          }

          if (suffix == "vasp" || suffix == "VASP") suffix = "POSCAR";
          return function (e) {
            var text = e.target;
            var StructureRead = text.result; //var _structure = VLatoms.Utils.Structure.poscarToVLatoms(StructureRead);

            switch (suffix.toLowerCase()) {
              case "xyz":
                var _structure = VLatoms.Utils.Structure.xyzToVLatoms(StructureRead);

                break;

              case "cif":
                var _structure = VLatoms.Utils.Structure.cifToVLatoms(StructureRead);

                break;

              case "poscar":
                var _structure = VLatoms.Utils.Structure.poscarToVLatoms(StructureRead);

                break;

              case "none":
                break;
            }

            console.log(_structure);

            if (_structure === false) {
              return;
            } //						v.manipulateAtom.appendStructure(_structure);


            if (v.Structure.atoms !== undefined) {
              if (v.Structure.atoms.length != 0) {
                if (confirm("Do you want to append structure?")) {
                  for (var i = 0; i < _structure.atoms.length; i++) {//										v.manipulateAtom.checkAtomPositionAfterManipulate(_structure.atoms[i],i,true);
                  }

                  if (confirm("Do you want to keep the cell size?")) {
                    var testRet = v.Manipulate.insideTest(_structure.atoms, {
                      onEscape: true
                    }); //

                    var oldNatoms = v.Structure.atoms.length;
                    v.Structure = VLatoms.Utils.Structure.union(v.Structure, _structure);
                  } else {
                    var testRet = v.Manipulate.insideTest(_structure.atoms); //

                    var oldNatoms = v.Structure.atoms.length;
                    v.Structure = VLatoms.Utils.Structure.union(v.Structure, _structure);
                    v.Manipulate.vacuum({
                      "nx": testRet.delta[0],
                      "ny": testRet.delta[1],
                      "nz": testRet.delta[2],
                      "px": testRet.delta[3],
                      "py": testRet.delta[4],
                      "pz": testRet.delta[5]
                    });
                  }

                  this.selectedAtoms = [];

                  for (var i = oldNatoms; i < v.Structure.atoms.length; i++) {
                    this.selectedAtoms.push(i);
                  }

                  try {
                    make_matsq_alert("Atoms are added.", "New atoms are selected. Please move them to their proper position.", "info");
                  } catch (e) {
                    alert("New atoms are selected. Please move them to their proper position.");
                  }
                } else {
                  v.Structure = _structure;
                }
              } else {
                v.Structure = _structure;
              }
            } else {
              v.Structure = _structure;
            }

            if (v.fileReaderCallback) v.fileReaderCallback({
              fileName: fileName,
              structure: _structure
            }); //v.Structure = _structure;

            v.update.atomsChanged = true;
            v.update.bondsChanged = true;
            v.setOptimalCamPosition();
            v.animateControl.once();
            v.Manipulate.addHistory({
              mode: "File Load",
              args: {},
              Structure: VLatoms.Utils.redefineStructure(v.Structure)
            });
          };
        }(files[i]);

        reader.readAsText(files[i]);
      }

      if (v.structureListWrapper !== undefined) {
        v.StructureList.drawStructureList();
      }
    },
    drop: function drop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      v.IO.readFiles(files); //var msg = "";
      //var btn = {test:function(){alert();},close:true};
      //			v.UI.message("Please select the File Type",msg,btn);

      return;
    },
    mouseMove: function mouseMove(e) {
      if (!v.IO.mousePressed) return;
      if (v.spacePressed) return;
      if (v.IO.selectMode == 'none') return;

      if (v.IO.selecting) {
        e.stopPropagation();
        e.preventDefault();
      }

      var cPos = [e.pageX - 2, e.pageY - 2];

      var _guide = $('#select_guide');

      var startx, starty;

      switch (v.IO.selectMode) {
        case "rect":
          startx = Math.min(v.IO.start[0], cPos[0]);
          starty = Math.min(v.IO.start[1], cPos[1]);
          var gwidth = Math.abs(v.IO.start[0] - cPos[0]);
          var gheight = Math.abs(v.IO.start[1] - cPos[1]);

          _guide.css("left", startx);

          _guide.css("top", starty);

          _guide.css("width", gwidth);

          _guide.css("height", gheight);

          break;

        case "circ":
          var radius = VLatoms.Math.len([cPos[0] - v.IO.start[0], cPos[1] - v.IO.start[1], 0]);

          _guide.css("left", v.IO.start[0] - radius);

          _guide.css("top", v.IO.start[1] - radius);

          _guide.css("width", radius * 2);

          _guide.css("height", radius * 2);

          break;

        case "pent":
          startx = Math.min(v.IO.start[0], cPos[0]);
          starty = Math.min(v.IO.start[1], cPos[1]);
          var gwidth = Math.abs(v.IO.start[0] - cPos[0]);
          var gheight = Math.abs(v.IO.start[1] - cPos[1]);

          var _canvas = document.getElementById('vlvSelectArea');

          var _ctx = _canvas.getContext('2d');

          v.IO.polygon = [[startx, starty + gheight / 2.618]];
          v.IO.polygon.push([startx + 0.5 * gwidth, starty]);
          v.IO.polygon.push([startx + gwidth, starty + gheight / 2.618]);
          v.IO.polygon.push([startx + 0.80901 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx + 0.19098 * gwidth, starty + gheight]);

          _ctx.clearRect(0, 0, 3000, 3000);

          _ctx.fillStyle = 'rgba(183,126,129,0.3)';
          _ctx.strokeStyle = 'rgba(183,126,129,0.9)';
          _ctx.fillStyle = 'rgba(255,0,0,0.1)';

          _ctx.beginPath();

          _ctx.setLineDash([1, 1]);

          _ctx.moveTo(v.IO.polygon[0][0], v.IO.polygon[0][1]);

          for (var i = 0; i < v.IO.polygon.length; i++) {
            _ctx.lineTo(v.IO.polygon[i][0], v.IO.polygon[i][1]);
          }

          _ctx.closePath();

          _ctx.stroke();

          _ctx.fill();

          break;

        case "hex":
          startx = Math.min(v.IO.start[0], cPos[0]);
          starty = Math.min(v.IO.start[1], cPos[1]);
          var gwidth = Math.abs(v.IO.start[0] - cPos[0]);
          var gheight = Math.abs(v.IO.start[1] - cPos[1]);

          var _canvas = document.getElementById('vlvSelectArea');

          var _ctx = _canvas.getContext('2d');

          v.IO.polygon = [[startx + 0.25 * gwidth, starty]];
          v.IO.polygon.push([startx + 0.75 * gwidth, starty]);
          v.IO.polygon.push([startx + gwidth, starty + 0.5 * gheight]);
          v.IO.polygon.push([startx + 0.75 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx + 0.25 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx, starty + 0.5 * gheight]);

          _ctx.clearRect(0, 0, 3000, 3000);

          _ctx.fillStyle = 'rgba(183,126,129,0.3)';
          _ctx.strokeStyle = 'rgba(183,126,129,0.9)';
          _ctx.fillStyle = 'rgba(255,0,0,0.1)';

          _ctx.beginPath();

          _ctx.setLineDash([1, 1]);

          _ctx.moveTo(v.IO.polygon[0][0], v.IO.polygon[0][1]);

          for (var i = 0; i < v.IO.polygon.length; i++) {
            _ctx.lineTo(v.IO.polygon[i][0], v.IO.polygon[i][1]);
          }

          _ctx.closePath();

          _ctx.stroke();

          _ctx.fill();

          break;

        case "hept":
          startx = Math.min(v.IO.start[0], cPos[0]);
          starty = Math.min(v.IO.start[1], cPos[1]);
          var gwidth = Math.abs(v.IO.start[0] - cPos[0]);
          var gheight = Math.abs(v.IO.start[1] - cPos[1]);

          var _canvas = document.getElementById('vlvSelectArea');

          var _ctx = _canvas.getContext('2d');

          v.IO.polygon = [[startx + 0.5 * gwidth, starty]];
          v.IO.polygon.push([startx + 0.900969 * gwidth, starty + gheight * 0.198062]);
          v.IO.polygon.push([startx + gwidth, starty + gheight * 0.643104]);
          v.IO.polygon.push([startx + 0.722521 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx + 0.277479 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx, starty + gheight * 0.643104]);
          v.IO.polygon.push([startx + 0.099031 * gwidth, starty + gheight * 0.198062]);

          _ctx.clearRect(0, 0, 3000, 3000);

          _ctx.fillStyle = 'rgba(183,126,129,0.3)';
          _ctx.strokeStyle = 'rgba(183,126,129,0.9)';
          _ctx.fillStyle = 'rgba(255,0,0,0.1)';

          _ctx.beginPath();

          _ctx.setLineDash([1, 1]);

          _ctx.moveTo(v.IO.polygon[0][0], v.IO.polygon[0][1]);

          for (var i = 0; i < v.IO.polygon.length; i++) {
            _ctx.lineTo(v.IO.polygon[i][0], v.IO.polygon[i][1]);
          }

          _ctx.closePath();

          _ctx.stroke();

          _ctx.fill();

          break;

        case "octa":
          startx = Math.min(v.IO.start[0], cPos[0]);
          starty = Math.min(v.IO.start[1], cPos[1]);
          var gwidth = Math.abs(v.IO.start[0] - cPos[0]);
          var gheight = Math.abs(v.IO.start[1] - cPos[1]);

          var _canvas = document.getElementById('vlvSelectArea');

          var _ctx = _canvas.getContext('2d');

          v.IO.polygon = [[startx + 0.292893 * gwidth, starty]];
          v.IO.polygon.push([startx + 0.707107 * gwidth, starty]);
          v.IO.polygon.push([startx + gwidth, starty + gheight * 0.292893]);
          v.IO.polygon.push([startx + gwidth, starty + gheight * 0.707107]);
          v.IO.polygon.push([startx + 0.707107 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx + 0.292893 * gwidth, starty + gheight]);
          v.IO.polygon.push([startx, starty + gheight * 0.707107]);
          v.IO.polygon.push([startx, starty + gheight * 0.292893]);

          _ctx.clearRect(0, 0, 3000, 3000);

          _ctx.fillStyle = 'rgba(183,126,129,0.3)';
          _ctx.strokeStyle = 'rgba(183,126,129,0.9)';
          _ctx.fillStyle = 'rgba(255,0,0,0.1)';

          _ctx.beginPath();

          _ctx.setLineDash([1, 1]);

          _ctx.moveTo(v.IO.polygon[0][0], v.IO.polygon[0][1]);

          for (var i = 0; i < v.IO.polygon.length; i++) {
            _ctx.lineTo(v.IO.polygon[i][0], v.IO.polygon[i][1]);
          }

          _ctx.closePath();

          _ctx.stroke();

          _ctx.fill();

          break;

        case "lasso":
          v.IO.polygon.push(cPos);

          var _canvas = document.getElementById('vlvSelectArea');

          var _ctx = _canvas.getContext('2d');

          _ctx.clearRect(0, 0, 3000, 3000);

          _ctx.fillStyle = 'rgba(183,126,129,0.3)';
          _ctx.strokeStyle = 'rgba(183,126,129,0.9)';
          _ctx.fillStyle = 'rgba(255,0,0,0.1)';

          _ctx.beginPath();

          _ctx.setLineDash([1, 1]);

          _ctx.moveTo(v.IO.polygon[0][0], v.IO.polygon[0][1]);

          for (var i = 0; i < v.IO.polygon.length; i++) {
            _ctx.lineTo(v.IO.polygon[i][0], v.IO.polygon[i][1]);
          }

          _ctx.closePath();

          _ctx.stroke();

          _ctx.fill(); //					_ctx.beginPath();
          //					_ctx.moveTo( v.IO.polygon[l-1][0], v.IO.polygon[l-1][1] );


          break;

        case "sphere":
          var scr_pos = v.IO.toScreenXY(v.IO.sphereCenter);
          v.IO.start[0] = scr_pos.x;
          v.IO.start[1] = scr_pos.y;
          var radius = VLatoms.Math.len([cPos[0] - v.IO.start[0], cPos[1] - v.IO.start[1], 0]);

          _guide.css("left", v.IO.start[0] - radius);

          _guide.css("top", v.IO.start[1] - radius);

          _guide.css("width", radius * 2);

          _guide.css("height", radius * 2);

          var _str_offset = [(v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2, (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2, (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2];
          var wrapper_offset = $(v.wrapper).offset();
          var sphere_p_x = (cPos[0] - wrapper_offset.left) / $(v.wrapper).width() * 2 - 1;
          var sphere_p_y = -((cPos[1] - wrapper_offset.top) / $(v.wrapper).height()) * 2 + 1;
          var raycaster;

          if (v.camera.type == "PerspectiveCamera") {
            var _vector = new THREE.Vector3(sphere_p_x, sphere_p_y, 0.5);

            v.camera.updateMatrixWorld(true);

            _vector.unproject(v.camera);

            raycaster = new THREE.Raycaster(v.camera.position, _vector.sub(v.camera.position).normalize());
          } else if (v.camera.type == "OrthographicCamera") {
            raycaster = new THREE.Raycaster();
            var vector = new THREE.Vector2(sphere_p_x, sphere_p_y);
            raycaster.setFromCamera(vector, v.camera);
          }

          var z_shift = -v.IO.sphereCenter.distanceTo(v.camera.position);
          var target_pos = new THREE.Vector3(raycaster.ray.origin.x - raycaster.ray.direction.x * z_shift, raycaster.ray.origin.y - raycaster.ray.direction.y * z_shift, raycaster.ray.origin.z - raycaster.ray.direction.z * z_shift);
          v.IO.distance = v.IO.sphereCenter.distanceTo(target_pos);
          var __center = [v.IO.sphereCenter.x + _str_offset[0], v.IO.sphereCenter.y + _str_offset[1], v.IO.sphereCenter.z + _str_offset[2]];
          v.IO.selectedAtoms = [];

          for (var i = 0; i < v.Structure.atoms.length; i++) {
            var sqrt_d = new THREE.Vector3(__center[0], __center[1], __center[2]).distanceTo(new THREE.Vector3(v.Structure.atoms[i].x, v.Structure.atoms[i].y, v.Structure.atoms[i].z));

            if (sqrt_d <= v.IO.distance) {
              v.IO.selectedAtoms.push(i);
            }
          }

          v.update.selectInfo();
          v.IO.restoreAtomsColor();
          v.IO.highlightSelectedAtoms();
          break;
      }
    },
    mouseDown: function mouseDown(e) {
      $(document.activeElement).blur();

      if (["text", "textarea", "select", "radio"].indexOf(e.target.nodeName.toLocaleLowerCase()) >= 0) {
        v.IO.selecting = false;
        return;
      }

      v.IO.focus = $(e.target).closest(v.option.area).length == 1 || $(e.target).closest(v.ctxMenu[0]).length == 1;
      if (!v.IO.focus) return false;
      v.animateControl.start();

      if (v.IO.selectMode !== "sphere") {
        v.IO.start = [e.pageX, e.pageY];
      }

      if (e.button !== 0) {
        if (e.button === 2) {
          $(v.controls.domElement).css('cursor', 'move');
        }

        return;
      }

      if (v.spacePressed) return;

      if (v.IO.selectMode == 'none') {
        $(v.controls.domElement).css('cursor', 'grab');
        return;
      }

      $(v.controls.domElement).css('cursor', 'crosshair');
      $('#select_guide').remove();
      var domtype = $(e.target)[0].localName; //.toLowerCase();

      if (domtype) domtype = domtype.toLowerCase();
      if (domtype !== "canvas") return;

      if (!v.spacePressed) {
        e.stopPropagation();
        e.preventDefault();
      }

      v.IO.mousePressed = true;
      v.IO.selecting = true;
      v.controls.enabled = false;

      switch (v.IO.selectMode) {
        case "atom":
        case "element":
          v.IO.orgSelectedAtoms = v.IO.selectedAtoms.slice(0);
          v.IO.selectedAtoms = [];
          break;

        case "rect":
          v.IO.orgSelectedAtoms = v.IO.selectedAtoms.slice(0);
          v.IO.selectedAtoms = [];
          $(document.body).append("<div id=select_guide style='background-color:rgba(183,126,129,0.3);position:absolute;border:dotted 1px rgba(183,126,129,0.9);'></div>");
          break;

        case "circ":
          v.IO.orgSelectedAtoms = v.IO.selectedAtoms.slice(0);
          v.IO.selectedAtoms = [];
          $(document.body).append("<div id=select_guide style='background-color:rgba(183,126,129,0.3);position:absolute;border:dotted 1px rgba(183,126,129,0.9);border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;'></div>");
          break;

        case "pent":
        case "hex":
        case "hept":
        case "octa":
          v.IO.orgSelectedAtoms = v.IO.selectedAtoms.slice(0);
          v.IO.selectedAtoms = [];
          $('#vlvSelectArea').remove();
          $(document.body).append("<canvas id=vlvSelectArea width=" + $(document).width() + " height=" + $(document).height() + " style='position:absolute;left:0;top:0;z-index:10000;'></canvas>");
          break;

        case "lasso":
          v.IO.orgSelectedAtoms = v.IO.selectedAtoms.slice(0);
          v.IO.selectedAtoms = [];
          v.IO.polygon = [[e.pageX - 2, e.pageY - 2]];
          $('#vlvSelectArea').remove();
          $(document.body).append("<canvas id=vlvSelectArea width=" + $(document).width() + " height=" + $(document).height() + " style='position:absolute;left:0;top:0;z-index:10000;'></canvas>");
          /*					var _canvas = document.getElementById('vlvSelectArea');
          					var _ctx = _canvas.getContext('2d');
          					_ctx.beginPath();
          					_ctx.moveTo( v.IO.polygon[0][0], v.IO.polygon[0][1] );*/

          break;

        case "sphere":
          v.IO.orgSelectedAtoms = v.IO.selectedAtoms.slice(0);
          v.IO.selectedAtoms = [];
          $(document.body).append("<div id=select_guide style='background-color:rgba(183,126,129,0.3);position:absolute;border:dotted 1px rgba(183,126,129,0.9);border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;'></div>");
          break;
      }
    },
    contextMenu: function contextMenu(e) {
      v.IO.showCtxMenu(e);
    },
    mouseUp: function mouseUp(e) {
      $('#vlvSelectArea').remove();

      if (v.IO.focus) {
        v.animateControl.stop();
      }

      $(v.controls.domElement).css('cursor', 'default'); //			if(!v.IO.mousePressed) return;

      v.IO.mousePressed = false;
      v.IO.end = [e.pageX, e.pageY];

      if (v.IO.start[0] == v.IO.end[0] && v.IO.start[1] == v.IO.end[1]) {
        v.IO.wasdrag = false;
      } else {
        v.IO.wasdrag = true;
      }

      if (!v.IO.selecting) {
        return;
      }
      /*			if(e.which == 3 && !v.IO.wasdrag){ // Ctx Menu
      				v.IO.showCtxMenu(e);
      				return;
      			}*/
      //moved 20180710


      v.IO.selecting = false;
      v.controls.enabled = true;
      $('#select_guide').remove();
      if (v.spacePressed) return;
      if (v.IO.selectMode == 'none') return;

      if (v.IO.selectMode == 'atom' && e.target.nodeName.toLocaleLowerCase() != "canvas") {
        return;
      }
      /*	if(e.target.nodeName.toLocaleLowerCase() == "canvas")
      	{*/


      if (v.IO.selectMode !== "none") {
        v.IO.selectCallback();
        v.update.cellInfo();
        v.update.selectInfo();
      }
      /*	}*/

    },
    select: function select(mode) {
      v.IO.selectedAtoms = [];
      v.IO.selectMode = mode;
    },
    exitSelectMode: function exitSelectMode() {
      v.IO.wasdrag = false;
      v.IO.selectMode = 'none';
      v.IO.selectedAtoms = [];
      v.IO.restoreAtomsColor();
      v.update.cellInfo();
      v.update.selectInfo();
      v.ctxMenu.find(".selectMenu").removeClass("active");

      for (var i = 0; i < v.IO.customSelectCallback.length; i++) {
        v.IO.customSelectCallback[i](v);
      }
    },
    toWorldXYZ: function toWorldXYZ(position) {//TODO

      /*
      			var wx,wy,wz;
      			var sx,sy;
      			sx = (position.x - $(v.wrapper).offset().left) / ($(v.wrapper).width()/2) - 1,
      			sy = -( (position.y - $(v.wrapper).offset().top) / ( $(v.wrapper).height()/2 ) -1 );
      			var pos = new THREE.Vector3(sx,sy,-1);
      			var projWorldMat = new THREE.Matrix4();
      			v.camera.updateProjectionMatrix();
      			var pmi = (new THREE.Matrix4()).getInverse(v.camera.projectionMatrix);
      			projWorldMat.multiplyMatrices(v.camera.matrixWorld, pmi );
      
      			var projScreenMat = new THREE.Matrix4();
      			projScreenMat.multiplyMatrices( v.camera.projectionMatrix, v.camera.matrixWorldInverse );
      
      			pos.unproject(projScreenMat, v.camera);
      			return pos;*/
    },
    toScreenXY: function toScreenXY(position) {
      var pos = position.clone();
      var projScreenMat = new THREE.Matrix4();
      v.camera.updateProjectionMatrix();
      projScreenMat.multiplyMatrices(v.camera.projectionMatrix, v.camera.matrixWorldInverse);
      pos.applyProjection(projScreenMat);
      return {
        x: (pos.x + 1) * $(v.wrapper).width() / 2 + $(v.wrapper).offset().left,
        y: (-pos.y + 1) * $(v.wrapper).height() / 2 + $(v.wrapper).offset().top
      };
    },
    getPosOnCanvas: function getPosOnCanvas(pos) {
      var mouse = {};
      var wrapper_offset = $(v.wrapper).offset();
      mouse.x = (pos[0] - wrapper_offset.left) / $(v.wrapper).width() * 2 - 1;
      mouse.y = -((pos[1] - wrapper_offset.top) / $(v.wrapper).height()) * 2 + 1;
      return mouse;
    },
    selectCallback: function selectCallback() {
      function getOneAtom() {
        if (v.camera.type == "PerspectiveCamera") {
          var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
          vector.unproject(v.camera);
          var raycaster = new THREE.Raycaster(v.camera.position, vector.sub(v.camera.position).normalize());
          var intersects = raycaster.intersectObjects(v.atomMeshes);
        } else if (v.camera.type == "OrthographicCamera") {
          var raycaster = new THREE.Raycaster();
          var vector = new THREE.Vector2(mouse.x, mouse.y);
          raycaster.setFromCamera(vector, v.camera);
          var intersects = raycaster.intersectObjects(v.atomMeshes);
        }

        var this_atomid = -1;

        if (intersects.length > 0) {
          var this_atomid = intersects[0].object.atomid;
        }

        return this_atomid;
      }

      var mouse = v.IO.getPosOnCanvas(v.IO.end);
      var atoms = v.atomMeshes;
      var endx = v.IO.end[0];
      var endy = v.IO.end[1];
      var startx = v.IO.start[0];
      var starty = v.IO.start[1];

      switch (v.IO.selectMode) {
        case "none":
          break;

        case "atom":
          var this_atomid = getOneAtom();

          if (this_atomid >= 0) {
            var cidx = v.IO.selectedAtoms.indexOf(this_atomid);

            if (v.IO.selectedAtoms.indexOf(this_atomid) < 0) {
              v.IO.selectedAtoms.push(this_atomid);
            } else {
              v.IO.selectedAtoms.splice(cidx, 1);
            }
          }

          v.IO.restoreAtomsColor();
          v.IO.highlightSelectedAtoms();
          break;

        case "element":
          var this_atomid = getOneAtom();

          if (this_atomid < 0) {
            return false;
          }

          var selected_element = v.Structure.atoms[this_atomid].element;

          for (var i = 0; i < v.Structure.atoms.length; i++) {
            var ca = v.Structure.atoms[i];

            if (ca.element == selected_element) {
              var cidx = v.IO.selectedAtoms.indexOf(i);

              if (cidx < 0) {
                v.IO.selectedAtoms.push(i);
              }
            }
          }

          break;

        case "circ":
          var selectRadius = VLatoms.Math.len([endx - startx, endy - starty, 0]);

          for (var i = 0; i < atoms.length; i++) {
            var screenpos = v.IO.toScreenXY(v.atomMeshes[i].position);
            var in_range;

            var _dr = VLatoms.Math.len([screenpos.x - startx, screenpos.y - starty, 0]);

            in_range = selectRadius >= _dr;

            if (in_range) {
              var this_atomid = atoms[i].atomid;
              var cidx = v.IO.selectedAtoms.indexOf(this_atomid);

              if (cidx < 0) {
                v.IO.selectedAtoms.push(this_atomid);
              }
            }
          }

          break;

        case "rect":
          for (var i = 0; i < atoms.length; i++) {
            var screenpos = v.IO.toScreenXY(v.atomMeshes[i].position);
            var in_range;
            in_range = screenpos.x > startx && screenpos.x < endx && screenpos.y > starty && screenpos.y < endy || screenpos.x > startx && screenpos.x < endx && screenpos.y < starty && screenpos.y > endy || screenpos.x < startx && screenpos.x > endx && screenpos.y > starty && screenpos.y < endy || screenpos.x < startx && screenpos.x > endx && screenpos.y < starty && screenpos.y > endy;

            if (in_range) {
              var this_atomid = atoms[i].atomid;
              var cidx = v.IO.selectedAtoms.indexOf(this_atomid);

              if (cidx < 0) {
                v.IO.selectedAtoms.push(this_atomid);
              }
            }
          }

          break;

        case "pent":
        case "hex":
        case "hept":
        case "octa":
        case "lasso":
          for (var i = 0; i < atoms.length; i++) {
            var screenpos = v.IO.toScreenXY(v.atomMeshes[i].position);
            var point = [screenpos.x, screenpos.y];
            in_range = VLatoms.Utils.pointInPolygon(point, v.IO.polygon);

            if (in_range) {
              var this_atomid = atoms[i].atomid;
              var cidx = v.IO.selectedAtoms.indexOf(this_atomid);

              if (cidx < 0) {
                v.IO.selectedAtoms.push(this_atomid);
              }
            }
          } //TODO	


          break;

        case "sphere":
          break;

        case "pos":
          var atom_id = getOneAtom();

          if (atom_id < 0) {
            return false;
          }

          v.IO.exitSelectMode();
          var _str_offset = [(v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2, (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2, (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2];
          v.IO.sphereCenter.x = v.Structure.atoms[atom_id].x - _str_offset[0];
          v.IO.sphereCenter.y = v.Structure.atoms[atom_id].y - _str_offset[1];
          v.IO.sphereCenter.z = v.Structure.atoms[atom_id].z - _str_offset[2];
          var scr_pos = v.IO.toScreenXY(v.IO.sphereCenter);
          v.IO.start = [scr_pos.x, scr_pos.y];
          v.IO.toggleSelection('sphere');
          break;
      }

      switch (v.IO.selectHow) {
        case "normal":
          v.IO.orgSelectedAtoms = [];
          break;

        case "merge":
          for (var i = 0, len = v.IO.orgSelectedAtoms.length; i < len; i++) {
            if (v.IO.selectedAtoms.indexOf(v.IO.orgSelectedAtoms[i]) < 0) {
              v.IO.selectedAtoms.push(v.IO.orgSelectedAtoms[i]);
            }
          }

          break;

        case "overlap":
          var new_selected = [];

          for (var i = 0, len = v.IO.orgSelectedAtoms.length; i < len; i++) {
            if (v.IO.selectedAtoms.indexOf(v.IO.orgSelectedAtoms[i]) >= 0) {
              new_selected.push(v.IO.orgSelectedAtoms[i]);
            }
          }

          v.IO.selectedAtoms = new_selected.slice(0);
          break;

        case "notoverlap":
          var new_selected = [];

          for (var i = 0, len = v.IO.orgSelectedAtoms.length; i < len; i++) {
            if (v.IO.selectedAtoms.indexOf(v.IO.orgSelectedAtoms[i]) <= 0) {
              new_selected.push(v.IO.orgSelectedAtoms[i]);
            }
          }

          for (var i = 0, len = v.IO.selectedAtoms.length; i < len; i++) {
            if (v.IO.orgSelectedAtoms.indexOf(v.IO.selectedAtoms[i]) <= 0) {
              new_selected.push(v.IO.selectedAtoms[i]);
            }
          }

          v.IO.selectedAtoms = new_selected.slice(0);
          break;

        case "reverse":
          var new_selected = [];

          for (var i = 0, len = v.Structure.atoms.length; i < len; i++) {
            if (v.IO.selectedAtoms.indexOf(i) < 0) {
              new_selected.push(i);
            }
          }

          v.IO.selectedAtoms = new_selected.slice(0);
          break;

        case "del":
          for (var i = v.IO.orgSelectedAtoms.length - 1; i >= 0; i--) {
            if (v.IO.selectedAtoms.indexOf(v.IO.orgSelectedAtoms[i]) >= 0) {
              v.IO.orgSelectedAtoms.splice(i, 1);
            }
          }

          v.IO.selectedAtoms = v.IO.orgSelectedAtoms.slice(0);
          break;
      }

      v.IO.restoreAtomsColor();
      v.IO.highlightSelectedAtoms();

      if (v.openwin.editShow) {
        v.openwin.Manipulate.DrawFromInput();
      }

      for (var i = 0; i < v.IO.customSelectCallback.length; i++) {
        v.IO.customSelectCallback[i](v);
      }
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/IO/ctxMenuCfg/ctxMenuCfg.js":
/*!**********************************************************!*\
  !*** ./resources/js/vlatoms/IO/ctxMenuCfg/ctxMenuCfg.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    jscolor: {},
    storeName: "",
    storeCfg: false,
    //Before changing to true, storeName must be set.
    defaultCtxOption: {
      "v.ctxMenu.find('.backgroundcolor').val()": "ffffff",
      "v.option.perspective": true,
      "v.option.atoms": true,
      "v.option.bonds": true,
      "v.ctxMenu.find('.atom_radius').val()": 0.6,
      "v.ctxMenu.find('.bond_radius').val()": 0.1,
      "v.ctxMenu.find('.fov').val()": 3,
      "v.option.cell": true,
      "v.option.cellInfo": true,
      "v.option.cellInfoSpaceGroup": true,
      "v.option.selectInfo": true,
      "v.option.axis": true,
      "v.option.ghosts": false,
      "v.option.ghosts_direction[0]": 2,
      "v.option.ghosts_direction[1]": 2,
      "v.option.ghosts_direction[2]": 2,
      "v.option.ghosts_tolerance[0]": 1,
      "v.option.ghosts_tolerance[1]": 1,
      "v.option.ghosts_tolerance[2]": 1,
      "v.option.light": [{
        pos: {
          x: 0,
          y: 0
        },
        on: true,
        intensity: 0.333
      }, {
        pos: {
          x: 0,
          y: 0
        },
        on: true,
        intensity: 0.333
      }, {
        pos: {
          x: 0,
          y: 0
        },
        on: true,
        intensity: 0.333
      }],
      "AtomParam": {}
    },
    save: function save() {
      if (!v.IO.ctxMenuCfg.storeCfg) return false;

      if (v.IO.ctxMenuCfg.storeName == "") {
        alert("'storeName' must be blank.");
        return false;
      }

      function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
      }

      var ctxOption = {
        "v.ctxMenu.find('.backgroundcolor').val()": v.ctxMenu.find(".backgroundcolor").val(),
        "v.option.perspective": v.option.perspective,
        "v.option.atoms": true,
        //v.option.atoms,
        "v.option.bonds": v.option.bonds,
        "v.ctxMenu.find('.atom_radius').val()": v.ctxMenu.find('.atom_radius').val(),
        "v.ctxMenu.find('.bond_radius').val()": v.ctxMenu.find('.bond_radius').val(),
        "v.ctxMenu.find('.fov').val()": v.ctxMenu.find('.fov').val(),
        "v.option.cell": v.option.cell,
        "v.option.cellInfo": v.option.cellInfo,
        //				"v.option.cellInfoSpaceGroup": v.option.cellInfoSpaceGroup,
        "v.option.cellInfoSpaceGroup": true,
        "v.option.selectInfo": v.option.selectInfo,
        "v.option.axis": v.option.axis,
        "v.option.ghosts": v.option.ghosts,
        "v.option.ghosts_direction[0]": v.option.ghosts_direction[0],
        "v.option.ghosts_direction[1]": v.option.ghosts_direction[1],
        "v.option.ghosts_direction[2]": v.option.ghosts_direction[2],
        "v.option.ghosts_tolerance[0]": v.option.ghosts_tolerance[0],
        "v.option.ghosts_tolerance[1]": v.option.ghosts_tolerance[1],
        "v.option.ghosts_tolerance[2]": v.option.ghosts_tolerance[2],
        "v.option.light": v.option.light,
        "v.option.customAtomParam": v.option.customAtomParam
      };
      setCookie(v.IO.ctxMenuCfg.storeName, JSON.stringify(ctxOption));
    },
    load: function load(args) {
      function getCookie(c_name) {
        var i,
            x,
            y,
            ARRcookies = document.cookie.split(";");

        for (i = 0; i < ARRcookies.length; i++) {
          x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
          y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
          x = x.replace(/^\s+|\s+$/g, "");

          if (x == c_name) {
            return unescape(y);
          }
        }
      } //쿠키에 저장된 값 불러오기


      var _ctx_Option = getCookie(v.IO.ctxMenuCfg.storeName);

      if (_ctx_Option === undefined) return false;
      var ctx_Option = JSON.parse(_ctx_Option);

      if (args !== undefined) {
        if (args.cfgList !== undefined) {
          ctx_Option = args.cfgList;
        }
      }

      v.IO.ctxMenuCfg.option = ctx_Option; //값 불러오기 끝
      //값 배분

      v.ctxMenu.find(".backgroundcolor").val(ctx_Option["v.ctxMenu.find('.backgroundcolor').val()"]);
      v.IO.ctxMenuCfg.jscolor.background.fromString(ctx_Option["v.ctxMenu.find('.backgroundcolor').val()"]); //				v.option.perspective=ctx_Option['v.option.perspective'];

      v.ctxMenu.find('.fov').val(ctx_Option["v.ctxMenu.find('.fov').val()"]); //				v.option.atoms=ctx_Option['v.option.atoms'];

      v.ctxMenu.find('.atom_radius').val(ctx_Option["v.ctxMenu.find('.atom_radius').val()"]); //				v.option.radius.atom=ctx_Option["$('.atom_radius').val()"];
      //				v.option.bonds=ctx_Option['v.option.bonds'];

      v.ctxMenu.find('.bond_radius').val(ctx_Option["v.ctxMenu.find('.bond_radius').val()"]); //				v.option.radius.bond=ctx_Option["$('.bond_radius').val()"];
      //				v.option.cell=ctx_Option['v.option.cell'];
      //				v.option.cellInfo=ctx_Option['v.option.cellInfo'];
      //				v.option.axis=ctx_Option['v.option.axis'];
      //				v.option.selectInfo=ctx_Option['v.option.selectInfo'];
      //				v.option.ghosts=ctx_Option['v.option.ghosts'];

      v.option.ghosts_direction[0] = ctx_Option['v.option.ghosts_direction[0]'];
      v.option.ghosts_direction[1] = ctx_Option['v.option.ghosts_direction[1]'];
      v.option.ghosts_direction[2] = ctx_Option['v.option.ghosts_direction[2]'];
      v.option.ghosts_tolerance[0] = ctx_Option['v.option.ghosts_tolerance[0]'] || 1;
      v.option.ghosts_tolerance[1] = ctx_Option['v.option.ghosts_tolerance[1]'] || 1;
      v.option.ghosts_tolerance[2] = ctx_Option['v.option.ghosts_tolerance[2]'] || 1;

      for (var i = 0; i < 3; i++) {
        var direct = "x";

        switch (i) {
          case 0:
            direct = "x";
            break;

          case 1:
            direct = "y";
            break;

          case 2:
            direct = "z";
            break;
        }

        switch (v.option.ghosts_direction[i]) {
          case -1:
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='plus']").prop("checked", false);
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='minus']").prop("checked", true);
            break;

          case 0:
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='plus']").prop("checked", false);
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='minus']").prop("checked", false);
            break;

          case 1:
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='plus']").prop("checked", true);
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='minus']").prop("checked", false);
            break;

          case 2:
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='plus']").prop("checked", true);
            v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='minus']").prop("checked", true);
            break;
        }

        var tol = v.option.ghosts_tolerance[i] * 1;

        if (Number.isNaN(tol) || tol < 0.01 || tol > 1) {
          tol = 1;
        }

        v.ctxMenu.find(".ghosts_direction[data-axis='" + direct + "'][data-direction='tol']").val(tol);
      }

      v.option.light = ctx_Option['v.option.light'] ? JSON.parse(JSON.stringify(ctx_Option['v.option.light'])) : v.option.light;
      v.light[0].intensity = v.option.light[0].intensity;
      v.light[1].intensity = v.option.light[1].intensity;
      v.light[2].intensity = v.option.light[2].intensity;
      v.option.customAtomParam = ctx_Option['v.option.customAtomParam'];
      v.option.customAtomParam = v.option.customAtomParam || {};

      for (var _i in v.option.customAtomParam) {
        for (var j in v.option.customAtomParam[_i]) {
          AtomParam[_i][j] = v.option.customAtomParam[_i][j];
        }
      } //값 배분 완료
      //값 적용(구조 로딩 전)


      v.ctxMenu.find(".backgroundcolor").change();
      var toggleOption = ['perspective', 'atoms', 'bonds', 'cell', 'cellInfo', 'selectInfo', 'axis', 'ghosts'];

      for (var i = 0; i < toggleOption.length; i++) {
        var tmp = "v.option." + toggleOption[i];
        var toggle = !v.ctxMenu.find('.disp_option_toggle[data-option=' + toggleOption[i] + ']').hasClass("toggle_off");

        if (ctx_Option[tmp] !== toggle) {
          v.ctxMenu.find('.disp_toggle_swt[data-option=' + toggleOption[i] + ']').click();
        }
      } //클릭시 메시지가 뜨기 때문에 클릭 하지 않고 별도로 설정


      if (ctx_Option["v.option.cellInfoSpaceGroup"]) {
        v.option.cellInfoSpaceGroup = true;
        v.ctxMenu.find('.disp_toggle_swt[data-option=cellInfoSpaceGroup]').removeClass("toggle_off");
      }

      var targetLight = v.ctxMenu.find('.disp_option_toggle[data-option=light]');

      for (var i = 0; i < 3; i++) {
        if (v.option.light[i].on) {//						$(targetLight[i]).removeClass("toggle_off");
        } else {
          $(targetLight[i]).addClass("toggle_off");
          $(targetLight[i]).parent().find('.fas').hide();
          $(targetLight[i]).find('label').css('width', '59.6px');
          v.light[i].intensity = 0;
        }
      } //값 적용(최초 구조 로딩 후)


      v.ctxMenu.find('.fov').change();
      v.ctxMenu.find('.atom_radius').change();
      v.ctxMenu.find('.bond_radius').change(); //적용완료
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/Manipulate.js":
/*!*******************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/Manipulate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (v) {
  return {
    v: v,
    historyLoaded: -1,
    history: [],
    updateHistoryTbl: __webpack_require__(/*! ./updateHistoryTbl.js */ "./resources/js/vlatoms/Manipulate/updateHistoryTbl.js"),
    addHistory: __webpack_require__(/*! ./addHistory.js */ "./resources/js/vlatoms/Manipulate/addHistory.js"),
    callback: function callback() {
      if (typeof v.option.manipulateCallback == "function") {
        v.option.manipulateCallback = [v.option.manipulateCallback];
      } else if (_typeof(v.option.manipulateCallback) != "object") {
        console.warn("manipulate callback is not an object : " + _typeof(v.option.manipulateCallback));
      }

      if (_typeof(v.option.manipulateCallback) == "object") {
        for (var i = 0; i < v.option.manipulateCallback.length; i++) {
          if (typeof v.option.manipulateCallback[i] == "function") {
            v.option.manipulateCallback[i](v);
          }
        }
      }
    },
    execute: function execute(mode, args) {
      if (v.Manipulate.historyLoaded >= 0) {
        v.Manipulate.history.splice(v.Manipulate.historyLoaded + 1);
        v.Manipulate.historyLoaded = -1;
      }

      var historyMode = args.historymode || mode[0].toUpperCase() + mode.slice(1);
      v.Manipulate[mode](args);
      v.Manipulate.addHistory({
        mode: historyMode,
        args: args,
        Structure: VLatoms.Utils.redefineStructure(v.Structure)
      });
    },
    fill: function fill(option) {
      if (!option) {
        alert("Invalid operation");
        return;
      }

      var worker = new Worker(VLATOMS_PATH + "/workers/fill.js?v" + Math.random());
      worker.postMessage({
        Structure: v.Structure,
        angle: option.angle,
        molecules: option.molecules,
        maxdensity: option.maxdensity,
        thickness: option.thickness,
        dist: option.dist,
        rotate: option.rotate
      });

      worker.onmessage = function (e) {
        var stat = e.data;

        if (stat.state == 'busy') {
          if (typeof showModuleLoadingMsg === "function") {
            $('.fill-progress').html(Math.round(stat.progress[0] / stat.progress[1] * 10000) / 100 + "%");
          }
        } else if (stat.state == 'finished') {
          var retdata = stat.retarr;
          v.Structure = VLatoms.Utils.redefineStructure(retdata); //TODO Here

          v.update.atomsChanged = true;
          v.update.bondsChanged = true;
          v.animateControl.once();
          v.Manipulate.addHistory({
            mode: "Fill-" + option.molecules[0].formula.formulaStr,
            args: {},
            Structure: objClone(v.Structure)
          });

          if (_typeof(option.callback == "function")) {
            option.callback();
          }
        }
      };
    },
    optimize: function optimize() {
      var worker = new Worker(VLATOMS_PATH + "/workers/optimize.js?v" + Math.random());
      worker.postMessage({
        Structure: v.Structure,
        movingAtoms: v.IO.selectedAtoms
      });
      var percdone = 0;

      worker.onmessage = function (e) {
        var newStructure = e.data.Structure;
        var time = e.data.time;
        percdone = time / 10 * 100;
        $('#manipulate_optimize_percdone').css("display", "block");
        $('#manipulate_optimize_percdone').html("Optimize : " + percdone.toFixed(0) + "% Done");
        v.Structure = newStructure;
        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      };
    },
    clone: __webpack_require__(/*! ./clone.js */ "./resources/js/vlatoms/Manipulate/clone.js"),
    strain: __webpack_require__(/*! ./strain.js */ "./resources/js/vlatoms/Manipulate/strain.js"),
    vacuum: __webpack_require__(/*! ./vacuum.js */ "./resources/js/vlatoms/Manipulate/vacuum.js"),
    insideTest: __webpack_require__(/*! ./insideTest.js */ "./resources/js/vlatoms/Manipulate/insideTest.js"),
    paste: __webpack_require__(/*! ./paste.js */ "./resources/js/vlatoms/Manipulate/paste.js"),
    merge: __webpack_require__(/*! ./merge.js */ "./resources/js/vlatoms/Manipulate/merge.js"),
    drawFromInput: __webpack_require__(/*! ./drawFromInput.js */ "./resources/js/vlatoms/Manipulate/drawFromInput.js"),
    makePath: __webpack_require__(/*! ./makePath.js */ "./resources/js/vlatoms/Manipulate/makePath.js"),
    mirror: __webpack_require__(/*! ./mirror.js */ "./resources/js/vlatoms/Manipulate/mirror.js")
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/addHistory.js":
/*!*******************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/addHistory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (historyData) {
  var v = this.v;
  if (!v.option.history) return false;
  if (v.Manipulate.history.length === 0 && v.Structure.atoms.length === 0) return false;
  historyData.selectedAtoms = JSON.parse(JSON.stringify(v.IO.selectedAtoms));

  if (v.Manipulate.history.length > 0) {
    if (VLatoms.Utils.Structure.compare(v.Structure, v.Manipulate.history[v.Manipulate.history.length - 1].Structure)) {
      console.warn("Nothing has changed.");
      v.shiftPressed = false;
      v.spacePressed = false;
      return false;
    }
  }

  v.update.atom();
  v.update.bond();
  v.update.atom();
  v.IO.highlightSelectedAtoms();
  v.renderer.render(v.scene, v.camera);
  historyData.Image = v.renderer.domElement.toDataURL("image/jpeg", 0.1); //반복 작업 통합

  var _idx = v.Manipulate.history.length - 1;

  if (_idx > 0) {
    if (historyData.mode == "Move Atom(s)" || historyData.mode == "Rotate Atom(s)") {
      if (historyData.mode == v.Manipulate.history[_idx].mode && math.deepEqual(historyData.selectedAtoms, v.Manipulate.history[_idx].selectedAtoms)) {
        v.option.historyWrapper.find("div:last-child").remove();
        v.Manipulate.history.pop();
      }
    }
  }

  historyData.Structure = VLatoms.Utils.redefineStructure(historyData.Structure);

  if (v.Manipulate.history.length >= 10) {
    for (var i = 1; i < 9; i++) {
      v.Manipulate.history[i] = v.Manipulate.history[i + 1];
    }

    v.Manipulate.history.pop();
    /*
    var nhistory = [];
    for(var i=0 ; i<10 ; i++){
    	if(i===1){
    		continue;
    	}
    	nhistory.push(v.Manipulate.history[i]);
    }
    v.Manipulate.history = nhistory;
    */
  }

  v.Manipulate.history.push(historyData);
  v.Manipulate.updateHistoryTbl();
  v.Manipulate.callback();
  v.strlist[v.strNum]["Structure"] = v.Manipulate.history.length - 1; //v.setOptimalCamPosition();

  if (v.option.strListInfo && v.structureListWrapper !== undefined) {
    v.StructureList.drawStructureList();
  }

  for (var i = 0; i < v.option.onUpdate.length; i++) {
    v.option.onUpdate[i]();
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/clone.js":
/*!**************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/clone.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args) {
  var v = this.v;
  var nx = args['nx'];
  var ny = args['ny'];
  var nz = args['nz'];
  var returnOnly = false;
  if (args['returnOnly'] !== undefined) returnOnly = args['returnOnly'];
  var selectedClone = false;
  if (args['selectedClone'] == true) selectedClone = true;

  if (selectedClone && v.IO.selectedAtoms.length === 0) {
    return false;
  }

  var retStructure = {
    a: Array(3),
    b: Array(3),
    c: Array(3),
    atoms: Array()
  };
  nx = Math.floor(nx * 1);
  ny = Math.floor(ny * 1);
  nz = Math.floor(nz * 1);

  for (var i = 0; i < 3; i++) {
    retStructure.a[i] = v.Structure.a[i] * nx;
    retStructure.b[i] = v.Structure.b[i] * ny;
    retStructure.c[i] = v.Structure.c[i] * nz;
  } //선택부분만 복사로 체크시확인해서 수정
  //			var natom_org = v.Structure.atoms.length;


  if (selectedClone && v.IO.selectedAtoms.length !== 0) {
    var natom_org = v.IO.selectedAtoms.length;
  } else {
    var natom_org = v.Structure.atoms.length;
  } //수정끝


  var newpos = [];

  for (var i = 0; i < nx; i++) {
    for (var j = 0; j < ny; j++) {
      for (var k = 0; k < nz; k++) {
        //기본값들 복사하기
        var threezero = i + j + k === 0;

        if (!threezero) {
          var _natom_ = natom_org;
        } else {
          var _natom_ = v.Structure.atoms.length;
        }

        for (var l = 0; l < _natom_; l++) {
          //							var ca = v.Structure.atoms[l];
          //selectedClone true 여부 확인해서 나눔
          //var ca = v.Structure.atoms[l];
          if (selectedClone && !threezero) {
            var ca = v.Structure.atoms[v.IO.selectedAtoms[l]];
          } else {
            var ca = v.Structure.atoms[l];
          } //끝


          newpos = [ca.x, ca.y, ca.z];
          newpos = VLatoms.Math.add(newpos, VLatoms.Math.cdotvec(i, v.Structure.a));
          newpos = VLatoms.Math.add(newpos, VLatoms.Math.cdotvec(j, v.Structure.b));
          newpos = VLatoms.Math.add(newpos, VLatoms.Math.cdotvec(k, v.Structure.c));

          for (var ii = 0; ii < 3; ii++) {
            newpos[ii] = +newpos[ii].toFixed(8);
            if (Math.abs(newpos[ii]) < 0.00001) newpos[ii] = 0;
          }

          retStructure.atoms.push(new VLatoms.Atom(newpos[0], newpos[1], newpos[2], ca.element));
        }
      }
    }
  }

  if (!returnOnly) {
    v.Structure = retStructure;
    v.update.atomsChanged = true;
    v.update.bondsChanged = true;
    v.animateControl.once();
  }

  return retStructure;
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/drawFromInput.js":
/*!**********************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/drawFromInput.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var v = this.v;
  var exit = false;
  var inputWrapper = $("#VLAtoms_inputWrapper");
  var value = inputWrapper.find(".customSelectAtomType").find("option:selected").val();
  var cellType = inputWrapper.find(".customSelectCell").find("option:selected").val();
  var atomRow = inputWrapper.find(".customInputAtomsWrapper").children();
  var ncell = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  var unit = $(".customInputUnit").find("option:selected").val();
  var unitVal = 1;

  switch (unit) {
    case "angstrom":
      unitVal = 1;
      break;

    case "bohr":
      unitVal = 0.529177249;
      break;
  }

  switch (cellType) {
    case "current":
      ncell[0] = v.Structure.a;
      ncell[1] = v.Structure.b;
      ncell[2] = v.Structure.c;
      break;

    case "vectors":
      ncell[0] = [+inputWrapper.find(".customInputCell[data-row=0][data-column=0]").val() * unitVal, +inputWrapper.find(".customInputCell[data-row=0][data-column=1]").val() * unitVal, +inputWrapper.find(".customInputCell[data-row=0][data-column=2]").val() * unitVal];
      ncell[1] = [+inputWrapper.find(".customInputCell[data-row=1][data-column=0]").val() * unitVal, +inputWrapper.find(".customInputCell[data-row=1][data-column=1]").val() * unitVal, +inputWrapper.find(".customInputCell[data-row=1][data-column=2]").val() * unitVal];
      ncell[2] = [+inputWrapper.find(".customInputCell[data-row=2][data-column=0]").val() * unitVal, +inputWrapper.find(".customInputCell[data-row=2][data-column=1]").val() * unitVal, +inputWrapper.find(".customInputCell[data-row=2][data-column=2]").val() * unitVal];
      break;

    case "lattice":
      var la = inputWrapper.find(".customLatticeCell[data-type=latticea]").val() * unitVal;
      var lb = inputWrapper.find(".customLatticeCell[data-type=latticeb]").val() * unitVal;
      var lc = inputWrapper.find(".customLatticeCell[data-type=latticec]").val() * unitVal;
      var alpha = inputWrapper.find(".customLatticeCell[data-type=anglealpha]").val() * Math.PI / 180;
      var beta = inputWrapper.find(".customLatticeCell[data-type=anglebeta]").val() * Math.PI / 180;
      var gamma = inputWrapper.find(".customLatticeCell[data-type=anglegamma]").val() * Math.PI / 180;
      ncell[0] = [la, 0, 0];
      ncell[1] = [lb * Math.cos(gamma), lb * Math.sin(gamma), 0];
      ncell[2] = [lc * Math.cos(beta), ncell[2][1] = lc * (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma), 0];
      ncell[2][2] = Math.sqrt(Math.pow(lc, 2) - Math.pow(ncell[2][0], 2) - Math.pow(ncell[2][1], 2));
      break;
  }

  var tempAtoms = [];

  switch (value) {
    case "cartesian":
      for (var i = 0, len = atomRow.length; i < len; i++) {
        var atom = [$(atomRow[i]).find(".customInputAtoms[data-column=1]").val() * unitVal, $(atomRow[i]).find(".customInputAtoms[data-column=2]").val() * unitVal, $(atomRow[i]).find(".customInputAtoms[data-column=3]").val() * unitVal];
        var _x = atom[0];
        var _y = atom[1];
        var _z = atom[2];

        var _ele = $(atomRow[i]).find(".customInputAtoms[data-column=0]").val();

        if (_x === "" || _y === "" || _z === "" || _ele === "") {
          continue;
        }

        if (Number.isNaN(_x) || Number.isNaN(_y) || Number.isNaN(_z)) {
          continue;
        }

        tempAtoms.push(new VLatoms.Atom(_x, _y, _z, _ele));
      }

      break;

    case "fractional":
      for (var i = 0, len = atomRow.length; i < len; i++) {
        var _atom = [$(atomRow[i]).find(".customInputAtoms[data-column=1]").val() * unitVal, $(atomRow[i]).find(".customInputAtoms[data-column=2]").val() * unitVal, $(atomRow[i]).find(".customInputAtoms[data-column=3]").val() * unitVal];
        var vectorSize = VLatoms.Math.fractToCart(ncell, _atom);
        var _x = vectorSize[0];
        var _y = vectorSize[1];
        var _z = vectorSize[2];

        var _ele = $(atomRow[i]).find(".customInputAtoms[data-column=0]").val();

        if (_x === "" || _y === "" || _z === "" || _ele === "") {
          continue;
        }

        if (Number.isNaN(_x) || Number.isNaN(_y) || Number.isNaN(_z)) {
          continue;
        }

        tempAtoms.push(new VLatoms.Atom(_x, _y, _z, _ele));
      }

      break;
  }

  var testRet = v.Manipulate.insideTest(tempAtoms);

  if (!testRet.inside) {
    if (!confirm("Do you want to keep the cell size?")) {
      v.Manipulate.vacuum({
        "nx": testRet.delta[0],
        "ny": testRet.delta[1],
        "nz": testRet.delta[2],
        "px": testRet.delta[3],
        "py": testRet.delta[4],
        "pz": testRet.delta[5]
      });
    } else {
      v.Manipulate.insideTest(tempAtoms, {
        "onEscape": true
      });
    }
  }

  v.Structure = new VLatoms.Structure(ncell, tempAtoms);
  v.update.atomsChanged = true;
  v.update.bondsChanged = true;
  v.animateControl.once();
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/insideTest.js":
/*!*******************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/insideTest.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (atoms, option) {
  var v = this.v; //기본 기능은 atoms를 visualizer의 cell에 넣을 때 벗어나는 원자가 있는지 알려주고(outsider에 목록 제공)
  //벗어나는 원자들을 포함하려면 셀이 얼마나 늘어나야 할지를 알려준다. (delta, 012는 음수방향, 345는 양수방향)
  //option.cell로 임의의 셀과 비교하는 기능 제공.
  //기본적으로 findSize=true 인 경우에 대한 값을 구하고, 그걸 후처리해서 findSize=false일때의 기본 delta 제공. 

  var cell = v.Structure;
  var onEscape = false; //셀은 고정 시키고 벗어난 원자들은 벗어난 위치의 다른 셀에 
  //해당하는 위치로 넣는 기능.(atoms 좌표가 call by reference로 바뀜)
  // return 값 필요 없음.

  var findSize = false; //셀에서 atoms가 차지하는 위치의 최대최소값을 abc에 대한 상대좌표로 제공. 

  if (atoms === undefined) {
    return false;
  }

  if (option !== undefined) {
    if (option.onEscape !== undefined) onEscape = option.onEscape;
    if (option.cell !== undefined) cell = option.cell;
    if (option.findSize !== undefined) findSize = option.findSize;
  }

  var ret = {
    inside: true,
    delta: [],
    outsider: []
  };
  var _cube_ = [];
  var tmp;
  var _atom = [];
  var _sizeCube_ = [];
  _cube_[0] = cell.a;
  _cube_[1] = cell.b;
  _cube_[2] = cell.c;
  _sizeCube_[0] = VLatoms.Math.len(cell.a);
  _sizeCube_[1] = VLatoms.Math.len(cell.b);
  _sizeCube_[2] = VLatoms.Math.len(cell.c);

  for (var i = 0; i < atoms.length; i++) {
    _atom = [];
    _atom[0] = atoms[i].x;
    _atom[1] = atoms[i].y;
    _atom[2] = atoms[i].z;
    var vectorSize = VLatoms.Math.cartToFract(_cube_, _atom);

    if (i === 0) {
      for (var j = 0; j < 3; j++) {
        ret.delta[j] = vectorSize[j];
        ret.delta[j + 3] = vectorSize[j];
      }
    }

    if (!onEscape) {
      for (var j = 0; j < 3; j++) {
        if (vectorSize[j] > 1) {
          ret.inside = false;

          if (ret.outsider.indexOf(i) == -1) {
            ret.outsider.push(i);
          }
        } else if (vectorSize[j] < 0) {
          ret.inside = false;

          if (ret.outsider.indexOf(i) == -1) {
            ret.outsider.push(i);
          }
        }

        tmp = vectorSize[j];

        if (ret.delta[j + 3] < tmp) {
          ret.delta[j + 3] = tmp;
        }

        if (ret.delta[j] > tmp) {
          ret.delta[j] = tmp;
        }
      }
    } else {
      for (var j = 0; j < 3; j++) {
        if (vectorSize[j] > 1 || vectorSize[j] < 0) {
          vectorSize[j] -= Math.floor(vectorSize[j]);
        }
      }

      atoms[i].x = vectorSize[0] * _cube_[0][0];
      atoms[i].x += vectorSize[1] * _cube_[1][0];
      atoms[i].x += vectorSize[2] * _cube_[2][0];
      atoms[i].y = vectorSize[0] * _cube_[0][1];
      atoms[i].y += vectorSize[1] * _cube_[1][1];
      atoms[i].y += vectorSize[2] * _cube_[2][1];
      atoms[i].z = vectorSize[0] * _cube_[0][2];
      atoms[i].z += vectorSize[1] * _cube_[1][2];
      atoms[i].z += vectorSize[2] * _cube_[2][2];
    }
  }

  if (onEscape) {
    return true;
  }

  if (!findSize) {
    for (var i = 0; i < 3; i++) {
      if (ret.delta[i] >= 0) {
        ret.delta[i] = 0;
      } else {
        ret.delta[i] *= _sizeCube_[i] * -1;
      }
    }

    for (var i = 3; i < 6; i++) {
      if (ret.delta[i] <= 1) {
        ret.delta[i] = 0;
      } else {
        ret.delta[i] = (ret.delta[i] - 1) * _sizeCube_[i - 3];
      }
    }

    for (var i = 0; i < 3; i++) {
      if (ret.delta[i] > 0) {
        ret.delta[i] += 0.001;
      }

      if (ret.delta[i + 3] > 0) {
        ret.delta[i + 3] += 0.001;
      }
    }
  }

  return ret;
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/makePath.js":
/*!*****************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/makePath.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args) {
  var v = this.v;
  var num = args.num;
  var checkStr;
  var intermed = args.intermed;
  var pathOpt = args.pathOpt;
  var distribution = args.distribution || [];
  var z_str = v.strlist[0].history[v.strlist[0].Structure].Structure;
  v.StructureList.loadStrlist(0);

  function strDistance(s1, s2) {
    var dist = 0;

    for (var i = 0, len1 = s1.atoms.length; i < len1; i++) {
      dist += Math.sqrt(Math.pow(s1.atoms[i].x - s2.atoms[i].x, 2) + Math.pow(s1.atoms[i].y - s2.atoms[i].y, 2) + Math.pow(s1.atoms[i].z - s2.atoms[i].z, 2));
    }

    return dist;
  }

  function checkStrlist(len) {
    for (var _i = 1; _i < len; _i++) {
      var i_str = v.strlist[_i].history[v.strlist[_i].Structure].Structure;

      for (var _j = 0; _j < 3; _j++) {
        if (z_str.a[_j] !== i_str.a[_j]) {
          return "Cell is not same.";
        }

        if (z_str.b[_j] !== i_str.b[_j]) {
          return "Cell is not same.";
        }

        if (z_str.c[_j] !== i_str.c[_j]) {
          return "Cell is not same.";
        }
      }

      if (z_str.atoms.length !== i_str.atoms.length) {
        return "Number of Atom is not same";
      }

      for (var _j2 = 0, _len = z_str.atoms.length; _j2 < _len; _j2++) {
        if (z_str.atoms[_j2].element !== i_str.atoms[_j2].element) {
          return "Element is not same";
        }
      }
    }

    return "ok";
  }

  if (intermed) {
    if (v.strlist.length < 3) {
      alert("Need at least 3 Structures.");
      return;
    }

    checkStr = checkStrlist(v.strlist.length);

    if (checkStr !== "ok") {
      alert(checkStr);
      return;
    }

    var pathNum = [];
    var _distribution = [];

    switch (pathOpt) {
      case "auto":
        //distance to do
        var __num = num - v.strlist.length;

        var tot = 0;

        for (var i = 1; i < v.strlist.length; i++) {
          var v1 = v.strlist[i].history[v.strlist[i].Structure].Structure;
          var v2 = v.strlist[i - 1].history[v.strlist[i - 1].Structure].Structure;
          var dist = strDistance(v1, v2);
          tot += dist;

          _distribution.push(dist);
        }

        var num_tot = 0;

        for (var i = 0; i < _distribution.length; i++) {
          _distribution[i] = Math.round(_distribution[i] / tot * __num);
          num_tot += _distribution[i];

          if (num_tot > __num) {
            _distribution[i] -= num_tot - __num;
            num_tot = __num;
          }
        }

        var cnt = 0;
        var distslength = _distribution.length;

        while (num_tot < __num) {
          _distribution[cnt % distslength]++;
          cnt++;
          num_tot++;
        }

        break;

      case "equal":
        _distribution = new Array(v.strlist.length - 1);

        var __num = num - v.strlist.length;

        var cnt = 0;
        var distslength = _distribution.length;

        for (var i = 0; i < distslength; i++) {
          _distribution[i] = 0;
        }

        while (__num > 0) {
          _distribution[cnt % distslength]++;
          cnt++;
          __num--;
        }

        break;

      case "manual":
        //use distribution
        _distribution = args.distsManual.slice(0); //select

        break;
    }

    console.log(_distribution);
    var temp_strlist = objClone(v.strlist);
    v.strlist.length = 0;
    v.strlist.push(objClone(temp_strlist[0]));

    for (var i = 1; i < temp_strlist.length; i++) {
      var v1 = temp_strlist[i - 1].history[temp_strlist[i - 1].Structure].Structure;
      var v2 = temp_strlist[i].history[temp_strlist[i].Structure].Structure;
      var strdistlength = +_distribution[i - 1] + 1;

      for (var j = 1; j < strdistlength; j++) {
        var nstr = objClone(v1);

        for (var k = 0; k < nstr.atoms.length; k++) {
          nstr.atoms[k].x = v1.atoms[k].x + (v2.atoms[k].x - v1.atoms[k].x) * j / strdistlength;
          nstr.atoms[k].y = v1.atoms[k].y + (v2.atoms[k].y - v1.atoms[k].y) * j / strdistlength;
          nstr.atoms[k].z = v1.atoms[k].z + (v2.atoms[k].z - v1.atoms[k].z) * j / strdistlength;
        }

        v.StructureList.addStrlist();
        v.Manipulate.history.length = 0;
        v.Manipulate.addHistory({
          mode: "NEB Image",
          args: {},
          Structure: objClone(nstr)
        });
      }

      v.strlist.push(objClone(temp_strlist[i]));
    }
  } else {
    if (v.strlist.length < 2) {
      alert("Need at least 2 Structures.");
      return;
    }

    if (v.strlist.length >= 3) {
      if (!confirm("All structures in the structure list except first two ones will be deleted. Do you want to continue?")) {
        return;
      }
    }

    checkStr = checkStrlist(2);

    if (checkStr !== "ok") {
      alert(checkStr);
      return;
    }

    var position = [];
    var i_str = v.strlist[v.strlist.length - 1].history[v.strlist[v.strlist.length - 1].Structure].Structure;

    for (var _i2 = 0, len = z_str.atoms.length; _i2 < len; _i2++) {
      position.push({
        "x": i_str.atoms[_i2].x - z_str.atoms[_i2].x,
        "y": i_str.atoms[_i2].y - z_str.atoms[_i2].y,
        "z": i_str.atoms[_i2].z - z_str.atoms[_i2].z
      });
    }

    var _temp_strlist = objClone(v.strlist);

    v.strlist.length = 0;
    v.strlist.push(objClone(_temp_strlist[0]));

    for (var _i3 = 1; _i3 < num + 1; _i3++) {
      var ratio = _i3 / (num + 1);
      var temp_str = objClone(z_str);

      for (var _j3 = 0, _len2 = temp_str.atoms.length; _j3 < _len2; _j3++) {
        temp_str.atoms[_j3].x += position[_j3].x * ratio;
        temp_str.atoms[_j3].y += position[_j3].y * ratio;
        temp_str.atoms[_j3].z += position[_j3].z * ratio;
      }

      v.StructureList.addStrlist();
      v.Manipulate.history.length = 0;
      v.Manipulate.addHistory({
        mode: "NEB Image",
        args: {},
        Structure: temp_str
      });
    }
  }

  v.StructureList.loadStrlist(0);
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/merge.js":
/*!**************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args) {
  var v = this.v;
  var idx1 = args.idx1;
  var idx2 = args.idx2;
  var target_plane = args.tplane;
  var order = args.order;
  var space = args.space;
  var cloneOpt = args.clone;

  if (cloneOpt === undefined) {
    cloneOpt = [true, true, true];
  }

  var vll = v.strlist[idx1].history[v.strlist[idx1].Structure].Structure;
  var vlr = v.strlist[idx2].history[v.strlist[idx2].Structure].Structure;
  var cen1 = [(vll.a[0] + vll.b[0] + vll.c[0]) / 2, (vll.a[1] + vll.b[1] + vll.c[1]) / 2, (vll.a[2] + vll.b[2] + vll.c[2]) / 2];
  var cen2 = [(vlr.a[0] + vlr.b[0] + vlr.c[0]) / 2, (vlr.a[1] + vlr.b[1] + vlr.c[1]) / 2, (vlr.a[2] + vlr.b[2] + vlr.c[2]) / 2];
  v.StructureList.addStrlist();
  var cube = [];
  cube[0] = vlr.a.slice(0);
  cube[1] = vlr.b.slice(0);
  cube[2] = vlr.c.slice(0);
  var cube2 = [];
  cube2[0] = vll.a.slice(0);
  cube2[1] = vll.b.slice(0);
  cube2[2] = vll.c.slice(0);
  v.Structure.a = vlr.a.slice(0);
  v.Structure.b = vlr.b.slice(0);
  v.Structure.c = vlr.c.slice(0);
  v.Structure.atoms = vlr.atoms.slice(0);
  var new_atoms = [];
  var max = [0, 0, 0];
  var min = [1, 1, 1];
  var target_point = [[0, 0, 0]];
  target_point.push([vll.a[0] + vll.b[0] + vll.c[0], vll.a[1] + vll.b[1] + vll.c[1], vll.a[2] + vll.b[2] + vll.c[2]]);
  target_point.push([vll.a[0] + vll.b[0], vll.a[1] + vll.b[1], vll.a[2] + vll.b[2]]);
  target_point.push([vll.a[0] + vll.c[0], vll.a[1] + vll.c[1], vll.a[2] + vll.c[2]]);
  target_point.push([vll.b[0] + vll.c[0], vll.b[1] + vll.c[1], vll.b[2] + vll.c[2]]);
  target_point.push([vll.a[0], vll.a[1], vll.a[2]]);
  target_point.push([vll.b[0], vll.b[1], vll.b[2]]);
  target_point.push([vll.c[0], vll.c[1], vll.c[2]]);
  var max2 = [0, 0, 0];
  var min2 = [1, 1, 1];
  var target_point2 = [[0, 0, 0]];
  target_point2.push([vlr.a[0] + vlr.b[0] + vlr.c[0], vlr.a[1] + vlr.b[1] + vlr.c[1], vlr.a[2] + vlr.b[2] + vlr.c[2]]);
  target_point2.push([vlr.a[0] + vlr.b[0], vlr.a[1] + vlr.b[1], vlr.a[2] + vlr.b[2]]);
  target_point2.push([vlr.a[0] + vlr.c[0], vlr.a[1] + vlr.c[1], vlr.a[2] + vlr.c[2]]);
  target_point2.push([vlr.b[0] + vlr.c[0], vlr.b[1] + vlr.c[1], vlr.b[2] + vlr.c[2]]);
  target_point2.push([vlr.a[0], vlr.a[1], vlr.a[2]]);
  target_point2.push([vlr.b[0], vlr.b[1], vlr.b[2]]);
  target_point2.push([vlr.c[0], vlr.c[1], vlr.c[2]]);

  for (var i = 0; i < target_point.length; i++) {
    var atom = [];

    for (var j = 0; j < 3; j++) {
      atom.push(target_point[i][j].toFixed(5));
    }

    var vectorSize = math.multiply(math.inv(math.transpose(cube)), atom);
    if (vectorSize[0] > max[0]) max[0] = vectorSize[0];
    if (vectorSize[1] > max[1]) max[1] = vectorSize[1];
    if (vectorSize[2] > max[2]) max[2] = vectorSize[2];
    if (vectorSize[0] < min[0]) min[0] = vectorSize[0];
    if (vectorSize[1] < min[1]) min[1] = vectorSize[1];
    if (vectorSize[2] < min[2]) min[2] = vectorSize[2];
    var atom2 = [];

    for (var j = 0; j < 3; j++) {
      atom2.push(target_point2[i][j].toFixed(5));
    }

    var vectorSize2 = math.multiply(math.inv(math.transpose(cube2)), atom2);
    if (vectorSize2[0] > max2[0]) max2[0] = vectorSize2[0];
    if (vectorSize2[1] > max2[1]) max2[1] = vectorSize2[1];
    if (vectorSize2[2] > max2[2]) max2[2] = vectorSize2[2];
    if (vectorSize2[0] < min2[0]) min2[0] = vectorSize2[0];
    if (vectorSize2[1] < min2[1]) min2[1] = vectorSize2[1];
    if (vectorSize2[2] < min2[2]) min2[2] = vectorSize2[2];
  }

  var _cube = [];
  var shift = [0, 0, 0];
  var cloneVal = [];

  for (var i = 0; i < 3; i++) {
    if (cloneOpt[i]) {
      cloneVal[i] = Math.ceil(max[i] - min[i]);
    } else {
      cloneVal[i] = 1;
    }
  }

  switch (target_plane) {
    case "XY":
      v.Manipulate.execute("clone", {
        "nx": cloneVal[0],
        "ny": cloneVal[1],
        "nz": cloneVal[2] + (cloneOpt[2] ? 1 : 0)
      });
      _cube[0] = vll.a.slice(0);
      _cube[1] = vll.b.slice(0);
      _cube[2] = vll.c.slice(0);

      for (var i = 0; i < 3; i++) {
        _cube[2][i] *= max2[2] - min2[2];
      }

      break;

    case "XZ":
      v.Manipulate.execute("clone", {
        "nx": cloneVal[0],
        "ny": cloneVal[1] + (cloneOpt[1] ? 1 : 0),
        "nz": cloneVal[2]
      });
      _cube[0] = vll.a.slice(0);
      _cube[1] = vll.b.slice(0);
      _cube[2] = vll.c.slice(0);

      for (var i = 0; i < 3; i++) {
        _cube[1][i] *= max2[1] - min2[1];
      }

      break;

    case "YZ":
      v.Manipulate.execute("clone", {
        "nx": cloneVal[0] + (cloneOpt[0] ? 1 : 0),
        "ny": cloneVal[1],
        "nz": cloneVal[2]
      });
      _cube[0] = vll.a.slice(0);
      _cube[1] = vll.b.slice(0);
      _cube[2] = vll.c.slice(0);

      for (var i = 0; i < 3; i++) {
        _cube[0][i] *= max2[0] - min2[0];
      }

      break;
  }

  cen1 = [(_cube[0][0] + _cube[1][0] + _cube[2][0]) / 2, (_cube[0][1] + _cube[1][1] + _cube[2][1]) / 2, (_cube[0][2] + _cube[1][2] + _cube[2][2]) / 2];

  for (var i = 0; i < 3; i++) {
    if (cloneOpt[i]) {
      shift[i] = 0;
    } else {
      shift[i] = cen1[i] - cen2[i];
    }
  }

  var tooSmall = 0;

  for (var i = 0; i < v.Structure.atoms.length; i++) {
    var _atom2 = v.Structure.atoms[i];

    if (shift[0] === 0) {
      _atom2.x = _atom2.x * 1 + vlr.a[0] * min[0] + vlr.b[0] * min[1] + vlr.c[0] * min[2];
    } else {
      _atom2.x = _atom2.x * 1 + shift[0];
    }

    if (shift[1] === 0) {
      _atom2.y = _atom2.y * 1 + vlr.a[1] * min[0] + vlr.b[1] * min[1] + vlr.c[1] * min[2];
    } else {
      _atom2.y = _atom2.y * 1 + shift[1];
    }

    if (shift[2] === 0) {
      _atom2.z = _atom2.z * 1 + vlr.a[2] * min[0] + vlr.b[2] * min[1] + vlr.c[2] * min[2];
    } else {
      _atom2.z = _atom2.z * 1 + shift[2];
    }

    var atom_pos = [_atom2.x, _atom2.y, _atom2.z];

    var _vectorSize = math.multiply(math.inv(math.transpose(_cube)), atom_pos);

    if (_vectorSize[0] < 0 || _vectorSize[0] > 1 || _vectorSize[1] < 0 || _vectorSize[1] > 1 || _vectorSize[2] < 0 || _vectorSize[2] > 1) {
      if (shift[0] !== 0 || shift[1] !== 0 || shift[2] !== 0) {
        tooSmall++;
      }
    } else {
      new_atoms.push(_atom2);
    }
  }

  v.Structure.a = vll.a.slice(0);
  v.Structure.b = vll.b.slice(0);
  v.Structure.c = vll.c.slice(0);
  v.Structure.atoms = [];

  for (var i = 0; i < vll.atoms.length; i++) {
    v.Structure.atoms.push($.extend(true, {}, vll.atoms[i]));
  }

  var offset = [0, 0, 0];

  if (Number.isNaN(space) || space < 0) {
    console.log("a");
    space = 0;
  }

  switch (target_plane) {
    case "XY":
      for (var i = 0; i < 3; i++) {
        v.Structure.c[i] += _cube[2][i];
      }

      var length_m_c = VLatoms.Math.len(v.Structure.c);

      if (order === "or-fixed-added") {
        offset = vll.c.slice(0);

        for (var _j = 0; _j < 3; _j++) {
          v.Structure.c[_j] *= 1 + space / length_m_c;
          offset[_j] *= 1 + space / VLatoms.Math.len(vll.c);
        }
      } else if (order === "or-added-fixed") {
        offset = _cube[2].slice(0);

        for (var _j2 = 0; _j2 < 3; _j2++) {
          v.Structure.c[_j2] *= 1 + space / length_m_c;
          offset[_j2] *= 1 + space / VLatoms.Math.len(offset);
        }
      }

      break;

    case "XZ":
      for (var i = 0; i < 3; i++) {
        v.Structure.b[i] += _cube[1][i];
      }

      var length_m_b = VLatoms.Math.len(v.Structure.b);

      if (order === "or-fixed-added") {
        offset = vll.b.slice(0);

        for (var _j3 = 0; _j3 < 3; _j3++) {
          v.Structure.b[_j3] *= 1 + space / length_m_b;
          offset[_j3] *= 1 + space / VLatoms.Math.len(vll.b);
        }
      } else if (order === "or-added-fixed") {
        offset = _cube[1].slice(0);

        for (var _j4 = 0; _j4 < 3; _j4++) {
          v.Structure.b[_j4] *= 1 + space / length_m_b;
          offset[_j4] *= 1 + space / VLatoms.Math.len(offset);
        }
      }

      break;

    case "YZ":
      for (var i = 0; i < 3; i++) {
        v.Structure.a[i] += _cube[0][i];
      }

      var length_m_a = VLatoms.Math.len(v.Structure.a);

      if (order === "or-fixed-added") {
        offset = vll.a.slice(0);

        for (var _j5 = 0; _j5 < 3; _j5++) {
          v.Structure.a[_j5] *= 1 + space / length_m_a;
          offset[_j5] *= 1 + space / VLatoms.Math.len(vll.a);
        }
      } else if (order === "or-added-fixed") {
        offset = _cube[0].slice(0);

        for (var _j6 = 0; _j6 < 3; _j6++) {
          v.Structure.a[_j6] *= 1 + space / length_m_a;
          offset[_j6] *= 1 + space / VLatoms.Math.len(offset);
        }
      }

      break;
  }

  switch (order) {
    case "or-fixed-added":
      console.log(offset);

      for (var _i = 0; _i < new_atoms.length; _i++) {
        var _atom = new_atoms[_i];
        _atom.x += offset[0];
        _atom.y += offset[1];
        _atom.z += offset[2];
        v.Structure.atoms.push(_atom);
      }

      break;

    case "or-added-fixed":
      console.log(offset);

      for (var _i2 = 0; _i2 < v.Structure.atoms.length; _i2++) {
        var _atom3 = v.Structure.atoms[_i2];
        _atom3.x += offset[0];
        _atom3.y += offset[1];
        _atom3.z += offset[2];
      }

      for (var _i3 = 0; _i3 < new_atoms.length; _i3++) {
        var _atom4 = new_atoms[_i3];
        v.Structure.atoms.push(_atom4);
      }

      break;
  }

  v.update.atomsChanged = true;
  v.update.bondsChanged = true;
  v.animateControl.once();
  v.setOptimalCamPosition();
  v.Manipulate.history.length = 0;

  if (tooSmall > 0 && !cloneOpt[0] && !cloneOpt[1] && !cloneOpt[2]) {
    alert("Some of the atoms in the Attached Structure were deleted because the based structure was small.");
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/mirror.js":
/*!***************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/mirror.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args) {
  var v = this.v;
  var plane = args.plane;
  var opt = args.opt;
  var nstr = objClone(v.Structure);
  var _cube_ = [];
  _cube_[0] = v.Structure.a;
  _cube_[1] = v.Structure.b;
  _cube_[2] = v.Structure.c;
  var vectorSize = [];
  var tv = [];

  for (var i = 0; i < v.Structure.atoms.length; i++) {
    var atom = v.Structure.atoms[i];
    var _atom = [atom.x, atom.y, atom.z];
    vectorSize.push(VLatoms.Math.cartToFract(_cube_, _atom));
  }

  console.log(args);

  if (opt === "withCell") {
    var getMirrorVec = function getMirrorVec(plane) {
      var p1, p2, pt, vo;

      switch (plane) {
        case "XY":
          p1 = objClone(v.Structure.a);
          p2 = objClone(v.Structure.b);
          pt = objClone(v.Structure.c);
          break;

        case "XZ":
          p1 = objClone(v.Structure.a);
          p2 = objClone(v.Structure.c);
          pt = objClone(v.Structure.b);
          break;

        case "YZ":
          p1 = objClone(v.Structure.b);
          p2 = objClone(v.Structure.c);
          pt = objClone(v.Structure.a);
          break;
      }

      vo = [p1[1] * p2[2] - p1[2] * p2[1], p1[2] * p2[0] - p1[0] * p2[2], p1[0] * p2[1] - p1[1] * p2[0]];
      var dt = -1 * (vo[0] * pt[0] + vo[1] * pt[1] + vo[2] * pt[2]) / (vo[0] * vo[0] + vo[1] * vo[1] + vo[2] * vo[2]);
      var mp = [2 * dt * vo[0] + pt[0], 2 * dt * vo[1] + pt[1], 2 * dt * vo[2] + pt[2]];
      return mp;
    };

    switch (plane) {
      case "XY":
        var point = objClone(v.Structure.c);
        nstr.c = getMirrorVec(plane);
        tv = nstr.c;
        break;

      case "XZ":
        var point = objClone(v.Structure.b);
        nstr.b = getMirrorVec(plane);
        tv = nstr.b;
        break;

      case "YZ":
        var point = objClone(v.Structure.a);
        nstr.a = getMirrorVec(plane);
        tv = nstr.a;
        break;
    }

    for (var _i = 0; _i < nstr.atoms.length; _i++) {
      var _atom2 = nstr.atoms[_i];
      _atom2.x = vectorSize[_i][0] * nstr.a[0] + vectorSize[_i][1] * nstr.b[0] + vectorSize[_i][2] * nstr.c[0] - tv[0];
      _atom2.y = vectorSize[_i][0] * nstr.a[1] + vectorSize[_i][1] * nstr.b[1] + vectorSize[_i][2] * nstr.c[1] - tv[1];
      _atom2.z = vectorSize[_i][0] * nstr.a[2] + vectorSize[_i][1] * nstr.b[2] + vectorSize[_i][2] * nstr.c[2] - tv[2];
    }

    for (var _i2 = 0; _i2 < 3; _i2++) {
      tv[_i2] *= -1;
    }

    v.Structure = objClone(nstr);
    v.update.atomsChanged = true;
    v.update.bondssChanged = true;
    v.animateControl.once();
  } else if (args.opt === "withoutCell") {
    for (var _i3 = 0; _i3 < nstr.atoms.length; _i3++) {
      var _atom3 = nstr.atoms[_i3];

      switch (plane) {
        case "XY":
          vectorSize[_i3][2] = 1 - vectorSize[_i3][2];
          break;

        case "XZ":
          vectorSize[_i3][1] = 1 - vectorSize[_i3][1];
          break;

        case "YZ":
          vectorSize[_i3][0] = 1 - vectorSize[_i3][0];
          break;
      }

      _atom3.x = vectorSize[_i3][0] * nstr.a[0] + vectorSize[_i3][1] * nstr.b[0] + vectorSize[_i3][2] * nstr.c[0];
      _atom3.y = vectorSize[_i3][0] * nstr.a[1] + vectorSize[_i3][1] * nstr.b[1] + vectorSize[_i3][2] * nstr.c[1];
      _atom3.z = vectorSize[_i3][0] * nstr.a[2] + vectorSize[_i3][1] * nstr.b[2] + vectorSize[_i3][2] * nstr.c[2];
    }

    v.Structure = objClone(nstr);
    v.update.atomsChanged = true;
    v.update.bondssChanged = true;
    v.animateControl.once();
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/paste.js":
/*!**************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/paste.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var v = this.v;
  var _tmp_selectedAtoms = [];
  var newpos = [];

  if (v.IO.selectedAtoms.length == 0) {
    return false;
  }

  var nAtomPasted = v.IO.selectedAtoms.length;

  for (var l = 0; l < nAtomPasted; l++) {
    if (v.IO.selectedAtoms.length !== 0) {
      var ca = v.Structure.atoms[v.IO.selectedAtoms[l]];
    } else {
      var ca = v.Structure.atoms[l];
    }

    newpos = [ca.x + 1, ca.y + 1, ca.z + 1];
    v.Structure.atoms.push(new VLatoms.Atom(newpos[0], newpos[1], newpos[2], ca.element));

    _tmp_selectedAtoms.push(v.Structure.atoms.length - 1);
  }

  v.IO.selectedAtoms = _tmp_selectedAtoms.slice(0);
  v.Manipulate.insideTest(v.Structure.atoms, {
    onEscape: true
  });
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/strain.js":
/*!***************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/strain.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args) {
  var v = this.v;
  var _x = args['sx'];
  var _y = args['sy'];
  var _z = args['sz'];
  var retStructure = {
    a: Array(3),
    b: Array(3),
    c: Array(3),
    atoms: Array()
  };
  _x *= 1;
  _y *= 1;
  _z *= 1;

  for (var i = 0; i < 3; i++) {
    retStructure.a[i] = +v.Structure.a[i] * _x;
    retStructure.b[i] = +v.Structure.b[i] * _y;
    retStructure.c[i] = +v.Structure.c[i] * _z;
  }

  var natom_org = v.Structure.atoms.length;
  var newpos = [];

  for (var i = 0; i < natom_org; i++) {
    var ca = v.Structure.atoms[i];
    newpos = [_x * ca.x, _y * ca.y, _z * ca.z];
    retStructure.atoms.push(new VLatoms.Atom(newpos[0], newpos[1], newpos[2], ca.element));
  }

  v.Structure = retStructure;
  v.update.atomsChanged = true;
  v.update.bondsChanged = true;
  v.animateControl.once();
  return retStructure;
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/updateHistoryTbl.js":
/*!*************************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/updateHistoryTbl.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var v = this.v;

  if (v.option.historyWrapper !== undefined) {
    v.option.historyWrapper.empty();

    for (var idx = 0; idx < v.Manipulate.history.length; idx++) {
      if (idx === 0) {
        v.option.historyWrapper.append("\n<div class='history_first' style='display:inline-block;vertical-align:top;width:90px;height:110px;box-shadow: #cccccc 15px 0px 10px -13px;border-radius:5px'>\n<div class='history_bar_record form-inline' data-historyidx='".concat(idx, "'>\n\t<i class='fas fa-thumbtack' style='font-size:8px;color:#113567;transform:rotate(45deg);'></i>\n\t<span class='history_bar_record_title' style=\"width:65px;font-weight:bold;\" title=\"").concat(v.Manipulate.history[idx].mode, "\">").concat(v.Manipulate.history[idx].mode, "</span>\n\t<br>\n\t<img class='history_bar_img' src='").concat(v.Manipulate.history[idx].Image, "'>\n</div>\n</div>\n<div class='history_rest' style='display:inline-block;overflow-x:auto;vertical-align:top;width:calc(100% - 90px);height:110px;'>\n</div>"));
      } else {
        v.option.historyWrapper.find('.history_rest').append("\n<div class='history_bar_record form-inline' data-historyidx='".concat(idx, "'>\n\t<span class='history_bar_record_title' style='' title='").concat(v.Manipulate.history[idx].mode, "'>").concat(v.Manipulate.history[idx].mode, "</span>\n\t<i class='fas fa-thumbtack history_bar_remember' style='font-size:8px;color:#007bff;'></i>\n\t<i class='fas fa-times-circle history_bar_record_delete' style='font-size:9px;color:red;'></i><br>\n\t<img class='history_bar_img' src='").concat(v.Manipulate.history[idx].Image, "'>\n</div>"));
      }

      v.option.historyWrapper.scrollLeft(v.option.historyWrapper[0].scrollWidth);
      v.option.historyWrapper.find('.history_bar_record').off();
      v.option.historyWrapper.find('.history_bar_record').click(function () {
        v.IO.selectedAtoms = [];
        var ci = $(this).data("historyidx");

        var _structure = VLatoms.Utils.redefineStructure(v.Manipulate.history[ci].Structure);

        v.Structure = _structure;
        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
        v.strlist[v.strNum]["Structure"] = ci;
      });
      v.option.historyWrapper.find(".history_bar_remember").off();
      v.option.historyWrapper.find(".history_bar_remember").click(function (e) {
        var ci = $(this).parent().data("historyidx") * 1;
        var obj = objClone(v.Manipulate.history[0]);
        v.Manipulate.history[0] = objClone(v.Manipulate.history[ci]);
        v.Manipulate.history.splice(ci, 1);
        v.Manipulate.history.push(objClone(obj));
        v.Manipulate.updateHistoryTbl();
      });
      v.option.historyWrapper.find(".history_bar_record_delete").off();
      v.option.historyWrapper.find(".history_bar_record_delete").click(function (e) {
        var ci = $(this).parent().data("historyidx") * 1;
        var si = v.strlist[v.strNum]["Structure"] * 1;
        var ni = 0;

        if (v.Manipulate.history.length < 2) {
          return;
        }

        v.Manipulate.history.splice(ci, 1);

        if (ci > si) {
          ni = si;
        } else if (ci === si) {
          ni = v.Manipulate.history.length - 1;
          var _structure = v.Manipulate.history[ni].Structure;
          v.Structure = VLatoms.Utils.redefineStructure(_structure);
          v.update.atomsChanged = true;
          v.update.bondsChanged = true;
          v.animateControl.once();
        } else {
          ni = si - 1;
        }

        v.strlist[v.strNum]["Structure"] = ni;
        v.Manipulate.updateHistoryTbl();
        e.stopPropagation();
      });
    }
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/Manipulate/vacuum.js":
/*!***************************************************!*\
  !*** ./resources/js/vlatoms/Manipulate/vacuum.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (args) {
  var v = this.v;
  var nx, px, ny, py, nz, pz;
  nx = args['nx'];
  ny = args['ny'];
  nz = args['nz'];
  px = args['px'];
  py = args['py'];
  pz = args['pz'];
  var returnOnly = false;
  if (args['returnOnly'] !== undefined) returnOnly = args['returnOnly']; // negative x,y,z and positive x,y,z

  var len_org = [VLatoms.Math.len(v.Structure.a), VLatoms.Math.len(v.Structure.b), VLatoms.Math.len(v.Structure.c)];
  var len_new = [len_org[0] + nx + px, len_org[1] + ny + py, len_org[2] + nz + pz];

  for (var i = 0; i < 3; i++) {
    if (len_new[i] <= 0) {
      alert("Cell size is less than 0!");
      return;
    }
  }

  var retStructure = {
    a: Array(3),
    b: Array(3),
    c: Array(3),
    atoms: Array()
  };
  retStructure.a = VLatoms.Math.cdotvec(len_new[0], VLatoms.Math.norm(v.Structure.a));
  retStructure.b = VLatoms.Math.cdotvec(len_new[1], VLatoms.Math.norm(v.Structure.b));
  retStructure.c = VLatoms.Math.cdotvec(len_new[2], VLatoms.Math.norm(v.Structure.c));
  var natom_org = v.Structure.atoms.length;
  var shift = [VLatoms.Math.cdotvec(nx, VLatoms.Math.norm(v.Structure.a)), VLatoms.Math.cdotvec(ny, VLatoms.Math.norm(v.Structure.b)), VLatoms.Math.cdotvec(nz, VLatoms.Math.norm(v.Structure.c))];
  var newpos = [];
  var latmatinv = VLatoms.Math.inv3([retStructure.a, retStructure.b, retStructure.c]);
  var newPosFract;

  for (var i = 0; i < natom_org; i++) {
    var ca = v.Structure.atoms[i];
    newpos = [ca.x, ca.y, ca.z];

    for (var j = 0; j < 3; j++) {
      newpos = VLatoms.Math.add(shift[j], newpos);
    } //Check atom is in the box


    newPosFract = VLatoms.Math.vecdotmat(newpos, latmatinv);

    for (var j = 0; j < 3; j++) {
      if (newPosFract[j] < 0) newPosFract[j] = Math.ceil(Math.abs(newPosFract[j])) - newPosFract[j];
      if (newPosFract[j] > 0) newPosFract[j] = newPosFract[j] - Math.ceil(Math.abs(newPosFract[j]));
    }

    retStructure.atoms.push(new VLatoms.Atom(newpos[0], newpos[1], newpos[2], ca.element));
  }

  if (nx < 0 || ny < 0 || nz < 0 || px < 0 || py < 0 || pz < 0) {
    //outsider check when shrinking
    var ret = v.Manipulate.insideTest(retStructure.atoms, {
      cell: retStructure
    });

    if (!ret.inside) {
      if (confirm(ret.outsider.length + " atom(s) will be deleted. Do you want to continue?")) {
        v.IO.exitSelectMode();
        ret.outsider.sort(function (a, b) {
          return b - a;
        });

        for (var i in ret.outsider) {
          var idx = ret.outsider[i];
          retStructure.atoms.splice(idx, 1);
        }
      } else {
        return false;
      }
    }
  }

  if (!returnOnly) {
    v.Structure = retStructure;
    v.update.atomsChanged = true;
    v.update.bondsChanged = true;
    v.animateControl.once();
  }

  v.setOptimalCamPosition();
  return retStructure;
};

/***/ }),

/***/ "./resources/js/vlatoms/Math/Math.js":
/*!*******************************************!*\
  !*** ./resources/js/vlatoms/Math/Math.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  gcd: function gcd(a, b) {
    if (!b) {
      return a;
    }

    return this.gcd(b, a % b);
  },
  lcm: function lcm(a, b) {
    if (a == 0) return b;
    if (b == 0) return a;

    var _gcd = this.gcd(a, b);

    return a * b / _gcd;
  },
  cdotmat: function cdotmat(c, m1) {
    var ret = [[], [], []];

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        ret[i][j] = c * m1[i][j];
      }
    }

    return ret;
  },
  transpose3: function transpose3(m1) {
    var ret = [[], [], []];

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        ret[j][i] = m1[i][j];
      }
    }

    return ret;
  },
  random3: function random3() {
    return [Math.random(), Math.random(), Math.random()];
  },
  norm: function norm(v1) {
    var _len = this.len(v1);

    var ret = [];

    for (var i = 0; i < v1.length; i++) {
      ret[i] = v1[i] / _len;
    }

    return ret;
  },
  len: function len(v1) {
    // Length of a vector
    return Math.sqrt(this.dot(v1, v1));
  },
  dist: function dist(v1, v2) {
    var v3 = [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
    return this.len(v3);
  },
  divide: function divide(v1, constant) {
    for (var i = 0; i < v1.length; i++) {
      v1[i] /= constant;
    }

    return v1;
  },
  cross: function cross(v1, v2) {
    var ret = Array();
    ret[0] = v1[1] * v2[2] - v1[2] * v2[1];
    ret[1] = -(v1[0] * v2[2] - v1[2] * v2[0]);
    ret[2] = v1[0] * v2[1] - v1[1] * v2[0];
    return ret;
  },
  cdotvec: function cdotvec(c, v1) {
    var ret = [];

    for (var i = 0; i < v1.length; i++) {
      ret[i] = c * v1[i];
    }

    return ret;
  },
  dot: function dot(v1, v2) {
    var ret = 0;

    for (var i = 0; i < v1.length; i++) {
      ret += v1[i] * v2[i];
    }

    return ret;
  },
  add: function add(v1, v2) {
    var ret = [];

    for (var i = 0; i < v1.length; i++) {
      ret.push(v1[i] + v2[i]);
    }

    return ret;
  },
  subtract: function subtract(v1, v2) {
    var ret = [];

    for (var i = 0; i < v1.length; i++) {
      ret.push(v1[i] - v2[i]);
    }

    return ret;
  },
  inv3: function inv3(m1) {
    var oa = m1[0][0];
    var ob = m1[0][1];
    var oc = m1[0][2];
    var od = m1[1][0];
    var oe = m1[1][1];
    var of = m1[1][2];
    var og = m1[2][0];
    var oh = m1[2][1];
    var oi = m1[2][2];
    var oD = oa * oe * oi + ob * of * og + oc * od * oh - oc * oe * og - ob * od * oi - oa * of * oh;
    var ret = [[(oe * oi - of * oh) / oD, -(ob * oi - oc * oh) / oD, (ob * of - oc * oe) / oD], [-(od * oi - of * og) / oD, (oa * oi - oc * og) / oD, -(oa * of - oc * od) / oD], [(od * oh - oe * og) / oD, -(oa * oh - ob * og) / oD, (oa * oe - ob * od) / oD]];
    return ret;
  },
  vecdotmat: function vecdotmat(v1, m1) {
    var ret = new Array();
    ret[0] = m1[0][0] * v1[0];
    ret[0] += m1[1][0] * v1[1];
    ret[0] += m1[2][0] * v1[2];
    ret[1] = m1[0][1] * v1[0];
    ret[1] += m1[1][1] * v1[1];
    ret[1] += m1[2][1] * v1[2];
    ret[2] = m1[0][2] * v1[0];
    ret[2] += m1[1][2] * v1[1];
    ret[2] += m1[2][2] * v1[2];
    return ret;
  },
  matdotmat: function matdotmat(m1, m2) {
    //only for between 2d matrixes
    var ret = Array(m1.length);

    for (var i = 0; i < m1.length; i++) {
      ret[i] = [];
    }

    for (var i = 0; i < m1.length; i++) {
      for (var j = 0; j < m2[0].length; j++) {
        ret[i][j] = 0;

        for (var k = 0; k < m1[0].length; k++) {
          ret[i][j] += m1[i][k] * m2[k][j];
        }
      }
    }

    return ret;
  },
  matdotvec: function matdotvec(m1, v1) {
    /* return Matrix * Vector */
    var ret = new Array();
    ret[0] = m1[0][0] * v1[0];
    ret[0] += m1[0][1] * v1[1];
    ret[0] += m1[0][2] * v1[2];
    ret[1] = m1[1][0] * v1[0];
    ret[1] += m1[1][1] * v1[1];
    ret[1] += m1[1][2] * v1[2];
    ret[2] = m1[2][0] * v1[0];
    ret[2] += m1[2][1] * v1[1];
    ret[2] += m1[2][2] * v1[2];
    return ret;
  },
  rotate: function rotate(dir, pos, angle) {
    var cos = Math.cos(angle / 180 * Math.PI);
    var sin = Math.sin(angle / 180 * Math.PI);
    var mat = Array(3);

    switch (dir) {
      case "x":
        mat[0] = [1, 0, 0];
        mat[1] = [0, cos, -1 * sin];
        mat[2] = [0, sin, cos];
        break;

      case "y":
        mat[0] = [cos, 0, sin];
        mat[1] = [0, 1, 0];
        mat[2] = [-1 * sin, 0, cos];
        break;

      case "z":
        mat[0] = [cos, -1 * sin, 0];
        mat[1] = [sin, cos, 0];
        mat[2] = [0, 0, 1];
        break;
    }

    return this.matdotvec(mat, pos);
  },
  rotateA: function rotateA(ref, pos, angle) {
    // ref : reference vector;
    var u = this.norm(ref);
    var ux = u[0],
        uy = u[1],
        uz = u[2];
    var cos = Math.cos(angle / 180 * Math.PI).toFixed(5) * 1;
    var sin = Math.sin(angle / 180 * Math.PI).toFixed(5) * 1;
    var mat = [];
    mat[0] = [cos + ux * ux * (1 - cos), ux * uy * (1 - cos) - uz * sin, ux * uz * (1 - cos) + uy * sin];
    mat[1] = [uy * ux * (1 - cos) + uz * sin, cos + uy * uy * (1 - cos), uy * uz * (1 - cos) - ux * sin];
    mat[2] = [uz * ux * (1 - cos) - uy * sin, uz * uy * (1 - cos) + ux * sin, cos + uz * uz * (1 - cos)];
    return this.matdotvec(mat, pos);
  },
  angle: function angle(v1, v2) {
    var v1len = this.len(v1);
    var v2len = this.len(v2);

    var _angle = this.dot(v1, v2) / v1len / v2len;

    if (_angle > 1) {
      console.log(_angle);
      _angle = 1;
    } else if (_angle < -1) {
      console.log(_angle);
      _angle = -1;
    }

    return Math.acos(_angle);
  },
  rad2deg: function rad2deg(rad) {
    return rad * 180 / Math.PI;
  },
  checkPlaneAngle: function checkPlaneAngle(v) {
    var sa = v.IO.selectedAtoms;

    if (sa.length !== 4) {
      return "Select 4 atoms";
    }

    var pva = objClone(sa);
    var pvb = objClone(sa);
    pva.splice(0, 1);
    pvb.splice(3, 1);
    var pvaP = {
      "x": [],
      "y": [],
      "z": []
    };
    var pvbP = {
      "x": [],
      "y": [],
      "z": []
    };

    for (var i = 0; i < 3; i++) {
      pvaP.x.push(v.Structure.atoms[pva[i]].x);
      pvaP.y.push(v.Structure.atoms[pva[i]].y);
      pvaP.z.push(v.Structure.atoms[pva[i]].z);
      pvbP.x.push(v.Structure.atoms[pvb[i]].x);
      pvbP.y.push(v.Structure.atoms[pvb[i]].y);
      pvbP.z.push(v.Structure.atoms[pvb[i]].z);
    }

    var va = [pvaP.y[0] * (pvaP.z[1] - pvaP.z[2]) + pvaP.y[1] * (pvaP.z[2] - pvaP.z[0]) + pvaP.y[2] * (pvaP.z[0] - pvaP.z[1]), pvaP.z[0] * (pvaP.x[1] - pvaP.x[2]) + pvaP.z[1] * (pvaP.x[2] - pvaP.x[0]) + pvaP.z[2] * (pvaP.x[0] - pvaP.x[1]), pvaP.x[0] * (pvaP.y[1] - pvaP.y[2]) + pvaP.x[1] * (pvaP.y[2] - pvaP.y[0]) + pvaP.x[2] * (pvaP.y[0] - pvaP.y[1])];
    var vb = [pvbP.y[0] * (pvbP.z[1] - pvbP.z[2]) + pvbP.y[1] * (pvbP.z[2] - pvbP.z[0]) + pvbP.y[2] * (pvbP.z[0] - pvbP.z[1]), pvbP.z[0] * (pvbP.x[1] - pvbP.x[2]) + pvbP.z[1] * (pvbP.x[2] - pvbP.x[0]) + pvbP.z[2] * (pvbP.x[0] - pvbP.x[1]), pvbP.x[0] * (pvbP.y[1] - pvbP.y[2]) + pvbP.x[1] * (pvbP.y[2] - pvbP.y[0]) + pvbP.x[2] * (pvbP.y[0] - pvbP.y[1])];
    var angle = this.angle(va, vb).toFixed(5) * 180 / Math.PI;
    return angle;

    if (angle > 1) {
      angle = 1;
    } else if (angle < -1) {
      angle = -1;
    }

    return Math.acos(angle) * 180 / Math.PI;
  },
  cartToFract: function cartToFract(matrix, vector) {
    return math.multiply(math.inv(math.transpose(matrix)), vector);
  },
  fractToCart: function fractToCart(matrix, vector) {
    return math.multiply(math.transpose(matrix), vector);
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/Structure/Structure.js":
/*!*****************************************************!*\
  !*** ./resources/js/vlatoms/Structure/Structure.js ***!
  \*****************************************************/
/*! exports provided: Structure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Structure", function() { return Structure; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Structure =
/*#__PURE__*/
function () {
  function Structure() {
    var cell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    var atoms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Structure);

    this.a = cell[0];
    this.b = cell[1];
    this.c = cell[2];
    this.atoms = atoms;
    this.ghost = [];
    this.PI = Math.PI;
  }

  _createClass(Structure, [{
    key: "cellVector",
    value: function cellVector(vec) {
      for (var i = 0; i < 3; i++) {
        this.a[i] = vec[0][i];
        this.b[i] = vec[1][i];
        this.c[i] = vec[2][i];
      }
    }
  }, {
    key: "cellLatAngle",
    value: function cellLatAngle(lat, angle) {
      for (var i = 0; i < 3; i++) {
        angle[i] = angle[i] * this.PI / 180;
      }

      var n_a = [lat[0], 0, 0];
      var n_b = [lat[1] * Math.cos(angle[2]), lat[1] * Math.sin(angle[2]), 0];
      var n_c = [lat[2] * Math.cos(angle[1]), 0, 0];

      if (n_b[1] > 0) {
        n_c[1] = (lat[1] * lat[2] * Math.cos(angle[0]) - lat[1] * Math.cos(angle[2]) * lat[2] * Math.cos(angle[1])) / n_b[1];
      } else {
        n_c[1] = 0;
      }

      var c2sq = Math.pow(lat[2], 2) - Math.pow(n_c[0], 2) - Math.pow(n_c[1], 2);

      if (c2sq < 0) {
        alert("This unitcell cannot be created. check angle values");
        return false;
      }

      n_c[2] = Math.sqrt(c2sq);

      for (var _i = 0; _i < 3; _i++) {
        this.a[_i] = n_a[_i];
        this.b[_i] = n_b[_i];
        this.c[_i] = n_c[_i];
      }
    }
  }]);

  return Structure;
}();

/***/ }),

/***/ "./resources/js/vlatoms/StructureBuilder/StructureBuilder.js":
/*!*******************************************************************!*\
  !*** ./resources/js/vlatoms/StructureBuilder/StructureBuilder.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (name, args) {
  if (name === undefined) return false;
  var structures = {};

  structures['CNT'] = function (args) {
    function isNatural(n) {
      return /^[0-9]+$/.test(n) && n >= 0;
    } //input validation


    if (args === undefined) return false;
    if (args.m === undefined || args.n === undefined) return false;

    if (args.repeat === undefined || args.repeat === "") {
      args.repeat = 1;
    }

    if (!isNatural(args.m) || !isNatural(args.n) || !isNatural(args.repeat)) {
      return false;
    }

    var m = args.m;
    var n = args.n;
    var repeat = args.repeat; //set sub functions

    function igcm(ii, jj) {
      var gcm = 0;
      var i = Math.abs(ii);
      var j = Math.abs(jj);

      if (j > i) {
        var iw = j;
        j = i;
        i = iw;
      }

      if (j == 0) {
        gcm = i;
        return gcm;
      }

      var ir;

      while ((ir = i % j) != 0) {
        i = j;
        j = ir;
      }

      return j;
    }

    function gen11(n, m
    /*,np,nq,ndr*/
    ) {
      var nd = igcm(n, m);
      var ndr;

      if ((n - m) % (3 * nd) == 0) {
        ndr = 3 * nd;
      } else {
        ndr = nd;
      }

      var a = Math.sqrt(3) * 1.424;
      var l2 = n * n + m * m + n * m;
      var dt = a * Math.sqrt(l2) / Math.PI;
      var nr = (2 * m + n) / ndr;
      var ns = -(2 * n + m) / ndr;
      var nt2 = 3 * l2 / ndr / ndr;
      var nt = Math.sqrt(nt2);
      var nn = 2 * l2 / ndr;
      var ichk = 0;

      if (nr == 0) {
        var n60 = 1;
      } else {
        var n60 = nr;
      }

      var itest2 = 1;
      var nnp = [];
      var nnq = [];

      for (var np = -Math.abs(n60); np <= Math.abs(n60); np++) {
        for (var nq = -Math.abs(ns); nq <= Math.abs(ns); nq++) {
          var j2 = nr * nq - ns * np;

          if (j2 == 1) {
            var j1 = m * np - n * nq;

            if (j1 > 0 && j1 < nn) {
              nnp[ichk] = np;
              nnq[ichk] = nq;
              ichk++;
            }
          }
        }
      }

      if (ichk == 0) {
        console.log("Error : ichk=0");
        return;
      }

      var itest1 = 1;
      var itest = 1;
      var itest3 = 1;

      if (ichk >= 2) {
        if (itest3 == 1) {
          console.log("More than 1 pair of p,q");
          return;
        }
      }

      if (nr != 0 && ns != 0) {
        if (itest1 == 1) {
          for (var i = 0; i < ichk; i++) {
            if (m * nnp[i] - n * nnq[i] < nn) {
              if (itest == 1) {
                np = nnp[0];
                nq = nnq[0];
                return Array(np, nq, ndr);
              }
            }
          }
        }
      }
    } //------end of set sub functions---------


    n *= 1;
    m *= 1;
    var ccdist = 1.424;
    var sq3 = Math.sqrt(3);
    var ret = gen11(n, m);
    var np = ret[0];
    var nq = ret[1];
    var ndr = ret[2];
    var sq3 = Math.sqrt(3);
    var a = sq3 * ccdist;
    var r = a * Math.sqrt(np * np + nq * nq + np * nq);
    var c = a * Math.sqrt(n * n + m * m + n * m);
    var t = sq3 * c / ndr;
    var nn = 2 * (n * n + m * m + m * n) / ndr;
    var rs = c / (2 * Math.PI); //		console.log("radius : "+rs+"& Length : "+t);

    var q1 = Math.atan(sq3 * m / (2 * n + m));
    var q2 = Math.atan(sq3 * nq / (2 * np + nq));
    var q3 = q1 - q2;
    var q4 = 2 * Math.PI / nn;
    var q5 = ccdist * Math.cos(Math.PI / 6 - q1) / c * 2 * Math.PI;
    var h1 = Math.abs(t) / Math.abs(Math.sin(q3));
    var h2 = ccdist * Math.sin(Math.PI / 6 - q1);
    var x1, y1, z1, k, kk2;
    var x = [];
    var y = [];
    var z = [];
    var ii = 0;

    for (var i = 0; i < nn; i++) {
      x1 = y1 = z1 = 0;
      k = Math.floor(i * r / h1);
      x1 = rs * Math.cos(i * q4);
      y1 = rs * Math.sin(i * q4);
      z1 = (i * Math.abs(r) - k * h1) * Math.sin(q3);
      kk2 = Math.abs(Math.floor(z1 / t)) + 1;

      if (z1 > t - 0.02) {
        z1 = z1 - t * kk2;
      }

      if (z1 < -0.02) {
        z1 = z1 + t * kk2;
      }

      x[ii] = x1 + rs * 2;
      y[ii] = y1 + rs * 2;
      z[ii] = z1;
      ii++;
      z3 = (i * r - k * h1) * Math.sin(q3) - h2;

      if (z3 >= -0.02 && z3 <= t - 0.02) {
        x2 = rs * Math.cos(i * q4 + q5);
        y2 = rs * Math.sin(i * q4 + q5);
        z2 = (i * r - k * h1) * Math.sin(q3) - h2;
        x[ii] = x2 + rs * 2;
        y[ii] = y2 + rs * 2;
        z[ii] = z2;
      } else {
        x2 = rs * Math.cos(i * q4 + q5);
        y2 = rs * Math.sin(i * q4 + q5);
        z2 = (i * r - (k + 1) * h1) * Math.sin(q3) - h2;
        kk = Math.abs(Math.floor(z2 / t));

        if (z2 > t - 0.01) {
          z2 = z2 - t * kk;
        }

        if (z2 < -0.01) {
          z2 = z2 + t * kk;
        }

        x[ii] = x2 + rs * 2;
        y[ii] = y2 + rs * 2;
        z[ii] = z2;
      }

      ii++;
    } // make atoms


    var atoms = [];
    var NunitCNT = x.length;
    var xrange = [];
    var yrange = [];
    var zrange = [];

    for (var i = 0; i < repeat; i++) {
      for (var j = 0; j < NunitCNT; j++) {
        var atomNumber = j + NunitCNT * i;

        if (i === 0 && j === 0) {
          xrange.push(x[j]);
          xrange.push(x[j]);
          yrange.push(y[j]);
          yrange.push(y[j]);
          zrange.push(z[j]);
          zrange.push(z[j]);
        }

        atoms[atomNumber] = {};
        atoms[atomNumber].x = x[j];
        atoms[atomNumber].y = y[j];
        atoms[atomNumber].z = z[j] + t * i;

        if (xrange[0] > atoms[atomNumber].x) {
          xrange[0] = atoms[atomNumber].x;
        } else if (xrange[1] < atoms[atomNumber].x) {
          xrange[1] = atoms[atomNumber].x;
        }

        if (yrange[0] > atoms[atomNumber].y) {
          yrange[0] = atoms[atomNumber].y;
        } else if (yrange[1] < atoms[atomNumber].y) {
          yrange[1] = atoms[atomNumber].y;
        }

        if (zrange[0] > atoms[atomNumber].z) {
          zrange[0] = atoms[atomNumber].z;
        } else if (zrange[1] < atoms[atomNumber].z) {
          zrange[1] = atoms[atomNumber].z;
        }

        atoms[atomNumber].element = "C";
      }
    }

    return {
      atoms: atoms,
      r: rs,
      l: t * repeat,
      range: {
        x: xrange,
        y: yrange,
        z: zrange
      }
    }; //r : radius, l : length of cnt, t : length of unit CNT
  };

  structures['C60'] = function () {
    var buckyball = [{
      'x': 2.1665,
      'y': 0.5906,
      'z': 2.5874,
      'element': "C"
    }, {
      'x': 3.0378,
      'y': 0.1766,
      'z': 1.5918,
      'element': "C"
    }, {
      'x': 1.2786,
      'y': -0.3098,
      'z': 3.1679,
      'element': "C"
    }, {
      'x': 3.0118,
      'y': -1.1434,
      'z': 1.1654,
      'element': "C"
    }, {
      'x': 3.1034,
      'y': -1.4335,
      'z': -0.193,
      'element': "C"
    }, {
      'x': 3.1503,
      'y': 1.2106,
      'z': 0.6682,
      'element': "C"
    }, {
      'x': 3.2428,
      'y': 0.9149,
      'z': -0.6859,
      'element': "C"
    }, {
      'x': 3.2192,
      'y': -0.4023,
      'z': -1.1207,
      'element': "C"
    }, {
      'x': -0.4393,
      'y': 1.3527,
      'z': 3.1271,
      'element': "C"
    }, {
      'x': 0.4363,
      'y': 2.2618,
      'z': 2.5542,
      'element': "C"
    }, {
      'x': -0.0296,
      'y': 0.0633,
      'z': 3.4379,
      'element': "C"
    }, {
      'x': 1.7442,
      'y': 1.879,
      'z': 2.283,
      'element': "C"
    }, {
      'x': 2.3519,
      'y': 2.2676,
      'z': 1.099,
      'element': "C"
    }, {
      'x': -0.2633,
      'y': 3.0268,
      'z': 1.6326,
      'element': "C"
    }, {
      'x': 0.3374,
      'y': 3.4054,
      'z': 0.4373,
      'element': "C"
    }, {
      'x': 1.6516,
      'y': 3.0278,
      'z': 0.1707,
      'element': "C"
    }, {
      'x': -2.0903,
      'y': -0.8225,
      'z': 2.5955,
      'element': "C"
    }, {
      'x': -2.5111,
      'y': 0.4664,
      'z': 2.2854,
      'element': "C"
    }, {
      'x': -0.8449,
      'y': -1.0252,
      'z': 3.1738,
      'element': "C"
    }, {
      'x': -1.6874,
      'y': 1.5533,
      'z': 2.5512,
      'element': "C"
    }, {
      'x': -1.5843,
      'y': 2.5858,
      'z': 1.6319,
      'element': "C"
    }, {
      'x': -3.2314,
      'y': 0.4061,
      'z': 1.1007,
      'element': "C"
    }, {
      'x': -3.1227,
      'y': 1.441,
      'z': 0.1746,
      'element': "C"
    }, {
      'x': -2.2947,
      'y': 2.5291,
      'z': 0.4399,
      'element': "C"
    }, {
      'x': -0.4908,
      'y': -2.9133,
      'z': 1.7365,
      'element': "C"
    }, {
      'x': -1.743,
      'y': -2.7124,
      'z': 1.1637,
      'element': "C"
    }, {
      'x': -0.0393,
      'y': -2.0684,
      'z': 2.7453,
      'element': "C"
    }, {
      'x': -2.5486,
      'y': -1.665,
      'z': 1.5942,
      'element': "C"
    }, {
      'x': -3.2602,
      'y': -0.9141,
      'z': 0.6701,
      'element': "C"
    }, {
      'x': -1.6543,
      'y': -3.0061,
      'z': -0.1897,
      'element': "C"
    }, {
      'x': -2.3542,
      'y': -2.2439,
      'z': -1.117,
      'element': "C"
    }, {
      'x': -3.1643,
      'y': -1.1949,
      'z': -0.6878,
      'element': "C"
    }, {
      'x': 2.1364,
      'y': -2.0553,
      'z': 1.7358,
      'element': "C"
    }, {
      'x': 1.6895,
      'y': -2.9009,
      'z': 0.7293,
      'element': "C"
    }, {
      'x': 1.2785,
      'y': -1.6366,
      'z': 2.7435,
      'element': "C"
    }, {
      'x': 0.3678,
      'y': -3.3327,
      'z': 0.7302,
      'element': "C"
    }, {
      'x': -0.344,
      'y': -3.3904,
      'z': -0.4594,
      'element': "C"
    }, {
      'x': 2.2889,
      'y': -2.525,
      'z': -0.464,
      'element': "C"
    }, {
      'x': 1.579,
      'y': -2.5718,
      'z': -1.658,
      'element': "C"
    }, {
      'x': 0.256,
      'y': -3.0054,
      'z': -1.6531,
      'element': "C"
    }, {
      'x': -2.1828,
      'y': -0.5783,
      'z': -2.5979,
      'element': "C"
    }, {
      'x': -1.748,
      'y': -1.8694,
      'z': -2.3083,
      'element': "C"
    }, {
      'x': -0.4385,
      'y': -2.2469,
      'z': -2.5845,
      'element': "C"
    }, {
      'x': -1.2815,
      'y': 0.3189,
      'z': -3.1671,
      'element': "C"
    }, {
      'x': -2.1526,
      'y': 2.0545,
      'z': -1.7378,
      'element': "C"
    }, {
      'x': -3.0485,
      'y': 1.1535,
      'z': -1.1811,
      'element': "C"
    }, {
      'x': -3.0656,
      'y': -0.1629,
      'z': -1.6107,
      'element': "C"
    }, {
      'x': -1.2661,
      'y': 1.6407,
      'z': -2.7271,
      'element': "C"
    }, {
      'x': 0.5039,
      'y': 2.9361,
      'z': -1.7418,
      'element': "C"
    }, {
      'x': -0.3788,
      'y': 3.3561,
      'z': -0.7513,
      'element': "C"
    }, {
      'x': -1.6943,
      'y': 2.9186,
      'z': -0.7491,
      'element': "C"
    }, {
      'x': 0.0521,
      'y': 2.073,
      'z': -2.7355,
      'element': "C"
    }, {
      'x': 2.0976,
      'y': 0.834,
      'z': -2.6051,
      'element': "C"
    }, {
      'x': 2.5517,
      'y': 1.6923,
      'z': -1.6107,
      'element': "C"
    }, {
      'x': 1.7589,
      'y': 2.7452,
      'z': -1.1824,
      'element': "C"
    }, {
      'x': 0.842,
      'y': 1.0206,
      'z': -3.1786,
      'element': "C"
    }, {
      'x': 0.4461,
      'y': -1.3495,
      'z': -3.1661,
      'element': "C"
    }, {
      'x': 1.6983,
      'y': -1.5485,
      'z': -2.5908,
      'element': "C"
    }, {
      'x': 2.5184,
      'y': -0.4623,
      'z': -2.3171,
      'element': "C"
    }, {
      'x': 0.0218,
      'y': -0.0645,
      'z': -3.4585,
      'element': "C"
    }];
    return {
      atoms: buckyball,
      range: {
        x: [-3.2602, 3.2428],
        y: [-3.3904, 3.4054],
        z: [-3.4585, 3.4379]
      }
    };
  };

  if (structures[name] !== undefined) {
    return structures[name](args);
  } else {
    return false;
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/StructureList/StructureList.js":
/*!*************************************************************!*\
  !*** ./resources/js/vlatoms/StructureList/StructureList.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    turnSwitch: function turnSwitch(swi) {
      if (swi) {
        v.option.strListInfo = true;
      } else {
        v.option.strListInfo = false;
      }

      if (!v.option.strListInfo) {
        v.strInfoWrapper.hide();
      } else {
        v.strInfoWrapper.show();
      }
    },
    showStructureList: function showStructureList() {
      var p_target = $(v.wrapper).parents(".visualizer_wrapper");

      if (v.structureListWrapper === undefined) {
        p_target.append("\n<div class=strlist_wrapper style='display:none;'>\n\t<div class=strlist_header>\n\t\t<label style='margin-right:5px;'>Structure List</label>\n\t\t<i style='cursor:pointer;' class='fas fa-play-circle strlist_slide_start'></i>\n\t\t<i style='cursor:pointer;display:none;' class='fas fa-pause-circle strlist_slide_stop'></i>\n\t\t<i style='float:right;cursor:pointer;padding:4px 15px;' class='fas fa-times strlist_close'></i>\n\t</div>\n\t<div class=strlist_body>\n\t\t<table class=table>\n\t\t\t<tbody></tbody>\n\t\t</table>\n\t</div>\n</div>");
        v.structureListWrapper = p_target.find(".strlist_wrapper");
        v.structureListWrapper.draggable();
        v.structureListWrapper.show(500);
        v.structureListWrapper.find(".strlist_close").click(function (e) {
          v.StructureList.showStructureList();
          e.stopPropagation();
          e.preventDefault();
        });

        if (v.option.strListDel) {
          v.structureListWrapper.find("tbody").sortable({
            update: function update(event, ui) {
              var __newlist = $(event.target).find(".strlist_tr");

              var __nlist = [];

              for (var i = 0; i < __newlist.length; i++) {
                __nlist.push($(__newlist[i]).data('idx'));
              }

              var new_strlist = objClone(v.strlist);
              v.strlist.length = 0;

              for (var _i = 0; _i < __nlist.length; _i++) {
                if (__nlist[_i] === v.strNum) {
                  v.strNum = _i;
                  break;
                }
              }

              for (var _i2 = 0; _i2 < __nlist.length; _i2++) {
                v.strlist.push(new_strlist[__nlist[_i2]]);
              }

              v.StructureList.drawStructureList();
            }
          });
        }

        v.structureListWrapper.find(".strlist_slide_start").click(function () {
          $(this).hide();
          $(this).parent().find(".strlist_slide_stop").show();
          v.option.strListSlide = true;
          v.StructureList.strListSlide();
        });
        v.structureListWrapper.find(".strlist_slide_stop").click(function () {
          $(this).hide();
          $(this).parent().find(".strlist_slide_start").show();
          v.option.strListSlide = false;
        });
      }

      v.StructureList.drawStructureList();

      if (v.option.strList) {
        v.structureListWrapper.hide(500);
      } else {
        v.structureListWrapper.show(500);
      }

      v.option.strList = !v.option.strList;
    },
    drawStructureList: function drawStructureList() {
      v.structureListWrapper.find('table>tbody').empty();

      for (var i = 0; i < v.strlist.length; i++) {
        if (v.strlist[i]["history"].length === 0) {
          continue;
        }

        var str_str = objClone(v.strlist[i]["history"][v.strlist[i]["Structure"]].Structure);
        var la = VLatoms.Math.len(str_str.a);
        var lb = VLatoms.Math.len(str_str.b);
        var lc = VLatoms.Math.len(str_str.c);
        var al = (Math.acos(VLatoms.Math.dot(str_str.b, str_str.c) / lb / lc) * 180 / Math.PI).toFixed(3);
        var be = (Math.acos(VLatoms.Math.dot(str_str.c, str_str.a) / lc / la) * 180 / Math.PI).toFixed(3);
        var gam = (Math.acos(VLatoms.Math.dot(str_str.a, str_str.b) / la / lb) * 180 / Math.PI).toFixed(3);
        var str_formula = VLatoms.Utils.Structure.toFormula(str_str);
        var ih = "\n<tr class='strlist_tr ".concat(v.strNum === i ? "selected_strlist" : "", "' data-idx=").concat(i, ">\n\t<td>\n\t\t<div class='row'>\n\t\t\t<div class='col-5'>\n\t\t\t\t<label style='font-weight:700;'>Name</label>\n\t\t\t</div>\n\t\t\t<div class='col-7'>\n\t\t\t\t<span class=str_name_span data-idx=").concat(i, ">").concat(v.strlist[i]["name"], "</span><input class=str_name_input data-idx=").concat(i, " style='display:none;width:75px;'>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='row'>\n\t\t\t<div class='col-5'>\n\t\t\t\t<label style='font-weight:700;'>Formula</label>\n\t\t\t</div>\n\t\t\t<div class='col-7'>\n\t\t\t\t").concat(str_formula.formulaStr, "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='row'>\n\t\t\t<div class='col-5'>\n\t\t\t\t<label style='font-weight:700;'>a,b,c(\u212B)</label>\n\t\t\t</div>\n\t\t\t<div class='col-7'>\n\t\t\t\t<span style='color:#e3342f;' title=\"").concat(la.toFixed(8), "\">").concat(la.toFixed(3), " </span><span style='color:#28a745;' title=\"").concat(lb.toFixed(8), "\">").concat(lb.toFixed(3), " </span><span style='color:#3490dc;' title=\"").concat(lc.toFixed(8), "\">").concat(lc.toFixed(3), " </span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='row'>\n\t\t\t<div class='col-5'>\n\t\t\t\t<label style='font-weight:700;'>\u03B1,\u03B2,\u03B3 (\xB0)</label>\n\t\t\t</div>\n\t\t\t<div class='col-7'>\n\t\t\t\t").concat([al, be, gam].join(" "), "\n\t\t\t</div>\n\t\t</div>\n\t</td>");

        if (v.option.strListDel) {
          ih += "<td><i style='color:#ababab;cursor:pointer;font-size:18px;' class='fas fa-trash-alt delete_str_list'></i></td>";
        } else {
          ih += "<td></td>";
        }

        ih += "</tr>";
        v.structureListWrapper.find("table>tbody").append(ih);
      }

      v.structureListWrapper.find("table>tbody").append("<tr data-idx=-1><td colspan=6 style='text-align:center;'><i style='color:green;font-size:20px;' class='fas fa-plus-circle add_str_list'></i></td></tr>");
      v.structureListWrapper.find("table>tbody").find(".delete_str_list").click(function (e) {
        var _idx = $(this).parents("tr").data('idx');

        v.StructureList.removeStrlist(_idx);
      });
      v.structureListWrapper.find("table>tbody>tr").find(".str_name_span").click(function (e) {
        var _idx = $(this).data('idx');

        $(this).hide();
        $(this).parent().find("input").val($(this).text());
        $(this).parent().find("input").show();
        $(this).parent().find("input").focus();
      });
      v.structureListWrapper.find("table>tbody>tr").find(".str_name_input").focusout(function () {
        var _idx = $(this).data('idx');

        var n_name = $(this).val();
        $(this).hide();
        $(this).parent().find("span").text(n_name);
        $(this).parent().find("span").show();
        v.strlist[_idx].name = n_name;
      });
      v.structureListWrapper.find("table>tbody>tr").click(function () {
        var _idx = $(this).data('idx');

        if (_idx === -1) return;

        if (_idx === v.strNum) {
          return;
        }

        v.StructureList.loadStrlist(_idx);
        v.structureListWrapper.find("table>tbody").find(".selected_strlist").removeClass("selected_strlist");
        $(this).addClass("selected_strlist");
      });
      v.structureListWrapper.find("table>tbody>tr").find(".add_str_list").click(function () {
        v.StructureList.addStrlist();
        v.StructureList.drawStructureList();
      });
    },
    addStrlist: function addStrlist() {
      v.strlist.push({
        "name": "Structure-" + v.strlist.length,
        "Structure": 0,
        "history": []
      });
      v.StructureList.loadStrlist(v.strlist.length - 1);
    },
    loadStrlist: function loadStrlist(idx) {
      if (idx >= v.strlist.length) {
        return false;
      }

      if (v.strNum >= v.strlist.length) {
        v.strNum = 0;
      }

      if (v.strNum !== idx) {
        v.strlist[v.strNum]["history"] = JSON.parse(JSON.stringify(v.Manipulate.history));
        v.strNum = idx;
      }

      v.Manipulate.history = v.strlist[v.strNum]['history'];

      if (v.Manipulate.history.length === 0 && idx !== 0) {
        v.Manipulate.addHistory({
          mode: "New Structure",
          args: {},
          Structure: objClone(v.Structure)
        });
      }

      if (v.strlist[v.strNum]["history"].length > 0) {
        if (v.strlist[v.strNum]["history"].length <= v.strlist[v.strNum]["Structure"]) {
          v.strlist[v.strNum]["Structure"] = 0;
        }

        v.Structure = VLatoms.Utils.redefineStructure(v.strlist[v.strNum]["history"][v.strlist[v.strNum]["Structure"]]["Structure"]);
      }

      v.Manipulate.updateHistoryTbl();
      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();
    },
    strListSlide: function strListSlide() {
      if (v.option.strListSlide) {
        var next = v.strNum * 1 + 1;

        if (next >= v.strlist.length) {
          next = 0;
        }

        v.StructureList.loadStrlist(next);
        v.StructureList.drawStructureList();
        setTimeout(function () {
          v.StructureList.strListSlide();
        }, 500);
      }
    },
    removeStrlist: function removeStrlist(idx) {
      if (!v.option.strListDel) {
        return;
      }

      if (v.strlist.length === 1) {
        return false;
      }

      v.strlist.splice(idx, 1);
      v.StructureList.drawStructureList();

      if (idx < v.strNum) {
        v.strNum = v.strNum - 1;
      } else if (idx === v.strNum) {
        v.strNum = 0;
      }

      v.StructureList.loadStrlist(v.strNum);
    }
    /* Structure List */

  };
};

/***/ }),

/***/ "./resources/js/vlatoms/UI/UI.js":
/*!***************************************!*\
  !*** ./resources/js/vlatoms/UI/UI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (wrapper) {
  return {
    message: function message(title, msg, btn, option) {
      if ($('#VLMessage')) {
        $('#VLMessage').remove();
      }

      var _wrapper;

      _wrapper = wrapper || document.body;
      var div = document.createElement('div');
      div.id = "VLMessage";

      if (option === undefined) {
        option = {};
      }

      option.width = option.width || 500;
      option.height = option.height || 100;

      if (option.width == "auto") {
        div.style.width = "auto";
      } else {
        div.style.width = option.width + "px";
      }

      div.style.position = "absolute"; //Position

      $(div).addClass("VLMessage"); //			div.style.left=0;
      //			div.style.right=0;

      var btnhtml = "";
      var btncount = 0;

      for (var i in btn) {
        switch (i) {
          case "close":
            var close_txt = "Close";

            if (typeof btn[i] == "string") {
              close_txt = btn[i];
            }

            btnhtml += "<a href=\"javascript:;\" id=VLM_btn_close style='margin:2px 1px;'><button class='btn btn-light'>" + close_txt + "</button></a>";
            break;

          default:
            var btnClass = "btn-success";

            if (option.btnClasses) {
              if (option.btnClasses[btncount]) {
                btnClass = option.btnClasses[btncount];
              }
            }

            btnhtml += '<a href=javascript:; id=VLM_btn_' + btncount + ' ><button class="VLM_btn_highlight btn ' + btnClass + '" style="margin:2px 1px;">' + i + '</button></a>';
            btncount++;
            break;
        }

        btnhtml += "\n";
      }

      var innerhtml = "";
      innerhtml += "<table class=VLMTable>";
      innerhtml += "<thead class=VLMHeader><tr><td>" + title + "</td></tr></thead>";
      innerhtml += "<tbody class=VLMBody><tr><td>";
      innerhtml += msg;
      innerhtml += "</td></tr></tbody>";
      innerhtml += "<tfoot class=VLMFooter><tr><td style='padding-right:15px;'>" + btnhtml + "</td></tr></tfoot>";
      innerhtml += "</table>";
      div.innerHTML = innerhtml;
      $(document.body).append(div); //_wrapper.appendChild(div);
      //$(div).draggable();

      var matchingcount = 0;

      for (var _i in btn) {
        if (_i !== "close") {
          document.getElementById('VLM_btn_' + matchingcount).onclick = btn[_i];
          matchingcount++;
        }
      }

      option.width = option.width || 400;

      if (option.height) {
        div.style['min-height'] = option.height + "px";
      } else {
        option.height = $(div).height();
      }

      div.style.width = option.width + "px";
      div.style.position = "absolute"; //Position

      var ww = option.left || $(window).width() / 2;
      var wh = option.top || 0.5 + $(window).height() - option.height + $(window).scrollTop();
      $(div).css({
        "left": ww,
        //0.5*(ww-option.width),
        "top": wh
      });
      $(div).draggable({
        cancel: "canvas,input,textarea,button,select,option"
      });
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/Utils/Structure/Structure.js":
/*!***********************************************************!*\
  !*** ./resources/js/vlatoms/Utils/Structure/Structure.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  getSpaceGroup: function getSpaceGroup(_v) {
    if (_v.Structure.atoms.length == 0 || _v.Structure.atoms.length > 200 || !_v.option.cellInfo) {
      /*
      			console.log('spacegroup cancel');
      			console.log(
      				v.Structure.atoms.length 
      				, v.option.cellInfo
      				, v.option.cellInfoSpaceGroup
      					);
      */
      return false;
    }

    var cif = VLatoms.Utils.Structure.toCIF(_v.Structure);
    var ret = post_ajax("/modeling/symcheck", {
      "ciffile": cif
    });

    if (ret.statusCode === 200) {
      return ret.body;
    } else {
      return false;
    }
  },
  toFormula: function toFormula(s) {
    var formulaArr = {};
    var ca;
    var gcd;
    var formulaStr = "",
        formulaUnitStr = "";

    for (var i = 0; i < s.atoms.length; i++) {
      ca = s.atoms[i];

      if (Object.keys(formulaArr).indexOf(ca.element) < 0) {
        formulaArr[ca.element] = 0;
      }

      formulaArr[ca.element]++;
    }

    if (Object.keys(formulaArr).length > 1) {
      gcd = formulaArr[Object.keys(formulaArr)[0]];
    } else {
      gcd = 1;
    }

    for (var el in formulaArr) {
      formulaStr += el + formulaArr[el];
      gcd = math.gcd(gcd, formulaArr[el]);
    }

    var formulaUnit = {};

    for (var el in formulaArr) {
      formulaUnit[el] = formulaArr[el] / gcd;
    }

    for (var el in formulaUnit) {
      formulaUnitStr += el + formulaUnit[el];
    }

    return {
      formulaArr: formulaArr,
      formulaStr: formulaStr,
      formulaUnit: formulaUnit,
      formulaUnitStr: formulaUnitStr,
      nfu: gcd
    };
  },
  getSurfaceAtoms: function getSurfaceAtoms(s) {
    var v = this.v;

    var _s = objClone(s); // Generate surface points


    function makeGrid(psize) {
      var gridSize = 0.5;
      var grid = Array();
      var dx, dy, dz;
      var cx, cy, cz;
      var sx = VLatoms.Math.len(s.a);
      var sy = VLatoms.Math.len(s.b);
      var sz = VLatoms.Math.len(s.c);

      for (var i = 0; i < sx / gridSize; i++) {
        cx = i * gridSize;
        grid[i] = Array();

        for (var j = 0; j < sy / gridSize; j++) {
          cy = j * gridSize;
          grid[i][j] = Array();

          for (var k = 0; k < sz / gridSize; k++) {
            cz = k * gridSize;
            grid[i][j][k] = -1;

            for (var l = 0; l < s.atoms.length; l++) {
              ar = s.atoms[l].radius + psize;
              ax = s.atoms[l].x;
              ay = s.atoms[l].y;
              az = s.atoms[l].z;
              dx = ax - cx;
              if (Math.abs(dx > ar)) continue;
              dy = ay - cy;
              if (Math.abs(dy > ar)) continue;
              dz = az - cz;
              if (Math.abs(dz > ar)) continue;
              d = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (d < ar) {
                grid[i][j][k] = l;
                break;
              }
            }
          }
        }
      }

      return grid;
    }

    var sAtoms = [];
    var nflood = 0;

    function floodFill(posx, posy) {
      if (posx < 0 || posx > cGrid.length - 1) return;
      if (posy < 0 || posy > cGrid[0].length - 1) return;
      if (cGrid[posx][posy] == -2) return;

      if (cGrid[posx][posy] != -1) {
        if (sAtoms.indexOf(cGrid[posx][posy]) == -1) sAtoms.push(cGrid[posx][posy]);
        return;
      } else {
        cGrid[posx][posy] = -2;
      }

      nflood++;
      floodFill(posx, posy + 1);
      floodFill(posx, posy - 1);
      floodFill(posx - 1, posy);
      floodFill(posx + 1, posy);
    }

    console.log("S1");
    var grid = makeGrid(2.5);
    var startPos = undefined;

    for (var ii = 0; ii < grid.length; ii++) {
      cGrid = grid[ii];
      startPos = undefined;
      nflood = 0;

      for (var i = 0; i < cGrid.length; i++) {
        for (var j = 0; j < cGrid[0].length; j++) {
          if (cGrid[i][j] == -1) startPos = [i, j];
          break;
        }

        if (startPos !== undefined) break;
      }

      if (startPos === undefined) startPos = [0, 0]; //			console.log("Starting flood fill from "+startPos);
      //			console.log("Starting flood fill from "+cGrid[startPos[0],startPos[1]]);

      floodFill(startPos[0], startPos[1]);
      console.log(nflood);
    }

    console.log("S2");
    return sAtoms; //		return makeGrid();
  },
  cartToFract: function cartToFract(pos, lat) {
    var v = this.v;
    var latMatInv = VLatoms.Math.inv3([lat[0], lat[1], lat[2]]);
    var pos_fract = [];
    pos_fract = VLatoms.Math.vecdotmat(pos, latMatInv);
    return pos_fract;
  },
  fracToCart: function fracToCart(delta, lattice) {
    return math.multiply(delta, lattice);
  },
  viewToCart: function viewToCart(delta, camera) {
    var v = this.v;
    var uparr = [camera.up.x, camera.up.y, camera.up.z]; // ^

    uparr = VLatoms.Math.norm(uparr);
    var carr = [camera.position.x, camera.position.y, camera.position.z];
    carr = VLatoms.Math.norm(carr);
    var rightarr = VLatoms.Math.cross(uparr, carr);
    rightarr = VLatoms.Math.norm(rightarr); //		 var ref = [0,0,0];

    var newDelta = math.add(math.add(math.multiply(delta[0], rightarr), math.multiply(delta[1], uparr)), math.multiply(delta[2], carr)); //				newpos = VLatoms.Math.add( VLatoms.Math.cdotvec(step, ref) , position);
    //				newpos = VLatoms.Math.cdotvec(step, ref);

    return newDelta; //----------------------------------------------

    /*
    			var sa = v.IO.selectedAtoms;
    			var direction = args.direction;// $('.manipulate_move_direction:checked').val();
    			var step = args.step;// 1
    			var onEscape = args.onEscape=="expand"?true:false;
    			var posFract;
    			var tmpStrain = [];
    			var uparr = [ v.camera.up.x, v.camera.up.y, v.camera.up.z ]; // ^
    				uparr = VLatoms.Math.norm(uparr);
    			var carr = [v.camera.position.x, v.camera.position.y, v.camera.position.z];
    				carr = VLatoms.Math.norm(carr);
    			var rightarr = VLatoms.Math.cross(uparr,carr);
    				rightarr = VLatoms.Math.norm(rightarr);
    				var newpos;
    			for(var i=0;i<sa.length;i++){
    				var ca = v.Structure.atoms[sa[i]];
    				switch(direction){
    					case "x":
    //						ref = [1,0,0];
    						ref = math.multiply(v.Structure.a,1/math.norm(v.Structure.a));
    					break;
    					case "y":
    //						ref = [0,1,0];
    						ref = math.multiply(v.Structure.b,1/math.norm(v.Structure.b));
    					break;
    					case "z":
    //						ref = [0,0,1];
    						ref = math.multiply(v.Structure.c,1/math.norm(v.Structure.c));
    					break;
    					case "vx":
    						ref = rightarr;
    					break;
    					case "vy":
    						ref = uparr;
    					break;
    					case "vz":
    						ref = carr;
    					break;
    				}
    				newpos = VLatoms.Math.add( VLatoms.Math.cdotvec(step, ref) , [ca.x, ca.y, ca.z]);
    				ca.x = newpos[0];
    				ca.y = newpos[1];
    				ca.z = newpos[2];
    */
  },
  cleaveSurface: function cleaveSurface(basis, milIndex, args) {
    var v = this.v;

    if (args === undefined) {
      args = [];
    }

    if (args['maxv3length'] === undefined) {
      args['maxv3length'] = 50;
    }

    var maxv3length = args['maxv3length'];

    function nonZeros(arr) {
      var retArr = [];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) retArr.push(arr[i]);
      }

      return retArr;
    }

    ;
    var h = milIndex[0];
    var k = milIndex[1];
    var l = milIndex[2];
    var v1, v2;
    var nonZeroMilIndices = nonZeros(milIndex);
    var nzeros = 3 - nonZeroMilIndices.length;
    var lcm = 1;

    for (var i = 0; i < nonZeroMilIndices.length; i++) {
      console.log(nonZeroMilIndices[i]);
      lcm = VLatoms.Math.lcm(lcm, nonZeroMilIndices[i]);
    }

    var p1, p2, p3;

    switch (nzeros) {
      case 0:
        p1 = VLatoms.Math.cdotvec(lcm / h, basis[0]);
        p2 = VLatoms.Math.cdotvec(lcm / k, basis[1]);
        p3 = VLatoms.Math.cdotvec(lcm / l, basis[2]);
        break;

      case 1:
        if (h == 0) {
          p2 = VLatoms.Math.cdotvec(lcm / k, basis[1]);
          p3 = VLatoms.Math.cdotvec(lcm / l, basis[2]);
          p1 = VLatoms.Math.add(p3, basis[0]);
        }

        if (k == 0) {
          p1 = VLatoms.Math.cdotvec(lcm / h, basis[0]);
          p2 = VLatoms.Math.add(p1, basis[1]);
          p3 = VLatoms.Math.cdotvec(lcm / l, basis[2]);
        }

        if (l == 0) {
          p1 = VLatoms.Math.cdotvec(lcm / h, basis[0]);
          p2 = VLatoms.Math.cdotvec(lcm / k, basis[1]);
          p3 = VLatoms.Math.add(p1, basis[2]);
        }

        break;

      case 2:
        return;
        break;
    } //milIndex :


    console.log('milIndex', milIndex);
    console.log('nzeros', nzeros);
    console.log('p1~3', p1, p2, p3);
    console.log('v12', v1, v2);
    console.log('v1x2', v1xv2);
    var v1 = VLatoms.Math.subtract(p2, p1);
    var v2 = VLatoms.Math.subtract(p3, p1);
    var v3;
    var v1xv2 = VLatoms.Math.cross(v1, v2); // most orthogonal v3

    var theta1, theta2, theta3;
    var lastT = 100;

    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {
        for (var k = -1; k < 2; k++) {
          if (i == 0 && j == 0 && k == 0) continue;
          var v3tmp = VLatoms.Math.cdotvec(i, basis[0]);
          v3tmp = VLatoms.Math.add(v3tmp, VLatoms.Math.cdotvec(j, basis[1]));
          v3tmp = VLatoms.Math.add(v3tmp, VLatoms.Math.cdotvec(k, basis[2]));
          theta1 = VLatoms.Math.angle(v1xv2, v3tmp);
          theta2 = VLatoms.Math.angle(v1, v3tmp);
          theta3 = VLatoms.Math.angle(v2, v3tmp);

          if (theta1 < Math.PI / 2 && theta2 < Math.PI / 2 && theta3 < Math.PI / 2 && theta2 >= 0 && theta3 >= 0) {
            if (theta1 < lastT) {
              lastT = theta1;
              v3 = v3tmp;
            }
          }
        }
      }
    } //		var maxv3length = 30; // Maximum v3 length


    console.log(v3, VLatoms.Math.rad2deg(lastT));
    console.log(v1, v2); // Loop
    //var NNv3 = v3.splice(0);

    var NNv3 = v3;
    var pv1, pv2;
    var tol = 0.5;
    console.log('tol1', tol);
    var v3matrix = [];
    var lenangles = [];
    var millerv3s = [];

    for (var q = 1; q < 50; q++) {
      pv1 = VLatoms.Math.dot(VLatoms.Math.cdotvec(q, NNv3), v1);
      pv2 = VLatoms.Math.dot(VLatoms.Math.cdotvec(q, NNv3), v2);
      console.log(pv1, pv2, pv1 % 1, pv2 % 1);

      if (pv1 % 1 > 1 - tol || pv1 % 1 < tol) {
        if (pv2 % 1 > 1 - tol || pv2 % 1 < tol) {
          var done = false;
          var angle = VLatoms.Math.angle(v1xv2, NNv3);
          console.log(VLatoms.Math.rad2deg(VLatoms.Math.angle(v1xv2, NNv3)));
          v3 = VLatoms.Math.cdotvec(q, NNv3);
          console.log(VLatoms.Math.rad2deg(angle) + "DEG");

          while (!done) {
            if (VLatoms.Math.rad2deg(angle) < 5) {
              done = true;
            } else if (VLatoms.Math.angle(VLatoms.Math.subtract(v3, v1), v1xv2) < angle) {
              v3 = VLatoms.Math.subtract(v3, v1);
              angle = VLatoms.Math.angle(v3, v1xv2);
            } else if (VLatoms.Math.angle(VLatoms.Math.add(v3, v1), v1xv2) < angle) {
              v3 = VLatoms.Math.add(v3, v1);
              angle = VLatoms.Math.angle(v3, v1xv2);
            } else if (VLatoms.Math.angle(VLatoms.Math.subtract(v3, v2), v1xv2) < angle) {
              v3 = VLatoms.Math.subtract(v3, v2);
              angle = VLatoms.Math.angle(v3, v1xv2);
            } else if (VLatoms.Math.angle(VLatoms.Math.add(v3, v2), v1xv2) < angle) {
              v3 = VLatoms.Math.add(v3, v2);
              angle = VLatoms.Math.angle(v3, v1xv2);
            } else {
              done = true;
            }
          }

          if (VLatoms.Math.len(v3) < maxv3length) {
            v3matrix.push(v3);
            lenangles.push([VLatoms.Math.len(v3), VLatoms.Math.rad2deg(VLatoms.Math.angle(v1xv2, v3))]);
            millerv3s.push(VLatoms.Math.matdotvec(VLatoms.Math.inv3(basis), v3));
          }
        }
      }
    }

    if (v3matrix.length == 0) {
      console.warn("Could not find v3 matrix.");
      v3matrix = [NNv3];
      lenangles = [VLatoms.Math.len(NNv3)];
    }

    var basisList = [];
    var al, be, gam;
    gam = VLatoms.Math.rad2deg(VLatoms.Math.angle(v1, v2));

    for (var i = 0; i < v3matrix.length; i++) {
      al = VLatoms.Math.rad2deg(VLatoms.Math.angle(v2, v3matrix[i]));
      be = VLatoms.Math.rad2deg(VLatoms.Math.angle(v1, v3matrix[i]));
      basisList.push({
        angles: {
          alpha: al,
          beta: be,
          gamma: gam
        },
        basis: [v1, v2, v3matrix[i]]
      });
    }
    /*console.log('basis1',JSON.parse(JSON.stringify(basisList)));
    		for(var i = 0; i<basisList.length; i++){
    			basisList[i].basis = math.divide(basisList[i].basis,VLatoms.Utils.gram_schmidt_orthonormalization_3d(basisList[i].basis));
    			if(basisList[i].basis[0][1] < 1e-7) basisList[i].basis[0][1] = 0;
    			if(basisList[i].basis[0][2] < 1e-7) basisList[i].basis[0][2] = 0;
    			if(basisList[i].basis[1][2] < 1e-7) basisList[i].basis[1][2] = 0;
    		}
    console.log('basis2',basisList);*/


    return basisList; //		return {"v3matrix":v3matrix,"lenangles":lenangles,"millerv3s":millerv3s,newbasis:[v1,v2,v3matrix[0]]};
  },
  basisTransform: function basisTransform(orgB, newB, orgPos) {
    var v = this.v;
    var oBInv = math.inv(math.transpose(orgB));
    console.log(oBInv);
    var C = VLatoms.Math.matdotmat(newB, oBInv);
    var v1 = newB[0];
    var v2 = newB[1];
    var v3 = newB[2];
    var millerv1 = VLatoms.Math.matdotvec(oBInv, v1);
    var millerv2 = VLatoms.Math.matdotvec(oBInv, v2);
    var millerv3 = VLatoms.Math.matdotvec(oBInv, v3);
    var Sxyz = [[0, 0, 0], [0, 0, 0]];
    var M;

    for (var xx = 0; xx < 2; xx++) {
      for (var yy = 0; yy < 2; yy++) {
        for (var zz = 0; zz < 2; zz++) {
          M = VLatoms.Math.add(VLatoms.Math.add(VLatoms.Math.cdotvec(xx, millerv1), VLatoms.Math.cdotvec(yy, millerv2)), VLatoms.Math.cdotvec(zz, millerv3));

          for (var aa = 0; aa < 3; aa++) {
            if (M[aa] > Sxyz[0][aa]) {
              Sxyz[0][aa] = Math.round(M[aa]);
            }

            if (M[aa] < Sxyz[1][aa]) {
              Sxyz[1][aa] = Math.round(M[aa]);
            }
          }
        }
      }
    }

    var nRows = orgPos.length; //var nCols = orgPos[0].length;
    //		for (var i = 0; i < orgPos.length; i++){
    //			orgPos[i].push(i);
    //		}
    //		var retAtoms = [], ca;

    var retAtoms = [];
    console.log(Sxyz);
    console.log(C);

    for (var ii = 0; ii < nRows; ii++) {
      for (var x = Sxyz[1][0]; x <= Sxyz[0][0]; x++) {
        for (var y = Sxyz[1][1]; y <= Sxyz[0][1]; y++) {
          for (var z = Sxyz[1][2]; z <= Sxyz[0][2]; z++) {
            retAtoms.push([orgPos[ii][0] + x, orgPos[ii][1] + y, orgPos[ii][2] + z, ii]);
          }
        }
      }
    }

    var _C = VLatoms.Math.matdotmat(newB, VLatoms.Math.inv3(orgB));

    var C = Array();
    C.push([_C[0][0], _C[0][1], _C[0][2], 0]);
    C.push([_C[1][0], _C[1][1], _C[1][2], 0]);
    C.push([_C[2][0], _C[2][1], _C[2][2], 0]);
    C.push([0, 0, 0, 1]); //			console.log('c_1',math.multiply(newB,math.inv(orgB)));
    //schan wrote below

    console.log(C, retAtoms);
    retAtoms = math.transpose(math.multiply(math.inv(math.transpose(C)), math.transpose(retAtoms)));
    console.log("retatom", retAtoms);
    /*
    			var NewAtoms = [];
    			var tol, XA, XB, XC, XL;
    			//tol = 1e-3;	//기본값.  상대좌표 [1,1,0]에 매우 근접한 경우 해당 원자가 누락됨
    			//tol = 1e-7;
    			tol = -1e-7;
    			console.log('tol2', tol);
    			for (var i = 0; i < retAtoms.length; i++){
    				XA = retAtoms[i][0];				
    				XB = retAtoms[i][1];				
    				XC = retAtoms[i][2];				
    				XL = retAtoms[i][3];				
    				if(XA>=-tol && XA<(1-tol) && XB>=-tol && XB<(1-tol) && XC>=-tol && XC<(1-tol)){
    					NewAtoms.push([XA, XB, XC, XL]);
    				}
    			}
    			function matlab_unique(target, direction) {
    				var arrayEquality;
    				if(direction =='rows'){
    					for(var i = target.length-1; i>0; i--){
    						for(var j = i-1; j >= 0; j--){
    							arrayEquality = true;
    							for(var k = 0; k < target[i].length; k++){
    								if(target[i][k] != target[j][k]) {
    									arrayEquality = false;
    									k = target[i].length;
    								}
    							}
    							if(arrayEquality) {
    								target.splice(i,1);
    								j=0;
    							}
    						}
    					}
    				}
    			}
    			matlab_unique(NewAtoms,'rows');
    			var NewBasisVol = Math.abs(VLatoms.Math.dot(newB[2],VLatoms.Math.cross(newB[0], newB[1])));
    			var OrigBasisVol = Math.abs(VLatoms.Math.dot(orgB[2],VLatoms.Math.cross(orgB[0], orgB[1])));
    			if(Math.abs(NewAtoms.length/orgPos.length - NewBasisVol/OrigBasisVol) >= 0.0001){
    console.log(NewAtoms.length, orgPos.length,NewBasisVol,OrigBasisVol);
    console.log(Math.abs(NewAtoms.length/orgPos.length - NewBasisVol/OrigBasisVol));
    				console.warn('EGREGIOUS ERROR, # of NewAtoms inconsistent with size of basis!\nMay need to manually tweak tolerance of atom elimination outside supercell\n');
    				return;
    			}
    */

    function atom_elimination(retAtoms, tol) {
      function matlab_unique(target, direction) {
        var arrayEquality;

        if (direction == 'rows') {
          for (var i = target.length - 1; i > 0; i--) {
            for (var j = i - 1; j >= 0; j--) {
              arrayEquality = true;

              for (var k = 0; k < target[i].length; k++) {
                if (target[i][k] != target[j][k]) {
                  arrayEquality = false;
                  k = target[i].length;
                }
              }

              if (arrayEquality) {
                target.splice(i, 1);
                j = 0;
              }
            }
          }
        }
      }

      var NewAtoms = [];
      var XA, XB, XC, XL;

      for (var i = 0; i < retAtoms.length; i++) {
        XA = retAtoms[i][0];
        XB = retAtoms[i][1];
        XC = retAtoms[i][2];
        XL = retAtoms[i][3];

        if (XA >= -tol && XA < 1 - tol && XB >= -tol && XB < 1 - tol && XC >= -tol && XC < 1 - tol) {
          NewAtoms.push([XA, XB, XC, XL]);
        }
      }

      matlab_unique(NewAtoms, 'rows');
      var NewBasisVol = Math.abs(VLatoms.Math.dot(newB[2], VLatoms.Math.cross(newB[0], newB[1])));
      var OrigBasisVol = Math.abs(VLatoms.Math.dot(orgB[2], VLatoms.Math.cross(orgB[0], orgB[1])));
      var atomsCheck = true;

      if (Math.abs(NewAtoms.length / orgPos.length - NewBasisVol / OrigBasisVol) >= 0.0001) {
        console.log(NewAtoms.length, orgPos.length, NewBasisVol, OrigBasisVol);
        console.log(Math.abs(NewAtoms.length / orgPos.length - NewBasisVol / OrigBasisVol));
        console.warn('EGREGIOUS ERROR, # of NewAtoms inconsistent with size of basis!\nMay need to manually tweak tolerance of atom elimination outside supercell\n');
        atomsCheck = false;
      }

      return {
        NewAtoms: NewAtoms,
        atomsCheck: atomsCheck
      };
    }

    var NewAtoms = [];
    console.log('try tolerance : 1e-7');
    var eliminatedAtoms = atom_elimination(retAtoms, 1e-7);

    if (eliminatedAtoms.atomsCheck) {
      NewAtoms = eliminatedAtoms.NewAtoms;
    } else {
      console.log('try tolerance : -1e-7');
      eliminatedAtoms = atom_elimination(retAtoms, -1e-7);

      if (eliminatedAtoms.atomsCheck) {
        NewAtoms = eliminatedAtoms.NewAtoms;
      } else {
        console.log('Failed to construct structure. Reduce the precision of the position of atoms located at the cell boundary and retry.');
        return false;
      }
    }

    NewAtoms.sort(function (a, b) {
      if (a[3] === b[3]) {
        return a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0;
      } else {
        return a[3] < b[3] ? -1 : 1;
      }
    });
    return NewAtoms;
  },
  union: function union(a, b) {
    var v = this.v;
    newStructure = VLatoms.Utils.redefineStructure(a);
    var b2 = VLatoms.Utils.redefineStructure(b);

    for (var i = 0; i < b.atoms.length; i++) {
      newStructure.atoms.push(b2.atoms[i]);
    }

    return newStructure;
  },
  getElArr: function getElArr(s) {
    var elarr = {};

    for (var i = 0; i < s.atoms.length; i++) {
      var sa = s.atoms[i];

      if (elarr[sa.element] === undefined) {
        elarr[sa.element] = 1;
      } else {
        elarr[sa.element]++;
      }
    }

    return elarr;
  },
  toCIF: function toCIF(structure) {
    var v = this.v;
    var la = structure['a'];
    var lb = structure['b'];
    var lc = structure['c'];
    var alen = Number(VLatoms.Math.len(la)).toFixed(5);
    var blen = Number(VLatoms.Math.len(lb)).toFixed(5);
    var clen = Number(VLatoms.Math.len(lc)).toFixed(5);
    var alpha, beta, gamma;
    alpha = Number(Math.acos(VLatoms.Math.dot(lb, lc) / blen / clen) * 180 / Math.PI).toFixed(5);
    beta = Number(Math.acos(VLatoms.Math.dot(lc, la) / clen / alen) * 180 / Math.PI).toFixed(5);
    gamma = Number(Math.acos(VLatoms.Math.dot(la, lb) / alen / blen) * 180 / Math.PI).toFixed(5);
    var elarr = VLatoms.Utils.Structure.getElArr(structure);
    var formula = "";

    for (var element in elarr) {
      formula += element + elarr[element];
    }

    var latMatInv = VLatoms.Math.inv3([la, lb, lc]);
    var cif = "# Generated by MaterialsSquare.com\n";
    cif += "data_" + formula + "\n";
    cif += "_symmetry_space_group_name_H-M   'P 1'\n";
    cif += "_cell_length_a   " + alen + "\n";
    cif += "_cell_length_b   " + blen + "\n";
    cif += "_cell_length_c   " + clen + "\n";
    cif += "_cell_angle_alpha   " + alpha + "\n";
    cif += "_cell_angle_beta   " + beta + "\n";
    cif += "_cell_angle_gamma   " + gamma + "\n";
    cif += "_symmetry_Int_Tables_number   1\n"; //	cif+="_chemical_formula_structural   TiFeO3";
    //	cif+="_chemical_formula_sum   'Ti2 Fe2 O6'";
    //	cif+="_cell_volume   108.892390228";
    //	cif+="_cell_formula_units_Z   2";

    cif += "loop_\n";
    cif += " _symmetry_equiv_pos_site_id\n";
    cif += " _symmetry_equiv_pos_as_xyz\n";
    cif += "  1  'x, y, z'\n";
    cif += "loop_\n";
    cif += " _atom_site_type_symbol\n";
    cif += " _atom_site_label\n";
    cif += " _atom_site_symmetry_multiplicity\n";
    cif += " _atom_site_fract_x\n";
    cif += " _atom_site_fract_y\n";
    cif += " _atom_site_fract_z\n";
    cif += " _atom_site_occupancy\n";
    var catoms = structure.atoms;

    for (var element in elarr) {
      var atoms_thisElement = catoms.filter(function (d) {
        return d.element == element;
      });

      for (var i = 0; i < atoms_thisElement.length; i++) {
        var ca = atoms_thisElement[i];
        var cp = [ca.x, ca.y, ca.z];
        var cp_frac = VLatoms.Math.vecdotmat(cp, latMatInv);
        cif += element + " " + element + "" + (i + 1) + " 1 " + Number(cp_frac[0]).toFixed(5) + " " + Number(cp_frac[1]).toFixed(5) + " " + Number(cp_frac[2]).toFixed(5) + " 1\n";
      }
    }

    return cif;
  },
  toPoscar: function toPoscar(structure) {
    var v = this.v;
    var la = structure['a'];
    var lb = structure['b'];
    var lc = structure['c'];
    var poscar = "POSCAR Generated by VLAtoms at MaterialsSquare.com\n";
    poscar += "1.0\n";
    poscar += Number(la[0]).toFixed(5) + " " + Number(la[1]).toFixed(5) + " " + Number(la[2]).toFixed(5) + "\n";
    poscar += Number(lb[0]).toFixed(5) + " " + Number(lb[1]).toFixed(5) + " " + Number(lb[2]).toFixed(5) + "\n";
    poscar += Number(lc[0]).toFixed(5) + " " + Number(lc[1]).toFixed(5) + " " + Number(lc[2]).toFixed(5) + "\n";
    var elarr = VLatoms.Utils.Structure.getElArr(structure);
    var catoms = structure.atoms;

    for (var element in elarr) {
      poscar += element + " ";
    }

    poscar += "\n";

    for (var element in elarr) {
      poscar += elarr[element] + " ";
    }

    poscar += "\n";
    poscar += "Direct\n";
    var latMatInv = VLatoms.Math.inv3([la, lb, lc]);

    for (var element in elarr) {
      var atoms_thisElement = catoms.filter(function (d) {
        return d.element == element;
      });

      for (var i = 0; i < atoms_thisElement.length; i++) {
        var ca = atoms_thisElement[i];
        var cp = [ca.x, ca.y, ca.z];
        var cp_frac = VLatoms.Math.vecdotmat(cp, latMatInv);
        poscar += Number(cp_frac[0]).toFixed(5) + " " + Number(cp_frac[1]).toFixed(5) + " " + Number(cp_frac[2]).toFixed(5) + " \n";
      }
    }

    return poscar;
  },
  everyThingsToVLatoms: function everyThingsToVLatoms(structure, type) {
    alert();
  },
  lammpstrjToVLatoms: function lammpstrjToVLatoms(structure) {},
  cifToVLatoms: function cifToVLatoms(structure) {
    var v = this.v;
    var ret = post_ajax('/modeling/cifparser', {
      'cifdata': structure
    });
    console.log(ret);

    if (ret["status"] === undefined || ret["status"] === "fail") {
      alert("Creation of the structure failed.");
      return false;
    }

    return this.poscarToVLatoms(ret["message"]);
    /*		var retStructure = {
    			a: Array(0, 0, 0),
    			b: Array(0, 0, 0),
    			c: Array(0, 0, 0),
    			atoms: Array()
    		};
    		var parseRet = loadCIF(structure, 1);
    		var _c = parseRet[Object.keys(parseRet)[0]];
    		console.log(_c);
    		var a, b, c, alpha, beta, gamma;
    		var lv = [];
    		if (_c['cell_length_a']) a = +_c['cell_length_a'];
    		if (_c['cell_length_b']) b = +_c['cell_length_b'];
    		if (_c['cell_length_c']) c = +_c['cell_length_c'];
    		if (_c['cell_angle_alpha']) alpha = +_c['cell_angle_alpha'];
    		if (_c['cell_angle_beta']) beta = +_c['cell_angle_beta'];
    		if (_c['cell_angle_gamma']) gamma = +_c['cell_angle_gamma'];
    		var cellpar = [];
    		cellpar.push(a);
    		cellpar.push(b);
    		cellpar.push(c);
    		cellpar.push(alpha);
    		cellpar.push(beta);
    		cellpar.push(gamma);	
    		var basis = [];
    		var elements = [];
    		var x_,y_,z_,el_;
    		if (_c['atom_site_fract_x']) {
    			for (var i = 0, len=_c['atom_site_fract_x'].length; i < len ; i++) {
    				basis.push([+_c['atom_site_fract_x'][i], +_c['atom_site_fract_y'][i], +_c['atom_site_fract_z'][i]]);
    				var _elem = _c['atom_site_type_symbol'][i].replace(/[^a-zA-Z]/gi,"");
    				elements.push(_elem);
    			}
    		}
    		var curgroup;
    		if(_c["symmetry_Int_Tables_number"] !== undefined){
    			curgroup=_c["symmetry_Int_Tables_number"][0];
    		}else if(_c["space_group_IT_number"] !== undefined){
    			curgroup=_c["space_group_IT_number"][0];
    		}else{
    			return;
    		}
    		var ret = post_ajax('/modeling/crystalbuilder',{'sg':curgroup,'basis':basis,'cellpar':cellpar,'elements':elements});
    		if(!ret){
    			alert("Creation of the structure failed."); 
    			return false; 
    		}
    		var atoms = ret.structure;
    		retStructure.a = ret.lattice[0];
    		retStructure.b = ret.lattice[1];
    		retStructure.c = ret.lattice[2];
    		retStructure.atoms = [];
    		atoms.forEach((atom)=>{
    			retStructure.atoms.push(new VLatoms.Atom(+atom[0], +atom[1], +atom[2], Object.keys(AtomParam)[+atom[3]-1]));
    		})
    */

    return retStructure;
  },
  importVLatoms: function importVLatoms(structure) {},
  xyzToVLatoms: function xyzToVLatoms(structure) {
    var v = this.v; // parse XYZ File to VLAtoms Format
    // Additional vacuum region will be created to each direction

    var _s = structure.split("\n");

    var rmax; // maximum radius among all atoms, this value will be used as the additional vacuum size

    var natoms = _s[0] * 1;
    var xmin, ymin, zmim, xmax, ymax, zmax;

    var _el, _x, _y, _z, _r;

    var retStructure = {
      a: Array(0, 0, 0),
      b: Array(0, 0, 0),
      c: Array(0, 0, 0),
      atoms: Array()
    };

    for (var i = 0; i < natoms; i++) {
      var idx = 2 + i;

      var l = _s[idx].removeSpace().split(" ");

      _el = l[0];
      _x = l[1] * 1;
      _y = l[2] * 1;
      _z = l[3] * 1;
      _r = AtomParam[_el].radius;

      if (i == 0) {
        xmax = xmin = _x;
        ymax = ymin = _y;
        zmax = zmin = _z;
        rmax = _r;
      }

      if (_r > rmax) rmax = _r;
      if (_x > xmax) xmax = _x;
      if (_y > ymax) ymax = _y;
      if (_z > zmax) zmax = _z;
      if (_x < xmin) xmin = _x;
      if (_y < ymin) ymin = _y;
      if (_z < zmin) zmin = _z;
      retStructure.atoms.push(new VLatoms.Atom(_x, _y, _z, _el));
    }

    for (var i = 0; i < natoms; i++) {
      var ca = retStructure.atoms[i];
      ca.x -= xmin;
      ca.y -= ymin;
      ca.z -= zmin;
    }

    var xrange = xmax - xmin;
    var yrange = ymax - ymin;
    var zrange = zmax - zmin;
    if (xrange == 0) xrange = 1;
    if (yrange == 0) yrange = 1;
    if (zrange == 0) zrange = 1;
    retStructure.a[0] = xrange;
    retStructure.b[1] = yrange;
    retStructure.c[2] = zrange;
    return retStructure;
  },
  poscarToVLatoms: function poscarToVLatoms(structure) {
    var retStructure = {
      a: Array(3),
      b: Array(3),
      c: Array(3),
      atoms: Array()
    };

    var _s = structure.split("\n");

    var _ratio = _s[1] * 1;

    var _a = _s[2].removeSpace().split(" ");

    var _b = _s[3].removeSpace().split(" ");

    var _c = _s[4].removeSpace().split(" ");

    var elements = _s[5].removeSpace().split(" ");

    var nelements = _s[6].removeSpace().split(" ");

    var nskip = 8;
    var iscartesian = false;

    if (_s[7][0] == "s" || _s[7][0] == "S") {
      // Selective Dynamics tag
      nskip = 9;
    }

    if (_s[nskip - 1][0] == "c" || _s[nskip - 1][0] == "C") {
      iscartesian = true;
    }

    var natoms = 0;

    for (var i = 0; i < 3; i++) {
      retStructure.a[i] = _a[i] * _ratio;
      retStructure.b[i] = _b[i] * _ratio;
      retStructure.c[i] = _c[i] * _ratio;
    }

    var latMat = [retStructure.a, retStructure.b, retStructure.c];
    var elementTable = [];

    for (var i = 0; i < nelements.length; i++) {
      natoms += nelements[i] * 1;

      for (var j = 0; j < nelements[i] * 1; j++) {
        elementTable.push(elements[i]);
      }
    }

    var atomPos;

    for (var i = 0; i < natoms; i++) {
      var _l = _s[nskip + i].removeSpace().split(" ");

      var _atomPos = [_l[0] * 1, _l[1] * 1, _l[2] * 1];

      if (!iscartesian) {
        for (var j = 0; j < 3; j++) {
          _l[j] *= 1;
          if (_l[j] < 0) _l[j] = 1 + _l[j];
          if (_l[j] > 1) _l[j] = _l[j] - 1;
        }

        _atomPos = [_l[0], _l[1], _l[2]];
        atomPos = VLatoms.Math.vecdotmat(_atomPos, latMat); //atomPos = VLatoms.Math.matdotvec(  latMat, _atomPos );
      } else {
        atomPos = _atomPos;
      }

      retStructure.atoms.push(new VLatoms.Atom(atomPos[0], atomPos[1], atomPos[2], elementTable[i]));
    }

    return retStructure;
  },
  compare: function compare(str1, str2) {
    for (var i = 0; i < 3; i++) {
      //compare cell
      console.log(str1.a[i], str2.a[i], i);
      if (str1.a[i] != str2.a[i]) return false;
      if (str1.b[i] != str2.b[i]) return false;
      if (str1.c[i] != str2.c[i]) return false;
    }

    if (str1.atoms.length + str2.atoms.length === 0) return true;
    if (str1.atoms.length !== str2.atoms.length) return false;

    for (var i = 0; i < str1.atoms.length; i++) {
      //compare atoms
      if (str1.atoms[i].x !== str2.atoms[i].x) return false;
      if (str1.atoms[i].y !== str2.atoms[i].y) return false;
      if (str1.atoms[i].z !== str2.atoms[i].z) return false;
      if (str1.atoms[i].element !== str2.atoms[i].element) return false;
    }

    return true;
  }
};

/***/ }),

/***/ "./resources/js/vlatoms/Utils/Utils.js":
/*!*********************************************!*\
  !*** ./resources/js/vlatoms/Utils/Utils.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  pointInPolygon: function pointInPolygon(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    var x = point[0],
        y = point[1];
    var inside = false;

    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0],
          yi = vs[i][1];
      var xj = vs[j][0],
          yj = vs[j][1];
      var intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  },
  minimizeStructure: function minimizeStructure(_s) {
    //for saving or transmitting
    var v = this.v;
    var s = {};
    s.a = [+_s.a[0], +_s.a[1], +_s.a[2]];
    s.b = [+_s.b[0], +_s.b[1], +_s.b[2]];
    s.c = [+_s.c[0], +_s.c[1], +_s.c[2]];
    s.atoms = [];

    if (_s.atoms !== undefined) {
      for (var i = 0; i < _s.atoms.length; i++) {
        s.atoms.push({
          "x": +_s.atoms[i].x,
          "y": +_s.atoms[i].y,
          "z": +_s.atoms[i].z,
          "element": _s.atoms[i].element
        });
      }
    }

    return s;
  },
  redefineStructure: function redefineStructure(_s) {
    var _v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (_v.option === undefined) {
      _v.option = {};
    }

    if (_v.option.shift === undefined) {
      _v.option.shift = false;
      _v.option.shift_val = [0, 0, 0];
    }

    var s = {};
    s.a = [+_s.a[0], +_s.a[1], +_s.a[2]];
    s.b = [+_s.b[0], +_s.b[1], +_s.b[2]];
    s.c = [+_s.c[0], +_s.c[1], +_s.c[2]];
    var natoms = -1;

    for (i in _s.atoms) {
      var n = +i;
      if (n > natoms) natoms = n; // ????
    }

    natoms++;
    s.atoms = [];

    for (var i = 0; i < natoms; i++) {
      var ca = _s.atoms[i];

      if (_v.option.shift) {
        var _x = +ca.x - _v.option.shift_val[0];

        var _y = +ca.y - _v.option.shift_val[1];

        var _z = +ca.z - _v.option.shift_val[2];
      } else {
        var _x = +ca.x;

        var _y = +ca.y;

        var _z = +ca.z;
      }

      var _el = ca.element.replace(/[^a-zA-Z]/g, ""); //temp


      s.atoms.push(new VLatoms.Atom(_x, _y, _z, _el));
    }

    return s;
  },
  xyzToArr: function xyzToArr(obj) {
    var v = this.v;
    return [obj.x, obj.y, obj.z];
  },
  download: function download(filename, contents) {
    var v = this.v;
    var tmphtml = "<form class=downloader target=_blank method=post action=/utils/txtDownloader>";
    tmphtml += "<input type=hidden name=_token value=" + $('meta[name="csrf-token"]').attr('content') + ">";
    tmphtml += "<input type=hidden name=filename class=downloader_filename>";
    tmphtml += "<input type=hidden name=content class=downloader_content>";
    tmphtml += "</form>";
    var tmphtml_ = $(document.body).append(tmphtml);
    $('.downloader_filename').val(filename);
    $('.downloader_content').val(contents);
    $('.downloader').submit();
    $('.downloader').remove();
  },
  getRandomPosition: function getRandomPosition(structure) {
    var v = this.v;
    var latvec = []; // lattice vector

    latvec.push(structure.a);
    latvec.push(structure.b);
    latvec.push(structure.c);
    return VLatoms.Math.matdotvec(latvec, VLatoms.Math.random3());
  },
  findElementInArray: function findElementInArray(element, arr) {
    var v = this.v;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == element) return true;
    }

    return false;
  },
  getVolume: function getVolume(structure) {
    var v = this.v;
    var _a = structure.a;
    var _b = structure.b;
    var _c = structure.c;
    return Math.abs(VLatoms.Math.dot(_a, VLatoms.Math.cross(_b, _c)));
  },
  gram_schmidt_orthonormalization_3d: function gram_schmidt_orthonormalization_3d(matrix) {
    var v = this.v;

    function proj(a, b) {
      //a에 b를 프로젝션
      var ua = math.multiply(a, 1 / math.norm(a));
      var size = math.dot(ua, b);
      return math.multiply(ua, size);
    }

    var temp = [];
    temp[0] = matrix[0];
    temp[1] = math.subtract(matrix[1], proj(matrix[0], matrix[1]));
    var ua = proj(temp[0], matrix[2]);
    var ub = proj(temp[1], matrix[2]);
    temp[2] = math.subtract(matrix[2], math.add(ua, ub)); //normalization

    function normalize_vector_3d(vector) {
      return math.divide(vector, math.norm(vector));
    }

    return [normalize_vector_3d(temp[0]), normalize_vector_3d(temp[1]), normalize_vector_3d(temp[2])];
  },
  set_to_x_y_plane: function set_to_x_y_plane(orgStr) {
    var v = this.v; //이 함수는 orgStr(vlv.structure 형식)의 a-b평면을 절대좌표계을 x-y평면과 일치시킨다. a와 x가 평행이 된다.

    var orgCell = [orgStr.a, orgStr.b, orgStr.c];
    var unit_space = VLatoms.Utils.gram_schmidt_orthonormalization_3d(orgCell); //where cell matrix, AU^-1 = lower triangular matrix 

    var retStr = JSON.parse(JSON.stringify(orgStr));
    retStr.a = math.divide(orgStr.a, unit_space);
    retStr.b = math.divide(orgStr.b, unit_space);
    retStr.c = math.divide(orgStr.c, unit_space);

    for (var i = 0; i < orgStr.atoms.length; i++) {
      var tempPosition = [orgStr.atoms[i].x, orgStr.atoms[i].y, orgStr.atoms[i].z];
      var retPosition = math.divide(tempPosition, unit_space);
      retStr.atoms[i].x = retPosition[0];
      retStr.atoms[i].y = retPosition[1];
      retStr.atoms[i].z = retPosition[2];
    }

    return retStr;
  },
  isNumbers: function isNumbers(numbers) {
    for (var i in numbers) {
      if (Number.isNaN(+i)) {
        return false;
      }
    }

    return true;
  },
  Structure: __webpack_require__(/*! ./Structure/Structure.js */ "./resources/js/vlatoms/Utils/Structure/Structure.js")
};

/***/ }),

/***/ "./resources/js/vlatoms/animateControl/animateControl.js":
/*!***************************************************************!*\
  !*** ./resources/js/vlatoms/animateControl/animateControl.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    playStack: [],

    /*
     * once는 start 상태에서는 안먹힘(이미 그려지고 있는 상황이므로) -> 중복실행돌 방지
     * start 되어있는 상태에서 또 start 안됨-> 중복실행 방지
     * start를 유지해야 하면 playStack에 추가 
     * 
     */
    once: function once() {
      if (!v.onAnimate) {
        v.animateId = requestAnimationFrame(v.animate.bind(v));
      }
    },
    start: function start(addStack) {
      if (addStack != undefined) {
        v.animateControl.playStack.push(addStack);
      }

      if (!v.onAnimate) {
        v.onAnimate = true;
        v.animateId = requestAnimationFrame(v.animate.bind(v));
      }
    },
    stop: function stop(removeStack) {
      if (removeStack != undefined) {
        var removeIdx = v.animateControl.playStack.indexOf(removeStack);

        if (~removeIdx) {
          v.animateControl.playStack.splice(removeIdx, 1);
        }
      }

      if (v.animateControl.playStack.length < 1) {
        v.onAnimate = false;
      }
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/clear/clear.js":
/*!*********************************************!*\
  !*** ./resources/js/vlatoms/clear/clear.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    customMeshes: function customMeshes() {
      for (var i = v.customMeshes.length - 1; i >= 0; i--) {
        var obj = v.customMeshes[i];

        if (obj instanceof THREE.Mesh) {
          v.scene.remove(obj);
          /* TODO
          if (obj.geometry !== undefined) obj.geometry.dispose();
          if (obj.material !== undefined) obj.material.dispose();
          */
        }

        v.customMeshes.splice(i, 1);
      }
    },
    atomsInStructure: function atomsInStructure() {
      v.Structure.atoms = [];
      v.Structure.ghosts = [];
      v.clear.atomsInScene();
      v.clear.bondsInScene();
    },
    bondsInScene: function bondsInScene() {
      var obj;

      for (var i = v.bondMeshes.length - 1; i >= 0; i--) {
        obj = v.bondMeshes[i];

        if (obj instanceof THREE.Mesh) {
          v.scene.remove(obj);
          if (obj.geometry !== undefined) obj.geometry.dispose();
          if (obj.material !== undefined) obj.material.dispose();
        }

        v.bondMeshes.splice(i, 1);
      }
    },
    atomsInScene: function atomsInScene() {
      var obj;

      for (var i = v.atomMeshes.length - 1; i >= 0; i--) {
        obj = v.atomMeshes[i];

        if (obj instanceof THREE.Mesh) {
          v.scene.remove(obj);
          if (obj.geometry !== undefined) obj.geometry.dispose();
          if (obj.material !== undefined) obj.material.dispose();
        }

        v.atomMeshes.splice(i, 1);
      }

      for (var i = v.ghostMeshes.length - 1; i >= 0; i--) {
        obj = v.ghostMeshes[i];

        if (obj instanceof THREE.Mesh) {
          v.scene.remove(obj);
          if (obj.geometry !== undefined) obj.geometry.dispose();
          if (obj.material !== undefined) obj.material.dispose();
        }

        v.ghostMeshes.splice(i, 1);
      }
    },
    atoms: function atoms() {
      v.clear.atomsInScene();
      v.clear.bondsInScene();
      v.clear.atomsInStructure();
      v.IO.selectedAtoms = [];
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/draw/draw.js":
/*!*******************************************!*\
  !*** ./resources/js/vlatoms/draw/draw.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    Cell: function Cell() {
      if (v.cellline !== undefined) v.scene.remove(v.cellline);
      if (!v.option.cell) return;
      var la = v.Structure.a; //.split(" ");

      var lb = v.Structure.b; //.split(" ");

      var lc = v.Structure.c; //.split(" ");

      var latMat = [la, lb, lc];

      for (var i in latMat) {
        for (var j in latMat[i]) {
          latMat[i][j] *= 1;
        }
      }

      var pts = [];

      var _ax = la[0] * 1;

      var _ay = la[1] * 1;

      var _az = la[2] * 1;

      var _bx = lb[0] * 1;

      var _by = lb[1] * 1;

      var _bz = lb[2] * 1;

      var _cx = lc[0] * 1;

      var _cy = lc[1] * 1;

      var _cz = lc[2] * 1;

      var cellgeom = new THREE.Geometry();
      cellgeom.vertices.push(new THREE.Vector3(0, 0, 0));
      cellgeom.vertices.push(new THREE.Vector3(_ax, _ay, _az));
      cellgeom.vertices.push(new THREE.Vector3(_ax + _bx, _ay + _by, _az + _bz));
      cellgeom.vertices.push(new THREE.Vector3(_bx, _by, _bz));
      cellgeom.vertices.push(new THREE.Vector3(0, 0, 0));
      cellgeom.vertices.push(new THREE.Vector3(_cx, _cy, _cz));
      cellgeom.vertices.push(new THREE.Vector3(_cx + _ax, _cy + _ay, _cz + _az));
      cellgeom.vertices.push(new THREE.Vector3(_cx + _ax + _bx, _cy + _ay + _by, _cz + _az + _bz));
      cellgeom.vertices.push(new THREE.Vector3(_cx + _bx, _cy + _by, _cz + _bz));
      cellgeom.vertices.push(new THREE.Vector3(_cx, _cy, _cz));
      cellgeom.vertices.push(new THREE.Vector3(_cx + _bx, _cy + _by, _cz + _bz));
      cellgeom.vertices.push(new THREE.Vector3(_bx, _by, _bz));
      cellgeom.vertices.push(new THREE.Vector3(_ax + _bx, _ay + _by, _az + _bz));
      cellgeom.vertices.push(new THREE.Vector3(_cx + _ax + _bx, _cy + _ay + _by, _cz + _az + _bz));
      cellgeom.vertices.push(new THREE.Vector3(_cx + _ax, _cy + _ay, _cz + _az));
      cellgeom.vertices.push(new THREE.Vector3(_ax, _ay, _az));
      var cellmaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        opacity: 1,
        linewidth: 5
        /*, vertexColors: THREE.VertexColors*/

      });
      v.cellline = new THREE.Line(cellgeom, cellmaterial);
      v.set.toSceneCenter(v.cellline);
      v.scene.add(v.cellline);
    },
    Axis: function Axis() {
      if (v.Axis.length > 0) {
        v.camera.children = [];

        for (var i = v.Axis.length - 1; i >= 0; i--) {
          v.scene.remove(v.Axis[i]);
        }
      }

      v.Axis = [];
      if (!v.option.axis) return;
      var latvec = []; // lattice vector

      latvec.push(v.Structure.a);
      latvec.push(v.Structure.b);
      latvec.push(v.Structure.c);
      var a0 = VLatoms.Math.vecdotmat([1, 0, 0], latvec);
      var b0 = VLatoms.Math.vecdotmat([0, 1, 0], latvec);
      var c0 = VLatoms.Math.vecdotmat([0, 0, 1], latvec);
      var alen = Math.sqrt(a0[0] * a0[0] + a0[1] * a0[1] + a0[2] * a0[2]);
      var blen = Math.sqrt(b0[0] * b0[0] + b0[1] * b0[1] + b0[2] * b0[2]);
      var clen = Math.sqrt(c0[0] * c0[0] + c0[1] * c0[1] + c0[2] * c0[2]);

      if (alen * blen * clen == 0 || isNaN(alen * blen * clen)) {
        return;
      }

      for (var i = 0; i < 3; i++) {
        a0[i] /= alen;
        b0[i] /= blen;
        c0[i] /= clen;
      }

      var a0_cyl = v.draw.Cylinder({
        x: 0,
        y: 0,
        z: 0
      }, {
        x: a0[0],
        y: a0[1],
        z: a0[2]
      }, 0.15);
      var b0_cyl = v.draw.Cylinder({
        x: 0,
        y: 0,
        z: 0
      }, {
        x: b0[0],
        y: b0[1],
        z: b0[2]
      }, 0.15);
      var c0_cyl = v.draw.Cylinder({
        x: 0,
        y: 0,
        z: 0
      }, {
        x: c0[0],
        y: c0[1],
        z: c0[2]
      }, 0.15);
      var a0_cone = v.draw.Cylinder({
        x: a0[0],
        y: a0[1],
        z: a0[2]
      }, {
        x: a0[0] * 1.6,
        y: a0[1] * 1.6,
        z: a0[2] * 1.6
      }, 0.3, v.Cone);
      var b0_cone = v.draw.Cylinder({
        x: b0[0],
        y: b0[1],
        z: b0[2]
      }, {
        x: b0[0] * 1.6,
        y: b0[1] * 1.6,
        z: b0[2] * 1.6
      }, 0.3, v.Cone);
      var c0_cone = v.draw.Cylinder({
        x: c0[0],
        y: c0[1],
        z: c0[2]
      }, {
        x: c0[0] * 1.6,
        y: c0[1] * 1.6,
        z: c0[2] * 1.6
      }, 0.3, v.Cone);
      a0_cyl.material.color.setHex(0xff0000);
      a0_cone.material.color.setHex(0xff0000);
      b0_cyl.material.color.setHex(0x00ff00);
      b0_cone.material.color.setHex(0x00ff00);
      c0_cyl.material.color.setHex(0x0000ff);
      c0_cone.material.color.setHex(0x0000ff);
      v.Axis.push(a0_cyl);
      v.Axis.push(b0_cyl);
      v.Axis.push(c0_cyl);
      v.Axis.push(a0_cone);
      v.Axis.push(b0_cone);
      v.Axis.push(c0_cone);

      if (v.camera.type === "OrthographicCamera") {
        for (var _i = 0; _i < v.Axis.length; _i++) {
          v.scene.add(v.Axis[_i]);
          v.set.toSceneCenter(v.Axis[_i]);
        }
      } else {
        var vls_ratio = v.wrapper.offsetHeight / 600;

        var __pos_x = (v.wrapper.offsetWidth - 120 * vls_ratio) / v.wrapper.offsetWidth;

        var __pos_y = (v.wrapper.offsetHeight - 120 * vls_ratio) / v.wrapper.offsetHeight;

        var vector = new THREE.Vector3(-1 * __pos_x, -1 * __pos_y, 0.5); //왼쪽하단offset을 vector화

        v.camera.updateMatrixWorld(true);
        vector.unproject(v.camera);
        var raycaster = new THREE.Raycaster(v.camera.position, vector.sub(v.camera.position).normalize());
        var z_shift = -1000 / v.camera.fov;
        var target_pos = new THREE.Vector3(raycaster.ray.origin.x - raycaster.ray.direction.x * z_shift, raycaster.ray.origin.y - raycaster.ray.direction.y * z_shift, raycaster.ray.origin.z - raycaster.ray.direction.z * z_shift); //camera위치에서 목표지점으로 z_shift만큼 이동

        var _shift_value = target_pos.applyMatrix4(v.camera.matrixWorldInverse);

        var x_shift = _shift_value.x;
        var y_shift = _shift_value.y;
        v.Axis.Box = new THREE.Object3D();
        v.Axis.Box.position.x = x_shift;
        v.Axis.Box.position.y = y_shift;
        v.Axis.Box.position.z = z_shift;

        for (var _i2 = 0; _i2 < v.Axis.length; _i2++) {
          v.Axis.Box.add(v.Axis[_i2]);
        }

        var geometry = new THREE.SphereGeometry(0.25, 16, 16);
        var material = new THREE.MeshPhongMaterial({
          reflectivity: 1.00,
          specular: 0x666666,
          shininess: 100,
          color: 0xdedede
        });
        var sphere = new THREE.Mesh(geometry, material);
        v.Axis.Box.add(sphere);
        v.Axis.Box.rotateZ(-1 * v.camera.rotation._z);
        v.Axis.Box.rotateY(-1 * v.camera.rotation._y);
        v.Axis.Box.rotateX(-1 * v.camera.rotation._x);
        v.camera.add(v.Axis.Box);
      } //		return VLatoms.Math.vecdotmat( latvec, VLatoms.Math.random3() );

    },
    Cylinder: function Cylinder(pos1, pos2, r0, Geom) {
      if (Geom === undefined) Geom = v.Cylinder;
      var Cylinder = new THREE.Mesh(Geom, new THREE.MeshLambertMaterial({
        color: 0xbbbbbb
      }));
      var vec = new THREE.Vector3(pos1.x - pos2.x, pos1.y - pos2.y, pos1.z - pos2.z);
      var len = vec.length();
      Cylinder.scale.set(r0, len, r0);
      Cylinder.overdraw = true;

      if (len > 0.001) {
        Cylinder.rotation.z = Math.acos(vec.y / len);
        Cylinder.rotation.y = 0.5 * Math.PI + Math.atan2(vec.x, vec.z);
        Cylinder.eularOrder = 'YZX';
      }

      Cylinder.position.x = (pos1.x + pos2.x) / 2;
      Cylinder.position.y = (pos1.y + pos2.y) / 2;
      Cylinder.position.z = (pos1.z + pos2.z) / 2;
      return Cylinder;
    },
    SubAxis: function SubAxis() {
      var draw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var vecval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [1, 1, 1];

      if (draw) {
        var cen = [(v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2, (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2, (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2];
        var latvec;
        var uparr = [v.camera.up.x, v.camera.up.y, v.camera.up.z];
        uparr = VLatoms.Math.norm(uparr);
        var carr = [v.camera.position.x, v.camera.position.y, v.camera.position.z];
        carr = VLatoms.Math.norm(carr);
        var rightarr = VLatoms.Math.cross(uparr, carr);
        rightarr = VLatoms.Math.norm(rightarr);

        switch (direction) {
          case "cart":
            latvec = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
            break;

          case "view":
            latvec = [rightarr, uparr, carr];
            break;

          case "frac":
            latvec = [VLatoms.Math.norm(v.Structure.a), VLatoms.Math.norm(v.Structure.b), VLatoms.Math.norm(v.Structure.c)];
            break;
        }

        var v0 = VLatoms.Math.vecdotmat(VLatoms.Math.norm(vecval), latvec);
        /*	/*			var a0 = VLatoms.Math.vecdotmat([1,0,0],latvec);
        				var b0 = VLatoms.Math.vecdotmat([0,1,0],latvec);
        				var c0 = VLatoms.Math.vecdotmat([0,0,1],latvec);
        				*/

        v.SubAxis = [];

        switch (mode) {
          case "rotate":
            break;

          case "move":
            for (var i = 0; i < v.IO.selectedAtoms.length; i++) {
              var __tatom = v.Structure.atoms[v.IO.selectedAtoms[i]];
              var __x = __tatom.x;
              var __y = __tatom.y;
              var __z = __tatom.z;
              var initpos = {
                x: __x - cen[0],
                y: __y - cen[1],
                z: __z - cen[2]
              };
              var v0_cyl = v.draw.Cylinder({
                x: 0,
                y: 0,
                z: 0
              }, {
                x: v0[0],
                y: v0[1],
                z: v0[2]
              }, 0.15);
              var v0_cone = v.draw.Cylinder({
                x: v0[0],
                y: v0[1],
                z: v0[2]
              }, {
                x: v0[0] * 1.6,
                y: v0[1] * 1.6,
                z: v0[2] * 1.6
              }, 0.3, v.Cone);
              /*	/*						var a0_cyl = v.draw.Cylinder({x:0,y:0,z:0},{x:a0[0],y:a0[1],z:a0[2]},0.15);
              							var b0_cyl = v.draw.Cylinder({x:0,y:0,z:0},{x:b0[0],y:b0[1],z:b0[2]},0.15);
              							var c0_cyl = v.draw.Cylinder({x:0,y:0,z:0},{x:c0[0],y:c0[1],z:c0[2]},0.15);
                      
              							var a0_cone = v.draw.Cylinder({x:a0[0],y:a0[1],z:a0[2]},{x:a0[0]*1.6,y:a0[1]*1.6,z:a0[2]*1.6},0.3,v.Cone);
              							var b0_cone = v.draw.Cylinder({x:b0[0],y:b0[1],z:b0[2]},{x:b0[0]*1.6,y:b0[1]*1.6,z:b0[2]*1.6},0.3,v.Cone);
              							var c0_cone = v.draw.Cylinder({x:c0[0],y:c0[1],z:c0[2]},{x:c0[0]*1.6,y:c0[1]*1.6,z:c0[2]*1.6},0.3,v.Cone);
              							a0_cyl.material.color.setHex(0xff0000);
              							a0_cone.material.color.setHex(0xff0000);
              							b0_cyl.material.color.setHex(0x00ff00);
              							b0_cone.material.color.setHex(0x00ff00);
              							c0_cyl.material.color.setHex(0x0000ff);
              							c0_cone.material.color.setHex(0x0000ff);
              */

              var SubBox = new THREE.Object3D();
              SubBox.position.x = initpos.x;
              SubBox.position.y = initpos.y;
              SubBox.position.z = initpos.z;
              SubBox.add(v0_cyl);
              SubBox.add(v0_cone);
              /*							SubBox.add(a0_cyl);
              							SubBox.add(b0_cyl);
              							SubBox.add(c0_cyl);
              							SubBox.add(a0_cone);
              							SubBox.add(b0_cone);
              							SubBox.add(c0_cone);
              */

              SubBox.name = "SubAxis";
              v.scene.add(SubBox);
            }

            break;
        }
      } else {
        for (var i = v.scene.children.length - 1; i >= 0; i--) {
          if (v.scene.children[i].name === "SubAxis") {
            v.scene.remove(v.scene.children[i]);
          }
        }
      }
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/get/get.js":
/*!*****************************************!*\
  !*** ./resources/js/vlatoms/get/get.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    NeighsChildren: function NeighsChildren(binarr) {
      var cutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      // return neighboring bin's children atoms
      var pj = v.Structure;
      var nbin_x = pj.bindim[0];
      var nbin_y = pj.bindim[1];
      var nbin_z = pj.bindim[2];
      var xlist, ylist, zlist;
      xlist = [];
      ylist = [];
      zlist = [];
      xlist.push(binarr[0]);
      ylist.push(binarr[1]);
      zlist.push(binarr[2]);

      if (binarr[0] - 1 >= 0) {
        xlist.push(binarr[0] - 1);
      } else {
        xlist.push(pj.bindim[0] - 1);
      }

      if (binarr[1] - 1 >= 0) {
        ylist.push(binarr[1] - 1);
      } else {
        ylist.push(pj.bindim[1] - 1);
      }

      if (binarr[2] - 1 >= 0) {
        zlist.push(binarr[2] - 1);
      } else {
        zlist.push(pj.bindim[2] - 1);
      }

      if (binarr[0] + 1 < nbin_x) {
        xlist.push(binarr[0] + 1);
      } else {
        xlist.push(0);
      }

      if (binarr[1] + 1 < nbin_y) {
        ylist.push(binarr[1] + 1);
      } else {
        ylist.push(0);
      }

      if (binarr[2] + 1 < nbin_z) {
        zlist.push(binarr[2] + 1);
      } else {
        zlist.push(0);
      }

      var retarr = [];
      var i, j, k, binidx;

      for (var ii = 0; ii < xlist.length; ii++) {
        for (var jj = 0; jj < ylist.length; jj++) {
          for (var kk = 0; kk < zlist.length; kk++) {
            i = xlist[ii];
            j = ylist[jj];
            k = zlist[kk];
            binidx = i * nbin_y * nbin_z + j * nbin_z + k;
            retarr = retarr.concat(v.Structure.bin[binidx]);
          }
        }
      }

      return retarr;
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/img/check.png":
/*!********************************************!*\
  !*** ./resources/js/vlatoms/img/check.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/check.png?47ba4ee3b865eedfc5e6a316c003924b";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_atom.png":
/*!*************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_atom.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_atom.png?47a8be70a4f5a510efdcbddefaf2a641";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_circ.png":
/*!*************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_circ.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_circ.png?fe934193549c52b206900b3153fc9b96";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_element.png":
/*!****************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_element.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_element.png?19ad8dbc8599715483965713a3de012f";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_hex.png":
/*!************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_hex.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_hex.png?f40bfebb1032f7bb9b074194e087c5c4";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_lasso.png":
/*!**************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_lasso.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_lasso.png?7655bfcf6fd38bca30aafa1031d52188";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_rect.png":
/*!*************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_rect.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_rect.png?3961c9f73fc40f3ed334a11d0cf3db37";

/***/ }),

/***/ "./resources/js/vlatoms/img/manipulate_select_sphere.png":
/*!***************************************************************!*\
  !*** ./resources/js/vlatoms/img/manipulate_select_sphere.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/manipulate_select_sphere.png?31c1a8c3a8273295cf5c2d3333383def";

/***/ }),

/***/ "./resources/js/vlatoms/img/mode_select_del.png":
/*!******************************************************!*\
  !*** ./resources/js/vlatoms/img/mode_select_del.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mode_select_del.png?85ee75ec8a90f3448ee06973a66f0c27";

/***/ }),

/***/ "./resources/js/vlatoms/img/mode_select_merge.png":
/*!********************************************************!*\
  !*** ./resources/js/vlatoms/img/mode_select_merge.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mode_select_merge.png?8fd3c845dc84c416f0e49292c6e07f24";

/***/ }),

/***/ "./resources/js/vlatoms/img/mode_select_normal.png":
/*!*********************************************************!*\
  !*** ./resources/js/vlatoms/img/mode_select_normal.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mode_select_normal.png?47cf156b62c3e2a82a20797cd762c482";

/***/ }),

/***/ "./resources/js/vlatoms/img/mode_select_notoverlap.png":
/*!*************************************************************!*\
  !*** ./resources/js/vlatoms/img/mode_select_notoverlap.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mode_select_notoverlap.png?ead4db3acdc7f7784e2153cba327d70d";

/***/ }),

/***/ "./resources/js/vlatoms/img/mode_select_overlap.png":
/*!**********************************************************!*\
  !*** ./resources/js/vlatoms/img/mode_select_overlap.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mode_select_overlap.png?6b9e8f489e574e00bf00d6ef7d773fa8";

/***/ }),

/***/ "./resources/js/vlatoms/img/mode_select_reverse.png":
/*!**********************************************************!*\
  !*** ./resources/js/vlatoms/img/mode_select_reverse.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mode_select_reverse.png?13455cc791192a116f38b6af2bfa3615";

/***/ }),

/***/ "./resources/js/vlatoms/manipulateAtom/manipulateAtom.js":
/*!***************************************************************!*\
  !*** ./resources/js/vlatoms/manipulateAtom/manipulateAtom.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    checkAtomPositionAfterManipulate: function checkAtomPositionAfterManipulate(ca, idx, expand) {
      if (expand === undefined) expand = false;
      var lat = [v.Structure.a, v.Structure.b, v.Structure.c];
      var posFract = VLatoms.Utils.Structure.cartToFract([ca.x, ca.y, ca.z], lat);
      var posCart;
      var nx, ny, nz, px, py, pz;
      var lena, lenb, lenc;
      lena = VLatoms.Math.len(v.Structure.a);
      lenb = VLatoms.Math.len(v.Structure.b);
      lenc = VLatoms.Math.len(v.Structure.c);
      nx = ny = nz = px = py = pz = 0;

      if (posFract[0] < 0) {
        nx = -posFract[0] * lena;
      }

      if (posFract[0] > 1) {
        px = (posFract[0] - 1) * lena;
      }

      if (posFract[1] < 0) {
        ny = -posFract[1] * lenb;
      }

      if (posFract[1] > 1) {
        py = (posFract[1] - 1) * lenb;
      }

      if (posFract[2] < 0) {
        nz = -posFract[2] * lenc;
      }

      if (posFract[2] > 1) {
        pz = (posFract[2] - 1) * lenc;
      }

      if (nx > 0 || ny > 0 || nz > 0 || px > 0 || py > 0 || pz > 0) {
        if (expand) {
          v.Manipulate.execute("vacuum", {
            "nx": nx,
            "ny": ny,
            "nz": nz,
            "px": px,
            "py": py,
            "pz": pz
          });
        } else {
          var latMat = [v.Structure.a, v.Structure.b, v.Structure.c];

          for (var i = 0; i < 3; i++) {
            posFract[i] = posFract[i] - Math.floor(posFract[i]);
          }

          posCart = VLatoms.Math.vecdotmat(posFract, latMat);
          ca.x = posCart[0];
          ca.y = posCart[1];
          ca.z = posCart[2];
          v.update.atomsChanged = true;
          v.update.bondsChanged = true;
          v.animateControl.once();
        }
      }
    },
    appendStructure: function appendStructure(_structure) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "input";

      if (v.Structure.a[0] === undefined) {
        v.Structure.a = arrClone(_structure.a);
        v.Structure.b = arrClone(_structure.b);
        v.Structure.c = arrClone(_structure.c);
      }

      var sa = _structure.atoms;
      var min = {
        x: 0,
        y: 0,
        z: 0
      };
      var max = {
        x: 0,
        y: 0,
        z: 0
      };

      if (pos !== "input") {
        for (var i = 0; i < sa.length; i++) {
          var _sa = sa[i];

          if (i === 0) {
            min.x = _sa.x;
            min.y = _sa.y;
            min.z = _sa.z;
            max.x = _sa.x;
            max.y = _sa.y;
            max.z = _sa.z;
            continue;
          }

          if (min.x > _sa.x) {
            min.x = _sa.x;
          }

          if (min.y > _sa.y) {
            min.y = _sa.y;
          }

          if (min.z > _sa.z) {
            min.z = _sa.z;
          }

          if (max.x < _sa.x) {
            max.x = _sa.x;
          }

          if (max.y < _sa.y) {
            max.y = _sa.y;
          }

          if (max.z < _sa.z) {
            max.z = _sa.z;
          }
        }
      }

      var cen = {
        x: (v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2,
        y: (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2,
        z: (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2
      };
      var middle = {
        x: (max.x + min.x) / 2,
        y: (max.y + min.y) / 2,
        z: (max.z + min.z) / 2
      };

      switch (pos) {
        case "origin":
          for (var i = 0; i < sa.length; i++) {
            sa[i].x -= middle.x;
            sa[i].y -= middle.y;
            sa[i].z -= middle.z;
          }

          break;

        case "center":
          var shift = {
            x: cen.x - (max.x + min.x) / 2,
            y: cen.y - (max.y + min.y) / 2,
            z: cen.z - (max.z + min.z) / 2
          };

          for (var i = 0; i < sa.length; i++) {
            sa[i].x += shift.x;
            sa[i].y += shift.y;
            sa[i].z += shift.z;
          }

          break;
      }

      var testRet = v.Manipulate.insideTest(sa);

      if (!testRet.inside) {
        if (confirm("The cell should be expanded to add the atom(s).")) {
          for (var i = 0; i < sa.length; i++) {
            v.Structure.atoms.push(new VLatoms.Atom(sa[i].x, sa[i].y, sa[i].z, sa[i].element));
            v.IO.selectedAtoms.push(v.Structure.atoms.length - 1); //추가된 원소 index 저장
          }

          v.Manipulate.vacuum({
            "nx": testRet.delta[0],
            "ny": testRet.delta[1],
            "nz": testRet.delta[2],
            "px": testRet.delta[3],
            "py": testRet.delta[4],
            "pz": testRet.delta[5]
          });
        } else {
          v.IO.selectedAtoms = sa; // 추가를 안할 경우 원래 원소로 복귀

          return false;
        }
      } else {
        for (var i = 0; i < sa.length; i++) {
          v.Structure.atoms.push(new VLatoms.Atom(sa[i].x, sa[i].y, sa[i].z, sa[i].element));
          v.IO.selectedAtoms.push(v.Structure.atoms.length - 1); //추가된 원소 index 저장
        }
      }

      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();
    },
    add: function add(args) {
      //change delta of coordination to cartesian 
      if (args['type'] != undefined) {
        var lattice = [v.Structure.a, v.Structure.b, v.Structure.c];
        var delta = [args['dx'], args['dy'], args['dz']];

        switch (args['type']) {
          case "frac":
            delta = VLatoms.Utils.Structure.fracToCart(delta, lattice);
            break;

          case "axis":
            delta = VLatoms.Utils.Structure.fracToCart(delta, lattice);
            delta[0] /= math.norm(lattice[0]);
            delta[1] /= math.norm(lattice[1]);
            delta[2] /= math.norm(lattice[2]);
            break;

          case "view":
            delta = VLatoms.Utils.Structure.viewToCart(delta, v.camera);
            break;
        }

        args['dx'] = delta[0];
        args['dy'] = delta[1];
        args['dz'] = delta[2];
      }

      var vdw = args['vdw'];
      var mode = args['mode'];

      if (mode === "pre") {
        var structure = args['Structure'];
      }

      if (mode == "cen" && v.IO.selectedAtoms.length < 2) {
        //				alert("Please select more than one atom.");
        return false;
      }

      var dx = +args['dx'];
      var dy = +args['dy'];
      var dz = +args['dz'];
      var element = args['element'];
      var sa = JSON.parse(JSON.stringify(v.IO.selectedAtoms)); // deepcopy로 바꿈

      v.IO.selectedAtoms = []; //selectedAtoms를 sa에 저장했으니 초기화함

      var direction = args.direction; // $('.manipulate_move_direction:checked').val();

      var step = args.step; //$('#manipulate_move_step').val()*1;

      var cm = [0, 0, 0];

      for (var i = 0; i < sa.length; i++) {
        var ca = v.Structure.atoms[sa[i]];
        cm[0] += +ca.x;
        cm[1] += +ca.y;
        cm[2] += +ca.z;
      }

      for (var i = 0; i < 3; i++) {
        cm[i] /= sa.length;
      }

      switch (mode) {
        case "cen":
          if (v.Structure.atoms.length < 2) {
            return false;
          } else {
            v.Structure.atoms.push(new VLatoms.Atom(cm[0], cm[1], cm[2], element));
          }

          break;

        case "rel":
          var targetAtoms = []; //if(v.Structure.atoms.length === 0){

          if (sa.length == 0) {
            try {
              make_matsq_alert("Try again!", "Select one or more atoms.");
            } catch (e) {
              alert("Please select at least one atom.");
            }

            return false;
          }

          if (vdw) {
            var relpos = VLatoms.Math.norm([dx, dy, dz]);
          }

          var teradius = AtomParam[element].radius;
          var dr;

          for (var i = 0; i < sa.length; i++) {
            var _s = v.Structure.atoms[sa[i]];

            if (vdw) {
              dr = VLatoms.Math.cdotvec(teradius + _s.radius, relpos);
            } else {
              dr = [dx, dy, dz];
            }

            console.log(_s.z);
            targetAtoms[i] = {
              x: _s.x + dr[0],
              y: _s.y + dr[1],
              z: _s.z + dr[2],
              element: element
            }; //							v.Structure.atoms.push( new VLatoms.Atom( _s.x + dr[0], _s.y + dr[1], _s.z + dr[2], element));
          } //					v.Structure.atoms.push( new VLatoms.Atom( _s.x + dr[0], _s.y + dr[1], _s.z + dr[2], element));


          var testRet = v.Manipulate.insideTest(targetAtoms);

          if (!testRet.inside) {
            if (confirm("The Cell should be expanded to add the atom(s).")) {
              for (var i = 0; i < sa.length; i++) {
                v.Structure.atoms.push(new VLatoms.Atom(targetAtoms[i].x, targetAtoms[i].y, targetAtoms[i].z, targetAtoms[i].element));
                v.IO.selectedAtoms.push(v.Structure.atoms.length - 1); //추가된 원소 index 저장
              }

              v.Manipulate.vacuum({
                "nx": testRet.delta[0],
                "ny": testRet.delta[1],
                "nz": testRet.delta[2],
                "px": testRet.delta[3],
                "py": testRet.delta[4],
                "pz": testRet.delta[5]
              });
            } else {
              v.IO.selectedAtoms = sa; // 추가를 안할 경우 원래 원소로 복귀

              return false;
            }
          } else {
            for (var i = 0; i < sa.length; i++) {
              v.Structure.atoms.push(new VLatoms.Atom(targetAtoms[i].x, targetAtoms[i].y, targetAtoms[i].z, targetAtoms[i].element));
              v.IO.selectedAtoms.push(v.Structure.atoms.length - 1); //추가된 원소 index 저장
            }
          }

          break;

        case "abs":
          if (v.Structure.atoms.length === 0) {
            var pc = 2; // padding_constant

            var l_x, l_y, l_z;

            if (dx === 0) {
              v.Structure.a = [1, 0, 0];
            } else {
              v.Structure.a = [dx * pc, 0, 0];
            }

            if (dy === 0) {
              v.Structure.b = [0, 1, 0];
            } else {
              v.Structure.b = [0, dy * pc, 0];
            }

            if (dz === 0) {
              v.Structure.c = [0, 0, 1];
            } else {
              v.Structure.c = [0, 0, dz * pc];
            }

            v.Structure.atoms.push(new VLatoms.Atom(dx, dy, dz, element));
          } else {
            var testRet = v.Manipulate.insideTest([{
              x: dx,
              y: dy,
              z: dz
            }]);

            if (!testRet.inside) {
              if (confirm("The Cell should be expanded to add this atom.")) {
                v.Structure.atoms.push(new VLatoms.Atom(dx, dy, dz, element));
                v.IO.selectedAtoms.push(v.Structure.atoms.length - 1); //추가된 원소 index 

                v.Manipulate.vacuum({
                  "nx": testRet.delta[0],
                  "ny": testRet.delta[1],
                  "nz": testRet.delta[2],
                  "px": testRet.delta[3],
                  "py": testRet.delta[4],
                  "pz": testRet.delta[5]
                });
              } else {
                v.IO.selectedAtoms = sa; // 추가를 안할 경우 원래 원소리스트 반환

                return false;
              }
            } else {
              v.Structure.atoms.push(new VLatoms.Atom(dx, dy, dz, element));
              v.IO.selectedAtoms.push(v.Structure.atoms.length - 1); //추가된 원소 index 저장
            }
          }

          break;

        case "pre":
          //					args['v']=vlv;
          var retStr = VLatoms.StructureBuilder(args.structure, {
            "n": args.n,
            "m": args.m,
            "repeat": args.repeat
          }); //2. 최대최소확인 (중심위치확인)

          var _maxx = retStr.atoms[0].x;
          var _maxy = retStr.atoms[0].y;
          var _maxz = retStr.atoms[0].z;
          var _minx = retStr.atoms[0].x;
          var _miny = retStr.atoms[0].y;
          var _minz = retStr.atoms[0].z;

          for (var i = 0; i < retStr.atoms.length; i++) {
            if (_maxx > retStr.atoms[i].x) _maxx = retStr.atoms[i].x;
            if (_maxy > retStr.atoms[i].y) _maxy = retStr.atoms[i].y;
            if (_maxz > retStr.atoms[i].z) _maxz = retStr.atoms[i].z;
            if (_minx < retStr.atoms[i].x) _minx = retStr.atoms[i].x;
            if (_miny < retStr.atoms[i].y) _miny = retStr.atoms[i].y;
            if (_minz < retStr.atoms[i].z) _minz = retStr.atoms[i].z;
          } //					console.log("max and min",_maxx,_maxy,_maxz,_minx,_miny,_minz);


          var cen = [];
          cen[0] = (_maxx + _minx) / 2;
          cen[1] = (_maxy + _miny) / 2;
          cen[2] = (_maxz + _minz) / 2;
          var cenCell = [];
          cenCell[0] = (v.Structure.a[0] + v.Structure.b[0] + v.Structure.c[0]) / 2;
          cenCell[1] = (v.Structure.a[1] + v.Structure.b[1] + v.Structure.c[1]) / 2;
          cenCell[2] = (v.Structure.a[2] + v.Structure.b[2] + v.Structure.c[2]) / 2; //					console.log("cen",cen[0],cen[1],cen[2]);
          //3.보정할 값 찾음

          testAtom = [];

          for (var i = 0; i < retStr.atoms.length; i++) {
            testAtom.push(new VLatoms.Atom(retStr.atoms[i].x + cenCell[0] - cen[0], retStr.atoms[i].y + cenCell[1] - cen[1], retStr.atoms[i].z + cenCell[2] - cen[2], retStr.atoms[i].element));
          }

          var retVec = v.Manipulate.insideTest(testAtom, {
            "findSize": true
          });

          for (var i = 3; i < 6; i++) {
            retVec.delta[i] -= 1;
          }

          var deltaVec = [0, 0, 0];
          deltaVec[0] = (retVec.delta[3] + retVec.delta[0]) / 2;
          deltaVec[1] = (retVec.delta[4] + retVec.delta[1]) / 2;
          deltaVec[2] = (retVec.delta[5] + retVec.delta[2]) / 2; //					console.log("deltaVec",deltaVec);

          var deltaPos = [0, 0, 0];
          deltaPos[0] = deltaVec[0] * v.Structure.a[0] + deltaVec[1] * v.Structure.b[0] + deltaVec[2] * v.Structure.c[0];
          deltaPos[1] = deltaVec[0] * v.Structure.a[1] + deltaVec[1] * v.Structure.b[1] + deltaVec[2] * v.Structure.c[1];
          deltaPos[2] = deltaVec[0] * v.Structure.a[2] + deltaVec[1] * v.Structure.b[2] + deltaVec[2] * v.Structure.c[2]; //					console.log("deltaPos",deltaPos);
          //4.보정된 위치로 원자 추가

          var _newPos = [];
          _newPos[0] = cenCell[0] - cen[0] - deltaPos[0];
          _newPos[1] = cenCell[1] - cen[1] - deltaPos[1];
          _newPos[2] = cenCell[2] - cen[2] - deltaPos[2];
          testAtom = [];

          for (var i = 0; i < retStr.atoms.length; i++) {
            testAtom.push(new VLatoms.Atom(retStr.atoms[i].x + _newPos[0], retStr.atoms[i].y + _newPos[1], retStr.atoms[i].z + _newPos[2], retStr.atoms[i].element));
          } //5.insidetest후 vacuum, selectMode가 꺼져있을 경우를 atom으로 바꿈


          var retInside = v.Manipulate.insideTest(testAtom);

          if (!retInside.inside) {
            if (confirm("The Cell should be expanded to add the atom(s).")) {
              for (var i = 0; i < retStr.atoms.length; i++) {
                v.Structure.atoms.push(new VLatoms.Atom(retStr.atoms[i].x + _newPos[0], retStr.atoms[i].y + _newPos[1], retStr.atoms[i].z + _newPos[2], retStr.atoms[i].element));
                v.IO.selectedAtoms.push(v.Structure.atoms.length - 1);
              }

              v.Manipulate.vacuum({
                "nx": retInside.delta[0],
                "ny": retInside.delta[1],
                "nz": retInside.delta[2],
                "px": retInside.delta[3],
                "py": retInside.delta[4],
                "pz": retInside.delta[5]
              });
            } else {
              return false;
            }
          } else {
            for (var i = 0; i < retStr.atoms.length; i++) {
              v.Structure.atoms.push(new VLatoms.Atom(retStr.atoms[i].x + _newPos[0], retStr.atoms[i].y + _newPos[1], retStr.atoms[i].z + _newPos[2], retStr.atoms[i].element));
              v.IO.selectedAtoms.push(v.Structure.atoms.length - 1);
            }
          }

          break;
        //추가
      }

      if (v.IO.selectMode === "none") v.IO.selectMode = "atom";
      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.setOptimalCamPosition();
      v.animateControl.once();
      v.Manipulate.addHistory({
        mode: "Add Atom(s)",
        args: {
          direction: direction,
          step: step
        },
        Structure: objClone(v.Structure)
      });
    },
    edit: function edit(args) {
      var newAtoms = args['atomArr'];
      var deleteTarget = [];

      for (var idx in newAtoms) {
        if (newAtoms[+idx].del === true) {
          deleteTarget.push(+idx);
        } else {
          var ca = newAtoms[+idx],
              targetElement = ca.element;
          v.Structure.atoms[+idx].element = ca.element;
          v.Structure.atoms[+idx].x = ca.x;
          v.Structure.atoms[+idx].y = ca.y;
          v.Structure.atoms[+idx].z = ca.z;
          v.Structure.atoms[+idx].radius = AtomParam[targetElement].radius;
          v.Structure.atoms[+idx].color = AtomParam[targetElement].color;
          v.Structure.atoms[+idx].mass = AtomParam[targetElement].mass;
        }
      }

      if (deleteTarget.length > 0) {
        v.manipulateAtom.removeAtoms(deleteTarget, "off");
      }

      var testRet = v.Manipulate.insideTest(v.Structure.atoms);

      if (!testRet.inside) {
        if (!confirm("Do you want to keep the cell size?")) {
          v.Manipulate.vacuum({
            "nx": testRet.delta[0],
            "ny": testRet.delta[1],
            "nz": testRet.delta[2],
            "px": testRet.delta[3],
            "py": testRet.delta[4],
            "pz": testRet.delta[5]
          });
        } else {
          v.Manipulate.insideTest(v.Structure.atoms, {
            "onEscape": true
          });
        }
      }

      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();
      v.Manipulate.addHistory({
        mode: "Manual Edit",
        args: {},
        Structure: objClone(v.Structure)
      });
    },
    move: function move(args) {
      var sa = v.IO.selectedAtoms;
      var onEscape = args.onEscape == "expand" ? true : false;
      var posFract;
      var tmpStrain = [];
      var uparr = [v.camera.up.x, v.camera.up.y, v.camera.up.z]; // ^

      uparr = VLatoms.Math.norm(uparr);
      var carr = [v.camera.position.x, v.camera.position.y, v.camera.position.z];
      carr = VLatoms.Math.norm(carr);
      var rightarr = VLatoms.Math.cross(uparr, carr);
      rightarr = VLatoms.Math.norm(rightarr);
      var ref = [0, 0, 0];
      var newpos;

      if (args.coordinateType !== undefined) {
        //apply all three axes
        var _delta = args.delta;
        var delta;
        var coordinateType = args.coordinateType;

        switch (coordinateType) {
          case "cart":
            delta = _delta;
            break;

          case "frac":
            var lattice = [v.Structure.a, v.Structure.b, v.Structure.c];
            delta = VLatoms.Utils.Structure.fracToCart(_delta, lattice);
            break;

          case "view":
            delta = VLatoms.Utils.Structure.viewToCart(_delta, v.camera);
            break;
        }

        for (var _i = 0; _i < sa.length; _i++) {
          var _ca = v.Structure.atoms[sa[_i]];
          newpos = VLatoms.Math.add(delta, [_ca.x, _ca.y, _ca.z]);
          _ca.x = newpos[0];
          _ca.y = newpos[1];
          _ca.z = newpos[2]; // checking if atom is escaped from the cell

          v.manipulateAtom.checkAtomPositionAfterManipulate(_ca, _i, onEscape);
        }

        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
        v.Manipulate.addHistory({
          mode: "Move Atom(s)",
          args: {
            delta: _delta,
            coordinateType: coordinateType
          },
          Structure: objClone(v.Structure)
        });
      } else {
        //apply just one axis
        var direction = args.direction; // $('.manipulate_move_direction:checked').val();

        var step = args.step; //$('#manipulate_move_step').val()*1;

        for (var i = 0; i < sa.length; i++) {
          var ca = v.Structure.atoms[sa[i]];

          switch (direction) {
            case "x":
              //xyz(x) abc(o)
              //						ref = [1,0,0];
              ref = math.multiply(v.Structure.a, 1 / math.norm(v.Structure.a));
              break;

            case "y":
              //						ref = [0,1,0];
              ref = math.multiply(v.Structure.b, 1 / math.norm(v.Structure.b));
              break;

            case "z":
              //						ref = [0,0,1];
              ref = math.multiply(v.Structure.c, 1 / math.norm(v.Structure.c));
              break;

            case "vx":
              ref = rightarr;
              break;

            case "vy":
              ref = uparr;
              break;

            case "vz":
              ref = carr;
              break;
          }

          newpos = VLatoms.Math.add(VLatoms.Math.cdotvec(step, ref), [ca.x, ca.y, ca.z]);
          ca.x = newpos[0];
          ca.y = newpos[1];
          ca.z = newpos[2]; // check atom is escaped the cell

          v.manipulateAtom.checkAtomPositionAfterManipulate(ca, i, onEscape); //				v.Manipulate.insideTest(v.Structure.atoms,"onEscape");
        }

        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
        v.Manipulate.addHistory({
          mode: "Move Atom(s)",
          args: {
            direction: direction,
            step: step
          },
          Structure: objClone(v.Structure)
        });
      } //TODO

    },
    change: function change(args) {
      var sa = v.IO.selectedAtoms;
      var tempsa = sa.slice(0);
      var fromElement = [];

      if (args.from !== "" && args.from !== undefined) {
        fromElement = args.from.split(/\s*,\s*/g);
      }

      ;
      var targetElement = args.te;
      var tePer = 100;

      if (args.percent !== "" && !Number.isNaN(args.percent * 1) && args.percent > 0 && args.percent <= 100) {
        tePer = args.percent * 1;
      }

      var teCnt = 0;

      if (fromElement.length > 0) {
        for (var i = sa.length - 1; i >= 0; i--) {
          if (fromElement.indexOf(v.Structure.atoms[sa[i]].element) < 0) {
            tempsa.splice(i, 1);
          }
        }
      }

      tePer = tePer / 100;
      teCnt = tempsa.length * tePer;

      if (teCnt > sa.length) {
        teCnt = sa.length;
      }

      var tlist = [];

      while (teCnt > 0) {
        var tidx = Math.floor(Math.random() * tempsa.length);
        tlist.push(tempsa[tidx]);
        tempsa.splice(tidx, 1);
        teCnt = teCnt - 1;
      }

      for (var i = 0, len = tlist.length; i < len; i++) {
        v.Structure.atoms[tlist[i]].element = targetElement;
      }

      v.Structure = VLatoms.Utils.redefineStructure(v.Structure);
      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();
      v.Manipulate.addHistory({
        mode: "Change Atom(s)",
        args: {},
        Structure: VLatoms.Utils.minimizeStructure(v.Structure)
      });
    },
    rotate: function rotate(args) {
      var cm = [0, 0, 0]; // Center of mass of selected atoms

      var sa = v.IO.selectedAtoms;
      var opt = args["args"];

      if (opt["type"] === "manual") {
        cm = opt["center"].slice(0);
      } else {
        for (var i = 0; i < sa.length; i++) {
          var ca = v.Structure.atoms[sa[i]];
          cm[0] += ca.x;
          cm[1] += ca.y;
          cm[2] += ca.z;
        }

        cm[0] /= sa.length;
        cm[1] /= sa.length;
        cm[2] /= sa.length;
      }

      console.log(args);
      var direction = args.direction; //$('.manipulate_rotate_direction:checked').val();

      var ref;
      var uparr = [v.camera.up.x, v.camera.up.y, v.camera.up.z]; // ^

      uparr = VLatoms.Math.norm(uparr);
      var carr = [-v.camera.position.x, -v.camera.position.y, -v.camera.position.z];
      carr = VLatoms.Math.norm(carr);
      var rightarr = VLatoms.Math.cross(uparr, carr);
      rightarr = VLatoms.Math.norm(rightarr);

      switch (direction) {
        case "x":
          ref = [1, 0, 0];
          break;

        case "y":
          ref = [0, 1, 0];
          break;

        case "z":
          ref = [0, 0, 1];
          break;

        case "vx":
          ref = rightarr;
          break;

        case "vy":
          ref = uparr;
          break;

        case "vz":
          ref = carr;
          break;

        case "a":
          ref = v.Structure.a;
          break;

        case "b":
          ref = v.Structure.b;
          break;

        case "c":
          ref = v.Structure.c;
          break;
      } //			console.log(ref);

      /*		
      			uparr = [ v.camera.up.x, v.camera.up.y, v.camera.up.z ]; // ^
      			_c = new THREE.Vector3(v.camera.position.x, v.camera.position.y, v.camera.position.z);
      			_c.normalize();
      			__c = [_c.x, _c.y, _c.z];
      			refarr = VLatoms.Math.cross(uparr,__c); // ->
      */


      var step = args.step; //$('#manipulate_rotate_step').val()*1;

      if (!$.isNumeric(step)) return false;

      for (var i = 0; i < sa.length; i++) {
        var ca = v.Structure.atoms[sa[i]];
        var tmppos = VLatoms.Math.rotateA(ref, [ca.x - cm[0], ca.y - cm[1], ca.z - cm[2]], step); //var tmppos = VLatoms.Math.rotate(direction,[ca.x-cm[0],ca.y-cm[1],ca.z-cm[2]],step);

        ca.x = tmppos[0] + cm[0];
        ca.y = tmppos[1] + cm[1];
        ca.z = tmppos[2] + cm[2];
        v.manipulateAtom.checkAtomPositionAfterManipulate(ca, i);
      }

      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();
      v.Manipulate.addHistory({
        mode: "Rotate Atom(s)",
        args: {},
        Structure: objClone(v.Structure)
      });
    },
    removeAtoms: function removeAtoms(target, historyToggle) {
      target.sort(function (a, b) {
        return b - a;
      });

      for (var i in target) {
        var idx = target[i];
        v.Structure.atoms.splice(idx, 1);
      }

      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();

      if (historyToggle !== "off") {
        v.Manipulate.addHistory({
          mode: "Delete Atom(s)",
          args: {},
          Structure: objClone(v.Structure)
        });
      }
    },
    removeSelectedAtoms: function removeSelectedAtoms() {
      var deleteTarget = JSON.parse(JSON.stringify(v.IO.selectedAtoms));
      v.IO.selectedAtoms.sort(function (a, b) {
        return b - a;
      });

      for (var i = 0; i < v.IO.selectedGroup.length; i++) {
        v.IO.selectedGroup[i].sort(function (a, b) {
          return a - b;
        });

        for (var j = 0; j < v.IO.selectedAtoms.length; j++) {
          var _idx = v.IO.selectedGroup[i].indexOf(v.IO.selectedAtoms[j]);

          var _start = 0;

          if (_idx >= 0) {
            _start = _idx;
          }

          for (var k = _start; k < v.IO.selectedGroup[i].length; k++) {
            if (v.IO.selectedGroup[i][k] > v.IO.selectedAtoms[j]) {
              v.IO.selectedGroup[i][k] = v.IO.selectedGroup[i][k] - 1;
            }
          }

          if (_idx >= 0) {
            v.IO.selectedGroup[i].splice(_idx, 1);
          }
        }
      }

      v.IO.selectedAtoms = [];
      v.manipulateAtom.removeAtoms(deleteTarget);
      var selectStatus = v.IO.selectMode;
      v.IO.exitSelectMode();
      v.IO.toggleSelection(selectStatus);
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/onUpdate/onUpdate.js":
/*!***************************************************!*\
  !*** ./resources/js/vlatoms/onUpdate/onUpdate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    updateFormula: function updateFormula() {
      v.Structure.formula = VLatoms.Utils.Structure.toFormula(v.Structure);
      v.update.cellInfo();
    },
    updateSpacegroup: function updateSpacegroup() {
      /*			var tmp = v.Structure.spacegroup;
      			v.Structure.spacegroup = VLatoms.Utils.Structure.getSpaceGroup(v);
      			if (tmp != v.Structure.spacegroup) {
      				v.update.cellInfo();
      			}
      */
    },
    updateCtxElement: function updateCtxElement() {
      //update element opt in ctx menu
      //check diff
      var elementsList = Object.keys(v.Structure.formula.formulaArr);
      var atomDisplayKeys = Object.keys(v.option.atomDisplay);

      if (elementsList.length == atomDisplayKeys.length) {
        var _diff = false;

        for (var i in elementsList) {
          if (atomDisplayKeys.indexOf(i) == -1) _diff = true;
        }

        if (!_diff) return false;
      } //init


      var target = v.ctxMenu.find(".atom_design_config_wrapper");
      v.option.atomDisplay = {}; //get old check status

      var _checkboxDOM = target.find('input');

      var _checkValue = {};

      _checkboxDOM.each(function () {
        var _element = $(this).data().element;
        var _checked = this.checked;
        _checkValue[_element] = _checked;
      }); //refresh DOM of elements


      var atomDetailBox = v.ctxMenu.find('.atom_design_detail'); //이전 상태 저장

      var detailBoxElement = atomDetailBox.data('targetelement');
      var detailBoxDisplay = atomDetailBox.css('display'); //초기화

      atomDetailBox.hide();
      atomDetailBox.insertAfter(target);
      target.empty();

      for (var i in elementsList) {
        target.append("<div class='atom_design_config' data-element=" + elementsList[i] + " data-index=" + i + " style='display:inline-block; width:33%'><label><input checked type=checkbox class='atom_toggle' data-element=" + elementsList[i] + "><span style='margin:0 4px;'>" + elementsList[i] + "</span></label><span class='fas fa-caret-down atom_design_toggle' style='cursor:pointer;color:#999;'></span></div>");
      } //		target.children('div').css('width','33%');


      v.ctxMenu.find('.atom_design_toggle').on('click', function () {
        if ($(this).hasClass('fa-caret-up')) {
          $(this).addClass('fa-caret-down');
          $(this).removeClass('fa-caret-up');
          atomDetailBox.hide();
          return true;
        } else {
          var toggleList = v.ctxMenu.find('.atom_design_toggle'); //다른 원소가 먼저 선택되어 있으면 세모 닫기

          toggleList.each(function () {
            if ($(this).hasClass('fa-caret-up')) {
              $(this).addClass('fa-caret-down');
              $(this).removeClass('fa-caret-up');
            }
          }); //세모 열기

          $(this).addClass('fa-caret-up');
          $(this).removeClass('fa-caret-down'); //detail box 값 입력

          var thisElement = $(this).parent().data('element');
          var thisColor = AtomParam[thisElement].color.split('x')[1];
          var thisRadius = AtomParam[thisElement].radius;
          atomDetailBox.data('targetelement', thisElement);
          atomDetailBox.find('.element_color').val(thisColor);
          atomDetailBox.find('.element_radius').val(thisRadius);
          v.IO.ctxMenuCfg.jscolor.atom.fromString(thisColor); //detail box 이동

          var thisIndex = $(this).parent().data('index');
          var atomDetailBoxPosition = Math.ceil((thisIndex + 1) / 3) * 3 - 1;
          atomDetailBox.insertAfter(toggleList.eq(atomDetailBoxPosition).parent()[0] != undefined ? toggleList.eq(atomDetailBoxPosition).parent() : toggleList.eq(toggleList.length - 1).parent());
          if (atomDetailBox.css('display') == 'none') atomDetailBox.show();
        }
      }); //apply old check status

      for (var i in _checkValue) {
        if (!_checkValue[i]) {
          target.find('input[data-element="' + i + '"]').prop('checked', false);
        }
      } //Reflect current status


      var checkboxDOM = target.find('input');
      checkboxDOM.each(function () {
        var element = $(this).data().element;
        var checked = this.checked;
        v.option.atomDisplay[element] = checked;
      }); //bind click event

      v.ctxMenu.find(".atom_toggle").change(function () {
        //Reflect current status
        var checkboxDOM = target.find('input');
        checkboxDOM.each(function () {
          var element = $(this).data().element;
          var checked = this.checked;
          v.option.atomDisplay[element] = checked;
        });
        v.update.atomsChanged = true;
        v.update.bondsChanged = true;
        v.animateControl.once();
      }); //apply old detail box status

      if (detailBoxDisplay != 'none') {
        target.find('.atom_design_config[data-element="' + detailBoxElement + '"]').find('.fa-caret-down').click();
        v.ctxMenu.find('.element_radius').focus();
      }
    },
    updateCtxBond: function updateCtxBond() {
      //update bond opt in ctx menu
      //
      var target = v.ctxMenu.find(".bondpairs");
      var elements = Object.keys(v.Structure.formula.formulaArr);
      v.bondpairs = [];
      v.bondpairs_display = []; //get old check status

      var bondpairs_data = target.find('input');
      var bondpairs_checked = {};
      bondpairs_data.each(function () {
        var _pairs = $(this).data().ij;
        var _checked = this.checked;
        bondpairs_checked[_pairs] = _checked;
      }); //end of old check status

      for (var i = 0; i < elements.length; i++) {
        for (var j = 0; j <= i; j++) {
          v.bondpairs.push({
            display: true,
            pair: [elements[i], elements[j]]
          });
          v.bondpairs_display.push(elements[i] + "" + elements[j]);

          if (elements[i] != elements[j]) {
            v.bondpairs_display.push(elements[j] + "" + elements[i]);
          }
        }
      }

      target.empty();
      var cp;

      for (var i = 0; i < v.bondpairs.length; i++) {
        cp = v.bondpairs[i]; //			target.append("<input checked type=checkbox class='bondpair' data-idx="+i+" data-ij="+cp.pair[0]+""+cp.pair[1]+" data-ji="+cp.pair[1]+""+cp.pair[0]+" data-i="+cp.pair[0]+" data-j="+cp.pair[1]+"> "+cp.pair[0]+"-"+cp.pair[1]+"<br>");
        //	schan

        target.append("<div style='display:inline-block; width:33%;'><label><input checked type=checkbox class='bondpair' data-idx=" + i + " data-ij=" + cp.pair[0] + "" + cp.pair[1] + " data-ji=" + cp.pair[1] + "" + cp.pair[0] + " data-i=" + cp.pair[0] + " data-j=" + cp.pair[1] + ">" + cp.pair[0] + "-" + cp.pair[1] + "</label></div>");
      } //apply old check status


      for (var i in bondpairs_checked) {
        if (!bondpairs_checked[i]) {
          for (var j = 0; j < v.bondpairs_display.length; j++) {
            if (i == v.bondpairs_display[j]) {
              v.bondpairs_display.splice(j, 1);
            }
          }
        }
      }

      var _checklist = target.find('input');

      for (var i in bondpairs_checked) {
        if (!bondpairs_checked[i]) {
          for (var j = 0; j < _checklist.length; j++) {
            if (i == _checklist.eq(j).data().ij) {
              _checklist.eq(j).prop('checked', false);
            }
          }
        }
      } // end of apply	


      v.ctxMenu.find(".bondpair").unbind();
      v.ctxMenu.find(".bondpair").change(function () {
        v.bondpairs_display = [];
        v.ctxMenu.find(".bondpair").each(function () {
          if ($(this).is(":checked")) {
            v.bondpairs_display.push($(this).data("ij"));
            v.bondpairs_display.push($(this).data("ji"));
          }
        });
        v.update.bondsChanged = true;
        v.animateControl.once();
      });
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/openwin/openwin.js":
/*!*************************************************!*\
  !*** ./resources/js/vlatoms/openwin/openwin.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (v) {
  return {
    selected: "",
    editShow: false,
    Manipulate: __webpack_require__(/*! ./openwin_Manipulate/openwin_Manipulate.js */ "./resources/js/vlatoms/openwin/openwin_Manipulate/openwin_Manipulate.js")(v)
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/openwin/openwin_Manipulate/openwin_Manipulate.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/vlatoms/openwin/openwin_Manipulate/openwin_Manipulate.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    GenerateManipulatorMessage: function GenerateManipulatorMessage(desc1, desc2, fields) {
      var retTxt = "";
      if (desc1) retTxt += "<span class=VLM_msg_desc1>" + desc1 + "</span>";
      if (desc2) retTxt += "<span class=VLM_msg_desc2>" + desc2 + "</span>";
      if (fields) retTxt += "<span class=VLM_msg_fields>" + fields + "</span>";
      return retTxt;
    },
    DrawFromInput: function DrawFromInput() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _l = option.left;
      var _t = option.top;

      if ($("#VLMessage")) {
        if (_l === undefined) {
          _l = $("#VLMessage").css('left');
        }

        if (_t === undefined) {
          _t = $("#VLMessage").css('top');
        }
      }

      v.openwin.editShow = true;
      var title = "Structure Input";
      var la = VLatoms.Math.len(v.Structure.a);
      var lb = VLatoms.Math.len(v.Structure.b);
      var lc = VLatoms.Math.len(v.Structure.c);
      var al = Math.acos(VLatoms.Math.dot(v.Structure.b, v.Structure.c) / lb / lc) * 180 / Math.PI;
      var be = Math.acos(VLatoms.Math.dot(v.Structure.c, v.Structure.a) / lc / la) * 180 / Math.PI;
      var gam = Math.acos(VLatoms.Math.dot(v.Structure.a, v.Structure.b) / la / lb) * 180 / Math.PI;
      var desc1, desc2, fields;
      fields = "\n<div style='width:350px;text-align:center;' id=VLAtoms_inputWrapper>\n\t<div class='form-inline row' style='margin:0;'>\n\t\t<div class=col-2 style='padding:0;'>\n\t\t\t<label>Unit</label>\n\t\t</div>\n\t\t<div class='form-inline col-10' style='padding:0;'> \n\t\t\t<select class='form-control customInputUnit'>\n\t\t\t\t<option value=bohr>Bohr</option>\n\t\t\t\t<option value=angstrom selected>Angstrom(\xC5)</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div class='form-inline row' style='margin:0;margin-bottom:20px;'>\n\t\t<div class=col-2 style='padding:0;'>\n\t\t\t<label>Cell</label>\n\t\t</div>\n\t\t<div class='form-inline col-10' style='padding:0;'>\n\t\t\t<select class='form-control customSelectCell'>\n\t\t\t\t<option value=current>Current Cell</option>\n\t\t\t\t<option value=lattice>Lattice Constant</option>\n\t\t\t\t<option value=vectors>Vectors</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<div class='customInputCellWrapper' style='display:none;'>\n\t\t<div class=row style='margin:0;'>\n\t\t\t<div class=col-2 style='padding:0;'><span>a</span></div>\n\t\t\t<div class='form-inline row col-10' style='margin:0;padding:0;'>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=0 data-column=0 style='width:100%;' value=".concat(+v.Structure.a[0], ">\n\t\t\t\t</div>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=0 data-column=1 style='width:100%;' value=").concat(+v.Structure.a[1], ">\n\t\t\t\t</div>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=0 data-column=2 style='width:100%;' value=").concat(+v.Structure.a[2], ">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=row style='margin:0;'>\n\t\t\t<div class=col-2 style='padding:0;'><span>b</span></div>\n\t\t\t<div class='form-inline row col-10' style='margin:0;padding:0;'>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=1 data-column=0 style='width:100%;' value=").concat(+v.Structure.b[0], ">\n\t\t\t\t</div>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=1 data-column=1 style='width:100%;' value=").concat(+v.Structure.b[1], ">\n\t\t\t\t</div>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=1 data-column=2 style='width:100%;' value=").concat(+v.Structure.b[2], ">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=row style='margin:0;'>\n\t\t\t<div class=col-2 style='padding:0;'><span>c</span></div>\n\t\t\t<div class='form-inline row col-10' style='margin:0;padding:0;'>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=2 data-column=0 style='width:100%;' value=").concat(+v.Structure.c[0], ">\n\t\t\t\t</div>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=2 data-column=1 style='width:100%;' value=").concat(+v.Structure.c[1], ">\n\t\t\t\t</div>\n\t\t\t\t<div class=col-4 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputCell' data-row=2 data-column=2 style='width:100%;' value=").concat(+v.Structure.c[2], ">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class='form-inline customInputLatticeWrapper' style='display:none;'>\n\t\t<div class='form-inline row' style='margin:0;'>\n\t\t\t<div class='col-2' style='padding:0;'><span>a</span></div>\n\t\t\t<div class='col-2' style='padding:0;'><input class='form-control customLatticeCell' data-type='latticea' style='width:100%;' value=").concat(la, "></div>\n\t\t\t<div class='col-2' style='padding:0;'><span>b</span></div>\n\t\t\t<div class='col-2' style='padding:0;'><input class='form-control customLatticeCell' data-type='latticeb' style='width:100%;' value=").concat(lb, "></div>\n\t\t\t<div class='col-2' style='padding:0;'><span>c</span></div>\n\t\t\t<div class='col-2' style='padding:0;'><input class='form-control customLatticeCell' data-type='latticec' style='width:100%;' value=").concat(lc, "></div>\n\t\t</div>\n\t\t<div class='form-inline row' style='margin:0;'>\n\t\t\t<div class='col-2' style='padding:0;'><span>\u03B1 (\xB0)</span></div>\n\t\t\t<div class='col-2' style='padding:0;'><input class='form-control customLatticeCell' data-type='anglealpha' style='width:100%;' value=").concat(al, "></div>\n\t\t\t<div class='col-2' style='padding:0;'><span>\u03B2 (\xB0)</span></div>\n\t\t\t<div class='col-2' style='padding:0;'><input class='form-control customLatticeCell' data-type='anglebeta' style='width:100%;' value=").concat(be, "></div>\n\t\t\t<div class='col-2' style='padding:0;'><span>\u03B3 (\xB0)</span></div>\n\t\t\t<div class='col-2' style='padding:0;'><input class='form-control customLatticeCell' data-type='anglegamma' style='width:100%;' value=").concat(gam, "></div>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div class='row form-inline' style=\"margin:0;margin-bottom:20px;\">\n\t\t<div class='col-2' style=\"padding:0;\">\n\t\t\t<label>Atoms</label>\n\t\t</div>\n\t\t<div class='form-inline col-4' style=\"padding:0;\">\n\t\t\t<select class='form-control customSelectAtomType'>\n\t\t\t\t<option value='cartesian'>Cartesian</option>\n\t\t\t\t<option value='fractional'>Fractional</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class='col-3' style='padding:0;'>\n\t\t\t<input class='showSelected' type=checkbox ").concat(v.openwin.selected, ">Selected\n\t\t</div>\n\t\t<div class='col-3'>\n\t\t\t<i class='fas fa-question-circle customInputPasteIcon matsq_tooltip' style='cursor:pointer;' data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"If you want to paste the clipboard data, press Ctrl + V or click the paste menu on the contextmenu.\"></i>\n\t\t</div>\n\t</div>\n\t<div style='height:250px;overflow-y:auto;'>\n\t\t<div class='customInputAtomsWrapper'>"); //todo

      if (v.Structure.atoms.length === 0) {
        fields += "\n\t\t\t<div class='form-inline atomRow row' style='margin:0;'>\n\t\t\t\t<div class=col-2 style='padding:0;'><span>1</span></div>\n\t\t\t\t<div class=col-2 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputAtoms' data-row=0 data-column=0 style='width:100%;' placeholder='El.'>\n\t\t\t\t</div>\n\t\t\t\t<div class='row col-7' style='padding:0;margin:0;'>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=0 data-column=1 style='width:100%;' placeholder='x'>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=0 data-column=2 style='width:100%;' placeholder='y'>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=0 data-column=3 style='width:100%;' placeholder='z'>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=col-1 style='padding:0;'>\n\t\t\t\t\t<i class='fas fa-times-circle customAtomsDelete' style='cursor:pointer;'></i>\n\t\t\t\t</div>\n\t\t\t</div>";
      } else {
        for (var i = 0; i < v.Structure.atoms.length; i++) {
          var atom = v.Structure.atoms[i];
          var isSelected = v.IO.selectedAtoms.indexOf(i) >= 0 ? "selectedAtomRow" : "";
          fields += "\n\t\t\t<div class='form-inline row atomRow ".concat(isSelected, "' style='margin:0;'>\n\t\t\t\t<div class=col-2>\n\t\t\t\t\t<span>").concat(i + 1, "</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=col-2 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(i, " data-column=0 style='width:100%;' placeholder='El.' value=").concat(atom.element, ">\n\t\t\t\t</div>\n\t\t\t\t<div class='row col-7' style='padding:0;margin:0;'>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(i, " data-column=1 style='width:100%;' placeholder='x' value=").concat(atom.x, ">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(i, " data-column=2 style='width:100%;' placeholder='y' value=").concat(atom.y, ">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(i, " data-column=3 style='width:100%;' placeholder='z' value=").concat(atom.z, ">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=col-1 style='padding:0;'>\n\t\t\t\t\t<i class='fas fa-times-circle customAtomsDelete' style='cursor:pointer;'></i>\n\t\t\t\t</div>\n\t\t\t</div>");
        }
      }

      fields += "\n\t\t</div>\n\t\t<div>\n\t\t\t<button class=\"btn btn-link addNewAtom\"><i class='fas fa-plus-circle'></i>Add Atom</button>\n\t\t</div>\n\t</div>\n</div>";
      var btn = {
        "Apply": function Apply() {
          v.Manipulate.execute("drawFromInput", {
            "historymode": "Manual Edit"
          });
        },
        "close": true
      };
      var msg = this.GenerateManipulatorMessage(desc1, desc2, fields);
      v.UI.message(title, msg, btn, {
        "width": "auto",
        "height": 500,
        "top": _t,
        "left": _l
      });
      $("#VLMessage").find("#VLM_btn_close").off();
      $("#VLMessage").find("#VLM_btn_close").click(function () {
        v.openwin.editShow = false;
        $("#VLMessage").remove();
        console.log("?");
      });
      var inputWrapper = $("#VLAtoms_inputWrapper");
      inputWrapper.find(".customInputCell").on("paste", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var row = $(e.target).data("row");
        var col = $(e.target).data("column");
        console.log(row, col);
        var cd = e.originalEvent.clipboardData.getData("text/plain");
        cd = cd.trim().split("\n");

        for (var _i = 0; _i < cd.length; _i++) {
          cd[_i] = cd[_i].trim().replace(/\s+/g, " ").replace(/\t+/g, " ").split(" ");
        }

        for (var _i2 = 0; _i2 < cd.length; _i2++) {
          for (var j = 0; j < cd[_i2].length; j++) {
            $(".customInputCell[data-row=" + (row + _i2) + "][data-column=" + (col + j) + "]").empty().val(cd[_i2][j]);
          }
        }
      });
      inputWrapper.find(".customInputCell").keydown(function (e) {
        var row = $(e.target).data("row");
        var col = $(e.target).data("column");
        var tinput;

        if (e.which === 38) {
          tinput = inputWrapper.find(".customInputCell[data-row=" + (row - 1) + "][data-column=" + col + "]");

          if (tinput.length > 0) {
            tinput.focus();
          }
        } else if (e.which === 40) {
          tinput = inputWrapper.find(".customInputCell[data-row=" + (row + 1) + "][data-column=" + col + "]");

          if (tinput.length > 0) {
            tinput.focus();
          }
        }
      });
      inputWrapper.find(".customInputAtoms").click(function () {
        var idx = +$(this).data("row");
        v.IO.restoreAtomsColor();
        v.IO.highlightSelectedAtoms();

        if (idx !== undefined) {
          var meshIndex = v.atomMeshes.findIndex(function (e) {
            return e.atomid == idx;
          });
          var oa = v.atomMeshes[meshIndex];
          var mat = new THREE.MeshBasicMaterial({
            color: 0x17a2b8,
            side: THREE.BackSide
          });
          var geom = new THREE.SphereGeometry(1, 32);
          var mesh = new THREE.Mesh(geom, mat);
          mesh.scale.set(oa.scale.x + 0.15, oa.scale.y + 0.15, oa.scale.z + 0.15);
          mesh.position.set(oa.position.x, oa.position.y, oa.position.z);
          v.scene.add(mesh);
          v.highlightMeshes.push(mesh);
        }
      });
      inputWrapper.find(".customInputAtoms").keydown(function (e) {
        var row = +$(e.target).data("row");
        var col = +$(e.target).data("column");
        var cnt = 1;
        var tinput;

        if (e.which === 38) {
          tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row - cnt) + "][data-column=" + col + "]");

          while (tinput.length > 0) {
            if (tinput.parents(".row").css("display") !== "none") {
              tinput.focus();
              break;
            } else {
              cnt++;
              tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row - cnt) + "][data-column=" + col + "]");
            }
          }
        } else if (e.which === 40) {
          tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row + cnt) + "][data-column=" + col + "]");

          while (tinput.length > 0) {
            if (tinput.parents(".row").css("display") !== "none") {
              tinput.focus();
              break;
            } else {
              cnt++;
              tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row + cnt) + "][data-column=" + col + "]");
            }
          }
        }
      });
      inputWrapper.find(".customAtomsDelete").click(function (e) {
        $(this).parents(".row").remove();
      });

      function addNewAtom(nrow) {
        var inh = "\n\t\t\t<div class='form-inline atomRow row' style='margin:0;'>\n\t\t\t\t<div class=col-2 style='padding:0;'>\n\t\t\t\t\t<span>".concat(nrow + 1, "</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=col-2 style='padding:0;'>\n\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(nrow, " data-column=0 style='width:100%;' placeholder='El.'>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-7 row' style='padding:0;margin:0'>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(nrow, " data-column=1 style='width:100%;' placeholder='x'>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(nrow, " data-column=2 style='width:100%;' placeholder='y'>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=col style='padding:0;'>\n\t\t\t\t\t\t<input class='form-control customInputAtoms' data-row=").concat(nrow, " data-column=3 style='width:100%;' placeholder='z'>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=col-1 style='padding:0;'>\n\t\t\t\t\t<i class='fas fa-times-circle' style='color:red;cursor:pointer;'></i>\n\t\t\t\t</div>\n\t\t\t</div>");
        inputWrapper.find(".customInputAtomsWrapper").append(inh);
      }

      function atomsPatseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
        var row = $(e.target).data("row");
        var col = $(e.target).data("column");
        var cd = e.originalEvent.clipboardData.getData("text/plain");
        cd = cd.trim().split("\n");

        for (var _i3 = 0; _i3 < cd.length; _i3++) {
          cd[_i3] = cd[_i3].trim().replace(/\s+/g, " ").replace(/\t+/g, " ").split(" ");
        }

        for (var _i4 = 0; _i4 < cd.length; _i4++) {
          var nrow = row * 1 + _i4 * 1;

          if (inputWrapper.find(".customInputAtoms[data-row=" + nrow + "]").length === 0) {
            addNewAtom(nrow);
          }

          for (var j = 0; j < cd[_i4].length; j++) {
            inputWrapper.find(".customInputAtoms[data-row=" + (row + _i4) + "][data-column=" + (col + j) + "]").empty().val(cd[_i4][j]);
          }
        }

        inputWrapper.find(".customInputAtoms").off();
        inputWrapper.find(".customInputAtoms").on("paste", function (e) {
          atomsPatseEvent(e);
        });
        inputWrapper.find(".customInputAtoms").keydown(function (e) {
          var row = $(e.target).data("row");
          var col = $(e.target).data("column");
          var tinput;
          var cnt = 1;

          if (e.which === 38) {
            tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row - cnt) + "][data-column=" + col + "]");

            while (tinput.length > 0) {
              if (tinput.parents(".row").css("display") !== "none") {
                tinput.focus();
                break;
              } else {
                cnt++;
                tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row - cnt) + "][data-column=" + col + "]");
              }
            }
          } else if (e.which === 40) {
            tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row + cnt) + "][data-column=" + col + "]");

            while (tinput.length > 0) {
              if (tinput.parents(".row").css("display") !== "none") {
                tinput.focus();
                break;
              } else {
                cnt++;
                tinput = inputWrapper.find(".customInputAtoms[data-row=" + (row + cnt) + "][data-column=" + col + "]");
              }
            }
          }
        });
      }

      ;
      inputWrapper.find(".customSelectAtomType").change(function () {
        var value = $(this).find("option:selected").val();
        var cellType = inputWrapper.find(".customSelectCell").find("option:selected").val();
        var atomRow = inputWrapper.find(".customInputAtomsWrapper").children();
        var cellVector = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        switch (cellType) {
          case "current":
            cellVector[0] = v.Structure.a;
            cellVector[1] = v.Structure.b;
            cellVector[2] = v.Structure.c;
            break;

          case "vectors":
            cellVector[0] = [+inputWrapper.find(".customInputCell[data-row=0][data-column=0]").val(), +inputWrapper.find(".customInputCell[data-row=0][data-column=1]").val(), +inputWrapper.find(".customInputCell[data-row=0][data-column=2]").val()];
            cellVector[1] = [+inputWrapper.find(".customInputCell[data-row=1][data-column=0]").val(), +inputWrapper.find(".customInputCell[data-row=1][data-column=1]").val(), +inputWrapper.find(".customInputCell[data-row=1][data-column=2]").val()];
            cellVector[2] = [+inputWrapper.find(".customInputCell[data-row=2][data-column=0]").val(), +inputWrapper.find(".customInputCell[data-row=2][data-column=1]").val(), +inputWrapper.find(".customInputCell[data-row=2][data-column=2]").val()];
            break;

          case "lattice":
            var la = inputWrapper.find(".customLatticeCell[data-type=latticea]").val() * 1;
            var lb = inputWrapper.find(".customLatticeCell[data-type=latticeb]").val() * 1;
            var lc = inputWrapper.find(".customLatticeCell[data-type=latticec]").val() * 1;
            var alpha = inputWrapper.find(".customLatticeCell[data-type=anglealpha]").val() * Math.PI / 180;
            var beta = inputWrapper.find(".customLatticeCell[data-type=anglebeta]").val() * Math.PI / 180;
            var gamma = inputWrapper.find(".customLatticeCell[data-type=anglegamma]").val() * Math.PI / 180;
            cellVector[0] = [la, 0, 0];
            cellVector[1] = [lb * Math.cos(gamma), lb * Math.sin(gamma), 0];
            cellVector[2] = [lc * Math.cos(beta), cellVector[2][1] = lc * (Math.cos(alpha) - Math.cos(gamma) * Math.cos(beta)) / Math.sin(gamma), 0];
            cellVector[2][2] = Math.sqrt(Math.pow(lc, 2) - Math.pow(cellVector[2][0], 2) - Math.pow(cellVector[2][1], 2));
            break;
        }

        switch (value) {
          case "cartesian":
            for (var i = 0, len = atomRow.length; i < len; i++) {
              var _atom = [inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=1]").val(), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=2]").val(), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=3]").val()];
              var vectorSize = VLatoms.Math.fractToCart(cellVector, _atom);
              inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=1]").val(vectorSize[0]), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=2]").val(vectorSize[1]), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=3]").val(vectorSize[2]);
            }

            break;

          case "fractional":
            for (var i = 0, len = atomRow.length; i < len; i++) {
              var _atom2 = [inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=1]").val(), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=2]").val(), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=3]").val()];
              var vectorSize = VLatoms.Math.cartToFract(cellVector, _atom2);
              inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=1]").val(vectorSize[0]), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=2]").val(vectorSize[1]), inputWrapper.find(".customInputAtoms[data-row=" + i + "][data-column=3]").val(vectorSize[2]);
            }

            break;
        }
      });
      inputWrapper.find(".customSelectCell").change(function () {
        var value = $(this).find("option:selected").val();

        if (value === "current") {
          inputWrapper.find(".customInputCellWrapper").hide();
          inputWrapper.find(".customInputLatticeWrapper").hide();
        } else if (value === "lattice") {
          inputWrapper.find(".customInputCellWrapper").hide();
          inputWrapper.find(".customInputLatticeWrapper").show();
        } else if (value === "vectors") {
          inputWrapper.find(".customInputCellWrapper").show();
          inputWrapper.find(".customInputLatticeWrapper").hide();
        }
      });
      inputWrapper.find(".showSelected").change(function () {
        var checked = $(this).prop("checked");

        if (checked) {
          v.openwin.selected = "checked";
          inputWrapper.find('.customInputAtomsWrapper').children().not('.selectedAtomRow').hide();
        } else {
          v.openwin.selected = "";
          inputWrapper.find('.customInputAtomsWrapper').children().show();
        }
      });
      inputWrapper.find(".showSelected").change();
      inputWrapper.find(".addNewAtom").click(function () {
        var nrow = $(".customInputAtomsWrapper").children(".row:last").children("div:first").find("span").text();

        if (nrow === "") {
          nrow = 0;
        } else {
          nrow *= 1;
        }

        addNewAtom(nrow);
      });

      if (typeof inputWrapper.find(".customInputPasteIcon").bstooltip === "function") {
        inputWrapper.find(".customInputPasteIcon").bstooltip();
      }

      inputWrapper.find(".customInputAtoms").on("paste", function (e) {
        atomsPatseEvent(e);
      });
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/set/set.js":
/*!*****************************************!*\
  !*** ./resources/js/vlatoms/set/set.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    toSceneCenter: function toSceneCenter(mesh) {
      var La = v.Structure.a;
      var Lb = v.Structure.b;
      var Lc = v.Structure.c;
      var Sa = VLatoms.Math.cdotvec(-0.5, La);
      var Sb = VLatoms.Math.cdotvec(-0.5, Lb);
      var Sc = VLatoms.Math.cdotvec(-0.5, Lc);
      var Spos = VLatoms.Math.vecdotmat([0.5, 0.5, 0.5], [La, Lb, Lc]);
      var CurPos = mesh.position; //CurPos.set( CurPos.x - 0.5*Sx, CurPos.y - 0.5*Sy, CurPos.z - 0.5*Sz );

      CurPos.set(CurPos.x - Spos[0], CurPos.y - Spos[1], CurPos.z - Spos[2]);
      mesh.centered = true;
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/update/update.js":
/*!***********************************************!*\
  !*** ./resources/js/vlatoms/update/update.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (v) {
  return {
    atomsChanged: false,
    bondsChanged: false,
    bondsScaleChanged: false,
    cellInfo: function cellInfo() {
      var _t = v.cellInfoWrapper;

      if (!v.option.cellInfo) {
        _t.html("");

        _t.hide();

        return;
      }

      _t.show();

      var la = VLatoms.Math.len(v.Structure.a);
      var lb = VLatoms.Math.len(v.Structure.b);
      var lc = VLatoms.Math.len(v.Structure.c);
      var al = Math.acos(VLatoms.Math.dot(v.Structure.b, v.Structure.c) / lb / lc) * 180 / Math.PI;
      var be = Math.acos(VLatoms.Math.dot(v.Structure.c, v.Structure.a) / lc / la) * 180 / Math.PI;
      var gam = Math.acos(VLatoms.Math.dot(v.Structure.a, v.Structure.b) / la / lb) * 180 / Math.PI;
      var elementInfo = {};
      v.Structure.atoms.forEach(function (v, i, a) {
        if (elementInfo[v.element] === undefined) {
          elementInfo[v.element] = {
            mass: v.mass,
            n: 1
          };
        } else {
          elementInfo[v.element].n++;
        }
      });
      var mass = 0;

      for (var i in elementInfo) {
        mass += elementInfo[i].mass * elementInfo[i].n;
      }

      var volume = Math.abs(math.dot(math.cross(v.Structure.a, v.Structure.b), v.Structure.c));
      var Navogadro = 6.022140857; // *10^23

      var density = Math.round(mass / volume / Navogadro * 10 * 10000) / 10000;
      var innerhtml = "\t\n".concat(v.Structure.spacegroup == false || v.Structure.spacegroup == undefined ? "" : "Space group : " + SpaceGroups[v.Structure.spacegroup * 1 - 1] + "(" + v.Structure.spacegroup + ")<br>", "\n").concat(v.Structure.formula ? JSON.stringify(v.Structure.formula.formulaArr).replace(/"/g, '').replace(/[{}]/g, "").replace(/:/g, " : ").replace(/,/g, ", ") + "<br>" : "<br>", "\na,b,c (&#8491;) : \n<span style='color:rgb(200,0,0)' title=\"").concat(la.toFixed(8), "\">").concat(la.toFixed(2), "</span>, \n<span style='color:rgb(0,155,0)' title=\"").concat(lb.toFixed(8), "\">").concat(lb.toFixed(2), "</span>, \n<span style='color:rgb(0,0,155)' title=\"").concat(lc.toFixed(8), "\">").concat(lc.toFixed(2), "</span><br>\n&alpha;,&beta;,&gamma; (&deg;) : ").concat(al.toFixed(2), ", ").concat(be.toFixed(2), ", ").concat(gam.toFixed(2), "<br>\nDensity : ").concat(density, " g/cm<sup>3</sup><br>\nVolume : ").concat(VLatoms.Utils.getVolume(v.Structure).toFixed(3), " \xC5<sup>3</sup>\n");

      _t.html(innerhtml);
    },
    selectInfo: function selectInfo() {
      var target = $(v.wrapper).find(".VLScreen_selectInfo");
      target.empty();

      if (!v.option.selectInfo) {
        target.hide();
        return;
      }

      target.show();

      if (v.IO.selectMode != "none") {
        var _t = "<font style='weight:bold;color:red;" + (v.IO.isMobile ? "font-size:14px;" : "") + "'>Press ESC key or touch <span class=VLatoms_mobile_esc>THIS</span><br> to exit select mode<br>" + (v.IO.isMobile ? "<span class=VLatoms_mobile_delete>Delete selected atoms</span>" : "") + "</font><br>";

        switch (v.IO.selectMode) {
          case 'atom':
            target.html(_t + "Select mode - Single<br>");
            break;

          case 'rect':
            target.html(_t + "Select mode - Rectangular<br>");
            break;

          case 'circ':
            target.html(_t + "Select mode - Circle<br>");
            break;

          case 'element':
            target.html(_t + "Select mode - Element<br>");
            break;

          case 'pent':
            target.html(_t + "Select mode - Pentagon<br>");
            break;

          case 'hex':
            target.html(_t + "Select mode - Hexagon<br>");
            break;

          case 'hept':
            target.html(_t + "Select mode - Heptagon<br>");
            break;

          case 'octa':
            target.html(_t + "Select mode - Octagon<br>");
            break;

          case 'lasso':
            target.html(_t + "Select mode - Lasso<br>");
            break;

          case 'sphere':
            target.html(_t + "Select mode - Sphere (Distance:" + v.IO.distance.toFixed(2) + ")<br>");
            break;

          case 'pos':
            target.html(_t + "Select mode - Center Atom<br>");
            break;
        }

        switch (v.IO.selectHow) {
          case "normal":
            target.append('Normal<br>');
            break;

          case "merge":
            target.append('A ∪ B<br>');
            break;

          case "reverse":
            target.append('A<sup>c</sup><br>');
            break;

          case "overlap":
            target.append('A ∩ B<br>');
            break;

          case "notoverlap":
            target.append('(A ∩ B)<sup>c</sup><br>');
            break;

          case "del":
            target.append('A - B<br>');
            break;
        }

        target.find('.VLatoms_mobile_esc').unbind();
        target.find('.VLatoms_mobile_esc').bind("click", function () {
          v.ctxMenu.hide();
          v.IO.exitSelectMode();
        });
        target.find('.VLatoms_mobile_delete').unbind();
        target.find('.VLatoms_mobile_delete').bind("click", function () {
          v.manipulateAtom.removeSelectedAtoms();
        });
        var _selected_atoms = [];
        v.IO.selectedAtoms.forEach(function (_atom) {
          for (var i = 0; i < _selected_atoms.length; i++) {
            if (_selected_atoms[i].element == v.Structure.atoms[_atom].element) {
              _selected_atoms[i].count += 1;
              return;
            }
          }

          _selected_atoms.push({
            "element": v.Structure.atoms[_atom].element,
            "count": 1
          });
        });
        var ih = "";

        for (var i = 0; i < _selected_atoms.length; i++) {
          ih += _selected_atoms[i].element + "=" + _selected_atoms[i].count + ", ";
        }

        var _ih = ih.substr(0, ih.length - 2);

        if (_ih != "") {
          target.append(_ih);
        }
      }
    },
    applyStructure: function applyStructure(structure) {
      v.clear.atomsInStructure(); //

      var _s = objClone(structure);

      v.Structure.a = _s.a;
      v.Structure.b = _s.b;
      v.Structure.c = _s.c;

      for (var i = 0; i < _s.atoms.length; i++) {
        var ca = _s.atoms[i];
        v.Structure.atoms.push(new VLatoms.Atom(ca.x, ca.y, ca.z, ca.element));
      }

      v.update.atomsChanged = true;
      v.update.bondsChanged = true;
      v.animateControl.once();
    },
    atomPosition: function atomPosition(newStructure) {
      var ns = newStructure;

      for (var i = 0; i < ns.atoms.length; i++) {
        var ca = ns.atoms[i];

        if (v.option.shift) {
          v.Structure.atoms[i].x = ca.x - v.option.shift_val[0];
          v.Structure.atoms[i].y = ca.y - v.option.shift_val[1];
          v.Structure.atoms[i].z = ca.z - v.option.shift_val[2];
        } else {
          v.Structure.atoms[i].x = ca.x;
          v.Structure.atoms[i].y = ca.y;
          v.Structure.atoms[i].z = ca.z;
        }
      }

      v.Manipulate.insideTest(v.Structure.atoms, {
        "onEscape": true
      });

      for (var i = 0; i < ns.atoms.length; i++) {
        if (v.option.atoms) {
          v.atomMeshes[i].position.set(v.Structure.atoms[i].x, v.Structure.atoms[i].y, v.Structure.atoms[i].z); //check //check performance

          v.set.toSceneCenter(v.atomMeshes[i]);
        }
      }

      v.update.bondsChanged = true;
      v.animateControl.once();

      for (var i = 0; i < v.option.onUpdate.length; i++) {
        v.option.onUpdate[i]();
      }
    },
    atom: function atom() {
      v.draw.Cell();
      v.draw.Axis();
      v.clear.atomsInScene();
      v.update.atomsChanged = false;

      if (!v.option.atoms) {
        return false;
      }

      var material = new THREE.MeshPhongMaterial({
        reflectivity: 1.00,
        specular: 0x666666,
        shininess: 100,
        color: 0xff0000
      });
      var ca, tmpmesh;
      var Natom = v.natoms();

      for (var i = 0; i < Natom; i++) {
        ca = v.Structure.atoms[i];
        if (v.option.atomDisplay[ca.element] == false) continue;
        tmpmesh = new THREE.Mesh(v.Sphere, material.clone());
        tmpmesh.material.color.setHex(ca.color);
        tmpmesh.castShadow = true;
        tmpmesh.receiveShadow = true;
        tmpmesh.scale.set(ca.radius * v.option.radius.atom, ca.radius * v.option.radius.atom, ca.radius * v.option.radius.atom);
        tmpmesh.position.set(ca.x * 1, ca.y * 1, ca.z * 1);
        tmpmesh.atomid = i; // 나중에 Mouse Event로부터  ID를 추적하여 사용하기 위함

        v.atomMeshes.push(tmpmesh);
        v.set.toSceneCenter(tmpmesh);
        v.scene.add(tmpmesh);
      }

      if (v.natoms() == 0) {
        v.messageWrapper.show();
      } else {
        v.messageWrapper.hide();
      }

      if (v.option.ghosts) v.update.ghosts();
      v.update.cellInfo();
      v.update.selectInfo();
      v.IO.highlightSelectedAtoms();

      for (var i = 0; i < v.option.onUpdate.length; i++) {
        v.option.onUpdate[i]();
      }
    },
    ghosts: function ghosts() {
      var material = new THREE.MeshPhongMaterial({
        reflectivity: 1.00,
        specular: 0xffffff,
        shininess: 100,
        color: 0xff0000,
        opacity: 0.5,
        transparent: true
      });
      var ca, tmpmesh;
      var gidx = 0;
      var nghosts = v.option.ghosts_direction;
      var _cube_ = [v.Structure.a, v.Structure.b, v.Structure.c];

      for (var i = 0; i < v.Structure.atoms.length; i++) {
        var atoms = v.Structure.atoms[i];
        _atom = [];
        _atom[0] = atoms.x;
        _atom[1] = atoms.y;
        _atom[2] = atoms.z;
        var vectorSize = VLatoms.Math.cartToFract(_cube_, _atom);
        var ghosts_range = [[-1, 1], [-1, 1], [-1, 1]];

        for (var j = 0; j < 3; j++) {
          switch (nghosts[j]) {
            case -1:
              ghosts_range[j] = [-1, 0];
              break;

            case 0:
              ghosts_range[j] = [0, 0];
              break;

            case 1:
              ghosts_range[j] = [0, 1];
              break;

            case 2:
              ghosts_range[j] = [-1, 1];
              break;
          }
        }

        for (var xx = ghosts_range[0][0]; xx <= ghosts_range[0][1]; xx++) {
          if (xx < 0 && Math.abs(vectorSize[0] + xx) > v.option.ghosts_tolerance[0]) {
            continue;
          } else if (xx > 0 && Math.abs(vectorSize[0] + xx) > 1 + v.option.ghosts_tolerance[0]) {
            continue;
          }

          for (var yy = ghosts_range[1][0]; yy <= ghosts_range[1][1]; yy++) {
            if (yy < 0 && Math.abs(vectorSize[1] + yy) > v.option.ghosts_tolerance[1]) {
              continue;
            } else if (yy > 0 && Math.abs(vectorSize[1] + yy) > 1 + v.option.ghosts_tolerance[1]) {
              continue;
            }

            for (var zz = ghosts_range[2][0]; zz <= ghosts_range[2][1]; zz++) {
              if (xx == 0 && yy == 0 && zz == 0) {
                continue;
              }

              if (zz < 0 && Math.abs(vectorSize[2] + zz) > v.option.ghosts_tolerance[2]) {
                continue;
              } else if (zz > 0 && Math.abs(vectorSize[2] + zz) > 1 + v.option.ghosts_tolerance[2]) {
                continue;
              }

              ca = objClone(v.Structure.atoms[i]);
              tmpmesh = new THREE.Mesh(v.Sphere, material.clone());
              tmpmesh.material.color.setHex(ca.color);
              tmpmesh.scale.set(ca.radius * v.option.radius.atom, ca.radius * v.option.radius.atom, ca.radius * v.option.radius.atom);
              var newpos = [ca.x, ca.y, ca.z];
              newpos = VLatoms.Math.add(newpos, VLatoms.Math.cdotvec(xx, v.Structure.a));
              newpos = VLatoms.Math.add(newpos, VLatoms.Math.cdotvec(yy, v.Structure.b));
              newpos = VLatoms.Math.add(newpos, VLatoms.Math.cdotvec(zz, v.Structure.c));
              tmpmesh.position.set(newpos[0], newpos[1], newpos[2]);
              ca.x = newpos[0];
              ca.y = newpos[1];
              ca.z = newpos[2];
              if (v.Structure.ghosts === undefined) v.Structure.ghosts = [];
              v.Structure.ghosts.push(ca);
              tmpmesh.atomid = gidx; // 나중에 Mouse Event로부터  ID를 추적하여 사용하기 위함

              v.ghostMeshes.push(tmpmesh);
              v.set.toSceneCenter(tmpmesh);
              v.scene.add(tmpmesh);
              gidx++;
            }
          }
        }
      }
    },
    bond: function bond(args) {
      if (args === undefined) {
        args = {
          gofr: false
        };
      }

      if (args.gofr === undefined) {
        args.gofr = false;
      }

      var epsinv = 1 / 4 * 3.1415926535 * 0.1;

      if (!v.option.bonds) {
        v.clear.bondsInScene();
        this.bondsChanged = false;
        return;
      }

      var dx, dy, dz, dr;
      var neighs, atomi_r, atomj_r;
      var ca, cb;
      var cutoff;
      var nbonds = 0;

      if (v.option.calculate_gofr || args.gofr) {
        v.analysis.gofr = [];

        for (var i = 0; i < 100; i++) {
          v.analysis.gofr[i] = 0;
        }
      }

      if (v.update.bin() === "bin false") {
        return;
      }

      ;

      for (var i = 0; i < v.Structure.atoms.length; i++) {
        ca = v.Structure.atoms[i];
        atomi_r = ca.radius;
        neighs = v.get.NeighsChildren(ca.bin);

        for (var j = 0; j < neighs.length; j++) {
          if (neighs[j] >= i) {
            continue;
          }

          cb = v.Structure.atoms[neighs[j]];
          if (v.bondpairs_display.indexOf(ca.element + "" + cb.element) < 0 && !args.gofr) continue;
          if (v.bondpairs_display.indexOf(cb.element + "" + ca.element) < 0 && !args.gofr) continue;
          atomj_r = cb.radius;
          cutoff = (atomi_r + atomj_r) * 1.08;

          if (v.option.calculate_gofr || args.gofr) {
            var resol = v.option.gofr_resolution;
            dx = ca.x - cb.x;
            dy = ca.y - cb.y;
            dz = ca.z - cb.z;
            dr = Math.sqrt(dx * dx + dy * dy + dz * dz);
            var idx = Math.floor(dr / resol);

            if (idx < 100) {
              v.analysis.gofr[idx] += epsinv / (dr * dr);
            }
          } else {
            dx = Math.abs(ca.x - cb.x);
            if (dx > cutoff) continue;
            dy = Math.abs(ca.y - cb.y);
            if (dy > cutoff) continue;
            dz = Math.abs(ca.z - cb.z);
            if (dz > cutoff) continue;
            dr = Math.sqrt(dx * dx + dy * dy + dz * dz);
          }

          if (dr > cutoff) continue;

          if (dr > 0.001) {
            if (v.bondMeshes[nbonds] === undefined) {
              var BondMesh = v.draw.Cylinder(ca, cb, v.option.radius.bond);
              BondMesh.castShadow = true;
              BondMesh.receiveShadow = true;
              v.set.toSceneCenter(BondMesh);
              v.bondMeshes.push(BondMesh);
              v.scene.add(BondMesh);
            } else {
              var vec = new THREE.Vector3(ca.x - cb.x, ca.y - cb.y, ca.z - cb.z);
              v.bondMeshes[nbonds].rotation.z = Math.acos(vec.y / dr);
              v.bondMeshes[nbonds].rotation.y = 0.5 * Math.PI + Math.atan2(vec.x, vec.z);
              v.bondMeshes[nbonds].eularOrder = 'YZX';
              v.bondMeshes[nbonds].scale.y = vec.length();
              v.bondMeshes[nbonds].position.x = (ca.x + cb.x) / 2;
              v.bondMeshes[nbonds].position.y = (ca.y + cb.y) / 2;
              v.bondMeshes[nbonds].position.z = (ca.z + cb.z) / 2;
              v.set.toSceneCenter(v.bondMeshes[nbonds]);
            }

            if (v.update.bondsScaleChanged) {
              v.bondMeshes[nbonds].scale.x = v.bondMeshes[nbonds].scale.z = v.option.radius.bond;
            }

            nbonds++;
          }
        }
      }

      var obj;

      for (var i = v.bondMeshes.length - 1; i >= nbonds; i--) {
        obj = v.bondMeshes[i];

        if (obj instanceof THREE.Mesh) {
          v.scene.remove(obj);
          if (obj.geometry !== undefined) obj.geometry.dispose();
          if (obj.material !== undefined) obj.material.dispose();
        }

        v.bondMeshes.splice(i, 1);
      }

      v.update.bondsChanged = false;
      v.update.bondsScaleChanged = false;

      if (args.gofr) {
        return v.analysis.gofr;
      }
    },
    bin: function bin() {
      v.Structure.bin = [];
      var bs = v.option.BinSize;
      var bin_nx, bin_ny, bin_nz;
      var latMat = [v.Structure.a, v.Structure.b, v.Structure.c];
      var xmax, xmin, ymax, ymin, zmax, zmin;
      var refPos = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]];

      for (var i = 0; i < 8; i++) {
        var tmpPos = refPos[i];
        var atomPos_tmp = VLatoms.Math.vecdotmat(tmpPos, latMat);

        if (xmax === undefined) {
          xmax = atomPos_tmp[0];
          xmin = atomPos_tmp[0];
          ymax = atomPos_tmp[1];
          ymin = atomPos_tmp[1];
          zmax = atomPos_tmp[2];
          zmin = atomPos_tmp[2];
        }

        if (atomPos_tmp[0] < xmin) xmin = atomPos_tmp[0];
        if (atomPos_tmp[1] < ymin) ymin = atomPos_tmp[1];
        if (atomPos_tmp[2] < zmin) zmin = atomPos_tmp[2];
        if (atomPos_tmp[0] > xmax) xmax = atomPos_tmp[0];
        if (atomPos_tmp[1] > ymax) ymax = atomPos_tmp[1];
        if (atomPos_tmp[2] > zmax) zmax = atomPos_tmp[2];
      }

      bin_nx = Math.floor((xmax - xmin) / bs);
      bin_ny = Math.floor((ymax - ymin) / bs);
      bin_nz = Math.floor((zmax - zmin) / bs);

      for (var i = 0; i < bin_nx * bin_ny * bin_nz; i++) {
        v.Structure.bin[i] = [];
      }

      if (bin_nx == 0) bin_nx = 1;
      if (bin_ny == 0) bin_ny = 1;
      if (bin_nz == 0) bin_nz = 1;

      for (var i = 0; i < bin_nx * bin_ny * bin_nz; i++) {
        v.Structure.bin[i] = [];
      }

      for (var i = 0; i < v.Structure.atoms.length; i++) {
        try {
          var ca = v.Structure.atoms[i];
          var myx = Math.floor((ca.x - xmin) / bs);
          var myy = Math.floor((ca.y - ymin) / bs);
          var myz = Math.floor((ca.z - zmin) / bs);
          if (myx < 0) myx = bin_nx + myx;
          if (myy < 0) myy = bin_ny + myy;
          if (myz < 0) myz = bin_nz + myz;
          if (myx == bin_nx) myx--;
          if (myy == bin_ny) myy--;
          if (myz == bin_nz) myz--;
          var binidx = myx * bin_ny * bin_nz + myy * bin_nz + myz;
          v.Structure.bin[binidx].push(i);
          ca.bin = [myx, myy, myz];
        } catch (e) {
          v.Structure.bin = [];
          return "bin false";
        }
      }

      v.Structure.bindim = [bin_nx, bin_ny, bin_nz];
    }
  };
};

/***/ }),

/***/ "./resources/js/vlatoms/vlatoms.css":
/*!******************************************!*\
  !*** ./resources/js/vlatoms/vlatoms.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/postcss-loader/src??ref--8-2!./vlatoms.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/vlatoms/vlatoms.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/vlatoms/vlatoms.js":
/*!*****************************************!*\
  !*** ./resources/js/vlatoms/vlatoms.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./AtomParam.js */ "./resources/js/vlatoms/AtomParam.js");

__webpack_require__(/*! ./vlatoms.css */ "./resources/js/vlatoms/vlatoms.css");

__webpack_require__(/*! ./img/check.png */ "./resources/js/vlatoms/img/check.png"); // Avoid `console` errors in browsers that lack a console.


var timeCheckArr = [];

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); //Get Path of this file


window.VLATOMS_PATH = "";

if (document.currentScript) {
  VLATOMS_PATH = document.currentScript.src;
} else {
  var scripts = document.getElementsByTagName('script');
  VLATOMS_PATH = scripts[scripts.length - 1].src;
}

if (VLATOMS_PATH == "" || VLATOMS_PATH == undefined) {
  console.warn("Path is not defined");
  VLATOMS_PATH = "/";
} else {
  VLATOMS_PATH = VLATOMS_PATH.substr(0, VLATOMS_PATH.lastIndexOf("/"));
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

var arrClone = function arrClone(arr) {
  return arr.slice(0);
};

window.objClone = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

String.prototype.removeSpace = function () {
  return this.replace(/\s+/g, " ").replace(/^\s+/, "").replace(/\s+$/, "");
};
/*
 */


if (window.NVLScreens === undefined) {
  window.NVLScreens = 0; // Number of VL Screens
}

console.log('VL Screen #', NVLScreens);
window.VLatoms = __webpack_require__(/*! ./vlatoms_main.js */ "./resources/js/vlatoms/vlatoms_main.js").VLatoms;
var SpaceGroups = ['P1', 'P-1', 'P2', 'P21', 'C2', 'Pm', 'Pc', 'Cm', 'Cc', 'P2/m', 'P21/m', 'C2/m', 'P2/c', 'P21/c', 'C2/c', 'P222', 'P2221', 'P21212', 'P212121', 'C2221', 'C222', 'F222', 'I222', 'I212121', 'Pmm2', 'Pmc21', 'Pcc2', 'Pma2', 'Pca21', 'Pnc2', 'Pmn21', 'Pba2', 'Pna21', 'Pnn2', 'Cmm2', 'Cmc21', 'Ccc2', 'Amm2', 'Aem2', 'Ama2', 'Aea2', 'Fmm2', 'Fdd2', 'Imm2', 'Iba2', 'Ima2', 'Pmmm', 'Pnnn', 'Pccm', 'Pban', 'Pmma', 'Pnna', 'Pmna', 'Pcca', 'Pbam', 'Pccn', 'Pbcm', 'Pnnm', 'Pmmn', 'Pbcn', 'Pbca', 'Pnma', 'Cmcm', 'Cmce', 'Cmmm', 'Cccm', 'Cmme', 'Ccce', 'Fmmm', 'Fddd', 'Immm', 'Ibam', 'Ibca', 'Imma', 'P4', 'P41', 'P42', 'P43', 'I4', 'I41', 'P-4', 'I-4', 'P4/m', 'P42/m', 'P4/n', 'P42/n', 'I4/m', 'I41/a', 'P422', 'P4212', 'P4122', 'P41212', 'P4222', 'P42212', 'P4322', 'P43212', 'I422', 'I4122', 'P4mm', 'P4bm', 'P42cm', 'P42nm', 'P4cc', 'P4nc', 'P42mc', 'P42bc', 'I4mm', 'I4cm', 'I41md', 'I41cd', 'P-42m', 'P-42c', 'P-421m', 'P-421c', 'P-4m2', 'P-4c2', 'P-4b2', 'P-4n2', 'I-4m2', 'I-4c2', 'I-42m', 'I-42d', 'P4/mmm', 'P4/mcc', 'P4/nbm', 'P4/nnc', 'P4/mbm', 'P4/mnc', 'P4/nmm', 'P4/ncc', 'P42/mmc', 'P42/mcm', 'P42/nbc', 'P42/nnm', 'P42/mbc', 'P42/mnm', 'P42/nmc', 'P42/ncm', 'I4/mmm', 'I4/mcm', 'I41/amd', 'I41/acd', 'P3', 'P31', 'P32', 'R3', 'P-3', 'R-3', 'P312', 'P321', 'P3112', 'P3121', 'P3212', 'P3221', 'R32', 'P3m1', 'P31m', 'P3c1', 'P31c', 'R3m', 'R3c', 'P-31m', 'P-31c', 'P-3m1', 'P-3c1', 'R-3m', 'R-3c', 'P6', 'P61', 'P65', 'P62', 'P64', 'P63', 'P-6', 'P6/m', 'P63/m', 'P622', 'P6122', 'P6522', 'P6222', 'P6422', 'P6322', 'P6mm', 'P6cc', 'P63cm', 'P63mc', 'P-6m2', 'P-6c2', 'P-62m', 'P-62c', 'P6/mmm', 'P6/mcc', 'P63/mcm', 'P63/mmc', 'P23', 'F23', 'I23', 'P213', 'I213', 'Pm-3', 'Pn-3', 'Fm-3', 'Fd-3', 'Im-3', 'Pa-3', 'Ia-3', 'P432', 'P4232', 'F432', 'F4132', 'I432', 'P4332', 'P4132', 'I4132', 'P-43m', 'F-43m', 'I-43m', 'P-43n', 'F-43c', 'I-43d', 'Pm-3m', 'Pn-3n', 'Pm-3n', 'Pn-3m', 'Fm-3m', 'Fm-3c', 'Fd-3m', 'Fd-3c', 'Im-3m', 'Ia-3d'];

/***/ }),

/***/ "./resources/js/vlatoms/vlatoms_main.js":
/*!**********************************************!*\
  !*** ./resources/js/vlatoms/vlatoms_main.js ***!
  \**********************************************/
/*! exports provided: VLatoms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VLatoms", function() { return VLatoms; });
/* harmony import */ var _Atom_Atom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Atom/Atom.js */ "./resources/js/vlatoms/Atom/Atom.js");
/* harmony import */ var _Structure_Structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Structure/Structure.js */ "./resources/js/vlatoms/Structure/Structure.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var VLatoms =
/*#__PURE__*/
function () {
  function VLatoms(option) {
    _classCallCheck(this, VLatoms);

    _defineProperty(this, "draw", __webpack_require__(/*! ./draw/draw.js */ "./resources/js/vlatoms/draw/draw.js")(this));

    _defineProperty(this, "update", __webpack_require__(/*! ./update/update.js */ "./resources/js/vlatoms/update/update.js")(this));

    _defineProperty(this, "IO", __webpack_require__(/*! ./IO/IO.js */ "./resources/js/vlatoms/IO/IO.js")(this));

    _defineProperty(this, "animateControl", __webpack_require__(/*! ./animateControl/animateControl.js */ "./resources/js/vlatoms/animateControl/animateControl.js")(this));

    _defineProperty(this, "Manipulate", __webpack_require__(/*! ./Manipulate/Manipulate.js */ "./resources/js/vlatoms/Manipulate/Manipulate.js")(this));

    _defineProperty(this, "set", __webpack_require__(/*! ./set/set.js */ "./resources/js/vlatoms/set/set.js")(this));

    _defineProperty(this, "get", __webpack_require__(/*! ./get/get.js */ "./resources/js/vlatoms/get/get.js")(this));

    _defineProperty(this, "clear", __webpack_require__(/*! ./clear/clear.js */ "./resources/js/vlatoms/clear/clear.js")(this));

    _defineProperty(this, "manipulateAtom", __webpack_require__(/*! ./manipulateAtom/manipulateAtom.js */ "./resources/js/vlatoms/manipulateAtom/manipulateAtom.js")(this));

    _defineProperty(this, "openwin", __webpack_require__(/*! ./openwin/openwin.js */ "./resources/js/vlatoms/openwin/openwin.js")(this));

    _defineProperty(this, "StructureList", __webpack_require__(/*! ./StructureList/StructureList.js */ "./resources/js/vlatoms/StructureList/StructureList.js")(this));

    this.v = this;
    this.v.that = this;
    var v = this;
    v.option = option || {
      resolution: 8
    };
    if (v.option.shadow === undefined) v.option.shadow = false;
    if (v.option.resolution === undefined) v.option.resolution = 8;
    if (v.option.step === undefined) v.option.step = {
      rotate: 15,
      move: 1
    };
    v.option.radius = v.option.radius || {
      bond: 0.1,
      atom: 0.6
    };
    if (v.option.atoms === undefined) v.option.atoms = true;
    if (v.option.bonds === undefined) v.option.bonds = true;
    if (v.option.axis === undefined) v.option.axis = true;
    if (v.option.selectInfo === undefined) v.option.selectInfo = true;
    if (v.option.cell === undefined) v.option.cell = true;
    if (v.option.perspective === undefined) v.option.perspective = true;
    if (v.option.cellInfo === undefined) v.option.cellInfo = true;
    if (v.option.cellInfoSpaceGroup === undefined) v.option.cellInfoSpaceGroup = true;
    if (v.option.ghosts === undefined) v.option.ghosts = false;
    if (v.option.ghosts_direction === undefined) v.option.ghosts_direction = [2, 2, 2];
    if (v.option.ghosts_tolerance === undefined) v.option.ghosts_tolerance = [1, 1, 1];
    if (v.option.calculate_gofr === undefined) v.option.calculate_gofr = false;
    if (v.option.gofr_resolution === undefined) v.option.gofr_resolution = 0.05;
    if (v.option.shift === undefined) v.option.shift = false;
    if (v.option.shift_val === undefined) v.option.shift_val = [0, 0, 0];
    if (v.option.strList === undefined) v.option.strList = false;
    if (v.option.strListInfo === undefined) v.option.strListInfo = false;
    if (v.option.strListSlide === undefined) v.option.strListSlide = false;
    if (v.option.strListDel === undefined) v.option.strListDel = true;
    if (v.option.fastSelect === undefined) v.option.fastSelect = true; //	if(v.option.light ===undefined) v.option.light=[false, false, false];

    if (v.option.light === undefined) v.option.light = [{
      pos: {
        x: 0,
        y: 0
      },
      on: true,
      intensity: 0.333
    }, {
      pos: {
        x: 0,
        y: 0
      },
      on: true,
      intensity: 0.333
    }, {
      pos: {
        x: 0,
        y: 0
      },
      on: true,
      intensity: 0.333
    }];
    v.option.camera = v.option.camera || {
      fov: 3,
      aspect: 1,
      near: 1,
      far: 1 << 30
    };
    this.CX = 2;
    this.CY = 2;
    this.CZ = 1;
    v.option.onUpdate = v.option.onUpdate || [];

    var presetOnUpdate = __webpack_require__(/*! ./onUpdate/onUpdate.js */ "./resources/js/vlatoms/onUpdate/onUpdate.js")(this);

    v.option.onUpdate.push(presetOnUpdate.updateFormula.bind(this));
    v.option.onUpdate.push(presetOnUpdate.updateSpacegroup.bind(this));
    v.option.onUpdate.push(presetOnUpdate.updateCtxElement.bind(this));
    v.option.onUpdate.push(presetOnUpdate.updateCtxBond.bind(this));
    console.log(v.option.onUpdate);
    v.option.placeholder = v.option.placeholder || "Click here to upload structure file <br>or<br>Drop your structure file here!";
    v.option.atomDisplay = [];
    v.option.customAtomParam = {};
    v.option.area = v.option.area || null;
    v.bondpairs = [];
    v.bondpairs_display = [];
    var div = document.createElement('div');

    if (v.option.wrapper === undefined) {
      var scripts = document.getElementsByTagName('script');
      var this_script = scripts[scripts.length - 1];
      v.myParentNode = this_script.parentNode;
      v.myParentStyle = myParentNode.style;
    } else {
      // if jquery element
      if (v.option.wrapper.get !== undefined) {
        console.warn("JQ");
        v.myParentNode = v.option.wrapper.get(0);
      } else if (v.option.wrapper.insertBefore !== undefined) {
        console.warn("Native JS");
        v.myParentNode = v.option.wrapper;
      } else {
        console.error("Could not detect the type of wrapper");
      }
    }

    if (v.option.history === undefined) v.option.history = false;
    v.wrapper = v.myParentNode.insertBefore(div, this_script);
    v.wrapper.id = "VLScreen" + NVLScreens;
    if (v.option.area === null) v.option.area = "#" + v.wrapper.id;
    v.option.backgroundcolor = v.option.backgroundcolor || 0xffffff;
    $(v.wrapper).addClass("vlv_wrapper");
    v.wrapperStyle = {}; //v.wrapper.style;

    v.option.BinSize = v.option.BinSize || 3; // 3Angstrom

    v.shiftPressed = false;
    v.analysis = {};
    $(v.wrapper).append("<div id=VLScreen_cellInfo" + NVLScreens + "></div>");
    v.cellInfoWrapper = $('#VLScreen_cellInfo' + NVLScreens);
    v.cellInfoWrapper.css({
      position: "absolute",
      "font-size": "9px"
    });

    if (!v.option.cellInfo) {
      v.cellInfoWrapper.hide();
    }

    $(v.wrapper).append('<div class="VLScreen_selectInfo" style="position: absolute; font-size: 9px; left: 0.5em; top: 0.5em; width: 160px; height: 55px; text-align: left;"></div>');
    $(v.wrapper).append('<div style="position: absolute; font-size: 9px; right: 0.5em; top: 0.5em; width: 160px; height: 55px; text-align: right;"><button class="btn btn-default show_ctx_menu" style="height:35px;width:35px;padding:2px;font-size: 21px;border-radius:15px; display:inline-block; position:relative;"><i class="far fa-circle" style="position:absolute;top:5px;right:6px;"></i><i class="fas fa-hand-point-up" style="position:absolute;top:9px;right:5px;font-size:18px;"></i></button><div class="VLScreen_listInfo" style="display:inline-block;"><button class="btn btn-default matsq-strlist-button" style="height:35px;width:35px;padding:2px;border-radius:15px;font-size:21px;"><i class="fas fa-list structure_list_info"></i></button></div></div>');
    v.strInfoWrapper = $(v.wrapper).find(".VLScreen_listInfo");
    v.ctxMenuButton = $(v.wrapper).find(".show_ctx_menu");

    if (!v.option.fastSelect) {
      v.ctxMenuButton.hide();
    }

    NVLScreens++;
    var render_option = {
      antialias: true,
      preserveDrawingBuffer: true,
      sortobjects: false
    };

    if (window.WebGLRenderingContext) {
      v.renderer = new THREE.WebGLRenderer(render_option);
    } else {
      alert("Canvas Renderer!");
      v.renderer = new THREE.CanvasRenderer(render_option);
    }

    v.renderer.setClearColor(v.option.backgroundcolor, 1);
    v.renderer.sortObjects = false;
    v.renderer.shadowMap.enabled = true;
    v.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    v.setSize();
    v.wrapper.appendChild(v.renderer.domElement);
    v.scene = new THREE.Scene();
    v.PerspectiveCamera = new THREE.PerspectiveCamera(v.option.camera.fov, v.option.camera.aspect, v.option.camera.near, v.option.camera.far);
    v.OrthographicCamera = new THREE.OrthographicCamera(v.wrapperStyle.width / -2, v.wrapperStyle.width / 2, v.wrapperStyle.height / 2, v.wrapperStyle.height / -2, 0.0001, 99999999);
    var orgdist = -1;

    v.setPerspectiveCamera = function () {
      v.camera = v.PerspectiveCamera;
      v.controls.object = v.camera;
      v.camera.up.copy(v.OrthographicCamera.up);
      v.camera.position.copy(v.OrthographicCamera.position.normalize().multiplyScalar(orgdist));
      v.controls.object = v.camera;
    };

    v.setOrthographicCamera = function () {
      v.camera = v.OrthographicCamera;
      v.camera.up.copy(v.PerspectiveCamera.up);
      v.camera.position.copy(v.PerspectiveCamera.position);
      orgdist = v.camera.position.length();
      v.camera.zoom = 10;
      v.camera.position.normalize().multiplyScalar(30);
      v.camera.updateProjectionMatrix();
      v.controls.object = v.camera;
    };

    v.camera = v.PerspectiveCamera;
    v.scene.add(v.camera);
    v.light = [];
    v.light.push(new THREE.DirectionalLight(0xffffff, 1 / 3));
    v.light.push(new THREE.DirectionalLight(0xffffff, 1 / 3));
    v.light.push(new THREE.DirectionalLight(0xffffff, 1 / 3));
    v.controls = new THREE.TrackballControls(v.camera, v.renderer.domElement);
    v.controls.visualizer = v;
    v.controls.rotateSpeed = 1.2;
    v.controls.zoomSpeed = 1.2;
    v.controls.panSpeed = 1;
    v.controls.noZoom = false;
    v.controls.noPan = false;
    v.controls.staticMoving = true;
    v.controls.dynamicDampingFactor = 0.3;

    v.controls.wheelEvent = function () {
      v.animateControl.once();
    };

    for (var i = 0; i < 3; i++) {
      v.light[i].castShadow = true;
      v.light[i].shadow.bias = 0.0001;
      v.light[i].shadow.mapSize.width = 1024;
      v.light[i].shadow.mapSize.height = 512;
      v.scene.add(v.light[i]);
    } //window.addEventListener('resize',v.onWindowResize,false);


    $(window).on("resize", function () {
      if (v.renderer) {
        v.onWindowResize();
      }
    });
    v.onWindowResizeAction = []; //schan

    v.onWindowResize = function () {
      v.setSize();
      v.controls.handleResize();
      v.camera.updateProjectionMatrix();
      v.onWindowResizeAction.forEach(function (e) {
        e();
      });
      v.animateControl.once();
      v.draw.Axis();
    };

    var _Sphere = new THREE.SphereGeometry(1, v.option.resolution * 2, v.option.resolution, 0, Math.PI * 2);

    v.Sphere = new THREE.BufferGeometry().fromGeometry(_Sphere);
    v.Axis = [];

    var _Cylinder = new THREE.CylinderGeometry(1, 1, 1, 0, 0, false);

    var _Cone = new THREE.CylinderGeometry(1, 0, 1, 0, 0, false);

    v.Cylinder = new THREE.BufferGeometry().fromGeometry(_Cylinder);
    v.Cone = new THREE.BufferGeometry().fromGeometry(_Cone);
    v.atomMeshes = Array();
    v.bondMeshes = Array();
    v.ghostMeshes = Array();
    v.customMeshes = Array();
    v.highlightMeshes = Array();
    v.camera.position.z = 10;
    v.setOptimalCamPosition();
    v.animate();
    v.Structure = new VLatoms.Structure();
    v.strlist = [{
      "name": "Structure-0",
      "Structure": -1,
      "history": v.Manipulate.history
    }];
    v.strNum = 0;
    v.UI = __webpack_require__(/*! ./UI/UI.js */ "./resources/js/vlatoms/UI/UI.js")(this.wrapper); //		v.StructureList = new __StructureList(this)

    if (!v.option.strListInfo) {
      v.strInfoWrapper.hide();
    }

    v.strInfoWrapper.find(".structure_list_info").click(function (e) {
      v.StructureList.showStructureList();
      e.stopPropagation();
      e.preventDefault();
    });
    v.ctxMenuButton.click(function (e) {
      $(v.ctxMenu).find(".ctx-menu-select").click();
      v.IO.showCtxMenu(e);
      e.stopPropagation();
      e.preventDefault();
    });
    v.animateId = undefined;
    v.onAnimate = false;
    v.IO.init();
    /* Dialog windows */
  }

  _createClass(VLatoms, [{
    key: "natoms",
    value: function natoms() {
      return this.Structure.atoms.length;
    }
  }, {
    key: "volume",
    value: function volume() {
      return VLatoms.Utils.getVolume(this.Structure);
    }
  }, {
    key: "setSize",
    value: function setSize(w, h) {
      var v = this.v;

      if (h == undefined) {
        v.wrapperStyle.width = $(v.myParentNode).width();
        v.wrapperStyle.height = $(v.myParentNode).height();
      } else {
        v.wrapperStyle.width = w;
        v.wrapperStyle.height = h;
      }

      if (v.option.size !== undefined) {
        v.wrapperStyle.width = v.option.size.width;
        v.wrapperStyle.height = v.option.size.height;
      }

      v.option.camera.aspect = v.wrapperStyle.width / v.wrapperStyle.height;

      if (v.camera instanceof THREE.PerspectiveCamera) {
        v.camera.aspect = v.option.camera.aspect;
      } else if (v.camera instanceof THREE.OrthographicCamera) {
        v.OrthographicCamera.left = v.wrapperStyle.width / -2;
        v.OrthographicCamera.right = v.wrapperStyle.width / 2;
        v.OrthographicCamera.top = v.wrapperStyle.height / 2;
        v.OrthographicCamera.bottom = v.wrapperStyle.height / -2;
      }

      $(v.wrapper).width(v.wrapperStyle.width);
      $(v.wrapper).height(v.wrapperStyle.height);
      $(v.wrapper).css("overflow", "hidden");
      $(v.wrapper).css("position", "relative");
      $(v.wrapper).css("-webkit-box-shadow", " 0px 0px 2px 0px rgba(189,189,189,1)");
      $(v.wrapper).css("-moz-box-shadow", " 0px 0px 2px 0px rgba(189,189,189,1)");
      $(v.wrapper).css("box-shadow", " 0px 0px 2px 0px rgba(189,189,189,1)");
      v.renderer.setSize(v.wrapperStyle.width, v.wrapperStyle.height); // Cell Info Window

      v.cellInfoWrapper.css({
        //      "left":v.wrapperStyle.width-135,
        "right": "0.5em",
        "bottom": "0.5em",
        "width": 160,
        "height": "auto",
        "text-align": "right"
      }); // Message window

      if (v.messageWrapper === undefined) {
        $(v.wrapper).append("<div id=VLScreen_message" + NVLScreens + " class=VLScreen_message><div class='messagebox'></div></div>");
        v.messageWrapper = $("#VLScreen_message" + NVLScreens);
      }

      v.messageWrapper.css({
        width: v.wrapperStyle.width,
        height: v.wrapperStyle.height
      });
      v.messageWrapper.find(".messagebox").html(v.option.placeholder);
      v.messageWrapper.find(".messagebox").unbind();
      v.messageWrapper.find(".messagebox").click(function () {
        var tmp_input_file = $(document.createElement("input"));
        tmp_input_file.attr("type", "file");
        tmp_input_file.prop("accept", ".cif, .vasp");
        tmp_input_file[0].addEventListener("change", function () {
          v.IO.readFiles(this.files);
        });
        tmp_input_file.trigger("click");
        tmp_input_file.remove(); //      e.preventDefault();
        //                      var files = e.dataTransfer.files;
        //                      v.IO.readFiles( files );

        return false;
      });
    }
  }, {
    key: "setOptimalCamPosition",
    value: function setOptimalCamPosition() {
      var v = this.v;
      if (!(v.camera instanceof THREE.PerspectiveCamera)) return;
      if (!v.Structure) return;
      if (!v.Structure.a) return;
      var la = VLatoms.Math.len(v.Structure.a);
      var lb = VLatoms.Math.len(v.Structure.b);
      var lc = VLatoms.Math.len(v.Structure.c);
      var maxcell = Math.max(la, lb, lc);
      if (maxcell == 0) return;
      var orgCamPos = VLatoms.Utils.xyzToArr(v.camera.position.clone());
      var orgCamRange = VLatoms.Math.len(orgCamPos);
      var newCamPos = VLatoms.Math.norm(orgCamPos); //var dist = (1 / Math.tan((v.camera.fov * ( Math.PI / 180 ) ) / 2) / maxcell )/ 2;

      var dist = maxcell / 2 / Math.tan(v.camera.fov / 2 * Math.PI / 180);
      v.controls.panSpeed = 20 / dist;
      v.camera.position.x = newCamPos[0] * dist;
      v.camera.position.y = newCamPos[1] * dist;
      v.camera.position.z = newCamPos[2] * dist;
      v.camera.updateProjectionMatrix();
    }
  }, {
    key: "animate",
    value: function animate() {
      var v = this.v;
      /* if Something changed on Scene (new atom, delete atom, move...) */

      if (v.update.atomsChanged) {
        v.update.atom();
      }

      if (v.update.bondsChanged) {
        v.update.bond();
      }

      var cx, cy, cz;
      var carr = [];
      var refarr = [];
      var uparr = [];

      var _c;

      var __c = [];

      if (v.controls !== undefined) {
        v.controls.update();
      }

      uparr = [v.camera.up.x, v.camera.up.y, v.camera.up.z]; // ^

      _c = new THREE.Vector3(v.camera.position.x, v.camera.position.y, v.camera.position.z);

      _c.normalize();

      __c = [_c.x, _c.y, _c.z];
      refarr = VLatoms.Math.cross(uparr, __c); // ->

      for (var i = 0; i < 3; i++) {
        carr = [v.camera.position.x, v.camera.position.y, v.camera.position.z];
        carr = VLatoms.Math.rotateA(refarr, carr, v.option.light[i].pos.x);
        carr = VLatoms.Math.rotateA(uparr, carr, v.option.light[i].pos.y);
        v.light[i].position.set(carr[0] * v.CX, carr[1] * v.CX, carr[2] * v.CX);
      }

      v.renderer.render(v.scene, v.camera);

      if (v.onAnimate) {
        v.animateId = requestAnimationFrame(v.animate.bind(v));
      }
    }
  }, {
    key: "axisView",
    value: function axisView(direction) {
      var v = this.v;
      var camRange = v.camera.position.length();
      var _sAxis = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      var _sAxisUnit = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

      if (v.Structure !== undefined) {
        if (v.Structure.a !== undefined) {
          _sAxis[0] = VLatoms.Math.norm(v.Structure.a);
          _sAxis[1] = VLatoms.Math.norm(v.Structure.b);
          _sAxis[2] = VLatoms.Math.norm(v.Structure.c);
        }
      }

      var camPos, camUp, nowUp, checkUp;
      nowUp = [v.camera.up.x, v.camera.up.y, v.camera.up.z];

      switch (direction) {
        case "x":
          camPos = [1, 0, 0];
          camUp = [0, 0, 1];
          break;

        case "-x":
          camPos = [1, 0, 0];
          camUp = [0, 0, 1];
          break;

        case "y":
          camPos = [0, 1, 0];
          camUp = [1, 0, 0];
          break;

        case "-y":
          camPos = [0, 1, 0];
          camUp = [1, 0, 0];
          break;

        case "z":
          camPos = [0, 0, 1];
          camUp = [0, 1, 0];
          break;

        case "-z":
          camPos = [0, 0, 1];
          camUp = [0, 1, 0];
          break;

        case "a":
          camPos = _sAxis[0];
          checkUp = math.equal(nowUp, _sAxis[2]);

          if (checkUp[0] && checkUp[1] && checkUp[2]) {
            camUp = math.cross(_sAxis[0], _sAxis[1]);
          } else {
            camUp = _sAxis[2];
          }

          break;

        case "-a":
          camPos = _sAxis[0];
          checkUp = math.equal(nowUp, _sAxis[2]);

          if (checkUp[0] && checkUp[1] && checkUp[2]) {
            camUp = math.cross(_sAxis[0], _sAxis[1]);
          } else {
            camUp = _sAxis[2];
          }

          break;

        case "b":
          camPos = _sAxis[1];
          checkUp = math.equal(nowUp, _sAxis[0]);

          if (checkUp[0] && checkUp[1] && checkUp[2]) {
            camUp = math.cross(_sAxis[1], _sAxis[2]);
          } else {
            camUp = _sAxis[0];
          }

          break;

        case "-b":
          camPos = _sAxis[1];
          checkUp = math.equal(nowUp, _sAxis[0]);

          if (checkUp[0] && checkUp[1] && checkUp[2]) {
            camUp = math.cross(_sAxis[1], _sAxis[2]);
          } else {
            camUp = _sAxis[0];
          }

          break;

        case "c":
          camPos = _sAxis[2];
          checkUp = math.equal(nowUp, _sAxis[1]);

          if (checkUp[0] && checkUp[1] && checkUp[2]) {
            camUp = math.cross(_sAxis[2], _sAxis[0]);
          } else {
            camUp = _sAxis[1];
          }

          break;

        case "-c":
          camPos = _sAxis[2];
          checkUp = math.equal(nowUp, _sAxis[1]);

          if (checkUp[0] && checkUp[1] && checkUp[2]) {
            camUp = math.cross(_sAxis[2], _sAxis[0]);
          } else {
            camUp = _sAxis[1];
          }

          break;
      }

      v.camera.position.set(camPos[0], camPos[1], camPos[2]);
      v.camera.up.set(camUp[0], camUp[1], camUp[2]);
      v.camera.position.multiplyScalar(camRange);
      v.controls.update();
      v.animateControl.once();
    }
  }, {
    key: "rotateView",
    value: function rotateView(angle, axis) {
      var v = this.v;
      var camUp = [v.camera.up.x, v.camera.up.y, v.camera.up.z];
      var range = VLatoms.Math.len([v.camera.position.x, v.camera.position.y, v.camera.position.z]);
      var pos = VLatoms.Math.norm([v.camera.position.x, v.camera.position.y, v.camera.position.z]);
      var npos;
      var cameraUp;
      var rot, fix;

      switch (axis) {
        case "vz":
          rot = camUp; //will rotate

          fix = pos; //fixed axis

          cameraUp = VLatoms.Math.rotateA(fix, rot, angle);
          v.camera.up.set(cameraUp[0], cameraUp[1], cameraUp[2]);
          break;

        case "vy":
          rot = pos;
          fix = math.cross(camUp, pos);
          npos = VLatoms.Math.rotateA(fix, rot, angle);
          var newUp = math.cross(rot, fix);
          v.camera.position.set(npos[0] * range, npos[1] * range, npos[2] * range);
          v.camera.up.set(newUp[0], newUp[1], newUp[2]);
          break;

        case "vx":
          rot = pos;
          fix = camUp;
          npos = VLatoms.Math.rotateA(fix, rot, -1 * angle);
          v.camera.position.set(npos[0] * range, npos[1] * range, npos[2] * range);
          break;
      }

      v.controls.update();
      v.animateControl.once();
    }
  }]);

  return VLatoms;
}();

_defineProperty(VLatoms, "Atom", _Atom_Atom_js__WEBPACK_IMPORTED_MODULE_0__["Atom"]);

_defineProperty(VLatoms, "Structure", _Structure_Structure_js__WEBPACK_IMPORTED_MODULE_1__["Structure"]);

_defineProperty(VLatoms, "Utils", __webpack_require__(/*! ./Utils/Utils.js */ "./resources/js/vlatoms/Utils/Utils.js"));

_defineProperty(VLatoms, "StructureBuilder", __webpack_require__(/*! ./StructureBuilder/StructureBuilder.js */ "./resources/js/vlatoms/StructureBuilder/StructureBuilder.js"));

_defineProperty(VLatoms, "Math", __webpack_require__(/*! ./Math/Math.js */ "./resources/js/vlatoms/Math/Math.js"));

/***/ }),

/***/ 4:
/*!***********************************************!*\
  !*** multi ./resources/js/vlatoms/vlatoms.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/matsq3/resources/js/vlatoms/vlatoms.js */"./resources/js/vlatoms/vlatoms.js");


/***/ })

/******/ });