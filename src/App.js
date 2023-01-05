import React, { useState } from "react";
import { Layout, Menu, Empty, Breadcrumb } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import Api from "./data";
import Home from "./Home";
import Taiwanmap from "./Taiwanmap";
import { ReactComponent as House } from './house-fill.svg';

const App = () => {
  const items = [
    {
      label: <Link to="/"><House /> Home</Link>,
      key: "/"
    },
    {
      label: "當前天氣",
      key: "Test2",
      children: [
        {
          label: <Link to="/Test2/Option">表格</Link>,
          key: "/Test2/Option"
        },
        {
          label: <Link to="/Test2/Option1">地圖</Link>,
          key: "/Test2/Option1"
        },
        {
          label: <Link to="/Test2/Option2">空頁面</Link>,
          key: "/Test2/Option2",
        },
        {
          // label: <Link to="/Test2/Option3">空頁面</Link>,
          label: "空頁面",
          key: "/Test2/Option3",
          disabled: true
        },
      ]
    },
    {
      label: <Link to="/Test3">空頁面</Link>,
      key: "/Test3"
    }
  ];

  const [current, setCurrent] = useState("");
  const onClickk = (e) => {
    // console.log('click', e);
    setCurrent(e.key);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header style={{ color: "#FFF", background: "#FFF" }}>
        <h1 style={{ float: "left", fontWeight: "630", lineHeight: "32px", color: "#000000" }}>React Test Header</h1>
        <Menu 
        theme="light" 
        style={{ float: "right", boxSizing: "content-box", width: "265px", fontWeight: "1000" }} 
        onClick={onClickk} 
        selectedKeys={[current]} 
        mode="horizontal" 
        items={items} 
        />
      </Layout.Header>
      <Layout.Content style={{  padding: "50px" }}>
        <Switch>
          <Route exact path="/">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/"><House /> Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Test2/Option">天氣 - 表格</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Test2/Option1">天氣 - 地圖</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Test2/Option2">空頁面</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/Test3">空頁面</Link></Breadcrumb.Item>
            </Breadcrumb>
            <Home />
          </Route>
          <Route path="/Test2/Option">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/"><House /> Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>當前天氣 - 表格</Breadcrumb.Item>
            </Breadcrumb>
            <Api />
          </Route>
          <Route path="/Test2/Option1">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/"><House /> Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>當前天氣 - 地圖</Breadcrumb.Item>
            </Breadcrumb>
            <Taiwanmap />
          </Route>
          <Route path="/Test2/Option2">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/"><House /> Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>空頁面</Breadcrumb.Item>
            </Breadcrumb>
            <Empty />
          </Route>
          <Route path="/Test2/Option3"><Empty /></Route>
          <Route path="/Test3">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/"><House /> Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>空頁面</Breadcrumb.Item>
            </Breadcrumb>
            <Empty />
          </Route>
        </Switch>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center", background: "#FFF" }}>React Bootstrap antd</Layout.Footer>
    </Layout>
  );
}

export default App;
