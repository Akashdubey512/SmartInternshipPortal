import React from 'react';
import { 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  Clock, 
  FileText,
  ChevronRight,
  Star,
  Briefcase
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Applications',
      value: '12',
      change: '+2 this week',
      icon: FileText,
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Interviews Scheduled',
      value: '4',
      change: '2 this week',
      icon: Calendar,
      textColor: 'text-indigo-700',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Selected',
      value: '2',
      change: '+1 this month',
      icon: CheckCircle,
      textColor: 'text-green-700',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Under Review',
      value: '6',
      change: 'Pending response',
      icon: Clock,
      textColor: 'text-yellow-700',
      bgColor: 'bg-yellow-50'
    }
  ];

  const upcomingEvents = [
    {
      date: 'Today, 2:00 PM',
      title: 'Technical Round - TechCorp',
      type: 'Technical Interview',
      status: 'confirmed',
      location: 'Virtual'
    },
    {
      date: 'Tomorrow, 10:00 AM',
      title: 'HR Round - InnovateLab',
      type: 'HR Interview',
      status: 'confirmed',
      location: 'Campus - Room 201'
    },
    {
      date: 'Dec 28, 3:00 PM',
      title: 'Final Round - DataSoft',
      type: 'Final Interview',
      status: 'scheduled',
      location: 'Virtual'
    },
    {
      date: 'Dec 30, 11:00 AM',
      title: 'Aptitude Test - CloudTech',
      type: 'Aptitude Round',
      status: 'scheduled',
      location: 'Computer Lab 1'
    }
  ];

  const recentApplications = [
    {
      company: 'TechCorp Solutions',
      position: 'Software Development Intern',
      status: 'Interview Scheduled',
      appliedDate: '2 days ago',
      statusColor: 'text-blue-600 bg-blue-100'
    },
    {
      company: 'DataSoft Inc.',
      position: 'Data Analysis Intern',
      status: 'Under Review',
      appliedDate: '5 days ago',
      statusColor: 'text-yellow-600 bg-yellow-100'
    },
    {
      company: 'InnovateLab',
      position: 'UI/UX Design Intern',
      status: 'Selected',
      appliedDate: '1 week ago',
      statusColor: 'text-green-600 bg-green-100'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
            <p className="text-blue-100 mb-4">You have 2 interviews this week. Keep up the great work!</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              View Upcoming Interviews
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Star className="w-12 h-12 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-gray-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Schedule</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    event.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-900">{event.title}</p>
                  <p className="text-xs text-gray-500 mb-1">{event.type} • {event.location}</p>
                  <p className="text-xs text-blue-600 font-medium">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentApplications.map((application, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-gray-900">{application.position}</p>
                  <p className="text-xs text-gray-500">{application.company}</p>
                  <p className="text-xs text-gray-400 mt-1">Applied {application.appliedDate}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${application.statusColor}`}>
                  {application.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
            <Briefcase className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-gray-900">Browse Opportunities</p>
            <p className="text-sm text-gray-500">Find new internships</p>
          </button>
          <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all group">
            <FileText className="w-6 h-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-gray-900">Update Profile</p>
            <p className="text-sm text-gray-500">Keep your profile current</p>
          </button>
          <button className="p-4 text-left rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group">
            <Calendar className="w-6 h-6 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="font-medium text-gray-900">Schedule Interview</p>
            <p className="text-sm text-gray-500">Manage your calendar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
