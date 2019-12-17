import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav, Footintro } from "../../components"
// import mapsmallbox from "./childComps/mapSmallBox"

import "./map.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            map: [{
                imgUrl: "/images/map/poi.png",
                text: "POI数据"
            }, {
                imgUrl: "/images/map/dizhi.png",
                text: "地址数据"
            }, {
                imgUrl: "/images/map/luwang.png",
                text: "路网数据"
            }, {
                imgUrl: "/images/map/xingzheng.png",
                text: "行政区划数据"
            }, {
                imgUrl: "/images/map/jingdu.png",
                text: "高精度"
            }, {
                imgUrl: "/images/map/yewu.png",
                text: "业务数据"
            },],
        }
    }
    render() {
        const { map } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_map">
                    <div className="container">
                        <h2>地图</h2>
                        <div className="application">适用平台:<span>Web</span><span>Android</span><span>Web Service</span></div>
                        <p>
                            以警务大数据整体框架为基础，实现大数据与地理信息的有机结合，解决警用时空大数据在应用过程中的技术问题，提供时空大数据存储、管理、共享服务与分析挖掘和可视化等各项服务支撑能力，满足各业务警种实战应用需求。
                        </p>
                        <img className="map" src={process.env.PUBLIC_URL + "/images/map/map.png"} />
                    </div>
                </div>
                <div id="func_map">
                    <div className="container">
                        <h2>覆盖多平台的地图功能</h2>
                        <ul className="clearfix">
                            <li className="fl active">
                                <div className="imgBox"><img className="map" src={process.env.PUBLIC_URL + "/images/map/pc.png"} /></div>
                                <h3>PC端地图</h3>
                            </li>
                            <li className="fl">
                                <div className="imgBox"><img className="map" src={process.env.PUBLIC_URL + "/images/map/phone.png"} /></div>
                                <h3>移动端地图</h3>
                            </li>
                            <li className="fl">
                                <div className="imgBox"><img className="map" src={process.env.PUBLIC_URL + "/images/map/ie.png"} /></div>
                                <h3>Web服务端地图</h3>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="data_map">
                    <div className="container">
                        <h2>完善的地图数据系统</h2>
                        <ul className="clearfix">
                            {map.map((item, idx) => {
                                return (
                                    <li className="fl" key={idx}>
                                        <div className="imgBox"><img className="map" src={process.env.PUBLIC_URL + item.imgUrl} /></div>
                                        <h3>{item.text}</h3>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div id="individuation_map">
                    <div className="container">
                        <h2>地图个性化、差异化，满足不同业务需求</h2>
                        <p>
                            全新PGIS高性能矢量地图引擎，支持二三维一体化与个性化定制，<br />
                            有更好的展示效果
                        </p>
                        <div className="method">提供多种定位方式:<span>经纬度定位</span><span>地址定位</span><span>辖区定位</span><span>行政区划定位</span><span>反向地址解析</span></div>

                    </div>
                </div>
                <div id="imgShow_map">
                    <div className="container">
                        <ul className="clearfix">
                            <li className="fl">
                                <div className="cover">
                                    <span>门牌采集</span>
                                </div>
                                <div className="imgBox">

                                </div>
                            </li>
                            <li className="fl">
                                <div className="cover">
                                    <span>门牌采集</span>
                                </div>
                                <div className="imgBox">

                                </div>
                            </li>
                            <li className="fl">
                                <div className="cover">
                                    <span>门牌采集</span>
                                </div>
                                <div className="imgBox">

                                </div>
                            </li>
                            <li className="fl">
                                <div className="cover">
                                    <span>门牌采集</span>
                                </div>
                                <div className="imgBox">

                                </div>
                            </li>
                            <li className="fl">
                                <div className="cover">
                                    <span>门牌采集</span>
                                </div>
                                <div className="imgBox">

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="imgBox_map">
                    <div className="container">
                        <div className="imgBox_map_child">
                            <img className="map" src={process.env.PUBLIC_URL + "/images/map/bigmap.png"} />
                        </div>
                        {/* <h2>
                        静态图层数据和实时定位数据同时上图，各类警务业务数据通过一张图融合展示。数据更新自动推送，百万级高效渲染引擎。
                        </h2> */}
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
