import { useState } from 'react';

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

import InputScreen from './screens/InputScreen';
import GuessScreen from './screens/GuessScreen';
import EndScreen from './screens/EndScreen';

export default function App() {
  const [chosenNumber, setChosenNumber] = useState(null);
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
    setChosenNumber(null);
    setGuessList([]);
  };

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.contentContainer}>
          {!isCorrect && (
            <>
              {!chosenNumber && <InputScreen onNumberInput={numberHandler} />}
              {chosenNumber && (
                <GuessScreen
                  number={chosenNumber}
                  onVerify={checkAnswer}
                  guessList={guessList}
                />
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
        </SafeAreaView>
        <StatusBar style="light" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  contentContainer: {
    gap: 30,
    alignItems: 'center',
    paddingTop: 120,
  },
});
