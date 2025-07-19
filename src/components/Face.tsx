const FaceAuthManagement = () => {
  return (
    // Outer container for the entire section, setting a dark background and text color
    <section id="face-auth-management" className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-rose-300 drop-shadow-lg leading-tight">
          Next-Gen Security: <br className="sm:hidden" /> Face Authentication
        </h2>
        {/* Section description */}
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Embrace the future of secure login systems. Our Face Authentication module ensures seamless and reliable user access using computer vision and encryption technology.
        </p>

        {/* Content block for image and features */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700
                         hover:shadow-3xl transition-all duration-300 transform
                         hover:-translate-y-4 relative overflow-hidden
                         bg-gradient-to-br from-slate-800 to-slate-700">
          {/* Subtle background pattern/overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

          {/* Image/Demo GIF */}
          <div className="relative w-full max-w-md flex-shrink-0">
            <img
              src="https://placehold.co/400x300/1F2937/D1D5DB?text=Face+Auth+Demo" // Placeholder image for demo
              alt="Face Recognition Demo"
              className="w-full h-auto rounded-xl shadow-lg border border-slate-600 transform group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.currentTarget.src = `https://placehold.co/400x300/1F2937/D1D5DB?text=Image+Error`; }} // Fallback image
            />
            {/* Optional: Add an overlay or play button for the demo if it were a video */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <i className="fas fa-play-circle text-white text-6xl opacity-75"></i> */}
            </div>
          </div>

          {/* Features List */}
          <div className="max-w-xl text-left lg:text-left">
            <ul className="space-y-5 text-lg text-slate-300">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 text-2xl flex-shrink-0 mt-1 animate-pulse"></i>
                <span className="flex-grow">Fast and secure sign-in, making your access quick and protected.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 text-2xl flex-shrink-0 mt-1 animate-pulse"></i>
                <span className="flex-grow">Supports multiple faces per account, convenient for families or teams.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 text-2xl flex-shrink-0 mt-1 animate-pulse"></i>
                <span className="flex-grow">Utilizes encrypted biometric templates for ultimate privacy and data safety.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 text-2xl flex-shrink-0 mt-1 animate-pulse"></i>
                <span className="flex-grow">Works seamlessly across various devices and web browsers.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 text-2xl flex-shrink-0 mt-1 animate-pulse"></i>
                <span className="flex-grow">Powered by advanced TensorFlow & OpenCV technologies for accuracy.</span>
              </li>
            </ul>
            <a href="/security/face-auth" className="mt-12 inline-block px-10 py-5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
                                                     focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-75 tracking-wide">
              Try Face Authentication &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceAuthManagement;