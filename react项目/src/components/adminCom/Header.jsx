import React, { Component } from "react"
import "../../views/admin/admin.css"
import { DownOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Badge, Dropdown, message, Modal } from 'antd';
import { Redirect } from "react-router-dom"
import StorageUtil from "../../utils/storageUtil.js"
import { withRouter } from "react-router-dom"

const { Header } = Layout

class AdminHeader extends Component {
    state = {
        collapsed: false
    };
    // 折叠面板
    onCollapse = collapsed => {
        // console.log(collapsed);
        this.setState({ collapsed });
    };
    logout = () => {
        message.info(`你点击了头像`);
    }
    onClick = ({ item, key }) => {
        const { confirm } = Modal;
        if (key === '3') {
            let that = this;
            confirm({
                title: "温馨提示",
                content: "你确定要退出吗",
                okText: "非常确定",
                cancelText: "取消",
                onOk() {
                    console.log('确定');
                    // 移除localStorage中的登录数据
                    StorageUtil.removeUser()
                    that.props.history.replace("/login");
                    message.info(`退出登录`);
                },
                onCancel() {
                    console.log('取消');
                },
            });
            /*             for (let i = 0; i < 10; i ++) {
                            setTimeout(() => {
                               
                            }, 1000);
                        } */
        }
        else {
            message.info(`你点击了${key}`);
        }
    };
    menu = (
        <Menu onClick={this.onClick}>
            <Menu.Item key="1">第一个</Menu.Item>
            <Menu.Item key="2">2nd</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">退出登录</Menu.Item>
        </Menu>
    );

    render() {
        let user = StorageUtil.getUser()
        if (!user) {
            // this.props.history.push("/login")
            console.log(user)
            return <Redirect to="/login"></Redirect>
        }
        return (
            <Header className="site-layout-header" style={{ padding: 0 }}>
                <div className="right">
                    <span className="avatar-item" onClick={this.logout}>
                        <Avatar size="large"
                            src="http://localhost:9990/springboot/images/80e39baa-27df-4659-8c92-8e2d58f123c4_%E6%89%8B%E6%9C%BA%E5%9B%BE%E7%89%879be78596df83ddb3cf477984cc12a7cc.jpg" />
                    </span>
                    <Dropdown overlay={this.menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ fontSize: "24px" }}>
                            {user.username} <DownOutlined />
                        </a>
                    </Dropdown>,
                </div>
            </Header>
        )
    }
}
export default withRouter(AdminHeader)

