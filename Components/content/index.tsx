import React, { useState } from "react";
import { Search3Icon } from "@iconbox/iconly";
import { Cell } from "styled-css-grid";
import { useRecoilValue } from "recoil";
import useDidUpdateEffect from "../../Helpers/useDidUpdateEffect";
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
import useInfiniteScroll from "react-infinite-scroll-hook";
import { paginate, Package, Packages } from "../../Helpers";

const COUNT_PER_PAGE = 25;

const Content = () => {
  const packages = useRecoilValue<Packages>(packagesState);
  const activePackage = useRecoilValue<string>(activePackageState);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const currentPackage: Package = packages[activePackage];
  const allIcons = Object.keys(currentPackage?.icons || {});
  const [icons, setIcons] = useState<string[]>();

  useDidUpdateEffect(() => {
    console.log("Page changes");
    setIcons(paginate(allIcons, 25, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(currentPackage), page]);

  console.log("allIcons.length", allIcons);
  const handleGetMoreIcons = () => {
    console.log("Getting more icons ");
    setPage(page + 1);
    if (page * COUNT_PER_PAGE > allIcons.length) {
      setHasNextPage(false);
    }
    if (!hasNextPage) {
      setHasNextPage(true);
    }
  };
  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading: false,
    hasNextPage: true,
    onLoadMore: handleGetMoreIcons,
    scrollContainer: "parent",
  });

  return (
    <StyledContent ref={infiniteRef}>
      <StyledHeadbar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            Choose <strong>package</strong>
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
          <PackageIcons icons={icons} />
        </>
      ) : (
        <StyledEmptyPackagesList>Choose pack ...</StyledEmptyPackagesList>
      )}
    </StyledContent>
  );
};

export default Content;
