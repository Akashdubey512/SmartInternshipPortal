import React, { useState } from "react";

const MentorStudents = () => {
  const [students] = useState([
    { id: 1, name: "Akash", progress: "Good" },
    { id: 2, name: "Priya", progress: "Needs Resume Improvement" },
    { id: 3, name: "Rahul", progress: "Excellent" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎓 Assigned Students</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="divide-y">
          {students.map((s) => (
            <li key={s.id} className="p-3 flex justify-between">
              <span>{s.name}</span>
              <span className="text-gray-500">{s.progress}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MentorStudents;
