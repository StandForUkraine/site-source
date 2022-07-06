import { useRouter } from 'next/router';
import Script from 'next/script';
import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import DeferredRender from '../core/components/DeferredRender';
import type { NextPageWithLayout } from './_app'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`

const CodeSandboxPage: NextPageWithLayout = () => {
  const router = useRouter();

  const search = Object.keys(router.query).map((key) => `${key}=${router.query[key]}`).join('&');

  if (search.length === 0) {
    return null;
  }

  return (
    <DeferredRender>
      <>
        <GlobalStyles />
        <Script
          id="sfuw"
          async={true}
          src={`https://cdn.jsdelivr.net/gh/StandForUkraine/site-widget@1.0/artifacts/index.iife.min.js?${search}`}
        />
        <SiteContent>Site content</SiteContent>
      </>
    </DeferredRender>
  )
}

const SiteContent = styled.h2`
  padding: 0 20px;
`;

CodeSandboxPage.getLayout = (page) => page;

export default CodeSandboxPage;
