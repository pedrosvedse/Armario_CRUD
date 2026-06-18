import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import EditarScreen from './screens/EditarScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Armários' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Novo Armário' }} />
        <Stack.Screen name="Editar" component={EditarScreen} options={{ title: 'Editar Armário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}