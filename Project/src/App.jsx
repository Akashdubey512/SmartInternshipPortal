import React, { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./AuthPage.jsx";
import StudentDashboard from "./pages/studentDashboard.jsx";
import HRDashboard from "./pages/HRDashboard.jsx";
import PlacementDashboard from "./pages/PlacementDashboard.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [user, setUser] = useState(null); // store full user object

  // Landing Page
  if (currentPage === "landing") {
    return <LandingPage onGetStarted={() => setCurrentPage("auth")} />;
  }

  // Auth Page
  if (currentPage === "auth") {
    return (
      <AuthPage
        onLogin={(userData) => {
          setUser(userData); // store full user object
          setCurrentPage("dashboard");
        }}
        onBack={() => setCurrentPage("landing")}
      />
    );
  }

  // Dashboard (role based)
  if (currentPage === "dashboard") {
    if (!user) return null;

    if (user.role === "student") {
      return <StudentDashboard onLogout={() => setCurrentPage("landing")} />;
    }
    if (user.role === "hr") {
      return <HRDashboard onLogout={() => setCurrentPage("landing")} />;
    }
    if (user.role === "placement_cell") {
      return <PlacementDashboard onLogout={() => setCurrentPage("landing")} />;
    }
  }

  return <div className="p-10 text-red-600">Something went wrong!</div>;
}

export default App;
