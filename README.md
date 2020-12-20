# React JS로 영화 웹 서비스만들기

>  노마드코더 클론코딩

### Why React

* 페이스북이 만듬 - 에어비엔비, npm, 넷플릭스, 스포티파이, slack 등등.. 
* 프로트엔드 개발에서 64%가 React가 사용하고 있음
* 자바스크립트로 이루어져 있기 때문에 따로 공부할 필요 없이 자바스크립트 개발자로 될 수 있음
* 엘레강스, 패키지 종류가 많아서, 문서가 잘 정리되어있어서, 빨라서등  이유는 많아
  * 가장 큰 이유는 유명하고 사람들이 좋아하고, 큰 회사들이 리액트를 쓰고 있어서야



```bash
# 리엑트 app 생성
npx create-react-app {프로젝트이름}
```



### How does React work?

* react는 내가 쓰는 모든 요소를 생성한다는 것임

* 자바스크립트와 함께 그것들을 만들고 HTML로 밀어 넣는 것
*  모든 react application을 div 사이에 넣는다.
* index.js에 reactDom.render을 통해 document.getElementById에 많는 id에 render을 한다.
  * App.js에 있는 컴포넌트 내용을.. render한다.

##### 빠른이유

> react는 소스 코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고 있어서..

1. 빈 HTML을 load함
2. react가 HTML을 밀어넣음 (component들을.. (app.js와 같은))
   * virtual DOM(virtual Document Object Model)
     * 소스코드에는 존재하지 않는 것을 의미 (react가 이것을 만들어주는 거임)  ---> (brower에서 마우스 오른쪽 클릭하고 [소스보기]를 하면 *소스코드 내용*이 보이지 않는다.) == **react가 빠른 이유지!!!(virtual이고 존재하지 않으니까)**

* public

  * **index.html** 

    ```html
    <div id ="root">
    	/* {모든 react application을 넣는다.} */
    </div>
    ```

* src

  * index.js

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    
    ReactDOM.render(
        <App /> document.getElementById('root')
        /* index.html의 태그의 id와 동일해야됨 */
    );
    ```

  * App.js  

    ```js
    import React from "react";
    
    /* 컴포넌트, 태그안에 집어넣을 값 입력 */
    function App() {
      return <div>Hello!!!</div>
    }
    
    export default App;
    ```

    





