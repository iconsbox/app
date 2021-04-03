import * as React from "react";
import { useRef } from "react";
import Head from "next/head";
import { Grid } from "styled-css-grid";
import useSWR from "swr";
import { useSetRecoilState } from "recoil";

import { packagesState } from "../Recoil/atoms";
import { textFetcher as fetcher, Packages } from "../Helpers";
import useCurrentBreakpoint from "../Helpers/useCurrentBreakpoint";
import Sidebar from "../Components/sidebar";
import Content from "../Components/content";
import LogoCube from "../Components/LogoCube/LogoCube";
import {
  StyledContainer,
  StyledAppMain,
  StyledSidebarCell,
  StyledContentCell,
} from "../styles/global";

export default function Home() {
  const setPackages = useSetRecoilState<Packages>(packagesState);
  const currentBreakpoint = useCurrentBreakpoint();
  const scrollerRef = useRef<HTMLDivElement>();
  const isMobile = currentBreakpoint === "mobile";

  const packagesDataUrl =
    "https://raw.githubusercontent.com/iconsbox/icons/master/app/data.js";
  const { data, error } = useSWR(packagesDataUrl, fetcher, {
    errorRetryCount: 3,
    errorRetryInterval: 2000,
  });
  const isLoading = !error && !data;

  React.useEffect(() => {
    if (!error && data) {
      setPackages(JSON.parse(data.replace("export default", "")));
    }
  }, [data, error, setPackages]);

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
              <Sidebar />
            </StyledSidebarCell>
            <StyledContentCell
              className={isMobile ? "isMobile" : ""}
              width={isMobile ? 17 : 14}
              height={1}
              ref={scrollerRef}
            >
              <Content scrollerRef={scrollerRef} />
            </StyledContentCell>
          </Grid>
        )}

        <LogoCube
          fixed={isLoading}
          className={`${!isLoading ? "loaded" : ""} ${
            isMobile && !isLoading ? "hide" : ""
          }`}
        />
      </StyledAppMain>
    </StyledContainer>
  );
}
