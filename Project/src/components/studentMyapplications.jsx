import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Calendar,
  Building,
  Filter,
  ChevronRight,
  Eye,
  MoreVertical
} from 'lucide-react';

const MyApplications = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState(null);

  const applications = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Software Development Intern',
      appliedDate: '2024-12-15',
      status: 'interview_scheduled',
      currentStage: 'Technical Round',
      nextDate: '2024-12-25',
      nextTime: '2:00 PM',
      location: 'Virtual Meeting',
      stages: [
        { name: 'Application Submitted', status: 'completed', date: '2024-12-15' },
        { name: 'Application Reviewed', status: 'completed', date: '2024-12-18' },
        { name: 'Aptitude Test', status: 'completed', date: '2024-12-20' },
        { name: 'Technical Round', status: 'current', date: '2024-12-25' },
        { name: 'HR Round', status: 'pending', date: 'TBD' },
        { name: 'Final Decision', status: 'pending', date: 'TBD' }
      ],
      stipend: '₹25,000/month',
      duration: '6 months'
    },
    {
      id: 2,
      company: 'DataSoft Inc.',
      position: 'Data Analysis Intern',
      appliedDate: '2024-12-10',
      status: 'under_review',
      currentStage: 'Application Review',
      nextDate: null,
      nextTime: null,
      location: null,
      stages: [
        { name: 'Application Submitted', status: 'completed', date: '2024-12-10' },
        { name: 'Application Reviewed', status: 'current', date: 'In Progress' },
        { name: 'Technical Assessment', status: 'pending', date: 'TBD' },
        { name: 'Interview Round', status: 'pending', date: 'TBD' },
        { name: 'Final Decision', status: 'pending', date: 'TBD' }
      ],
      stipend: '₹20,000/month',
      duration: '4 months'
    },
    {
      id: 3,
      company: 'InnovateLab',
      position: 'UI/UX Design Intern',
      appliedDate: '2024-12-08',
      status: 'selected',
      currentStage: 'Offer Letter',
      nextDate: null,
      nextTime: null,
      location: null,
      stages: [
        { name: 'Application Submitted', status: 'completed', date: '2024-12-08' },
        { name: 'Portfolio Review', status: 'completed', date: '2024-12-12' },
        { name: 'Design Challenge', status: 'completed', date: '2024-12-15' },
        { name: 'Interview Round', status: 'completed', date: '2024-12-18' },
        { name: 'Selected', status: 'completed', date: '2024-12-20' }
      ],
      stipend: '₹15,000/month',
      duration: '3 months'
    },
    {
      id: 4,
      company: 'CloudTech Systems',
      position: 'DevOps Engineer Intern',
      appliedDate: '2024-12-12',
      status: 'ta1_scheduled',
      currentStage: 'Technical Assessment 1',
      nextDate: '2024-12-28',
      nextTime: '10:00 AM',
      location: 'Computer Lab 1',
      stages: [
        { name: 'Application Submitted', status: 'completed', date: '2024-12-12' },
        { name: 'Initial Screening', status: 'completed', date: '2024-12-16' },
        { name: 'Technical Assessment 1', status: 'current', date: '2024-12-28' },
        { name: 'Technical Assessment 2', status: 'pending', date: 'TBD' },
        { name: 'Final Interview', status: 'pending', date: 'TBD' },
        { name: 'Final Decision', status: 'pending', date: 'TBD' }
      ],
      stipend: '₹30,000/month',
      duration: '6 months'
    },
    {
      id: 5,
      company: 'StartupXYZ',
      position: 'Full Stack Developer Intern',
      appliedDate: '2024-11-28',
      status: 'rejected',
      currentStage: 'Application Closed',
      nextDate: null,
      nextTime: null,
      location: null,
      stages: [
        { name: 'Application Submitted', status: 'completed', date: '2024-11-28' },
        { name: 'Technical Assessment', status: 'completed', date: '2024-12-02' },
        { name: 'Interview Round', status: 'completed', date: '2024-12-05' },
        { name: 'Rejected', status: 'completed', date: '2024-12-08' }
      ],
      stipend: '₹28,000/month',
      duration: '5 months'
    }
  ];

  const getStatusConfig = (status) => {
    const configs = {
      'under_review': {
        label: 'Under Review',
        icon: Clock,
        color: 'text-yellow-600',
        bg: 'bg-yellow-100',
        border: 'border-yellow-200'
      },
      'interview_scheduled': {
        label: 'Interview Scheduled',
        icon: Calendar,
        color: 'text-blue-600',
        bg: 'bg-blue-100',
        border: 'border-blue-200'
      },
      'ta1_scheduled': {
        label: 'TA1 Scheduled',
        icon: AlertCircle,
        color: 'text-purple-600',
        bg: 'bg-purple-100',
        border: 'border-purple-200'
      },
      'selected': {
        label: 'Selected',
        icon: CheckCircle,
        color: 'text-green-600',
        bg: 'bg-green-100',
        border: 'border-green-200'
      },
      'rejected': {
        label: 'Rejected',
        icon: XCircle,
        color: 'text-red-600',
        bg: 'bg-red-100',
        border: 'border-red-200'
      }
    };
    return configs[status] || configs['under_review'];
  };

  const filteredApplications = statusFilter === 'all' 
    ? applications 
    : applications.filter(app => app.status === statusFilter);

  const getStageStatus = (stage) => {
    if (stage.status === 'completed') return 'text-green-600 bg-green-100';
    if (stage.status === 'current') return 'text-blue-600 bg-blue-100';
    return 'text-gray-400 bg-gray-100';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
          <p className="text-gray-600">Track the progress of your internship applications</p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {applications.length} applications
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Applied', value: applications.length, color: 'bg-blue-50 text-blue-600' },
          { label: 'Under Review', value: applications.filter(app => app.status === 'under_review').length, color: 'bg-yellow-50 text-yellow-600' },
          { label: 'Interviews', value: applications.filter(app => app.status.includes('scheduled') || app.status.includes('interview')).length, color: 'bg-purple-50 text-purple-600' },
          { label: 'Selected', value: applications.filter(app => app.status === 'selected').length, color: 'bg-green-50 text-green-600' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className={`text-2xl font-bold ${stat.color.split(' ')[1]}`}>{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Applications</option>
            <option value="under_review">Under Review</option>
            <option value="interview_scheduled">Interview Scheduled</option>
            <option value="ta1_scheduled">TA1 Scheduled</option>
            <option value="selected">Selected</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => {
          const statusConfig = getStatusConfig(application.status);
          const StatusIcon = statusConfig.icon;

          return (
            <div key={application.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{application.position}</h3>
                    <p className="text-gray-600">{application.company}</p>
                    <p className="text-sm text-gray-500">Applied on {new Date(application.appliedDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`flex items-center px-3 py-1 rounded-full ${statusConfig.bg} ${statusConfig.border} border`}>
                    <StatusIcon className={`w-4 h-4 mr-2 ${statusConfig.color}`} />
                    <span className={`text-sm font-medium ${statusConfig.color}`}>{statusConfig.label}</span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Current Stage Info */}
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Current Stage: {application.currentStage}</p>
                    {application.nextDate && (
                      <p className="text-sm text-gray-600 mt-1">
                        Next: {new Date(application.nextDate).toLocaleDateString()} at {application.nextTime}
                        {application.location && ` • ${application.location}`}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Duration: {application.duration}</p>
                    <p className="text-sm font-medium text-gray-900">{application.stipend}</p>
                  </div>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Application Progress</h4>
                <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                  {application.stages.map((stage, index) => (
                    <div key={index} className="flex items-center space-x-2 flex-shrink-0">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStageStatus(stage)}`}>
                        {stage.name}
                      </div>
                      {index < application.stages.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </button>
                {application.nextDate && (
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Join Interview
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
          <p className="text-gray-600">Try adjusting your filter or apply to new opportunities</p>
        </div>
      )}
    </div>
  );
};

export default MyApplications;