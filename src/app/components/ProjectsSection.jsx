import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "VidConnect",
    description: "A video calling app",
    image: "/images/vid-connect.png",
    git: "https://github.com/Loveena28/VidConnect-Frontend",
    preview: "https://vid-connect-theta.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio",
    description: "My Personal Porfolio",
    image: "/images/portfolio.png",
    git: "https://github.com/Loveena28/my-portfolio",
    preview: "https://my-portfolio-nine-swart-14.vercel.app/",
  },
  {
    id: 3,
    title: "QuickLit",
    description: "A Book Summarizer",
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
