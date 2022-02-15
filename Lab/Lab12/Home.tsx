import React, { useCallback } from "react";
import {SafeAreaView, StyleSheet, View, Text} from "react-native";
import {TopBar, View as RNView, UnderlineText} from "./theme";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from "react-native-paper";

export default function Home(){
    const navigation=useNavigation();
    const goSetting=useCallback(()=> navigation.navigate("Setting" as never),[]);
    return (
        <SafeAreaView style = {styles.safe}>
            <RNView style = {styles.view}>
                <View style={styles.topbar}>
                    <Icon name="setting" size={30} color={Colors.white} onPress={goSetting}/>
                </View>
                <RNView style = {styles.view}>
                </RNView>
            </RNView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safe: {flex: 1},
    view: {flex:1, alignItems: "center", justifyContent: "space-between"},
    text: {fontSize:20},
    topbar:{width: "100%", flexDirection: "row", padding: 5, justifyContent: "flex-end", backgroundColor: Colors.blue700}
});