import { useEffect, useState } from "react"
import SkillCard from "../components/Skills"
import data from '../data/skills.json'

type Skill={
    id: number;
    title: string;
    icon: string;
}

const About = ()=>{
    const [skills, SetSkills]= useState<Skill[]>([]);
        useEffect(()=>{
        SetSkills(data);
    }, []);
    return(
        <main id="page-about">
            <div className="titre">
                <h1>A propos</h1>
            </div>

            <section className="presentation">
                <h2>Présentation</h2>
                <div>
                    <img src="../images/profile.png" alt="Photo Olivia Nanquette" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus rem recusandae, odio beatae autem cumque nam vitae! Ipsam iste quis ad dolore libero esse quo, ab pariatur adipisci fuga?</p>
                </div>
            </section>

            <section className="parcours-competences">
                <div className="parcours">
                    <h2>Mon parcours</h2>
                    <p>Après plusieurs vies professionnelles riches et variées, j’ai décidé de me lancer un nouveau défi : apprendre le developpement web. Ce n’est pas toujours simple, mais chaque ligne de code est une nouvelle occasion d’apprendre, de chercher, de comprendre… et de créer.</p>
                    <p>Ce portfolio, c’est mon espace d’exploration. J’y partage mes découvertes, mes projets en cours, mes essais (parfois ratés, souvent formateurs) bref, tout ce qui me fait avancer dans cet univers fascinant.</p>
                    <p>Bienvenue dans mon petit coin du web, là où mes idées prennent vie.</p>
                </div>
            </section>



        <section>
        <div>
            <h2>Mes compétences</h2>
        </div>  
        <div className="articles-competences">
            {skills.map((skill)=>(
                <SkillCard
                    key={skill.id}
                    title={skill.title}
                    icon={skill.icon}/>
            ))}
        </div>   
    </section>
    </main>
        )
};
export default About;



