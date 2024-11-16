import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PantallaSecundaria() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido/a a la nueva pantalla!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green", // Fondo verde
    justifyContent: "center", // Centrar verticalmente
    alignItems: "center", // Centrar horizontalmente
  },
  text: {
    color: "white", // Texto blanco
    fontSize: 24, // Tamaño del texto
    fontWeight: "bold", // Texto en negrita
  },
});
