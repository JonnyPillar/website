import React from 'react';
import LazyLoad from 'react-lazyload';

class Image extends React.Component {
  static defaultProps = {
    height: 200,
    offset: 50
  }

  render() {
    const imageUrl = this.props.item.fields.file.url + '?h=' + this.props.height;

    return (
      <LazyLoad height={this.props.height} offset={this.props.offset}>
        <img src={imageUrl} style={{
          display: 'block',
          maxWidth:'100%',
          maxHeight: this.props.height,
          width: 'auto',
          height: 'auto'
        }}/>
      </LazyLoad>
    );
  }
}

export default Image;
