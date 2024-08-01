import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./blog.css";
function Blog() {
    return (
        <div className="blog" style={{ width: "60vw", background: "green" }}>
            <div className="sidebar">
                <ul>
                    <Link
                        to={"/danh-sach-bai-viet"}
                        className="link-page-sidebar"
                    >
                        <li>Danh sách bài viết</li>
                    </Link>
                    <Link to={"/them-bai-viet"} className="link-page-sidebar">
                        <li>Thêm bài viết</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Blog;
