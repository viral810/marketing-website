import { Flex, Item } from "@heydovetail/ui-components";
import illustrationHighlightsFeedback from "@heydovetail/website/components/illustrations/highlights-feedback.svg";
import { Center } from "@heydovetail/website/components/layout/Center";
import { DarkContainer } from "@heydovetail/website/components/layout/DarkContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { Image } from "@heydovetail/website/components/util/Image";
import { HALF_GAP } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <PageLayout dark>
        <Helmet>
          <title>Highlights – Dovetail</title>
          <meta property="og:title" content="Highlights – Dovetail" />
          <meta
            property="og:description"
            content="Highlight text in our collaborative editor and turn sentences into structured data."
          />
          <meta
            name="description"
            content="Highlight text in our collaborative editor and turn sentences into structured data."
          />
        </Helmet>
        <DarkContainer>
          <Center>
            <Flex styled={{ gap: HALF_GAP / 2, layout: "column" }}>
              <Item>
                <Hero
                  title="Categorize qualitative data."
                  text="Highlight text in our collaborative editor and turn sentences into structured, tagged data."
                />
              </Item>
              <Item>
                <Image src={illustrationHighlightsFeedback} />
              </Item>
            </Flex>
          </Center>
          <Features
            features={[
              {
                text:
                  "Take notes with your teammates during customer interviews and user testing sessions and tag sentences as you identify patterns.",
                title: "Collaborative editor"
              },
              {
                text:
                  "Simply select text to highlight it with a tag or insight. See everything you’ve tagged in one view, across projects and notes.",
                title: "Highlights"
              },
              {
                text:
                  "Organically evolve your tagging system with bulk editing. Select multiple highlights and add, replace, and remove tags and insights with ease.",
                title: "Bulk editing"
              },
              {
                text:
                  "Let Dovetail do the work for you. Enable automatic sentiment analysis and Dovetail will add positive and negative tags for you.",
                title: "Sentiment analysis"
              }
            ]}
            large
          />
          <CenteredSignUp dark />
        </DarkContainer>
      </PageLayout>
    );
  }
}
