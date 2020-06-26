import React, { Component } from "react"
import "./admin.css"
import { WindowsOutlined} from '@ant-design/icons';
import { Layout } from 'antd';
import { Redirect } from "react-router-dom"
import StorageUtil from "../../utils/storageUtil.js"
import AdminContent from "../../components/adminCom/Content";
import AdminHeader from "../../components/adminCom/Header";
import AdminMenu from "../../components/adminCom/Menu";

const { Footer, Sider } = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false,
    };
    // 折叠面板
    onCollapse = collapsed => {
        // console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        let user = StorageUtil.getUser()
        if (!user) {
            // this.props.history.push("/login")
            console.log(user)
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div className="admin">
                <Layout style={{ minHeight: '100vh' }}>
                    {/* 左侧的组件logo和导航栏 */}
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" ><h1><WindowsOutlined /><WindowsOutlined rotate={180} /></h1></div>
                        <AdminMenu></AdminMenu>
                    </Sider>
                    {/* 主题内容 */}
                    <Layout className="site-layout">
                        <AdminHeader></AdminHeader>
                        <AdminContent></AdminContent>
                        <Footer style={{ textAlign: 'center' }}>管理系统页面 ©2020 Created by MrChen</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
