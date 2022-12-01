import React from 'react';
import '../styles/Header.css';

const styles = {
  heading: {
    background: 'darkRed',
    fontSize: '100px',
  }
}

function Header() {

  return (
    <header style={styles.heading} className="header">
      <h1>Welcome To my Portfolio</h1>
      <h4>Andrew Janosik</h4>
    </header>
  );
}

export default Header;
