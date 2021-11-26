<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./TelaLogin/Login";
import Navegar from "./Navegar/Navegar.js";
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './TelaLogin/Login';
import Navegar from './Navegar/Navegar.js';
>>>>>>> 1e6a25d (updateApp)

export default function App() {
  const [started, setStarted] = React.useState(false);

<<<<<<< HEAD
  if (started) {
    return <Navegar />;
  } else {
    return <Login atSuccessLogin={setStarted} />;
=======
  if(started){
    return (
      
      <Navegar/>

    );
  }else{
    return(
     <Login aoModificar={setStarted}/> 
    )
>>>>>>> 1e6a25d (updateApp)
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
