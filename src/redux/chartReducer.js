import { CHART_DATA } from "./chartTypes";

const initialState = {
  data: {}
};

const chartReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CHART_DATA:
      newState = {
        ...state,
        data: action.payload
      };
      console.log("newstate", newState);
      return newState;
    default:
      return state;
  }
};

export default chartReducer;
