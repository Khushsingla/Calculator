import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
const Buttons = ['1' ,'2','3','4','5','6','7','8','9','.','=','C','/','*','+','/','-'];

return (
  <div className= {styles.buttonsConatiner}>
    {Buttons.map(button => {
      return <button key = {button}  className = {styles.button} onClick = {() => onButtonClick(button)}>{button}</button>
    })}
  </div>
);
};
export default ButtonsContainer