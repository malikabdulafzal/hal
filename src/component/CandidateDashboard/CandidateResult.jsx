import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CandidateResult = () => {
  // Sample data
  const data = {
    labels: ["OOP", "DSA", "DB"],
    datasets: [
      {
        label: "Score",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,

        data: [65, 59, 80],
      },
    ],
  };

  // Configuration options
  const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    barThickness: 75,
  };

  return (
    <>
      <h2>Styled Bar Chart</h2>
      <div className="candidate_dashboard__bar-chart">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default CandidateResult;
