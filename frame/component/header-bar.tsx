import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import FacIcon from '@assets/favicon.svg'
interface HeaderProps {
  navSlot?: ReactNode
  funcSlot?: ReactNode
}

const HeaderBar = (props: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <>
      <header className="r-header-bar pl16 pr16">
        <div className="r-header-bar_left">
          <div className="r-header-bar_logo" onClick={() => { navigate('/about') }}>
            <img className="logo" src={FacIcon} alt="logo" />
            <span className="ml8 name">张满意</span>
          </div>
          {
            props.navSlot
          }
        </div>
        <div className="r-header-bar_right">{props.funcSlot}</div>
      </header>
    </>
  )
}
export default HeaderBar
