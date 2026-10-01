import Link from "next/link";
import CourseData from "../../../public/courses.json"
import Image from "next/image";

export default function PopularCourses() {

  const topThreeCourses = [...CourseData].sort((a, b) => b.rating -a.rating).slice(0, 3)
  console.log(CourseData)
  // ডেমো ডেটা (পরে আপনি API থেকে ডেটা এনে এটি ডাইনামিক করবেন)
  

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              🔥 Popular Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Top highest-rated courses chosen by our students.
            </p>
          </div>
          <Link href="/courses" className="text-blue-600 font-semibold hover:underline">
            See all courses &rarr;
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topThreeCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-500 font-medium mb-4">
                  By {course.instructor}
                </p>

                {/* Rating - Pushed to bottom above button using mt-auto */}
                <div className="flex items-center gap-1 mb-6 mt-auto">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="font-bold text-gray-700">{course.rating}</span>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full block py-3 text-center text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}