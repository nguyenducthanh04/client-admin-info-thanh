import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
function Header() {
    return (
        <div
            className="header"
            style={{ width: "60vw", height: "50px", background: "green" }}
        >
            <div className="navbar">
                <ul>
                    <li>ThanhNguyen</li>
                    <Link to={"/thong-tin"} className="link-header">
                        <li>Thông Tin</li>
                    </Link>
                    <Link to={"/bai-viet"} className="link-header">
                        <li>Bài Viết</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;
