import React from "react";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "../routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ws = new WebSocket("ws://123.207.136.134:9010/ajaxchattest");
  }
  soket = () => {
    // 监听连接上 Websocket 服务端触发事件
    this.ws.onopen = (e) => {
      console.log("连接上 ws 服务端了");
      // ws.send() 给服务端发送数据
      this.ws.send("我是客户端，我接收到你的请求了");
    };

    // 监听 Websocket 服务端传来消息触发事件
    this.ws.onmessage = (msg) => {
      // msg.data 接收服务端传递过来的数据
      console.log("接收服务端发过来的消息: %o", msg.data);
    };

    // 监听 Websocket 服务端连接断开触发事件
    this.ws.onclose = (e) => {
      console.log("ws 连接关闭了");
    };

    // 报错
    this.ws.onerror = (error) => console.log("出错了:", error);
  };
  componentDidMount() {
    this.soket();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.state.counter !== prevProps.state.counter) {
      if (this.ws.onopen) {
        console.log("已连接");
        this.ws.send("halou");
      } else {
        console.log("已断开");
      }
      console.log(
        "全局监听counter==>改变了,",
        prevProps.state.counter,
        "变成",
        this.props.state.counter
      );
    }
    console.log("全局页面触发");
  };

  render() {
    // this.soket();
    return (
      <Router>
        <Switch>
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              render={(props) => <item.component {...props} />}
              // component={item.component}
              exact={item.exact}
            />
          ))}
          <Redirect path="/" to="one" />
        </Switch>
      </Router>
    );
  }
}

export default connect((state) => ({
  state,
}))(App);
