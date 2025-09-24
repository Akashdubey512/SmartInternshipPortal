// Mock data for the placement portal
export const mockStudents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    cgpa: 8.5,
    skills: ["JavaScript", "React", "Node.js", "Python"],
    projects: ["E-commerce Website", "Task Management App"],
    department: "Computer Science",
    year: "Final Year",
    resume: "john_resume.pdf"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    cgpa: 6.8,
    skills: ["Java", "Spring Boot", "MySQL"],
    projects: ["Library Management System"],
    department: "Information Technology",
    year: "Final Year",
    resume: "jane_resume.pdf"
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    cgpa: 9.2,
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    projects: ["Social Media Platform", "Weather App", "Chat Application"],
    department: "Computer Science",
    year: "Final Year",
    resume: "mike_resume.pdf"
  }
];

export const mockJobs = [
  {
    id: 1,
    company: "TechCorp",
    title: "Software Developer",
    type: "Full-time",
    requiredCgpa: 7.5,
    requiredSkills: ["JavaScript", "React", "Node.js"],
    description: "Develop and maintain web applications using modern technologies.",
    salary: "₹12 LPA",
    location: "Bangalore",
    deadline: "2024-03-15",
    postedDate: "2024-02-01"
  },
  {
    id: 2,
    company: "Google",
    title: "Frontend Developer Intern",
    type: "Internship",
    requiredCgpa: 9.0,
    requiredSkills: ["React", "JavaScript", "CSS", "HTML"],
    description: "Work on cutting-edge frontend technologies with experienced teams.",
    salary: "₹50,000/month",
    location: "Hyderabad",
    deadline: "2024-03-20",
    postedDate: "2024-02-05"
  },
  {
    id: 3,
    company: "Microsoft",
    title: "Full Stack Developer",
    type: "Full-time",
    requiredCgpa: 8.0,
    requiredSkills: ["React", "Node.js", "Azure", "C#"],
    description: "Build scalable applications using Microsoft technologies.",
    salary: "₹18 LPA",
    location: "Chennai",
    deadline: "2024-03-25",
    postedDate: "2024-02-10"
  }
];

export const mockAlumni = {
  "TechCorp": [
    { name: "Sarah Wilson", batch: "2022", position: "Senior Developer", experience: "2 years" },
    { name: "David Brown", batch: "2021", position: "Team Lead", experience: "3 years" }
  ],
  "Google": [
    { name: "Emily Davis", batch: "2020", position: "Product Manager", experience: "4 years" },
    { name: "Alex Chen", batch: "2019", position: "Senior SWE", experience: "5 years" }
  ],
  "Microsoft": [
    { name: "Chris Taylor", batch: "2021", position: "Cloud Architect", experience: "3 years" },
    { name: "Maya Patel", batch: "2020", position: "Principal Engineer", experience: "4 years" }
  ]
};

export const mockQuestions = {
  "TechCorp": [
    "Explain the difference between let, const, and var in JavaScript",
    "What is closure in JavaScript?",
    "How do you optimize React applications?",
    "Explain the concept of hoisting in JavaScript"
  ],
  "Google": [
    "Design a system to handle millions of users",
    "Explain the virtual DOM concept",
    "What are the principles of good UI/UX design?",
    "How would you implement a search algorithm?"
  ],
  "Microsoft": [
    "Explain dependency injection in .NET",
    "What is the difference between SQL and NoSQL databases?",
    "How do you handle state management in large applications?",
    "Explain cloud computing concepts"
  ]
};

export const mockApplications = [
  {
    id: 1,
    studentId: 1,
    jobId: 1,
    status: "Applied",
    appliedDate: "2024-02-15",
    interviewDate: null
  },
  {
    id: 2,
    studentId: 3,
    jobId: 2,
    status: "Interview Scheduled",
    appliedDate: "2024-02-12",
    interviewDate: "2024-02-25"
  }
];

export const mockAnalytics = {
  totalApplications: 156,
  totalJobs: 23,
  totalStudents: 89,
  averageCgpa: 7.8,
  topSkills: [
    { skill: "JavaScript", count: 45 },
    { skill: "React", count: 38 },
    { skill: "Node.js", count: 32 },
    { skill: "Python", count: 28 },
    { skill: "Java", count: 25 }
  ],
  placementRate: 78
};

export const mockCourseSubjects = {
  "Computer Science": [
    "Data Structures", "Algorithms", "Database Systems", "Operating Systems",
    "Computer Networks", "Software Engineering", "Web Technologies", "Machine Learning"
  ],
  "Information Technology": [
    "Programming Fundamentals", "Database Management", "System Analysis",
    "Network Security", "Mobile Computing", "Cloud Computing", "DevOps"
  ]
};