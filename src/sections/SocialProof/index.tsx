import { Flex, Item } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Wrapper } from "@heydovetail/website/components/layout/Wrapper";
import { TestimonialProps } from "@heydovetail/website/components/site/Testimonial";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { HALF_GAP, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import React from "react";

interface Props {
  testimonials: TestimonialProps[];
  title?: string;
}

export class SocialProof extends React.PureComponent<Props> {
  public render() {
    const { testimonials, title = "Loved by user researchers, designers, and product managers worldwide." } = this.props;

    return (
      <Wrapper>
        <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
          <Item>
            <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
              <Item>
                <Container styled={{ maxWidth: WIDTH * 0.66, padding: { x: 0, y: 0 } }}>
                  <Center>
                    <h2>{title}</h2>
                  </Center>
                </Container>
              </Item>
              <Item>
                <Testimonials testimonials={testimonials} />
              </Item>
            </Flex>
          </Item>
          <Item>
            <CustomerLogos
              customers={[
                customers.barnardos,
                customers.elsevier,
                customers.esri,
                customers.freshworks,
                customers.hotelsCombined,
                customers.ocado,
                customers.spotify,
                customers.schibsted
              ]}
            />
          </Item>
        </Flex>
      </Wrapper>
    );
  }
}
