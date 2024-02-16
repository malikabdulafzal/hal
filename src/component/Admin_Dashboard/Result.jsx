import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./Result.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ResultTable = ({ data }) => {
  return (
    <div className="pretty-table-container">
      <table className="pretty-table">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Pong</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.position}</td>
              <td>{row.status}</td>
              <td>{row.pong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Result = () => {
  const pieData = {
    labels: ["Fresh", "Junior", "Mid-Level", "Senior", "Principal"],
    datasets: [
      {
        label: "# of Candidates",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Sample data
  const data = {
    labels: ["Pass", "Fail"],
    datasets: [
      {
        label: "Score",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,

        data: [65, 59],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Configuration options
  const options = {
    scales: {
      x: {
        type: "linear",
        beginAtZero: true,
      },
    },
    indexAxis: "y", // Set the index axis to 'y' for horizontal bar chart
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    barThickness: 45,
  };
  const tableData = [
    {
      name: "Abdul",
      position: "Junior Dev",
      status: "Pass",
      pong: "ping",
    },
    {
      name: "Data 5",
      position: "Data 6",
      status: "Data 7",
      pong: "Data 8",
    },
    // Add more data rows as needed
  ];

  return (
    <div className="hr_dashboard__container">
      <h2>Styled Bar Chart</h2>
      <div className="hr_dashboard__chart-container">
        <div className="hr_dashboard__bar-chart">
          <Bar data={data} options={options} />
        </div>
        <div className="hr_dashboard__pie-chart">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
      <h2>Styled Bar Chart</h2>
      <ResultTable data={tableData} />
    </div>
  );
};

export default Result;
