const Tools = () => {
  return (
    // Outer container for the entire section, setting a dark background and text color
    <section id="tools" className="bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-12">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-cyan-300 drop-shadow-lg leading-tight">
          Empower Your Workflow: <br className="sm:hidden" /> Intuitive Data Tools
        </h2>
        {/* Section description */}
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Revolutionize how you interact with data. Our platform provides a cutting-edge <strong className="text-cyan-400">Data Visualizer</strong> for instant insights and an <strong className="text-purple-400">AI Chatbot</strong> ready to assist with any query, making complex tasks simple.
        </p>

        {/* Grid for the two main tool blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Data Visualization Tool Block */}
          <div className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700
                         hover:shadow-3xl transition-all duration-300 transform
                         hover:-translate-y-4 relative overflow-hidden
                         bg-gradient-to-br from-slate-800 to-slate-700">
            {/* Subtle background pattern/overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <h3 className="text-3xl font-bold mb-8 text-blue-300 flex items-center justify-center">
              <i className="fas fa-chart-pie mr-4 text-4xl"></i> Dynamic Data Visualizer
            </h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Effortlessly transform raw data from any common file format into beautiful, interactive, and insightful visualizations. Whether it's a simple bar chart or a complex heat map, gain clarity from your numbers in moments.
            </p>
            <div className="mb-8">
              <p className="text-slate-300 font-semibold mb-4 text-xl border-b border-slate-700 pb-2">Supported File Formats:</p>
              <div className="flex flex-wrap justify-center gap-4 text-base text-slate-400">
                <span className="bg-slate-700 px-5 py-2 rounded-full border border-slate-600 flex items-center shadow-md hover:bg-slate-600 transition duration-200">
                  <i className="fas fa-file-csv mr-2 text-lg text-green-400"></i> .CSV
                </span>
                <span className="bg-slate-700 px-5 py-2 rounded-full border border-slate-600 flex items-center shadow-md hover:bg-slate-600 transition duration-200">
                  <i className="fas fa-file-pdf mr-2 text-lg text-red-400"></i> .PDF
                </span>
                <span className="bg-slate-700 px-5 py-2 rounded-full border border-slate-600 flex items-center shadow-md hover:bg-slate-600 transition duration-200">
                  <i className="fas fa-file-excel mr-2 text-lg text-emerald-400"></i> .XLSX (Excel)
                </span>
                <span className="bg-slate-700 px-5 py-2 rounded-full border border-slate-600 flex items-center shadow-md hover:bg-slate-600 transition duration-200">
                  <i className="fas fa-file-word mr-2 text-lg text-blue-400"></i> .DOCX (Word)
                </span>
                <span className="bg-slate-700 px-5 py-2 rounded-full border border-slate-600 flex items-center shadow-md hover:bg-slate-600 transition duration-200">
                  <i className="fas fa-file-alt mr-2 text-lg text-gray-400"></i> ...and many more!
                </span>
              </div>
            </div>
            <div className="bg-slate-700 p-8 rounded-xl text-center border border-slate-600 shadow-inner">
              <p className="text-white text-2xl font-bold mb-4">Ready to See Your Data?</p>
              <p className="text-slate-400 mb-6 text-lg">Drag & Drop your file here or simply click to upload:</p>
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105
                                 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75">
                <i className="fas fa-upload mr-3"></i> Upload Your Data
              </button>
              <p className="text-slate-500 text-sm mt-6">Secure processing. Instant visualizations. Deep insights.</p>
            </div>
            <a href="/tools/data-visualizer" className="mt-10 text-blue-400 hover:text-blue-300 font-semibold text-lg transition duration-200 flex items-center justify-center">
              Launch Data Visualizer &rarr;
            </a>
          </div>

          {/* AI Chatbot Tool Block (Placeholder for the second block, if needed) */}
          {/* This block is intentionally left as a placeholder based on the original request structure.
              You can uncomment and populate it with content for the AI Chatbot. */}
          <div className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700
                         hover:shadow-3xl transition-all duration-300 transform
                         hover:-translate-y-4 relative overflow-hidden
                         bg-gradient-to-br from-slate-800 to-slate-700">
            {/* Subtle background pattern/overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <h3 className="text-3xl font-bold mb-8 text-purple-300 flex items-center justify-center">
              <i className="fas fa-robot mr-4 text-4xl"></i> Intelligent AI Chatbot
            </h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Get instant answers and guidance on complex data science and development topics. Our AI Chatbot is trained on vast datasets to provide accurate, concise, and helpful responses to your queries.
            </p>
            <div className="bg-slate-700 p-8 rounded-xl text-center border border-slate-600 shadow-inner">
              <p className="text-white text-2xl font-bold mb-4">Ask Our AI Anything!</p>
              <p className="text-slate-400 mb-6 text-lg">Type your question below and get an intelligent response:</p>
              <div className="flex flex-col gap-4">
                <textarea
                  className="w-full p-4 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={4}
                  placeholder="e.g., Explain gradient descent in simple terms..."
                ></textarea>
                <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-full shadow-lg transition duration-300 transform hover:scale-105
                                   focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75">
                  <i className="fas fa-paper-plane mr-3"></i> Send Query
                </button>
              </div>
              <p className="text-slate-500 text-sm mt-6">Powered by advanced large language models.</p>
            </div>
            <a href="/tools/ai-chatbot" className="mt-10 text-purple-400 hover:text-purple-300 font-semibold text-lg transition duration-200 flex items-center justify-center">
              Launch AI Chatbot &rarr;
            </a>
          </div>
        </div>

        {/* Explore All Tools button */}
        <div className="text-center mt-24">
          <a
            href="/tools"
            className="px-14 py-6 bg-gradient-to-r from-cyan-600 to-teal-600
                       hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-2xl
                       rounded-full shadow-xl transition-all duration-300 transform
                       hover:scale-105 hover:ring-4 ring-cyan-400 ring-opacity-60
                       focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-75
                       tracking-wide"
          >
            Explore All Our Powerful Tools
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tools;
