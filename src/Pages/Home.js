import React from 'react';
import Page from '../Components/Page';
import ProjectThumbs from '../Components/ProjectThumbs';
import Image from '../Components/Image';
import Markup from '../Components/Markup';
import Loading from '../Components/Loading';
import { getContent } from '../Helpers/Contentful';

class Home extends React.Component {
  state = {
    posts: []
  };

  componentWillMount() {
    getContent({
      'fields.slug': 'home',
      'content_type': 'home'
    }).then(response => {
      if (response.items.length > 0){
        this.setState({
          data: response.items[0].fields
        });
      }
    });

    getContent({
      'fields.showOnHomePage': true,
      'content_type': 'project'
    }).then(response => {
      this.setState({
        projects: response.items
      });
    });
  }

  render() {
    if (!this.state.data) {
      return <Loading />;
    }

    return (
      <Page page="home" title={this.state.data.title}>
        <div className="aboutPhoto">
          <Image item={this.state.data.photo} height={300} />
        </div>
        <div className="homeJumbotron">
          <Markup content={this.state.data.jumbotron} />
        </div>
        <div>
          <h2>Recent Projects</h2>
          <ProjectThumbs projects={this.state.projects} />
        </div>
      </Page>
    );
  }
}

export default Home;
