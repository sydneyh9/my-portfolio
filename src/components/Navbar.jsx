import {Link, useLocation} from "react-router-dom";
import "./component-css/Navbar.css";

export default function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            > Home </Link>
            <Link to="/about" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            > About </Link>
            <Link to="/projects" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            > Projects </Link>
            <Link to="/skills" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            > Skills </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            > Contact </Link>
        </nav>
    );
}