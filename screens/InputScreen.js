import NumberInput from '../components/NumberInput';
import { Text, StyleSheet } from 'react-native';

export default function InputScreen({ onNumberInput }) {
  return (
    <>
      <Text style={styles.appTitle}>Guess My Number</Text>
      <NumberInput onNumberInput={onNumberInput} />
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
});
