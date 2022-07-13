import { BugOutlined, CommentOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
const ToolSlot = () => {
  return (
    <div className="zh-tool">
      <div className="zh-tool-cell">
        <Tooltip title={<>Theme</>}>
          <BugOutlined />
        </Tooltip>
      </div>
      <div className="zh-tool-cell">
        <Tooltip title={<>Wechat</>}>
          <CommentOutlined />
        </Tooltip>
      </div>
    </div>
  )
}
export default ToolSlot
