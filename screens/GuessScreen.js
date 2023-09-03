import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';

import { Colors } from '../constants/colors';

import GuessBoundary from '../components/GuessBoundary';
import Title from '../components/Title';

export default function GuessScreen({ onVerify, number, guessList }) {
  const [guess, setGuess] = useState(null);
  const [bounds, setBounds] = useState({ min: 0, max: 100 });

  const generateGuess = () => {
    const newGuess =
      Math.ceil(Math.random() * (bounds.max - bounds.min)) + bounds.min;
    setGuess(newGuess);
    onVerify(String(newGuess));
  };

  const upperBoundHandler = () => {
    if (Number(number) > guess) {
      Alert.alert('Invalid input', 'Please be honest!', [
        { text: 'Retry', style: 'default' },
      ]);
      return;
    }
    setBounds({ ...bounds, max: guess - 1 });
  };

  const lowerBoundHandler = () => {
    if (Number(number) < guess) {
      Alert.alert('Invalid input', 'Please be honest!', [
        { text: 'Retry', style: 'default' },
      ]);
      return;
    }
    setBounds({ ...bounds, min: guess });
  };

  useEffect(() => {
    generateGuess();
  }, [bounds]);

  return (
    <>
      <Title>Opponent's Guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guessText}>{guess}</Text>
      </View>
      <GuessBoundary
        onGreater={lowerBoundHandler}
        onLower={upperBoundHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={guessList}
          renderItem={(guess) => {
            return (
              <View style={styles.listItem}>
                <Text style={styles.listText}>
                  #{guessList.length - guess.index}
                </Text>
                <Text style={styles.listText}>
                  Opponent's Guess: {guess.item}
                </Text>
              </View>
            );
          }}
          keyExtractor={(guess) => guess}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: 'open-sans-bold',
    color: '#fff',
  },
  listContainer: {
    flex: 1,
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary800,
    backgroundColor: Colors.accent500,
    marginBottom: 5,
    width: 300,
    elevation: 4,
  },
  listText: {
    fontFamily: 'open-sans',
  },
});
