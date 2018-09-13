import * as React from "react";
import { inject, observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { Layout, Button } from "antd";
const { Content } = Layout;

import "antd/dist/antd.css";
import "./app.style.scss";
import AppState from "./AppState";

@inject("appState")
@observer
class App extends React.Component<{ appState?: AppState }> {
  private increment(type: "UP" | "DOWN") {
    const currentNum: number = this.props.appState.num;
    const setNum = (num: Number) => this.props.appState.setNum(num);
    if (type === "UP") {
      setNum(currentNum + 1);
    } if (type === "DOWN") {
      setNum(currentNum - 1);
    }
  }

  public render() {
    return (
      <Layout className="layout">
        <DevTools />
        <Content className="content" style={{ padding: "50px" }}>  
          <h1>
            Number: {this.props.appState.num}            
          </h1>
          <Button shape="circle" icon="minus" className="circle-btn" onClick={() => this.increment("DOWN")}/>
          <Button shape="circle" icon="plus" className="circle-btn" onClick={() => this.increment("UP")}/>
        </Content>
      </Layout>
    );
  }
}

export default App;
