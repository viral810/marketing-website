import { Flex, Item, OverflowShadow, PricingCard } from "@heydovetail/ui-components";
import { IntervalToggle } from "@heydovetail/website/components/site/Plans/IntervalToggle";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

type ProductId = "Starter" | "Business" | "Enterprise";

interface Plan {
  amountMonthly: number;
  amountYearly: number;
  coreFeatures: string[];
  highlighted: boolean;
  name: ProductId;
}

export const PLAN_DETAILS: Plan[] = [
  {
    amountMonthly: 9800,
    amountYearly: 4900,
    coreFeatures: [
      "**5** users",
      "**Unlimited** projects",
      "**10MB** file upload limit",
      "Text and images",
      "**Basic** email support",
      "Knowledge base",
      "Slack community"
    ],
    highlighted: false,
    name: "Starter"
  },
  {
    amountMonthly: 19800,
    amountYearly: 9900,
    coreFeatures: [
      "**15** users",
      "**Unlimited** projects",
      "**2GB** file upload limit",
      "Text, images, and files",
      "**Priority** email support",
      "**Project access control**",
      "Video & audio streaming",
      "Knowledge base",
      "Slack community"
    ],
    highlighted: true,
    name: "Business"
  },
  {
    amountMonthly: 39800,
    amountYearly: 19900,
    coreFeatures: [
      "**50** users",
      "**Unlimited** projects",
      "**5GB** file upload limit",
      "Text, images, and files",
      "**Premium** email support",
      "**Project access control**",
      "Video & audio streaming",
      "Data encryption at rest",
      "Data processing agreement",
      "Payment by invoice",
      "Security assessments",
      "Knowledge base",
      "Slack community"
    ],
    highlighted: false,
    name: "Enterprise"
  }
];

interface State {
  yearly: boolean;
}

export class Plans extends React.PureComponent<{}, State> {
  public state: State = {
    yearly: true
  };

  public render() {
    const { yearly } = this.state;

    return (
      <Flex styled={{ gap: 48, layout: "column" }}>
        <Item>
          <IntervalToggle onToggle={() => this.setState({ yearly: !yearly })} yearly={yearly} />
        </Item>
        <Item>
          <OverflowShadow>
            <Flex styled={{ gap: 32 }}>
              {PLAN_DETAILS.map((p, i) => (
                <Item key={i} style={{ flex: "0 0 288px" }}>
                  <PricingCard
                    amount={yearly ? p.amountYearly : p.amountMonthly}
                    buttonText="Start 30 day free trial"
                    coreFeatures={p.coreFeatures}
                    highlighted={p.highlighted}
                    location={locations.signUp()}
                    name={p.name}
                    yearly={yearly}
                  />
                </Item>
              ))}
            </Flex>
          </OverflowShadow>
        </Item>
      </Flex>
    );
  }
}
