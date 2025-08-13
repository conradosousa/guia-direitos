import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Bem-vindo ao seu Guia de Direitos e Beneficios </Text>

      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6f0f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
