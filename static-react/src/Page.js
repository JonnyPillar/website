import React from 'react';
import { createClient } from 'contentful';
import Content from './Components/Content';

class Page extends React.Component {
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
        'content_type': 'page'
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
      <Content data={this.state.data} />
    );
  }
}

export default Page;
