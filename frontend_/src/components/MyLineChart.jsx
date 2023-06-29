import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 100 },
  { name: 'Feb', uv: 85 },
  { name: 'Mar', uv: 75 },

  //...add more data points
];

function MyLineChart() {
  return (
    <div className='text-xs bg-white '>
      <LineChart width={320} height={200} data={data}>
        <Line type='monotone' dataKey='uv' stroke='#dd5938' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='name' />
        <YAxis domain={[40, 'dataMax']} />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default MyLineChart;
