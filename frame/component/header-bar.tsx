import type { ReactNode } from 'react'
import { Layout } from 'antd'
const { Header } = Layout

interface HeaderProps {
  className?: string
  navSlot?: ReactNode
  funcSlot?: ReactNode
}

const HeaderBar = (props: HeaderProps) => {
  return (
    <>
      <Header className={`${props.className ?? ''} zh-header-bar pl16 pr16`}>
        <div className="zh-header-bar_left">
          <div className="zh-header-bar_logo">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="logo"
            />
            <h1 className="ml12">满意酱</h1>
          </div>
          {props.navSlot}
        </div>
        <div className="zh-header-bar_right">{props.funcSlot}</div>
      </Header>
    </>
  )
}
export default HeaderBar
