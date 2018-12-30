import React from 'react';
import ProjectThumbItem from './ProjectThumbItem';

class ProjectsThumbs extends React.Component {
  render() {
    if (!this.props.projects) return null;

    return (
      <div className="projectThumbs">
        {this.props.projects.map(this._project)}
      </div>
    );
  }

  _project = (project) => {
    return (
      <ProjectThumbItem key={project.sys.id} project={project} />
    );
  }
}

export default ProjectsThumbs;
