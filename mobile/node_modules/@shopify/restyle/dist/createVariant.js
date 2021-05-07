"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createRestyleFunction_1 = __importDefault(require("./createRestyleFunction"));
var restyleFunctions_1 = require("./restyleFunctions");
var composeRestyleFunctions_1 = __importDefault(require("./composeRestyleFunctions"));
var allRestyleFunctions = composeRestyleFunctions_1.default(restyleFunctions_1.all);
function createVariant(_a) {
    var _b = _a.property, property = _b === void 0 ? 'variant' : _b, themeKey = _a.themeKey, defaults = _a.defaults;
    var styleFunction = createRestyleFunction_1.default({
        property: property,
        themeKey: themeKey,
    });
    var func = function (props, _a) {
        var theme = _a.theme, dimensions = _a.dimensions;
        var expandedProps = styleFunction.func(props, { theme: theme, dimensions: dimensions })[property];
        if (!expandedProps && !defaults)
            return {};
        return allRestyleFunctions.buildStyle(__assign(__assign({}, defaults), expandedProps), {
            theme: theme,
            dimensions: dimensions,
        });
    };
    return {
        property: property,
        themeKey: themeKey,
        variant: true,
        func: func,
    };
}
exports.default = createVariant;
