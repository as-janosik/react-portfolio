import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles={
  heading: {
    background: 'darkRed',
    fontSize: '100px',
}}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.heading} className="header">
      <h1>Welcome To my Portfolio</h1>
      <h4>Andrew Janosik</h4>
    </header>
  );
}

export default Header;
