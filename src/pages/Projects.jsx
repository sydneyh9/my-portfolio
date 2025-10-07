//About.jsx
import {motion} from "framer-motion";
import {useState} from "react";
import {FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact, FaDatabase} from "react-icons/fa";
import {SiR, SiTableau} from "react-icons/si";
import projectCardImage from "../assets/Project Card Blackjack.png";
import "./page-css/Projects.css";

export default function Projects() {
    const [activeTab, setActiveTab] = useState("development");
    const webProjects = [
        {
                    title: "Blackjack",
                    description: "An interactive, web-based Blackjack game built with a jazzy casino-inspired theme and user inclusivity in mind.",
                    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub"],
                    source: "https://github.com/sydneyh9/blackjack",
                    demo: "sydneyh9.github.io/Blackjack/",
        },
    ];
    const dataProjects = [
        {
            title: "Grocery Sales Analysis Case Study",
            description: "Analyzed grocery sales data to find trends and optimize inventory",
            techStack: ["SQL", "Excel", "Tableau", "R"],
            source: "https://github.com/sydneyh9/groceryDataAnalysis",
            demo:"",
        },
    ];

    const iconMap = {
        HTML5: <FaHtml5 className="skill-icon html" />,
        CSS3: <FaCss3Alt className="skill-icon css" />,
        JavaScript: <FaJs className="skill-icon js" />,
        GitHub: <FaGithub className="skill-icon github" />,
        React: <FaReact className="skill-icon react" />,
        R: <SiR className="skill-icon r" />,
        Tableau: <SiTableau className="skill-icon tableau" />,
        SQL: <FaDatabase className="skill-icon sql" />,
    };

    const renderProjects = (projects) => 
        projects.map((project, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 40}}
            animate= {{ opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: index * 0.2}}
            className="project-card"
            >
                {project.title === "Blackjack" && (
                    <img
                    src={projectCardImage}
                    alt="Blacjack Project Preview"
                    className="project-image"
                    />
                )}
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="skills-grid">
                    {project.techStack.map((tech, i) => (
                        <div className="skill-item" key={i}>
                            {iconMap[tech]}
                            <span> {tech}</span>
                            </div>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.source} target="_blank" rel="noopener noreferrer">
                        Source Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </div>
            </motion.div>
        ));

        return (
            <div className="projects-container">
                <h1 className="projects-page-title"> Grab a Coffee and Explore My Work!</h1>

                <div className="projects-tab">
                    <button
                    className={activeTab === "development" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("development")}
                    >
                        Web Development
                    </button>
                    <button
                    className={activeTab === "data" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("data")}
                    >
                        Data Analysis
                    </button>
                </div>
                <div className="projects-grid">
                    {activeTab === "development" ? renderProjects(webProjects) : renderProjects(dataProjects)}
                </div>
            </div>
        );
}