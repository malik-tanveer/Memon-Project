import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-12">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DataVerse</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            One platform for dataset cleaning, AI learning, and real-world data projects. Perfect for students and beginners.
          </p>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-all">Python Basics</li>
            <li className="hover:text-white transition-all">Data Science</li>
            <li className="hover:text-white transition-all">Machine Learning</li>
            <li className="hover:text-white transition-all">Video Tutorials</li>
          </ul>
        </div>

        {/* Tools & Projects */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Tools & Projects</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-all">Smart Data Cleaning</li>
            <li className="hover:text-white transition-all">Chart Visualizer</li>
            <li className="hover:text-white transition-all">ML Playground</li>
            <li className="hover:text-white transition-all">Student Projects</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
          <div className="flex items-center space-x-5 mb-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-xl hover:text-white transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-xs text-slate-400">contact@dataverse.io</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-slate-500 mt-10">
        © {new Date().getFullYear()} DataVerse — Built with ❤️ by Tanveer & Team.
      </div>
    </footer>
  );
};

export default Footer;
