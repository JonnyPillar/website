import React from 'react';
import Page from '../Components/Page';
import Markup from '../Components/Markup';
import Image from '../Components/Image';
import Loading from '../Components/Loading';
import ProjectTechnologies from '../Components/ProjectTechnologies';
import { getContent } from '../Helpers/Contentful';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getContent({
      'fields.slug': this.props.match.params.id,
      'content_type': 'project'
    }).then(response => {
      if (response.items.length === 0) {
        window.location.href = '/404';
      } else {
        if (response.items.length > 0){
          this.setState({
            data: response.items[0].fields
          });
        }
      }
    });
  }

  render() {
    if (!this.state.data) {
      return <Loading />;
    }

    return (
      <Page page="project" {...this.state.data}>
        <div className="jumbotron">
          <h1>{this.state.data.title}</h1>
          <h2>{this.state.data.shortContent}</h2>
        </div>
        <Image item={this.state.data.coverPhoto} height={710}/>
        <div className="markup-content">
          <h3>Technologies</h3>
          <ProjectTechnologies technologies={this.state.data.technologies} />
          <h3>About</h3>
          <Markup content={this.state.data.about} />
          <h3>Challenge</h3>
          <Markup content={this.state.data.challenge} />
          <h3>Action</h3>
          <Markup content={this.state.data.action} />
          <h3>Result</h3>
          <Markup content={this.state.data.result} />
        </div>
      </Page>
    );
  }
}

export default Project;
