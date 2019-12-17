import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav, Footintro } from "../../components"
// import onlinePrintingsmallbox from "./childComps/onlinePrintingSmallBox"

import "./onlinePrinting.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            onlinePrinting: [{
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
        const { onlinePrinting } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_onlinePrinting" style={{background:`url(${process.env.PUBLIC_URL} +/images/onlinePrinting/bannerBg.png') no-repeat`,backgroundSize:"cover"}}> 
                    <div className="container">
                        <h2>在线制图</h2>
                        {/* <div className="application">适用平台:<span>Web</span><span>Android</span><span>Web Service</span></div> */}
                        <p>
                            提供灵活自定义快速制图能力，通过各类制图模板，利用平台数据、自定义数据、标注数据和用户上传数据，实现“三步成图”的快速制图能力。提供地图及所有叠加要素的打印输出功能，支持任意地图范围和级别的快速打印输出。
                        </p>
                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/banner.png"} />
                    </div>
                </div>
                <div id="func_onlinePrinting">
                    <div className="container">
                        <h2>风格各异的地图模板</h2>
                        <ul className="clearfix">
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/lan.png"} />
                                    </div>
                                    <h3>清新蓝风格</h3>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/lv.png"} />
                                    </div>
                                    <h3>自然绿风格</h3>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/wlan.png"} />
                                    </div>
                                    <h3>午夜蓝风格</h3>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/fen.png"} />
                                    </div>
                                    <h3>浪漫粉风格</h3>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/hui.png"} />
                                    </div>
                                    <h3>高端灰风格</h3>
                                </div>
                            </li>
                            <li className="fl active">
                                <div className="imgBigBox">
                                    <div className="imgSmallBox">
                                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/lanlv.png"} />
                                    </div>
                                    <h3>清新蓝绿风格</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="time_onlinePrinting">
                    <div className="container clearfix">
                        <div className="fl">
                            <h3>地图打印</h3>
                            <p>
                                <span className="prismatic"></span>
                                在地图上进行文字、点、线、面、态势的标绘，
                                <br />
                                &emsp;&nbsp;明确传递作战意图。
                                <br />
                                <span className="prismatic"></span>
                                在任意地图形状和级别，<br />
                                &emsp;&nbsp;进行地图及所有叠加要素的快速打印输出。<br />
                            </p>
                        </div>
                        <div className="fr imgBox">
                                <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/dayin.png"} />
                        </div>
                    </div>
                </div>

                <div id="data_onlinePrinting">
                    <div className="container">
                        <div className="dataSmallBox fl">
                        <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/caiji.png"} />
                        </div>
                        <div className="fl">
                            <h3>警综在采集门牌时使用地图</h3>
                            <p>
                                地图功能特点设计-用于采集门牌地址采集使用的地图，从地图使用功能上来说，主要需要地图具有地名、地址对其进行方位判断，所以设计为地名地图。
                            </p>
                            <p>
                                地图背景色调设计-主要采用淡雅白主色调风格，色彩表示意义：贞洁、光明，色彩运用效果是：纯洁、清爽。
                            </p>
                            <p>
                                地图专题内容设计：警用辖区界线使用暖色调显示，建筑物轮廓清晰表达，门牌地址数据标注上图。
                            </p>
                        </div>
                    </div>
                </div>
                <div id="get_onlinePrinting">
                    <div className="container clearfix">
                        <div className="fl">
                            <h3>接处警地图 </h3>
                            <p>
                                <span className="prismatic"></span>
                                图像显示效果清晰，屏幕亮度高显示均匀，色彩还原真
                                <br />
                                &emsp;&nbsp;实，图像失真小。
                                <br />
                            </p>
                            <p>
                                <span className="prismatic"></span>

                                面积巨大-用户站远才能看全内容（所以字也不能
                                设计
                            <br />
                                &emsp;&nbsp;
                                很小）。
                            <br />
                            </p>
                            <p>
                                <span className="prismatic"></span>

                                深色背景-紧张感强，让视觉更好的聚焦，色彩表
                            <br />
                                &emsp;&nbsp;
                                示意义：天空、海洋、信念，色彩运用效果是：冷静、智
                            <br />
                                &emsp;&nbsp;
                                慧、开阔。
                            <br />
                            </p>
                            <p>
                                <span className="prismatic"></span>

                                主题内容-突出表示标志性地名及警用辖区轮廓清
                            <br />
                            </p>
                        </div>
                        <div className="fr imgBox">
                            <img className="onlinePrintingImg" src={process.env.PUBLIC_URL +"/images/onlinePrinting/chujin.png"} />
                        </div>
                    </div>
                </div>
                <div id="jiaojing_onlinePrinting" style={{background:`url(${process.env.PUBLIC_URL}'/images/onlinePrinting/jiaojing.png') no-repeat`,backgroundSize:"cover"}} >
                    <div className="container">
                        <div className="dataSmallBox fl">
                        </div>
                        <div className="fl">
                            <h3>交警公交分局应用的地图</h3>
                            <p>
                                交通专题地图是普通专题地图中的一种，除了内容广泛、主题多样、强调个性的特点之外，还具有以下特点:
                            </p>
                            <p>
                                <span>
                                    时态性
                                </span>
                                交通数据的观测和统计是按一定的周期重复进行的,同时交通专题地图的使用者之一。
                            </p>
                            <p>
                                <span>
                                    真实性
                                </span>
                                这是交通专题地图很重要的一个特征。交通专题地图内容来源是观
                                测和统计的真是数据，是用于为规划和决策者提供支持和依据的
                                ，
                                其真实性是必须得到保证的。而一般专题地图可以用来表示虛构的主题。这也是交通专题地图不同与一般专题地图的一个重要的特点。
                            </p>
                            <p>
                                <span>
                                    复杂性
                                </span>
                                交通信息涉及到的人文、地理、经济、社会等很多内容
                                ，
                                而交通信
                                息的种类也很繁多，交通专题地图要表达的要素也具有相当的复杂性。
                            </p>
                            <p>
                                <span>
                                    易读性
                                </span>
                                交通专题地图是为了用户提供交通信息的工具
                                ,
                                是作为用户分析、
                                规划、决策的依据，用户通常需要用尽快了解地图表现内容，掌握数据表现的特点和规律，找到研究内容，并分析得到想要的结果，以便做出相应的规划决策。因此，需要把地图设计的简单明了，通俗易懂，方便阅读。
                            </p>
                        </div>
                    </div>
                </div>

                <div id="imgBox_onlinePrinting">
                    <div className="container">
                        <h2>一张通用地图</h2>
                        <p>行政区划图又称“政区地图”。专题性地图。着重反映国家或地区的领域范围或行政区划的状况等。政治性较强。如一国的政区地图，须精确详细地表示出国家的位置、境界线、首都、国家内部的行政区划状况、行政中心所在地以及主要交通线等。行政区划常用色彩区分。政区地图是新编地方志中必备的地图。</p>
                        <div className="imgBox_onlinePrinting_child">
                        <img className="onlinePrintingImg" src="/images/onlinePrinting/ditu.png" />
                        </div>
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
