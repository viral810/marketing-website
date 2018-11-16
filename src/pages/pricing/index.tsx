import { COLORS, Flex, Item, Toast, ToastPresenter } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import { Center } from "@heydovetail/website/components/layout/Center";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { ActionTextWithArrow } from "@heydovetail/website/components/site/ActionTextWithArrow";
import { Faq } from "@heydovetail/website/components/site/Faq";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { Plans } from "@heydovetail/website/components/site/Plans";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { HALF_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import { FrequentlyAskedQuestions } from "@heydovetail/website/sections/FrequentlyAskedQuestions";
import debounce from "lodash.debounce";
import React from "react";
import { Helmet } from "react-helmet";

interface State {
  showDemoToast: boolean;
}

export default class extends React.PureComponent<{}, State> {
  public state: State = {
    showDemoToast: false
  };

  public componentDidMount() {
    window.addEventListener(
      "scroll",
      debounce(() => {
        this.setState(prevState => ({ showDemoToast: !prevState.showDemoToast && window.scrollY > 1500 }));
      }, 250)
    );
  }

  public render() {
    const title = "Pricing";
    const description = "Affordable plans for organizations of every stage, shape, and size.";

    return (
      // ToastPresenter should really live in PageLayout but it doesn’t
      // seem to work so for now it’s here.
      <ToastPresenter>
        <Toast>
          {({ toast }) => {
            if (this.state.showDemoToast) {
              toast(
                { action: { text: "Schedule now", location: locations.demo() }, autoHide: false, text: "Want a demo?" },
                "demo"
              );
            }
            return (
              <PageLayout>
                <Helmet>
                  <title>{title} – Dovetail</title>
                  <meta property="og:title" content={`${title} – Dovetail`} />
                  <meta property="og:description" content={description} />
                  <meta name="description" content={description} />
                </Helmet>
                <LightContainer maxWidth={976}>
                  <Flex styled={{ gap: HALF_GAP / 2, layout: "column" }}>
                    <Item>
                      <Hero center title="Simple, transparent pricing." text={description} />
                    </Item>
                    <Item>
                      <Plans />
                    </Item>
                  </Flex>
                </LightContainer>
                <LightContainer maxWidth={976}>
                  <Center>
                    <h2>Features in every plan</h2>
                  </Center>
                  <Features />
                </LightContainer>
                <Wave color={COLORS.p04} size="100%" />
                <LightContainer backgroundColor={COLORS.p04}>
                  <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
                    <Item>
                      <CustomerLogos
                        customers={[
                          customers.airbnb,
                          customers.arm,
                          customers.freshworks,
                          customers.hotelsCombined,
                          customers.ocado,
                          customers.rbs,
                          customers.spotify,
                          customers.weightWatchers
                        ]}
                      />
                    </Item>
                    <Item>
                      <Center>
                        <ActionTextWithArrow
                          color={COLORS.purple}
                          location={locations.customers()}
                          text="Learn more about our customers"
                        />
                      </Center>
                    </Item>
                  </Flex>
                </LightContainer>
                <LightContainer>
                  <FrequentlyAskedQuestions
                    faqs={[
                      <Faq
                        question="What does “file upload limit” mean?"
                        answer="You can add unlimited files to Dovetail notes and insights, however the file upload limit restricts the maximum size each file can be."
                      />,
                      <Faq
                        question="What if we need a longer trial?"
                        answer="We’re happy to extend your trial for as long as you need. Just let us know if you need more time and we’ll sort it out straight away."
                      />,
                      <Faq
                        question="Will we be charged when the trial’s up?"
                        answer="No, we don’t require a card upfront. If you want to continue using Dovetail at the end of your trial, we’ll ask for your credit card then."
                      />,
                      <Faq
                        question="Do you offer product demos?"
                        answer="We sure do. We’re happy to give you a walkthrough over a video call, or if you’re in Sydney, we can pop into your office."
                        location={locations.demo()}
                        linkText="Schedule a demo →"
                      />,
                      <Faq
                        question="How safe is our data?"
                        answer="We use industry-standard cloud infrastructure along with extra safeguards to ensure your data remains private and secure."
                        linkText="Security →"
                        location={locations.security()}
                      />,
                      <Faq
                        question="Are you GDPR compliant?"
                        answer="Yes. We’re GDPR ready with a privacy-by-design architecture, clear privacy policies, and an optional DPA available if required."
                        linkText="Terms and policies →"
                        location={locations.legal()}
                      />,
                      <Faq
                        question="Will you negotiate your terms?"
                        answer="No. We do not negotiate terms or sign NDAs. All customers must agree to our standard Customer Terms of Service."
                        linkText="Terms and policies →"
                        location={locations.legal()}
                      />,
                      <Faq
                        question="Do you have any case studies?"
                        answer="Yes. See how other companies get value out of Dovetail by checking out our customer success stories and testimonials."
                        linkText="Customer stories →"
                        location={locations.customers()}
                      />,
                      <Faq
                        question="How do you compare to similar tools?"
                        answer="Depending on what you’re thinking of, Dovetail might be more collaborative, more intuitive, or cheaper."
                        linkText="Check out our answer on Quora →"
                        location={{
                          internal: false,
                          url:
                            "https://www.quora.com/How-does-Dovetail-compare-to-other-research-software-on-the-market/answer/Benjamin-Humphrey",
                          openInNewTab: true
                        }}
                      />,
                      <Faq
                        question="Can we cancel at any time?"
                        answer="Yes. You can cancel your subscription whenever you like, however we do not offer refunds for a billing period you’ve already paid for."
                      />
                    ]}
                  />
                  <CenteredSignUp />
                </LightContainer>
              </PageLayout>
            );
          }}
        </Toast>
      </ToastPresenter>
    );
  }
}
