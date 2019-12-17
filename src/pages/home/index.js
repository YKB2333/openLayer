import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav,Footintro } from "../../components"

import "./home.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            productNav: [{
                name: "地图",
                nav: ["地图显示", "自定义地图", "地图绘制", "地图搜索"]
            }, {
                name: "时空分析",
                // nav:["地图显示","自定义地图","地图绘制","地图搜索"]
            }, {
                name: "在线制图",
                // nav:["地图显示","自定义地图","地图绘制","地图搜索"]
            }, {
                name: "时空云搜",
                // nav:["地图显示","自定义地图","地图绘制","地图搜索"]
            }, {
                name: "数据可视化",
                // nav:["地图显示","自定义地图","地图绘制","地图搜索"]
            }],
            activeIdx: 0
        }
    }
    render() {
        const { productNav, activeIdx } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_home">
                    <div className="container">
                        <h2>更炫的地图可视化效果</h2>
                        <p>
                            集成各类地图可视化组件，提供热力图、热点图、聚类图、流向图等各类海量时空信息数据可视化展示，促进PGIS与进屋大数据的融合，充分发挥地图的可视化优势，满足大数据可视化的需求
                    </p>
                    <img className="homeImg" src={process.env.PUBLIC_URL+"/images/home/map.png"} />
                    </div>
                </div>
                <div id="product_home">
                    <div className="container">
                        <h2>丰富的产品及服务</h2>
                        <div>
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL+"/images/home/product_home_img.png"} />
                            </div>
                            <div className="productBox">
                                <ul className="clearfix">
                                    {productNav.map((item, idx) => {
                                        return (
                                            <li key={idx} className={classNames('fl', { active: activeIdx === idx })}>
                                                <span>{item.name}</span>
                                                <div className="liBox">
                                                    <h3>{item.name}</h3>
                                                    {(item.nav) && (<ol className="clearfix">
                                                        <dl className="fl"><div className="dagou">
                                                        <img src={process.env.PUBLIC_URL+"/images/home/dagou.png"} />
                                                        </div>{item.nav[0]}</dl>
                                                        <dl className="fl"><div className="dagou">
                                                        <img src={process.env.PUBLIC_URL+"/images/home/dagou.png"} /></div>{item.nav[1]}</dl>
                                                        <dl className="fl"><div className="dagou"><img src={process.env.PUBLIC_URL+"/images/home/dagou.png"} /></div>{item.nav[2]}</dl>
                                                        <dl className="fl"><div className="dagou"><img src={process.env.PUBLIC_URL+"/images/home/dagou.png"} /></div>{item.nav[3]}</dl>
                                                    </ol>)}
                                                    <button>更多</button>
                                                </div>
                                            </li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="data_home">
                    <div className="container">
                        <h2>地图、时空、大数据完美结合</h2>
                        <ul className="dataBox1 clearfix">
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/tuceng.png"} /></div>
                                <p className="addBold"><strong>100</strong>个</p>
                                <p className="noBold">超过100个应用图层<br />数据展示</p>
                            </li>
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/poi.png"} /></div>
                                <p className="addBold"><strong>70000</strong>万</p>
                                <p className="noBold">
                                    涵盖超过7000万的<br />
                                    POI数据
                                </p>
                            </li>
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/data.png"} /></div>
                                <p className="addBold"><strong>2000</strong>亿条数据</p>
                                <p className="noBold">
                                    数据总量超过<br />
                                    2492千亿数据
                                </p>
                            </li>
                        </ul>
                        <ul className="dataBox2">
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/file.png"} /></div>
                                <p className="addBold"><strong>10000</strong>G</p>
                                <p className="noBold">
                                    系统每日新增超过<br />
                                    10000G数据量
                                </p>
                            </li>
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/finish.png"} /></div>
                                <p className="addBold"><strong>10000</strong>G</p>
                                <p className="noBold">
                                    系统每日新增处理超过<br />
                                    10000G数据量
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="advantage">
                    <div className="container">
                        <h2>
                            安全稳定，功能服务化
                        </h2>
                        <ul className="dataBox clearfix">
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/service.png"} /></div>
                                <p className="addBold">高稳定的服务</p>
                                <p className="noBold">搞稳定性的服务，保障良好的使用体验</p>
                            </li>
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/quick.png"} /></div>
                                <p className="addBold">服务快速响应</p>
                                <p className="noBold">
                                服务器请求达到至完成处理的<br />
                                平均时长不超过200ms
                                </p>
                            </li>
                            <li className="fl">
                                <div><img src={process.env.PUBLIC_URL+"/images/home/support.png"} /></div>
                                <p className="addBold">全方位技术支持</p>
                                <p className="noBold">
                                强大的技术团队全天候 <br />
                                提供专业的技术支持
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
