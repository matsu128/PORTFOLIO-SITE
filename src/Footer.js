import React from 'react';
import './Footer.css'; // フッターのスタイルを定義したCSSファイルをインポート

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">other link</div>
        <div className="footer-social">
          <a href="https://github.com" className="social-link">GitHub</a>
          <a href="https://linkedin.com" className="social-link">LinkedIn</a>
          <a href="https://twitter.com" className="social-link">Twitter</a>

        </div>
      </div>
      <p className="footer-text">&copy; 2023 Matsu</p>
    </footer>
  );
};

export default Footer;
