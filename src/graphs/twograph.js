import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 0,
        pv: 3100,
        amt: 2400,
    },
    {
        name: 5,
        pv: 50,
        amt: 2210,
    },
    {
        name: 10,
        pv: 120,
        amt: 2290,
    },
    {
        name: 15,
        pv: 250,
        amt: 2000,
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
                <XAxis dataKey="name" />
                <YAxis domain={[0, 3500]} tickCount={8} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default App;
