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
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
