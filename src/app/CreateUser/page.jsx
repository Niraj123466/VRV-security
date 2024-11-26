import Link from 'next/link'
import React from 'react'

function ClientUser() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-semibold text-center text-red-600 mb-6">Access Restricted</h1>

        <div className="text-center">
          <p className="text-lg text-gray-700">This page is only accessible to <strong>admins</strong>.</p>
          <p className="mt-4 text-sm text-gray-500">If you believe this is an error, please contact the system administrator.</p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClientUser
