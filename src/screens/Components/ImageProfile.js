import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../theme';
import * as ImagePicker from 'expo-image-picker';

function ImageProfile() {

    //Alterar Imagem Perfil
    const [ image, setImage ] = useState('');

    const handleImageSelection = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4,4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    
    });
    console.log(result.uri);
    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }
  return (
    <SafeAreaView>
        <View
            style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 15
            }}>
          <TouchableOpacity 
          onPress={handleImageSelection}>
            <Image 
            source={{ uri: image }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 85,
              borderWidth: 2,
              borderColor: themeColors.iconArrow
            }}
            />            
          </TouchableOpacity>
          <Text 
            className="text-xl font-extrabold"
            style={{
              color: themeColors.iconArrow,
              marginVertical: 8
            }}>Caroline Lage</Text>
        </View>
        </SafeAreaView>
  )
}

export default ImageProfile