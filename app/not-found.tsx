import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-orange-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded hover:from-red-600 hover:to-orange-600 transition-all font-semibold"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
