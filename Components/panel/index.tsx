import React from "react";
import { Cell } from "styled-css-grid";
import IconCardVertical from "./partials/iconCardVertical";
import { StyledPanelGrid } from "./styles";

const Index = () => {
  return (
    <StyledPanelGrid columns={2}>
      <Cell width={1}>Bake font icon</Cell>
      <Cell width={1}>edit</Cell>

      {Array.from({ length: 3 }, () => (
        <IconCardVertical />
      ))}

      <Cell width={1}>Sum icons</Cell>
      <Cell width={1}>8</Cell>
    </StyledPanelGrid>
  );
};

export default Index;
