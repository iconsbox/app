import React, { useState } from "react";
import { Cell } from "styled-css-grid";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { Home3Icon, Star2Icon } from "@iconbox/iconly";
import useSWR from "swr";
import { activeIconState, packagesState } from "../../../Recoil/atoms";
import Usage from "./components/usage/usage";
import {
  textFetcher as fetcher,
  makeFilePath,
  getMultiSynonyms,
  Packages,
  Package,
  LOCALSTORAGE_NAME,
  LocalStorageSavedItem,
} from "../../../Helpers";
import {
  StyledIconWrapper,
  StyledIconHolder,
  StyledBreadcrumb,
  StyledHeadBar,
  StyledContent,
  StyledColors,
  StyledKeywords,
  StyledInfoItem,
} from "./styles";

/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */

const Icon = () => {
  const [color, setColor] = useState("");
  const [activeIcon, setActiveIcon] = useRecoilState(activeIconState);
  const router = useRouter();
  const page = (router.query.page as string) || "home";
  const packages = useRecoilValue<Packages>(packagesState);
  const currentPackageName = (router.query.package as string) || "";
  const currentPackage: Package = packages[currentPackageName];

  // fav icons
  const savedFavIcons = localStorage.getItem(LOCALSTORAGE_NAME) || "[]";
  const favIcons: LocalStorageSavedItem[] = JSON.parse(savedFavIcons);
  const [favorite, setFavorite] = useState(
    favIcons.some((i) => i.pack === currentPackageName && i.icon === activeIcon)
  );

  /**
   * Get icon svg content
   */
  const svgAddress = makeFilePath(currentPackageName, activeIcon);
  const { data } = useSWR(svgAddress, fetcher, {
    errorRetryCount: 3,
    errorRetryInterval: 2000,
  });

  const iconNameSplit = activeIcon
    .replace(/([a-z](?=[A-Z]))/g, "$1 ")
    .toLowerCase()
    .split(" ");
  const iconKeywords = [
    activeIcon,
    activeIcon.replace("Icon", ""),
    ...getMultiSynonyms(iconNameSplit),
  ];

  console.log({
    activeIcon,
    iconKeywords,
  });

  const handleColorChange = (colorName: string) => () => {
    setColor(colorName);
  };

  const handleClose = (forceHome?: boolean) => async () => {
    setActiveIcon("");
    let query = `/?page=${forceHome ? "home" : page}`;
    if (currentPackageName) {
      query += `&package=${currentPackageName}`;
    }
    await router.push(query);
  };

  /**
   * Logic for adding icon to favorites
   */
  const handleSetFavIcon = () => {
    const savedFavIcons = localStorage.getItem(LOCALSTORAGE_NAME) || "[]";
    let favIcons: LocalStorageSavedItem[] = JSON.parse(savedFavIcons);

    if (favorite) {
      favIcons = favIcons.filter(
        (i) => i.pack !== currentPackageName || i.icon !== activeIcon
      );
    } else {
      favIcons.push({
        pack: currentPackageName,
        icon: activeIcon,
      });
    }

    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(favIcons));
    setFavorite(!favorite);
  };

  if (!currentPackage) {
    return <>Loading...</>;
  }

  return (
    <StyledContent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <StyledHeadBar columns={7}>
        <Cell width={4} top={1}>
          <StyledBreadcrumb>
            <a
              role="button"
              onClick={() => router.push("/")}
              className="homeIcon"
            >
              <Home3Icon />
            </a>
            <a role="button" onClick={handleClose(true)}>
              <h3>
                Package:<strong>{currentPackageName}</strong>
              </h3>
            </a>
            <h3>
              <strong>{activeIcon}</strong>
            </h3>
          </StyledBreadcrumb>
        </Cell>
        <Cell width={3} top={1}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
          <div role="button" onClick={handleClose()} className="close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <rect width="24" height="24" opacity="0" />
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z" />
            </svg>
          </div>
        </Cell>
      </StyledHeadBar>

      <StyledIconWrapper columns={24}>
        <Cell className="icon-wrapper" width={8}>
          <StyledIconHolder className={`${color} ${!data ? "loadingSvg" : ""}`}>
            <span dangerouslySetInnerHTML={{ __html: data || "" }} />
            <Star2Icon
              title="Mark as favorite"
              className={`starIcon ${favorite ? "active" : ""}`}
              onClick={handleSetFavIcon}
              role="button"
            />
          </StyledIconHolder>

          <a
            role="button"
            href={svgAddress}
            download={activeIcon}
            target="_blank"
            className="button button-green"
            rel="noreferrer"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                fill="#000000"
                d="M8 9l4-4h-3v-4h-2v4h-3zM11.636 7.364l-1.121 1.121 4.064 1.515-6.579 2.453-6.579-2.453 4.064-1.515-1.121-1.121-4.364 1.636v4l8 3 8-3v-4z"
              />
            </svg>
            Download svg
          </a>
          <div className="icon-license">
            {currentPackage.license ? `${currentPackage.license} license,` : ""}{" "}
            All rights reserved to{" "}
            <a
              href={currentPackage.owner?.url || ""}
              target="_blank"
              rel="noreferrer"
            >
              {currentPackage.owner?.name}
            </a>
          </div>
        </Cell>
        <Cell width={16} style={{ padding: "0 8px" }}>
          <h1 className="icon-name">{activeIcon}</h1>
          <div className="separator" />
          <StyledInfoItem>
            version:
            <span className="package-version">{currentPackage.version}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            package:
            <span className="package-name1">{currentPackage.package}</span>
          </StyledInfoItem>
          <StyledInfoItem>
            icons count:
            <span className="package-name1">
              {Object.keys(currentPackage.icons).length} icons
            </span>
          </StyledInfoItem>
          <StyledInfoItem>
            keywords:
            <StyledKeywords>
              {activeIcon &&
                iconKeywords.map((keyword: string) => (
                  <span key={keyword}>{keyword}</span>
                ))}
            </StyledKeywords>
            <StyledColors>
              <button
                className="color gray"
                onClick={handleColorChange("gray")}
              />
              <button
                className="color red"
                onClick={handleColorChange("red")}
              />
              <button
                className="color green"
                onClick={handleColorChange("green")}
              />
              <button
                className="color yellow"
                onClick={handleColorChange("yellow")}
              />
              <button
                className="color cyan"
                onClick={handleColorChange("cyan")}
              />
              <button
                className="color blue"
                onClick={handleColorChange("blue")}
              />
              <button
                className="color lime"
                onClick={handleColorChange("lime")}
              />
              <button
                className="color volcano"
                onClick={handleColorChange("volcano")}
              />
            </StyledColors>
          </StyledInfoItem>
        </Cell>
        <Cell width={24}>
          <div className="separator" />
          <Usage pack={currentPackage.package} icon={activeIcon} />
        </Cell>
      </StyledIconWrapper>
    </StyledContent>
  );
};

export default Icon;
