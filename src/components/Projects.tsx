interface Project {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  technologies: string;
  linkText: string;
  linkHref: string;
}

// Main Projects component
const Projects = () => {
  // Data for Web Development Projects
  const webProjects: Project[] = [
    {
      title: "E-commerce Intelligence Dashboard",
      description: "A real-time analytics dashboard built with **React, Next.js, and Node.js**, offering deep insights into sales, customer behavior, and inventory.",
      imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Web+Dash", // Placeholder image
      altText: "E-commerce Analytics Dashboard",
      technologies: "React, Next.js, Node.js",
      linkText: "View Case Study",
      linkHref: "/projects/web/ecommerce-dashboard",
    },
    {
      title: "Dynamic Portfolio Creator",
      description: "A personalized portfolio builder leveraging **MongoDB** for flexible data storage and **Tailwind CSS** for stunning, customizable UIs.",
      imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Portfolio", // Placeholder image
      altText: "Interactive Portfolio Builder",
      technologies: "MongoDB, Tailwind CSS",
      linkText: "View Demo",
      linkHref: "/projects/web/portfolio-creator",
    },
    // Add more web projects here if needed
  ];

  // Data for AI/ML & Python Projects
  const aiMlProjects: Project[] = [
    {
      title: "Advanced Sentiment Analysis Engine",
      description: "An NLP-powered tool utilizing **TensorFlow and Keras** to accurately gauge public sentiment from text data, vital for market research.",
      imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Sentiment", // Placeholder image
      altText: "Sentiment Analysis Engine",
      technologies: "TensorFlow, Keras",
      linkText: "Read About It",
      linkHref: "/projects/ai-ml/sentiment-analysis",
    },
    {
      title: "Smart Sales Forecasting Model",
      description: "A robust Machine Learning model using **Scikit-learn and Pandas** for highly accurate future sales predictions based on historical data.",
      imageUrl: "https://placehold.co/112x112/1F2937/D1D5DB?text=Forecasting", // Placeholder image
      altText: "Predictive Sales Forecasting Model",
      technologies: "Scikit-learn, Pandas",
      linkText: "Explore Model",
      linkHref: "/projects/ai-ml/sales-forecasting",
    },
    // Add more AI/ML projects here if needed
  ];

  return (
    // Outer container for the entire section, setting a dark background and text color
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-orange-300 drop-shadow-lg leading-tight">
          Our Vision in Action: <br className="sm:hidden" /> Curated Project Portfolios
        </h2>
        {/* Section description */}
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Witness the power of code and data come alive through impactful, real-world applications. Our two core development pillars showcase innovative solutions built to inspire and solve complex challenges.
        </p>

        {/* Grid for project categories (Web Dev and AI/ML) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Web Development Projects Block */}
          <div className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700
                         hover:shadow-3xl transition-all duration-300 transform
                         hover:-translate-y-4 relative overflow-hidden
                         bg-gradient-to-br from-slate-800 to-slate-700">
            {/* Subtle background pattern/overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <h3 className="text-3xl font-bold mb-8 text-yellow-300 flex items-center justify-center">
              <i className="fas fa-globe mr-4 text-4xl"></i> Web Development Masterpieces
            </h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Explore a diverse range of modern web applications, from interactive dashboards and robust e-commerce solutions to scalable content management systems. Each project demonstrates our commitment to clean code, responsive design, and exceptional user experience.
            </p>
            <div className="space-y-8">
              {webProjects.map((project, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border border-slate-600 hover:bg-slate-600 transition duration-200 group">
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    className="w-28 h-28 object-cover rounded-md flex-shrink-0 border border-slate-500 shadow-md group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/112x112/1F2937/D1D5DB?text=Image+Error`; }} // Fallback image
                  />
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">{project.title}</h4>
                    <p className="text-slate-400 text-md mb-2" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <a href={project.linkHref} className="text-blue-400 hover:text-blue-300 text-md font-medium flex items-center group-hover:text-blue-200 transition-colors duration-200">
                      {project.linkText} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/projects/web-development" className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-75">
                Explore All Web Projects
              </a>
            </div>
          </div>

          {/* AI/ML & Python Projects Block */}
          <div className="bg-slate-800 p-10 rounded-2xl shadow-xl border border-slate-700
                         hover:shadow-3xl transition-all duration-300 transform
                         hover:-translate-y-4 relative overflow-hidden
                         bg-gradient-to-br from-slate-800 to-slate-700">
            {/* Subtle background pattern/overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            <h3 className="text-3xl font-bold mb-8 text-red-300 flex items-center justify-center">
              <i className="fas fa-microchip mr-4 text-4xl"></i> AI/ML & Python Innovations
            </h3>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Dive into intelligent systems, predictive analytics, and automated solutions developed using cutting-edge AI, Machine Learning, and Python frameworks. These projects showcase the transformative power of data science.
            </p>
            <div className="space-y-8">
              {aiMlProjects.map((project, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 border border-slate-600 hover:bg-slate-600 transition duration-200 group">
                  <img
                    src={project.imageUrl}
                    alt={project.altText}
                    className="w-28 h-28 object-cover rounded-md flex-shrink-0 border border-slate-500 shadow-md group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/112x112/1F2937/D1D5DB?text=Image+Error`; }} // Fallback image
                  />
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">{project.title}</h4>
                    <p className="text-slate-400 text-md mb-2" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <a href={project.linkHref} className="text-blue-400 hover:text-blue-300 text-md font-medium flex items-center group-hover:text-blue-200 transition-colors duration-200">
                      {project.linkText} <i className="fas fa-arrow-right ml-2 text-sm"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/projects/ai-ml" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-lg transition duration-300 transform hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75">
                Explore All AI/ML Projects
              </a>
            </div>
          </div>
        </div>

        {/* View All Our Revolutionary Projects button */}
        <div className="text-center mt-24">
          <a
            href="/projects"
            className="px-14 py-6 bg-gradient-to-r from-green-600 to-teal-600
                       hover:from-green-700 hover:to-teal-700 text-white font-bold text-2xl
                       rounded-full shadow-xl transition-all duration-300 transform
                       hover:scale-105 hover:ring-4 ring-green-400 ring-opacity-60
                       focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75
                       tracking-wide"
          >
            View All Our Revolutionary Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
