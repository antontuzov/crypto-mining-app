import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: number[][];
  label: string;
}

const Chart: React.FC<ChartProps> = ({ data, label }) => {
  const chartData = {
    labels: data.map((d) => new Date(d[0]).toLocaleDateString()),
    datasets: [
      {
        label: `${label} Price`,
        data: data.map((d) => d[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${label} Price Over Time`,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;