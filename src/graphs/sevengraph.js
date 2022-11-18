import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        xName: 0,
        pv: 0.5,
        amt: 0,
    },
    {
        xName: 2.5,
        pv: 0-4,
        amt: 0,
    },
    {
        xName: 5,
        pv: 0.5,
        amt: 0,
    },
    {
        xName: 7.5,
        pv: 0.3,
        amt: 0,
    },
    {
        xName: 10,
        pv: 0-3.6,
        amt: 0,
    },
    {
        xName: 12.5,
        pv: 0.3,
        amt: 0,
    },
    {
        xName: 15,
        pv: 0.6,
        amt: 0,
    },
    {
        xName: 17.5,
        pv: 0-3.7,
        amt: 0,
    },
    {
        xName: 20,
        pv: 0.3,
        amt: 0,
    },
];

function App() {
    return (
        <ResponsiveContainer width="50%" aspect={1}>
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
                <YAxis domain={[-4, 1]} tickCount={6} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default App;