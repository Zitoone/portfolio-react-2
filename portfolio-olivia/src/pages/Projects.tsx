import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from '../data/projects.json';

type Project={
    id: number;
    title: string;
    description: string;
    image: string;
}

const Projects = ()=>{
    const [projects, SetProjects]= useState<Project[]>([]);

    useEffect(()=>{
        SetProjects(data);
    }, []);
    return(
        <main id="page-projets">
        <div className="titre">
            <h1>Mes projets</h1>
        </div>

        <section>
            <p>Voici une sélection des travaux menés durant ma formation, illustrant mes compétences techniques et ma progression.</p>

            <div className="articles-projets">
                {projects.map((project)=>(
                <ProjectCard
                    key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}/>
                ))}
            </div>
        </section>
        </main>
    )
    }

export default Projects;