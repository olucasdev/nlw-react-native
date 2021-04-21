import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/WelcomeStyle'
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import watering from '../assets/watering.png'
import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';

 export function Welcome(){
      const navigation = useNavigation();
      function handleStart(){
            navigation.navigate('UserIdentification')
      }

  return (
        
      <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
      
                  <Text style={styles.header}>
                        Gerencie {'\n'}
                        suas plantas de {'\n'}
                        forma fácil
                  </Text>

                  <Image source={watering} style={styles.image} resizeMode="contain" />

                  <Text style={styles.footer}>
                        Não esqueça mais de regar suas{'\n'}
                        plantas. Nós cuidamos de lembrar você sempre que precisar.
                  </Text>

                  <TouchableOpacity 
                  style={styles.button}
                  onPress={handleStart}
                  >
                  <Text >
                        <Feather name="chevron-right" style={styles.buttonIcon}/>
                  </Text>
                  </TouchableOpacity>
            </View>
            <StatusBar style="auto" backgroundColor={colors.green}/>
      </SafeAreaView>
  )
}