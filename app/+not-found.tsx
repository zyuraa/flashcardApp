import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
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