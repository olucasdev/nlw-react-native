import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    emoji:{
        fontSize: 86,
        alignItems: 'center'
    },
    header:{
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    title:{
        fontSize: 18,
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        paddingVertical: 10
    },
    footer:{
        width: '100%',
        paddingHorizontal: 60,
        marginTop: 20
    }
});