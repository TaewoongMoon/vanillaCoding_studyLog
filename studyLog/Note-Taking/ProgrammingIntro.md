중요 프로그래밍이란?

- 프로그램을 써내려가는 행위.

# 중요 키 포인트

- 결국, 프로그래밍은 사람이 하는 것이다. 나와 동료가 프로그램 설계를 위해 짠 코드를 보기 때문에 읽기 쉬운코드, 이해하기 쉬운코드가 핵심이다.
- 그렇다고 무조건 짦은 코드가 클린코드이고 읽기 쉬운코드는 아니다.
- 변수명, 함수명을 지을 때 신중하게 잘 지어야한다. 마치 `우리가 한국어 문장을 쓰는 것 처럼 말이다.`

# 개발자로써의 가치

- 개발을 잘 하는 사람과 일 잘하는 사람은 다르다.
- 프로그래밍(학문적 요소)뿐만 아니라 조직과의 소통, 리더쉽, 일 수행능력등 종합적으로 평가되는게 좋은 개발자이다.
- 개인적인 생각으로는, 이런 부분에서 다양한 분야에 종사한 비 전공자의 가치가 조금 더 부각되지 않을까?

# Machine Language (기계언어)

- `기계가 이해할 수 있는 언어`
- 운영체제에 따라 기계가 이해할 수 있는 언어는 조금씩 다르지만, 컴파일러를 통해서 프로그래밍 언어를 기계언어로 바꿔줘야 한다.
- 예) `Hello World` -> `0000101001010101010010101010`

# Assembly Language (어셈블리 언어)

- `컴퓨터 프로세서를 다루기 위한 가장 기본적인 (Low-level) 언어`
- CPU가 수행해야하는 직접적인 작업에 관련한 부분만 명령 가능하다.
- **장점**: 소프트웨어 엔지니어가 컴퓨터 실행에 관한 모든것을 통제, 제어 할 수 있다.
- **단점**: 하나부터 열까지 다 세세하게 명령을 해줘야한다.
- 어셈블리 언어의 단점을 해결하기 위해서 조금 더 추상화하여 나온 언어들이 `High-Level Language다`
- High-Level Language 예시) Python, Java, Javascript

# High-Level Language (고차 언어)

- High Level Language는 크게 두 가지로 나뉜다 (Compiled Language vs Interpreter Language)
- 컴파일 언어는 소스코드를 받아서 해당 언어를 특정 기계 언어로 변환한다
  - 컴파일언어 장점: 개발 시간은 오래걸리지만, 실행속도가 빠르다!
  - 컴파일언어 단점: 특정기계언어를 이해못하는 기계는 다른 언어로 호환해줘야한다 예) `Swift는 맥 랩탑에서만 가능하다..`
- 인터프리터 언어: 소스코드를 받아서 실시간으로 해당 언어를 번역해주고 기계언어로 변환한다
  - 인터프리터언어 장점: 컴파일언어와 달리 인터프리터가 특정 기계어로 번역해주기 때문에 모든 PC & 노트북에서 가능하다 예) `Javascript`
  - 인터프리터언어 단점: 한줄한줄씩 언어를 해석해서 실행하기 때문에, 컴파일언어보다 상대적으로 개발 후 실행속도가 느릴 수 있다.

# CLI & GUI

- UI(User Interface): 사용자가 화면을 어떻게 사용하는지에 대해 설명할 때 쓰이는 단어.
- CLI(CommandLine Interface) : **커맨드 라인**을 사용해서 입력
- GUI(Graphical User Interface): **이미지, 스크롤, 창**등을 활용해서 데이터 입력 예) IOS 개발 GUI(버튼, 텍스트, 등등)
- GUI는 편리하지만 속도가 느리고, 메모리소비도 심하다. CLI는 코드를 짜는 게 어렵지만 GUI에 비해 메모리소비도 적고 속도도 빠르다.
