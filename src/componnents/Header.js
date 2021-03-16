import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div className="header-wraper">
          <div className="main-info">
              <canvas></canvas>
              <h1>"สวัสดี..ครับ" ผมชื่อนายสิริพัชร์ โคตรศรี</h1>
              <Typed
                className="typed-text"
                strings={["Web Design","Web Development","Server Admin","Unity3D"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              <a href="" className="btn-main-offer">ติดต่อผมได้ที่</a>
          </div>
      </div>
    )
}

export default Header
