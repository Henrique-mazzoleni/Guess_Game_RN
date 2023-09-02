import { Text, StyleSheet } from 'react-native';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '700',
    padding: 12,
    paddingHorizontal: 50,
    color: '#fff',
    borderWidth: 3,
    borderColor: '#fff',
  },
});
