import React from 'react';
import { SafeAreaView, 
    View, 
    Text } 
from 'react-native';
import { styles } from '../styles/ConfirmationStyle';
import {Button} from '../components/Button';
import colors from '../../styles/colors';

export function Confirmation(){
    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {'😄'}
                </Text>
                <Text style={styles.header}>
                    Prontinho
                </Text>
                <Text style={styles.title}>
                Agora vamos começar a cuidar das suas 
                plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button title="Começar"/>
                </View>
            </View>
        </SafeAreaView>

    )
}