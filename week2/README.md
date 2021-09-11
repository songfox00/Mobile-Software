## Button
```
<Button title="[버튼에 쓸 텍스트]" OnPress={[버튼 클릭시 수행할 함수]}/>
```

## Alert
```
Alert.alert("[알림 타이틀]", "[알림 내용]");

//버튼 2개 생성
Alert.alert("[알림 타이틀]", "[알림 내용]",
    [
        {text:"[왼쪽 버튼 이름]", onPress:[실행 함수]},
        {text:"[오른쪽 버튼 이름]", onPress:[실행 함수]}
    ]
);
```

## 또 다른 형태의 버튼
```
TouchableOpacity: 눌렀을 때 투명도가 달라지는 버튼
TouchableHighlight: 눌렀을 때 주변이 강조되게 하는 버튼
```

## TextInput 속성
```
defaultValue: 초깃값
onChangeText: 텍스트 입력 부분이 변경되었는지 여부
placeholder: 빈칸일 때 흐릿하게 보여줄 문구
editable: 작성 가능한지 여부
keyboardType: 입력할 수 있는 텍스트 속성(일반, 숫자, 이메일주소 등)
onFocus: 포커스 되었는지 여부
onBlur: 포커스를 잃었는지 여부
onEndEdigint: 텍스트 입력이 끝났는지 여부
```

## Style 속성
* Component에 style 속성 부여하기
```
<[컴포넌트 이름] style={{[각종 스타일 객체 값]}}>
<SafeAreaView style={{
    flex:1,
    backgroundColor:"blue"
}}>
```
* 중괄호를 2개 넣는 이유
    + 바깥쪽 중괄호: JSX 구문 안에 Javascript 구문을 넣기 위해
    + 안쪽 중괄호: Javascript 형태의 객체를 의미

