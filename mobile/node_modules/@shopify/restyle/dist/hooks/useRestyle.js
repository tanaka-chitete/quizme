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
var react_1 = require("react");
var composeRestyleFunctions_1 = __importDefault(require("../composeRestyleFunctions"));
var typeHelpers_1 = require("../typeHelpers");
var useDimensions_1 = __importDefault(require("./useDimensions"));
var useTheme_1 = __importDefault(require("./useTheme"));
var filterRestyleProps = function (props, omitList) {
    var omittedProp = omitList.reduce(function (acc, prop) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[prop] = true, _a)));
    }, {});
    return typeHelpers_1.getKeys(props).reduce(function (acc, key) {
        var _a;
        if (omittedProp[key])
            return acc;
        return __assign(__assign({}, acc), (_a = {}, _a[key] = props[key], _a));
    }, {});
};
var useRestyle = function (restyleFunctions, props) {
    var theme = useTheme_1.default();
    var dimensions = useDimensions_1.default();
    var composedRestyleFunction = react_1.useMemo(function () { return composeRestyleFunctions_1.default(restyleFunctions); }, [restyleFunctions]);
    var style = composedRestyleFunction.buildStyle(props, { theme: theme, dimensions: dimensions });
    var cleanProps = filterRestyleProps(props, composedRestyleFunction.properties);
    return __assign(__assign({}, cleanProps), { style: [style, props.style].filter(Boolean) });
};
exports.default = useRestyle;
