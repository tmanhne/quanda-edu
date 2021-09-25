import React from 'react';
import './smallTemple.scss';
import logo from "../assets/images/logoQanda.png";
import address from "../assets/icons/address.svg";
import email from "../assets/icons/email.svg";
import mphone from "../assets/icons/phoneNum.svg";

export default function smalltemple() {
    return (
        <div className="small-temple">
      <div className="small-temple__header-mail">
        <div className="logo-qanda">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
      <div className="small-temple__main-content"></div>
      <div className="small-temple__footer">
        <div className="button--websiteAka">
          <button>Truy cập website Akadon</button>
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
