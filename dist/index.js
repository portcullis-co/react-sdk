'use strict';
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
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var React14 = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var LabelPrimitive = require('@radix-ui/react-label');
var reactIcons = require('@radix-ui/react-icons');
var SelectPrimitive = require('@radix-ui/react-select');
var z2 = require('zod');
var zod = require('@hookform/resolvers/zod');
var dateFns = require('date-fns');
var reactHookForm = require('react-hook-form');
var lucideReact = require('lucide-react');
var reactDayPicker = require('react-day-picker');
var PopoverPrimitive = require('@radix-ui/react-popover');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function get() {
                        return e[k];
                    }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}
var React14__namespace = /*#__PURE__*/ _interopNamespace(React14);
var LabelPrimitive__namespace = /*#__PURE__*/ _interopNamespace(LabelPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/ _interopNamespace(SelectPrimitive);
var z2__namespace = /*#__PURE__*/ _interopNamespace(z2);
var PopoverPrimitive__namespace = /*#__PURE__*/ _interopNamespace(PopoverPrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/ _interopNamespace(ScrollAreaPrimitive);
// src/components/ExportWrapper.tsx
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}
// src/components/ui/card.tsx
var Card = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className)
    }, props));
});
Card.displayName = "Card";
var CardHeader = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("h3", _object_spread({
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("p", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className)
    }, props));
});
CardFooter.displayName = "CardFooter";
var buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
var Button = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ React14__namespace.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
var Input = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
var labelVariants = classVarianceAuthority.cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(LabelPrimitive__namespace.Root, _object_spread({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label.displayName = LabelPrimitive__namespace.Root.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Trigger, _object_spread({
        ref: ref,
        className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    }, props), children, /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Icon, {
        asChild: true
    }, /* @__PURE__ */ React14__namespace.createElement(reactIcons.CaretSortIcon, {
        className: "h-4 w-4 opacity-50"
    })));
});
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.ScrollUpButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React14__namespace.createElement(reactIcons.ChevronUpIcon, null));
});
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.ScrollDownButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React14__namespace.createElement(reactIcons.ChevronDownIcon, null));
});
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, props = _object_without_properties(_param, [
        "className",
        "children",
        "position"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Portal, null, /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Content, _object_spread({
        ref: ref,
        className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
        position: position
    }, props), /* @__PURE__ */ React14__namespace.createElement(SelectScrollUpButton, null), /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
    }, children), /* @__PURE__ */ React14__namespace.createElement(SelectScrollDownButton, null)));
});
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", className)
    }, props));
});
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Item, _object_spread({
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /* @__PURE__ */ React14__namespace.createElement("span", {
        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React14__namespace.createElement(reactIcons.CheckIcon, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(SelectPrimitive__namespace.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
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
    var _React14__namespace_useState = _sliced_to_array(React14__namespace.useState(memoryState), 2), state = _React14__namespace_useState[0], setState = _React14__namespace_useState[1];
    React14__namespace.useEffect(function() {
        listeners.push(setState);
        return function() {
            var index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
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
    return /* @__PURE__ */ React14__namespace.default.createElement("div", _object_spread({
        className: cn("animate-pulse rounded-md bg-muted", className)
    }, props));
}
var PortcullisTag = function() {
    return /* @__PURE__ */ React14__namespace.default.createElement("div", {
        className: "border-t border-border/40"
    }, /* @__PURE__ */ React14__namespace.default.createElement("a", {
        href: "https://runportcullis.com",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center justify-end p-4 group"
    }, /* @__PURE__ */ React14__namespace.default.createElement("div", {
        className: "flex items-center gap-2"
    }, /* @__PURE__ */ React14__namespace.default.createElement("img", {
        src: "/portcullis.svg",
        alt: "Portcullis",
        className: "w-4 h-4 group-hover:scale-110 transition-transform duration-200"
    }), /* @__PURE__ */ React14__namespace.default.createElement("span", {
        className: cn("text-sm font-semibold bg-gradient-to-r from-[#faff69] to-[#171717]", "bg-clip-text text-transparent", "animate-gradient bg-[length:200%_auto]", "group-hover:bg-[length:300%_auto] transition-all duration-200")
    }, "Powered by Portcullis"))));
};
function Calendar(_param) {
    var className = _param.className, classNames = _param.classNames, _param_showOutsideDays = _param.showOutsideDays, showOutsideDays = _param_showOutsideDays === void 0 ? true : _param_showOutsideDays, props = _object_without_properties(_param, [
        "className",
        "classNames",
        "showOutsideDays"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(reactDayPicker.DayPicker, _object_spread({
        showOutsideDays: showOutsideDays,
        className: cn("p-3", className),
        classNames: _object_spread({
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(buttonVariants({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(buttonVariants({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible"
        }, classNames),
        components: {
            PreviousMonthButton: function(_param) {
                var props2 = _extends({}, _object_destructuring_empty(_param));
                return /* @__PURE__ */ React14__namespace.createElement(lucideReact.ChevronLeft, {
                    className: "h-4 w-4"
                });
            },
            NextMonthButton: function(_param) {
                var props2 = _extends({}, _object_destructuring_empty(_param));
                return /* @__PURE__ */ React14__namespace.createElement(lucideReact.ChevronRight, {
                    className: "h-4 w-4"
                });
            }
        }
    }, props));
}
Calendar.displayName = "Calendar";
var Form = reactHookForm.FormProvider;
var FormFieldContext = React14__namespace.createContext({});
var FormField = function(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React14__namespace.createElement(FormFieldContext.Provider, {
        value: {
            name: props.name
        }
    }, /* @__PURE__ */ React14__namespace.createElement(reactHookForm.Controller, _object_spread({}, props)));
};
var useFormField = function() {
    var fieldContext = React14__namespace.useContext(FormFieldContext);
    var itemContext = React14__namespace.useContext(FormItemContext);
    var _reactHookForm_useFormContext = reactHookForm.useFormContext(), getFieldState = _reactHookForm_useFormContext.getFieldState, formState = _reactHookForm_useFormContext.formState;
    var fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    var id = itemContext.id;
    return _object_spread({
        id: id,
        name: fieldContext.name,
        formItemId: "".concat(id, "-form-item"),
        formDescriptionId: "".concat(id, "-form-item-description"),
        formMessageId: "".concat(id, "-form-item-message")
    }, fieldState);
};
var FormItemContext = React14__namespace.createContext({});
var FormItem = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var id = React14__namespace.useId();
    return /* @__PURE__ */ React14__namespace.createElement(FormItemContext.Provider, {
        value: {
            id: id
        }
    }, /* @__PURE__ */ React14__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("space-y-2", className)
    }, props)));
});
FormItem.displayName = "FormItem";
var FormLabel = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var _useFormField = useFormField(), error = _useFormField.error, formItemId = _useFormField.formItemId;
    return /* @__PURE__ */ React14__namespace.createElement(Label, _object_spread({
        ref: ref,
        className: cn(error && "text-destructive", className),
        htmlFor: formItemId
    }, props));
});
FormLabel.displayName = "FormLabel";
var FormControl = React14__namespace.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    var _useFormField = useFormField(), error = _useFormField.error, formItemId = _useFormField.formItemId, formDescriptionId = _useFormField.formDescriptionId, formMessageId = _useFormField.formMessageId;
    return /* @__PURE__ */ React14__namespace.createElement(reactSlot.Slot, _object_spread({
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? "".concat(formDescriptionId) : "".concat(formDescriptionId, " ").concat(formMessageId),
        "aria-invalid": !!error
    }, props));
});
FormControl.displayName = "FormControl";
var FormDescription = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var formDescriptionId = useFormField().formDescriptionId;
    return /* @__PURE__ */ React14__namespace.createElement("p", _object_spread({
        ref: ref,
        id: formDescriptionId,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
FormDescription.displayName = "FormDescription";
var FormMessage = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    var _useFormField = useFormField(), error = _useFormField.error, formMessageId = _useFormField.formMessageId;
    var body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
    if (!body) {
        return null;
    }
    return /* @__PURE__ */ React14__namespace.createElement("p", _object_spread({
        ref: ref,
        id: formMessageId,
        className: cn("text-sm font-medium text-destructive", className)
    }, props), body);
});
FormMessage.displayName = "FormMessage";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, _param_align = _param.align, align = _param_align === void 0 ? "center" : _param_align, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "align",
        "sideOffset"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(PopoverPrimitive__namespace.Portal, null, /* @__PURE__ */ React14__namespace.createElement(PopoverPrimitive__namespace.Content, _object_spread({
        ref: ref,
        align: align,
        sideOffset: sideOffset,
        className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props)));
});
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var ScrollArea = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(ScrollAreaPrimitive__namespace.Root, _object_spread({
        ref: ref,
        className: cn("relative overflow-hidden", className)
    }, props), /* @__PURE__ */ React14__namespace.createElement(ScrollAreaPrimitive__namespace.Viewport, {
        className: "h-full w-full rounded-[inherit]"
    }, children), /* @__PURE__ */ React14__namespace.createElement(ScrollBar, null), /* @__PURE__ */ React14__namespace.createElement(ScrollAreaPrimitive__namespace.Corner, null));
});
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React14__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "vertical" : _param_orientation, props = _object_without_properties(_param, [
        "className",
        "orientation"
    ]);
    return /* @__PURE__ */ React14__namespace.createElement(ScrollAreaPrimitive__namespace.ScrollAreaScrollbar, _object_spread({
        ref: ref,
        orientation: orientation,
        className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className)
    }, props), /* @__PURE__ */ React14__namespace.createElement(ScrollAreaPrimitive__namespace.ScrollAreaThumb, {
        className: "relative flex-1 rounded-full bg-border"
    }));
});
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
// src/components/ui/datetime-picker.tsx
var FormSchema = z2.z.object({
    time: z2.z.date({
        required_error: "A date and time is required."
    })
});
function DateTimePickerForm(param) {
    var value = param.value, onChange = param.onChange;
    var form = reactHookForm.useForm({
        resolver: zod.zodResolver(FormSchema),
        defaultValues: {
            time: value
        }
    });
    function onSubmit(data) {
        onChange === null || onChange === void 0 ? void 0 : onChange(data.time);
    }
    function handleDateSelect(date) {
        if (date) {
            form.setValue("time", date);
        }
    }
    function handleTimeChange(type, value2) {
        var currentDate = form.getValues("time") || /* @__PURE__ */ new Date();
        var newDate = new Date(currentDate);
        if (type === "hour") {
            var hour = parseInt(value2, 10);
            newDate.setHours(newDate.getHours() >= 12 ? hour + 12 : hour);
        } else if (type === "minute") {
            newDate.setMinutes(parseInt(value2, 10));
        } else if (type === "ampm") {
            var hours = newDate.getHours();
            if (value2 === "AM" && hours >= 12) {
                newDate.setHours(hours - 12);
            } else if (value2 === "PM" && hours < 12) {
                newDate.setHours(hours + 12);
            }
        }
        form.setValue("time", newDate);
    }
    return /* @__PURE__ */ React14__namespace.default.createElement(Form, _object_spread({}, form), /* @__PURE__ */ React14__namespace.default.createElement("form", {
        onSubmit: form.handleSubmit(onSubmit),
        className: "space-y-5"
    }, /* @__PURE__ */ React14__namespace.default.createElement(FormField, {
        control: form.control,
        name: "time",
        render: function(param) {
            var field = param.field;
            return /* @__PURE__ */ React14__namespace.default.createElement(FormItem, {
                className: "flex flex-col"
            }, /* @__PURE__ */ React14__namespace.default.createElement(FormLabel, null, "Enter your date & time (12h)"), /* @__PURE__ */ React14__namespace.default.createElement(Popover, null, /* @__PURE__ */ React14__namespace.default.createElement(PopoverTrigger, {
                asChild: true
            }, /* @__PURE__ */ React14__namespace.default.createElement(FormControl, null, /* @__PURE__ */ React14__namespace.default.createElement(Button, {
                variant: "outline",
                className: cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")
            }, field.value ? dateFns.format(field.value, "MM/dd/yyyy hh:mm aa") : /* @__PURE__ */ React14__namespace.default.createElement("span", null, "MM/DD/YYYY hh:mm aa"), /* @__PURE__ */ React14__namespace.default.createElement(reactIcons.CalendarIcon, {
                className: "ml-auto h-4 w-4 opacity-50"
            })))), /* @__PURE__ */ React14__namespace.default.createElement(PopoverContent, {
                className: "w-auto p-0"
            }, /* @__PURE__ */ React14__namespace.default.createElement("div", {
                className: "sm:flex"
            }, /* @__PURE__ */ React14__namespace.default.createElement(Calendar, {
                mode: "single",
                selected: field.value,
                onSelect: handleDateSelect,
                defaultMonth: field.value
            }), /* @__PURE__ */ React14__namespace.default.createElement("div", {
                className: "flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x"
            }, /* @__PURE__ */ React14__namespace.default.createElement(ScrollArea, {
                className: "w-64 sm:w-auto"
            }, /* @__PURE__ */ React14__namespace.default.createElement("div", {
                className: "flex sm:flex-col p-2"
            }, Array.from({
                length: 12
            }, function(_, i) {
                return i + 1;
            }).reverse().map(function(hour) {
                return /* @__PURE__ */ React14__namespace.default.createElement(Button, {
                    key: hour,
                    size: "icon",
                    variant: field.value && field.value.getHours() % 12 === hour % 12 ? "default" : "ghost",
                    className: "sm:w-full shrink-0 aspect-square",
                    onClick: function() {
                        return handleTimeChange("hour", hour.toString());
                    }
                }, hour);
            })), /* @__PURE__ */ React14__namespace.default.createElement(ScrollBar, {
                orientation: "horizontal",
                className: "sm:hidden"
            })), /* @__PURE__ */ React14__namespace.default.createElement(ScrollArea, {
                className: "w-64 sm:w-auto"
            }, /* @__PURE__ */ React14__namespace.default.createElement("div", {
                className: "flex sm:flex-col p-2"
            }, Array.from({
                length: 12
            }, function(_, i) {
                return i * 5;
            }).map(function(minute) {
                return /* @__PURE__ */ React14__namespace.default.createElement(Button, {
                    key: minute,
                    size: "icon",
                    variant: field.value && field.value.getMinutes() === minute ? "default" : "ghost",
                    className: "sm:w-full shrink-0 aspect-square",
                    onClick: function() {
                        return handleTimeChange("minute", minute.toString());
                    }
                }, minute.toString().padStart(2, "0"));
            })), /* @__PURE__ */ React14__namespace.default.createElement(ScrollBar, {
                orientation: "horizontal",
                className: "sm:hidden"
            })), /* @__PURE__ */ React14__namespace.default.createElement(ScrollArea, {
                className: ""
            }, /* @__PURE__ */ React14__namespace.default.createElement("div", {
                className: "flex sm:flex-col p-2"
            }, [
                "AM",
                "PM"
            ].map(function(ampm) {
                return /* @__PURE__ */ React14__namespace.default.createElement(Button, {
                    key: ampm,
                    size: "icon",
                    variant: field.value && (ampm === "AM" && field.value.getHours() < 12 || ampm === "PM" && field.value.getHours() >= 12) ? "default" : "ghost",
                    className: "sm:w-full shrink-0 aspect-square",
                    onClick: function() {
                        return handleTimeChange("ampm", ampm);
                    }
                }, ampm);
            }))))))), /* @__PURE__ */ React14__namespace.default.createElement(FormDescription, null, "Please select your preferred date and time."), /* @__PURE__ */ React14__namespace.default.createElement(FormMessage, null));
        }
    }), /* @__PURE__ */ React14__namespace.default.createElement(Button, {
        type: "submit"
    }, "Submit")));
}
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
var dateTimeSchema = z2__namespace.string().refine(function(value) {
    var regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;
    return regex.test(value);
}, "Must be in ISO 8601 format (e.g., 2024-03-21T15:30:00Z)");
var _obj1;
var warehouseIcons = (_obj1 = {}, _define_property(_obj1, "clickhouse" /* Clickhouse */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://cdn.brandfetch.io/idnezyZEJm/theme/dark/symbol.svg",
    alt: "Clickhouse",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "snowflake" /* Snowflake */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://cdn.brandfetch.io/idJz-fGD_q/theme/dark/symbol.svg",
    alt: "Snowflake",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "databricks" /* Databricks */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://cdn.brandfetch.io/idSUrLOWbH/theme/dark/symbol.svg?k=bfHSJFAPEG",
    alt: "Databricks",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "bigquery" /* BigQuery */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",
    alt: "BigQuery",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "redshift" /* Redshift */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Amazon-Redshift-Logo.svg/218px-Amazon-Redshift-Logo.svg.png",
    alt: "Redshift",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "kafka" /* Kafka */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg",
    alt: "Kafka",
    className: "mr-2 h-4 w-4"
})), _define_property(_obj1, "postgres" /* Postgres */ , /* @__PURE__ */ React14__namespace.createElement("img", {
    src: "https://cdn.brandfetch.io/idjSeCeMle/theme/dark/logo.svg?k=bfHSJFAPEG",
    alt: "Postgres",
    className: "mr-2 h-4 w-4"
})), _obj1);
var ExportWrapper = function(param) {
    var apiKey = param.apiKey, organizationId = param.organizationId, internalWarehouse = param.internalWarehouse, table_name = param.table_name, _param_theme = param.theme, theme = _param_theme === void 0 ? "light" : _param_theme, onSuccess = param.onSuccess, onError = param.onError;
    var _React14__namespace_useState = _sliced_to_array(React14__namespace.useState("destination"), 2), currentStep = _React14__namespace_useState[0], setCurrentStep = _React14__namespace_useState[1];
    var _React14__namespace_useState1 = _sliced_to_array(React14__namespace.useState("clickhouse" /* Clickhouse */ ), 2), destination_type = _React14__namespace_useState1[0], setdestination_type = _React14__namespace_useState1[1];
    var _React14__namespace_useState2 = _sliced_to_array(React14__namespace.useState(""), 2), destination_name = _React14__namespace_useState2[0], setdestination_name = _React14__namespace_useState2[1];
    var _React14__namespace_useState3 = _sliced_to_array(React14__namespace.useState({}), 2), credentials = _React14__namespace_useState3[0], setCredentials = _React14__namespace_useState3[1];
    var _React14__namespace_useState4 = _sliced_to_array(React14__namespace.useState(void 0), 2), scheduledAt = _React14__namespace_useState4[0], setScheduledAt = _React14__namespace_useState4[1];
    var _React14__namespace_useState5 = _sliced_to_array(React14__namespace.useState(""), 2), dateTimeError = _React14__namespace_useState5[0], setDateTimeError = _React14__namespace_useState5[1];
    var _useToast = useToast(), toast2 = _useToast.toast;
    var _React14__namespace_useState6 = _sliced_to_array(React14__namespace.useState(false), 2), isLoading = _React14__namespace_useState6[0], setIsLoading = _React14__namespace_useState6[1];
    var containerRef = React14.useRef(null);
    var _React14_useState = _sliced_to_array(React14.useState(0), 2), containerWidth = _React14_useState[0], setContainerWidth = _React14_useState[1];
    React14.useState("");
    React14.useState(false);
    process.env.NEXT_PUBLIC_PORTCULLIS_URL || "https://portcullis-app.fly.dev";
    React14.useEffect(function() {
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
    var handleSubmit = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
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
                        if (scheduledAt) {
                            dateTimeSchema.parse(scheduledAt);
                        }
                        return [
                            4,
                            createExport(apiKey, {
                                organization: organizationId,
                                internal_warehouse: internalWarehouse,
                                destination_type: destination_type,
                                destination_name: destination_name,
                                table: table_name,
                                credentials: credentials,
                                scheduled_at: scheduledAt ? scheduledAt.toISOString() : void 0
                            })
                        ];
                    case 1:
                        data = _state.sent();
                        toast2({
                            title: "Export Created",
                            description: "Your export has been successfully configured."
                        });
                        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                        return [
                            3,
                            3
                        ];
                    case 2:
                        error = _state.sent();
                        if (_instanceof(error, z2__namespace.ZodError)) {
                            setDateTimeError(error.errors[0].message);
                            return [
                                2
                            ];
                        }
                        if (_instanceof(error, Error)) {
                            toast2({
                                title: "Error",
                                description: _instanceof(error, Error) ? error.message : "Failed to create export",
                                variant: "destructive"
                            });
                            onError === null || onError === void 0 ? void 0 : onError(error);
                        }
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
        return function handleSubmit() {
            return _ref.apply(this, arguments);
        };
    }();
    var renderDestinationStep = function() {
        return /* @__PURE__ */ React14__namespace.createElement(React14__namespace.Fragment, null, /* @__PURE__ */ React14__namespace.createElement(CardHeader, null, /* @__PURE__ */ React14__namespace.createElement(CardTitle, null, "Configure Destination")), /* @__PURE__ */ React14__namespace.createElement(CardContent, {
            className: "space-y-4"
        }, /* @__PURE__ */ React14__namespace.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React14__namespace.createElement(Label, null, "Destination Type"), /* @__PURE__ */ React14__namespace.createElement(Select, {
            value: destination_type,
            onValueChange: function(value) {
                return setdestination_type(value);
            }
        }, /* @__PURE__ */ React14__namespace.createElement(SelectTrigger, {
            className: "w-full"
        }, /* @__PURE__ */ React14__namespace.createElement(SelectValue, null, destination_type && /* @__PURE__ */ React14__namespace.createElement("div", {
            className: "flex items-center gap-2"
        }, warehouseIcons[destination_type], /* @__PURE__ */ React14__namespace.createElement("span", null, destination_type.charAt(0).toUpperCase() + destination_type.slice(1))))), /* @__PURE__ */ React14__namespace.createElement(SelectContent, null, Object.values(WarehouseType).map(function(type) {
            return /* @__PURE__ */ React14__namespace.createElement(SelectItem, {
                key: type,
                value: type
            }, /* @__PURE__ */ React14__namespace.createElement("div", {
                className: "flex items-center gap-2 w-full min-w-[200px]"
            }, warehouseIcons[type], /* @__PURE__ */ React14__namespace.createElement("span", {
                className: "truncate"
            }, type.charAt(0).toUpperCase() + type.slice(1))));
        })))), /* @__PURE__ */ React14__namespace.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React14__namespace.createElement(Label, null, "Warehouse Name"), /* @__PURE__ */ React14__namespace.createElement(Input, {
            value: destination_name,
            onChange: function(e) {
                return setdestination_name(e.target.value);
            },
            placeholder: "Enter a name for this warehouse"
        }))), /* @__PURE__ */ React14__namespace.createElement(CardFooter, null, /* @__PURE__ */ React14__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("credentials");
            },
            disabled: !destination_type || !destination_name
        }, "Continue")));
    };
    var renderCredentialsStep = function() {
        return /* @__PURE__ */ React14__namespace.createElement(React14__namespace.Fragment, null, /* @__PURE__ */ React14__namespace.createElement(CardHeader, null, /* @__PURE__ */ React14__namespace.createElement(CardTitle, null, "Configure Credentials")), /* @__PURE__ */ React14__namespace.createElement(CardContent, {
            className: "space-y-4"
        }, credentialFields[destination_type].map(function(field) {
            return /* @__PURE__ */ React14__namespace.createElement("div", {
                key: field,
                className: "space-y-2"
            }, /* @__PURE__ */ React14__namespace.createElement(Label, {
                className: "capitalize"
            }, field === "host" ? "Hostname" : field === "port" ? "Port Number" : field.charAt(0).toUpperCase() + field.slice(1).replace("_", " ")), /* @__PURE__ */ React14__namespace.createElement(Input, {
                type: field.includes("password") ? "password" : "text",
                value: credentials[field] || "",
                onChange: function(e) {
                    return setCredentials(function(prev) {
                        return _object_spread_props(_object_spread({}, prev), _define_property({}, field, e.target.value));
                    });
                },
                placeholder: field === "port" ? "8123" : field === "host" ? "localhost" : "Enter ".concat(field.replace("_", " "))
            }));
        })), /* @__PURE__ */ React14__namespace.createElement(CardFooter, {
            className: "space-x-2"
        }, /* @__PURE__ */ React14__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("destination");
            }
        }, "Back"), /* @__PURE__ */ React14__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("schedule");
            },
            disabled: !Object.keys(credentials).length
        }, "Continue")));
    };
    var renderScheduleStep = function() {
        return /* @__PURE__ */ React14__namespace.createElement(React14__namespace.Fragment, null, /* @__PURE__ */ React14__namespace.createElement(CardHeader, null, /* @__PURE__ */ React14__namespace.createElement(CardTitle, null, "Schedule Export")), /* @__PURE__ */ React14__namespace.createElement(CardContent, {
            className: "space-y-4"
        }, /* @__PURE__ */ React14__namespace.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React14__namespace.createElement(Label, null, "Schedule Time (UTC)"), /* @__PURE__ */ React14__namespace.createElement(DateTimePickerForm, {
            value: scheduledAt,
            onChange: function(date) {
                return setScheduledAt(date);
            }
        }), /* @__PURE__ */ React14__namespace.createElement("p", {
            className: "text-sm text-muted-foreground"
        }, "Select when you want this export to run. Leave empty for immediate execution."))), /* @__PURE__ */ React14__namespace.createElement(CardFooter, {
            className: "space-x-2"
        }, /* @__PURE__ */ React14__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("credentials");
            }
        }, "Back"), /* @__PURE__ */ React14__namespace.createElement(Button, {
            onClick: handleSubmit,
            disabled: !!dateTimeError
        }, "Create Export")));
    };
    var stepComponents = {
        destination: renderDestinationStep,
        credentials: renderCredentialsStep,
        schedule: renderScheduleStep
    };
    return /* @__PURE__ */ React14__namespace.createElement("div", {
        ref: containerRef,
        className: "relative w-full"
    }, /* @__PURE__ */ React14__namespace.createElement(Card, {
        className: "relative"
    }, isLoading ? /* @__PURE__ */ React14__namespace.createElement("div", {
        className: "space-y-4"
    }, /* @__PURE__ */ React14__namespace.createElement(Skeleton, {
        className: "h-10 w-full"
    }), /* @__PURE__ */ React14__namespace.createElement("div", {
        className: "space-y-2"
    }, /* @__PURE__ */ React14__namespace.createElement(Skeleton, {
        className: "h-4 w-[".concat(Math.min(250, containerWidth * 0.8), "px]")
    }), /* @__PURE__ */ React14__namespace.createElement(Skeleton, {
        className: "h-8 w-full"
    }), /* @__PURE__ */ React14__namespace.createElement(Skeleton, {
        className: "h-4 w-[".concat(Math.min(200, containerWidth * 0.6), "px]")
    }), /* @__PURE__ */ React14__namespace.createElement(Skeleton, {
        className: "h-8 w-full"
    })), /* @__PURE__ */ React14__namespace.createElement(Skeleton, {
        className: "h-10 w-[".concat(Math.min(120, containerWidth * 0.3), "px]")
    })) : /* @__PURE__ */ React14__namespace.createElement(React14__namespace.Fragment, null, stepComponents[currentStep](), /* @__PURE__ */ React14__namespace.createElement(PortcullisTag, null))));
};
exports.ExportWrapper = ExportWrapper;
exports.WarehouseType = WarehouseType;
