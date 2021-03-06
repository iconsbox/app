import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

export const StyledContent = styled.div`
  background: #f8f8f8;
  min-height: 100%;
`;

export const StyledHeadBar = styled(Grid)`
  padding: 4px 22px;
  display: flex;
  align-items: center;

  h3 {
    display: inline-block;
    font-weight: 400;
  }
  p {
    font-size: 11px;
    margin-left: 10px;
    color: #6f6f6f;
  }
  .label {
    background: #e73d3d;
    border-radius: 8px;
    padding: 2px 5px 4px 5px;
    font-size: 10px;
    color: #fff;
    height: 20px;
    position: relative;
    margin-left: 8px;
    top: -1px;
    font-weight: 600;
  }
  .version {
    border-radius: 8px;
    padding: 2px 5px 4px 5px;
    font-size: 10px;
    color: #a1a1a1;
    height: 20px;
    position: relative;
    margin-left: 5px;
    top: -1px;
    font-weight: 300;
  }
  .toggleBtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #efefef;
    border: none;
    padding: 0px;
    font-size: 26px;
    width: 43px;
    color: #4c4c4c;
    border-radius: 5px;
  }
`;

export const StyledPackageCard = styled(Cell)`
  border-radius: 12px;
  padding: 3px 7px 10px 7px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  color: #454445;
  min-width: 78px;
  height: 100px;
  align-items: normal;
  justify-content: space-around;
  background: #fff;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  cursor: pointer;
  text-align: center;

  &.active {
    background: #ffe28e;
    .icon-holder {
      border: none;
    }
  }
  .icon-holder {
    color: #bfc0c5;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    margin-bottom: 2px;
    background: #fff;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .Marquee {
      overflow: hidden;
    }
    .MarqueeContent {
      display: flex;
      width: 535px;
    }
    &.stop .MarqueeContent {
      transform: unset !important;
      padding-left: 35px;
    }

    img {
      width: 24px !important;
      height: 24px !important;
      min-width: 24px !important;
      margin: 0 12px !important;
      &:first-child {
        margin-left: -15px !important;
      }
      &.loading {
        background-image: linear-gradient(
          to right,
          rgba(235, 235, 235, 1) 0%,
          rgba(240, 240, 240, 1) 54%,
          rgba(245, 245, 245, 1) 100%
        );
        border-radius: 0.6rem;
        z-index: 0;
      }
    }
  }
`;

export const StyledPackageInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  font-weight: 800;
  padding: 10px 8px;
  position: relative;
  bottom: -8px;
  color: #444;
  cursor: pointer;

  svg {
    width: 24px !important;
    height: 24px !important;
  }
  .tooltip {
    opacity: 0;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    right: 0;
    color: #747474;
    padding: 12px 10px;
    font-size: 11px;
    font-weight: 400;
    box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.4);
    top: -3px;
    span {
      display: block;
      a {
        color: #7370f7;
      }
    }
  }
  &:hover .tooltip {
    opacity: 1;
  }
`;

export const StyledPackageIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledEmptyPackagesList = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  font-weight: 600;
  color: #bfc0c5;
`;
