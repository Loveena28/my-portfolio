import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "QuickLit",
    description: "A Book Summarizer",
    image: "/images/quicklit.png",
    git: "https://github.com/Loveena28/QuickLit-BookSummarizer",
    preview: "https://quick-lit-book-summarizer-ibe3.vercel.app/upload",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "My Personal Porfolio",
    image: "/images/portfolio.png",
    git: "https://github.com/Loveena28/my-portfolio",
    preview: "https://my-portfolio-nine-swart-14.vercel.app/",
  },
];
const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
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
    </>
  );
};

export default ProjectsSection;
