import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import dicesImg from './assets/images/dices.jpg';

const theme = createTheme({
  lightColors: {
    primary: '#9b128b',
    secondary: '#378cc8',
  },
  mode: 'light',
});

export default function App() {
  return (
    <ImageBackground
      source={dicesImg}
      style={styles.container}
      resizeMode='cover'>
      <LinearGradient
        colors={['#ff000088', '#ffff0088']}
        style={styles.container}>
        <ThemeProvider theme={theme}>
          <StartGameScreen />
        </ThemeProvider>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
