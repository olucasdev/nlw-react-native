import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'
import { Text, SafeAreaView, Image } from 'react-native';
import watering from '../assets/watering.png'
import {Button} from '../components/Button'
import colors from '../../styles/colors';

 export function Welcome(){

  return (
        
      <SafeAreaView style={styles.container}>

      <Text style={styles.header}>
            Gerencie {'\n'}
            suas plantas de {'\n'}
            forma fácil
      </Text>

      <Image source={watering} style={styles.image} />

      <Text style={styles.footer}>
            Não esqueça mais de regar suas {'\n'}
            plantas. Nós cuidamos de lembrar você {'\n'}
            sempre que precisar.
      </Text>

      <Button title='>'/>

      <StatusBar style="auto" backgroundColor={colors.green}/>

    </SafeAreaView>
  )
}