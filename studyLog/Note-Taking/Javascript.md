# 자바스크립트

- 전통적으로 웹 페이지를 가꾸는데에 주로 쓰임.
- 원래 주로 사용되는 환경은 웹 브라우저였지만, 요즘에는 백엔드(Node.js), 핸드폰 어플리케이션, 데스크탑 어플리케이션 등 다양한 곳에 쓰이고 있다.
- 자바스크립트는 처음에 배우기에 진입 장벽이 낮은 언어, 하지만 배워나가야 할 폭과 깊이는 넓고 깊다.
- 이론적인 것도 중요하지만, 실습을 통해서 어떻게 쓰이는지 아는것도 매우 중요하다.

# 역할

- HTML은 웹페이지의 뼈대, CSS는 뼈대를 꾸미는 역할이라하면, Javascript는 동적으로 웹 페이지가 동작하도록 해준다.
  - 가령 마우스를 버튼위에 올렸을 때 색깔이 변한다거나 특정 **이벤트**를 했을 때 변경되게끔 도와주는 게 Javascript의 역할이다.
- 예) Vanilla_Coding 예제
    <header>
        <div>
        </div>
    </header>
  const header = document.querySelector('header')
  const input = document.querySelector('input')
  input.onkeydown = function changeHeader(){
  header.textContent = input.value
  }

> 예제를 통해서 보면 query 식별자를 통해서 Javascript는 HTML을 불러오고 input.onkeydown이라는 이벤트를 이용해서 클릭 또는 입력을 감지할 수 있다. 또한, 감지된 값을 HTML에 적용하여 변경도 할 수 있는 역할을한다.
