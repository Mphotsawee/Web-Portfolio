import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">GREAT PRODUCTS</h2>
        <h3 className="section-subtitle">START WITH GREAT COLLABORATION</h3>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block">
              <h4>LET'S START THE CONVERSATION</h4>

              <div className="contact-details">
                <div className="detail">
                  <span className="detail-label">EMAIL</span>
                  <a href="mailto:photsawee_t@cmu.ac.th" className="detail-link">
                    photsawee_t@cmu.ac.th
                  </a>
                </div>

                <div className="detail">
                  <span className="detail-label">PHONE</span>
                  <a href="tel:+66931199416" className="detail-link">
                    +66 6-3273-6893
                  </a>
                </div>

                <div className="detail">
                  <span className="detail-label">LOCATION</span>
                  <p className="detail-text">Chiang Mai, Thailand</p>
                </div>

                
              </div>

              <div className="social-links">
                <a href="https://github.com/Mphotsawee" target="_blank" rel="noopener noreferrer">
                  GITHUB
                </a>
                <a href="mailto:photsawee_t@cmu.ac.th">
                  EMAIL
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
