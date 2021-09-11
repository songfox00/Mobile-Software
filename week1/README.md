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
    );
}
```

