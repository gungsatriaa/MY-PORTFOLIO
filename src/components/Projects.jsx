import { useState } from 'react'
import { categories, filterProjects } from '../data/portfolio'
import LazyImage from './LazyImage'
import Reveal from './Reveal'

export default function Projects() {
  const [category, setCategory] = useState('Semua')
  const visibleProjects = filterProjects(category)

  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter proyek"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              className="filter-button"
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="result-count" role="status">
          {visibleProjects.length} proyek dan inisiatif ditampilkan
        </p>
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <Reveal as="article" className="project-card" key={project.id}>
            {project.image && (
              <div className={`project-art bg-${project.background}`}>
                <LazyImage
                  key={project.image}
                  src={project.image}
                  alt={project.imageAlt}
                />
              </div>
            )}
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {(project.website || project.github) && (
                <div className="project-actions">
                  {project.website && (
                    <a
                      className="button button-yellow project-link"
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat website <span aria-hidden="true">↗</span>
                      <span className="sr-only">
                        {' '}
                        {project.title} (tab baru)
                      </span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="button project-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.1-3.7s-1.2-.4-4 1.5a13.4 13.4 0 0 0-7 0C5.1.6 3.9 1 3.9 1a5.1 5.1 0 0 0-.1 3.7A5.4 5.4 0 0 0 2.3 8.5c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22" />
                      </svg>
                      GitHub
                      <span className="sr-only">
                        {' '}
                        {project.title} (tab baru)
                      </span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
