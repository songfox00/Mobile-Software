import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './src/styles';
import Button from './Button';

export default function App(){    
  return(
    <SafeAreaView style={styles.back}>
        <Button/>
    </SafeAreaView>
  );
}