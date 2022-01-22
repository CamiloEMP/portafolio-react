import {
  IoSadOutline,
  IoHappyOutline,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoLogoSass,
  IoLogoNodejs,
  IoLogoLinkedin,
  IoLogoInstagram
} from 'react-icons/io5'

import { SiNextdotjs, SiTailwindcss, SiStyledcomponents } from 'react-icons/si'

import { iconHTML } from '../../assets/icons/html'
import { iconCSS } from '../../assets/icons/css'

export const IconsMessageContact = {
  success: <IoHappyOutline/>,
  error: <IoSadOutline/>
}

export const IconsLenguages = {
  JavaScript: <IoLogoJavascript fill="#f7df1a"/>,
  HTML5: iconHTML,
  CSS: iconCSS,
  ReactJS: <IoLogoReact fill='#00d8ff'/>,
  NextJS: <SiNextdotjs fill='#fff'/>,
  NodeJS: <IoLogoNodejs fill='#82c429'/>,
  'StyledComp.': <SiStyledcomponents fill='#fff' />,
  SCSS: <IoLogoSass fill='#c36291'/>,
  Tailwind: <SiTailwindcss fill='#01b7d6'/>
}

export const IconsSocialMedia = (
  <>
    <a href="https://github.com/CamiloEMP" target="_blank" rel="noreferrer">
      <IoLogoGithub className='icon-social-media' />
    </a>
    <a href="https://www.linkedin.com/in/camilo-mora/" target="_blank" rel="noreferrer">
      <IoLogoLinkedin className='icon-social-media' />
    </a>
    <a href="https://www.instagram.com/camilo___e/" target="_blank" rel="noreferrer">
      <IoLogoInstagram className='icon-social-media' />
    </a>
  </>
)
