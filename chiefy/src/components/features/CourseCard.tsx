"use client";
import { useState } from 'react';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  thumbnail: string;
  progress?: number;
  instructor: string;
  duration: string;
  isContinueWatching?: boolean;
}

export default function CourseCard({ title, thumbnail, progress, instructor, duration, isContinueWatching = false }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm opacity-90">{instructor}</p>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={thumbnail || '/courses/blueprint-default.jpg'}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Progress Overlay */}
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 z-20">
            <div 
              className="h-full bg-[#6B4EFF] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <div className="p-4">
        {progress !== undefined && (
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-medium text-[#6B4EFF]">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-[#6B4EFF] rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{duration}</span>
          {isContinueWatching && (
            <button 
              className={`text-[#6B4EFF] font-medium hover:text-[#5A3FE0] flex items-center gap-1 transition-all duration-200 ${
                isHovered ? 'translate-x-1' : ''
              }`}
            >
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 