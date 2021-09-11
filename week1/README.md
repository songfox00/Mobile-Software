# week1

## hello 디렉토리 자동으로 생성, 개발에 필요한 파일 다운
```
npx react-native init hello --template react-native-template-typescript
``` 
    
## hello 폴더를 새로운 vscode 창 열기
```
code hello
``` 

## 기본 구조
```
import React from "react"
import {SafeAreaView, TExt} from "react-native" //{사용할 컴포넌트 추가}
export default function App(){  //모바일 애플리케이션 실행 함수
    return(
        <SafeAreaView><Text>Hello world!</Text></SafeAreaView>  
        //const message= <SafeAreaView><Text>Hello world!</Text></SafeAreaView> 으로 수정 가능
    );
}
```

## 문제열에 변수 연결하려면 변수명을 {}로 감싼다.
```
const text=<Text>Hello world!</Text>
const text2=[<Text>Hello</Text>, <Text>world</Text>];   //문자열의 배열
const message=<SafeAreaView>{text}</SafeAreaView>
```

## faker 패키지 설치
```
>> cd node_modules
>> npm i faker
>> npm i -D @types/faker
>> cd ..
>> mkdir util
>> cd util
>> touch info.ts createPerson.ts
>> code info.ts createPerson.ts
```

## 객체 형식 파일(info.ts)
```
type info={
    id: string,
    birthday: Date,
    name: string,
    email: string,
    comments: string
}
export type {info}; //다른 소스코드에서 info.ts 파일의 info 타입을 import할 수 있게 해줌
```
    
