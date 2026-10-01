import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50 via-slate-50 to-indigo-50 px-6 py-20 md:py-28 lg:py-36 text-center">
      
      {/* Main Content Area */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Upgrade Your Skills Today 🚀 <br />
          <span className="font-semibold text-gray-700 block mt-3 text-2xl md:text-4xl">
            Learn from Industry Experts 🎓
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          Join thousands of learners and advance your career with our top-rated
          courses. Master in-demand skills with real-world projects.
        </p>
        
        <div className="flex justify-center">
          <Link
            href="/courses"
            className="px-7 py-3 text-sm md:text-base font-semibold bg-white text-gray-900 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}