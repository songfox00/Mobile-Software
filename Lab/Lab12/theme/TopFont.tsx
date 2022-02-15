import React from "react";
import type {FC} from "react";
import {StyleSheet, Switch} from "react-native";
import {useTheme} from "react-native-paper";
import {View} from "./View";
import type {ViewProps} from "./View";
import {useToggleThemeContext} from "../ToggleThemeProvider";

export type TopFontProps = ViewProps & {};
export const TopBar:FC<TopFontProps> = ({children, style, ...props})=> {
    const theme = useTheme();
    const {toggle, fontFamily, font} = useToggleThemeContext();
    return (
        <View primary style = {[styles.topbar]} {...props}>
            {children}
            <Switch value={theme.dark} onValueChange={font}/>
        </View>
    );
}
const styles = StyleSheet.create({
    topbar:{width: "100%", flexDirection: "row", padding: 5, justifyContent: "flex-end"}
});