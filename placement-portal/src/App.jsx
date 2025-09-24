import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Layout/Header";
import Login from "./components/Auth/Login";
import StudentDashboard from "./components/Student/StudentDashboard";
import RecruiterDashboard from "./components/Recruiter/RecruiterDashboard";
import PlacementDashboard from "./components/PlacementCell/PlacementDashboard";

const AppContent = () => {
  const { user, userRole } = useAuth();

  if (!user) {
    return <Login />;
  }

  const renderDashboard = () => {
    switch (userRole) {
      case 'student':
        return <StudentDashboard />;
      case 'recruiter':
        return <RecruiterDashboard />;
      case 'placement-cell':
        return <PlacementDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {renderDashboard()}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<AppContent />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
