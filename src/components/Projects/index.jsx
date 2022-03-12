import { CardProject } from '../CardProject'
import './projects.css'

export const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>Portafolio</h2>
      <article className="container-cards-projects">
        <CardProject
          title="Frikie marvel"
          img="https://i.imgur.com/uiXGkeV.png"
          alt="Web Frikie Marvel by CamiloEMP"
          dictionary={['ReactJS', 'ChakraUI']}
          url='https://friki-marvel.vercel.app/'
        />
        <CardProject
          title="Busco Países"
          img="https://i.imgur.com/Ko9pKyL.png"
          alt="Web Busco Países CamiloEMP"
          dictionary={['Tailwind', 'ReactJS', 'JavaScript', 'HTML5']}
          url='https://busco-paises-camiloemp.vercel.app/'
        />
        <CardProject
          title="Rick and Morty"
          img="https://i.imgur.com/EbL8U1l.png"
          alt="Web Rick and Morty CamiloEMP"
          dictionary={[
            'ReactJS',
            'StyledComp.',
            'NextJS'
          ]}
          url='https://rick-morty-api-chi.vercel.app/'
        />
        <CardProject
          title="Busco Repositorio"
          img="https://i.imgur.com/RQ8Viyd.png"
          alt="Imagen de rick y morty"
          dictionary={['JavaScript', 'HTML5', 'CSS']}
          url='https://busco-repo-camiloemp.vercel.app/'
        />
        <CardProject
          title="Todo App"
          img="https://i.imgur.com/UMr9fGg.png"
          alt="Imagen de rick y morty"
          dictionary={['JavaScript', 'CSS', 'HTML5', 'ReactJS']}
          url='https://camiloemp.github.io/TODOs-App-React/'
        />
        <CardProject
          title="Landing page Lego"
          img="https://i.imgur.com/04nNEt1.png"
          alt="Imagen de rick y morty"
          dictionary={['JavaScript', 'HTML5', 'SCSS']}
          url='https://camilo-lego-page-camiloemp.vercel.app/'
        />
      </article>
    </section>
  )
}
