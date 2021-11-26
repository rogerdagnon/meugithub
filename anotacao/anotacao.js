import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function anotacao() {

    const [txtN, setTxt] = React.useState("");
    const [idN, setID] = React.useState();
  
  
    const enviarDados = async () => {
      try {
        const response = await fetch("https://b0071ca5-30af-4a11-87eb-a5da40563736-southcentralus.apps.astra.datastax.com/api/rest/v2/keyspaces/reactnative/anotacao", {
          method: 'POST',
          headers: {
            'X-Cassandra-Token': 'AstraCS:ibodeWdHuhWoWcOGvlyHZfcn:86d6db720965786e2e5888540c668b6b91f500d0036356e64b5258267a3721d7'
          },
          body: JSON.stringify({
            id: idN,
            txt: txtN
          })
        }).then((response) => {
          setID(null);
          setTxt("");
          alert("Anotado com sucesso!");
        }).catch((error) => {
          alert(error);
        });
  
      }
      catch (error) {
        alert(error);
      }
      
    }
  
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Criar Anotação</Text>
          <View style={styles.inputContainer}> 
            <TextInput 
                style={styles.input}
                placeholder="ID"
                onChangeText={setID}
                value={idN}
                keyboardType="default"
              />
              <TextInput 
                style={styles.input}
                placeholder="Texto"
                onChangeText={setTxt}
                value={txtN}
                keyboardType="default"
              />
              <TouchableOpacity
                style={styles.button}
                onPress={enviarDados}
              >
                <Text style={styles.buttonText}>Adicionar à lista de Anotações</Text>
              </TouchableOpacity>
          </View>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
      },
      title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
      },
      inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
      },
      input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
      },
      button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      }
    });
