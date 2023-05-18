import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { ThemeProvider } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import dicesImg from './assets/images/dices.jpg';
import theme from './consts/theme';

export default function App() {
  return (
    <ImageBackground
      source={dicesImg}
      style={styles.container}
      resizeMode='cover'>
      <LinearGradient
        colors={[
          theme.lightColors.brandThemeLightRed,
          theme.lightColors.brandThemeLightYellow,
        ]}
        style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ThemeProvider theme={theme}>
            <StartGameScreen />
          </ThemeProvider>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
