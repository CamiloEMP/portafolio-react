import './About.css'
import imagen from '../../assets/camilo-mora.jpeg'
import pdf from '../../assets/hojadevida.pdf'

export const About = () => {
  return (
    <section id="about" className='container-about'>
      <h2 className='container-about-title'>Hola soy <span>Camilo Mora</span>, Desarrollador Web</h2>
      <img className="img-camilo" src={imagen} width={250} alt="Foto Camilo Mora" />
      <p>Apasionado por desarrollar paginas web e incrementar mi conocimiento en el área de la tecnología.</p>
      <div className='about-contact-container'>
        <p>Si estas interesado en mi</p>
        <div>
          <a href='#contact' className='about-to-contact effect-hover'>Contactame</a>
          <a className='about-to-contact effect-hover' download='hoja-de-vida-Camilo-Mora.pdf' href={pdf} >
            Descarga mi CV
          </a>
        </div>
      </div>
    </section>
  )
}
