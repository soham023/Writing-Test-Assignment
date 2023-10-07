import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const PieChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [80, 10, 10], // Specify data values here
        backgroundColor: ['#235784', '#40A8C4', '#BCDBDF'], // Specify colors for each segment
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend (labels)
      },
      tooltip: {
        enabled: false, // Hide the tooltip (percentage labels)
      },
    },
  };

  return (
    <div style={{ height: '200px', width:'200px'}}>
      
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;