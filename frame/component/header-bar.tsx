import type { ReactNode } from 'react'
import FacIcon from '@assets/favicon.svg'
interface HeaderProps {
  funcSlot?: ReactNode
}

const HeaderBar = (props: HeaderProps) => {
  return (
    <>
      <div className="r-header-bar pl16 pr16">
        <div className="r-header-bar_left">
          <div className="r-header-bar_logo">
            <img className="logo" src={FacIcon} alt="logo" />
            <span className="ml8 name">张满意</span>
          </div>
        </div>
        <div className="r-header-bar_right">{props.funcSlot}</div>
      </div>
    </>
  )
}
export default HeaderBar
