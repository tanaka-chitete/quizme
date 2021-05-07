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
Object.defineProperty(exports, "__esModule", { value: true });
var composeRestyleFunctions = function (restyleFunctions) {
    var flattenedRestyleFunctions = restyleFunctions.reduce(function (acc, item) {
        return acc.concat(item);
    }, []);
    var properties = flattenedRestyleFunctions.map(function (styleFunc) {
        return styleFunc.property;
    });
    var funcs = flattenedRestyleFunctions
        .sort(function (styleFuncA, styleFuncB) {
        return Number(styleFuncB.variant) - Number(styleFuncA.variant);
    })
        .map(function (styleFunc) {
        return styleFunc.func;
    });
    // TInputProps is a superset of TProps since TProps are only the Restyle Props
    var buildStyle = function (props, _a) {
        var theme = _a.theme, dimensions = _a.dimensions;
        return funcs.reduce(function (acc, func) {
            return __assign(__assign({}, acc), func(props, { theme: theme, dimensions: dimensions }));
        }, {});
    };
    return {
        buildStyle: buildStyle,
        properties: properties,
    };
};
exports.default = composeRestyleFunctions;
