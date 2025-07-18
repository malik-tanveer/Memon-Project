import React from "react";

interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  click: string;
}

const projects: ProjectItem[] =  [
    {
      title: "SkyMart",
      description: "SkyMart is an e-commerce website built with React, Tailwind CSS, and Bootstrap. Users can browse products, add them to their cart, and save favorites.",
      imageUrl: "/images/skymart.png",
      altText: "E-Commerce Platform",
      click: "https://skytechmart.netlify.app/"
    },
    {
      title: "Apartment Management System",
      description: "A web-based apartment management system using React, created during internship. My first real-world full UI project.",
      imageUrl: "/images/apartment.jpg",
      altText: "Apartment Management System",
      click: "https://website-apartment-project.netlify.app/"
    },
    {
      title: "Skytech Company Website",
      description: "Responsive site for Skytech showcasing their services.",
      imageUrl: "/images/skytech-site.png",
      altText: "Skytech Company Website",
      click: "/projects/skytech"
    },
    {
      title: "Bootpress AI Platform",
      description: "Bootpress is a Web app built using React.js, Tailwind CSS, and Bootstrap, with Firebase Authentication. Soon, it will integrate an AI system allowing users to interact with AI-generated content directly within the app.",
      imageUrl: "/images/AI.jpg",
      altText: "AI Web Application",
      click: "https://bootpress-ai.vercel.app/"
    },
    {
      title: "LMS System",
      description: "Full LMS using React, Node.js, MongoDB, and JWT.",
      imageUrl: "/images/lms.png",
      altText: "Full LMS",
      click: "/projects/lms"
    },
    {
      title: "GNews Blog App",
      description: "Modern blog interface using React + Axios + GNews API. Fetches and displays latest headlines with responsive UI.",
      imageUrl: "/images/GNews.png",
      altText: "GNews Blog",
      click: "https://blog-app-100-project.vercel.app/"
    },
    {
      title: "Data Converter Table",
      description: "A React + Firestore form app where users fill a form and see it reflected live in a table.",
      imageUrl: "/images/D_Convertpng.png",
      altText: "Form to Table App",
      click: "https://firestore-crud-ts.web.app/"
    },
    {
      title: "Mini LMS (Learning Platform)",
      description: "A simple LMS to list YouTube courses. Learners can explore and access resources easily. Built with React.",
      imageUrl: "/images/LMS.png",
      altText: "Mini LMS",
      click: "https://protfolio-personal.vercel.app/"
    },
    {
      title: "Blog App",
      description: "Blog UI with dynamic routing, API data, and filtering.",
      imageUrl: "/images/blog.png",
      altText: "Blog App",
      click: "/projects/blog"
    },
    { title: "Project 10", description: "", imageUrl: "", altText: "", click: "" },
    { title: "Project 11", description: "", imageUrl: "", altText: "", click: "" },
    { title: "Project 12", description: "", imageUrl: "", altText: "", click: "" }
  ];

const TanveerProjects = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 p-4 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="py-16 text-center mb-10">
    
        <h1 className="text-3xl font-bold mb-2">Tanveer's Projects</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A showcase of my best projects in AI, Web Development, and Learning.
        </p>
        <div className="mt-2 text-sm uppercase text-blue-600 font-semibold tracking-widest">
          Code. Learn. Build.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            {project.imageUrl ? (
              <a
                href={project.click}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.altText}
                  className="w-full h-48 object-cover rounded-xl mb-3 hover:opacity-90 transition-opacity duration-300"
                />
              </a>
            ) : (
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-xl mb-3" />
            )}
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              {project.title || "Coming Soon..."}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {project.description ||
                "This project is under development or not added yet."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TanveerProjects;
