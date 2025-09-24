import React, { useState } from "react";

const PlacementAccess = () => {
  const [companies, setCompanies] = useState([
    { id: 1, name: "Google", access: false },
    { id: 2, name: "Microsoft", access: true },
    { id: 3, name: "Amazon", access: false },
  ]);

  const toggleAccess = (id) => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, access: !c.access } : c
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🔑 Manage Recruiter Access</h2>
      <div className="bg-white shadow rounded-lg p-6">
        {companies.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center py-2 border-b"
          >
            <span>{c.name}</span>
            <button
              onClick={() => toggleAccess(c.id)}
              className={`px-3 py-1 rounded ${
                c.access ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
            >
              {c.access ? "Revoke Access" : "Grant Access"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementAccess;
