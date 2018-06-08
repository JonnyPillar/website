import React from 'react';
import Helmet from 'react-helmet';
import { parseMarkup } from '../Helpers/Contentful';

class Content extends React.Component {
  render() {
    if (!this.props.data) return null;

    const content = parseMarkup(this.props.data.content);

    return (
      <React.Fragment>
        <Helmet title={this.props.data.title} />
        <h1>{this.props.data.title}</h1>
        {content}
      </React.Fragment>
    );
  }
}

export default Content;
