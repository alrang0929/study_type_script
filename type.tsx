// 타입 스크립트 기본 문법
// let a: number = 1;
// let a1 = 1; //속성추측을 이용한 문법
// let b: string = "1";
// let c: boolean = true;
// let d: boolean[] = [true]; // array

// const player_low = {
//   name: "nico",
// };
// player.name = 1

/* 
여기서 문제
player들이 있음,
전부 가지고 있는 것: name
일부만 가지고 있는 것: age

*/
/************************************************************** 
 
  if (
  player.age &&
  player.age < //값이 undefined일때 조건문으로 사용하는 방법
    10) {
}
 
const playerNico: {
  // 타입을 선언
  name: string;
  // key ? : type = ?은 옵셔널 연산자, 즉 age가 있어도 되고~ 없어도 되면? "?"을 추가
  age?: number;
} = {
  // 실제 값이 들어가는 곳
  name: "nico",
};

const playerLynn: {
    // 타입을 선언
    name: string;
    // key ? : type = ?은 옵셔널 연산자, 즉 age가 있어도 되고~ 없어도 되면? "?"을 추가
    age?: number;
  } = {
    // 실제 값이 들어가는 곳
    name: "lynn",
    age: 12
  };

이렇게 같은 코드가 반복되면? 섹시하지 않음!
이런 경우엔 Alas(별칭) 타입을 생성할 수 있음

 **************************************************************/


// const nico : Player = {
//   // 실제 값이 들어가는 곳
//   name: "nico",
// };

// const lynn : Player = {
//   // 실제 값이 들어가는 곳
//   name: "lynn",
//   age: 12,
// };

// 함수에 타입선언 하는 방법

// 별칭타입 생성
type Age = number;
type Player = {
 readonly name: string; //readonly : ㄹㅇ 읽을 수만 있는 값, 수정 불가
  age?: Age; //이런 식으로도 사용 가능 number or undefinde
};

function playerMaper(name:string): Player{
    return{
        name
    }
}
const nico = playerMaper("nico");
nico.age = 12;


// any를 쓰는 순간 typeScript의 기능 상실, any를 써서 타입스크립트의 보호 장치를 빠져나왔기 때문

// TypeScript에서만 존재하는 타입

// 어떤 타입인지 모르는 변수를 어떻게 해야될까?

let a:unknown;
// void : 빈값
// naver : 함수가 절대 retrun하지 않음, 리턴하지 않고 에러를 발생시킬 때 사용

// let b = a+1 // a type이 unknown이기 때문에 허용해주지 않음

if(typeof a === 'number'){
  let b = a+1 // 여기서는 허용됨, 왜? 들어온 a 의 타입은 number 니까
}

// 이런식으로도 사용 가능
function hello(name:string|number){
  if(typeof name === 'number'){
    name 
  }else if(typeof name === 'string'){
    name 
    
  }
}