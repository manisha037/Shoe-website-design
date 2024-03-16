import React from 'react';

const Navigation = () => {
  return (
    
    <nav className="navbar">
      <div className="logo" style={{ marginLeft: '80px', marginTop: '30px'}}>
        <img src="/images/brand_logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="primary-btn" style={{ marginRight: '80px', marginTop: '30px'}} >Login</button>
    </nav>
  );
};

export default Navigation;
