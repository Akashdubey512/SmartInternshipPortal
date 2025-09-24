import React, { useState } from "react";
import {
  Bell,
  UserCircle2,
  Users,
  Briefcase,
  Key,
  BarChart2,
  FileText,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PlacementCell = () => {
  const [activePage, setActivePage] = useState("overview");

  // Sidebar link helper
  const linkClass = (page) =>
    `flex items-center gap-2 py-2 px-4 rounded-md my-1 cursor-pointer ${
      activePage === page
        ? "bg-gray-700 text-white font-medium"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  // Dummy data
  const totalStudents = 200;
  const placedStudents = 120;
  const remainingStudents = totalStudents - placedStudents;

  const branchData = [
    { branch: "CSE", students: 80, placed: 60 },
    { branch: "ECE", students: 50, placed: 30 },
    { branch: "ME", students: 40, placed: 20 },
    { branch: "EE", students: 30, placed: 10 },
  ];

  const pieData = [
    { name: "Placed", value: placedStudents },
    { name: "Remaining", value: remainingStudents },
  ];

  const COLORS = ["#10B981", "#EF4444"]; // green / red

  // Companies dummy
  const companies = [
    { name: "Google", role: "Software Engineer", date: "2025-09-30" },
    { name: "Microsoft", role: "Backend Developer", date: "2025-10-05" },
    { name: "Tesla", role: "Mechanical Engineer", date: "2025-10-12" },
  ];

  // Recruiters dummy
  const recruiters = [
    { name: "Alice Johnson", company: "Google", access: true },
    { name: "Bob Smith", company: "Microsoft", access: false },
  ];

  // Students dummy
  const students = [
    { name: "Rahul Sharma", branch: "CSE", status: "Placed" },
    { name: "Sneha Patel", branch: "ECE", status: "Not Placed" },
    { name: "Amit Singh", branch: "ME", status: "Placed" },
    { name: "Nisha Kumar", branch: "EE", status: "Not Placed" },
  ];

  // Dynamic content
  const renderContent = () => {
    switch (activePage) {
      case "overview":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">📊 Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Total Students</p>
                <p className="text-2xl font-bold">{totalStudents}</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Placed Students</p>
                <p className="text-2xl font-bold text-green-600">
                  {placedStudents}
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Remaining Students</p>
                <p className="text-2xl font-bold text-red-600">
                  {remainingStudents}
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Branches</p>
                <p className="text-2xl font-bold">{branchData.length}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {branchData.map((b, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold">{b.branch}</h3>
                  <p className="text-gray-500">Total: {b.students}</p>
                  <p className="text-green-600">Placed: {b.placed}</p>
                  <p className="text-red-600">
                    Remaining: {b.students - b.placed}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="font-semibold mb-4">Placement Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="font-semibold mb-4">Branch-wise Placements</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={branchData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="branch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="students"
                      fill="#3B82F6"
                      name="Total Students"
                    />
                    <Bar dataKey="placed" fill="#10B981" name="Placed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case "companies":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">🏢 Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((c, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  <p className="text-gray-500">{c.role}</p>
                  <p className="text-gray-500">Drive Date: {c.date}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "recruiters":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">🔑 Recruiter Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recruiters.map((r, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{r.name}</h3>
                    <p className="text-gray-500">{r.company}</p>
                  </div>
                  <button
                    className={`px-3 py-1 rounded ${
                      r.access ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {r.access ? "Access Granted" : "No Access"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case "opportunities":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">📄 Opportunities</h2>
            <ul className="space-y-4">
              {companies.map((c, i) => (
                <li
                  key={i}
                  className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-gray-500">{c.role}</p>
                  </div>
                  <span className="text-gray-600">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "students":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">👩‍🎓 Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((s, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="text-gray-500">Branch: {s.branch}</p>
                  <p
                    className={`font-semibold ${
                      s.status === "Placed" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {s.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "analytics":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">📈 Analytics</h2>
            <p className="mb-4 text-gray-600">
              Overview of placement trends, branch performance, and recruiter
              activity.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="font-semibold mb-4">Branch Placements</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={branchData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="branch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="students"
                      fill="#3B82F6"
                      name="Total Students"
                    />
                    <Bar dataKey="placed" fill="#10B981" name="Placed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="font-semibold mb-4">Placement Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed h-full flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Placement Cell
        </div>
        <nav className="mt-4 flex-1 px-2">
          <div onClick={() => setActivePage("overview")} className={linkClass("overview")}>
            <Users size={18} /> Overview
          </div>
          <div onClick={() => setActivePage("companies")} className={linkClass("companies")}>
            <Briefcase size={18} /> Companies
          </div>
          <div onClick={() => setActivePage("recruiters")} className={linkClass("recruiters")}>
            <Key size={18} /> Recruiter Access
          </div>
          <div onClick={() => setActivePage("opportunities")} className={linkClass("opportunities")}>
            <FileText size={18} /> Opportunities
          </div>
          <div onClick={() => setActivePage("students")} className={linkClass("students")}>
            <Users size={18} /> Students
          </div>
          <div onClick={() => setActivePage("analytics")} className={linkClass("analytics")}>
            <BarChart2 size={18} /> Analytics
          </div>
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2025 CampusConnect
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col">
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Welcome, Placement Officer 👋</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Bell className="h-5 w-5 text-gray-700" />
            </button>
            <UserCircle2 className="h-8 w-8 text-gray-700" />
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default PlacementCell;
