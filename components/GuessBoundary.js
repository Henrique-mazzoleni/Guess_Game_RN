import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GuessBoundary({ onGreated, onLower }) {
  return (
    <View style={styles.boundryContainer}>
      <Text style={styles.guessText}>Higher or lower?</Text>
      <View style={styles.guessActions}>
        <Pressable onPress={onLower}>
          <View style={styles.guessButton}>
            <Text style={styles.guessButtonText}>-</Text>
          </View>
        </Pressable>
        <Pressable onPress={onGreated}>
          <View style={styles.guessButton}>
            <Text style={styles.guessButtonText}>+</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boundryContainer: {
    padding: 25,
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#971208',
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
  guessButton: {
    backgroundColor: '#472747',
    paddingHorizontal: 60,
    borderRadius: 25,
    padding: 7,
  },
  guessButtonText: {
    color: '#B5A8B5',
  },
});
