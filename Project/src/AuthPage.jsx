import React, { useState } from 'react';
import { ArrowLeft, Award, Eye, EyeOff } from 'lucide-react';

// AuthPage props come from App.jsx
const AuthPage = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    institution: '',
    department: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication - in real app, validate with backend
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      name: isLogin ? getNameForRole(formData.role) : formData.name,
      email: formData.email,
      role: formData.role
    };
    
    onLogin(userData);
  };

  const getNameForRole = (role) => {
    const names = {
      student: 'John Doe',
      hr: 'Sarah Johnson',
      placement_cell: 'Dr. Rajesh Kumar'
    };
    return names[role];
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button 
              onClick={onBack}
              className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">CampusConnect</span>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                isLogin 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                !isLogin 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I am a
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="student">Student</option>
                <option value="hr">HR Manager / Recruiter</option>
                <option value="placement_cell">Placement Cell Officer</option>
              </select>
            </div>

            {/* Name (only for signup) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Additional fields for signup */}
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.role === 'student' ? 'Institution' : 'Organization'}
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={`Enter your ${formData.role === 'student' ? 'college/university' : 'company/organization'}`}
                    required
                  />
                </div>
                
                {formData.role === 'student' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department/Stream
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Computer Science & Engineering"
                      required
                    />
                  </div>
                )}
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-[1.02]"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          {/* Demo Login Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-4">Quick Demo Access</p>
            <div className="space-y-2">
              <button
                onClick={() => onLogin({ id: '1', name: 'Alex Johnson', email: 'student@demo.com', role: 'student' })}
                className="w-full bg-green-100 text-green-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
              >
                Demo as Student
              </button>
              <button
                onClick={() => onLogin({ id: '2', name: 'Sarah Wilson', email: 'hr@demo.com', role: 'hr' })}
                className="w-full bg-purple-100 text-purple-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                Demo as HR Manager
              </button>
              <button
                onClick={() => onLogin({ id: '3', name: 'Dr. Rajesh Kumar', email: 'placement@demo.com', role: 'placement_cell' })}
                className="w-full bg-blue-100 text-blue-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                Demo as Placement Officer
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-6">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
