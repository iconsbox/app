import { useRef, useEffect } from "react";
import Head from "next/head";
import { Grid } from "styled-css-grid";
import useSWR from "swr";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";

import {
  packagesState,
  activePackageState,
  activeIconState,
} from "../Recoil/atoms";
import { textFetcher as fetcher, Packages } from "../Helpers";
import useCurrentBreakpoint from "../Helpers/useCurrentBreakpoint";
import Sidebar from "../Components/layout/sidebar";
import Home from "../Components/contents/home";
import Search from "../Components/contents/search";
import Donate from "../Components/contents/donate";
import IconDetail from "../Components/contents/iconDetail";
import Settings from "../Components/contents/settings";
import LogoCube from "../Components/layout/LogoCube/LogoCube";
import Favorites from "../Components/contents/favorites";
import {
  StyledContainer,
  StyledAppMain,
  StyledSidebarCell,
  StyledContentCell,
} from "../styles/global";
import { AnimatePresence } from "framer-motion";

function Main() {
  const setPackages = useSetRecoilState<Packages>(packagesState);
  const setActivePackage = useSetRecoilState<string>(activePackageState);
  const setActiveIcon = useSetRecoilState<string>(activeIconState);
  const currentBreakpoint = useCurrentBreakpoint();
  const scrollerRef = useRef<HTMLDivElement>();
  const router = useRouter();
  const isMobile = currentBreakpoint === "mobile";
  const page = (router.query.page as string) || "home";
  const currentPackage = (router.query.package as string) || "";
  const activeIcon = (router.query.icon as string) || "";

  // Initial states
  useEffect(() => {
    setActivePackage(currentPackage);
  }, [currentPackage, setActivePackage]);

  useEffect(() => {
    setActiveIcon(activeIcon);
  }, [activeIcon, setActiveIcon]);

  const { data, error } = useSWR(
    "https://raw.githubusercontent.com/iconsbox/icons/master/packages/data.js",
    fetcher,
    {
      errorRetryCount: 3,
      errorRetryInterval: 2000,
    }
  );
  const isLoading = !error && !data;

  useEffect(() => {
    if (!error && data) {
      setPackages(JSON.parse(data.replace("export default", "")));
    }
  }, [data, error, setPackages]);

  const lookupPages: { [name: string]: any } = {
    home: Home,
    search: Search,
    favorites: Favorites,
    donate: Donate,
    settings: Settings,
  };
  const Content = lookupPages[page] || Home;

  return (
    <StyledContainer>
      <Head>
        <title>Iconbox App - v2.1.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledAppMain>
        {!isLoading && (
          <Grid gap="0" columns={17} alignContent="stretch">
            <StyledSidebarCell
              className={isMobile ? "isMobile" : ""}
              width={isMobile ? 1 : 3}
              height={1}
            >
              <Sidebar page={page} />
            </StyledSidebarCell>
            <StyledContentCell
              className={isMobile ? "isMobile" : ""}
              width={isMobile ? 17 : 14}
              height={1}
              ref={scrollerRef}
            >
              <AnimatePresence>
                <Content scrollerRef={scrollerRef} />
              </AnimatePresence>
              {Boolean(activeIcon) && <IconDetail />}
            </StyledContentCell>
          </Grid>
        )}

        <LogoCube
          fixed={isLoading}
          className={`loadingCube ${!isLoading ? "loaded" : ""} ${
            isMobile && !isLoading ? "hide" : ""
          }`}
        />
      </StyledAppMain>
    </StyledContainer>
  );
}

export default Main;
