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
        xName: 1,
        pv: 0,
        amt: 0,
    },
    {
        xName: 2,
        pv: 120,
        amt: 0,
    },
    {
        xName: 3,
        pv: 250,
        amt: 0,
    },
    {
        xName: 4,
        pv: 380,
        amt: 0,
    },
    {
        xName: 5,
        pv: 500,
        amt: 0,
    },
    {
        xName: 6,
        pv: 650,
        amt: 0,
    },
    {
        xName: 7,
        pv: 850,
        amt: 0,
    },
    {
        xName: 8,
        pv: 1100,
        amt: 0,
    },
    {
        xName: 9,
        pv: 1450,
        amt: 0,
    },
    {
        xName: 10,
        pv: 1800,
        amt: 50,
    },
    {
        xName: 11,
        pv: 2200,
        amt: 50,
    },
    {
        xName: 12,
        pv: 2500,
        amt: 50,
    },
    {
        xName: 13,
        pv: 2700,
        amt: 50,
    },
    {
        xName: 14,
        pv: 2900,
        amt: 50,
    },
    {
        xName: 15,
        pv: 3050,
        amt: 100,
    },
    {
        xName: 16,
        pv: 3200,
        amt: 100,
    },
    {
        xName: 17,
        pv: 3030,
        amt: 100,
    },
    {
        xName: 18,
        pv: 2500,
        amt: 100,
    },
    {
        xName: 19,
        pv: 1500,
        amt: 100,
    },
    {
        xName: 20,
        pv: 0,
        amt: 100,
    },
];

function App() {
    return (
        <ResponsiveContainer width="35%" aspect={0.7}>
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
                <YAxis domain={[0, 3500]} tickCount={8} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default App;