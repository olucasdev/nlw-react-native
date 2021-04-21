import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({

  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  content:{
    flex: 1,
    width: '100%'
  },

  form:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },

  header:{
    alignItems: 'center'
  },

  emoji:{
    fontSize: 44
  },

  title:{
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 20,
    top: 14,
    fontFamily: fonts.heading,
  },

  input:{
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
    fontFamily: fonts.text
  },

  footer:{
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
  },

});