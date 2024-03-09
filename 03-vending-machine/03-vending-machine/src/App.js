import React from 'react';
import {useState} from 'react';


export default function App () {
  let [drink, setDrink] = useState();
  let selection = "";
  if (drink === "coffee") {
    selection = "Dispensing coffee";
  } else if (drink === "tea") {
    selection = "Dispensing tea";
  } else if (drink === "juice") {
    selection = "Dispensing orange juice";
  } 
  return (
      <React.Fragment>
        <h1>Drink Vending Machine</h1>
        <div className="display">
          <p>{selection}</p>
        </div>
        <button onClick={()=>setDrink("coffee")}>Coffee</button>
        <button onClick={()=>setDrink("tea")}>Tea</button>
        <button onClick={()=>setDrink("juice")}>Orange Juice</button>
      </React.Fragment>
    );
  
}


