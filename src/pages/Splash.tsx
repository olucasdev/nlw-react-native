import React from 'react';
import {  StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/core';

import plant from '../../plant.json';

export function Splash(){
   const navigation = useNavigation();
   function splashNavigate(){
         navigation.navigate('Welcome')
   }
    return (
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          loop={false}
          style={{
          }}
          source={plant}
          onAnimationFinish={splashNavigate}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  lottieView:{
    resizeMode: "contain",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  }
});