import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import { FooProvider } from './FooProvider';
import Comp1 from './Comp1';

const App=()=>{
  const fSize=20;
  return(
    <FooProvider fSize={20} bgcolor={"yellow"}>
      <SafeAreaView style={styles.view}>
        <Text style={{fontSize: fSize}}>Main Component</Text>
        <Comp1/>
      </SafeAreaView>
    </FooProvider>
  );
};

const styles=StyleSheet.create({
  view: {flex:1}
});

export default App;