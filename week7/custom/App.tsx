import React, {useCallback, useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import { useBgcolor } from './useBgcolor';

const App = () => {
  const [bgcolor1, changeBgcolor1] = useBgcolor("black");
  const [bgcolor2, changeBgcolor2] = useBgcolor("black");
  
  return ( 
    <SafeAreaView style={{flex: 1, justifyContent: "center", backgroundColor:"yellow"}}>
      <View style={{flexDirection:"row", justifyContent:"space-around", height: 40}}>
        <View style={{backgroundColor: bgcolor1, height: 30, width: 100}}/>
        <Button title="Change color" onPress={changeBgcolor1} color="blue"/>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-around", height: 40}}>
        <View style={{backgroundColor: bgcolor2, height: 30, width: 100}}/>
        <Button title="Change color" onPress={changeBgcolor2} color="blue"/>
      </View>
    </SafeAreaView>
    );
};
export default App;