import React from 'react';
import {SafeAreaView, Button, Alert, Text, TouchableHighlit, TouchableOpacity} from 'react-native';

const action=()=>{
    Alert.alert("Alert", "Button pressed!",
        [
            {text:"NO", onPress:()=>{console.log("No")}},
            {text:"YES", onPress:()=>{console.log("Yes")}}
        ]
    );
}

const App = () => {
    return (
        <SafeAreaView>
            <Button title = "General" onPress={() => {action}}/>
            <TouchableHighlit onPress={action}><Text>TouchableHighlit Button</Text></TouchableHighlit>
            <TouchableOpacity onPress={action}><Text>TouchableOpacity Button</Text></TouchableOpacity>
        </SafeAreaView>
    );
}
export default App;