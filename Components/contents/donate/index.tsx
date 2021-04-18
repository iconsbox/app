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

      <StyledEmptyPackagesList>
        <table>
          <tr>
            <th>Method</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>Bitcoin</td>
            <td>add</td>
          </tr>
          <tr>
            <td>Ripple</td>
            <td>Griffin</td>
          </tr>
        </table>
      </StyledEmptyPackagesList>
    </StyledContent>
  );
};

export default Donate;
