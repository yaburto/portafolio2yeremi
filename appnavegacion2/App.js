import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaPrincipal from "./PantallaPrincipal";
import PantallaHome from "./PantallaHome";
import PantallaSettings from "./PantallaSettings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={PantallaPrincipal}
          options={{ title: "Selecciona una opción" }}
        />
        <Stack.Screen name="Home" component={PantallaHome} />
        <Stack.Screen name="Settings" component={PantallaSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
