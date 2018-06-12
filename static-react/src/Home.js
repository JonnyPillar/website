import React from 'react';
import { createClient } from 'contentful';
import Helmet from 'react-helmet';
import { parseMarkup } from './Helpers/Contentful';
import ProjectThumbs from './Components/ProjectThumbs';
import LazyLoad from 'react-lazyload';

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

    const jumbotron = parseMarkup(this.state.data.jumbotron);
    const aboutJumbotron = parseMarkup(this.state.data.aboutJumbotron);
    const content = parseMarkup(this.state.data.content);
    var image = this.state.data.photo.fields.file.url + '?h=300';

    return (
      <React.Fragment>
        <div className="container">
          <Helmet title={'Jonny Pillar - ' + this.state.data.title} />

          <div className="jumbotron">
            {jumbotron}
          </div>
          <div>
            <h2>Recent Projects</h2>
            <ProjectThumbs projects={this.state.projects} />
          </div>
          <div className="aboutPhoto">
            <LazyLoad height={230} offset={50}>
              <img src={image} style={{
                height: 230,
                backgroundSize: 'contain',
                backgroundPosition: 'bottom center'
              }}/>
            </LazyLoad>
          </div>
          <div className="aboutJumbotron">
            {aboutJumbotron}
          </div>
          <div className="homeContent">
            {content}
          </div>
        </div>
      </React.Fragment>
    );

    // var foo = window.innerWidth / 1;
    // var coverPhotoUrl = this.state.data.coverPhoto.fields.file.url + '?w=' + foo;
    // var coverPhotoUrlPlaceholder = this.state.data.coverPhoto.fields.file.url + '?w=200';

    // <ProgressiveImage
    //   src={coverPhotoUrl}
    //   placeholder={coverPhotoUrlPlaceholder}
    //   style={{
    //     height: 450,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'bottom center'
    //   }}
    // />
  }
}

export default Home;
