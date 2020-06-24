import axios from "axios";
const CHART_DATA = "CHART_DATA";

export const fillChartData = data => {
  return {
    type: CHART_DATA,
    payload: data
  };
};

export const fetchChartData = () => {
  return dispatch => {
    axios
      .get("https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439")
      .then(response => {
        const data = response.data;
        console.log("dataaaaaa", response.data);
        dispatch(fillChartData(data));
      })
      .catch(error => {
        const errorMsg = "Error while Fetching!";
        console.log("error");
        return errorMsg;
      });
  };
};
