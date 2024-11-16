import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function PantallaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Texto principal */}
      <Text style={styles.text}>Municipalidad de Quinchao</Text>

      {/* Imagen central */}
      <Image
        source={require("./assets/LOGAMBIENTE.gif")}
        style={styles.image}
      />

      {/* Botón para navegar */}
      <Button
        title="Ir a la Segunda Pantalla"
        onPress={() => navigation.navigate("Secundaria")}
        color="blue"
      />

      {/* Imagen inferior */}
      <Image
        source={require("./assets/logogoogle.png")}
        style={styles.footerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green", // Fondo verde
    justifyContent: "space-between", // Espaciado vertical
    alignItems: "center", // Centrar horizontalmente
    paddingVertical: 20,
  },
  text: {
    color: "white", // Texto blanco
    fontSize: 24,
    fontWeight: "bold", // Texto en negrita
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  footerImage: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
