import React, { useState } from "react";
import { Cell } from "styled-css-grid";
import { StyledHeadBar, StyledContent } from "./styles";
import SearchBox from "./components/seachBox";
import { Packages } from "../../../Helpers";
import PackageIcons from "../home/components/packageIcons";
import NotFound from "./components/notFound";
import { useRouter } from "next/router";

const Search = () => {
  const [loaded, setLoaded] = useState(false);
  const [searchResults, setSearchResults] = useState<Packages>({});
  const [openStatus, setOpenStatus] = useState<{ [pack: string]: boolean }>({});
  const router = useRouter();

  const onSearch = async (results: Packages, keyword: string) => {
    setSearchResults(results);
    setLoaded(true);
    await router.push(`/?page=search&key=${keyword}`);
  };

  const renderSearchResult = () => {
    return Object.keys(searchResults).map((pack) => {
      const currentPackage = searchResults[pack];
      // eslint-disable-next-line no-prototype-builtins
      const isOpen = openStatus[pack] || !openStatus.hasOwnProperty(pack);
      return (
        <div key={pack}>
          <StyledHeadBar columns={3}>
            <Cell width={2} top={1}>
              <h3>{pack}</h3>
              <span className="label">
                {Object.keys(currentPackage.icons).length}+
              </span>
              <span className="version">v{currentPackage.version}</span>
            </Cell>
            <Cell style={{ position: "relative" }} width={1} top={1}>
              <button
                onClick={() =>
                  setOpenStatus({ ...openStatus, [pack]: !isOpen })
                }
                className="toggleBtn"
              >
                {isOpen ? "-" : "+"}
              </button>
            </Cell>
          </StyledHeadBar>

          {isOpen && (
            <PackageIcons
              passedPackage={pack}
              icons={Object.keys(currentPackage.icons)}
            />
          )}
        </div>
      );
    });
  };

  return (
    <StyledContent>
      <StyledHeadBar columns={7}>
        <Cell width={4} top={1}>
          <h3>
            Search <strong>icon</strong>
          </h3>
        </Cell>
      </StyledHeadBar>
      <SearchBox onSearch={onSearch} />
      {Object.keys(searchResults).length
        ? renderSearchResult()
        : loaded && <NotFound />}
    </StyledContent>
  );
};

export default Search;
