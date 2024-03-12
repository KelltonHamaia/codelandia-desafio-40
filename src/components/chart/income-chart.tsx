"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const income = [
    { name: "fev", fill: "#C4B5FD", value: 200 },
    { name: "mar", fill: "#C4B5FD", value: 450 },
    { name: "abr", fill: "#C4B5FD", value: 1100 },
    { name: "mai", fill: "#C4B5FD", value: 1200 },
    { name: "jun", fill: "#C4B5FD", value: 1350 },
    { name: "jul", fill: "#C4B5FD", value: 800 },
    { name: "ago", fill: "#C4B5FD", value: 1250 },
    { name: "set", fill: "#C4B5FD", value: 1550 },
    { name: "out", fill: "#9E6EFE", value: 2000 }
];

export const IncomeChart = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={363} data={income} margin={{
                bottom: 10,
                top: 10,
                left: 10,
                right: 10,
            }}>
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar
                    dataKey="value"
                    type="monotone"
                    fill="#9E6EFE"
                    stackId="1"
                    radius={[6, 6, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );

}
