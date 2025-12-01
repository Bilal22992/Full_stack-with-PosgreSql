import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
const [data,setdata]=useState(null);
const [input,setinput]=useState([]);
const [score,setscore]=useState(0);

function collectData(){
  fetch("http://localhost:5000").then(res => res.json()).then(response=>setdata(response));
}


useEffect(()=>{
collectData()

},[]
)


function handleChange (event){
  let answer =event.target.value;
  answer=answer.toLowerCase();
  setinput(answer);
  

}

function handleCheck()
{
  const correctAnswer=data.capital.toLowerCase();
  if(input===correctAnswer)
  {
    setscore(score+1);
    collectData();
    setinput("");

  }

}


if (!data) return <p>Loading...</p>;
  return (
    <div  className="data">
<p>{score}</p>
      <input onChange={handleChange} value={input}></input>
    <button onClick={handleCheck}>Check</button>
      <p>{data.country}</p>
      
    </div>
  );
}

export default App;
