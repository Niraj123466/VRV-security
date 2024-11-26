"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";  // Import Link for navigation

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display error messages

  const handleCustomSignin = async (e) => {
    e.preventDefault();

    // Use NextAuth's signIn method to authenticate the user
    const res = await signIn("credentials", {
      redirect: false, // Don't redirect automatically after signing in
      email,
      password,
    });

    if (res?.error) {
      setError(res.error); // Display error message if sign-in fails
    } else {
      // Handle success (e.g., redirect to a protected page)
      window.location.href = "/"; // Redirect to the dashboard or another page
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Sign In</h1>

        {/* Custom Sign In Form */}
        <form onSubmit={handleCustomSignin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Display error message if authentication fails */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>

        {/* Link to Sign Up page */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Dont have an account?</p>
          <Link
            href="/signup"  // Link to the signup page
            className="text-indigo-600 hover:underline"
          >
            Sign up here
          </Link>
        </div>

        {/* Social Sign In */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or sign in with:</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => signIn("github")}
              className="flex items-center justify-center w-32 py-2 px-4 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8c4 0 6 2 6 4s-2 4-6 4H8c-4 0-6-2-6-4s2-4 6-4h8z" />
              </svg>
              GitHub
            </button>

            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center w-32 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23.49 12.28c.18-.49.28-1.02.28-1.57s-.1-1.08-.28-1.57h-6.39v3.14h3.77c-1.63 2.19-4.5 3.65-7.77 3.65-4.89 0-8.89-3.9-8.89-8.72s4-8.72 8.89-8.72c2.73 0 5.14 1.03 6.9 2.74l5.12-5.12C28.49 2.29 26.07.95 23.49.95c-6.72 0-12.12 5.39-12.12 12.03s5.4 12.03 12.12 12.03c6.73 0 12.12-5.39 12.12-12.03l-.02-.01z" />
              </svg>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
