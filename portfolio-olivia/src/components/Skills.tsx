type SkillsProps={
    title: string;
    icon: string;
}

const SkillCard: React.FC<SkillsProps>=({title, icon})=>(
    <article>
        <img src={icon} alt={title}/>
        <h3>{title}</h3>
    </article>

)
export default SkillCard
