"use client"

const Header = ({ isDarkMode, toggleDarkMode, userRole, setUserRole }) => {
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-white">
              CampusCareer<span className="text-orange-400">Hub</span>
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="student" className="text-gray-800">
                Student
              </option>
              <option value="placement" className="text-gray-800">
                Placement Cell
              </option>
              <option value="recruiter" className="text-gray-800">
                Recruiter
              </option>
              <option value="mentor" className="text-gray-800">
                Mentor
              </option>
            </select>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
