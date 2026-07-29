import reactLogo from "../assets/react.svg";

function Header() {
    return (
        <header id="header" className="header">
            <img src={reactLogo} className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;