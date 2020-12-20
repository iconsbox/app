import styled from 'styled-components';
import {Cell, Grid} from "styled-css-grid";

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
    background: #ff336c;
    color: #fff;
    svg {
      color: #fff;
    }
  }
  svg {
    color: #bfc0c5;
    width: 32px !important;
    height: 32px !important;
    margin-bottom: 8px;
  }
`;
