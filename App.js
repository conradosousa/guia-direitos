import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { StyleSheet } from "react-native";
import CadastroScreen from "./screens/CadastroScreen";
import ResultadoScreen from "./screens/ResultadoScreen";
import LoginScreen from "./screens/LoginScreen";
import CadastroUsuarioScreen from "./screens/CadastroUsuarioScreen";

// ...existing code...

// App principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} options={{ title: "Cadastro de Usuário" }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Resultado" component={ResultadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
