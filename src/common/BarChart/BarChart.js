import React from 'react';
import Chart from 'chart.js';

import style from './style.module.scss';

let myLineChart;

Chart.defaults.global.defaultFontFamily = "'Inter', sans-serif";
Chart.defaults.global.defaultFontColor = "#999";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;

class BarChart extends React.Component {

  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  formatNumber(number) {
    return Math.abs(number) > 999 ? Math.sign(number)*((Math.abs(number)/1000).toFixed(1)) + 'k+' : Math.sign(number)*Math.abs(number)
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { averageData, maxData, labels, maxBackgroundColor, averageBackgroundColor } = this.props;

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Avg",
            data: averageData,
            backgroundColor: averageBackgroundColor,
            barPercentage: 0.4,
            maxBarThickness: 60
          },
          {
            label: "Max",
            data: maxData,
            backgroundColor: maxBackgroundColor,
            barPercentage: 0.4,
            maxBarThickness: 60
          },
        ]
      },
      options: {
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              return false;
            },
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += '- ';
              }

              label += this.formatNumber(tooltipItem.yLabel);

              return label;
            }
          },
          mode: 'index',
          intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true,
            gridLines: {
              display: false,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: (val, i, values) => this.formatNumber(val),
              padding: 10
            },
            gridLines: {
              color: '#E6E6E6',
              borderDash: [5, 10],
              zeroLineColor: '#E6E6E6',
              drawBorder: false
            }
          }]
        }
      }
    });
  }

  render() {
    
    return(
      <div className={style.BarChart}>
        <canvas
          ref={this.chartRef}
        />
      </div>
    );
  }
}

export default BarChart;