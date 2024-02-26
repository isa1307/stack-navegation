//gerenciar navegacao
import { NavigationContainer } from "@react-navigation/native";

//navegacao em pilha
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Contact from "./src/screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={
          {
            title: 'tela inicial',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
            headerTitleAlign: 'center',
          }

        } />
        <Stack.Screen name="Profile" component={Profile} options={
          {
            title: 'perfil🧑',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
            headerTitleAlign: 'center',
          }

        } />
        <Stack.Screen name="Contact" component={Contact} options={
          {
            title: 'contato📞',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
            headerTitleAlign: 'center',
          }

        } /> 
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}