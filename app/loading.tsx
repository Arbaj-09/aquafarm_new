export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-orange-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-purple-700 font-semibold">Loading...</p>
      </div>
    </div>
  );
}
