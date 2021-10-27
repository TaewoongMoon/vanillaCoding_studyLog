# Scope Introduction
- Scope: 우리가 작성하는 `코드의 접근 범위`를 의미한다.
```javascript
function foo () {
    var a = 1;
    console.log(a) 
}
foo()
```
- 순서
  - foo 함수가 선언되고 함수 내부에 어떤 코드들이 작성되어있는지 인식된다.
  - foo 함수가 마지막줄에서 실행이 되면 foo 내부 함수코드를 읽기 시작한다.
  - var는 함수 스코프기 때문에 foo 내부 함수 어느곳이든 쓸 수 있다.
  - 우리는 **foo함수의 스코프**라고 부른다.

#Scope Chain
- Global Scope: 변수가 어떠한 함수 내부에 있지 않은 경우에 우리는 해당 변수를 ***Global Scope***안에 있다고 한다.
- Global Scope는 최상위 계층이고 함수가 쓰여질때마다 하위계층으로 나뉘어진다.
- 상위 scope에서는 하위 scope를 참조할 수 없지만, 하위 scope에서는 상위 scope를 참조할 수 있다.

- 실행문 위치를 기준으로 값을 찾을 때 까지 하위 스코프에서 상위 스코프로 탐색을 한다.

```javascript
var a = 1
function foo (){
    var a = 2;
    console.log(a) // 2가 찍힌다.
}
foo()
```
- Scope Chain의 개념에 의해서 실행문이 시작된 위치를 시점으로 내부에서 먼저 a라는 선언된 변수를 찾는다.
- foo함수 내부에 var a = 2 가 선언되고 할당되었기때문에 콘솔에 찍히는 값은 2가되겠다.

```javascript
var a = 1;
function foo(){
    var a = 2;
    console.log(a); // 2가 출력된다.
}

console.log(a) // 1이 출력된다.
```
- 위의 예제에서 함수내부에있는 콘솔은 2가 찍힌다 (위의 예제와 같은 논리). 2번째 콘솔의 값이 1인 이유는 Global Scope에서
콘솔이 찍혔기 때문에 해당 범위에서 값을 찾는다. Global Scope 상위 스코프는 존재하지 않기때문에 var a =1 의 값이 읽힌다.

# Hoisting
Hoist: (장비를) 끌어올리다 라는 사전적 의미를 지니고 있다.
  - 자바스크립트에서는 모든 변수 선언문을 종속된 Scope내에서 최상위로 끌어올려지는 걸 의미한다.

```javascript
console.log(a)
var a = 1; // undefined
```
- undefined가 아닌 error가 출력되야할 것 같지만 Hoisting에 의해서 var a 라는 변수는 최상단으로 끌어올려진다.
```javascript
var a;
console.log(a)
a = 1;
```
## Function Expression(함수 표현식)
- Hoisting 모든 변수 선언문에 적용되는 흐름이기 때문에 함수 표현식도 마찬가지로 변수 선언문이 최상위로 끌어올려진다.
- 그래서 함수표현식을 사용할때에는 실행문과 함수를 대입하는 구문의 위치가 중요하다.
```javascript
d();
var d = function () {
  console.log('I am inside function d');
};
d();
```
- 위의 예시에서 var d 변수가 최상위로 올라가지만 var d 는 함수로 인식이 안되기 때문에 d()를 실행하는 순간 typeError가 출력된다.

## Function Declaration(함수 선언식)
- 함수 선언식 같은 경우는 함수 표현식과 다르게 함수 자체가 최상위로 끌어올려지기 때문에 위의 예시를 함수 선언식으로 표현한다면 실행이되어서 콘솔이 찍힌다.


# Primitive 종류(자료형)
- Boolean 