import { Layout } from 'antd'
import './index.less'
import HeaderBar from '@component/header-bar'
import FooterBar from '@component/footer-bar'
import ToolSlot from '@component/tool-slot'
const { Content } = Layout

const LoginDom = () => {
  return (
    <Layout className="app r">
      <HeaderBar funcSlot={<ToolSlot></ToolSlot>}></HeaderBar>
      <Content className="r-wrap"></Content>
      <FooterBar></FooterBar>
    </Layout>
  )
}

export default LoginDom
