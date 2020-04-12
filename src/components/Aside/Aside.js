import React from 'react';
import './Aside.scss';

export default function Aside() {
  return(
    <aside className="aside-wrap">
      <a href="###" className="aside-list">
        <div className="icon jubao"></div>
        <div className="text">举报网站</div>
      </a>
      <a href="###" className="aside-list">
        <div className="icon notes"></div>
        <div className="text">快速挂失</div>
      </a>
      <a href="###" className="aside-list">
        <div className="icon customer"></div>
        <div className="text">联系淘宝</div>
      </a>
      <a href="###" className="aside-list">
        <div className="icon associate"></div>
        <div className="text">口碑帮助</div>
      </a>
    </aside>
  )
}