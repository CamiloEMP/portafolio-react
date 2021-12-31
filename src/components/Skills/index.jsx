import './skills.css'
import { IconsLenguages } from '../utils/IconsTech'

export const Skills = () => {
  const iconsSkills = Object.values(IconsLenguages).map((icon, index) => (
    <div key={index}>
      {icon}
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
