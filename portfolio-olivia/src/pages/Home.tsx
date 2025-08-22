import { useEffect, useState } from "react"
import SkillCard from "../components/Skills"
import dataSkills from '../data/skills.json'
import ProjectCard from "../components/ProjectCard"
import dataProjects from '../data/projects.json'
import Form from "../components/Form";

type Skill={
    id: number;
    title: string;
    icon: string;
}
type Project={
    id: number;
    title: string;
    description: string;
    image: string;
}

const Home = ()=>{
    const [skills, SetSkills]= useState<Skill[]>([]);
    useEffect(()=>{
    SetSkills(dataSkills);
    }, []);

        const [projects, SetProjects]= useState<Project[]>([]);
    useEffect(()=>{
        SetProjects(dataProjects);
    }, []);
    return (
        <main>
            <section className="introduction">
                <div id="opacity" className="desktop">
                    <div id="intro">
                        <h2>Olivia Nanquette</h2>
                        <p>Créatrice de sites Internet</p>
                        <p>Je crée des expériences web élégantes, intuitives et
                            performantes avec une attention particulière aux détails.</p>
                        <a className="btn" href="projects">Voir mes projets</a>
                    </div>

                    <div id="introduction-picture">
                        <img src="/images/profile.png" alt="Photo Olivia Nanquette"/>
                    </div>
                </div>
            </section>

            <section className="a-propos desktop">
                <h3>À propos de moi</h3>
                <div className="parcours-competences">
                    <div className="parcours">
                        <h4>Mon parcours</h4>
                        <p>Après plusieurs vies professionnelles riches et variées, j’ai décidé de me lancer un nouveau défi : apprendre le developpement web. Ce n’est pas toujours simple, mais chaque ligne de code est une nouvelle occasion d’apprendre, de chercher, de comprendre… et de créer.</p>
                        <p>Ce portfolio, c’est mon espace d’exploration. J’y partage mes découvertes, mes projets en cours, mes essais (parfois ratés, souvent formateurs) bref, tout ce qui me fait avancer dans cet univers fascinant.</p>
                        <p>Bienvenue dans mon petit coin du web, là où mes idées prennent vie.</p>
                        <a href="about" className="plus">En savoir plus sur mon parcours →</a>
                    </div>

                    <div className="competences">
                            <h4>Mes compétences</h4>

                        <div className="articles-competences">
                            {skills.map((skill)=>(
                                <SkillCard
                                    key={skill.id}
                                    title={skill.title}
                                    icon={skill.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="projets desktop">
                <h3>Mes projets récents</h3>
                <p>Découvrez une sélection de mes travaux récents qui démontrent mes
                    compétences en développement web et design d'interface.</p>

                <div className="articles-projets">
                    {projects.map((project)=>(
                    <ProjectCard
                        key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}/>
                    ))}
                </div>
                <a className="btn" href="projects">Voir tous mes projets</a>
            </section>

            <section className="contact desktop">
                <h3>Contactez-moi</h3>
                <Form/>
            </section>
        </main>
    )
}
export default Home;