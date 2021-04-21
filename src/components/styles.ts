import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({

      buttonText:{
            fontSize: 18,
            color: colors.white,
            fontFamily: fonts.text
          },
        
          button:{
            backgroundColor: colors.green,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            width: '100%',
            height: 56
          },
      
});