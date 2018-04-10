import * as React from "react";
import { COLORS, TYPICAL_VERTICAL_GAP } from "../../../constants";
import { styledViaProps } from "../../../util/styled";
import { Container } from "../../layout/Container";

interface Props {
  horizontalPadding?: number;
  maxWidth?: number;
  overflowBottom?: boolean;
  verticalPadding?: number;
}

export class DarkContainer extends React.PureComponent<Props> {
  public render() {
    const { overflowBottom = false } = this.props;
    return (
      <Wrapper overflowBottom={overflowBottom}>
        <Container {...this.props} />
      </Wrapper>
    );
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ overflowBottom }: { overflowBottom: boolean }) => JSON.stringify({ overflowBottom }),
  ({ overflowBottom }) => ({
    backgroundColor: COLORS.indigo,
    background: overflowBottom
      ? `${
          COLORS.indigo
        } url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGP6DwABBQECz6AuzQAAAABJRU5ErkJggg==') no-repeat bottom/100% 360px`
      : COLORS.indigo,
    color: COLORS.white,
    marginBottom: overflowBottom ? "-180px" : undefined,
    paddingBottom: overflowBottom ? undefined : TYPICAL_VERTICAL_GAP / 2,

    $nest: {
      a: {
        color: COLORS.b60
      }
    }
  })
);
