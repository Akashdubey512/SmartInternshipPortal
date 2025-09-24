import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./AuthPage";
import StudentDashboard from "./pages/studentDashboard";
import PlacementCellPortal from "./pages/placementCell";
import RecruiterPortal from "./pages/RecruiterPortal"; 
import MentorPortal from "./pages/MentorPortal";

const App = () => {
  const [user, setUser] = useState(null);

  // Handles login and redirects based on role
  const handleLogin = (userData, navigate) => {
    setUser(userData);

    switch (userData.role) {
      case "student":
        navigate("/student");
        break;
      case "hr":
        navigate("/recruiter");
        break;
      case "placement_cell":
        navigate("/placement");
        break;
      case "mentor":
        navigate("/mentor");
        break;
      default:
        navigate("/");
    }
  };

  const handleBack = (navigate) => {
    navigate("/");
  };

  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <header className="h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow">
          <h1 className="text-xl font-bold">🎓 Campus Connect</h1>
          <nav className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/auth">Login</Link>
          </nav>
        </header>

        {/* Routes */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/auth"
              element={
                <WithNavigate
                  render={(navigate) => (
                    <AuthPage
                      onLogin={(userData) => handleLogin(userData, navigate)}
                      onBack={() => handleBack(navigate)}
                    />
                  )}
                />
              }
            />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/placement" element={<PlacementCellPortal />} />
            <Route path="/recruiter" element={<RecruiterPortal />} />
            <Route path="/mentor" element={<MentorPortal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

// Helper wrapper to inject navigate into props
const WithNavigate = ({ render }) => {
  const navigate = useNavigate();
  return render(navigate);
};

export default App;
