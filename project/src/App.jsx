"use client"

import { useState, useEffect, useRef } from "react"

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState("dashboard")
  const [userRole, setUserRole] = useState("student")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [aiResponse, setAiResponse] = useState("")
  const [interviewQuestion, setInterviewQuestion] = useState("")
  const [userAnswer, setUserAnswer] = useState("")
  const [atsScore, setAtsScore] = useState(78)
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [isScrolled, setIsScrolled] = useState(false) // removed dark mode state
  const aiMessagesEndRef = useRef(null)

  // Student data
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      title: "Google SDE Interview",
      date: "2024-01-15",
      time: "10:00 AM",
      company: "Google",
      type: "Technical",
      status: "Scheduled",
      priority: "high",
    },
    {
      id: 2,
      title: "Microsoft HR Round",
      date: "2024-01-17",
      time: "2:30 PM",
      company: "Microsoft",
      type: "HR",
      status: "Confirmed",
      priority: "medium",
    },
    {
      id: 3,
      title: "Amazon Coding Test",
      date: "2024-01-20",
      time: "9:00 AM",
      company: "Amazon",
      type: "Coding",
      status: "Pending",
      priority: "low",
    },
  ])

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Resume.pdf",
      type: "Resume",
      uploadDate: "2024-01-05",
      size: "245 KB",
      atsScore: 78,
      category: "application",
    },
    {
      id: 2,
      name: "B.Tech Degree.pdf",
      type: "Degree",
      uploadDate: "2024-01-03",
      size: "1.2 MB",
      atsScore: null,
      category: "academic",
    },
    {
      id: 3,
      name: "Python Certificate.pdf",
      type: "Certificate",
      uploadDate: "2023-12-15",
      size: "890 KB",
      atsScore: null,
      category: "certification",
    },
  ])

  // Placement Cell data
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      contact: "hr@google.com",
      status: "Active",
      internships: 15,
      placements: 8,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Technology",
      contact: "campus@microsoft.com",
      status: "Active",
      internships: 12,
      placements: 6,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Amazon",
      industry: "E-commerce",
      contact: "university@amazon.com",
      status: "Active",
      internships: 20,
      placements: 10,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Tata Consultancy Services",
      industry: "IT Services",
      contact: "campus@tcs.com",
      status: "Pending",
      internships: 25,
      placements: 15,
      rating: 4.2,
    },
  ])

  const [applications, setApplications] = useState([
    {
      id: 1,
      studentName: "John Doe",
      rollNo: "2021CS001",
      company: "Google",
      position: "SDE Intern",
      status: "Interview Scheduled",
      date: "2024-01-15",
      atsScore: 85,
    },
    {
      id: 2,
      studentName: "Jane Smith",
      rollNo: "2021CS002",
      company: "Microsoft",
      position: "Data Analyst",
      status: "Offer Extended",
      date: "2024-01-10",
      atsScore: 92,
    },
    {
      id: 3,
      studentName: "Robert Johnson",
      rollNo: "2021CS003",
      company: "Amazon",
      position: "SDE Intern",
      status: "Application Reviewed",
      date: "2024-01-08",
      atsScore: 76,
    },
  ])

  // Recruiter data
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: "SDE Intern",
      company: "Google",
      department: "Computer Science",
      positions: 5,
      deadline: "2024-02-01",
      status: "Open",
      applicants: 45,
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Google",
      department: "Mathematics & Computing",
      positions: 3,
      deadline: "2024-01-25",
      status: "Open",
      applicants: 32,
    },
    {
      id: 3,
      title: "Product Management Intern",
      company: "Google",
      department: "Business Administration",
      positions: 2,
      deadline: "2024-01-30",
      status: "Open",
      applicants: 18,
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Microsoft",
      department: "Computer Science",
      positions: 4,
      deadline: "2024-02-05",
      status: "Open",
      applicants: 67,
    },
    {
      id: 5,
      title: "Frontend Developer",
      company: "Amazon",
      department: "Computer Science",
      positions: 6,
      deadline: "2024-01-28",
      status: "Open",
      applicants: 89,
    },
  ])

  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "John Doe",
      rollNo: "2021CS001",
      department: "Computer Science",
      cgpa: 8.7,
      skills: ["Python", "Java", "React"],
      status: "Interview Scheduled",
      atsScore: 85,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Alice Brown",
      rollNo: "2021CS004",
      department: "Computer Science",
      cgpa: 9.2,
      skills: ["Python", "Machine Learning", "TensorFlow"],
      status: "Application Received",
      atsScore: 92,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Charlie Wilson",
      rollNo: "2021CS007",
      department: "Computer Science",
      cgpa: 7.9,
      skills: ["Java", "Spring Boot", "SQL"],
      status: "Application Received",
      atsScore: 76,
      rating: 4.0,
    },
  ])

  // Mentor data
  const [mentees, setMentees] = useState([
    {
      id: 1,
      name: "John Doe",
      rollNo: "2021CS001",
      department: "Computer Science",
      company: "Google",
      status: "Interview Scheduled",
      nextReview: "2024-01-12",
      progress: 75,
    },
    {
      id: 2,
      name: "Emma Davis",
      rollNo: "2021CS005",
      department: "Computer Science",
      company: "Microsoft",
      status: "Application Submitted",
      nextReview: "2024-01-15",
      progress: 60,
    },
    {
      id: 3,
      name: "Robert Johnson",
      rollNo: "2021CS003",
      department: "Computer Science",
      company: "Amazon",
      status: "Interview Scheduled",
      nextReview: "2024-01-18",
      progress: 68,
    },
  ])

  const skillSuggestions = [
    {
      skill: "Data Structures & Algorithms",
      course: "LeetCode Premium",
      platform: "LeetCode",
      url: "#",
      priority: "High",
      estimatedImprovement: 15,
    },
    {
      skill: "System Design",
      course: "Grokking the System Design Interview",
      platform: "Educative",
      url: "#",
      priority: "Medium",
      estimatedImprovement: 10,
    },
    {
      skill: "React.js",
      course: "Advanced React",
      platform: "Frontend Masters",
      url: "#",
      priority: "High",
      estimatedImprovement: 12,
    },
    {
      skill: "Database Design",
      course: "SQL Mastery",
      platform: "Udemy",
      url: "#",
      priority: "Medium",
      estimatedImprovement: 8,
    },
  ]

  const interviewQuestions = [
    "Explain the concept of polymorphism in OOP with a real-world example.",
    "How would you design a URL shortening service like bit.ly?",
    "What is the difference between TCP and UDP? When would you use each?",
    "Implement a function to check if a binary tree is balanced.",
    "How does React's virtual DOM work and why is it efficient?",
  ]

  // Animation and effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isParticlesActive, setIsParticlesActive] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Add initial notification
    setNotifications([
      {
        id: 1,
        message: "Google SDE Interview scheduled for Jan 15, 2024 at 10:00 AM",
        type: "event",
        time: new Date().toLocaleTimeString(),
      },
      {
        id: 2,
        message: "Your ATS score has been updated to 78",
        type: "update",
        time: new Date().toLocaleTimeString(),
      },
    ])

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set default dashboard based on role
  useEffect(() => {
    switch (userRole) {
      case "student":
        setActiveTab("dashboard")
        break
      case "placement-cell":
        setActiveTab("pc-dashboard")
        break
      case "recruiter":
        setActiveTab("recruiter-dashboard")
        break
      case "mentor":
        setActiveTab("mentor-dashboard")
        break
      default:
        setActiveTab("dashboard")
    }
  }, [userRole])

  // AI Functions
  const handleAskAI = (question) => {
    if (!question.trim()) return

    const responses = [
      "Based on your current ATS score of 78, I recommend focusing on these key areas:\n\n1. **Technical Skills Enhancement**: Your algorithm and data structure knowledge needs improvement. Consider practicing on LeetCode daily.\n\n2. **Resume Optimization**: Add more quantifiable achievements. Instead of 'Worked on web development', try 'Developed 3 responsive web applications serving 1000+ users'.\n\n3. **Project Portfolio**: Your current projects are good, but adding a full-stack project with database integration would significantly boost your profile.\n\n4. **Soft Skills**: Practice behavioral interview questions. Your technical skills are solid, but communication during interviews needs work.\n\nWould you like me to create a personalized 30-day improvement plan?",

      "Here's your personalized skill roadmap for the next 3 months:\n\n**Month 1: Foundation Strengthening**\n- Complete 50 LeetCode problems (Easy: 30, Medium: 20)\n- Build a CRUD application with authentication\n- Practice system design basics\n\n**Month 2: Advanced Concepts**\n- Learn advanced algorithms (Dynamic Programming, Graph algorithms)\n- Build a scalable web application\n- Start contributing to open source projects\n\n**Month 3: Interview Preparation**\n- Mock interviews with peers\n- Complete a capstone project\n- Practice behavioral questions\n\nThis plan should increase your ATS score to 85+ and significantly improve your interview success rate.",

      "Based on your profile analysis, here are the top companies that match your skills:\n\n**High Match (85%+)**\n- Google: Your React and algorithm skills align well\n- Microsoft: Strong fit for their internship programs\n- Amazon: Your problem-solving approach matches their culture\n\n**Medium Match (70-84%)**\n- Netflix: Your frontend skills are relevant\n- Uber: Good match for their engineering roles\n- Airbnb: Your full-stack experience is valuable\n\n**Recommendations:**\n1. Apply to Google and Microsoft first\n2. Strengthen your system design knowledge for Amazon\n3. Build more scalable projects for Netflix/Uber\n\nWould you like me to help you tailor your resume for any specific company?",
    ]

    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    setAiResponse(randomResponse)

    // Scroll to bottom of messages
    setTimeout(() => {
      aiMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const handlePracticeInterview = () => {
    const randomQuestion = interviewQuestions[Math.floor(Math.random() * interviewQuestions.length)]
    setInterviewQuestion(randomQuestion)
    setUserAnswer("")
  }

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) return

    const feedback = [
      "Great answer! Your explanation was clear and well-structured. Consider adding a specific example to make it even stronger.",
      "Good approach, but you could improve by discussing the time and space complexity of your solution.",
      "Excellent technical knowledge! Try to be more concise in your explanation for better impact.",
      "Your answer shows good understanding. Consider mentioning edge cases and how you'd handle them.",
      "Well thought out response! Adding real-world applications would make your answer more compelling.",
    ]

    const randomFeedback = feedback[Math.floor(Math.random() * feedback.length)]
    setAiResponse(`**Your Answer:** ${userAnswer}\n\n**AI Feedback:** ${randomFeedback}`)
    setUserAnswer("")
    setInterviewQuestion("")
  }

  // Component definitions
  const StatCard = ({ title, value, icon, color, trend, subtitle }) => (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-green-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-sm font-medium">+{trend}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-gray-300 text-sm">{title}</p>
        {subtitle && <p className="text-gray-400 text-xs">{subtitle}</p>}
      </div>
    </div>
  )

  const GlowingButton = ({ children, onClick, className = "", disabled = false }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )

  const ProgressBar = ({ value, color = "blue", label, showLabel = false }) => (
    <div className="w-full">
      <div className="w-full bg-white/10 rounded-full h-3 mb-2">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${
            color === "green" ? "bg-slate-400" : color === "blue" ? "bg-slate-500" : "bg-slate-400"
          }`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
      {showLabel && label && <div className="text-sm text-gray-400">{label}</div>}
    </div>
  )

  const FloatingCard = ({ children, delay = 0 }) => (
    <div
      className="animate-fade-in-up hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )

  const CalendarView = () => (
    <div className="border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>Upcoming Events</span>
      </h3>
      <div className="grid grid-cols-7 gap-2 mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }, (_, i) => {
          const day = i - 6
          const hasEvent = [15, 17, 20].includes(day)
          return (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                day > 0 && day <= 31
                  ? hasEvent
                    ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/50"
                    : "hover:bg-white/10 cursor-pointer"
                  : "text-gray-600"
              }`}
            >
              {day > 0 && day <= 31 ? day : ""}
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div
        className={`fixed inset-0 transition-opacity duration-800 ${isScrolled ? "opacity-0" : "opacity-100"}`}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-white/20 backdrop-blur-md bg-black/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CampusCareerHub
                </h1>
                <p className="text-sm text-gray-400">Professional Career Management</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-gray-300">{currentTime.toLocaleTimeString()}</div>

              <div className="relative">
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="p-3 bg-white border border-slate-300 rounded-xl focus:border-slate-500 focus:outline-none text-black font-medium"
                >
                  <option value="student" className="text-black">
                    Student
                  </option>
                  <option value="placement-cell" className="text-black">
                    Placement Cell
                  </option>
                  <option value="recruiter" className="text-black">
                    Recruiter
                  </option>
                  <option value="mentor" className="text-black">
                    Mentor
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interview Reminder */}
      {userRole === "student" && (
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Microsoft</h3>
                  <p className="text-lg">Data Analyst</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>2024-01-28</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>2:30 PM</span>
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">HR Round</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 mb-8">
        <div className="flex space-x-2 bg-white/10 backdrop-blur-md rounded-2xl p-2">
          {userRole === "student" && (
            <>
              {["dashboard", "events", "documents", "ai-assistant", "interview-practice"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
                </button>
              ))}
            </>
          )}

          {userRole === "placement-cell" && (
            <>
              {["pc-dashboard", "companies", "applications", "analytics", "students"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab === "pc-dashboard"
                    ? "Dashboard"
                    : tab === "students"
                      ? "Students"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </>
          )}

          {userRole === "recruiter" && (
            <>
              {["recruiter-dashboard", "job-postings", "applicants", "assign-mentors"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab === "recruiter-dashboard"
                    ? "Dashboard"
                    : tab === "job-postings"
                      ? "Job Postings"
                      : tab === "assign-mentors"
                        ? "Assign Mentors"
                        : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </>
          )}

          {userRole === "mentor" && (
            <>
              {["mentor-dashboard", "my-mentees", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-slate-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {tab === "mentor-dashboard" ? "Dashboard" : tab === "my-mentees" ? "My Mentees" : "Reviews"}
                </button>
              ))}
            </>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pb-12">
        {/* STUDENT VIEWS */}
        {userRole === "student" && activeTab === "dashboard" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Welcome Back, John Doe!
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Your personalized career dashboard to track applications, prepare for interviews, and land your dream
                job
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="ATS Score"
                value="92%"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                }
                color="bg-slate-500"
                trend={5}
              />
              <StatCard
                title="Upcoming Events"
                value={upcomingEvents.length}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
                color="bg-slate-600"
                subtitle="Next 30 days"
              />
              <StatCard
                title="Active Applications"
                value={3}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                color="bg-slate-500"
                trend={2}
              />
              <StatCard
                title="Success Rate"
                value="85%"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                color="bg-slate-600"
                subtitle="Interview to offer"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <CalendarView />

                <div className="border border-white/20 hover:border-slate-500/50 transition-all duration-300 rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-slate-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <div className="relative">
                        <span className="text-3xl">🤖</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">AI Career Assistant</h3>
                      <p className="text-gray-300">Get personalized career guidance and interview tips</p>
                    </div>
                  </div>

                  <div
                    className="space-y-4 mb-6 max-h-96 overflow-y-auto p-4 bg-black/20 rounded-2xl"
                    style={{ scrollbarWidth: "thin" }}
                  >
                    <div className="p-4 bg-slate-700 rounded-xl border border-slate-600">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div>
                          <div className="font-medium text-slate-300 text-lg">AI Assistant</div>
                          <div className="text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap">
                            Hello there! 👋 I'm your Career AI Assistant. Based on your current ATS score of 78, I've
                            analyzed your profile and have some personalized recommendations to help you improve. Let me
                            guide you through your career journey!
                          </div>
                        </div>
                      </div>
                    </div>

                    {aiResponse &&
                      aiResponse !==
                        "Hello there! 👋 I'm your Career AI Assistant. Based on your current ATS score of 78, I've analyzed your profile and have some personalized recommendations to help you improve. Let me guide you through your career journey!" && (
                        <div className="p-4 bg-slate-700 rounded-xl border border-slate-600">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-sm">🤖</span>
                            </div>
                            <div>
                              <div className="font-medium text-slate-300 text-lg">AI Assistant</div>
                              <div className="text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap">{aiResponse}</div>
                            </div>
                          </div>
                        </div>
                      )}

                    <div ref={aiMessagesEndRef} />
                  </div>

                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Ask me anything about your career journey..."
                      className="flex-1 p-4 bg-white/5 border border-white/20 rounded-xl focus:border-slate-500 focus:outline-none text-lg"
                      onKeyPress={(e) => e.key === "Enter" && handleAskAI(e.target.value)}
                    />
                    <GlowingButton
                      onClick={() =>
                        handleAskAI(
                          document.querySelector('input[placeholder="Ask me anything about your career journey..."]')
                            .value,
                        )
                      }
                      className="px-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </GlowingButton>
                  </div>
                </div>

                <div className="border border-white/20 hover:border-slate-500/50 transition-all duration-300 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>Quick Questions</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "How can I improve my ATS score?",
                      "What skills should I focus on next?",
                      "Which companies match my profile?",
                      "Create a 30-day study plan for me",
                      "Review my resume and suggest improvements",
                      "What salary should I expect for my skills?",
                    ].map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleAskAI(question)}
                        className="p-4 text-left bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10 hover:border-slate-500/50 hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                          <span className="font-medium">{question}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-white/20 hover:border-slate-500/50 transition-all duration-300 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Personalized Skill Roadmap</span>
                  </h3>
                  <div className="space-y-4">
                    {skillSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-xl border-l-4 transform hover:scale-105 transition-transform duration-300 ${
                          suggestion.priority === "High"
                            ? "border-red-500 bg-red-500/10"
                            : suggestion.priority === "Medium"
                              ? "border-yellow-500 bg-yellow-500/10"
                              : "border-green-500 bg-green-500/10"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="font-bold text-lg">{suggestion.skill}</div>
                            <div className="text-sm text-gray-400">{suggestion.course}</div>
                            <div className="text-xs text-gray-500">on {suggestion.platform}</div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              suggestion.priority === "High"
                                ? "bg-red-500/20 text-red-300"
                                : suggestion.priority === "Medium"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-green-500/20 text-green-300"
                            }`}
                          >
                            {suggestion.priority}
                          </span>
                        </div>
                        <ProgressBar
                          value={suggestion.estimatedImprovement * 6}
                          color="green"
                          label={`Expected Improvement: +${suggestion.estimatedImprovement} points`}
                          showLabel={true}
                        />
                        <div className="mt-4 flex space-x-3">
                          <GlowingButton className="flex-1 py-2 text-sm">
                            <span className="mr-1">▶️</span> Start Learning
                          </GlowingButton>
                          <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {userRole === "student" && activeTab === "events" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="mb-3">
                    <div className="font-medium text-lg text-white">{event.title}</div>
                    <div className="text-sm text-gray-300">
                      {event.company} - {event.type}
                    </div>
                    <div className="text-sm text-gray-400">
                      {event.date} at {event.time}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === "Scheduled"
                          ? "bg-slate-500 text-white"
                          : event.status === "Confirmed"
                            ? "bg-slate-600 text-white"
                            : "bg-slate-400 text-white"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {userRole === "student" && activeTab === "documents" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">My Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="mb-3">
                    <div className="font-medium text-lg text-white">{doc.name}</div>
                    <div className="text-sm text-gray-300">
                      {doc.type} - {doc.size}
                    </div>
                    <div className="text-sm text-gray-400">Uploaded: {doc.uploadDate}</div>
                  </div>
                  {doc.atsScore && (
                    <div className="flex justify-end">
                      <div className="text-sm font-bold text-cyan-400">ATS: {doc.atsScore}%</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {userRole === "student" && activeTab === "ai-assistant" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Career Assistant
              </h2>
              <GlowingButton className="py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500">
                <span className="mr-2">⚙️</span> Settings
              </GlowingButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="border border-white/20 hover:border-purple-500/50 transition-all duration-300 rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
                      <div className="relative">
                        <span className="text-3xl">🤖</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Career AI Assistant</h3>
                      <p className="text-gray-400 text-lg">Your 24/7 personal career coach powered by advanced AI</p>
                    </div>
                  </div>

                  <div
                    className="space-y-4 mb-6 max-h-96 overflow-y-auto p-4 bg-black/20 rounded-2xl"
                    style={{ scrollbarWidth: "thin" }}
                  >
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div>
                          <div className="font-medium text-purple-300 text-lg">AI Assistant</div>
                          <div className="text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap">
                            Hello there! 👋 I'm your Career AI Assistant. Based on your current ATS score of 78, I've
                            analyzed your profile and have some personalized recommendations to help you improve. Let me
                            guide you through your career journey!
                          </div>
                        </div>
                      </div>
                    </div>

                    {aiResponse &&
                      aiResponse !==
                        "Hello there! 👋 I'm your Career AI Assistant. Based on your current ATS score of 78, I've analyzed your profile and have some personalized recommendations to help you improve. Let me guide you through your career journey!" && (
                        <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-sm">🤖</span>
                            </div>
                            <div>
                              <div className="font-medium text-blue-300 text-lg">AI Assistant</div>
                              <div className="text-gray-300 mt-2 leading-relaxed whitespace-pre-wrap">{aiResponse}</div>
                            </div>
                          </div>
                        </div>
                      )}

                    <div ref={aiMessagesEndRef} />
                  </div>

                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Ask me anything about your career journey..."
                      className="flex-1 p-4 bg-white/5 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
                      onKeyPress={(e) => e.key === "Enter" && handleAskAI(e.target.value)}
                    />
                    <GlowingButton
                      onClick={() =>
                        handleAskAI(
                          document.querySelector('input[placeholder="Ask me anything about your career journey..."]')
                            .value,
                        )
                      }
                      className="px-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </GlowingButton>
                  </div>
                </div>

                <div className="border border-white/20 hover:border-purple-500/50 transition-all duration-300 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span>Quick Questions</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "How can I improve my ATS score?",
                      "What skills should I focus on next?",
                      "Which companies match my profile?",
                      "Create a 30-day study plan for me",
                      "Review my resume and suggest improvements",
                      "What salary should I expect for my skills?",
                    ].map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleAskAI(question)}
                        className="p-4 text-left bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                          <span className="font-medium">{question}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-white/20 hover:border-purple-500/50 transition-all duration-300 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Personalized Skill Roadmap</span>
                  </h3>
                  <div className="space-y-4">
                    {skillSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className={`p-5 rounded-xl border-l-4 transform hover:scale-105 transition-transform duration-300 ${
                          suggestion.priority === "High"
                            ? "border-red-500 bg-red-500/10"
                            : suggestion.priority === "Medium"
                              ? "border-yellow-500 bg-yellow-500/10"
                              : "border-green-500 bg-green-500/10"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="font-bold text-lg">{suggestion.skill}</div>
                            <div className="text-sm text-gray-400">{suggestion.course}</div>
                            <div className="text-xs text-gray-500">on {suggestion.platform}</div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              suggestion.priority === "High"
                                ? "bg-red-500/20 text-red-300"
                                : suggestion.priority === "Medium"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-green-500/20 text-green-300"
                            }`}
                          >
                            {suggestion.priority}
                          </span>
                        </div>
                        <ProgressBar
                          value={suggestion.estimatedImprovement * 6}
                          color="green"
                          label={`Expected Improvement: +${suggestion.estimatedImprovement} points`}
                          showLabel={true}
                        />
                        <div className="mt-4 flex space-x-3">
                          <GlowingButton className="flex-1 py-2 text-sm">
                            <span className="mr-1">▶️</span> Start Learning
                          </GlowingButton>
                          <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {userRole === "student" && activeTab === "interview-practice" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interview Practice Lab
              </h2>
              <div className="flex space-x-3">
                <GlowingButton className="py-2 px-4 text-sm">
                  <span className="mr-1">📊</span> View Statistics
                </GlowingButton>
                <GlowingButton className="py-2 px-4 text-sm bg-gradient-to-r from-orange-500 to-red-500">
                  <span className="mr-1">🎯</span> Focus Areas
                </GlowingButton>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="border border-white/20 hover:border-purple-500/50 transition-all duration-300 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Practice Interview</h3>
                        <p className="text-gray-400">Get real-time AI feedback on your answers</p>
                      </div>
                    </div>
                    <GlowingButton onClick={handlePracticeInterview} className="px-6 py-3">
                      <span className="mr-2">🎲</span> New Question
                    </GlowingButton>
                  </div>

                  {interviewQuestion ? (
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                        <h4 className="text-lg font-bold mb-3 text-blue-300">Interview Question:</h4>
                        <p className="text-gray-300 text-lg leading-relaxed">{interviewQuestion}</p>
                      </div>

                      <div>
                        <label className="block mb-3 text-sm font-bold">Your Answer:</label>
                        <textarea
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="Type your answer here..."
                          className="w-full p-4 bg-white/5 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none min-h-32 text-lg"
                        />
                      </div>

                      <div className="flex space-x-4">
                        <GlowingButton onClick={handleSubmitAnswer} className="flex-1 py-3 text-lg">
                          <span className="mr-2">✅</span> Submit Answer
                        </GlowingButton>
                        <GlowingButton
                          onClick={handlePracticeInterview}
                          className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600"
                        >
                          <span className="mr-2">🔄</span> New Question
                        </GlowingButton>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Click "New Question" to start practicing with AI-powered interview questions tailored to your
                        profile.
                      </p>
                      <GlowingButton onClick={handlePracticeInterview} className="px-8 py-4 text-lg">
                        <span className="mr-2">🚀</span> Start Practice Session
                      </GlowingButton>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-white/20 hover:border-purple-500/50 transition-all duration-300 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>Practice Stats</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Questions Answered</span>
                        <span className="font-bold text-green-400">47</span>
                      </div>
                      <ProgressBar value={75} color="green" showLabel={false} />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Average Score</span>
                        <span className="font-bold text-blue-400">8.2/10</span>
                      </div>
                      <ProgressBar value={82} color="blue" showLabel={false} />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Improvement</span>
                        <span className="font-bold text-purple-400">+15%</span>
                      </div>
                      <ProgressBar value={65} color="purple" showLabel={false} />
                    </div>
                  </div>
                </div>

                <div className="border border-white/20 hover:border-purple-500/50 transition-all duration-300 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Recent Sessions</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { topic: "System Design", score: 9, date: "2024-01-10" },
                      { topic: "Algorithms", score: 7, date: "2024-01-08" },
                      { topic: "Behavioral", score: 8, date: "2024-01-05" },
                    ].map((session, index) => (
                      <div key={index} className="p-3 bg-white/5 rounded-xl">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">System Design</div>
                            <div className="text-xs text-gray-500">2024-01-10</div>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                              session.score >= 8
                                ? "bg-green-500/20 text-green-300"
                                : session.score >= 6
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-red-500/20 text-red-300"
                            }`}
                          >
                            {session.score}/10
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PLACEMENT CELL VIEWS */}
        {userRole === "placement-cell" && activeTab === "pc-dashboard" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Placement Cell Dashboard
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Manage companies, track applications, and optimize placement outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Active Companies"
                value={companies.filter((c) => c.status === "Active").length}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                }
                color="bg-gradient-to-r from-green-500 to-blue-500"
                trend={12}
              />
              <StatCard
                title="Total Applications"
                value={applications.length}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                color="bg-gradient-to-r from-blue-500 to-indigo-500"
                subtitle="This semester"
              />
              <StatCard
                title="Placement Rate"
                value="78%"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                }
                color="bg-gradient-to-r from-purple-500 to-pink-500"
                trend={8}
              />
              <StatCard
                title="Avg. Package"
                value="₹12.5 LPA"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                }
                color="bg-gradient-to-r from-yellow-500 to-orange-500"
                trend={15}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-white/20 hover:border-green-500/50 transition-all duration-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span>Company Status</span>
                  </h3>
                  <GlowingButton
                    onClick={() => setActiveTab("companies")}
                    className="py-2 px-4 text-sm bg-gradient-to-r from-green-500 to-blue-500"
                  >
                    Manage Companies
                  </GlowingButton>
                </div>
                <div className="space-y-4">
                  {companies.slice(0, 4).map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                          {company.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-lg">{company.name}</div>
                          <div className="text-sm text-gray-400">{company.industry}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            company.status === "Active"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {company.status}
                        </div>
                        <div className="text-xs text-gray-500">{company.internships} Internships</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/20 hover:border-green-500/50 transition-all duration-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Recent Applications</span>
                  </h3>
                  <GlowingButton
                    onClick={() => setActiveTab("applications")}
                    className="py-2 px-4 text-sm bg-gradient-to-r from-green-500 to-blue-500"
                  >
                    View All
                  </GlowingButton>
                </div>
                <div className="space-y-4">
                  {applications.slice(0, 4).map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-lg">{app.studentName}</div>
                        <div className="text-sm text-gray-400">
                          {app.company} - {app.position}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            app.status === "Interview Scheduled"
                              ? "bg-blue-500/20 text-blue-300"
                              : app.status === "Offer Extended"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-yellow-500/20 text-yellow-300"
                          }`}
                        >
                          {app.status}
                        </div>
                        <div className="text-xs text-gray-500">ATS: {app.atsScore}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {userRole === "placement-cell" && activeTab === "companies" && (
          <div className="border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Partner Companies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Google", logo: "🔍", openings: 15, package: "₹25L", tier: "Tier 1" },
                { name: "Microsoft", logo: "🪟", openings: 12, package: "₹22L", tier: "Tier 1" },
                { name: "Amazon", logo: "📦", openings: 20, package: "₹18L", tier: "Tier 1" },
                { name: "Flipkart", logo: "🛒", openings: 8, package: "₹15L", tier: "Tier 2" },
                { name: "Zomato", logo: "🍕", openings: 6, package: "₹12L", tier: "Tier 2" },
                { name: "Paytm", logo: "💳", openings: 10, package: "₹14L", tier: "Tier 2" },
              ].map((company, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-2xl">{company.logo}</div>
                    <div>
                      <h4 className="font-semibold text-white">{company.name}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          company.tier === "Tier 1" ? "bg-slate-500 text-white" : "bg-slate-400 text-white"
                        }`}
                      >
                        {company.tier}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Openings:</span>
                      <span className="text-white font-medium">{company.openings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Package:</span>
                      <span className="text-white font-medium">{company.package}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {userRole === "placement-cell" && activeTab === "applications" && (
          <div className="border border-white/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Recent Applications</h3>
            <div className="space-y-4">
              {[
                {
                  student: "Rahul Sharma",
                  company: "Google",
                  position: "SDE-1",
                  status: "Interview Scheduled",
                  cgpa: "8.9",
                  branch: "CSE",
                },
                {
                  student: "Priya Patel",
                  company: "Microsoft",
                  position: "Data Analyst",
                  status: "Under Review",
                  cgpa: "9.1",
                  branch: "IT",
                },
                {
                  student: "Amit Kumar",
                  company: "Amazon",
                  position: "SDE-2",
                  status: "Selected",
                  cgpa: "8.7",
                  branch: "CSE",
                },
                {
                  student: "Sneha Singh",
                  company: "Flipkart",
                  position: "Product Manager",
                  status: "Applied",
                  cgpa: "8.5",
                  branch: "ECE",
                },
                {
                  student: "Vikash Gupta",
                  company: "Zomato",
                  position: "Backend Developer",
                  status: "Rejected",
                  cgpa: "8.2",
                  branch: "IT",
                },
              ].map((app, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h4 className="font-semibold text-white">{app.student}</h4>
                          <p className="text-gray-300 text-sm">
                            {app.branch} • CGPA: {app.cgpa}
                          </p>
                        </div>
                        <div>
                          <p className="text-white font-medium">{app.company}</p>
                          <p className="text-gray-300 text-sm">{app.position}</p>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        app.status === "Selected"
                          ? "bg-green-500 text-white"
                          : app.status === "Interview Scheduled"
                            ? "bg-slate-500 text-white"
                            : app.status === "Under Review"
                              ? "bg-slate-400 text-white"
                              : app.status === "Rejected"
                                ? "bg-red-500 text-white"
                                : "bg-slate-300 text-gray-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {userRole === "placement-cell" && activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Department-wise Placement Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { dept: "Computer Science", placed: 145, total: 160, percentage: 91 },
                  { dept: "Information Technology", placed: 128, total: 140, percentage: 91 },
                  { dept: "Electronics", placed: 89, total: 120, percentage: 74 },
                  { dept: "Mechanical", placed: 67, total: 100, percentage: 67 },
                ].map((dept, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">{dept.dept}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Placed:</span>
                        <span className="text-white">
                          {dept.placed}/{dept.total}
                        </span>
                      </div>
                      <ProgressBar value={dept.percentage} color="blue" />
                      <div className="text-center">
                        <span className="text-lg font-bold text-white">{dept.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Monthly Placement Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { month: "October", placements: 156, growth: "+12%" },
                  { month: "November", placements: 189, growth: "+21%" },
                  { month: "December", placements: 234, growth: "+24%" },
                ].map((month, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 text-center">
                    <h4 className="font-semibold text-white mb-2">{month.month}</h4>
                    <div className="text-2xl font-bold text-white mb-1">{month.placements}</div>
                    <div className="text-green-400 text-sm font-medium">{month.growth}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {userRole === "placement-cell" && activeTab === "students" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Student Management
              </h2>
              <GlowingButton className="py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500">
                <span className="mr-2">➕</span> Add Student
              </GlowingButton>
            </div>

            <div className="border border-white/20 hover:border-green-500/50 transition-all duration-300 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <select className="p-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-500 focus:outline-none text-sm">
                    <option>All Departments</option>
                    <option>Computer Science</option>
                    <option>Electronics</option>
                    <option>Mechanical</option>
                  </select>
                  <select className="p-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-500 focus:outline-none text-sm">
                    <option>All Years</option>
                    <option>Final Year</option>
                    <option>Pre-Final Year</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Search students..."
                  className="p-3 bg-white/5 border border-white/20 rounded-xl focus:border-green-500 focus:outline-none text-sm"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-6 font-bold text-lg">Student</th>
                      <th className="text-left py-4 px-6 font-bold text-lg">Roll No</th>
                      <th className="text-left py-4 px-6 font-bold text-lg">Department</th>
                      <th className="text-left py-4 px-6 font-bold text-lg">CGPA</th>
                      <th className="text-left py-4 px-6 font-bold text-lg">Applications</th>
                      <th className="text-left py-4 px-6 font-bold text-lg">Status</th>
                      <th className="text-left py-4 px-6 font-bold text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants.map((student, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-all duration-300">
                        <td className="py-4 px-6">
                          <div className="font-bold text-lg">{student.name}</div>
                        </td>
                        <td className="py-4 px-6 text-gray-300">{student.rollNo}</td>
                        <td className="py-4 px-6 text-gray-300">{student.department}</td>
                        <td className="py-4 px-6">
                          <div
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                              student.cgpa >= 8.5
                                ? "bg-green-500/20 text-green-300"
                                : student.cgpa >= 7.5
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-red-500/20 text-red-300"
                            }`}
                          >
                            {student.cgpa}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-300">3 Active</td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold ${
                              student.status === "Interview Scheduled"
                                ? "bg-blue-500/20 text-blue-300"
                                : student.status === "Application Received"
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-green-500/20 text-green-300"
                            }`}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-3">
                            <button className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm hover:bg-blue-500/30 transition-colors font-medium">
                              View Profile
                            </button>
                            <button className="px-4 py-2 bg-green-500/20 text-green-300 rounded-xl text-sm hover:bg-green-500/30 transition-colors font-medium">
                              Contact
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* RECRUITER VIEWS */}
        {userRole === "recruiter" && activeTab === "recruiter-dashboard" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Recruiter Dashboard
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Manage job postings, review applications, and find the best talent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Active Job Posts"
                value="12"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                    />
                  </svg>
                }
                color="bg-slate-500"
                trend={3}
              />
              <StatCard
                title="Total Applications"
                value="456"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                color="bg-slate-600"
                trend={28}
              />
              <StatCard
                title="Interviews Scheduled"
                value="89"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                }
                color="bg-slate-500"
                trend={12}
              />
              <StatCard
                title="Hired Candidates"
                value="34"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                color="bg-slate-600"
                trend={8}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-white/20 hover:border-orange-500/50 transition-all duration-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                      />
                    </svg>
                    <span>Active Job Postings</span>
                  </h3>
                  <GlowingButton
                    onClick={() => setActiveTab("job-postings")}
                    className="py-2 px-4 text-sm bg-gradient-to-r from-orange-500 to-red-500"
                  >
                    Manage Jobs
                  </GlowingButton>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Senior Software Engineer",
                      department: "Engineering",
                      applications: 45,
                      posted: "2024-01-10",
                      deadline: "2024-01-25",
                    },
                    {
                      title: "Data Scientist",
                      department: "Analytics",
                      applications: 32,
                      posted: "2024-01-12",
                      deadline: "2024-01-28",
                    },
                    {
                      title: "Product Manager",
                      department: "Product",
                      applications: 28,
                      posted: "2024-01-15",
                      deadline: "2024-01-30",
                    },
                    {
                      title: "UI/UX Designer",
                      department: "Design",
                      applications: 19,
                      posted: "2024-01-18",
                      deadline: "2024-02-02",
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white">{job.title}</h4>
                          <p className="text-gray-300 text-sm">
                            {job.department} • Posted: {job.posted}
                          </p>
                          <p className="text-gray-400 text-xs">Deadline: {job.deadline}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">{job.applications}</div>
                          <div className="text-gray-300 text-sm">Applications</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/20 hover:border-orange-500/50 transition-all duration-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>Top Applicants</span>
                  </h3>
                  <GlowingButton
                    onClick={() => setActiveTab("applicants")}
                    className="py-2 px-4 text-sm bg-gradient-to-r from-orange-500 to-red-500"
                  >
                    View All
                  </GlowingButton>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      name: "Arjun Mehta",
                      position: "Senior Software Engineer",
                      experience: "3 years",
                      skills: "React, Node.js, Python",
                      status: "Interview Scheduled",
                    },
                    {
                      name: "Kavya Reddy",
                      position: "Data Scientist",
                      experience: "2 years",
                      skills: "Python, ML, SQL",
                      status: "Under Review",
                    },
                    {
                      name: "Rohit Sharma",
                      position: "Product Manager",
                      experience: "4 years",
                      skills: "Strategy, Analytics",
                      status: "Shortlisted",
                    },
                    {
                      name: "Anita Singh",
                      position: "UI/UX Designer",
                      experience: "2.5 years",
                      skills: "Figma, Adobe XD",
                      status: "Applied",
                    },
                  ].map((applicant, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{applicant.name}</h4>
                          <p className="text-gray-300 text-sm">
                            {applicant.position} • {applicant.experience}
                          </p>
                          <p className="text-gray-400 text-xs">Skills: {applicant.skills}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            applicant.status === "Interview Scheduled"
                              ? "bg-slate-500 text-white"
                              : applicant.status === "Shortlisted"
                                ? "bg-slate-600 text-white"
                                : applicant.status === "Under Review"
                                  ? "bg-slate-400 text-white"
                                  : "bg-slate-300 text-gray-800"
                          }`}
                        >
                          {applicant.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RECRUITER JOB POSTINGS - Add demo data */}
        {userRole === "recruiter" && activeTab === "job-postings" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">My Job Postings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {jobPostings.map((job, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="mb-3">
                    <h4 className="font-semibold text-white text-lg">{job.title}</h4>
                    <p className="text-gray-300 text-sm">
                      {job.company} - {job.department}
                    </p>
                    <p className="text-gray-400 text-sm">Deadline: {job.deadline}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-400 font-bold">{job.applicants} applicants</div>
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-600 text-white">{job.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RECRUITER APPLICANTS - Add demo data */}
        {userRole === "recruiter" && activeTab === "applicants" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Applicants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applicants.map((applicant, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="mb-3">
                    <h4 className="font-semibold text-white text-lg">{applicant.name}</h4>
                    <p className="text-gray-300 text-sm">
                      {applicant.rollNo} - {applicant.department}
                    </p>
                    <p className="text-gray-400 text-sm">CGPA: {applicant.cgpa}</p>
                    <p className="text-gray-400 text-xs">Skills: {applicant.skills.join(", ")}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-400 font-bold">ATS: {applicant.atsScore}%</div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        applicant.status === "Interview Scheduled"
                          ? "bg-slate-600 text-white"
                          : "bg-slate-500 text-white"
                      }`}
                    >
                      {applicant.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RECRUITER ASSIGN MENTORS - Add demo data */}
        {userRole === "recruiter" && activeTab === "assign-mentors" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Assign Mentors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Senior Software Engineer",
                  company: "Google",
                  expertise: "Backend Development",
                  rating: 4.8,
                },
                {
                  name: "Prof. Michael Chen",
                  role: "Data Science Lead",
                  company: "Google",
                  expertise: "Machine Learning",
                  rating: 4.9,
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Product Manager",
                  company: "Google",
                  expertise: "Product Strategy",
                  rating: 4.7,
                },
                {
                  name: "Mr. David Kim",
                  role: "Frontend Architect",
                  company: "Google",
                  expertise: "React & UI/UX",
                  rating: 4.6,
                },
              ].map((mentor, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <input type="checkbox" className="w-5 h-5 accent-cyan-500 mt-1" />
                    <div className="flex-1">
                      <div className="font-bold text-lg text-white">{mentor.name}</div>
                      <div className="text-sm text-gray-300">{mentor.role}</div>
                      <div className="text-sm text-gray-400">{mentor.company}</div>
                      <div className="text-sm text-gray-400">Expertise: {mentor.expertise}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${i < Math.floor(mentor.rating) ? "text-yellow-400" : "text-gray-600"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-300 ml-1">{mentor.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MENTOR VIEWS */}
        {userRole === "mentor" && activeTab === "mentor-dashboard" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mentor Dashboard
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Guide students through their internship and placement journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Active Mentees"
                value="24"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-2.239"
                    />
                  </svg>
                }
                color="bg-slate-500"
                trend={4}
              />
              <StatCard
                title="Sessions This Month"
                value="67"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                }
                color="bg-slate-600"
                trend={12}
              />
              <StatCard
                title="Success Rate"
                value="89%"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                color="bg-slate-500"
                subtitle="Placement rate"
              />
              <StatCard
                title="Average Rating"
                value="4.8"
                icon={
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976-2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                }
                color="bg-slate-600"
                subtitle="From mentees"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-white/20 hover:border-blue-500/50 transition-all duration-300 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-2.239"
                      />
                    </svg>
                    <span>Your Mentees</span>
                  </h3>
                  <GlowingButton
                    onClick={() => setActiveTab("my-mentees")}
                    className="py-2 px-4 text-sm bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    View All
                  </GlowingButton>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ravi Kumar",
                      branch: "CSE",
                      year: "Final Year",
                      goal: "Software Engineer",
                      progress: 85,
                      lastSession: "2024-01-20",
                      mentor: "Dr. Rajesh Sharma",
                      email: "ravi.kumar@college.edu",
                      phone: "+91 9876543210",
                    },
                    {
                      name: "Pooja Sharma",
                      branch: "IT",
                      year: "Pre-Final",
                      goal: "Data Analyst",
                      progress: 72,
                      lastSession: "2024-01-19",
                      mentor: "Prof. Anita Singh",
                      email: "pooja.sharma@college.edu",
                      phone: "+91 9876543211",
                    },
                    {
                      name: "Akash Gupta",
                      branch: "ECE",
                      year: "Final Year",
                      goal: "Product Manager",
                      progress: 68,
                      lastSession: "2024-01-18",
                      mentor: "Dr. Vikram Patel",
                      email: "akash.gupta@college.edu",
                      phone: "+91 9876543212",
                    },
                    {
                      name: "Neha Patel",
                      branch: "CSE",
                      year: "Pre-Final",
                      goal: "Full Stack Developer",
                      progress: 91,
                      lastSession: "2024-01-21",
                      mentor: "Prof. Suresh Kumar",
                      email: "neha.patel@college.edu",
                      phone: "+91 9876543213",
                    },
                    {
                      name: "Rohit Singh",
                      branch: "IT",
                      year: "Final Year",
                      goal: "DevOps Engineer",
                      progress: 78,
                      lastSession: "2024-01-17",
                      mentor: "Dr. Priya Mehta",
                      email: "rohit.singh@college.edu",
                      phone: "+91 9876543214",
                    },
                    {
                      name: "Priya Agarwal",
                      branch: "CSE",
                      year: "Pre-Final",
                      goal: "UI/UX Designer",
                      progress: 83,
                      lastSession: "2024-01-22",
                      mentor: "Prof. Amit Joshi",
                      email: "priya.agarwal@college.edu",
                      phone: "+91 9876543215",
                    },
                  ].map((mentee, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="font-bold text-xl text-white">{mentee.name}</div>
                          <div className="text-sm text-gray-300">
                            {mentee.branch} • {mentee.year}
                          </div>
                          <div className="text-gray-400 text-sm">Goal: {mentee.goal}</div>
                          <div className="text-gray-400 text-xs mt-1">Mentor: {mentee.mentor}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{mentee.progress}%</div>
                          <div className="text-gray-300 text-sm">Progress</div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <ProgressBar value={mentee.progress} color="cyan" />
                      </div>
                      <div className="space-y-1 text-xs text-gray-400">
                        <div>📧 {mentee.email}</div>
                        <div>📱 {mentee.phone}</div>
                        <div>📅 Last session: {mentee.lastSession}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/20 hover:border-blue-500/50 transition-all duration-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Upcoming Reviews</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { student: "Ravi Kumar", company: "Google", date: "2024-01-12", time: "2:00 PM", progress: 75 },
                    {
                      student: "Pooja Sharma",
                      company: "Microsoft",
                      date: "2024-01-15",
                      time: "4:30 PM",
                      progress: 60,
                    },
                    {
                      student: "Akash Gupta",
                      company: "Amazon",
                      date: "2024-01-18",
                      time: "11:00 AM",
                      progress: 68,
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="font-bold text-lg mb-2">{review.student}</div>
                      <div className="text-sm text-gray-400 mb-3">{review.company}</div>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">
                            <div className="font-medium">{review.date}</div>
                            <div className="text-xs text-gray-500">{review.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-400">{review.progress}%</div>
                          <div className="text-xs text-gray-500">Progress</div>
                        </div>
                      </div>
                      <ProgressBar value={review.progress} color="blue" />
                    </div>
                  ))}
                </div>
                <GlowingButton
                  onClick={() => setActiveTab("calendar")}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  <span className="mr-2">📅</span> View Full Calendar
                </GlowingButton>
              </div>
            </div>
          </div>
        )}
        {userRole === "mentor" && activeTab === "my-mentees" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">My Mentees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Ravi Kumar",
                  branch: "CSE",
                  year: "Final Year",
                  goal: "Software Engineer",
                  progress: 85,
                  lastSession: "2024-01-20",
                  email: "ravi.kumar@college.edu",
                  phone: "+91 9876543210",
                },
                {
                  name: "Pooja Sharma",
                  branch: "IT",
                  year: "Pre-Final",
                  goal: "Data Analyst",
                  progress: 72,
                  lastSession: "2024-01-19",
                  email: "pooja.sharma@college.edu",
                  phone: "+91 9876543211",
                },
                {
                  name: "Akash Gupta",
                  branch: "ECE",
                  year: "Final Year",
                  goal: "Product Manager",
                  progress: 68,
                  lastSession: "2024-01-18",
                  email: "akash.gupta@college.edu",
                  phone: "+91 9876543212",
                },
                {
                  name: "Neha Patel",
                  branch: "CSE",
                  year: "Pre-Final",
                  goal: "Full Stack Developer",
                  progress: 91,
                  lastSession: "2024-01-21",
                  email: "neha.patel@college.edu",
                  phone: "+91 9876543213",
                },
                {
                  name: "Rohit Singh",
                  branch: "IT",
                  year: "Final Year",
                  goal: "DevOps Engineer",
                  progress: 78,
                  lastSession: "2024-01-17",
                  email: "rohit.singh@college.edu",
                  phone: "+91 9876543214",
                },
                {
                  name: "Priya Agarwal",
                  branch: "CSE",
                  year: "Pre-Final",
                  goal: "UI/UX Designer",
                  progress: 83,
                  lastSession: "2024-01-22",
                  email: "priya.agarwal@college.edu",
                  phone: "+91 9876543215",
                },
              ].map((mentee, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="mb-3">
                    <div className="font-bold text-lg text-white">{mentee.name}</div>
                    <div className="text-sm text-gray-300">
                      {mentee.branch} • {mentee.year}
                    </div>
                    <div className="text-gray-400 text-sm">Goal: {mentee.goal}</div>
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Progress</span>
                      <span className="text-cyan-400 font-bold">{mentee.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${mentee.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div>📧 {mentee.email}</div>
                    <div>📱 {mentee.phone}</div>
                    <div>📅 Last session: {mentee.lastSession}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {userRole === "mentor" && activeTab === "reviews" && (
          <div className="backdrop-blur-md bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Student Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  student: "Ravi Kumar",
                  rating: 5,
                  review:
                    "Excellent mentor! Dr. Sharma provided invaluable guidance throughout my placement preparation. His technical insights and interview tips were spot-on.",
                  date: "2024-01-15",
                  company: "Google",
                  position: "Software Engineer",
                },
                {
                  student: "Pooja Sharma",
                  rating: 4,
                  review:
                    "Very helpful and supportive. The mock interviews and resume feedback really boosted my confidence. Highly recommend!",
                  date: "2024-01-12",
                  company: "Microsoft",
                  position: "Data Analyst",
                },
                {
                  student: "Akash Gupta",
                  rating: 5,
                  review:
                    "Outstanding mentorship! The personalized career advice and industry connections were game-changers for my placement success.",
                  date: "2024-01-10",
                  company: "Amazon",
                  position: "Product Manager",
                },
                {
                  student: "Neha Patel",
                  rating: 5,
                  review:
                    "Amazing mentor with deep industry knowledge. The coding practice sessions and system design discussions were incredibly valuable.",
                  date: "2024-01-08",
                  company: "Netflix",
                  position: "Full Stack Developer",
                },
                {
                  student: "Rohit Singh",
                  rating: 4,
                  review:
                    "Great support throughout the placement process. The DevOps guidance and cloud computing insights were exactly what I needed.",
                  date: "2024-01-05",
                  company: "Uber",
                  position: "DevOps Engineer",
                },
                {
                  student: "Priya Agarwal",
                  rating: 5,
                  review:
                    "Exceptional mentoring experience! The UI/UX portfolio review and design thinking sessions were transformative.",
                  date: "2024-01-03",
                  company: "Adobe",
                  position: "UI/UX Designer",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 rounded-xl p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-lg text-white">{review.student}</div>
                      <div className="text-sm text-gray-300">
                        {review.company} - {review.position}
                      </div>
                      <div className="text-xs text-gray-400">{review.date}</div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-600"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-300 ml-1">{review.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
