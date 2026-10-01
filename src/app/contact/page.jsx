import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">
          Support & Inquiries
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Let's Get in Touch
        </h1>
        <p className="text-lg text-slate-500">
          We’d love to hear from you. Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      {/* Premium Unified Contact Card */}
      <div className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        
        {/* Left Side: Dark Contact Info */}
        <div className="lg:w-[40%] bg-[#130a2b] p-10 lg:p-14 relative overflow-hidden flex flex-col justify-between">
          {/* Background Decorative Blobs */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2">Contact Info</h3>
            <p className="text-slate-400 mb-10 text-sm leading-relaxed">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="text-white font-medium">+1 (234) 567-890</div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="text-white font-medium">support@eduplatform.com</div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="text-white font-medium leading-relaxed">
                  123 Learning Avenue,<br />NY 10001, United States
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="relative z-10 flex gap-4 mt-16">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-[60%] p-10 lg:p-14 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Select a topic" 
                  className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Write your message here..." 
                className="w-full bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] flex justify-center items-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
            
          </form>
        </div>
      </div>
      
    </div>
  );
}