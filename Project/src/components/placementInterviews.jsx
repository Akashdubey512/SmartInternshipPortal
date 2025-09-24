import React, { useState } from "react";

const PlacementInterviews = () => {
  const [interviews] = useState([
    { id: 1, student: "Akash Kumar", company: "TechCorp", date: "2025-09-25", time: "10:00 AM", mode: "Virtual" },
    { id: 2, student: "Priya Sharma", company: "InnoSoft", date: "2025-09-27", time: "02:00 PM", mode: "Onsite" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Interviews</h1>
      <div className="bg-white shadow-md rounded-xl p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Student</th>
              <th className="p-3">Company</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Mode</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((intv) => (
              <tr key={intv.id} className="border-t">
                <td className="p-3">{intv.student}</td>
                <td className="p-3">{intv.company}</td>
                <td className="p-3">{intv.date}</td>
                <td className="p-3">{intv.time}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm ${
                      intv.mode === "Virtual"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {intv.mode}
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

export default PlacementInterviews;
