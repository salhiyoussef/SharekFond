import React from 'react'
import "../../style/style.css";
import "../../style/header.css";
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'
import Logo from './logos'
import AuthLayoutRouter from "../../layouts/authLayout";
import Search from './search'
/* import HeaderApp from '../../layouts/authLayout/Header/Header';*/
function headerTop() {
    return (
        <div className="header">
            <div className="container_header">
                <Row gutter={24} className="side_content_row">
                    <Col className="center_content" xs={3}> 
                    </Col>
                    <Col className="center_content" xs={5}>
                        <Search/>
                    </Col>
                    <Col className="center_content" xs={12}>
                            <ul style={{
                                justifyContent: "space-evenly",
                                listStyle: "none",
                                margin: "0",
                                padding: "0",
                                display: "flex",
                                flexDirection: "row-reverse"
                            }}
                            >
                                <li className="nav_link"><Link to="/home">الرئيسية</Link></li>
                                <li className="nav_link"><Link to="/about">المؤسسة</Link></li>
                                <li className="nav_link"><Link to="/contact">التواصل</Link></li>
                                <li className="nav_link"><Link to="/user">الإنضمام</Link></li>
                                <li className="nav_link"><Link to="/files">المشاريع</Link></li>
                                <li className="nav_link"><Link to="/login">الإعلام</Link></li>
                                <li className="nav_link"><Link to="/login">التبرع</Link></li>
                                <li className="nav_link"><Link to="/login">الدخول</Link></li>
                            </ul>
                    </Col>
                    <Col className="center_content" xs={2}>
                        <Logo/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default headerTop
