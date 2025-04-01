"use client";
import Image from 'next/image';

interface Mentor {
  name: string;
  role: string;
  icon: string;
  followers: number;
  isFollowing: boolean;
}

export default function MentorList() {
  const mentors: Mentor[] = [
    {
      name: 'Sarah Johnson',
      role: 'Architect',
      icon: '📐',  // Architect - triangle ruler
      followers: 1234,
      isFollowing: false,
    },
    {
      name: 'Michael Chen',
      role: 'Development Manager',
      icon: '👷‍♂️',  // Construction worker
      followers: 856,
      isFollowing: true,
    },
    {
      name: 'Emma Davis',
      role: 'Construction Manager',
      icon: '🏗️',  // Construction site
      followers: 2341,
      isFollowing: false,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-black">Top Mentors</h3>
      <div className="space-y-4">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-[#F8F8F8] rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative bg-[#E8F1FF] flex items-center justify-center text-2xl">
                <span role="img" aria-label={`${mentor.role} icon`}>
                  {mentor.icon}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-[#1A1A1A]">{mentor.name}</h4>
                <p className="text-sm text-gray-600">{mentor.role}</p>
                <p className="text-xs text-gray-500">{mentor.followers} followers</p>
              </div>
            </div>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mentor.isFollowing
                  ? 'bg-[#F8F8F8] text-[#6B4EFF] hover:bg-gray-200'
                  : 'bg-[#6B4EFF] text-white hover:bg-[#5A3FE0]'
              }`}
            >
              {mentor.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 