import React from "react";
import type {FC, ComponentProps} from "react";
import {Text as RNText} from "react-native";
import {useTheme} from "@react-navigation/native";
import { useToggleThemeContext } from "../ToggleThemeProvider";

export type TextProps = ComponentProps<typeof RNText>;
export const Text: FC<TextProps> = ({style, ...props}) => {
    const {colors} = useTheme();
    const {toggle, check, boolCheck}=useToggleThemeContext();
    var font;
    if(check)
        font='CourierPrime-Bold';
    else
        font='CourierPrime-Regular';

    return <RNText style = {[{color: colors.text, fontFamily: font}, style]}
{...props}/>;
}

export const UnderlineText: FC<TextProps> = ({style, ...props}) => {
    const {colors} = useTheme();
    const {toggle, check, boolCheck}=useToggleThemeContext();
    var font;
    if(check)
        font="CourierPrime-Bold";
    else
        font="CourierPrime-Regular";
    return (<RNText style = {[{
        color: colors.text,
        textDecorationColor: colors.text,
        fontFamily: font
    }, style]} {...props}/>);
}