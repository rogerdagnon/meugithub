import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Item, ImageBackground} from 'react-native'

export default function(){

    const[carregando, setCarregando] = useState(true)
    const[dados, setDados] = useState([])

    const renderItem = ({ item }) => <Item name={item.nome} end={item.endereco} tel={item.telefone}/>

    const Item =({ name, end, tel }) =>(
            <View style={styles.descricao}>
                <Text style={styles.textItem}>
                    Cliente: {name}
                </Text>
                <Text style={styles.textItem}>
                    Endereço: {end}
                </Text>
                <Text style={styles.textItem}>
                    Telefone: {tel}
                </Text>
            </View>
    )

    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/app1/api/clientes/')
                //.then(console.log)
                //.then(res => console.log(res.json()))
                .then(res => res.json())
                .then((json)=>setDados(json))
                .catch(()=>(alert('Erro ao carregar Lista')))
                .finally(()=>setCarregando(false))
        },[]
    )

    return(
        <View>
           {
               carregando ? <ActivityIndicator/> : (
                   <FlatList
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={({id}, index)=>id}
                   />
               )
           } 
        </View>
    )
}

const styles = StyleSheet.create({
    descricao: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#808080',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fff',
      },
    textItem: {
        fontSize: 16,
    },
})