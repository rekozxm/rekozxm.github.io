import _ from 'lodash'
import { useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
const NavList = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: '关于我', key: '1', path: '/about' },
    { label: '工作经历', key: '2', path: '/work' },
    { label: '项目案例', key: '3', path: '/project' },
  ]
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/about')
    }
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