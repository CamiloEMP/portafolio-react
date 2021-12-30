import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'
import { scrollTo } from '../utils/scrollTo'
import './index.css'

export const MenuMobile = ({ sidebar, setSidebar }) => {
  const handleClick = (e) => {
    setSidebar(false)
    scrollTo(e)
  }
  return (
    <section className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <a href="#about" onClick={handleClick}>Sobre mí</a>
      <a href="#projects" onClick={handleClick}>Portafolio</a>
      <a href="#skills" onClick={handleClick}>Skills</a>
      <a href="#contact" onClick={handleClick}>Contactame</a>
      <section className='container-icons-social-media'>
        <a href=""><IoLogoGithub className='icon-social-media' /></a>
        <a href=""><IoLogoLinkedin className='icon-social-media' /></a>
        <a href=""><IoLogoInstagram className='icon-social-media' /></a>
      </section>
    </section>
  )
}
