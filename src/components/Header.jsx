export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <span className="coffee-cup"></span>
                <div className="steam">
                    <svg viewBox="0 0 50 100" className="steam-svg">
                        <path d="M25 80 C20 60, 30 40, 25 20" />
                    </svg>
                    <svg viewBox="0 0 50 100" className="steam-svg">
                        <path d="M35 80 C30 60, 40 40, 35 20" />
                    </svg>
                </div>
            </div>
            <h1 className="header-title"> Welcome to My Portfolio</h1>
        </header>
    );
}