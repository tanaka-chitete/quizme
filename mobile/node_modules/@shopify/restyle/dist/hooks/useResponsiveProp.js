"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responsiveHelpers_1 = require("../responsiveHelpers");
var useDimensions_1 = __importDefault(require("./useDimensions"));
var useTheme_1 = __importDefault(require("./useTheme"));
var useResponsiveProp = function (propValue) {
    var theme = useTheme_1.default();
    var dimensions = useDimensions_1.default();
    return responsiveHelpers_1.isResponsiveObjectValue(propValue, theme)
        ? responsiveHelpers_1.getValueForScreenSize({
            responsiveValue: propValue,
            breakpoints: theme.breakpoints,
            dimensions: dimensions,
        })
        : propValue;
};
exports.default = useResponsiveProp;
