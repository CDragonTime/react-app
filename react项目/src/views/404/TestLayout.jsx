import { Layout, Avatar, Dropdown } from 'antd';
import React, { Component } from "react"
import "./testLayout.css"
import TestMenu from "../../components/TestMenu.jsx"
import { DownOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

export default class TestLayout extends Component {
    render() {
        return (
            <Layout className="layOut">
                <Sider>
                    <div className="logo">
                        <h1>商品管理系统</h1>
                    </div>
                    <TestMenu></TestMenu>
                </Sider>
                <Layout>
                    <Header className="site-layout-header" style={{ padding: 0 }}>
                        <div className="right">
                            <span className="avatar-item" onClick={this.logout}>
                                <Avatar size="large"
                                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593055749419&di=c1176fb90f3422421d464baf08122959&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg" />
                            </span>
                            <Dropdown overlay={this.menu}>
                                <a className="ant-dropdown-link">
                                    改成用户名 <DownOutlined />
                                </a>
                            </Dropdown>,
                            </div>
                    </Header>
                    <Content>我是内容</Content>
                    <Footer>我是footer</Footer>
                </Layout>
            </Layout>
        )
    }
}