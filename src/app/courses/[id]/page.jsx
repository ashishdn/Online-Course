import React from "react";
import CourseData from "../../../../public/courses.json";
import Image from "next/image";

export default async function CourseDetails({ params }) {
  const { id } = await params;

  const course = CourseData.find((course) => course.id === Number(id));
  // const course = CourseData.find((course) => course.id === id)
  console.log(course);
  return (
    <div>
      <div className="max-w-6xl mx-auto my-10 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden font-sans">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto lg:min-h-[500px] bg-[#130a2b] relative shrink-0">
            <Image
              width={400}
              height={400}
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                {course.category}
              </span>
              <span className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                {course.level}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              {course.title}
            </h1>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-500 shadow-sm border border-slate-100">
                  <svg
                    width="22"
                    height="22"
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
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider font-medium">
                    Instructor
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {course.instructor}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-500 shadow-sm border border-slate-100">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider font-medium">
                    Duration
                  </span>
                  <span className="text-base font-bold text-slate-900">
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shadow-sm border border-amber-100">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase tracking-wider font-medium">
                    Rating
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold text-slate-900">
                      {course.rating}
                    </span>
                    <span className="text-amber-500 text-sm tracking-widest">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Course Description
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 shadow-lg shadow-blue-500/30 flex-1 text-center">
                Enroll Now
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 border-2 border-slate-200 flex-1 text-center">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
