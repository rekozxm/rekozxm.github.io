import _ from 'lodash'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const NavList = () => {
  const navigate = useNavigate()
  const navItems = [
    { label: '简历', key: '1', path: '/resume' },
    { label: '个人', key: '2', path: '/person' },
  ]
  // 初始化跳转到第一个目录
  useEffect(() => {
    navigate('/resume')
  }, [])

  return (
    <div className="r-header-bar_nav ml20">
      {
        _.map(navItems, el => {
          return (
            <NavLink to={el.path} className='r-header-bar_nav_item' key={el.key}>{el.label}</NavLink>
          )
        })
      }
    </div>
  )
}
export default NavList