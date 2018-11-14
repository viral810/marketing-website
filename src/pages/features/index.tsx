import { COLORS } from "@heydovetail/ui-components";
import illustrationBarChart from "@heydovetail/website/components/illustrations/bar-chart.svg";
import illustrationBoard from "@heydovetail/website/components/illustrations/board.svg";
import illustrationEditor from "@heydovetail/website/components/illustrations/editor.svg";
import illustrationFiles from "@heydovetail/website/components/illustrations/files.svg";
import illustrationSearch from "@heydovetail/website/components/illustrations/search.svg";
import { Center } from "@heydovetail/website/components/layout/Center";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    const title = "Features";
    const description =
      "Powerful features designed to help you organize, analyze, and share qualitative user research and insights.";

    return (
      <PageLayout>
        <Helmet>
          <title>{title} – Dovetail</title>
          <meta property="og:title" content={`${title} – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <LightContainer>
          <Hero subtitle={description} title={title} />
          <FeatureHero
            image={illustrationEditor}
            imagePosition="right"
            location={locations.featuresHighlights()}
            linkText="Learn more"
            text="Identify patterns across qualitative data with our rich text editor. Select text and quickly highlight sentences with tags."
            title="Highlights"
          />
          <FeatureHero
            image={illustrationSearch}
            imagePosition="left"
            location={locations.featuresSearch()}
            linkText="Learn more"
            text="Search within notes, tags, insights, and highlights. Use advanced querying to filter results and find what you’re looking for."
            title="Full-text search"
          />
          <FeatureHero
            image={illustrationFiles}
            imagePosition="right"
            location={locations.featuresFiles()}
            linkText="Learn more"
            text="Drag and drop images, recordings, videos, presentations, and more into notes. Store files in-context. No more linking to Dropbox!"
            title="Images and files"
          />
          <FeatureHero
            image={illustrationBoard}
            imagePosition="left"
            location={locations.featuresProjects()}
            linkText="Learn more"
            text="Organize your user research data with an intuitive drag and drop board, integrations, charts, insights, and more."
            title="Projects"
          />
          <FeatureHero
            image={illustrationBarChart}
            imagePosition="right"
            location={locations.featuresCharts()}
            linkText="Learn more"
            text="Visualize tag usage in a quick snapshot or identify trends over time with our beautiful, colorful bar and line charts."
            title="Charts"
          />
        </LightContainer>
        <LightContainer backgroundColor={COLORS.p04} maxWidth={976}>
          <Center>
            <h2>All features</h2>
          </Center>
          <Features />
        </LightContainer>
        <LightContainer>
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </PageLayout>
    );
  }
}
