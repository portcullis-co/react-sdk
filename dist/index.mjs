function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { require_lib } from './chunk-KVIJIKN6.mjs';
import { __commonJS, __toESM } from './chunk-6DZX6EAA.mjs';
import * as React9 from 'react';
import React9__default, { useRef, useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import { CaretSortIcon, ChevronUpIcon, ChevronDownIcon, CheckIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as z from 'zod';
// ../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js
var require_PostgrestError = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js": function(exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var PostgrestError = /*#__PURE__*/ function(Error1) {
            "use strict";
            _inherits(PostgrestError, Error1);
            function PostgrestError(context) {
                _class_call_check(this, PostgrestError);
                var _this;
                _this = _call_super(this, PostgrestError, [
                    context.message
                ]);
                _this.name = "PostgrestError";
                _this.details = context.details;
                _this.hint = context.hint;
                _this.code = context.code;
                return _this;
            }
            return PostgrestError;
        }(_wrap_native_super(Error));
        exports.default = PostgrestError;
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js
var require_PostgrestBuilder = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js": function(exports) {
        var __importDefault = exports && exports.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var node_fetch_1 = __importDefault(require_lib());
        var PostgrestError_1 = __importDefault(require_PostgrestError());
        var PostgrestBuilder2 = /*#__PURE__*/ function() {
            "use strict";
            function PostgrestBuilder2(builder) {
                _class_call_check(this, PostgrestBuilder2);
                this.shouldThrowOnError = false;
                this.method = builder.method;
                this.url = builder.url;
                this.headers = builder.headers;
                this.schema = builder.schema;
                this.body = builder.body;
                this.shouldThrowOnError = builder.shouldThrowOnError;
                this.signal = builder.signal;
                this.isMaybeSingle = builder.isMaybeSingle;
                if (builder.fetch) {
                    this.fetch = builder.fetch;
                } else if (typeof fetch === "undefined") {
                    this.fetch = node_fetch_1.default;
                } else {
                    this.fetch = fetch;
                }
            }
            _create_class(PostgrestBuilder2, [
                {
                    /**
       * If there's an error with the query, throwOnError will reject the promise by
       * throwing the error instead of returning it as part of a successful response.
       *
       * {@link https://github.com/supabase/supabase-js/issues/92}
       */ key: "throwOnError",
                    value: function throwOnError() {
                        this.shouldThrowOnError = true;
                        return this;
                    }
                },
                {
                    /**
       * Set an HTTP header for the request.
       */ key: "setHeader",
                    value: function setHeader(name, value) {
                        this.headers = Object.assign({}, this.headers);
                        this.headers[name] = value;
                        return this;
                    }
                },
                {
                    key: "then",
                    value: function then(onfulfilled, onrejected) {
                        if (this.schema === void 0) ;
                        else if ([
                            "GET",
                            "HEAD"
                        ].includes(this.method)) {
                            this.headers["Accept-Profile"] = this.schema;
                        } else {
                            this.headers["Content-Profile"] = this.schema;
                        }
                        if (this.method !== "GET" && this.method !== "HEAD") {
                            this.headers["Content-Type"] = "application/json";
                        }
                        var _fetch = this.fetch;
                        var _this = this;
                        var res = _fetch(this.url.toString(), {
                            method: this.method,
                            headers: this.headers,
                            body: JSON.stringify(this.body),
                            signal: this.signal
                        }).then(/*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function(res2) {
                                var _a, _b, _c, error, data, count2, status, statusText, body, countHeader, contentRange, body1, postgrestResponse;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            error = null;
                                            data = null;
                                            count2 = null;
                                            status = res2.status;
                                            statusText = res2.statusText;
                                            if (!res2.ok) return [
                                                3,
                                                3
                                            ];
                                            if (!(_this.method !== "HEAD")) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                res2.text()
                                            ];
                                        case 1:
                                            body = _state.sent();
                                            if (body === "") ;
                                            else if (_this.headers["Accept"] === "text/csv") {
                                                data = body;
                                            } else if (_this.headers["Accept"] && _this.headers["Accept"].includes("application/vnd.pgrst.plan+text")) {
                                                data = body;
                                            } else {
                                                data = JSON.parse(body);
                                            }
                                            _state.label = 2;
                                        case 2:
                                            countHeader = (_a = _this.headers["Prefer"]) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
                                            contentRange = (_b = res2.headers.get("content-range")) === null || _b === void 0 ? void 0 : _b.split("/");
                                            if (countHeader && contentRange && contentRange.length > 1) {
                                                count2 = parseInt(contentRange[1]);
                                            }
                                            if (_this.isMaybeSingle && _this.method === "GET" && Array.isArray(data)) {
                                                if (data.length > 1) {
                                                    error = {
                                                        // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                                                        code: "PGRST116",
                                                        details: "Results contain ".concat(data.length, " rows, application/vnd.pgrst.object+json requires 1 row"),
                                                        hint: null,
                                                        message: "JSON object requested, multiple (or no) rows returned"
                                                    };
                                                    data = null;
                                                    count2 = null;
                                                    status = 406;
                                                    statusText = "Not Acceptable";
                                                } else if (data.length === 1) {
                                                    data = data[0];
                                                } else {
                                                    data = null;
                                                }
                                            }
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            return [
                                                4,
                                                res2.text()
                                            ];
                                        case 4:
                                            body1 = _state.sent();
                                            try {
                                                error = JSON.parse(body1);
                                                if (Array.isArray(error) && res2.status === 404) {
                                                    data = [];
                                                    error = null;
                                                    status = 200;
                                                    statusText = "OK";
                                                }
                                            } catch (_d) {
                                                if (res2.status === 404 && body1 === "") {
                                                    status = 204;
                                                    statusText = "No Content";
                                                } else {
                                                    error = {
                                                        message: body1
                                                    };
                                                }
                                            }
                                            if (error && _this.isMaybeSingle && ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0 ? void 0 : _c.includes("0 rows"))) {
                                                error = null;
                                                status = 200;
                                                statusText = "OK";
                                            }
                                            if (error && _this.shouldThrowOnError) {
                                                throw new PostgrestError_1.default(error);
                                            }
                                            _state.label = 5;
                                        case 5:
                                            postgrestResponse = {
                                                error: error,
                                                data: data,
                                                count: count2,
                                                status: status,
                                                statusText: statusText
                                            };
                                            return [
                                                2,
                                                postgrestResponse
                                            ];
                                    }
                                });
                            });
                            return function(res2) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        if (!this.shouldThrowOnError) {
                            res = res.catch(function(fetchError) {
                                var _a, _b, _c;
                                return {
                                    error: {
                                        message: "".concat((_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : "FetchError", ": ").concat(fetchError === null || fetchError === void 0 ? void 0 : fetchError.message),
                                        details: "".concat((_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ""),
                                        hint: "",
                                        code: "".concat((_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : "")
                                    },
                                    data: null,
                                    count: null,
                                    status: 0,
                                    statusText: ""
                                };
                            });
                        }
                        return res.then(onfulfilled, onrejected);
                    }
                }
            ]);
            return PostgrestBuilder2;
        }();
        exports.default = PostgrestBuilder2;
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js
var require_PostgrestTransformBuilder = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js": function(exports) {
        var __importDefault = exports && exports.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var PostgrestBuilder_1 = __importDefault(require_PostgrestBuilder());
        var PostgrestTransformBuilder2 = /*#__PURE__*/ function(_PostgrestBuilder_1_default) {
            "use strict";
            _inherits(PostgrestTransformBuilder2, _PostgrestBuilder_1_default);
            function PostgrestTransformBuilder2() {
                _class_call_check(this, PostgrestTransformBuilder2);
                return _call_super(this, PostgrestTransformBuilder2, arguments);
            }
            _create_class(PostgrestTransformBuilder2, [
                {
                    /**
       * Perform a SELECT on the query result.
       *
       * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
       * return modified rows. By calling this method, modified rows are returned in
       * `data`.
       *
       * @param columns - The columns to retrieve, separated by commas
       */ key: "select",
                    value: function select(columns) {
                        var quoted = false;
                        var cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map(function(c) {
                            if (/\s/.test(c) && !quoted) {
                                return "";
                            }
                            if (c === '"') {
                                quoted = !quoted;
                            }
                            return c;
                        }).join("");
                        this.url.searchParams.set("select", cleanedColumns);
                        if (this.headers["Prefer"]) {
                            this.headers["Prefer"] += ",";
                        }
                        this.headers["Prefer"] += "return=representation";
                        return this;
                    }
                },
                {
                    /**
       * Order the query result by `column`.
       *
       * You can call this method multiple times to order by multiple columns.
       *
       * You can order referenced tables, but it only affects the ordering of the
       * parent table if you use `!inner` in the query.
       *
       * @param column - The column to order by
       * @param options - Named parameters
       * @param options.ascending - If `true`, the result will be in ascending order
       * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
       * `null`s appear last.
       * @param options.referencedTable - Set this to order a referenced table by
       * its columns
       * @param options.foreignTable - Deprecated, use `options.referencedTable`
       * instead
       */ key: "order",
                    value: function order(column) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_ascending = _ref.ascending, ascending = _ref_ascending === void 0 ? true : _ref_ascending, nullsFirst = _ref.nullsFirst, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                        var key = referencedTable ? "".concat(referencedTable, ".order") : "order";
                        var existingOrder = this.url.searchParams.get(key);
                        this.url.searchParams.set(key, "".concat(existingOrder ? "".concat(existingOrder, ",") : "").concat(column, ".").concat(ascending ? "asc" : "desc").concat(nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"));
                        return this;
                    }
                },
                {
                    /**
       * Limit the query result by `count`.
       *
       * @param count - The maximum number of rows to return
       * @param options - Named parameters
       * @param options.referencedTable - Set this to limit rows of referenced
       * tables instead of the parent table
       * @param options.foreignTable - Deprecated, use `options.referencedTable`
       * instead
       */ key: "limit",
                    value: function limit(count2) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                        var key = typeof referencedTable === "undefined" ? "limit" : "".concat(referencedTable, ".limit");
                        this.url.searchParams.set(key, "".concat(count2));
                        return this;
                    }
                },
                {
                    /**
       * Limit the query result by starting at an offset `from` and ending at the offset `to`.
       * Only records within this range are returned.
       * This respects the query order and if there is no order clause the range could behave unexpectedly.
       * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
       * and fourth rows of the query.
       *
       * @param from - The starting index from which to limit the result
       * @param to - The last index to which to limit the result
       * @param options - Named parameters
       * @param options.referencedTable - Set this to limit rows of referenced
       * tables instead of the parent table
       * @param options.foreignTable - Deprecated, use `options.referencedTable`
       * instead
       */ key: "range",
                    value: function range(from, to) {
                        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                        var keyOffset = typeof referencedTable === "undefined" ? "offset" : "".concat(referencedTable, ".offset");
                        var keyLimit = typeof referencedTable === "undefined" ? "limit" : "".concat(referencedTable, ".limit");
                        this.url.searchParams.set(keyOffset, "".concat(from));
                        this.url.searchParams.set(keyLimit, "".concat(to - from + 1));
                        return this;
                    }
                },
                {
                    /**
       * Set the AbortSignal for the fetch request.
       *
       * @param signal - The AbortSignal to use for the fetch request
       */ key: "abortSignal",
                    value: function abortSignal(signal) {
                        this.signal = signal;
                        return this;
                    }
                },
                {
                    /**
       * Return `data` as a single object instead of an array of objects.
       *
       * Query result must be one row (e.g. using `.limit(1)`), otherwise this
       * returns an error.
       */ key: "single",
                    value: function single() {
                        this.headers["Accept"] = "application/vnd.pgrst.object+json";
                        return this;
                    }
                },
                {
                    /**
       * Return `data` as a single object instead of an array of objects.
       *
       * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
       * this returns an error.
       */ key: "maybeSingle",
                    value: function maybeSingle() {
                        if (this.method === "GET") {
                            this.headers["Accept"] = "application/json";
                        } else {
                            this.headers["Accept"] = "application/vnd.pgrst.object+json";
                        }
                        this.isMaybeSingle = true;
                        return this;
                    }
                },
                {
                    /**
       * Return `data` as a string in CSV format.
       */ key: "csv",
                    value: function csv() {
                        this.headers["Accept"] = "text/csv";
                        return this;
                    }
                },
                {
                    /**
       * Return `data` as an object in [GeoJSON](https://geojson.org) format.
       */ key: "geojson",
                    value: function geojson() {
                        this.headers["Accept"] = "application/geo+json";
                        return this;
                    }
                },
                {
                    /**
       * Return `data` as the EXPLAIN plan for the query.
       *
       * You need to enable the
       * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
       * setting before using this method.
       *
       * @param options - Named parameters
       *
       * @param options.analyze - If `true`, the query will be executed and the
       * actual run time will be returned
       *
       * @param options.verbose - If `true`, the query identifier will be returned
       * and `data` will include the output columns of the query
       *
       * @param options.settings - If `true`, include information on configuration
       * parameters that affect query planning
       *
       * @param options.buffers - If `true`, include information on buffer usage
       *
       * @param options.wal - If `true`, include information on WAL record generation
       *
       * @param options.format - The format of the output, can be `"text"` (default)
       * or `"json"`
       */ key: "explain",
                    value: function explain() {
                        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_analyze = _ref.analyze, analyze = _ref_analyze === void 0 ? false : _ref_analyze, _ref_verbose = _ref.verbose, verbose = _ref_verbose === void 0 ? false : _ref_verbose, _ref_settings = _ref.settings, settings = _ref_settings === void 0 ? false : _ref_settings, _ref_buffers = _ref.buffers, buffers = _ref_buffers === void 0 ? false : _ref_buffers, _ref_wal = _ref.wal, wal = _ref_wal === void 0 ? false : _ref_wal, _ref_format = _ref.format, format = _ref_format === void 0 ? "text" : _ref_format;
                        var _a;
                        var options = [
                            analyze ? "analyze" : null,
                            verbose ? "verbose" : null,
                            settings ? "settings" : null,
                            buffers ? "buffers" : null,
                            wal ? "wal" : null
                        ].filter(Boolean).join("|");
                        var forMediatype = (_a = this.headers["Accept"]) !== null && _a !== void 0 ? _a : "application/json";
                        this.headers["Accept"] = "application/vnd.pgrst.plan+".concat(format, '; for="').concat(forMediatype, '"; options=').concat(options, ";");
                        if (format === "json") return this;
                        else return this;
                    }
                },
                {
                    /**
       * Rollback the query.
       *
       * `data` will still be returned, but the query is not committed.
       */ key: "rollback",
                    value: function rollback() {
                        var _a;
                        if (((_a = this.headers["Prefer"]) !== null && _a !== void 0 ? _a : "").trim().length > 0) {
                            this.headers["Prefer"] += ",tx=rollback";
                        } else {
                            this.headers["Prefer"] = "tx=rollback";
                        }
                        return this;
                    }
                },
                {
                    /**
       * Override the type of the returned `data`.
       *
       * @typeParam NewResult - The new result type to override with
       */ key: "returns",
                    value: function returns() {
                        return this;
                    }
                }
            ]);
            return PostgrestTransformBuilder2;
        }(PostgrestBuilder_1.default);
        exports.default = PostgrestTransformBuilder2;
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js
var require_PostgrestFilterBuilder = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js": function(exports) {
        var __importDefault = exports && exports.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var PostgrestTransformBuilder_1 = __importDefault(require_PostgrestTransformBuilder());
        var PostgrestFilterBuilder2 = /*#__PURE__*/ function(_PostgrestTransformBuilder_1_default) {
            "use strict";
            _inherits(PostgrestFilterBuilder2, _PostgrestTransformBuilder_1_default);
            function PostgrestFilterBuilder2() {
                _class_call_check(this, PostgrestFilterBuilder2);
                return _call_super(this, PostgrestFilterBuilder2, arguments);
            }
            _create_class(PostgrestFilterBuilder2, [
                {
                    /**
       * Match only rows where `column` is equal to `value`.
       *
       * To check if the value of `column` is NULL, you should use `.is()` instead.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "eq",
                    value: function eq(column, value) {
                        this.url.searchParams.append(column, "eq.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` is not equal to `value`.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "neq",
                    value: function neq(column, value) {
                        this.url.searchParams.append(column, "neq.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` is greater than `value`.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "gt",
                    value: function gt(column, value) {
                        this.url.searchParams.append(column, "gt.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` is greater than or equal to `value`.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "gte",
                    value: function gte(column, value) {
                        this.url.searchParams.append(column, "gte.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` is less than `value`.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "lt",
                    value: function lt(column, value) {
                        this.url.searchParams.append(column, "lt.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` is less than or equal to `value`.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "lte",
                    value: function lte(column, value) {
                        this.url.searchParams.append(column, "lte.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` matches `pattern` case-sensitively.
       *
       * @param column - The column to filter on
       * @param pattern - The pattern to match with
       */ key: "like",
                    value: function like(column, pattern) {
                        this.url.searchParams.append(column, "like.".concat(pattern));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` matches all of `patterns` case-sensitively.
       *
       * @param column - The column to filter on
       * @param patterns - The patterns to match with
       */ key: "likeAllOf",
                    value: function likeAllOf(column, patterns) {
                        this.url.searchParams.append(column, "like(all).{".concat(patterns.join(","), "}"));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` matches any of `patterns` case-sensitively.
       *
       * @param column - The column to filter on
       * @param patterns - The patterns to match with
       */ key: "likeAnyOf",
                    value: function likeAnyOf(column, patterns) {
                        this.url.searchParams.append(column, "like(any).{".concat(patterns.join(","), "}"));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` matches `pattern` case-insensitively.
       *
       * @param column - The column to filter on
       * @param pattern - The pattern to match with
       */ key: "ilike",
                    value: function ilike(column, pattern) {
                        this.url.searchParams.append(column, "ilike.".concat(pattern));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` matches all of `patterns` case-insensitively.
       *
       * @param column - The column to filter on
       * @param patterns - The patterns to match with
       */ key: "ilikeAllOf",
                    value: function ilikeAllOf(column, patterns) {
                        this.url.searchParams.append(column, "ilike(all).{".concat(patterns.join(","), "}"));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` matches any of `patterns` case-insensitively.
       *
       * @param column - The column to filter on
       * @param patterns - The patterns to match with
       */ key: "ilikeAnyOf",
                    value: function ilikeAnyOf(column, patterns) {
                        this.url.searchParams.append(column, "ilike(any).{".concat(patterns.join(","), "}"));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` IS `value`.
       *
       * For non-boolean columns, this is only relevant for checking if the value of
       * `column` is NULL by setting `value` to `null`.
       *
       * For boolean columns, you can also set `value` to `true` or `false` and it
       * will behave the same way as `.eq()`.
       *
       * @param column - The column to filter on
       * @param value - The value to filter with
       */ key: "is",
                    value: function is(column, value) {
                        this.url.searchParams.append(column, "is.".concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where `column` is included in the `values` array.
       *
       * @param column - The column to filter on
       * @param values - The values array to filter with
       */ key: "in",
                    value: function _in(column, values) {
                        var cleanedValues = Array.from(new Set(values)).map(function(s) {
                            if (typeof s === "string" && new RegExp("[,()]").test(s)) return '"'.concat(s, '"');
                            else return "".concat(s);
                        }).join(",");
                        this.url.searchParams.append(column, "in.(".concat(cleanedValues, ")"));
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for jsonb, array, and range columns. Match only rows where
       * `column` contains every element appearing in `value`.
       *
       * @param column - The jsonb, array, or range column to filter on
       * @param value - The jsonb, array, or range value to filter with
       */ key: "contains",
                    value: function contains(column, value) {
                        if (typeof value === "string") {
                            this.url.searchParams.append(column, "cs.".concat(value));
                        } else if (Array.isArray(value)) {
                            this.url.searchParams.append(column, "cs.{".concat(value.join(","), "}"));
                        } else {
                            this.url.searchParams.append(column, "cs.".concat(JSON.stringify(value)));
                        }
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for jsonb, array, and range columns. Match only rows where
       * every element appearing in `column` is contained by `value`.
       *
       * @param column - The jsonb, array, or range column to filter on
       * @param value - The jsonb, array, or range value to filter with
       */ key: "containedBy",
                    value: function containedBy(column, value) {
                        if (typeof value === "string") {
                            this.url.searchParams.append(column, "cd.".concat(value));
                        } else if (Array.isArray(value)) {
                            this.url.searchParams.append(column, "cd.{".concat(value.join(","), "}"));
                        } else {
                            this.url.searchParams.append(column, "cd.".concat(JSON.stringify(value)));
                        }
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for range columns. Match only rows where every element in
       * `column` is greater than any element in `range`.
       *
       * @param column - The range column to filter on
       * @param range - The range to filter with
       */ key: "rangeGt",
                    value: function rangeGt(column, range) {
                        this.url.searchParams.append(column, "sr.".concat(range));
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for range columns. Match only rows where every element in
       * `column` is either contained in `range` or greater than any element in
       * `range`.
       *
       * @param column - The range column to filter on
       * @param range - The range to filter with
       */ key: "rangeGte",
                    value: function rangeGte(column, range) {
                        this.url.searchParams.append(column, "nxl.".concat(range));
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for range columns. Match only rows where every element in
       * `column` is less than any element in `range`.
       *
       * @param column - The range column to filter on
       * @param range - The range to filter with
       */ key: "rangeLt",
                    value: function rangeLt(column, range) {
                        this.url.searchParams.append(column, "sl.".concat(range));
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for range columns. Match only rows where every element in
       * `column` is either contained in `range` or less than any element in
       * `range`.
       *
       * @param column - The range column to filter on
       * @param range - The range to filter with
       */ key: "rangeLte",
                    value: function rangeLte(column, range) {
                        this.url.searchParams.append(column, "nxr.".concat(range));
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for range columns. Match only rows where `column` is
       * mutually exclusive to `range` and there can be no element between the two
       * ranges.
       *
       * @param column - The range column to filter on
       * @param range - The range to filter with
       */ key: "rangeAdjacent",
                    value: function rangeAdjacent(column, range) {
                        this.url.searchParams.append(column, "adj.".concat(range));
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for array and range columns. Match only rows where
       * `column` and `value` have an element in common.
       *
       * @param column - The array or range column to filter on
       * @param value - The array or range value to filter with
       */ key: "overlaps",
                    value: function overlaps(column, value) {
                        if (typeof value === "string") {
                            this.url.searchParams.append(column, "ov.".concat(value));
                        } else {
                            this.url.searchParams.append(column, "ov.{".concat(value.join(","), "}"));
                        }
                        return this;
                    }
                },
                {
                    /**
       * Only relevant for text and tsvector columns. Match only rows where
       * `column` matches the query string in `query`.
       *
       * @param column - The text or tsvector column to filter on
       * @param query - The query text to match with
       * @param options - Named parameters
       * @param options.config - The text search configuration to use
       * @param options.type - Change how the `query` text is interpreted
       */ key: "textSearch",
                    value: function textSearch(column, query) {
                        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, config = _ref.config, type = _ref.type;
                        var typePart = "";
                        if (type === "plain") {
                            typePart = "pl";
                        } else if (type === "phrase") {
                            typePart = "ph";
                        } else if (type === "websearch") {
                            typePart = "w";
                        }
                        var configPart = config === void 0 ? "" : "(".concat(config, ")");
                        this.url.searchParams.append(column, "".concat(typePart, "fts").concat(configPart, ".").concat(query));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows where each column in `query` keys is equal to its
       * associated value. Shorthand for multiple `.eq()`s.
       *
       * @param query - The object to filter with, with column names as keys mapped
       * to their filter values
       */ key: "match",
                    value: function match(query) {
                        var _this = this;
                        Object.entries(query).forEach(function(param) {
                            var _param = _sliced_to_array(param, 2), column = _param[0], value = _param[1];
                            _this.url.searchParams.append(column, "eq.".concat(value));
                        });
                        return this;
                    }
                },
                {
                    /**
       * Match only rows which doesn't satisfy the filter.
       *
       * Unlike most filters, `opearator` and `value` are used as-is and need to
       * follow [PostgREST
       * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
       * to make sure they are properly sanitized.
       *
       * @param column - The column to filter on
       * @param operator - The operator to be negated to filter with, following
       * PostgREST syntax
       * @param value - The value to filter with, following PostgREST syntax
       */ key: "not",
                    value: function not(column, operator, value) {
                        this.url.searchParams.append(column, "not.".concat(operator, ".").concat(value));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows which satisfy at least one of the filters.
       *
       * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
       * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
       * to make sure it's properly sanitized.
       *
       * It's currently not possible to do an `.or()` filter across multiple tables.
       *
       * @param filters - The filters to use, following PostgREST syntax
       * @param options - Named parameters
       * @param options.referencedTable - Set this to filter on referenced tables
       * instead of the parent table
       * @param options.foreignTable - Deprecated, use `referencedTable` instead
       */ key: "or",
                    value: function or(filters) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, foreignTable = _ref.foreignTable, _ref_referencedTable = _ref.referencedTable, referencedTable = _ref_referencedTable === void 0 ? foreignTable : _ref_referencedTable;
                        var key = referencedTable ? "".concat(referencedTable, ".or") : "or";
                        this.url.searchParams.append(key, "(".concat(filters, ")"));
                        return this;
                    }
                },
                {
                    /**
       * Match only rows which satisfy the filter. This is an escape hatch - you
       * should use the specific filter methods wherever possible.
       *
       * Unlike most filters, `opearator` and `value` are used as-is and need to
       * follow [PostgREST
       * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
       * to make sure they are properly sanitized.
       *
       * @param column - The column to filter on
       * @param operator - The operator to filter with, following PostgREST syntax
       * @param value - The value to filter with, following PostgREST syntax
       */ key: "filter",
                    value: function filter(column, operator, value) {
                        this.url.searchParams.append(column, "".concat(operator, ".").concat(value));
                        return this;
                    }
                }
            ]);
            return PostgrestFilterBuilder2;
        }(PostgrestTransformBuilder_1.default);
        exports.default = PostgrestFilterBuilder2;
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js
var require_PostgrestQueryBuilder = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js": function(exports) {
        var __importDefault = exports && exports.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var PostgrestFilterBuilder_1 = __importDefault(require_PostgrestFilterBuilder());
        var PostgrestQueryBuilder2 = /*#__PURE__*/ function() {
            "use strict";
            function PostgrestQueryBuilder2(url, param) {
                var _param_headers = param.headers, headers = _param_headers === void 0 ? {} : _param_headers, schema = param.schema, fetch2 = param.fetch;
                _class_call_check(this, PostgrestQueryBuilder2);
                this.url = url;
                this.headers = headers;
                this.schema = schema;
                this.fetch = fetch2;
            }
            _create_class(PostgrestQueryBuilder2, [
                {
                    /**
       * Perform a SELECT query on the table or view.
       *
       * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
       *
       * @param options - Named parameters
       *
       * @param options.head - When set to `true`, `data` will not be returned.
       * Useful if you only need the count.
       *
       * @param options.count - Count algorithm to use to count rows in the table or view.
       *
       * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
       * hood.
       *
       * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
       * statistics under the hood.
       *
       * `"estimated"`: Uses exact count for low numbers and planned count for high
       * numbers.
       */ key: "select",
                    value: function select(columns) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, tmp = _ref.head, head2 = tmp === void 0 ? false : tmp, count2 = _ref.count;
                        var method = head2 ? "HEAD" : "GET";
                        var quoted = false;
                        var cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map(function(c) {
                            if (/\s/.test(c) && !quoted) {
                                return "";
                            }
                            if (c === '"') {
                                quoted = !quoted;
                            }
                            return c;
                        }).join("");
                        this.url.searchParams.set("select", cleanedColumns);
                        if (count2) {
                            this.headers["Prefer"] = "count=".concat(count2);
                        }
                        return new PostgrestFilterBuilder_1.default({
                            method: method,
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            fetch: this.fetch,
                            allowEmpty: false
                        });
                    }
                },
                {
                    /**
       * Perform an INSERT into the table or view.
       *
       * By default, inserted rows are not returned. To return it, chain the call
       * with `.select()`.
       *
       * @param values - The values to insert. Pass an object to insert a single row
       * or an array to insert multiple rows.
       *
       * @param options - Named parameters
       *
       * @param options.count - Count algorithm to use to count inserted rows.
       *
       * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
       * hood.
       *
       * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
       * statistics under the hood.
       *
       * `"estimated"`: Uses exact count for low numbers and planned count for high
       * numbers.
       *
       * @param options.defaultToNull - Make missing fields default to `null`.
       * Otherwise, use the default value for the column. Only applies for bulk
       * inserts.
       */ key: "insert",
                    value: function insert(values) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, count2 = _ref.count, _ref_defaultToNull = _ref.defaultToNull, defaultToNull = _ref_defaultToNull === void 0 ? true : _ref_defaultToNull;
                        var method = "POST";
                        var prefersHeaders = [];
                        if (this.headers["Prefer"]) {
                            prefersHeaders.push(this.headers["Prefer"]);
                        }
                        if (count2) {
                            prefersHeaders.push("count=".concat(count2));
                        }
                        if (!defaultToNull) {
                            prefersHeaders.push("missing=default");
                        }
                        this.headers["Prefer"] = prefersHeaders.join(",");
                        if (Array.isArray(values)) {
                            var columns = values.reduce(function(acc, x) {
                                return acc.concat(Object.keys(x));
                            }, []);
                            if (columns.length > 0) {
                                var uniqueColumns = _to_consumable_array(new Set(columns)).map(function(column) {
                                    return '"'.concat(column, '"');
                                });
                                this.url.searchParams.set("columns", uniqueColumns.join(","));
                            }
                        }
                        return new PostgrestFilterBuilder_1.default({
                            method: method,
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            body: values,
                            fetch: this.fetch,
                            allowEmpty: false
                        });
                    }
                },
                {
                    /**
       * Perform an UPSERT on the table or view. Depending on the column(s) passed
       * to `onConflict`, `.upsert()` allows you to perform the equivalent of
       * `.insert()` if a row with the corresponding `onConflict` columns doesn't
       * exist, or if it does exist, perform an alternative action depending on
       * `ignoreDuplicates`.
       *
       * By default, upserted rows are not returned. To return it, chain the call
       * with `.select()`.
       *
       * @param values - The values to upsert with. Pass an object to upsert a
       * single row or an array to upsert multiple rows.
       *
       * @param options - Named parameters
       *
       * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
       * duplicate rows are determined. Two rows are duplicates if all the
       * `onConflict` columns are equal.
       *
       * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
       * `false`, duplicate rows are merged with existing rows.
       *
       * @param options.count - Count algorithm to use to count upserted rows.
       *
       * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
       * hood.
       *
       * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
       * statistics under the hood.
       *
       * `"estimated"`: Uses exact count for low numbers and planned count for high
       * numbers.
       *
       * @param options.defaultToNull - Make missing fields default to `null`.
       * Otherwise, use the default value for the column. This only applies when
       * inserting new rows, not when merging with existing rows under
       * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
       */ key: "upsert",
                    value: function upsert(values) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, onConflict = _ref.onConflict, _ref_ignoreDuplicates = _ref.ignoreDuplicates, ignoreDuplicates = _ref_ignoreDuplicates === void 0 ? false : _ref_ignoreDuplicates, count2 = _ref.count, _ref_defaultToNull = _ref.defaultToNull, defaultToNull = _ref_defaultToNull === void 0 ? true : _ref_defaultToNull;
                        var method = "POST";
                        var prefersHeaders = [
                            "resolution=".concat(ignoreDuplicates ? "ignore" : "merge", "-duplicates")
                        ];
                        if (onConflict !== void 0) this.url.searchParams.set("on_conflict", onConflict);
                        if (this.headers["Prefer"]) {
                            prefersHeaders.push(this.headers["Prefer"]);
                        }
                        if (count2) {
                            prefersHeaders.push("count=".concat(count2));
                        }
                        if (!defaultToNull) {
                            prefersHeaders.push("missing=default");
                        }
                        this.headers["Prefer"] = prefersHeaders.join(",");
                        if (Array.isArray(values)) {
                            var columns = values.reduce(function(acc, x) {
                                return acc.concat(Object.keys(x));
                            }, []);
                            if (columns.length > 0) {
                                var uniqueColumns = _to_consumable_array(new Set(columns)).map(function(column) {
                                    return '"'.concat(column, '"');
                                });
                                this.url.searchParams.set("columns", uniqueColumns.join(","));
                            }
                        }
                        return new PostgrestFilterBuilder_1.default({
                            method: method,
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            body: values,
                            fetch: this.fetch,
                            allowEmpty: false
                        });
                    }
                },
                {
                    /**
       * Perform an UPDATE on the table or view.
       *
       * By default, updated rows are not returned. To return it, chain the call
       * with `.select()` after filters.
       *
       * @param values - The values to update with
       *
       * @param options - Named parameters
       *
       * @param options.count - Count algorithm to use to count updated rows.
       *
       * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
       * hood.
       *
       * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
       * statistics under the hood.
       *
       * `"estimated"`: Uses exact count for low numbers and planned count for high
       * numbers.
       */ key: "update",
                    value: function update(values) {
                        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, count2 = _ref.count;
                        var method = "PATCH";
                        var prefersHeaders = [];
                        if (this.headers["Prefer"]) {
                            prefersHeaders.push(this.headers["Prefer"]);
                        }
                        if (count2) {
                            prefersHeaders.push("count=".concat(count2));
                        }
                        this.headers["Prefer"] = prefersHeaders.join(",");
                        return new PostgrestFilterBuilder_1.default({
                            method: method,
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            body: values,
                            fetch: this.fetch,
                            allowEmpty: false
                        });
                    }
                },
                {
                    /**
       * Perform a DELETE on the table or view.
       *
       * By default, deleted rows are not returned. To return it, chain the call
       * with `.select()` after filters.
       *
       * @param options - Named parameters
       *
       * @param options.count - Count algorithm to use to count deleted rows.
       *
       * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
       * hood.
       *
       * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
       * statistics under the hood.
       *
       * `"estimated"`: Uses exact count for low numbers and planned count for high
       * numbers.
       */ key: "delete",
                    value: function _delete() {
                        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, count2 = _ref.count;
                        var method = "DELETE";
                        var prefersHeaders = [];
                        if (count2) {
                            prefersHeaders.push("count=".concat(count2));
                        }
                        if (this.headers["Prefer"]) {
                            prefersHeaders.unshift(this.headers["Prefer"]);
                        }
                        this.headers["Prefer"] = prefersHeaders.join(",");
                        return new PostgrestFilterBuilder_1.default({
                            method: method,
                            url: this.url,
                            headers: this.headers,
                            schema: this.schema,
                            fetch: this.fetch,
                            allowEmpty: false
                        });
                    }
                }
            ]);
            return PostgrestQueryBuilder2;
        }();
        exports.default = PostgrestQueryBuilder2;
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/version.js
var require_version = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/version.js": function(exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.version = void 0;
        exports.version = "0.0.0-automated";
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/constants.js
var require_constants = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/constants.js": function(exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DEFAULT_HEADERS = void 0;
        var version_1 = require_version();
        exports.DEFAULT_HEADERS = {
            "X-Client-Info": "postgrest-js/".concat(version_1.version)
        };
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js
var require_PostgrestClient = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js": function(exports) {
        var __importDefault = exports && exports.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var PostgrestQueryBuilder_1 = __importDefault(require_PostgrestQueryBuilder());
        var PostgrestFilterBuilder_1 = __importDefault(require_PostgrestFilterBuilder());
        var constants_1 = require_constants();
        var PostgrestClient2 = /*#__PURE__*/ function() {
            "use strict";
            function _PostgrestClient(url) {
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_headers = _ref.headers, headers = _ref_headers === void 0 ? {} : _ref_headers, schema = _ref.schema, fetch2 = _ref.fetch;
                _class_call_check(this, _PostgrestClient);
                this.url = url;
                this.headers = Object.assign(Object.assign({}, constants_1.DEFAULT_HEADERS), headers);
                this.schemaName = schema;
                this.fetch = fetch2;
            }
            _create_class(_PostgrestClient, [
                {
                    /**
       * Perform a query on a table or a view.
       *
       * @param relation - The table or view name to query
       */ key: "from",
                    value: function from(relation) {
                        var url = new URL("".concat(this.url, "/").concat(relation));
                        return new PostgrestQueryBuilder_1.default(url, {
                            headers: Object.assign({}, this.headers),
                            schema: this.schemaName,
                            fetch: this.fetch
                        });
                    }
                },
                {
                    /**
       * Select a schema to query or perform an function (rpc) call.
       *
       * The schema needs to be on the list of exposed schemas inside Supabase.
       *
       * @param schema - The schema to query
       */ key: "schema",
                    value: function schema(schema) {
                        return new _PostgrestClient(this.url, {
                            headers: this.headers,
                            schema: schema,
                            fetch: this.fetch
                        });
                    }
                },
                {
                    /**
       * Perform a function call.
       *
       * @param fn - The function name to call
       * @param args - The arguments to pass to the function call
       * @param options - Named parameters
       * @param options.head - When set to `true`, `data` will not be returned.
       * Useful if you only need the count.
       * @param options.get - When set to `true`, the function will be called with
       * read-only access mode.
       * @param options.count - Count algorithm to use to count rows returned by the
       * function. Only applicable for [set-returning
       * functions](https://www.postgresql.org/docs/current/functions-srf.html).
       *
       * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
       * hood.
       *
       * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
       * statistics under the hood.
       *
       * `"estimated"`: Uses exact count for low numbers and planned count for high
       * numbers.
       */ key: "rpc",
                    value: function rpc(fn) {
                        var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, tmp = _ref.head, head2 = tmp === void 0 ? false : tmp, tmp1 = _ref.get, get2 = tmp1 === void 0 ? false : tmp1, count2 = _ref.count;
                        var method;
                        var url = new URL("".concat(this.url, "/rpc/").concat(fn));
                        var body;
                        if (head2 || get2) {
                            method = head2 ? "HEAD" : "GET";
                            Object.entries(args).filter(function(param) {
                                var _param = _sliced_to_array(param, 2), _ = _param[0], value = _param[1];
                                return value !== void 0;
                            }).map(function(param) {
                                var _param = _sliced_to_array(param, 2), name = _param[0], value = _param[1];
                                return [
                                    name,
                                    Array.isArray(value) ? "{".concat(value.join(","), "}") : "".concat(value)
                                ];
                            }).forEach(function(param) {
                                var _param = _sliced_to_array(param, 2), name = _param[0], value = _param[1];
                                url.searchParams.append(name, value);
                            });
                        } else {
                            method = "POST";
                            body = args;
                        }
                        var headers = Object.assign({}, this.headers);
                        if (count2) {
                            headers["Prefer"] = "count=".concat(count2);
                        }
                        return new PostgrestFilterBuilder_1.default({
                            method: method,
                            url: url,
                            headers: headers,
                            schema: this.schemaName,
                            body: body,
                            fetch: this.fetch,
                            allowEmpty: false
                        });
                    }
                }
            ]);
            return _PostgrestClient;
        }();
        exports.default = PostgrestClient2;
    }
});
// ../node_modules/@supabase/postgrest-js/dist/cjs/index.js
var require_cjs = __commonJS({
    "../node_modules/@supabase/postgrest-js/dist/cjs/index.js": function(exports) {
        var __importDefault = exports && exports.__importDefault || function(mod) {
            return mod && mod.__esModule ? mod : {
                "default": mod
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
        var PostgrestClient_1 = __importDefault(require_PostgrestClient());
        exports.PostgrestClient = PostgrestClient_1.default;
        var PostgrestQueryBuilder_1 = __importDefault(require_PostgrestQueryBuilder());
        exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
        var PostgrestFilterBuilder_1 = __importDefault(require_PostgrestFilterBuilder());
        exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
        var PostgrestTransformBuilder_1 = __importDefault(require_PostgrestTransformBuilder());
        exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
        var PostgrestBuilder_1 = __importDefault(require_PostgrestBuilder());
        exports.PostgrestBuilder = PostgrestBuilder_1.default;
        var PostgrestError_1 = __importDefault(require_PostgrestError());
        exports.PostgrestError = PostgrestError_1.default;
        exports.default = {
            PostgrestClient: PostgrestClient_1.default,
            PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
            PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
            PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
            PostgrestBuilder: PostgrestBuilder_1.default,
            PostgrestError: PostgrestError_1.default
        };
    }
});
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
// src/components/ui/card.tsx
var Card = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("div", _object_spread({
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className)
    }, props));
});
Card.displayName = "Card";
var CardHeader = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("h3", _object_spread({
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("p", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className)
    }, props));
});
CardFooter.displayName = "CardFooter";
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
var Button = React9.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React9.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
var Input = React9.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ React9.createElement("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(LabelPrimitive.Root, _object_spread({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label.displayName = LabelPrimitive.Root.displayName;
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React9.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.Trigger, _object_spread({
        ref: ref,
        className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    }, props), children, /* @__PURE__ */ React9.createElement(SelectPrimitive.Icon, {
        asChild: true
    }, /* @__PURE__ */ React9.createElement(CaretSortIcon, {
        className: "h-4 w-4 opacity-50"
    })));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.ScrollUpButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React9.createElement(ChevronUpIcon, null));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.ScrollDownButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React9.createElement(ChevronDownIcon, null));
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React9.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, props = _object_without_properties(_param, [
        "className",
        "children",
        "position"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React9.createElement(SelectPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
        position: position
    }, props), /* @__PURE__ */ React9.createElement(SelectScrollUpButton, null), /* @__PURE__ */ React9.createElement(SelectPrimitive.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
    }, children), /* @__PURE__ */ React9.createElement(SelectScrollDownButton, null)));
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", className)
    }, props));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React9.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /* @__PURE__ */ React9.createElement("span", {
        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React9.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(CheckIcon, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React9.createElement(SelectPrimitive.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React9.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9.createElement(SelectPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = function(toastId) {
    if (toastTimeouts.has(toastId)) {
        return;
    }
    var timeout = setTimeout(function() {
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
var reducer = function(state, action) {
    switch(action.type){
        case "ADD_TOAST":
            return _object_spread_props(_object_spread({}, state), {
                toasts: [
                    action.toast
                ].concat(_to_consumable_array(state.toasts)).slice(0, TOAST_LIMIT)
            });
        case "UPDATE_TOAST":
            return _object_spread_props(_object_spread({}, state), {
                toasts: state.toasts.map(function(t) {
                    return t.id === action.toast.id ? _object_spread({}, t, action.toast) : t;
                })
            });
        case "DISMISS_TOAST":
            {
                var toastId = action.toastId;
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach(function(toast2) {
                        addToRemoveQueue(toast2.id);
                    });
                }
                return _object_spread_props(_object_spread({}, state), {
                    toasts: state.toasts.map(function(t) {
                        return t.id === toastId || toastId === void 0 ? _object_spread_props(_object_spread({}, t), {
                            open: false
                        }) : t;
                    })
                });
            }
        case "REMOVE_TOAST":
            if (action.toastId === void 0) {
                return _object_spread_props(_object_spread({}, state), {
                    toasts: []
                });
            }
            return _object_spread_props(_object_spread({}, state), {
                toasts: state.toasts.filter(function(t) {
                    return t.id !== action.toastId;
                })
            });
    }
};
var listeners = [];
var memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach(function(listener) {
        listener(memoryState);
    });
}
function toast(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    var id = genId();
    var update = function(props2) {
        return dispatch({
            type: "UPDATE_TOAST",
            toast: _object_spread_props(_object_spread({}, props2), {
                id: id
            })
        });
    };
    var dismiss = function() {
        return dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    };
    dispatch({
        type: "ADD_TOAST",
        toast: _object_spread_props(_object_spread({}, props), {
            id: id,
            open: true,
            onOpenChange: function(open) {
                if (!open) dismiss();
            }
        })
    });
    return {
        id: id,
        dismiss: dismiss,
        update: update
    };
}
function useToast() {
    var _React9_useState = _sliced_to_array(React9.useState(memoryState), 2), state = _React9_useState[0], setState = _React9_useState[1];
    React9.useEffect(function() {
        listeners.push(setState);
        return function() {
            var index2 = listeners.indexOf(setState);
            if (index2 > -1) {
                listeners.splice(index2, 1);
            }
        };
    }, [
        state
    ]);
    return _object_spread_props(_object_spread({}, state), {
        toast: toast,
        dismiss: function(toastId) {
            return dispatch({
                type: "DISMISS_TOAST",
                toastId: toastId
            });
        }
    });
}
// src/utils/api.ts
var PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || "https://portcullis-app.fly.dev";
function createExport(apiKey, payload) {
    return _createExport.apply(this, arguments);
}
function _createExport() {
    _createExport = _async_to_generator(function(apiKey, payload) {
        var response, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch("".concat(PORTCULLIS_NEXT_URL, "/api/exports"), {
                            method: "POST",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/json",
                                "x-api-key": apiKey,
                                "Origin": window.location.origin
                            },
                            body: JSON.stringify(payload)
                        })
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        4,
                        response.json()
                    ];
                case 2:
                    data = _state.sent();
                    if (!response.ok) {
                        throw new Error(data.error || "Failed to create export");
                    }
                    return [
                        2,
                        data
                    ];
            }
        });
    });
    return _createExport.apply(this, arguments);
}
function Skeleton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React9__default.createElement("div", _object_spread({
        className: cn("animate-pulse rounded-md bg-muted", className)
    }, props));
}
var PortcullisTag = function() {
    return /* @__PURE__ */ React9__default.createElement("div", {
        className: "border-t border-border/40"
    }, /* @__PURE__ */ React9__default.createElement("a", {
        href: "https://runportcullis.com",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center justify-end p-4 group"
    }, /* @__PURE__ */ React9__default.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React9__default.createElement("img", {
        src: "/portcullis.svg",
        alt: "Portcullis",
        className: "w-4 h-4 group-hover:scale-110 transition-transform duration-200"
    }), /* @__PURE__ */ React9__default.createElement("span", {
        className: cn("text-sm font-semibold bg-gradient-to-r from-[#faff69] to-[#171717]", "bg-clip-text text-transparent", "animate-gradient bg-[length:200%_auto]", "group-hover:bg-[length:300%_auto] transition-all duration-200")
    }, "Powered by Portcullis"))));
};
// ../node_modules/@supabase/functions-js/dist/module/helper.js
var resolveFetch = function(customFetch) {
    var _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === "undefined") {
        _fetch = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return import('./lib-6ZLRJXTY.mjs').then(function(param) {
                var fetch2 = param.default;
                return fetch2.apply(void 0, _to_consumable_array(args));
            });
        };
    } else {
        _fetch = fetch;
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _fetch.apply(void 0, _to_consumable_array(args));
    };
};
// ../node_modules/@supabase/functions-js/dist/module/types.js
var FunctionsError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(FunctionsError, Error1);
    function FunctionsError(message) {
        var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "FunctionsError", context = arguments.length > 2 ? arguments[2] : void 0;
        _class_call_check(this, FunctionsError);
        var _this;
        _this = _call_super(this, FunctionsError, [
            message
        ]);
        _this.name = name;
        _this.context = context;
        return _this;
    }
    return FunctionsError;
}(_wrap_native_super(Error));
var FunctionsFetchError = /*#__PURE__*/ function(FunctionsError) {
    "use strict";
    _inherits(FunctionsFetchError, FunctionsError);
    function FunctionsFetchError(context) {
        _class_call_check(this, FunctionsFetchError);
        return _call_super(this, FunctionsFetchError, [
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            context
        ]);
    }
    return FunctionsFetchError;
}(FunctionsError);
var FunctionsRelayError = /*#__PURE__*/ function(FunctionsError) {
    "use strict";
    _inherits(FunctionsRelayError, FunctionsError);
    function FunctionsRelayError(context) {
        _class_call_check(this, FunctionsRelayError);
        return _call_super(this, FunctionsRelayError, [
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            context
        ]);
    }
    return FunctionsRelayError;
}(FunctionsError);
var FunctionsHttpError = /*#__PURE__*/ function(FunctionsError) {
    "use strict";
    _inherits(FunctionsHttpError, FunctionsError);
    function FunctionsHttpError(context) {
        _class_call_check(this, FunctionsHttpError);
        return _call_super(this, FunctionsHttpError, [
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            context
        ]);
    }
    return FunctionsHttpError;
}(FunctionsError);
var FunctionRegion;
(function(FunctionRegion2) {
    FunctionRegion2["Any"] = "any";
    FunctionRegion2["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion2["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion2["ApSouth1"] = "ap-south-1";
    FunctionRegion2["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion2["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion2["CaCentral1"] = "ca-central-1";
    FunctionRegion2["EuCentral1"] = "eu-central-1";
    FunctionRegion2["EuWest1"] = "eu-west-1";
    FunctionRegion2["EuWest2"] = "eu-west-2";
    FunctionRegion2["EuWest3"] = "eu-west-3";
    FunctionRegion2["SaEast1"] = "sa-east-1";
    FunctionRegion2["UsEast1"] = "us-east-1";
    FunctionRegion2["UsWest1"] = "us-west-1";
    FunctionRegion2["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {}));
// ../node_modules/@supabase/functions-js/dist/module/FunctionsClient.js
var __awaiter = function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var FunctionsClient = /*#__PURE__*/ function() {
    "use strict";
    function FunctionsClient(url) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_headers = _ref.headers, headers = _ref_headers === void 0 ? {} : _ref_headers, customFetch = _ref.customFetch, _ref_region = _ref.region, region = _ref_region === void 0 ? FunctionRegion.Any : _ref_region;
        _class_call_check(this, FunctionsClient);
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = resolveFetch(customFetch);
    }
    _create_class(FunctionsClient, [
        {
            /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */ key: "setAuth",
            value: function setAuth(token) {
                this.headers.Authorization = "Bearer ".concat(token);
            }
        },
        {
            /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */ key: "invoke",
            value: function invoke(functionName) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _a;
                return __awaiter(this, void 0, void 0, function() {
                    var headers, method, functionArgs, _headers, region, body, response, isRelayError, responseType, data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    11,
                                    ,
                                    12
                                ]);
                                headers = options.headers, method = options.method, functionArgs = options.body;
                                _headers = {};
                                region = options.region;
                                if (!region) {
                                    region = this.region;
                                }
                                if (region && region !== "any") {
                                    _headers["x-region"] = region;
                                }
                                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, "Content-Type") || !headers)) {
                                    if (typeof Blob !== "undefined" && _instanceof(functionArgs, Blob) || _instanceof(functionArgs, ArrayBuffer)) {
                                        _headers["Content-Type"] = "application/octet-stream";
                                        body = functionArgs;
                                    } else if (typeof functionArgs === "string") {
                                        _headers["Content-Type"] = "text/plain";
                                        body = functionArgs;
                                    } else if (typeof FormData !== "undefined" && _instanceof(functionArgs, FormData)) {
                                        body = functionArgs;
                                    } else {
                                        _headers["Content-Type"] = "application/json";
                                        body = JSON.stringify(functionArgs);
                                    }
                                }
                                return [
                                    4,
                                    this.fetch("".concat(this.url, "/").concat(functionName), {
                                        method: method || "POST",
                                        // headers priority is (high to low):
                                        // 1. invoke-level headers
                                        // 2. client-level headers
                                        // 3. default Content-Type header
                                        headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                                        body: body
                                    }).catch(function(fetchError) {
                                        throw new FunctionsFetchError(fetchError);
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                isRelayError = response.headers.get("x-relay-error");
                                if (isRelayError && isRelayError === "true") {
                                    throw new FunctionsRelayError(response);
                                }
                                if (!response.ok) {
                                    throw new FunctionsHttpError(response);
                                }
                                responseType = ((_a = response.headers.get("Content-Type")) !== null && _a !== void 0 ? _a : "text/plain").split(";")[0].trim();
                                if (!(responseType === "application/json")) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    response.json()
                                ];
                            case 2:
                                data = _state.sent();
                                return [
                                    3,
                                    10
                                ];
                            case 3:
                                if (!(responseType === "application/octet-stream")) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    response.blob()
                                ];
                            case 4:
                                data = _state.sent();
                                return [
                                    3,
                                    10
                                ];
                            case 5:
                                if (!(responseType === "text/event-stream")) return [
                                    3,
                                    6
                                ];
                                data = response;
                                return [
                                    3,
                                    10
                                ];
                            case 6:
                                if (!(responseType === "multipart/form-data")) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    response.formData()
                                ];
                            case 7:
                                data = _state.sent();
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                return [
                                    4,
                                    response.text()
                                ];
                            case 9:
                                data = _state.sent();
                                _state.label = 10;
                            case 10:
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 11:
                                error = _state.sent();
                                return [
                                    2,
                                    {
                                        data: null,
                                        error: error
                                    }
                                ];
                            case 12:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        }
    ]);
    return FunctionsClient;
}();
// ../node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs
var import_cjs = __toESM(require_cjs(), 1);
var _import_cjs_default = import_cjs.default, PostgrestClient = _import_cjs_default.PostgrestClient, PostgrestQueryBuilder = _import_cjs_default.PostgrestQueryBuilder, PostgrestFilterBuilder = _import_cjs_default.PostgrestFilterBuilder, PostgrestTransformBuilder = _import_cjs_default.PostgrestTransformBuilder, PostgrestBuilder = _import_cjs_default.PostgrestBuilder;
// ../node_modules/@supabase/realtime-js/dist/module/lib/version.js
var version = "2.10.7";
// ../node_modules/@supabase/realtime-js/dist/module/lib/constants.js
var DEFAULT_HEADERS = {
    "X-Client-Info": "realtime-js/".concat(version)
};
var VSN = "1.0.0";
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var SOCKET_STATES;
(function(SOCKET_STATES2) {
    SOCKET_STATES2[SOCKET_STATES2["connecting"] = 0] = "connecting";
    SOCKET_STATES2[SOCKET_STATES2["open"] = 1] = "open";
    SOCKET_STATES2[SOCKET_STATES2["closing"] = 2] = "closing";
    SOCKET_STATES2[SOCKET_STATES2["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES2) {
    CHANNEL_STATES2["closed"] = "closed";
    CHANNEL_STATES2["errored"] = "errored";
    CHANNEL_STATES2["joined"] = "joined";
    CHANNEL_STATES2["joining"] = "joining";
    CHANNEL_STATES2["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS2) {
    CHANNEL_EVENTS2["close"] = "phx_close";
    CHANNEL_EVENTS2["error"] = "phx_error";
    CHANNEL_EVENTS2["join"] = "phx_join";
    CHANNEL_EVENTS2["reply"] = "phx_reply";
    CHANNEL_EVENTS2["leave"] = "phx_leave";
    CHANNEL_EVENTS2["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS2) {
    TRANSPORTS2["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE2) {
    CONNECTION_STATE2["Connecting"] = "connecting";
    CONNECTION_STATE2["Open"] = "open";
    CONNECTION_STATE2["Closing"] = "closing";
    CONNECTION_STATE2["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));
// ../node_modules/@supabase/realtime-js/dist/module/lib/serializer.js
var Serializer = /*#__PURE__*/ function() {
    "use strict";
    function Serializer() {
        _class_call_check(this, Serializer);
        this.HEADER_LENGTH = 1;
    }
    _create_class(Serializer, [
        {
            key: "decode",
            value: function decode(rawPayload, callback) {
                if (rawPayload.constructor === ArrayBuffer) {
                    return callback(this._binaryDecode(rawPayload));
                }
                if (typeof rawPayload === "string") {
                    return callback(JSON.parse(rawPayload));
                }
                return callback({});
            }
        },
        {
            key: "_binaryDecode",
            value: function _binaryDecode(buffer) {
                var view = new DataView(buffer);
                var decoder = new TextDecoder();
                return this._decodeBroadcast(buffer, view, decoder);
            }
        },
        {
            key: "_decodeBroadcast",
            value: function _decodeBroadcast(buffer, view, decoder) {
                var topicSize = view.getUint8(1);
                var eventSize = view.getUint8(2);
                var offset = this.HEADER_LENGTH + 2;
                var topic = decoder.decode(buffer.slice(offset, offset + topicSize));
                offset = offset + topicSize;
                var event = decoder.decode(buffer.slice(offset, offset + eventSize));
                offset = offset + eventSize;
                var data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
                return {
                    ref: null,
                    topic: topic,
                    event: event,
                    payload: data
                };
            }
        }
    ]);
    return Serializer;
}();
// ../node_modules/@supabase/realtime-js/dist/module/lib/timer.js
var Timer = /*#__PURE__*/ function() {
    "use strict";
    function Timer(callback, timerCalc) {
        _class_call_check(this, Timer);
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = void 0;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    _create_class(Timer, [
        {
            key: "reset",
            value: function reset() {
                this.tries = 0;
                clearTimeout(this.timer);
            }
        },
        {
            // Cancels any previous scheduleTimeout and schedules callback
            key: "scheduleTimeout",
            value: function scheduleTimeout() {
                var _this = this;
                clearTimeout(this.timer);
                this.timer = setTimeout(function() {
                    _this.tries = _this.tries + 1;
                    _this.callback();
                }, this.timerCalc(this.tries + 1));
            }
        }
    ]);
    return Timer;
}();
// ../node_modules/@supabase/realtime-js/dist/module/lib/transformers.js
var PostgresTypes;
(function(PostgresTypes2) {
    PostgresTypes2["abstime"] = "abstime";
    PostgresTypes2["bool"] = "bool";
    PostgresTypes2["date"] = "date";
    PostgresTypes2["daterange"] = "daterange";
    PostgresTypes2["float4"] = "float4";
    PostgresTypes2["float8"] = "float8";
    PostgresTypes2["int2"] = "int2";
    PostgresTypes2["int4"] = "int4";
    PostgresTypes2["int4range"] = "int4range";
    PostgresTypes2["int8"] = "int8";
    PostgresTypes2["int8range"] = "int8range";
    PostgresTypes2["json"] = "json";
    PostgresTypes2["jsonb"] = "jsonb";
    PostgresTypes2["money"] = "money";
    PostgresTypes2["numeric"] = "numeric";
    PostgresTypes2["oid"] = "oid";
    PostgresTypes2["reltime"] = "reltime";
    PostgresTypes2["text"] = "text";
    PostgresTypes2["time"] = "time";
    PostgresTypes2["timestamp"] = "timestamp";
    PostgresTypes2["timestamptz"] = "timestamptz";
    PostgresTypes2["timetz"] = "timetz";
    PostgresTypes2["tsrange"] = "tsrange";
    PostgresTypes2["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
var convertChangeData = function(columns, record) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _a;
    var skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce(function(acc, rec_key) {
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
var convertColumn = function(columnName, columns, record, skipTypes) {
    var column = columns.find(function(x) {
        return x.name === columnName;
    });
    var colType = column === null || column === void 0 ? void 0 : column.type;
    var value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
    }
    return noop(value);
};
var convertCell = function(type, value) {
    if (type.charAt(0) === "_") {
        var dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value);
        // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        // To allow users to cast it based on Timezone
        case PostgresTypes.date:
        // To allow users to cast it based on Timezone
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        // To allow users to cast it based on Timezone
        case PostgresTypes.text:
        case PostgresTypes.time:
        // To allow users to cast it based on Timezone
        case PostgresTypes.timestamptz:
        // To allow users to cast it based on Timezone
        case PostgresTypes.timetz:
        // To allow users to cast it based on Timezone
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            return noop(value);
    }
};
var noop = function(value) {
    return value;
};
var toBoolean = function(value) {
    switch(value){
        case "t":
            return true;
        case "f":
            return false;
        default:
            return value;
    }
};
var toNumber = function(value) {
    if (typeof value === "string") {
        var parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }
    return value;
};
var toJson = function(value) {
    if (typeof value === "string") {
        try {
            return JSON.parse(value);
        } catch (error) {
            console.log("JSON parse error: ".concat(error));
            return value;
        }
    }
    return value;
};
var toArray = function(value, type) {
    if (typeof value !== "string") {
        return value;
    }
    var lastIdx = value.length - 1;
    var closeBrace = value[lastIdx];
    var openBrace = value[0];
    if (openBrace === "{" && closeBrace === "}") {
        var arr;
        var valTrim = value.slice(1, lastIdx);
        try {
            arr = JSON.parse("[" + valTrim + "]");
        } catch (_) {
            arr = valTrim ? valTrim.split(",") : [];
        }
        return arr.map(function(val) {
            return convertCell(type, val);
        });
    }
    return value;
};
var toTimestampString = function(value) {
    if (typeof value === "string") {
        return value.replace(" ", "T");
    }
    return value;
};
var httpEndpointURL = function(socketUrl) {
    var url = socketUrl;
    url = url.replace(/^ws/i, "http");
    url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "");
    return url.replace(/\/+$/, "");
};
// ../node_modules/@supabase/realtime-js/dist/module/lib/push.js
var Push = /*#__PURE__*/ function() {
    "use strict";
    function Push(channel, event) {
        var payload = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, timeout = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : DEFAULT_TIMEOUT;
        _class_call_check(this, Push);
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = void 0;
        this.ref = "";
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    _create_class(Push, [
        {
            key: "resend",
            value: function resend(timeout) {
                this.timeout = timeout;
                this._cancelRefEvent();
                this.ref = "";
                this.refEvent = null;
                this.receivedResp = null;
                this.sent = false;
                this.send();
            }
        },
        {
            key: "send",
            value: function send() {
                if (this._hasReceived("timeout")) {
                    return;
                }
                this.startTimeout();
                this.sent = true;
                this.channel.socket.push({
                    topic: this.channel.topic,
                    event: this.event,
                    payload: this.payload,
                    ref: this.ref,
                    join_ref: this.channel._joinRef()
                });
            }
        },
        {
            key: "updatePayload",
            value: function updatePayload(payload) {
                this.payload = Object.assign(Object.assign({}, this.payload), payload);
            }
        },
        {
            key: "receive",
            value: function receive(status, callback) {
                var _a;
                if (this._hasReceived(status)) {
                    callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
                }
                this.recHooks.push({
                    status: status,
                    callback: callback
                });
                return this;
            }
        },
        {
            key: "startTimeout",
            value: function startTimeout() {
                var _this = this;
                if (this.timeoutTimer) {
                    return;
                }
                this.ref = this.channel.socket._makeRef();
                this.refEvent = this.channel._replyEventName(this.ref);
                var callback = function(payload) {
                    _this._cancelRefEvent();
                    _this._cancelTimeout();
                    _this.receivedResp = payload;
                    _this._matchReceive(payload);
                };
                this.channel._on(this.refEvent, {}, callback);
                this.timeoutTimer = setTimeout(function() {
                    _this.trigger("timeout", {});
                }, this.timeout);
            }
        },
        {
            key: "trigger",
            value: function trigger(status, response) {
                if (this.refEvent) this.channel._trigger(this.refEvent, {
                    status: status,
                    response: response
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this._cancelRefEvent();
                this._cancelTimeout();
            }
        },
        {
            key: "_cancelRefEvent",
            value: function _cancelRefEvent() {
                if (!this.refEvent) {
                    return;
                }
                this.channel._off(this.refEvent, {});
            }
        },
        {
            key: "_cancelTimeout",
            value: function _cancelTimeout() {
                clearTimeout(this.timeoutTimer);
                this.timeoutTimer = void 0;
            }
        },
        {
            key: "_matchReceive",
            value: function _matchReceive(param) {
                var status = param.status, response = param.response;
                this.recHooks.filter(function(h) {
                    return h.status === status;
                }).forEach(function(h) {
                    return h.callback(response);
                });
            }
        },
        {
            key: "_hasReceived",
            value: function _hasReceived(status) {
                return this.receivedResp && this.receivedResp.status === status;
            }
        }
    ]);
    return Push;
}();
// ../node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS2) {
    REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
var RealtimePresence = /*#__PURE__*/ function() {
    "use strict";
    function _RealtimePresence(channel, opts) {
        var _this = this;
        _class_call_check(this, _RealtimePresence);
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.caller = {
            onJoin: function() {},
            onLeave: function() {},
            onSync: function() {}
        };
        var events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: "presence_state",
            diff: "presence_diff"
        };
        this.channel._on(events.state, {}, function(newState) {
            var _this_caller = _this.caller, onJoin = _this_caller.onJoin, onLeave = _this_caller.onLeave, onSync = _this_caller.onSync;
            _this.joinRef = _this.channel._joinRef();
            _this.state = _RealtimePresence.syncState(_this.state, newState, onJoin, onLeave);
            _this.pendingDiffs.forEach(function(diff) {
                _this.state = _RealtimePresence.syncDiff(_this.state, diff, onJoin, onLeave);
            });
            _this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, function(diff) {
            var _this_caller = _this.caller, onJoin = _this_caller.onJoin, onLeave = _this_caller.onLeave, onSync = _this_caller.onSync;
            if (_this.inPendingSyncState()) {
                _this.pendingDiffs.push(diff);
            } else {
                _this.state = _RealtimePresence.syncDiff(_this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin(function(key, currentPresences, newPresences) {
            _this.channel._trigger("presence", {
                event: "join",
                key: key,
                currentPresences: currentPresences,
                newPresences: newPresences
            });
        });
        this.onLeave(function(key, currentPresences, leftPresences) {
            _this.channel._trigger("presence", {
                event: "leave",
                key: key,
                currentPresences: currentPresences,
                leftPresences: leftPresences
            });
        });
        this.onSync(function() {
            _this.channel._trigger("presence", {
                event: "sync"
            });
        });
    }
    _create_class(_RealtimePresence, [
        {
            /** @internal */ key: "onJoin",
            value: function onJoin(callback) {
                this.caller.onJoin = callback;
            }
        },
        {
            /** @internal */ key: "onLeave",
            value: function onLeave(callback) {
                this.caller.onLeave = callback;
            }
        },
        {
            /** @internal */ key: "onSync",
            value: function onSync(callback) {
                this.caller.onSync = callback;
            }
        },
        {
            /** @internal */ key: "inPendingSyncState",
            value: function inPendingSyncState() {
                return !this.joinRef || this.joinRef !== this.channel._joinRef();
            }
        }
    ], [
        {
            key: "syncState",
            value: /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */ function syncState(currentState, newState, onJoin, onLeave) {
                var state = this.cloneDeep(currentState);
                var transformedState = this.transformState(newState);
                var joins = {};
                var leaves = {};
                this.map(state, function(key, presences) {
                    if (!transformedState[key]) {
                        leaves[key] = presences;
                    }
                });
                this.map(transformedState, function(key, newPresences) {
                    var currentPresences = state[key];
                    if (currentPresences) {
                        var newPresenceRefs = newPresences.map(function(m) {
                            return m.presence_ref;
                        });
                        var curPresenceRefs = currentPresences.map(function(m) {
                            return m.presence_ref;
                        });
                        var joinedPresences = newPresences.filter(function(m) {
                            return curPresenceRefs.indexOf(m.presence_ref) < 0;
                        });
                        var leftPresences = currentPresences.filter(function(m) {
                            return newPresenceRefs.indexOf(m.presence_ref) < 0;
                        });
                        if (joinedPresences.length > 0) {
                            joins[key] = joinedPresences;
                        }
                        if (leftPresences.length > 0) {
                            leaves[key] = leftPresences;
                        }
                    } else {
                        joins[key] = newPresences;
                    }
                });
                return this.syncDiff(state, {
                    joins: joins,
                    leaves: leaves
                }, onJoin, onLeave);
            }
        },
        {
            key: "syncDiff",
            value: /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */ function syncDiff(state, diff, onJoin, onLeave) {
                var _this = this;
                var _ref = {
                    joins: this.transformState(diff.joins),
                    leaves: this.transformState(diff.leaves)
                }, joins = _ref.joins, leaves = _ref.leaves;
                if (!onJoin) {
                    onJoin = function() {};
                }
                if (!onLeave) {
                    onLeave = function() {};
                }
                this.map(joins, function(key, newPresences) {
                    var _a;
                    var currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
                    state[key] = _this.cloneDeep(newPresences);
                    if (currentPresences.length > 0) {
                        var _state_key;
                        var joinedPresenceRefs = state[key].map(function(m) {
                            return m.presence_ref;
                        });
                        var curPresences = currentPresences.filter(function(m) {
                            return joinedPresenceRefs.indexOf(m.presence_ref) < 0;
                        });
                        (_state_key = state[key]).unshift.apply(_state_key, _to_consumable_array(curPresences));
                    }
                    onJoin(key, currentPresences, newPresences);
                });
                this.map(leaves, function(key, leftPresences) {
                    var currentPresences = state[key];
                    if (!currentPresences) return;
                    var presenceRefsToRemove = leftPresences.map(function(m) {
                        return m.presence_ref;
                    });
                    currentPresences = currentPresences.filter(function(m) {
                        return presenceRefsToRemove.indexOf(m.presence_ref) < 0;
                    });
                    state[key] = currentPresences;
                    onLeave(key, currentPresences, leftPresences);
                    if (currentPresences.length === 0) delete state[key];
                });
                return state;
            }
        },
        {
            key: "map",
            value: /** @internal */ function map(obj, func) {
                return Object.getOwnPropertyNames(obj).map(function(key) {
                    return func(key, obj[key]);
                });
            }
        },
        {
            key: "transformState",
            value: /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */ function transformState(state) {
                state = this.cloneDeep(state);
                return Object.getOwnPropertyNames(state).reduce(function(newState, key) {
                    var presences = state[key];
                    if ("metas" in presences) {
                        newState[key] = presences.metas.map(function(presence) {
                            presence["presence_ref"] = presence["phx_ref"];
                            delete presence["phx_ref"];
                            delete presence["phx_ref_prev"];
                            return presence;
                        });
                    } else {
                        newState[key] = presences;
                    }
                    return newState;
                }, {});
            }
        },
        {
            key: "cloneDeep",
            value: /** @internal */ function cloneDeep(obj) {
                return JSON.parse(JSON.stringify(obj));
            }
        }
    ]);
    return _RealtimePresence;
}();
// ../node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES2) {
    REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES2["SYSTEM"] = "system";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES2) {
    REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
var RealtimeChannel = /*#__PURE__*/ function() {
    "use strict";
    function _RealtimeChannel(topic) {
        var _this = this;
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            config: {}
        }, socket = arguments.length > 2 ? arguments[2] : void 0;
        _class_call_check(this, _RealtimeChannel);
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, "");
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: ""
            },
            private: false
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
        this.rejoinTimer = new Timer(function() {
            return _this._rejoinUntilConnected();
        }, this.socket.reconnectAfterMs);
        this.joinPush.receive("ok", function() {
            _this.state = CHANNEL_STATES.joined;
            _this.rejoinTimer.reset();
            _this.pushBuffer.forEach(function(pushEvent) {
                return pushEvent.send();
            });
            _this.pushBuffer = [];
        });
        this._onClose(function() {
            _this.rejoinTimer.reset();
            _this.socket.log("channel", "close ".concat(_this.topic, " ").concat(_this._joinRef()));
            _this.state = CHANNEL_STATES.closed;
            _this.socket._remove(_this);
        });
        this._onError(function(reason) {
            if (_this._isLeaving() || _this._isClosed()) {
                return;
            }
            _this.socket.log("channel", "error ".concat(_this.topic), reason);
            _this.state = CHANNEL_STATES.errored;
            _this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive("timeout", function() {
            if (!_this._isJoining()) {
                return;
            }
            _this.socket.log("channel", "timeout ".concat(_this.topic), _this.joinPush.timeout);
            _this.state = CHANNEL_STATES.errored;
            _this.rejoinTimer.scheduleTimeout();
        });
        this._on(CHANNEL_EVENTS.reply, {}, function(payload, ref) {
            _this._trigger(_this._replyEventName(ref), payload);
        });
        this.presence = new RealtimePresence(this);
        this.broadcastEndpointURL = httpEndpointURL(this.socket.endPoint) + "/api/broadcast";
        this.private = this.params.config.private || false;
    }
    _create_class(_RealtimeChannel, [
        {
            /** Subscribe registers your client with the server */ key: "subscribe",
            value: function subscribe(callback) {
                var _this = this;
                var timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.timeout;
                var _a, _b;
                if (!this.socket.isConnected()) {
                    this.socket.connect();
                }
                if (this.joinedOnce) {
                    throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
                } else {
                    var _this_params = this.params, _this_params_config = _this_params.config, broadcast = _this_params_config.broadcast, presence = _this_params_config.presence, isPrivate = _this_params_config.private;
                    this._onError(function(e) {
                        return callback && callback("CHANNEL_ERROR", e);
                    });
                    this._onClose(function() {
                        return callback && callback("CLOSED");
                    });
                    var accessTokenPayload = {};
                    var config = {
                        broadcast: broadcast,
                        presence: presence,
                        postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map(function(r) {
                            return r.filter;
                        })) !== null && _b !== void 0 ? _b : [],
                        private: isPrivate
                    };
                    if (this.socket.accessToken) {
                        accessTokenPayload.access_token = this.socket.accessToken;
                    }
                    this.updateJoinPayload(Object.assign({
                        config: config
                    }, accessTokenPayload));
                    this.joinedOnce = true;
                    this._rejoin(timeout);
                    this.joinPush.receive("ok", function(param) {
                        var serverPostgresFilters = param.postgres_changes;
                        var _a2;
                        _this.socket.accessToken && _this.socket.setAuth(_this.socket.accessToken);
                        if (serverPostgresFilters === void 0) {
                            callback && callback("SUBSCRIBED");
                            return;
                        } else {
                            var clientPostgresBindings = _this.bindings.postgres_changes;
                            var bindingsLen = (_a2 = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a2 !== void 0 ? _a2 : 0;
                            var newPostgresBindings = [];
                            for(var i = 0; i < bindingsLen; i++){
                                var clientPostgresBinding = clientPostgresBindings[i];
                                var _clientPostgresBinding_filter = clientPostgresBinding.filter, event = _clientPostgresBinding_filter.event, schema = _clientPostgresBinding_filter.schema, table = _clientPostgresBinding_filter.table, filter = _clientPostgresBinding_filter.filter;
                                var serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
                                if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) {
                                    newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                                        id: serverPostgresFilter.id
                                    }));
                                } else {
                                    _this.unsubscribe();
                                    callback && callback("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
                                    return;
                                }
                            }
                            _this.bindings.postgres_changes = newPostgresBindings;
                            callback && callback("SUBSCRIBED");
                            return;
                        }
                    }).receive("error", function(error) {
                        callback && callback("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(error).join(", ") || "error")));
                        return;
                    }).receive("timeout", function() {
                        callback && callback("TIMED_OUT");
                        return;
                    });
                }
                return this;
            }
        },
        {
            key: "presenceState",
            value: function presenceState() {
                return this.presence.state;
            }
        },
        {
            key: "track",
            value: function track(payload) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.send({
                                        type: "presence",
                                        event: "track",
                                        payload: payload
                                    }, opts.timeout || _this.timeout)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "untrack",
            value: function untrack() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.send({
                                        type: "presence",
                                        event: "untrack"
                                    }, opts)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "on",
            value: function on(type, filter, callback) {
                return this._on(type, filter, callback);
            }
        },
        {
            key: "send",
            value: /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */ function send(args) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, event, endpoint_payload, options, response, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(!_this._canPush() && args.type === "broadcast")) return [
                                    3,
                                    6
                                ];
                                event = args.event, endpoint_payload = args.payload;
                                options = {
                                    method: "POST",
                                    headers: {
                                        Authorization: _this.socket.accessToken ? "Bearer ".concat(_this.socket.accessToken) : "",
                                        apikey: _this.socket.apiKey ? _this.socket.apiKey : "",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        messages: [
                                            {
                                                topic: _this.subTopic,
                                                event: event,
                                                payload: endpoint_payload,
                                                private: _this.private
                                            }
                                        ]
                                    })
                                };
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _this._fetchWithTimeout(_this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : _this.timeout)
                                ];
                            case 2:
                                response = _state.sent();
                                return [
                                    4,
                                    (_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel()
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2,
                                    response.ok ? "ok" : "error"
                                ];
                            case 4:
                                error = _state.sent();
                                if (error.name === "AbortError") {
                                    return [
                                        2,
                                        "timed out"
                                    ];
                                } else {
                                    return [
                                        2,
                                        "error"
                                    ];
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                return [
                                    2,
                                    new Promise(function(resolve) {
                                        var _a2, _b2, _c;
                                        var push = _this._push(args.type, args, opts.timeout || _this.timeout);
                                        if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = _this.params) === null || _a2 === void 0 ? void 0 : _a2.config) === null || _b2 === void 0 ? void 0 : _b2.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
                                            resolve("ok");
                                        }
                                        push.receive("ok", function() {
                                            return resolve("ok");
                                        });
                                        push.receive("error", function() {
                                            return resolve("error");
                                        });
                                        push.receive("timeout", function() {
                                            return resolve("timed out");
                                        });
                                    })
                                ];
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateJoinPayload",
            value: function updateJoinPayload(payload) {
                this.joinPush.updatePayload(payload);
            }
        },
        {
            /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */ key: "unsubscribe",
            value: function unsubscribe() {
                var _this = this;
                var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
                this.state = CHANNEL_STATES.leaving;
                var onClose = function() {
                    _this.socket.log("channel", "leave ".concat(_this.topic));
                    _this._trigger(CHANNEL_EVENTS.close, "leave", _this._joinRef());
                };
                this.rejoinTimer.reset();
                this.joinPush.destroy();
                return new Promise(function(resolve) {
                    var leavePush = new Push(_this, CHANNEL_EVENTS.leave, {}, timeout);
                    leavePush.receive("ok", function() {
                        onClose();
                        resolve("ok");
                    }).receive("timeout", function() {
                        onClose();
                        resolve("timed out");
                    }).receive("error", function() {
                        resolve("error");
                    });
                    leavePush.send();
                    if (!_this._canPush()) {
                        leavePush.trigger("ok", {});
                    }
                });
            }
        },
        {
            key: "_fetchWithTimeout",
            value: /** @internal */ function _fetchWithTimeout(url, options, timeout) {
                var _this = this;
                return _async_to_generator(function() {
                    var controller, id, response;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                controller = new AbortController();
                                id = setTimeout(function() {
                                    return controller.abort();
                                }, timeout);
                                return [
                                    4,
                                    _this.socket.fetch(url, Object.assign(Object.assign({}, options), {
                                        signal: controller.signal
                                    }))
                                ];
                            case 1:
                                response = _state.sent();
                                clearTimeout(id);
                                return [
                                    2,
                                    response
                                ];
                        }
                    });
                })();
            }
        },
        {
            /** @internal */ key: "_push",
            value: function _push(event, payload) {
                var timeout = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.timeout;
                if (!this.joinedOnce) {
                    throw "tried to push '".concat(event, "' to '").concat(this.topic, "' before joining. Use channel.subscribe() before pushing events");
                }
                var pushEvent = new Push(this, event, payload, timeout);
                if (this._canPush()) {
                    pushEvent.send();
                } else {
                    pushEvent.startTimeout();
                    this.pushBuffer.push(pushEvent);
                }
                return pushEvent;
            }
        },
        {
            /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */ key: "_onMessage",
            value: function _onMessage(_event, payload, _ref) {
                return payload;
            }
        },
        {
            /** @internal */ key: "_isMember",
            value: function _isMember(topic) {
                return this.topic === topic;
            }
        },
        {
            /** @internal */ key: "_joinRef",
            value: function _joinRef() {
                return this.joinPush.ref;
            }
        },
        {
            /** @internal */ key: "_trigger",
            value: function _trigger(type, payload, ref) {
                var _this = this;
                var _a, _b;
                var typeLower = type.toLocaleLowerCase();
                var close = CHANNEL_EVENTS.close, error = CHANNEL_EVENTS.error, leave = CHANNEL_EVENTS.leave, join = CHANNEL_EVENTS.join;
                var events = [
                    close,
                    error,
                    leave,
                    join
                ];
                if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
                    return;
                }
                var handledPayload = this._onMessage(typeLower, payload, ref);
                if (payload && !handledPayload) {
                    throw "channel onMessage callbacks must return the payload, modified or unmodified";
                }
                if ([
                    "insert",
                    "update",
                    "delete"
                ].includes(typeLower)) {
                    (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter(function(bind) {
                        var _a2, _b2, _c;
                        return ((_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event) === "*" || ((_c = (_b2 = bind.filter) === null || _b2 === void 0 ? void 0 : _b2.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
                    }).map(function(bind) {
                        return bind.callback(handledPayload, ref);
                    });
                } else {
                    (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter(function(bind) {
                        var _a2, _b2, _c, _d, _e, _f;
                        if ([
                            "broadcast",
                            "presence",
                            "postgres_changes"
                        ].includes(typeLower)) {
                            if ("id" in bind) {
                                var bindId = bind.id;
                                var bindEvent = (_a2 = bind.filter) === null || _a2 === void 0 ? void 0 : _a2.event;
                                return bindId && ((_b2 = payload.ids) === null || _b2 === void 0 ? void 0 : _b2.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                            } else {
                                var bindEvent1 = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                                return bindEvent1 === "*" || bindEvent1 === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                            }
                        } else {
                            return bind.type.toLocaleLowerCase() === typeLower;
                        }
                    }).map(function(bind) {
                        if ((typeof handledPayload === "undefined" ? "undefined" : _type_of(handledPayload)) === "object" && "ids" in handledPayload) {
                            var postgresChanges = handledPayload.data;
                            var schema = postgresChanges.schema, table = postgresChanges.table, commit_timestamp = postgresChanges.commit_timestamp, type2 = postgresChanges.type, errors = postgresChanges.errors;
                            var enrichedPayload = {
                                schema: schema,
                                table: table,
                                commit_timestamp: commit_timestamp,
                                eventType: type2,
                                new: {},
                                old: {},
                                errors: errors
                            };
                            handledPayload = Object.assign(Object.assign({}, enrichedPayload), _this._getPayloadRecords(postgresChanges));
                        }
                        bind.callback(handledPayload, ref);
                    });
                }
            }
        },
        {
            /** @internal */ key: "_isClosed",
            value: function _isClosed() {
                return this.state === CHANNEL_STATES.closed;
            }
        },
        {
            /** @internal */ key: "_isJoined",
            value: function _isJoined() {
                return this.state === CHANNEL_STATES.joined;
            }
        },
        {
            /** @internal */ key: "_isJoining",
            value: function _isJoining() {
                return this.state === CHANNEL_STATES.joining;
            }
        },
        {
            /** @internal */ key: "_isLeaving",
            value: function _isLeaving() {
                return this.state === CHANNEL_STATES.leaving;
            }
        },
        {
            /** @internal */ key: "_replyEventName",
            value: function _replyEventName(ref) {
                return "chan_reply_".concat(ref);
            }
        },
        {
            /** @internal */ key: "_on",
            value: function _on(type, filter, callback) {
                var typeLower = type.toLocaleLowerCase();
                var binding = {
                    type: typeLower,
                    filter: filter,
                    callback: callback
                };
                if (this.bindings[typeLower]) {
                    this.bindings[typeLower].push(binding);
                } else {
                    this.bindings[typeLower] = [
                        binding
                    ];
                }
                return this;
            }
        },
        {
            /** @internal */ key: "_off",
            value: function _off(type, filter) {
                var typeLower = type.toLocaleLowerCase();
                this.bindings[typeLower] = this.bindings[typeLower].filter(function(bind) {
                    var _a;
                    return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && _RealtimeChannel.isEqual(bind.filter, filter));
                });
                return this;
            }
        },
        {
            /** @internal */ key: "_rejoinUntilConnected",
            value: function _rejoinUntilConnected() {
                this.rejoinTimer.scheduleTimeout();
                if (this.socket.isConnected()) {
                    this._rejoin();
                }
            }
        },
        {
            /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */ key: "_onClose",
            value: function _onClose(callback) {
                this._on(CHANNEL_EVENTS.close, {}, callback);
            }
        },
        {
            /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */ key: "_onError",
            value: function _onError(callback) {
                this._on(CHANNEL_EVENTS.error, {}, function(reason) {
                    return callback(reason);
                });
            }
        },
        {
            /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */ key: "_canPush",
            value: function _canPush() {
                return this.socket.isConnected() && this._isJoined();
            }
        },
        {
            /** @internal */ key: "_rejoin",
            value: function _rejoin() {
                var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
                if (this._isLeaving()) {
                    return;
                }
                this.socket._leaveOpenTopic(this.topic);
                this.state = CHANNEL_STATES.joining;
                this.joinPush.resend(timeout);
            }
        },
        {
            /** @internal */ key: "_getPayloadRecords",
            value: function _getPayloadRecords(payload) {
                var records = {
                    new: {},
                    old: {}
                };
                if (payload.type === "INSERT" || payload.type === "UPDATE") {
                    records.new = convertChangeData(payload.columns, payload.record);
                }
                if (payload.type === "UPDATE" || payload.type === "DELETE") {
                    records.old = convertChangeData(payload.columns, payload.old_record);
                }
                return records;
            }
        }
    ], [
        {
            key: "isEqual",
            value: /** @internal */ function isEqual(obj1, obj2) {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                    return false;
                }
                for(var k in obj1){
                    if (obj1[k] !== obj2[k]) {
                        return false;
                    }
                }
                return true;
            }
        }
    ]);
    return _RealtimeChannel;
}();
// ../node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
var noop2 = function() {};
var NATIVE_WEBSOCKET_AVAILABLE = typeof WebSocket !== "undefined";
var WORKER_SCRIPT = '\n  addEventListener("message", (e) => {\n    if (e.data.event === "start") {\n      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);\n    }\n  });';
var RealtimeClient = /*#__PURE__*/ function() {
    "use strict";
    function RealtimeClient(endPoint, options) {
        _class_call_check(this, RealtimeClient);
        var _this = this;
        var _a;
        this.accessToken = null;
        this.apiKey = null;
        this.channels = [];
        this.endPoint = "";
        this.httpEndpoint = "";
        this.headers = DEFAULT_HEADERS;
        this.params = {};
        this.timeout = DEFAULT_TIMEOUT;
        this.heartbeatIntervalMs = 3e4;
        this.heartbeatTimer = void 0;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop2;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new Serializer();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        this._resolveFetch = function(customFetch) {
            var _fetch;
            if (customFetch) {
                _fetch = customFetch;
            } else if (typeof fetch === "undefined") {
                _fetch = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    return import('./lib-6ZLRJXTY.mjs').then(function(param) {
                        var fetch2 = param.default;
                        return fetch2.apply(void 0, _to_consumable_array(args));
                    });
                };
            } else {
                _fetch = fetch;
            }
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return _fetch.apply(void 0, _to_consumable_array(args));
            };
        };
        this.endPoint = "".concat(endPoint, "/").concat(TRANSPORTS.websocket);
        this.httpEndpoint = httpEndpointURL(endPoint);
        if (options === null || options === void 0 ? void 0 : options.transport) {
            this.transport = options.transport;
        } else {
            this.transport = null;
        }
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers) this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout) this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        var accessToken = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey;
        if (accessToken) {
            this.accessToken = accessToken;
            this.apiKey = accessToken;
        }
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs) ? options.reconnectAfterMs : function(tries) {
            return [
                1e3,
                2e3,
                5e3,
                1e4
            ][tries - 1] || 1e4;
        };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode) ? options.encode : function(payload, callback) {
            return callback(JSON.stringify(payload));
        };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode) ? options.decode : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new Timer(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                _this.disconnect();
                _this.connect();
                return [
                    2
                ];
            });
        }), this.reconnectAfterMs);
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
        if (options === null || options === void 0 ? void 0 : options.worker) {
            if (typeof window !== "undefined" && !window.Worker) {
                throw new Error("Web Worker is not supported");
            }
            this.worker = (options === null || options === void 0 ? void 0 : options.worker) || false;
            this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
        }
    }
    _create_class(RealtimeClient, [
        {
            /**
   * Connects the socket, unless already connected.
   */ key: "connect",
            value: function connect() {
                var _this = this;
                if (this.conn) {
                    return;
                }
                if (this.transport) {
                    this.conn = new this.transport(this._endPointURL(), void 0, {
                        headers: this.headers
                    });
                    return;
                }
                if (NATIVE_WEBSOCKET_AVAILABLE) {
                    this.conn = new WebSocket(this._endPointURL());
                    this.setupConnection();
                    return;
                }
                this.conn = new WSWebSocketDummy(this._endPointURL(), void 0, {
                    close: function() {
                        _this.conn = null;
                    }
                });
                import('./wrapper-N2SOGK7V.mjs').then(function(param) {
                    var WS = param.default;
                    _this.conn = new WS(_this._endPointURL(), void 0, {
                        headers: _this.headers
                    });
                    _this.setupConnection();
                });
            }
        },
        {
            /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */ key: "disconnect",
            value: function disconnect(code, reason) {
                if (this.conn) {
                    this.conn.onclose = function() {};
                    if (code) {
                        this.conn.close(code, reason !== null && reason !== void 0 ? reason : "");
                    } else {
                        this.conn.close();
                    }
                    this.conn = null;
                    this.heartbeatTimer && clearInterval(this.heartbeatTimer);
                    this.reconnectTimer.reset();
                }
            }
        },
        {
            /**
   * Returns all created channels
   */ key: "getChannels",
            value: function getChannels() {
                return this.channels;
            }
        },
        {
            key: "removeChannel",
            value: /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */ function removeChannel(channel) {
                var _this = this;
                return _async_to_generator(function() {
                    var status;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    channel.unsubscribe()
                                ];
                            case 1:
                                status = _state.sent();
                                if (_this.channels.length === 0) {
                                    _this.disconnect();
                                }
                                return [
                                    2,
                                    status
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "removeAllChannels",
            value: /**
   * Unsubscribes and removes all channels
   */ function removeAllChannels() {
                var _this = this;
                return _async_to_generator(function() {
                    var values_1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(_this.channels.map(function(channel) {
                                        return channel.unsubscribe();
                                    }))
                                ];
                            case 1:
                                values_1 = _state.sent();
                                _this.disconnect();
                                return [
                                    2,
                                    values_1
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */ key: "log",
            value: function log(kind, msg, data) {
                this.logger(kind, msg, data);
            }
        },
        {
            /**
   * Returns the current state of the socket.
   */ key: "connectionState",
            value: function connectionState() {
                switch(this.conn && this.conn.readyState){
                    case SOCKET_STATES.connecting:
                        return CONNECTION_STATE.Connecting;
                    case SOCKET_STATES.open:
                        return CONNECTION_STATE.Open;
                    case SOCKET_STATES.closing:
                        return CONNECTION_STATE.Closing;
                    default:
                        return CONNECTION_STATE.Closed;
                }
            }
        },
        {
            /**
   * Returns `true` is the connection is open.
   */ key: "isConnected",
            value: function isConnected() {
                return this.connectionState() === CONNECTION_STATE.Open;
            }
        },
        {
            key: "channel",
            value: function channel(topic) {
                var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    config: {}
                };
                var chan = new RealtimeChannel("realtime:".concat(topic), params, this);
                this.channels.push(chan);
                return chan;
            }
        },
        {
            /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */ key: "push",
            value: function push(data) {
                var _this = this;
                var topic = data.topic, event = data.event, payload = data.payload, ref = data.ref;
                var callback = function() {
                    _this.encode(data, function(result) {
                        var _a;
                        (_a = _this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
                    });
                };
                this.log("push", "".concat(topic, " ").concat(event, " (").concat(ref, ")"), payload);
                if (this.isConnected()) {
                    callback();
                } else {
                    this.sendBuffer.push(callback);
                }
            }
        },
        {
            /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * @param token A JWT string.
   */ key: "setAuth",
            value: function setAuth(token) {
                this.accessToken = token;
                this.channels.forEach(function(channel) {
                    token && channel.updateJoinPayload({
                        access_token: token
                    });
                    if (channel.joinedOnce && channel._isJoined()) {
                        channel._push(CHANNEL_EVENTS.access_token, {
                            access_token: token
                        });
                    }
                });
            }
        },
        {
            /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */ key: "_makeRef",
            value: function _makeRef() {
                var newRef = this.ref + 1;
                if (newRef === this.ref) {
                    this.ref = 0;
                } else {
                    this.ref = newRef;
                }
                return this.ref.toString();
            }
        },
        {
            /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */ key: "_leaveOpenTopic",
            value: function _leaveOpenTopic(topic) {
                var dupChannel = this.channels.find(function(c) {
                    return c.topic === topic && (c._isJoined() || c._isJoining());
                });
                if (dupChannel) {
                    this.log("transport", 'leaving duplicate topic "'.concat(topic, '"'));
                    dupChannel.unsubscribe();
                }
            }
        },
        {
            /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */ key: "_remove",
            value: function _remove(channel) {
                this.channels = this.channels.filter(function(c) {
                    return c._joinRef() !== channel._joinRef();
                });
            }
        },
        {
            /**
   * Sets up connection handlers.
   *
   * @internal
   */ key: "setupConnection",
            value: function setupConnection() {
                var _this = this;
                if (this.conn) {
                    this.conn.binaryType = "arraybuffer";
                    this.conn.onopen = function() {
                        return _this._onConnOpen();
                    };
                    this.conn.onerror = function(error) {
                        return _this._onConnError(error);
                    };
                    this.conn.onmessage = function(event) {
                        return _this._onConnMessage(event);
                    };
                    this.conn.onclose = function(event) {
                        return _this._onConnClose(event);
                    };
                }
            }
        },
        {
            /**
   * Returns the URL of the websocket.
   *
   * @internal
   */ key: "_endPointURL",
            value: function _endPointURL() {
                return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                    vsn: VSN
                }));
            }
        },
        {
            /** @internal */ key: "_onConnMessage",
            value: function _onConnMessage(rawMessage) {
                var _this = this;
                this.decode(rawMessage.data, function(msg) {
                    var topic = msg.topic, event = msg.event, payload = msg.payload, ref = msg.ref;
                    if (ref && ref === _this.pendingHeartbeatRef || event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
                        _this.pendingHeartbeatRef = null;
                    }
                    _this.log("receive", "".concat(payload.status || "", " ").concat(topic, " ").concat(event, " ").concat(ref && "(" + ref + ")" || ""), payload);
                    _this.channels.filter(function(channel) {
                        return channel._isMember(topic);
                    }).forEach(function(channel) {
                        return channel._trigger(event, payload, ref);
                    });
                    _this.stateChangeCallbacks.message.forEach(function(callback) {
                        return callback(msg);
                    });
                });
            }
        },
        {
            key: "_onConnOpen",
            value: /** @internal */ function _onConnOpen() {
                var _this = this;
                return _async_to_generator(function() {
                    var objectUrl;
                    return _ts_generator(this, function(_state) {
                        _this.log("transport", "connected to ".concat(_this._endPointURL()));
                        _this._flushSendBuffer();
                        _this.reconnectTimer.reset();
                        if (!_this.worker) {
                            _this.heartbeatTimer && clearInterval(_this.heartbeatTimer);
                            _this.heartbeatTimer = setInterval(function() {
                                return _this._sendHeartbeat();
                            }, _this.heartbeatIntervalMs);
                        } else {
                            if (_this.workerUrl) {
                                _this.log("worker", "starting worker for from ".concat(_this.workerUrl));
                            } else {
                                _this.log("worker", "starting default worker");
                            }
                            objectUrl = _this._workerObjectUrl(_this.workerUrl);
                            _this.workerRef = new Worker(objectUrl);
                            _this.workerRef.onerror = function(error) {
                                _this.log("worker", "worker error", error.message);
                                _this.workerRef.terminate();
                            };
                            _this.workerRef.onmessage = function(event) {
                                if (event.data.event === "keepAlive") {
                                    _this._sendHeartbeat();
                                }
                            };
                            _this.workerRef.postMessage({
                                event: "start",
                                interval: _this.heartbeatIntervalMs
                            });
                        }
                        _this.stateChangeCallbacks.open.forEach(function(callback) {
                            return callback();
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            /** @internal */ key: "_onConnClose",
            value: function _onConnClose(event) {
                this.log("transport", "close", event);
                this._triggerChanError();
                this.heartbeatTimer && clearInterval(this.heartbeatTimer);
                this.reconnectTimer.scheduleTimeout();
                this.stateChangeCallbacks.close.forEach(function(callback) {
                    return callback(event);
                });
            }
        },
        {
            /** @internal */ key: "_onConnError",
            value: function _onConnError(error) {
                this.log("transport", error.message);
                this._triggerChanError();
                this.stateChangeCallbacks.error.forEach(function(callback) {
                    return callback(error);
                });
            }
        },
        {
            /** @internal */ key: "_triggerChanError",
            value: function _triggerChanError() {
                this.channels.forEach(function(channel) {
                    return channel._trigger(CHANNEL_EVENTS.error);
                });
            }
        },
        {
            /** @internal */ key: "_appendParams",
            value: function _appendParams(url, params) {
                if (Object.keys(params).length === 0) {
                    return url;
                }
                var prefix = url.match(/\?/) ? "&" : "?";
                var query = new URLSearchParams(params);
                return "".concat(url).concat(prefix).concat(query);
            }
        },
        {
            /** @internal */ key: "_flushSendBuffer",
            value: function _flushSendBuffer() {
                if (this.isConnected() && this.sendBuffer.length > 0) {
                    this.sendBuffer.forEach(function(callback) {
                        return callback();
                    });
                    this.sendBuffer = [];
                }
            }
        },
        {
            /** @internal */ key: "_sendHeartbeat",
            value: function _sendHeartbeat() {
                var _a;
                if (!this.isConnected()) {
                    return;
                }
                if (this.pendingHeartbeatRef) {
                    this.pendingHeartbeatRef = null;
                    this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
                    (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, "hearbeat timeout");
                    return;
                }
                this.pendingHeartbeatRef = this._makeRef();
                this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef
                });
                this.setAuth(this.accessToken);
            }
        },
        {
            key: "_workerObjectUrl",
            value: function _workerObjectUrl(url) {
                var result_url;
                if (url) {
                    result_url = url;
                } else {
                    var blob = new Blob([
                        WORKER_SCRIPT
                    ], {
                        type: "application/javascript"
                    });
                    result_url = URL.createObjectURL(blob);
                }
                return result_url;
            }
        }
    ]);
    return RealtimeClient;
}();
var WSWebSocketDummy = function WSWebSocketDummy(address, _protocols, options) {
    "use strict";
    _class_call_check(this, WSWebSocketDummy);
    this.binaryType = "arraybuffer";
    this.onclose = function() {};
    this.onerror = function() {};
    this.onmessage = function() {};
    this.onopen = function() {};
    this.readyState = SOCKET_STATES.connecting;
    this.send = function() {};
    this.url = null;
    this.url = address;
    this.close = options.close;
};
// ../node_modules/@supabase/storage-js/dist/module/lib/errors.js
var StorageError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(StorageError, Error1);
    function StorageError(message) {
        _class_call_check(this, StorageError);
        var _this;
        _this = _call_super(this, StorageError, [
            message
        ]);
        _this.__isStorageError = true;
        _this.name = "StorageError";
        return _this;
    }
    return StorageError;
}(_wrap_native_super(Error));
function isStorageError(error) {
    return (typeof error === "undefined" ? "undefined" : _type_of(error)) === "object" && error !== null && "__isStorageError" in error;
}
var StorageApiError = /*#__PURE__*/ function(StorageError) {
    "use strict";
    _inherits(StorageApiError, StorageError);
    function StorageApiError(message, status) {
        _class_call_check(this, StorageApiError);
        var _this;
        _this = _call_super(this, StorageApiError, [
            message
        ]);
        _this.name = "StorageApiError";
        _this.status = status;
        return _this;
    }
    _create_class(StorageApiError, [
        {
            key: "toJSON",
            value: function toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    status: this.status
                };
            }
        }
    ]);
    return StorageApiError;
}(StorageError);
var StorageUnknownError = /*#__PURE__*/ function(StorageError) {
    "use strict";
    _inherits(StorageUnknownError, StorageError);
    function StorageUnknownError(message, originalError) {
        _class_call_check(this, StorageUnknownError);
        var _this;
        _this = _call_super(this, StorageUnknownError, [
            message
        ]);
        _this.name = "StorageUnknownError";
        _this.originalError = originalError;
        return _this;
    }
    return StorageUnknownError;
}(StorageError);
// ../node_modules/@supabase/storage-js/dist/module/lib/helpers.js
var __awaiter2 = function __awaiter2(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var resolveFetch2 = function(customFetch) {
    var _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === "undefined") {
        _fetch = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return import('./lib-6ZLRJXTY.mjs').then(function(param) {
                var fetch2 = param.default;
                return fetch2.apply(void 0, _to_consumable_array(args));
            });
        };
    } else {
        _fetch = fetch;
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _fetch.apply(void 0, _to_consumable_array(args));
    };
};
var resolveResponse = function() {
    return __awaiter2(void 0, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(typeof Response === "undefined")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        import('./lib-6ZLRJXTY.mjs')
                    ];
                case 1:
                    return [
                        2,
                        _state.sent().Response
                    ];
                case 2:
                    return [
                        2,
                        Response
                    ];
            }
        });
    });
};
var recursiveToCamel = function(item) {
    if (Array.isArray(item)) {
        return item.map(function(el) {
            return recursiveToCamel(el);
        });
    } else if (typeof item === "function" || item !== Object(item)) {
        return item;
    }
    var result = {};
    Object.entries(item).forEach(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
        var newKey = key.replace(/([-_][a-z])/gi, function(c) {
            return c.toUpperCase().replace(/[-_]/g, "");
        });
        result[newKey] = recursiveToCamel(value);
    });
    return result;
};
// ../node_modules/@supabase/storage-js/dist/module/lib/fetch.js
var __awaiter3 = function __awaiter3(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var _getErrorMessage = function(err) {
    return err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
};
var handleError = function(error, reject, options) {
    return __awaiter3(void 0, void 0, void 0, function() {
        var Res;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        resolveResponse()
                    ];
                case 1:
                    Res = _state.sent();
                    if (_instanceof(error, Res) && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
                        error.json().then(function(err) {
                            reject(new StorageApiError(_getErrorMessage(err), error.status || 500));
                        }).catch(function(err) {
                            reject(new StorageUnknownError(_getErrorMessage(err), err));
                        });
                    } else {
                        reject(new StorageUnknownError(_getErrorMessage(error), error));
                    }
                    return [
                        2
                    ];
            }
        });
    });
};
var _getRequestParams = function(method, options, parameters, body) {
    var params = {
        method: method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") {
        return params;
    }
    params.headers = Object.assign({
        "Content-Type": "application/json"
    }, options === null || options === void 0 ? void 0 : options.headers);
    if (body) {
        params.body = JSON.stringify(body);
    }
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter3(this, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                new Promise(function(resolve, reject) {
                    fetcher(url, _getRequestParams(method, options, parameters, body)).then(function(result) {
                        if (!result.ok) throw result;
                        if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                        return result.json();
                    }).then(function(data) {
                        return resolve(data);
                    }).catch(function(error) {
                        return handleError(error, reject, options);
                    });
                })
            ];
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter3(this, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                _handleRequest(fetcher, "GET", url, options, parameters)
            ];
        });
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter3(this, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                _handleRequest(fetcher, "POST", url, options, parameters, body)
            ];
        });
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter3(this, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                _handleRequest(fetcher, "PUT", url, options, parameters, body)
            ];
        });
    });
}
function head(fetcher, url, options, parameters) {
    return __awaiter3(this, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                _handleRequest(fetcher, "HEAD", url, Object.assign(Object.assign({}, options), {
                    noResolveJson: true
                }), parameters)
            ];
        });
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter3(this, void 0, void 0, function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                _handleRequest(fetcher, "DELETE", url, options, parameters, body)
            ];
        });
    });
}
// ../node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js
var __awaiter4 = function __awaiter4(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: "name",
        order: "asc"
    }
};
var DEFAULT_FILE_OPTIONS = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: false
};
var StorageFileApi = /*#__PURE__*/ function() {
    "use strict";
    function StorageFileApi(url) {
        var headers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bucketId = arguments.length > 2 ? arguments[2] : void 0, fetch2 = arguments.length > 3 ? arguments[3] : void 0;
        _class_call_check(this, StorageFileApi);
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = resolveFetch2(fetch2);
    }
    _create_class(StorageFileApi, [
        {
            /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */ key: "uploadOrUpdate",
            value: function uploadOrUpdate(method, path, fileBody, fileOptions) {
                return __awaiter4(this, void 0, void 0, function() {
                    var body, options, headers, metadata, cleanPath, _path, res, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                                headers = Object.assign(Object.assign({}, this.headers), method === "POST" && {
                                    "x-upsert": String(options.upsert)
                                });
                                metadata = options.metadata;
                                if (typeof Blob !== "undefined" && _instanceof(fileBody, Blob)) {
                                    body = new FormData();
                                    body.append("cacheControl", options.cacheControl);
                                    if (metadata) {
                                        body.append("metadata", this.encodeMetadata(metadata));
                                    }
                                    body.append("", fileBody);
                                } else if (typeof FormData !== "undefined" && _instanceof(fileBody, FormData)) {
                                    body = fileBody;
                                    body.append("cacheControl", options.cacheControl);
                                    if (metadata) {
                                        body.append("metadata", this.encodeMetadata(metadata));
                                    }
                                } else {
                                    body = fileBody;
                                    headers["cache-control"] = "max-age=".concat(options.cacheControl);
                                    headers["content-type"] = options.contentType;
                                    if (metadata) {
                                        headers["x-metadata"] = this.toBase64(this.encodeMetadata(metadata));
                                    }
                                }
                                if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) {
                                    headers = Object.assign(Object.assign({}, headers), fileOptions.headers);
                                }
                                cleanPath = this._removeEmptyFolders(path);
                                _path = this._getFinalPath(cleanPath);
                                return [
                                    4,
                                    this.fetch("".concat(this.url, "/object/").concat(_path), Object.assign({
                                        method: method,
                                        body: body,
                                        headers: headers
                                    }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                                        duplex: options.duplex
                                    } : {}))
                                ];
                            case 1:
                                res = _state.sent();
                                return [
                                    4,
                                    res.json()
                                ];
                            case 2:
                                data = _state.sent();
                                if (res.ok) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                path: cleanPath,
                                                id: data.Id,
                                                fullPath: data.Key
                                            },
                                            error: null
                                        }
                                    ];
                                } else {
                                    _$error = data;
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: _$error
                                        }
                                    ];
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */ key: "upload",
            value: function upload(path, fileBody, fileOptions) {
                return __awaiter4(this, void 0, void 0, function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            this.uploadOrUpdate("POST", path, fileBody, fileOptions)
                        ];
                    });
                });
            }
        },
        {
            /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */ key: "uploadToSignedUrl",
            value: function uploadToSignedUrl(path, token, fileBody, fileOptions) {
                return __awaiter4(this, void 0, void 0, function() {
                    var cleanPath, _path, url, body, options, headers, res, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                cleanPath = this._removeEmptyFolders(path);
                                _path = this._getFinalPath(cleanPath);
                                url = new URL(this.url + "/object/upload/sign/".concat(_path));
                                url.searchParams.set("token", token);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                options = Object.assign({
                                    upsert: DEFAULT_FILE_OPTIONS.upsert
                                }, fileOptions);
                                headers = Object.assign(Object.assign({}, this.headers), {
                                    "x-upsert": String(options.upsert)
                                });
                                if (typeof Blob !== "undefined" && _instanceof(fileBody, Blob)) {
                                    body = new FormData();
                                    body.append("cacheControl", options.cacheControl);
                                    body.append("", fileBody);
                                } else if (typeof FormData !== "undefined" && _instanceof(fileBody, FormData)) {
                                    body = fileBody;
                                    body.append("cacheControl", options.cacheControl);
                                } else {
                                    body = fileBody;
                                    headers["cache-control"] = "max-age=".concat(options.cacheControl);
                                    headers["content-type"] = options.contentType;
                                }
                                return [
                                    4,
                                    this.fetch(url.toString(), {
                                        method: "PUT",
                                        body: body,
                                        headers: headers
                                    })
                                ];
                            case 2:
                                res = _state.sent();
                                return [
                                    4,
                                    res.json()
                                ];
                            case 3:
                                data = _state.sent();
                                if (res.ok) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                path: cleanPath,
                                                fullPath: data.Key
                                            },
                                            error: null
                                        }
                                    ];
                                } else {
                                    _$error = data;
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: _$error
                                        }
                                    ];
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */ key: "createSignedUploadUrl",
            value: function createSignedUploadUrl(path, options) {
                return __awaiter4(this, void 0, void 0, function() {
                    var _path, headers, data, url, token, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                _path = this._getFinalPath(path);
                                headers = Object.assign({}, this.headers);
                                if (options === null || options === void 0 ? void 0 : options.upsert) {
                                    headers["x-upsert"] = "true";
                                }
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/object/upload/sign/").concat(_path), {}, {
                                        headers: headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                url = new URL(this.url + data.url);
                                token = url.searchParams.get("token");
                                if (!token) {
                                    throw new StorageError("No token returned by API");
                                }
                                return [
                                    2,
                                    {
                                        data: {
                                            signedUrl: url.toString(),
                                            path: path,
                                            token: token
                                        },
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */ key: "update",
            value: function update(path, fileBody, fileOptions) {
                return __awaiter4(this, void 0, void 0, function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            this.uploadOrUpdate("PUT", path, fileBody, fileOptions)
                        ];
                    });
                });
            }
        },
        {
            /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */ key: "move",
            value: function move(fromPath, toPath, options) {
                return __awaiter4(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/object/move"), {
                                        bucketId: this.bucketId,
                                        sourceKey: fromPath,
                                        destinationKey: toPath,
                                        destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                                    }, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */ key: "copy",
            value: function copy(fromPath, toPath, options) {
                return __awaiter4(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/object/copy"), {
                                        bucketId: this.bucketId,
                                        sourceKey: fromPath,
                                        destinationKey: toPath,
                                        destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                                    }, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: {
                                            path: data.Key
                                        },
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */ key: "createSignedUrl",
            value: function createSignedUrl(path, expiresIn, options) {
                return __awaiter4(this, void 0, void 0, function() {
                    var _path, data, downloadQueryParam, signedUrl, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                _path = this._getFinalPath(path);
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/object/sign/").concat(_path), Object.assign({
                                        expiresIn: expiresIn
                                    }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                                        transform: options.transform
                                    } : {}), {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? "&download=".concat(options.download === true ? "" : options.download) : "";
                                signedUrl = encodeURI("".concat(this.url).concat(data.signedURL).concat(downloadQueryParam));
                                data = {
                                    signedUrl: signedUrl
                                };
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */ key: "createSignedUrls",
            value: function createSignedUrls(paths, expiresIn, options) {
                return __awaiter4(this, void 0, void 0, function() {
                    var _this, data, downloadQueryParam, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/object/sign/").concat(this.bucketId), {
                                        expiresIn: expiresIn,
                                        paths: paths
                                    }, {
                                        headers: this.headers
                                    })
                                ];
                            case 2:
                                data = _state.sent();
                                downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? "&download=".concat(options.download === true ? "" : options.download) : "";
                                return [
                                    2,
                                    {
                                        data: data.map(function(datum) {
                                            return Object.assign(Object.assign({}, datum), {
                                                signedUrl: datum.signedURL ? encodeURI("".concat(_this.url).concat(datum.signedURL).concat(downloadQueryParam)) : null
                                            });
                                        }),
                                        error: null
                                    }
                                ];
                            case 3:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */ key: "download",
            value: function download(path, options) {
                return __awaiter4(this, void 0, void 0, function() {
                    var wantsTransformation, renderPath, transformationQuery, queryString, _path, res, data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
                                renderPath = wantsTransformation ? "render/image/authenticated" : "object";
                                transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
                                queryString = transformationQuery ? "?".concat(transformationQuery) : "";
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                _path = this._getFinalPath(path);
                                return [
                                    4,
                                    get(this.fetch, "".concat(this.url, "/").concat(renderPath, "/").concat(_path).concat(queryString), {
                                        headers: this.headers,
                                        noResolveJson: true
                                    })
                                ];
                            case 2:
                                res = _state.sent();
                                return [
                                    4,
                                    res.blob()
                                ];
                            case 3:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 4:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Retrieves the details of an existing file.
   * @param path
   */ key: "info",
            value: function info(path) {
                return __awaiter4(this, void 0, void 0, function() {
                    var _path, data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _path = this._getFinalPath(path);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    get(this.fetch, "".concat(this.url, "/object/info/").concat(_path), {
                                        headers: this.headers
                                    })
                                ];
                            case 2:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: recursiveToCamel(data),
                                        error: null
                                    }
                                ];
                            case 3:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Checks the existence of a file.
   * @param path
   */ key: "exists",
            value: function exists(path) {
                return __awaiter4(this, void 0, void 0, function() {
                    var _path, error, originalError;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _path = this._getFinalPath(path);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    head(this.fetch, "".concat(this.url, "/object/").concat(_path), {
                                        headers: this.headers
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        data: true,
                                        error: null
                                    }
                                ];
                            case 3:
                                error = _state.sent();
                                if (isStorageError(error) && _instanceof(error, StorageUnknownError)) {
                                    originalError = error.originalError;
                                    if ([
                                        400,
                                        404
                                    ].includes(originalError === null || originalError === void 0 ? void 0 : originalError.status)) {
                                        return [
                                            2,
                                            {
                                                data: false,
                                                error: error
                                            }
                                        ];
                                    }
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */ key: "getPublicUrl",
            value: function getPublicUrl(path, options) {
                var _path = this._getFinalPath(path);
                var _queryString = [];
                var downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? "download=".concat(options.download === true ? "" : options.download) : "";
                if (downloadQueryParam !== "") {
                    _queryString.push(downloadQueryParam);
                }
                var wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== "undefined";
                var renderPath = wantsTransformation ? "render/image" : "object";
                var transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
                if (transformationQuery !== "") {
                    _queryString.push(transformationQuery);
                }
                var queryString = _queryString.join("&");
                if (queryString !== "") {
                    queryString = "?".concat(queryString);
                }
                return {
                    data: {
                        publicUrl: encodeURI("".concat(this.url, "/").concat(renderPath, "/public/").concat(_path).concat(queryString))
                    }
                };
            }
        },
        {
            /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */ key: "remove",
            value: function remove1(paths) {
                return __awaiter4(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    remove(this.fetch, "".concat(this.url, "/object/").concat(this.bucketId), {
                                        prefixes: paths
                                    }, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */ // async getMetadata(
            //   id: string
            // ): Promise<
            //   | {
            //       data: Metadata
            //       error: null
            //     }
            //   | {
            //       data: null
            //       error: StorageError
            //     }
            // > {
            //   try {
            //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
            //     return { data, error: null }
            //   } catch (error) {
            //     if (isStorageError(error)) {
            //       return { data: null, error }
            //     }
            //     throw error
            //   }
            // }
            /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */ // async updateMetadata(
            //   id: string,
            //   meta: Metadata
            // ): Promise<
            //   | {
            //       data: Metadata
            //       error: null
            //     }
            //   | {
            //       data: null
            //       error: StorageError
            //     }
            // > {
            //   try {
            //     const data = await post(
            //       this.fetch,
            //       `${this.url}/metadata/${id}`,
            //       { ...meta },
            //       { headers: this.headers }
            //     )
            //     return { data, error: null }
            //   } catch (error) {
            //     if (isStorageError(error)) {
            //       return { data: null, error }
            //     }
            //     throw error
            //   }
            // }
            /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */ key: "list",
            value: function list(path, options, parameters) {
                return __awaiter4(this, void 0, void 0, function() {
                    var body, data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                                    prefix: path || ""
                                });
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/object/list/").concat(this.bucketId), body, {
                                        headers: this.headers
                                    }, parameters)
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            key: "encodeMetadata",
            value: function encodeMetadata(metadata) {
                return JSON.stringify(metadata);
            }
        },
        {
            key: "toBase64",
            value: function toBase64(data) {
                if (typeof Buffer !== "undefined") {
                    return Buffer.from(data).toString("base64");
                }
                return btoa(data);
            }
        },
        {
            key: "_getFinalPath",
            value: function _getFinalPath(path) {
                return "".concat(this.bucketId, "/").concat(path);
            }
        },
        {
            key: "_removeEmptyFolders",
            value: function _removeEmptyFolders(path) {
                return path.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
            }
        },
        {
            key: "transformOptsToQueryString",
            value: function transformOptsToQueryString(transform) {
                var params = [];
                if (transform.width) {
                    params.push("width=".concat(transform.width));
                }
                if (transform.height) {
                    params.push("height=".concat(transform.height));
                }
                if (transform.resize) {
                    params.push("resize=".concat(transform.resize));
                }
                if (transform.format) {
                    params.push("format=".concat(transform.format));
                }
                if (transform.quality) {
                    params.push("quality=".concat(transform.quality));
                }
                return params.join("&");
            }
        }
    ]);
    return StorageFileApi;
}();
// ../node_modules/@supabase/storage-js/dist/module/lib/version.js
var version2 = "2.7.1";
// ../node_modules/@supabase/storage-js/dist/module/lib/constants.js
var DEFAULT_HEADERS2 = {
    "X-Client-Info": "storage-js/".concat(version2)
};
// ../node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js
var __awaiter5 = function __awaiter5(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var StorageBucketApi = /*#__PURE__*/ function() {
    "use strict";
    function StorageBucketApi(url) {
        var headers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fetch2 = arguments.length > 2 ? arguments[2] : void 0;
        _class_call_check(this, StorageBucketApi);
        this.url = url;
        this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS2), headers);
        this.fetch = resolveFetch2(fetch2);
    }
    _create_class(StorageBucketApi, [
        {
            /**
   * Retrieves the details of all Storage buckets within an existing project.
   */ key: "listBuckets",
            value: function listBuckets() {
                return __awaiter5(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    get(this.fetch, "".concat(this.url, "/bucket"), {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */ key: "getBucket",
            value: function getBucket(id) {
                return __awaiter5(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    get(this.fetch, "".concat(this.url, "/bucket/").concat(id), {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */ key: "createBucket",
            value: function createBucket(id) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    public: false
                };
                return __awaiter5(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/bucket"), {
                                        id: id,
                                        name: id,
                                        public: options.public,
                                        file_size_limit: options.fileSizeLimit,
                                        allowed_mime_types: options.allowedMimeTypes
                                    }, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */ key: "updateBucket",
            value: function updateBucket(id, options) {
                return __awaiter5(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    put(this.fetch, "".concat(this.url, "/bucket/").concat(id), {
                                        id: id,
                                        name: id,
                                        public: options.public,
                                        file_size_limit: options.fileSizeLimit,
                                        allowed_mime_types: options.allowedMimeTypes
                                    }, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */ key: "emptyBucket",
            value: function emptyBucket(id) {
                return __awaiter5(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    post(this.fetch, "".concat(this.url, "/bucket/").concat(id, "/empty"), {}, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        },
        {
            /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */ key: "deleteBucket",
            value: function deleteBucket(id) {
                return __awaiter5(this, void 0, void 0, function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    remove(this.fetch, "".concat(this.url, "/bucket/").concat(id), {}, {
                                        headers: this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isStorageError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
            }
        }
    ]);
    return StorageBucketApi;
}();
// ../node_modules/@supabase/storage-js/dist/module/StorageClient.js
var StorageClient = /*#__PURE__*/ function(StorageBucketApi) {
    "use strict";
    _inherits(StorageClient, StorageBucketApi);
    function StorageClient(url) {
        var headers = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fetch2 = arguments.length > 2 ? arguments[2] : void 0;
        _class_call_check(this, StorageClient);
        return _call_super(this, StorageClient, [
            url,
            headers,
            fetch2
        ]);
    }
    _create_class(StorageClient, [
        {
            /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */ key: "from",
            value: function from(id) {
                return new StorageFileApi(this.url, this.headers, id, this.fetch);
            }
        }
    ]);
    return StorageClient;
}(StorageBucketApi);
// ../node_modules/@supabase/supabase-js/dist/module/lib/version.js
var version3 = "2.45.6";
// ../node_modules/@supabase/supabase-js/dist/module/lib/constants.js
var JS_ENV = "";
if (typeof Deno !== "undefined") {
    JS_ENV = "deno";
} else if (typeof document !== "undefined") {
    JS_ENV = "web";
} else if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    JS_ENV = "react-native";
} else {
    JS_ENV = "node";
}
var DEFAULT_HEADERS3 = {
    "X-Client-Info": "supabase-js-".concat(JS_ENV, "/").concat(version3)
};
var DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS3
};
var DEFAULT_DB_OPTIONS = {
    schema: "public"
};
var DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: "implicit"
};
var DEFAULT_REALTIME_OPTIONS = {};
// ../node_modules/@supabase/supabase-js/dist/module/lib/fetch.js
var import_node_fetch = __toESM(require_lib());
var __awaiter6 = function __awaiter6(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var resolveFetch3 = function(customFetch) {
    var _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === "undefined") {
        _fetch = import_node_fetch.default;
    } else {
        _fetch = fetch;
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _fetch.apply(void 0, _to_consumable_array(args));
    };
};
var resolveHeadersConstructor = function() {
    if (typeof Headers === "undefined") {
        return import_node_fetch.Headers;
    }
    return Headers;
};
var fetchWithAuth = function(supabaseKey, getAccessToken, customFetch) {
    var fetch2 = resolveFetch3(customFetch);
    var HeadersConstructor = resolveHeadersConstructor();
    return function(input, init) {
        return __awaiter6(void 0, void 0, void 0, function() {
            var _a, accessToken, headers;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getAccessToken()
                        ];
                    case 1:
                        accessToken = (_a = _state.sent()) !== null && _a !== void 0 ? _a : supabaseKey;
                        headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
                        if (!headers.has("apikey")) {
                            headers.set("apikey", supabaseKey);
                        }
                        if (!headers.has("Authorization")) {
                            headers.set("Authorization", "Bearer ".concat(accessToken));
                        }
                        return [
                            2,
                            fetch2(input, Object.assign(Object.assign({}, init), {
                                headers: headers
                            }))
                        ];
                }
            });
        });
    };
};
// ../node_modules/@supabase/supabase-js/dist/module/lib/helpers.js
var __awaiter7 = function __awaiter7(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
function stripTrailingSlash(url) {
    return url.replace(/\/$/, "");
}
function applySettingDefaults(options, defaults) {
    var _this = this;
    var dbOptions = options.db, authOptions = options.auth, realtimeOptions = options.realtime, globalOptions = options.global;
    var DEFAULT_DB_OPTIONS2 = defaults.db, DEFAULT_AUTH_OPTIONS2 = defaults.auth, DEFAULT_REALTIME_OPTIONS2 = defaults.realtime, DEFAULT_GLOBAL_OPTIONS2 = defaults.global;
    var result = {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS2), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS2), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS2), realtimeOptions),
        global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS2), globalOptions),
        accessToken: function() {
            return __awaiter7(_this, void 0, void 0, function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        ""
                    ];
                });
            });
        }
    };
    if (options.accessToken) {
        result.accessToken = options.accessToken;
    } else {
        delete result.accessToken;
    }
    return result;
}
// ../node_modules/@supabase/auth-js/dist/module/lib/version.js
var version4 = "2.65.1";
// ../node_modules/@supabase/auth-js/dist/module/lib/constants.js
var GOTRUE_URL = "http://localhost:9999";
var STORAGE_KEY = "supabase.auth.token";
var DEFAULT_HEADERS4 = {
    "X-Client-Info": "gotrue-js/".concat(version4)
};
var EXPIRY_MARGIN = 10;
var API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
var API_VERSIONS = {
    "2024-01-01": {
        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
        name: "2024-01-01"
    }
};
// ../node_modules/@supabase/auth-js/dist/module/lib/helpers.js
function expiresAt(expiresIn) {
    var timeNow = Math.round(Date.now() / 1e3);
    return timeNow + expiresIn;
}
function uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
        return v.toString(16);
    });
}
var isBrowser = function() {
    return typeof document !== "undefined";
};
var localStorageWriteTests = {
    tested: false,
    writable: false
};
var supportsLocalStorage = function() {
    if (!isBrowser()) {
        return false;
    }
    try {
        if (_type_of(globalThis.localStorage) !== "object") {
            return false;
        }
    } catch (e) {
        return false;
    }
    if (localStorageWriteTests.tested) {
        return localStorageWriteTests.writable;
    }
    var randomKey = "lswt-".concat(Math.random()).concat(Math.random());
    try {
        globalThis.localStorage.setItem(randomKey, randomKey);
        globalThis.localStorage.removeItem(randomKey);
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = true;
    } catch (e) {
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
};
function parseParametersFromURL(href) {
    var result = {};
    var url = new URL(href);
    if (url.hash && url.hash[0] === "#") {
        try {
            var hashSearchParams = new URLSearchParams(url.hash.substring(1));
            hashSearchParams.forEach(function(value, key) {
                result[key] = value;
            });
        } catch (e) {}
    }
    url.searchParams.forEach(function(value, key) {
        result[key] = value;
    });
    return result;
}
var resolveFetch4 = function(customFetch) {
    var _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === "undefined") {
        _fetch = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return import('./lib-6ZLRJXTY.mjs').then(function(param) {
                var fetch2 = param.default;
                return fetch2.apply(void 0, _to_consumable_array(args));
            });
        };
    } else {
        _fetch = fetch;
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _fetch.apply(void 0, _to_consumable_array(args));
    };
};
var looksLikeFetchResponse = function(maybeResponse) {
    return (typeof maybeResponse === "undefined" ? "undefined" : _type_of(maybeResponse)) === "object" && maybeResponse !== null && "status" in maybeResponse && "ok" in maybeResponse && "json" in maybeResponse && typeof maybeResponse.json === "function";
};
var setItemAsync = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(storage, key, data) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        storage.setItem(key, JSON.stringify(data))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function setItemAsync(storage, key, data) {
        return _ref.apply(this, arguments);
    };
}();
var getItemAsync = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(storage, key) {
        var value;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        storage.getItem(key)
                    ];
                case 1:
                    value = _state.sent();
                    if (!value) {
                        return [
                            2,
                            null
                        ];
                    }
                    try {
                        return [
                            2,
                            JSON.parse(value)
                        ];
                    } catch (_a) {
                        return [
                            2,
                            value
                        ];
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function getItemAsync(storage, key) {
        return _ref.apply(this, arguments);
    };
}();
var removeItemAsync = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(storage, key) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        storage.removeItem(key)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function removeItemAsync(storage, key) {
        return _ref.apply(this, arguments);
    };
}();
function decodeBase64URL(value) {
    var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var base64 = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    value = value.replace("-", "+").replace("_", "/");
    while(i < value.length){
        enc1 = key.indexOf(value.charAt(i++));
        enc2 = key.indexOf(value.charAt(i++));
        enc3 = key.indexOf(value.charAt(i++));
        enc4 = key.indexOf(value.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        base64 = base64 + String.fromCharCode(chr1);
        if (enc3 != 64 && chr2 != 0) {
            base64 = base64 + String.fromCharCode(chr2);
        }
        if (enc4 != 64 && chr3 != 0) {
            base64 = base64 + String.fromCharCode(chr3);
        }
    }
    return base64;
}
var Deferred = function _Deferred() {
    "use strict";
    var _this = this;
    _class_call_check(this, _Deferred);
    this.promise = new _Deferred.promiseConstructor(function(res, rej) {
        _this.resolve = res;
        _this.reject = rej;
    });
};
Deferred.promiseConstructor = Promise;
function decodeJWTPayload(token) {
    var base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
    var parts = token.split(".");
    if (parts.length !== 3) {
        throw new Error("JWT is not valid: not a JWT structure");
    }
    if (!base64UrlRegex.test(parts[1])) {
        throw new Error("JWT is not valid: payload is not in base64url format");
    }
    var base64Url = parts[1];
    return JSON.parse(decodeBase64URL(base64Url));
}
function sleep(time) {
    return _sleep.apply(this, arguments);
}
function _sleep() {
    _sleep = _async_to_generator(function(time) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(accept) {
                            setTimeout(function() {
                                return accept(null);
                            }, time);
                        })
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _sleep.apply(this, arguments);
}
function retryable(fn, isRetryable) {
    var promise = new Promise(function(accept, reject) {
        _async_to_generator(function() {
            var attempt, result, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        attempt = 0;
                        _state.label = 1;
                    case 1:
                        if (!(attempt < Infinity)) return [
                            3,
                            6
                        ];
                        _state.label = 2;
                    case 2:
                        _state.trys.push([
                            2,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4,
                            fn(attempt)
                        ];
                    case 3:
                        result = _state.sent();
                        if (!isRetryable(attempt, null, result)) {
                            accept(result);
                            return [
                                2
                            ];
                        }
                        return [
                            3,
                            5
                        ];
                    case 4:
                        e = _state.sent();
                        if (!isRetryable(attempt, e)) {
                            reject(e);
                            return [
                                2
                            ];
                        }
                        return [
                            3,
                            5
                        ];
                    case 5:
                        attempt++;
                        return [
                            3,
                            1
                        ];
                    case 6:
                        return [
                            2
                        ];
                }
            });
        })();
    });
    return promise;
}
function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
}
function generatePKCEVerifier() {
    var verifierLength = 56;
    var array = new Uint32Array(verifierLength);
    if (typeof crypto === "undefined") {
        var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
        var charSetLen = charSet.length;
        var verifier = "";
        for(var i = 0; i < verifierLength; i++){
            verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
        }
        return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join("");
}
function sha256(randomString) {
    return _sha256.apply(this, arguments);
}
function _sha256() {
    _sha256 = _async_to_generator(function(randomString) {
        var encoder, encodedData, hash, bytes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    encoder = new TextEncoder();
                    encodedData = encoder.encode(randomString);
                    return [
                        4,
                        crypto.subtle.digest("SHA-256", encodedData)
                    ];
                case 1:
                    hash = _state.sent();
                    bytes = new Uint8Array(hash);
                    return [
                        2,
                        Array.from(bytes).map(function(c) {
                            return String.fromCharCode(c);
                        }).join("")
                    ];
            }
        });
    });
    return _sha256.apply(this, arguments);
}
function base64urlencode(str) {
    return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function generatePKCEChallenge(verifier) {
    return _generatePKCEChallenge.apply(this, arguments);
}
function _generatePKCEChallenge() {
    _generatePKCEChallenge = _async_to_generator(function(verifier) {
        var hasCryptoSupport, hashed;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    hasCryptoSupport = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined" && typeof TextEncoder !== "undefined";
                    if (!hasCryptoSupport) {
                        console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.");
                        return [
                            2,
                            verifier
                        ];
                    }
                    return [
                        4,
                        sha256(verifier)
                    ];
                case 1:
                    hashed = _state.sent();
                    return [
                        2,
                        base64urlencode(hashed)
                    ];
            }
        });
    });
    return _generatePKCEChallenge.apply(this, arguments);
}
function getCodeChallengeAndMethod(storage, storageKey) {
    return _getCodeChallengeAndMethod.apply(this, arguments);
}
function _getCodeChallengeAndMethod() {
    _getCodeChallengeAndMethod = _async_to_generator(function(storage, storageKey) {
        var isPasswordRecovery, codeVerifier, storedCodeVerifier, codeChallenge, codeChallengeMethod;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    isPasswordRecovery = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : false;
                    codeVerifier = generatePKCEVerifier();
                    storedCodeVerifier = codeVerifier;
                    if (isPasswordRecovery) {
                        storedCodeVerifier += "/PASSWORD_RECOVERY";
                    }
                    return [
                        4,
                        setItemAsync(storage, "".concat(storageKey, "-code-verifier"), storedCodeVerifier)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        generatePKCEChallenge(codeVerifier)
                    ];
                case 2:
                    codeChallenge = _state.sent();
                    codeChallengeMethod = codeVerifier === codeChallenge ? "plain" : "s256";
                    return [
                        2,
                        [
                            codeChallenge,
                            codeChallengeMethod
                        ]
                    ];
            }
        });
    });
    return _getCodeChallengeAndMethod.apply(this, arguments);
}
var API_VERSION_REGEX = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function parseResponseAPIVersion(response) {
    var apiVersion = response.headers.get(API_VERSION_HEADER_NAME);
    if (!apiVersion) {
        return null;
    }
    if (!apiVersion.match(API_VERSION_REGEX)) {
        return null;
    }
    try {
        var date = /* @__PURE__ */ new Date("".concat(apiVersion, "T00:00:00.0Z"));
        return date;
    } catch (e) {
        return null;
    }
}
// ../node_modules/@supabase/auth-js/dist/module/lib/errors.js
var AuthError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(AuthError, Error1);
    function AuthError(message, status, code) {
        _class_call_check(this, AuthError);
        var _this;
        _this = _call_super(this, AuthError, [
            message
        ]);
        _this.__isAuthError = true;
        _this.name = "AuthError";
        _this.status = status;
        _this.code = code;
        return _this;
    }
    return AuthError;
}(_wrap_native_super(Error));
function isAuthError(error) {
    return (typeof error === "undefined" ? "undefined" : _type_of(error)) === "object" && error !== null && "__isAuthError" in error;
}
var AuthApiError = /*#__PURE__*/ function(AuthError) {
    "use strict";
    _inherits(AuthApiError, AuthError);
    function AuthApiError(message, status, code) {
        _class_call_check(this, AuthApiError);
        var _this;
        _this = _call_super(this, AuthApiError, [
            message,
            status,
            code
        ]);
        _this.name = "AuthApiError";
        _this.status = status;
        _this.code = code;
        return _this;
    }
    return AuthApiError;
}(AuthError);
function isAuthApiError(error) {
    return isAuthError(error) && error.name === "AuthApiError";
}
var AuthUnknownError = /*#__PURE__*/ function(AuthError) {
    "use strict";
    _inherits(AuthUnknownError, AuthError);
    function AuthUnknownError(message, originalError) {
        _class_call_check(this, AuthUnknownError);
        var _this;
        _this = _call_super(this, AuthUnknownError, [
            message
        ]);
        _this.name = "AuthUnknownError";
        _this.originalError = originalError;
        return _this;
    }
    return AuthUnknownError;
}(AuthError);
var CustomAuthError = /*#__PURE__*/ function(AuthError) {
    "use strict";
    _inherits(CustomAuthError, AuthError);
    function CustomAuthError(message, name, status, code) {
        _class_call_check(this, CustomAuthError);
        var _this;
        _this = _call_super(this, CustomAuthError, [
            message,
            status,
            code
        ]);
        _this.name = name;
        _this.status = status;
        return _this;
    }
    return CustomAuthError;
}(AuthError);
var AuthSessionMissingError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthSessionMissingError, CustomAuthError);
    function AuthSessionMissingError() {
        _class_call_check(this, AuthSessionMissingError);
        return _call_super(this, AuthSessionMissingError, [
            "Auth session missing!",
            "AuthSessionMissingError",
            400,
            void 0
        ]);
    }
    return AuthSessionMissingError;
}(CustomAuthError);
function isAuthSessionMissingError(error) {
    return isAuthError(error) && error.name === "AuthSessionMissingError";
}
var AuthInvalidTokenResponseError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthInvalidTokenResponseError, CustomAuthError);
    function AuthInvalidTokenResponseError() {
        _class_call_check(this, AuthInvalidTokenResponseError);
        return _call_super(this, AuthInvalidTokenResponseError, [
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500,
            void 0
        ]);
    }
    return AuthInvalidTokenResponseError;
}(CustomAuthError);
var AuthInvalidCredentialsError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthInvalidCredentialsError, CustomAuthError);
    function AuthInvalidCredentialsError(message) {
        _class_call_check(this, AuthInvalidCredentialsError);
        return _call_super(this, AuthInvalidCredentialsError, [
            message,
            "AuthInvalidCredentialsError",
            400,
            void 0
        ]);
    }
    return AuthInvalidCredentialsError;
}(CustomAuthError);
var AuthImplicitGrantRedirectError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthImplicitGrantRedirectError, CustomAuthError);
    function AuthImplicitGrantRedirectError(message) {
        var details = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        _class_call_check(this, AuthImplicitGrantRedirectError);
        var _this;
        _this = _call_super(this, AuthImplicitGrantRedirectError, [
            message,
            "AuthImplicitGrantRedirectError",
            500,
            void 0
        ]);
        _this.details = null;
        _this.details = details;
        return _this;
    }
    _create_class(AuthImplicitGrantRedirectError, [
        {
            key: "toJSON",
            value: function toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    status: this.status,
                    details: this.details
                };
            }
        }
    ]);
    return AuthImplicitGrantRedirectError;
}(CustomAuthError);
var AuthPKCEGrantCodeExchangeError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthPKCEGrantCodeExchangeError, CustomAuthError);
    function AuthPKCEGrantCodeExchangeError(message) {
        var details = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        _class_call_check(this, AuthPKCEGrantCodeExchangeError);
        var _this;
        _this = _call_super(this, AuthPKCEGrantCodeExchangeError, [
            message,
            "AuthPKCEGrantCodeExchangeError",
            500,
            void 0
        ]);
        _this.details = null;
        _this.details = details;
        return _this;
    }
    _create_class(AuthPKCEGrantCodeExchangeError, [
        {
            key: "toJSON",
            value: function toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    status: this.status,
                    details: this.details
                };
            }
        }
    ]);
    return AuthPKCEGrantCodeExchangeError;
}(CustomAuthError);
var AuthRetryableFetchError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthRetryableFetchError, CustomAuthError);
    function AuthRetryableFetchError(message, status) {
        _class_call_check(this, AuthRetryableFetchError);
        return _call_super(this, AuthRetryableFetchError, [
            message,
            "AuthRetryableFetchError",
            status,
            void 0
        ]);
    }
    return AuthRetryableFetchError;
}(CustomAuthError);
function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === "AuthRetryableFetchError";
}
var AuthWeakPasswordError = /*#__PURE__*/ function(CustomAuthError) {
    "use strict";
    _inherits(AuthWeakPasswordError, CustomAuthError);
    function AuthWeakPasswordError(message, status, reasons) {
        _class_call_check(this, AuthWeakPasswordError);
        var _this;
        _this = _call_super(this, AuthWeakPasswordError, [
            message,
            "AuthWeakPasswordError",
            status,
            "weak_password"
        ]);
        _this.reasons = reasons;
        return _this;
    }
    return AuthWeakPasswordError;
}(CustomAuthError);
// ../node_modules/@supabase/auth-js/dist/module/lib/fetch.js
var __rest = function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var _getErrorMessage2 = function(err) {
    return err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
};
var NETWORK_ERROR_CODES = [
    502,
    503,
    504
];
function handleError2(error) {
    return _handleError2.apply(this, arguments);
}
function _handleError2() {
    _handleError2 = _async_to_generator(function(error) {
        var _a, data, e, errorCode, responseAPIVersion;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!looksLikeFetchResponse(error)) {
                        throw new AuthRetryableFetchError(_getErrorMessage2(error), 0);
                    }
                    if (NETWORK_ERROR_CODES.includes(error.status)) {
                        throw new AuthRetryableFetchError(_getErrorMessage2(error), error.status);
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        error.json()
                    ];
                case 2:
                    data = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    throw new AuthUnknownError(_getErrorMessage2(e), e);
                case 4:
                    errorCode = void 0;
                    responseAPIVersion = parseResponseAPIVersion(error);
                    if (responseAPIVersion && responseAPIVersion.getTime() >= API_VERSIONS["2024-01-01"].timestamp && (typeof data === "undefined" ? "undefined" : _type_of(data)) === "object" && data && typeof data.code === "string") {
                        errorCode = data.code;
                    } else if ((typeof data === "undefined" ? "undefined" : _type_of(data)) === "object" && data && typeof data.error_code === "string") {
                        errorCode = data.error_code;
                    }
                    if (!errorCode) {
                        if ((typeof data === "undefined" ? "undefined" : _type_of(data)) === "object" && data && _type_of(data.weak_password) === "object" && data.weak_password && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.reasons.reduce(function(a, i) {
                            return a && typeof i === "string";
                        }, true)) {
                            throw new AuthWeakPasswordError(_getErrorMessage2(data), error.status, data.weak_password.reasons);
                        }
                    } else if (errorCode === "weak_password") {
                        throw new AuthWeakPasswordError(_getErrorMessage2(data), error.status, ((_a = data.weak_password) === null || _a === void 0 ? void 0 : _a.reasons) || []);
                    } else if (errorCode === "session_not_found") {
                        throw new AuthSessionMissingError();
                    }
                    throw new AuthApiError(_getErrorMessage2(data), error.status || 500, errorCode);
            }
        });
    });
    return _handleError2.apply(this, arguments);
}
var _getRequestParams2 = function(method, options, parameters, body) {
    var params = {
        method: method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === "GET") {
        return params;
    }
    params.headers = Object.assign({
        "Content-Type": "application/json;charset=UTF-8"
    }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _request(fetcher, method, url, options) {
    return __request.apply(this, arguments);
}
function __request() {
    __request = _async_to_generator(function(fetcher, method, url, options) {
        var _a, headers, qs, queryString, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
                    if (!headers[API_VERSION_HEADER_NAME]) {
                        headers[API_VERSION_HEADER_NAME] = API_VERSIONS["2024-01-01"].name;
                    }
                    if (options === null || options === void 0 ? void 0 : options.jwt) {
                        headers["Authorization"] = "Bearer ".concat(options.jwt);
                    }
                    qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
                    if (options === null || options === void 0 ? void 0 : options.redirectTo) {
                        qs["redirect_to"] = options.redirectTo;
                    }
                    queryString = Object.keys(qs).length ? "?" + new URLSearchParams(qs).toString() : "";
                    return [
                        4,
                        _handleRequest2(fetcher, method, url + queryString, {
                            headers: headers,
                            noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson
                        }, {}, options === null || options === void 0 ? void 0 : options.body)
                    ];
                case 1:
                    data = _state.sent();
                    return [
                        2,
                        (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : {
                            data: Object.assign({}, data),
                            error: null
                        }
                    ];
            }
        });
    });
    return __request.apply(this, arguments);
}
function _handleRequest2(fetcher, method, url, options, parameters, body) {
    return __handleRequest2.apply(this, arguments);
}
function __handleRequest2() {
    __handleRequest2 = _async_to_generator(function(fetcher, method, url, options, parameters, body) {
        var requestParams, result, e, e1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestParams = _getRequestParams2(method, options, parameters, body);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        fetcher(url, Object.assign({}, requestParams))
                    ];
                case 2:
                    result = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    console.error(e);
                    throw new AuthRetryableFetchError(_getErrorMessage2(e), 0);
                case 4:
                    if (!!result.ok) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        handleError2(result)
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    if (options === null || options === void 0 ? void 0 : options.noResolveJson) {
                        return [
                            2,
                            result
                        ];
                    }
                    _state.label = 7;
                case 7:
                    _state.trys.push([
                        7,
                        9,
                        ,
                        11
                    ]);
                    return [
                        4,
                        result.json()
                    ];
                case 8:
                    return [
                        2,
                        _state.sent()
                    ];
                case 9:
                    e1 = _state.sent();
                    return [
                        4,
                        handleError2(e1)
                    ];
                case 10:
                    _state.sent();
                    return [
                        3,
                        11
                    ];
                case 11:
                    return [
                        2
                    ];
            }
        });
    });
    return __handleRequest2.apply(this, arguments);
}
function _sessionResponse(data) {
    var _a;
    var session = null;
    if (hasSession(data)) {
        session = Object.assign({}, data);
        if (!data.expires_at) {
            session.expires_at = expiresAt(data.expires_in);
        }
    }
    var user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            session: session,
            user: user
        },
        error: null
    };
}
function _sessionResponsePassword(data) {
    var response = _sessionResponse(data);
    if (!response.error && data.weak_password && _type_of(data.weak_password) === "object" && Array.isArray(data.weak_password.reasons) && data.weak_password.reasons.length && data.weak_password.message && typeof data.weak_password.message === "string" && data.weak_password.reasons.reduce(function(a, i) {
        return a && typeof i === "string";
    }, true)) {
        response.data.weak_password = data.weak_password;
    }
    return response;
}
function _userResponse(data) {
    var _a;
    var user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return {
        data: {
            user: user
        },
        error: null
    };
}
function _ssoResponse(data) {
    return {
        data: data,
        error: null
    };
}
function _generateLinkResponse(data) {
    var action_link = data.action_link, email_otp = data.email_otp, hashed_token = data.hashed_token, redirect_to = data.redirect_to, verification_type = data.verification_type, rest = __rest(data, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type"
    ]);
    var properties = {
        action_link: action_link,
        email_otp: email_otp,
        hashed_token: hashed_token,
        redirect_to: redirect_to,
        verification_type: verification_type
    };
    var user = Object.assign({}, rest);
    return {
        data: {
            properties: properties,
            user: user
        },
        error: null
    };
}
function _noResolveJsonResponse(data) {
    return data;
}
function hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
}
// ../node_modules/@supabase/auth-js/dist/module/GoTrueAdminApi.js
var __rest2 = function __rest2(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var GoTrueAdminApi = /*#__PURE__*/ function() {
    "use strict";
    function GoTrueAdminApi(param) {
        var _param_url = param.url, url = _param_url === void 0 ? "" : _param_url, _param_headers = param.headers, headers = _param_headers === void 0 ? {} : _param_headers, fetch2 = param.fetch;
        _class_call_check(this, GoTrueAdminApi);
        this.url = url;
        this.headers = headers;
        this.fetch = resolveFetch4(fetch2);
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this)
        };
    }
    _create_class(GoTrueAdminApi, [
        {
            key: "signOut",
            value: /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */ function signOut(jwt) {
                var scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "global";
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/logout?scope=").concat(scope), {
                                        headers: _this.headers,
                                        jwt: jwt,
                                        noResolveJson: true
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        data: null,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "inviteUserByEmail",
            value: /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */ function inviteUserByEmail(email) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/invite"), {
                                        body: {
                                            email: email,
                                            data: options.data
                                        },
                                        headers: _this.headers,
                                        redirectTo: options.redirectTo,
                                        xform: _userResponse
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generateLink",
            value: /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */ function generateLink(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var options, rest, body, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                options = params.options, rest = __rest2(params, [
                                    "options"
                                ]);
                                body = Object.assign(Object.assign({}, rest), options);
                                if ("newEmail" in rest) {
                                    body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
                                    delete body["newEmail"];
                                }
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/admin/generate_link"), {
                                        body: body,
                                        headers: _this.headers,
                                        xform: _generateLinkResponse,
                                        redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                properties: null,
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createUser",
            value: // User Admin API
            /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */ function createUser(attributes) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/admin/users"), {
                                        body: attributes,
                                        headers: _this.headers,
                                        xform: _userResponse
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "listUsers",
            value: /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */ function listUsers(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, _c, _d, _e, _f, _g, pagination, response, users, total, links, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                pagination = {
                                    nextPage: null,
                                    lastPage: 0,
                                    total: 0
                                };
                                return [
                                    4,
                                    _request(_this.fetch, "GET", "".concat(_this.url, "/admin/users"), {
                                        headers: _this.headers,
                                        noResolveJson: true,
                                        query: {
                                            page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "",
                                            per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""
                                        },
                                        xform: _noResolveJsonResponse
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                if (response.error) throw response.error;
                                return [
                                    4,
                                    response.json()
                                ];
                            case 2:
                                users = _state.sent();
                                total = (_e = response.headers.get("x-total-count")) !== null && _e !== void 0 ? _e : 0;
                                links = (_g = (_f = response.headers.get("link")) === null || _f === void 0 ? void 0 : _f.split(",")) !== null && _g !== void 0 ? _g : [];
                                if (links.length > 0) {
                                    links.forEach(function(link) {
                                        var page = parseInt(link.split(";")[0].split("=")[1].substring(0, 1));
                                        var rel = JSON.parse(link.split(";")[1].split("=")[1]);
                                        pagination["".concat(rel, "Page")] = page;
                                    });
                                    pagination.total = parseInt(total);
                                }
                                return [
                                    2,
                                    {
                                        data: Object.assign(Object.assign({}, users), pagination),
                                        error: null
                                    }
                                ];
                            case 3:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                users: []
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUserById",
            value: /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */ function getUserById(uid) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "GET", "".concat(_this.url, "/admin/users/").concat(uid), {
                                        headers: _this.headers,
                                        xform: _userResponse
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateUserById",
            value: /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */ function updateUserById(uid, attributes) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "PUT", "".concat(_this.url, "/admin/users/").concat(uid), {
                                        body: attributes,
                                        headers: _this.headers,
                                        xform: _userResponse
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteUser",
            value: /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted (setting `deleted_at` to the current timestamp and disabling their account while preserving their data) from the auth schema.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */ function deleteUser(id) {
                var shouldSoftDelete = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "DELETE", "".concat(_this.url, "/admin/users/").concat(id), {
                                        headers: _this.headers,
                                        body: {
                                            should_soft_delete: shouldSoftDelete
                                        },
                                        xform: _userResponse
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_listFactors",
            value: function _listFactors(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "GET", "".concat(_this.url, "/admin/users/").concat(params.userId, "/factors"), {
                                        headers: _this.headers,
                                        xform: function(factors) {
                                            return {
                                                data: {
                                                    factors: factors
                                                },
                                                error: null
                                            };
                                        }
                                    })
                                ];
                            case 1:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: _$error
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_deleteFactor",
            value: function _deleteFactor(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var data, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "DELETE", "".concat(_this.url, "/admin/users/").concat(params.userId, "/factors/").concat(params.id), {
                                        headers: _this.headers
                                    })
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return GoTrueAdminApi;
}();
// ../node_modules/@supabase/auth-js/dist/module/lib/local-storage.js
var localStorageAdapter = {
    getItem: function(key) {
        if (!supportsLocalStorage()) {
            return null;
        }
        return globalThis.localStorage.getItem(key);
    },
    setItem: function(key, value) {
        if (!supportsLocalStorage()) {
            return;
        }
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: function(key) {
        if (!supportsLocalStorage()) {
            return;
        }
        globalThis.localStorage.removeItem(key);
    }
};
function memoryLocalStorageAdapter() {
    var store = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value;
        },
        removeItem: function(key) {
            delete store[key];
        }
    };
}
// ../node_modules/@supabase/auth-js/dist/module/lib/polyfills.js
function polyfillGlobalThis() {
    if ((typeof globalThis === "undefined" ? "undefined" : _type_of(globalThis)) === "object") return;
    try {
        Object.defineProperty(Object.prototype, "__magic__", {
            get: function get() {
                return this;
            },
            configurable: true
        });
        __magic__.globalThis = __magic__;
        delete Object.prototype.__magic__;
    } catch (e) {
        if (typeof self !== "undefined") {
            self.globalThis = self;
        }
    }
}
// ../node_modules/@supabase/auth-js/dist/module/lib/locks.js
var internals = {
    /**
   * @experimental
   */ debug: !!(globalThis && supportsLocalStorage() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
var LockAcquireTimeoutError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(LockAcquireTimeoutError, Error1);
    function LockAcquireTimeoutError(message) {
        _class_call_check(this, LockAcquireTimeoutError);
        var _this;
        _this = _call_super(this, LockAcquireTimeoutError, [
            message
        ]);
        _this.isAcquireTimeout = true;
        return _this;
    }
    return LockAcquireTimeoutError;
}(_wrap_native_super(Error));
var NavigatorLockAcquireTimeoutError = /*#__PURE__*/ function(LockAcquireTimeoutError) {
    "use strict";
    _inherits(NavigatorLockAcquireTimeoutError, LockAcquireTimeoutError);
    function NavigatorLockAcquireTimeoutError() {
        _class_call_check(this, NavigatorLockAcquireTimeoutError);
        return _call_super(this, NavigatorLockAcquireTimeoutError, arguments);
    }
    return NavigatorLockAcquireTimeoutError;
}(LockAcquireTimeoutError);
function navigatorLock(name, acquireTimeout, fn) {
    return _navigatorLock.apply(this, arguments);
}
function _navigatorLock() {
    _navigatorLock = _async_to_generator(function(name, acquireTimeout, fn) {
        var abortController;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (internals.debug) {
                        console.log("@supabase/gotrue-js: navigatorLock: acquire lock", name, acquireTimeout);
                    }
                    abortController = new globalThis.AbortController();
                    if (acquireTimeout > 0) {
                        setTimeout(function() {
                            abortController.abort();
                            if (internals.debug) {
                                console.log("@supabase/gotrue-js: navigatorLock acquire timed out", name);
                            }
                        }, acquireTimeout);
                    }
                    return [
                        4,
                        globalThis.navigator.locks.request(name, acquireTimeout === 0 ? {
                            mode: "exclusive",
                            ifAvailable: true
                        } : {
                            mode: "exclusive",
                            signal: abortController.signal
                        }, /*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function(lock) {
                                var result, e;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!lock) return [
                                                3,
                                                5
                                            ];
                                            if (internals.debug) {
                                                console.log("@supabase/gotrue-js: navigatorLock: acquired", name, lock.name);
                                            }
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                ,
                                                3,
                                                4
                                            ]);
                                            return [
                                                4,
                                                fn()
                                            ];
                                        case 2:
                                            return [
                                                2,
                                                _state.sent()
                                            ];
                                        case 3:
                                            if (internals.debug) {
                                                console.log("@supabase/gotrue-js: navigatorLock: released", name, lock.name);
                                            }
                                            return [
                                                7
                                            ];
                                        case 4:
                                            return [
                                                3,
                                                12
                                            ];
                                        case 5:
                                            if (!(acquireTimeout === 0)) return [
                                                3,
                                                6
                                            ];
                                            if (internals.debug) {
                                                console.log("@supabase/gotrue-js: navigatorLock: not immediately available", name);
                                            }
                                            throw new NavigatorLockAcquireTimeoutError('Acquiring an exclusive Navigator LockManager lock "'.concat(name, '" immediately failed'));
                                        case 6:
                                            if (!internals.debug) return [
                                                3,
                                                10
                                            ];
                                            _state.label = 7;
                                        case 7:
                                            _state.trys.push([
                                                7,
                                                9,
                                                ,
                                                10
                                            ]);
                                            return [
                                                4,
                                                globalThis.navigator.locks.query()
                                            ];
                                        case 8:
                                            result = _state.sent();
                                            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(result, null, "  "));
                                            return [
                                                3,
                                                10
                                            ];
                                        case 9:
                                            e = _state.sent();
                                            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e);
                                            return [
                                                3,
                                                10
                                            ];
                                        case 10:
                                            console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request");
                                            return [
                                                4,
                                                fn()
                                            ];
                                        case 11:
                                            return [
                                                2,
                                                _state.sent()
                                            ];
                                        case 12:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(lock) {
                                return _ref.apply(this, arguments);
                            };
                        }())
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _navigatorLock.apply(this, arguments);
}
// ../node_modules/@supabase/auth-js/dist/module/GoTrueClient.js
polyfillGlobalThis();
var DEFAULT_OPTIONS = {
    url: GOTRUE_URL,
    storageKey: STORAGE_KEY,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: DEFAULT_HEADERS4,
    flowType: "implicit",
    debug: false,
    hasCustomAuthorizationHeader: false
};
var AUTO_REFRESH_TICK_DURATION = 30 * 1e3;
var AUTO_REFRESH_TICK_THRESHOLD = 3;
function lockNoOp(name, acquireTimeout, fn) {
    return _lockNoOp.apply(this, arguments);
}
function _lockNoOp() {
    _lockNoOp = _async_to_generator(function(name, acquireTimeout, fn) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fn()
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _lockNoOp.apply(this, arguments);
}
var GoTrueClient = /*#__PURE__*/ function() {
    "use strict";
    function _GoTrueClient(options) {
        _class_call_check(this, _GoTrueClient);
        var _a, _b;
        this.memoryStorage = null;
        this.stateChangeEmitters = /* @__PURE__ */ new Map();
        this.autoRefreshTicker = null;
        this.visibilityChangedCallback = null;
        this.refreshingDeferred = null;
        this.initializePromise = null;
        this.detectSessionInUrl = true;
        this.hasCustomAuthorizationHeader = false;
        this.suppressGetSessionWarning = false;
        this.lockAcquired = false;
        this.pendingInLock = [];
        this.broadcastChannel = null;
        this.logger = console.log;
        this.instanceID = _GoTrueClient.nextInstanceID;
        _GoTrueClient.nextInstanceID += 1;
        if (this.instanceID > 0 && isBrowser()) {
            console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
        }
        var settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.logDebugMessages = !!settings.debug;
        if (typeof settings.debug === "function") {
            this.logger = settings.debug;
        }
        this.persistSession = settings.persistSession;
        this.storageKey = settings.storageKey;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.admin = new GoTrueAdminApi({
            url: settings.url,
            headers: settings.headers,
            fetch: settings.fetch
        });
        this.url = settings.url;
        this.headers = settings.headers;
        this.fetch = resolveFetch4(settings.fetch);
        this.lock = settings.lock || lockNoOp;
        this.detectSessionInUrl = settings.detectSessionInUrl;
        this.flowType = settings.flowType;
        this.hasCustomAuthorizationHeader = settings.hasCustomAuthorizationHeader;
        if (settings.lock) {
            this.lock = settings.lock;
        } else if (isBrowser() && ((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.navigator) === null || _a === void 0 ? void 0 : _a.locks)) {
            this.lock = navigatorLock;
        } else {
            this.lock = lockNoOp;
        }
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
        };
        if (this.persistSession) {
            if (settings.storage) {
                this.storage = settings.storage;
            } else {
                if (supportsLocalStorage()) {
                    this.storage = localStorageAdapter;
                } else {
                    this.memoryStorage = {};
                    this.storage = memoryLocalStorageAdapter(this.memoryStorage);
                }
            }
        } else {
            this.memoryStorage = {};
            this.storage = memoryLocalStorageAdapter(this.memoryStorage);
        }
        if (isBrowser() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
            } catch (e) {
                console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e);
            }
            var _this = this;
            (_b = this.broadcastChannel) === null || _b === void 0 ? void 0 : _b.addEventListener("message", /*#__PURE__*/ function() {
                var _ref = _async_to_generator(function(event) {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("received broadcast notification from other tab or client", event);
                                return [
                                    4,
                                    _this._notifyAllSubscribers(event.data.event, event.data.session, false)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(event) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
        this.initialize();
    }
    _create_class(_GoTrueClient, [
        {
            key: "_debug",
            value: function _debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                if (this.logDebugMessages) {
                    this.logger.apply(this, [
                        "GoTrueClient@".concat(this.instanceID, " (").concat(version4, ") ").concat(/* @__PURE__ */ new Date().toISOString())
                    ].concat(_to_consumable_array(args)));
                }
                return this;
            }
        },
        {
            key: "initialize",
            value: /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */ function initialize() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.initializePromise) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                _this.initializePromise = _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                                        return _ts_generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    return [
                                                                        4,
                                                                        _this._initialize()
                                                                    ];
                                                                case 1:
                                                                    return [
                                                                        2,
                                                                        _state.sent()
                                                                    ];
                                                            }
                                                        });
                                                    }))
                                                ];
                                            case 1:
                                                return [
                                                    2,
                                                    _state.sent()
                                                ];
                                        }
                                    });
                                })();
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_initialize",
            value: /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */ function _initialize() {
                var _this = this;
                return _async_to_generator(function() {
                    var isPKCEFlow, _tmp, _ref, data, _$error, session, redirectType, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    10,
                                    11,
                                    13
                                ]);
                                if (!isBrowser()) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._isPKCEFlow()
                                ];
                            case 1:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                _tmp = false;
                                _state.label = 3;
                            case 3:
                                isPKCEFlow = _tmp;
                                _this._debug("#_initialize()", "begin", "is PKCE flow", isPKCEFlow);
                                if (!(isPKCEFlow || _this.detectSessionInUrl && _this._isImplicitGrantFlow())) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    _this._getSessionFromURL(isPKCEFlow)
                                ];
                            case 4:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                if (!_$error) return [
                                    3,
                                    6
                                ];
                                _this._debug("#_initialize()", "error detecting session from URL", _$error);
                                if ((_$error === null || _$error === void 0 ? void 0 : _$error.code) === "identity_already_exists") {
                                    return [
                                        2,
                                        {
                                            error: _$error
                                        }
                                    ];
                                }
                                return [
                                    4,
                                    _this._removeSession()
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        error: _$error
                                    }
                                ];
                            case 6:
                                session = data.session, redirectType = data.redirectType;
                                _this._debug("#_initialize()", "detected session in URL", session, "redirect type", redirectType);
                                return [
                                    4,
                                    _this._saveSession(session)
                                ];
                            case 7:
                                _state.sent();
                                setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                if (!(redirectType === "recovery")) return [
                                                    3,
                                                    2
                                                ];
                                                return [
                                                    4,
                                                    _this._notifyAllSubscribers("PASSWORD_RECOVERY", session)
                                                ];
                                            case 1:
                                                _state.sent();
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 2:
                                                return [
                                                    4,
                                                    _this._notifyAllSubscribers("SIGNED_IN", session)
                                                ];
                                            case 3:
                                                _state.sent();
                                                _state.label = 4;
                                            case 4:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }), 0);
                                return [
                                    2,
                                    {
                                        error: null
                                    }
                                ];
                            case 8:
                                return [
                                    4,
                                    _this._recoverAndRefresh()
                                ];
                            case 9:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        error: null
                                    }
                                ];
                            case 10:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            error: error
                                        }
                                    ];
                                }
                                return [
                                    2,
                                    {
                                        error: new AuthUnknownError("Unexpected error during initialization", error)
                                    }
                                ];
                            case 11:
                                return [
                                    4,
                                    _this._handleVisibilityChange()
                                ];
                            case 12:
                                _state.sent();
                                _this._debug("#_initialize()", "end");
                                return [
                                    7
                                ];
                            case 13:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signInAnonymously",
            value: /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */ function signInAnonymously(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, _c, res, data, _$error, session, user, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    5,
                                    ,
                                    6
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/signup"), {
                                        headers: _this.headers,
                                        body: {
                                            data: (_b = (_a = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {},
                                            gotrue_meta_security: {
                                                captcha_token: (_c = credentials === null || credentials === void 0 ? void 0 : credentials.options) === null || _c === void 0 ? void 0 : _c.captchaToken
                                            }
                                        },
                                        xform: _sessionResponse
                                    })
                                ];
                            case 1:
                                res = _state.sent();
                                data = res.data, _$error = res.error;
                                if (_$error || !data) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: _$error
                                        }
                                    ];
                                }
                                session = data.session;
                                user = data.user;
                                if (!data.session) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this._saveSession(data.session)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", session)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2,
                                    {
                                        data: {
                                            user: user,
                                            session: session
                                        },
                                        error: null
                                    }
                                ];
                            case 5:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signUp",
            value: /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */ function signUp(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, _c, res, email, password, options, codeChallenge, codeChallengeMethod, ref, phone, password1, options1, data, _$error, session, user, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    11,
                                    ,
                                    12
                                ]);
                                if (!("email" in credentials)) return [
                                    3,
                                    4
                                ];
                                email = credentials.email, password = credentials.password, options = credentials.options;
                                codeChallenge = null;
                                codeChallengeMethod = null;
                                if (!(_this.flowType === "pkce")) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    getCodeChallengeAndMethod(_this.storage, _this.storageKey)
                                ];
                            case 1:
                                ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), codeChallenge = ref[0], codeChallengeMethod = ref[1], ref;
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/signup"), {
                                        headers: _this.headers,
                                        redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                                        body: {
                                            email: email,
                                            password: password,
                                            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                                            gotrue_meta_security: {
                                                captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                                            },
                                            code_challenge: codeChallenge,
                                            code_challenge_method: codeChallengeMethod
                                        },
                                        xform: _sessionResponse
                                    })
                                ];
                            case 3:
                                res = _state.sent();
                                return [
                                    3,
                                    7
                                ];
                            case 4:
                                if (!("phone" in credentials)) return [
                                    3,
                                    6
                                ];
                                phone = credentials.phone, password1 = credentials.password, options1 = credentials.options;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/signup"), {
                                        headers: _this.headers,
                                        body: {
                                            phone: phone,
                                            password: password1,
                                            data: (_b = options1 === null || options1 === void 0 ? void 0 : options1.data) !== null && _b !== void 0 ? _b : {},
                                            channel: (_c = options1 === null || options1 === void 0 ? void 0 : options1.channel) !== null && _c !== void 0 ? _c : "sms",
                                            gotrue_meta_security: {
                                                captcha_token: options1 === null || options1 === void 0 ? void 0 : options1.captchaToken
                                            }
                                        },
                                        xform: _sessionResponse
                                    })
                                ];
                            case 5:
                                res = _state.sent();
                                return [
                                    3,
                                    7
                                ];
                            case 6:
                                throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
                            case 7:
                                data = res.data, _$error = res.error;
                                if (_$error || !data) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: _$error
                                        }
                                    ];
                                }
                                session = data.session;
                                user = data.user;
                                if (!data.session) return [
                                    3,
                                    10
                                ];
                                return [
                                    4,
                                    _this._saveSession(data.session)
                                ];
                            case 8:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", session)
                                ];
                            case 9:
                                _state.sent();
                                _state.label = 10;
                            case 10:
                                return [
                                    2,
                                    {
                                        data: {
                                            user: user,
                                            session: session
                                        },
                                        error: null
                                    }
                                ];
                            case 11:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 12:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signInWithPassword",
            value: /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */ function signInWithPassword(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var res, email, password, options, phone, password1, options1, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    9,
                                    ,
                                    10
                                ]);
                                if (!("email" in credentials)) return [
                                    3,
                                    2
                                ];
                                email = credentials.email, password = credentials.password, options = credentials.options;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/token?grant_type=password"), {
                                        headers: _this.headers,
                                        body: {
                                            email: email,
                                            password: password,
                                            gotrue_meta_security: {
                                                captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                                            }
                                        },
                                        xform: _sessionResponsePassword
                                    })
                                ];
                            case 1:
                                res = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 2:
                                if (!("phone" in credentials)) return [
                                    3,
                                    4
                                ];
                                phone = credentials.phone, password1 = credentials.password, options1 = credentials.options;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/token?grant_type=password"), {
                                        headers: _this.headers,
                                        body: {
                                            phone: phone,
                                            password: password1,
                                            gotrue_meta_security: {
                                                captcha_token: options1 === null || options1 === void 0 ? void 0 : options1.captchaToken
                                            }
                                        },
                                        xform: _sessionResponsePassword
                                    })
                                ];
                            case 3:
                                res = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
                            case 5:
                                data = res.data, _$error = res.error;
                                if (_$error) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: _$error
                                        }
                                    ];
                                } else if (!data || !data.session || !data.user) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: new AuthInvalidTokenResponseError()
                                        }
                                    ];
                                }
                                if (!data.session) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    _this._saveSession(data.session)
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", data.session)
                                ];
                            case 7:
                                _state.sent();
                                _state.label = 8;
                            case 8:
                                return [
                                    2,
                                    {
                                        data: Object.assign({
                                            user: data.user,
                                            session: data.session
                                        }, data.weak_password ? {
                                            weakPassword: data.weak_password
                                        } : null),
                                        error: _$error
                                    }
                                ];
                            case 9:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 10:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signInWithOAuth",
            value: /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */ function signInWithOAuth(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, _c, _d;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._handleProviderSignIn(credentials.provider, {
                                        redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
                                        scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                                        queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
                                        skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "exchangeCodeForSession",
            value: /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */ function exchangeCodeForSession(authCode) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                _this._exchangeCodeForSession(authCode)
                                            ];
                                        });
                                    }))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_exchangeCodeForSession",
            value: function _exchangeCodeForSession(authCode) {
                var _this = this;
                return _async_to_generator(function() {
                    var storageItem, _split, codeVerifier, redirectType, _ref, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    getItemAsync(_this.storage, "".concat(_this.storageKey, "-code-verifier"))
                                ];
                            case 1:
                                storageItem = _state.sent();
                                _split = _sliced_to_array((storageItem !== null && storageItem !== void 0 ? storageItem : "").split("/"), 2), codeVerifier = _split[0], redirectType = _split[1];
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    8,
                                    ,
                                    9
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/token?grant_type=pkce"), {
                                        headers: _this.headers,
                                        body: {
                                            auth_code: authCode,
                                            code_verifier: codeVerifier
                                        },
                                        xform: _sessionResponse
                                    })
                                ];
                            case 3:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                return [
                                    4,
                                    removeItemAsync(_this.storage, "".concat(_this.storageKey, "-code-verifier"))
                                ];
                            case 4:
                                _state.sent();
                                if (_$error) {
                                    throw _$error;
                                }
                                if (!data || !data.session || !data.user) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null,
                                                redirectType: null
                                            },
                                            error: new AuthInvalidTokenResponseError()
                                        }
                                    ];
                                }
                                if (!data.session) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this._saveSession(data.session)
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", data.session)
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                return [
                                    2,
                                    {
                                        data: Object.assign(Object.assign({}, data), {
                                            redirectType: redirectType !== null && redirectType !== void 0 ? redirectType : null
                                        }),
                                        error: _$error
                                    }
                                ];
                            case 8:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null,
                                                redirectType: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 9:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signInWithIdToken",
            value: /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */ function signInWithIdToken(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var options, provider, token, access_token, nonce, res, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    5,
                                    ,
                                    6
                                ]);
                                options = credentials.options, provider = credentials.provider, token = credentials.token, access_token = credentials.access_token, nonce = credentials.nonce;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/token?grant_type=id_token"), {
                                        headers: _this.headers,
                                        body: {
                                            provider: provider,
                                            id_token: token,
                                            access_token: access_token,
                                            nonce: nonce,
                                            gotrue_meta_security: {
                                                captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                                            }
                                        },
                                        xform: _sessionResponse
                                    })
                                ];
                            case 1:
                                res = _state.sent();
                                data = res.data, _$error = res.error;
                                if (_$error) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: _$error
                                        }
                                    ];
                                } else if (!data || !data.session || !data.user) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: new AuthInvalidTokenResponseError()
                                        }
                                    ];
                                }
                                if (!data.session) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this._saveSession(data.session)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", data.session)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2,
                                    {
                                        data: data,
                                        error: _$error
                                    }
                                ];
                            case 5:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signInWithOtp",
            value: /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */ function signInWithOtp(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, _c, _d, _e, email, options, codeChallenge, codeChallengeMethod, ref, _$error, phone, options1, _ref, data, _$error1, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    7,
                                    ,
                                    8
                                ]);
                                if (!("email" in credentials)) return [
                                    3,
                                    4
                                ];
                                email = credentials.email, options = credentials.options;
                                codeChallenge = null;
                                codeChallengeMethod = null;
                                if (!(_this.flowType === "pkce")) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    getCodeChallengeAndMethod(_this.storage, _this.storageKey)
                                ];
                            case 1:
                                ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), codeChallenge = ref[0], codeChallengeMethod = ref[1], ref;
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/otp"), {
                                        headers: _this.headers,
                                        body: {
                                            email: email,
                                            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                                            create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
                                            gotrue_meta_security: {
                                                captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                                            },
                                            code_challenge: codeChallenge,
                                            code_challenge_method: codeChallengeMethod
                                        },
                                        redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                                    })
                                ];
                            case 3:
                                _$error = _state.sent().error;
                                return [
                                    2,
                                    {
                                        data: {
                                            user: null,
                                            session: null
                                        },
                                        error: _$error
                                    }
                                ];
                            case 4:
                                if (!("phone" in credentials)) return [
                                    3,
                                    6
                                ];
                                phone = credentials.phone, options1 = credentials.options;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/otp"), {
                                        headers: _this.headers,
                                        body: {
                                            phone: phone,
                                            data: (_c = options1 === null || options1 === void 0 ? void 0 : options1.data) !== null && _c !== void 0 ? _c : {},
                                            create_user: (_d = options1 === null || options1 === void 0 ? void 0 : options1.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
                                            gotrue_meta_security: {
                                                captcha_token: options1 === null || options1 === void 0 ? void 0 : options1.captchaToken
                                            },
                                            channel: (_e = options1 === null || options1 === void 0 ? void 0 : options1.channel) !== null && _e !== void 0 ? _e : "sms"
                                        }
                                    })
                                ];
                            case 5:
                                _ref = _state.sent(), data = _ref.data, _$error1 = _ref.error;
                                return [
                                    2,
                                    {
                                        data: {
                                            user: null,
                                            session: null,
                                            messageId: data === null || data === void 0 ? void 0 : data.message_id
                                        },
                                        error: _$error1
                                    }
                                ];
                            case 6:
                                throw new AuthInvalidCredentialsError("You must provide either an email or phone number.");
                            case 7:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "verifyOtp",
            value: /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */ function verifyOtp(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, redirectTo, captchaToken, _ref, data, _$error, session, user, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    5,
                                    ,
                                    6
                                ]);
                                redirectTo = void 0;
                                captchaToken = void 0;
                                if ("options" in params) {
                                    redirectTo = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo;
                                    captchaToken = (_b = params.options) === null || _b === void 0 ? void 0 : _b.captchaToken;
                                }
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/verify"), {
                                        headers: _this.headers,
                                        body: Object.assign(Object.assign({}, params), {
                                            gotrue_meta_security: {
                                                captcha_token: captchaToken
                                            }
                                        }),
                                        redirectTo: redirectTo,
                                        xform: _sessionResponse
                                    })
                                ];
                            case 1:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                if (_$error) {
                                    throw _$error;
                                }
                                if (!data) {
                                    throw new Error("An error occurred on token verification.");
                                }
                                session = data.session;
                                user = data.user;
                                if (!(session === null || session === void 0 ? void 0 : session.access_token)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this._saveSession(session)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers(params.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", session)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2,
                                    {
                                        data: {
                                            user: user,
                                            session: session
                                        },
                                        error: null
                                    }
                                ];
                            case 5:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signInWithSSO",
            value: /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */ function signInWithSSO(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, _c, codeChallenge, codeChallengeMethod, ref, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                codeChallenge = null;
                                codeChallengeMethod = null;
                                if (!(_this.flowType === "pkce")) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    getCodeChallengeAndMethod(_this.storage, _this.storageKey)
                                ];
                            case 1:
                                ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), codeChallenge = ref[0], codeChallengeMethod = ref[1], ref;
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/sso"), {
                                        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in params ? {
                                            provider_id: params.providerId
                                        } : null), "domain" in params ? {
                                            domain: params.domain
                                        } : null), {
                                            redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : void 0
                                        }), ((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken) ? {
                                            gotrue_meta_security: {
                                                captcha_token: params.options.captchaToken
                                            }
                                        } : null), {
                                            skip_http_redirect: true,
                                            code_challenge: codeChallenge,
                                            code_challenge_method: codeChallengeMethod
                                        }),
                                        headers: _this.headers,
                                        xform: _ssoResponse
                                    })
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "reauthenticate",
            value: /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */ function reauthenticate() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this._reauthenticate()
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_reauthenticate",
            value: function _reauthenticate() {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var session, sessionError, _$error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        session = result.data.session, sessionError = result.error;
                                                        if (sessionError) throw sessionError;
                                                        if (!session) throw new AuthSessionMissingError();
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "GET", "".concat(_this.url, "/reauthenticate"), {
                                                                headers: _this.headers,
                                                                jwt: session.access_token
                                                            })
                                                        ];
                                                    case 1:
                                                        _$error = _state.sent().error;
                                                        return [
                                                            2,
                                                            {
                                                                data: {
                                                                    user: null,
                                                                    session: null
                                                                },
                                                                error: _$error
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resend",
            value: /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */ function resend(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var endpoint, email, type, options, _$error, phone, type1, options1, _ref, data, _$error1, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    5,
                                    ,
                                    6
                                ]);
                                endpoint = "".concat(_this.url, "/resend");
                                if (!("email" in credentials)) return [
                                    3,
                                    2
                                ];
                                email = credentials.email, type = credentials.type, options = credentials.options;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", endpoint, {
                                        headers: _this.headers,
                                        body: {
                                            email: email,
                                            type: type,
                                            gotrue_meta_security: {
                                                captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken
                                            }
                                        },
                                        redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo
                                    })
                                ];
                            case 1:
                                _$error = _state.sent().error;
                                return [
                                    2,
                                    {
                                        data: {
                                            user: null,
                                            session: null
                                        },
                                        error: _$error
                                    }
                                ];
                            case 2:
                                if (!("phone" in credentials)) return [
                                    3,
                                    4
                                ];
                                phone = credentials.phone, type1 = credentials.type, options1 = credentials.options;
                                return [
                                    4,
                                    _request(_this.fetch, "POST", endpoint, {
                                        headers: _this.headers,
                                        body: {
                                            phone: phone,
                                            type: type1,
                                            gotrue_meta_security: {
                                                captcha_token: options1 === null || options1 === void 0 ? void 0 : options1.captchaToken
                                            }
                                        }
                                    })
                                ];
                            case 3:
                                _ref = _state.sent(), data = _ref.data, _$error1 = _ref.error;
                                return [
                                    2,
                                    {
                                        data: {
                                            user: null,
                                            session: null,
                                            messageId: data === null || data === void 0 ? void 0 : data.message_id
                                        },
                                        error: _$error1
                                    }
                                ];
                            case 4:
                                throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a type");
                            case 5:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getSession",
            value: /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */ function getSession() {
                var _this = this;
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            return [
                                                2,
                                                _this._useSession(/*#__PURE__*/ function() {
                                                    var _ref = _async_to_generator(function(result2) {
                                                        return _ts_generator(this, function(_state) {
                                                            return [
                                                                2,
                                                                result2
                                                            ];
                                                        });
                                                    });
                                                    return function(result2) {
                                                        return _ref.apply(this, arguments);
                                                    };
                                                }())
                                            ];
                                        });
                                    }))
                                ];
                            case 2:
                                result = _state.sent();
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_acquireLock",
            value: /**
   * Acquires a global lock based on the storage key.
   */ function _acquireLock(acquireTimeout, fn) {
                var _this = this;
                return _async_to_generator(function() {
                    var last, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#_acquireLock", "begin", acquireTimeout);
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                if (_this.lockAcquired) {
                                    last = _this.pendingInLock.length ? _this.pendingInLock[_this.pendingInLock.length - 1] : Promise.resolve();
                                    result = _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        last
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        4,
                                                        fn()
                                                    ];
                                                case 2:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    })();
                                    _this.pendingInLock.push(_async_to_generator(function() {
                                        var e;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _state.trys.push([
                                                        0,
                                                        2,
                                                        ,
                                                        3
                                                    ]);
                                                    return [
                                                        4,
                                                        result
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        3,
                                                        3
                                                    ];
                                                case 2:
                                                    e = _state.sent();
                                                    return [
                                                        3,
                                                        3
                                                    ];
                                                case 3:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    })());
                                    return [
                                        2,
                                        result
                                    ];
                                }
                                return [
                                    4,
                                    _this.lock("lock:".concat(_this.storageKey), acquireTimeout, /*#__PURE__*/ _async_to_generator(function() {
                                        var result, waitOn;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _this._debug("#_acquireLock", "lock acquired for storage key", _this.storageKey);
                                                    _state.label = 1;
                                                case 1:
                                                    _state.trys.push([
                                                        1,
                                                        ,
                                                        7,
                                                        8
                                                    ]);
                                                    _this.lockAcquired = true;
                                                    result = fn();
                                                    _this.pendingInLock.push(_async_to_generator(function() {
                                                        var e;
                                                        return _ts_generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    _state.trys.push([
                                                                        0,
                                                                        2,
                                                                        ,
                                                                        3
                                                                    ]);
                                                                    return [
                                                                        4,
                                                                        result
                                                                    ];
                                                                case 1:
                                                                    _state.sent();
                                                                    return [
                                                                        3,
                                                                        3
                                                                    ];
                                                                case 2:
                                                                    e = _state.sent();
                                                                    return [
                                                                        3,
                                                                        3
                                                                    ];
                                                                case 3:
                                                                    return [
                                                                        2
                                                                    ];
                                                            }
                                                        });
                                                    })());
                                                    return [
                                                        4,
                                                        result
                                                    ];
                                                case 2:
                                                    _state.sent();
                                                    _state.label = 3;
                                                case 3:
                                                    if (!_this.pendingInLock.length) return [
                                                        3,
                                                        5
                                                    ];
                                                    waitOn = _to_consumable_array(_this.pendingInLock);
                                                    return [
                                                        4,
                                                        Promise.all(waitOn)
                                                    ];
                                                case 4:
                                                    _state.sent();
                                                    _this.pendingInLock.splice(0, waitOn.length);
                                                    return [
                                                        3,
                                                        3
                                                    ];
                                                case 5:
                                                    return [
                                                        4,
                                                        result
                                                    ];
                                                case 6:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                                case 7:
                                                    _this._debug("#_acquireLock", "lock released for storage key", _this.storageKey);
                                                    _this.lockAcquired = false;
                                                    return [
                                                        7
                                                    ];
                                                case 8:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                _this._debug("#_acquireLock", "end");
                                return [
                                    7
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_useSession",
            value: /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */ function _useSession(fn) {
                var _this = this;
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#_useSession", "begin");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    4,
                                    5
                                ]);
                                return [
                                    4,
                                    _this.__loadSession()
                                ];
                            case 2:
                                result = _state.sent();
                                return [
                                    4,
                                    fn(result)
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                _this._debug("#_useSession", "end");
                                return [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "__loadSession",
            value: /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */ function __loadSession() {
                var _this = this;
                return _async_to_generator(function() {
                    var currentSession, maybeSession, hasExpired, suppressWarning, proxySession, _ref, session, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#__loadSession()", "begin");
                                if (!_this.lockAcquired) {
                                    _this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
                                }
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    7,
                                    8
                                ]);
                                currentSession = null;
                                return [
                                    4,
                                    getItemAsync(_this.storage, _this.storageKey)
                                ];
                            case 2:
                                maybeSession = _state.sent();
                                _this._debug("#getSession()", "session from storage", maybeSession);
                                if (!(maybeSession !== null)) return [
                                    3,
                                    5
                                ];
                                if (!_this._isValidSession(maybeSession)) return [
                                    3,
                                    3
                                ];
                                currentSession = maybeSession;
                                return [
                                    3,
                                    5
                                ];
                            case 3:
                                _this._debug("#getSession()", "session from storage is not valid");
                                return [
                                    4,
                                    _this._removeSession()
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                if (!currentSession) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                session: null
                                            },
                                            error: null
                                        }
                                    ];
                                }
                                hasExpired = currentSession.expires_at ? currentSession.expires_at <= Date.now() / 1e3 : false;
                                _this._debug("#__loadSession()", "session has".concat(hasExpired ? "" : " not", " expired"), "expires_at", currentSession.expires_at);
                                if (!hasExpired) {
                                    if (_this.storage.isServer) {
                                        suppressWarning = _this.suppressGetSessionWarning;
                                        proxySession = new Proxy(currentSession, {
                                            get: function(target, prop, receiver) {
                                                if (!suppressWarning && prop === "user") {
                                                    console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.");
                                                    suppressWarning = true;
                                                    _this.suppressGetSessionWarning = true;
                                                }
                                                return Reflect.get(target, prop, receiver);
                                            }
                                        });
                                        currentSession = proxySession;
                                    }
                                    return [
                                        2,
                                        {
                                            data: {
                                                session: currentSession
                                            },
                                            error: null
                                        }
                                    ];
                                }
                                return [
                                    4,
                                    _this._callRefreshToken(currentSession.refresh_token)
                                ];
                            case 6:
                                _ref = _state.sent(), session = _ref.session, error = _ref.error;
                                if (error) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                return [
                                    2,
                                    {
                                        data: {
                                            session: session
                                        },
                                        error: null
                                    }
                                ];
                            case 7:
                                _this._debug("#__loadSession()", "end");
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUser",
            value: /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */ function getUser(jwt) {
                var _this = this;
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!jwt) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._getUser(jwt)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this._getUser()
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 4:
                                result = _state.sent();
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_getUser",
            value: function _getUser(jwt) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    9
                                ]);
                                if (!jwt) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _request(_this.fetch, "GET", "".concat(_this.url, "/user"), {
                                        headers: _this.headers,
                                        jwt: jwt,
                                        xform: _userResponse
                                    })
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, _b, _c, data, _$error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        data = result.data, _$error = result.error;
                                                        if (_$error) {
                                                            throw _$error;
                                                        }
                                                        if (!((_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) && !_this.hasCustomAuthorizationHeader) {
                                                            return [
                                                                2,
                                                                {
                                                                    data: {
                                                                        user: null
                                                                    },
                                                                    error: new AuthSessionMissingError()
                                                                }
                                                            ];
                                                        }
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "GET", "".concat(_this.url, "/user"), {
                                                                headers: _this.headers,
                                                                jwt: (_c = (_b = data.session) === null || _b === void 0 ? void 0 : _b.access_token) !== null && _c !== void 0 ? _c : void 0,
                                                                xform: _userResponse
                                                            })
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                error = _state.sent();
                                if (!isAuthError(error)) return [
                                    3,
                                    8
                                ];
                                if (!isAuthSessionMissingError(error)) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this._removeSession()
                                ];
                            case 5:
                                _state.sent();
                                return [
                                    4,
                                    removeItemAsync(_this.storage, "".concat(_this.storageKey, "-code-verifier"))
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                return [
                                    2,
                                    {
                                        data: {
                                            user: null
                                        },
                                        error: error
                                    }
                                ];
                            case 8:
                                throw error;
                            case 9:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateUser",
            value: /**
   * Updates user data for a logged in user.
   */ function updateUser(attributes) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this._updateUser(attributes, options)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_updateUser",
            value: function _updateUser(attributes) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var sessionData, sessionError, session, codeChallenge, codeChallengeMethod, ref, _ref, data, userError;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        sessionData = result.data, sessionError = result.error;
                                                        if (sessionError) {
                                                            throw sessionError;
                                                        }
                                                        if (!sessionData.session) {
                                                            throw new AuthSessionMissingError();
                                                        }
                                                        session = sessionData.session;
                                                        codeChallenge = null;
                                                        codeChallengeMethod = null;
                                                        if (!(_this.flowType === "pkce" && attributes.email != null)) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            getCodeChallengeAndMethod(_this.storage, _this.storageKey)
                                                        ];
                                                    case 1:
                                                        ref = _sliced_to_array.apply(void 0, [
                                                            _state.sent(),
                                                            2
                                                        ]), codeChallenge = ref[0], codeChallengeMethod = ref[1], ref;
                                                        _state.label = 2;
                                                    case 2:
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "PUT", "".concat(_this.url, "/user"), {
                                                                headers: _this.headers,
                                                                redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                                                                body: Object.assign(Object.assign({}, attributes), {
                                                                    code_challenge: codeChallenge,
                                                                    code_challenge_method: codeChallengeMethod
                                                                }),
                                                                jwt: session.access_token,
                                                                xform: _userResponse
                                                            })
                                                        ];
                                                    case 3:
                                                        _ref = _state.sent(), data = _ref.data, userError = _ref.error;
                                                        if (userError) throw userError;
                                                        session.user = data.user;
                                                        return [
                                                            4,
                                                            _this._saveSession(session)
                                                        ];
                                                    case 4:
                                                        _state.sent();
                                                        return [
                                                            4,
                                                            _this._notifyAllSubscribers("USER_UPDATED", session)
                                                        ];
                                                    case 5:
                                                        _state.sent();
                                                        return [
                                                            2,
                                                            {
                                                                data: {
                                                                    user: session.user
                                                                },
                                                                error: null
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * Decodes a JWT (without performing any validation).
   */ key: "_decodeJWT",
            value: function _decodeJWT(jwt) {
                return decodeJWTPayload(jwt);
            }
        },
        {
            key: "setSession",
            value: /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */ function setSession(currentSession) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this._setSession(currentSession)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_setSession",
            value: function _setSession(currentSession) {
                var _this = this;
                return _async_to_generator(function() {
                    var timeNow, expiresAt2, hasExpired, session, payload, _ref, refreshedSession, _$error, _ref1, data, _$error1, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    7,
                                    ,
                                    8
                                ]);
                                if (!currentSession.access_token || !currentSession.refresh_token) {
                                    throw new AuthSessionMissingError();
                                }
                                timeNow = Date.now() / 1e3;
                                expiresAt2 = timeNow;
                                hasExpired = true;
                                session = null;
                                payload = decodeJWTPayload(currentSession.access_token);
                                if (payload.exp) {
                                    expiresAt2 = payload.exp;
                                    hasExpired = expiresAt2 <= timeNow;
                                }
                                if (!hasExpired) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._callRefreshToken(currentSession.refresh_token)
                                ];
                            case 1:
                                _ref = _state.sent(), refreshedSession = _ref.session, _$error = _ref.error;
                                if (_$error) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: _$error
                                        }
                                    ];
                                }
                                if (!refreshedSession) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: null
                                        }
                                    ];
                                }
                                session = refreshedSession;
                                return [
                                    3,
                                    6
                                ];
                            case 2:
                                return [
                                    4,
                                    _this._getUser(currentSession.access_token)
                                ];
                            case 3:
                                _ref1 = _state.sent(), data = _ref1.data, _$error1 = _ref1.error;
                                if (_$error1) {
                                    throw _$error1;
                                }
                                session = {
                                    access_token: currentSession.access_token,
                                    refresh_token: currentSession.refresh_token,
                                    user: data.user,
                                    token_type: "bearer",
                                    expires_in: expiresAt2 - timeNow,
                                    expires_at: expiresAt2
                                };
                                return [
                                    4,
                                    _this._saveSession(session)
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", session)
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                return [
                                    2,
                                    {
                                        data: {
                                            user: session.user,
                                            session: session
                                        },
                                        error: null
                                    }
                                ];
                            case 7:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                session: null,
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshSession",
            value: /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */ function refreshSession(currentSession) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this._refreshSession(currentSession)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_refreshSession",
            value: function _refreshSession(currentSession) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, data, error2, _ref, session, _$error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (!currentSession) {
                                                            data = result.data, error2 = result.error;
                                                            if (error2) {
                                                                throw error2;
                                                            }
                                                            currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : void 0;
                                                        }
                                                        if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) {
                                                            throw new AuthSessionMissingError();
                                                        }
                                                        return [
                                                            4,
                                                            _this._callRefreshToken(currentSession.refresh_token)
                                                        ];
                                                    case 1:
                                                        _ref = _state.sent(), session = _ref.session, _$error = _ref.error;
                                                        if (_$error) {
                                                            return [
                                                                2,
                                                                {
                                                                    data: {
                                                                        user: null,
                                                                        session: null
                                                                    },
                                                                    error: _$error
                                                                }
                                                            ];
                                                        }
                                                        if (!session) {
                                                            return [
                                                                2,
                                                                {
                                                                    data: {
                                                                        user: null,
                                                                        session: null
                                                                    },
                                                                    error: null
                                                                }
                                                            ];
                                                        }
                                                        return [
                                                            2,
                                                            {
                                                                data: {
                                                                    user: session.user,
                                                                    session: session
                                                                },
                                                                error: null
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                user: null,
                                                session: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_getSessionFromURL",
            value: /**
   * Gets the session data from a URL string
   */ function _getSessionFromURL(isPKCEFlow) {
                var _this = this;
                return _async_to_generator(function() {
                    var params, _ref, data2, error2, url, provider_token, provider_refresh_token, access_token, refresh_token, expires_in, expires_at, token_type, timeNow, expiresIn, expiresAt2, actuallyExpiresIn, issuedAt, _ref1, data, _$error, session, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    4,
                                    ,
                                    5
                                ]);
                                if (!isBrowser()) throw new AuthImplicitGrantRedirectError("No browser detected.");
                                if (_this.flowType === "implicit" && !_this._isImplicitGrantFlow()) {
                                    throw new AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
                                } else if (_this.flowType == "pkce" && !isPKCEFlow) {
                                    throw new AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.");
                                }
                                params = parseParametersFromURL(window.location.href);
                                if (!isPKCEFlow) return [
                                    3,
                                    2
                                ];
                                if (!params.code) throw new AuthPKCEGrantCodeExchangeError("No code detected.");
                                return [
                                    4,
                                    _this._exchangeCodeForSession(params.code)
                                ];
                            case 1:
                                _ref = _state.sent(), data2 = _ref.data, error2 = _ref.error;
                                if (error2) throw error2;
                                url = new URL(window.location.href);
                                url.searchParams.delete("code");
                                window.history.replaceState(window.history.state, "", url.toString());
                                return [
                                    2,
                                    {
                                        data: {
                                            session: data2.session,
                                            redirectType: null
                                        },
                                        error: null
                                    }
                                ];
                            case 2:
                                if (params.error || params.error_description || params.error_code) {
                                    throw new AuthImplicitGrantRedirectError(params.error_description || "Error in URL with unspecified error_description", {
                                        error: params.error || "unspecified_error",
                                        code: params.error_code || "unspecified_code"
                                    });
                                }
                                provider_token = params.provider_token, provider_refresh_token = params.provider_refresh_token, access_token = params.access_token, refresh_token = params.refresh_token, expires_in = params.expires_in, expires_at = params.expires_at, token_type = params.token_type;
                                if (!access_token || !expires_in || !refresh_token || !token_type) {
                                    throw new AuthImplicitGrantRedirectError("No session defined in URL");
                                }
                                timeNow = Math.round(Date.now() / 1e3);
                                expiresIn = parseInt(expires_in);
                                expiresAt2 = timeNow + expiresIn;
                                if (expires_at) {
                                    expiresAt2 = parseInt(expires_at);
                                }
                                actuallyExpiresIn = expiresAt2 - timeNow;
                                if (actuallyExpiresIn * 1e3 <= AUTO_REFRESH_TICK_DURATION) {
                                    console.warn("@supabase/gotrue-js: Session as retrieved from URL expires in ".concat(actuallyExpiresIn, "s, should have been closer to ").concat(expiresIn, "s"));
                                }
                                issuedAt = expiresAt2 - expiresIn;
                                if (timeNow - issuedAt >= 120) {
                                    console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", issuedAt, expiresAt2, timeNow);
                                } else if (timeNow - issuedAt < 0) {
                                    console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", issuedAt, expiresAt2, timeNow);
                                }
                                return [
                                    4,
                                    _this._getUser(access_token)
                                ];
                            case 3:
                                _ref1 = _state.sent(), data = _ref1.data, _$error = _ref1.error;
                                if (_$error) throw _$error;
                                session = {
                                    provider_token: provider_token,
                                    provider_refresh_token: provider_refresh_token,
                                    access_token: access_token,
                                    expires_in: expiresIn,
                                    expires_at: expiresAt2,
                                    refresh_token: refresh_token,
                                    token_type: token_type,
                                    user: data.user
                                };
                                window.location.hash = "";
                                _this._debug("#_getSessionFromURL()", "clearing window.location.hash");
                                return [
                                    2,
                                    {
                                        data: {
                                            session: session,
                                            redirectType: params.type
                                        },
                                        error: null
                                    }
                                ];
                            case 4:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                session: null,
                                                redirectType: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */ key: "_isImplicitGrantFlow",
            value: function _isImplicitGrantFlow() {
                var params = parseParametersFromURL(window.location.href);
                return !!(isBrowser() && (params.access_token || params.error_description));
            }
        },
        {
            key: "_isPKCEFlow",
            value: /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */ function _isPKCEFlow() {
                var _this = this;
                return _async_to_generator(function() {
                    var params, currentStorageContent;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                params = parseParametersFromURL(window.location.href);
                                return [
                                    4,
                                    getItemAsync(_this.storage, "".concat(_this.storageKey, "-code-verifier"))
                                ];
                            case 1:
                                currentStorageContent = _state.sent();
                                return [
                                    2,
                                    !!(params.code && currentStorageContent)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "signOut",
            value: /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */ function signOut() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    scope: "global"
                };
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    return [
                                                        4,
                                                        _this._signOut(options)
                                                    ];
                                                case 1:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_signOut",
            value: function _signOut() {
                var scope = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    scope: "global"
                }).scope;
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, data, sessionError, accessToken, error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        data = result.data, sessionError = result.error;
                                                        if (sessionError) {
                                                            return [
                                                                2,
                                                                {
                                                                    error: sessionError
                                                                }
                                                            ];
                                                        }
                                                        accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
                                                        if (!accessToken) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            _this.admin.signOut(accessToken, scope)
                                                        ];
                                                    case 1:
                                                        error = _state.sent().error;
                                                        if (error) {
                                                            if (!(isAuthApiError(error) && (error.status === 404 || error.status === 401 || error.status === 403))) {
                                                                return [
                                                                    2,
                                                                    {
                                                                        error: error
                                                                    }
                                                                ];
                                                            }
                                                        }
                                                        _state.label = 2;
                                                    case 2:
                                                        if (!(scope !== "others")) return [
                                                            3,
                                                            5
                                                        ];
                                                        return [
                                                            4,
                                                            _this._removeSession()
                                                        ];
                                                    case 3:
                                                        _state.sent();
                                                        return [
                                                            4,
                                                            removeItemAsync(_this.storage, "".concat(_this.storageKey, "-code-verifier"))
                                                        ];
                                                    case 4:
                                                        _state.sent();
                                                        _state.label = 5;
                                                    case 5:
                                                        return [
                                                            2,
                                                            {
                                                                error: null
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */ key: "onAuthStateChange",
            value: function onAuthStateChange(callback) {
                var _this = this;
                var id = uuid();
                var subscription = {
                    id: id,
                    callback: callback,
                    unsubscribe: function() {
                        _this._debug("#unsubscribe()", "state change callback with id removed", id);
                        _this.stateChangeEmitters.delete(id);
                    }
                };
                this._debug("#onAuthStateChange()", "registered callback with id", id);
                this.stateChangeEmitters.set(id, subscription);
                var _this1 = this;
                _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this1.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this1._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            _this1._emitInitialSession(id);
                                            return [
                                                2
                                            ];
                                        });
                                    }))
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
                return {
                    data: {
                        subscription: subscription
                    }
                };
            }
        },
        {
            key: "_emitInitialSession",
            value: function _emitInitialSession(id) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, _b, session, error, err;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        _state.trys.push([
                                                            0,
                                                            2,
                                                            ,
                                                            4
                                                        ]);
                                                        session = result.data.session, error = result.error;
                                                        if (error) throw error;
                                                        return [
                                                            4,
                                                            (_a = _this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback("INITIAL_SESSION", session)
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        _this._debug("INITIAL_SESSION", "callback id", id, "session", session);
                                                        return [
                                                            3,
                                                            4
                                                        ];
                                                    case 2:
                                                        err = _state.sent();
                                                        return [
                                                            4,
                                                            (_b = _this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback("INITIAL_SESSION", null)
                                                        ];
                                                    case 3:
                                                        _state.sent();
                                                        _this._debug("INITIAL_SESSION", "callback id", id, "error", err);
                                                        console.error(err);
                                                        return [
                                                            3,
                                                            4
                                                        ];
                                                    case 4:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resetPasswordForEmail",
            value: /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */ function resetPasswordForEmail(email) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var codeChallenge, codeChallengeMethod, ref, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                codeChallenge = null;
                                codeChallengeMethod = null;
                                if (!(_this.flowType === "pkce")) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    getCodeChallengeAndMethod(_this.storage, _this.storageKey, true)
                                ];
                            case 1:
                                ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), codeChallenge = ref[0], codeChallengeMethod = ref[1], ref;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _request(_this.fetch, "POST", "".concat(_this.url, "/recover"), {
                                        body: {
                                            email: email,
                                            code_challenge: codeChallenge,
                                            code_challenge_method: codeChallengeMethod,
                                            gotrue_meta_security: {
                                                captcha_token: options.captchaToken
                                            }
                                        },
                                        headers: _this.headers,
                                        redirectTo: options.redirectTo
                                    })
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getUserIdentities",
            value: /**
   * Gets all the identities linked to a user.
   */ function getUserIdentities() {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _ref, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this.getUser()
                                ];
                            case 1:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                if (_$error) throw _$error;
                                return [
                                    2,
                                    {
                                        data: {
                                            identities: (_a = data.user.identities) !== null && _a !== void 0 ? _a : []
                                        },
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "linkIdentity",
            value: /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */ function linkIdentity(credentials) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _ref, data, _$error, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a2, _b, _c, _d, _e, data2, error2, url;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        data2 = result.data, error2 = result.error;
                                                        if (error2) throw error2;
                                                        return [
                                                            4,
                                                            _this._getUrlForProvider("".concat(_this.url, "/user/identities/authorize"), credentials.provider, {
                                                                redirectTo: (_a2 = credentials.options) === null || _a2 === void 0 ? void 0 : _a2.redirectTo,
                                                                scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                                                                queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
                                                                skipBrowserRedirect: true
                                                            })
                                                        ];
                                                    case 1:
                                                        url = _state.sent();
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "GET", url, {
                                                                headers: _this.headers,
                                                                jwt: (_e = (_d = data2.session) === null || _d === void 0 ? void 0 : _d.access_token) !== null && _e !== void 0 ? _e : void 0
                                                            })
                                                        ];
                                                    case 2:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                if (_$error) throw _$error;
                                if (isBrowser() && !((_a = credentials.options) === null || _a === void 0 ? void 0 : _a.skipBrowserRedirect)) {
                                    window.location.assign(data === null || data === void 0 ? void 0 : data.url);
                                }
                                return [
                                    2,
                                    {
                                        data: {
                                            provider: credentials.provider,
                                            url: data === null || data === void 0 ? void 0 : data.url
                                        },
                                        error: null
                                    }
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                provider: credentials.provider,
                                                url: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "unlinkIdentity",
            value: /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */ function unlinkIdentity(identity) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, _b, data, _$error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        data = result.data, _$error = result.error;
                                                        if (_$error) {
                                                            throw _$error;
                                                        }
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "DELETE", "".concat(_this.url, "/user/identities/").concat(identity.identity_id), {
                                                                headers: _this.headers,
                                                                jwt: (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : void 0
                                                            })
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_refreshAccessToken",
            value: /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */ function _refreshAccessToken(refreshToken) {
                var _this = this;
                return _async_to_generator(function() {
                    var debugName, startedAt, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                debugName = "#_refreshAccessToken(".concat(refreshToken.substring(0, 5), "...)");
                                _this._debug(debugName, "begin");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    4,
                                    5
                                ]);
                                startedAt = Date.now();
                                return [
                                    4,
                                    retryable(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(attempt) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        if (!(attempt > 0)) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            sleep(200 * Math.pow(2, attempt - 1))
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        _state.label = 2;
                                                    case 2:
                                                        _this._debug(debugName, "refreshing attempt", attempt);
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "POST", "".concat(_this.url, "/token?grant_type=refresh_token"), {
                                                                body: {
                                                                    refresh_token: refreshToken
                                                                },
                                                                headers: _this.headers,
                                                                xform: _sessionResponse
                                                            })
                                                        ];
                                                    case 3:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(attempt) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }(), function(attempt, error) {
                                        var nextBackOffInterval = 200 * Math.pow(2, attempt);
                                        return error && isAuthRetryableFetchError(error) && // retryable only if the request can be sent before the backoff overflows the tick duration
                                        Date.now() + nextBackOffInterval - startedAt < AUTO_REFRESH_TICK_DURATION;
                                    })
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 3:
                                error = _state.sent();
                                _this._debug(debugName, "error", error);
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: {
                                                session: null,
                                                user: null
                                            },
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 4:
                                _this._debug(debugName, "end");
                                return [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_isValidSession",
            value: function _isValidSession(maybeSession) {
                var isValidSession = (typeof maybeSession === "undefined" ? "undefined" : _type_of(maybeSession)) === "object" && maybeSession !== null && "access_token" in maybeSession && "refresh_token" in maybeSession && "expires_at" in maybeSession;
                return isValidSession;
            }
        },
        {
            key: "_handleProviderSignIn",
            value: function _handleProviderSignIn(provider, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var url;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._getUrlForProvider("".concat(_this.url, "/authorize"), provider, {
                                        redirectTo: options.redirectTo,
                                        scopes: options.scopes,
                                        queryParams: options.queryParams
                                    })
                                ];
                            case 1:
                                url = _state.sent();
                                _this._debug("#_handleProviderSignIn()", "provider", provider, "options", options, "url", url);
                                if (isBrowser() && !options.skipBrowserRedirect) {
                                    window.location.assign(url);
                                }
                                return [
                                    2,
                                    {
                                        data: {
                                            provider: provider,
                                            url: url
                                        },
                                        error: null
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_recoverAndRefresh",
            value: /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */ function _recoverAndRefresh() {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, debugName, currentSession, timeNow, expiresWithMargin, error, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                debugName = "#_recoverAndRefresh()";
                                _this._debug(debugName, "begin");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    12,
                                    13,
                                    14
                                ]);
                                return [
                                    4,
                                    getItemAsync(_this.storage, _this.storageKey)
                                ];
                            case 2:
                                currentSession = _state.sent();
                                _this._debug(debugName, "session from storage", currentSession);
                                if (!!_this._isValidSession(currentSession)) return [
                                    3,
                                    5
                                ];
                                _this._debug(debugName, "session is not valid");
                                if (!(currentSession !== null)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this._removeSession()
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                            case 5:
                                timeNow = Math.round(Date.now() / 1e3);
                                expiresWithMargin = ((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + EXPIRY_MARGIN;
                                _this._debug(debugName, "session has".concat(expiresWithMargin ? "" : " not", " expired with margin of ").concat(EXPIRY_MARGIN, "s"));
                                if (!expiresWithMargin) return [
                                    3,
                                    9
                                ];
                                if (!(_this.autoRefreshToken && currentSession.refresh_token)) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    _this._callRefreshToken(currentSession.refresh_token)
                                ];
                            case 6:
                                error = _state.sent().error;
                                if (!error) return [
                                    3,
                                    8
                                ];
                                console.error(error);
                                if (!!isAuthRetryableFetchError(error)) return [
                                    3,
                                    8
                                ];
                                _this._debug(debugName, "refresh failed with a non-retryable error, removing the session", error);
                                return [
                                    4,
                                    _this._removeSession()
                                ];
                            case 7:
                                _state.sent();
                                _state.label = 8;
                            case 8:
                                return [
                                    3,
                                    11
                                ];
                            case 9:
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_IN", currentSession)
                                ];
                            case 10:
                                _state.sent();
                                _state.label = 11;
                            case 11:
                                return [
                                    3,
                                    14
                                ];
                            case 12:
                                err = _state.sent();
                                _this._debug(debugName, "error", err);
                                console.error(err);
                                return [
                                    2
                                ];
                            case 13:
                                _this._debug(debugName, "end");
                                return [
                                    7
                                ];
                            case 14:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_callRefreshToken",
            value: function _callRefreshToken(refreshToken) {
                var _this = this;
                return _async_to_generator(function() {
                    var _a, _b, debugName, _ref, data, _$error, result, error, result1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!refreshToken) {
                                    throw new AuthSessionMissingError();
                                }
                                if (_this.refreshingDeferred) {
                                    return [
                                        2,
                                        _this.refreshingDeferred.promise
                                    ];
                                }
                                debugName = "#_callRefreshToken(".concat(refreshToken.substring(0, 5), "...)");
                                _this._debug(debugName, "begin");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    5,
                                    9,
                                    10
                                ]);
                                _this.refreshingDeferred = new Deferred();
                                return [
                                    4,
                                    _this._refreshAccessToken(refreshToken)
                                ];
                            case 2:
                                _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                if (_$error) throw _$error;
                                if (!data.session) throw new AuthSessionMissingError();
                                return [
                                    4,
                                    _this._saveSession(data.session)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("TOKEN_REFRESHED", data.session)
                                ];
                            case 4:
                                _state.sent();
                                result = {
                                    session: data.session,
                                    error: null
                                };
                                _this.refreshingDeferred.resolve(result);
                                return [
                                    2,
                                    result
                                ];
                            case 5:
                                error = _state.sent();
                                _this._debug(debugName, "error", error);
                                if (!isAuthError(error)) return [
                                    3,
                                    8
                                ];
                                result1 = {
                                    session: null,
                                    error: error
                                };
                                if (!!isAuthRetryableFetchError(error)) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _this._removeSession()
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                (_a = _this.refreshingDeferred) === null || _a === void 0 ? void 0 : _a.resolve(result1);
                                return [
                                    2,
                                    result1
                                ];
                            case 8:
                                (_b = _this.refreshingDeferred) === null || _b === void 0 ? void 0 : _b.reject(error);
                                throw error;
                            case 9:
                                _this.refreshingDeferred = null;
                                _this._debug(debugName, "end");
                                return [
                                    7
                                ];
                            case 10:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_notifyAllSubscribers",
            value: function _notifyAllSubscribers(event, session) {
                var broadcast = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var _this = this;
                return _async_to_generator(function() {
                    var debugName, errors, promises, i;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                debugName = "#_notifyAllSubscribers(".concat(event, ")");
                                _this._debug(debugName, "begin", session, "broadcast = ".concat(broadcast));
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    ,
                                    3,
                                    4
                                ]);
                                if (_this.broadcastChannel && broadcast) {
                                    _this.broadcastChannel.postMessage({
                                        event: event,
                                        session: session
                                    });
                                }
                                errors = [];
                                promises = Array.from(_this.stateChangeEmitters.values()).map(/*#__PURE__*/ function() {
                                    var _ref = _async_to_generator(function(x) {
                                        var e;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _state.trys.push([
                                                        0,
                                                        2,
                                                        ,
                                                        3
                                                    ]);
                                                    return [
                                                        4,
                                                        x.callback(event, session)
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        3,
                                                        3
                                                    ];
                                                case 2:
                                                    e = _state.sent();
                                                    errors.push(e);
                                                    return [
                                                        3,
                                                        3
                                                    ];
                                                case 3:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function(x) {
                                        return _ref.apply(this, arguments);
                                    };
                                }());
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 2:
                                _state.sent();
                                if (errors.length > 0) {
                                    for(i = 0; i < errors.length; i += 1){
                                        console.error(errors[i]);
                                    }
                                    throw errors[0];
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                _this._debug(debugName, "end");
                                return [
                                    7
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_saveSession",
            value: /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */ function _saveSession(session) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#_saveSession()", session);
                                _this.suppressGetSessionWarning = true;
                                return [
                                    4,
                                    setItemAsync(_this.storage, _this.storageKey, session)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_removeSession",
            value: function _removeSession() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#_removeSession()");
                                return [
                                    4,
                                    removeItemAsync(_this.storage, _this.storageKey)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._notifyAllSubscribers("SIGNED_OUT", null)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */ key: "_removeVisibilityChangedCallback",
            value: function _removeVisibilityChangedCallback() {
                this._debug("#_removeVisibilityChangedCallback()");
                var callback = this.visibilityChangedCallback;
                this.visibilityChangedCallback = null;
                try {
                    if (callback && isBrowser() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) {
                        window.removeEventListener("visibilitychange", callback);
                    }
                } catch (e) {
                    console.error("removing visibilitychange callback failed", e);
                }
            }
        },
        {
            key: "_startAutoRefresh",
            value: /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */ function _startAutoRefresh() {
                var _this = this;
                return _async_to_generator(function() {
                    var ticker;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._stopAutoRefresh()
                                ];
                            case 1:
                                _state.sent();
                                _this._debug("#_startAutoRefresh()");
                                ticker = setInterval(function() {
                                    return _this._autoRefreshTokenTick();
                                }, AUTO_REFRESH_TICK_DURATION);
                                _this.autoRefreshTicker = ticker;
                                if (ticker && (typeof ticker === "undefined" ? "undefined" : _type_of(ticker)) === "object" && typeof ticker.unref === "function") {
                                    ticker.unref();
                                } else if (typeof Deno !== "undefined" && typeof Deno.unrefTimer === "function") {
                                    Deno.unrefTimer(ticker);
                                }
                                setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _this.initializePromise
                                                ];
                                            case 1:
                                                _state.sent();
                                                return [
                                                    4,
                                                    _this._autoRefreshTokenTick()
                                                ];
                                            case 2:
                                                _state.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }), 0);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_stopAutoRefresh",
            value: /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */ function _stopAutoRefresh() {
                var _this = this;
                return _async_to_generator(function() {
                    var ticker;
                    return _ts_generator(this, function(_state) {
                        _this._debug("#_stopAutoRefresh()");
                        ticker = _this.autoRefreshTicker;
                        _this.autoRefreshTicker = null;
                        if (ticker) {
                            clearInterval(ticker);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "startAutoRefresh",
            value: /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */ function startAutoRefresh() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._removeVisibilityChangedCallback();
                                return [
                                    4,
                                    _this._startAutoRefresh()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stopAutoRefresh",
            value: /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */ function stopAutoRefresh() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._removeVisibilityChangedCallback();
                                return [
                                    4,
                                    _this._stopAutoRefresh()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_autoRefreshTokenTick",
            value: /**
   * Runs the auto refresh token tick.
   */ function _autoRefreshTokenTick() {
                var _this = this;
                return _async_to_generator(function() {
                    var e;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#_autoRefreshTokenTick()", "begin");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this._acquireLock(0, /*#__PURE__*/ _async_to_generator(function() {
                                        var now, e;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    _state.trys.push([
                                                        0,
                                                        ,
                                                        5,
                                                        6
                                                    ]);
                                                    now = Date.now();
                                                    _state.label = 1;
                                                case 1:
                                                    _state.trys.push([
                                                        1,
                                                        3,
                                                        ,
                                                        4
                                                    ]);
                                                    return [
                                                        4,
                                                        _this._useSession(/*#__PURE__*/ function() {
                                                            var _ref = _async_to_generator(function(result) {
                                                                var session, expiresInTicks;
                                                                return _ts_generator(this, function(_state) {
                                                                    switch(_state.label){
                                                                        case 0:
                                                                            session = result.data.session;
                                                                            if (!session || !session.refresh_token || !session.expires_at) {
                                                                                _this._debug("#_autoRefreshTokenTick()", "no session");
                                                                                return [
                                                                                    2
                                                                                ];
                                                                            }
                                                                            expiresInTicks = Math.floor((session.expires_at * 1e3 - now) / AUTO_REFRESH_TICK_DURATION);
                                                                            _this._debug("#_autoRefreshTokenTick()", "access token expires in ".concat(expiresInTicks, " ticks, a tick lasts ").concat(AUTO_REFRESH_TICK_DURATION, "ms, refresh threshold is ").concat(AUTO_REFRESH_TICK_THRESHOLD, " ticks"));
                                                                            if (!(expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD)) return [
                                                                                3,
                                                                                2
                                                                            ];
                                                                            return [
                                                                                4,
                                                                                _this._callRefreshToken(session.refresh_token)
                                                                            ];
                                                                        case 1:
                                                                            _state.sent();
                                                                            _state.label = 2;
                                                                        case 2:
                                                                            return [
                                                                                2
                                                                            ];
                                                                    }
                                                                });
                                                            });
                                                            return function(result) {
                                                                return _ref.apply(this, arguments);
                                                            };
                                                        }())
                                                    ];
                                                case 2:
                                                    return [
                                                        2,
                                                        _state.sent()
                                                    ];
                                                case 3:
                                                    e = _state.sent();
                                                    console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
                                                    return [
                                                        3,
                                                        4
                                                    ];
                                                case 4:
                                                    return [
                                                        3,
                                                        6
                                                    ];
                                                case 5:
                                                    _this._debug("#_autoRefreshTokenTick()", "end");
                                                    return [
                                                        7
                                                    ];
                                                case 6:
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                e = _state.sent();
                                if (e.isAcquireTimeout || _instanceof(e, LockAcquireTimeoutError)) {
                                    _this._debug("auto refresh token tick lock not available");
                                } else {
                                    throw e;
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_handleVisibilityChange",
            value: /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */ function _handleVisibilityChange() {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this._debug("#_handleVisibilityChange()");
                                if (!isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
                                    if (_this.autoRefreshToken) {
                                        _this.startAutoRefresh();
                                    }
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                _this.visibilityChangedCallback = /*#__PURE__*/ _async_to_generator(function() {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _this._onVisibilityChanged(false)
                                                ];
                                            case 1:
                                                return [
                                                    2,
                                                    _state.sent()
                                                ];
                                        }
                                    });
                                });
                                window === null || window === void 0 ? void 0 : window.addEventListener("visibilitychange", _this.visibilityChangedCallback);
                                return [
                                    4,
                                    _this._onVisibilityChanged(true)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                console.error("_handleVisibilityChange", error);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_onVisibilityChanged",
            value: /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */ function _onVisibilityChanged(calledFromInitialize) {
                var _this = this;
                return _async_to_generator(function() {
                    var methodName;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                methodName = "#_onVisibilityChanged(".concat(calledFromInitialize, ")");
                                _this._debug(methodName, "visibilityState", document.visibilityState);
                                if (!(document.visibilityState === "visible")) return [
                                    3,
                                    4
                                ];
                                if (_this.autoRefreshToken) {
                                    _this._startAutoRefresh();
                                }
                                if (!!calledFromInitialize) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.initializePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    if (document.visibilityState !== "visible") {
                                                        _this._debug(methodName, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                                                        return [
                                                            2
                                                        ];
                                                    }
                                                    return [
                                                        4,
                                                        _this._recoverAndRefresh()
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    }))
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                if (document.visibilityState === "hidden") {
                                    if (_this.autoRefreshToken) {
                                        _this._stopAutoRefresh();
                                    }
                                }
                                _state.label = 5;
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_getUrlForProvider",
            value: /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */ function _getUrlForProvider(url, provider, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var urlParams, _ref, codeChallenge, codeChallengeMethod, flowParams, query;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                urlParams = [
                                    "provider=".concat(encodeURIComponent(provider))
                                ];
                                if (options === null || options === void 0 ? void 0 : options.redirectTo) {
                                    urlParams.push("redirect_to=".concat(encodeURIComponent(options.redirectTo)));
                                }
                                if (options === null || options === void 0 ? void 0 : options.scopes) {
                                    urlParams.push("scopes=".concat(encodeURIComponent(options.scopes)));
                                }
                                if (!(_this.flowType === "pkce")) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    getCodeChallengeAndMethod(_this.storage, _this.storageKey)
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), codeChallenge = _ref[0], codeChallengeMethod = _ref[1];
                                flowParams = new URLSearchParams({
                                    code_challenge: "".concat(encodeURIComponent(codeChallenge)),
                                    code_challenge_method: "".concat(encodeURIComponent(codeChallengeMethod))
                                });
                                urlParams.push(flowParams.toString());
                                _state.label = 2;
                            case 2:
                                if (options === null || options === void 0 ? void 0 : options.queryParams) {
                                    query = new URLSearchParams(options.queryParams);
                                    urlParams.push(query.toString());
                                }
                                if (options === null || options === void 0 ? void 0 : options.skipBrowserRedirect) {
                                    urlParams.push("skip_http_redirect=".concat(options.skipBrowserRedirect));
                                }
                                return [
                                    2,
                                    "".concat(url, "?").concat(urlParams.join("&"))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_unenroll",
            value: function _unenroll(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, sessionData, sessionError;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        sessionData = result.data, sessionError = result.error;
                                                        if (sessionError) {
                                                            return [
                                                                2,
                                                                {
                                                                    data: null,
                                                                    error: sessionError
                                                                }
                                                            ];
                                                        }
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "DELETE", "".concat(_this.url, "/factors/").concat(params.factorId), {
                                                                headers: _this.headers,
                                                                jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                                                            })
                                                        ];
                                                    case 1:
                                                        return [
                                                            2,
                                                            _state.sent()
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_enroll",
            value: function _enroll(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    _this._useSession(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(result) {
                                            var _a, _b, sessionData, sessionError, body, _ref, data, _$error;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        sessionData = result.data, sessionError = result.error;
                                                        if (sessionError) {
                                                            return [
                                                                2,
                                                                {
                                                                    data: null,
                                                                    error: sessionError
                                                                }
                                                            ];
                                                        }
                                                        body = Object.assign({
                                                            friendly_name: params.friendlyName,
                                                            factor_type: params.factorType
                                                        }, params.factorType === "phone" ? {
                                                            phone: params.phone
                                                        } : {
                                                            issuer: params.issuer
                                                        });
                                                        return [
                                                            4,
                                                            _request(_this.fetch, "POST", "".concat(_this.url, "/factors"), {
                                                                body: body,
                                                                headers: _this.headers,
                                                                jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                                                            })
                                                        ];
                                                    case 1:
                                                        _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                                        if (_$error) {
                                                            return [
                                                                2,
                                                                {
                                                                    data: null,
                                                                    error: _$error
                                                                }
                                                            ];
                                                        }
                                                        if (params.factorType === "totp" && ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code)) {
                                                            data.totp.qr_code = "data:image/svg+xml;utf-8,".concat(data.totp.qr_code);
                                                        }
                                                        return [
                                                            2,
                                                            {
                                                                data: data,
                                                                error: null
                                                            }
                                                        ];
                                                }
                                            });
                                        });
                                        return function(result) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }())
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                error = _state.sent();
                                if (isAuthError(error)) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: error
                                        }
                                    ];
                                }
                                throw error;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_verify",
            value: /**
   * {@see GoTrueMFAApi#verify}
   */ function _verify(params) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                var error;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _state.trys.push([
                                                0,
                                                2,
                                                ,
                                                3
                                            ]);
                                            return [
                                                4,
                                                _this._useSession(/*#__PURE__*/ function() {
                                                    var _ref = _async_to_generator(function(result) {
                                                        var _a, sessionData, sessionError, _ref, data, _$error;
                                                        return _ts_generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    sessionData = result.data, sessionError = result.error;
                                                                    if (sessionError) {
                                                                        return [
                                                                            2,
                                                                            {
                                                                                data: null,
                                                                                error: sessionError
                                                                            }
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        _request(_this.fetch, "POST", "".concat(_this.url, "/factors/").concat(params.factorId, "/verify"), {
                                                                            body: {
                                                                                code: params.code,
                                                                                challenge_id: params.challengeId
                                                                            },
                                                                            headers: _this.headers,
                                                                            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                                                                        })
                                                                    ];
                                                                case 1:
                                                                    _ref = _state.sent(), data = _ref.data, _$error = _ref.error;
                                                                    if (_$error) {
                                                                        return [
                                                                            2,
                                                                            {
                                                                                data: null,
                                                                                error: _$error
                                                                            }
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        _this._saveSession(Object.assign({
                                                                            expires_at: Math.round(Date.now() / 1e3) + data.expires_in
                                                                        }, data))
                                                                    ];
                                                                case 2:
                                                                    _state.sent();
                                                                    return [
                                                                        4,
                                                                        _this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", data)
                                                                    ];
                                                                case 3:
                                                                    _state.sent();
                                                                    return [
                                                                        2,
                                                                        {
                                                                            data: data,
                                                                            error: _$error
                                                                        }
                                                                    ];
                                                            }
                                                        });
                                                    });
                                                    return function(result) {
                                                        return _ref.apply(this, arguments);
                                                    };
                                                }())
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _state.sent()
                                            ];
                                        case 2:
                                            error = _state.sent();
                                            if (isAuthError(error)) {
                                                return [
                                                    2,
                                                    {
                                                        data: null,
                                                        error: error
                                                    }
                                                ];
                                            }
                                            throw error;
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }))
                        ];
                    });
                })();
            }
        },
        {
            key: "_challenge",
            value: /**
   * {@see GoTrueMFAApi#challenge}
   */ function _challenge(params) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                var error;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _state.trys.push([
                                                0,
                                                2,
                                                ,
                                                3
                                            ]);
                                            return [
                                                4,
                                                _this._useSession(/*#__PURE__*/ function() {
                                                    var _ref = _async_to_generator(function(result) {
                                                        var _a, sessionData, sessionError;
                                                        return _ts_generator(this, function(_state) {
                                                            switch(_state.label){
                                                                case 0:
                                                                    sessionData = result.data, sessionError = result.error;
                                                                    if (sessionError) {
                                                                        return [
                                                                            2,
                                                                            {
                                                                                data: null,
                                                                                error: sessionError
                                                                            }
                                                                        ];
                                                                    }
                                                                    return [
                                                                        4,
                                                                        _request(_this.fetch, "POST", "".concat(_this.url, "/factors/").concat(params.factorId, "/challenge"), {
                                                                            body: {
                                                                                channel: params.channel
                                                                            },
                                                                            headers: _this.headers,
                                                                            jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token
                                                                        })
                                                                    ];
                                                                case 1:
                                                                    return [
                                                                        2,
                                                                        _state.sent()
                                                                    ];
                                                            }
                                                        });
                                                    });
                                                    return function(result) {
                                                        return _ref.apply(this, arguments);
                                                    };
                                                }())
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _state.sent()
                                            ];
                                        case 2:
                                            error = _state.sent();
                                            if (isAuthError(error)) {
                                                return [
                                                    2,
                                                    {
                                                        data: null,
                                                        error: error
                                                    }
                                                ];
                                            }
                                            throw error;
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }))
                        ];
                    });
                })();
            }
        },
        {
            key: "_challengeAndVerify",
            value: /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */ function _challengeAndVerify(params) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, challengeData, challengeError;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this._challenge({
                                        factorId: params.factorId
                                    })
                                ];
                            case 1:
                                _ref = _state.sent(), challengeData = _ref.data, challengeError = _ref.error;
                                if (challengeError) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: challengeError
                                        }
                                    ];
                                }
                                return [
                                    4,
                                    _this._verify({
                                        factorId: params.factorId,
                                        challengeId: challengeData.id,
                                        code: params.code
                                    })
                                ];
                            case 2:
                                return [
                                    2,
                                    _state.sent()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_listFactors",
            value: /**
   * {@see GoTrueMFAApi#listFactors}
   */ function _listFactors() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, user, userError, factors, totp, phone;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.getUser()
                                ];
                            case 1:
                                _ref = _state.sent(), user = _ref.data.user, userError = _ref.error;
                                if (userError) {
                                    return [
                                        2,
                                        {
                                            data: null,
                                            error: userError
                                        }
                                    ];
                                }
                                factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
                                totp = factors.filter(function(factor) {
                                    return factor.factor_type === "totp" && factor.status === "verified";
                                });
                                phone = factors.filter(function(factor) {
                                    return factor.factor_type === "phone" && factor.status === "verified";
                                });
                                return [
                                    2,
                                    {
                                        data: {
                                            all: factors,
                                            totp: totp,
                                            phone: phone
                                        },
                                        error: null
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "_getAuthenticatorAssuranceLevel",
            value: /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */ function _getAuthenticatorAssuranceLevel() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this._acquireLock(-1, /*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                _this._useSession(/*#__PURE__*/ function() {
                                                    var _ref = _async_to_generator(function(result) {
                                                        var _a, _b, session, sessionError, payload, currentLevel, nextLevel, verifiedFactors, currentAuthenticationMethods;
                                                        return _ts_generator(this, function(_state) {
                                                            session = result.data.session, sessionError = result.error;
                                                            if (sessionError) {
                                                                return [
                                                                    2,
                                                                    {
                                                                        data: null,
                                                                        error: sessionError
                                                                    }
                                                                ];
                                                            }
                                                            if (!session) {
                                                                return [
                                                                    2,
                                                                    {
                                                                        data: {
                                                                            currentLevel: null,
                                                                            nextLevel: null,
                                                                            currentAuthenticationMethods: []
                                                                        },
                                                                        error: null
                                                                    }
                                                                ];
                                                            }
                                                            payload = _this._decodeJWT(session.access_token);
                                                            currentLevel = null;
                                                            if (payload.aal) {
                                                                currentLevel = payload.aal;
                                                            }
                                                            nextLevel = currentLevel;
                                                            verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter(function(factor) {
                                                                return factor.status === "verified";
                                                            })) !== null && _b !== void 0 ? _b : [];
                                                            if (verifiedFactors.length > 0) {
                                                                nextLevel = "aal2";
                                                            }
                                                            currentAuthenticationMethods = payload.amr || [];
                                                            return [
                                                                2,
                                                                {
                                                                    data: {
                                                                        currentLevel: currentLevel,
                                                                        nextLevel: nextLevel,
                                                                        currentAuthenticationMethods: currentAuthenticationMethods
                                                                    },
                                                                    error: null
                                                                }
                                                            ];
                                                        });
                                                    });
                                                    return function(result) {
                                                        return _ref.apply(this, arguments);
                                                    };
                                                }())
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _state.sent()
                                            ];
                                    }
                                });
                            }))
                        ];
                    });
                })();
            }
        }
    ]);
    return _GoTrueClient;
}();
GoTrueClient.nextInstanceID = 0;
// ../node_modules/@supabase/auth-js/dist/module/AuthClient.js
var AuthClient = GoTrueClient;
var AuthClient_default = AuthClient;
// ../node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js
var SupabaseAuthClient = /*#__PURE__*/ function(AuthClient_default) {
    "use strict";
    _inherits(SupabaseAuthClient, AuthClient_default);
    function SupabaseAuthClient(options) {
        _class_call_check(this, SupabaseAuthClient);
        return _call_super(this, SupabaseAuthClient, [
            options
        ]);
    }
    return SupabaseAuthClient;
}(AuthClient_default);
// ../node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js
var __awaiter8 = function __awaiter8(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, [])).next());
    });
};
var SupabaseClient = /*#__PURE__*/ function() {
    "use strict";
    function SupabaseClient(supabaseUrl, supabaseKey, options) {
        _class_call_check(this, SupabaseClient);
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl) throw new Error("supabaseUrl is required.");
        if (!supabaseKey) throw new Error("supabaseKey is required.");
        var _supabaseUrl = stripTrailingSlash(supabaseUrl);
        this.realtimeUrl = "".concat(_supabaseUrl, "/realtime/v1").replace(/^http/i, "ws");
        this.authUrl = "".concat(_supabaseUrl, "/auth/v1");
        this.storageUrl = "".concat(_supabaseUrl, "/storage/v1");
        this.functionsUrl = "".concat(_supabaseUrl, "/functions/v1");
        var defaultStorageKey = "sb-".concat(new URL(this.authUrl).hostname.split(".")[0], "-auth-token");
        var DEFAULTS = {
            db: DEFAULT_DB_OPTIONS,
            realtime: DEFAULT_REALTIME_OPTIONS,
            auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), {
                storageKey: defaultStorageKey
            }),
            global: DEFAULT_GLOBAL_OPTIONS
        };
        var settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : "";
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        if (!settings.accessToken) {
            this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: function(_, prop) {
                    throw new Error("@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.".concat(String(prop), " is not possible"));
                }
            });
        }
        this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers
        }, settings.realtime));
        this.rest = new PostgrestClient("".concat(_supabaseUrl, "/rest/v1"), {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        if (!settings.accessToken) {
            this._listenForAuthEvents();
        }
    }
    _create_class(SupabaseClient, [
        {
            key: "functions",
            get: /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */ function get() {
                return new FunctionsClient(this.functionsUrl, {
                    headers: this.headers,
                    customFetch: this.fetch
                });
            }
        },
        {
            key: "storage",
            get: /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */ function get() {
                return new StorageClient(this.storageUrl, this.headers, this.fetch);
            }
        },
        {
            /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */ key: "from",
            value: function from(relation) {
                return this.rest.from(relation);
            }
        },
        {
            // NOTE: signatures must be kept in sync with PostgrestClient.schema
            /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */ key: "schema",
            value: function schema(schema) {
                return this.rest.schema(schema);
            }
        },
        {
            // NOTE: signatures must be kept in sync with PostgrestClient.rpc
            /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */ key: "rpc",
            value: function rpc(fn) {
                var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.rest.rpc(fn, args, options);
            }
        },
        {
            /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */ key: "channel",
            value: function channel(name) {
                var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    config: {}
                };
                return this.realtime.channel(name, opts);
            }
        },
        {
            /**
   * Returns all Realtime channels.
   */ key: "getChannels",
            value: function getChannels() {
                return this.realtime.getChannels();
            }
        },
        {
            /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */ key: "removeChannel",
            value: function removeChannel(channel) {
                return this.realtime.removeChannel(channel);
            }
        },
        {
            /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */ key: "removeAllChannels",
            value: function removeAllChannels() {
                return this.realtime.removeAllChannels();
            }
        },
        {
            key: "_getAccessToken",
            value: function _getAccessToken() {
                var _a, _b;
                return __awaiter8(this, void 0, void 0, function() {
                    var data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!this.accessToken) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    this.accessToken()
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                return [
                                    4,
                                    this.auth.getSession()
                                ];
                            case 3:
                                data = _state.sent().data;
                                return [
                                    2,
                                    (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null
                                ];
                        }
                    });
                });
            }
        },
        {
            key: "_initSupabaseAuthClient",
            value: function _initSupabaseAuthClient(param, headers, fetch2) {
                var autoRefreshToken = param.autoRefreshToken, persistSession = param.persistSession, detectSessionInUrl = param.detectSessionInUrl, storage = param.storage, storageKey = param.storageKey, flowType = param.flowType, lock = param.lock, debug = param.debug;
                var _a;
                var authHeaders = {
                    Authorization: "Bearer ".concat(this.supabaseKey),
                    apikey: "".concat(this.supabaseKey)
                };
                return new SupabaseAuthClient({
                    url: this.authUrl,
                    headers: Object.assign(Object.assign({}, authHeaders), headers),
                    storageKey: storageKey,
                    autoRefreshToken: autoRefreshToken,
                    persistSession: persistSession,
                    detectSessionInUrl: detectSessionInUrl,
                    storage: storage,
                    flowType: flowType,
                    lock: lock,
                    debug: debug,
                    fetch: fetch2,
                    // auth checks if there is a custom authorizaiton header using this flag
                    // so it knows whether to return an error when getUser is called with no session
                    hasCustomAuthorizationHeader: (_a = "Authorization" in this.headers) !== null && _a !== void 0 ? _a : false
                });
            }
        },
        {
            key: "_initRealtimeClient",
            value: function _initRealtimeClient(options) {
                return new RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), {
                    params: Object.assign({
                        apikey: this.supabaseKey
                    }, options === null || options === void 0 ? void 0 : options.params)
                }));
            }
        },
        {
            key: "_listenForAuthEvents",
            value: function _listenForAuthEvents() {
                var _this = this;
                var data = this.auth.onAuthStateChange(function(event, session) {
                    _this._handleTokenChanged(event, "CLIENT", session === null || session === void 0 ? void 0 : session.access_token);
                });
                return data;
            }
        },
        {
            key: "_handleTokenChanged",
            value: function _handleTokenChanged(event, source, token) {
                if ((event === "TOKEN_REFRESHED" || event === "SIGNED_IN") && this.changedAccessToken !== token) {
                    this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
                    this.changedAccessToken = token;
                } else if (event === "SIGNED_OUT") {
                    this.realtime.setAuth(this.supabaseKey);
                    if (source == "STORAGE") this.auth.signOut();
                    this.changedAccessToken = void 0;
                }
            }
        }
    ]);
    return SupabaseClient;
}();
// ../node_modules/@supabase/supabase-js/dist/module/index.js
var createClient = function(supabaseUrl, supabaseKey, options) {
    return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
// src/components/ExportWrapper.tsx
var WarehouseType = /* @__PURE__ */ function(WarehouseType2) {
    WarehouseType2["Clickhouse"] = "clickhouse";
    WarehouseType2["Snowflake"] = "snowflake";
    WarehouseType2["Databricks"] = "databricks";
    WarehouseType2["BigQuery"] = "bigquery";
    WarehouseType2["Redshift"] = "redshift";
    WarehouseType2["Kafka"] = "kafka";
    WarehouseType2["Postgres"] = "postgres";
    return WarehouseType2;
}(WarehouseType || {});
var _obj;
var credentialFields = (_obj = {}, _define_property(_obj, "clickhouse" /* Clickhouse */ , [
    "host",
    "port",
    "username",
    "password",
    "database"
]), _define_property(_obj, "snowflake" /* Snowflake */ , [
    "account",
    "username",
    "password",
    "warehouse",
    "database",
    "schema"
]), _define_property(_obj, "databricks" /* Databricks */ , [
    "host",
    "http_path",
    "access_token",
    "catalog",
    "schema"
]), _define_property(_obj, "bigquery" /* BigQuery */ , [
    "project_id",
    "private_key",
    "client_email",
    "dataset"
]), _define_property(_obj, "redshift" /* Redshift */ , [
    "host",
    "port",
    "database",
    "username",
    "password",
    "schema"
]), _define_property(_obj, "kafka" /* Kafka */ , [
    "bootstrap_servers",
    "topic",
    "security_protocol",
    "sasl_username",
    "sasl_password"
]), _define_property(_obj, "postgres" /* Postgres */ , [
    "host",
    "port",
    "database",
    "username",
    "password",
    "schema"
]), _obj);
z.string().datetime();
var _obj1;
var warehouseIcons = (_obj1 = {}, _define_property(_obj1, "clickhouse" /* Clickhouse */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://cdn.brandfetch.io/idnezyZEJm/theme/dark/symbol.svg",
    alt: "Clickhouse",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "snowflake" /* Snowflake */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://cdn.brandfetch.io/idJz-fGD_q/theme/dark/symbol.svg",
    alt: "Snowflake",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "databricks" /* Databricks */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/symbol.svg?k=bfHSJFAPEG",
    alt: "Databricks",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "bigquery" /* BigQuery */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",
    alt: "BigQuery",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "redshift" /* Redshift */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/218px-Amazon-Redshift-Logo.svg.png",
    alt: "Redshift",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "kafka" /* Kafka */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg",
    alt: "Kafka",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "postgres" /* Postgres */ , /* @__PURE__ */ React9.createElement("img", {
    src: "https://cdn.brandfetch.io/idjSeCeMle/theme/dark/logo.svg?k=bfHSJFAPEG",
    alt: "Postgres",
    className: "mr-2 h-4 w-4"
})), _obj1);
var ExportWrapper = function(param) {
    var apiKey = param.apiKey, organizationId = param.organizationId, internalWarehouse = param.internalWarehouse, tableName = param.tableName, _param_theme = param.theme, theme = _param_theme === void 0 ? "light" : _param_theme, onSuccess = param.onSuccess, onError = param.onError;
    var _React9_useState = _sliced_to_array(React9.useState("destination"), 2), currentStep = _React9_useState[0], setCurrentStep = _React9_useState[1];
    var _React9_useState1 = _sliced_to_array(React9.useState("clickhouse" /* Clickhouse */ ), 2), destination_type = _React9_useState1[0], setdestination_type = _React9_useState1[1];
    var _React9_useState2 = _sliced_to_array(React9.useState(""), 2), destination_name = _React9_useState2[0], setdestination_name = _React9_useState2[1];
    var _React9_useState3 = _sliced_to_array(React9.useState({}), 2), credentials = _React9_useState3[0], setCredentials = _React9_useState3[1];
    var _React9_useState4 = _sliced_to_array(React9.useState(void 0), 2), scheduledAt = _React9_useState4[0], setScheduledAt = _React9_useState4[1];
    var _React9_useState5 = _sliced_to_array(React9.useState(""), 2), dateTimeError = _React9_useState5[0], setDateTimeError = _React9_useState5[1];
    var _useToast = useToast(), toast2 = _useToast.toast;
    var _React9_useState6 = _sliced_to_array(React9.useState(false), 2), isLoading = _React9_useState6[0], setIsLoading = _React9_useState6[1];
    var containerRef = useRef(null);
    var _useState = _sliced_to_array(useState(0), 2), containerWidth = _useState[0], setContainerWidth = _useState[1];
    useState("");
    useState(false);
    process.env.NEXT_PUBLIC_PORTCULLIS_URL || "https://portcullis-app.fly.dev";
    useEffect(function() {
        if (!containerRef.current) return;
        var resizeObserver = new ResizeObserver(function(entries) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var entry = _step.value;
                    if (entry.contentRect) {
                        setContainerWidth(entry.contentRect.width);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        resizeObserver.observe(containerRef.current);
        return function() {
            return resizeObserver.disconnect();
        };
    }, []);
    var supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    var handleSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var _ref, warehouseData, _$error, data, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            supabase.from("warehouses").select("credentials").eq("id", internalWarehouse).single()
                        ];
                    case 1:
                        _ref = _state.sent(), warehouseData = _ref.data, _$error = _ref.error;
                        if (_$error) throw _$error;
                        if (!(warehouseData === null || warehouseData === void 0 ? void 0 : warehouseData.credentials)) throw new Error("No credentials found");
                        return [
                            4,
                            createExport(apiKey, {
                                organization: organizationId,
                                internal_warehouse: internalWarehouse,
                                internal_credentials: warehouseData.credentials,
                                destination_type: destination_type,
                                destination_name: destination_name,
                                table: tableName,
                                credentials: credentials,
                                scheduled_at: scheduledAt || void 0
                            })
                        ];
                    case 2:
                        data = _state.sent();
                        toast2({
                            title: "Export Created",
                            description: "Your export has been successfully configured."
                        });
                        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        toast2({
                            title: "Error",
                            description: _instanceof(error, Error) ? error.message : "Failed to create export",
                            variant: "destructive"
                        });
                        onError === null || onError === void 0 ? void 0 : onError(error);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleSubmit() {
            return _ref.apply(this, arguments);
        };
    }();
    var renderDestinationStep = function() {
        return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(CardHeader, null, /* @__PURE__ */ React9.createElement(CardTitle, null, "Configure Destination")), /* @__PURE__ */ React9.createElement(CardContent, {
            className: "space-y-4"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React9.createElement(Label, null, "Destination Type"), /* @__PURE__ */ React9.createElement(Select, {
            value: destination_type,
            onValueChange: function(value) {
                return setdestination_type(value);
            }
        }, /* @__PURE__ */ React9.createElement(SelectTrigger, {
            className: "w-full"
        }, /* @__PURE__ */ React9.createElement(SelectValue, null, destination_type && /* @__PURE__ */ React9.createElement("div", {
            className: "flex items-center gap-2"
        }, warehouseIcons[destination_type], /* @__PURE__ */ React9.createElement("span", null, destination_type.charAt(0).toUpperCase() + destination_type.slice(1))))), /* @__PURE__ */ React9.createElement(SelectContent, null, Object.values(WarehouseType).map(function(type) {
            return /* @__PURE__ */ React9.createElement(SelectItem, {
                key: type,
                value: type
            }, /* @__PURE__ */ React9.createElement("div", {
                className: "flex items-center gap-2 w-full min-w-[200px]"
            }, warehouseIcons[type], /* @__PURE__ */ React9.createElement("span", {
                className: "truncate"
            }, type.charAt(0).toUpperCase() + type.slice(1))));
        })))), /* @__PURE__ */ React9.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React9.createElement(Label, null, "Warehouse Name"), /* @__PURE__ */ React9.createElement(Input, {
            value: destination_name,
            onChange: function(e) {
                return setdestination_name(e.target.value);
            },
            placeholder: "Enter a name for this warehouse"
        }))), /* @__PURE__ */ React9.createElement(CardFooter, null, /* @__PURE__ */ React9.createElement(Button, {
            onClick: function() {
                return setCurrentStep("credentials");
            },
            disabled: !destination_type || !destination_name
        }, "Continue")));
    };
    var renderCredentialsStep = function() {
        return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(CardHeader, null, /* @__PURE__ */ React9.createElement(CardTitle, null, "Configure Credentials")), /* @__PURE__ */ React9.createElement(CardContent, {
            className: "space-y-4"
        }, credentialFields[destination_type].map(function(field) {
            return /* @__PURE__ */ React9.createElement("div", {
                key: field,
                className: "space-y-2"
            }, /* @__PURE__ */ React9.createElement(Label, {
                className: "capitalize"
            }, field === "host" ? "Hostname" : field === "port" ? "Port Number" : field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")), /* @__PURE__ */ React9.createElement(Input, {
                type: field.includes("password") ? "password" : "text",
                value: credentials[field] || "",
                onChange: function(e) {
                    return setCredentials(function(prev) {
                        return _object_spread_props(_object_spread({}, prev), _define_property({}, field, e.target.value));
                    });
                },
                placeholder: field === "port" ? "8123" : field === "host" ? "localhost" : "Enter ".concat(field.replace("_", " "))
            }));
        })), /* @__PURE__ */ React9.createElement(CardFooter, {
            className: "space-x-2"
        }, /* @__PURE__ */ React9.createElement(Button, {
            onClick: function() {
                return setCurrentStep("destination");
            }
        }, "Back"), /* @__PURE__ */ React9.createElement(Button, {
            onClick: function() {
                return setCurrentStep("schedule");
            },
            disabled: !Object.keys(credentials).length
        }, "Continue")));
    };
    var renderScheduleStep = function() {
        return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(CardHeader, null, /* @__PURE__ */ React9.createElement(CardTitle, null, "Schedule Export")), /* @__PURE__ */ React9.createElement(CardContent, {
            className: "space-y-4"
        }, /* @__PURE__ */ React9.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React9.createElement(Label, null, "Schedule Time"), /* @__PURE__ */ React9.createElement(Input, {
            value: scheduledAt || "",
            onChange: function(e) {
                return setScheduledAt(e.target.value);
            },
            type: "datetime-local",
            placeholder: "2024-03-21T15:30:00+00:00",
            className: dateTimeError ? "border-red-500" : ""
        }), dateTimeError && /* @__PURE__ */ React9.createElement("p", {
            className: "text-sm text-red-500"
        }, dateTimeError), /* @__PURE__ */ React9.createElement("p", {
            className: "text-sm text-muted-foreground"
        }, "Enter schedule time in ISO 8601 format with timezone. Leave empty for immediate execution."))), /* @__PURE__ */ React9.createElement(CardFooter, {
            className: "space-x-2"
        }, /* @__PURE__ */ React9.createElement(Button, {
            onClick: function() {
                return setCurrentStep("credentials");
            }
        }, "Back"), /* @__PURE__ */ React9.createElement(Button, {
            onClick: handleSubmit,
            disabled: !!dateTimeError
        }, "Create Export")));
    };
    var stepComponents = {
        destination: renderDestinationStep,
        credentials: renderCredentialsStep,
        schedule: renderScheduleStep
    };
    return /* @__PURE__ */ React9.createElement("div", {
        ref: containerRef,
        className: "relative w-full"
    }, /* @__PURE__ */ React9.createElement(Card, {
        className: "relative"
    }, isLoading ? /* @__PURE__ */ React9.createElement("div", {
        className: "space-y-4"
    }, /* @__PURE__ */ React9.createElement(Skeleton, {
        className: "h-10 w-full"
    }), /* @__PURE__ */ React9.createElement("div", {
        className: "space-y-2"
    }, /* @__PURE__ */ React9.createElement(Skeleton, {
        className: "h-4 w-[".concat(Math.min(250, containerWidth * 0.8), "px]")
    }), /* @__PURE__ */ React9.createElement(Skeleton, {
        className: "h-8 w-full"
    }), /* @__PURE__ */ React9.createElement(Skeleton, {
        className: "h-4 w-[".concat(Math.min(200, containerWidth * 0.6), "px]")
    }), /* @__PURE__ */ React9.createElement(Skeleton, {
        className: "h-8 w-full"
    })), /* @__PURE__ */ React9.createElement(Skeleton, {
        className: "h-10 w-[".concat(Math.min(120, containerWidth * 0.3), "px]")
    })) : /* @__PURE__ */ React9.createElement(React9.Fragment, null, stepComponents[currentStep](), /* @__PURE__ */ React9.createElement(PortcullisTag, null))));
};
export { ExportWrapper, WarehouseType };
