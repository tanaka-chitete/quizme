"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.ThemeContext = react_1.default.createContext({
    colors: {},
    spacing: {},
    breakpoints: {},
});
exports.ThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return react_1.default.createElement(exports.ThemeContext.Provider, { value: theme }, children);
};
