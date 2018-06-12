import React from 'react';
import Helmet from 'react-helmet';

class Page extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title={this.props.title + ' - Jonny Pillar'} />
        <div className={this.props.page}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Page;
