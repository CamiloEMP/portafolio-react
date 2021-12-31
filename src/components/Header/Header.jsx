import { useState } from 'react'
import { IoMenu, IoTerminal, IoCloseSharp } from 'react-icons/io5'
import { MenuMobile } from './MenuMobile'
import './index.css'
import { Links } from '../Links'

export const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <header>
        <div>
          <IoTerminal/>
          <span>Camilo Mora</span>
        </div>
        {sidebar
          ? <IoCloseSharp onClick={showSidebar} className={'header-icon-menu'}/>
          : <IoMenu onClick={showSidebar}className='header-icon-menu IoMenu'/>}
        <ul className='nav-menu-desktop'>
          <Links />
        </ul>
      </header>
      <MenuMobile sidebar={sidebar} setSidebar={setSidebar} />
    </>
  )
}
