import React, { useEffect, useState, RefObject } from "react";
import { Search3Icon } from "@iconbox/iconly";
import { Cell } from "styled-css-grid";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  StyledHeadBar,
  StyledContent,
  StyledSearchBox,
  StyledEmptyPackagesList,
  StyledLoading,
} from "./styles";
import {
  activePackageState,
  packagesState,
  pageResetState,
} from "../../../Recoil/atoms";
import { paginate, Package, Packages } from "../../../Helpers";
import useElementScroll from "../../../Helpers/useElementScroll";

const COUNT_PER_PAGE = 25;

const Content = ({
  scrollerRef,
}: {
  scrollerRef: RefObject<HTMLDivElement | undefined>;
}) => {
  const packages = useRecoilValue<Packages>(packagesState);
  const activePackage = useRecoilValue<string>(activePackageState);
  const [resetPages, setResetPages] = useRecoilState<boolean>(pageResetState);
  const currentPackage: Package = packages[activePackage];
  const allIcons = Object.keys(currentPackage?.icons || {});
  const [icons, setIcons] = useState<string[]>([]);
  const [page, setPage] = useState(0);

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
      <StyledHeadBar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            Search <strong>icon</strong>
          </h3>
        </Cell>
      </StyledHeadBar>

      <StyledSearchBox className="noselect">
        <Search3Icon />
        Search for icons
      </StyledSearchBox>

      {currentPackage ? (
        <>
          <StyledHeadBar columns={3}>
            <Cell width={2} top={1}>
              <h3>Search results for "Keyword"</h3>
              <span className="label">
                {Object.keys(currentPackage.icons).length}+
              </span>
              <span className="version">v{currentPackage.version}</span>
            </Cell>
            <Cell width={1} top={1}>
              results
            </Cell>
          </StyledHeadBar>

          {isLoading && <StyledLoading columns={1}>loading...</StyledLoading>}
        </>
      ) : (
        <StyledEmptyPackagesList>Enter keyword ...</StyledEmptyPackagesList>
      )}
    </StyledContent>
  );
};

export default Content;
