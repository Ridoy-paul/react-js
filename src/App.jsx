import { useRef } from "react";
const App = () => {
  let myHeadLine = useRef();
  

  const buttonClick = () => {
    myHeadLine.current.innerText = "Hello";
  }

  return (
    <div>
      <h1 ref={myHeadLine}></h1>
      <button type="button" onClick={buttonClick}>Click me</button>
    </div>
  );
};

export default App;