import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Flaskard</Text>
      <Link href="/login" style={styles.button}>
        Login
      </Link>
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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000',
  },
});
