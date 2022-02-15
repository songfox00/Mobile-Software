import React, {useCallback} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {TopBar, View, Text, UnderlineText} from "./theme";
import {useNavigation} from "@react-navigation/native";

export default function Dark(){
    const navigation = useNavigation();
    const goBack = useCallback(()=>navigation.canGoBack() && navigation.goBack(),[]);
    return (
    <SafeAreaView style = {styles.safe}>
        <View style = {styles.view}>
            <TopBar>
            </TopBar>
            <View style = {styles.view}>
            </View>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {flex: 1},
    view: {flex:1, alignItems: "center", justifyContent: "space-between"},
    text: {fontSize: 20}
});