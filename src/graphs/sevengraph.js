import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        xName: 1,
        pv: 0.5,
        amt: 0,
    },
    {
        xName: 2,
        pv: -1,
        amt: 0,
    },
    {
        xName: 3,
        pv: -3.95,
        amt: 0,
    },
    {
        xName: 4,
        pv: -1,
        amt: 0,
    },
    {
        xName: 5,
        pv: 0.5,
        amt: 0,
    },
    {
        xName: 6,
        pv: 0.1,
        amt: 0,
    },
    {
        xName: 7,
        pv: 0.35,
        amt: 0,
    },
    {
        xName: 8,
        pv: -0.5,
        amt: 0,
    },
    {
        xName: 9,
        pv: -3.7,
        amt: 0,
    },
    {
        xName: 10,
        pv: -3,
        amt: 0,
    },
    {
        xName: 11,
        pv: 0.3,
        amt: 0,
    },
    {
        xName: 12,
        pv: 0.2,
        amt: 0,
    },
    {
        xName: 13,
        pv: 0.15,
        amt: 0,
    },
    {
        xName: 14,
        pv: 0.45,
        amt: 0,
    },
    {
        xName: 15,
        pv: -2.7,
        amt: 0,
    },
    {
        xName: 16,
        pv: -3.85,
        amt: 0,
    },
    {
        xName: 17,
        pv: -2,
        amt: 0,
    },
    {
        xName: 18,
        pv: 0.5,
        amt: 0,
    },
    {
        xName: 19,
        pv: 0,
        amt: 0,
    },
    {
        xName: 20,
        pv: 0.5,
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