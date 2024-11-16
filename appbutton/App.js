import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  // Estado para mostrar el texto "¡Alerta!"
  const [showAlert, setShowAlert] = useState(false);

  // Función que se ejecuta al presionar el botón
  const handlePress = () => {
    setShowAlert(true); // Cambia el estado para mostrar el texto
  };

  return (
    <View style={styles.container}>
      {/* Texto principal */}
      <Text style={styles.text}>Municipalidad de Quinchao</Text>

      {/* Imagen central */}
      <Image
        source={require("./assets/LOGAMBIENTE.gif")}
        style={styles.image}
      />

      {/* Botón */}
      <Button title="Presionar" onPress={handlePress} color="blue" />

      {/* Texto de alerta */}
      {showAlert && <Text style={styles.alertText}>¡Alerta!</Text>}

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
  alertText: {
    color: "red", // Texto de alerta en rojo
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
