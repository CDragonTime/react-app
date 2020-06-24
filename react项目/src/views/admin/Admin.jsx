import React, { Component } from "react"
import "./admin.css"
import { Route, Link } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Chart from "../../components/echart/Chart.jsx"
import Shop from "../../components/shop/Shop.jsx"
import UserAdd from "../../components/user/UserAdd"
import UserCounter from "../../components/user/UserCounter"
import UserManager from "../../components/user/UserManager"
import Error from "../404/404.jsx"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Admin extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <div className="admin">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to="/admin/chart">商品EChart图</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                <Link to="/admin/shop">商品管理</Link>
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="用户">
                                <Menu.Item key="3">
                                    <Link to="/admin/userAdd">增加用户</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/admin/userManager">用户管理</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/admin/userCount">统计用户</Link>
                                </Menu.Item>
                            </SubMenu>
{/*                             <SubMenu key="sub2" icon={<TeamOutlined />} title="好友管理">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu> */}
                            <Menu.Item key="9" icon={<FileOutlined />} />
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-header" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Route path="/admin/chart" component={Chart} />
                                <Route path="/admin/shop" component={Shop} />
                                <Route path="/admin/userAdd" component={UserAdd} />
                                <Route path="/admin/userManager" component={UserManager} />
                                <Route path="/admin/userCount" component={UserCounter} />
                                {/* <Route path="/admin/*"  component={Error}></Route> */}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>管理系统页面 ©2020 Created by MrChen</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

/* import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout; */
// ------------------------第二种布局
{/*                 <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                Content
        </Content>
                        </Layout>
                    </Layout>
                </Layout>, */}