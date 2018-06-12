import React from 'react';
import { createClient } from 'contentful';
import Page from '../Components/Page';
import ProjectThumbs from '../Components/ProjectThumbs';
import Image from '../Components/Image';
import Markup from '../Components/Markup';

class Home extends React.Component {
  state = {
    posts: []
  };

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({
        'fields.slug': 'home',
        'content_type': 'home'
      })
      .then(response => {
        if (response.items.length > 0){
          this.setState({
            data: response.items[0].fields
          });
        }
      });

    client
      .getEntries({
        'fields.showOnHomePage': true,
        'content_type': 'project'
      })
      .then(response => {
        this.setState({
          projects: response.items
        });
      });
  }

  render() {
    if (!this.state.data) return null;

    return (
      <Page page="home" title={this.state.data.title}>
        <div className="jumbotron">
          <Markup content={this.state.data.jumbotron} />
        </div>
        <div>
          <h2>Recent Projects</h2>
          <ProjectThumbs projects={this.state.projects} />
        </div>
        <div className="aboutPhoto">
          <Image item={this.state.data.photo} height={230} />
        </div>
        <div className="aboutJumbotron">\
          <Markup content={this.state.data.aboutJumbotron} />
        </div>
        <div className="homeContent">
          <Markup content={this.state.data.content} />
        </div>
      </Page>
    );
  }
}

export default Home;
