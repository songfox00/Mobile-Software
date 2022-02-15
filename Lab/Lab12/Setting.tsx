import React, {useCallback} from "react";
import {StyleSheet, SafeAreaView, TouchableOpacity, Dimensions} from "react-native";
import {TopBar, View, Text, UnderlineText} from "./theme";
import {useNavigation} from "@react-navigation/native";
import { Colors, useTheme } from "react-native-paper";

const {width, height}=Dimensions.get('window');  
export default function Setting(){
    const theme=useTheme();
    const {colors}=theme;
    const navigation = useNavigation();
    const goBack = useCallback(()=>navigation.canGoBack() && navigation.goBack(),[]);
    const goDark = useCallback(()=>navigation.navigate("Dark" as never), []);
    const goFont = useCallback(()=>navigation.navigate("Font" as never),[]);
    return (
    <SafeAreaView style = {styles.safe}>
        <View style = {styles.view}>
            <View style={[styles.button, {marginTop: 30, backgroundColor: colors.placeholder}]}>
                <TouchableOpacity onPress={goDark}>
                    <Text>다크모드</Text>
                </TouchableOpacity>
            </View>
            <View style ={[styles.button,{ backgroundColor: colors.placeholder}]}>
                <TouchableOpacity onPress={goFont}>
                    <Text>서체</Text>
                </TouchableOpacity>
            </View>
            
            <View style = {{flex:2}}>

            </View>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {alignItems: "center", margin: 10, padding: 10, width: width*0.7},
    safe: {flex: 1},
    view: {flex:1, alignItems: "center", justifyContent: "space-between"},
    text: {fontSize: 20}
});