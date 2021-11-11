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
    paddingRight: 10,
    paddingLeft: 10,
    flex:1, //전체를 색칠
    backgroundColor: Colors.black,
  },
  view1:{
    backgroundColor: Colors.brown200,
    flex:1
  },
  view2:{
    flex:4
  },
  view3:{
    
    flex:4
  },
  view4:{
    backgroundColor: Colors.cyanA100,
    flex:1
  },
  icon:{
    left:'10%',
    top:'10%',
    color: Colors.orange500
  },
  icon1:{
    position: "absolute",
    left:'15%',
    bottom:'20%',
    color: Colors.lightBlue800
  },
  icon2:{
    left:'35%',
    position: "absolute",
    bottom:'20%',
    color: Colors.lightBlue800
  },
  icon3:{
    position: "absolute",
    left:'55%',
    bottom:'20%',
    color: Colors.lightBlue800
  },
  icon4:{
    position: "absolute",
    left:'75%',
    bottom:'20%',
    color: Colors.lightBlue800
  },
})

export default function App(){
  return (
    <SafeAreaView style={style.safeView}> 
      <View style={style.view1}>
        <Icon name="drag-horizontal-variant" size={width*0.17}></Icon>
      </View>
      <View style={{flex:8}}>
       <ImageBackground style={{flex:1}} source={require('./images/flower.jpg')}>
        <View style={style.view2}><Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text></View> 
        <View style={style.view3}><Text style={{color: Colors.white}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text></View>
       </ImageBackground>
      </View>
      <View style={style.view4}>
        <Icon style={style.icon1} size={iconSize} name="home"></Icon>
        <Icon style={style.icon2} size={iconSize} name="download-box-outline"></Icon>
        <Icon style={style.icon3} size={iconSize} name="email"></Icon>
        <Icon style={style.icon4} size={iconSize} name="file-pdf-box-outline"></Icon>
      </View>
    </SafeAreaView>
  )
}