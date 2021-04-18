import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 5px;
  height: 140px;
  min-width: 105px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 9px;
  flex: 1;
  opacity: 0.9;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  position: relative;
  overflow: hidden;

  &.grabbing {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

  * {
    transition: transform ease-in-out 0.3s, opacity ease-in-out 0.3s;
    will-change: transform, opacity;
  }
  svg {
    opacity: 0;
    transform: scale(0.4);
  }

  button {
    opacity: 0;
    transform: translate(0, 20%);
    position: absolute;
    bottom: 4px;
    left: 6px;
    border: none;
    background: #e8e8e8;
    border-radius: 4px;
    font-size: 11px;
    color: #444;
    font-weight: 600;
    width: calc(100% - 12px);
    padding: 3px;
    cursor: pointer;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px;
    width: 32px !important;
    height: 32px !important;
    fill: #ccc;
    cursor: pointer;
    &.active {
      fill: #f9d71c;
    }
  }

  &:hover {
    svg {
      opacity: 1;
      transform: scale(1);
    }
    img {
      transform: scale(0.9) translate(0, -6px);
    }
    button {
      opacity: 1;
      transform: scale(1);
      transform: translate(0, 0);
    }
    span {
      transform: translate(0, -10px);
    }
  }

  img {
    max-width: 50%;
    max-height: 50%;
    transition: all ease-in-out 0.3s;
    transform: scale(1) translate(0, 0);

    &.loading {
      min-width: 50%;
      min-height: 50%;
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
`;
