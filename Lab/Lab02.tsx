import React from 'react';
import {SafeAreaView, Alert, Text, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get("window");
const style=StyleSheet.create({
 labelStyle:{
    position: "absolute",
    left: width*0.08,
    width: width*0.3,
 },
 InputStyle:{
    position: "absolute",
    left:width*0.4,
    width: width*0.5,
    height:width*0.09,
    borderWidth: 2
 },
 nameStyle:{
    color:"black",
    top:50
 },
 phoneStyle:{
  color:"blue",
  top:100
},
emailStyle:{
  color:"green",
  top:150
},
submitStyle:{
  position: "absolute",
  width: width*0.3,
  left:width*0.3,
  top:220,
  color: "blue",
},
analysisStyle:{
  position: "absolute",
  left:width*0.6,
  width: width*0.2,
  top:220,
  color: "blue",
}
});

const App = () => {
  var name:string;
  var phone:string;
  var email:string;
return (
<SafeAreaView>
  <Text style={[style.labelStyle, style.nameStyle]}>Name: </Text>
  <TextInput style={[style.InputStyle, style.nameStyle]}
    placeholder="Enter your name"
    onChangeText={(text:string) => {name=text}}
  ></TextInput>
  <Text style={[style.labelStyle, style.phoneStyle]}>Phone Number: </Text>
  <TextInput style={[style.InputStyle, style.phoneStyle]}
    placeholder="Enter your Phone Number"
    onChangeText={(text:string) => {phone=text}}
  ></TextInput>
  <Text style={[style.labelStyle, style.emailStyle]}>Email: </Text>
  <TextInput style={[style.InputStyle, style.emailStyle]}
    placeholder="Enter your email"
    onChangeText={(text:string) => {email=text}}
  ></TextInput>
  <TouchableOpacity style={style.submitStyle} onPress={()=>Alert.alert("알림", "Name: "+name+'\nPhone: '+phone+'\nEmail: '+email,
    [{text: "확인", onPress: ()=>{}}
  ])}><Text style={{color:"blue"}}>Submit</Text>
    </TouchableOpacity>
  
  <TouchableOpacity style={style.analysisStyle} onPress={()=>Alert.alert("분석", "Name: "+name?.length+'\nPhone: '+phone?.length+'\nEmail: '+email?.length,
    [{text: "확인", onPress: ()=>{}}
  ])}><Text style={{color:"blue"}}>Analysis</Text></TouchableOpacity>
</SafeAreaView>
);
}
export default App;