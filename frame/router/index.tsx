import { RouteObject } from 'react-router-dom'
import HomeWrapper from '@container'
import AboutWrap from '@container/about'
import WorkWrap from '@container/work'
import ProjectWrap from '@container/project'
import EducationWrap from '@container/education'
import AbilityWrap from '@container/ability'

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
      {
        path: 'education',
        element: <EducationWrap />
      },
      {
        path: 'ability',
        element: <AbilityWrap />
      }
    ]
  }
]
export default route
