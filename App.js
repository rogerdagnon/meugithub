import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./TelaLogin/Login";
import Navegar from "./Navegar/Navegar.js";

export default function App() {
  const [started, setStarted] = React.useState(false);

  if (started) {
    return <Navegar />;
  } else {
    return <Login atSuccessLogin={setStarted} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
