import "./component-css/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>{new Date().getFullYear()} Sydney Holland: Portfolio </p>
        </footer>
    );
}