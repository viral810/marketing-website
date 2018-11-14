import { Breadcrumbs, COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { Lozenge } from "@heydovetail/website/components/site/Lozenge";
import { PageContent } from "@heydovetail/website/components/site/PageContent";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { DocumentByPathQuery } from "@heydovetail/website/graphql/types";
import { internal } from "@heydovetail/website/routing/locations";
import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  data: DocumentByPathQuery;
  pageContext: { breadcrumb: Array<{ path: string | null; title: string | null }> };
}

export default function DocumentTemplate({ data, pageContext }: Props) {
  const { markdownRemark } = data;
  const { excerpt, frontmatter, html, timeToRead } = markdownRemark!;

  const schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    headline: frontmatter!.title
  };

  return (
    <PageLayout>
      <Helmet>
        <title>{frontmatter!.title} – Dovetail</title>
        <meta name="description" content={excerpt !== null ? excerpt : undefined} />
        <meta property="og:description" content={excerpt !== null ? excerpt : undefined} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter!.title!} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
        <div style={{ maxWidth: WIDTH * 0.75 }}>
          <Flex styled={{ gap: 16, layout: "column" }}>
            <Item style={{ color: COLORS.i60, fontWeight: 600 }}>
              <Breadcrumbs
                crumbs={pageContext.breadcrumb.map(breadcrumb => ({
                  location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
                  text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
                }))}
              />
            </Item>
            <Item>
              <Hero title={frontmatter!.title!} />
            </Item>
            {frontmatter!.date !== null && timeToRead !== null ? (
              <Item>
                <Flow>
                  <Item>
                    <Lozenge>{timeToRead} minute read</Lozenge>
                  </Item>
                  <Item>
                    <Lozenge>Last updated {frontmatter!.date}</Lozenge>
                  </Item>
                </Flow>
              </Item>
            ) : null}
            <Item>
              <PageContent html={html!} />
            </Item>
            <Item style={{ color: COLORS.i60, fontWeight: 600, marginTop: 64 }}>
              <Breadcrumbs
                crumbs={pageContext.breadcrumb.map(breadcrumb => ({
                  location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
                  text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
                }))}
              />
            </Item>
          </Flex>
        </div>
      </Container>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      html
      timeToRead
    }
  }
`;
