import React, { useState, useEffect }from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { themeColors } from '../../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

//Navigação de Rotas
import { useNavigation } from '@react-navigation/native';
import MainScreen from '../../MainScreen';

export default function CadOficinas() { 

    return (
      <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <Text>Cadastros Oficinas</Text>
      </View>
    )
}