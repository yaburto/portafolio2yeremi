import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green", // Fondo verde
    justifyContent: "center", // Centrar verticalmente
    alignItems: "center", // Centrar 
  },
  text: {
    color: "white", // Texto blanco
    fontSize: 24, // Tamaño del texto
    fontWeight: "bold", // Texto en negrita
  },
});
