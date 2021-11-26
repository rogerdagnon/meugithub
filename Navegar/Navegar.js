import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import Rede from '../componentes/Fetch';
import Anotar from '../anotacao/anotacao.js';
import Listar from '../anotacao/list.js';

const Aba = createBottomTabNavigator();


function TelaInicio({navigation}){
  return(
    <ImageBackground source={require('../assets/imagem/fundoapp.png')} style={styles.imgbg}>
      <View style={styles.corpo}>
        <Text style={styles.txt}>Bem Vindo, admin</Text>
        <Text style={styles.txt}>Sistema Security</Text>
      </View>
    </ImageBackground>
  )
}

function TelaServicos({navigation}){
  return(
    <ImageBackground source={require('../assets/imagem/fundoapp.png')} style={styles.imgbg}>
      <View style={styles.TServico}>
        <Text style={styles.txt}>Area de Serviços Agendados</Text>
        <Rede/>
      </View>
    </ImageBackground>
  )
}

function TelaAnotacao({navigation}){
  return(
    <ImageBackground source={require('../assets/imagem/fundoapp.png')} style={styles.imgbg}>
          <Listar/>
    </ImageBackground>
  )
}

function TelaAdd(){
  return(
    <ImageBackground source={require('../assets/imagem/fundoapp.png')} style={styles.imgbg}>

        <Anotar/>
        </ImageBackground>
  ) 
}

export default function (props){
  

  return (

    <NavigationContainer >
      <Aba.Navigator>
        <Aba.Screen
          name="Inicio"
          style={styles.Aba}
          component={TelaInicio}
          options={{
          title:'Início',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" color={color} size={size} onPress={({TelaInicio})} />
            ),    
          }}
            />
        <Aba.Screen
          name="Servico"
          component={TelaServicos}
          options={{title:'Serviços',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="hammer-wrench" color={color} size={size} onPress={({TelaServicos})} />
            ),
          }}
          />
          <Aba.Screen
            name="Anotações"
            component={TelaAnotacao}
            options={{title:'Anotações',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="book-open-page-variant" color={color} size={size} onPress={({TelaAnotacao})}/>
            ),
          }}
          /> 
          <Aba.Screen
          name="Anotar"
          component={TelaAdd}
          options={{title:'Adicionar',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="plus-circle" color={color} size={size} onPress={({TelaAnotacao})}/>
            ),
          }}
          />
      </Aba.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  corpo: {
    flex: 2,
    alignItems:'center',
    justifyContent:'center',
    width: "100%",
    height: "100%",
  },
  Aba: {
    color: "#11101D",
  },
  TServico: {
    flex: 2,
    paddingLeft: 30,
    justifyContent:'center',
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  notifica: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ff2',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  txt:{
    color: "#fff",
    fontSize: 16,
  },
  imgbg: {
    flex: 1,
    resizeMode:"cover",
  },
  anotacao: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#808080',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#fff',
  },
  TServicoBtn:{
    alignItems:'end',
    justifyContent:'end',
    padding: 30,
  },
  TAnotacaoBtn:{
    alignItems:'end',
    justifyContent:'end',
    padding: 30,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
