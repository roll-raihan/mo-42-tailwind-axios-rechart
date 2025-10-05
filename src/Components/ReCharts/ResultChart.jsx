import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Arif", "physics": 78, "chemistry": 82, "math": 90 },
    { "id": 2, "name": "Nusrat", "physics": 85, "chemistry": 88, "math": 92 },
    { "id": 3, "name": "Rafi", "physics": 69, "chemistry": 74, "math": 80 },
    { "id": 4, "name": "Mehedi", "physics": 92, "chemistry": 89, "math": 95 },
    { "id": 5, "name": "Sadia", "physics": 81, "chemistry": 76, "math": 84 },
    { "id": 6, "name": "Tariq", "physics": 74, "chemistry": 70, "math": 78 },
    { "id": 7, "name": "Mim", "physics": 88, "chemistry": 91, "math": 87 },
    { "id": 8, "name": "Hasan", "physics": 67, "chemistry": 73, "math": 71 },
    { "id": 9, "name": "Faria", "physics": 90, "chemistry": 85, "math": 89 },
    { "id": 10, "name": "Imran", "physics": 76, "chemistry": 80, "math": 83 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;