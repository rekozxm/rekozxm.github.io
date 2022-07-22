import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import routers from '@router'
import '@styles'
const GetRoutes = () => useRoutes(routers)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider componentSize="small">
      <BrowserRouter basename='/'>
        <GetRoutes></GetRoutes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
)
