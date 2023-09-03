import { Colors } from '../constants/colors';
import { View, Text, Image, StyleSheet } from 'react-native';

import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

export default function EndScreen({ rounds, number, onRestart }) {
  return (
    <View style={styles.endContainer}>
      <Title>Game Over!</Title>
      <View style={styles.endImageContainer}>
        <Image
          style={styles.endImage}
          source={require('../assets/success.png')}
        />
      </View>
      <Text style={styles.endText}>
        Your phone needed {rounds} round{rounds > 1 ? 's' : ''} to guess the
        number {number}
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onAction={onRestart}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  endContainer: {
    alignItems: 'center',
    gap: 30,
  },
  endImageContainer: {
    width: 360,
    height: 360,
    borderRadius: 180,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 20,
  },
  endImage: {
    width: '100%',
    height: '100%',
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
  buttonContainer: {
    width: 300,
  },
});
