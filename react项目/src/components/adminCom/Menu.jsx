import React, { Component } from "react"
import "../../views/admin/admin.css"
import { Link } from "react-router-dom"
import {
    DesktopOutlined,
    AppstoreOutlined,
    HomeOutlined,
    SettingOutlined,
    WhatsAppOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';

const { SubMenu } = Menu;


export default class AdminMenu extends Component {
    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/admin/chart">首页</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to="/admin/shop">商品图表</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
                    <Menu.Item key="3">
                        <Link to="/admin/user/userAdd">增加用户</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/admin/user/userManager">用户查看</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/admin/user/userCount">统计用户</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="订单管理">
                    <Menu.Item key="6">
                        <Link to="/admin/order/orderAdd">增加订单</Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/admin/order/orderManager">查看订单</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<AppstoreOutlined />} title="商品管理">
                    <Menu.Item key="8">
                        <Link to="/admin/shop/shopAdd">增加商品</Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to="/admin/shop/shopManager">商品查看</Link>
                    </Menu.Item>
                </SubMenu>
                {/*                             <SubMenu key="sub2" icon={<TeamOutlined />} title="好友管理">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu> */}
                <Menu.Item key="10" icon={<WhatsAppOutlined />}>有事call我</Menu.Item>
                <Menu.Item key="11" icon={<SettingOutlined />}>设置</Menu.Item>
            </Menu>

        )
    }
}
