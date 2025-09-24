import StudentDashboard from "./dashboards/StudentDashboard"
import PlacementDashboard from "./dashboards/PlacementDashboard"
import RecruiterDashboard from "./dashboards/RecruiterDashboard"
import MentorDashboard from "./dashboards/MentorDashboard"

const Dashboard = ({ activeTab, userRole, upcomingInterviews }) => {
  const renderDashboard = () => {
    switch (userRole) {
      case "student":
        return <StudentDashboard activeTab={activeTab} upcomingInterviews={upcomingInterviews} />
      case "placement":
        return <PlacementDashboard activeTab={activeTab} />
      case "recruiter":
        return <RecruiterDashboard activeTab={activeTab} />
      case "mentor":
        return <MentorDashboard activeTab={activeTab} />
      default:
        return <StudentDashboard activeTab={activeTab} upcomingInterviews={upcomingInterviews} />
    }
  }

  return <div className="animate-fade-in-up">{renderDashboard()}</div>
}

export default Dashboard
