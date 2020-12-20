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

# 리엑트 실행  - localhost 유지하고 refresh됨
npm start
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
        <App />,  							/* component의 형태 */ 
        document.getElementById('root') 	/* index.html의 태그의 id와 동일해야됨 */
    );
    ```

  * App.js  

    ```js
    import React from "react";
    
    /* 컴포넌트(component), 태그안에 집어넣을 값 입력 */
    function App() {
      return (
          <div>
          	Hello!!!
          </div>
      );
    }
    
    export default App;
    ```





### component?

>  HTML을 반환하는 함수

##### JSX

* javascript + HTML. 즉) 자바스크립트에 html 문법같이 쓴다 뭐 이런말인듯

* Component를 만들고 어떻게 사용하는지에 대한 것 - component는 대문자로 시작해야함 

* 재사용 가능한 component를 할 수 있음

* html의 id처럼 property의 name을 줄 수 있어

* react masic에서 react는 우리가 전달한 props를 argument로 가져가는 일을 함

  

##### 주의점

* React Application은 한번에 하나의 component만 rendering할 수 있다!!

  * index.js에는 하나의 컴포넌트가 와야되는데 여러개의 컴포넌트를 집어 넣고 싶다면 app.js컴포넌트에 다른 컴포넌트를 추가해서 가져와야한다.

  ```js
  //app.js
  import React from "react";
  import Potato from './Potato';		//다른 컴포넌트를 app.js에 import시킨다.
  
  function App() {
    return <div>
      <h1>Hello!!!</h1>
      <Potato />
    </div>
  }
  
  export default App;
  
  //index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';			//하나의 component만 가져온다.
  
  
  ReactDOM.render(
      <App />,
      document.getElementById('root')
  );
  ```




##### props

* 객체같은 의미인데 좀 더 자유럽게 사용할 수 있음

* 나중에 데이터를 List로 가져오거나 할 때 사용함

*  자바스크립트 문법인 map함수를 사용하여 동적으로 원하는 데이터 수를 사용가능

  ```js
  function App() {
    return <div>
      {foodILike.map(dish => (			//map을 통해 모든 데이터 출력
        <Food
          key={dish.id}
          name={dish.name}
          rating={dish.rating}
        />
      ))}
    </div>
  }
  ```

  

##### propTypes

* propTypes를 통해서 props의 type과 required(필수적으로 필요함을 의미) 체크할거임

  ```js
  npm i prop-types //npm설치
  
  Food.propTypes = {
    name: PropTypes.string.isRequired,   //isRequired는 꼭 필요한 것을 의미한다.
    rating: PropTypes.number.isRequired
}
  ```
  
  









