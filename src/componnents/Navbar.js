import React from "react";
import Logo from "../logo.png";

/********** นำเข้า FontAwesome ****************/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
            <a href="#" className="navbar-brand">
                <img className="logo" src={Logo} alt=""/>
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">หน้าแรก <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#xx">ประวัติส่วนตัว</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link" href="#">สกิลความสามารถ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ผลงาน</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ติดต่อ</a>
                </li>       
            </ul>       
        </div>
    </div>
    </nav>
    )
}

export default Navbar
