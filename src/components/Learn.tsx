interface LearningCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

// Main Learn component
const Learn = () => {
  // Data for the learning categories
  const learningCategories: LearningCategory[] = [
    { title: "Web Development", icon: "fas fa-code", color: "text-blue-400", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Git", "REST API"] },
    { title: "Data Science", icon: "fas fa-chart-bar", color: "text-purple-400", skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "EDA", "Statistics"] },
    { title: "Machine Learning", icon: "fas fa-brain", color: "text-pink-400", skills: ["Python", "Scikit-learn", "TensorFlow", "Keras", "XGBoost", "LightGBM", "Feature Engineering", "Model Evaluation", "Supervised/Unsupervised"] },
    { title: "Artificial Intelligence (AI)", icon: "fas fa-robot", color: "text-red-400", skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Speech Recognition", "Deep Learning", "Computer Vision", "LLMs", "Prompt Engineering"] },
    { title: "Data Engineering", icon: "fas fa-database", color: "text-green-400", skills: ["Python", "SQL", "Apache Spark", "Apache Kafka", "Airflow", "ETL Pipelines", "AWS", "GCP", "BigQuery", "Docker", "Data Warehousing"] },
    { title: "Data Analysis", icon: "fas fa-search-dollar", color: "text-indigo-400", skills: ["Python", "R", "Excel", "SQL", "Pandas", "Power BI", "Tableau", "Jupyter Notebook", "Descriptive Statistics", "Data Wrangling"] },
    { title: "Data Visualization", icon: "fas fa-palette", color: "text-orange-400", skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js", "Excel Charts", "Looker", "Dash", "ggplot2"] },
    { title: "Data Cleaning", icon: "fas fa-broom", color: "text-cyan-400", skills: ["Python", "Pandas", "NumPy", "OpenRefine", "Data Imputation", "Handling Missing Values", "Outlier Detection", "Data Formatting"] },
    { title: "Data Preprocessing", icon: "fas fa-cogs", color: "text-lime-400", skills: ["Python", "Scikit-learn", "StandardScaler", "LabelEncoder", "OneHotEncoder", "Feature Scaling", "Feature Selection", "Imputation"] },
    { title: "Data Modeling", icon: "fas fa-project-diagram", color: "text-emerald-400", skills: ["ER Diagrams", "Normalization", "MongoDB Schema Design", "SQL Schema Design", "Data Types", "Primary/Foreign Keys", "NoSQL vs SQL"] },
    { title: "Data Mining", icon: "fas fa-gem", color: "text-rose-400", skills: ["Python", "R", "Clustering", "Association Rules", "Pattern Recognition", "Decision Trees", "Weka", "Text Mining", "Web Scraping"] },
  ];

  // Helper function to get the description based on the title
  const getDescription = (title: string): string => {
    switch (title) {
      case "Web Development": return "Build dynamic, responsive web applications and robust backends from the ground up.";
      case "Data Science": return "Uncover deep insights, make data-driven predictions, and solve complex problems.";
      case "Machine Learning": return "Develop intelligent systems that learn, adapt, and make informed decisions from data.";
      case "Artificial Intelligence (AI)": return "Explore cutting-edge AI concepts, from natural language processing to computer vision.";
      case "Data Engineering": return "Design, build, and maintain scalable data pipelines and infrastructures.";
      case "Data Analysis": return "Interpret and present data effectively to support critical business and research decisions.";
      case "Data Visualization": return "Master the art of transforming raw numbers into compelling and intuitive visual stories.";
      case "Data Cleaning": return "Learn techniques to meticulously prepare and refine raw data for accuracy and reliability.";
      case "Data Preprocessing": return "Equip your data for optimal performance in machine learning models through advanced preparation.";
      case "Data Modeling": return "Design efficient, scalable database schemas for both relational and non-relational data.";
      case "Data Mining": return "Extract valuable patterns, insights, and knowledge from large datasets to drive strategic initiatives.";
      default: return "";
    }
  };

  return (
    // Outer container for the entire section, setting a dark background and text color
    <section id="learn" className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-slate-200 font-sans py-16">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-teal-300 drop-shadow-lg leading-tight">
          Master the Future: <br className="sm:hidden" /> Deep-Dive Learning Paths
        </h2>
        {/* Section description */}
        <p className="text-xl text-center mb-16 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Whether you're starting from scratch or looking to specialize, our comprehensive learning modules cover the entire spectrum of modern data and development skills. Each path is designed to take you from foundational concepts to advanced mastery.
        </p>

        {/* Grid for individual learning category cards */}
        {/* Adjusted grid to display 2 columns on medium screens and up (md:grid-cols-2, lg:grid-cols-2, xl:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {learningCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700
                         hover:shadow-3xl transition-all duration-300 transform
                         hover:-translate-y-4 relative overflow-hidden group
                         hover:border-teal-400
                         bg-gradient-to-br from-slate-800 to-slate-700" // Added gradient to cards
            >
              {/* Subtle background pattern/overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Color strip at the top of the card */}
              <div className={`absolute top-0 left-0 w-full h-2 ${category.color.replace('text-', 'bg-')} rounded-t-2xl`}></div>

              {/* Icon for the category */}
              <i className={`${category.icon} text-6xl ${category.color} mb-6 transition-transform duration-300 group-hover:scale-115`}></i>

              {/* Category title */}
              <h3 className="text-3xl font-bold mb-4 text-white leading-snug">{category.title}</h3>

              {/* Category description */}
              <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                {getDescription(category.title)}
              </p>

              {/* Key Skills heading */}
              <h4 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">Key Skills:</h4>

              {/* List of key skills */}
              <ul className="list-none text-slate-400 text-base grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center">
                    {/* Small rounded bullet point */}
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-500 mr-2 flex-shrink-0 animate-pulse"></span> {skill}
                  </li>
                ))}
              </ul>

              {/* Call to action button */}
              <a
                href={`/learn/${category.title.toLowerCase().replace(/\s/g, '-')}`}
                className="mt-10 inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700
                           text-white font-bold text-lg rounded-full shadow-lg transition
                           duration-300 transform hover:scale-105
                           focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75
                           group-hover:bg-blue-500" // Button color change on card hover
              >
                Start Learning {category.title} &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Explore All Learning Paths button */}
        <div className="text-center mt-24">
          <a
            href="/learn"
            className="px-14 py-6 bg-gradient-to-r from-purple-600 to-indigo-600
                       hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-2xl
                       rounded-full shadow-xl transition-all duration-300 transform
                       hover:scale-105 hover:ring-4 ring-purple-400 ring-opacity-60
                       focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75
                       tracking-wide" // Added tracking for wider text
          >
            Explore All {learningCategories.length}+ Learning Paths
          </a>
        </div>
      </div>
    </section>
  );
};

export default Learn;
