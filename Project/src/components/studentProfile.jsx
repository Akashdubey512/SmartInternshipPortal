import React, { useState } from 'react';
import { User, Upload, Download, Edit3, Github as GitHub, ExternalLink, Plus, Trash2, Award, BookOpen, Code, Save, X } from 'lucide-react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@college.edu',
    phone: '+91 98765 43210',
    department: 'Computer Science Engineering',
    year: '3rd Year',
    cgpa: '8.75',
    bio: 'Passionate software developer with a keen interest in full-stack web development and machine learning. Looking forward to contributing to innovative projects and gaining practical industry experience.',
    githubUrl: 'https://github.com/johndoe',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    portfolioUrl: 'https://johndoe.dev'
  });

  const [skills, setSkills] = useState([
    { name: 'JavaScript', level: 'Advanced', category: 'Programming' },
    { name: 'React.js', level: 'Advanced', category: 'Frontend' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'Python', level: 'Advanced', category: 'Programming' },
    { name: 'MongoDB', level: 'Intermediate', category: 'Database' },
    { name: 'Git', level: 'Advanced', category: 'Tools' },
    { name: 'AWS', level: 'Beginner', category: 'Cloud' },
    { name: 'Docker', level: 'Intermediate', category: 'DevOps' }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application built with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/johndoe/ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates using Socket.io',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/johndoe/taskmanager',
      liveUrl: 'https://taskmanager-demo.netlify.app',
      status: 'In Progress'
    },
    {
      id: 3,
      name: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather patterns using Python and D3.js',
      technologies: ['Python', 'Flask', 'D3.js', 'SQLite'],
      githubUrl: 'https://github.com/johndoe/weather-analytics',
      liveUrl: null,
      status: 'Completed'
    }
  ]);

  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issueDate: '2024-06-15',
      expiryDate: '2027-06-15',
      credentialId: 'AWS-CCP-12345'
    },
    {
      id: 2,
      name: 'React Developer Certification',
      issuer: 'Meta',
      issueDate: '2024-03-20',
      expiryDate: null,
      credentialId: 'META-REACT-67890'
    },
    {
      id: 3,
      name: 'Python for Data Science',
      issuer: 'IBM',
      issueDate: '2023-12-10',
      expiryDate: null,
      credentialId: 'IBM-PY-DS-11223'
    }
  ]);

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const skillCategories = ['Programming', 'Frontend', 'Backend', 'Database', 'Tools', 'Cloud', 'DevOps', 'Design'];

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addSkill = () => {
    setSkills(prev => [...prev, { name: '', level: 'Beginner', category: 'Programming' }]);
  };

  const updateSkill = (index, field, value) => {
    setSkills(prev => prev.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    ));
  };

  const removeSkill = (index) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const getSkillColor = (level) => {
    const colors = {
      'Beginner': 'bg-red-100 text-red-700',
      'Intermediate': 'bg-yellow-100 text-yellow-700',
      'Advanced': 'bg-blue-100 text-blue-700',
      'Expert': 'bg-green-100 text-green-700'
    };
    return colors[level] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
          <p className="text-gray-600">Manage your profile information and showcase your skills</p>
        </div>
        <button
          onClick={() => setEditMode(!editMode)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {editMode ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{profileData.name}</h3>
              <p className="text-gray-600">{profileData.department}</p>
              <p className="text-sm text-gray-500">{profileData.year}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {editMode ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileUpdate('email', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                {editMode ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CGPA</label>
                {editMode ? (
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={profileData.cgpa}
                    onChange={(e) => handleProfileUpdate('cgpa', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-green-600">{profileData.cgpa}</span>
                    <span className="text-gray-500 ml-1">/10.0</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Links</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitHub className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-sm text-gray-700">GitHub</span>
                </div>
                {editMode ? (
                  <input
                    type="url"
                    value={profileData.githubUrl}
                    onChange={(e) => handleProfileUpdate('githubUrl', e.target.value)}
                    className="flex-1 ml-3 p-1 border border-gray-300 rounded text-sm"
                    placeholder="GitHub URL"
                  />
                ) : (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ExternalLink className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-sm text-gray-700">Portfolio</span>
                </div>
                {editMode ? (
                  <input
                    type="url"
                    value={profileData.portfolioUrl}
                    onChange={(e) => handleProfileUpdate('portfolioUrl', e.target.value)}
                    className="flex-1 ml-3 p-1 border border-gray-300 rounded text-sm"
                    placeholder="Portfolio URL"
                  />
                ) : (
                  <a
                    href={profileData.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Resume</h4>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Upload your resume</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Choose File
                </label>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center mr-3">
                    <span className="text-xs text-white font-bold">PDF</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Resume_John_Doe.pdf</p>
                    <p className="text-xs text-gray-500">Updated 2 days ago</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Bio</h4>
            {editMode ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Write a brief description about yourself..."
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
            )}
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
              {editMode && (
                <button
                  onClick={addSkill}
                  className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Skill
                </button>
              )}
            </div>

            <div className="space-y-4">
              {skillCategories.map(category => {
                const categorySkills = skills.filter(skill => skill.category === category);
                if (categorySkills.length === 0) return null;

                return (
                  <div key={category}>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">{category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, index) => (
                        <div key={`${category}-${index}`} className="group relative">
                          {editMode ? (
                            <div className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg">
                              <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => updateSkill(skills.findIndex(s => s === skill), 'name', e.target.value)}
                                className="w-20 p-1 border border-gray-300 rounded text-sm"
                                placeholder="Skill"
                              />
                              <select
                                value={skill.level}
                                onChange={(e) => updateSkill(skills.findIndex(s => s === skill), 'level', e.target.value)}
                                className="p-1 border border-gray-300 rounded text-sm"
                              >
                                {skillLevels.map(level => (
                                  <option key={level} value={level}>{level}</option>
                                ))}
                              </select>
                              <button
                                onClick={() => removeSkill(skills.findIndex(s => s === skill))}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSkillColor(skill.level)}`}>
                              <Code className="w-3 h-3 mr-1" />
                              {skill.name}
                              <span className="ml-1 text-xs opacity-75">({skill.level})</span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Projects</h4>
              <button className="flex items-center px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                <Plus className="w-4 h-4 mr-1" />
                Add Project
              </button>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="font-semibold text-gray-900">{project.name}</h5>
                      <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.status}
                      </span>
                      {editMode && (
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 text-sm"
                    >
                      <GitHub className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Certificates</h4>
              <button className="flex items-center px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                <Upload className="w-4 h-4 mr-1" />
                Upload Certificate
              </button>
            </div>

            <div className="space-y-4">
              {certificates.map((cert) => (
                <div key={cert.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">{cert.name}</h5>
                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                          <span>Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                          {cert.expiryDate && (
                            <span>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</span>
                          )}
                          <span>ID: {cert.credentialId}</span>
                        </div>
                      </div>
                    </div>
                    {editMode && (
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;