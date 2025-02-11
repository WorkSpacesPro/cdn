// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/is-dom-node/dist/is-dom-node.es.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object' ? x instanceof window.Node : x !== null && typeof x === 'object' && typeof x.nodeType === 'number' && typeof x.nodeName === 'string';
}

exports.default = isDomNode;
},{}],"node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isDomNode = require('is-dom-node');

var _isDomNode2 = _interopRequireDefault(_isDomNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object' ? x instanceof window.NodeList : x !== null && typeof x === 'object' && typeof x.length === 'number' && regex.test(prototypeToString) && (x.length === 0 || (0, _isDomNode2.default)(x[0]));
} /*! @license is-dom-node-list v1.2.1
  
  	Copyright 2018 Fisssion LLC.
  
  	Permission is hereby granted, free of charge, to any person obtaining a copy
  	of this software and associated documentation files (the "Software"), to deal
  	in the Software without restriction, including without limitation the rights
  	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  	copies of the Software, and to permit persons to whom the Software is
  	furnished to do so, subject to the following conditions:
  
  	The above copyright notice and this permission notice shall be included in all
  	copies or substantial portions of the Software.
  
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  	SOFTWARE.
  
  */
exports.default = isDomNodeList;
},{"is-dom-node":"node_modules/is-dom-node/dist/is-dom-node.es.js"}],"node_modules/tealight/dist/tealight.es.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _isDomNode = require('is-dom-node');

var _isDomNode2 = _interopRequireDefault(_isDomNode);

var _isDomNodeList = require('is-dom-node-list');

var _isDomNodeList2 = _interopRequireDefault(_isDomNodeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function tealight(target, context) {
		if (context === void 0) context = document;

		if (target instanceof Array) {
				return target.filter(_isDomNode2.default);
		}
		if ((0, _isDomNode2.default)(target)) {
				return [target];
		}
		if ((0, _isDomNodeList2.default)(target)) {
				return Array.prototype.slice.call(target);
		}
		if (typeof target === "string") {
				try {
						var query = context.querySelectorAll(target);
						return Array.prototype.slice.call(query);
				} catch (err) {
						return [];
				}
		}
		return [];
}

exports.default = tealight;
},{"is-dom-node":"node_modules/is-dom-node/dist/is-dom-node.es.js","is-dom-node-list":"node_modules/is-dom-node-list/dist/is-dom-node-list.es.js"}],"node_modules/miniraf/dist/miniraf.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*! @license miniraf v1.0.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () {
				return polyfill(callback);
			}, 0);
		}
	};
}();

var miniraf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill;

exports.default = miniraf;
},{}],"src/core/vector2.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var Vector2 = /** @class */function () {
    function Vector2(x, y) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        this.x = x;
        this.y = y;
    }
    Vector2.add = function (vector) {
        var vectors = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            vectors[_i - 1] = arguments[_i];
        }
        var x = vector.x;
        var y = vector.y;
        vectors.forEach(function (vector) {
            x += vector.x;
            y += vector.y;
        });
        return new Vector2(x, y);
    };
    Vector2.subtract = function (vector) {
        var vectors = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            vectors[_i - 1] = arguments[_i];
        }
        var x = vector.x;
        var y = vector.y;
        vectors.forEach(function (vector) {
            x -= vector.x;
            y -= vector.y;
        });
        return new Vector2(x, y);
    };
    Vector2.rotate = function (vector, angle) {
        if (angle === void 0) {
            angle = 0;
        }
        var x = vector.x * Math.cos(angle) - vector.y * Math.sin(angle);
        var y = vector.y * Math.cos(angle) - vector.x * Math.sin(angle);
        return new Vector2(x, y);
    };
    Vector2.multiply = function (vector, factor) {
        return new Vector2(vector.x * factor, vector.y * factor);
    };
    Vector2.divide = function (vector, divisor) {
        return Vector2.multiply(vector, 1 / divisor);
    };
    Vector2.orbit = function (vector, pivot, angle) {
        if (angle === void 0) {
            angle = 0;
        }
        var offsetVector = Vector2.subtract(vector, pivot);
        var rotatedVector = Vector2.rotate(offsetVector, angle);
        return Vector2.add(rotatedVector, pivot);
    };
    Vector2.squareMagnitude = function (vector) {
        return Math.pow(vector.x, 2) + Math.pow(vector.y, 2);
    };
    Vector2.magnitude = function (vector) {
        return Math.sqrt(Vector2.squareMagnitude(vector));
    };
    Vector2.normalize = function (vector) {
        return Vector2.divide(vector, Vector2.magnitude(vector));
    };
    return Vector2;
}();
exports["default"] = Vector2;
},{}],"src/util/sign.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
var polyfill = function polyfill(n) {
    if (n > 0) return 1;
    if (n < 0) return -1;
    return 0;
};
var Sign = /** @class */function () {
    function Sign() {}
    Sign.of = Math.sign || polyfill;
    Sign.random = function () {
        return Math.round(Math.random()) === 1 ? 1 : -1;
    };
    return Sign;
}();
exports["default"] = Sign;
},{}],"src/local/mote.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var vector2_1 = __importDefault(require("../core/vector2"));
var sign_1 = __importDefault(require("../util/sign"));
var Mote = /** @class */function () {
    function Mote(position) {
        if (position === void 0) {
            position = new vector2_1["default"]();
        }
        var _this = this;
        this.update = function (bounds) {
            if (_this.position.x < 0) _this.direction.x = 1;
            if (_this.position.y < 0) _this.direction.y = 1;
            if (_this.position.x > bounds.x) _this.direction.x = -1;
            if (_this.position.y > bounds.y) _this.direction.y = -1;
            _this.position.x += _this.direction.x * 2;
            _this.position.y += _this.direction.y * 2;
        };
        this.render = function (context) {
            context.save();
            context.fillStyle = "#FFFFFF";
            context.globalAlpha = 1;
            context.beginPath();
            context.arc(_this.position.x, _this.position.y, 2, 0, Math.PI * 2);
            context.closePath();
            context.fill();
            context.restore();
        };
        this.position = position;
        this.direction = new vector2_1["default"](sign_1["default"].random(), sign_1["default"].random());
    }
    return Mote;
}();
exports.Mote = Mote;
},{"../core/vector2":"src/core/vector2.ts","../util/sign":"src/util/sign.ts"}],"src/core/layer.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var vector2_1 = __importDefault(require("./vector2"));
var Layer = /** @class */function () {
    function Layer(options) {
        this.particles = [];
        if (!options.factories.length) {
            throw Error("No particle factories provided.");
        }
        this.node = document.createElement("canvas");
        this.context = this.node.getContext("2d");
        this.node.style.position = "absolute";
        this.node.width = options.width;
        this.node.height = options.height;
        var i = 0;
        while (this.particles.length < options.density) {
            var factory = options.factories[i % options.factories.length];
            if (factory.frequency > Math.random()) {
                var particle = factory.make();
                this.particles.push(particle);
            }
            i++;
        }
    }
    Layer.prototype.update = function () {
        var bounds = new vector2_1["default"](this.node.width, this.node.height);
        this.particles.forEach(function (p) {
            return p.update(bounds);
        });
    };
    Layer.prototype.render = function () {
        var _this = this;
        this.context.fillStyle = "#000000";
        this.context.globalAlpha = 0.05;
        this.context.fillRect(0, 0, this.node.width, this.node.height);
        this.particles.forEach(function (p) {
            return p.render(_this.context);
        });
    };
    return Layer;
}();
exports.Layer = Layer;
},{"./vector2":"src/core/vector2.ts"}],"src/core/constructor.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var tealight_1 = __importDefault(require("tealight"));
var miniraf_1 = __importDefault(require("miniraf"));
var vector2_1 = __importDefault(require("./vector2"));
var mote_1 = require("../local/mote");
var layer_1 = require("./layer");
var Constructor = /** @class */function () {
    function Constructor(options) {
        var _this = this;
        this.layers = [];
        this.loop = function () {
            miniraf_1["default"].call(window, function () {
                _this.layers.forEach(function (layer) {
                    layer.update();
                    layer.render();
                });
                _this.loop();
            });
        };
        var root = tealight_1["default"](options.root)[0];
        if (!root) {
            throw Error("Instantiation failed. No valid root element provided.");
        }
        this.config = Object.assign({}, options, {
            root: root,
            width: window.innerWidth,
            height: window.innerHeight
        });
        for (var i = 0; i < this.config.depth; i++) {
            var layer = new layer_1.Layer({
                width: this.config.width,
                height: this.config.height,
                density: this.config.density / this.config.depth,
                factories: [{
                    make: function make() {
                        var origin = new vector2_1["default"](_this.config.width * Math.random(), _this.config.height * Math.random());
                        return new mote_1.Mote(origin);
                    },
                    frequency: 0.2
                }]
            });
            this.layers.push(layer);
            root.appendChild(layer.node);
        }
        window.addEventListener("resize", function () {
            miniraf_1["default"].call(window, function () {
                _this.config.width = window.innerWidth;
                _this.config.height = window.innerHeight;
                _this.layers.forEach(function (layer) {
                    layer.node.width = _this.config.width;
                    layer.node.height = _this.config.height;
                });
            });
        });
        this.loop();
    }
    return Constructor;
}();
exports["default"] = Constructor;
},{"tealight":"node_modules/tealight/dist/tealight.es.js","miniraf":"node_modules/miniraf/dist/miniraf.es.js","./vector2":"src/core/vector2.ts","../local/mote":"src/local/mote.ts","./layer":"src/core/layer.ts"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.scss":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
exports.__esModule = true;
var constructor_1 = __importDefault(require("./src/core/constructor"));
new constructor_1["default"]({
    root: "#js-main",
    density: 50,
    depth: 1
});
require("./index.scss");
},{"./src/core/constructor":"src/core/constructor.ts","./index.scss":"index.scss"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '60930' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/jlmakes.7672e923.map
