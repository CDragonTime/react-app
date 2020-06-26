import React, { Component } from "react"
import "../../views/admin/admin.css"
import { Route, Link } from "react-router-dom"
import { Layout, Menu, Breadcrumb, Avatar, Badge, Dropdown, message } from 'antd';
import Chart from "../echart/Chart.jsx"
import Shop from "../shop/Shop.jsx"
import UserAdd from "../user/UserAdd"
import UserCounter from "../user/UserCounter"
import UserManager from "../user/UserManager"
import OrderAdd from "../order/OrderAdd"
import OrderManager from "../order/OrderManager"
import ShopAdd from "../shop/ShopAdd"
import ShopManager from "../shop/ShopManager"


const { Header, Content, Footer, Sider } = Layout;


export default class AdminContent extends Component {
    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Route path="/admin/chart" component={Chart} />
                    <Route path="/admin/shop" exact component={Shop} />
                    {/* 用户的路由 */}
                    <Route path="/admin/user/userAdd" component={UserAdd} />
                    <Route path="/admin/user/userManager" component={UserManager} />
                    <Route path="/admin/user/userCount" component={UserCounter} />

                    {/* 订单的路由 */}
                    <Route path="/admin/order/orderAdd" component={OrderAdd} />
                    <Route path="/admin/order/orderManager" component={OrderManager} />

                    {/* 订单的路由 */}
                    <Route path="/admin/shop/shopAdd" component={ShopAdd} />
                    <Route path="/admin/shop/shopManager" component={ShopManager} />


                    {/* <Route path="/admin/*"  component={Error}></Route> */}
                </div>
            </Content>
        )
    }
}
