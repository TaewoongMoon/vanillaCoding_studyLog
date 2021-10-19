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
