import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/button';
import { Moon, Sun, User, LogOut, Briefcase } from 'lucide-react';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { user, userRole, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                PlacementPortal
              </h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform duration-200"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </Button>

            {user && (
              <>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user.name}
                  </span>
                  <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    {userRole}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;