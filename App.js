import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, my name is Keith, and I am a mobile developer.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: "bold"
  }
});

registerRootComponent(App);