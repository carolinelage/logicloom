import React, { useState, useEffect }from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { themeColors } from '../theme';
import { Bars3CenterLeftIcon, UserCircleIcon, BookmarkIcon } from 'react-native-heroicons/solid';
//Navigação de Rotas
import { useNavigation } from '@react-navigation/native';

import DropDownPicker from 'react-native-dropdown-picker';

import { List , Button, Card, MD3Colors   } from 'react-native-paper';

export default function MainScreen() { 

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: 'Aluno(a)', value: 'aluno'},
      {label: 'Pedagogo(a)', value: 'pedagogo'},
      {label: 'Secretário(a)', value: 'secretario'},
  ]);

    return (
      <View>
        <View>
        <View style={{
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center",
          paddingTop: 60,
          paddingBottom: 30,
          backgroundColor: "#096481"
          }}>
          <Image
            style={{
              resizeMode: "contain",
              height: 30,
              marginBottom: 10,
              alignContent: "center",
            }}
            source={require("../../assets/logoofapp.png")}
          />
        </View>

        {/* Menu */}
        <View style={{
          display: "flex",
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center",
          backgroundColor: "white",
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: -20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,

          elevation: 1,
        }}>
          <Bars3CenterLeftIcon size="24" style={{
            marginLeft: 10,
            color: '#096481'
          }}/> 
          <Text>SESI - CIC</Text>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={'Tipo Usuário'}
              zIndex={5000}
              containerStyle={{height: 40, width: 150}}
              style={{backgroundColor: 'white', borderColor: 'transparent'}}
              itemStyle={{
                  justifyContent: 'flex-start',
                  borderColor: 'transparent'
              }}
              dropDownStyle={{backgroundColor: 'white'}}  
              dropDownContainerStyle={{borderColor: 'transparent', borderRadius: 0}}
            />
          </View>
          <View>
            <UserCircleIcon size="30" style={{marginRight: 10, color: '#096481'}} />
          </View>
        </View>
        </View>

        {/* Oficinas da Unidade*/}
        <ScrollView>
        <View style={{marginTop: 30}}>
          <Text className="font-bold text-xl" 
            style={{
              color: themeColors.primary,
              paddingLeft: 20,
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
        {/* Legendas Tipos Oficinas */}
        <View style={{borderWidth: 2, 
          borderColor: themeColors.primary, 
          marginTop: 30, 
          marginLeft: 20, 
          marginRight: 20}}>
            <View style={{color: themeColors.bg, backgroundColor: themeColors.primary}}>
              <Text 
                className="font-semibold" style={{alignSelf: 'center', color: 'white', paddingTop: 3, paddingBottom: 3}} 
              >
               Legenda
              </Text>
            </View>
  
            <View style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingLeft: 30,
              paddingRight: 10
          }}>
                <View>
                <List.Section>
                <List.Item title="FGB" left={() => <BookmarkIcon size="24" style={{color: '#ffe99e', marginRight: -10}} />} />
                
              </List.Section>
            </View>
            <View>
            <List.Item
                  title="ILH"
                  left={() => <BookmarkIcon size="24" style={{color: '#096481', marginRight: -10}} />}
                />
            </View>
            <View>
            <List.Item
                  title="IMN"
                  left={() => <BookmarkIcon size="24" style={{color: '#f3acb8', marginRight: -10}} />}
                />
            </View>
            <View>
            <List.Item
                  title="ITS"
                  left={() => <BookmarkIcon size="24" style={{color: '#c1c7cb', marginRight: -10}} />}
                />
            </View>
            <View>
            <List.Item
                  title="TEC"
                  left={() => <BookmarkIcon size="24" style={{color: '#9cddc6', marginRight: -10}} />}
                />
            </View>
                </View>
        
        </View>
        </ScrollView>
        
        
      </View>
    )
}