import React from 'react';
import {
    BarChart, Bar
} from 'recharts';

function Grafico(data,index) {
    const fill = ['#6e5ca6','#26c4e1','#fa6eb5']
    const dataChart = [                                                                                                                                                                                                                         
        {
          name: 'Page A', uv: 4000
        },
        {
          name: 'Page B', uv: 3000
        },
        {
          name: 'Page C', uv: 2000
        },
        {
          name: 'Page D', uv: 2780
        },
        {
          name: 'Page E', uv: 1890
        },
        {
          name: 'Page F', uv: 2390
        },
        {
          name: 'Page G', uv: 3490
        },
      ];
    return (
        <div className="grafico-container">
            <p>{data.titulo}</p>
            <BarChart width={100} height={40} data={dataChart}>
                <Bar dataKey="uv" fill={fill[1]} />
            </BarChart>
        </div>
    );
}

export default Grafico;