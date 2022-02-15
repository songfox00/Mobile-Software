import React from "react";
import {View, StyleSheet, Text, Switch} from "react-native";
import {Colors, useTheme} from "react-native-paper";
import { useToggleContext } from "./ToggleThemeContext";

const Home = ()=>{
    const theme=useTheme();
    const {fonts, colors}=theme;
    const {toggle, fsize}=useToggleContext();

    return (
        <View style={[styles.view, {backgroundColor: colors.background}]}>
            <Text style={[styles.text, {color: colors.text, flex:1, fontSize: fsize}, fonts.medium]}>Hello World!</Text>
        </View>
        );
}

const styles = StyleSheet.create({
    view: {flex:1},
    bar: {height: 50, flexDirection: "row", padding: 5, alignItems:"center",justifyContent: "space-around"},
    content: {flex: 1, alignItems: "center", justifyContent: "center"},
    text: {fontSize: 20, textAlign: "center"}
})

export default Home;