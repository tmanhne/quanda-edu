import React from "react";
import "./smallTemple.scss";
import logo from "../assets/images/logoQanda.png";
import logohiden from "../assets/images/logohiden.png";
import address from "../assets/icons/address.svg";
import email from "../assets/icons/email.svg";
import mphone from "../assets/icons/phoneNum.svg";
import hastagqanda from '../assets/images/hastagQanda.png';

// import footerheader from "../assets/images/bottom_header.png";
export default function smalltemple() {
  return (
    <div className="small-temple">
      <div className="small-temple__header-mail">
        <div className="logo-qanda">
          <img src={logo} alt="logo"></img>
        </div>
        {/* <div className="footer-header">
          <img src={footerheader} alt="footerheader" width="993px" height ="75px"></img>
        </div> */}
      </div>

      <div className="line-footer"></div>
      <div className="small-temple__main-content">
        <div className="main-title">
          <p>Hệ thống đã nhận yêu cầu nâng cấp tài khoản.</p>
        </div>
        <div className="main-content">
          <p>Tài khoản của bạn hiện đang được admin kiểm duyệt.</p>
          <p>
            Vui lòng đợi, quá trình kiểm duyệt có thể kéo dài 1 đến 2 ngày làm
            việc.
          </p>
          <p>Xin cảm ơn!</p>
        </div>
        <div className="main-line"></div>
        <div className="main-footer-title">
          <p>Tin nhắn này đã được gửi cho bạn bởi Akadon</p>
        </div>
        <div className="main-logo">
          <img src={logohiden} alt="logohiden"></img>
        </div>
      </div>
      <div className="small-temple__footer">
        <div className="button--websiteAka">
          <button>Truy cập website Akadon</button>
        </div>
        <div>
          <img src={hastagqanda} alt="hastagqanda"></img>
        </div>
        <div className="contact">
          <div className="address">
            <img src={address} alt="address"></img>
            <p> Số 26 Lê Trọng Tấn, Khương Mai, Thanh Xuân, Hà Nội</p>
          </div>
          <div className="email">
            <img src={email} alt="email"></img>
            <p> contact@akadon.com.vn</p>
          </div>
          <div className="phone">
            <img src={mphone} alt="mphone"></img>
            <p> 085 883 6632</p>
          </div>
        </div>
      </div>
    </div>
  );
}
