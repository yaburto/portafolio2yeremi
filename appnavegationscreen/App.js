import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaPrincipal from "./PantallaPrincipal";
import PantallaSecundaria from "./PantallaSecundaria";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        {/* Pantalla Principal */}
        <Stack.Screen
          name="Principal"
          component={PantallaPrincipal}
          options={{ title: "Inicio" }} // Título de la pantalla en el header
        />
        {/* Pantalla Secundaria */}
        <Stack.Screen
          name="Secundaria"
          component={PantallaSecundaria}
          options={{ title: "Segunda Pantalla" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
