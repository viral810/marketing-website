import { AvatarWithPresence, ButtonLink, COLORS, Flow, Item } from "@heydovetail/ui-components";
import benjamin from "@heydovetail/website/avatars/benjamin.jpg";
import brad from "@heydovetail/website/avatars/brad.jpg";
import chris from "@heydovetail/website/avatars/chris.jpg";
import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { HelpIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import getHours from "date-fns/get_hours";
import isWeekend from "date-fns/is_weekend";
import { graphql } from "gatsby";
import React from "react";

interface Props {
  data: HelpIndexQuery;
}

interface State {
  online: boolean;
}

export default class extends React.PureComponent<Props, State> {
  public state: State = {
    online: false
  };

  public componentDidMount() {
    // Get the current date in Sydney.
    const date = calcTime(+10);
    const hours = getHours(date);
    const weekend = isWeekend(date);

    // Set the state to online if it’s during working hours.
    if (weekend === false && hours > 8 && hours < 17) {
      this.setState({ online: true });
    }
  }

  public render() {
    const cards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/help").map(parent => ({
      key: parent.title,
      node: <PageGroup pages={parent.children} title={parent.title} />
    }));

    const { online } = this.state;
    const presenceColor = online ? COLORS.green : COLORS.i40;

    cards.splice(1, 0, {
      key: "email",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.purple} location={locations.email()}>
              Email support
            </ButtonLink>,
            <Flow styled={{ gap: 4 }}>
              <Item style={{ lineHeight: 0 }}>
                <AvatarWithPresence borderColor={COLORS.p04} presenceColor={presenceColor} url={benjamin} />
              </Item>
              <Item style={{ lineHeight: 0 }}>
                <AvatarWithPresence borderColor={COLORS.p04} presenceColor={presenceColor} url={brad} />
              </Item>
              <Item style={{ lineHeight: 0 }}>
                <AvatarWithPresence borderColor={COLORS.p04} presenceColor={presenceColor} url={chris} />
              </Item>
            </Flow>
          ]}
          text={`We’re located in Sydney, Australia. We’ll aim to get back to you within ${online ? "6" : "24"} hours.`}
          title="Contact us"
        />
      )
    });

    cards.splice(4, 0, {
      key: "slack",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.green} location={locations.slack()}>
              Join our Slack
            </ButtonLink>
          ]}
          text="Join our open Slack community to chat with us and other Dovetail users."
          title="Chat with us on Slack"
        />
      )
    });

    cards.splice(7, 0, {
      key: "twitter",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.blue} location={locations.twitter()}>
              Follow us on Twitter
            </ButtonLink>
          ]}
          text="Follow @hidovetail for product updates, news, and answers to your questions."
          title="Find us on Twitter"
        />
      )
    });

    cards.splice(10, 0, {
      key: "blog",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.purple} location={locations.blog()}>
              Visit blog
            </ButtonLink>
          ]}
          text="Check out our Medium blog for product updates, company news, and tips &amp; tricks."
          title="Learn more"
        />
      )
    });

    return <DocumentIndex items={cards} text="Read our help docs and find ways to get in touch with us." title="Help Center" />;
  }
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "^/src/pages/help/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            breadcrumbOnly
            date(formatString: "MMMM DD, YYYY")
            path
            title
            weight
          }
        }
      }
    }
  }
`;

function calcTime(offset: number) {
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  return new Date(utc + 3600000 * offset);
}
