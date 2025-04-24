"use client";
import Image from 'next/image';

export default function PlayersAndUmpiresPage() {
  return (
    <div className="p-8">
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/stadium.jpg"
          alt="Stadium"
          layout="fill"
          className="object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Players and Umpires</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Build Your Team</h2>
          <p className="text-gray-600 mb-6">
            Build out your contacts and field your team of experts. Import your existing contacts and create your unique Property Development team.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Import Contacts
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Trade with Mates</h2>
          <p className="text-gray-600 mb-6">
            Exchange contacts with your mates and expand your network. Build stronger teams through collaboration.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
} 