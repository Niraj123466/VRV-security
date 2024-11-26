import Link from 'next/link'
import React from 'react'

function Denied() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-700">
          You are not authorized to access this page.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Please contact the administrator if you believe this is an error.
        </p>
        <div className="mt-6">
          <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Denied
