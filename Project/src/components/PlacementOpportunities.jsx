import React from "react";

const PlacementOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 Placement Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Total Companies</p>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Students Placed</p>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Offers</p>
          <p className="text-2xl font-bold">200+</p>
        </div>
      </div>
    </div>
  );
};

export default PlacementOverview;
