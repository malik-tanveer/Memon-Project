import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { HeartCrack } from "lucide-react";
import "aos/dist/aos.css";

const NotFound = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sentence = "This page could not be found.";
  const message =
    "It seems the page you are looking for does not exist or has been moved.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div
        data-aos="fade-up"
        className="max-w-xl w-full bg-gray-800/90 border border-gray-700 shadow-2xl backdrop-blur-xl rounded-3xl p-10 text-center transition-all duration-300 hover:scale-[1.02]"
      >
        <div data-aos="zoom-in" className="flex justify-center mb-5">
          <HeartCrack className="w-14 h-14 text-red-500 animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-6">
          {sentence.split(" ").map((word, index) => (
            <span
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="inline-block mx-1"
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {message.split(" ").map((word, index) => (
            <span
              key={index}
              data-aos="fade-in"
              data-aos-delay={index * 50}
              className="inline-block mx-[2px]"
            >
              {word}
            </span>
          ))}
        </p>

        <Link
          to="/"
          data-aos="zoom-in"
          className="inline-block mt-2 px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
