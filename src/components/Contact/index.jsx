import './contact.css'

export const Contact = () => {
  return (
    <section id="contact" className='section-contact'>
      <h2>Contactame</h2>
      <form>
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
        <div>
          <button className='style-button button-contact effect-hover' type='submit'>
            ¡Enviar mensaje!
          </button>
        </div>
      </form>
    </section>
  )
}
