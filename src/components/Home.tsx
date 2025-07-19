import CallToAction from "./Action";
import FaceAuthManagement from "./Face";
import Learn from "./Learn";
import Projects from "./Projects";
import Tools from "./Tools";

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-950 to-slate-900 text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white">


                {/* Main Content Area */}
                <main className="container mx-auto  py-8">
                    {/* 1 */}
                    <section id="hero" className="text-center py-24 lg:py-40 relative overflow-hidden rounded-3xl shadow-3xl bg-gradient-to-br from-purple-900 to-indigo-950 border border-purple-800 animate-fade-in-up">
                        {/* Background elements for visual richness */}
                        {/* Consider replacing with a subtle animated SVG or particle effect for ultimate modernity */}
                        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url("/path/to/abstract-data-mesh.svg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Darker, more pronounced overlay */}

                        <div className="relative z-10 p-8 lg:p-16">
                            {/* Adjusted heading font sizes for smaller text */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Montserrat'] font-extrabold mb-8 leading-tight text-white text-shadow-glow animate-slide-in-left">
                                {/* Adjusted margin below the span */}
                                <span className="text-cyan-400 block mb-2">Data Visualization:</span>
                                Unlock Insights. Master Skills. Transform Your World.
                            </h1>
                            {/* Adjusted paragraph font sizes for smaller text */}
                            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-5xl mx-auto text-slate-100 leading-relaxed font-['Lato'] animate-fade-in-delay-1">
                                Welcome to the ultimate platform where raw data evolves into compelling visual stories. Whether you're a budding developer, a data enthusiast, or an enterprise seeking clarity, we provide the tools, knowledge, and community to empower your data journey from <strong className="text-white font-bold">start to finish</strong>.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8 animate-fade-in-delay-2">
                                {/* Adjusted button text sizes */}
                                <a href="#learn" className="px-12 py-5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-lg rounded-full shadow-3xl transition-all duration-300 transform hover:scale-105 hover:ring-4 ring-teal-400 ring-opacity-70 focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-70 group">
                                    <span className="flex items-center justify-center"><i className="fas fa-graduation-cap mr-3"></i> Start Learning Now</span>
                                </a>
                                <a href="#tools" className="px-12 py-5 border-4 border-cyan-400 text-cyan-300 font-bold text-lg rounded-full shadow-3xl transition-all duration-300 transform hover:scale-105 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-70 group">
                                    <span className="flex items-center justify-center"><i className="fas fa-chart-line mr-3"></i> Visualize Your Data</span>
                                </a>
                            </div>
                        </div>
                    </section>


                    {/* 2. Key Features Overview: Your All-in-One Solution */}
                    <section id="features-overview" className="my-24 px-4 py-16 text-center bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Poppins'] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                            Your Comprehensive Data Ecosystem
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl font-['Lato'] text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed px-4">
                            We've meticulously designed a platform that integrates all facets of data interaction: <strong className="text-white font-semibold">secure access, deep learning, inspiring projects, powerful tools, and intelligent assistance.</strong>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
                            {/* Feature Card 1 */}
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-purple-500 group overflow-hidden">
                                <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> {/* Hover overlay */}
                                <i className="fas fa-lock text-5xl text-purple-400 mb-6 transition-all duration-300 group-hover:text-purple-300 group-hover:scale-110"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white">Advanced Authentication</h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed">Secure your journey with Face Authentication & JWT-powered login/signup.</p>
                            </div>

                            {/* Feature Card 2 */}
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-teal-500 group overflow-hidden">
                                <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-book-open text-5xl text-teal-400 mb-6 transition-all duration-300 group-hover:text-teal-300 group-hover:scale-110"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white">In-Depth Learning</h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed">Master Web Dev, Data Science, AI, and more with structured courses.</p>
                            </div>

                            {/* Feature Card 3 */}
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-orange-500 group overflow-hidden">
                                <div className="absolute inset-0 bg-orange-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-project-diagram text-5xl text-orange-400 mb-6 transition-all duration-300 group-hover:text-orange-300 group-hover:scale-110"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white">Inspiring Projects</h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed">Explore real-world applications from our expert developers.</p>
                            </div>

                            {/* Feature Card 4 */}
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:border-red-500 group overflow-hidden">
                                <div className="absolute inset-0 bg-red-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <i className="fas fa-tools text-5xl text-red-400 mb-6 transition-all duration-300 group-hover:text-red-300 group-hover:scale-110"></i>
                                <h3 className="text-2xl font-bold font-['Montserrat'] mb-3 text-white">Powerful Data Tools</h3>
                                <p className="text-slate-400 text-base font-['Open_Sans'] leading-relaxed">Visualize any data format & get instant AI assistance.</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Learn Section: Your Comprehensive Skill Hub */}
                    <Learn/>

                    {/* 4. Projects Section: Showcase of Innovation */}
                    <Projects/>

                    {/* 5. Tools Section: Your Command Center for Data */}
                    <Tools/>

                    {/* AI Chatbot */}
                    <div className="bg-slate-800 p-10 rounded-xl shadow-lg border border-slate-700 hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-3xl font-bold mb-8 text-purple-300 flex items-center justify-center">
                            <i className="fas fa-comments mr-4 text-4xl"></i> AI-Powered Chat Assistant
                        </h3>
                        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                            Stuck somewhere? Need instant help? Our AI chatbot is here 24/7 to guide you, explain concepts, troubleshoot issues, and recommend resources tailored to your query.
                        </p>
                        <div className="bg-slate-700 p-8 rounded-xl text-center border border-slate-600 shadow-inner">
                            <p className="text-white text-2xl font-bold mb-4">Ask Anything, Anytime</p>
                            <p className="text-slate-400 mb-6 text-lg">Type your question or choose from popular prompts below:</p>
                            <div className="flex flex-wrap gap-3 justify-center mb-6">
                                <span className="bg-slate-600 px-4 py-2 rounded-full text-slate-200 text-sm">How to clean a CSV?</span>
                                <span className="bg-slate-600 px-4 py-2 rounded-full text-slate-200 text-sm">What is a confusion matrix?</span>
                                <span className="bg-slate-600 px-4 py-2 rounded-full text-slate-200 text-sm">Build a bar chart using D3.js</span>
                            </div>
                            <button className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-lg shadow-md transition duration-300 transform hover:scale-105">
                                <i className="fas fa-robot mr-3"></i> Launch Chatbot
                            </button>
                            <p className="text-slate-500 text-sm mt-6">Trained on latest datasets. Context-aware. Developer-friendly.</p>
                        </div>
                        <a href="/tools/chatbot" className="mt-10 inline-block text-purple-400 hover:text-purple-300 font-semibold text-lg transition duration-200">Talk to the Bot &rarr;</a>
                    </div>

                    {/* 6. Face Authentication Section */}
                   <FaceAuthManagement/>


                    {/* 7. Final CTA Section */}
                    <CallToAction/>

                </main>
            </div>
        </>
    )
}

export default Home;