import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { mockJobs, mockStudents, mockAnalytics } from '../../mock/data';
import { useAuth } from '../../context/AuthContext';
import { Plus, Users, Briefcase, TrendingUp, Filter, Search } from 'lucide-react';

const PlacementDashboard = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState(mockJobs);
  const [filteredStudents, setFilteredStudents] = useState(mockStudents);
  const [newJob, setNewJob] = useState({
    company: '',
    title: '',
    type: 'Full-time',
    requiredCgpa: '',
    requiredSkills: '',
    description: '',
    salary: '',
    location: '',
    deadline: ''
  });
  const [skillFilter, setSkillFilter] = useState('');
  const [cgpaFilter, setCgpaFilter] = useState('');
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);

  const handleAddJob = (e) => {
    e.preventDefault();
    const job = {
      id: jobs.length + 1,
      ...newJob,
      requiredCgpa: parseFloat(newJob.requiredCgpa),
      requiredSkills: newJob.requiredSkills.split(',').map(s => s.trim()),
      postedDate: new Date().toISOString().split('T')[0]
    };
    
    setJobs([...jobs, job]);
    setNewJob({
      company: '',
      title: '',
      type: 'Full-time',
      requiredCgpa: '',
      requiredSkills: '',
      description: '',
      salary: '',
      location: '',
      deadline: ''
    });
    setIsAddJobOpen(false);
  };

  const applyStudentFilters = () => {
    let filtered = mockStudents;

    if (skillFilter) {
      filtered = filtered.filter(student => 
        student.skills.some(skill => 
          skill.toLowerCase().includes(skillFilter.toLowerCase())
        )
      );
    }

    if (cgpaFilter) {
      const minCgpa = parseFloat(cgpaFilter);
      filtered = filtered.filter(student => student.cgpa >= minCgpa);
    }

    setFilteredStudents(filtered);
  };

  const clearStudentFilters = () => {
    setSkillFilter('');
    setCgpaFilter('');
    setFilteredStudents(mockStudents);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Placement Cell Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back, {user.name}
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Jobs
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {jobs.length}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Students
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockAnalytics.totalStudents}
                </p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Applications
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockAnalytics.totalApplications}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Placement Rate
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockAnalytics.placementRate}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job Management */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5" />
              <span>Job Management</span>
            </CardTitle>
            <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
              <DialogTrigger asChild>
                <Button className="hover:scale-105 transition-transform duration-200">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Job
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Job/Internship</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddJob} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        value={newJob.company}
                        onChange={(e) => setNewJob({...newJob, company: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title</label>
                      <Input
                        value={newJob.title}
                        onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type</label>
                      <Select value={newJob.type} onValueChange={(value) => setNewJob({...newJob, type: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Required CGPA</label>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        value={newJob.requiredCgpa}
                        onChange={(e) => setNewJob({...newJob, requiredCgpa: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Required Skills (comma-separated)</label>
                    <Input
                      value={newJob.requiredSkills}
                      onChange={(e) => setNewJob({...newJob, requiredSkills: e.target.value})}
                      placeholder="JavaScript, React, Node.js"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      value={newJob.description}
                      onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Salary</label>
                      <Input
                        value={newJob.salary}
                        onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                        placeholder="₹12 LPA or ₹50,000/month"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <Input
                        value={newJob.location}
                        onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Application Deadline</label>
                    <Input
                      type="date"
                      value={newJob.deadline}
                      onChange={(e) => setNewJob({...newJob, deadline: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddJobOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="hover:scale-105 transition-transform duration-200">
                      Add Job
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {jobs.map((job) => (
                <Card key={job.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">
                          {job.company}
                        </p>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Required CGPA: {job.requiredCgpa} • {job.location} • {job.salary}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {job.requiredSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Student Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Student Filters */}
            <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filter by Skill
                </label>
                <Input
                  placeholder="e.g., JavaScript, React"
                  value={skillFilter}
                  onChange={(e) => setSkillFilter(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Minimum CGPA
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 7.5"
                  value={cgpaFilter}
                  onChange={(e) => setCgpaFilter(e.target.value)}
                  step="0.1"
                  min="0"
                  max="10"
                />
              </div>
            </div>

            <div className="flex space-x-2 mb-4">
              <Button 
                onClick={applyStudentFilters}
                className="hover:scale-105 transition-transform duration-200"
              >
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
              <Button 
                variant="outline" 
                onClick={clearStudentFilters}
                className="hover:scale-105 transition-transform duration-200"
              >
                Clear
              </Button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="border-l-4 border-l-green-500">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {student.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {student.department} • CGPA: {student.cgpa}
                        </p>
                      </div>
                      <Badge 
                        variant={student.cgpa >= 8 ? "default" : "secondary"}
                      >
                        {student.cgpa >= 8 ? "Excellent" : "Good"}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {student.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{student.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlacementDashboard;