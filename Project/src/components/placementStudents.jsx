import React, { useState } from "react";

const PlacementStudents = () => {
  const [students] = useState([
    { id: 1, name: "Akash", status: "Placed at Google" },
    { id: 2, name: "Priya", status: "Interview at Microsoft" },
    { id: 3, name: "Rahul", status: "Application Under Review" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎓 Students Overview</h2>
      <ul className="bg-white shadow rounded-lg divide-y">
        {students.map((s) => (
          <li key={s.id} className="p-4 flex justify-between">
            <span>{s.name}</span>
            <span className="text-gray-500">{s.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacementStudents;
