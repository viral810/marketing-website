import favicon from "!file-loader!./favicon.png";
import thumbnail from "!file-loader!./thumbnail.png";
import React from "react";
import { Helmet } from "react-helmet";

// These are the default meta tags for every page.
// If a page uses Helmet to specify something more specific,
// it will override the meta tag here.

export class DefaultMetaTags extends React.PureComponent {
  public render() {
    return (
      <Helmet>
        <title>Dovetail &ndash; The Research Platform for Teams</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover customer insights, and decide what to do next. Our customers include Atlassian, Airbnb, Deloitte, HotelsCombined, Shopify, Spotify, Westpac, and more."
        />
        <meta
          name="keywords"
          content="design software, design tool, dovetail, product design, qualitative data analysis, research, research analysis, research repository, research ops, saas software, sydney australia, user research, ux design"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hidovetail" />
        <meta property="og:title" content="Dovetail &ndash; The Research Platform for Teams" />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={process.env.GATSBY_BASE_URL + thumbnail} />
        <meta
          property="og:description"
          content="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover customer insights, and decide what to do next. Our customers include Atlassian, Airbnb, Deloitte, HotelsCombined, Shopify, Spotify, Westpac, and more."
        />
      </Helmet>
    );
  }
}
