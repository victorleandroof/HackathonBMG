import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';


function Grafico(dataGrafico) {
    return (
        <div className="grafico-container">
            <h1>Americanas</h1>
            <LineChart
                      width={500}
                      height={300}
                      data={dataGrafico.data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Data" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Americanas" stroke="#8884d8" dot={false} />
              <Line type="monotone" dataKey="Poupanca" stroke="#82ca9d" dot={false} />
            </LineChart>
        </div>
    );
}

export default Grafico;