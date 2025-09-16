import React, { useState } from 'react';
import '../Components/User.css';

const User = () => {




  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };



  

  return (
<div className="left_container">
        <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="search-container">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>

      <ul className="menu">
        <li>
          <i className="icon"><i class="fa-solid fa-house"></i></i>
          Dashboard
        </li>
        <li>
          <i className="icon"><i class="fa-solid fa-graduation-cap"></i></i>
          College
        </li>
        <li>
          <i className="icon">
            <i class="fa-solid fa-user-tie"></i></i>
          Students
        </li>
      </ul>

      <div className="dark-mode-toggle">
        <span>Dark Mode</span>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
</div>
  );
};

export default User;
