import React from "react";

const MentorOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 Mentor Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Assigned Students</p>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Feedbacks Given</p>
          <p className="text-2xl font-bold">40</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Upcoming Sessions</p>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default MentorOverview;
