import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-gray-800 text-gray-100 shadow-lg">
      <nav className="flex justify-between items-center py-4 px-6 md:px-20">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition-all">
          <Link href="/">Niraj Site</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          <Link className="hover:text-blue-400 hover:underline transition-all p-2" href="/">Home</Link>
          <Link className="hover:text-blue-400 hover:underline transition-all p-2" href="/CreateUser">Create User</Link>
          <Link className="hover:text-blue-400 hover:underline transition-all p-2" href="/ClientMember">Client Member</Link>
          <Link className="hover:text-blue-400 hover:underline transition-all p-2" href="/Member">Member</Link>
        </div>

        {/* Login/Logout/Signup Button */}
        <div className="flex items-center gap-4">
          {session ? (
            <Link className="hover:text-red-400 hover:underline p-2" href="/api/auth/signout?callbackUrl=/">
              Logout
            </Link>
          ) : (
            <>
              <Link className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all" href="/api/auth/signin">
                Login
              </Link>
              {/* Sign Up Button */}
              <Link className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all" href="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
