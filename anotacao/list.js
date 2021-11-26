import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator  } from 'react-native';
import ViewItem from './ViewItem.js';

export default function AppList() {

  const[carregando, setCarregando] = useState(true)
  const [myTodoList, setMyTodoList] = React.useState([]);
  const [totalItens, setTotalItens] = React.useState(0);

    const renderItem = ({ item }) => (
        <ViewItem id={item.id} txt={item.txt} />
    )

    const buscarTodos = async () => {
      try {
        const response = await fetch("https://b0071ca5-30af-4a11-87eb-a5da40563736-southcentralus.apps.astra.datastax.com/api/rest/v2/keyspaces/reactnative/anotacao/rows", {
          method: 'GET',
          headers: {
            'X-Cassandra-Token': 'AstraCS:ibodeWdHuhWoWcOGvlyHZfcn:86d6db720965786e2e5888540c668b6b91f500d0036356e64b5258267a3721d7'
          }
        }).finally(()=>setCarregando(false));
      
        const dadosTodos = await response.json();
        
        let dadosOrdenados = dadosTodos.data.sort(function(a, b){
          return a.id - b.id;
        });

        setMyTodoList(dadosOrdenados);
        setTotalItens(dadosTodos.count);
        
      }
      catch (error) { 
        //alert(error);
      }
    }

    useEffect( () => {
      buscarTodos();
    } );
  
    return (
      <View style={styles.container}>
         {
               carregando ? <ActivityIndicator/> : (
        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}
        >
            <FlatList
                data={myTodoList}
                renderItem={renderItem}
                keyExtractor={({id}, index)=>id}
            />
        </ScrollView>
        )
      } 
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 30,
    },
    scrollContainer: {
      flex: 1,
      width: '90%'
    },
    itemsContainer: {
      flex: 1,
      marginTop: 10,
      padding: 20,
      alignItems: 'stretch',
    },
  });