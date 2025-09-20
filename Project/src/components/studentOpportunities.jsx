import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock, 
  Building,
  Star,
  ChevronDown
} from 'lucide-react';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    department: '',
    location: '',
    duration: '',
    stipend: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const opportunities = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Software Development Intern',
      location: 'Bangalore, India',
      type: 'Full-time',
      duration: '6 months',
      stipend: '₹25,000/month',
      deadline: 'Dec 30, 2024',
      description: 'Join our dynamic team to work on cutting-edge web applications using React, Node.js, and cloud technologies.',
      requirements: ['React.js', 'JavaScript', 'Node.js', 'Git'],
      department: 'Computer Science',
      featured: true,
      postedDate: '2 days ago'
    },
    {
      id: 2,
      company: 'DataSoft Inc.',
      position: 'Data Analysis Intern',
      location: 'Mumbai, India',
      type: 'Full-time',
      duration: '4 months',
      stipend: '₹20,000/month',
      deadline: 'Jan 5, 2025',
      description: 'Analyze large datasets and create meaningful insights using Python, SQL, and data visualization tools.',
      requirements: ['Python', 'SQL', 'Pandas', 'Tableau'],
      department: 'Computer Science',
      featured: false,
      postedDate: '4 days ago'
    },
    {
      id: 3,
      company: 'InnovateLab',
      position: 'UI/UX Design Intern',
      location: 'Hyderabad, India',
      type: 'Part-time',
      duration: '3 months',
      stipend: '₹15,000/month',
      deadline: 'Jan 10, 2025',
      description: 'Design user-friendly interfaces and enhance user experiences for mobile and web applications.',
      requirements: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      department: 'Design',
      featured: false,
      postedDate: '1 week ago'
    },
    {
      id: 4,
      company: 'CloudTech Systems',
      position: 'DevOps Engineer Intern',
      location: 'Chennai, India',
      type: 'Full-time',
      duration: '6 months',
      stipend: '₹30,000/month',
      deadline: 'Jan 15, 2025',
      description: 'Learn and implement cloud infrastructure, CI/CD pipelines, and automation tools.',
      requirements: ['AWS', 'Docker', 'Kubernetes', 'Linux'],
      department: 'Computer Science',
      featured: true,
      postedDate: '3 days ago'
    },
    {
      id: 5,
      company: 'FinanceWorks',
      position: 'Financial Analysis Intern',
      location: 'Delhi, India',
      type: 'Full-time',
      duration: '5 months',
      stipend: '₹22,000/month',
      deadline: 'Dec 28, 2024',
      description: 'Support financial planning and analysis activities, including budgeting and forecasting.',
      requirements: ['Excel', 'Financial Modeling', 'Analytics', 'Communication'],
      department: 'Finance',
      featured: false,
      postedDate: '5 days ago'
    },
    {
      id: 6,
      company: 'GreenEnergy Solutions',
      position: 'Renewable Energy Intern',
      location: 'Pune, India',
      type: 'Full-time',
      duration: '6 months',
      stipend: '₹18,000/month',
      deadline: 'Jan 20, 2025',
      description: 'Work on solar and wind energy projects, conducting feasibility studies and energy assessments.',
      requirements: ['AutoCAD', 'MATLAB', 'Project Management', 'Sustainability'],
      department: 'Mechanical',
      featured: false,
      postedDate: '1 week ago'
    }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = !selectedFilters.department || opportunity.department === selectedFilters.department;
    const matchesLocation = !selectedFilters.location || opportunity.location.includes(selectedFilters.location);
    const matchesDuration = !selectedFilters.duration || opportunity.duration.includes(selectedFilters.duration);
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesDuration;
  });

  const departments = [...new Set(opportunities.map(opp => opp.department))];
  const locations = [...new Set(opportunities.map(opp => opp.location.split(',')[0]))];
  const durations = [...new Set(opportunities.map(opp => opp.duration))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Opportunities</h2>
          <p className="text-gray-600">Discover internships that match your skills and interests</p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filteredOpportunities.length} of {opportunities.length} opportunities
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by position, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5 mr-2 text-gray-500" />
            Filters
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  value={selectedFilters.department}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, department: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select
                  value={selectedFilters.duration}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Duration</option>
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => setSelectedFilters({ department: '', location: '', duration: '', stipend: '' })}
                  className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <div 
            key={opportunity.id} 
            className={`bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
              opportunity.featured ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white' : 'border-gray-100'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{opportunity.position}</h3>
                  <p className="text-gray-600">{opportunity.company}</p>
                </div>
              </div>
              {opportunity.featured && (
                <div className="flex items-center px-2 py-1 bg-yellow-100 rounded-full">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-xs font-medium text-yellow-700">Featured</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {opportunity.location} • {opportunity.type}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {opportunity.duration}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                {opportunity.stipend}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Apply by {opportunity.deadline}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{opportunity.description}</p>

            {/* Requirements */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Required Skills:</p>
              <div className="flex flex-wrap gap-2">
                {opportunity.requirements.map((req, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500">Posted {opportunity.postedDate}</span>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  );
};

export default Opportunities;