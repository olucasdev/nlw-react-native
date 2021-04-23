import React from 'react';
import { View, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles} from './styles'
import userImg from '../assets/photo.png';

export function Header(){

   return(
   <SafeAreaView style={styles.container}>
      <View>
         <Text style={styles.header}>
          Olá,
         </Text>
         <Text style={styles.nameText}>
         Lucas
         </Text>
      </View>
      <View>
         <Image source={userImg} 
         style={styles.img}
         />
      </View>
   </SafeAreaView>
   )

}