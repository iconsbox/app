import * as React from "react";
import Head from 'next/head';
import { Grid, Cell } from "styled-css-grid"
import useSWR from "swr";

import { useSetRecoilState } from 'recoil';
import { packagesState } from '../Recoil/atoms'
import { textFetcher as fetcher } from '../Helpers'
import Sidebar from '../Components/sidebar'
import Content from '../Components/content'
import Panel from '../Components/panel'
import { StyledContainer, StyledAppMain, StyledLogoCube } from './styles';


export default function Home() {
  const setPackages = useSetRecoilState(packagesState);

  const packagesDataUrl = 'https://raw.githubusercontent.com/iconsbox/icons/master/app/data.js';
  const { data, error } = useSWR(packagesDataUrl, fetcher, {
    errorRetryCount: 3,
    errorRetryInterval: 2000,
  });
  const isLoading = !error && !data;

  if(!error && data) {
    setPackages(JSON.parse(data.replace("export default", '')));
  }

  return (
    <StyledContainer>
      <Head>
        <title>Iconbox App - v1.0.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledAppMain>
        {isLoading ? "loading" :
          <Grid columns={24} alignContent="stretch" gap={0}>
            <Cell width={3} height={1}>
              <Sidebar/>
            </Cell>
            <Cell width={14} height={1}>
              <Content/>
            </Cell>
            <Cell width={7} height={1}>
              <Panel/>
            </Cell>
          </Grid>
        }

        {/*<StyledLogoCube>*/}
        {/*  <div id='cube' className="show-jafar">*/}
        {/*    <figure className='front'>*/}
        {/*      Icon*/}
        {/*    </figure>*/}
        {/*    <figure className='back'>*/}
        {/*      Box*/}
        {/*    </figure>*/}
        {/*    <figure className='right'>*/}
        {/*      {randomEmoji()}*/}
        {/*    </figure>*/}
        {/*    <figure className='left'></figure>*/}
        {/*    <figure className='top'></figure>*/}
        {/*    <figure className='bottom'></figure>*/}
        {/*  </div>*/}
        {/*</StyledLogoCube>*/}
      </StyledAppMain>
    </StyledContainer>
  )
}
