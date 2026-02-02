import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import html2pdf from 'html2pdf.js'
import { useRef, useState } from 'react'

function HomePage() {
  const bookRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadBookPDF = async () => {
    const element = bookRef.current
    if (!element || isGenerating) return

    setIsGenerating(true)

    // Temporarily make visible for PDF capture
    element.style.position = 'fixed'
    element.style.left = '0'
    element.style.top = '0'
    element.style.zIndex = '9999'
    element.style.overflow = 'visible'
    element.style.height = 'auto'

    // Wait for render
    await new Promise(resolve => setTimeout(resolve, 500))

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'Grade-10-Mathematics-Lesson-Plans-Book.pdf',
      image: { type: 'jpeg', quality: 0.95 },
      html2canvas: { 
        scale: 1.5, 
        useCORS: true, 
        logging: false,
        windowWidth: 800,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'], before: '.book-lesson-page' },
    }

    try {
      await html2pdf().set(opt).from(element).save()
    } finally {
      // Hide again after PDF generation
      element.style.position = 'absolute'
      element.style.left = '-9999px'
      element.style.top = '0'
      element.style.zIndex = ''
      element.style.overflow = ''
      element.style.height = ''
      setIsGenerating(false)
    }
  }

  return (
    <div className="home-page">
      <div className="action-buttons">
        <button className="action-btn book-btn" onClick={handleDownloadBookPDF} disabled={isGenerating}>
          {isGenerating ? (
            <>
              <span className="spinner"></span>
              Generating PDF...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              Download Full Book (PDF)
            </>
          )}
        </button>
      </div>

      {isGenerating && (
        <div className="pdf-overlay">
          <div className="pdf-loading-message">
            Generating PDF with {lessons.length} lessons...<br />
            <small>This may take a moment</small>
          </div>
        </div>
      )}

      <div className="home-content">
        <header className="home-header">
          <h1>Grade 10 Mathematics</h1>
          <p className="home-subtitle">Lesson Plans Collection</p>
          <p className="home-description">Interactive lesson plans for Grade 10 Mathematics. Select a lesson below or download the complete book as PDF.</p>
        </header>

        <section className="lessons-grid">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="lesson-card"
            >
              <div className="lesson-card-header">
                <span className="lesson-strand">{lesson.strand}</span>
                <span className="lesson-duration">{lesson.duration}</span>
              </div>
              <h3 className="lesson-card-title">{lesson.title}</h3>
              <p className="lesson-card-substrand">{lesson.subStrand}</p>
              <span className="lesson-card-arrow">View Lesson →</span>
            </Link>
          ))}
        </section>
      </div>

      {/* Hidden book content for PDF export - rendered off-screen */}
      <div
        ref={bookRef}
        className="book-pdf-source"
        aria-hidden="true"
      >
        <div className="book-cover">
          <h1>Grade 10 Mathematics</h1>
          <p className="book-subtitle">Lesson Plans</p>
          <p className="book-page-count">{lessons.length} Lesson{lessons.length !== 1 ? 's' : ''}</p>
        </div>
        {lessons.map((lesson, index) => {
          const LessonComponent = lesson.component
          return (
            <div key={lesson.id} className="book-lesson-page">
              <header className="lesson-page-header">
                <h1>Grade 10 Mathematics</h1>
                <p className="lesson-subtitle">{lesson.title}</p>
                <p className="lesson-number">Lesson {index + 1} of {lessons.length}</p>
              </header>
              <LessonComponent />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
