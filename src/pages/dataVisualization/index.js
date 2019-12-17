import React, { Component } from 'react'
import classNames from "classnames";


import { Headnav, Footintro } from "../../components"
// import dataVisualsmallbox from "./childComps/dataVisualSmallBox"

import "./dataVisualization.scss"


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            dataVisual: [{
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
    changeDataVisualActive= (e)=>{
        const ele = e.target;
        if(ele.tagName==="SPAN"){
            const activeLi = document.getElementsByClassName("dataVisualActive")[0];
            if(activeLi.className){
                activeLi.className = "";
            }
            ele.parentNode.parentNode.className += 'dataVisualActive';
        } 
    }
    render() {
        const { dataVisual } = this.state;
        return (
            <>
                <Headnav />
                <div id="banner_dataVisual">
                    <div className="container">
                        <h2>时空数据可视化</h2>
                        <div className="application">适用平台:<span>Web</span><span>Android</span><span>Web Service</span></div>
                        <p>
                            <i></i>解决海量数据可视化问题<br />
                            <i></i>解决海量数据空间分析、挖掘的问题<br />
                            <i></i>多种配色方案，移动端/PC端统一样式<br />
                        </p>
                        <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/banner.png"} />

                    </div>
                </div>
                <div id="func_dataVisual"  >
                    <div className="container">
                        <h2>基于公安大数据，实现海量数据的高性能实时渲染</h2>
                    </div>
                </div>
                <div id="data_dataVisual" style={{background:"url('../images/datavisual/func.png') no-repeat",backgroundSize:"cover"}}>
                    <div className="container">
                        <ul className="clearfix">
                            <li className="fl">区域划分</li>
                            <li className="fl">热力分布</li>
                            <li className="fl">实时定位</li>
                            <li className="fl">分布流向</li>
                        </ul>
                    </div>
                </div>
                <div id="imgShow_dataVisual">
                    <div className="container">
                        <ul className="clearfix" onClick={this.changeDataVisualActive}>
                            <li className="dataVisualActive" >
                                <div className="tap">
                                    <span>大数据聚类分析</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />
                                </div>
                            </li>
                            <li >
                                <div className="tap" >
                                    <span>大数据热力图服务</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />

                                    
                                </div>
                            </li>
                            <li >
                                <div className="tap">
                                    <span>大数据热点服务</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />

                                    
                                </div>
                            </li>
                            <li >
                                <div className="tap">
                                    <span>轨迹查询与分析服务</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />

                                    
                                </div>
                            </li>
                            <li >
                                <div className="tap">
                                    <span>轨迹流向分析服务</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />

                                    
                                </div>
                            </li>
                            <li >
                                <div className="tap">
                                    <span>OD分析服务</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />

                                    
                                </div>
                            </li>
                            <li >
                                <div className="tap">
                                    <span>邻近分析缓冲区分析</span>
                                </div>
                                <div className="imgBox">
                                    <img className="datavisualImg" src={process.env.PUBLIC_URL + "/images/datavisual/bigData.png"} />

                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footintro />
            </>

        )
    }
}
