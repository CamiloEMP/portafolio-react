import { Links } from '../Links'
import { IconsSocialMedia } from '../utils/IconsTech'
import './index.css'

export const MenuMobile = ({ sidebar, setSidebar }) => {
  return (
    <section className={sidebar ? 'nav-menu-mobile active' : 'nav-menu-mobile'}>
      <Links setSidebar={setSidebar} mobile={true} />
      <section className='container-icons-social-media'>
        {IconsSocialMedia}
      </section>
    </section>
  )
}
