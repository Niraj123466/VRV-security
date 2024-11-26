import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function Member() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Welcome, Member!</h1>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-2">Email: <span className="font-medium">{session?.user?.email}</span></p>
          <p className="text-lg text-gray-700">Role: <span className="font-medium">{session?.user?.role}</span></p>
        </div>
        <div className="mt-6 text-center">
          <Link href="/" clLinkssName="text-blue-500 hover:text-blue-700 underline">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Member
