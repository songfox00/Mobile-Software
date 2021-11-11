import React, {useMemo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createRandomPerson} from './src/createRandomPerson';
import ShowPerson from './src/ShowPerson';
import {styles} from './src/styles'

export default function Item(){
    const people = useMemo(() => {return new Array(3).fill(null).map(createRandomPerson)}, []);
    const peopleList = people.map((person, index)=>{
        return <ShowPerson person={person} key={index}/>
    });

    return (<View style={styles.itemView}>
        <Text style={styles.itemText}>News feed</Text>
        <ScrollView horizontal = {false}>
            <ShowPerson person={people[0]}/>
            <ShowPerson person={people[1]}/>
            <ShowPerson person={people[2]}/>
        </ScrollView>
    </View>);
}