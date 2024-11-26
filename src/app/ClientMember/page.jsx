"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

function ClientMember() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember")
    }
  })

  /*
    // alternate code
    const { data: session, status } = useSession()
    if (status !== "authenticated") {
      redirect("/api/auth/signin?callbackUrl=/ClientMember")
    }
  */

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Welcome to Your Dashboard</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-medium text-gray-800">Your Session Details</h2>
            <p className="mt-2 text-sm text-gray-600">You are successfully authenticated. Here are your details:</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-sm text-gray-500">{session?.user?.email}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Role:</span>
              <span className="text-sm text-gray-500">{session?.user?.role}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Looking for something else? Feel free to explore more.</p>
        </div>
      </div>
    </div>
  )
}

export default ClientMember
