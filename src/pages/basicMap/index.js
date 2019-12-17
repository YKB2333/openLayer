import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav, Footintro } from "../../components"
import { Pagination } from 'antd';

import "./basicMap.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            basicMap: [{
                imgUrl: "/images/basicMap/wlan.png",
                text: "简单地图展示"
            }, {
                imgUrl: "/images/basicMap/wlan.png",
                text: "动态缩放展示"
            }, {
                imgUrl: "/images/basicMap/wlan.png",
                text: "地图地位展示"
            }, {
                imgUrl: "/images/basicMap/wlan.png",
                text: "动画定位展示"
            }, {
                imgUrl: "/images/basicMap/wlan.png",
                text: "地图标准空间"
            }, {
                imgUrl: "/images/basicMap/wlan.png",
                text: "打印组件"
            },{
                imgUrl: "/images/basicMap/wlan.png",
                text: "数据可视化组件"
            },{
                imgUrl: "/images/basicMap/wlan.png",
                text: "轨迹展示组件"
            },{
                imgUrl: "/images/basicMap/wlan.png",
                text: "热力图组件"
            },{
                imgUrl: "/images/basicMap/wlan.png",
                text: "扩展类组件"
            }],
        }
    }
    changebasicMapActive= (e)=>{
        const ele = e.target;
        if(ele.tagName==="SPAN"){
            const activeLi = document.getElementsByClassName("basicMapActive")[0];
            if(activeLi.className){
                activeLi.className = "";
            }
            ele.parentNode.parentNode.className += 'basicMapActive';
        } 
    }
    showTotal = (total,range)=> {
        return `共${total}图层`;
      }
    changePage = (page, pageSize)=>{
        console.log(page, pageSize)
        setTimeout(()=>{
            this.setState({
                basicMap:[{
                    imgUrl: "/images/basicMap/wlan.png",
                    text: "简单地图展示"
                }, {
                    imgUrl: "/images/basicMap/wlan.png",
                    text: "动态缩放展示"
                }, {
                    imgUrl: "/images/basicMap/wlan.png",
                    text: "地图地位展示"
                }, {
                    imgUrl: "/images/basicMap/wlan.png",
                    text: "动画定位展示"
                }]
            })
        },300)
    }
    render() {
        const { basicMap } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_basicMap">
                    <div className="container clearfix">
                        <h2>时空数据可视化</h2>
                        <ul className="clearfix basicMapImg">
                            {basicMap.map((item,idx)=>{
                                return <li className="fl" key={idx}>
                                    <div className="imgBigBox">
                                        <div className="imgBox" style={{background:`url(${process.env.PUBLIC_URL+item.imgUrl}) no-repeat`,backgroundSize:"100% 100%"}} >
                                        {/* <img className="basicMapImg" src={item.imgUrl} /> */}
                                        </div>
                                        <h3>{item.text}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <div className="divide_basicMap fr">
                            <Pagination defaultCurrent={1} total={100} showTotal={this.showTotal} onChange={this.changePage}/>
                        </div>
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
