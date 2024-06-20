import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Cabecalho from '../Components/Cabecalho';
import ImageProfile from '../Components/ImageProfile';

function ProfileScreen() {
  

  return (
    <View className="flex-1 bg-white">
      <Cabecalho />
      <ScrollView>
      <ImageProfile />
      </ScrollView>
      
    </View>
  )
}

export default ProfileScreen