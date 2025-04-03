import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Charts.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmotionBarChart = ({ emotions }) => {
  // Return null if no emotions data is provided
  if (!emotions) return null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Emotional Analysis',
        color: '#333',
        font: {
          size: 16,
          weight: '200',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  // Extract emotion names and values
  const labels = Object.keys(emotions);
  const values = Object.values(emotions);

  // Define pastel colors for each emotion
  const backgroundColors = [
    'rgba(255, 99, 132, 0.5)',   // happiness
    'rgba(54, 162, 235, 0.5)',   // sadness
    'rgba(255, 206, 86, 0.5)',   // fear
    'rgba(75, 192, 192, 0.5)',   // anger
    'rgba(153, 102, 255, 0.5)',  // surprise
    'rgba(255, 159, 64, 0.5)',   // joy
    'rgba(199, 199, 199, 0.5)',  // love
    'rgba(83, 123, 156, 0.5)',   // disgust
    'rgba(234, 153, 153, 0.5)',  // relief
    'rgba(182, 215, 168, 0.5)',  // gratitude
    'rgba(200, 172, 255, 0.5)',  // confusion
  ];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(color => color.replace('0.5', '1')),
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar options={options} data={data} />
    </div>
  );
};

export default EmotionBarChart; 