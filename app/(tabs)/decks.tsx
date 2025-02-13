import { Text, View, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Decks screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7ceea',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#000'
  },
  title: {
    color: '#000'
  },
  header: {
    color: '#000'
  },
});
