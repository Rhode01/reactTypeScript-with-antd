import React from 'react'
import { Menu } from 'antd'
const {SubMenu} = Menu
const Navigation = () => {
  return (
    <div>
        <Menu mode="horizontal">
          <SubMenu title={<span className="nav-title">Product</span>} icon={ <i className="uil uil-angle-down"></i>}>
              <Menu.Item key="collect-feedback"><span className="nav-title">Collect Feedback</span></Menu.Item>
              <Menu.Item key="analyze-feedback"><span className="nav-title">Analyze Feedback </span></Menu.Item>
              <Menu.Item key="plan-roadmap"><span className="nav-title">Plan Roadmap</span >  </Menu.Item>
              <Menu.Item key="share-updates"><span className="nav-title">Share Updates </span></Menu.Item>
          </SubMenu>
          <Menu.Item></Menu.Item>
          <Menu.Item key="use-cases"><span className="nav-title">Use Cases </span></Menu.Item>
          <Menu.Item key="idea-management"><span className="nav-title">Idea Management </span></Menu.Item>
          <Menu.Item key="internal-feedback"><span className="nav-title">Internal Feedback </span>  </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navigation