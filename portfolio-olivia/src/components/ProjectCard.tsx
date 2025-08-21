import {Link} from "react-router-dom"

type ProjectCardProps={
    title: string;
    description: string,
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps>=({title, description, image})=>(
    <article>
        <img src={image} alt={title}/>
            <div>
                <h4>{title}</h4>
                    <p>{description}</p>
                        <div>
                            <ul className="liste-compet">
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <Link to="#" className="plus">Voir le projet →</Link>
                    </div>             
                </article>
)
export default ProjectCard