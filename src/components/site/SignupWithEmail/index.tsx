import * as React from "react";
import { COLORS } from "../../../constants";
import { Button } from "../../forms/Button";
import { Flex } from "../../layout/Flex";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";
import { SmallText } from "../../util/SmallText";

export class SignupWithEmail extends React.PureComponent {
  public render() {
    return (
      <Flex gap={24} layout="column">
        <Item>
          <Flow>
            <Item>
              <Button color={COLORS.purple} onClick={() => {}}>
                Try now for free
              </Button>
            </Item>
          </Flow>
        </Item>
        <Item>
          <SmallText>14 day free trial, no credit card required.</SmallText>
        </Item>
      </Flex>
    );
  }
}
