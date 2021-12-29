import './About.css'
export const About = () => {
  return (
    <section className='container-about'>
      <h2>Hola soy <span>Camilo Mora</span>, Desarrollador Web</h2>
      <p>Apasionado por desarrollar paginas web e incrementar mi conocimiento en el área de la tecnología.</p>
      <div className='about-contact-container'>
        <p>Si estas interesado en mi</p>
        <a className='about-to-contact'>Contactame</a>
        <button className='about-to-button'>Descarga mi CV</button>
      </div>
    </section>
  )
}
