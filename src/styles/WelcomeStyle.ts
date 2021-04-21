import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
      
      container:{
            flex: 1,
      },
      wrapper:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
      },

      header:{
            fontSize: 32,
            textAlign: 'center',
            color: colors.heading,
            marginTop: 38,
            top: 14,
           fontFamily: fonts.heading,
      },
      footer:{
            fontSize: 17,
            textAlign: 'center',
            color: colors.heading,
            fontFamily: fonts.text
      },
      image:{
            height: Dimensions.get('window').width * 0.7
      },
      buttonIcon:{
            fontSize: 28,
            color: colors.white
      },
      button:{
            color: colors.white,
            backgroundColor: colors.green,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            marginBottom: 10,
            width: 56,
            height: 56
          },
});