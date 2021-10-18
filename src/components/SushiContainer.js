import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatSushi}) {
  const [index, setIndex] = useState(0);

const currentSushis = sushis.slice(index, index + 4);
const sushiList = currentSushis.map((sushiItem) => <Sushi key={sushiItem.id} sushi={sushiItem} onEatSushi={onEatSushi}/>)


function handleNextFour(){
  setIndex(index + 4)
}

  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleNextFour={handleNextFour}/>
    </div>
  );
}

export default SushiContainer;
