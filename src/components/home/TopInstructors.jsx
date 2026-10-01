import Link from "next/link";

export default function TopInstructors() {
  // Mock data for instructors
  const instructors = [
    {
      id: 1,
      name: "John Doe",
      specialty: "Senior Web Developer",
      rating: "4.9",
      students: "50k+",
      courses: 12,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Lead UI/UX Designer",
      rating: "4.8",
      students: "42k+",
      courses: 8,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Michael Brown",
      specialty: "Digital Marketing Expert",
      rating: "4.7",
      students: "35k+",
      courses: 15,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Emily Davis",
      specialty: "Data Scientist",
      rating: "4.9",
      students: "60k+",
      courses: 10,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            🏆 Meet Our Top Instructors
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn directly from industry experts with years of real-world experience and proven teaching methods.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Instructor Image Wrapper */}
              <div className="relative overflow-hidden w-full h-64">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-5">
                  {instructor.specialty}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center text-sm text-gray-600 border-t border-gray-100 pt-5 mt-auto">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-900 flex items-center gap-1">
                      ⭐ {instructor.rating}
                    </span>
                    <span className="text-xs">Rating</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-900">
                      {instructor.students}
                    </span>
                    <span className="text-xs">Students</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-gray-900">
                      {instructor.courses}
                    </span>
                    <span className="text-xs">Courses</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/instructors"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200"
          >
            View All Instructors
          </Link>
        </div>

      </div>
    </section>
  );
}