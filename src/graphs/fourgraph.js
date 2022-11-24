import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        xName: 0,
        pv: 425,
        amt: 0,
    },
    {
        xName: 1,
        pv: 60,
        amt: 0,
    },
    {
        xName: 2,
        pv: 20,
        amt: 0,
    },
    {
        xName: 3,
        pv: 40,
        amt: 0,
    },
    {
        xName: 4,
        pv: 70,
        amt: 0,
    },
    {
        xName: 5,
        pv: 100,
        amt: 50,
    },
    {
        xName: 6,
        pv: 130,
        amt: 50,
    },
    {
        xName: 7,
        pv: 160,
        amt: 50,
    },
    {
        xName: 8,
        pv: 200,
        amt: 50,
    },
    {
        xName: 9,
        pv: 240,
        amt: 50,
    },
    {
        xName: 10,
        pv: 300,
        amt: 50,
    },
    {
        xName: 11,
        pv: 370,
        amt: 50,
    },
    {
        xName: 12,
        pv: 430,
        amt: 50,
    },
    {
        xName: 13,
        pv: 510,
        amt: 50,
    },
    {
        xName: 14,
        pv: 610,
        amt: 50,
    },
    {
        xName: 15,
        pv: 700,
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
                <YAxis domain={[0, 800]} tickCount={5} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default App;