import React from 'react';
import SEO from './Seo.js';

class Page extends React.Component {
  render() {
    return (
      <div className="container">
        <SEO {...this.props} />
        <div className={this.props.page}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Page;
