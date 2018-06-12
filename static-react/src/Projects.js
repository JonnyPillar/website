import React from 'react';
import { createClient } from 'contentful';
import ProjectsThumbs from './Components/ProjectThumbs';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({
        'content_type': 'project'
      })
      .then(response => {
        this.setState({
          projects: response.items
        });
      });
  }

  render() {
    return (
      <React.Fragment >
        <div className="container">
          <h1>Projects</h1>
          <p>These are a few samples of some of my work from the past year.</p>
          <ProjectsThumbs projects={this.state.projects} />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
