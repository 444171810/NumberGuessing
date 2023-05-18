import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import { Button, Dialog } from '@rneui/themed';
import theme from '../consts/theme';

const startGameScreen = () => {
  const [bingoNumber, setBingoNumber] = useState(() => getBingoNumber());
  const [guess, setGuess] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [guessStatus, setGuessStatus] = useState({});

  const guessStatusList = {
    bingo: {
      type: 'bingo',
      text: 'Bingo!!!',
      buttonText: 'Play Again',
      onClick: playAgain,
    },
    bigger: {
      type: 'bigger',
      text: 'Guess bigger',
      buttonText: 'Close',
      onClick: toggleDialog,
    },
    smaller: {
      type: 'smaller',
      text: 'Guess smaller',
      buttonText: 'Close',
      onClick: toggleDialog,
    },
  };

  function getBingoNumber() {
    return Math.floor(Math.random() * 99) + 1;
  }

  handleChangeText = (text) => {
    var regex = /^\d{0,2}$/;
    regex.test(text) && setGuess(text);
  };

  function setGuessStatusAndOpenDialog(item) {
    setGuessStatus(item);
    toggleDialog();
  }

  handleConfirm = () => {
    const guessNumber = Number.parseInt(guess);
    if (guessNumber === bingoNumber)
      return setGuessStatusAndOpenDialog(guessStatusList.bingo);
    if (guessNumber > bingoNumber)
      return setGuessStatusAndOpenDialog(guessStatusList.smaller);
    if (guessNumber < bingoNumber)
      return setGuessStatusAndOpenDialog(guessStatusList.bigger);
  };

  function toggleDialog() {
    setDialogVisible((visible) => !visible);
  }

  function playAgain() {
    setBingoNumber(getBingoNumber());
    setGuess('');
    toggleDialog();
  }

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={2}
        style={styles.numberInput}
        value={guess}
        keyboardType='number-pad'
        onChangeText={handleChangeText}
      />
      <View style={styles.buttonWrapper}>
        <Button
          containerStyle={styles.button}
          onPress={() => {
            setGuess('');
          }}>
          Reset
        </Button>
        <Button containerStyle={styles.button} onPress={handleConfirm}>
          Confirm
        </Button>
      </View>
      <Dialog isVisible={dialogVisible} onBackdropPress={toggleDialog}>
        <Dialog.Title title={guessStatus.text} />
        <Dialog.Actions>
          <Dialog.Button
            title={guessStatus.buttonText}
            onPress={guessStatus.onClick}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default startGameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: theme.lightColors.brandThemeRed,
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: theme.lightColors.brandThemeGreen,
    borderBottomWidth: 2,
    marginBottom: 8,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 8,
    borderRadius: 999,
  },
});
