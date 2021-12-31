import './About.css'
export const About = () => {
  return (
    <section id="about" className='container-about'>
      <h2>Hola soy <span>Camilo Mora</span>, Desarrollador Web</h2>
      <p>Apasionado por desarrollar paginas web e incrementar mi conocimiento en el área de la tecnología.</p>
      <div className='about-contact-container'>
        <p>Si estas interesado en mi</p>
        <img src="" alt="" />
        <div>
          <a href='#contact' className='about-to-contact effect-hover'>Contactame</a>
          <a className='about-to-contact effect-hover' href='/src/assets/hojaDeVida/Hoja de vida CAMILO MORA.pdf' download >
            Descarga mi CV
          </a>
        </div>
      </div>
    </section>
  )
}
