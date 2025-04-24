"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/'); // Redirect to home if not logged in
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/20">
          <h1 className="text-3xl font-bold mb-4 text-white">Welcome to Your Dashboard</h1>
          <p className="text-white/70 mb-8">You have successfully logged in!</p>
          <button
            onClick={() => {
              localStorage.removeItem('user');
              router.push('/');
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
} 