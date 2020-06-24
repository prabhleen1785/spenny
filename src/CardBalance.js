import React from "react";
import arrow from "./assests/arrow.png";

const CardBalance = props => {
  const { cardbalance } = props;
  return (
    <div className="cardBalanceWrapper">
      <div className="cardBalanceOuter">
        <div className="cardBalanceTitle">Card Balance</div>
        <div className="cardBalanceMoney">${cardbalance}</div>
      </div>
      <div className="cardBalanceIconWrapper">
        <div className="cardBalanceUpper">
          <div className="cardBalanceIconUpper">
            <img className="upperArrow" src={arrow} alt="" />
          </div>
          <div className="cardBalanceMoneyUpper">$3,218</div>
        </div>
        <div className="cardBalanceLower">
          <div className="cardBalanceIconLower">
            <img className="upperArrow" src={arrow} alt="" />
          </div>
          <div className="cardBalanceMoneyLower">$1,168</div>
        </div>
      </div>
    </div>
  );
};

export default CardBalance;
