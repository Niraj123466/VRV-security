"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "", email: "", password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // To handle the loading state

  const handleCustomSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);  // Start loading state

    try {
      // Call the signup API endpoint
      await axios.post("/api/auth/signup", user);
      setLoading(false); // Stop loading
      router.push("/signin");  // Redirect to sign-in page after successful signup
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred, please try again.");
      setLoading(false); // Stop loading on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Create an Account</h1>

        {/* Custom Sign Up Form */}
        <form onSubmit={handleCustomSignup} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={(e) => setUser({...user, username : e.target.value})}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({...user, email : e.target.value})}
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
              value={user.password}
              onChange={(e) => setUser({...user, password : e.target.value})}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}  // Disable button while loading
          >
            {loading ? "Signing Up..." : "Sign Up"} {/* Show loading state */}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-500 text-center">
            <p>{error}</p>
          </div>
        )}

        {/* Social Sign Up */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or sign up with:</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => signIn("github")}
              className="flex items-center justify-center w-32 py-2 px-4 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              GitHub
            </button>

            <button
              onClick={() => signIn("google")}
              className="flex items-center justify-center w-32 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
