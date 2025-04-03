import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Charts.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentPieChart = ({ sentiment }) => {
  // Return null if no sentiment data is provided
  if (!sentiment) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Sentiment Analysis',
        color: '#333',
        font: {
          size: 16,
          weight: '200',
        },
      },
    },
  };

  // Extract sentiment types and values
  const labels = Object.keys(sentiment).map(
    label => label.charAt(0).toUpperCase() + label.slice(1)
  );
  const values = Object.values(sentiment);

  // Define pastel colors for each sentiment
  const backgroundColors = [
    'rgba(75, 192, 192, 0.5)',  // positive
    'rgba(255, 99, 132, 0.5)',  // negative
    'rgba(255, 206, 86, 0.5)',  // neutral
  ];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(color => color.replace('0.5', '1')),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie options={options} data={data} />
    </div>
  );
};

export default SentimentPieChart; 