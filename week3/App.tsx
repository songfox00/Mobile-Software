import React from 'react';
import {SafeAreaView, View, StyleSheet, Text,Platform, ImageBackground, Image, Dimensions} from 'react-native';
import {Colors} from 'react-native-paper';
import Color from 'color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height}=Dimensions.get('window');
const iconSize= width*0.1;

const style=StyleSheet.create({
  image:{
    height: '80%'
  },
  safeView:{
    flex:1, //전체를 색칠
    backgroundColor: Colors.amber200,
  },
  view1:{
    backgroundColor:Colors.blueGrey200,
    height:'20%',
    width: '80%',
    borderWidth:10,
  },
  view2:{
    backgroundColor: Colors.red100,
    height:'20%',
    width: '80%',
    borderWidth: 10,
  },
  view3:{
    backgroundColor: Colors.white,
    height:'10%',
    width: '100%',
  },
  text1:{
    fontFamily: "CorierPrime-Regular",
    fontSize:20,
  },
  text2:{
    fontFamily: "CourierPrime-Italic",
    fontSize:20,
    textAlign: 'right'
  },
  icon:{
    left:'10%',
    top:'10%',
    color: Colors.orange500
  }
})

export default function App(){
  return (
    <SafeAreaView style={style.safeView}> 
      <ImageBackground style={{flex:1}} source={require('./images/flower.jpg')}>
      <View style={style.view1}><Text style={style.text1}>Hello world!</Text></View> 
      <View style={style.view2}><Text style={style.text2}>Hello world!</Text></View>
      <View style={style.view3}><Icon style={style.icon} size={iconSize} name="home"></Icon></View>
      </ImageBackground>
    </SafeAreaView>
  )
}