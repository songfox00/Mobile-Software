import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { useFooContext } from "./FooProvider";

const Comp2=()=>{
    const foo=useFooContext();
    return (
        <View style={[styles.view, {backgroundColor: foo.bgcolor}]}>
            <Text style={{fontSize: foo.fSize}}>Component 2</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    view: {height: '50%', width: '80%', borderWidth: 2}
})
export default Comp2;