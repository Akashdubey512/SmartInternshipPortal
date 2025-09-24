import React, { useState } from "react";

const MentorFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [text, setText] = useState("");

  const students = ["Akash", "Priya", "Rahul"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStudent && text) {
      setFeedbacks([...feedbacks, { student: selectedStudent, fb: text }]);
      setText("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">💬 Give Feedback</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-6">
        <select
          className="border p-2 rounded w-full mb-3"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
        <textarea
          className="border p-2 rounded w-full mb-3"
          rows="3"
          placeholder="Enter feedback..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
          Submit
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Submitted Feedback</h3>
      <ul className="bg-white shadow rounded-lg divide-y">
        {feedbacks.map((f, idx) => (
          <li key={idx} className="p-3">
            <strong>{f.student}:</strong> {f.fb}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorFeedback;
