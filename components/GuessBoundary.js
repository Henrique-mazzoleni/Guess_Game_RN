import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';

export default function GuessBoundary({ onGreater, onLower }) {
  return (
    <View style={styles.boundryContainer}>
      <Text style={styles.guessText}>Higher or lower?</Text>
      <View style={styles.guessActions}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onAction={onLower}>-</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onAction={onGreater}>+</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boundryContainer: {
    padding: 25,
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#3b021f',
    height: 150,
    width: '80%',
    borderRadius: 10,
  },
  guessText: {
    color: '#227b04',
    fontSize: 22,
  },
  guessActions: {
    flexDirection: 'row',
    gap: 25,
  },
  buttonContainer: {
    flex: 1,
  },
});
