import React from "react";
import { Layout, Icon, Row, Col } from "antd";


import Notification from './Notification';
import Profile from './Profile';

export default function HeaderApp({ collapsed, setCollapsed }) {
  const { Header } = Layout;
  return (
    <Header style={{padding:0,position:"fixed",top:0 , zIndex:3, width:"20%", background:"none"}}>
      <Row gutter={24}>
       {/*  <Col xs={4}>
          <Icon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={setCollapsed}
          />
        </Col> */}
        <Col xs={20}>
          <Row gutter={24} style={{float: "left", width:"100%"}} >
            <Col xs={4}>
              <Notification />
            </Col>
            <Col xs={18} style={{marginRight: "20px", padding: "0px"}}>
              <Profile />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}
