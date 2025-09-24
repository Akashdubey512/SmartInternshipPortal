// /pages/studentDashboard.jsx

import React from "react";
import  {useState } from "react";
import { Bell, UserCircle2, BarChart, FileText, Briefcase, User } from "lucide-react";

// Import student section components
import StudentInterviews from "../components/studentInterviews";
import StudentMyapplications from "../components/studentMyapplications";
import StudentOpportunities from "../components/studentOpportunities";

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // Sidebar link helper
  const linkClass = (page) =>
    `flex items-center gap-2 py-2 px-4 rounded-md my-1 cursor-pointer ${
      activePage === page
        ? "bg-gray-700 text-white font-medium"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  // Render the main content depending on active page
  const renderContent = () => {
    switch (activePage) {
      case "applications":
        return <StudentMyapplications />;
      case "interviews":
        return <StudentInterviews />;
      case "opportunities":
        return <StudentOpportunities />;
      case "profile":
        return <StudentProfile />;
      default:
        return (
          <div>
            {/* === Default Dashboard Content === */}
            <h2 className="text-2xl font-bold mb-4">📊 Dashboard Overview</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Applications</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Interviews</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Selected</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <p className="text-gray-500">Under Review</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>

            {/* Calendar (simple grid for demo) */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">📅 Calendar</h3>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className="p-2 border rounded hover:bg-gray-100 cursor-pointer"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed h-full flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Student Portal
        </div>
        <nav className="mt-4 flex-1 px-2">
          <div onClick={() => setActivePage("dashboard")} className={linkClass("dashboard")}>
            <BarChart size={18} /> Dashboard
          </div>
          <div onClick={() => setActivePage("applications")} className={linkClass("applications")}>
            <FileText size={18} /> My Applications
          </div>
          <div onClick={() => setActivePage("interviews")} className={linkClass("interviews")}>
            <Briefcase size={18} /> Interviews
          </div>
          <div onClick={() => setActivePage("opportunities")} className={linkClass("opportunities")}>
            <BarChart size={18} /> Opportunities
          </div>
         
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2025 CampusConnect
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Welcome, Aman 👋</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Bell className="h-5 w-5 text-gray-700" />
            </button>
            <UserCircle2 className="h-8 w-8 text-gray-700" />
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default StudentDashboard;
