import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import HeaderBar from '@component/header-bar'
import FooterBar from '@component/footer-bar'
import ToolSlot from '@component/tool-slot'
import NavSlot from '@component/nav-slot'
const { Content } = Layout

const MainDom = () => {

  return (
    <Layout className="app r">
      <HeaderBar navSlot={<NavSlot />} funcSlot={<ToolSlot />}></HeaderBar>
      <Content className="r-wrap">
        <Outlet></Outlet>
      </Content>
      <FooterBar></FooterBar>
    </Layout>
  )
}

export default MainDom
