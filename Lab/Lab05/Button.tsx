import React, {useCallback, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './src/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Button(){
    const [value, updateNum]=useState<string>('0');
    const modifyNum=useCallback((str: string)=>{
        if(str=='c'){
            updateNum('0');
        }
        else if(value=='0')
            updateNum(str);
        else
            updateNum(value+str);
    }, [value]);
    
    return(
        <View style={styles.view}>
        <View style={styles.view1}>
            <Text style={styles.text}>{value}</Text>
        </View>

        <View style={styles.view2}>
            <View style={styles.btnView}>  
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('7')}> 
                    <Icon name="numeric-7" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('8')}> 
                    <Icon name="numeric-8" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('9')}> 
                    <Icon name="numeric-9" size={65} style={styles.number}/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('4')}> 
                <Icon name="numeric-4" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('5')}> 
                <Icon name="numeric-5" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('6')}> 
                <Icon name="numeric-6" size={65} style={styles.number}/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('1')}>
                <Icon name="numeric-1" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('2')}> 
                <Icon name="numeric-2" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('3')}> 
                <Icon name="numeric-3" size={65} style={styles.number}/>
                </TouchableOpacity>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('0')}> 
                <Icon name="numeric-0" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}> 
                <Icon name="equal" size={65} style={styles.number}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>modifyNum('c')}> 
                <Icon name="alpha-c" size={65} style={styles.number}/>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}