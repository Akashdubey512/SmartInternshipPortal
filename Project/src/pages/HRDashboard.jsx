// src/pages/HRDashboard.jsx
import React from "react";
import { Users, Target, BarChart, CheckCircle, Star, Award, Zap } from "lucide-react";
import Card from "../components/card";
import SmCard from "../components/smcard";

const stats = [
  { label: "Total Job Posts", value: 8, icon: <BarChart className="w-6 h-6 text-white" /> },
  { label: "Applications Received", value: 45, icon: <Users className="w-6 h-6 text-white" /> },
  { label: "Interviews Scheduled", value: 12, icon: <Target className="w-6 h-6 text-white" /> },
  { label: "Offers Made", value: 5, icon: <CheckCircle className="w-6 h-6 text-white" /> },
];

const quickActions = [
  { label: "Add Job Post", icon: <Zap className="w-5 h-5 text-blue-500" /> },
  { label: "View Applications", icon: <Users className="w-5 h-5 text-green-500" /> },
  { label: "Schedule Interview", icon: <Target className="w-5 h-5 text-purple-500" /> },
];

const HRDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>

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

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {quickActions.map((action, idx) => (
          <SmCard key={idx}>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
              {action.icon}
              <span>{action.label}</span>
            </div>
          </SmCard>
        ))}
      </div>

      {/* Recent Applications Table */}
      <h2 className="text-2xl font-semibold mb-4">Recent Applications</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Applied</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Akash Sharma</td>
              <td className="px-6 py-4 whitespace-nowrap">Frontend Developer</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-09-18</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-500 font-semibold">Pending</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Priya Verma</td>
              <td className="px-6 py-4 whitespace-nowrap">Backend Developer</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-09-17</td>
              <td className="px-6 py-4 whitespace-nowrap text-blue-500 font-semibold">Interview Scheduled</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Rohan Patil</td>
              <td className="px-6 py-4 whitespace-nowrap">Data Analyst</td>
              <td className="px-6 py-4 whitespace-nowrap">2025-09-16</td>
              <td className="px-6 py-4 whitespace-nowrap text-purple-500 font-semibold">Reviewed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HRDashboard;
