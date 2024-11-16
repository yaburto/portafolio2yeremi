import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function PantallaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción</Text>
      <View style={styles.options}>
        {/* Botón Home */}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="home" size={50} color="orange" />
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>

        {/* Botón Settings */}
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <MaterialIcons name="settings" size={50} color="green" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  optionButton: {
    alignItems: "center",
  },
  optionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
