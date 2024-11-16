import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <LinearGradient
      colors={["#ff9a9e", "#fad0c4"]}
      style={styles.container}
    >
      {/* Imagen de portada */}
      <View style={styles.albumContainer}>
        <Image
          source={require("./assets/badbunny.jpg")} // Usa la imagen agregada
          style={styles.albumImage}
        />
      </View>

      {/* Título y artista */}
      <Text style={styles.songTitle}>Ojitos Lindos</Text>
      <Text style={styles.artistName}>Bad Bunny, Bomba Estéreo</Text>

      {/* Icono de Me Gusta */}
      <TouchableOpacity style={styles.likeButton}>
        <AntDesign name="hearto" size={24} color="red" />
      </TouchableOpacity>

      {/* Controles de reproducción */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-circle" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  albumContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // Para Android
  },
  albumImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  artistName: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
  },
  likeButton: {
    marginVertical: 20,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
});
