import { useState } from "react";
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
    }


};

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const handleEnter = (key: string) => {
        setActiveMenu(key);
        setIsHovering(true);
    };

    const handleLeave = () => {
        setIsHovering(false);
        setTimeout(() => {
            if (!isHovering) {
                setActiveMenu(null);
                setActiveSubmenu(null);
            }
        }, 200);
    };
    return (
        <>
            <div className="relative z-100 pb-16 ">
                {/* Modern Blur Overlay */}
                <AnimatePresence>
                    {activeMenu && (
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => {
                                setActiveMenu(null);
                                setActiveSubmenu(null);
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Navbar */}
                <nav className=" bg-opacity-50 fixed top-0 left-0 w-full bg-gray-950 shadow-lg px-6 py-4 z-50">
                    <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                        {/* Logo */}
                        <Link to="/" className="text-3xl font-extrabold text-teal-400">
                            Datavis
                        </Link>

                        {/* Center Menu */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-white">
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
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={handleLeave}
                                        >
                                            <ul className="space-y-2 relative">
                                                {Object.entries(items).map(([item, subItems]) => (
                                                    <li
                                                        key={item}
                                                        className="relative group "
                                                        onMouseEnter={() => setActiveSubmenu(item)}
                                                    >
                                                        <Link
                                                            to={`/${item.toLowerCase()}`}
                                                            className="block hover:text-teal-400"
                                                        >
                                                            {item}
                                                        </Link>

                                                        {/* Side Dropdown */}
                                                        {subItems.length > 0 && activeSubmenu === item && (
                                                            <motion.ul
                                                                className="absolute top-0 left-full ml-2 bg-gray-900 border border-gray-700 shadow-lg rounded-md px-4 py-2 w-40"
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -10 }}
                                                                onMouseEnter={() => setIsHovering(true)}
                                                                onMouseLeave={handleLeave}
                                                            >
                                                                {subItems.map((sub) => (
                                                                    <li key={sub}>
                                                                        <Link
                                                                            to={`/${sub.toLowerCase()}`}
                                                                            className="block text-sm text-gray-300 hover:text-teal-400"
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
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
