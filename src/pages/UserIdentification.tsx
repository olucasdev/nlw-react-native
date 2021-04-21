import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView, 
        View, 
        Text, 
        TextInput, 
        KeyboardAvoidingView, 
        Platform,
        Keyboard,
        TouchableWithoutFeedback
} from 'react-native';
import { styles } from '../styles/UserIdentificationStyle';
import {Button} from '../components/Button';
import colors from '../../styles/colors';


export function UserIdentification(){
    const [ isFocused, setIsFocused] = useState(false);
    const [ isFilled, setIsFilled] = useState(false);
    const [ name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleConfirm(){
          navigation.navigate('Confirmation')
    }
    function handleInputBlur(){
        setIsFocused(true);
        setIsFilled(!! name);
    }
    function handleInputFocus(){
        setIsFocused(false)
    }
    function handleInputChange( value: string ){
        setIsFilled(!!value);

    }
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} />
            <View style={styles.content}>
                <View style={styles.form}>
                <View style={styles.header}>
                    <Text style={styles.emoji}>
                        {isFilled ? '😄' : '😃'}
                    </Text>
                    <Text style={styles.title}>
                    Como podemos {'\n'}
                    chamar você?
                    </Text>
                </View>
                    <TextInput style={[
                        styles.input,
                    (isFocused || isFilled )&& {borderColor: colors.green}
                    ]} 
                    placeholder="Digite um nome"
                    onBlur={handleInputBlur} 
                    onFocus={handleInputFocus}
                    onChangeText={handleInputChange}
                    />
                    <View style={[styles.footer]}>
                    <Button title="Confirmar" onPress={handleConfirm}/>
                    </View>
                </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
    )

}