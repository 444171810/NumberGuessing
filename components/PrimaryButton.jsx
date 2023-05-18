import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from '@rneui/themed';

const PrimaryButton = (props) => {
  return <Button />;
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#aa33ff',
    borderRadius: 28,
    padding: 8,
    elevation: 5,
    margin: 10,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#ccc',
    textAlign: 'center',
  },
});
