async function Public() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to my Portfolio</h1>

        <div className="text-center mb-6">
          <h3 className="text-3xl font-semibold text-gray-900 mb-2">Hi, I am Niraj More</h3>
          <h5 className="text-xl font-medium text-gray-600 mb-4">I am a Full Stack Developer</h5>
          <p className="text-lg text-gray-700 mb-4">
            I am Niraj More, a third-year engineering student pursuing a bachelors degree in AI&DS.
            I have a passion for building full-stack applications and solving real-world problems through technology.
          </p>

          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Public
