import { useState } from 'react'
import { IoMenu, IoTerminal } from 'react-icons/io5'
import { MenuMobile } from './MenuMobile'
import './index.css'

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
        <IoMenu onClick={showSidebar} className='header-icon-menu' />
      </header>
      <MenuMobile sidebar={sidebar} setSidebar={setSidebar} />
    </>
  )
}
