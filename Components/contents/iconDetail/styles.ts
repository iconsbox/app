import styled from "styled-components";
import { Grid } from "styled-css-grid";
import { motion } from "framer-motion";

export const StyledContent = styled(motion.div)`
  background: #f8f8f8;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  will-change: transform;
  z-index: 999;
  box-shadow: 0 0 0 100rem rgb(0 0 0 / 40%);
  min-width: 92%;
  transform: translate(-50%);
  height: 100%;
  overflow: auto;

  @media (max-width: 768px) {
    min-width: 100% !important;
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
    margin: 0 5px 0 3px;
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

  .icon-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h3 {
    display: inline-block;
    font-weight: 400;
  }

  .button-green {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.1rem;
    border-radius: 8px;
    background: #6cff55;
    color: #224d1a;
    margin-top: 4px;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%);
    font-size: 14px;
    font-weight: 600;

    svg {
      margin-right: 13px;
      width: 26px;
      height: 26px;
      opacity: 0.7;
    }
  }

  .icon-license {
    font-size: 10px;
    text-align: center;
    margin: 8px;
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledIconHolder = styled.div`
  position: relative;
  width: 100%;
  height: 13.7rem;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  will-change: transform, box-shadow;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.loadingSvg ::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
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
    width: 85px !important;
    height: 85px !important;
  }

  svg.starIcon {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px;
    width: 42px !important;
    height: 42px !important;
    fill: #ccc;
    cursor: pointer;
    &.active {
      fill: #f9d71c;
    }
    &:hover::after {
      content: attr(title);
      position: absolute;
      top: -100%;
      left: 0;
    }
  }

  &.gray svg {
    color: rgba(1, 1, 1, 0.64);
  }
  &.red svg {
    color: #ff4d4f;
  }
  &.green svg {
    color: #389e0d;
  }
  &.yellow svg {
    color: #fadb14;
  }
  &.cyan svg {
    color: #08979c;
  }
  &.magenta svg {
    color: #9e1068;
  }
  &.blue svg {
    color: #1890ff;
  }
  &.lime svg {
    color: #bae637;
  }
  &.volcano svg {
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
    margin: 10px 0 4px 0;
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

export const StyledKeywords = styled.span`
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

export const StyledInfoItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: 0.5rem 0;

  span {
    font-weight: 300;
    margin-left: 0.4rem;
    color: #444;
    font-size: 12px;
  }
`;
