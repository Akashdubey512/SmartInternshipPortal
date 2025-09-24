import React, { useState } from "react";

const MentorSessions = () => {
  const [sessions, setSessions] = useState([
    { id: 1, student: "Akash", date: "2025-09-25", topic: "Resume Review" },
    { id: 2, student: "Priya", date: "2025-09-28", topic: "Mock Interview" },
  ]);

  const [newStudent, setNewStudent] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTopic, setNewTopic] = useState("");

  const handleAddSession = (e) => {
    e.preventDefault();
    if (newStudent && newDate && newTopic) {
      setSessions([
        ...sessions,
        { id: sessions.length + 1, student: newStudent, date: newDate, topic: newTopic },
      ]);
      setNewStudent("");
      setNewDate("");
      setNewTopic("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📅 Manage Sessions</h2>
      <form onSubmit={handleAddSession} className="bg-white shadow rounded-lg p-6 mb-6">
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <input
          type="text"
          placeholder="Session Topic"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded">
          Add Session
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Upcoming Sessions</h3>
      <ul className="bg-white shadow rounded-lg divide-y">
        {sessions.map((s) => (
          <li key={s.id} className="p-3 flex justify-between">
            <span>
              {s.student} — {s.date} ({s.topic})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorSessions;

