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
                I'm a passionate front-end developer dedicated to crafting seamless digital experiences. With expertise in modern libraries like React and a strong understanding of UI/UX, I transform design concepts into responsive, engaging web applications.
              </p>

              <p>
                Based in Thailand, I'm driven by collaboration and innovation. I specialize in building intuitive user interfaces and maintaining clean, scalable code that makes a real impact.
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

               
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="/images/351758761_688054019796361_4894503948582728856_n.jpg" 
              alt="Photsawee Tantiwattanchaikul" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
