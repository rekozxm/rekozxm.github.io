import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import FacIcon from '@assets/favicon.svg'
interface HeaderProps {
  navSlot?: ReactNode
}

const HeaderBar = (props: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <>
      <header className="r-header-bar pl16 pr16">
        <div className="r-header-bar_logo" onClick={() => { navigate('/about') }}>
          <img className="logo" src={FacIcon} alt="logo" />
        </div>
        {
          props.navSlot
        }
      </header>
    </>
  )
}
export default HeaderBar
