import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

export const Contact = ({ infoMessage, setInfoMessage }) => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_camiloemail', 'template_h92mg8s', form.current, 'user_9pase1X3CWfNfjQPIrXcD')
      .then((result) => {
        setInfoMessage({ ...infoMessage, success: true })
      }, () => {
        setInfoMessage({ ...infoMessage, error: true })
      }).finally(() => {
        setTimeout(() => {
          setInfoMessage({ ...infoMessage, success: false, error: false })
        }, 3000)
      })
    e.target.reset()
  }

  return (
    <section id="contact" className='section-contact'>
      <h2>Contactame</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className='flex-inputs'>
          <label htmlFor='name'>
            <input
              className='input-valid'
              id='name' name='name'
              type='text' placeholder='Tú nombre'
              required
              autoComplete='off'
            />
          </label>
          <label htmlFor='email'>
            <input className='input-valid'
              id='email'
              name='email'
              type='email'
              placeholder='Tú correo'
              required
              autoComplete='off'
            />
          </label>
        </div>
        <label htmlFor='message'>
          <textarea name='message' id='message' placeholder='Mensaje'></textarea>
        </label>
        <div className='container-button-contact'>
          <button className='style-button button-contact effect-hover' type='submit'>
            ¡Enviar mensaje!
          </button>
        </div>
      </form>
    </section>
  )
}
