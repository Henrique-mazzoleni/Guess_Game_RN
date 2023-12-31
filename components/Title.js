import { Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/colors';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25,
    padding: 12,
    paddingHorizontal: 50,
    color: Colors.accent500,
    borderWidth: 3,
    borderColor: Colors.accent500,
  },
});
