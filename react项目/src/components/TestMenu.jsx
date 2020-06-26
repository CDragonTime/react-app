import { Menu } from 'antd';
import React from "react"
import { Route, Link } from "react-router-dom"
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    HomeOutlined,
    SettingOutlined,
    WhatsAppOutlined,
    UserOutlined,
    DownOutlined,
    WindowsOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class TestMenu extends React.Component {
    handleClick = e => {
        console.log('click ', e);
    };

    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/admin/chart">首页</Link>
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
                <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="商品">
                    <Menu.Item key="6">
                        <Link to="/admin/userAdd">增加商品</Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/admin/userManager">商品管理</Link>
                    </Menu.Item>
                </SubMenu>
                {/*                             <SubMenu key="sub2" icon={<TeamOutlined />} title="好友管理">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu> */}
                <Menu.Item key="9" icon={<WhatsAppOutlined />}>有事call我</Menu.Item>
                <Menu.Item key="10" icon={<SettingOutlined />}>设置</Menu.Item>
            </Menu>

        );
    }
}