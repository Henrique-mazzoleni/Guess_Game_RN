import { View, Text, Pressable, StyleSheet } from 'react-native';

import Title from '../components/Title';

export default function EndScreen({ rounds, number, onRestart }) {
  return (
    <View style={styles.endContainer}>
      <Title>Game Over!</Title>
      <Text style={styles.endText}>
        Your phone needed {rounds} round{rounds > 1 ? 's' : ''} to guess the
        number {number}
      </Text>
      <Pressable onPress={onRestart}>
        <View style={styles.endButton}>
          <Text style={styles.endButtonText}>Start New Game</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  endContainer: {
    alignItems: 'center',
    gap: 30,
  },
  endText: {
    fontSize: 22,
    textAlign: 'center',
  },
  endButton: {
    textAlign: 'center',
    backgroundColor: '#472747',
    paddingHorizontal: 60,
    borderRadius: 25,
    padding: 7,
  },
  endButtonText: {
    color: '#B5A8B5',
  },
});
