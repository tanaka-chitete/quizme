"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeHelpers_1 = require("./typeHelpers");
function isThemeKey(theme, K) {
    return theme[K];
}
exports.getValueForScreenSize = function (_a) {
    var responsiveValue = _a.responsiveValue, breakpoints = _a.breakpoints, dimensions = _a.dimensions;
    var sortedBreakpoints = Object.entries(breakpoints).sort(function (valA, valB) {
        return valA[1] - valB[1];
    });
    var width = dimensions.width;
    return sortedBreakpoints.reduce(function (acc, _a) {
        var breakpoint = _a[0], minWidth = _a[1];
        if (width >= minWidth && responsiveValue[breakpoint] !== undefined)
            return responsiveValue[breakpoint];
        return acc;
    }, undefined);
};
exports.isResponsiveObjectValue = function (val, theme) {
    if (!val)
        return false;
    if (typeof val !== 'object')
        return false;
    return typeHelpers_1.getKeys(val).reduce(function (acc, key) {
        return acc && theme.breakpoints[key] !== undefined;
    }, true);
};
exports.getResponsiveValue = function (propValue, _a) {
    var theme = _a.theme, transform = _a.transform, dimensions = _a.dimensions, themeKey = _a.themeKey;
    var val = exports.isResponsiveObjectValue(propValue, theme)
        ? exports.getValueForScreenSize({
            responsiveValue: propValue,
            breakpoints: theme.breakpoints,
            dimensions: dimensions,
        })
        : propValue;
    if (transform)
        return transform({ value: val, theme: theme, themeKey: themeKey });
    if (isThemeKey(theme, themeKey)) {
        if (val && theme[themeKey][val] === undefined)
            throw new Error("Value '" + val + "' does not exist in theme['" + themeKey + "']");
        return val ? theme[themeKey][val] : val;
    }
    return val;
};
