import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function ViewItem(props) {

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.textItem}> ID: {props.id}  </Text>
                <Text style={styles.textItem}> Texto: {props.txt} </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} > 
                <Text style={styles.buttonText}>✘</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.editButton} > 
                <Text style={styles.buttonText}>✎</Text> 
                </TouchableOpacity> 
            </View>
 
        </View>
      );
}

const styles = StyleSheet.create({
        container: {
        backgroundColor: '#fff',
        marginTop: 5,
        width: '95%',
        borderWidth: 3,
        borderColor: '#808080',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    item:{
        flexDirection: 'row',
    },
    descricao: {
        width: '95%',
        borderWidth: 2,
        borderColor: '#808080',
        padding: 10,
        borderRadius: 5,
        margin: 5,
      },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        paddingBottom: 10,
        marginTop: 5,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    textItem: {
        fontSize: 16,
    }
});
