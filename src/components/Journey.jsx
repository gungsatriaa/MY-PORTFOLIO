import Icon from './Icon'
import { useState } from 'react'
import {
  awards,
  certifications,
  education,
  experiences,
  profile,
} from '../data/portfolio'
import Reveal from './Reveal'
import Modal from './Modal'
import LazyImage from './LazyImage'

function PreviewButton({ item, onOpen }) {
  return (
    <button
      type="button"
      className="preview-button"
      aria-haspopup="dialog"
      aria-label={`Lihat dokumentasi ${item.title}`}
      onClick={() => onOpen(item)}
    >
      <Icon name="external" />
    </button>
  )
}

export default function Journey() {
  const [preview, setPreview] = useState(null)

  return (
    <>
      <section
        className="section container journey-section"
        id="perjalanan"
        tabIndex={-1}
        aria-labelledby="journey-title"
      >
        <Reveal className="work-heading">
          <div>
            <p className="section-label">Latar belakang profesional</p>
            <h2 id="journey-title">Pengalaman & pendidikan.</h2>
          </div>
          <p>
            Pengalaman kerja dan pendidikan yang membentuk
            <br />
            pendekatan saya dalam mengembangkan solusi digital.
          </p>
        </Reveal>
        <div className="journey-columns">
          <div>
            <Reveal>
              <h3 className="subheading">Pengalaman</h3>
            </Reveal>
            <ol className="timeline">
              {experiences.map((item) => (
                <Reveal as="li" key={item.organization}>
                  <p className="timeline-period">{item.period}</p>
                  <h4>{item.role}</h4>
                  <p className="organization">{item.organization}</p>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <div>
              <Reveal>
                <h3 className="subheading">Pendidikan</h3>
              </Reveal>
              <div className="education-list">
                {education.map((item) => (
                  <Reveal as="article" key={item.organization}>
                    <p className="timeline-period">{item.period}</p>
                    <h4>{item.organization}</h4>
                    <p>{item.subject}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="skills-block">
              <h3 className="subheading">Keahlian & teknologi</h3>
              <ul className="skill-list">
                {profile.skills.map((skill, index) => (
                  <li key={skill} style={{ '--skill-order': index }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="achievements-section" aria-labelledby="awards-title">
        <div className="container section">
          <Reveal>
            <p className="section-label">
              Kompetisi, beasiswa & pengembangan diri
            </p>
            <h2 id="awards-title">Penghargaan & sertifikasi.</h2>
          </Reveal>
          <div className="award-grid">
            {awards.map((award) => (
              <Reveal className="award" key={award.title}>
                <div className="award-toolbar">
                  <span className="award-icon" aria-hidden="true">
                    <Icon name="asterisk" />
                  </span>
                  <PreviewButton item={award} onOpen={setPreview} />
                </div>
                <h3>{award.title}</h3>
                <p>{award.issuer}</p>
                {award.date && <p className="award-date">{award.date}</p>}
              </Reveal>
            ))}
          </div>
          <details className="certifications">
            <summary>
              Lihat {certifications.length} sertifikasi dan pelatihan{' '}
              <span aria-hidden="true"><Icon name="chevron" /></span>
            </summary>
            <ul>
              {certifications.map((item) => (
                <li key={item.title}>
                  <div className="certificate-heading">
                    <h3>{item.title}</h3>
                    <PreviewButton item={item} onOpen={setPreview} />
                  </div>
                  <p>
                    {item.issuer} · {item.issued}
                    {item.expires && ` · Berlaku hingga ${item.expires}`}
                  </p>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
      <Modal
        open={preview !== null}
        onClose={() => setPreview(null)}
        title={preview?.title ?? 'Dokumentasi pencapaian'}
      >
        {preview && (
          <>
            {preview.image ? (
              <LazyImage
                key={preview.image}
                src={preview.image}
                alt={`Dokumentasi ${preview.title}`}
              />
            ) : (
              <div className="preview-unavailable">
                <span aria-hidden="true"><Icon name="image" /></span>
                <p>Dokumentasi belum tersedia.</p>
              </div>
            )}
            <p className="preview-caption">{preview.issuer}</p>
          </>
        )}
      </Modal>
    </>
  )
}
