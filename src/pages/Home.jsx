//Home.jsx
import {motion} from "framer-motion";
import "./page-css/Home.css";

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
                    Welcome, I'm <span className="highlight"> Sydney Holland</span>
                </h1>
                <p className="home-subtitle">
                A software developer and data analyst with experience in project management and a strong foundation in
                Python, JavaScript, SQL and related technologies.
                </p>
            </motion.div>
            <motion.div
            initial={{opacity: 0, y: 40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="home-section"
            >
            <p1>
                I make web-based games, explore case studies on Kaggle, and create applications to help users with anything from studying to shopping!
            </p1>
            </motion.div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.9}}
            className="home-section"
            >
                <p2>
                    I'm eager to leverage my experience in leadership and skills 
                    to grow as a developer and analyst.
                </p2>
                <p3>
                    Follow or connect with me on GitHub, Kaggle, and LinkedIn!
                </p3>
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