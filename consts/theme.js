import { ThemeProvider, createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#9b128b',
    secondary: '#378cc8',
    brandThemeRed: '#82061a',
    brandThemeLightRed: '#ff000088',
    brandThemeGreen: '#44cc44',
    brandThemeLightYellow: '#ffff0088',
  },
  mode: 'light',
});

export default theme;
