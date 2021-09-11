import faker from "faker";  //faker 패키지로부터 faker 객체 사용
import {info} from "./info";     //info.ts로부터 info 타입 사용

const create = function(){
    var person: info; //info 타입의 변수 person 선언
    person = {
        id: faker.datatype.uuid(),
        birthday: faker.date.recent(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        comments: faker.lorem.paragraph()
    }
    return person;
}

/*
export const create = ()=> :info ({
        =id: faker.datatype.uuid(),
        birthday: faker.date.recent(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        comments: faker.lorem.paragraph()
}); //함수를 정의하고 내보내기까지 한번에 가능
*/
export {create};    //다른 소스코드에서 createPerson.ts 파일의 create 함수 사용 가능