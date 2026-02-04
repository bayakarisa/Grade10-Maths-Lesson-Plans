import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { curriculumStructure } from '../data/curriculumStructure'

// Group lessons by strand, then by sub-strand (for strands without hierarchical structure)
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

// Recursive component for hierarchical curriculum structure
function CurriculumNode({ node, depth = 0, path = [], lessonId }) {
  // Start collapsed by default; user can expand as needed
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = node.children && node.children.length > 0
  const isLesson = !!node.lessonId
  const nodeKey = node.code || node.title || path.join('-')

  // Leaf lesson (no children)
  if (isLesson && !hasChildren) {
    return (
      <div className={`contents-curriculum-level contents-level-${depth}`} key={nodeKey}>
        <Link
          to={`/lesson/${node.lessonId}`}
          className={`contents-lesson-link ${lessonId === node.lessonId ? 'active' : ''}`}
        >
          {node.code && <span className="contents-code">{node.code} </span>}
          {node.title}
        </Link>
      </div>
    )
  }

  // Section with children (may also have lessonId - e.g. 1.1.1 with sub-topics)
  if (hasChildren) {
    return (
      <div className={`contents-curriculum-level contents-level-${depth}`} key={nodeKey}>
        {isLesson ? (
          <>
            <Link
              to={`/lesson/${node.lessonId}`}
              className={`contents-lesson-link contents-lesson-with-children ${lessonId === node.lessonId ? 'active' : ''}`}
            >
              {node.code && <span className="contents-code">{node.code} </span>}
              {node.title}
            </Link>
            <div className="contents-children">
              {node.children.map((child, i) => (
                <CurriculumNode
                  key={child.code || child.title || i}
                  node={child}
                  depth={depth + 1}
                  path={[...path, child.code || child.title]}
                  lessonId={lessonId}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <button
              className={depth === 0 ? 'contents-strand' : 'contents-substrand'}
              onClick={() => setIsExpanded((e) => !e)}
              aria-expanded={isExpanded}
            >
              <span className="contents-chevron">{isExpanded ? '▼' : '▶'}</span>
              <span>
                {node.code && <span className="contents-code">{node.code} </span>}
                {node.title}
              </span>
            </button>
            {isExpanded && (
              <div className="contents-children">
                {node.children.map((child, i) => (
                  <CurriculumNode
                    key={child.code || child.title || i}
                    node={child}
                    depth={depth + 1}
                    path={[...path, child.code || child.title]}
                    lessonId={lessonId}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  // Leaf without lessonId (e.g. "Even and Odd Numbers" sub-label)
  return (
    <div className={`contents-curriculum-level contents-level-${depth} contents-sublabel`} key={nodeKey}>
      <span className="contents-sublabel-text">
        {node.code && <span className="contents-code">{node.code} </span>}
        {node.title}
      </span>
    </div>
  )
}

function ContentsSidebar() {
  const { lessonId } = useParams()
  const [expandedStrands, setExpandedStrands] = useState({})
  const [expandedSubStrands, setExpandedSubStrands] = useState({})
  const contents = getContentsStructure()

  // Strands that use hierarchical curriculum structure
  const hierarchicalStrands = curriculumStructure.map((s) => s.title)

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
        {/* Render hierarchical structure for Numbers and Algebra */}
        {curriculumStructure.map((strand, strandIndex) => (
          <div key={strand.code} className="contents-section">
            <CurriculumNode
              node={strand}
              depth={0}
              path={[strand.code]}
              lessonId={lessonId}
            />
          </div>
        ))}

        {/* Render flat structure for other strands */}
        {strandKeys
          .filter((strand) => !hierarchicalStrands.includes(strand))
          .map((strand, flatIndex) => {
            const strandIndex = hierarchicalStrands.length + flatIndex
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
                            <span>
                              {strandIndex + 1}.{subStrandKeys.indexOf(subStrand) + 1} {subStrand}
                            </span>
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
