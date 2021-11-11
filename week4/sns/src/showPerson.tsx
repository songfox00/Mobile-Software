import React, {useCallback} from 'react';
import {View, Text, Image, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {iPerson} from './person';

const avatarSize = 50;

export default function showPerson (person: iPerson){
    const avatarPressed = useCallback(() => {Alert.alert('Avatar pressed!');}, []);
    const deletePressed = useCallback(() => {Alert.alert('Delete pressed!');}, []);

    return (
        <View style={styles.view}>
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
                        <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500}/>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text, styles.comments]} numberOfLines={3}>{person.comments}</Text>
                <Image style={styles.image} source={{uri: person.image}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {flexDirection: 'row', backgroundColor: Colors.lime100, padding: 5, borderWidth: 2, borderColor: Colors.lime900},
    leftView: {padding: 5},
    rightView: {flex: 1, padding: 5, marginRight: 10},
    avatar: {borderColor: Colors.blue500, borderWidth: 2, width: avatarSize,
    height: avatarSize, borderRadius: avatarSize/2},
    name: {marginRight: 5, fontSize: 22, fontWeight: '500'},
    email: {textDecorationLine: 'underline', color: Colors.blue500,
    textDecorationColor: Colors.blue500},
    dateView: {flexDirection: 'row', justifyContent: 'space-between', padding: 3, marginTop: 5},
    text: {fontSize: 16},
    comments: {marginTop: 10, fontSize: 16},
    image: {height: 150, marginTop: 15}
});