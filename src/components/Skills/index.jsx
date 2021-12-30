import './skills.css'

import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoTerminal,
  IoLogoSass,
  IoLogoNpm
} from 'react-icons/io5'
import { iconHTML } from '../../assets/icons/html'
import { iconCSS } from '../../assets/icons/css'

export const Skills = () => {
  return (
    <section id="skills" className='section-skills'>
      <h2>Skills</h2>
      <div className='container-skills'>
        <IoLogoReact fill='#00d8ff'/>
        <IoLogoJavascript fill="#f7df1e"/>
        {iconHTML}
        {iconCSS}
        <IoLogoGithub/>
        <IoTerminal fill='#838181'/>
        <IoLogoSass fill='#c36291'/>
        <IoLogoNpm fill='#c23535' />
      </div>
    </section>
  )
}
