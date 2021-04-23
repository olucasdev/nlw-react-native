import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({

   container: {
      flex: 1,
      backgroundColor: colors.background
    },
    header: {
      paddingHorizontal: 30
    },
    title: {
      fontSize: 17,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 20,
      marginTop: 15,
      paddingLeft: 20
    },
    subtitle: {
      fontFamily: fonts.text,
      fontSize: 17,
      lineHeight: 20,
      color: colors.heading,
      paddingLeft: 20
    },
    enviromentList: {
      paddingLeft: 17,
      paddingRight: 15,
      justifyContent: 'center',
      paddingBottom: 5,
      marginVertical: 4,
    },
    plants: {
      flex: 1,
      paddingHorizontal: 32,
      justifyContent: 'center'
    }
  });