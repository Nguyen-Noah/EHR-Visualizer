import React from 'react';
import { useState } from 'react';
import PieChart from './components/PieChart';
import { Data } from './utils/Data';
import { Chart, CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

export default function App() {
  console.log(Data);
  const [data, setData] = useState(Data);
  console.log(data);
  return (
    <div className='App'>
      <PieChart data={data} />
    </div>
  )
};

/* export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <PieChart data={data} />
  </div>
); */
