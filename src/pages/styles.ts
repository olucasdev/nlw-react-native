import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
      
      container:{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
      },
      header:{
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            color: colors.heading,
            marginTop: 38,
            top: 60,
      },
      footer:{
            fontSize: 17,
            paddingHorizontal: 20,
            textAlign: 'center',
            color: colors.heading,
            bottom: 5, 
      },

      image:{
            width: 292,
            height: 284,
            top: 30
      },
      //<StatusBar style="" />
});