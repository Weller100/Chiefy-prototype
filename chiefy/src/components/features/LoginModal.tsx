
"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn, FaApple } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SocialIconProps {
  Icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

const SocialIcon = ({ Icon, className }: SocialIconProps) => (
  <Icon className={className} />
);

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (isLogin) {
        // Store user data
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));
        // Navigate to dashboard
        router.push("/dashboard");
      } else {
        console.log("Signing up with:", formData);
        // After signup, automatically log in and redirect
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem("user", JSON.stringify({ provider }));
      router.push("/dashboard");
    } catch (err) {
      setError(`${provider} login failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0B1120] z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#1B2B4D] to-[#0B1120] rounded-2xl p-8 max-w-md w-full relative border border-blue-800/20 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome Back
          </h2>
          <p className="text-white/70">
            Sign in to continue your learning journey
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="p-3 bg-white hover:bg-gray-100 rounded-full transition-all"
            aria-label="Sign in with Google"
          >
            <SocialIcon Icon={FcGoogle} className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleSocialLogin("Facebook")}
            className="p-3 bg-[#1877F2] hover:bg-[#0C63D4] rounded-full transition-all"
            aria-label="Sign in with Facebook"
          >
            <SocialIcon Icon={FaFacebookF} className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => handleSocialLogin("LinkedIn")}
            className="p-3 bg-[#0A66C2] hover:bg-[#004182] rounded-full transition-all"
            aria-label="Sign in with LinkedIn"
          >
            <SocialIcon Icon={FaLinkedinIn} className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => handleSocialLogin("Apple")}
            className="p-3 bg-black hover:bg-gray-900 rounded-full transition-all border border-white/10"
            aria-label="Sign in with Apple"
          >
            <SocialIcon Icon={FaApple} className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#0A0A0A] text-white/50">
              Or continue with
            </span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-white/70 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-white/70 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-white/70 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold transition-all mt-8 ${
              isLoading
                ? "opacity-70 cursor-not-allowed"
                : "hover:from-purple-700 hover:to-pink-700"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : isLogin ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/70">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-500 hover:text-purple-400 font-semibold"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
