import React from "react";
import {View, StyleSheet, Text, Switch} from "react-native";
import {Colors, useTheme} from "react-native-paper";
import { useToggleContext } from "./ToggleThemeContext";

const Home = ()=>{
    const theme=useTheme();
    const {fonts, colors}=theme;
    const toggleTheme=useToggleContext();
    return (
        <View style={[styles.view, {backgroundColor: colors.background}]}>
            <View style={[styles.bar, {backgroundColor: colors.notification}]}>
                <Text style={[styles.text, {color: colors.text, flex:1}, fonts.medium]}>Top Bar</Text>
                    <View><Switch value={theme.dark} onValueChange={toggleTheme}/></View>
            </View>
            <View style={[styles.content]}>
                <Text style={[styles.text, {color: colors.text}, fonts.regular]}>Hello world!</Text>
            </View>
            <View style={[styles.bar, {backgroundColor: colors.placeholder}]}>
                <Text style={[styles.text, {color: colors.text}, fonts.light]}>Bottom Bar</Text>
            </View>
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