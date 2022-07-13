import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import Layout from './layout'
import '@styles'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider componentSize="small">
      <Layout />
    </ConfigProvider>
  </React.StrictMode>
)
