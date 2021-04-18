import styled from "styled-components";
import { Grid } from "styled-css-grid";

export const StyledContent = styled.div`
  background: #f8f8f8;
  min-height: 100%;
`;

export const StyledHeadBar = styled(Grid)`
  padding: 4px 16px;

  h3 {
    display: inline-block;
    font-weight: 400;
  }
`;

export const StyledForm = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  font-weight: 600;
  color: #bfc0c5;

  padding: 20px;
`;
