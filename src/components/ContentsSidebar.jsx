import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { lessons } from '../data/lessons'

// Group lessons by strand, then by sub-strand
function getContentsStructure() {
  const structure = {}
  lessons.forEach((lesson, index) => {
    if (!structure[lesson.strand]) {
      structure[lesson.strand] = {}
    }
    if (!structure[lesson.strand][lesson.subStrand]) {
      structure[lesson.strand][lesson.subStrand] = []
    }
    structure[lesson.strand][lesson.subStrand].push({ ...lesson, order: index + 1 })
  })
  return structure
}

function ContentsSidebar() {
  const { lessonId } = useParams()
  const [expandedStrands, setExpandedStrands] = useState({})
  const [expandedSubStrands, setExpandedSubStrands] = useState({})
  const contents = getContentsStructure()

  const toggleStrand = (strand) => {
    setExpandedStrands((prev) => ({ ...prev, [strand]: !prev[strand] }))
  }

  const toggleSubStrand = (strand, subStrand) => {
    const key = `${strand}-${subStrand}`
    setExpandedSubStrands((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const strandKeys = Object.keys(contents)

  return (
    <aside className="contents-sidebar">
      <div className="contents-header">
        <h2 className="contents-title">Contents</h2>
      </div>

      <nav className="contents-nav">
        {strandKeys.map((strand, strandIndex) => {
          const subStrands = contents[strand]
          const subStrandKeys = Object.keys(subStrands)
          const isStrandExpanded = expandedStrands[strand] ?? (strandIndex === 0)

          return (
            <div key={strand} className="contents-section">
              <button
                className="contents-strand"
                onClick={() => toggleStrand(strand)}
                aria-expanded={isStrandExpanded}
              >
                <span className="contents-chevron">{isStrandExpanded ? '▼' : '▶'}</span>
                <span>{strandIndex + 1} {strand}</span>
              </button>

              {isStrandExpanded && (
                <div className="contents-subsection">
                  {subStrandKeys.map((subStrand) => {
                    const items = subStrands[subStrand]
                    const key = `${strand}-${subStrand}`
                    const isSubExpanded = expandedSubStrands[key] ?? true

                    return (
                      <div key={key} className="contents-subsection-group">
                        <button
                          className="contents-substrand"
                          onClick={() => toggleSubStrand(strand, subStrand)}
                          aria-expanded={isSubExpanded}
                        >
                          <span className="contents-chevron">{isSubExpanded ? '▼' : '▶'}</span>
                          <span>{strandIndex + 1}.{subStrandKeys.indexOf(subStrand) + 1} {subStrand}</span>
                        </button>

                        {isSubExpanded && (
                          <ul className="contents-lessons">
                            {items.map((lesson) => (
                              <li key={lesson.id}>
                                <Link
                                  to={`/lesson/${lesson.id}`}
                                  className={`contents-lesson-link ${lessonId === lesson.id ? 'active' : ''}`}
                                >
                                  {lesson.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default ContentsSidebar
