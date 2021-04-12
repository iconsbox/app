import styled from "styled-components";
import { Grid } from "styled-css-grid";

export const StyledContent = styled.div`
  background: #f8f8f8;
  min-height: 100%;
  position: absolute;
  top: 0;
  will-change: transform;
  animation-name: scaleInModal;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.13, 0.82, 0.25, 1);
  z-index: 999;

  @keyframes scaleInModal {
    0% {
      transform: scale(0.9) translate(0, 120px);
    }
    100% {
      transform: scale(1) translate(0);
    }
  }
`;

export const StyledHeadBar = styled(Grid)`
  padding: 4px 16px;

  h3 {
    display: inline-block;
    font-weight: 400;
  }

  .close {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }

    svg {
      height: 35px !important;
      width: 35px !important;
    }
  }
`;

export const StyledBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: relative;
  * {
    font-weight: 400 !important;
    font-size: 12px;
    color: #333;
    margin: 0 6px 0 1px;
    strong {
      font-weight: 600 !important;
    }
  }
  a {
    margin-right: 5px;
    cursor: pointer;
    &:not(:last-child):after {
      content: " / ";
      color: #999;
      font-size: 8px;
      margin-left: 0px;
      top: 50%;
      position: absolute;
      transform: translate(0, -50%);
    }
    &.homeIcon {
      svg {
        position: relative;
        top: 2px;
      }
    }
  }
`;

export const StyledIconWrapper = styled(Grid)`
  padding: 4px 16px;

  h3 {
    display: inline-block;
    font-weight: 400;
  }
`;

export const StyledIconHolder = styled.div`
  position: relative;
  width: 100%;
  height: 13.7rem;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.8rem;
  will-change: transform, box-shadow;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.loading ::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
      to right,
      rgba(235, 235, 235, 1) 0%,
      rgba(240, 240, 240, 1) 54%,
      rgba(245, 245, 245, 1) 100%
    );
    border-radius: 0.6rem;
  }

  svg {
    width: 9rem !important;
    height: 9rem !important;
  }
  .gray svg {
    color: rgba(1, 1, 1, 0.64);
  }
  .red svg {
    color: #ff4d4f;
  }
  .green svg {
    color: #389e0d;
  }
  .yellow svg {
    color: #fadb14;
  }
  .cyan svg {
    color: #08979c;
  }
  .magenta svg {
    color: #9e1068;
  }
  .blue svg {
    color: #1890ff;
  }
  .lime svg {
    color: #bae637;
  }
  .volcano svg {
    color: #d4380d;
  }
`;

export const StyledColors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .color {
    flex: 0 0 auto;
    border-radius: 50%;
    position: relative;
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
    margin: 1.4rem 0 0.6rem 0;
    border: none;
    transition: border-radius 0.3s ease-in-out;
  }
  .color:hover {
    border-radius: 0.6rem;
  }
  .color.gray {
    background: rgba(1, 1, 1, 0.64);
  }
  .color.red {
    background: #ff4d4f;
  }
  .color.green {
    background: #389e0d;
  }
  .color.yellow {
    background: #fadb14;
  }
  .color.cyan {
    background: #08979c;
  }
  .color.magenta {
    background: #9e1068;
  }
  .color.blue {
    background: #1890ff;
  }
  .color.lime {
    background: #bae637;
  }
  .color.volcano {
    background: #d4380d;
  }
`;

export const StyledKeywords = styled.div`
  color: #d8d8d8;

  span {
    display: inline-block;
    border-radius: 0.8rem;
    background: #efefefa6;
    font-size: 0.8rem;
    color: #909090;
    margin: 0.1rem 0.2rem;
    padding: 0.2rem 0.6rem;
  }
`;
