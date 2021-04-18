import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export const StyledSidebarGrid = styled(Grid)`
  border-right: 1px solid #f8f8f8;
  .logo {
    color: #ff336c;
    font-size: 36px;
    text-align: center;
    font-weight: 600;
    position: relative;
    top: -10px;
  }

  .version {
    font-size: 12px;
    color: #e1e1e1;
    position: relative;
    bottom: -10px;
  }
`;

export const StyledMenuItemCell = styled(Cell)`
  overflow: hidden;
  position: relative;
`;

export const StyledMenuItem = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 10px 0;
  margin: 5px 14px;
  background: #fff;
  color: #bfc0c5;
  cursor: pointer;
  &.active {
    color: #fff;
    * {
      position: absolute;
    }
    .menuIcon {
      color: #fff;
      z-index: 98;
      top: 17px;
    }
    span {
      z-index: 99;
      bottom: 17px;
    }
  }
  svg {
    color: #bfc0c5;
    width: 32px !important;
    height: 32px !important;
    margin-bottom: 8px;
    will-change: transform;
    animation-name: scaleIn;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.13, 0.82, 0.25, 1);
  }
  &.isMobile {
    margin: 5px 10px;
  }

  .bg {
    width: 138% !important;
    height: 129% !important;
    bottom: -24px;
    position: absolute;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
`;
