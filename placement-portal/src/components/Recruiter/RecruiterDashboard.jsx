import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { mockStudents, mockAnalytics, mockCourseSubjects } from '../../mock/data';
import { useAuth } from '../../context/AuthContext';
import { Search, Filter, Users, BarChart3, TrendingUp, Award } from 'lucide-react';

const RecruiterDashboard = () => {
  const { user } = useAuth();
  const [filteredStudents, setFilteredStudents] = useState(mockStudents);
  const [skillFilter, setSkillFilter] = useState('');
  const [cgpaFilter, setCgpaFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');

  const applyFilters = () => {
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

    if (departmentFilter) {
      filtered = filtered.filter(student => 
        student.department === departmentFilter
      );
    }

    setFilteredStudents(filtered);
  };

  const clearFilters = () => {
    setSkillFilter('');
    setCgpaFilter('');
    setDepartmentFilter('');
    setFilteredStudents(mockStudents);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Recruiter Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back, {user.name} from {user.company}
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Average CGPA
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mockAnalytics.averageCgpa}
                </p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
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
              <BarChart3 className="h-8 w-8 text-purple-600" />
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Database with Filters */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Student Database</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Department
                  </label>
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Science">Computer Science</SelectItem>
                      <SelectItem value="Information Technology">Information Technology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex space-x-2 mb-4">
                <Button 
                  onClick={applyFilters}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  Clear Filters
                </Button>
              </div>

              {/* Student List */}
              <div className="space-y-4">
                {filteredStudents.map((student) => (
                  <Card key={student.id} className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {student.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {student.department} • CGPA: {student.cgpa}
                          </p>
                        </div>
                        <Badge 
                          variant={student.cgpa >= 8 ? "default" : student.cgpa >= 7 ? "secondary" : "outline"}
                        >
                          {student.cgpa >= 8 ? "Excellent" : student.cgpa >= 7 ? "Good" : "Average"}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Skills:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {student.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Projects:
                        </h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400">
                          {student.projects.map((project, index) => (
                            <li key={index}>• {project}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="hover:scale-105 transition-transform duration-200"
                        >
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Analytics */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Course Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Top Skills in Demand
                </h4>
                <div className="space-y-2">
                  {mockAnalytics.topSkills.map((skillData, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skillData.skill}
                      </span>
                      <Badge variant="secondary">{skillData.count}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Course Subjects</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(mockCourseSubjects).map(([department, subjects]) => (
                <div key={department} className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {department}
                  </h4>
                  <div className="space-y-1">
                    {subjects.map((subject, index) => (
                      <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                        • {subject}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;