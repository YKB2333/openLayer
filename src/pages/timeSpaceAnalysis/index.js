import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav, Footintro } from "../../components"
import Timespacesmallbox from "./childComps/timeSpaceSmallBox"

import "./timeSpaceAnalysis.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            timeSpace: [{
                name: "空间分析",
                childText: {
                    p1: "选择特定范围及时间范围，",
                    p2: "查询出对应的资源",
                    p3: "（警车、MAC、车辆、公交、摄像头）"
                },
                href: ""
            }, {
                name: "区域碰撞",
                childText: {
                    p1: "根据多个特定时间，",
                    p2: "在不同的区域范围内",
                    p3: "都有活动轨迹的人、物进行排查"
                },
                href: ""
            }, {
                name: "区域异常",
                childText: {
                    p1: "根据一个区域在特定时间范围内查找出",
                    p2: "初次进入、高频进入、长期停留在该区域的",
                    p3: "重点人员或车辆。"
                },
                href: ""
            }],
        }
    }
    render() {
        const { timeSpace } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_timeSpace">
                    <div className="container">
                        <h2>时空分析</h2>
                        <div className="application">适用平台:<span>Web</span><span>Android</span><span>Web Service</span></div>
                        <p>
                            以警务大数据整体框架为基础，实现大数据与地理信息的有机结合，解决警用时空大数据在应用过程中的技术问题，提供时空大数据存储、管理、共享服务与分析挖掘和可视化等各项服务支撑能力，满足各业务警种实战应用需求。
                        </p>
                        <img src={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/banner.png"} />
                    </div>
                </div>
                <div id="room_timeSpace">
                    <div className="container">
                        <Timespacesmallbox timeSpace={timeSpace[0]} img={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/kongjian.png"}></Timespacesmallbox>
                        <img className="duowei" src={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/kongjian2.png"} />
                    </div>
                </div>
                <div id="area_timeSpace">
                    <div className="container">
                        <Timespacesmallbox timeSpace={timeSpace[1]} img={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/quyu.png"} ></Timespacesmallbox>
                        <img className="quyu" src={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/quyu2.png"} />
                    </div>
                </div>
                <div id="dimension">
                    <div className="container">
                        <div className="timeSpaceSmallBox">
                            <div className="imgBox"><img src={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/duowei.png"} /></div>
                            <h2>多维碰撞</h2>
                            <p>
                            <i className="dagou"></i>
                            允许自定义或查询特定轨迹，<br />
                            并在特定时间范围， <br />
                            排查出与之轨道有较高重合的人或物
                            </p>
                            <p>
                            <i className="dagou"></i>
                            根据特定时间范围内人、车、手机的轨迹<br />
                            找出对应的车、人。
                            </p>
                            <a href="#">详情</a>
                        </div>
                        <img className="duowei" src={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/duowei2.png"} />
                    </div>
                </div>
                <div id="district">
                    <div className="container">
                        <Timespacesmallbox timeSpace={timeSpace[2]} img={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/warn.png"}></Timespacesmallbox>
                        <img className="district2" src={process.env.PUBLIC_URL +"/images/timeSpaceAnalysis/district2.png"} />
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
