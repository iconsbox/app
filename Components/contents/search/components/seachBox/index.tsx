import { Search2Icon } from "@iconbox/iconly";
import { AnimatePresence } from "framer-motion";
import {
  StyledFiltersWrapper,
  StyledSearchBox,
  StyledSearchButton,
  FormItem,
} from "./styles";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Packages, getSynonyms } from "../../../../../Helpers";
import { packagesState } from "../../../../../Recoil/atoms";
import { useDebounce } from "use-debounce";

type Props = {
  onSearch: (results: Packages, keyword: string) => void;
};

type Filters = {
  packageName?: string;
  iconsStyle?: string;
};

function SearchBox({ onSearch }: Props) {
  const packages = useRecoilValue<Packages>(packagesState);
  const [keyword, setKeyword] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState<Filters>({});
  const [keywordDebounced] = useDebounce(keyword, 600);
  const [filtersDebounced] = useDebounce(JSON.stringify(filters), 300);

  const doSearch = useCallback(() => {
    if (keyword.length > 1) {
      const keywordSynonyms = getSynonyms(keyword);
      const searchResultData: any = {};
      const tempPackages = filters?.packageName
        ? { [filters.packageName]: packages[filters.packageName] }
        : packages;

      Object.keys(tempPackages).forEach((pack) => {
        const { icons, package: npmPackage, version: npmVersion } = packages[
          pack
        ];
        Object.keys(icons).forEach((icon) => {
          const currentIcon = icons[icon];
          const iconSplit = icon
            .replace(/([a-z](?=[A-Z]))/g, "$1 ")
            .toLowerCase()
            .split(" ");

          const isSynonym = iconSplit.some((r) => keywordSynonyms.includes(r));

          /**
           * Check if icons name or keywords looks like search term
           */
          if (
            icon.toLowerCase() === keyword ||
            iconSplit.some((r) => r.startsWith(keyword)) ||
            isSynonym
          ) {
            /**
             * Check if we add this package or it is new
             */
            // currentIcon.lowPriority = isSynonym;
            if (searchResultData[pack]) {
              searchResultData[pack].icons[icon] = currentIcon;
            } else {
              searchResultData[pack] = {
                package: npmPackage,
                version: npmVersion,
                icons: {
                  [icon]: currentIcon,
                },
              };
            }
          }
        });
      });
      onSearch(searchResultData, keyword);
    }
  }, [filters.packageName, keyword, onSearch, packages]);

  useEffect(() => {
    doSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywordDebounced, filtersDebounced]);

  const iconStyles = ["colorfull", "line", "bold", "duotone", "twotone"];

  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    doSearch();
  };

  const handleSelectPackageFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value !== "all") {
      setFilters({ ...filters, packageName: value });
    } else {
      setFilters({ ...filters, packageName: "" });
    }
  };

  const handleSelectIconStyleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, iconsStyle: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <StyledSearchBox className="noselect">
        <input
          type="text"
          placeholder="Enter keyword ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="button"
          className="filter"
          onClick={() => setShowFilters(!showFilters)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6" />
          </svg>
        </button>

        <StyledSearchButton className="button button-green" type="submit">
          <Search2Icon className="searchIcon" />
          Search
        </StyledSearchButton>
      </StyledSearchBox>

      <AnimatePresence>
        {showFilters && (
          <StyledFiltersWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, y: -20 }}
          >
            <FormItem>
              Package{" "}
              <select
                onChange={handleSelectPackageFilter}
                onBlur={handleSelectPackageFilter}
              >
                <option key="all" value="all">
                  All
                </option>
                {Object.keys(packages).map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </FormItem>
            <FormItem>
              Icon style{" "}
              <select
                onChange={handleSelectIconStyleFilter}
                onBlur={handleSelectIconStyleFilter}
                disabled
              >
                {iconStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </FormItem>
          </StyledFiltersWrapper>
        )}
      </AnimatePresence>
    </form>
  );
}

export default SearchBox;
