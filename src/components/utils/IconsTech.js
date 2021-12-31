import {
  IoSadOutline,
  IoHappyOutline,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoTerminal,
  IoLogoSass,
  IoLogoNpm,
  IoLogoNodejs,
  IoLogoLinkedin,
  IoLogoInstagram
} from 'react-icons/io5'

import { iconHTML } from '../../assets/icons/html'
import { iconCSS } from '../../assets/icons/css'

export const IconsMessageContact = {
  success: <IoHappyOutline/>,
  error: <IoSadOutline/>
}

export const IconsLenguages = {
  js: <IoLogoJavascript fill="#f7df1a"/>,
  html: iconHTML,
  css: iconCSS,
  react: <IoLogoReact fill='#00d8ff'/>,
  node: <IoLogoNodejs fill='#82c429'/>,
  npm: <IoLogoNpm fill='#c23535'/>,
  git: <IoLogoGithub/>,
  sass: <IoLogoSass fill='#c36291'/>,
  terminal: <IoTerminal fill='#838181'/>
}

export const IconsSocialMedia = (
  <>
    <a href="https://github.com/CamiloEMP" target="_blank" rel="noreferrer">
      <IoLogoGithub className='icon-social-media' />
    </a>
    <a href="https://www.linkedin.com/in/camilo-mora/" target="_blank" rel="noreferrer">
      <IoLogoLinkedin className='icon-social-media' />
    </a>
    <a href="https://www.instagram.com/kmilo_22_/" target="_blank" rel="noreferrer">
      <IoLogoInstagram className='icon-social-media' />
    </a>
  </>
)
