import React from 'react'
import { Button } from 'antd'
import "./main.css"
const Main = () => {
  return (
    <div>
        <div className='main'>
            <div className="hero-section">
                    <h3 className="hero-title">Build better products with customer feedback</h3>
                    <p className="subtitle">Centralize product feedback to uncover insights and make informed product&nbsp;decisions</p>
                    <div className="landing-btns">
                    <Button type="primary" className='hero-bbtn'>Talk to sales</Button>
                    <Button type="primary" className='hero-btn' > Get Started <i className="uil uil-arrow-right"></i></Button>
                    </div> 
            </div>
            <div className="land-video">
                 <div className="land-inner">
                    <span>Here</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main