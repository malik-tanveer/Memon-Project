import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = {
  Learn: {
    "Web Development": [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "React", "Next.js", "Node.js", "Express.js",
      "MongoDB", "SQL", "Tailwind CSS", "Bootstrap",
      "Git", "REST API", "Firebase"
    ],
    "Data Science": [
      "Python", "R", "SQL", "Pandas", "NumPy",
      "Jupyter Notebook", "Matplotlib", "Seaborn",
      "Scikit-learn", "TensorFlow", "Data Cleaning",
      "Exploratory Data Analysis (EDA)", "Statistics"
    ],
    "Machine Learning": [
      "Python", "Scikit-learn", "TensorFlow", "Keras",
      "XGBoost", "LightGBM", "Pandas", "NumPy",
      "Matplotlib", "Feature Engineering", "Model Evaluation",
      "Supervised Learning", "Unsupervised Learning"
    ],
    "AI": [
      "Python", "TensorFlow", "PyTorch", "OpenCV",
      "Natural Language Processing (NLP)", "Speech Recognition",
      "Deep Learning", "Computer Vision", "LLMs", "Prompt Engineering"
    ],
    "Data Engineering": [
      "Python", "SQL", "Apache Spark", "Apache Kafka",
      "Airflow", "ETL Pipelines", "AWS", "GCP",
      "BigQuery", "Snowflake", "Docker", "Data Warehousing"
    ],
    "Data Analysis": [
      "Python", "R", "Excel", "SQL", "Pandas",
      "Power BI", "Tableau", "Jupyter Notebook", "EDA",
      "Descriptive Statistics", "Data Wrangling"
    ],
    "Data Visualization": [
      "Tableau", "Power BI", "Matplotlib", "Seaborn",
      "Plotly", "D3.js", "Excel Charts", "Looker",
      "Dash", "ggplot2"
    ],
    "Data Cleaning": [
      "Python", "Pandas", "NumPy", "OpenRefine",
      "Data Imputation", "Handling Missing Values",
      "Outlier Detection", "Data Formatting", "Regular Expressions"
    ],
    "Data Preprocessing": [
      "Python", "Scikit-learn", "StandardScaler", "LabelEncoder",
      "OneHotEncoder", "Missing Value Handling", "Feature Scaling",
      "Feature Selection", "Imputation"
    ],
    "Data Modeling": [
      "ER Diagrams", "Normalization", "MongoDB Schema Design",
      "SQL Schema Design", "Data Types", "Primary/Foreign Keys",
      "NoSQL vs SQL"
    ],
    "Data Mining": [
      "Python", "R", "Clustering", "Association Rules",
      "Pattern Recognition", "Decision Trees", "Apriori Algorithm",
      "Weka", "Text Mining", "Web Scraping"
    ]
  },
  Projects: {
    "Tanveer": [],
    "Maroof": []
  },
  Tools: {
    "Face Authentication": [],
    "Chatbot AI": [],
    "Data Visualization": [],
    "Data Cleaning": [],
    "Data Engineering": [],
    "Data Analysis": [],
  },
  Explore: {
    "Home": [],
    "About": [],
    "Help": []
  },
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverRef = useRef(false);

  const handleEnter = (key: string) => {
    setActiveMenu(key);
    hoverRef.current = true;
  };

  const handleLeave = () => {
    hoverRef.current = false;
    setTimeout(() => {
      if (!hoverRef.current) {
        setActiveMenu(null);
        setActiveSubmenu(null);
      }
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  return (
    <>
      <div className="relative z-[100] pb-16">
        {/* Overlay */}
        <AnimatePresence>
          {(activeMenu || isMobileMenuOpen) && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-gray-950 px-6 py-4 z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between relative">
            {/* Logo */}
            <Link to="/" className="text-3xl font-extrabold text-teal-400" onClick={closeMobileMenu}>
              <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide hover:text-blue-400 transition-all duration-300">
                CodePilot
              </h1>
              <p className="text-xs text-gray-400">Your AI Coding Companion</p>
            </Link>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-white">
              {Object.entries(menuItems).map(([key, items]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleEnter(key)}
                  onMouseLeave={handleLeave}
                >
                  <button className="text-lg font-bold hover:text-teal-400 transition">
                    {key}
                  </button>

                  {/* Main Dropdown */}
                  {activeMenu === key && (
                    <motion.div
                      className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 shadow-2xl rounded-xl px-6 py-4 min-w-[220px] border border-gray-700"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => (hoverRef.current = true)}
                      onMouseLeave={handleLeave}
                    >
                      <ul className="space-y-2">
                        {Object.entries(items).map(([item, subItems]) => (
                          <li
                            key={item}
                            className="relative group"
                            onMouseEnter={() => setActiveSubmenu(item)}
                          >
                            <Link
                              to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                              className="block hover:text-teal-400"
                              onClick={closeMobileMenu}
                            >
                              {item}
                            </Link>

                            {/* Side Dropdown */}
                            {subItems.length > 0 &&
                              activeSubmenu === item && (
                                <motion.ul
                                  className="absolute top-0 left-full ml-2 bg-gray-900 border border-gray-700 shadow-lg rounded-md px-4 py-2 w-40"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  onMouseEnter={() => (hoverRef.current = true)}
                                  onMouseLeave={handleLeave}
                                >
                                  {subItems.map((sub) => (
                                    <li key={sub}>
                                      <Link
                                        to={`/${sub.toLowerCase().replace(/\s/g, '-')}`}
                                        className="block text-sm text-gray-300 hover:text-teal-400"
                                        onClick={closeMobileMenu}
                                      >
                                        {sub}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu (Animated from right) */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg p-6 md:hidden overflow-y-auto"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 20, stiffness: 150 }}
                >
                  <div className="flex justify-end mb-6">
                    <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <ul className="space-y-4">
                    {Object.entries(menuItems).map(([key, items]) => (
                      <li key={key}>
                        <button
                          className="w-full text-left text-xl font-bold text-white hover:text-teal-400 transition"
                          onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                        >
                          {key}
                        </button>
                        <AnimatePresence>
                          {activeMenu === key && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-2 border-l border-gray-700 pl-4"
                            >
                              {Object.entries(items).map(([item, subItems]) => (
                                <li key={item}>
                                  <button
                                    className="w-full text-left text-lg text-gray-300 hover:text-teal-400 transition"
                                    onClick={() => setActiveSubmenu(activeSubmenu === item ? null : item)}
                                  >
                                    {item}
                                  </button>
                                  <AnimatePresence>
                                    {subItems.length > 0 && activeSubmenu === item && (
                                      <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="ml-4 mt-2 space-y-1 border-l border-gray-800 pl-4"
                                      >
                                        {subItems.map((sub) => (
                                          <li key={sub}>
                                            <Link
                                              to={`/${sub.toLowerCase().replace(/\s/g, '-')}`}
                                              className="block text-base text-gray-400 hover:text-teal-400"
                                              onClick={closeMobileMenu}
                                            >
                                              {sub}
                                            </Link>
                                          </li>
                                        ))}
                                      </motion.ul>
                                    )}
                                  </AnimatePresence>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;