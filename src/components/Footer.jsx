import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h4>PORTFOLIO</h4>
            <p>© 2026 All Rights Reserved</p>
            <p className="footer-role">WEB DEVELOPER · UI/UX DESIGNER</p>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <a href="#hero">BACK TO TOP</a>
              <a href="#about">ABOUT</a>
              <a href="#skills">SKILLS</a>
              <a href="#works">WORKS</a>
              <a href="#contact">CONTACT</a>
            </div>

            <p className="footer-time">Last updated: March 2026</p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>✧ Made with passion and creativity ✧</p>
        </div>
      </div>
    </footer>
  )
}
