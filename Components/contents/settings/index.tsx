import React from "react";
import { Cell } from "styled-css-grid";
import { StyledHeadBar, StyledContent, StyledForm } from "./styles";

const Settings = () => {
  return (
    <StyledContent>
      <StyledHeadBar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            <strong>Settings</strong>
          </h3>
        </Cell>
      </StyledHeadBar>

      <StyledForm>
        list icons size - default color - download action - copy action -
        language - dark mode - stop animations - drag&drop functionality -
        packages order: alphabetical, icons count, popularity
      </StyledForm>
    </StyledContent>
  );
};

export default Settings;
