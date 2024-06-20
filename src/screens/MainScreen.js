import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { themeColors } from '../theme';

//Navigação de Rotas
import { useNavigation } from '@react-navigation/native';

import { Button, Card   } from 'react-native-paper';
import Cabecalho from './Components/Cabecalho';
import Legenda from './Components/Legenda';

export default function MainScreen() { 

  const navigation = useNavigation();

    return (
      <View>
        <Cabecalho />
        
        {/* Oficinas da Unidade*/}
        <ScrollView style={{zIndex: 1}}>
        <View style={{marginTop: 30}}>
          <Text className="font-bold text-xl" 
            style={{
              color: themeColors.primary,
              paddingLeft: 20
          }}>
            Olá Caroline Lage, veja as oficinas da unidade
          </Text>

          <View 
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: 30,
              paddingLeft: 10,
              paddingRight: 10
          }}>
            <Card style={{flexGrow: 1, borderRadius: 0, marginRight: 10}}>
              <Card.Cover 
                source={require("../../assets/math.jpg")} 
                style={{borderRadius: 0}}/>
              <Card.Title title="Oficina de Matemática" titleVariant='titleMedium'/>
              <Card.Content>
                <Text style={{marginTop: -10, marginBottom: 10}}>1º Trimestre</Text>
              </Card.Content>
              <Card.Actions>
                <Button 
                  textColor='white'
                  style={{backgroundColor: themeColors.primary, borderColor: 'transparent'}}>
                    Saiba Mais
                </Button>
              </Card.Actions>
            </Card>
            
            <Card style={{flexGrow: 1, borderRadius: 0 }}>
              <Card.Cover 
                source={require("../../assets/math.jpg")} 
                style={{borderRadius: 0}}/>
              <Card.Title title="Oficina de Matemática" titleVariant='titleMedium'/>
              <Card.Content>
              <Text style={{marginTop: -10, marginBottom: 10}}>1º Trimestre</Text>
              </Card.Content>
              <Card.Actions>
                <Button 
                  textColor='white'
                  style={{backgroundColor: themeColors.primary, borderColor: 'transparent'}}>
                    Saiba Mais
                </Button>
              </Card.Actions>
            </Card>
          </View>

        </View> 
        <Legenda />
        </ScrollView> 
      </View>
    )
}