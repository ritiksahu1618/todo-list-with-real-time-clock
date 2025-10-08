import { evaluate } from "mathjs";
import { useState } from "react";
import "./calculator.css"

function Calculator(){
   
   const [input,setInput]=useState("");


   const calculate = (value)=>{
       setInput(input+value)
   }

   const handleCalculate = ()=>{

    try{
        setInput(evaluate(input).toString());
    }catch{
        setInput("error")
    }

   };
   
    const handleClear = () =>{
        setInput("");
    }
  return(
      
     
    <div className="calculator" style={{textAlign:"center"}} >
        <h1>Calculator</h1><br></br><br></br>
      <input type="text" value={input} readOnly/><br></br>
      <br></br>

      <div className="buttons">
        <button onClick={()=>calculate("9")}>9</button>
        <button onClick={()=>calculate("8")}>8</button>
        <button onClick={()=>calculate("7")}>7</button>
        <button onClick={()=>calculate("+")}>+</button><br></br>
        <button onClick={()=>calculate("4")}>4</button>
        <button onClick={()=>calculate("5")}>5</button>
        <button onClick={()=>calculate("6")}>6</button>
        <button onClick={()=>calculate("-")}>-</button><br></br>
        <button onClick={()=>calculate("1")}>1</button>
        <button onClick={()=>calculate("2")}>2</button>
        <button onClick={()=>calculate("3")}>3</button>
        <button onClick={()=>calculate("*")}>*</button><br></br>
        <button onClick={()=>calculate("0")}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
        <button onClick={()=>calculate("/")}>/</button>

      </div>
           
     </div>
  )
}``
export default Calculator;