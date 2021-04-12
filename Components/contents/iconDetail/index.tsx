import React, { useState } from "react";
import { Cell } from "styled-css-grid";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { Home3Icon } from "@iconbox/iconly";

import { activeIconState } from "../../../Recoil/atoms";
import {
  StyledIconWrapper,
  StyledIconHolder,
  StyledBreadcrumb,
  StyledHeadBar,
  StyledContent,
  StyledColors,
  StyledKeywords,
} from "./styles";
import useSWR from "swr";
import {
  textFetcher as fetcher,
  makeFilePath,
  getMultiSynonyms,
} from "../../../Helpers";

const Icon = () => {
  const [color, setColor] = useState("");
  const [activeIcon, setActiveIcon] = useRecoilState(activeIconState);
  const router = useRouter();
  const page = (router.query.page as string) || "home";
  const currentPackage = (router.query.package as string) || "";

  /**
   * Get icon svg content
   */
  const svgAddress = makeFilePath(currentPackage, activeIcon);
  const { data, error } = useSWR(svgAddress, fetcher, {
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

  const handleColorChange = (colorName: string) => () => {
    setColor(colorName);
  };

  const handleClose = (forceHome?: boolean) => async () => {
    setActiveIcon("");
    let query = `/?page=${forceHome ? "home" : page}`;
    if (currentPackage) {
      query += `&package=${currentPackage}`;
    }
    await router.push(query);
  };

  return (
    <StyledContent>
      <StyledHeadBar columns={7}>
        <Cell width={4} top={1}>
          <StyledBreadcrumb>
            <a className="homeIcon">
              <Home3Icon />
            </a>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
            <a role="button" onClick={handleClose(true)}>
              <h3>
                Package:<strong>{currentPackage}</strong>
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
        <Cell width={8} top={1}>
          <StyledIconHolder
            className={color}
            dangerouslySetInnerHTML={{ __html: "" }}
          />

          <StyledColors>
            <button
              className="color gray"
              onClick={handleColorChange("gray")}
            />
            <button className="color red" onClick={handleColorChange("red")} />
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

          <a
            id="download-svg"
            href="#"
            download="#"
            target="_blank"
            className="button button-green"
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
          <div className="icon-license">licence</div>
        </Cell>
        <Cell width={16} className="icons-info">
          <h1 className="icon-name">{activeIcon}</h1>
          <div className="separator" />
          <div className="info-item">
            version:
            <span className="package-version">1.0.1-alpha.1</span>
          </div>
          <div className="info-item">
            package:
            <span className="package-name1">@snappmarket/Eva</span>
          </div>
          <div className="info-item">
            keywords:
            <StyledKeywords>
              {iconKeywords.map((keyword: string) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </StyledKeywords>
          </div>

          <div className="separator" />
          <div className="install-message">
            At first you need to install{" "}
            <span className="code package-name2">package/name</span> then use
            one of this import ways :
          </div>
          <div className="icon-usage">
            <div className="label">Component</div>
            <input
              type="text"
              className="code componentImport"
              value="import { Test } from '@iconbox/Snappmarket"
              readOnly
            />
          </div>
          <div className="icon-usage">
            <div className="label">Sprite ✮</div>
            <input
              type="text"
              className="code spriteImport"
              value="import { Test } from '@iconbox/Snappmarket/sprite"
              readOnly
            />
          </div>
          <div className="icon-usage">
            <div className="label">Svg icon</div>
            <input
              type="text"
              className="code svgImport"
              value="import Test from '@iconbox/Snappmarket/Test/index.svg"
              readOnly
            />
          </div>
        </Cell>
      </StyledIconWrapper>
    </StyledContent>
  );
};

export default Icon;
