import React from 'react';
import './HomeTitle.scss';

export default function HomeTitle() {
  return(
    <div className="home-title-main">
      <div className="home-title-area">
        <div className="service-hall-wrap">
          <div className="service-hall-logo"><a href='###'><img src="https://zos.alipayobjects.com/rmsportal/nOUVKmLtktfaqBu.png" alt="" /></a></div>
          <div className="service-hall-title-wrap">
            <h2 className="service-hall-title"><a href="###">服务大厅</a></h2>
            <p className="toggle"><a href="###">切换到企业版&nbsp;&gt;</a></p>
          </div>
        </div>
        <ul className="home-title-list">
          <li className="home-title-item">
            <span className="diamond"></span>
            <span className="home-text"><a href="###">首页</a></span>
          </li>
          <li className="home-title-item">
            <span className="diamond"></span>
            <span className="home-text"><a href="###">常见问题</a></span>
          </li>
          <li className="home-title-item">
            <span className="diamond"></span>
            <span className="home-text"><a href="###">自助服务</a></span>
          </li>
        </ul>
      </div>
      <div className="ipv6-img">
        <img src={require("../../assets/images/ipv6.png")} alt="" />
      </div>
    </div>
  )
}