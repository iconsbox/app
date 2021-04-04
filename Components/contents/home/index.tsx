import React, { useEffect, useState, RefObject } from "react";
import { Search3Icon } from "@iconbox/iconly";
import { Cell } from "styled-css-grid";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import ChoosePackage from "./partials/choosePackage";
import PackageIcons from "./partials/packageIcons";

import {
  activePackageState,
  packagesState,
  pageResetState,
} from "../../../Recoil/atoms";
import {
  paginate,
  Package,
  Packages,
  useElementScroll,
} from "../../../Helpers";
import {
  StyledHeadbar,
  StyledContent,
  StyledSearchBox,
  StyledPackageInfo,
  StyledEmptyPackagesList,
  StyledLoading,
} from "./styles";

const COUNT_PER_PAGE = 25;
type Props = {
  scrollerRef: RefObject<HTMLDivElement | undefined>;
};

const Content = ({ scrollerRef }: Props) => {
  const packages = useRecoilValue<Packages>(packagesState);
  const activePackage = useRecoilValue<string>(activePackageState);
  const [resetPages, setResetPages] = useRecoilState<boolean>(pageResetState);
  const currentPackage: Package = packages[activePackage];
  const allIcons = Object.keys(currentPackage?.icons || {});
  const [icons, setIcons] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const router = useRouter();

  const isLoading = allIcons.length > page * COUNT_PER_PAGE;
  useElementScroll({
    reference: scrollerRef,
    callback() {
      if (isLoading) {
        setPage((page) => page + 1);
      }
    },
  });

  useEffect(() => {
    const tempIcons = paginate(allIcons, COUNT_PER_PAGE, page + 1);
    if (page > 0 && !resetPages) {
      setIcons([...icons, ...tempIcons]);
    } else {
      setPage(0);
      setResetPages(false);
      setIcons(tempIcons);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(currentPackage), page]);

  return (
    <StyledContent>
      <StyledHeadbar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            Choose <strong>package</strong>
          </h3>
        </Cell>
        <Cell width={3} top={1}>
          <StyledSearchBox
            onClick={() => router.push("/?page=search")}
            className="noselect"
          >
            <Search3Icon />
            Search on over 32k icon...
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

          {isLoading && <StyledLoading columns={1}>loading...</StyledLoading>}
        </>
      ) : (
        <StyledEmptyPackagesList>Choose pack ...</StyledEmptyPackagesList>
      )}
    </StyledContent>
  );
};

export default Content;
