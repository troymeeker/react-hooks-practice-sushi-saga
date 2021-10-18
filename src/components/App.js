import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(200); 

  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then((sushis) => {
      const updatedSushis = sushis.map((sushiItem) => {
        return {...sushiItem, eaten: false };
      })
      setSushis(updatedSushis)
    })
  }, [])

const eatenSushis = sushis.filter((sushiItem) => sushiItem.eaten); 

  
 function handleEatSushi(eatenSushi){
  if(money >= eatenSushi.price){
    const updatedSushis = sushis.map((sushiItem) => {
      if(sushiItem.id === eatenSushi.id) return { ...sushiItem, eaten:true};
      return sushiItem;
    });
  
    setSushis(updatedSushis)
    setMoney((money) => money - eatenSushi.price)
  } else{
    alert("You need more money!!")
  }
  // sushiItem.eaten = true
   // sushi goes away from plate
   //empty plate appears on table
  }
 
  

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi}/>
      <Table money={money} plates={eatenSushis}/>
    </div>
  );
}

export default App;
