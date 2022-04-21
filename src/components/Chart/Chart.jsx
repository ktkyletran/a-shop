import React from 'react'
import { LineChart, CartesianGrid, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts'
import './index.css'


const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1.5}>
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {grid && <CartesianGrid strokeDasharray="6 6" />}
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart