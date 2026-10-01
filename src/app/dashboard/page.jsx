"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  
  // যদি ইউজার লগ-ইন না থাকে, তবে ডেমো ডেটা দেখাবে
  const userData = session?.user || {
    name: "Demo User",
    email: "demo@example.com",
    role: "Developer",
  };

  // ড্যাশবোর্ডের জন্য কিছু ডেমো স্ট্যাটস
  const dashboardStats = [
    { id: 1, title: "Total Projects", value: "12", color: "text-blue-600", bg: "bg-blue-50" },
    { id: 2, title: "Active Tasks", value: "34", color: "text-green-600", bg: "bg-green-50" },
    { id: 3, title: "Pending Reviews", value: "8", color: "text-orange-600", bg: "bg-orange-50" },
  ];

  // লোডিং স্টেট হ্যান্ডেল করা
  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500 font-medium animate-pulse">Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header & Profile Section */}
        <header className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Profile Avatar (Name Initials) */}
            <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
              {userData.name.charAt(0).toUpperCase()}
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, {userData.name}! 👋
              </h1>
              <p className="text-gray-500 mt-1">{userData.email}</p>
            </div>
          </div>
          
          <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-medium text-sm border border-indigo-100">
            Role: {userData.role || 'User'}
          </div>
        </header>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dashboardStats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 font-medium text-sm">{stat.title}</h3>
                <div className={`w-8 h-8 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center font-bold`}>
                  #
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-800 mt-4">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Area (Recent Activity) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity (Demo)</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-6">
              {[
                { id: 1, title: "Updated profile settings", time: "2 hours ago", type: "bg-blue-500" },
                { id: 2, title: "Completed Task: 'Design Homepage'", time: "5 hours ago", type: "bg-green-500" },
                { id: 3, title: "Logged in from new device", time: "1 day ago", type: "bg-gray-400" },
              ].map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${item.type} mt-1.5 ring-4 ring-gray-50`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}