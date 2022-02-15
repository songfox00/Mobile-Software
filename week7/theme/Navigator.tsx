import React, {useState, useMemo} from "react";
import {BottomNavigation} from "react-native-paper";
import Home from "./Home"
import Input from "./Input";

const Navigator = () => {
    const [index, setIndex] = useState<number>(0);
    const routes = useMemo(()=>{return [{
        key: "home",
        title: "Home",
        icon: "home"
    },
    {
        key: "input",
        title: "Input",
        icon: "text-box"
    }];}, []);
    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        input: Input
    })
    return (
    <BottomNavigation navigationState={{index, routes}} onIndexChange={setIndex} renderScene={renderScene}/>);
}
export default Navigator;