import React, {useCallback, useRef, useMemo} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList,Easing, Image, Animated, TouchableOpacity, Dimensions} from 'react-native';
import type {NativeSyntheticEvent, NativeScrollEvent} from "react-native";
import {Colors} from "react-native-paper";

const imageWidth = 240;
const imageHeight = imageWidth * 3 / 4;
const circleWidth = 10; //현재 사진의 순서를 알려주는 동그라미 크기
const circleMargin = circleWidth/2; // 동그라미 사이 간격

const App = () => { //https://source.unsplash.com/random/1000x800
  const {width, height}=Dimensions.get("window");
  const imageList = useMemo(()=>[ 
    "https://images.unsplash.com/photo-1635232338148-972d7f540f00?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY0OTQ5OA&ixlib=rb-1.2.1&q=80&w=1000",
    "https://images.unsplash.com/photo-1635097077352-bfb02608e868?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY0OTUzMA&ixlib=rb-1.2.1&q=80&w=1000",
    "https://images.unsplash.com/photo-1636367581920-d3468e1d220a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY0OTU1NA&ixlib=rb-1.2.1&q=80&w=1000",
    "https://images.unsplash.com/photo-1636554613602-37bbce638d76?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY0OTYxMA&ixlib=rb-1.2.1&q=80&w=1000",
    "https://images.unsplash.com/photo-1636043827832-ae1b0774ed5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNjY0OTYyNA&ixlib=rb-1.2.1&q=80&w=1000"],[]);
  const circles = useMemo(()=>[1,2,3,4,5].map((val) => {  //동그라미 5개
    return <View key = {val} style = {styles.circle}/> 
  }),[]);
  const thumbnails=useMemo(()=>imageList.map((item, index)=>{
    return <TouchableOpacity onPress={()=>{selectImage(index)}} key={index}><Image source={{uri:item}} style={styles.thumb}/></TouchableOpacity>
  }),[]);
  const circleAnim=useRef(new Animated.Value(0)).current;
  const circleStyle={
    transform:[{
      translateX: Animated.add(Animated.multiply(new Animated.Value(circleWidth+circleMargin), circleAnim),new Animated.Value(5))
    }]
  }
  const onScroll=useCallback((event: NativeSyntheticEvent<NativeScrollEvent>)=>{
    const {contentOffset} = event.nativeEvent;
    const index=Math.round(contentOffset.x/imageWidth);
    Animated.timing(circleAnim, {useNativeDriver:true, toValue: index, duration:100}).start();
  },[]);

  const flatListRef=useRef<FlatList|null>(null);
  const selectImage=useCallback((index:number)=>{
    flatListRef.current?.scrollToIndex({index});
  },[]);

  const animValues = [0,1,2].map((val)=>{
    return useRef(new Animated.Value(0)).current; 
  })
  const flatAnimStyle={transform:[{
    translateX: animValues[0].interpolate({inputRange:[0,1], outputRange: [-imageWidth, (width-imageWidth)/2]})
  }]};
  const circleViewWidth=circleWidth*5+circleMargin*5+10;
  const circleAnimStyle={transform:[{
    translateX: animValues[1].interpolate({inputRange:[0,1], outputRange: [-circleViewWidth, (width-circleViewWidth)/2]})
  }]}; 
  const thumbViewWidth=imageWidth+10;
  const thumbAnimStyle={transform:[{
    translateX: Animated.subtract(Animated.multiply(new Animated.Value((width+thumbViewWidth)/2),animValues[2]),new Animated.Value(thumbViewWidth))
  }]};

  const animations=animValues.map((val)=>{
    return Animated.timing(val, {useNativeDriver: true, toValue:1, duration:2000, easing:Easing.bounce});
  })

  Animated.loop(Animated.parallel(animations),{iterations:3,resetBeforeIteration: true}).start(); 
  //Animated.timing(animValues[2], {useNativeDriver: true, toValue:1, duration: 5000}).start();

  return (
    <SafeAreaView style={styles .safe}>
      <Animated.View style = {[styles.view, flatAnimStyle]}>
        <FlatList ref={flatListRef} onScroll={onScroll} horizontal data = {imageList} renderItem = {({item})=>{
          return <Image source={{uri:item}} style={styles.image}/>
        }}/>
      </Animated.View>
      <Animated.View style = {[styles.iconBar, circleAnimStyle]}>
        {circles}
        <Animated.View style={[styles.circle, styles.selected, circleStyle]}></Animated.View>
      </Animated.View>
      <Animated.View style={[styles.thumbBar,thumbAnimStyle]}>
        {thumbnails}
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {flex: 1, justifyContent: "center"},
  view: {width: imageWidth, height: imageHeight},
  image: {width: imageWidth, height: imageHeight},
  iconBar: {flexDirection: "row", padding: 5},
  circle: {width: circleWidth, height: circleWidth, borderRadius: circleWidth/2, marginRight: circleMargin,
  backgroundColor: Colors.cyan100},
  selected: {position: 'absolute', backgroundColor: Colors.cyan500, top: 5},
  thumb:{width: imageWidth/6, height:imageHeight/6, marginRight: imageWidth/30},
  thumbBar: {flexDirection:"row", padding:5}
})

export default App;