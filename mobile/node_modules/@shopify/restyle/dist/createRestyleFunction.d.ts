import { BaseTheme, RestyleFunction, RNStyleProperty } from './types';
import { StyleTransformFunction } from './responsiveHelpers';
declare const createRestyleFunction: <Theme extends BaseTheme = BaseTheme, TProps extends Record<string, any> = Record<string, any>, P extends keyof TProps = keyof TProps, K extends keyof Theme | undefined = undefined, S extends RNStyleProperty = RNStyleProperty>({ property, transform, styleProperty, themeKey, }: {
    property: P;
    transform?: StyleTransformFunction<Theme, K, TProps[P]> | undefined;
    styleProperty?: S | undefined;
    themeKey?: K | undefined;
}) => {
    property: P;
    themeKey: K | undefined;
    variant: boolean;
    func: RestyleFunction<TProps, Theme, P | S>;
};
export default createRestyleFunction;
