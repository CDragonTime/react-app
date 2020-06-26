import React, { Component } from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Admin from "./views/admin/Admin"
import Login from "./views/login/Login.jsx"
import Error from "./views/404/404.jsx"
import 'antd/dist/antd.css'
import TestLayout from "./views/404/TestLayout"


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app" style={{height:"100%"}}>
                    <Switch>
                    {/* exact严格模式匹配，避免匹配覆盖的问题 */}
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/admin"  component={Admin}></Route>
                        <Route path="/test"  component={TestLayout}></Route>
                        <Route path="/*"  component={Error}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
