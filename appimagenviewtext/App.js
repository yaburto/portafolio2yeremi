import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Texto en blanco */}
      <Text style={styles.text}>Municipalidad de Quinchao</Text>

      {/* GIF en el centro */}
      <Image
        source={require("./assets/LOGAMBIENTE.gif")}
        style={styles.image}
      />

      {/* Imagen de Google al pie */}
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
    justifyContent: "space-between", // Distribuir elementos con espacio entre ellos
    alignItems: "center", // Centrar horizontalmente
    paddingVertical: 20, // Espaciado superior e inferior
  },
  text: {
    color: "white", // Texto blanco
    fontSize: 24, // Tamaño del texto
    fontWeight: "bold", // Texto en negrita
    marginTop: 20, // Separación superior
  },
  image: {
    width: 200, // Ancho de la imagen
    height: 200, // Alto de la imagen
    resizeMode: "contain", // Ajustar la imagen sin deformarla
  },
  footerImage: {
    width: 100, // Ancho de la imagen inferior
    height: 50, // Alto de la imagen inferior
    resizeMode: "contain", // Ajustar la imagen sin deformarla
  },
});
