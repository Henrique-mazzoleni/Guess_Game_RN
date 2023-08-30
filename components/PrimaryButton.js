import { Pressable, View, Text, StyleSheet } from 'react-native';

export default function PrimaryButton({ children, onAction }) {
  return (
    <Pressable onPress={onAction}>
      <View style={styles.inputButton}>
        <Text style={styles.inputButtonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    flex: 1,
    backgroundColor: '#472747',
    borderRadius: 25,
  },
  inputButtonText: {
    color: '#B5A8B5',
    textAlign: 'center',
  },
});
