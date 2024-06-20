import React, { useState, useEffect }from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Bars3CenterLeftIcon, UserCircleIcon, BookmarkIcon } from 'react-native-heroicons/solid';

//Navigação de Rotas
import { useNavigation } from '@react-navigation/native';

import DropDownPicker from 'react-native-dropdown-picker';

import { List , Button, Card, MD3Colors   } from 'react-native-paper';
import { themeColors } from '../../theme';

function Cabecalho() {
    const navigation = useNavigation();

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
            source={require("../../../assets/logoofapp.png")}
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
          zIndex: 2
        }}>
          <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
          <Bars3CenterLeftIcon size="24" style={{
            marginLeft: 10,
            color: '#096481'
          }}/> 
          </TouchableOpacity>
          <Text>SESI - CIC</Text>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              zIndex={2000}
              placeholder={'Tipo Usuário'}
              containerStyle={{height: 40, width: 150}}
              style={{borderColor: 'transparent'}}
              itemStyle={{
                  justifyContent: 'flex-start',
                  borderColor: 'transparent',
              }}
              dropDownContainerStyle={{borderColor: 'transparent', borderRadius: 0}}
            />
          </View>

          <View>
            {/* Usuário Page */}
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
              <UserCircleIcon size="30" style={{marginRight: 10, color: '#096481'}} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
  )
}

export default Cabecalho