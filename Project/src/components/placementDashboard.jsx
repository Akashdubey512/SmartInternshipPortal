import React from "react";
import { Users, Briefcase, ClipboardList, Calendar, BarChart3 } from "lucide-react";

const stats = [
  { id: 1, name: "Total Recruiters", value: 25, icon: Users, color: "bg-indigo-100 text-indigo-600" },
  { id: 2, name: "Openings Posted", value: 40, icon: Briefcase, color: "bg-green-100 text-green-600" },
  { id: 3, name: "Applications", value: 350, icon: ClipboardList, color: "bg-yellow-100 text-yellow-600" },
  { id: 4, name: "Interviews Scheduled", value: 50, icon: Calendar, color: "bg-purple-100 text-purple-600" },
  { id: 5, name: "Students Placed", value: 120, icon: BarChart3, color: "bg-blue-100 text-blue-600" },
];

const PlacementDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Placement Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4"
          >
            <div className={`p-3 rounded-full ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-600">{stat.name}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementDashboard;
