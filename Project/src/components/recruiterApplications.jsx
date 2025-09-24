import React, { useState } from "react";

const RecruiterApplications = () => {
  const [applications] = useState([
    { id: 1, student: "Akash", role: "SDE Intern", status: "Under Review" },
    { id: 2, student: "Priya", role: "HR Analyst", status: "Shortlisted" },
    { id: 3, student: "Rahul", role: "ML Intern", status: "Rejected" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📄 Applications</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Student</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((a) => (
              <tr key={a.id}>
                <td className="border p-2">{a.student}</td>
                <td className="border p-2">{a.role}</td>
                <td className="border p-2">{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecruiterApplications;
