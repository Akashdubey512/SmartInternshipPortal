"use client"

import { useState } from "react"

const InterviewReminder = ({ interviews }) => {
  const [dismissedReminders, setDismissedReminders] = useState(new Set())

  const dismissReminder = (id) => {
    setDismissedReminders((prev) => new Set([...prev, id]))
  }

  const activeReminders = interviews.filter((interview) => !dismissedReminders.has(interview.id))

  if (activeReminders.length === 0) return null

  return (
    <div className="mb-8 animate-fade-in-up">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Upcoming Interviews
          </h2>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            {activeReminders.length} pending
          </span>
        </div>

        <div className="space-y-3">
          {activeReminders.map((interview) => (
            <div key={interview.id} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-lg">{interview.company}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        interview.status === "confirmed"
                          ? "bg-green-500/20 text-green-100"
                          : "bg-yellow-500/20 text-yellow-100"
                      }`}
                    >
                      {interview.status}
                    </span>
                  </div>
                  <p className="text-white/90 mb-1">{interview.position}</p>
                  <div className="flex items-center space-x-4 text-sm text-white/80">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {interview.date}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {interview.time}
                    </span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">{interview.type}</span>
                  </div>
                </div>

                <button
                  onClick={() => dismissReminder(interview.id)}
                  className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Dismiss reminder"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InterviewReminder
