// let hi = document.querySelector('h1').innerHTML;
// hi = "hello";
// console.log(hi)

// Null
// 값이 없다는 것을 의도적으로 명시하고 싶을 때 사용
// 변수에 null값을 할당하는 것은 변수가 이전에 참조하던
// 값을 더이상 참조하지 않겠다는 의미
// let name1 = 'yejin';

// console.log(name1);

// name1 = undefined;

// console.log(name1);

// undefined
// 자바스크립트에서 var, let 키워드로 선언한 변수는
// 값이 들어오기 전까지 undefined로 초기화가 된다.
// 변수 선언에 의해 확보된 메모리 공간에 값이 할당되기 까지
// undefined 상태가 된다.

// let a;

// console.log(a)

// number
//  NaN (Not a Number) Nan
// javascript는 대소문자를 구분

// string 문자, 문자열

// let text1 = 'hello1'
// let text2 = "hello2"
// let text3 = `hello3`

// let num = 4;
// let text4 = `hello${num}`;


// console.log(text1, text2, text3, num, text4);

// 형변환
// console.log(Number('0'));

// Not a Number
// console.log(Number('hello123123'));


// Boolean
// console.log(Number(true));
// true는 숫자 1 변환
// console.log(Number(false));
// false 숫자 0 변환

//  1. 정수(integer) int : 자연수의 0, 자연수에 마이너를 붙인 숫자
//  2. 실수(real number) float이라는 명령어로 사용 floating point (부동 소수점) : 소수점이 있는 숫자


// 정수 변환 : parse
// console.log(parseInt(123.123123));
// console.log(parseInt('123.123123'));
// NaN
// console.log(parseInt('qweqweqwe'));

// 연산자
// 1. 산술 연산자 : +, -, /, *, %
// console.log(30 + 10);
// console.log(30 - 10);
// console.log(30 * 10);
// console.log(30 / 10);

// 나머지 연산자 : %
// console.log(30 % 10);

// 거듭제곱 연산자 + **
// console.log(30 ** 10);


// 2. 대입 연산자 : -, +=, -=
// let num1 = 123;
// let num2 = 456;
// let str1 = "hello";
// let str2 = "world!";

// let num3, str3;

// num3 = num1 + num2;
// str3 = str1 + str2;
// console.log(num3);
// console.log(str3);

// let num4 = num1 - num2;
// let str4 = str1 - str2;
// console.log(num4);
// console.log(str4);

// 자바스크립트는 동적언어라 변수 선언시 타입 지정 x
// 값이 할당되는 순간 그 값에 따라 타입이 결정됨
// 자바스크립트가 타입스크립트에 비해 자유도와 유연성이 높다

// 단점
// 1. 예상 못한 버그가 발생할 확률이 높다.
// 2. 프로젝트 규모가 커질수록 ㅇ유지보수 비용 증가, 안정성 저하.

// let num(변수이름) = '숫자'; [자바 스크립트]


// 타입스크립트는 선언과 동시에 어떤 타입을 넘겨야 하는지 명확하게 작성해야한다.
// 해당 타입이 아닌 데이터를 넘긴다면 바로 컴파일러 에러 발생 -> 사전에 빠른 대응 가능
// 자신이 지정한 자료형하고 다른 값이 들어오면 에러 발생
// let num:number = '문자열' ( 에러 발생 ) [타입 스크립트]

// typescript 마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어이다.
// 자바스크립트에 타입을 부여한 언어 -> 자바스크립트 상위 버전.

// 자바스크립트는 대소문자 구분 O  소문자 a 와 대문자 A가 각각 다른 수가 된다.
// let A = '문자열';
// let B = 12345;
// let C = A + B;
// let D = 20 - '10';
// console.log(C, D);

// 3. 복합 대입 연산자
// let Num = 10;
// let result_1, result_2, result_3, result_4, result_5;
// result_1 = result_2 = result_3 = result_4 = result_5 = 10;

// console.log(result_1, result_5);

// 복합 대입 연산자 +=
// result_1 += Num;
// console.log(result_1);
// result_2 -= Num;
// console.log(result_2);

// 복합 대입 연산자 %=
// result_3 %= Num;
// console.log(result_3);

// 증가, 감소 연산자 ++, --
// let number, result;
// number = 10;
// console.log(number); // 10
// result = number++; // result = number / 먼저 결과값을 저장하고 후에 ++ 증감
// result에 num값이 복사되고, num++는 그 다음값 부터 num에 증가
// console.log(result); // 10
// console.log(number); // 11

// number = 10;
// console.log(number);
// result = ++number; // 이 행에서 ++가 반영이 되고, 증감된 결과값이 result에 저장된다.
// console.log(result);

// number = 10;
// console.log(number);
// result = number--;
// console.log(result);
// console.log(number);

// 비교 논리 연산자
// 1. 비교 연산자
// Number

// console.log(5 <= 10); // true(참)
// console.log("5" == 5); // true(참)
// console.log(5 >= 10); // false(거짓)
// console.log(false == 0); // true(참)
// console.log(true == "1"); // true(참)
// true는 자료형 : boolean / 숫자 1은 자료형 : number
// console.log(true === 1); // false(거짓)
// console.log(false != 0); // false(거짓)
// console.log(false !== 0); // true(참)

// string
// 알파벳 순서대로 비교
// console.log("a" < "z"); // true(참)
// 소문자 > 대문자
// console.log("a" < "A") // false(거짓)
// 알파벳 비교를 맨앞자리를 기준으로 비교한다.
// console.log("hello" > "hi"); // false(참)

// let text = 123123; 
// console.log(text);
// 자료형 확인
// console.log(typeof(text));
// console.log(typeof(false));

// 2. 논리 연산자
// &&(and), ||(or), !(NOT)
// a && b : 둘 다 true(참) 일 때.
// a || b : 둘 중 하나가 true(참) 일 때.
// !a == b : a와 b가 같지 않을 때.

// Scope (전역변수, 지역변수)
// 1. 지역변수(로컬 스코프)에서 전역변수(글로벌 스코프) 사용 가능

// let x = 1;
// let y = 2;
// let z = 3;

// console.log(x);
// console.log(y);
// console.log(z);

// function local1() {
//   let x = 4;
//   let y = 5;
//   let z = 6;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// 함수호출 방법 : 함수이름()
// local1();

// 2. 전역변수(글로벌 스코프)에서 지역변수(로컬 스코프)사용 불가능

// 전역변수(글로벌 스코프)
// let A1 = 1;
// let B2 = 2;

// function local2() {
//   let C3 = 3;
//   let B4 = 4;

//   console.log(A1);
//   console.log(B2);
//   console.log(C3);
//   console.log(B4);
// }

// local2();

// console.log(C3);
// console.log(B4);

// 3. 로컬 스코프 내에 다른 로컬 스코프 이중으로 겹칠 때
// double2 함수에서는 double1의 변수를 사용 할 수 있지만.
// double1 에서는 double2 변수 사용 x
// let e = 1;

// function double1() {
//   let f = 3;
//   let g = 4;

//   console.log(f);
//   console.log(g);
  
//   function double2() {
//     let h = 5;
//     let i = 6;
    
//     console.log(f);
//     console.log(h);
//   }
//   double2();
// }

// double1();

// 로컬 스코프는 전역 스코프의 변수를 가져다 사용할 수 있다.

// 조건문

// let apple_price = 55;

// if(apple_price >= 10) {
//   console.log("너무 비싸");
// } else if (apple_price < 5) {
//   console.log("저렴하군");
// } else {
//   console.log("Nice!")
// }


// 조건문2
// 19살 이상이라면 "성인입니다." html상에서 보이게
// 19살 이상이 아니라면 "미성년자입니다" html상에서 보이게

//let age = 20;
//let msg;

//if(age >= 19) {
  //msg = "성인입니다.";
  // document.write('<h1>성인입니다.</h1>')
  // document.write('<h1>' + msg + '</h1>');
  //document.write(`<h1>${msg}</h1>`);
//} else {
  //msg = "미성년자입니다."
  // document.write('<h1>미성년자 입니다.</h1>');
  // document.write('<h4>' + msg + '</h4>');
  //document.write(`<h1>${msg}</h1>`);
//}


// 3항 연산자
// let age = 14;

// let msg_another = age >= 19 ? "성인입니다." : "성인이 아닙니다."

// console.log(msg_another);

// 조건문 (Switch)
// 조건이 많은 경우 Switch문을 사용하는 것이 가독성이 좋다.
// case 0 : 실행문
// 조건이 맞으면 break 이후 비교하지 않고 Switch문을 종료 시킨다.
// default문은 Switch 가장 마지막에 위치
// default문 실행이 종료되면 Switch를 빠져나간다. break 생략

// let day_number = 3;
// let day = '';

// switch (day_number) {
//   case 0 : 
//     day = 'Sunday';
//     break;
//   case 1 :
//     day = 'Monday';
//     break;
//   case 2 :
//     day = 'Tuesday';
//     break;
//   case 3 :
//     day = 'Wednesday';
//     break;
//   case 4 :
//     day = 'Thursday';
//     break;
//   case 5 :
//     day = 'Friday';
//     break;
//   case 6 :
//     day = 'Saturday';
//     break;
//   default :
//     day = 'error!'
// }

// console.log(day);

// Switch 조건문2
// let browser = "Safari";
// let msg;

// switch (browser) {
//   case "Explorer" :
//     msg = "익스플로러";
//     break;
//   case "Chrome" :
//     msg = "크롬";
//     break;
//   case "Firefox" :
//     msg = "파이어폭스";
//     break;
//   case "Safari" :
//     msg = "사파리";
//     break;
//   case "Opera" :
//     msg = "오페라";
//     break;
//   default :
//     msg = "error!"
// }

// console.log(msg)


// for문 (=반복문)

// let index;

// function local_func() {
//   for(index = 0; index <= 10; index++) {
//     console.log(index);
//   }
// }

// local_func();

// 1부터 100까지 더한 값 출력
// 초기값 -> 조건식 -> 출력 -> 증감값
// 1. 초기값 let index = 1; 이라는 값을 메모리에 저장
// 2. 조건식 : i가 100이 될 때 까지 조건 실행
// 3. i = 1 <= 100; true 참이기 때문에 계속해서 증감한다. (설정한 조건까지 반복됨.)

function hund_func() {
  let final = 0;
  for(let index = 1; index <=100; index++) {
    final = final + index;
    // final = final + index
    // (위 값을 풀어쓴다면) 
    // final = 0 + 1;
    // 조건식이 만족 될 때 까지 ++로 값이 증감되면서 반복 실행.
  } 
  console.log(final);
}

hund_func();