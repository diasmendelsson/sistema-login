"use client"
import{ Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register( ArcElement, Tooltip, Legend);

export default function DoughnutChart({ accounts }) {
 
  const data = {
    datasets: [
      {
        label: 'Categorias',
        data: [1250, 2500, 3500],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Categoria 1', 'Categoria 2','Categoria 3']
  }
  return <Doughnut
  data={data}
  options={{
    cotout: '60%',
    plugins:{
        legend:{
            display:false
        }
    }
  }}
  />
  
} 
