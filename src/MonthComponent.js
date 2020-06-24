import React from "react";

const MonthComponent = props => {
  const { month } = props.data;
  return (
    <>
      <div className="monthWrapper">
        <div className="monthTitle">Monthly</div>
        {month.map((val, index) => {
          return <div className="monthName">{month[index]}</div>;
        })}
      </div>
    </>
  );
};

export default MonthComponent;
