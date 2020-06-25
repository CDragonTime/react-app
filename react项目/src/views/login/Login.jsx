import React, { Component } from "react"
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css"
import { getUserLogin } from "../../api/userApi.js"
import { Form, Input, Button, message } from 'antd';
import { Spin, Alert } from 'antd';
export default class Login extends Component {
    onFinish = (values) => {
        console.log(values)
        getUserLogin(values).then((result) => {
            console.log(result.code)
            if (result.code === 200) {
                // 使用编程式路由进行成功的跳转,登陆的时候应该替换
                this.props.history.replace("/admin/chart");
                message.success("登陆成功")
            } else {
                message.error("用户名或密码错误")
            }
        }).catch((error) => {
            message.error("服务器没开，联系管理员22235467##")
        })
    }
    render() {
        return (
            <div className="login1">
                <Spin tip="Loading..." className="loading" style={{display: "none"}}>
                </Spin>

                <div className="header">
                    <h1>商品后台系统</h1>
                </div>
                <div className="content">
                    <h1>用户登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: '请输入用户名!' },
                                { max: 20, message: '名称不超过20个字符' },
                                {
                                    pattern: new RegExp(/^[a-zA-Z0-9_-]{0,22}$/, "g"),
                                    message: '名称只允许包含数字、字母和下划线'
                                }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        {/*                         <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                        </a>
                        </Form.Item> */}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                    </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>

        )
    }
}