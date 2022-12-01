import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles={
  footer: {
    background: 'darkRed',
    fontSize: '20px',
}}

function Footer() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <footer style={styles.footer} className="footer text-center fixed-bottom">
      <div className="row row-cols-3">
      <a style={{color: 'white'}}href="https://github.com/as-janosik">Github</a>
      <a style={{color: 'white'}}href="www.linkedin.com/in/janosikandrew">LinkedIn</a>
      <a style={{color: 'white'}}href="https://twitter.com/camper_coder">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
