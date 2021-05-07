"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createRestyleFunction_1 = __importDefault(require("./createRestyleFunction"));
var typeHelpers_1 = require("./typeHelpers");
var spacingProperties = {
    margin: true,
    marginTop: true,
    marginRight: true,
    marginBottom: true,
    marginLeft: true,
    marginHorizontal: true,
    marginVertical: true,
    marginStart: true,
    marginEnd: true,
    padding: true,
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true,
    paddingHorizontal: true,
    paddingVertical: true,
    paddingStart: true,
    paddingEnd: true,
};
var spacingPropertiesShorthand = {
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    ms: 'marginStart',
    me: 'marginEnd',
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    ps: 'paddingStart',
    pe: 'paddingEnd',
};
var typographyProperties = {
    fontFamily: true,
    fontSize: true,
    fontStyle: true,
    fontWeight: true,
    letterSpacing: true,
    lineHeight: true,
    textAlign: true,
    textDecorationLine: true,
    textDecorationStyle: true,
    textTransform: true,
};
var layoutProperties = {
    width: true,
    height: true,
    minWidth: true,
    maxWidth: true,
    minHeight: true,
    maxHeight: true,
    overflow: true,
    aspectRatio: true,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    justifyContent: true,
    flex: true,
    flexBasis: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
};
var positionProperties = {
    position: true,
    top: true,
    right: true,
    bottom: true,
    left: true,
    start: true,
    end: true,
};
var borderProperties = {
    borderBottomWidth: true,
    borderLeftWidth: true,
    borderRightWidth: true,
    borderStyle: true,
    borderTopWidth: true,
    borderStartWidth: true,
    borderEndWidth: true,
    borderWidth: true,
};
var borderRadiusProperties = {
    borderRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomStartRadius: true,
    borderBottomEndRadius: true,
    borderTopStartRadius: true,
    borderTopEndRadius: true,
};
var borderColorProperties = {
    borderColor: true,
    borderTopColor: true,
    borderRightColor: true,
    borderLeftColor: true,
    borderBottomColor: true,
    borderStartColor: true,
    borderEndColor: true,
};
var shadowProperties = {
    shadowOpacity: true,
    shadowOffset: true,
    shadowRadius: true,
    elevation: true,
};
var textShadowProperties = {
    textShadowOffset: true,
    textShadowRadius: true,
};
exports.backgroundColor = createRestyleFunction_1.default({
    property: 'backgroundColor',
    themeKey: 'colors',
});
exports.backgroundColorShorthand = createRestyleFunction_1.default({
    property: 'bg',
    styleProperty: 'backgroundColor',
    themeKey: 'colors',
});
exports.color = createRestyleFunction_1.default({
    property: 'color',
    themeKey: 'colors',
});
exports.opacity = createRestyleFunction_1.default({
    property: 'opacity',
});
exports.visible = createRestyleFunction_1.default({
    property: 'visible',
    styleProperty: 'display',
    transform: function (_a) {
        var value = _a.value;
        return (value === false ? 'none' : 'flex');
    },
});
exports.spacing = typeHelpers_1.getKeys(spacingProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
        themeKey: 'spacing',
    });
});
exports.spacingShorthand = typeHelpers_1.getKeys(spacingPropertiesShorthand).map(function (property) {
    var styleProperty = spacingPropertiesShorthand[property];
    return createRestyleFunction_1.default({
        property: property,
        styleProperty: styleProperty,
        themeKey: 'spacing',
    });
});
exports.typography = typeHelpers_1.getKeys(typographyProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
    });
});
exports.layout = typeHelpers_1.getKeys(layoutProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
    });
});
exports.position = __spreadArrays(typeHelpers_1.getKeys(positionProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
    });
}), [
    createRestyleFunction_1.default({
        property: 'zIndex',
        themeKey: 'zIndices',
    }),
]);
exports.border = __spreadArrays(typeHelpers_1.getKeys(borderProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
    });
}), typeHelpers_1.getKeys(borderColorProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
        themeKey: 'colors',
    });
}), typeHelpers_1.getKeys(borderRadiusProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
        themeKey: 'borderRadii',
    });
}));
exports.shadow = __spreadArrays(typeHelpers_1.getKeys(shadowProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
    });
}), [
    createRestyleFunction_1.default({
        property: 'shadowColor',
        themeKey: 'colors',
    }),
]);
exports.textShadow = __spreadArrays(typeHelpers_1.getKeys(textShadowProperties).map(function (property) {
    return createRestyleFunction_1.default({
        property: property,
    });
}), [
    createRestyleFunction_1.default({
        property: 'textShadowColor',
        themeKey: 'colors',
    }),
]);
exports.all = __spreadArrays([
    exports.color,
    exports.opacity,
    exports.backgroundColor,
    exports.backgroundColorShorthand
], exports.spacing, exports.spacingShorthand, exports.typography, exports.layout, exports.position, exports.border, exports.shadow, exports.textShadow);
