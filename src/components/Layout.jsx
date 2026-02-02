import { Outlet } from 'react-router-dom'
import ContentsSidebar from './ContentsSidebar'

function Layout() {
  return (
    <div className="app-layout">
      <ContentsSidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
