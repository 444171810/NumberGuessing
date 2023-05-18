import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { Button } from '@rneui/themed';

const startGameScreen = () => {
  const [guess, setGuess] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={2}
        style={styles.numberInput}
        //value=''
        keyboardType='number-pad'
      />
      <View style={styles.buttonWrapper}>
        <Button containerStyle={styles.button}>Reset</Button>
        <Button containerStyle={styles.button}>Confirm</Button>
      </View>
    </View>
  );
};

export default startGameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#82061a',
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#44cc44',
    borderBottomWidth: 2,
    marginBottom: 8,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonWrapper:{
    flexDirection: 'row',

  },
  button:{
    flex: 1,
    margin: 8,
    borderRadius: 999,
  }
});
