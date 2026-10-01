export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* স্পিনার অ্যানিমেশন */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      
      {/* টেক্সট */}
      <p className="text-lg font-medium text-gray-600">Loading...</p>
    </div>
  );
}