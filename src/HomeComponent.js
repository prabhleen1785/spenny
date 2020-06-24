import React from "react";
import { connect } from "react-redux";
import TitleBar from "./TitleBar";
import CardBalance from "./CardBalance";
import GraphComponent from "./GraphComponent";
import SpendingComponent from "./SpendingComponent";
import MonthComponent from "./MonthComponent";
import { fetchChartData } from "./redux/chartAction";
import { data } from "./data";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.props.fetchChartData(); //API call is made
  }

  render() {
    const { cardBalance } = data;
    return (
      <>
        <TitleBar />
        <CardBalance cardbalance={cardBalance} />
        {this.props.data.data && (
          <>
            <MonthComponent data={this.props.data} />
            <GraphComponent data={this.props.data} />
            <SpendingComponent data={this.props.data} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChartData: () => dispatch(fetchChartData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
