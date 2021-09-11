import React from 'react';
import {SafeAreaView, Text, Button, TextInput} from 'react-native';

const App = () => {
    return (
     <SafeAreaView>
        <Text>Name: </Text>
        <TextInput
            placeholder = "Enter your name"
            onChangeText = {(text: string) => {console.log(text);}}
            onFocus = {() => {console.log("On Focus");}}
            onBlur = {() => {console.log("On Blur");}}
            onEndEditing = {() => {console.log("Edit End!");}}
            keyboardType = "default"
        />
        <Text>Email: </Text>
        <TextInput
            placeholder = "Email address"
            onChangeText = {(text: string) => {console.log(text);}}
            onFocus = {() => {console.log("On Focus");}}
            onBlur = {() => {console.log("On Blur");}}
            onEndEditing = {() => {console.log("Edit End!");}}
            keyboardType = "email-address"
        />
        <Button title="Submit" onPress={() => {console.log("Pressed!");}}/>
    </SafeAreaView>
    );
};
export default App;