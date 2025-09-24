import React, { useState } from "react";
import { Bell, UserCircle2, BarChart, Users, MessageCircle, Calendar } from "lucide-react";

// Import mentor section components
import MentorOverview from "../components/mentorOverview";
import MentorStudents from "../components/mentorStudents";
import MentorFeedback from "../components/mentorFeedback";
import MentorSessions from "../components/mentorSessions";

const MentorPortal = () => {
  const [activePage, setActivePage] = useState("overview");

  // Sidebar link helper
  const linkClass = (page) =>
    `flex items-center gap-2 py-2 px-4 rounded-md my-1 cursor-pointer ${
      activePage === page
        ? "bg-purple-600 text-white font-medium"
        : "text-gray-300 hover:bg-purple-600 hover:text-white"
    }`;

  // Dynamic content render
  const renderContent = () => {
    switch (activePage) {
      case "students":
        return <MentorStudents />;
      case "feedback":
        return <MentorFeedback />;
      case "sessions":
        return <MentorSessions />;
      default:
        return <MentorOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white fixed h-full flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          Mentor Portal
        </div>
        <nav className="mt-4 flex-1 px-2">
          <div onClick={() => setActivePage("overview")} className={linkClass("overview")}>
            <BarChart size={18} /> Dashboard
          </div>
          <div onClick={() => setActivePage("students")} className={linkClass("students")}>
            <Users size={18} /> Students
          </div>
          <div onClick={() => setActivePage("feedback")} className={linkClass("feedback")}>
            <MessageCircle size={18} /> Feedback
          </div>
          <div onClick={() => setActivePage("sessions")} className={linkClass("sessions")}>
            <Calendar size={18} /> Sessions
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
          <h1 className="text-xl font-semibold">Welcome, Mentor 👋</h1>
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

export default MentorPortal;
