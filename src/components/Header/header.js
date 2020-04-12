import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header>
      <div className="nav-area">
        <ul className="top-nav-wrap">
          <li className="welcome-text">欢迎使用支付宝！</li>
          <li className="top-nav-item">
            <a href="###">登录</a><span className="split">&nbsp;-&nbsp;</span><a href="###">注册</a>
          </li>
          <li className="top-nav-item split">|</li>
          <li className="top-nav-item"><a href="###">我的支付宝</a></li>
          <li className="top-nav-item split">|</li>
          <li className="top-nav-item"><a href="###">安全中心</a></li>
          <li className="top-nav-item split">|</li>
          <li className="top-menu-wrap">
            <a href="###" className="menu-title">服务大厅</a>
            <span className="arrow-icon"></span>
            <ul className="top-menu-list">
              <li className="menu-item-wrap">
                <span className="menu-icon question"></span>
                <a href="###" className="menu-text">常见问题</a>
              </li>
              <li className="menu-item-wrap">
                <span className="menu-icon self-service"></span>
                <a href="###" className="menu-text">自助服务</a>
              </li>
              <li className="menu-item-wrap">
                <span className="menu-icon play"></span>
                <a href="###" className="menu-text">玩转支付宝</a>
              </li>
            </ul>
          </li>
          <li className="top-menu-wrap">
            <span className="classify-icon"></span>
            <ul className="top-menu-list">
              <li className="menu-item-wrap">
                <span className="menu-icon question"></span>
                <a href="###" className="menu-text">常见问题</a>
              </li>
              <li className="menu-item-wrap">
                <span className="menu-icon self-service"></span>
                <a href="###" className="menu-text">自助服务</a>
              </li>
              <li className="menu-item-wrap">
                <span className="menu-icon play"></span>
                <a href="###" className="menu-text">玩转支付宝</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}