import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        xName: 0,
        pv: 0,
        amt: 0,
    },
    {
        xName: 0.66,
        pv: 1,
        amt: 50,
    },
    {
        xName: 1.32,
        pv: 2.5,
        amt: 50,
    },
    {
        xName: 1.99,
        pv: 3.2,
        amt: 0,
    },
    {
        xName: 2.45,
        pv: 3.4,
        amt: 50,
    },
    {
        xName: 2.50,
        pv: 3,
        amt: 50,
    },
    {
        xName: 2.65,
        pv: 0,
        amt: 50,
    },
];

function App() {
    return (
        <ResponsiveContainer width="30%" aspect={0.7}>
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
                <XAxis dataKey="xName" />
                <YAxis domain={[0, 3.5]} tickCount={8} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default App;