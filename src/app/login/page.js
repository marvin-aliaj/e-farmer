'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email-i është i detyrueshëm';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-i nuk është i vlefshëm';
    }

    if (!formData.password) {
      newErrors.password = 'Fjalëkalimi është i detyrueshëm';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Fjalëkalimi duhet të ketë të paktën 6 karaktere';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would make the actual API call to your backend
      console.log('Login attempt:', formData);
      
      // Simulate successful login
      setLoginSuccess(true);
      
      // Redirect to appropriate dashboard based on user type
      setTimeout(() => {
        // In a real app, you would determine user type from the API response
        const userType = 'producer'; // or 'client'
        window.location.href = `/dashboard/${userType}`;
      }, 1500);
      
    } catch (error) {
      setErrors({ general: 'Gabim në hyrje. Provoni përsëri.' });
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    {
      type: 'producer',
      email: 'fermer@demo.al',
      password: 'demo123',
      name: 'Fermer Demo',
      description: 'Llogari demo për fermerët'
    },
    {
      type: 'client',
      email: 'klient@demo.al',
      password: 'demo123',
      name: 'Klient Demo',
      description: 'Llogari demo për klientët'
    }
  ];

  const fillDemoAccount = (account) => {
    setFormData({
      email: account.email,
      password: account.password,
      rememberMe: false
    });
    setErrors({});
  };

  if (loginSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="w-16 h-16 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Hyrja u Krye me Sukses!
          </h2>
          <p className="text-gray-600 mb-6">
            Po ju ridrejtojmë në dashboard-in tuaj...
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Login Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Mirë se Vini Përsëri
              </h2>
              <p className="text-gray-600">
                Hyni në llogarinë tuaj për të vazhduar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                    <p className="text-sm text-red-800">{errors.general}</p>
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="email@example.com"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fjalëkalimi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Fjalëkalimi juaj"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    disabled={isLoading}
                  />
                  <span className="ml-2 text-sm text-gray-700">Më mbaj mend</span>
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-green-600 hover:text-green-800"
                >
                  Harruat fjalëkalimin?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-sm font-medium text-white ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Duke hyrë...</span>
                  </div>
                ) : (
                  'Hyr'
                )}
              </button>
            </form>
          </div>

          {/* Demo Accounts */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Llogari Demo për Testim
            </h3>
            <div className="space-y-3">
              {demoAccounts.map((account, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{account.name}</h4>
                      <p className="text-sm text-gray-600">{account.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Email: {account.email} | Password: {account.password}
                      </p>
                    </div>
                    <button
                      onClick={() => fillDemoAccount(account)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Përdor
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 text-center mt-4">
              Këto janë llogari demo për testimin e platformës
            </p>
          </div>

          {/* Additional Links */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Nuk ke llogari?{' '}
              <Link href="/register" className="text-green-600 hover:text-green-800 font-medium">
                Regjistrohu këtu
              </Link>
            </p>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Ke probleme me hyrjen?{' '}
              <Link href="/contact" className="text-green-600 hover:text-green-800 font-medium">
                Na kontaktoni
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
