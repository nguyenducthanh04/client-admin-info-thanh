// src/App.js
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Blog from "./pages/blog";
import AddBlog from "./pages/add-blog";
const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div>
                    <Routes>
                        <Route path="/bai-viet" element={<Blog />} />
                        <Route path="/them-bai-viet" element={<AddBlog />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
