import React from "react";
import logo from "../assets/images/Group22540.png";
import "./quanda.scss";
export default function QuandaPage() {
  return (
    <div id="body">
      <div id="header">
        <img src={logo} alt="logo" />
      </div>

      <div id="content">
        <div id="content__left">
          <div id="line__intro"></div>
          <div id="content--intro">
            <p>Bứt phá điểm số cùng </p>
            <p>Gia sư của Akadon</p>
          </div>
          <div id="content--shortdes">
            <p>
              Akadon sẽ giúp tìm kiếm gia phù hợp với bạn nhất. Giúp đạt kết quả
              nhất từng môn học trong quá trình học trực tuyến hay học tại nhà.
            </p>
          </div>
          <button className="button__Regis--red">
            Đăng ký làm học viên akadon
          </button>
        </div>

        <div id="content__right">
          <div id="box__shadow">
            <iframe
              width="844"
              height="671"
              src="https://www.youtube.com/embed/eWzCcn5cbpA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="footer__title--quanda">
          <h2>Ưu đãi cho người dùng Qanda</h2>

          {/* <div>
            <h2>Quanda</h2>
          </div> */}
        </div>
        <div className="footer__title--free">
          <h2>hoàn toàn MIỄN PHÍ </h2>
        </div>
        <button className="button__Regis--blue">Đăng ký ngay để học thử</button>
      </div>
    </div>
  );
}
