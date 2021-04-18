import styled from "styled-components";
import { Tabs } from "react-tabs";

export const StyledTabsWrapper = styled(Tabs)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    padding-left: 5px;
    font-size: 22px;
    &:before {
      content: "#";
      margin-right: 5px;
    }
  }

  a {
    color: #a66def;
  }

  .react-tabs__tab-list {
    border-bottom: none;
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 0;
  }

  .react-tabs__tab {
    min-width: 100px;
    text-align: center;
    font-size: 14px;
    border: none;
    padding: 10px 9px;
  }

  .react-tabs__tab--selected {
    padding: 10px 9px;
    background: #fff !important;
    border: none;
    bottom: 0;
  }

  .react-tabs__tab-panel {
    background: #fff;
    padding: 20px;
    font-size: 14px;

    h3 {
      margin-top: 0;
      font-weight: 600;
    }

    input,
    textarea {
      width: 100%;
      margin-top: 20px;
      border: none;
      background: #f3f3f3;
      padding: 14px;
      border-radius: 5px;
      color: #424242;
      border-left: 3px solid #c7c7c7;
      font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
        serif;
    }
  }

  .code {
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    background: #fafafa;
    color: #666;
    padding: 2px 4px;
    margin-bottom: 2px;
  }

  pre {
    border-radius: 4px;
    overflow: hidden;
    font-size: 15px;
    background: #f3f3f3 !important;
    margin: 24px 0;
  }

  .edit-on-github {
    font-size: 12px;
    margin-top: 22px;
    color: #999;
    display: block;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .react-tabs__tab-list,
    .react-tabs__tab-panel {
      margin-left: -18px;
      margin-right: -18px;
    }
  }
`;
