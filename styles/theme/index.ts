import colors from './colors';
import fonts from './fonts';

export const darkTheme = {
	primary: colors.blue1,
	secondary: colors.white,
	tertiary: colors.grey3,
	heading: colors.white,
	textBody: colors.grey3,
	textSmall: colors.white,
	textHover: colors.navy1,
	textRequired: colors.pink,
	tablePrimary: colors.grey6,
	tableSecondary: colors.navy0,
	tableBorders: colors.grey2,
	tableHover: colors.blue1,
	buttonPrimary: colors.blue1,
	buttonSecondary: colors.grey6,
	buttonDisabled: colors.blue0,
	inputBackground: colors.grey6,
	inputBorders: colors.grey2,
};

export const lightTheme = {
	primary: colors.green2,
	secondary: colors.grey0,
	tertiary: colors.white,
	heading: colors.green2,
	textBody: colors.black,
	textSmall: colors.grey5,
	textHover: colors.white,
	textRequired: colors.pink,
	tablePrimary: colors.grey1,
	tableSecondary: colors.grey0,
	tableBorders: colors.grey4,
	tableHover: colors.green2,
	buttonPrimary: colors.green2,
	buttonSecondary: colors.white,
	buttonDisabled: colors.green0,
	inputBackground: colors.grey1,
	inputBorders: colors.grey4,
};

const themeConfig = { darkTheme, lightTheme, fonts };
export type ThemeInterface = {
	colors: typeof darkTheme | typeof lightTheme;
	fonts: typeof fonts;
};
export enum ThemeMode {
	DARK = 'dark',
	LIGHT = 'light',
}

export default themeConfig;
