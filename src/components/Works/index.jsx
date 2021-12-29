import { CardProject } from '../CardProject'
import { IoLogoJavascript, IoLogoCss3, IoLogoReact } from 'react-icons/io5'
export const Works = () => {
  const items = {
    js: <IoLogoJavascript/>,
    css: <IoLogoCss3/>,
    react: <IoLogoReact/>
  }

  return (
    <>
      <h2>Portafolio</h2>
      <article>
        <CardProject
          title='Rick y Morty'
          alt='Imagen de rick y morty'
          technolgys={items}
          dictionary={['js', 'css']}
        />
      </article>
    </>
  )
}
