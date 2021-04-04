import React from "react";
import { Cell } from "styled-css-grid";
import {
  StyledHeadbar,
  StyledContent,
  StyledEmptyPackagesList,
} from "./styles";

const Donate = () => {
  return (
    <StyledContent>
      <StyledHeadbar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            <strong>Donate</strong> and support me
          </h3>
        </Cell>
      </StyledHeadbar>

      <StyledEmptyPackagesList>BIT COIN</StyledEmptyPackagesList>
    </StyledContent>
  );
};

export default Donate;
