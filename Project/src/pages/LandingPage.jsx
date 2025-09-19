import React from "react";
import { ArrowRight, Users, Target, BarChart, Star, Award, Shield, Zap, Globe } from "lucide-react";

const LandingPage = ({ onGetStarted }) => {
   return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Campus Selection</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Success Stories</a>
              <button 
                onClick={onGetStarted}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Future 
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with Top Internships & Placements. Streamline your campus recruitment journey with our intelligent matching platform designed for students, companies, and placement cells.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onGetStarted}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                  How It Works
                </button>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="src/unnamed1.png" 
                alt="Students using CampusSelection platform" 
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.currentTarget.src = 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg';
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live matching in progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need in One Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From application to placement, we've streamlined every step of the campus recruitment process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching</h3>
              <p className="text-gray-600">AI-powered recommendation engine matches students with the most relevant opportunities based on skills and preferences.</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">One-Click Applications</h3>
              <p className="text-gray-600">Apply to multiple internships and full-time positions with a single click using your comprehensive digital profile.</p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Track application progress, interview schedules, and placement statistics with comprehensive dashboards.</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Role-based access ensures data privacy while maintaining transparency in the recruitment process.</p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Workflows</h3>
              <p className="text-gray-600">Streamlined approval processes, interview scheduling, and certificate generation save time for everyone.</p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Campus Support</h3>
              <p className="text-gray-600">Scale across multiple institutions with centralized management and campus-specific customizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to transform your campus placement process</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Your Profile</h3>
              <p className="text-gray-600">Build a comprehensive digital profile with your resume, skills, and preferences that stays updated throughout your academic journey.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Matched</h3>
              <p className="text-gray-600">Our AI engine analyzes your profile and recommends the best-fit opportunities from verified companies and organizations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track & Succeed</h3>
              <p className="text-gray-600">Monitor your applications, attend scheduled interviews, and receive automated updates until you land your dream placement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from students and institutions who transformed their placement process</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"CampusConnect made finding internships so much easier. I got matched with my dream company and landed a full-time offer!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">PS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">Computer Science, IIT Delhi</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"As an HR manager, this platform has revolutionized how we find and interview candidates. The quality of matches is outstanding."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">RK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">HR Director, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Our placement statistics improved by 40% after implementing CampusConnect. It's a game-changer for placement cells."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-semibold">MS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Maya Singh</div>
                  <div className="text-sm text-gray-600">Placement Officer, NIT Kurukshetra</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Campus Placement Process?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students and hundreds of companies already using CampusConnect
          </p>
          <button 
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">CampusConnect</span>
              </div>
              <p className="text-gray-400">Connecting students with their dream careers through intelligent matching and streamlined processes.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Students</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Find Internships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Full-time Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skill Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Guidance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Companies</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Hiring</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Candidate Screening</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusConnect. All rights reserved. Built for the future of campus placements.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
