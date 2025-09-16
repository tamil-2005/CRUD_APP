import React from 'react'
import '../Components/Navbar.css'

const Navbar = () => {
  return (
    <div className="left_nav">
            <nav className="navbar">
      <div className="logo-section">
        <span className="logo-text">Go1</span>
        <span className="logo-badge">HR</span>
          <div className="title">Managing</div>
      </div>
    
      <div className="nav-actions">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="today-btn">Today</button>
        <button className="share-btn">Share</button>
        <div className="notification">
          <span className="icon"><i class="fa-solid fa-bell"></i></span>
          <span className="badge">25</span>
        </div>
        <div className="profile">
          <span className="icon"><i class="fa-solid fa-user"></i></span>
          <span className="badge">66</span>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar