import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
const [data,setdata]=useState([]);
useEffect(()=>{
  fetch("http://localhost:5000").then(res => res.json()).then(response=>setdata(response));
},[]
)



  return (
    <div  className="data">
      {data.map(item=>{
        return(
          <div className="box" key={item.id}>
          <p>{item.country}</p>
          <p>{item.capital}</p>
          </div>)
      })}
    </div>
  );
}

export default App;
