import React from 'react';
import Helmet from 'react-helmet';

class SEO extends React.Component {
  static defaultProps = {
    seoTitle: 'Jonny Pillar',
    seoDescription: 'Hello, my name is Jonny. I am a full-stack developer based in Manchester, UK.',
    seoKeywords: 'Jonny Pillar, Software Engineer, Jonny, Pillar, Jonny-Pillar'
  }

  render() {
    var title = `${this.props.seoTitle} - Jonny Pillar`;
    var canonicalUrl = window.location.href;

    return (
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />

        <meta name="description" content={this.props.seoDescription}/>
        <meta name="keywords" content={this.props.seoKeywords}/>
        <meta name="author" content="Jonny Pillar"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Jonny Pillar" />
        <meta property="og:image" content="/public/images/jonny-small.png" />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={this.props.seoDescription}/>
        <meta name="twitter:creator" content="jonnypillar"/>
        <meta name="twitter:image" content="/public/images/jonny-small.png" />

        <meta name="HandheldFriendly" content="True"/>
        <meta name="MobileOptimized" content="320"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </Helmet>
    );
  }
}

export default SEO;
