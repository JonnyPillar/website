import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

class ProjectThumbItem extends React.Component {
  render() {
    if (!this.props.project) return null;

    const project = this.props.project;

    return (
      <Link key={project.sys.id} to={'/projects/' + project.fields.slug} className="projectThumb">
        <div className="projectThumbImage">
          <Image item={project.fields.logo} />
        </div>
        <div className="projectThumbContent">
          <div className="projectThumbTitle">
            <h3>{project.fields.title}</h3>
          </div>
          <div className="projectThumbDescription">
            {project.fields.shortContent}
          </div>
        </div>
      </Link>
    );
  }
}

export default ProjectThumbItem;
