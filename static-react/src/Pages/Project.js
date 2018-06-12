import React from 'react';
import { createClient } from 'contentful';
import Page from '../Components/Page';
import Markup from '../Components/Markup';
import Image from '../Components/Image';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({
        'fields.slug': this.props.match.params.id,
        'content_type': 'project'
      })
      .then(response => {
        if (response.items.length > 0){
          this.setState({
            data: response.items[0].fields
          });
        }
      });
  }

  render() {
    if (!this.state.data) return null;

    return (
      <Page page="project" title={this.state.data.title}>
        <div className="jumbotron">
          <h1>{this.state.data.title}</h1>
          <h2>{this.state.data.shortContent}</h2>
        </div>
        <Image item={this.state.data.coverPhoto} />
        <h2>About</h2>
        <Markup content={this.state.data.about} />
        <h2>Challenge</h2>
        <Markup content={this.state.data.challenge} />
        <h2>Result</h2>
        <Markup content={this.state.data.result} />
      </Page>
    );
  }
}

export default Project;
