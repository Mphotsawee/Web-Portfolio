import React, { useState } from 'react'

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(0)

  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: '💻',
      skills: [
        'React & Next.js',
        'Astro',
        'Vite',
        'Tailwind CSS',
        'TypeScript',
        'HTML/CSS/JS',
        'Responsive UI',
        'Component Design'
      ],
      description: 'Building clean, responsive, and user-friendly web interfaces with modern frameworks and best practices.'
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>

        <p className="section-subtitle">Expertise across multiple domains of web development</p>

        <div className="skills-content">
          <div className="skills-tabs">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`skill-tab ${activeSkill === index ? 'active' : ''}`}
                onClick={() => setActiveSkill(index)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="skill-details">
            <div className="detail-header">
              <span className="detail-number">
                {String(activeSkill + 1).padStart(2, '0')} / {String(skillCategories.length).padStart(2, '0')}
              </span>
              <h3>{skillCategories[activeSkill].title}</h3>
            </div>

            <p className="skill-description">
              {skillCategories[activeSkill].description}
            </p>

            <div className="skills-grid">
              {skillCategories[activeSkill].skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-dot">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
