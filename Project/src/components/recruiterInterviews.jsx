import React, { useState } from "react";

const RecruiterInterviews = () => {
  const [interviews, setInterviews] = useState([
    { id: 1, student: "Akash", date: "2025-09-25", status: "Scheduled" },
    { id: 2, student: "Priya", date: "2025-09-27", status: "Completed" },
  ]);

  const updateStatus = (id, newStatus) => {
    setInterviews((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">💼 Interviews</h2>
      <div className="bg-white shadow rounded-lg p-6">
        {interviews.map((i) => (
          <div key={i.id} className="flex justify-between items-center py-2 border-b">
            <span>
              {i.student} — {i.date}
            </span>
            <div className="flex gap-2">
              <span className="text-gray-500">{i.status}</span>
              {i.status === "Scheduled" && (
                <button
                  onClick={() => updateStatus(i.id, "Completed")}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  Mark Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruiterInterviews;
