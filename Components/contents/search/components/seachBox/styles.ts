import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSearchBox = styled.div`
  display: flex;
  margin: 0 17px;

  .searchIcon {
    width: 20px !important;
    height: 20px !important;
  }

  input {
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 19px;
    border: none;
    background: #fff;
    border-radius: 8px 0 0 8px;
    color: #3a3a3a;
    font-size: 16px;
    height: 50px;

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      outline: none;
      border: none;
    }
  }

  .filter {
    border: none;
    background: transparent;
    position: relative;
    min-width: 45px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #444;
    padding-right: 10px;
    background: #fff;
    border-radius: 0 8px 8px 0;
    height: 50px;

    &:focus {
      outline: none;
      border: none;
    }

    &:after {
      content: "";
      position: absolute;
      left: -4px;
      height: 65%;
      width: 1px;
      background: #f1f1f1;
    }
    svg {
      width: 18px !important;
      height: 18px;
      position: relative;
      right: -4px;
    }
  }
`;

export const StyledSearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #6cff55;
  color: #224d1a;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  border: none;
  height: 50px;
  margin-left: 7px;
  min-width: 125px;
  position: relative;
  svg {
    margin-right: 13px;
    width: 26px !important;
    height: 26px !important;
    opacity: 0.7;
  }
`;

export const StyledFiltersWrapper = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  color: #656565;
  display: flex;
  font-size: 14px;
  white-space: nowrap;
  padding: 15px 20px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px 15px 0 17px;
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
  }

  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    > div {
      margin-left: 0;
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;

export const FormItem = styled.div`
  margin-left: 16px;
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
