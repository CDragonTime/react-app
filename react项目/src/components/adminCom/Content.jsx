import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { Layout, Breadcrumb, Button } from 'antd';

import Chart from "../echart/Chart.jsx"
import Shop from "../shop/Shop.jsx"
import UserAdd from "../user/UserAdd"
import UserCounter from "../user/UserCounter"
import UserManager from "../user/UserManager"
import OrderAdd from "../order/OrderAdd"
import OrderManager from "../order/OrderManager"
import ShopAdd from "../shop/ShopAdd"
import ShopManager from "../shop/ShopManager"
import Category from "../category/Category.jsx"
import Error from "../../views/404/404"
import { getWeather } from "../../api/utilsApi.js"
import { timeFormat } from "../../utils/timeUtils"

import "../../views/admin/admin.css"
const { Content } = Layout;


export default class AdminContent extends Component {

    state = {
        collapsed: false,
        weather: {},
        time: ""
    };

    getTime() {
        setInterval(()=>{
            this.setState({ "time": timeFormat(new Date()) })
        },1000)
    }
    async getWeatherData() {
        let result = await getWeather("郑州");
        this.setState({ "weather": result })
        // console.log(result)
    }

    componentDidMount() {
        this.getWeatherData()
        this.getTime()
    }

    render() {
        let { weather,time } = this.state
        // console.log(weather)
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', display: "inline-block" }}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>需要设置二级路由</Breadcrumb.Item>
                    {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                </Breadcrumb>
                <div style={{
                    margin: '0 16px', display: "inline-block", "float": "right",
                    "padding": "10px", "lineHeight": "34px", "backgroundColor": "#ccc", "borderRadius": "20px"
                }}>
                    <strong>{time}</strong>&nbsp;&nbsp;&nbsp;
                    <img src={weather.imageUrl} />&nbsp;
                    <strong>{weather.weather}</strong>
                </div>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Switch>
                        <Route path="/admin/chart" component={Chart} />
                        <Route path="/admin/shop" component={Shop} />
                        <Route path="/admin/category" component={Category} />
                        {/* 用户的路由 */}
                        <Route path="/admin/user/userAdd" component={UserAdd} />
                        <Route path="/admin/user/userManager" component={UserManager} />
                        <Route path="/admin/user/userCount" component={UserCounter} />

                        {/* 订单的路由 */}
                        <Route path="/admin/order/orderAdd" component={OrderAdd} />
                        <Route path="/admin/order/orderManager" component={OrderManager} />

                        {/* 商品的路由 */}
                        <Route path="/admin/shop/shopAdd" component={ShopAdd} />
                        <Route path="/admin/shop/shopManager" component={ShopManager} />

                        <Route path="/admin/*" component={Error}></Route>
                    </Switch>
                </div>
            </Content>
        )
    }
}
