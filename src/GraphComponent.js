import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class GraphComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    const { data } = this.props;
    var ctx = document.getElementById("canvas").getContext("2d");
    var gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, "rgba(229, 239, 255, 1)");
    gradient1.addColorStop(1, "#FFFFFF");
    var gradient2 = ctx.createLinearGradient(0, 0, 0, 170);
    gradient2.addColorStop(0, "rgba(141, 93, 162, 0.2)");
    gradient2.addColorStop(1, "#FFFFFF");
    const newData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          data: data.data.datasets[0].data,
          borderColor: data.data.datasets[0].borderColor,
          backgroundColor: gradient1,
          pointRadius: 0
        },
        {
          data: data.data.datasets[1].data,
          borderColor: data.data.datasets[1].borderColor,
          backgroundColor: gradient2,
          pointRadius: 0
        }
      ]
    };
    this.setState({ chartData: newData });
  }

  render() {
    return (
      <div>
        <Line
          id="canvas"
          data={this.state.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    borderDash: [5]
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
