import React, { useState } from 'react';
import { 
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  CheckCircle,
  AlertTriangle,
  Building,
  User,
  FileText,
  ExternalLink,
  Plus
} from 'lucide-react';

const Interviews = () => {
  const [viewType, setViewType] = useState('upcoming'); // 'upcoming', 'completed', 'all'

  const interviews = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Software Development Intern',
      type: 'Technical Round',
      date: '2024-12-25',
      time: '2:00 PM',
      duration: '60 minutes',
      status: 'confirmed',
      mode: 'virtual',
      meetingLink: 'https://meet.google.com/xyz-abc-def',
      interviewer: 'Sarah Johnson',
      interviewerRole: 'Senior Software Engineer',
      notes: 'Focus on React.js, JavaScript fundamentals, and problem-solving skills',
      preparation: ['Review React hooks', 'Practice coding problems', 'Prepare questions about the company'],
      completed: false
    },
    {
      id: 2,
      company: 'InnovateLab',
      position: 'UI/UX Design Intern',
      type: 'HR Round',
      date: '2024-12-26',
      time: '10:00 AM',
      duration: '45 minutes',
      status: 'confirmed',
      mode: 'offline',
      location: 'Campus - Room 201',
      interviewer: 'Michael Chen',
      interviewerRole: 'HR Manager',
      notes: 'Discussion about career goals, company culture fit, and compensation',
      preparation: ['Prepare STAR method answers', 'Research company values', 'Salary negotiation prep'],
      completed: false
    },
    {
      id: 3,
      company: 'CloudTech Systems',
      position: 'DevOps Engineer Intern',
      type: 'Technical Assessment 1',
      date: '2024-12-28',
      time: '10:00 AM',
      duration: '90 minutes',
      status: 'scheduled',
      mode: 'offline',
      location: 'Computer Lab 1',
      interviewer: 'Test Administrator',
      interviewerRole: 'Technical Team',
      notes: 'Hands-on practical test covering AWS, Docker, and Linux administration',
      preparation: ['Review AWS services', 'Practice Docker commands', 'Linux shell scripting'],
      completed: false
    },
    {
      id: 4,
      company: 'DataSoft Inc.',
      position: 'Data Analysis Intern',
      type: 'Technical Round',
      date: '2024-12-18',
      time: '3:00 PM',
      duration: '75 minutes',
      status: 'completed',
      mode: 'virtual',
      meetingLink: 'https://zoom.us/j/123456789',
      interviewer: 'Dr. Amanda Rodriguez',
      interviewerRole: 'Lead Data Scientist',
      notes: 'Excellent discussion on statistical methods and Python libraries',
      feedback: 'Strong technical knowledge, good communication skills. Recommended for next round.',
      completed: true,
      result: 'passed'
    },
    {
      id: 5,
      company: 'StartupXYZ',
      position: 'Full Stack Developer Intern',
      type: 'Final Round',
      date: '2024-12-05',
      time: '2:30 PM',
      duration: '60 minutes',
      status: 'completed',
      mode: 'virtual',
      meetingLink: 'https://teams.microsoft.com/xyz',
      interviewer: 'Alex Thompson',
      interviewerRole: 'CTO',
      notes: 'Comprehensive discussion about full-stack architecture and project experience',
      feedback: 'Good technical skills but communication needs improvement.',
      completed: true,
      result: 'not_selected'
    }
  ];

  const filteredInterviews = interviews.filter(interview => {
    if (viewType === 'upcoming') return !interview.completed;
    if (viewType === 'completed') return interview.completed;
    return true;
  });

  const getStatusConfig = (status, completed, result) => {
    if (completed) {
      if (result === 'passed') {
        return { color: 'text-green-600', bg: 'bg-green-100', label: 'Passed' };
      } else if (result === 'not_selected') {
        return { color: 'text-red-600', bg: 'bg-red-100', label: 'Not Selected' };
      }
      return { color: 'text-blue-600', bg: 'bg-blue-100', label: 'Completed' };
    }
    
    if (status === 'confirmed') {
      return { color: 'text-green-600', bg: 'bg-green-100', label: 'Confirmed' };
    }
    return { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Scheduled' };
  };

  const getUpcomingStats = () => {
    const upcoming = interviews.filter(i => !i.completed);
    const thisWeek = upcoming.filter(i => {
      const interviewDate = new Date(i.date);
      const today = new Date();
      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      return interviewDate >= today && interviewDate <= weekFromNow;
    });
    return { total: upcoming.length, thisWeek: thisWeek.length };
  };

  const stats = getUpcomingStats();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Interviews</h2>
          <p className="text-gray-600">Manage your interview schedule and preparation</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Interview
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stats.total}</div>
          <div className="text-gray-600 text-sm">Upcoming Interviews</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stats.thisWeek}</div>
          <div className="text-gray-600 text-sm">This Week</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Building className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {interviews.filter(i => i.completed).length}
          </div>
          <div className="text-gray-600 text-sm">Completed</div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex space-x-4">
          {[
            { key: 'upcoming', label: 'Upcoming' },
            { key: 'completed', label: 'Completed' },
            { key: 'all', label: 'All Interviews' }
          ].map((view) => (
            <button
              key={view.key}
              onClick={() => setViewType(view.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewType === view.key
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interviews List */}
      <div className="space-y-4">
        {filteredInterviews.map((interview) => {
          const statusConfig = getStatusConfig(interview.status, interview.completed, interview.result);
          
          return (
            <div key={interview.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{interview.position}</h3>
                    <p className="text-gray-600">{interview.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{interview.type}</p>
                  </div>
                </div>
                <div className={`flex items-center px-3 py-1 rounded-full ${statusConfig.bg}`}>
                  <span className={`text-sm font-medium ${statusConfig.color}`}>
                    {statusConfig.label}
                  </span>
                </div>
              </div>

              {/* Interview Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(interview.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {interview.time} • {interview.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    {interview.mode === 'virtual' ? (
                      <>
                        <Video className="w-4 h-4 mr-2" />
                        Virtual Meeting
                      </>
                    ) : (
                      <>
                        <MapPin className="w-4 h-4 mr-2" />
                        {interview.location}
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    {interview.interviewer}
                  </div>
                  <div className="text-sm text-gray-500 ml-6">
                    {interview.interviewerRole}
                  </div>
                </div>
              </div>

              {/* Notes and Preparation */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Interview Notes</h4>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                  {interview.notes}
                </p>
              </div>

              {interview.preparation && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Preparation Checklist</h4>
                  <ul className="space-y-1">
                    {interview.preparation.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {interview.feedback && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">Feedback</h4>
                  <p className="text-sm text-blue-800">{interview.feedback}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-gray-800 text-sm">
                    <FileText className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                  {!interview.completed && interview.meetingLink && (
                    <a
                      href={interview.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Join Meeting
                    </a>
                  )}
                </div>
                {!interview.completed && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Prepare for Interview
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredInterviews.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {viewType === 'upcoming' ? 'No upcoming interviews' : 'No interviews found'}
          </h3>
          <p className="text-gray-600">
            {viewType === 'upcoming' 
              ? 'Apply to more opportunities to get interview invitations' 
              : 'Try switching to a different view'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Interviews;