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
// 별칭타입 생성
type Age = number;
type Player = {
  name: string;
  age?: Age; //이런 식으로도 사용 가능
};

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
function playerMaper(name:string): Player{
    return{
        name
    }
}
const nico = playerMaper("nico");
nico.age = 12;