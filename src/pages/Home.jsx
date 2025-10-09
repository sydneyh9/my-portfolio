//Home.jsx
import {motion} from "framer-motion";
import "./page-css/Home.css";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";


export default function Home() {
    return (
        <div className="home-container">
            <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="about-header"
            >
                <h1 className="home-title">
                    Welcome, I'm <span className="highlight"> Sydney Holland</span>!
                </h1>
            </motion.div>
            <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y:0}}
                transition={{delay: 0.3, duration: 0.6}}
                className="text-card"
                >
                <p className="home-subtitle">
                A software developer and data analyst with experience in project management and a strong foundation in
                Python, JavaScript, SQL and related technologies.
                </p>
            </motion.p>
            <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.6}}
            className="text-card"
            >
                <p className="home-text">
                I make web-based games, explore case studies on Kaggle, and create applications
                top help uers with anything from studying to shopping!
                </p>
            </motion.p>

            <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.9, duration: 0.6}}
            className="text-card"
            >
                <p className="home-text">
                    I'm eager to leverage my experience in leadership and skills 
                    to grow as a developer and analyst.
                </p>
            </motion.p>
            <motion.div
            className="contact-section"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.2, duration: 0.6}}
            >
                <a href="/contact" className="contact-button">
                Contact Me
                </a>
            </motion.div>
            <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.5, duration: 0.6}}
            className="text-card"
            >
            <p className="home-text">
                    Follow or connect with me on GitHub, Kaggle, and LinkedIn!
            </p>
            </motion.p>
            <motion.div
            className="coffee-socials"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition= {{delay: 1.8, duration: 0.6}}
            >
                <div className="steam"></div>
                <div className="cup">
                    <FaGithub
                    className="coffee-icon"
                    onClick={() => window.open("https://github.com/sydneyh9","_blank")}
                    />
                    <FaKaggle
                    className="coffee-icon"
                    onClick={() => window.open("https://www.kaggle.com/sydneyholland","_blank")}
                    />
                    <FaLinkedin
                    className="coffee-icon"
                    onClick={() => window.open("https://www.linkedin.com/in/sydneyholland25","_blank")}
                    />
                </div>
            </motion.div>
        </div>
    );
}