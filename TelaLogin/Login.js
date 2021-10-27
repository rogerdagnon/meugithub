import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import { TextInput } from "react-native-paper";
import { getUser } from "./../api/user";

export default function (props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const logar = async () => {
    const foundUser = await getUser({ username, password });

    if (!foundUser) {
      return console.warn(`User ${username} was not found`);
    }

    props.aoModificar(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../TelaLogin/logo.png")}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            onChangeText={setUsername}
            right={<TextInput.Icon name="account" />}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            onChangeText={setPassword}
            right={<TextInput.Icon name="lock" />}
          />
          <TouchableOpacity style={styles.btn} onPress={logar}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#2c3e50",
  },
  card: {
    display: "flex",
    width: "auto",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    marginTop: 10,
    padding: 1,
    margin: 1,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 3,
    borderBottomColor: "#ccc",
  },
  btn: {
    width: 300,
    height: 42,
    margin: 20,
    backgroundColor: "#3498db",
    marginTop: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
