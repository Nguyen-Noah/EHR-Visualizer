import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/charts.css';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type LineProps = {
  title: string,
  datasets: any[],
  xAxisLabels: any[]
}

type dataset = {
  label: string,
  data: number[],
  borderColor: string,
  backgroundColor: string
}

const lineColors: string[] = [
  'rgb(255, 99, 132)',
  'rgb(53, 162, 235)',
  '#c51d34',
  '#6c6960',
  '#1c1c1c',
  '#734222',
  '#8673a1'
]

function LineChart({ title, datasets, xAxisLabels }: LineProps){
  const [data, setData] = useState<ChartData<'line', number[]>>({ 
    labels: xAxisLabels,
    datasets: []
  });

  useEffect(() => {
    let copy = data;
    copy.datasets = [];

    datasets.map((d, index) => {
      let ds: dataset = {
        label: d.label,
        data: d.data,
        borderColor: lineColors[index],
        backgroundColor: lineColors[index]
      };

      copy.datasets.push(ds);
    }); 

    setData(copy);
  }, []);

  return (
    <div className='canvas'>
      <Line data={data} key={title}></Line>
    </div>
  )
}

export default LineChart;