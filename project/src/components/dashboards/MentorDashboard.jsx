const MentorDashboard = ({ activeTab }) => {
  if (activeTab === "dashboard") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Active Mentees</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Sessions This Week</h3>
            <p className="text-3xl font-bold">8</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Success Rate</h3>
            <p className="text-3xl font-bold">87%</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default MentorDashboard
