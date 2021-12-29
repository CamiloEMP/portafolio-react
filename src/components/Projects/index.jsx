import { CardProject } from '../CardProject'

import './projects.css'
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5'
import { iconHTML } from '../../assets/icons/html'
import { iconCSS } from '../../assets/icons/css'
import rick from '../../assets/rick.jpg'
import panda from '../../assets/panda.jpg'
import lobo from '../../assets/lobo.jpg'

export const Projects = () => {
  const icons = {
    js: <IoLogoJavascript fill="#f7df1e"/>,
    html: iconHTML,
    css: iconCSS,
    react: <IoLogoReact fill='#00d8ff' />
  }
  return (
    <section className='projects-container'>
      <h2>Portafolio</h2>
      <article className='container-cards-projects'>
        <CardProject
          title='Api Rick y Morty'
          img={rick}
          alt='Imagen de rick y morty'
          technolgys={icons}
          dictionary={['js', 'css', 'html']}
        />
        <CardProject
          title='Todo App'
          img={panda}
          alt='Imagen de rick y morty'
          technolgys={icons}
          dictionary={['js', 'html', 'css']}
        />
        <CardProject
          title='Api de algo'
          img={lobo}
          alt='Imagen de rick y morty'
          technolgys={icons}
          dictionary={['html', 'react', 'css']}
        />
      </article>
    </section>
  )
}
