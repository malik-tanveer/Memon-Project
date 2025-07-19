const CallToAction = () => {
  return (
    // Outer container for the entire section, setting a dark background and text color
    <section className="my-24 py-16 bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans">
      <div className="container mx-auto px-4 text-center">
        {/* Section title */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
          Ready to Transform Your Data Journey? <br className="sm:hidden" />
          <span className="text-emerald-300">Start Today!</span>
        </h2>
        {/* Section description */}
        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join thousands of learners and professionals using our platform to shape their data careers, projects, and research. Start your journey today.
        </p>
        {/* Call to action button */}
        <a
          href="/signup"
          className="inline-block px-14 py-6 bg-gradient-to-r from-emerald-600 to-teal-600
                     hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-2xl
                     rounded-full shadow-xl transition-all duration-300 transform
                     hover:scale-105 hover:ring-4 ring-emerald-400 ring-opacity-60
                     focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-75
                     tracking-wide"
        >
          Create Your Free Account &rarr;
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
