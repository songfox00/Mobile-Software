import React from 'react';
import {SafeAreaView} from 'react-native';
import Item from './Item';

export default function App() {
return (
  <SafeAreaView style={{flex: 1}}>
    {Item()}     
  </SafeAreaView> //<Item/> 형식으로도 가능
);
}