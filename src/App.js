import React ,{Component} from 'react';
import { HashRouter, Route, Redirect, Switch, Link, withRouter } from "react-router-dom";
import classNames from "classnames";

import './css/base.scss';

import { DatePicker } from 'antd';
import { Home, Timespaceanalysis, Newmap, Cloudsearch, Onlinemapping, Datavisualization, Onlineprinting, Basicmap } from "./pages"

class App extends Component {
  render() {
    return (
      <Switch> {/*多个路由可能同时被渲染,第一个全等于路径时执行,避免重定向死循环*/}
        <Route path="/home" component={Home}></Route>
        <Route path="/timespaceanalysis" component={Timespaceanalysis}></Route>
        <Route path="/newmap" component={Newmap}></Route>
        <Route path="/cloudsearch" component={Cloudsearch}></Route>
        <Route path="/onlinemapping" component={Onlinemapping}></Route>
        <Route path="/datavisualization" component={Datavisualization}></Route>
        <Route path="/onlineprinting" component={Onlineprinting}></Route>
        <Route path="/basicmap" component={Basicmap}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    );
  }

}
App = withRouter(App);
export default App;