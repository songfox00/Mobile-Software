import React, {useState, useCallback} from "react";
import type {FC} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {iPerson} from "./person";
import {styles} from './styles';

export type countType = {
    person: iPerson;
}

const CountsView: FC<countType> = ({person}) => {
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

    return (
        <View style={styles.countsView}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
                <Icon name="comment" size={24}
                color={Colors.blue500}/>
                <Text style={styles.text}>{person.counts.comment}</
                Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
                <Icon name="twitter-retweet" size={24}
                color={Colors.black}/>
                <Text style={styles.text}>{person.counts.retweet}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress = {modifyLike}>
                <Icon name={heartImage} size={24} color={Colors.red500}/>
                <Text style={styles.text}>{like}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CountsView;