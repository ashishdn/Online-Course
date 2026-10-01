import getCoursesData from "@/lib/data";
import React from "react";
import CourseData from ".././../../public/courses.json";
import Image from "next/image";
import Link from "next/link";

export default async function CoursePage() {
  console.log(CourseData);
  return (
<div className="container mx-auto">
 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-20">
    {CourseData.map((course) => (
      <div key={course.id} className="h-full">
        <div className="w-full max-w-[360px] h-full flex flex-col bg-white rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] overflow-hidden mx-auto font-sans">
          <div className="h-[200px] bg-[#130a2b] relative overflow-hidden flex items-center justify-center shrink-0">
            <Image
              src={course.image}
              width={400}
              height={400}
              alt="Complete Web Development Bootcamp"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <span className="self-start inline-block bg-sky-100 text-sky-600 px-3.5 py-1.5 rounded-full text-[13px] font-semibold -mt-[40px] mb-4 relative z-10">
              {course.category}
            </span>
            <h2 className="text-[22px] font-bold text-slate-900 mb-4 leading-snug">
              {course.title}
            </h2>

            <div className="flex justify-between items-center mb-4 text-sm text-slate-700">
              <div className="flex items-center gap-1.5 font-medium">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Instructor: {course.instructor}
              </div>
              <div className="flex items-center gap-1">
                <strong className="text-base text-slate-900">4.8</strong>
                <span className="text-amber-500 tracking-[1px]">★★★★★</span>
              </div>
            </div>

            <div className="flex justify-between bg-slate-50 px-4 py-3 rounded-xl mb-4">
              <div className="flex items-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <div>
                  <span className="text-xs text-slate-500 block">
                    Level:
                  </span>
                  <span className="text-sm font-semibold text-slate-900 block">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <span className="text-xs text-slate-500 block">
                    Duration:
                  </span>
                  <span className="text-sm font-semibold text-slate-900 block">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[15px] text-slate-600 leading-relaxed mb-6">
              {course.description}
            </p>

            <Link
              href={`/courses/${course.id}`}
              className="mt-auto self-start inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Explore Course
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
