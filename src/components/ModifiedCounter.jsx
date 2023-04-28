import { useState } from "react";

const ModifiedCounter = () => {
  
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  

  // change
const change = (e) => {
  const num = Number.parseInt(e.target.innerText);
  setHistory([`${counter} + ${num > 0 ? num : `(${num})`} = ${counter + num}`, ...history ]);
  setCounter(counter + num);
}

  return (
    <>
      <div className="counter" >
      <div className="input-button">
        <input id= "counter-label" value={counter}/>
      </div>
      <div className="button-container-div">
        <button id="counter-input" onClick={change}>+1</button>      
        <button id="counter-input" onClick={change}>+5</button>
        <button id="counter-input" className="reset" onClick={ () =>  {setCounter(0); setHistory([])}}>Reset</button>
        <button id="counter-input" onClick={change}>-5</button>      
        <button id="counter-input" onClick={change}>-1</button>
      </div>
      </div>

      <div className="history">
        <p>History:</p>
      {history.map((item) => (
        <p>{item}</p>
      ))}
      </div>     
     
      
    </>
  )};

export default ModifiedCounter;