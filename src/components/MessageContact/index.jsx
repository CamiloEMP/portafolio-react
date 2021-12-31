import { IconsMessageContact } from '../utils/IconsTech'
import './messageContact.css'

export const MessageContact = ({ infoMessage }) => {
  return (
    <>
      <div
        style={
          !infoMessage.success
            ? { visibility: 'collapse' }
            : { visibility: 'visible' }}
        className={infoMessage.success
          ? 'container-message colors-success success'
          : 'container-message colors-success'}
      >
        <p>Mensaje enviado con exito</p>
        {IconsMessageContact.success}
      </div>
      <div
        style={
          !infoMessage.error
            ? { visibility: 'collapse' }
            : { visibility: 'visible' }}
        className={infoMessage.error
          ? 'container-message colors-error error'
          : 'container-message colors-error'}
      >
        <p>Hubo un error</p>
        {IconsMessageContact.error}
      </div>
    </>
  )
}
