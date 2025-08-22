import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer=()=>{
    return (
    <footer>
        <div>
            <Link to="/"><h2>Olivia Nanquette</h2></Link>
            <p>Créatrice de sites Internet</p>
        </div>

        <div>
            <div id="social">
                <a href="https://github.com/Zitoone/"><GithubIcon /></a>
                <a href="https://linkedin.com/in/tonprofil"><LinkedinIcon /></a>
            </div>
            <p>© 2025 Olivia Nanquette. Tous droits réservés.</p>
        </div>
    </footer>
    );
}

export default Footer;

//Revoir les icones avec React Icons