import React, {useState, useMemo} from 'react';
import { SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import Input from './Input';

const App = () => {
  const [chat, updateChat] = useState<string[]>(new Array<string>());
  const chatViews = useMemo(()=>{return chat.map((chatItem, index) => {
    return (
    <View style={styles.chatView} key={index}>
    <Text style={styles.chatText}>{chatItem}</Text>
    </View>
    );
    })}, [chat.length]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.view}>{chatViews}</View>
        <Input updateChat={updateChat}/>
    </SafeAreaView>
  )
  }
  const styles = StyleSheet.create({
  view:{flex: 7, backgroundColor: Colors.amber100,},
  chatView:{
  margin: 10,
  marginLeft: '40%',
  backgroundColor: Colors.yellow300,
  borderWidth: 3,
  width: '50%',
  height: '10%'
  },
  chatText:{flex: 1, fontSize: 20}
});

export default App;