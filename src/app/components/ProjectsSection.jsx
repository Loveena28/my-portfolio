import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "VidConnect",
    description: "Vid Connect is a real-time video conferencing application built with Angular, Socket.io, and PeerJS, enabling seamless video communication with dynamic participant management and intuitive controls.",
    image: "/images/vid-connect.png",
    git: "https://github.com/Loveena28/VidConnect-Frontend",
    preview: "https://vid-connect-theta.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio",
    description: "My personal portfolio: showcasing my projects and skills.",
    image: "/images/portfolio.png",
    git: "https://github.com/Loveena28/my-portfolio",
    preview: "https://my-portfolio-nine-swart-14.vercel.app/",
  },
  {
    id: 3,
    title: "QuickLit",
    description: "The Book Summary Generator allows users to upload a book cover image, extract the title using Google Cloud Vision API, and generate a detailed summary with AI, which can be saved as a PDF.",
    image: "/images/quicklit.png",
    git: "https://github.com/Loveena28/QuickLit-Frontend",
    preview: "https://quicklit.vercel.app/upload",
  }
  
];
const ProjectsSection = () => {
  return (
    <section className="text-white" id="projects">
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.git}
            previewUrl={project.preview}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
