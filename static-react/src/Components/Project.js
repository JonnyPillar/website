import React from 'react';
import Content from './Content';

class Project extends React.Component {
  render() {
    if (!this.props.data) return null;

    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <img
          src={this.props.data.logo.fields.file.url}
          lt={this.props.data.logo.fields.title}
          width={200}
          height={200}
        />
        <Content data={this.props.data} />
      </div>
    );
  }
}

export default Project;
