import React, {useState, useRef, useCallback} from "react";
import {View, Text, StyleSheet, Button, Switch} from "react-native";
import {Colors, useTheme} from "react-native-paper";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { useToggleContext } from "./ToggleThemeContext";

const Setting = () => {
    const theme=useTheme();
    const {fonts, colors}=theme;
    const {toggle, fsize, upfSize, downfSize}=useToggleContext();
    const darkModeRef=useRef<Switch | null>(null);

    return (
        <View style={[styles.view, {backgroundColor: colors.background}]}>
            <View style={[styles.bar, {backgroundColor: colors.notification}]}>
                <Text onPress={()=>{return darkModeRef.current?.focus()}} style={[styles.text, {color: colors.text, flex:1,fontSize:fsize}, fonts.medium]}>Dark Mode</Text>
                    <View><Switch value={theme.dark} onValueChange={toggle}/></View>
            </View>
            <View style={[styles.bar, {backgroundColor: colors.background}]}>
                <Text style={[styles.text, {color: colors.text, flex:2,fontSize:fsize}, fonts.medium]}>Font Size</Text>
                <Text onPress={downfSize} style={[styles.cal, {color: colors.text, flex:1,fontSize:fsize}, fonts.medium]}>-</Text>
                <Text style={[styles.cal, {color: colors.text, flex:1,fontSize:fsize}, fonts.medium]}>{fsize}</Text>
                <Text onPress={upfSize} style={[styles.cal, {color: colors.text, flex:1,fontSize:fsize}, fonts.medium]}>+</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    view: {flex:1},
    bar: {height: 50, flexDirection: "row", padding: 5, alignItems:"center",justifyContent: "space-around"},
    cal: {flex: 1, textAlign: "right" },
    text: {textAlign: "left"}
})
export default Setting;