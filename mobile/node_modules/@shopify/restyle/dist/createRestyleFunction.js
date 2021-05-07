"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responsiveHelpers_1 = require("./responsiveHelpers");
var createRestyleFunction = function (_a) {
    var property = _a.property, transform = _a.transform, styleProperty = _a.styleProperty, themeKey = _a.themeKey;
    var styleProp = styleProperty || property.toString();
    var func = function (props, _a) {
        var _b;
        var theme = _a.theme, dimensions = _a.dimensions;
        var value = responsiveHelpers_1.getResponsiveValue(props[property], {
            theme: theme,
            dimensions: dimensions,
            themeKey: themeKey,
            transform: transform,
        });
        if (value === undefined)
            return {};
        return _b = {},
            _b[styleProp] = value,
            _b;
    };
    return {
        property: property,
        themeKey: themeKey,
        variant: false,
        func: func,
    };
};
exports.default = createRestyleFunction;
