import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { 
  FaFacebookF,
  FaLinkedinIn,
  FaApple 
} from 'react-icons/fa';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Authentication coming soon!');
    onClose();
  };

  const socialLogin = (provider: string) => {
    alert(`${provider} login coming soon!`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#0A0A0A] rounded-2xl p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-white/70">
            {isLogin 
              ? 'Sign in to continue your learning journey'
              : 'Join thousands of property development professionals'
            }
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {/* Google */}
          <button
            onClick={() => socialLogin('Google')}
            className="p-3 bg-white hover:bg-gray-100 rounded-full transition-all"
            aria-label="Sign in with Google"
          >
            <FcGoogle className="w-6 h-6" />
          </button>

          {/* Facebook */}
          <button
            onClick={() => socialLogin('Facebook')}
            className="p-3 bg-[#1877F2] hover:bg-[#0C63D4] rounded-full transition-all"
            aria-label="Sign in with Facebook"
          >
            <FaFacebookF className="w-6 h-6 text-white" />
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => socialLogin('LinkedIn')}
            className="p-3 bg-[#0A66C2] hover:bg-[#004182] rounded-full transition-all"
            aria-label="Sign in with LinkedIn"
          >
            <FaLinkedinIn className="w-6 h-6 text-white" />
          </button>

          {/* Apple */}
          <button
            onClick={() => socialLogin('Apple')}
            className="p-3 bg-black hover:bg-gray-900 rounded-full transition-all border border-white/10"
            aria-label="Sign in with Apple"
          >
            <FaApple className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#0A0A0A] text-white/50">Or continue with email</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-white/70 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <label className="block text-white/70 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all"
              required
            />
          </div>
          
          <div>
            <label className="block text-white/70 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-500 hover:text-purple-400 font-semibold"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 