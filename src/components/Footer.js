import React from 'react';
import '../styles/Header.css';

const styles = {
  footer: {
    background: 'darkRed',
    fontSize: '20px',
  }
}

function Footer() {

  return (
    <footer style={styles.footer} className="footer text-center fixed-bottom">
      <div className="row row-cols-3">
        <a style={{ color: 'white' }} href="https://github.com/as-janosik">Github</a>
        <a style={{ color: 'white' }} href="www.linkedin.com/in/janosikandrew">LinkedIn</a>
        <a style={{ color: 'white' }} href="https://twitter.com/camper_coder">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
