import React from 'react';
import { createClient } from 'contentful';
import Project from './Components/Project';

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
    return this.state.projects.map(project => {
      return (
        <Project key={project.fields.slug} data={project.fields}/>
      );
    });
  }
}

export default Projects;
