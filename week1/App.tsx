import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {create} from './util/createPerson'; //createPerson.ts로부터 create 함수 사용

function App(){
const person = create();    //create()이 반환한 info 타입의 값 대입
return(
<SafeAreaView><Text>{JSON.stringify(person,
null, 2)}</Text></SafeAreaView> // person 객체를 보기 좋게 출력
);
}
export default App;