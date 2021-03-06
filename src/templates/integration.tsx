import { COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { IntegrationIcon } from "@heydovetail/website/components/site/IntegrationIcon";
import { IntegrationIllustration } from "@heydovetail/website/components/site/IntegrationIllustration";
import { IntegrationByPathQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import { getLoggedInStateFromLocalStorage } from "@heydovetail/website/util/loggedIn";
import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

interface Props {
  data: IntegrationByPathQuery;
}

export default function IntegrationTemplate({ data }: Props) {
  const { integrationsJson } = data;
  const { descriptionPlain, title, steps } = integrationsJson!;
  const from = steps![0]!;
  const to = steps![1]!;
  const description = descriptionPlain!.replace(/\n.*/g, "");
  const loggedIn = getLoggedInStateFromLocalStorage();

  return (
    <PageLayout>
      <Helmet>
        <title>Connect {from.title} and Dovetail</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={`Connect ${from.title} and Dovetail`} />
      </Helmet>
      <LightContainer>
        <Center>
          <Flex styled={{ gap: 48, layout: "column" }}>
            <Item>
              <Flow styled={{ gap: 32 }}>
                <Item>
                  <IntegrationIcon icon={from.icon!} size={32} />
                </Item>
                <Item>
                  <IntegrationIcon icon={to.icon!} size={32} />
                </Item>
              </Flow>
            </Item>
            <Item>
              <h1>
                {from.title} + Dovetail.
                <br />
                Better together.
              </h1>
            </Item>
          </Flex>
        </Center>
      </LightContainer>
      <LightContainer backgroundColor={COLORS.p04}>
        <FeatureHero
          image={<IntegrationIllustration color={from.color!} icon={from.icon!} />}
          linkText={loggedIn ? "Configure in Dovetail" : undefined}
          location={loggedIn ? locations.inProductIntegrations() : undefined}
          title={`${title}.`}
          text={description}
        />
      </LightContainer>
      <LightContainer>
        <UseCases showTitle />
      </LightContainer>
    </PageLayout>
  );
}

export const integrationQuery = graphql`
  query($path: String!) {
    integrationsJson(path: { eq: $path }) {
      createUrl
      descriptionPlain
      title
      steps {
        color
        icon
        title
      }
    }
  }
`;
