import React, { useState } from "react";

const PlacementCompanies = () => {
  const [companies, setCompanies] = useState([
    { id: 1, name: "TechCorp Solutions", access: "Granted" },
    { id: 2, name: "InnoSoft Pvt Ltd", access: "Pending" },
    { id: 3, name: "FutureWorks Ltd", access: "Granted" },
  ]);

  const toggleAccess = (id) => {
    setCompanies(
      companies.map((company) =>
        company.id === id
          ? { ...company, access: company.access === "Granted" ? "Revoked" : "Granted" }
          : company
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Recruiter Access</h1>
      <div className="bg-white shadow-md rounded-xl p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Company</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="border-t">
                <td className="p-3">{company.name}</td>
                <td className="p-3">{company.access}</td>
                <td className="p-3">
                  <button
                    onClick={() => toggleAccess(company.id)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      company.access === "Granted"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {company.access === "Granted" ? "Revoke" : "Grant"}
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

export default PlacementCompanies;
