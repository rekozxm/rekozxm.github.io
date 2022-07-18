import { RouteObject } from 'react-router-dom'
import MainWrap from '@layout/main'

const route: RouteObject[] = [
  {
    path: '/',
    element: <MainWrap />
  },
  {
    path: '/reko',
    element: <MainWrap />
  }
]
export default route
