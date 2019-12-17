import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav, Footintro } from "../../components"
// import cloudSearchsmallbox from "./childComps/cloudSearchSmallBox"

import "./cloudSearch.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            cloudSearch: [{
                imgUrl: "",
                text: "POI数据"
            }, {
                imgUrl: "",
                text: "地址数据"
            }, {
                imgUrl: "",
                text: "路网数据"
            }, {
                imgUrl: "",
                text: "行政区划数据"
            }, {
                imgUrl: "",
                text: "高精度"
            }, {
                imgUrl: "",
                text: "业务数据"
            },],
        }
    }
    render() {
        const { cloudSearch } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_cloudSearch" style={{backgroundImage:"url('/images/cloudSearch/bannerBg.png')"}}>
                    <div className="container">
                        <h2>时空云搜</h2>
                        <div className="application">适用平台:<span>Web</span><span>Android</span><span>Web Service</span></div>
                        <p>
                            
                        通过整合公安已有的大数据空间资源，实现公安五要素“人、地、物、事件、组织”的时空维度的智能检索<br />
                        搜索结果都直接展现在地图图面上，目前我们提供的搜索服务包括了： POI搜索、地理编码、人员、车辆、地点周边、区域统计、行政区域等查询。
                            
                        </p>
                        <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/banner.png"} />
                    </div>
                </div>
                <div id="func_cloudSearch">
                    <div className="container">
                        <h2>多种搜索方式</h2>
                        <h3>地图提供多种搜索方式，满足不同业务需求</h3>
                        <ul className="clearfix">
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                    <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/key.png"} />
                                    </div>
                                    <h3>关键字搜索</h3>
                                    <h4>如在地图上搜索并标记故宫的位置</h4>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                    <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/near.png"} />
                                    </div>
                                    <h3>周边搜索</h3>
                                    <h4>各APP上最常用的“附近”功能</h4>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                    <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/duobian.png"} />
                                    </div>
                                    <h3>多边形搜索</h3>
                                    <h4>如对望京区域进行搜索</h4>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                    <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/duotu.png"} />
                                    </div>
                                    <h3>多图层叠加搜索</h3>
                                    <h4>可同时叠加多种结果显示</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="data_cloudSearch" style={{background:"url('/images/cloudSearch/dili.png') no-repeat",backgroundSize:"cover"}}>
                    <div className="container">
                        <h2>地理编码</h2>
                        <div className="dataBigBox">
                            <div className="dataSmallBox fl">
                                <h3>正向地理编码</h3>
                                <p>地址：北京市朝阳区荣街10号</p>
                                <p>地理编码结果是：坐标：116.30621，39.976121</p>
                            </div>
                            <div className="dataSmallBox fr">
                                <h3>逆向地理编码</h3>
                                <p>地理编码结果是：坐标：116.30621，39.976121</p>
                                <p>地址：北京市朝阳区荣街10号</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="time_cloudSearch">
                    <div className="container clearfix">
                        <div className="fl">
                            <h3>图层+空间+时间=时空搜索</h3>
                            <p>
                                <span className="prismatic"></span>支持属性查询+关键字查询<br />
                                <span className="prismatic"></span>支持多个图层的混合叠加<br />
                            </p>
                            </div>
                        <div className="fr">
                            <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/shikong.png"} />
                        </div>
                    </div>
                </div>
                <div id="imgBox_cloudSearch">
                    <div className="container">
                        <div className="imgBox_cloudSearch_child">
                            <img className="cloudSearchImg" src={process.env.PUBLIC_URL + "/images/cloudSearch/hunhe.png"} />
                        </div>
                        <div className="clearfix">
                            <div className="fl"></div>
                        </div>
                        <div className="introduce">
                            <h3>时空+四标四实混合搜索</h3>
                            <p>
                            基于时空云平台平台实现“四标四实”信息的采集、管理与空间查询展示，为实有人口管理、治安秩序管理、治安巡逻排查等工作提供支撑。
                            </p>
                        </div>
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
