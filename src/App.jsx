import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";
function App() {

  let [calval,setcalval] = useState("");

  const onButtonClick = (buttontext) => {
    console.log(buttontext);
    if(buttontext === 'C')
    {
     setcalval("");
    }   
    else if(buttontext === "=")
    {
     const res = eval(calval);
     setcalval(res);
    }
    else
    {
      const displayval = calval + buttontext;
      setcalval(displayval);
    }
  }
  return (
    <>
     <div className = {styles.calculator}>
      <Display value = {calval}></Display>
      <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
     </div>
    </>
  )
}

export default App
