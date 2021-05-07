import { RestyleFunctionContainer, BaseTheme, Dimensions, RNStyle } from './types';
import { AllProps } from './restyleFunctions';
declare const composeRestyleFunctions: <Theme extends BaseTheme, TProps extends AllProps<Theme>>(restyleFunctions: (RestyleFunctionContainer<TProps, Theme, keyof TProps, keyof Theme | undefined> | RestyleFunctionContainer<TProps, Theme, keyof TProps, keyof Theme | undefined>[])[]) => {
    buildStyle: <TInputProps extends TProps>(props: TInputProps, { theme, dimensions, }: {
        theme: Theme;
        dimensions: Dimensions;
    }) => RNStyle;
    properties: (keyof TProps)[];
};
export default composeRestyleFunctions;
