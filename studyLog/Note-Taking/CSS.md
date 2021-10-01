# CSS - HTML을 통해서 뼈대를 구성한 부분들을 예쁘게 꾸미는 역할

- 무엇을 바꾸고 싶은지? (a tag? p tag? 특정 Id tag?)
- 어떻게 바꾸고 싶은지?
- 예) `body{color: blue;}` body부분은 어떤 부분을 바꾸는 지 명시하는 부분, color: blue는 어떻게 바꿀지 명시하는 부분이다.

## Selectors(선택자) - CSS를 다양한 방법으로 변경가능하다.

1. Type (태그 종류) 예) `h1{color: blue}`
2. Class (HTML의 요소들의 클래스 사용) `.클래스이름 {color: blue}`
3. ID `<div id = "box"></div>, #box{color: blue}`
4. Compound - 여러개의 선택자들을 동시에 나열하는 방식 `h1, h2, #box {font-family: Arial}`
5. Descedent - 특정요소의 하위요소를 선택해서 변경한다 `#nav li{background: blue}`
6. Child - 부등호 기호를 선택하여 요소의 직속 자식 요소들을 선택해서 변경한다. `# list > li {color: blue}`

**Descendent와 Child의 차이점** : Descendent는 하위요소들이 직속자식이든 손녀든 상관없이 전부다 적용하는 반면에 Child는 직속자식만 변경한다.

7. Universal - 페이지의 모든 요소들을 변경한다. 예) `*{color: blue}`
8. Attribute - 속성으로 HTML 요소를 선택하여 변경한다 예) `<img src = "myimage.jpg" alt ="Cat"> img[alt="Cat] {border: 1px solid black}`

9. X + Y - 인접 선택자. 앞의 요소 바로뒤에 있는 요소 하나만 선택한다 `ul + p {color: red};`

10 X ~ Y - 형제 선택자. 인접 선택자와 유사. 앞의 요소 바로 뒤에오는 모든 요소들을 선택한다. `ul ~ p {color: red};`

11. `X[href*= "들어갈String"]`. 별표는 입력값이 속성값 안 어딘가에 무조건 포함이 되어있어야한다.`a[href*="naver"]{color: red};` 속성값중에 naver가 포함된 요소들만 색깔을 빨간색으로 변경한다.

12. 이 외에도 가상요소 before, after, hover, not(negation)등 많이 있다.

- **가상클래스란** 별도의 class를 지정하지 않아도 지정한것처럼 요소를 선택할 수 있다.

## CSS Layout

- Block vs Inline
  - Block: 새로운 줄에서 시작, 위 아래로 쌓이는 형식, 사용가능한 최대치의 폭을 사용하게 된다. Block요소는 또 다른 Block 혹은 Inline 요소를 자식으로 가질 수 있다.
  - Inline: 새줄에서 나타지않고, 줄줄이 이어붙는다. 폭은 컨텐츠의 양만큼 차지한다. Inline요소는 다른 Inline요소를 자식으로 품을 수 있지만, Block요소를 자식으로 품을 수 없다.

## Block 요소들을 수직이아닌 가로로 세우고 싶다면?

- Flex 혹은 Inline-Block을 이용하면 된다.
- Ex) `section, aside {display: inline-block}`
- 조금 더 정밀한 배치를 원한다면?
  - Position: releative, absolute를 사용해보자.
  - position: relative를 사용하여 top, right, bottom, left등의 값을 지정해줄 수 있다.
  - position: absolute를 사용하면 기존의 위치는 유지가 되지않는다. 가장가까운 부모 요소중 position: relative가 적용된 요소를 찾고 해당 요소 부모요소 위치에서 시작. 부모 요소 중 position:relative가 없다면 전체 페이지를 기준으로 위치가 잡힌다.
