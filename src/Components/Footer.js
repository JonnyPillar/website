import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <footer>
        <div className="social-panel">
          <div className="social-media-circle">
            <a href="http://www.twitter.com/jonnypillar" rel="noopener noreferrer" target="_blank">
              <div className="social-icon-v2"></div>
            </a>
          </div>
          <div className="social-media-circle">
            <a href="https://www.linkedin.com/in/jonnypillar/" rel="noopener noreferrer" target="_blank">
              <div className="social-icon-v2"></div>
            </a>
          </div>
        </div>
        <div className="footer">
          <div className="footerText">
          Jonny Pillar
          </div>
          <div className="footerText">
          Software Engineer
          </div>
          <div className="footerText">
          hello@jonnypillar.co.uk
          </div>
        </div>
      </footer>
    );
  }
}

export default Header;
