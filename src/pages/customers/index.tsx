import { BREAKPOINT_PHABLET, COLORS, Flex, Item } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Article } from "@heydovetail/website/components/site/Article";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { HALF_GAP, testimonials } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import React from "react";
import { Helmet } from "react-helmet";
import { media } from "typestyle";
import { styled } from "typestyle-react";
import careshipHero from "./careship/1.jpg";
import careshipLogo from "./careship/logo.png";
import ftwHero from "./ftw/1.jpg";
import ftwLogo from "./ftw/logo.png";
import intrepidHero from "./intrepid/1.jpg";
import intrepidLogo from "./intrepid/logo.png";

export default class extends React.PureComponent {
  public render() {
    const title = "Customers";
    const description =
      "Loved by researchers, designers, and product managers from organizations like Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more.";

    return (
      <PageLayout>
        <Helmet>
          <title>{title} – Dovetail</title>
          <meta property="og:title" content={`${title} – Dovetail`} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
        <LightContainer>
          <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
            <Item>
              <Hero
                center={false}
                subtitle="See how organizations of all shapes and sizes get value from Dovetail."
                title="Customers"
              />
            </Item>
            <Item>
              <Articles>
                <Article
                  image={careshipHero}
                  insetImage={careshipLogo}
                  location={{ internal: true, path: "/customers/careship" }}
                  title={
                    <>
                      <b>Careship</b> are fundamentally changing care in Europe
                    </>
                  }
                />
                <Article
                  image={intrepidHero}
                  insetImage={intrepidLogo}
                  location={{ internal: true, path: "/customers/intrepid" }}
                  title={
                    <>
                      <b>Intrepid Group</b> are the world’s largest adventure travel provider
                    </>
                  }
                />
                <Article
                  image={ftwHero}
                  insetImage={ftwLogo}
                  location={{ internal: true, path: "/customers/ftw" }}
                  title={
                    <>
                      <b>For the Win</b> help early-stage startups build a great workplace
                    </>
                  }
                />
              </Articles>
            </Item>
          </Flex>
        </LightContainer>
        <Wave color={COLORS.p04} size="100%" />
        <LightContainer backgroundColor={COLORS.p04}>
          <CustomerLogos
            customers={[
              customers.airbnb,
              customers.arm,
              customers.atlassian,
              customers.barnardos,
              customers.bcg,
              customers.careship,
              customers.csiro,
              customers.deloitte,
              customers.elsevier,
              customers.enigma,
              customers.esri,
              customers.freshworks,
              customers.ftw,
              customers.harvard,
              customers.hotelsCombined,
              customers.nike,
              customers.ocado,
              customers.pearson,
              customers.remax,
              customers.rbs,
              customers.rmit,
              customers.salesforce,
              customers.schibsted,
              customers.shopify,
              customers.spotify,
              customers.uniqa,
              customers.weightWatchers,
              customers.westpac
            ]}
          />
        </LightContainer>
        <LightContainer>
          <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
            <Item>
              <Hero
                center={false}
                subtitle="Researchers, product managers, and designers use Dovetail every day."
                title="Loved by users"
              />
            </Item>
            <Item>
              <Testimonials
                testimonials={[
                  testimonials.abhilash,
                  testimonials.aurelia,
                  testimonials.basheera,
                  testimonials.benjamin,
                  testimonials.erik,
                  testimonials.michael,
                  testimonials.pascal,
                  testimonials.sarah,
                  testimonials.sonja,
                  testimonials.sophie,
                  testimonials.tina
                ]}
              />
            </Item>
          </Flex>
        </LightContainer>
        <LightContainer>
          <CenteredSignUp />
        </LightContainer>
      </PageLayout>
    );
  }
}

const Articles = styled(
  "div",
  {
    display: "grid",
    gridGap: 48,
    gridTemplateColumns: "1fr"
  },
  media(
    { minWidth: BREAKPOINT_PHABLET },
    {
      gridTemplateColumns: "1fr 1fr"
    }
  )
);
