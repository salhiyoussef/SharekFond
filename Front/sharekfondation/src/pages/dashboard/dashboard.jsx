import React, { useState } from "react";
import { Row, Col, Card, Skeleton, List, Avatar } from "antd";
import "./style.css"
import Header from "../../components/header/header-top" 
import "../../style/style.css"
import Vesionne from "../../assets/img/visionnement.PNG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'
export default function Dashboard() {
  const [loading, setLoading] = useState(false)
  const [replay, setReplay] = useState(1)
  setTimeout(() => {
    setLoading(true)
  }, 5000)
  const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    speed: 500,
    centerMode: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const settings1 = {
    dots: false,
    infinite: true,
    // fade: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const clickReplay = () => {

  }
  return (
    <div>
      <div className="banner">
        <div className="banner_background">
            <div className="banner__centent">
              <h2>شارك.. دليلك لفعل الخير</h2>
              <p>مؤسسة خيرية تعمل على تعزيز مكانة العمل التطوعي المنظم من أجل خدمة المجتمع لتحقيق التنمية المستدامة</p>
              <Link to="/contact">انضم إلينا</Link>
            </div>
        </div>
        <iframe className="embed-responsive-item" id="ytplayer" type="text/html" width="80%" height="100%" src="https://www.youtube-nocookie.com/embed/obF81WAHARA?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&mute=1&iv_load_policy=3&playlist=obF81WAHARA"
          frameBorder="0" allowFullScreen>
        </iframe>
      </div>
      <div className="body_content">
        <div className="All_Content">
          <Row gutter={24} style={{ marginTop: "40px" }}>
            <div
              className="projects_fondation"
              style={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column"
              }}
            >
              <h3>مشاريع المؤسسة</h3>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "unset",
                  width: "35%"
                }}
              >
                مشاريع متنوعة ومتكاملة نسعى من خلالها إلى ربط جسور التعاون والتنمية
                مع المناطق المحتاجة
            </p>
            </div>
            <Slider {...settings}>
              <Col xs={6}>
                {loading ? <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFondationSharek%2Fvideos%2F118011866276175%2F&width=320&height=200"
                  width="320"
                  height="200"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "5px"
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  data-autoplay="false"
                  allowFullScreen={true}
                ></iframe> :
                  <Skeleton active avatar>
                    <List.Item.Meta
                      avatar={<Avatar />}
                    />
                  </Skeleton>}
              </Col>
              <Col xs={6}>
                {loading ? <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFondationSharek%2Fvideos%2F809892856139729%2F&width=320&height=200"
                  width="320"
                  height="200"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "5px"
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  data-autoplay="true"
                  allowFullScreen={true}
                ></iframe> :
                  <Skeleton active avatar>
                    <List.Item.Meta
                      avatar={<Avatar />}
                    />
                  </Skeleton>}
              </Col>
              <Col xs={6} >
                {loading ? <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFondationSharek%2Fvideos%2F551644222073799%2F&width=320&height=200"
                  width="320"
                  height="200"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "5px"
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  allowFullScreen={true}
                ></iframe> :
                  <Skeleton active avatar>
                    <List.Item.Meta
                      avatar={<Avatar />}
                    />
                  </Skeleton>}
              </Col>
              <Col xs={6} >
                {loading ? <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFondationSharek%2Fvideos%2F257569921856519%2F&width=320&height=200"
                  width="320"
                  height="200"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "5px"
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  allowFullScreen={true}
                ></iframe> :
                  <Skeleton active avatar>
                    <List.Item.Meta
                      avatar={<Avatar />}
                    />
                  </Skeleton>}
              </Col>
              <Col xs={6} >
                {loading ? <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFondationSharek%2Fvideos%2F257569921856519%2F&width=320&height=200"
                  width="320"
                  height="200"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "5px"
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  allowFullScreen={true}
                ></iframe> :
                  <Skeleton active avatar>
                    <List.Item.Meta
                      avatar={<Avatar />}
                    />
                  </Skeleton>}
              </Col>
            </Slider>
          </Row>
          <Row gutter={24} style={{ marginTop: "40px" }}>
            <div
              className="projects_fondation"
              style={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column"
              }}
            >
              <h3>أهداف المؤسسة</h3>
            </div>
            <Col xs={4}>
              <Card
                // title={<FontAwesomeIcon icon={faVnv}/>}
                bordered={false}
                style={{ textAlign: "center" }}
              >
                أن نكون مؤسسة نموذجية رائدة في العمل التطوعي والتنموي
            </Card>
            </Col>
            <Col xs={4}>
              <Card
                // title={<FontAwesomeIcon icon={faVnv}/>}
                bordered={false}
                style={{ textAlign: "center" }}
              >
                أن نكون مؤسسة نموذجية رائدة في العمل التطوعي والتنموي
            </Card>
            </Col>
            <Col xs={4}>
              <Card
                // title={<FontAwesomeIcon icon={faVnv}/>}
                bordered={false}
                style={{ textAlign: "center" }}
              >
                أن نكون مؤسسة نموذجية رائدة في العمل التطوعي والتنموي
            </Card>
            </Col>
            <Col xs={4}>
              <Card
                // title={<FontAwesomeIcon icon={faVnv}/>}
                bordered={false}
                style={{ textAlign: "center" }}
              >
                أن نكون مؤسسة نموذجية رائدة في العمل التطوعي والتنموي
            </Card>
            </Col>
          </Row>
          <Row className="visionnement" gutter={24} style={{ marginTop: "40px" }}>
            <Col xs={6}>
              <Card
                title={<div><FontAwesomeIcon icon={faEye} /><h2>رؤيتنا</h2></div>}
                bordered={false}
                style={{ textAlign: "center" }}
              >
                أن نكون مؤسسة نموذجية رائدة في العمل التطوعي والتنموي
              </Card>
            </Col>
            <Col xs={6}>
              <Row className="Nos_valeurs" gutter={24} >
                <Col xs={24}>
                  قيمنا
              </Col>
              </Row>
              <Row gutter={24} className="valeurs_slider" >
                <Slider {...settings1}>
                  <Col xs={24}>
                    <Card
                      title={<div><FontAwesomeIcon icon={faEye} /><h2>تميز</h2></div>}
                      bordered={false}
                      style={{ textAlign: "center", marginTop: "30px" }}
                    >
                      نبدع في خدمة الآخرين
                  </Card>
                  </Col>
                  <Col xs={24}>
                    <Card
                      title={<div><FontAwesomeIcon icon={faEye} /><h2>فعالية</h2></div>}
                      bordered={false}
                      style={{ textAlign: "center", marginTop: "30px" }}
                    >
                      الإخلاص في العمل لبلوغ مرتبة الإحسان
                  </Card>
                  </Col>
                  <Col xs={24}>
                    <Card
                      title={<div><FontAwesomeIcon icon={faEye} /><h2>شفافية</h2></div>}
                      bordered={false}
                      style={{ textAlign: "center", marginTop: "30px" }}
                    >
                      لبناء جسور الثقة والتعاون مع الجميع
                  </Card>
                  </Col>
                </Slider>
              </Row>
            </Col>
            <Col xs={6}>
              <Card
                title={<div><FontAwesomeIcon icon={faBullseye} /><h2>رسالتنا</h2></div>}
                bordered={false}
                style={{ textAlign: "center" }}
              >
                هي تعزيز مكانة العمل التطوعي المنظم من أجل خدمة المجتمع وتحقيق التنمية المستدامة
            </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

/* import React, { useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { Switch, Modal } from 'antd' */

/* export default function Dashboard() {
    const [checked, setChecked] = useState(false)
    const data = {
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [
                {
                    label: "Paiements",
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [4, 5, 21, 2, 12, 4, 2]
                },
                {
                    label: "Elèves",
                    backgroundColor: "rgba(0, 255, 255, 0.75)",
                    data: [6, 8, 30, 10, 20, 6, 2]
                }
            ]
        }
    }
    const handleClick = () => {
        if (!checked) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    }
    return (
        <div style={{ position: "absolute", width: 1500, height: 600 }}>
            <Switch checkedChildren="Line" unCheckedChildren="Bar" onClick={handleClick} checked={checked} />
            {
                (checked) ? <Line options={{responsive: true}}data={data.data}/> : 
                            <Bar options={{responsive: true}}data={data.data}/>
            }

        </div>
    )
}
 */