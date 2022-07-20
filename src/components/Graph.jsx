import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

import useQuiz from "../hooks/useQuiz";
 

export default function Graph() {

    const {quiz} = useQuiz();

    const data = {
        labels: ['Servicio', 'Ahorro', 'Eficiencia', 'Actualización'],
        datasets: [{
            label: 'Calificaciones',
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],            
            borderColor: 'black',
            hoverBackgroundColor: 'rgba(0, 0, 0, .5)',
            data: [quiz[0], quiz[1], quiz[2], quiz[3]]
        }]
    };
    const options = {
        legend: { display: false },
        maintainAspectRatio: false,
        responsive: true,
        display: true

    };

    return(
        <div className="mt-6" style={{width: '100%', height: '250px'}}>
{             <Bar data={data} options={options} />}        </div>
    );
}