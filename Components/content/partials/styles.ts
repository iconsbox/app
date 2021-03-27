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

  img {
    max-width: 50%;
    max-height: 50%;
    &.loading {
      background-image: linear-gradient(
        to right,
        rgba(235, 235, 235, 1) 0%,
        rgba(240, 240, 240, 1) 54%,
        rgba(245, 245, 245, 1) 100%
      );
      border-radius: 0.6rem;
    }
  }
`;
