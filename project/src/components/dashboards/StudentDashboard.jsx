const StudentDashboard = ({ activeTab, upcomingInterviews }) => {
  const stats = [
    {
      label: "Applications Sent",
      value: "12",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Interviews Scheduled",
      value: "3",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Offers Received",
      value: "1",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "ATS Score",
      value: "85%",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "from-orange-500 to-red-500",
    },
  ]

  if (activeTab === "dashboard") {
    return (
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="glass-card rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white/90">Application submitted to Google for SDE Intern position</span>
              <span className="text-white/60 text-sm ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-white/90">Interview scheduled with Microsoft</span>
              <span className="text-white/60 text-sm ml-auto">1 day ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-white/90">Resume updated with new ATS score: 85%</span>
              <span className="text-white/60 text-sm ml-auto">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === "applications") {
    return (
      <div className="glass-card rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">My Applications</h3>
        <div className="space-y-4">
          {[
            {
              company: "Google",
              position: "Software Engineer Intern",
              status: "Interview Scheduled",
              date: "2024-01-15",
            },
            { company: "Microsoft", position: "Data Analyst", status: "Under Review", date: "2024-01-10" },
            { company: "Amazon", position: "SDE Intern", status: "Applied", date: "2024-01-08" },
          ].map((app, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{app.company}</h4>
                  <p className="text-white/80">{app.position}</p>
                  <p className="text-white/60 text-sm">Applied on {app.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    app.status === "Interview Scheduled"
                      ? "bg-green-500/20 text-green-300"
                      : app.status === "Under Review"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-blue-500/20 text-blue-300"
                  }`}
                >
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (activeTab === "documents") {
    return (
      <div className="glass-card rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">My Documents</h3>
        <div className="space-y-4">
          {[
            { name: "Resume.pdf", type: "Resume", size: "245 KB", score: "85%" },
            { name: "Cover Letter.pdf", type: "Cover Letter", size: "180 KB", score: "78%" },
            { name: "Transcript.pdf", type: "Academic", size: "1.2 MB", score: "N/A" },
          ].map((doc, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">{doc.name}</h4>
                  <p className="text-white/60 text-sm">
                    {doc.type} • {doc.size}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/80">ATS Score</p>
                <p className="font-semibold">{doc.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (activeTab === "practice") {
    return (
      <div className="glass-card rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Interview Practice</h3>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Technical Questions</h4>
            <p className="text-white/80 mb-3">Practice coding problems and system design questions</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all">
              Start Practice
            </button>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Behavioral Questions</h4>
            <p className="text-white/80 mb-3">Prepare for HR rounds and behavioral interviews</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all">
              Start Practice
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default StudentDashboard
