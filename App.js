import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import InputScreen from './screens/InputScreen';
import GuessScreen from './screens/GuessScreen';
import EndScreen from './screens/EndScreen';

export default function App() {
  const [chosenNumber, setChosenNumber] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessList, setGuessList] = useState([]);

  const numberHandler = (enteredNumber) => {
    setChosenNumber(enteredNumber);
  };

  const checkAnswer = (guessedNumber) => {
    if (chosenNumber === guessedNumber) setIsCorrect(true);
    else setGuessList((currState) => [...currState, guessedNumber]);
  };

  const restartHandler = () => {
    setIsCorrect(false);
    setChosenNumber('');
    setGuessList([]);
  };

  return (
    <View style={styles.container}>
      {!isCorrect && (
        <>
          {!chosenNumber && <InputScreen onNumberInput={numberHandler} />}
          {chosenNumber && (
            <GuessScreen onVerify={checkAnswer} guessList={guessList} />
          )}
        </>
      )}
      {isCorrect && (
        <EndScreen
          rounds={guessList.length}
          number={chosenNumber}
          onRestart={restartHandler}
        />
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: '#39CE07',
    alignItems: 'center',
    paddingTop: 120,
  },
});
