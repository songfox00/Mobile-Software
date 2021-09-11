type info={
    id: string,
    birthday: Date,
    name: string,
    email: string,
    comments: string
}
export type {info}; //다른 소스코드에서 info.ts 파일의 info 타입을 import할 수 있게 해줌