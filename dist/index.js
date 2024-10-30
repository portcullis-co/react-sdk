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
var React7 = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var LabelPrimitive = require('@radix-ui/react-label');
var reactIcons = require('@radix-ui/react-icons');
var SelectPrimitive = require('@radix-ui/react-select');
var PopoverPrimitive = require('@radix-ui/react-popover');
var lucideReact = require('lucide-react');
var reactDayPicker = require('react-day-picker');
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
var React7__namespace = /*#__PURE__*/ _interopNamespace(React7);
var LabelPrimitive__namespace = /*#__PURE__*/ _interopNamespace(LabelPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/ _interopNamespace(SelectPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/ _interopNamespace(PopoverPrimitive);
// src/components/ExportWrapper.tsx
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}
// src/components/ui/card.tsx
var Card = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className)
    }, props));
});
Card.displayName = "Card";
var CardHeader = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props));
});
CardHeader.displayName = "CardHeader";
var CardTitle = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("h3", _object_spread({
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className)
    }, props));
});
CardTitle.displayName = "CardTitle";
var CardDescription = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("p", _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
CardDescription.displayName = "CardDescription";
var CardContent = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("div", _object_spread({
        ref: ref,
        className: cn("p-6 pt-0", className)
    }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("div", _object_spread({
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
var Button = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ React7__namespace.createElement(Comp, _object_spread({
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        })),
        ref: ref
    }, props));
});
Button.displayName = "Button";
var Input = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, type = _param.type, props = _object_without_properties(_param, [
        "className",
        "type"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("input", _object_spread({
        type: type,
        className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref
    }, props));
});
Input.displayName = "Input";
var labelVariants = classVarianceAuthority.cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(LabelPrimitive__namespace.Root, _object_spread({
        ref: ref,
        className: cn(labelVariants(), className)
    }, props));
});
Label.displayName = LabelPrimitive__namespace.Root.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Trigger, _object_spread({
        ref: ref,
        className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
    }, props), children, /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Icon, {
        asChild: true
    }, /* @__PURE__ */ React7__namespace.createElement(reactIcons.CaretSortIcon, {
        className: "h-4 w-4 opacity-50"
    })));
});
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.ScrollUpButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React7__namespace.createElement(reactIcons.ChevronUpIcon, null));
});
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.ScrollDownButton, _object_spread({
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className)
    }, props), /* @__PURE__ */ React7__namespace.createElement(reactIcons.ChevronDownIcon, null));
});
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, props = _object_without_properties(_param, [
        "className",
        "children",
        "position"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Portal, null, /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Content, _object_spread({
        ref: ref,
        className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
        position: position
    }, props), /* @__PURE__ */ React7__namespace.createElement(SelectScrollUpButton, null), /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
    }, children), /* @__PURE__ */ React7__namespace.createElement(SelectScrollDownButton, null)));
});
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", className)
    }, props));
});
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Item, _object_spread({
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
    }, props), /* @__PURE__ */ React7__namespace.createElement("span", {
        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React7__namespace.createElement(reactIcons.CheckIcon, {
        className: "h-4 w-4"
    }))), /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.ItemText, null, children));
});
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(SelectPrimitive__namespace.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, _param_align = _param.align, align = _param_align === void 0 ? "center" : _param_align, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "align",
        "sideOffset"
    ]);
    return /* @__PURE__ */ React7__namespace.createElement(PopoverPrimitive__namespace.Portal, null, /* @__PURE__ */ React7__namespace.createElement(PopoverPrimitive__namespace.Content, _object_spread({
        ref: ref,
        align: align,
        sideOffset: sideOffset,
        className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props)));
});
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var constructFromSymbol = Symbol.for("constructDateFrom");
// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && (typeof date === "undefined" ? "undefined" : _type_of(date)) === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
    if (_instanceof(date, Date)) return new date.constructor(value);
    return new Date(value);
}
// node_modules/date-fns/toDate.js
function toDate(argument, context) {
    return constructFrom(context || argument, argument);
}
// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    if (isNaN(amount)) return constructFrom(date, NaN);
    if (!amount) return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}
// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    if (isNaN(amount)) return constructFrom(date, NaN);
    if (!amount) {
        return _date;
    }
    var dayOfMonth = _date.getDate();
    var endOfDesiredMonth = constructFrom(date, _date.getTime());
    endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        return endOfDesiredMonth;
    } else {
        _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return _date;
    }
}
// node_modules/date-fns/add.js
function add(date, duration, options) {
    var _duration_years = duration.years, years = _duration_years === void 0 ? 0 : _duration_years, _duration_months = duration.months, months = _duration_months === void 0 ? 0 : _duration_months, _duration_weeks = duration.weeks, weeks = _duration_weeks === void 0 ? 0 : _duration_weeks, _duration_days = duration.days, days = _duration_days === void 0 ? 0 : _duration_days, _duration_hours = duration.hours, hours = _duration_hours === void 0 ? 0 : _duration_hours, _duration_minutes = duration.minutes, minutes = _duration_minutes === void 0 ? 0 : _duration_minutes, _duration_seconds = duration.seconds, seconds = _duration_seconds === void 0 ? 0 : _duration_seconds;
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
    var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
    var minutesToAdd = minutes + hours * 60;
    var secondsToAdd = seconds + minutesToAdd * 60;
    var msToAdd = secondsToAdd * 1e3;
    return constructFrom(date, +dateWithDays + msToAdd);
}
// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
    var _options_locale_options, _options_locale, _defaultOptions2_locale_options, _defaultOptions2_locale;
    var defaultOptions2 = getDefaultOptions();
    var _options_weekStartsOn, _ref, _ref1, _ref2;
    var weekStartsOn = (_ref2 = (_ref1 = (_ref = (_options_weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options_weekStartsOn !== void 0 ? _options_weekStartsOn : options === null || options === void 0 ? void 0 : (_options_locale = options.locale) === null || _options_locale === void 0 ? void 0 : (_options_locale_options = _options_locale.options) === null || _options_locale_options === void 0 ? void 0 : _options_locale_options.weekStartsOn) !== null && _ref !== void 0 ? _ref : defaultOptions2.weekStartsOn) !== null && _ref1 !== void 0 ? _ref1 : (_defaultOptions2_locale = defaultOptions2.locale) === null || _defaultOptions2_locale === void 0 ? void 0 : (_defaultOptions2_locale_options = _defaultOptions2_locale.options) === null || _defaultOptions2_locale_options === void 0 ? void 0 : _defaultOptions2_locale_options.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var day = _date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
    return startOfWeek(date, _object_spread_props(_object_spread({}, options), {
        weekStartsOn: 1
    }));
}
// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var year = _date.getFullYear();
    var fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
    var _date = toDate(date);
    var utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context) {
    for(var _len = arguments.length, dates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        dates[_key - 1] = arguments[_key];
    }
    var normalize = constructFrom.bind(null, dates.find(function(date) {
        return (typeof date === "undefined" ? "undefined" : _type_of(date)) === "object";
    }));
    return dates.map(normalize);
}
// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
    var _normalizeDates = _sliced_to_array(normalizeDates(options === null || options === void 0 ? void 0 : options.in, laterDate, earlierDate), 2), laterDate_ = _normalizeDates[0], earlierDate_ = _normalizeDates[1];
    var laterStartOfDay = startOfDay(laterDate_);
    var earlierStartOfDay = startOfDay(earlierDate_);
    var laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
    var earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
    return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
    var year = getISOWeekYear(date, options);
    var fourthOfJanuary = constructFrom(date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return startOfISOWeek(fourthOfJanuary);
}
// node_modules/date-fns/isDate.js
function isDate(value) {
    return _instanceof(value, Date) || (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
// node_modules/date-fns/isValid.js
function isValid(date) {
    return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
    var date_ = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
var formatDistance = function(token, count2, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count2 === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count2.toString());
    }
    if (options === null || options === void 0 ? void 0 : options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format2 = args.formats[width] || args.formats[args.defaultWidth];
        return format2;
    };
}
// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
    return function(value, options) {
        var context = (options === null || options === void 0 ? void 0 : options.context) ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = (options === null || options === void 0 ? void 0 : options.width) ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var defaultWidth1 = args.defaultWidth;
            var width1 = (options === null || options === void 0 ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width1] || args.values[defaultWidth1];
        }
        var index = args.argumentCallback ? args.argumentCallback(value) : value;
        return valuesArray[index];
    };
}
// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
var monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
var dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function(quarter) {
            return quarter - 1;
        }
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : // [TODO] -- I challenge you to fix the type
        findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? // [TODO] -- I challenge you to fix the type
        options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
function findKey(object, predicate) {
    for(var key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return void 0;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return void 0;
}
// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value: value,
            rest: rest
        };
    };
}
// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
            return parseInt(value, 10);
        }
    }),
    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function(index) {
            return index + 1;
        }
    }),
    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
// node_modules/date-fns/locale/en-US.js
var enUS = {
    code: "en-US",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var diff = differenceInCalendarDays(_date, startOfYear(_date));
    var dayOfYear = diff + 1;
    return dayOfYear;
}
// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
    return Math.round(diff / millisecondsInWeek) + 1;
}
// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
    var _options_locale_options, _options_locale, _defaultOptions2_locale_options, _defaultOptions2_locale;
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var year = _date.getFullYear();
    var defaultOptions2 = getDefaultOptions();
    var _options_firstWeekContainsDate, _ref, _ref1, _ref2;
    var firstWeekContainsDate = (_ref2 = (_ref1 = (_ref = (_options_firstWeekContainsDate = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options_firstWeekContainsDate !== void 0 ? _options_firstWeekContainsDate : options === null || options === void 0 ? void 0 : (_options_locale = options.locale) === null || _options_locale === void 0 ? void 0 : (_options_locale_options = _options_locale.options) === null || _options_locale_options === void 0 ? void 0 : _options_locale_options.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : defaultOptions2.firstWeekContainsDate) !== null && _ref1 !== void 0 ? _ref1 : (_defaultOptions2_locale = defaultOptions2.locale) === null || _defaultOptions2_locale === void 0 ? void 0 : (_defaultOptions2_locale_options = _defaultOptions2_locale.options) === null || _defaultOptions2_locale_options === void 0 ? void 0 : _defaultOptions2_locale_options.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1;
    var firstWeekOfNextYear = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
    var _options_locale_options, _options_locale, _defaultOptions2_locale_options, _defaultOptions2_locale;
    var defaultOptions2 = getDefaultOptions();
    var _options_firstWeekContainsDate, _ref, _ref1, _ref2;
    var firstWeekContainsDate = (_ref2 = (_ref1 = (_ref = (_options_firstWeekContainsDate = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options_firstWeekContainsDate !== void 0 ? _options_firstWeekContainsDate : options === null || options === void 0 ? void 0 : (_options_locale = options.locale) === null || _options_locale === void 0 ? void 0 : (_options_locale_options = _options_locale.options) === null || _options_locale_options === void 0 ? void 0 : _options_locale_options.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : defaultOptions2.firstWeekContainsDate) !== null && _ref1 !== void 0 ? _ref1 : (_defaultOptions2_locale = defaultOptions2.locale) === null || _defaultOptions2_locale === void 0 ? void 0 : (_defaultOptions2_locale_options = _defaultOptions2_locale.options) === null || _defaultOptions2_locale_options === void 0 ? void 0 : _defaultOptions2_locale_options.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1;
    var year = getWeekYear(date, options);
    var firstWeek = constructFrom((options === null || options === void 0 ? void 0 : options.in) || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var _date = startOfWeek(firstWeek, options);
    return _date;
}
// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
    var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    var diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
    return Math.round(diff / millisecondsInWeek) + 1;
}
// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
    // Year
    y: function y(date, token) {
        var signedYear = date.getFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getMonth();
        return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return addLeadingZeros(date.getDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return addLeadingZeros(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return addLeadingZeros(date.getHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return addLeadingZeros(date.getMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return addLeadingZeros(date.getSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getMilliseconds();
        var fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return addLeadingZeros(fractionalSeconds, token.length);
    }
};
// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
var formatters = {
    // Era
    G: function G(date, token, localize2) {
        var era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize2.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize2.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize2.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function y(date, token, localize2) {
        if (token === "yo") {
            var signedYear = date.getFullYear();
            var year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize2.ordinalNumber(year, {
                unit: "year"
            });
        }
        return lightFormatters.y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize2, options) {
        var signedWeekYear = getWeekYear(date, options);
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        if (token === "YY") {
            var twoDigitYear = weekYear % 100;
            return addLeadingZeros(twoDigitYear, 2);
        }
        if (token === "Yo") {
            return localize2.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
        var isoWeekYear = getISOWeekYear(date);
        return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
        var year = date.getFullYear();
        return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize2) {
        var quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return addLeadingZeros(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize2.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize2.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize2.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize2.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function q(date, token, localize2) {
        var quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return addLeadingZeros(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize2.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize2.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize2.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize2.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function M(date, token, localize2) {
        var month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return lightFormatters.M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize2.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize2.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize2.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize2.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function L(date, token, localize2) {
        var month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return addLeadingZeros(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize2.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize2.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize2.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize2.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function w(date, token, localize2, options) {
        var week = getWeek(date, options);
        if (token === "wo") {
            return localize2.ordinalNumber(week, {
                unit: "week"
            });
        }
        return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize2) {
        var isoWeek = getISOWeek(date);
        if (token === "Io") {
            return localize2.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize2) {
        if (token === "do") {
            return localize2.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return lightFormatters.d(date, token);
    },
    // Day of year
    D: function D(date, token, localize2) {
        var dayOfYear = getDayOfYear(date);
        if (token === "Do") {
            return localize2.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize2) {
        var dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize2.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize2.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize2.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize2.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function e(date, token, localize2, options) {
        var dayOfWeek = date.getDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return addLeadingZeros(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize2.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize2.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize2.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize2.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize2.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize2, options) {
        var dayOfWeek = date.getDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return addLeadingZeros(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize2.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize2.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize2.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize2.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize2.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function i(date, token, localize2) {
        var dayOfWeek = date.getDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return addLeadingZeros(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize2.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize2.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize2.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize2.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize2.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function a(date, token, localize2) {
        var hours = date.getHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize2) {
        var hours = date.getHours();
        var dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize2) {
        var hours = date.getHours();
        var dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize2.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function h(date, token, localize2) {
        if (token === "ho") {
            var hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize2.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return lightFormatters.h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize2) {
        if (token === "Ho") {
            return localize2.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return lightFormatters.H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize2) {
        var hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize2.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize2) {
        var hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize2.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize2) {
        if (token === "mo") {
            return localize2.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return lightFormatters.m(date, token);
    },
    // Second
    s: function s(date, token, localize2) {
        if (token === "so") {
            return localize2.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return lightFormatters.s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
        return lightFormatters.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize) {
        var timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            // Hours and minutes with `:` delimiter
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize) {
        var timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            // Hours and minutes with `:` delimiter
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize) {
        var timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize) {
        var timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function t(date, token, _localize) {
        var timestamp = Math.trunc(+date / 1e3);
        return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize) {
        return addLeadingZeros(+date, token.length);
    }
};
function formatTimezoneShort(offset) {
    var delimiter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.trunc(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset) {
    var delimiter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = function(pattern, formatLong2) {
    switch(pattern){
        case "P":
            return formatLong2.date({
                width: "short"
            });
        case "PP":
            return formatLong2.date({
                width: "medium"
            });
        case "PPP":
            return formatLong2.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong2.date({
                width: "full"
            });
    }
};
var timeLongFormatter = function(pattern, formatLong2) {
    switch(pattern){
        case "p":
            return formatLong2.time({
                width: "short"
            });
        case "pp":
            return formatLong2.time({
                width: "medium"
            });
        case "ppp":
            return formatLong2.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong2.time({
                width: "full"
            });
    }
};
var dateTimeLongFormatter = function(pattern, formatLong2) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong2);
    }
    var dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong2.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong2.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong2.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong2.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
    var _message = message(token, format2, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
    var subject = token[0] === "Y" ? "years" : "days of the month";
    return "Use `".concat(token.toLowerCase(), "` instead of `").concat(token, "` (in `").concat(format2, "`) for formatting ").concat(subject, " to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
}
// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
    var _options_locale_options, _options_locale, _defaultOptions2_locale_options, _defaultOptions2_locale, _options_locale_options1, _options_locale1, _defaultOptions2_locale_options1, _defaultOptions2_locale1;
    var defaultOptions2 = getDefaultOptions();
    var _options_locale2, _ref;
    var locale = (_ref = (_options_locale2 = options === null || options === void 0 ? void 0 : options.locale) !== null && _options_locale2 !== void 0 ? _options_locale2 : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : enUS;
    var _options_firstWeekContainsDate, _ref1, _ref2, _ref3;
    var firstWeekContainsDate = (_ref3 = (_ref2 = (_ref1 = (_options_firstWeekContainsDate = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options_firstWeekContainsDate !== void 0 ? _options_firstWeekContainsDate : options === null || options === void 0 ? void 0 : (_options_locale = options.locale) === null || _options_locale === void 0 ? void 0 : (_options_locale_options = _options_locale.options) === null || _options_locale_options === void 0 ? void 0 : _options_locale_options.firstWeekContainsDate) !== null && _ref1 !== void 0 ? _ref1 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions2_locale = defaultOptions2.locale) === null || _defaultOptions2_locale === void 0 ? void 0 : (_defaultOptions2_locale_options = _defaultOptions2_locale.options) === null || _defaultOptions2_locale_options === void 0 ? void 0 : _defaultOptions2_locale_options.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : 1;
    var _options_weekStartsOn, _ref4, _ref5, _ref6;
    var weekStartsOn = (_ref6 = (_ref5 = (_ref4 = (_options_weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options_weekStartsOn !== void 0 ? _options_weekStartsOn : options === null || options === void 0 ? void 0 : (_options_locale1 = options.locale) === null || _options_locale1 === void 0 ? void 0 : (_options_locale_options1 = _options_locale1.options) === null || _options_locale_options1 === void 0 ? void 0 : _options_locale_options1.weekStartsOn) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : (_defaultOptions2_locale1 = defaultOptions2.locale) === null || _defaultOptions2_locale1 === void 0 ? void 0 : (_defaultOptions2_locale_options1 = _defaultOptions2_locale1.options) === null || _defaultOptions2_locale_options1 === void 0 ? void 0 : _defaultOptions2_locale_options1.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : 0;
    var originalDate = toDate(date, options === null || options === void 0 ? void 0 : options.in);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    var parts = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            var longFormatter = longFormatters[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (formatters[firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    var formatterOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale
    };
    return parts.map(function(part) {
        if (!part.isToken) return part.value;
        var token = part.value;
        if (!(options === null || options === void 0 ? void 0 : options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token) || !(options === null || options === void 0 ? void 0 : options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
            warnOrThrowProtectedError(token, formatStr, String(date));
        }
        var formatter = formatters[token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
function isValidHour(value) {
    return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}
function isValid12Hour(value) {
    return /^(0[1-9]|1[0-2])$/.test(value);
}
function isValidMinuteOrSecond(value) {
    return /^[0-5][0-9]$/.test(value);
}
function getValidNumber(value, param) {
    var max = param.max, _param_min = param.min, min = _param_min === void 0 ? 0 : _param_min, _param_loop = param.loop, loop = _param_loop === void 0 ? false : _param_loop;
    var numericValue = parseInt(value, 10);
    if (!Number.isNaN(numericValue)) {
        if (!loop) {
            if (numericValue > max) numericValue = max;
            if (numericValue < min) numericValue = min;
        } else {
            if (numericValue > max) numericValue = min;
            if (numericValue < min) numericValue = max;
        }
        return numericValue.toString().padStart(2, "0");
    }
    return "00";
}
function getValidHour(value) {
    if (isValidHour(value)) return value;
    return getValidNumber(value, {
        max: 23
    });
}
function getValid12Hour(value) {
    if (isValid12Hour(value)) return value;
    return getValidNumber(value, {
        min: 1,
        max: 12
    });
}
function getValidMinuteOrSecond(value) {
    if (isValidMinuteOrSecond(value)) return value;
    return getValidNumber(value, {
        max: 59
    });
}
function getValidArrowNumber(value, param) {
    var min = param.min, max = param.max, step = param.step;
    var numericValue = parseInt(value, 10);
    if (!Number.isNaN(numericValue)) {
        numericValue += step;
        return getValidNumber(String(numericValue), {
            min: min,
            max: max,
            loop: true
        });
    }
    return "00";
}
function getValidArrowHour(value, step) {
    return getValidArrowNumber(value, {
        min: 0,
        max: 23,
        step: step
    });
}
function getValidArrow12Hour(value, step) {
    return getValidArrowNumber(value, {
        min: 1,
        max: 12,
        step: step
    });
}
function getValidArrowMinuteOrSecond(value, step) {
    return getValidArrowNumber(value, {
        min: 0,
        max: 59,
        step: step
    });
}
function setMinutes(date, value) {
    var minutes = getValidMinuteOrSecond(value);
    date.setMinutes(parseInt(minutes, 10));
    return date;
}
function setSeconds(date, value) {
    var seconds = getValidMinuteOrSecond(value);
    date.setSeconds(parseInt(seconds, 10));
    return date;
}
function setHours(date, value) {
    var hours = getValidHour(value);
    date.setHours(parseInt(hours, 10));
    return date;
}
function set12Hours(date, value, period) {
    var hours = parseInt(getValid12Hour(value), 10);
    var convertedHours = convert12HourTo24Hour(hours, period);
    date.setHours(convertedHours);
    return date;
}
function setDateByType(date, value, type, period) {
    switch(type){
        case "minutes":
            return setMinutes(date, value);
        case "seconds":
            return setSeconds(date, value);
        case "hours":
            return setHours(date, value);
        case "12hours":
            {
                if (!period) return date;
                return set12Hours(date, value, period);
            }
        default:
            return date;
    }
}
function getDateByType(date, type) {
    if (!date) return "00";
    switch(type){
        case "minutes":
            return getValidMinuteOrSecond(String(date.getMinutes()));
        case "seconds":
            return getValidMinuteOrSecond(String(date.getSeconds()));
        case "hours":
            return getValidHour(String(date.getHours()));
        case "12hours":
            return getValid12Hour(String(display12HourValue(date.getHours())));
        default:
            return "00";
    }
}
function getArrowByType(value, step, type) {
    switch(type){
        case "minutes":
            return getValidArrowMinuteOrSecond(value, step);
        case "seconds":
            return getValidArrowMinuteOrSecond(value, step);
        case "hours":
            return getValidArrowHour(value, step);
        case "12hours":
            return getValidArrow12Hour(value, step);
        default:
            return "00";
    }
}
function convert12HourTo24Hour(hour, period) {
    if (period === "PM") {
        if (hour <= 11) {
            return hour + 12;
        }
        return hour;
    }
    if (period === "AM") {
        if (hour === 12) return 0;
        return hour;
    }
    return hour;
}
function display12HourValue(hours) {
    if (hours === 0 || hours === 12) return "12";
    if (hours >= 22) return "".concat(hours - 12);
    if (hours % 12 > 9) return "".concat(hours);
    return "0".concat(hours % 12);
}
function genMonths(locale) {
    return Array.from({
        length: 12
    }, function(_, i) {
        return {
            value: i,
            label: format(new Date(2021, i), "MMMM", {
                locale: locale
            })
        };
    });
}
function genYears() {
    var yearRange = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 50;
    var today = /* @__PURE__ */ new Date();
    return Array.from({
        length: yearRange * 2 + 1
    }, function(_, i) {
        return {
            value: today.getFullYear() - yearRange + i,
            label: (today.getFullYear() - yearRange + i).toString()
        };
    });
}
function Calendar(_param) {
    var className = _param.className, classNames = _param.classNames, _param_showOutsideDays = _param.showOutsideDays, showOutsideDays = _param_showOutsideDays === void 0 ? true : _param_showOutsideDays, _param_yearRange = _param.yearRange, yearRange = _param_yearRange === void 0 ? 50 : _param_yearRange, props = _object_without_properties(_param, [
        "className",
        "classNames",
        "showOutsideDays",
        "yearRange"
    ]);
    var MONTHS = React7__namespace.useMemo(function() {
        var locale = enUS;
        var _ref = props.locale || {}, options = _ref.options, localize2 = _ref.localize, formatLong2 = _ref.formatLong;
        if (options && localize2 && formatLong2) {
            locale = {
                options: options,
                localize: localize2,
                formatLong: formatLong2
            };
        }
        return genMonths(locale);
    }, []);
    var YEARS = React7__namespace.useMemo(function() {
        return genYears(yearRange);
    }, []);
    return /* @__PURE__ */ React7__namespace.createElement(reactDayPicker.DayPicker, _object_spread({
        showOutsideDays: showOutsideDays,
        className: cn("p-3", className),
        classNames: _object_spread({
            months: "flex flex-col sm:flex-row space-y-4  sm:space-y-0 justify-center",
            month: "flex flex-col items-center space-y-4",
            month_caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center ",
            button_previous: cn(buttonVariants({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5"),
            button_next: cn(buttonVariants({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5"),
            month_grid: "w-full border-collapse space-y-1",
            weekdays: cn("flex", props.showWeekNumber && "justify-end"),
            weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            week: "flex w-full mt-2",
            day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
            day_button: cn(buttonVariants({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-l-md rounded-r-md"),
            range_end: "day-range-end",
            selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-l-md rounded-r-md",
            today: "bg-accent text-accent-foreground",
            outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            disabled: "text-muted-foreground opacity-50",
            range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            hidden: "invisible"
        }, classNames),
        components: {
            Chevron: function(_param) {
                var props2 = _extends({}, _object_destructuring_empty(_param));
                return props2.orientation === "left" ? /* @__PURE__ */ React7__namespace.createElement(lucideReact.ChevronLeft, {
                    className: "h-4 w-4"
                }) : /* @__PURE__ */ React7__namespace.createElement(lucideReact.ChevronRight, {
                    className: "h-4 w-4"
                });
            },
            MonthCaption: function(param) {
                var calendarMonth = param.calendarMonth;
                return /* @__PURE__ */ React7__namespace.createElement("div", {
                    className: "inline-flex gap-2"
                }, /* @__PURE__ */ React7__namespace.createElement(Select, {
                    defaultValue: calendarMonth.date.getMonth().toString(),
                    onValueChange: function(value) {
                        var _props_onMonthChange;
                        var newDate = new Date(calendarMonth.date);
                        newDate.setMonth(Number.parseInt(value, 10));
                        (_props_onMonthChange = props.onMonthChange) === null || _props_onMonthChange === void 0 ? void 0 : _props_onMonthChange.call(props, newDate);
                    }
                }, /* @__PURE__ */ React7__namespace.createElement(SelectTrigger, {
                    className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground"
                }, /* @__PURE__ */ React7__namespace.createElement(SelectValue, null)), /* @__PURE__ */ React7__namespace.createElement(SelectContent, null, MONTHS.map(function(month) {
                    return /* @__PURE__ */ React7__namespace.createElement(SelectItem, {
                        key: month.value,
                        value: month.value.toString()
                    }, month.label);
                }))), /* @__PURE__ */ React7__namespace.createElement(Select, {
                    defaultValue: calendarMonth.date.getFullYear().toString(),
                    onValueChange: function(value) {
                        var _props_onMonthChange;
                        var newDate = new Date(calendarMonth.date);
                        newDate.setFullYear(Number.parseInt(value, 10));
                        (_props_onMonthChange = props.onMonthChange) === null || _props_onMonthChange === void 0 ? void 0 : _props_onMonthChange.call(props, newDate);
                    }
                }, /* @__PURE__ */ React7__namespace.createElement(SelectTrigger, {
                    className: "w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground"
                }, /* @__PURE__ */ React7__namespace.createElement(SelectValue, null)), /* @__PURE__ */ React7__namespace.createElement(SelectContent, null, YEARS.map(function(year) {
                    return /* @__PURE__ */ React7__namespace.createElement(SelectItem, {
                        key: year.value,
                        value: year.value.toString()
                    }, year.label);
                }))));
            }
        }
    }, props));
}
Calendar.displayName = "Calendar";
var TimePeriodSelect = React7__namespace.forwardRef(function(param, ref) {
    var period = param.period, setPeriod = param.setPeriod, date = param.date, onDateChange = param.onDateChange, onLeftFocus = param.onLeftFocus, onRightFocus = param.onRightFocus;
    var handleKeyDown = function(e) {
        if (e.key === "ArrowRight") onRightFocus === null || onRightFocus === void 0 ? void 0 : onRightFocus();
        if (e.key === "ArrowLeft") onLeftFocus === null || onLeftFocus === void 0 ? void 0 : onLeftFocus();
    };
    var handleValueChange = function(value) {
        setPeriod === null || setPeriod === void 0 ? void 0 : setPeriod(value);
        if (date) {
            var tempDate = new Date(date);
            var hours = display12HourValue(date.getHours());
            onDateChange === null || onDateChange === void 0 ? void 0 : onDateChange(setDateByType(tempDate, hours.toString(), "12hours", period === "AM" ? "PM" : "AM"));
        }
    };
    return /* @__PURE__ */ React7__namespace.createElement("div", {
        className: "flex h-10 items-center"
    }, /* @__PURE__ */ React7__namespace.createElement(Select, {
        value: period,
        onValueChange: handleValueChange
    }, /* @__PURE__ */ React7__namespace.createElement(SelectTrigger, {
        ref: ref,
        className: "w-[70px] border-none p-0 focus:bg-accent focus:text-accent-foreground [&>span]:flex [&>span]:items-center",
        onKeyDown: handleKeyDown
    }, /* @__PURE__ */ React7__namespace.createElement(SelectValue, null)), /* @__PURE__ */ React7__namespace.createElement(SelectContent, null, /* @__PURE__ */ React7__namespace.createElement(SelectItem, {
        value: "AM"
    }, "AM"), /* @__PURE__ */ React7__namespace.createElement(SelectItem, {
        value: "PM"
    }, "PM"))));
});
TimePeriodSelect.displayName = "TimePeriodSelect";
var TimePickerInput = React7__namespace.forwardRef(function(_param, ref) {
    var className = _param.className, _param_type = _param.type, type = _param_type === void 0 ? "tel" : _param_type, value = _param.value, id = _param.id, name = _param.name, _param_date = _param.date, date = _param_date === void 0 ? new Date(/* @__PURE__ */ new Date().setHours(0, 0, 0, 0)) : _param_date, onDateChange = _param.onDateChange, onChange = _param.onChange, onKeyDown = _param.onKeyDown, picker = _param.picker, period = _param.period, onLeftFocus = _param.onLeftFocus, onRightFocus = _param.onRightFocus, props = _object_without_properties(_param, [
        "className",
        "type",
        "value",
        "id",
        "name",
        "date",
        "onDateChange",
        "onChange",
        "onKeyDown",
        "picker",
        "period",
        "onLeftFocus",
        "onRightFocus"
    ]);
    var _React7__namespace_useState = _sliced_to_array(React7__namespace.useState(false), 2), flag = _React7__namespace_useState[0], setFlag = _React7__namespace_useState[1];
    var _React7__namespace_useState1 = _sliced_to_array(React7__namespace.useState("0"), 2), prevIntKey = _React7__namespace_useState1[0], setPrevIntKey = _React7__namespace_useState1[1];
    React7__namespace.useEffect(function() {
        if (flag) {
            var timer = setTimeout(function() {
                setFlag(false);
            }, 2e3);
            return function() {
                return clearTimeout(timer);
            };
        }
    }, [
        flag
    ]);
    var calculatedValue = React7__namespace.useMemo(function() {
        return getDateByType(date, picker);
    }, [
        date,
        picker
    ]);
    var calculateNewValue = function(key) {
        if (picker === "12hours") {
            if (flag && calculatedValue.slice(1, 2) === "1" && prevIntKey === "0") return "0".concat(key);
        }
        return !flag ? "0".concat(key) : calculatedValue.slice(1, 2) + key;
    };
    var handleKeyDown = function(e) {
        if (e.key === "Tab") return;
        e.preventDefault();
        if (e.key === "ArrowRight") onRightFocus === null || onRightFocus === void 0 ? void 0 : onRightFocus();
        if (e.key === "ArrowLeft") onLeftFocus === null || onLeftFocus === void 0 ? void 0 : onLeftFocus();
        if ([
            "ArrowUp",
            "ArrowDown"
        ].includes(e.key)) {
            var step = e.key === "ArrowUp" ? 1 : -1;
            var newValue = getArrowByType(calculatedValue, step, picker);
            if (flag) setFlag(false);
            var tempDate = date ? new Date(date) : /* @__PURE__ */ new Date();
            onDateChange === null || onDateChange === void 0 ? void 0 : onDateChange(setDateByType(tempDate, newValue, picker, period));
        }
        if (e.key >= "0" && e.key <= "9") {
            if (picker === "12hours") setPrevIntKey(e.key);
            var newValue1 = calculateNewValue(e.key);
            if (flag) onRightFocus === null || onRightFocus === void 0 ? void 0 : onRightFocus();
            setFlag(function(prev) {
                return !prev;
            });
            var tempDate1 = date ? new Date(date) : /* @__PURE__ */ new Date();
            onDateChange === null || onDateChange === void 0 ? void 0 : onDateChange(setDateByType(tempDate1, newValue1, picker, period));
        }
    };
    return /* @__PURE__ */ React7__namespace.createElement(Input, _object_spread({
        ref: ref,
        id: id || picker,
        name: name || picker,
        className: cn("w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none", className),
        value: value || calculatedValue,
        onChange: function(e) {
            e.preventDefault();
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
        },
        type: type,
        inputMode: "decimal",
        onKeyDown: function(e) {
            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
            handleKeyDown(e);
        }
    }, props));
});
TimePickerInput.displayName = "TimePickerInput";
var TimePicker = React7__namespace.forwardRef(function(param, ref) {
    var date = param.date, onChange = param.onChange, _param_hourCycle = param.hourCycle, hourCycle = _param_hourCycle === void 0 ? 24 : _param_hourCycle, _param_granularity = param.granularity, granularity = _param_granularity === void 0 ? "second" : _param_granularity;
    var minuteRef = React7__namespace.useRef(null);
    var hourRef = React7__namespace.useRef(null);
    var secondRef = React7__namespace.useRef(null);
    var periodRef = React7__namespace.useRef(null);
    var _React7__namespace_useState = _sliced_to_array(React7__namespace.useState(date && date.getHours() >= 12 ? "PM" : "AM"), 2), period = _React7__namespace_useState[0], setPeriod = _React7__namespace_useState[1];
    React7.useImperativeHandle(ref, function() {
        return {
            minuteRef: minuteRef.current,
            hourRef: hourRef.current,
            secondRef: secondRef.current,
            periodRef: periodRef.current
        };
    }, [
        minuteRef,
        hourRef,
        secondRef
    ]);
    return /* @__PURE__ */ React7__namespace.createElement("div", {
        className: "flex items-center justify-center gap-2"
    }, /* @__PURE__ */ React7__namespace.createElement("label", {
        htmlFor: "datetime-picker-hour-input",
        className: "cursor-pointer"
    }, /* @__PURE__ */ React7__namespace.createElement(lucideReact.Clock, {
        className: "mr-2 h-4 w-4"
    })), /* @__PURE__ */ React7__namespace.createElement(TimePickerInput, {
        picker: hourCycle === 24 ? "hours" : "12hours",
        date: date,
        id: "datetime-picker-hour-input",
        onDateChange: onChange,
        ref: hourRef,
        period: period,
        onRightFocus: function() {
            var _minuteRef_current;
            return minuteRef === null || minuteRef === void 0 ? void 0 : (_minuteRef_current = minuteRef.current) === null || _minuteRef_current === void 0 ? void 0 : _minuteRef_current.focus();
        }
    }), (granularity === "minute" || granularity === "second") && /* @__PURE__ */ React7__namespace.createElement(React7__namespace.Fragment, null, ":", /* @__PURE__ */ React7__namespace.createElement(TimePickerInput, {
        picker: "minutes",
        date: date,
        onDateChange: onChange,
        ref: minuteRef,
        onLeftFocus: function() {
            var _hourRef_current;
            return hourRef === null || hourRef === void 0 ? void 0 : (_hourRef_current = hourRef.current) === null || _hourRef_current === void 0 ? void 0 : _hourRef_current.focus();
        },
        onRightFocus: function() {
            var _secondRef_current;
            return secondRef === null || secondRef === void 0 ? void 0 : (_secondRef_current = secondRef.current) === null || _secondRef_current === void 0 ? void 0 : _secondRef_current.focus();
        }
    })), granularity === "second" && /* @__PURE__ */ React7__namespace.createElement(React7__namespace.Fragment, null, ":", /* @__PURE__ */ React7__namespace.createElement(TimePickerInput, {
        picker: "seconds",
        date: date,
        onDateChange: onChange,
        ref: secondRef,
        onLeftFocus: function() {
            var _minuteRef_current;
            return minuteRef === null || minuteRef === void 0 ? void 0 : (_minuteRef_current = minuteRef.current) === null || _minuteRef_current === void 0 ? void 0 : _minuteRef_current.focus();
        },
        onRightFocus: function() {
            var _periodRef_current;
            return periodRef === null || periodRef === void 0 ? void 0 : (_periodRef_current = periodRef.current) === null || _periodRef_current === void 0 ? void 0 : _periodRef_current.focus();
        }
    })), hourCycle === 12 && /* @__PURE__ */ React7__namespace.createElement("div", {
        className: "grid gap-1 text-center"
    }, /* @__PURE__ */ React7__namespace.createElement(TimePeriodSelect, {
        period: period,
        setPeriod: setPeriod,
        date: date,
        onDateChange: function(date2) {
            onChange === null || onChange === void 0 ? void 0 : onChange(date2);
            if (date2 && (date2 === null || date2 === void 0 ? void 0 : date2.getHours()) >= 12) {
                setPeriod("PM");
            } else {
                setPeriod("AM");
            }
        },
        ref: periodRef,
        onLeftFocus: function() {
            var _secondRef_current;
            return secondRef === null || secondRef === void 0 ? void 0 : (_secondRef_current = secondRef.current) === null || _secondRef_current === void 0 ? void 0 : _secondRef_current.focus();
        }
    })));
});
TimePicker.displayName = "TimePicker";
var DateTimePicker = React7__namespace.forwardRef(function(_param, ref) {
    var _param_locale = _param.locale, locale = _param_locale === void 0 ? enUS : _param_locale, value = _param.value, onChange = _param.onChange, _param_hourCycle = _param.hourCycle, hourCycle = _param_hourCycle === void 0 ? 24 : _param_hourCycle, _param_yearRange = _param.yearRange, yearRange = _param_yearRange === void 0 ? 50 : _param_yearRange, _param_disabled = _param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, displayFormat = _param.displayFormat, _param_granularity = _param.granularity, granularity = _param_granularity === void 0 ? "second" : _param_granularity, _param_placeholder = _param.placeholder, placeholder = _param_placeholder === void 0 ? "Pick a date" : _param_placeholder, className = _param.className, props = _object_without_properties(_param, [
        "locale",
        "value",
        "onChange",
        "hourCycle",
        "yearRange",
        "disabled",
        "displayFormat",
        "granularity",
        "placeholder",
        "className"
    ]);
    var _React7__namespace_useState = _sliced_to_array(React7__namespace.useState(value !== null && value !== void 0 ? value : /* @__PURE__ */ new Date()), 2), month = _React7__namespace_useState[0], setMonth = _React7__namespace_useState[1];
    var buttonRef = React7.useRef(null);
    var handleSelect = function(newDay) {
        if (!newDay) return;
        if (!value) {
            onChange === null || onChange === void 0 ? void 0 : onChange(newDay);
            setMonth(newDay);
            return;
        }
        var diff = newDay.getTime() - value.getTime();
        var diffInDays = diff / (1e3 * 60 * 60 * 24);
        var newDateFull = add(value, {
            days: Math.ceil(diffInDays)
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(newDateFull);
        setMonth(newDateFull);
    };
    React7.useImperativeHandle(ref, function() {
        return _object_spread_props(_object_spread({}, buttonRef.current), {
            value: value
        });
    }, [
        value
    ]);
    var _displayFormat_hour24, _displayFormat_hour12;
    var initHourFormat = {
        hour24: (_displayFormat_hour24 = displayFormat === null || displayFormat === void 0 ? void 0 : displayFormat.hour24) !== null && _displayFormat_hour24 !== void 0 ? _displayFormat_hour24 : "PPP HH:mm".concat(!granularity || granularity === "second" ? ":ss" : ""),
        hour12: (_displayFormat_hour12 = displayFormat === null || displayFormat === void 0 ? void 0 : displayFormat.hour12) !== null && _displayFormat_hour12 !== void 0 ? _displayFormat_hour12 : "PP hh:mm".concat(!granularity || granularity === "second" ? ":ss" : "", " b")
    };
    var loc = enUS;
    var options = locale.options, localize2 = locale.localize, formatLong2 = locale.formatLong;
    if (options && localize2 && formatLong2) {
        loc = _object_spread_props(_object_spread({}, enUS), {
            options: options,
            localize: localize2,
            formatLong: formatLong2
        });
    }
    return /* @__PURE__ */ React7__namespace.createElement(Popover, null, /* @__PURE__ */ React7__namespace.createElement(PopoverTrigger, {
        asChild: true,
        disabled: disabled
    }, /* @__PURE__ */ React7__namespace.createElement(Button, {
        className: cn("w-full justify-start text-left font-normal", !value && "text-muted-foreground", className),
        ref: buttonRef
    }, /* @__PURE__ */ React7__namespace.createElement(lucideReact.Calendar, {
        className: "mr-2 h-4 w-4"
    }), value ? format(value, hourCycle === 24 ? initHourFormat.hour24 : initHourFormat.hour12, {
        locale: loc
    }) : /* @__PURE__ */ React7__namespace.createElement("span", null, placeholder))), /* @__PURE__ */ React7__namespace.createElement(PopoverContent, {
        className: "w-auto p-0"
    }, /* @__PURE__ */ React7__namespace.createElement(Calendar, _object_spread({
        mode: "single",
        selected: value,
        month: month,
        onSelect: function(d) {
            return handleSelect(d);
        },
        onMonthChange: setMonth,
        yearRange: yearRange,
        locale: locale
    }, props)), granularity !== "day" && /* @__PURE__ */ React7__namespace.createElement("div", {
        className: "border-t border-border p-3"
    }, /* @__PURE__ */ React7__namespace.createElement(TimePicker, {
        onChange: onChange,
        date: value,
        hourCycle: hourCycle,
        granularity: granularity
    }))));
});
DateTimePicker.displayName = "DateTimePicker";
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
    var _React7__namespace_useState = _sliced_to_array(React7__namespace.useState(memoryState), 2), state = _React7__namespace_useState[0], setState = _React7__namespace_useState[1];
    React7__namespace.useEffect(function() {
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
var PORTCULLIS_NEXT_URL = process.env.NEXT_PUBLIC_PORTCULLIS_URL || "https://app.portcullis.com";
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
                        fetch("https://".concat(PORTCULLIS_NEXT_URL, "/api/exports"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "x-api-key": apiKey
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
// src/components/ExportWrapper.tsx
var WarehouseType = /* @__PURE__ */ function(WarehouseType2) {
    WarehouseType2["Clickhouse"] = "clickhouse";
    WarehouseType2["Snowflake"] = "snowflake";
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
]), _obj);
var ExportWrapper = function(param) {
    var apiKey = param.apiKey, organizationId = param.organizationId, internalWarehouse = param.internalWarehouse, _param_theme = param.theme, theme = _param_theme === void 0 ? "light" : _param_theme, onSuccess = param.onSuccess, onError = param.onError;
    var _React7__namespace_useState = _sliced_to_array(React7__namespace.useState("destination"), 2), currentStep = _React7__namespace_useState[0], setCurrentStep = _React7__namespace_useState[1];
    var _React7__namespace_useState1 = _sliced_to_array(React7__namespace.useState("clickhouse" /* Clickhouse */ ), 2), destinationType = _React7__namespace_useState1[0], setDestinationType = _React7__namespace_useState1[1];
    var _React7__namespace_useState2 = _sliced_to_array(React7__namespace.useState(""), 2), destinationName = _React7__namespace_useState2[0], setDestinationName = _React7__namespace_useState2[1];
    var _React7__namespace_useState3 = _sliced_to_array(React7__namespace.useState({}), 2), credentials = _React7__namespace_useState3[0], setCredentials = _React7__namespace_useState3[1];
    var _React7__namespace_useState4 = _sliced_to_array(React7__namespace.useState(), 2), scheduledAt = _React7__namespace_useState4[0], setScheduledAt = _React7__namespace_useState4[1];
    var _useToast = useToast(), toast2 = _useToast.toast;
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
                        return [
                            4,
                            createExport(apiKey, {
                                organization: organizationId,
                                internal_warehouse: internalWarehouse,
                                destination_type: destinationType,
                                destination_name: destinationName,
                                credentials: credentials,
                                scheduled_at: scheduledAt === null || scheduledAt === void 0 ? void 0 : scheduledAt.toISOString()
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
                        toast2({
                            title: "Error",
                            description: _instanceof(error, Error) ? error.message : "Failed to create export",
                            variant: "destructive"
                        });
                        onError === null || onError === void 0 ? void 0 : onError(error);
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
        return /* @__PURE__ */ React7__namespace.createElement(React7__namespace.Fragment, null, /* @__PURE__ */ React7__namespace.createElement(CardHeader, null, /* @__PURE__ */ React7__namespace.createElement(CardTitle, null, "Configure Destination")), /* @__PURE__ */ React7__namespace.createElement(CardContent, {
            className: "space-y-4"
        }, /* @__PURE__ */ React7__namespace.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React7__namespace.createElement(Label, null, "Destination Type"), /* @__PURE__ */ React7__namespace.createElement(Select, {
            value: destinationType,
            onValueChange: function(value) {
                return setDestinationType(value);
            }
        }, /* @__PURE__ */ React7__namespace.createElement(SelectTrigger, null, /* @__PURE__ */ React7__namespace.createElement(SelectValue, {
            placeholder: "Select destination type"
        })), /* @__PURE__ */ React7__namespace.createElement(SelectContent, null, Object.values(WarehouseType).map(function(type) {
            return /* @__PURE__ */ React7__namespace.createElement(SelectItem, {
                key: type,
                value: type
            }, type);
        })))), /* @__PURE__ */ React7__namespace.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React7__namespace.createElement(Label, null, "Destination Name"), /* @__PURE__ */ React7__namespace.createElement(Input, {
            value: destinationName,
            onChange: function(e) {
                return setDestinationName(e.target.value);
            },
            placeholder: "Enter destination name"
        }))), /* @__PURE__ */ React7__namespace.createElement(CardFooter, null, /* @__PURE__ */ React7__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("credentials");
            },
            disabled: !destinationType || !destinationName
        }, "Continue")));
    };
    var renderCredentialsStep = function() {
        return /* @__PURE__ */ React7__namespace.createElement(React7__namespace.Fragment, null, /* @__PURE__ */ React7__namespace.createElement(CardHeader, null, /* @__PURE__ */ React7__namespace.createElement(CardTitle, null, "Configure Credentials")), /* @__PURE__ */ React7__namespace.createElement(CardContent, {
            className: "space-y-4"
        }, credentialFields[destinationType].map(function(field) {
            return /* @__PURE__ */ React7__namespace.createElement("div", {
                key: field,
                className: "space-y-2"
            }, /* @__PURE__ */ React7__namespace.createElement(Label, {
                className: "capitalize"
            }, field.replace("_", " ")), /* @__PURE__ */ React7__namespace.createElement(Input, {
                type: field.includes("password") ? "password" : "text",
                value: credentials[field] || "",
                onChange: function(e) {
                    return setCredentials(function(prev) {
                        return _object_spread_props(_object_spread({}, prev), _define_property({}, field, e.target.value));
                    });
                },
                placeholder: "Enter ".concat(field.replace("_", " "))
            }));
        })), /* @__PURE__ */ React7__namespace.createElement(CardFooter, {
            className: "space-x-2"
        }, /* @__PURE__ */ React7__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("destination");
            }
        }, "Back"), /* @__PURE__ */ React7__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("schedule");
            },
            disabled: !Object.keys(credentials).length
        }, "Continue")));
    };
    var renderScheduleStep = function() {
        return /* @__PURE__ */ React7__namespace.createElement(React7__namespace.Fragment, null, /* @__PURE__ */ React7__namespace.createElement(CardHeader, null, /* @__PURE__ */ React7__namespace.createElement(CardTitle, null, "Schedule Export")), /* @__PURE__ */ React7__namespace.createElement(CardContent, {
            className: "space-y-4"
        }, /* @__PURE__ */ React7__namespace.createElement("div", {
            className: "space-y-2"
        }, /* @__PURE__ */ React7__namespace.createElement(Label, null, "Schedule (Optional)"), /* @__PURE__ */ React7__namespace.createElement(DateTimePicker, {
            value: scheduledAt,
            onChange: setScheduledAt,
            locale: void 0,
            weekStartsOn: void 0,
            showWeekNumber: void 0,
            showOutsideDays: void 0
        }))), /* @__PURE__ */ React7__namespace.createElement(CardFooter, {
            className: "space-x-2"
        }, /* @__PURE__ */ React7__namespace.createElement(Button, {
            onClick: function() {
                return setCurrentStep("credentials");
            }
        }, "Back"), /* @__PURE__ */ React7__namespace.createElement(Button, {
            onClick: handleSubmit
        }, "Create Export")));
    };
    var stepComponents = {
        destination: renderDestinationStep,
        credentials: renderCredentialsStep,
        schedule: renderScheduleStep
    };
    return /* @__PURE__ */ React7__namespace.createElement(Card, {
        className: "w-[600px]",
        "data-theme": theme
    }, stepComponents[currentStep]());
};
exports.ExportWrapper = ExportWrapper;
exports.WarehouseType = WarehouseType;
