

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
     e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    // Add the code for the plus function 
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    if(  Number(inputRef.current.value) !== 0 )
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
     e.preventDefault(); 
    setResult(() =>  inputRef.current.value = 0); 
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function
     e.preventDefault(); 
    setResult((result) => result = 0) ; 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef} > 
         <p className="result-show"> { result/* add the value of the current total */} </p>
        </p> 
        <input
        className="inputer"
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
         <br></br><br></br>
        <button className="btn-style" onClick={plus}>add</button>
        <button className="btn-style" onClick={minus}>subtract</button> 
         <button className="btn-style" onClick={times}>multiply</button>
         <button className="btn-style" onClick={divide}>divide</button>
         <br></br><br></br>
        <button className="btn-style-2" onClick={resetInput}>resetInput</button> 
        <button className="btn-style-2" onClick={resetResult}>resetResult</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
