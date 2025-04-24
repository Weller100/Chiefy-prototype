"use client";
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '@/utils/chartConfig';

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics');
      const data = await response.json();
      setAnalyticsData(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    }
  };

  const getChartData = () => {
    const counts: Record<string, number> = {};
    analyticsData.forEach((event) => {
      if (event.eventName === 'navigation_click') {
        const item = event.metadata.item;
        counts[item] = (counts[item] || 0) + 1;
      }
    });

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          label: 'Navigation Clicks',
          data: Object.values(counts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Navigation Usage</h2>
        <div className="h-96">
          <Bar data={getChartData()} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
} 