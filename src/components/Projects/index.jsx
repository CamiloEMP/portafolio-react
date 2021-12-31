import { CardProject } from '../CardProject'

import './projects.css'
import { IconsLenguages } from '../utils/IconsTech'
import rick from '../../assets/rick.jpg'
import panda from '../../assets/panda.jpg'
import lobo from '../../assets/lobo.jpg'

export const Projects = () => {
  return (
    <section id="projects" className='projects-container'>
      <h2>Portafolio</h2>
      <article className='container-cards-projects'>
        <CardProject
          title='Api Rick y Morty'
          img={rick}
          alt='Imagen de rick y morty'
          technolgys={IconsLenguages}
          dictionary={['js', 'css', 'html']}
          key={1}
        />
        <CardProject
          title='Todo App'
          img={panda}
          alt='Imagen de rick y morty'
          technolgys={IconsLenguages}
          dictionary={['js', 'html', 'css']}
          key={2}
        />
        <CardProject
          title='Api de algo'
          img={lobo}
          alt='Imagen de rick y morty'
          technolgys={IconsLenguages}
          dictionary={['html', 'react', 'css']}
          key={3}
        />
        <CardProject
          title='Api de algo'
          img={lobo}
          alt='Imagen de rick y morty'
          technolgys={IconsLenguages}
          dictionary={['html', 'react', 'css']}
          key={4}
        />
      </article>
    </section>
  )
}
