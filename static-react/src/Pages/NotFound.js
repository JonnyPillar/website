import React from 'react';
import Page from '../Components/Page';
import Helmet from 'react-helmet';

class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  render() {
    return (
      <Page page="NotFound" seoTitle="404">
        <Helmet>
          <meta name="prerender-status-code" content="404" />
        </Helmet>

        <div className="jumbotron">
          <h1>404 Not Found</h1>
          <h2>Sorry we cant find that page :(</h2>
        </div>
      </Page>
    );
  }
}

export default NotFound;
