import React from 'react';

class ProjectTechnologies extends React.Component {
  render() {
    if (!this.props.technologies) return null;

    return (
      <ul>
        {this.props.technologies.map(this._technologies)}
      </ul>
    );
  }

    _technologies = (project, i) => {
      return (
        <li key={i}><b>{project}</b></li>
      );
    }
}

export default ProjectTechnologies;
