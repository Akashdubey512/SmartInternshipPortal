import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Placed", value: 120 },
  { name: "Unplaced", value: 80 },
  { name: "Interviews Ongoing", value: 50 },
];

const COLORS = ["#34D399", "#F87171", "#60A5FA"];

const PlacementAnalytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      <div className="bg-white shadow-md rounded-xl p-6 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlacementAnalytics;
