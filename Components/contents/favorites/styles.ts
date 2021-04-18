import styled from "styled-components";
import { Grid } from "styled-css-grid";
import { motion } from "framer-motion";

export const StyledContent = styled(motion.div)`
  background: #f8f8f8;
  min-height: 100%;
`;

export const StyledHeadbar = styled(Grid)`
  padding: 4px 16px;

  h3 {
    display: inline-block;
    font-weight: 400;
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

export const StyledEmptyPackagesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;

  p {
    font-size: 21px;
    font-weight: 800;
    letter-spacing: 1px;
    color: #d6d6d6;
  }
  svg {
    fill: #d6d6d6;
  }
`;
