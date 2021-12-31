import { scrollTo } from '../utils/scrollTo'

export const Links = ({ setSidebar, mobile = false }) => {
  const handleClick = (e) => {
    if (mobile) {
      setSidebar(false)
    }
    scrollTo(e)
  }
  return (
    <>
      <a href="#about" onClick={handleClick}>Sobre mí</a>
      <a href="#projects" onClick={handleClick}>Portafolio</a>
      <a href="#skills" onClick={handleClick}>Skills</a>
      <a href="#contact" onClick={handleClick}>Contactame</a>
    </>
  )
}
