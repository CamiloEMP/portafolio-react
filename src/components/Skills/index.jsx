import './skills.css'
import { IconsLenguages } from '../utils/IconsTech'
export const Skills = () => {
  const iconsSkills = Object.entries(IconsLenguages).map((skill, index) => (
    <div className='container-skills-icons' key={index}>
      {skill[1]}
      <span>{skill[0]}</span>
    </div>
  ))

  return (
    <section id="skills" className='section-skills'>
      <h2>Skills</h2>
      <div className='container-skills'>
        {iconsSkills}
      </div>
    </section>
  )
}
