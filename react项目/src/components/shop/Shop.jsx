import React, { Component } from "react"
import { Player, ControlBar, BigPlayButton } from 'video-react';
import { Tag,Divider ,Rate } from "antd"

export default class Shop extends Component {

  render() {
    return (
      <div style={{ width: 800, height: 500 }}>
        <Tag color="green">讲课</Tag><Tag color="blue">学习敲代码</Tag>
        <Rate allowHalf defaultValue={5}/>
        {/* <Divider orientation="left" style={{"color":"green"}}>注意完善功能</Divider> */}
        {/* <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"> */}
        <Player autoPlay src="http://localhost:9990/springboot/video/45-异步应用.mp4">
        {/* <Player autoPlay src="http://localhost:9990/springboot/video/64-%E5%90%8E%E5%8F%B0%E9%A6%96%E9%A1%B5%E9%9D%A2%E6%90%AD%E5%BB%BA.ev4"> */}
          {/* <Player autoPlay src="magnet:?xt=urn:btih:07f66ee816ef0042ebbd8a1a1cd8cd55071b721b&dn=[www.domp4.com]装修专家.Flipped.S01E03.中英字幕.WEBrip.720P.mp4"> */}
          <BigPlayButton position="center" />
          {/* <ControlBar autoHide={false} className="my-class" /> */}
        </Player>
      </div>
    )
  }
}