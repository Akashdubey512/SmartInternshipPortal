import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Alert, AlertDescription } from '../ui/alert';
import { useAuth } from '../../context/AuthContext';
import { mockJobs, mockAlumni, mockQuestions, mockApplications } from '../../mock/data';
import { MapPin, Calendar, DollarSign, Users, MessageSquare, AlertTriangle, CheckCircle, Clock, Briefcase } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState(mockApplications);
  const [selectedJob, setSelectedJob] = useState(null);

  const checkEligibility = (job) => {
    const hasRequiredCgpa = user.cgpa >= job.requiredCgpa;
    const hasRequiredSkills = job.requiredSkills.some(skill => 
      user.skills.includes(skill)
    );
    
    return { 
      eligible: hasRequiredCgpa && hasRequiredSkills, 
      cgpaMatch: hasRequiredCgpa,
      skillsMatch: hasRequiredSkills
    };
  };

  const handleApply = (job) => {
    const eligibility = checkEligibility(job);
    
    if (!eligibility.eligible) {
      return;
    }

    const newApplication = {
      id: applications.length + 1,
      studentId: user.id,
      jobId: job.id,
      status: 'Applied',
      appliedDate: new Date().toISOString().split('T')[0]
    };
    
    setApplications([...applications, newApplication]);
  };

  const hasApplied = (jobId) => {
    return applications.some(app => app.jobId === jobId && app.studentId === user.id);
  };

  const getApplicationStatus = (jobId) => {
    const app = applications.find(app => app.jobId === jobId && app.studentId === user.id);
    return app ? app.status : null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Student Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back, {user.name}! Your CGPA: {user.cgpa}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Jobs Section */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <span>Available Opportunities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockJobs.map((job) => {
                const eligibility = checkEligibility(job);
                const applied = hasApplied(job.id);
                const status = getApplicationStatus(job.id);

                return (
                  <Card key={job.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {job.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {job.company}
                          </p>
                          <Badge variant="outline" className="mt-1">
                            {job.type}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600 dark:text-green-400">
                            {job.salary}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700 dark:text-gray-300">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            Deadline: {job.deadline}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Required CGPA: {job.requiredCgpa}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {job.requiredSkills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant={user.skills.includes(skill) ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {!eligibility.eligible && (
                        <Alert className="mb-4 border-red-200 bg-red-50 dark:bg-red-900/20">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <AlertDescription className="text-red-700 dark:text-red-400">
                            You are not eligible for this role. 
                            {!eligibility.cgpaMatch && ` Required CGPA: ${job.requiredCgpa} (You have: ${user.cgpa})`}
                            {!eligibility.skillsMatch && ` Missing required skills.`}
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="hover:scale-105 transition-transform duration-200"
                                onClick={() => setSelectedJob(job)}
                              >
                                <Users className="h-4 w-4 mr-2" />
                                Alumni
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Alumni at {job.company}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-3">
                                {mockAlumni[job.company]?.map((alumni, index) => (
                                  <div key={index} className="border rounded-lg p-3">
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                      {alumni.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {alumni.position} • Batch {alumni.batch} • {alumni.experience}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="hover:scale-105 transition-transform duration-200"
                              >
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Questions
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Previous Questions - {job.company}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-2">
                                {mockQuestions[job.company]?.map((question, index) => (
                                  <div key={index} className="border rounded-lg p-3">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                      {index + 1}. {question}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>

                        {applied ? (
                          <div className="flex items-center space-x-2">
                            {status === 'Applied' && (
                              <>
                                <Clock className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                                  {status}
                                </span>
                              </>
                            )}
                            {status === 'Interview Scheduled' && (
                              <>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                  {status}
                                </span>
                              </>
                            )}
                          </div>
                        ) : (
                          <Button
                            onClick={() => handleApply(job)}
                            disabled={!eligibility.eligible}
                            className="hover:scale-105 transition-transform duration-200"
                            size="sm"
                          >
                            Apply Now
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Profile Section */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Personal Info</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Department: {user.department}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  CGPA: {user.cgpa}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {user.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Projects</h4>
                <ul className="space-y-1">
                  {user.projects?.map((project, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      • {project}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
            </CardHeader>
            <CardContent>
              {applications
                .filter(app => app.studentId === user.id)
                .map((app) => {
                  const job = mockJobs.find(j => j.id === app.jobId);
                  return (
                    <div key={app.id} className="border rounded-lg p-3 mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {job?.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {job?.company}
                      </p>
                      <Badge variant="outline" className="mt-1">
                        {app.status}
                      </Badge>
                    </div>
                  );
                })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;