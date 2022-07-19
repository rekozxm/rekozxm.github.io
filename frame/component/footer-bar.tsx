import { Layout } from 'antd'
const { Footer } = Layout
const FooterBar = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <Footer className="r-footer pt12 pb12">Copyright (c) {year} rekozxm</Footer>
    </>
  )
}
export default FooterBar
