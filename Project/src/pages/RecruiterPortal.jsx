import React, { useState } from "react";
import { Bell, UserCircle2, BarChart, Users, FileText, Briefcase } from "lucide-react";

// Import recruiter section components
import RecruiterOverview from "../components/recruiterOverview";
import RecruiterStudents from "../components/recruiterStudents";
import RecruiterApplications from "../components/recruiterApplications";
import RecruiterInterviews from "../components/recruiterInterviews";

const RecruiterPortal = () => {
  const [activePage, setActivePage] = useState("overview");

  // Sidebar link helper
  const linkClass = (page) =>
    `flex items-center gap-2 py-2 px-4 rounded-md my-1 cursor-pointer ${
      activePage === page
        ? "bg-green-600 text-white font-medium"
        : "text-gray-300 hover:bg-green-600 hover:text-white"
    }`;

  // Dynamic render
  const renderContent = () => {
    switch (activePage) {
      case "students":
        return <RecruiterStudents />;
      case "applications":
        return <RecruiterApplications />;
      case "interviews":
        return <RecruiterInterviews />;
      default:
        return <RecruiterOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed h-full flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Recruiter Portal
        </div>
        <nav className="mt-4 flex-1 px-2">
          <div onClick={() => setActivePage("overview")} className={linkClass("overview")}>
            <BarChart size={18} /> Dashboard
          </div>
          <div onClick={() => setActivePage("students")} className={linkClass("students")}>
            <Users size={18} /> Students
          </div>
          <div onClick={() => setActivePage("applications")} className={linkClass("applications")}>
            <FileText size={18} /> Applications
          </div>
          <div onClick={() => setActivePage("interviews")} className={linkClass("interviews")}>
            <Briefcase size={18} /> Interviews
          </div>
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2025 CampusConnect
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Welcome, Recruiter 👋</h1>
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

export default RecruiterPortal;
