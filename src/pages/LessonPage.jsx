import { useParams, Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { useRef } from 'react'
import html2pdf from 'html2pdf.js'

function LessonPage() {
  const { lessonId } = useParams()
  const contentRef = useRef(null)

  const lesson = lessons.find((l) => l.id === lessonId)

  if (!lesson) {
    return (
      <div className="container">
        <p>Lesson not found.</p>
        <Link to="/">← Back to all lessons</Link>
      </div>
    )
  }

  const LessonComponent = lesson.component

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    const element = contentRef.current
    const opt = {
      margin: 10,
      filename: `Grade10-${lesson.id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }
    html2pdf().set(opt).from(element).save()
  }

  const handleShare = async () => {
    const shareData = {
      title: `Grade 10 Mathematics: ${lesson.title}`,
      text: `Check out this lesson plan: ${lesson.title}`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log('Share cancelled or failed')
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      } catch (err) {
        alert('Unable to share. Please copy the URL manually.')
      }
    }
  }

  return (
    <>
      <div className="action-buttons">
        <Link to="/" className="action-btn back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          All Lessons
        </Link>
        <button className="action-btn share-btn" onClick={handleShare}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share
        </button>
        <button className="action-btn pdf-btn" onClick={handleDownloadPDF}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </button>
        <button className="action-btn print-btn" onClick={handlePrint}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Print
        </button>
      </div>

      <div className="container" ref={contentRef}>
        <header className="header">
          <h1>Grade 10 Mathematics</h1>
          <p className="subtitle">{lesson.title}</p>
        </header>

        <LessonComponent />
      </div>
    </>
  )
}

export default LessonPage
