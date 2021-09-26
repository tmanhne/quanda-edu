import "./mailQD.scss";
import React from "react";
import logo from "../assets/images/AkadonRevol.png";
// import footer from "../assets/images/footerEmail.png";
import botposter from "../assets/images/botposter.png";
import people from "../assets/images/people01.png";
import hand from "../assets/images/hand02.png";
import conect from "../assets/images/conect03.png";
import shakehand from "../assets/images/shakehand04.png";
import wifi from "../assets/images/wifi05.png";
import pay from "../assets/images/pay06.png";
import address from "../assets/icons/address.svg";
import email from "../assets/icons/email.svg";
import mphone from "../assets/icons/phoneNum.svg";
import stt1 from "../assets/images/01.png";
import stt2 from "../assets/images/02.png";
import stt3 from "../assets/images/03.png";
import stt4 from "../assets/images/04.png";
import stt5 from "../assets/images/05.png";
import stt6 from "../assets/images/06.png";

export default function MailQuanda() {
  return (
    <div className="mail-qanda">
      <div className="mail-qanda__top-content">
        <div className="logo-qanda">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="top__intro">
          <p>Chào Mừng bạn đến với AKADON! </p>
        </div>
        <div className="top--content">
          <p>
            AKADON là website kết nối Gia sư với Học viên nhanh chóng, tiện lợi
            và MIỄN PHÍ
          </p>
        </div>
      </div>

      <div className="mail-qanda__main-content">
        <div>
          <p className="bot--title">
            Akadon xin trân trọng thông báo chính thức ra mắt website từ ngày
          </p>
          <p className="bot--date">16/05/2021</p>
          <p className="bot--content">
            Cảm ơn bạn đã đăng ký quan tâm tới dịch vụ của chúng tôi. Akadon sẽ
            cập nhật thông tin mới nhất cho bạn hàng tuần.
          </p>
        </div>
        <div className="bot--poster">
          <img src={botposter} alt="botposter"></img>
        </div>
        <div className="bot__intro">
          <h1 className="bot__intro--orange">
            Tìm và học cùng gia sư, chỉ với 6 bước đơn giản
          </h1>
        </div>
        <div className="flex-container">
          <div className="item">
            <img className="pict" src={stt1} alt="stt1"></img>
            <h3>Yêu Cầu</h3>
            <p className="ct01">
              Học viên đăng yêu cầu tìm kiếm gia sư trên website
            </p>
            <a href="url">akadon.edu.vn</a>
            <img className="pic" src={people} alt="people"></img>
          </div>
          <div className="item">
            <img className="pict" src={stt2} alt="stt2"></img>
            <h3>Chọn lựa</h3>
            <p>Học viên lựa chọn gia sư phù hợp từ những người đăng ký dạy</p>
            <div className="pic">
              <img className="pichand" src={hand} alt="hand"></img>
            </div>
          </div>
          <div className="item">
            <img className="pict" src={stt3} alt="stt3"></img>
            <h3>Học thử</h3>
            <p>Hai bên học thử để làm quen và đánh giá độ phù hợp</p>
            <div className="pic">
              <img className="pic--connect" src={conect} alt="conect"></img>
            </div>
          </div>
          <div className="item">
            <img className="pict" src={stt4} alt="stt4"></img>
            <h3>Thống nhất</h3>
            <p>
              Học viên và Gia sư đồng ý về Nội dung khóa học và thành lập Hợp
              đồng dạy học online
            </p>
            <div className="pic">
              <img className="pic--shake" src={shakehand} alt="shakehand"></img>
            </div>
          </div>
          <div className="item">
            <img className="pict" src={stt5} alt="stt5"></img>
            <h3>Bắt đầu học tập</h3>
            <p>
              Học viên và Gia sư có thể tùy chọn học offline tại nhà, hoặc học
              online ngay trên website của AKADON
            </p>
            <div className="pic">
              <img className="pic--wifi" src={wifi} alt="wifi"></img>
            </div>
          </div>
          <div className="item">
            <img className="pict" src={stt6} alt="stt6"></img>
            <h3>Thanh toán</h3>
            <p>Học viên thanh toán cho Gia sư sau mỗi buổi học </p>
            <div className="pic">
              <img className="pic--payment" src={pay} alt="pay"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="mail-qanda__footer">
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
