import CourseCard from '@/components/features/CourseCard';
import StatisticsWidget from '@/components/features/StatisticsWidget';
import MentorList from '@/components/features/MentorList';

export default function Home() {
  const continueWatchingCourses = [
    {
      title: 'UI Design Fundamentals',
      thumbnail: '/courses/blueprint-reading.jpg',
      instructor: 'Sarah Johnson',
      duration: '2h 30m remaining',
      progress: 65,
      isContinueWatching: true,
    },
    {
      title: 'Advanced React Patterns',
      thumbnail: '/courses/site-management.jpg',
      instructor: 'Michael Chen',
      duration: '1h 45m remaining',
      progress: 30,
      isContinueWatching: true,
    },
    {
      title: 'User Research Methods',
      thumbnail: '/courses/construction-planning.jpg',
      instructor: 'Emma Davis',
      duration: '3h 15m remaining',
      progress: 15,
      isContinueWatching: true,
    },
  ];

  return (
    <main className="p-6">
      {/* Hero Section */}
      <section className="bg-[#6B4EFF] text-white rounded-2xl p-8 mb-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Chiefy Learning</h1>
          <p className="text-lg mb-6">Master new skills with our expert-led courses and personalized learning paths.</p>
          <button className="bg-white text-[#6B4EFF] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Start Learning
          </button>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Statistics Widget */}
          <StatisticsWidget />

          {/* Continue Watching Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Continue Watching</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {continueWatchingCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </section>

          {/* Course Progress Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <CourseCard
                  key={i}
                  title={`Course ${i}`}
                  thumbnail=""
                  instructor="Instructor Name"
                  duration="8h total"
                  progress={Math.floor(Math.random() * 100)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Sidebar Content */}
        <div className="space-y-8">
          <MentorList />
        </div>
      </div>
    </main>
  );
}
