const RecruiterDashboard = ({ activeTab }) => {
  if (activeTab === "dashboard") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Open Positions</h3>
            <p className="text-3xl font-bold">8</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Applications</h3>
            <p className="text-3xl font-bold">95</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Interviews</h3>
            <p className="text-3xl font-bold">23</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default RecruiterDashboard
