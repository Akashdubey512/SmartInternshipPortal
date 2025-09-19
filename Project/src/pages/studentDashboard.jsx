// src/pages/StudentDashboard.jsx
import React from "react";
import { Users, Target, BarChart, CheckCircle, Star, Award, TrendingUp } from "lucide-react";
import Card from "../components/card";
import SmCard from "../components/smcard";

const stats = [
  { label: "Applications Submitted", value: 12, icon: <Users className="w-6 h-6 text-white" /> },
  { label: "Interviews Scheduled", value: 5, icon: <Target className="w-6 h-6 text-white" /> },
  { label: "Offers Received", value: 2, icon: <BarChart className="w-6 h-6 text-white" /> },
  { label: "Completed Trainings", value: 3, icon: <CheckCircle className="w-6 h-6 text-white" /> },
];

const achievements = [
  { label: "Top Performer", icon: <Star className="w-5 h-5 text-yellow-400" /> },
  { label: "Awarded Intern", icon: <Award className="w-5 h-5 text-green-400" /> },
  { label: "Growth Rate", icon: <TrendingUp className="w-5 h-5 text-blue-400" /> },
];

const StudentDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">{stat.icon}</div>
              <div>
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {achievements.map((ach, idx) => (
          <SmCard key={idx}>
            <div className="flex items-center space-x-2">
              {ach.icon}
              <span>{ach.label}</span>
            </div>
          </SmCard>
        ))}
      </div>

      {/* Recent Activities Table */}
      <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Submitted Application to XYZ Corp</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-09-18</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-500 font-semibold">Pending</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Interview Scheduled with ABC Ltd</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-09-20</td>
              <td className="px-6 py-4 whitespace-nowrap text-blue-500 font-semibold">Scheduled</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Completed Training on React</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-09-15</td>
              <td className="px-6 py-4 whitespace-nowrap text-purple-500 font-semibold">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboard;
