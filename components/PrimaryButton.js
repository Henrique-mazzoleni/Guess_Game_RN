import { Pressable, View, Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/colors';

export default function PrimaryButton({ children, onAction }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onAction}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed ? [styles.inputButton, styles.pressed] : styles.inputButton
        }
      >
        <Text style={styles.inputButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: 'hidden',
    borderRadius: 25,
  },
  inputButton: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    elevation: 2,
  },
  inputButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
