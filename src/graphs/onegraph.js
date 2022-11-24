import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        xName: 0,
        pv: 0,
        amt: -50,
    },

    {
        xName: 3,
        pv: -5,
        amt: 0,
    },

    {
        xName: 6,
        pv: 6,
        amt: 0,
    },
    {
        xName: 9,
        pv: 35,
        amt: 50,
    },
    {
        xName: 12,
        pv: 75,
        amt: 100,
    },
    {
        xName: 15,
        pv: 135,
        amt: 300,
    },
    {
        xName: 18,
        pv: 200,
        amt: 300,
    },
    {
        xName: 21,
        pv: 275,
        amt: 300,
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
                <YAxis domain={[-50, 300]} tickCount={8} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default App;