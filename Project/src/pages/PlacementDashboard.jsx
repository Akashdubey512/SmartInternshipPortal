import React from "react";
import {
  Briefcase,
  Users,
  Calendar,
  FileText,
  BarChart,
  CheckCircle,
} from "lucide-react";

const PlacementDashboard = () => {
  const companies = [
    { id: 1, name: "Google", role: "Software Engineer", date: "2025-10-02" },
    { id: 2, name: "Microsoft", role: "Data Scientist", date: "2025-10-05" },
    { id: 3, name: "Amazon", role: "Cloud Engineer", date: "2025-10-10" },
  ];

  const stats = [
    { label: "Total Drives", value: 12, icon: Briefcase, color: "bg-blue-100 text-blue-600" },
    { label: "Students Placed", value: 45, icon: Users, color: "bg-green-100 text-green-600" },
    { label: "Upcoming Drives", value: 3, icon: Calendar, color: "bg-yellow-100 text-yellow-600" },
    { label: "Offers Released", value: 30, icon: CheckCircle, color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Placement Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition"
          >
            <div className={`p-3 rounded-full ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm">{item.label}</h3>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Drives */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Placement Drives</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + Add Drive
          </button>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100 text-gray-700">
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr
                key={company.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium">{company.name}</td>
                <td className="py-3 px-4">{company.role}</td>
                <td className="py-3 px-4">{company.date}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacementDashboard;
