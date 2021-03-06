/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface GuideIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          date: string | null;
          path: string | null;
          title: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface HelpIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          date: string | null;
          path: string | null;
          title: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface IntegrationIndexQuery {
  // Connection to all IntegrationsJson nodes
  allIntegrationsJson: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        title: string | null;
        path: string | null;
        steps: Array<{
          color: string | null;
          icon: string | null;
          title: string | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface LegalIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          date: string | null;
          path: string | null;
          title: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface DocumentByPathQueryVariables {
  path: string;
}

export interface DocumentByPathQuery {
  markdownRemark: {
    excerpt: string | null;
    frontmatter: {
      date: string | null;
      path: string | null;
      title: string | null;
    } | null;
    html: string | null;
    timeToRead: number | null;
  } | null;
}

export interface IntegrationByPathQueryVariables {
  path: string;
}

export interface IntegrationByPathQuery {
  integrationsJson: {
    createUrl: string | null;
    descriptionPlain: string | null;
    title: string | null;
    steps: Array<{
      color: string | null;
      icon: string | null;
      title: string | null;
    } | null> | null;
  } | null;
}
