import React, { useState } from "react";
import "./addblog.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const mdParser = new MarkdownIt();

function AddBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [urlImageBanner, setUrlImageBanner] = useState("");
    const [contentMD, setContentMD] = useState("");
    const [contentHTML, setContentHTML] = useState("");

    function handleEditorChange({ html, text }) {
        setContentMD(text);
        setContentHTML(html);
    }

    async function handleSave() {
        if (
            !title ||
            !description ||
            !urlImageBanner ||
            !contentMD ||
            !contentHTML
        ) {
            toast.error("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        console.log("title:", title);
        console.log("description:", description);
        console.log("urlImageBanner:", urlImageBanner);
        console.log("contentMD:", contentMD);
        console.log("contentHTML:", contentHTML);

        try {
            const response = await axios.post(
                "http://127.0.0.1:3005/blog/create-blog",
                {
                    title,
                    description,
                    urlImageBanner,
                    contentMD,
                    contentHTML,
                }
            );
            console.log("New blog saved:", response.data);
            toast.success("Thêm thành công bài viết.", {
                icon: <FaCheckCircle style={{ color: "green" }} />,
            });
        } catch (error) {
            console.error("Error saving blog:", error);
            toast.error("Có lỗi xảy ra khi lưu bài viết.");
        }
    }

    return (
        <div style={{ width: "60vw", background: "orange" }}>
            <div className="title">
                <h2>Thêm bài viết mới</h2>
            </div>
            <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nhập tiêu đề"
                style={{ width: "40vw", padding: "10px", marginBottom: "20px" }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả"
                style={{ width: "40vw", padding: "10px", marginBottom: "20px" }}
            />
            <input
                value={urlImageBanner}
                onChange={(e) => setUrlImageBanner(e.target.value)}
                placeholder="urlImage Banner"
                style={{ width: "40vw", padding: "10px", marginBottom: "20px" }}
            />
            <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
            <button onClick={handleSave}>Save</button>
            <ToastContainer />
        </div>
    );
}

export default AddBlog;
