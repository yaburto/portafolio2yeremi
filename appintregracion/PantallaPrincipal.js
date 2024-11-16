import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function PantallaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Municipalidad de Quinchao</Text>
      <Image source={require("./assets/LOGAMBIENTE.gif")} style={styles.image} />
      <Button
        title="Ir a Mensaje Estático"
        onPress={() => navigation.navigate("Secundaria")}
        color="blue"
      />
      <Button
        title="Ir a Datos de API"
        onPress={() => navigation.navigate("API")}
        color="green"
        style={styles.button}
      />
      <Image source={require("./assets/logogoogle.png")} style={styles.footerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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
