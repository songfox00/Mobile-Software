import React, {useCallback, useState} from 'react';
import type {FC} from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {iPerson} from './person';
import CountsView from './CountsView';

export type personType={
    person: iPerson
}

const ShowPerson:FC<personType> = ({person}) =>{
    const avatarPressed = useCallback(() => {Alert.alert('Avatar pressed!');}, []);
    const deletePressed = useCallback(() => {Alert.alert('Delete pressed!');}, []);

    const [like, updateHeartCount] = useState<number>(person.counts.heart);
    const [heartImage, updateHeart] = useState<string>(person.counts.iLike ? "heart" : "heart-outline");
    const modifyLike = useCallback(() => {
        if(person.counts.iLike){
            person.counts.iLike = false;
            updateHeartCount((heart: number) => {return --heart;});
            updateHeart("heart-outline");
        }
        else{
            person.counts.iLike = true;
            updateHeartCount((heart: number) => {return ++heart;});
            updateHeart("heart");
        }
        }, []);

    return (<View style={styles.view}>
        <View style={styles.leftView}>
            <TouchableOpacity onPress={avatarPressed}>
            <Image style={styles.avatar} source={{uri: person.avatar}}/>
            </TouchableOpacity>
        </View>
        <View style={styles.rightView}>
            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.email}>{person.email}</Text>
            <View style={styles.dateView}>
                <Text style={styles.text}>{person.createdDate.toDateString()}</Text>
                <TouchableOpacity onPress={deletePressed}>
                    <Icon name="trash-can-outline" size={26}
                    color={Colors.lightBlue500}/>
                </TouchableOpacity>
            </View>
            <Text style={[styles.text, styles.comments]} numberOfLines={3}>{person.comments}</Text>
            <Image style={styles.image} source={{uri: person.image}}/>
            <CountsView person={person}/>
        </View>
    </View>);
}

export default ShowPerson;