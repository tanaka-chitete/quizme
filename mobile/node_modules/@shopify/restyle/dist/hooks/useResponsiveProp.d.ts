import { BaseTheme, PropValue, ResponsiveValue } from '../types';
declare const useResponsiveProp: <Theme extends BaseTheme, TVal extends PropValue>(propValue: ResponsiveValue<TVal, Theme>) => TVal | undefined;
export default useResponsiveProp;
