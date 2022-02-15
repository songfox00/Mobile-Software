import React, {useEffect, useRef, useState, useCallback} from 'react';
import {Animated, SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';

const App=()=>{ 
  const animValue = useRef(new Animated.Value(0)).current;
  const animStyle={
    backgroundColor: animValue.interpolate({
      inputRange:[0,1], 
      outputRange:["red","blue"]
    }),
    transform:[
      {translateY: animValue.interpolate({
        inputRange:[0,1],
        outputRange: [100, 500]
      })},
      {translateX: animValue.interpolate({
        inputRange: [0,1],
        outputRange: [50,200]
      })},
      {rotateX: animValue.interpolate({
        inputRange: [0,1],
        outputRange: ["0deg", "720deg"]
      })}
    ]
  };
  const textStyle={
    fontSize: animValue.interpolate({
      inputRange: [0,1], 
      outputRange:[10,20]})
  };

  const [started, setStarted]=useState(false);
  const [realAnimValue, setRealAnimValue]=useState(0);
  const toggleStarted=useCallback(()=>{
    return setStarted((started:boolean)=>{return !started;});
  }, []);
  const pressButton=useCallback(()=>{
    return Animated.timing(animValue, {useNativeDriver:false, toValue:started?0:1, duration:3000}).start(toggleStarted);
  }, [started]);

  useEffect(()=>{
    const id=animValue.addListener((state:{value:number})=>{
      setRealAnimValue(state.value);
    });
    return ()=>{animValue.removeListener(id);};
  })
  
  return(
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topView}>
        <Animated.Text style={[styles.text, textStyle]}>{realAnimValue}</Animated.Text>
      </View>
      <View style={styles.centerView}>
        <Button title="Toggle Opacity" onPress={pressButton}/>
        <Animated.View style={[animStyle, styles.aniView]}></Animated.View>
      </View>
    </SafeAreaView>
  )  
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, backgroundColor: "yellow"},
  topView: {alignItems: "center"},
  centerView: {alignItems: "center", flexDirection:"column"},
  text: {fontSize: 20, color: "black"},
  aniView: {height: 100, width: 100, margin: 50}
})

export default App;
