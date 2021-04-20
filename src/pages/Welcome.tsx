import React, { useState} from 'react';
import { styles } from './styles'
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import watering from '../assets/watering.png'
import {Button} from '../components/Button'

 export function Welcome(){
      /*const [ visible, setVisible] = useState( false );

      function handleVisibility(){
            setVisible( true )
      } */

  return (
      <SafeAreaView style={styles.container}>

      <Text style={styles.header}>
            Gerencie {'\n'}
            suas plantas de {'\n'}
            forma fácil
      </Text>

      <Image source={watering} style={styles.image} />

      <Text style={styles.footer}>
            Não esqueça mais de regar {'\n'}
            suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <Button title='>'/>
    </SafeAreaView>
  )
}