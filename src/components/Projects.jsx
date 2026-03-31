import React, { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'NinjaLingo',
      category: 'WEB · LANGUAGE PLATFORM',
      description: 'A language learning platform with interactive lessons and progress tracking.',
      image: 'public/images/Screenshot 2569-03-31 at 19.38.23.png'
    },
    {
      id: 2,
      title: 'CMU Share Cycle',
      category: 'WEB · UNIVERSITY PROJECT',
      description: 'A platform for exchanging unused items to give them value within the university.',
      image: 'public/images/Screenshot 2569-03-31 at 19.36.45.png'
    }
  ]

  return (
    <section className="projects" id="works">
      <div className="container">
        <h2 className="section-title">SELECTED WORKS</h2>

        <p className="section-subtitle">Demonstrating end-to-end development and design</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
              </div>

              <h2>{selectedProject.title}</h2>
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-description">{selectedProject.description}</p>

              <button className="btn btn-primary">VIEW PROJECT</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
