import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from './lib/tailwind';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={tw`text-spred`}>Expecting text-spred (#ff0000)</Text>
      <Text style={tw`text-red-500`}>Expecting text-red-500</Text>
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
});
