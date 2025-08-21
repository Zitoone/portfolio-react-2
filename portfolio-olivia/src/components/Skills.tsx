type SkillsProps={
    title: string;
    icon: string;
}

const SkillCard: React.FC<SkillsProps>=({title, icon})=>(
    <article>
        <img src={icon} alt={title}/>
        <h5>{title}</h5>
    </article>

)
export default SkillCard
