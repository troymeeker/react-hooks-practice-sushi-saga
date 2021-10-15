import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis}) {
const sushiList = sushis.map((sushiItem) => <Sushi key={sushis.id} sushis={sushis}/>)

  return (
    <div className="belt">
      {sushiList}0
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
