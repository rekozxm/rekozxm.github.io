import _ from 'lodash-es'
import { useState } from 'react'
import { Layout, Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import './index.less'
import HeaderBar from '@component/header-bar'
import FooterBar from '@component/footer-bar'
import ToolSlot from '@component/tool-slot'
import loginImg from '@assets/login.png'
const { Content } = Layout
interface FormValues {
  username: string
  password: string
  remember: boolean
}
const LoginDom = () => {
  const [loading, setLoading] = useState(false)

  const onFinish = (values: FormValues) => {
    setLoading(true)
    _.delay(() => {
      console.log(values)
      setLoading(false)
      message.success('登录成功')
    }, 2000)
  }

  return (
    <Layout className="app zh-login">
      <HeaderBar funcSlot={<ToolSlot></ToolSlot>}></HeaderBar>
      <Content className="zh-login-wrap">
        <div className="zh-login-wrap_main">
          <div className="zh-login-wrap_main_bg">
            <img src={loginImg} />
          </div>
          <Form
            className="zh-login-wrap_main_form ml30"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                disabled={loading}
                placeholder="请输入用户名"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                disabled={loading}
                placeholder="请输入用户密码"
                prefix={<KeyOutlined />}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox disabled={loading}>记住密码</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                loading={loading}
                style={{ width: '100%' }}
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <FooterBar></FooterBar>
    </Layout>
  )
}

export default LoginDom
