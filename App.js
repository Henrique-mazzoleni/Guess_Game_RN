import { useEffect, useState } from 'react';

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import InputScreen from './screens/InputScreen';
import GuessScreen from './screens/GuessScreen';
import EndScreen from './screens/EndScreen';

import { Colors } from './constants/colors';

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(result))
  .catch((error) => console.warn(error));

export default function App() {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessList, setGuessList] = useState([]);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    if (fontsLoaded) hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const numberHandler = (enteredNumber) => {
    setChosenNumber(enteredNumber);
  };

  const checkAnswer = (guessedNumber) => {
    if (chosenNumber === guessedNumber) setIsCorrect(true);
    else setGuessList((currState) => [guessedNumber, ...currState]);
  };

  const restartHandler = () => {
    setIsCorrect(false);
    setChosenNumber(null);
    setGuessList([]);
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.appContainer}
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
    flex: 1,
    gap: 30,
    alignItems: 'center',
    paddingTop: 120,
  },
});
