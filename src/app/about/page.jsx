import React from 'react'

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      <section className="relative w-full h-[400px] md:h-[450px] bg-[#130a2b] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="edu_grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#edu_grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <span className="inline-block bg-sky-500/20 text-sky-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6">
            About Our Platform
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Your Future
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We provide world-class courses in Web Development, Data Science, Design, and more to help you master new skills.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Transform Your Career
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our platform is designed to bring you the best learning experience. Whether you are a beginner looking to start your journey in tech, or an advanced professional aiming to upgrade your skills, we have the right resources for you.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Learn directly from industry experts in interactive, practical sessions. We cover everything from full-stack web development and Python data science to digital marketing and UI/UX design.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">
              Why Choose Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Expert Instructors</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Learn from experienced professionals dedicated to practical teaching.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Diverse Categories</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Comprehensive curriculum covering modern IT, Development, and Marketing.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Flexible Learning</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Study at your own pace with practical projects and assignments.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}