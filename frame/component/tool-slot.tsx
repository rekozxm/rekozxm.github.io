import { GithubOutlined, WechatOutlined } from '@ant-design/icons'
const ToolSlot = () => {
  return (
    <div className="r-tool">
      <div className="r-tool-cell">
        <GithubOutlined />
        <a
          className="ml6 r-tool-cell_txt"
          href="https://github.com/rekozxm"
          target="_blank"
          rel="noreferrer"
        >
          rekozxm
        </a>
      </div>
      <div className="ml12 r-tool-cell">
        <WechatOutlined />
        <span className="ml6 r-tool-cell_txt">13266701191</span>
      </div>
    </div>
  )
}
export default ToolSlot
