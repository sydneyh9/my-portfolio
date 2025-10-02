import React from "react";
import "./components/ProjectCard.css";

export default function ProjectCard({title, description, image, techStack, demoLink, repoLink}) {
    return (
        <div className="project-card">
            {image && <img src = {"assets/projectCardBlackjack.png"} alt={title} className="project-image" />}
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                {techStack && (
                    <div className="project-tech">
                        {techStack.map((tech, index) => (
                            <span key={index} className="project-tech-item">{tech}</span>
                        ))}
                        </div>
                )}
                <div className="project-links">
                    {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>}
                    {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-button secondary">Source Code</a>}
                </div>
            </div>
        </div>
    );
}