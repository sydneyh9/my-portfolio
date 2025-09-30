//About.jsx
import {motion} from "framer-motion";
import {FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaPython, FaDatabase} from "react-icons/fa";
import {SiR, SiTableau} from "react-icons/si";
import "./page-css/About.css";

export default function About() {
    return (
        <div className="about-container">
            <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="about-header"
            >
                <img
                src="/Headshot-Sydney.jpg"
                alt="Sydney Holland"
                className="w-32 h-32 rounded-full mx-auto shadow-lg mb-6 object-cover"
                />
                <h1 className="about-title">
                    Welcome, I'm <span className="highlight"> Sydney Holland</span>
                </h1>
                <p className="about-subtitle">
                A software developer and data analyst with experience in project management and a strong foundation in
                Python, JavaScript, SQL and related technologies.
                </p>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.3}}
            className="skills-section"
            >
                <p>
                </p>
            </motion.div>
            <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="skills-section"
            >
                <h2 className="skills-title">
                    Skills & Tools
                </h2>
                <div className="skills-grid">
                    <div className="skills-item">
                        <FaHtml5 className="skill-icon html" />
                        <span> HTML5</span>
                    </div>
                    <div className="skills-item">
                        <FaCss3Alt className="skill-icon css" />
                        <span> CSS3</span>
                    </div>
                    <div className="skills-item">
                        <FaJs className="skill-icon js" />
                        <span> JavaScript</span>
                    </div>
                    <div className="skills-item">
                        <FaReact className="skill-icon react" />
                        <span> React</span>
                    </div>
                    <div className="skills-item">
                        <FaGithub className="skill-icon github" />
                        <span> GitHub</span>
                    </div>
                    <div className="skills-item">
                        <FaDatabase className="skill-icon sql" />
                        <span> SQL</span>
                    </div>
                    <div className="skills-item">
                        <FaPython className="skill-icon python" />
                        <span> Python </span>
                    </div>
                    <div className="skills-item">
                        <SiR className="skill-icon r" />
                        <span> R</span>
                    </div>
                    <div className="skills-item">
                        <SiTableau className="skill-icon tableau" />
                        <span> Tableau</span>
                    </div>
                </div>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.9}}
            className="skill-section"
            >
                <p className="contact-section">
                    I'm eager to leverage my experience in leadership and skills 
                    to grow as a developer and analyst.
                </p>
                <a
                href="/contact"
                className="contact-button"
                >
                    Contact Me
                </a>
            </motion.div>
        </div>
    );
}