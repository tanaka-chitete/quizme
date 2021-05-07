"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var useDimensions = function () {
    var _a = react_1.useState(react_native_1.Dimensions.get('window')), dimensions = _a[0], setDimensions = _a[1];
    var onChange = function (_a) {
        var window = _a.window;
        setDimensions(window);
    };
    react_1.useEffect(function () {
        react_native_1.Dimensions.addEventListener('change', onChange);
        return function () { return react_native_1.Dimensions.removeEventListener('change', onChange); };
    }, []);
    return dimensions;
};
exports.default = useDimensions;
