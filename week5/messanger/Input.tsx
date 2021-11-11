import React, {Dispatch, SetStateAction, useState, useCallback} from 'react';
import type {FC} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

export type chatType={
    updateChat: Dispatch<SetStateAction<string[]>>
}

const Input:FC<chatType> = ({updateChat}) => {
    const [chatText, updateChatText] = useState<string>('');
    const pressInput = useCallback(()=>{
        if(chatText != ""){
            updateChat((chatList) => {
            return [... chatList, chatText];
        });
    }
    updateChatText("");
}, [chatText.length]);
    return (
        <View style={styles.view}>
            <TextInput style={styles.input} value={chatText} onChangeText={(text)=>{updateChatText(text);}}/>
            <TouchableOpacity style={styles.button} onPress={pressInput}>
                <Text style={styles.buttonText}>{"ют╥б"}</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    view:{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 2,
    },
        input:{
        flex: 4,
        fontSize: 20
    },
    button:{
        flex: 1,
        backgroundColor: Colors.green800,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 20,
        color: Colors.green100
    }
})

export default Input;