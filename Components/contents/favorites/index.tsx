import React from "react";
import { Cell } from "styled-css-grid";
import {
  StyledHeadbar,
  StyledContent,
  StyledEmptyPackagesList,
} from "./styles";
import { LOCALSTORAGE_NAME, LocalStorageSavedItem } from "../../../Helpers";
import SadIcon from "../search/components/notFound/SadIcon";
import { StyledPackageIcons } from "../home/styles";
import IconCard from "../home/components/iconCard";

const Favorites = () => {
  const savedFavIcons = localStorage.getItem(LOCALSTORAGE_NAME) || "[]";
  const favIcons: LocalStorageSavedItem[] = JSON.parse(savedFavIcons);

  return (
    <StyledContent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <StyledHeadbar columns={7}>
        <Cell width={7} top={1}>
          <h3>
            <strong>Favorite</strong> and picked icons
          </h3>
        </Cell>
      </StyledHeadbar>

      {favIcons.length ? (
        <StyledPackageIcons>
          {favIcons.map(({ icon, pack }) => (
            <IconCard isFavorite key={icon} pack={pack} icon={icon} />
          ))}
        </StyledPackageIcons>
      ) : (
        <StyledEmptyPackagesList>
          <SadIcon />
          <p>You have no favorite icon</p>
        </StyledEmptyPackagesList>
      )}
    </StyledContent>
  );
};

export default Favorites;
