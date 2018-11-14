import { FlexWrap, Item } from "@heydovetail/ui-components";
import { Wrapper } from "@heydovetail/website/components/layout/Wrapper";
import React from "react";
import { Feature, FeatureProps } from "../Feature";
import { FeatureLarge } from "../FeatureLarge";

const FEATURES = [
  { title: "Bar chart", text: "Understand your research at a glance with a beautiful bar chart" },
  { title: "Boards", text: "View notes, tags, and insights on a drag and drop board, like Trello" },
  { title: "Custom colors", text: "Choose from a variety of colors for groups and tags or use your own" },
  { title: "Export", text: "Download notes and insights as PDFs and tags as a CSV file" },
  { title: "Full-text search", text: "Search within notes, tags, insights, and highlights across projects" },
  { title: "GDPR-ready", text: "Dovetail is GDPR-ready with a DPA available for Enterprise customers" },
  { title: "Google log in", text: "Log in or sign up with your organization’s Google account" },
  { title: "Highlights", text: "Break down long form text into structured, tagged data" },
  { title: "Images", text: "Insert images into your research notes, tags, and insights" },
  { title: "Import", text: "Upload a CSV to create notes, tags, and insights from a spreadsheet" },
  { title: "Insights", text: "Summarize and share your research insights during analysis" },
  { title: "Mobile", text: "Browse notes, tags, and insights on your phone or tablet" },
  { title: "Notes", text: "Quickly take research notes in our easy-to-use rich text editor" },
  { title: "Projects", text: "Organize research data into projects with unique tag taxonomies" },
  { title: "Project categories", text: "Drag and drop to rearrange projects in custom categories" },
  { title: "Real time collaboration", text: "Collaborate your research project with others in real time" },
  { title: "Quick edit", text: "Quickly edit notes, tags, and insights without leaving your context" },
  { title: "Sentiment analysis", text: "Automatically analyze the sentiment of long form textual data" },
  { title: "Teams", text: "Invite colleagues and collaborate across your organization" },
  { title: "Team branding", text: "Personalize your team with your organization logo and name" },
  { title: "Zapier", text: "Import from thousands of apps like Delighted, Typeform, and Wufoo" }
];

interface Props {
  features?: FeatureProps[];
  large?: boolean;
}

export class Features extends React.PureComponent<Props> {
  public render() {
    const { features = FEATURES, large = false } = this.props;
    return (
      <Wrapper>
        <FlexWrap styled={{ growItems: true, maxChildWidth: 256, justifyContent: "center", gap: large ? 64 : 32 }}>
          {features.map((f, i) => (
            <Item key={i}>{large ? <FeatureLarge {...f} /> : <Feature {...f} />}</Item>
          ))}
        </FlexWrap>
      </Wrapper>
    );
  }
}
