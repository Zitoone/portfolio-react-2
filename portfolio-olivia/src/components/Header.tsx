import { Link, NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="desktop">
        <div>
            <Link to="/"><h1>Olivia Nanquette</h1></Link>
        </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
                    <li><NavLink to="/about">A propos</NavLink></li>
                    <li><NavLink to="/projects">Projets</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
    </header>
    );
}
export default Header;