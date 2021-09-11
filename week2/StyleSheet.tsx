import React from 'react';
import {SafeAreaView, Text, Button, TextInput, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    mainViewStyle: {flex: 1, backgroundColor: "cyan", justifyContent:"center"},
    textStyle: {color: "yellow"},
    textInputStyle: {color: "green", width: 150, height: 30, borderWidth: 1, backgroundColor: "white"}
});

const App = () => {
    return (
        <SafeAreaView style = {style.mainViewStyle}>
            <Text style = {style.textStyle}>Name: </Text>
            <TextInput
                placeholder = "Enter your name"
                onChangeText = {(text: string) => {console.log(text);}}
                onFocus = {() => {console.log("On Focus");}}
                onBlur = {() => {console.log("On Blur");}}
                onEndEditing = {() => {console.log("Edit End!");}}
                keyboardType = "default"
                style = {style.textInputStyle}
            />
            <Text style = {style.textStyle}>Email: </Text>
            <TextInput
                placeholder = "Email address"
                onChangeText = {(text: string) => {console.log(text);}}
                onFocus = {() => {console.log("On Focus");}}
                onBlur = {() => {console.log("On Blur");}}
                onEndEditing = {() => {console.log("Edit End!");}}
                keyboardType = "email-address"
                style = {style.textInputStyle}
            />
            <Button title="Submit" onPress={() =>{console.log("Pressed!");}}/>
        </SafeAreaView>
    );
};
export default App;