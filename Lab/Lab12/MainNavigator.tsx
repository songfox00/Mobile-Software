import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Setting from "./Setting";
import Dark from "./Dark";
import Font from "./Font";

const Stack = createStackNavigator();
export default function MainNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home}/>
            <Stack.Screen name= "Setting" component={Setting}/>
            <Stack.Screen name = "Dark" component ={Dark}/>
            <Stack.Screen name = "Font" component ={Font}/>
        </Stack.Navigator>
    );
}