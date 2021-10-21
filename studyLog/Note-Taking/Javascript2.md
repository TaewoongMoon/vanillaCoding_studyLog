# Function

- 여러개의 코드 구문을 한데 묶어서 실행할 수 있는 것을 의미.
- 재사용성 및 가독성을 높이기 위해서 많이 사용한다.
- 이런 경우에 함수를 이용하여 조금 더 깨끗하고 정리된 코드를 작성 할 수 있다.

```javascript
// 함수 선언
function add(x, y) {
  // 함수 선언에 필요한것들을 정의 (x,y) : 매개 변수
  var result = x + y;
  console.log(result);
  return result;
}
// 아무 의미 없던 add라는것에 함수를 정의하면서 성질을 가지게 되고 사용할 수 있게 된다.
```

- 함수 선언에는 두가지 방법이 있다 (함수 선언식 & 함수 표현식)

- 각자 쓰임에 따라서 장점 및 단점을 가지고 있다

  - 함수 표현식 (const a = function()) : 클로저 활용, 매개 변수에 함수를 넘겨 사용할 수 있다. (일급 객체)
  - 함수 선언식 (function(){}): 호이스팅에 영향을 받아서 다양하게 선언문을 사용하여 쓸 수 있다.

- 함수를 `선언`하는것과 `실행` 하는것은 완전히 다른 개념이다.

  - 실행 : 실행하고자하는 함수명과 ()를 붙여주면된다.
  - 선언 : 특정 함수내에 어떤 메소드를 실행시킬건지 코드로 적어준다.

- 실행할 때 전달해주는 값들을 **인자(argument)** 라고한다.

## 함수의 Return

- 함수 내부에서 return 구문을 사용할 수 있다. 반드시 return이 있어야만 하는건 아니다.
  1. return을 써줌으로써 **_함수종료_**를 시킬 수도 있다.
  2. 값을 반환해주기도 한다.

# 배열

- 어떤 값들을 순서대로 저장할 수 있는 구조이다. 대괄호를 이용해서 배열을 만든다.

```javascript
var fruits = ["appple", "orange", "grape"]; // 배열안의 각 값들을 요소라고 부른다.
```

- 배열은 다른 타입들도 같이 넣어서 사용할 수 있다. (하지만, 그렇게 **사용**하지 않는다).
- 배열은 다양한 method를 가지고 있다.
  - forEach
  - push
  - pop (배열 뒤에서부터 항목 제거)
  - shift (배열 앞에서부터 항목 제거)
  - unshift(배열 앞에서부터 항목 추가)
  - indexOf
  - slice(인덱스기준으로 배열을 잘라서 새로운 배열 반환, slice함수안에 아무런 인자를 넣지않는다면 그냥 shallowCopy)

# Object(객체)

- key, value 형태로 값을 저장할 수 있는 구조를 말한다.
- key에 따옴표를 써도 되긴하지만, 식별자로 허용되지 않은 것을 사용할 경우만 사용한다.
  예)

```javascript
person1 = {
  name: "문태웅",
  age: 26,
  "living place": "안양",
};
// living place사이에 space를 식별자가 허용하지 않기때문에 따옴표를 사용해준다.
```

- 변수명 = 식별자

> 객체(Object) 순회하기

- for in 문을 통해서 객체를 순회할 수 있다!

```javascript
const sample = {
  one: 1,
  two: 2,
  three: 3,
};
for (let prop in sample) {
  conosle.log(prop); // one, two, three
  console.log(sample[prop]); // 1, 2, 3
}
```

- 여기서 for...in 문과 for ... of 문의 차이는 무엇일까?
  - `for...in` : 객체를 순회할때 쓰는 문
  - `for...of` : 배열을 순회할때 쓰는 문 (배열에 for...in을 써도 배열은 객체이기 때문에 key(인덱스)값을 반환한다.)

```javascript
const property = "name";
const obj = {
  [property]: "Taewoong Moon",
};
obj.property; // undefined
obj.name; // Taewoong Moon
```

- 위와 같이 변수의 문자열을 Object의 key값으로 사용하고 싶다면 key값에 대괄호 []를 써주면 된다.

## Dot Notation, Bracket Notation

- Dot Notation: .을 통해서 객체 property에 대한 value를 가져올 수 있다. 만약에 허용되지 않는 식별자를 사용할 경우 bracket Notation을 사용한다.
- Bracket Noation: []을 통해서 객체 property에 대한 value를 가져온다. 그리고 key 값을 알지 못하는 경우 []을 써서 값을 가져온다.

> 일반적으로 Dot Notation을 많이 사용한다.

- 앞서 말했다시피 배열과 함수또한 객체다. 함수에도 속성을 추가해줄 수 있지만 그렇게 거의 사용하지 않는다.
