"use client"
import{ Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register( ArcElement, Tooltip, Legend);

export default function DoughnutChart({ accounts }) {
 
  const data = {
    datasets: [
      {
        label: 'Produtos',
        data: [1250, 2500, 3500],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Produto 1', 'Produto 2','Produto 3']
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
