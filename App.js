import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DireitosScreen from './screens/DireitosScreen';
import SobreScreen from './screens/SobreScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="Direitos" 
          component={DireitosScreen} 
          options={{ title: 'Direitos' }}
        />
        <Stack.Screen 
          name="Sobre" 
          component={SobreScreen} 
          options={{ title: 'Sobre o App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
