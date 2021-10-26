import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native' ; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const Aba = createBottomTabNavigator();

function TelaInicio({navigation}){
  return(
    <View style={styles.corpo}>
      <Text>Bem Vindo, Usuário</Text>
      <Text>Sistema Security</Text>
      </View>
  )
}

function TelaServicos({navigation}){
  return(
    <View style={styles.corpo}>

        <Text>Area de Serviços Agendados</Text>

        <View style={styles.descricao}>
          <Text>Cliente: Amarelo</Text>
          <Text>Periodo: Manhã</Text>
          <Text>Obs.: Realizar o serviço 1</Text>
        </View>
        <View style={styles.descricao}>
          <Text>Cliente: Azul</Text>
          <Text>Periodo: Tarde</Text>
          <Text>Obs.: Realizar o serviço 2</Text>
        </View>
        <View style={styles.descricao}>
          <Text>Cliente: Cinza</Text>
          <Text>Periodo: Tarde</Text>
          <Text>Obs.: Realizar o serviço 3</Text>
        </View>
        <View style={styles.descricao}>
          <Text>Cliente: Vermelho</Text>
          <Text>Periodo: Tarde</Text>
          <Text>Obs.: Realizar o serviço 4</Text>
        </View>
        <View style={styles.descricao}>
          <Text>Cliente: Roxo</Text>
          <Text>Periodo: Manhã</Text>
          <Text>Obs.: Realizar o serviço 5</Text>
        </View>
        <View style={styles.descricao}>
          <Text>Cliente: Roxo</Text>
          <Text>Periodo: Tarde</Text>
          <Text>Obs.: Realizar o serviço 6</Text>
        </View>    
    </View>
  )
}

function TelaNotificao({navigation}){
  return(
    <View style={styles.corpo}>
      <Text>Tela Notificaçoes
      </Text>
      <View style={styles.notifica}>
        <Text>Local de pendencias!!</Text>
        <Avatar.Icon size={68} icon="bell-ring" />
        <Avatar.Icon size={68} icon="bell-sleep" />
      </View>
      <Text>Local de pendencias!!</Text>
      </View>
      
      
  )
}

export default function (props){

  return (

    <NavigationContainer>
      <Aba.Navigator>
        <Aba.Screen
          name="Inicio"
          component={TelaInicio}
          options={{
          title:'Início',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="home" color={color} size={size} />
            ),    
          }}
            />
        <Aba.Screen
          name="Servico"
          component={TelaServicos}
          options={{title:'Serviços',
          tabBarIcon: ({ color, size }) => (
            <IconButton icon="hammer-wrench" color={color} size={size} />
            ),
          }}
          />
          <Aba.Screen
            name="Notificações"
            component={TelaNotificao}
            options={{title:'Notificações',
            tabBarIcon: ({ color, size }) => (
              <IconButton icon="bell" color={color} size={size} />
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
  },
  descricao: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#FDBDA5',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  notifica: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ff2',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
})
