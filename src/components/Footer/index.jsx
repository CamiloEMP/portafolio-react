import { IconsSocialMedia } from '../utils/IconsTech'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <section className='footer-icons'>
        {IconsSocialMedia}
      </section>
      <span>Copyright (c) 2021 CamiloEMP</span>
    </footer>
  )
}
