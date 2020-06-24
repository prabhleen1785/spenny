import React from "react";
import cart from "./assests/cart.png";
import fuel from "./assests/fuel.png";
import rent from "./assests/rent.png";

const SpendingItem = props => {
  const { index, val } = props;
  const newDate = JSON.parse(Object.values(val)[1]);
  const finalDate = new Date(newDate).toDateString();
  const color = index === 0 ? "color1" : index === 1 ? "color2" : "color3";
  const icon = index === 0 ? cart : index === 1 ? fuel : rent;
  console.log("date in spendingitem", finalDate);
  return (
    <div className={`spendingTitle ${index >= 1 ? "spendingTitleActive" : ""}`}>
      {index === 0 ? (
        <div className="spendingTitleBreakdown">Spending Breakdown</div>
      ) : null}
      <div className="spendingItemsWrapper">
        <div className="shoppingItem">
          <div className={`shoppingIcon ${color}`}>
            <img className={"shoppingIconDesign"} src={icon} alt="hello" />
          </div>
          <div className="shoppingInfo">
            <div className="shoppingTitle">{Object.keys(val)[0]}</div>
            <div className="shoppingDate">{finalDate}</div>
          </div>
          <div className="shoppingAmount">-${Object.values(val)[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default SpendingItem;
