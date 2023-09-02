import { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';

import PrimaryButton from './PrimaryButton';

import { Colors } from '../constants/colors';

export default function NumberInput({ onNumberInput }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const inputHandler = () => {
    const inputNumber = parseInt(enteredNumber);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 100) {
      Alert.alert('Invalid number', 'Number has to be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetHandler },
      ]);
      return;
    }
    onNumberInput(enteredNumber);
  };

  const resetHandler = () => {
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
        <View style={styles.buttonContainer}>
          <PrimaryButton onAction={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onAction={inputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 25,
    gap: 15,
    alignItems: 'center',
    backgroundColor: Colors.primary800,
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
    color: Colors.accent500,
    fontSize: 22,
  },
  inputField: {
    flexGrow: 1,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 50,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
  },
  inputActions: {
    flexDirection: 'row',
    gap: 25,
  },
  buttonContainer: {
    flex: 1,
  },
});
