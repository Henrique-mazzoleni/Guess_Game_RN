import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import GuessBoundary from '../components/GuessBoundary';

export default function GuessScreen({ onVerify, guessList }) {
  const [guess, setGuess] = useState('');
  const [bounds, setBounds] = useState({ min: 0, max: 100 });

  const generateGuess = () => {
    const newGuess =
      Math.ceil(Math.random() * (bounds.max - bounds.min)) + bounds.min;
    onVerify(String(newGuess));
    setGuess(newGuess);
  };

  const upperBoundHandler = () => {
    setBounds({ ...bounds, max: guess - 1 });
  };

  const lowerBoundHandler = () => {
    setBounds({ ...bounds, min: guess });
  };

  useEffect(() => {
    generateGuess();
  }, [bounds]);

  return (
    <>
      <Text style={styles.appTitle}>Opponent's Guess</Text>
      <View style={styles.guessContainer}>
        <Text style={styles.guessText}>{guess}</Text>
      </View>
      <GuessBoundary
        onGreated={lowerBoundHandler}
        onLower={upperBoundHandler}
      />
      <FlatList
        data={guessList}
        inverted={true}
        renderItem={(guess, idx) => {
          return (
            <View>
              <Text>#{idx}</Text>
              <Text>Opponent's Guess: {guess}</Text>
            </View>
          );
        }}
        keyExtractor={(guess) => guess}
      />
    </>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 25,
    fontWeight: '700',
    padding: 12,
    paddingHorizontal: 50,
    color: '#fff',
    borderWidth: 3,
    borderColor: '#fff',
  },
  guessContainer: {
    width: '70%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  guessText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },
});
