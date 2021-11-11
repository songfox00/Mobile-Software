import {StyleSheet} from "react-native";
import {Colors} from 'react-native-paper';
const avatarSize = 50;
export const styles = StyleSheet.create({
itemView: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
itemText: {fontSize: 20, color: Colors.white},
view: {flexDirection: 'row', backgroundColor: Colors.lime100,
padding: 5, borderWidth: 2, borderColor: Colors.lime900},
leftView: {padding: 5},
rightView: {flex: 1, padding: 5, marginRight: 10},
avatar: {borderColor: Colors.blue500, borderWidth: 2, width:
avatarSize, height: avatarSize, borderRadius: avatarSize/2},
name: {marginRight: 5, fontSize: 22, fontWeight: '500'},
email: {textDecorationLine: 'underline', color: Colors.blue500,
textDecorationColor: Colors.blue500},
dateView: {flexDirection: 'row', justifyContent: 'space-between',
padding: 3, marginTop: 5},
text: {fontSize: 16},
comments: {marginTop: 10, fontSize: 16},
image: {height: 150, marginTop: 15},
countsView: {flexDirection: 'row', padding: 3, justifyContent:
'space-around'}
});