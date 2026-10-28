import Icon from './Icon'
import { useState } from 'react'
import { categories, filterProjects } from '../data/portfolio'
import LazyImage from './LazyImage'
import Reveal from './Reveal'
import Modal from './Modal'

export default function Projects() {
  const [category, setCategory] = useState('Semua')
  const [preview, setPreview] = useState(null)
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
              <button
                type="button"
                className={`project-art bg-${project.background}`}
                aria-haspopup="dialog"
                aria-label={`Lihat gambar ${project.title}`}
                onClick={() => setPreview(project)}
              >
                <LazyImage
                  as="span"
                  key={project.image}
                  src={project.image}
                  alt={project.imageAlt}
                />
              </button>
            )}
            <div className="project-copy">
              <h3>{project.title}</h3>
              <ul
                className="project-tech-stack"
                aria-label={`Tech stack ${project.title}`}
                role="list"
              >
                {project.techStack.map((technology) => (
                  <li className={`tech-${technology.icon}`} key={technology.icon}>
                    <Icon name={technology.icon} />
                    {technology.label}
                  </li>
                ))}
              </ul>
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
                      Lihat website <span aria-hidden="true"><Icon name="external" /></span>
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
                      <Icon name="github" />
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
      <Modal
        open={preview !== null}
        onClose={() => setPreview(null)}
        title={preview?.title ?? 'Gambar proyek'}
      >
        {preview && (
          <LazyImage
            key={preview.image}
            src={preview.image}
            alt={preview.imageAlt}
          />
        )}
      </Modal>
    </>
  )
}
