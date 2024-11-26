"use client";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        {/* Spinner */}
        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
        {/* Loading Text */}
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
