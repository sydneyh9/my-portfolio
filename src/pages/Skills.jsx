import {FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaPython, FaDatabase} from "react-icons/fa";
import {SiR, SiTableau} from "react-icons/si";
import {motion} from "framer-motion";
import "./page-css/Skills.css";

export default function Skills() {
    return (
        <div className="skills-container">
            <h1 className="skills-title"> Languages & Tools</h1>
            <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            >
            <section className="skills-section">
                <h2 className="skills-category">Front-End Development</h2>
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
                        <FaPython className="skill-icon python" />
                        <span>Python</span>
                    </div>
                <div className="skill-item">
                    <FaReact className="skill-icon react" />
                    <span>React</span>
                </div>
                <div className="skill-item">
                    <FaGithub className="skill-icon github" />
                    <span>GitHub</span>
                </div>
                </div>
            </section> 
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.3}}
            >
            <section className="skills-section">
                <h2 className="skills-category">Data Tools</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <FaDatabase className="skill-icon sql" />
                        <span>SQL</span>
                    </div>
                    <div className="skill-item">
                        <SiR className="skill-icon r" />
                        <span>R</span>
                    </div>
                    <div className="skill-item">
                        <SiTableau className="skill-icon tableau" />
                        <span>Tableau</span>
                    </div>
                </div>
            </section>
            </motion.div>
        </div>
    );
}