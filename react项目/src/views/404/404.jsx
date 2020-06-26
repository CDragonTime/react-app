import React,{Component} from "react"
import { Result, Button } from 'antd';
import {debounce} from "../../utils/debounceUtils.js"
export default class Error extends Component{
    // 节流函数直接赋值
    getHome = debounce(
        function f1 () {
            console.log("执行截留函数")
        },2000
    )
    render(){
        return(
            <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={this.getHome}>Back Home</Button>}
          />
        )
    }
}