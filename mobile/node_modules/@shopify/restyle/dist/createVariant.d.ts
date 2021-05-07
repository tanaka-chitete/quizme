import { BaseTheme, ResponsiveValue, RestyleFunctionContainer } from './types';
import { AllProps } from './restyleFunctions';
declare function createVariant<Theme extends BaseTheme, K extends keyof Theme = keyof Theme, P extends keyof any = keyof any>(params: {
    property: P;
    themeKey: K;
    defaults?: AllProps<Theme>;
}): RestyleFunctionContainer<VariantProps<Theme, K, P>, Theme, P, K>;
declare function createVariant<Theme extends BaseTheme, K extends keyof Theme = keyof Theme>(params: {
    themeKey: K;
    defaults?: AllProps<Theme>;
}): RestyleFunctionContainer<VariantProps<Theme, K>, Theme, 'variant', K>;
export declare type VariantProps<Theme extends BaseTheme, K extends keyof Theme, Property extends keyof any = 'variant'> = {
    [key in Property]?: ResponsiveValue<keyof Theme[K], Theme>;
};
export default createVariant;
