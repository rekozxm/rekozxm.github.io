import { RouteObject } from 'react-router-dom'
import HomeWrapper from '@container'
import AboutWrap from '@container/about'
import WorkWrap from '@container/work'
import ProjectWrap from '@container/project'

const route: RouteObject[] = [
  {
    path: '/',
    element: <HomeWrapper></HomeWrapper>,
    children: [
      {
        path: 'about',
        element: <AboutWrap />
      },
      {
        path: 'work',
        element: <WorkWrap />
      },
      {
        path: 'project',
        element: <ProjectWrap />
      },
    ]
  }
]
export default route
