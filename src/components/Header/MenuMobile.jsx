import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5'
import './index.css'

export const MenuMobile = ({ sidebar }) => {
  return (
    <section className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <a href="">Sobre mí</a>
      <a href="">Portafolio</a>
      <a href="">Tecnologías</a>
      <a href="">Contactame</a>
      <section className='container-icons-social-media'>
        <a href=""><IoLogoGithub className='icon-social-media' /></a>
        <a href=""><IoLogoLinkedin className='icon-social-media' /></a>
        <a href=""><IoLogoInstagram className='icon-social-media' /></a>
      </section>
    </section>
  )
}
