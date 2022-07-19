import _ from 'lodash'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const NavList = () => {
  const navigate = useNavigate()
  const navItems = [
    { label: '关于我', key: '1', path: '/about' },
    { label: '工作经历', key: '2', path: '/work' },
    { label: '项目经验', key: '3', path: '/project' },
    { label: '教育背景', key: '4', path: '/education' },
    { label: '能力评估', key: '5', path: '/ability' },
  ]
  useEffect(() => {
    navigate('/about')
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