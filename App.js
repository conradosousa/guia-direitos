import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CadastroScreen from "./screens/CadastroScreen";
import DireitosScreen from "./screens/DireitosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
          name="Cadastro" 
          component={CadastroScreen} 
          options={{ title: "Cadastro de Usuário" }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen 
          name="Direitos" 
          component={DireitosScreen} 
          options={{ title: "Direitos" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
