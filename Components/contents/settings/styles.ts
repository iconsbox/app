import styled from "styled-components";
import { Grid } from "styled-css-grid";
import { motion } from "framer-motion";

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
  font-weight: 600;
  color: #bfc0c5;
  padding-bottom: 20px;
`;

export const StyledSettingItemWrapper = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  color: #656565;
  display: flex;
  font-size: 14px;
  white-space: nowrap;
  padding: 15px 20px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px 12px 0 14px;
  display: flex;
  justify-content: space-around;

  select {
    padding: 6px 9px 6px 5px;
    border: none;
    box-shadow: 0 0 1px 1px rgb(0 0 0 / 8%);
    border-radius: 3px;
    margin: 0 6px;
    flex: 0 0 50%;
    color: #616060;
    max-width: 50%;
  }
`;

export const StyledSettingItem = styled.div`
  margin-left: 12px;
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 50%;
`;
