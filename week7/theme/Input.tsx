import React, {useReducer, useRef} from "react";
import {View, Text, TextInput, KeyboardAvoidingView, Platform, Button, Keyboard} from "react-native";
import {useTheme} from "react-native-paper";

const Input = () => {
    const theme = useTheme();
    const {colors} = theme;
    const nameInputRef=useRef<TextInput | null>(null);
    const emailInputRef=useRef<TextInput | null>(null);
    const phoneInputRef=useRef<TextInput | null>(null);

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS=='ios' ? 'padding':'height'}>
            <View style={{flex:1, backgroundColor: colors.background,padding: 30}}>
            <View style={{flex:1, alignItems: "flex-end"}}>
                <Button title={"Hide Keyboard"} onPress={()=>{Keyboard.dismiss();}}/>
            </View>
            <Text onPress={()=>{return nameInputRef.current?.focus();}} style={{fontSize: 20, color: colors.text}}>Name:</Text>
            <TextInput ref={nameInputRef} style={{fontSize: 24, borderWidth: 1, color: colors.text, borderColor: colors.placeholder, marginBottom: 20}} placeholder="Enter your name"/>
            <Text onPress={()=>{return emailInputRef.current?.focus();}} style={{fontSize: 20, color: colors.text}}>Email:</Text>
            <TextInput ref={emailInputRef} style={{fontSize: 24, borderWidth: 1, color: colors.text, borderColor: colors.placeholder, marginBottom: 20}} placeholder="Enter your email"/>
            <Text onPress={()=>{return phoneInputRef.current?.focus();}} style={{fontSize: 20, color: colors.text}}>Phone number:</Text>
            <TextInput ref={phoneInputRef} style={{fontSize: 24, borderWidth: 1, color: colors.text, borderColor: colors.placeholder, marginBottom: 20}} placeholder="+XX-XX-XXXXXXX"/>
         </View>
        </KeyboardAvoidingView>
    );
};
export default Input;