import { COLORS, Link, Uid } from "@heydovetail/ui-components";
import { Footer } from "@heydovetail/website/components/site/Footer";
import { Header } from "@heydovetail/website/components/site/Header";
import { ErrorBoundary } from "@heydovetail/website/components/util/ErrorBoundary";
import { GatsbyLinkWrapper } from "@heydovetail/website/components/util/GatsbyLinkWrapper";
import React from "react";
import { styled } from "typestyle-react";
import { DefaultMetaTags } from "./DefaultMetaTags";
import "./globalstyles";

interface Props {
  dark?: boolean;
}

export class PageLayout extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;

    // Types don't match for GatsbyLink… seems to work anyway?
    // tslint:disable-next-line:no-any
    const GatsbyLinkHack = GatsbyLinkWrapper as any;

    return (
      <ErrorBoundary>
        <Uid.Context.Provider value={{ counter: 0 }}>
          <Link.Provider value={GatsbyLinkHack}>
            <DefaultMetaTags />
            <Header dark={dark} />
            <Wrapper styled={{ dark }}>
              {this.props.children}
              <Footer dark={dark} />
            </Wrapper>
          </Link.Provider>
        </Uid.Context.Provider>
      </ErrorBoundary>
    );
  }
}

const Wrapper = styled("div", ({ dark }: { dark: boolean }) => ({
  backgroundColor: dark ? COLORS.indigo : COLORS.white,
  color: dark ? COLORS.white : COLORS.indigo,
  overflow: "hidden"
}));
