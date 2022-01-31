import React from 'react'
import './style.css'
import Banner from "../../assets/img/banner_home1.jpg";

export default function about() {
    return (
        <div >
            <div className="banner_about">
                <div className="container">
                    <img src={Banner} style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    )
}
