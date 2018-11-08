import { ButtonLink, COLORS, Flow, Item, SmallText } from "@heydovetail/ui-components";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";

export function SignUpButton() {
  return (
    <Flow styled={{ gap: 24, rowGap: 24 }}>
      <Item>
        <ButtonLink color={COLORS.purple} location={locations.signUp()}>
          Try now for free
        </ButtonLink>
      </Item>
      <Item>
        <SmallText>30 day free trial, no credit card required.</SmallText>
      </Item>
    </Flow>
  );
}
