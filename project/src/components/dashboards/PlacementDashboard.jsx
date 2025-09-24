const PlacementDashboard = ({ activeTab }) => {
  if (activeTab === "dashboard") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Active Companies</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Total Applications</h3>
            <p className="text-3xl font-bold">156</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Placements</h3>
            <p className="text-3xl font-bold">42</p>
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === "companies") {
    return (
      <div className="glass-card rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Partner Companies</h3>
        <div className="space-y-4">
          {[
            { name: "Google", industry: "Technology", status: "Active", positions: 15 },
            { name: "Microsoft", industry: "Technology", status: "Active", positions: 12 },
            { name: "Amazon", industry: "E-commerce", status: "Active", positions: 20 },
          ].map((company, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{company.name}</h4>
                <p className="text-white/80">{company.industry}</p>
              </div>
              <div className="text-right">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs">{company.status}</span>
                <p className="text-white/60 text-sm mt-1">{company.positions} positions</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default PlacementDashboard
