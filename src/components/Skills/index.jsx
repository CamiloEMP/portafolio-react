import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoTerminal,
  IoLogoSass
} from 'react-icons/io5'
import { iconHTML } from '../../assets/icons/html'
import { iconCSS } from '../../assets/icons/css'

export const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        <IoLogoReact/>
        <IoLogoJavascript/>
        {iconHTML}
        {iconCSS}
        <IoLogoGithub/>
        <IoTerminal/>
        <IoLogoSass/>
      </div>
    </section>
  )
}
