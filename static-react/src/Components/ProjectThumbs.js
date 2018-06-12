import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

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
    var coverPhotoUrl = project.fields.logo.fields.file.url;

    return (
      <Link key={project.sys.id} to="/projects" className="projectThumb">
        <div className="projectThumbImage">
          <LazyLoad height={200} offset={50}>
            <img src={coverPhotoUrl}  />
          </LazyLoad>
        </div>
        <div className="projectThumbTitle">
          <h3>{project.fields.title}</h3>
        </div>
        <div className="projectThumbContent">
          {project.fields.shortContent}
        </div>
      </Link>
    );
  }
}

export default ProjectsThumbs;
