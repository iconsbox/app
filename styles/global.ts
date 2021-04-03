import styled from "styled-components";
import { Cell } from "styled-css-grid";

export const StyledContainer = styled.div`
  width: 860px;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`;

export const StyledAppMain = styled.section`
  border-radius: 20px;
  background: #fff;
  max-height: 100%;
  width: 100%;
`;

export const StyledSidebarCell = styled(Cell)`
  &.isMobile {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 76px;
    z-index: 99;
    background: #fff;
  }
`;

export const StyledContentCell = styled(Cell)`
  overflow: auto;
  max-height: 100vh;
  &.isMobile {
    margin-bottom: 98px;
    min-height: calc(100vh - 76px);
    max-height: calc(100vh - 76px);
  }

  .loading {
    z-index: 9999;
    bottom: 19px;
    left: 50%;
  }
`;

export default {};
