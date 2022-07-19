import { RouteObject } from 'react-router-dom'
import HomeWrapper from '@container'
import ResumeWrap from '@container/resume'
import PersonWrap from '@container/person'

const route: RouteObject[] = [
  {
    path: '/',
    element: <HomeWrapper></HomeWrapper>,
    children: [
      {
        path: 'resume',
        element: <ResumeWrap />,
      },
      {
        path: 'person',
        element: <PersonWrap />,
      }
    ]
  },

]
export default route
