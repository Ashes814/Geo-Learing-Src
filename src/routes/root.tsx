import { Outlet, NavLink } from "react-router-dom";
import React from "react";

export default function root() {
  return (
    <div>
      <div className="sidebar">
        <div className="search-bar">
          <form className="search-form">
            <input type="text" placeholder="Type To Search"></input>
            <button className="form-btn"></button>
          </form>
        </div>
        <div className="contents">
          {/* <Content1 />
          <Content2 />
          <Content3 />
          <Content4 />
          <Content5 /> */}
        </div>
        <div className="footer">
          <i className="footer-icon">icon</i>
          <h2 className="footer-head">欧欧找东西</h2>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-head">
          <i className="gallery-icon">icon</i>
          <h2 className="gallery-head__text">综合平台</h2>
        </div>

        <div className="gallery-details">
          <ul>
            <li className="gallery-item">
              <a href="https://www.baidu.com">
                <i>items-icon</i>

                <div className="gallery-item__content">
                  <h3>百度首页</h3>
                  <p>一个搜索引擎</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
