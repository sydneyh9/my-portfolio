//About.jsx
import {motion} from "framer-motion";
import {FaHtml5, FaCss3Alt, FaJs, FaGithub} from "react-icons/fa";
import "./page-css/Projects.css";

export default function Projects() {
    return (
        <div className="projects-container">
            <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="projects-header"
            >
                <h1 className="project-title">
                    Blackjack
                </h1>
                <p className="project-subtitle">
                An interactive, web-based Blackjack game built with a jazzy casino-inspired theme and user inclusivity in mind.
                </p>
                <h2 className="skill-used">
                    Languages/Technologies Used:
                </h2>
                <div className="skills-grid">
                <div className="skill-item">
                    <FaHtml5 className="skill-icon html"/>
                    <span>HTML5</span>
                </div>
                <div className="skill-item">
                    <FaCss3Alt className="skill-icon css" />
                    <span> CSS3</span>
                </div>
                <div className="skill-item">
                    <FaJs className="skill-icon js" />
                    <span>JavaScript</span>
                </div>
                <div className="skill-item">
                    <FaGithub className="skill-icon github" />
                    <span>GitHub</span>
                </div>
                </div>
            </motion.div>
        </div>
    );
}