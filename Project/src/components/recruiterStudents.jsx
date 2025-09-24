import React, { useState } from "react";

const RecruiterStudents = () => {
  const [students] = useState([
    { id: 1, name: "Akash", course: "B.Tech CSE", resume: "akash_resume.pdf" },
    { id: 2, name: "Priya", course: "MBA HR", resume: "priya_resume.pdf" },
    { id: 3, name: "Rahul", course: "B.Tech ECE", resume: "rahul_resume.pdf" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎓 Student Profiles</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Resume</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.course}</td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline">
                    {s.resume}
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

export default RecruiterStudents;
