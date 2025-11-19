import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#94a3b8', // slate-400
      }
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      titleColor: '#f8fafc',
      bodyColor: '#cbd5e1',
      borderColor: 'rgba(148, 163, 184, 0.1)',
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(148, 163, 184, 0.1)',
      },
      ticks: {
        color: '#94a3b8',
      }
    },
    y: {
      grid: {
        color: 'rgba(148, 163, 184, 0.1)',
      },
      ticks: {
        color: '#94a3b8',
      }
    },
  },
  interaction: {
    mode: 'nearest' as const,
    axis: 'x' as const,
    intersect: false
  },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Processed Files',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(14, 165, 233)', // Sky 500
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      tension: 0.4,
    },
    {
      fill: true,
      label: 'Anomalies Detected',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgb(99, 102, 241)', // Indigo 500
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      tension: 0.4,
    },
  ],
};

const AnalyticsChart = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default AnalyticsChart;
