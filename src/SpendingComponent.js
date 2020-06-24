import React from "react";
import SpendingItem from "./SpendingItem";

const SpendingComponent = props => {
  const { spending } = props.data;
  return spending.map((val, index) => {
    return (
      <div className="spendingWrapper" key={index}>
        <SpendingItem index={index} val={val} />
      </div>
    );
  });
};

export default SpendingComponent;
