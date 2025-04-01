"use client";
import { useState, useEffect } from 'react';

interface StatItem {
  label: string;
  value: string | number;
  change?: string;
}

export default function StatisticsWidget() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStats([
        { label: 'Total Courses', value: 12, change: '+2 this month' },
        { label: 'Hours Learned', value: '48.5', change: '+12.5 this week' },
        { label: 'Completion Rate', value: '85%', change: '+5% this month' },
        { label: 'Certificates', value: 3, change: '+1 this month' },
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-black">Your Learning Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        {isLoading ? (
          // Loading skeleton
          Array(4).fill(0).map((_, index) => (
            <div key={index} className="p-4 bg-[#F8F8F8] rounded-lg animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-16 mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-32"></div>
            </div>
          ))
        ) : (
          stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-[#F8F8F8] rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-[#1A1A1A] mb-1">{stat.value}</p>
              {stat.change && (
                <p className="text-sm text-green-600">{stat.change}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
} 