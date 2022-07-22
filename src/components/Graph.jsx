import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import useQuiz from "../hooks/useQuiz";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Graph() {
  const { quiz } = useQuiz();

  const data = {
    labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Satisfacción",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#356473",
        ],
        borderColor: "black",
        hoverBackgroundColor: "rgba(0, 0, 0, .5)",
        data: [84, 85, 87, 94, 93, 98],
      },
    ],
  };
  const options = {
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    display: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "NIVEL DE SATISFACCIÓN DEL CLIENTE 2022",
      },
    },
  };

  return (
    <div className="mt-6" style={{ width: "100%", height: "250px" }}>
      {<Bar data={data} options={options} />}{" "}
    </div>
  );
}
