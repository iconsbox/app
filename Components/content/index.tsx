import React from "react";
import { Search3Icon } from "@iconbox/iconly";
import { Cell } from "styled-css-grid";
import { useRecoilValue } from "recoil";
import ChoosePackage from "./partials/choosePackage";
import PackageIcons from "./partials/packageIcons";
import {
  StyledHeadbar,
  StyledContent,
  StyledSearchBox,
  StyledPackageInfo,
  StyledEmptyPackagesList,
} from "./styles";
import { activePackageState, packagesState } from "../../Recoil/atoms";

const Content = () => {
  const packages = useRecoilValue(packagesState);
  const activePackage = useRecoilValue(activePackageState);
  const currentPackage = packages[activePackage];

  return (
    <StyledContent>
      <StyledHeadbar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            Choose
            <strong>package</strong>
          </h3>
        </Cell>
        <Cell width={3} top={1}>
          <StyledSearchBox className="noselect">
            <Search3Icon />
            Search for icons
          </StyledSearchBox>
        </Cell>
      </StyledHeadbar>
      <ChoosePackage />

      {currentPackage ? (
        <>
          <StyledHeadbar columns={3}>
            <Cell width={2} top={1}>
              <h3>{activePackage}</h3>
              <span className="label">
                {Object.keys(currentPackage.icons).length}+
              </span>
              <span className="version">v{currentPackage.version}</span>
            </Cell>
            <Cell width={1} top={1}>
              <StyledPackageInfo className="noselect">
                ...
                {/*<div className="tooltip">*/}
                {/*  {currentPackage.license ? (*/}
                {/*    <>*/}
                {/*      Licence:*/}
                {/*      <strong>{currentPackage.license}</strong>*/}
                {/*      <br />*/}
                {/*      <br />*/}
                {/*    </>*/}
                {/*  ) : (*/}
                {/*    ""*/}
                {/*  )}*/}
                {/*  <span>*/}
                {/*    All right reserved to{" "}*/}
                {/*    <a*/}
                {/*      href={currentPackage.owner.url || ""}*/}
                {/*      target="_blank"*/}
                {/*      rel="noreferrer"*/}
                {/*    >*/}
                {/*      {currentPackage.owner.name}*/}
                {/*    </a>*/}
                {/*  </span>*/}
                {/*</div>*/}
              </StyledPackageInfo>
            </Cell>
          </StyledHeadbar>
          <PackageIcons />
        </>
      ) : (
        <StyledEmptyPackagesList>Choose pack ...</StyledEmptyPackagesList>
      )}
    </StyledContent>
  );
};

export default Content;
