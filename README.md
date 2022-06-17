# start-fe-2022

[프로젝트 링크](https://bejewelled-panda-beb748.netlify.app/)

<br/>

+ 학과: 컴퓨터공학전공  
+ 학번: 2017106119
+ 이름: 염상권

<br/>

## 요구사항

- [X] index.html과 같은 모습 구현, 미리보기
- [X] index.html안에 주석내용 잘 살펴서 구현하기
- [X] class.json은 수업15개에 맞게 나머지 속성 추가(현재 3개만 존재)
- [X] quiz.json도 본인에 맞게 속성값 입력 필요
- [X] 퀴즈결과 html은 모두 배포하여 previewUrl에 입력
- [X] fetch()를 통해서 class.json,quiz.json 가져오기 구현
- [X] json시에 로딩중에 로딩스피너 구현 (마크업 위치 표시)
- [X] 학습리스트 필터 (마크업 위치표시)
- [X] 모두: class.json 모든 속성 표시
- [X] 도움링크: class.json에서 links.length>0 이상인 속성들만 표시
- [X] git: 실습한 git주소가 있는 속성만 표시
- [X] 최신순: date가 최신순으로 소팅해서 모든 속성 표시
- [X] 퀴즈리스트 필터 (마크업 위치표시)
- [X] 모두: quiz.json 모든 속성 표시
- [X] git: 실습한 git주소가 있는 속성만 표시
- [X] webpack 빌드 환경 구성
- [X] JS 에러 발생하면 안됨
- [X] JS 네이티브 함수 사용, 최신 DOM 사용하여 구현
- [X] JS 모듈화,함수화

<br/>

## 폴더 구조

```
start-fe-2022
 ┣ src
 ┃ ┣ api
 ┃ ┃ ┣ _axios.js
 ┃ ┃ ┗ index.js
 ┃ ┣ components
 ┃ ┃ ┣ Class.js
 ┃ ┃ ┣ Quiz.js
 ┃ ┃ ┗ index.js
 ┃ ┣ style
 ┃ ┃ ┗ main.css
 ┃ ┣ utils
 ┃ ┃ ┣ API_ROOT.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ querySelector.js
 ┃ ┃ ┗ querySelectorAll.js
 ┃ ┣ app.js
 ┃ ┗ main.js
 ┣ .gitignore
 ┣ index.html
 ┣ package.json
 ┣ webpack.config.js // webpack 설정
 ┗ yarn.lock
```
