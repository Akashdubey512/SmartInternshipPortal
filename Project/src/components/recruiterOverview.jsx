import React from "react";

const RecruiterOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 Recruiter Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Students</p>
          <p className="text-2xl font-bold">350</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Applications</p>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Offers Made</p>
          <p className="text-2xl font-bold">45</p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterOverview;

