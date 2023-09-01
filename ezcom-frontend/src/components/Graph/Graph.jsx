import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Graph = () => {

  const data = [
    {
      name: '',
      Price: 19000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '26 Aug',
      Price: 19500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '30 Aug',
      Price: 31000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '7 Sep',
      Price: 37000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '14 Sep',
      Price: 13000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '21 Sep',
      Price: 26000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '28 Sep',
      Price: 24500, 
      pv: 4300,
      amt: 2100,
    },
  ];
  return(
    <div className="max-w-[75vw] mx-auto mt-10 bg-300 p-10 rounded-md">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fill:"#fff"}} />
          <YAxis tick={{fill:"#fff"}}/>
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} /> */}
          <Line type="monotone" dataKey="Price" stroke="#82ca9d"strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph;