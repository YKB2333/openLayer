import React, { Component } from 'react'
import {withRouter} from "react-router-dom";

import "./headNav.scss"


class index extends Component {
    constructor(){
        super()
    }
    jump=(url) =>{
        this.props.history.push(url);
    }
    open=(url) =>{
        window.open(url);
    }
    render() {
        return (
            <>
                <div id="head">
                    <div id="logo"></div>
                    <div id="Ytitle" onClick={this.jump.bind(this,'/home')}>时空云开放平台</div>
                    <ul id="Ynav" className="clearfix">
                        <li className="fl">产品介绍
                            <i className="triangle"></i>
                            <ol>
                                <dl onClick={this.jump.bind(this,'/timespaceanalysis')}>时空分析</dl>
                                <dl onClick={this.jump.bind(this,'/newmap')}>地图</dl>
                                <dl onClick={this.jump.bind(this,'/cloudsearch')}>时空云搜</dl>
                                <dl onClick={this.jump.bind(this,'/datavisualization')}>数据可视化</dl>
                                <dl onClick={this.jump.bind(this,'/onlineprinting')}>在线制图</dl>
                            </ol>
                        </li>
                        <li className="fl" >开发支持</li>
                        <li className="fl" onClick={this.jump.bind(this,'/basicmap')}>开发组件</li>
                        <li className="fl"  onClick={this.open.bind(this,'http://68.32.183.186:9080/EzPoiSearchS/index.jsp')}>服务接口</li>
                    </ul>
                    <button id="loginBtn" className="fr">登录</button>
                </div>
                
            </>
        )
    }
}

export default withRouter(index)
