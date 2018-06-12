import React from 'react';
import { parseMarkup } from '../Helpers/Contentful';

class Markup extends React.Component {
  render() {
    if (!this.props.content) return null;

    const content = parseMarkup(this.props.content);

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Markup;
