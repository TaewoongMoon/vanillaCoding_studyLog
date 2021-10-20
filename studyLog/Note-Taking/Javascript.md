# 자바스크립트

- 전통적으로 웹 페이지를 가꾸는데에 주로 쓰임.
- 원래 주로 사용되는 환경은 웹 브라우저였지만, 요즘에는 백엔드(Node.js), 핸드폰 어플리케이션, 데스크탑 어플리케이션 등 다양한 곳에 쓰이고 있다.
- 자바스크립트는 처음에 배우기에 진입 장벽이 낮은 언어, 하지만 배워나가야 할 폭과 깊이는 넓고 깊다.
- 이론적인 것도 중요하지만, 실습을 통해서 어떻게 쓰이는지 아는것도 매우 중요하다.

# 역할

- HTML은 웹페이지의 뼈대, CSS는 뼈대를 꾸미는 역할이라하면, Javascript는 동적으로 웹 페이지가 동작하도록 해준다.
  - 가령 마우스를 버튼위에 올렸을 때 색깔이 변한다거나 특정 **이벤트**를 했을 때 변경되게끔 도와주는 게 Javascript의 역할이다.
- 예) Vanilla_Coding 예제

```javascript
const header = document.querySelector("header");
const input = document.querySelector("input");
input.onkeydown = function changeHeader() {
  header.textContent = input.value;
};
```

> 예제를 통해서 보면 query 식별자를 통해서 Javascript는 HTML을 불러오고 input.onkeydown이라는 이벤트를 이용해서 클릭 또는 입력을 감지할 수 있다. 또한, 감지된 값을 HTML에 적용하여 변경도 할 수 있는 역할을한다.

# Commenting in Javascript

- // or /\* \*/ 을 통해서 자바스크립트 코드위에 설명(주석)을 달 수 있다.

# Variables (변수)

- 종류는 세개의 타입이 있다. (var, let, const). **ES2015** 이후부터는 호이스팅 이슈와 코드블럭 범위의 이유로 var는 거의 쓰지 않는다.

```javascript
var a = 1; // '='의 역할은 값을 할당해주는 역할을 한다. a라는 변수에 1을 할당하는 expression이다.
var vanilla_coding = function () {
  return "Progress";
}; // 위 expression의 a나 vanilla_coding를 Identifier라고 부르는데 몇가지 규칙이있다.
```

- Identifier 규칙
  1. 알파벳, \_(underscore)등은 시작언어로 사용할 수 있다.
  2. 숫자는 시작언어로 사용할 수 없다.
  3. 예약어 (Reserved Words)는 사용할 수 없다 [ES2015 예약어목록](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#%ED%82%A4%EC%9B%8C%EB%93%9C)

# Boolean

- 단 두가지 값만 존재한다. `true` 혹은 `false`
- 예) var o = true;

# Undefined vs null

- Undefined와 null은 둘다 `없다`라는 비슷한 의미를 지니고 있다. 하지만 개발자들끼리는 Undefined와 Null의 쓰임 형태가 다르다.
- **_undefined_**: 말 그대로 정의되지 않았다. 보통 변수가 선언이 되지 않고 값이 할당되지 않은 상태를 나타내기 위해서 `undefined`가 많이 쓰인다.
- **_null_** : 값이 없다는것을 의도적으로 표현하고 싶을 때 쓰인다.

```javascript
var tempNumber = 2;
tempNumber = null; // 2라는 값을 더이상 할당하지않고 더이상 사용하지 tempNumber라는 변수를 더이상 사용하지 않을 때 null을 사용한다
```

# Numbers

- 우리가 알고 있는 숫자랑 똑같다. 연산을 할 수 있는 구조이다.
- Numbers를 통해 `숫자 연산, 비교, 같은 수 판별, 증가` 같은 것을 할 수 있다.
- 유효하지 않은 연산 판별하기

```javascript
var a = 0;
var b = 0;
var c = a / b;
console.log(c); // NaN (Not a Number의 약자)
```

- 이렇게 유효하지 않은 식별자를 판별하고 싶을 때 같은 수 판별처럼 NaN을 구분하지 않는다.

```javascript
console.log(c === NaN); // false라고 값이 반환된다.
console.log(isNaN(c)); // 이런식으로 NaN이 맞는지 아닌지 구별가능하다.
```

# 문자열

- 텍스트 형태를 String(문자열)이라고 부른다.
- 문자열의 `붙이기(String+String), 비교, 길이(.length), 인덱스`를 찾아서 원하는 것을 해결할 수 있다.
- 문자열 메서드 (내장함수) 종류

```javascript
"6".repeat(3);
"hi ken".includes(" ke");
"what are you doing?".startsWith("what ");
"I am doing FiNe".endsWith("iNe");
"Are you sure?".indexOf(" yo");
"Yeah I am sure".slice(2, 5);
"I?doubt?that".split("?");
"Why would you doubt my word?".split("");
"You hAve BeEn DiSHonest".toLowerCase();
"No wAy!".toUpperCase();
```

# Types(타입)

- Javascript에서 다루는 모든 값의 타입들은 7가지안으로 분류된다
  - String Type (문자열)
  - Number Type (숫자)
  - Boolean Type (true, false)
  - Undefined
  - Null
  - Object Type (배열, 함수, {} 모두 다 객체에 포함됨)
  - Symbol Type : 어느 특정 Object에 고유 키값을 부여해서 unique함을 살리고 싶을 떄 사용된다. `weak encapsulation or hiding` 형태라고도 불린다.

# Logical Operators

- Logical Not Operator (!을 이용해서 표현한다)
- Javascript의 값들을 자료형에 따라 7가지로 나눌수도 있고, Truthy or Falsy로 나눌 수 있다.
  - Falsy한 값들을 제외한 모든 값들을 Truthy로 보는게 쉬울 것이다.

```javascript
// Falsy값 목록
0 - 0;
false;
undefined;
null;
("");
""``;
NaN;
```

## Logical OR Operators

- `||`로 표현한다.
- `true`나 `false` 값이 아닌, 피연산자(operand) 값이 반환된다.
  - 연산 방식
    1. 연산자를 기준으로 왼쪽부터 Truthy 값을 찾는다.
    2. Truthy값을 찾는 경우, 연산을 중지하고 해당 값을 반환한다.
    3. 마지막까지 Truthy한 value를 못찾을 경우, 마지막에 위치한 값을 반환한다.

## Logical AND Opeartors

- `&&`로 표현한다.
- `true`나 `false` 값이 아닌, 피연산자(operand) 값이 반환된다.
- 연산자를 기준으로 왼쪽부터 Falsy 값을 찾는다.
- 마지막까지 Falsy값을 찾지 못한경우, 마지막에 위치한 값을 반환한다.
- AND의 연산자 순위가 OR의 연산자 순위보다 높다. Grouping이 되어있지 않은 상태라면 AND가 먼저 실행된다.
