import { useEffect, useState, } from 'react'
import moment from 'moment'
import { GithubOutlined, WechatOutlined } from '@ant-design/icons'

const ToolSlot = () => {
  const [currentDate, setCurrentDate] = useState('')
  useEffect(() => {
    setTime()
    const timer = setInterval(() => {
      setTime()
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const setTime = () => {
    setCurrentDate(moment().format('YYYY-MM-DD HH:mm:ss'))
  }
  return (
    <div className="r-tool">
      <div className='r-tool-cell'>
        {currentDate}
      </div>
      <div className="r-tool-cell ml12">
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
