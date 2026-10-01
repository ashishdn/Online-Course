import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, we couldn't find the page you are looking for. The page may have been removed, or the link is incorrect.
      </p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Return to Home
      </Link>
    </div>
  );
}