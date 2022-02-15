import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { useFooContext } from "./FooProvider";
import Comp2 from "./Comp2";

const Comp1=()=>{
    const foo = useFooContext();
    return (
        <View style={[styles.view, {backgroundColor: foo.bgcolor}]}>
            <Text style={{fontSize: foo.fSize}}>Component 1</Text>
            <Comp2/>
        </View>
    );
}

const styles=StyleSheet.create({
    view: {height: '50%', width: '80%', borderWidth: 2}
})
export default Comp1;