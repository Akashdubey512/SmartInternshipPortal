import React, { useState } from "react";

const PlacementApplications = () => {
  const [applications] = useState([
    { id: 1, student: "Akash Kumar", company: "TechCorp", role: "Frontend Dev", status: "Under Review" },
    { id: 2, student: "Priya Sharma", company: "InnoSoft", role: "Data Analyst", status: "Interview Scheduled" },
    { id: 3, student: "Rahul Verma", company: "FutureWorks", role: "Backend Dev", status: "Selected" },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredApps =
    filter === "All" ? applications : applications.filter((app) => app.status === filter);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Student Applications</h1>
      <div className="flex justify-between items-center mb-4">
        <label className="text-gray-600 font-medium">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option>All</option>
          <option>Under Review</option>
          <option>Interview Scheduled</option>
          <option>Selected</option>
        </select>
      </div>
      <div className="bg-white shadow-md rounded-xl p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Student</th>
              <th className="p-3">Company</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredApps.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-3">{app.student}</td>
                <td className="p-3">{app.company}</td>
                <td className="p-3">{app.role}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm ${
                      app.status === "Selected"
                        ? "bg-green-100 text-green-600"
                        : app.status.includes("Interview")
                        ? "bg-purple-100 text-purple-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacementApplications;
