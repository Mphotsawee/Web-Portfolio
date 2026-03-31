import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>HELLO My Name is Photsawee Tantiwattanchaikul</h3>

              <p>
                I'm a passionate web developer and designer dedicated to creating beautiful, 
                functional digital experiences. With expertise in modern web technologies and 
                a keen eye for design, I transform ideas into engaging web applications.
              </p>

              <p>
                Sawaddeekub! Based in Thailand, I'm driven by collaboration and innovation. 
                I enjoy bringing together frontend and backend solutions while maintaining 
                clean, maintainable code that makes a real impact.
              </p>

              <div className="about-info">
                <div className="info-item">
                  <span className="info-label">LOCATION</span>
                  <span className="info-value">Chiang Mai, Thailand</span>
                </div>

                <div className="info-item">
                  <span className="info-label">CURRENTLY</span>
                  <span className="info-value">Open for Collaboration</span>
                </div>

                <div className="info-item">
                  <span className="info-label">TIMEZONE</span>
                  <span className="info-value">GMT+7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="351758761_688054019796361_4894503948582728856_n.jpg" 
              alt="Photsawee Tantiwattanchaikul" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
