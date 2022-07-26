import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import HeaderBar from '@component/header-bar'
import FooterBar from '@component/footer-bar'
import NavSlot from '@component/nav-slot'
const { Content } = Layout

const MainDom = () => {

  return (
    <Layout className="app r">
      <HeaderBar navSlot={<NavSlot />} ></HeaderBar>
      <Content className="r-wrap">
        <div className='r-content'>
          <Outlet></Outlet>
        </div>
      </Content>
      <FooterBar></FooterBar>
    </Layout>
  )
}

export default MainDom
