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
      margin-top: 6px;
      height: 35px !important;
      width: 35px !important;
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
  height: 16rem;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 0.8rem;
  will-change: transform, box-shadow;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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
