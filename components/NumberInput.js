import { useState } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from './PrimaryButton';

export default function NumberInput({ onNumberInput }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const inputHandler = () => {
    onNumberInput(enteredNumber);
    setEnteredNumber('');
  };

  const resetHandler = () => {
    onNumberInput('');
    setEnteredNumber('');
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>Enter a Number</Text>
      <TextInput
        style={styles.inputField}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={(input) => {
          setEnteredNumber(input);
        }}
        value={enteredNumber}
      />
      <View style={styles.inputActions}>
        <Text>Hello</Text>
        <PrimaryButton onAction={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onAction={inputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 25,
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#72063c',
    height: 220,
    width: '80%',
    borderRadius: 8,
    elevation: 4, // Android shadow
    //ios shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  inputTitle: {
    color: '#227b04',
    fontSize: 22,
  },
  inputField: {
    flexGrow: 1,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 50,
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
  },
  inputActions: {
    flexDirection: 'row',
    gap: 25,
  },
});
