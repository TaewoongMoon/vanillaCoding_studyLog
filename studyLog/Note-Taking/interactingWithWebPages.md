# DOM (Document Object Model)

- DOM은 언어와 크로스플랫폼으로부터 자유롭고 `XML 혹은 HTML`을 트리구조로 다루는 모델이다.

- DOM vs HTML
    - HTML은 브라우저에 원하는 것들을 보여주게끔 하는 설계도(문서)이다.
    - 실제로 브라우저에 렌더링에서 그리는 건 DOM이다.
- DOM은 조작가능하다는 점에서 **Interface(인터페이스)** 다. </br>
- 자바스크립트를 이용해서 HTML을 조작한다는 것은 사실 맞지 않는 말이다
    - HTML은 초기 렌더링을 위한 설계도이다.
    - 자바스크립트를 통해서 조작하는 것은 DOM에 접근해서 DOM을 조작하는 것이다.

# Selecting Elements

- `document.querySelector` :  css 셀렉터를 String 형태로 선택해서 해당 요소를 조작할 수 있다.
    - 똑같은 css class, id 혹은 css 셀렉터가 여러개 있는 경우에 첫번째 요소를 반환한다.</br>
- `document.querySelectorAll` : css 선택자와 맞는 DOM Node 요소들을 유사배열 형태로 반환한다.

- `document.getElementsByClassName('클래스 이름만 넣으면 된다 (.) 생략')`: 클래스와 해당하는 모든 DOM Node List를 반환한다.
- `document.getElementById('id 값만 넣으면 된다 (.) 생략')`: Id는 고유한 값이기 때문에 리스트가 아닌 요소 하나가 반환된다.
- `document.getElementsByTagName('해당하는 태그이름')` : 찾고자하는 태그 모든 요소들을 List로 반환한다.


- `span.parentElement` : 해당 태그의 부모요소를 잡을 수 있다.
- `span.nextElementSibling`: 해당 태그의 다음 요소를 잡을 수 있다.
- `span.previousElementSibling`: 해당 태그의 이전 요소를 잡을 수 있다.

- `span.children` : 부모태그의 자식 태그들을 리스트 형태로 반환한다.

# DOM 조작하기
- class 추가하기 : 
```javascript
var links = document.querySelectorAll('.storylink')
for(var i = 0 ; i < links.length ; i ++ ){
    links[i].classList.add('world');
}
// storyLink 클래스 노드에 접근해서 world라는 클래스를 추가한다.

for(var i =0; i < links.length; i++ ){
    links[i].classList.remove('world');
}
// 노드에 접근해서 클래스를 제거한다.

없으면 넣고 있으면 넣는다? toggle을 써주면 된다.
```

- `setAttributes` : 요소의 attribute를 추가하고싶다면 setAttribute('속성타입', '속성 값')을 넣어주면된다.
- `부모요소의 마지막에 노드 추가하기`: document.부모요소.appendChild('요소이름')
- `부모요소의 첫번째에 노드 추가하기`: document.부모요소.prependChild('요소이름')

# Events
- 사용자의 interaction에 따라서 대응을 해주도록 도움을 주는게 Events다.
```javascript
var link = document.querySelector('storylink')
link.addEventListener('mouseover', function (evt) { 
    console.log('123')
})
```

# 이벤트 객체
```javascript
document.querySelector('div').addEventListener('이벤트타입', function (evt) { 
 // 함수자체를 이벤트리스너라고하고 인자를 이벤트 객체라고 한다.
 console.log(event) 
})
```
- 이벤트 객체: addEventListener 메서드를 실행했을 때 해당 요소의 이벤트 정보를 가져온다.
- **EventTarget && CurrentTarget**  
  - event의 target: 타겟이 된 요소(element)가 출력이 된다.
  - event의 currentTarget: addEventListener를 실행한 대상이 되는 요소를 계속해서 출력한다.
  