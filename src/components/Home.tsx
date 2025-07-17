// import { BiBook, BiDownload, BiPieChartAlt } from "react-icons/bi";
// import { BsRocket, BsUpload } from "react-icons/bs";
// import { FaGraduationCap } from "react-icons/fa";
// import { GiThunderBlade } from "react-icons/gi";
// import { LiaLinkedin } from "react-icons/lia";
// import { LuFlaskConical } from "react-icons/lu";
// import { RiMovieAiLine } from "react-icons/ri";


// function Home() {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 antialiased">
//        {/* Header (Optional, but good for a real app) */}

//        <header className="py-4 px-6 md:px-12 bg-white shadow-md flex justify-between items-center rounded-b-xl sticky top-0 z-50">
//          <h1 className="text-2xl font-bold text-indigo-700">DataFlow</h1>
//          <nav>
//            <ul className="flex space-x-6">
//              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Home</a></li>
//              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Features</a></li>
//              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Learn</a></li>
//              <li><a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200">Contact</a></li>
//            </ul>
//          </nav>
//        </header>

//        <main className="container mx-auto px-4 py-8 md:py-16">
//          {/* Hero Section */}
//          <section className="text-center py-16 md:py-24 bg-white rounded-3xl shadow-xl mb-16 transform transition-all duration-500 ease-in-out hover:scale-[1.005]">
//            <h2 className="text-4xl md:text-6xl font-extrabold text-indigo-800 leading-tight mb-6 tracking-tight">
//              📊 Clean, Transform & Learn — All in One Platform!
//            </h2>
//            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
//              Upload your data, clean it, visualize it, and learn Python, Data Science & Machine Learning — without writing code.
//            </p>
//            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300">
//              <BsRocket className="inline-block mr-2" size={22} /> Get Started
//            </button>
//          </section>

//          {/* Key Features Section */}
//          <section className="py-12 mb-16">
//            <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">💡 Key Features</h3>
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//              {/* Feature Card 1 */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-5 shadow-inner">
//                  <BsUpload size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">🧼 Smart Data Cleaning</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Fix missing values, drop duplicates, rename columns, and prepare your dataset in just a few clicks.
//                </p>
//              </div>
//              {/* Feature Card 2 */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-5 shadow-inner">
//                  <BiPieChartAlt size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">📊 Data Visualization</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Generate beautiful charts like histograms, box plots, and heatmaps to explore your dataset visually.
//                </p>
//              </div>
//              {/* Feature Card 3 */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-full mb-5 shadow-inner">
//                  <LuFlaskConical size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">🧠 Encoding & Scaling</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Apply One-Hot Encoding, Label Encoding, and Standard Scalers easily to make your data machine learning ready.
//                </p>
//              </div>
//              {/* Feature Card 4 */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 shadow-inner">
//                  <BiDownload size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">📥 Download Clean Data</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Download your final dataset in CSV, Excel, or SQLite format — ready for use in any ML or data analysis project.
//                </p>
//              </div>
//            </div>
//          </section>

//          {/* How It Works Section */}
//          <section className="py-12 mb-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
//            <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">🔄 How It Works</h3>
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//              {/* Step 1 */}
//              <div className="text-center p-4">
//                <div className="w-18 h-18 mx-auto bg-indigo-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-4 border-indigo-200">
//                  1
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-2">Upload Dataset</h4>
//                <p className="text-gray-600 text-base">Upload a .csv, .xlsx, or .sqlite3 file.</p>
//              </div>
//              {/* Step 2 */}
//              <div className="text-center p-4">
//                <div className="w-18 h-18 mx-auto bg-indigo-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-4 border-indigo-200">
//                  2
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-2">Select Cleaning Options</h4>
//                <p className="text-gray-600 text-base">Choose how you want to handle missing values, encode columns, or scale data.</p>
//              </div>
//              {/* Step 3 */}
//              <div className="text-center p-4">
//                <div className="w-18 h-18 mx-auto bg-indigo-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-4 border-indigo-200">
//                  3
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-2">Visualize & Preview</h4>
//                <p className="text-gray-600 text-base">View your cleaned data and charts before downloading.</p>
//              </div>
//              {/* Step 4 */}
//              <div className="text-center p-4">
//                <div className="w-18 h-18 mx-auto bg-indigo-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4 shadow-lg border-4 border-indigo-200">
//                  4
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-2">Export Your Data</h4>
//                <p className="text-gray-600 text-base">Download the final version of your dataset in your preferred format.</p>
//              </div>
//            </div>
//          </section>

//          {/* Learn with Us Section */}
//          <section className="py-12 mb-16">
//            <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">📚 Learn with Us</h3>
//            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//              {/* Learn Python */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full mb-5 shadow-inner">
//                  <BiBook size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">🐍 Learn Python</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Start from the basics: variables, loops, functions, file handling, and working with Pandas.
//                </p>
//              </div>
//              {/* Learn Data Science */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-teal-100 text-teal-600 rounded-full mb-5 shadow-inner">
//                  <FaGraduationCap size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">📈 Learn Data Science</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Understand statistics, data exploration, EDA, and preprocessing concepts.
//                </p>
//              </div>
//              {/* Learn Machine Learning */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-pink-100 text-pink-600 rounded-full mb-5 shadow-inner">
//                  <LuFlaskConical size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">🤖 Learn Machine Learning</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Build small ML projects like linear regression, decision trees, and clustering with step-by-step guidance.
//                </p>
//              </div>
//              {/* Resources & Tutorials */}
//              <div className="bg-white p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                <div className="flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-full mb-5 shadow-inner">
//                  <BiBook size={28} />
//                </div>
//                <h4 className="text-xl font-semibold text-gray-800 mb-3">📂 Resources & Tutorials</h4>
//                <p className="text-gray-600 text-base leading-relaxed">
//                  Explore beginner-friendly articles, video tutorials, and real-life projects — all organized for your growth.
//                </p>
//              </div>
//            </div>
//            <div className="text-center mt-12">
//              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
//                📘 Go to Learn Section
//              </button>
//            </div>
//          </section>

//          {/* Why Use Our Platform Section */}
//          <section className="py-12 mb-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
//            <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">🧑‍🎓 Why Use Our Platform?</h3>
//            <ul className="list-none space-y-5 text-lg text-gray-700 max-w-3xl mx-auto">
//              <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//                <span className="text-green-500 mr-4 text-2xl">✅</span> Beginner-friendly – no programming required
//              </li>
//              <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//                <span className="text-green-500 mr-4 text-2xl">✅</span> Supports multiple file formats
//              </li>
//              <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//                <span className="text-green-500 mr-4 text-2xl">✅</span> Built-in charts and visual tools
//              </li>
//              <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//                <span className="text-green-500 mr-4 text-2xl">✅</span> Perfect for students and data science beginners
//              </li>
//              <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
//                <span className="text-green-500 mr-4 text-2xl">✅</span> Everything in one place: Clean, Learn, Grow
//              </li>
//            </ul>
//          </section>

//          {/* Call to Action Section */}
//          <section className="text-center py-16 md:py-20 bg-indigo-700 text-white rounded-3xl shadow-xl mb-16">
//            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Start Your Data Journey Today</h3>
//            <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
//              Upload a dataset or jump straight into learning Python, Data Science, or Machine Learning.
//            </p>
//            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//              <button className="bg-white text-indigo-700 font-bold py-3.5 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white">
//                📤 Upload Now
//              </button>
//              <button className="bg-transparent border-2 border-white text-white font-bold py-3.5 px-10 rounded-full shadow-lg hover:bg-white hover:text-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white">
//                📘 Learn Python
//              </button>
//            </div>
//          </section>
//        </main>

//        {/* Footer */}
//        <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-12 rounded-t-3xl">
//          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
//            <div className="flex flex-col items-center md:items-start">
//              <p className="text-sm">Made with ❤ by:</p>
//              <p className="text-lg font-semibold text-white">Maroof (Django, ML) & Team (React Frontend)</p>
//            </div>
//            <div className="flex flex-col items-center md:items-end space-y-2">
//              <p className="flex items-center text-sm">
//                <RiMovieAiLine size={18} className="mr-2 text-indigo-400" /> maroof96965@gmail.com
//              </p>
//              <p className="text-sm">Location: Karachi, Pakistan</p>
//              <div className="flex space-x-4 mt-3">
//                <a href="https:github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
//                  <GiThunderBlade size={22} />
//                </a>
//                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
//                  <LiaLinkedin size={22} />
//                </a>
//              </div>
//            </div>
//          </div>
//        </footer>
//      </div>
//     </>
//   )
// }

// export default Home;