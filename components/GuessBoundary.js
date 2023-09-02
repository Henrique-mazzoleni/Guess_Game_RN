import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from './PrimaryButton';

import { Colors } from '../constants/colors';

export default function GuessBoundary({ onGreater, onLower }) {
  return (
    <View style={styles.boundryContainer}>
      <Text style={styles.guessText}>Higher or lower?</Text>
      <View style={styles.guessActions}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onAction={onLower}>
            <Ionicons name="md-remove" size={24} />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onAction={onGreater}>
            <Ionicons name="md-add" size={24} />
          </PrimaryButton>
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
    backgroundColor: Colors.primary800,
    height: 150,
    width: '80%',
    borderRadius: 10,
  },
  guessText: {
    color: Colors.accent500,
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
