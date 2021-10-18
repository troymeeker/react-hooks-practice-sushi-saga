import React from "react";
// import SushiWallet from "./SushiWallet";

function Table({ money, plates = [] }) {
  // renders an empty plate for every element in the array
  const displayPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        
        <div className="stack">{displayPlates}</div>
        
      </div>
    </>
  );
}

export default Table;
