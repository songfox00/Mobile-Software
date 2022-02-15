import React, {useCallback} from "react";
import {StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, View} from "react-native";
import {TopBar, View as RNView, Text, UnderlineText} from "./theme";
import {useNavigation} from "@react-navigation/native";
import {useTheme} from "react-native-paper";
import { Switch } from "react-native-gesture-handler";
import { useToggleThemeContext } from "./ToggleThemeProvider";
import { Colors } from "react-native-paper";

const {width, height}=Dimensions.get('window');
export default function Font(){
    const theme=useTheme();
    const {colors}=theme;
    const {toggle, check, boolCheck}=useToggleThemeContext();
    const navigation = useNavigation();
    const goBack = useCallback(()=>navigation.canGoBack() && navigation.goBack(),[]);
    return (
    <SafeAreaView style = {styles.safe}>
        <RNView style = {styles.view}>
            <RNView style={[styles.button, {marginTop: 30,alignItems:"center", flexDirection:"row", justifyContent:"space-around", backgroundColor: colors.placeholder}]}>
            <Text style={{textAlign:"left"}}>명조체</Text>
            <View><Switch value={check} onValueChange={boolCheck}/></View>
            </RNView>
            <RNView style = {styles.view}>
            </RNView>
        </RNView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {margin: 10, padding: 10, width: width*0.7},
    safe: {flex: 1},
    view: {flex:1, alignItems: "center", justifyContent: "space-between"},
    text: {fontSize: 20}
});